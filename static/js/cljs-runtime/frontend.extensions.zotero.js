goog.provide('frontend.extensions.zotero');
frontend.extensions.zotero.term_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
frontend.extensions.zotero.debounce_chan_mult = cljs.core.async.mult(frontend.extensions.zotero.api.debounce(frontend.extensions.zotero.term_chan,(500)));
frontend.extensions.zotero.zotero_search_item = rum.core.lazy_build(rum.core.build_defc,(function (p__58024,id){
var map__58025 = p__58024;
var map__58025__$1 = cljs.core.__destructure_map(map__58025);
var item = map__58025__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58025__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var vec__58026 = rum.core.use_state(false);
var is_creating_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58026,(0),null);
var set_is_creating_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58026,(1),null);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
var type = new cljs.core.Keyword(null,"item-type","item-type",-73995695).cljs$core$IFn$_invoke$arity$1(data);
var abstract$ = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968).cljs$core$IFn$_invoke$arity$1(data),(0),(200)),"..."].join('');
return daiquiri.core.create_element("div",{'onClick':(function (){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58038){
var state_val_58039 = (state_58038[(1)]);
if((state_val_58039 === (1))){
var inst_58029 = (set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_is_creating_page_BANG_.call(null,true));
var inst_58030 = [new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027)];
var inst_58031 = [id];
var inst_58032 = cljs.core.PersistentHashMap.fromArrays(inst_58030,inst_58031);
var inst_58033 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(item,inst_58032);
var state_58038__$1 = (function (){var statearr_58040 = state_58038;
(statearr_58040[(7)] = inst_58029);

return statearr_58040;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58038__$1,(2),inst_58033);
} else {
if((state_val_58039 === (2))){
var inst_58035 = (state_58038[(2)]);
var inst_58036 = (set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_is_creating_page_BANG_.call(null,false));
var state_58038__$1 = (function (){var statearr_58041 = state_58038;
(statearr_58041[(8)] = inst_58035);

return statearr_58041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58038__$1,inst_58036);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58042 = [null,null,null,null,null,null,null,null,null];
(statearr_58042[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58042[(1)] = (1));

return statearr_58042;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58038){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58038);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58043){var ex__27576__auto__ = e58043;
var statearr_58044_58408 = state_58038;
(statearr_58044_58408[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58038[(4)]))){
var statearr_58045_58409 = state_58038;
(statearr_58045_58409[(1)] = cljs.core.first((state_58038[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58410 = state_58038;
state_58038 = G__58410;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58038){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58046 = f__27596__auto__();
(statearr_58046[(6)] = c__27595__auto__);

return statearr_58046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}),'className':"zotero-search-item px-2 py-4 border-b cursor-pointer border-solid last:border-none relative"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold.mb-1.mr-1","span.font-bold.mb-1.mr-1",469152989),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zotero-search-item-type.text-xs.p-1.rounded","span.zotero-search-item-type.text-xs.p-1.rounded",1831300718),type], null)], null)], null),(function (){var attrs58047 = abstract$;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58047))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs58047], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs58047))?null:[attrs58047]));
})()], null)),(cljs.core.truth_(is_creating_page)?daiquiri.core.create_element("div",{'className':"zotero-search-item-loading-indicator"},[(function (){var attrs58048 = frontend.components.svg.refresh;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58048))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["animate-spin-reverse"], null)], null),attrs58048], 0))):{'className':"animate-spin-reverse"}),((cljs.core.map_QMARK_(attrs58048))?null:[daiquiri.interpreter.interpret(attrs58048)]));
})()]):null)]);
}),null,"frontend.extensions.zotero/zotero-search-item");
frontend.extensions.zotero.zotero_search = rum.core.lazy_build(rum.core.build_defc,(function (id){
var vec__58049 = rum.core.use_state("");
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58049,(0),null);
var set_term_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58049,(1),null);
var vec__58052 = rum.core.use_state(cljs.core.PersistentVector.EMPTY);
var search_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58052,(0),null);
var set_search_result_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58052,(1),null);
var vec__58055 = rum.core.use_state("");
var prev_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58055,(0),null);
var set_prev_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58055,(1),null);
var vec__58058 = rum.core.use_state("");
var next_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58058,(0),null);
var set_next_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58058,(1),null);
var vec__58061 = rum.core.use_state("");
var prev_search_term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58061,(0),null);
var set_prev_search_term_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58061,(1),null);
var vec__58064 = rum.core.use_state(null);
var search_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58064,(0),null);
var set_search_error_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58064,(1),null);
var vec__58067 = rum.core.use_state(false);
var is_searching = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(0),null);
var set_is_searching_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(1),null);
var search_fn = (function (s_term,start){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58098){
var state_val_58099 = (state_58098[(1)]);
if((state_val_58099 === (1))){
var inst_58070 = clojure.string.blank_QMARK_(s_term);
var state_58098__$1 = state_58098;
if(inst_58070){
var statearr_58100_58411 = state_58098__$1;
(statearr_58100_58411[(1)] = (2));

} else {
var statearr_58101_58412 = state_58098__$1;
(statearr_58101_58412[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58099 === (2))){
var state_58098__$1 = state_58098;
var statearr_58102_58413 = state_58098__$1;
(statearr_58102_58413[(2)] = null);

(statearr_58102_58413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58099 === (3))){
var inst_58073 = (set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_is_searching_BANG_.call(null,true));
var inst_58075 = frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2(s_term,start);
var state_58098__$1 = (function (){var statearr_58103 = state_58098;
(statearr_58103[(7)] = inst_58073);

return statearr_58103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58098__$1,(5),inst_58075);
} else {
if((state_val_58099 === (4))){
var inst_58096 = (state_58098[(2)]);
var state_58098__$1 = state_58098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58098__$1,inst_58096);
} else {
if((state_val_58099 === (5))){
var inst_58078 = (state_58098[(8)]);
var inst_58077 = (state_58098[(2)]);
var inst_58078__$1 = cljs.core.__destructure_map(inst_58077);
var inst_58079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58078__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58078__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_58081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58078__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_58082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58078__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_58083 = inst_58079 === false;
var state_58098__$1 = (function (){var statearr_58104 = state_58098;
(statearr_58104[(9)] = inst_58081);

(statearr_58104[(8)] = inst_58078__$1);

(statearr_58104[(10)] = inst_58080);

(statearr_58104[(11)] = inst_58082);

return statearr_58104;
})();
if(cljs.core.truth_(inst_58083)){
var statearr_58105_58414 = state_58098__$1;
(statearr_58105_58414[(1)] = (6));

} else {
var statearr_58106_58415 = state_58098__$1;
(statearr_58106_58415[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58099 === (6))){
var inst_58078 = (state_58098[(8)]);
var inst_58085 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_58078);
var inst_58086 = (set_search_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_error_BANG_.cljs$core$IFn$_invoke$arity$1(inst_58085) : set_search_error_BANG_.call(null,inst_58085));
var state_58098__$1 = state_58098;
var statearr_58107_58416 = state_58098__$1;
(statearr_58107_58416[(2)] = inst_58086);

(statearr_58107_58416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58099 === (7))){
var inst_58081 = (state_58098[(9)]);
var inst_58080 = (state_58098[(10)]);
var inst_58082 = (state_58098[(11)]);
var inst_58088 = (set_prev_search_term_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prev_search_term_BANG_.cljs$core$IFn$_invoke$arity$1(s_term) : set_prev_search_term_BANG_.call(null,s_term));
var inst_58089 = (set_next_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_next_page_BANG_.cljs$core$IFn$_invoke$arity$1(inst_58080) : set_next_page_BANG_.call(null,inst_58080));
var inst_58090 = (set_prev_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prev_page_BANG_.cljs$core$IFn$_invoke$arity$1(inst_58081) : set_prev_page_BANG_.call(null,inst_58081));
var inst_58091 = (set_search_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_result_BANG_.cljs$core$IFn$_invoke$arity$1(inst_58082) : set_search_result_BANG_.call(null,inst_58082));
var state_58098__$1 = (function (){var statearr_58108 = state_58098;
(statearr_58108[(12)] = inst_58089);

(statearr_58108[(13)] = inst_58088);

(statearr_58108[(14)] = inst_58090);

return statearr_58108;
})();
var statearr_58109_58417 = state_58098__$1;
(statearr_58109_58417[(2)] = inst_58091);

(statearr_58109_58417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58099 === (8))){
var inst_58093 = (state_58098[(2)]);
var inst_58094 = (set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_is_searching_BANG_.call(null,false));
var state_58098__$1 = (function (){var statearr_58110 = state_58098;
(statearr_58110[(15)] = inst_58093);

return statearr_58110;
})();
var statearr_58111_58418 = state_58098__$1;
(statearr_58111_58418[(2)] = inst_58094);

(statearr_58111_58418[(1)] = (4));


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
var statearr_58112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58112[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58112[(1)] = (1));

return statearr_58112;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58098){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58098);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58113){var ex__27576__auto__ = e58113;
var statearr_58114_58419 = state_58098;
(statearr_58114_58419[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58098[(4)]))){
var statearr_58115_58420 = state_58098;
(statearr_58115_58420[(1)] = cljs.core.first((state_58098[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58421 = state_58098;
state_58098 = G__58421;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58098){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58116 = f__27596__auto__();
(statearr_58116[(6)] = c__27595__auto__);

return statearr_58116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var d_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.debounce_chan_mult,d_chan);

var c__27595__auto___58422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58127){
var state_val_58128 = (state_58127[(1)]);
if((state_val_58128 === (1))){
var state_58127__$1 = state_58127;
var statearr_58129_58423 = state_58127__$1;
(statearr_58129_58423[(2)] = null);

(statearr_58129_58423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58128 === (2))){
var state_58127__$1 = state_58127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58127__$1,(4),d_chan);
} else {
if((state_val_58128 === (3))){
var inst_58125 = (state_58127[(2)]);
var state_58127__$1 = state_58127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58127__$1,inst_58125);
} else {
if((state_val_58128 === (4))){
var inst_58119 = (state_58127[(2)]);
var inst_58120 = search_fn(inst_58119,"0");
var state_58127__$1 = state_58127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58127__$1,(5),inst_58120);
} else {
if((state_val_58128 === (5))){
var inst_58122 = (state_58127[(2)]);
var state_58127__$1 = (function (){var statearr_58130 = state_58127;
(statearr_58130[(7)] = inst_58122);

return statearr_58130;
})();
var statearr_58131_58424 = state_58127__$1;
(statearr_58131_58424[(2)] = null);

(statearr_58131_58424[(1)] = (2));


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
var statearr_58132 = [null,null,null,null,null,null,null,null];
(statearr_58132[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58132[(1)] = (1));

return statearr_58132;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58127){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58127);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58133){var ex__27576__auto__ = e58133;
var statearr_58134_58425 = state_58127;
(statearr_58134_58425[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58127[(4)]))){
var statearr_58135_58426 = state_58127;
(statearr_58135_58426[(1)] = cljs.core.first((state_58127[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58427 = state_58127;
state_58127 = G__58427;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58127){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58136 = f__27596__auto__();
(statearr_58136[(6)] = c__27595__auto___58422);

return statearr_58136;
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
var c__27595__auto___58428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58142){
var state_val_58143 = (state_58142[(1)]);
if((state_val_58143 === (1))){
var inst_58138 = frontend.util.evalue(e);
var state_58142__$1 = state_58142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58142__$1,(2),frontend.extensions.zotero.term_chan,inst_58138);
} else {
if((state_val_58143 === (2))){
var inst_58140 = (state_58142[(2)]);
var state_58142__$1 = state_58142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58142__$1,inst_58140);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58144 = [null,null,null,null,null,null,null];
(statearr_58144[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58144[(1)] = (1));

return statearr_58144;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58142){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58142);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58145){var ex__27576__auto__ = e58145;
var statearr_58146_58429 = state_58142;
(statearr_58146_58429[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58142[(4)]))){
var statearr_58147_58430 = state_58142;
(statearr_58147_58430[(1)] = cljs.core.first((state_58142[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58431 = state_58142;
state_58142 = G__58431;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58142){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58148 = f__27596__auto__();
(statearr_58148[(6)] = c__27595__auto___58428);

return statearr_58148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


var G__58149 = frontend.util.evalue(e);
return (set_term_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_term_BANG_.cljs$core$IFn$_invoke$arity$1(G__58149) : set_term_BANG_.call(null,G__58149));
})], null)], null),daiquiri.core.create_element("span",{'style':{'visibility':(cljs.core.truth_(is_searching)?"visible":"hidden")},'className':"animate-spin-reverse"},[daiquiri.interpreter.interpret(frontend.components.svg.refresh)])], null))]),daiquiri.core.create_element("div",{'className':"h-2 text-sm text-red-400 mb-2"},[(cljs.core.truth_(search_error)?["Search error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_error)].join(''):"")]),(function (){var attrs58137 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return rum.core.with_key(frontend.extensions.zotero.zotero_search_item(item,id),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
}),search_result);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58137))?daiquiri.interpreter.element_attributes(attrs58137):null),((cljs.core.map_QMARK_(attrs58137))?[((clojure.string.blank_QMARK_(prev_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("prev",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58165){
var state_val_58166 = (state_58165[(1)]);
if((state_val_58166 === (1))){
var inst_58161 = search_fn(prev_search_term,prev_page);
var state_58165__$1 = state_58165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58165__$1,(2),inst_58161);
} else {
if((state_val_58166 === (2))){
var inst_58163 = (state_58165[(2)]);
var state_58165__$1 = state_58165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58165__$1,inst_58163);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58167 = [null,null,null,null,null,null,null];
(statearr_58167[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58167[(1)] = (1));

return statearr_58167;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58165){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58165);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58168){var ex__27576__auto__ = e58168;
var statearr_58169_58432 = state_58165;
(statearr_58169_58432[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58165[(4)]))){
var statearr_58170_58433 = state_58165;
(statearr_58170_58433[(1)] = cljs.core.first((state_58165[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58434 = state_58165;
state_58165 = G__58434;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58165){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58171 = f__27596__auto__();
(statearr_58171[(6)] = c__27595__auto__);

return statearr_58171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0)))),((clojure.string.blank_QMARK_(next_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("next",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58187){
var state_val_58188 = (state_58187[(1)]);
if((state_val_58188 === (1))){
var inst_58183 = search_fn(prev_search_term,next_page);
var state_58187__$1 = state_58187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58187__$1,(2),inst_58183);
} else {
if((state_val_58188 === (2))){
var inst_58185 = (state_58187[(2)]);
var state_58187__$1 = state_58187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58187__$1,inst_58185);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58189 = [null,null,null,null,null,null,null];
(statearr_58189[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58189[(1)] = (1));

return statearr_58189;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58187){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58187);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58190){var ex__27576__auto__ = e58190;
var statearr_58191_58435 = state_58187;
(statearr_58191_58435[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58187[(4)]))){
var statearr_58192_58436 = state_58187;
(statearr_58192_58436[(1)] = cljs.core.first((state_58187[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58437 = state_58187;
state_58187 = G__58437;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58187){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58193 = f__27596__auto__();
(statearr_58193[(6)] = c__27595__auto__);

return statearr_58193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0))))]:[daiquiri.interpreter.interpret(attrs58137),((clojure.string.blank_QMARK_(prev_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("prev",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58209){
var state_val_58210 = (state_58209[(1)]);
if((state_val_58210 === (1))){
var inst_58205 = search_fn(prev_search_term,prev_page);
var state_58209__$1 = state_58209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58209__$1,(2),inst_58205);
} else {
if((state_val_58210 === (2))){
var inst_58207 = (state_58209[(2)]);
var state_58209__$1 = state_58209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58209__$1,inst_58207);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58211 = [null,null,null,null,null,null,null];
(statearr_58211[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58211[(1)] = (1));

return statearr_58211;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58209){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58209);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58212){var ex__27576__auto__ = e58212;
var statearr_58213_58438 = state_58209;
(statearr_58213_58438[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58209[(4)]))){
var statearr_58214_58439 = state_58209;
(statearr_58214_58439[(1)] = cljs.core.first((state_58209[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58440 = state_58209;
state_58209 = G__58440;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58209){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58215 = f__27596__auto__();
(statearr_58215[(6)] = c__27595__auto__);

return statearr_58215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0)))),((clojure.string.blank_QMARK_(next_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("next",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58231){
var state_val_58232 = (state_58231[(1)]);
if((state_val_58232 === (1))){
var inst_58227 = search_fn(prev_search_term,next_page);
var state_58231__$1 = state_58231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58231__$1,(2),inst_58227);
} else {
if((state_val_58232 === (2))){
var inst_58229 = (state_58231[(2)]);
var state_58231__$1 = state_58231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58231__$1,inst_58229);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58233 = [null,null,null,null,null,null,null];
(statearr_58233[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58233[(1)] = (1));

return statearr_58233;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58231){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58231);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58234){var ex__27576__auto__ = e58234;
var statearr_58235_58441 = state_58231;
(statearr_58235_58441[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58231[(4)]))){
var statearr_58236_58442 = state_58231;
(statearr_58236_58442[(1)] = cljs.core.first((state_58231[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58443 = state_58231;
state_58231 = G__58443;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58231){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58237 = f__27596__auto__();
(statearr_58237[(6)] = c__27595__auto__);

return statearr_58237;
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
})),'className':"form-select"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$extensions$zotero$iter__58240(s__58241){
return (new cljs.core.LazySeq(null,(function (){
var s__58241__$1 = s__58241;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58241__$1);
if(temp__5720__auto__){
var s__58241__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58241__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58241__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58243 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58242 = (0);
while(true){
if((i__58242 < size__5519__auto__)){
var type = cljs.core._nth(c__5518__auto__,i__58242);
cljs.core.chunk_append(b__58243,daiquiri.core.create_element("option",{'key':type,'value':type},[clojure.string.capitalize(type)]));

var G__58444 = (i__58242 + (1));
i__58242 = G__58444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58243),frontend$extensions$zotero$iter__58240(cljs.core.chunk_rest(s__58241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58243),null);
}
} else {
var type = cljs.core.first(s__58241__$2);
return cljs.core.cons(daiquiri.core.create_element("option",{'key':type,'value':type},[clojure.string.capitalize(type)]),frontend$extensions$zotero$iter__58240(cljs.core.rest(s__58241__$2)));
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
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_overwrite_mode"},["Overwrite existing item page?"]),daiquiri.core.create_element("div",null,[(function (){var attrs58248 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58248))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs58248], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs58248))?null:[daiquiri.interpreter.interpret(attrs58248)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409)))?daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-500","p.text-red-500",1193745313),"Dangerous! This will delete and recreate Zotero existing page! Make sure to backup your notes first in case something goes wrong. Make sure you don't put any personal item in previous Zotero page and it's OK to overwrite the page!"], null))):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/overwrite-mode-setting");
frontend.extensions.zotero.attachment_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_include_attachment_links"},["Include attachment links?"]),daiquiri.core.create_element("div",null,[(function (){var attrs58251 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58251))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs58251], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs58251))?null:[daiquiri.interpreter.interpret(attrs58251)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_attachments_block_text"},["Attachment under block of:"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244)),'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_linked_attachment_base_directory"},["Zotero linked attachment base directory",daiquiri.core.create_element("a",{'title':"If you store attached files in Zotero \u2014 the default \u2014 this setting does not affect you. It only applies to linked files. If you're using the ZotFile plugin to help with a linked-file workflow, you should configure it to store linked files within the base directory you've configured. Click to learn more.",'href':"https://www.zotero.org/support/preferences/advanced#linked_attachment_base_directory",'target':"_blank",'className':"ml-2"},[daiquiri.interpreter.interpret(frontend.components.svg.info())])]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)),'placeholder':"/Users/Sarah/Dropbox",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/attachment-setting");
frontend.extensions.zotero.prefer_citekey_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'title':"Make sure to install Better BibTeX and pin your item first",'className':"title w-72",'htmlFor':"zotero_prefer_citekey"},["Use citekey as your page title?"]),daiquiri.core.create_element("div",null,[(function (){var attrs58256 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58256))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs58256], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs58256))?null:[daiquiri.interpreter.interpret(attrs58256)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/prefer-citekey-setting");
frontend.extensions.zotero.api_key_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_api_key"},["Zotero API key"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.api_key(),'placeholder':"Please enter your Zotero API key",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_api_key(frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]);
}),null,"frontend.extensions.zotero/api-key-setting");
frontend.extensions.zotero.notes_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_include_notes"},["Include notes?"]),daiquiri.core.create_element("div",null,[(function (){var attrs58261 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58261))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs58261], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs58261))?null:[daiquiri.interpreter.interpret(attrs58261)]));
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
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_import_all"},["Add all zotero items"]),(function (){var attrs58350 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58374){
var state_val_58375 = (state_58374[(1)]);
if((state_val_58375 === (1))){
var inst_58351 = new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state);
var inst_58352 = cljs.core.reset_BANG_(inst_58351,"Fetching..");
var inst_58353 = frontend.extensions.zotero.api.all_top_items_count();
var state_58374__$1 = (function (){var statearr_58376 = state_58374;
(statearr_58376[(7)] = inst_58352);

return statearr_58376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58374__$1,(2),inst_58353);
} else {
if((state_val_58375 === (2))){
var inst_58355 = (state_58374[(8)]);
var inst_58355__$1 = (state_58374[(2)]);
var inst_58356 = new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state);
var inst_58357 = cljs.core.reset_BANG_(inst_58356,"Add all");
var inst_58358 = ["This will import all your zotero items and add total number of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58355__$1)," pages. Do you wish to continue?"].join('');
var inst_58359 = window.confirm(inst_58358);
var state_58374__$1 = (function (){var statearr_58377 = state_58374;
(statearr_58377[(9)] = inst_58357);

(statearr_58377[(8)] = inst_58355__$1);

return statearr_58377;
})();
if(cljs.core.truth_(inst_58359)){
var statearr_58378_58445 = state_58374__$1;
(statearr_58378_58445[(1)] = (3));

} else {
var statearr_58379_58446 = state_58374__$1;
(statearr_58379_58446[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (3))){
var inst_58355 = (state_58374[(8)]);
var inst_58361 = new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state);
var inst_58362 = cljs.core.reset_BANG_(inst_58361,inst_58355);
var inst_58363 = new cljs.core.Keyword("frontend.extensions.zotero","progress","frontend.extensions.zotero/progress",-1187409602).cljs$core$IFn$_invoke$arity$1(state);
var inst_58364 = frontend.extensions.zotero.handler.add_all(inst_58363);
var state_58374__$1 = (function (){var statearr_58380 = state_58374;
(statearr_58380[(10)] = inst_58362);

return statearr_58380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58374__$1,(6),inst_58364);
} else {
if((state_val_58375 === (4))){
var state_58374__$1 = state_58374;
var statearr_58381_58447 = state_58374__$1;
(statearr_58381_58447[(2)] = null);

(statearr_58381_58447[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58375 === (5))){
var inst_58372 = (state_58374[(2)]);
var state_58374__$1 = state_58374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58374__$1,inst_58372);
} else {
if((state_val_58375 === (6))){
var inst_58366 = (state_58374[(2)]);
var inst_58367 = new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state);
var inst_58368 = cljs.core.reset_BANG_(inst_58367,false);
var inst_58369 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Successfully added all items!",new cljs.core.Keyword(null,"success","success",1890645906));
var state_58374__$1 = (function (){var statearr_58382 = state_58374;
(statearr_58382[(11)] = inst_58368);

(statearr_58382[(12)] = inst_58366);

return statearr_58382;
})();
var statearr_58383_58448 = state_58374__$1;
(statearr_58383_58448[(2)] = inst_58369);

(statearr_58383_58448[(1)] = (5));


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
var statearr_58384 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58384[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58384[(1)] = (1));

return statearr_58384;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58374){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58374);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58385){var ex__27576__auto__ = e58385;
var statearr_58386_58449 = state_58374;
(statearr_58386_58449[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58374[(4)]))){
var statearr_58387_58450 = state_58374;
(statearr_58387_58450[(1)] = cljs.core.first((state_58374[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58451 = state_58374;
state_58374 = G__58451;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58374){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58388 = f__27596__auto__();
(statearr_58388[(6)] = c__27595__auto__);

return statearr_58388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58350))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1","sm:mt-0","sm:col-span-2"], null)], null),attrs58350], 0))):{'className':"mt-1 sm:mt-0 sm:col-span-2"}),((cljs.core.map_QMARK_(attrs58350))?null:[daiquiri.interpreter.interpret(attrs58350)]));
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
var full_path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__58398 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088));
var G__58399 = "storage";
var G__58400 = item_key;
var G__58401 = filename__$1;
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4(G__58398,G__58399,G__58400,G__58401) : frontend.util.node_path.join.call(null,G__58398,G__58399,G__58400,G__58401));
})())].join('');
return daiquiri.interpreter.interpret(frontend.extensions.zotero.open_button(full_path));
}
}),null,"frontend.extensions.zotero/zotero-imported-file");
frontend.extensions.zotero.zotero_linked_file = rum.core.lazy_build(rum.core.build_defc,(function (path){
if(clojure.string.blank_QMARK_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)))){
return daiquiri.core.create_element("p",{'className':"warning"},["This is a zotero linked file, setting Zotero linked attachment base directory would allow you to open the file in Logseq"]);
} else {
var path__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(path);
var full_path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__58406 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118));
var G__58407 = clojure.string.replace_first(path__$1,"attachments:","");
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__58406,G__58407) : frontend.util.node_path.join.call(null,G__58406,G__58407));
})())].join('');
return daiquiri.interpreter.interpret(frontend.extensions.zotero.open_button(full_path));
}
}),null,"frontend.extensions.zotero/zotero-linked-file");

//# sourceMappingURL=frontend.extensions.zotero.js.map
