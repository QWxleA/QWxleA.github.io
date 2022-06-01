goog.provide('frontend.extensions.zotero.api');
frontend.extensions.zotero.api.config = (function frontend$extensions$zotero$api$config(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"api-version","api-version",108847181),(3),new cljs.core.Keyword(null,"base","base",185279322),"https://api.zotero.org",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(150000),new cljs.core.Keyword(null,"api-key","api-key",1037904031),frontend.extensions.zotero.setting.api_key(),new cljs.core.Keyword(null,"type","type",1174270348),frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"type-id","type-id",2030062700),frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type-id","type-id",2030062700))], null);
});
/**
 * Creates a channel which will change put a new value to the output channel
 * after timeout has passed. Each value change resets the timeout. If value
 * changes more frequently only the latest value is put out.
 * When input channel closes, the output channel is closed.
 */
frontend.extensions.zotero.api.debounce = (function frontend$extensions$zotero$api$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__27595__auto___57836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57543){
var state_val_57544 = (state_57543[(1)]);
if((state_val_57544 === (7))){
var inst_57479 = (state_57543[(2)]);
var state_57543__$1 = state_57543;
var statearr_57549_57837 = state_57543__$1;
(statearr_57549_57837[(2)] = inst_57479);

(statearr_57549_57837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (20))){
var state_57543__$1 = state_57543;
var statearr_57550_57838 = state_57543__$1;
(statearr_57550_57838[(2)] = null);

(statearr_57550_57838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (1))){
var inst_57472 = null;
var state_57543__$1 = (function (){var statearr_57552 = state_57543;
(statearr_57552[(7)] = inst_57472);

return statearr_57552;
})();
var statearr_57553_57839 = state_57543__$1;
(statearr_57553_57839[(2)] = null);

(statearr_57553_57839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (4))){
var state_57543__$1 = state_57543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57543__$1,(7),in$);
} else {
if((state_val_57544 === (15))){
var inst_57497 = (state_57543[(8)]);
var inst_57482 = (state_57543[(9)]);
var inst_57522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57497,(0),null);
var state_57543__$1 = (function (){var statearr_57555 = state_57543;
(statearr_57555[(10)] = inst_57522);

return statearr_57555;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57543__$1,(18),out,inst_57482);
} else {
if((state_val_57544 === (21))){
var inst_57531 = (state_57543[(2)]);
var state_57543__$1 = state_57543;
var statearr_57556_57840 = state_57543__$1;
(statearr_57556_57840[(2)] = inst_57531);

(statearr_57556_57840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (13))){
var inst_57511 = cljs.core.async.close_BANG_(out);
var state_57543__$1 = state_57543;
var statearr_57558_57841 = state_57543__$1;
(statearr_57558_57841[(2)] = inst_57511);

(statearr_57558_57841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (6))){
var inst_57492 = (state_57543[(11)]);
var inst_57483 = (state_57543[(12)]);
var inst_57482 = (state_57543[(2)]);
var inst_57483__$1 = cljs.core.async.timeout(ms);
var inst_57492__$1 = in$;
var inst_57493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57494 = [inst_57492__$1,inst_57483__$1];
var inst_57495 = (new cljs.core.PersistentVector(null,2,(5),inst_57493,inst_57494,null));
var state_57543__$1 = (function (){var statearr_57560 = state_57543;
(statearr_57560[(11)] = inst_57492__$1);

(statearr_57560[(9)] = inst_57482);

(statearr_57560[(12)] = inst_57483__$1);

return statearr_57560;
})();
return cljs.core.async.ioc_alts_BANG_(state_57543__$1,(8),inst_57495);
} else {
if((state_val_57544 === (17))){
var inst_57533 = (state_57543[(2)]);
var state_57543__$1 = state_57543;
var statearr_57561_57842 = state_57543__$1;
(statearr_57561_57842[(2)] = inst_57533);

(statearr_57561_57842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (3))){
var inst_57537 = (state_57543[(2)]);
var state_57543__$1 = state_57543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57543__$1,inst_57537);
} else {
if((state_val_57544 === (12))){
var inst_57507 = (state_57543[(13)]);
var inst_57472 = inst_57507;
var state_57543__$1 = (function (){var statearr_57562 = state_57543;
(statearr_57562[(7)] = inst_57472);

return statearr_57562;
})();
var statearr_57563_57843 = state_57543__$1;
(statearr_57563_57843[(2)] = null);

(statearr_57563_57843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (2))){
var inst_57472 = (state_57543[(7)]);
var inst_57476 = (inst_57472 == null);
var state_57543__$1 = state_57543;
if(cljs.core.truth_(inst_57476)){
var statearr_57564_57844 = state_57543__$1;
(statearr_57564_57844[(1)] = (4));

} else {
var statearr_57565_57845 = state_57543__$1;
(statearr_57565_57845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (19))){
var inst_57500 = (state_57543[(14)]);
var state_57543__$1 = state_57543;
var statearr_57566_57846 = state_57543__$1;
(statearr_57566_57846[(2)] = inst_57500);

(statearr_57566_57846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (11))){
var inst_57535 = (state_57543[(2)]);
var state_57543__$1 = state_57543;
var statearr_57567_57847 = state_57543__$1;
(statearr_57567_57847[(2)] = inst_57535);

(statearr_57567_57847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (9))){
var inst_57497 = (state_57543[(8)]);
var inst_57507 = (state_57543[(13)]);
var inst_57507__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57497,(0),null);
var state_57543__$1 = (function (){var statearr_57568 = state_57543;
(statearr_57568[(13)] = inst_57507__$1);

return statearr_57568;
})();
if(cljs.core.truth_(inst_57507__$1)){
var statearr_57569_57848 = state_57543__$1;
(statearr_57569_57848[(1)] = (12));

} else {
var statearr_57571_57849 = state_57543__$1;
(statearr_57571_57849[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (5))){
var inst_57472 = (state_57543[(7)]);
var state_57543__$1 = state_57543;
var statearr_57572_57850 = state_57543__$1;
(statearr_57572_57850[(2)] = inst_57472);

(statearr_57572_57850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (14))){
var inst_57513 = (state_57543[(2)]);
var state_57543__$1 = state_57543;
var statearr_57573_57851 = state_57543__$1;
(statearr_57573_57851[(2)] = inst_57513);

(statearr_57573_57851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (16))){
var inst_57501 = (state_57543[(15)]);
var inst_57527 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57501,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_57543__$1 = state_57543;
if(inst_57527){
var statearr_57574_57852 = state_57543__$1;
(statearr_57574_57852[(1)] = (19));

} else {
var statearr_57575_57853 = state_57543__$1;
(statearr_57575_57853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (10))){
var inst_57501 = (state_57543[(15)]);
var inst_57483 = (state_57543[(12)]);
var inst_57515 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57501,inst_57483);
var state_57543__$1 = state_57543;
if(inst_57515){
var statearr_57576_57854 = state_57543__$1;
(statearr_57576_57854[(1)] = (15));

} else {
var statearr_57577_57855 = state_57543__$1;
(statearr_57577_57855[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (18))){
var inst_57524 = (state_57543[(2)]);
var inst_57472 = null;
var state_57543__$1 = (function (){var statearr_57578 = state_57543;
(statearr_57578[(7)] = inst_57472);

(statearr_57578[(16)] = inst_57524);

return statearr_57578;
})();
var statearr_57579_57856 = state_57543__$1;
(statearr_57579_57856[(2)] = null);

(statearr_57579_57856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57544 === (8))){
var inst_57492 = (state_57543[(11)]);
var inst_57501 = (state_57543[(15)]);
var inst_57497 = (state_57543[(8)]);
var inst_57497__$1 = (state_57543[(2)]);
var inst_57500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57497__$1,(0),null);
var inst_57501__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57497__$1,(1),null);
var inst_57502 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57501__$1,inst_57492);
var state_57543__$1 = (function (){var statearr_57580 = state_57543;
(statearr_57580[(15)] = inst_57501__$1);

(statearr_57580[(8)] = inst_57497__$1);

(statearr_57580[(14)] = inst_57500);

return statearr_57580;
})();
if(inst_57502){
var statearr_57581_57857 = state_57543__$1;
(statearr_57581_57857[(1)] = (9));

} else {
var statearr_57582_57858 = state_57543__$1;
(statearr_57582_57858[(1)] = (10));

}

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
}
}
}
}
}
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
var frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____0 = (function (){
var statearr_57584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57584[(0)] = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__);

(statearr_57584[(1)] = (1));

return statearr_57584;
});
var frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1 = (function (state_57543){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57543);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57585){var ex__27576__auto__ = e57585;
var statearr_57586_57859 = state_57543;
(statearr_57586_57859[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57543[(4)]))){
var statearr_57587_57860 = state_57543;
(statearr_57587_57860[(1)] = cljs.core.first((state_57543[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57861 = state_57543;
state_57543 = G__57861;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__ = function(state_57543){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1.call(this,state_57543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57588 = f__27596__auto__();
(statearr_57588[(6)] = c__27595__auto___57836);

return statearr_57588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return out;
});
frontend.extensions.zotero.api.parse_start = (function frontend$extensions$zotero$api$parse_start(headers,next_or_prev){
var inclue_text = (function (){var G__57591 = next_or_prev;
var G__57591__$1 = (((G__57591 instanceof cljs.core.Keyword))?G__57591.fqn:null);
switch (G__57591__$1) {
case "next":
return "rel=\"next\"";

break;
case "prev":
return "rel=\"prev\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57591__$1)].join('')));

}
})();
var links = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,headers)),",");
var next_link = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (l){
return clojure.string.includes_QMARK_(l,inclue_text);
}),links));
if(cljs.core.truth_(next_link)){
var start = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(next_link,"<");
var end = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(next_link,">;");
var next_url = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(next_link,(start + (1)),end);
var or__5043__auto__ = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(cljs_http.client.parse_url(next_url)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "0";
}
} else {
return null;
}
});
frontend.extensions.zotero.api.results_count = (function frontend$extensions$zotero$api$results_count(headers){
return frontend.util.safe_parse_int(new cljs.core.Keyword(null,"total-results","total-results",-1147068713).cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,headers)));
});
frontend.extensions.zotero.api.get_STAR_ = (function frontend$extensions$zotero$api$get_STAR_(var_args){
var G__57595 = arguments.length;
switch (G__57595) {
case 2:
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (config,api){
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(config,api,null);
}));

(frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (config,api,query_params){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57656){
var state_val_57657 = (state_57656[(1)]);
if((state_val_57657 === (7))){
var inst_57622 = (state_57656[(7)]);
var state_57656__$1 = state_57656;
var statearr_57658_57864 = state_57656__$1;
(statearr_57658_57864[(2)] = inst_57622);

(statearr_57658_57864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (1))){
var inst_57598 = config;
var inst_57599 = cljs.core.__destructure_map(inst_57598);
var inst_57600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57599,new cljs.core.Keyword(null,"api-version","api-version",108847181));
var inst_57601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57599,new cljs.core.Keyword(null,"base","base",185279322));
var inst_57602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57599,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_57603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57599,new cljs.core.Keyword(null,"type-id","type-id",2030062700));
var inst_57604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57599,new cljs.core.Keyword(null,"api-key","api-key",1037904031));
var inst_57605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57599,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_57606 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57602,new cljs.core.Keyword(null,"user","user",1532431356));
var state_57656__$1 = (function (){var statearr_57659 = state_57656;
(statearr_57659[(8)] = inst_57600);

(statearr_57659[(9)] = inst_57604);

(statearr_57659[(10)] = inst_57603);

(statearr_57659[(11)] = inst_57601);

(statearr_57659[(12)] = inst_57605);

return statearr_57659;
})();
if(inst_57606){
var statearr_57660_57865 = state_57656__$1;
(statearr_57660_57865[(1)] = (3));

} else {
var statearr_57661_57866 = state_57656__$1;
(statearr_57661_57866[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (4))){
var state_57656__$1 = state_57656;
var statearr_57662_57867 = state_57656__$1;
(statearr_57662_57867[(2)] = "/groups/");

(statearr_57662_57867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (15))){
var inst_57646 = (state_57656[(13)]);
var inst_57631 = (state_57656[(14)]);
var inst_57648 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_57646,new cljs.core.Keyword(null,"count","count",2139924085),inst_57631);
var state_57656__$1 = state_57656;
var statearr_57663_57868 = state_57656__$1;
(statearr_57663_57868[(2)] = inst_57648);

(statearr_57663_57868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (13))){
var inst_57641 = (state_57656[(15)]);
var state_57656__$1 = state_57656;
var statearr_57664_57869 = state_57656__$1;
(statearr_57664_57869[(2)] = inst_57641);

(statearr_57664_57869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (6))){
var inst_57626 = (state_57656[(16)]);
var inst_57629 = (state_57656[(17)]);
var inst_57625 = (state_57656[(18)]);
var inst_57628 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,inst_57625);
var inst_57629__$1 = frontend.extensions.zotero.api.parse_start(inst_57626,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_57630 = frontend.extensions.zotero.api.parse_start(inst_57626,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_57631 = frontend.extensions.zotero.api.results_count(inst_57626);
var inst_57634 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_57635 = [inst_57628];
var inst_57636 = cljs.core.PersistentHashMap.fromArrays(inst_57634,inst_57635);
var state_57656__$1 = (function (){var statearr_57667 = state_57656;
(statearr_57667[(19)] = inst_57630);

(statearr_57667[(17)] = inst_57629__$1);

(statearr_57667[(20)] = inst_57636);

(statearr_57667[(14)] = inst_57631);

return statearr_57667;
})();
if(cljs.core.truth_(inst_57629__$1)){
var statearr_57668_57870 = state_57656__$1;
(statearr_57668_57870[(1)] = (9));

} else {
var statearr_57669_57871 = state_57656__$1;
(statearr_57669_57871[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (17))){
var inst_57651 = (state_57656[(2)]);
var state_57656__$1 = state_57656;
var statearr_57670_57872 = state_57656__$1;
(statearr_57670_57872[(2)] = inst_57651);

(statearr_57670_57872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (3))){
var state_57656__$1 = state_57656;
var statearr_57671_57873 = state_57656__$1;
(statearr_57671_57873[(2)] = "/users/");

(statearr_57671_57873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (12))){
var inst_57630 = (state_57656[(19)]);
var inst_57641 = (state_57656[(15)]);
var inst_57643 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_57641,new cljs.core.Keyword(null,"prev","prev",-1597069226),inst_57630);
var state_57656__$1 = state_57656;
var statearr_57672_57874 = state_57656__$1;
(statearr_57672_57874[(2)] = inst_57643);

(statearr_57672_57874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (2))){
var inst_57622 = (state_57656[(7)]);
var inst_57621 = (state_57656[(2)]);
var inst_57622__$1 = cljs.core.__destructure_map(inst_57621);
var inst_57623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57622__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_57625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57622__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_57626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57622__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var state_57656__$1 = (function (){var statearr_57673 = state_57656;
(statearr_57673[(16)] = inst_57626);

(statearr_57673[(7)] = inst_57622__$1);

(statearr_57673[(18)] = inst_57625);

return statearr_57673;
})();
if(cljs.core.truth_(inst_57623)){
var statearr_57674_57875 = state_57656__$1;
(statearr_57674_57875[(1)] = (6));

} else {
var statearr_57675_57876 = state_57656__$1;
(statearr_57675_57876[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (11))){
var inst_57630 = (state_57656[(19)]);
var inst_57641 = (state_57656[(2)]);
var state_57656__$1 = (function (){var statearr_57676 = state_57656;
(statearr_57676[(15)] = inst_57641);

return statearr_57676;
})();
if(cljs.core.truth_(inst_57630)){
var statearr_57677_57877 = state_57656__$1;
(statearr_57677_57877[(1)] = (12));

} else {
var statearr_57678_57878 = state_57656__$1;
(statearr_57678_57878[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (9))){
var inst_57629 = (state_57656[(17)]);
var inst_57636 = (state_57656[(20)]);
var inst_57638 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_57636,new cljs.core.Keyword(null,"next","next",-117701485),inst_57629);
var state_57656__$1 = state_57656;
var statearr_57679_57879 = state_57656__$1;
(statearr_57679_57879[(2)] = inst_57638);

(statearr_57679_57879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (5))){
var inst_57600 = (state_57656[(8)]);
var inst_57604 = (state_57656[(9)]);
var inst_57603 = (state_57656[(10)]);
var inst_57601 = (state_57656[(11)]);
var inst_57605 = (state_57656[(12)]);
var inst_57610 = (state_57656[(2)]);
var inst_57611 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57601),inst_57610,cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57603),cljs.core.str.cljs$core$IFn$_invoke$arity$1(api)].join('');
var inst_57612 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_57613 = ["Zotero-API-Key","Zotero-API-Version"];
var inst_57614 = [inst_57604,inst_57600];
var inst_57615 = cljs.core.PersistentHashMap.fromArrays(inst_57613,inst_57614);
var inst_57616 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_camelCaseString,query_params);
var inst_57617 = [inst_57605,false,inst_57615,inst_57616];
var inst_57618 = cljs.core.PersistentHashMap.fromArrays(inst_57612,inst_57617);
var inst_57619 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_57611,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57618], 0));
var state_57656__$1 = state_57656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57656__$1,(2),inst_57619);
} else {
if((state_val_57657 === (14))){
var inst_57631 = (state_57656[(14)]);
var inst_57646 = (state_57656[(2)]);
var state_57656__$1 = (function (){var statearr_57680 = state_57656;
(statearr_57680[(13)] = inst_57646);

return statearr_57680;
})();
if(cljs.core.truth_(inst_57631)){
var statearr_57681_57880 = state_57656__$1;
(statearr_57681_57880[(1)] = (15));

} else {
var statearr_57682_57881 = state_57656__$1;
(statearr_57682_57881[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (16))){
var inst_57646 = (state_57656[(13)]);
var state_57656__$1 = state_57656;
var statearr_57683_57882 = state_57656__$1;
(statearr_57683_57882[(2)] = inst_57646);

(statearr_57683_57882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (10))){
var inst_57636 = (state_57656[(20)]);
var state_57656__$1 = state_57656;
var statearr_57684_57883 = state_57656__$1;
(statearr_57684_57883[(2)] = inst_57636);

(statearr_57684_57883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57657 === (8))){
var inst_57654 = (state_57656[(2)]);
var state_57656__$1 = state_57656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57656__$1,inst_57654);
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
}
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
var frontend$extensions$zotero$api$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$state_machine__27573__auto____0 = (function (){
var statearr_57685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57685[(0)] = frontend$extensions$zotero$api$state_machine__27573__auto__);

(statearr_57685[(1)] = (1));

return statearr_57685;
});
var frontend$extensions$zotero$api$state_machine__27573__auto____1 = (function (state_57656){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57656);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57686){var ex__27576__auto__ = e57686;
var statearr_57687_57884 = state_57656;
(statearr_57687_57884[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57656[(4)]))){
var statearr_57688_57885 = state_57656;
(statearr_57688_57885[(1)] = cljs.core.first((state_57656[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57886 = state_57656;
state_57656 = G__57886;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$state_machine__27573__auto__ = function(state_57656){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$state_machine__27573__auto____1.call(this,state_57656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$state_machine__27573__auto____0;
frontend$extensions$zotero$api$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$state_machine__27573__auto____1;
return frontend$extensions$zotero$api$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57689 = f__27596__auto__();
(statearr_57689[(6)] = c__27595__auto__);

return statearr_57689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.extensions.zotero.api.get_STAR_.cljs$lang$maxFixedArity = 3);

frontend.extensions.zotero.api.item = (function frontend$extensions$zotero$api$item(key){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.api.config(),["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')));
});
frontend.extensions.zotero.api.all_top_items_count = (function frontend$extensions$zotero$api$all_top_items_count(){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57699){
var state_val_57700 = (state_57699[(1)]);
if((state_val_57700 === (1))){
var inst_57690 = frontend.extensions.zotero.api.config();
var inst_57691 = [new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"item-type","item-type",-73995695)];
var inst_57692 = [(1),"-attachment"];
var inst_57693 = cljs.core.PersistentHashMap.fromArrays(inst_57691,inst_57692);
var inst_57694 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_57690,"/items/top",inst_57693);
var state_57699__$1 = state_57699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57699__$1,(2),inst_57694);
} else {
if((state_val_57700 === (2))){
var inst_57696 = (state_57699[(2)]);
var inst_57697 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(inst_57696);
var state_57699__$1 = state_57699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57699__$1,inst_57697);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0 = (function (){
var statearr_57701 = [null,null,null,null,null,null,null];
(statearr_57701[(0)] = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__);

(statearr_57701[(1)] = (1));

return statearr_57701;
});
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1 = (function (state_57699){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57699);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57702){var ex__27576__auto__ = e57702;
var statearr_57703_57887 = state_57699;
(statearr_57703_57887[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57699[(4)]))){
var statearr_57704_57888 = state_57699;
(statearr_57704_57888[(1)] = cljs.core.first((state_57699[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57889 = state_57699;
state_57699 = G__57889;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__ = function(state_57699){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1.call(this,state_57699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57705 = f__27596__auto__();
(statearr_57705[(6)] = c__27595__auto__);

return statearr_57705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.extensions.zotero.api.all_top_items = (function frontend$extensions$zotero$api$all_top_items(){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57746){
var state_val_57747 = (state_57746[(1)]);
if((state_val_57747 === (7))){
var inst_57742 = (state_57746[(2)]);
var state_57746__$1 = state_57746;
var statearr_57748_57890 = state_57746__$1;
(statearr_57748_57890[(2)] = inst_57742);

(statearr_57748_57890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57747 === (1))){
var inst_57706 = cljs.core.PersistentVector.EMPTY;
var inst_57707 = "0";
var inst_57708 = inst_57706;
var state_57746__$1 = (function (){var statearr_57749 = state_57746;
(statearr_57749[(7)] = inst_57707);

(statearr_57749[(8)] = inst_57708);

return statearr_57749;
})();
var statearr_57750_57891 = state_57746__$1;
(statearr_57750_57891[(2)] = null);

(statearr_57750_57891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57747 === (4))){
var inst_57718 = (state_57746[(2)]);
var inst_57719 = cljs.core.__destructure_map(inst_57718);
var inst_57720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57719,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_57721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57719,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_57722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57719,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_57723 = inst_57720 === false;
var state_57746__$1 = (function (){var statearr_57751 = state_57746;
(statearr_57751[(9)] = inst_57722);

(statearr_57751[(10)] = inst_57721);

return statearr_57751;
})();
if(cljs.core.truth_(inst_57723)){
var statearr_57752_57892 = state_57746__$1;
(statearr_57752_57892[(1)] = (5));

} else {
var statearr_57753_57893 = state_57746__$1;
(statearr_57753_57893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57747 === (13))){
var inst_57738 = (state_57746[(2)]);
var state_57746__$1 = state_57746;
var statearr_57754_57894 = state_57746__$1;
(statearr_57754_57894[(2)] = inst_57738);

(statearr_57754_57894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57747 === (6))){
var inst_57721 = (state_57746[(10)]);
var state_57746__$1 = state_57746;
if(cljs.core.truth_(inst_57721)){
var statearr_57755_57895 = state_57746__$1;
(statearr_57755_57895[(1)] = (8));

} else {
var statearr_57756_57896 = state_57746__$1;
(statearr_57756_57896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57747 === (3))){
var inst_57744 = (state_57746[(2)]);
var state_57746__$1 = state_57746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57746__$1,inst_57744);
} else {
if((state_val_57747 === (12))){
var state_57746__$1 = state_57746;
var statearr_57757_57897 = state_57746__$1;
(statearr_57757_57897[(2)] = null);

(statearr_57757_57897[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57747 === (2))){
var inst_57707 = (state_57746[(7)]);
var inst_57712 = frontend.extensions.zotero.api.config();
var inst_57713 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_57714 = ["-attachment",inst_57707];
var inst_57715 = cljs.core.PersistentHashMap.fromArrays(inst_57713,inst_57714);
var inst_57716 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_57712,"/items/top",inst_57715);
var state_57746__$1 = state_57746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57746__$1,(4),inst_57716);
} else {
if((state_val_57747 === (11))){
var inst_57708 = (state_57746[(8)]);
var inst_57722 = (state_57746[(9)]);
var inst_57733 = cljs.core.PersistentVector.EMPTY;
var inst_57734 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57708,inst_57722);
var inst_57735 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57733,inst_57734);
var state_57746__$1 = state_57746;
var statearr_57758_57898 = state_57746__$1;
(statearr_57758_57898[(2)] = inst_57735);

(statearr_57758_57898[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57747 === (9))){
var state_57746__$1 = state_57746;
var statearr_57759_57899 = state_57746__$1;
(statearr_57759_57899[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57747 === (5))){
var inst_57708 = (state_57746[(8)]);
var state_57746__$1 = state_57746;
var statearr_57761_57900 = state_57746__$1;
(statearr_57761_57900[(2)] = inst_57708);

(statearr_57761_57900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57747 === (10))){
var inst_57740 = (state_57746[(2)]);
var state_57746__$1 = state_57746;
var statearr_57762_57901 = state_57746__$1;
(statearr_57762_57901[(2)] = inst_57740);

(statearr_57762_57901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57747 === (8))){
var inst_57708 = (state_57746[(8)]);
var inst_57722 = (state_57746[(9)]);
var inst_57721 = (state_57746[(10)]);
var inst_57727 = cljs.core.PersistentVector.EMPTY;
var inst_57728 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57708,inst_57722);
var inst_57729 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57727,inst_57728);
var inst_57707 = inst_57721;
var inst_57708__$1 = inst_57729;
var state_57746__$1 = (function (){var statearr_57763 = state_57746;
(statearr_57763[(7)] = inst_57707);

(statearr_57763[(8)] = inst_57708__$1);

return statearr_57763;
})();
var statearr_57764_57902 = state_57746__$1;
(statearr_57764_57902[(2)] = null);

(statearr_57764_57902[(1)] = (2));


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
}
}
}
}
}
});
return (function() {
var frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____0 = (function (){
var statearr_57765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57765[(0)] = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__);

(statearr_57765[(1)] = (1));

return statearr_57765;
});
var frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1 = (function (state_57746){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57746);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57766){var ex__27576__auto__ = e57766;
var statearr_57767_57903 = state_57746;
(statearr_57767_57903[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57746[(4)]))){
var statearr_57768_57904 = state_57746;
(statearr_57768_57904[(1)] = cljs.core.first((state_57746[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57905 = state_57746;
state_57746 = G__57905;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__ = function(state_57746){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1.call(this,state_57746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57769 = f__27596__auto__();
(statearr_57769[(6)] = c__27595__auto__);

return statearr_57769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
/**
 * Query all top level items except attachments
 */
frontend.extensions.zotero.api.query_top_items = (function frontend$extensions$zotero$api$query_top_items(var_args){
var G__57771 = arguments.length;
switch (G__57771) {
case 1:
return frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$1 = (function (term){
return frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2(term,"0");
}));

(frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2 = (function (term,start){
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.api.config(),"/items/top",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qmode","qmode",1066956365),"everything",new cljs.core.Keyword(null,"q","q",689001697),term,new cljs.core.Keyword(null,"limit","limit",-1355822363),(10),new cljs.core.Keyword(null,"item-type","item-type",-73995695),"-attachment",new cljs.core.Keyword(null,"start","start",-355208981),start], null));
}));

(frontend.extensions.zotero.api.query_top_items.cljs$lang$maxFixedArity = 2);

frontend.extensions.zotero.api.all_children_items = (function frontend$extensions$zotero$api$all_children_items(key,type){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57812){
var state_val_57813 = (state_57812[(1)]);
if((state_val_57813 === (7))){
var inst_57808 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57814_57907 = state_57812__$1;
(statearr_57814_57907[(2)] = inst_57808);

(statearr_57814_57907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (1))){
var inst_57772 = cljs.core.PersistentVector.EMPTY;
var inst_57773 = "0";
var inst_57774 = inst_57772;
var state_57812__$1 = (function (){var statearr_57815 = state_57812;
(statearr_57815[(7)] = inst_57774);

(statearr_57815[(8)] = inst_57773);

return statearr_57815;
})();
var statearr_57816_57908 = state_57812__$1;
(statearr_57816_57908[(2)] = null);

(statearr_57816_57908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (4))){
var inst_57784 = (state_57812[(2)]);
var inst_57785 = cljs.core.__destructure_map(inst_57784);
var inst_57786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57785,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_57787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57785,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_57788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57785,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_57789 = inst_57786 === false;
var state_57812__$1 = (function (){var statearr_57817 = state_57812;
(statearr_57817[(9)] = inst_57788);

(statearr_57817[(10)] = inst_57787);

return statearr_57817;
})();
if(cljs.core.truth_(inst_57789)){
var statearr_57818_57909 = state_57812__$1;
(statearr_57818_57909[(1)] = (5));

} else {
var statearr_57819_57910 = state_57812__$1;
(statearr_57819_57910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (13))){
var inst_57804 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57820_57911 = state_57812__$1;
(statearr_57820_57911[(2)] = inst_57804);

(statearr_57820_57911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (6))){
var inst_57787 = (state_57812[(10)]);
var state_57812__$1 = state_57812;
if(cljs.core.truth_(inst_57787)){
var statearr_57821_57912 = state_57812__$1;
(statearr_57821_57912[(1)] = (8));

} else {
var statearr_57822_57913 = state_57812__$1;
(statearr_57822_57913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (3))){
var inst_57810 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57812__$1,inst_57810);
} else {
if((state_val_57813 === (12))){
var state_57812__$1 = state_57812;
var statearr_57823_57914 = state_57812__$1;
(statearr_57823_57914[(2)] = null);

(statearr_57823_57914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (2))){
var inst_57773 = (state_57812[(8)]);
var inst_57777 = frontend.extensions.zotero.api.config();
var inst_57778 = ["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"/children"].join('');
var inst_57779 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_57780 = [type,inst_57773];
var inst_57781 = cljs.core.PersistentHashMap.fromArrays(inst_57779,inst_57780);
var inst_57782 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_57777,inst_57778,inst_57781);
var state_57812__$1 = state_57812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57812__$1,(4),inst_57782);
} else {
if((state_val_57813 === (11))){
var inst_57788 = (state_57812[(9)]);
var inst_57774 = (state_57812[(7)]);
var inst_57799 = cljs.core.PersistentVector.EMPTY;
var inst_57800 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57774,inst_57788);
var inst_57801 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57799,inst_57800);
var state_57812__$1 = state_57812;
var statearr_57824_57915 = state_57812__$1;
(statearr_57824_57915[(2)] = inst_57801);

(statearr_57824_57915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (9))){
var state_57812__$1 = state_57812;
var statearr_57825_57916 = state_57812__$1;
(statearr_57825_57916[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (5))){
var inst_57774 = (state_57812[(7)]);
var state_57812__$1 = state_57812;
var statearr_57827_57917 = state_57812__$1;
(statearr_57827_57917[(2)] = inst_57774);

(statearr_57827_57917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (10))){
var inst_57806 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57828_57918 = state_57812__$1;
(statearr_57828_57918[(2)] = inst_57806);

(statearr_57828_57918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (8))){
var inst_57788 = (state_57812[(9)]);
var inst_57787 = (state_57812[(10)]);
var inst_57774 = (state_57812[(7)]);
var inst_57793 = cljs.core.PersistentVector.EMPTY;
var inst_57794 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57774,inst_57788);
var inst_57795 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57793,inst_57794);
var inst_57773 = inst_57787;
var inst_57774__$1 = inst_57795;
var state_57812__$1 = (function (){var statearr_57829 = state_57812;
(statearr_57829[(7)] = inst_57774__$1);

(statearr_57829[(8)] = inst_57773);

return statearr_57829;
})();
var statearr_57830_57919 = state_57812__$1;
(statearr_57830_57919[(2)] = null);

(statearr_57830_57919[(1)] = (2));


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
}
}
}
}
}
});
return (function() {
var frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____0 = (function (){
var statearr_57831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57831[(0)] = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__);

(statearr_57831[(1)] = (1));

return statearr_57831;
});
var frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1 = (function (state_57812){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57812);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57832){var ex__27576__auto__ = e57832;
var statearr_57833_57920 = state_57812;
(statearr_57833_57920[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57812[(4)]))){
var statearr_57834_57921 = state_57812;
(statearr_57834_57921[(1)] = cljs.core.first((state_57812[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57922 = state_57812;
state_57812 = G__57922;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__ = function(state_57812){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1.call(this,state_57812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57835 = f__27596__auto__();
(statearr_57835[(6)] = c__27595__auto__);

return statearr_57835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.extensions.zotero.api.notes = (function frontend$extensions$zotero$api$notes(key){
return frontend.extensions.zotero.api.all_children_items(key,"note");
});
frontend.extensions.zotero.api.attachments = (function frontend$extensions$zotero$api$attachments(key){
return frontend.extensions.zotero.api.all_children_items(key,"attachment");
});

//# sourceMappingURL=frontend.extensions.zotero.api.js.map
