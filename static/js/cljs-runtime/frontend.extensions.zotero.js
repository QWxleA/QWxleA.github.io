goog.provide('frontend.extensions.zotero');
frontend.extensions.zotero.term_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
frontend.extensions.zotero.debounce_chan_mult = cljs.core.async.mult(frontend.extensions.zotero.api.debounce(frontend.extensions.zotero.term_chan,(500)));
frontend.extensions.zotero.zotero_search_item = rum.core.lazy_build(rum.core.build_defc,(function (p__67989,id){
var map__67990 = p__67989;
var map__67990__$1 = cljs.core.__destructure_map(map__67990);
var item = map__67990__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67990__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var vec__67991 = rum.core.use_state(false);
var is_creating_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67991,(0),null);
var set_is_creating_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67991,(1),null);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
var type = new cljs.core.Keyword(null,"item-type","item-type",-73995695).cljs$core$IFn$_invoke$arity$1(data);
var abstract$ = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968).cljs$core$IFn$_invoke$arity$1(data),(0),(200)),"..."].join('');
return daiquiri.core.create_element("div",{'onClick':(function (){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68004){
var state_val_68005 = (state_68004[(1)]);
if((state_val_68005 === (1))){
var inst_67995 = (set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_is_creating_page_BANG_.call(null,true));
var inst_67996 = [new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027)];
var inst_67997 = [id];
var inst_67998 = cljs.core.PersistentHashMap.fromArrays(inst_67996,inst_67997);
var inst_67999 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(item,inst_67998);
var state_68004__$1 = (function (){var statearr_68012 = state_68004;
(statearr_68012[(7)] = inst_67995);

return statearr_68012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68004__$1,(2),inst_67999);
} else {
if((state_val_68005 === (2))){
var inst_68001 = (state_68004[(2)]);
var inst_68002 = (set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_is_creating_page_BANG_.call(null,false));
var state_68004__$1 = (function (){var statearr_68014 = state_68004;
(statearr_68014[(8)] = inst_68001);

return statearr_68014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68004__$1,inst_68002);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68018 = [null,null,null,null,null,null,null,null,null];
(statearr_68018[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68018[(1)] = (1));

return statearr_68018;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68004){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68004);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68020){var ex__41842__auto__ = e68020;
var statearr_68021_68897 = state_68004;
(statearr_68021_68897[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68004[(4)]))){
var statearr_68022_68898 = state_68004;
(statearr_68022_68898[(1)] = cljs.core.first((state_68004[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68899 = state_68004;
state_68004 = G__68899;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68004){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68026 = f__41862__auto__();
(statearr_68026[(6)] = c__41861__auto__);

return statearr_68026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}),'className':"zotero-search-item px-2 py-4 border-b cursor-pointer border-solid last:border-none relative"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold.mb-1.mr-1","span.font-bold.mb-1.mr-1",469152989),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zotero-search-item-type.text-xs.p-1.rounded","span.zotero-search-item-type.text-xs.p-1.rounded",1831300718),type], null)], null)], null),(function (){var attrs68031 = abstract$;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68031))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs68031], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs68031))?null:[attrs68031]));
})()], null)),(cljs.core.truth_(is_creating_page)?daiquiri.core.create_element("div",{'className':"zotero-search-item-loading-indicator"},[(function (){var attrs68038 = frontend.components.svg.refresh;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs68038))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["animate-spin-reverse"], null)], null),attrs68038], 0))):{'className':"animate-spin-reverse"}),((cljs.core.map_QMARK_(attrs68038))?null:[daiquiri.interpreter.interpret(attrs68038)]));
})()]):null)]);
}),null,"frontend.extensions.zotero/zotero-search-item");
frontend.extensions.zotero.zotero_search = rum.core.lazy_build(rum.core.build_defc,(function (id){
var vec__68060 = rum.core.use_state("");
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68060,(0),null);
var set_term_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68060,(1),null);
var vec__68063 = rum.core.use_state(cljs.core.PersistentVector.EMPTY);
var search_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68063,(0),null);
var set_search_result_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68063,(1),null);
var vec__68066 = rum.core.use_state("");
var prev_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68066,(0),null);
var set_prev_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68066,(1),null);
var vec__68069 = rum.core.use_state("");
var next_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68069,(0),null);
var set_next_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68069,(1),null);
var vec__68072 = rum.core.use_state("");
var prev_search_term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68072,(0),null);
var set_prev_search_term_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68072,(1),null);
var vec__68075 = rum.core.use_state(null);
var search_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68075,(0),null);
var set_search_error_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68075,(1),null);
var vec__68078 = rum.core.use_state(false);
var is_searching = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68078,(0),null);
var set_is_searching_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68078,(1),null);
var search_fn = (function (s_term,start){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68123){
var state_val_68124 = (state_68123[(1)]);
if((state_val_68124 === (1))){
var inst_68090 = clojure.string.blank_QMARK_(s_term);
var state_68123__$1 = state_68123;
if(inst_68090){
var statearr_68130_68909 = state_68123__$1;
(statearr_68130_68909[(1)] = (2));

} else {
var statearr_68131_68910 = state_68123__$1;
(statearr_68131_68910[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (2))){
var state_68123__$1 = state_68123;
var statearr_68135_68912 = state_68123__$1;
(statearr_68135_68912[(2)] = null);

(statearr_68135_68912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (3))){
var inst_68093 = (set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_is_searching_BANG_.call(null,true));
var inst_68098 = frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2(s_term,start);
var state_68123__$1 = (function (){var statearr_68136 = state_68123;
(statearr_68136[(7)] = inst_68093);

return statearr_68136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68123__$1,(5),inst_68098);
} else {
if((state_val_68124 === (4))){
var inst_68120 = (state_68123[(2)]);
var state_68123__$1 = state_68123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68123__$1,inst_68120);
} else {
if((state_val_68124 === (5))){
var inst_68101 = (state_68123[(8)]);
var inst_68100 = (state_68123[(2)]);
var inst_68101__$1 = cljs.core.__destructure_map(inst_68100);
var inst_68102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68101__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_68103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68101__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_68104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68101__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_68105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68101__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_68106 = inst_68102 === false;
var state_68123__$1 = (function (){var statearr_68141 = state_68123;
(statearr_68141[(8)] = inst_68101__$1);

(statearr_68141[(9)] = inst_68105);

(statearr_68141[(10)] = inst_68103);

(statearr_68141[(11)] = inst_68104);

return statearr_68141;
})();
if(cljs.core.truth_(inst_68106)){
var statearr_68145_68918 = state_68123__$1;
(statearr_68145_68918[(1)] = (6));

} else {
var statearr_68146_68920 = state_68123__$1;
(statearr_68146_68920[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (6))){
var inst_68101 = (state_68123[(8)]);
var inst_68108 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_68101);
var inst_68109 = (set_search_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_error_BANG_.cljs$core$IFn$_invoke$arity$1(inst_68108) : set_search_error_BANG_.call(null,inst_68108));
var state_68123__$1 = state_68123;
var statearr_68147_68922 = state_68123__$1;
(statearr_68147_68922[(2)] = inst_68109);

(statearr_68147_68922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (7))){
var inst_68105 = (state_68123[(9)]);
var inst_68103 = (state_68123[(10)]);
var inst_68104 = (state_68123[(11)]);
var inst_68111 = (set_prev_search_term_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prev_search_term_BANG_.cljs$core$IFn$_invoke$arity$1(s_term) : set_prev_search_term_BANG_.call(null,s_term));
var inst_68113 = (set_next_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_next_page_BANG_.cljs$core$IFn$_invoke$arity$1(inst_68103) : set_next_page_BANG_.call(null,inst_68103));
var inst_68114 = (set_prev_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prev_page_BANG_.cljs$core$IFn$_invoke$arity$1(inst_68104) : set_prev_page_BANG_.call(null,inst_68104));
var inst_68115 = (set_search_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_result_BANG_.cljs$core$IFn$_invoke$arity$1(inst_68105) : set_search_result_BANG_.call(null,inst_68105));
var state_68123__$1 = (function (){var statearr_68153 = state_68123;
(statearr_68153[(12)] = inst_68114);

(statearr_68153[(13)] = inst_68111);

(statearr_68153[(14)] = inst_68113);

return statearr_68153;
})();
var statearr_68154_68926 = state_68123__$1;
(statearr_68154_68926[(2)] = inst_68115);

(statearr_68154_68926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68124 === (8))){
var inst_68117 = (state_68123[(2)]);
var inst_68118 = (set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_is_searching_BANG_.call(null,false));
var state_68123__$1 = (function (){var statearr_68155 = state_68123;
(statearr_68155[(15)] = inst_68117);

return statearr_68155;
})();
var statearr_68156_68928 = state_68123__$1;
(statearr_68156_68928[(2)] = inst_68118);

(statearr_68156_68928[(1)] = (4));


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
var statearr_68161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68161[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68161[(1)] = (1));

return statearr_68161;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68123){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68123);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68163){var ex__41842__auto__ = e68163;
var statearr_68165_68930 = state_68123;
(statearr_68165_68930[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68123[(4)]))){
var statearr_68169_68932 = state_68123;
(statearr_68169_68932[(1)] = cljs.core.first((state_68123[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68935 = state_68123;
state_68123 = G__68935;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68123){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68172 = f__41862__auto__();
(statearr_68172[(6)] = c__41861__auto__);

return statearr_68172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var d_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.debounce_chan_mult,d_chan);

var c__41861__auto___68936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68189){
var state_val_68190 = (state_68189[(1)]);
if((state_val_68190 === (1))){
var state_68189__$1 = state_68189;
var statearr_68192_68937 = state_68189__$1;
(statearr_68192_68937[(2)] = null);

(statearr_68192_68937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68190 === (2))){
var state_68189__$1 = state_68189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68189__$1,(4),d_chan);
} else {
if((state_val_68190 === (3))){
var inst_68186 = (state_68189[(2)]);
var state_68189__$1 = state_68189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68189__$1,inst_68186);
} else {
if((state_val_68190 === (4))){
var inst_68178 = (state_68189[(2)]);
var inst_68180 = search_fn(inst_68178,"0");
var state_68189__$1 = state_68189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68189__$1,(5),inst_68180);
} else {
if((state_val_68190 === (5))){
var inst_68182 = (state_68189[(2)]);
var state_68189__$1 = (function (){var statearr_68202 = state_68189;
(statearr_68202[(7)] = inst_68182);

return statearr_68202;
})();
var statearr_68204_68939 = state_68189__$1;
(statearr_68204_68939[(2)] = null);

(statearr_68204_68939[(1)] = (2));


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
var statearr_68209 = [null,null,null,null,null,null,null,null];
(statearr_68209[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68209[(1)] = (1));

return statearr_68209;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68189){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68189);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68211){var ex__41842__auto__ = e68211;
var statearr_68212_68941 = state_68189;
(statearr_68212_68941[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68189[(4)]))){
var statearr_68215_68942 = state_68189;
(statearr_68215_68942[(1)] = cljs.core.first((state_68189[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68943 = state_68189;
state_68189 = G__68943;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68189){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68220 = f__41862__auto__();
(statearr_68220[(6)] = c__41861__auto___68936);

return statearr_68220;
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
var c__41861__auto___68947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68235){
var state_val_68236 = (state_68235[(1)]);
if((state_val_68236 === (1))){
var inst_68231 = frontend.util.evalue(e);
var state_68235__$1 = state_68235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68235__$1,(2),frontend.extensions.zotero.term_chan,inst_68231);
} else {
if((state_val_68236 === (2))){
var inst_68233 = (state_68235[(2)]);
var state_68235__$1 = state_68235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68235__$1,inst_68233);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68251 = [null,null,null,null,null,null,null];
(statearr_68251[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68251[(1)] = (1));

return statearr_68251;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68235){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68235);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68255){var ex__41842__auto__ = e68255;
var statearr_68257_68950 = state_68235;
(statearr_68257_68950[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68235[(4)]))){
var statearr_68260_68951 = state_68235;
(statearr_68260_68951[(1)] = cljs.core.first((state_68235[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68952 = state_68235;
state_68235 = G__68952;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68235){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68271 = f__41862__auto__();
(statearr_68271[(6)] = c__41861__auto___68947);

return statearr_68271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));


var G__68276 = frontend.util.evalue(e);
return (set_term_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_term_BANG_.cljs$core$IFn$_invoke$arity$1(G__68276) : set_term_BANG_.call(null,G__68276));
})], null)], null),daiquiri.core.create_element("span",{'style':{'visibility':(cljs.core.truth_(is_searching)?"visible":"hidden")},'className':"animate-spin-reverse"},[daiquiri.interpreter.interpret(frontend.components.svg.refresh)])], null))]),daiquiri.core.create_element("div",{'className':"h-2 text-sm text-red-400 mb-2"},[(cljs.core.truth_(search_error)?["Search error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_error)].join(''):"")]),(function (){var attrs68230 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return rum.core.with_key(frontend.extensions.zotero.zotero_search_item(item,id),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
}),search_result);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68230))?daiquiri.interpreter.element_attributes(attrs68230):null),((cljs.core.map_QMARK_(attrs68230))?[((clojure.string.blank_QMARK_(prev_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("prev",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68301){
var state_val_68302 = (state_68301[(1)]);
if((state_val_68302 === (1))){
var inst_68297 = search_fn(prev_search_term,prev_page);
var state_68301__$1 = state_68301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68301__$1,(2),inst_68297);
} else {
if((state_val_68302 === (2))){
var inst_68299 = (state_68301[(2)]);
var state_68301__$1 = state_68301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68301__$1,inst_68299);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68307 = [null,null,null,null,null,null,null];
(statearr_68307[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68307[(1)] = (1));

return statearr_68307;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68301){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68301);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68311){var ex__41842__auto__ = e68311;
var statearr_68312_68954 = state_68301;
(statearr_68312_68954[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68301[(4)]))){
var statearr_68313_68955 = state_68301;
(statearr_68313_68955[(1)] = cljs.core.first((state_68301[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68956 = state_68301;
state_68301 = G__68956;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68301){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68318 = f__41862__auto__();
(statearr_68318[(6)] = c__41861__auto__);

return statearr_68318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
})], 0)))),((clojure.string.blank_QMARK_(next_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("next",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68346){
var state_val_68347 = (state_68346[(1)]);
if((state_val_68347 === (1))){
var inst_68342 = search_fn(prev_search_term,next_page);
var state_68346__$1 = state_68346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68346__$1,(2),inst_68342);
} else {
if((state_val_68347 === (2))){
var inst_68344 = (state_68346[(2)]);
var state_68346__$1 = state_68346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68346__$1,inst_68344);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68353 = [null,null,null,null,null,null,null];
(statearr_68353[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68353[(1)] = (1));

return statearr_68353;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68346){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68346);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68356){var ex__41842__auto__ = e68356;
var statearr_68357_68959 = state_68346;
(statearr_68357_68959[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68346[(4)]))){
var statearr_68358_68960 = state_68346;
(statearr_68358_68960[(1)] = cljs.core.first((state_68346[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68961 = state_68346;
state_68346 = G__68961;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68346){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68359 = f__41862__auto__();
(statearr_68359[(6)] = c__41861__auto__);

return statearr_68359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
})], 0))))]:[daiquiri.interpreter.interpret(attrs68230),((clojure.string.blank_QMARK_(prev_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("prev",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68387){
var state_val_68388 = (state_68387[(1)]);
if((state_val_68388 === (1))){
var inst_68383 = search_fn(prev_search_term,prev_page);
var state_68387__$1 = state_68387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68387__$1,(2),inst_68383);
} else {
if((state_val_68388 === (2))){
var inst_68385 = (state_68387[(2)]);
var state_68387__$1 = state_68387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68387__$1,inst_68385);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68391 = [null,null,null,null,null,null,null];
(statearr_68391[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68391[(1)] = (1));

return statearr_68391;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68387){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68387);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68394){var ex__41842__auto__ = e68394;
var statearr_68395_68964 = state_68387;
(statearr_68395_68964[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68387[(4)]))){
var statearr_68397_68967 = state_68387;
(statearr_68397_68967[(1)] = cljs.core.first((state_68387[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68970 = state_68387;
state_68387 = G__68970;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68387){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68398 = f__41862__auto__();
(statearr_68398[(6)] = c__41861__auto__);

return statearr_68398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
})], 0)))),((clojure.string.blank_QMARK_(next_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("next",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68422){
var state_val_68423 = (state_68422[(1)]);
if((state_val_68423 === (1))){
var inst_68417 = search_fn(prev_search_term,next_page);
var state_68422__$1 = state_68422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68422__$1,(2),inst_68417);
} else {
if((state_val_68423 === (2))){
var inst_68419 = (state_68422[(2)]);
var state_68422__$1 = state_68422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68422__$1,inst_68419);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68427 = [null,null,null,null,null,null,null];
(statearr_68427[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68427[(1)] = (1));

return statearr_68427;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68422){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68422);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68432){var ex__41842__auto__ = e68432;
var statearr_68433_68978 = state_68422;
(statearr_68433_68978[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68422[(4)]))){
var statearr_68434_68979 = state_68422;
(statearr_68434_68979[(1)] = cljs.core.first((state_68422[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68981 = state_68422;
state_68422 = G__68981;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68422){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68437 = f__41862__auto__();
(statearr_68437[(6)] = c__41861__auto__);

return statearr_68437;
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
})),'className':"form-select"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$extensions$zotero$iter__68454(s__68455){
return (new cljs.core.LazySeq(null,(function (){
var s__68455__$1 = s__68455;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__68455__$1);
if(temp__5720__auto__){
var s__68455__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68455__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__68455__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__68457 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__68456 = (0);
while(true){
if((i__68456 < size__4651__auto__)){
var type = cljs.core._nth(c__4650__auto__,i__68456);
cljs.core.chunk_append(b__68457,daiquiri.core.create_element("option",{'key':type,'value':type},[clojure.string.capitalize(type)]));

var G__68987 = (i__68456 + (1));
i__68456 = G__68987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68457),frontend$extensions$zotero$iter__68454(cljs.core.chunk_rest(s__68455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68457),null);
}
} else {
var type = cljs.core.first(s__68455__$2);
return cljs.core.cons(daiquiri.core.create_element("option",{'key':type,'value':type},[clojure.string.capitalize(type)]),frontend$extensions$zotero$iter__68454(cljs.core.rest(s__68455__$2)));
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
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_overwrite_mode"},["Overwrite existing item page?"]),daiquiri.core.create_element("div",null,[(function (){var attrs68480 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68480))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs68480], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs68480))?null:[daiquiri.interpreter.interpret(attrs68480)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409)))?daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-500","p.text-red-500",1193745313),"Dangerous! This will delete and recreate Zotero existing page! Make sure to backup your notes first in case something goes wrong. Make sure you don't put any personal item in previous Zotero page and it's OK to overwrite the page!"], null))):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/overwrite-mode-setting");
frontend.extensions.zotero.attachment_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_include_attachment_links"},["Include attachment links?"]),daiquiri.core.create_element("div",null,[(function (){var attrs68497 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68497))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs68497], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs68497))?null:[daiquiri.interpreter.interpret(attrs68497)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_attachments_block_text"},["Attachment under block of:"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244)),'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_linked_attachment_base_directory"},["Zotero linked attachment base directory",daiquiri.core.create_element("a",{'title':"If you store attached files in Zotero \u2014 the default \u2014 this setting does not affect you. It only applies to linked files. If you're using the ZotFile plugin to help with a linked-file workflow, you should configure it to store linked files within the base directory you've configured. Click to learn more.",'href':"https://www.zotero.org/support/preferences/advanced#linked_attachment_base_directory",'target':"_blank",'className':"ml-2"},[daiquiri.interpreter.interpret(frontend.components.svg.info())])]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)),'placeholder':"/Users/Sarah/Dropbox",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/attachment-setting");
frontend.extensions.zotero.prefer_citekey_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'title':"Make sure to install Better BibTeX and pin your item first",'className':"title w-72",'htmlFor':"zotero_prefer_citekey"},["Use citekey as your page title?"]),daiquiri.core.create_element("div",null,[(function (){var attrs68515 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68515))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs68515], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs68515))?null:[daiquiri.interpreter.interpret(attrs68515)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/prefer-citekey-setting");
frontend.extensions.zotero.api_key_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_api_key"},["Zotero API key"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.api_key(),'placeholder':"Please enter your Zotero API key",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_api_key(frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]);
}),null,"frontend.extensions.zotero/api-key-setting");
frontend.extensions.zotero.notes_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_include_notes"},["Include notes?"]),daiquiri.core.create_element("div",null,[(function (){var attrs68529 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68529))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs68529], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs68529))?null:[daiquiri.interpreter.interpret(attrs68529)]));
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
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_import_all"},["Add all zotero items"]),(function (){var attrs68716 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68747){
var state_val_68749 = (state_68747[(1)]);
if((state_val_68749 === (1))){
var inst_68720 = new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state);
var inst_68722 = cljs.core.reset_BANG_(inst_68720,"Fetching..");
var inst_68724 = frontend.extensions.zotero.api.all_top_items_count();
var state_68747__$1 = (function (){var statearr_68753 = state_68747;
(statearr_68753[(7)] = inst_68722);

return statearr_68753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68747__$1,(2),inst_68724);
} else {
if((state_val_68749 === (2))){
var inst_68726 = (state_68747[(8)]);
var inst_68726__$1 = (state_68747[(2)]);
var inst_68728 = new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state);
var inst_68729 = cljs.core.reset_BANG_(inst_68728,"Add all");
var inst_68731 = ["This will import all your zotero items and add total number of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_68726__$1)," pages. Do you wish to continue?"].join('');
var inst_68732 = window.confirm(inst_68731);
var state_68747__$1 = (function (){var statearr_68756 = state_68747;
(statearr_68756[(8)] = inst_68726__$1);

(statearr_68756[(9)] = inst_68729);

return statearr_68756;
})();
if(cljs.core.truth_(inst_68732)){
var statearr_68759_69054 = state_68747__$1;
(statearr_68759_69054[(1)] = (3));

} else {
var statearr_68761_69055 = state_68747__$1;
(statearr_68761_69055[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (3))){
var inst_68726 = (state_68747[(8)]);
var inst_68734 = new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state);
var inst_68735 = cljs.core.reset_BANG_(inst_68734,inst_68726);
var inst_68736 = new cljs.core.Keyword("frontend.extensions.zotero","progress","frontend.extensions.zotero/progress",-1187409602).cljs$core$IFn$_invoke$arity$1(state);
var inst_68737 = frontend.extensions.zotero.handler.add_all(inst_68736);
var state_68747__$1 = (function (){var statearr_68762 = state_68747;
(statearr_68762[(10)] = inst_68735);

return statearr_68762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68747__$1,(6),inst_68737);
} else {
if((state_val_68749 === (4))){
var state_68747__$1 = state_68747;
var statearr_68763_69058 = state_68747__$1;
(statearr_68763_69058[(2)] = null);

(statearr_68763_69058[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (5))){
var inst_68745 = (state_68747[(2)]);
var state_68747__$1 = state_68747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68747__$1,inst_68745);
} else {
if((state_val_68749 === (6))){
var inst_68739 = (state_68747[(2)]);
var inst_68740 = new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state);
var inst_68741 = cljs.core.reset_BANG_(inst_68740,false);
var inst_68742 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Successfully added all items!",new cljs.core.Keyword(null,"success","success",1890645906));
var state_68747__$1 = (function (){var statearr_68767 = state_68747;
(statearr_68767[(11)] = inst_68741);

(statearr_68767[(12)] = inst_68739);

return statearr_68767;
})();
var statearr_68768_69064 = state_68747__$1;
(statearr_68768_69064[(2)] = inst_68742);

(statearr_68768_69064[(1)] = (5));


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
var statearr_68769 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68769[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68769[(1)] = (1));

return statearr_68769;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68747){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68747);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68770){var ex__41842__auto__ = e68770;
var statearr_68771_69068 = state_68747;
(statearr_68771_69068[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68747[(4)]))){
var statearr_68773_69070 = state_68747;
(statearr_68773_69070[(1)] = cljs.core.first((state_68747[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69071 = state_68747;
state_68747 = G__69071;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68747){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68774 = f__41862__auto__();
(statearr_68774[(6)] = c__41861__auto__);

return statearr_68774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68716))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1","sm:mt-0","sm:col-span-2"], null)], null),attrs68716], 0))):{'className':"mt-1 sm:mt-0 sm:col-span-2"}),((cljs.core.map_QMARK_(attrs68716))?null:[daiquiri.interpreter.interpret(attrs68716)]));
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
var full_path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68849 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088));
var G__68850 = "storage";
var G__68851 = item_key;
var G__68852 = filename__$1;
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4(G__68849,G__68850,G__68851,G__68852) : frontend.util.node_path.join.call(null,G__68849,G__68850,G__68851,G__68852));
})())].join('');
return daiquiri.interpreter.interpret(frontend.extensions.zotero.open_button(full_path));
}
}),null,"frontend.extensions.zotero/zotero-imported-file");
frontend.extensions.zotero.zotero_linked_file = rum.core.lazy_build(rum.core.build_defc,(function (path){
if(clojure.string.blank_QMARK_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)))){
return daiquiri.core.create_element("p",{'className':"warning"},["This is a zotero linked file, setting Zotero linked attachment base directory would allow you to open the file in Logseq"]);
} else {
var path__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(path);
var full_path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68864 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118));
var G__68865 = clojure.string.replace_first(path__$1,"attachments:","");
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__68864,G__68865) : frontend.util.node_path.join.call(null,G__68864,G__68865));
})())].join('');
return daiquiri.interpreter.interpret(frontend.extensions.zotero.open_button(full_path));
}
}),null,"frontend.extensions.zotero/zotero-linked-file");

//# sourceMappingURL=frontend.extensions.zotero.js.map
