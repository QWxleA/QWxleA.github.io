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
var c__41861__auto___67426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66983){
var state_val_66984 = (state_66983[(1)]);
if((state_val_66984 === (7))){
var inst_66922 = (state_66983[(2)]);
var state_66983__$1 = state_66983;
var statearr_66985_67436 = state_66983__$1;
(statearr_66985_67436[(2)] = inst_66922);

(statearr_66985_67436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (20))){
var state_66983__$1 = state_66983;
var statearr_66986_67438 = state_66983__$1;
(statearr_66986_67438[(2)] = null);

(statearr_66986_67438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (1))){
var inst_66917 = null;
var state_66983__$1 = (function (){var statearr_66987 = state_66983;
(statearr_66987[(7)] = inst_66917);

return statearr_66987;
})();
var statearr_66989_67440 = state_66983__$1;
(statearr_66989_67440[(2)] = null);

(statearr_66989_67440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (4))){
var state_66983__$1 = state_66983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66983__$1,(7),in$);
} else {
if((state_val_66984 === (15))){
var inst_66925 = (state_66983[(8)]);
var inst_66942 = (state_66983[(9)]);
var inst_66965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66942,(0),null);
var state_66983__$1 = (function (){var statearr_66990 = state_66983;
(statearr_66990[(10)] = inst_66965);

return statearr_66990;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66983__$1,(18),out,inst_66925);
} else {
if((state_val_66984 === (21))){
var inst_66975 = (state_66983[(2)]);
var state_66983__$1 = state_66983;
var statearr_66991_67442 = state_66983__$1;
(statearr_66991_67442[(2)] = inst_66975);

(statearr_66991_67442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (13))){
var inst_66954 = cljs.core.async.close_BANG_(out);
var state_66983__$1 = state_66983;
var statearr_66992_67443 = state_66983__$1;
(statearr_66992_67443[(2)] = inst_66954);

(statearr_66992_67443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (6))){
var inst_66937 = (state_66983[(11)]);
var inst_66927 = (state_66983[(12)]);
var inst_66925 = (state_66983[(2)]);
var inst_66927__$1 = cljs.core.async.timeout(ms);
var inst_66937__$1 = in$;
var inst_66938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66939 = [inst_66937__$1,inst_66927__$1];
var inst_66940 = (new cljs.core.PersistentVector(null,2,(5),inst_66938,inst_66939,null));
var state_66983__$1 = (function (){var statearr_67004 = state_66983;
(statearr_67004[(11)] = inst_66937__$1);

(statearr_67004[(8)] = inst_66925);

(statearr_67004[(12)] = inst_66927__$1);

return statearr_67004;
})();
return cljs.core.async.ioc_alts_BANG_(state_66983__$1,(8),inst_66940);
} else {
if((state_val_66984 === (17))){
var inst_66977 = (state_66983[(2)]);
var state_66983__$1 = state_66983;
var statearr_67010_67448 = state_66983__$1;
(statearr_67010_67448[(2)] = inst_66977);

(statearr_67010_67448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (3))){
var inst_66981 = (state_66983[(2)]);
var state_66983__$1 = state_66983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66983__$1,inst_66981);
} else {
if((state_val_66984 === (12))){
var inst_66950 = (state_66983[(13)]);
var inst_66917 = inst_66950;
var state_66983__$1 = (function (){var statearr_67014 = state_66983;
(statearr_67014[(7)] = inst_66917);

return statearr_67014;
})();
var statearr_67017_67454 = state_66983__$1;
(statearr_67017_67454[(2)] = null);

(statearr_67017_67454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (2))){
var inst_66917 = (state_66983[(7)]);
var inst_66919 = (inst_66917 == null);
var state_66983__$1 = state_66983;
if(cljs.core.truth_(inst_66919)){
var statearr_67021_67456 = state_66983__$1;
(statearr_67021_67456[(1)] = (4));

} else {
var statearr_67023_67457 = state_66983__$1;
(statearr_67023_67457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (19))){
var inst_66943 = (state_66983[(14)]);
var state_66983__$1 = state_66983;
var statearr_67025_67462 = state_66983__$1;
(statearr_67025_67462[(2)] = inst_66943);

(statearr_67025_67462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (11))){
var inst_66979 = (state_66983[(2)]);
var state_66983__$1 = state_66983;
var statearr_67027_67463 = state_66983__$1;
(statearr_67027_67463[(2)] = inst_66979);

(statearr_67027_67463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (9))){
var inst_66950 = (state_66983[(13)]);
var inst_66942 = (state_66983[(9)]);
var inst_66950__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66942,(0),null);
var state_66983__$1 = (function (){var statearr_67029 = state_66983;
(statearr_67029[(13)] = inst_66950__$1);

return statearr_67029;
})();
if(cljs.core.truth_(inst_66950__$1)){
var statearr_67030_67464 = state_66983__$1;
(statearr_67030_67464[(1)] = (12));

} else {
var statearr_67031_67465 = state_66983__$1;
(statearr_67031_67465[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (5))){
var inst_66917 = (state_66983[(7)]);
var state_66983__$1 = state_66983;
var statearr_67032_67466 = state_66983__$1;
(statearr_67032_67466[(2)] = inst_66917);

(statearr_67032_67466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (14))){
var inst_66956 = (state_66983[(2)]);
var state_66983__$1 = state_66983;
var statearr_67033_67467 = state_66983__$1;
(statearr_67033_67467[(2)] = inst_66956);

(statearr_67033_67467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (16))){
var inst_66944 = (state_66983[(15)]);
var inst_66971 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66944,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_66983__$1 = state_66983;
if(inst_66971){
var statearr_67037_67468 = state_66983__$1;
(statearr_67037_67468[(1)] = (19));

} else {
var statearr_67038_67469 = state_66983__$1;
(statearr_67038_67469[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (10))){
var inst_66944 = (state_66983[(15)]);
var inst_66927 = (state_66983[(12)]);
var inst_66959 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66944,inst_66927);
var state_66983__$1 = state_66983;
if(inst_66959){
var statearr_67039_67470 = state_66983__$1;
(statearr_67039_67470[(1)] = (15));

} else {
var statearr_67040_67471 = state_66983__$1;
(statearr_67040_67471[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (18))){
var inst_66968 = (state_66983[(2)]);
var inst_66917 = null;
var state_66983__$1 = (function (){var statearr_67041 = state_66983;
(statearr_67041[(7)] = inst_66917);

(statearr_67041[(16)] = inst_66968);

return statearr_67041;
})();
var statearr_67042_67472 = state_66983__$1;
(statearr_67042_67472[(2)] = null);

(statearr_67042_67472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66984 === (8))){
var inst_66937 = (state_66983[(11)]);
var inst_66944 = (state_66983[(15)]);
var inst_66942 = (state_66983[(9)]);
var inst_66942__$1 = (state_66983[(2)]);
var inst_66943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66942__$1,(0),null);
var inst_66944__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66942__$1,(1),null);
var inst_66945 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66944__$1,inst_66937);
var state_66983__$1 = (function (){var statearr_67047 = state_66983;
(statearr_67047[(15)] = inst_66944__$1);

(statearr_67047[(9)] = inst_66942__$1);

(statearr_67047[(14)] = inst_66943);

return statearr_67047;
})();
if(inst_66945){
var statearr_67049_67473 = state_66983__$1;
(statearr_67049_67473[(1)] = (9));

} else {
var statearr_67050_67474 = state_66983__$1;
(statearr_67050_67474[(1)] = (10));

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
var frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto__ = null;
var frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto____0 = (function (){
var statearr_67053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67053[(0)] = frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto__);

(statearr_67053[(1)] = (1));

return statearr_67053;
});
var frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto____1 = (function (state_66983){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66983);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67054){var ex__41842__auto__ = e67054;
var statearr_67055_67478 = state_66983;
(statearr_67055_67478[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66983[(4)]))){
var statearr_67057_67480 = state_66983;
(statearr_67057_67480[(1)] = cljs.core.first((state_66983[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67482 = state_66983;
state_66983 = G__67482;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto__ = function(state_66983){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto____1.call(this,state_66983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto____0;
frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67061 = f__41862__auto__();
(statearr_67061[(6)] = c__41861__auto___67426);

return statearr_67061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));


return out;
});
frontend.extensions.zotero.api.parse_start = (function frontend$extensions$zotero$api$parse_start(headers,next_or_prev){
var inclue_text = (function (){var G__67064 = next_or_prev;
var G__67064__$1 = (((G__67064 instanceof cljs.core.Keyword))?G__67064.fqn:null);
switch (G__67064__$1) {
case "next":
return "rel=\"next\"";

break;
case "prev":
return "rel=\"prev\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67064__$1)].join('')));

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
var or__4253__auto__ = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(cljs_http.client.parse_url(next_url)));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var G__67075 = arguments.length;
switch (G__67075) {
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
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67142){
var state_val_67143 = (state_67142[(1)]);
if((state_val_67143 === (7))){
var inst_67106 = (state_67142[(7)]);
var state_67142__$1 = state_67142;
var statearr_67147_67493 = state_67142__$1;
(statearr_67147_67493[(2)] = inst_67106);

(statearr_67147_67493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (1))){
var inst_67080 = config;
var inst_67081 = cljs.core.__destructure_map(inst_67080);
var inst_67082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67081,new cljs.core.Keyword(null,"api-version","api-version",108847181));
var inst_67083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67081,new cljs.core.Keyword(null,"base","base",185279322));
var inst_67084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67081,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_67085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67081,new cljs.core.Keyword(null,"type-id","type-id",2030062700));
var inst_67086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67081,new cljs.core.Keyword(null,"api-key","api-key",1037904031));
var inst_67087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67081,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_67088 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67084,new cljs.core.Keyword(null,"user","user",1532431356));
var state_67142__$1 = (function (){var statearr_67151 = state_67142;
(statearr_67151[(8)] = inst_67083);

(statearr_67151[(9)] = inst_67087);

(statearr_67151[(10)] = inst_67085);

(statearr_67151[(11)] = inst_67086);

(statearr_67151[(12)] = inst_67082);

return statearr_67151;
})();
if(inst_67088){
var statearr_67154_67496 = state_67142__$1;
(statearr_67154_67496[(1)] = (3));

} else {
var statearr_67155_67497 = state_67142__$1;
(statearr_67155_67497[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (4))){
var state_67142__$1 = state_67142;
var statearr_67156_67498 = state_67142__$1;
(statearr_67156_67498[(2)] = "/groups/");

(statearr_67156_67498[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (15))){
var inst_67115 = (state_67142[(13)]);
var inst_67130 = (state_67142[(14)]);
var inst_67132 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_67130,new cljs.core.Keyword(null,"count","count",2139924085),inst_67115);
var state_67142__$1 = state_67142;
var statearr_67161_67499 = state_67142__$1;
(statearr_67161_67499[(2)] = inst_67132);

(statearr_67161_67499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (13))){
var inst_67125 = (state_67142[(15)]);
var state_67142__$1 = state_67142;
var statearr_67164_67500 = state_67142__$1;
(statearr_67164_67500[(2)] = inst_67125);

(statearr_67164_67500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (6))){
var inst_67113 = (state_67142[(16)]);
var inst_67110 = (state_67142[(17)]);
var inst_67109 = (state_67142[(18)]);
var inst_67112 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,inst_67109);
var inst_67113__$1 = frontend.extensions.zotero.api.parse_start(inst_67110,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_67114 = frontend.extensions.zotero.api.parse_start(inst_67110,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_67115 = frontend.extensions.zotero.api.results_count(inst_67110);
var inst_67117 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_67119 = [inst_67112];
var inst_67120 = cljs.core.PersistentHashMap.fromArrays(inst_67117,inst_67119);
var state_67142__$1 = (function (){var statearr_67168 = state_67142;
(statearr_67168[(16)] = inst_67113__$1);

(statearr_67168[(19)] = inst_67114);

(statearr_67168[(20)] = inst_67120);

(statearr_67168[(13)] = inst_67115);

return statearr_67168;
})();
if(cljs.core.truth_(inst_67113__$1)){
var statearr_67170_67503 = state_67142__$1;
(statearr_67170_67503[(1)] = (9));

} else {
var statearr_67171_67504 = state_67142__$1;
(statearr_67171_67504[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (17))){
var inst_67135 = (state_67142[(2)]);
var state_67142__$1 = state_67142;
var statearr_67174_67505 = state_67142__$1;
(statearr_67174_67505[(2)] = inst_67135);

(statearr_67174_67505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (3))){
var state_67142__$1 = state_67142;
var statearr_67176_67507 = state_67142__$1;
(statearr_67176_67507[(2)] = "/users/");

(statearr_67176_67507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (12))){
var inst_67125 = (state_67142[(15)]);
var inst_67114 = (state_67142[(19)]);
var inst_67127 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_67125,new cljs.core.Keyword(null,"prev","prev",-1597069226),inst_67114);
var state_67142__$1 = state_67142;
var statearr_67177_67509 = state_67142__$1;
(statearr_67177_67509[(2)] = inst_67127);

(statearr_67177_67509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (2))){
var inst_67106 = (state_67142[(7)]);
var inst_67105 = (state_67142[(2)]);
var inst_67106__$1 = cljs.core.__destructure_map(inst_67105);
var inst_67107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67106__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_67109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67106__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_67110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67106__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var state_67142__$1 = (function (){var statearr_67178 = state_67142;
(statearr_67178[(17)] = inst_67110);

(statearr_67178[(18)] = inst_67109);

(statearr_67178[(7)] = inst_67106__$1);

return statearr_67178;
})();
if(cljs.core.truth_(inst_67107)){
var statearr_67179_67512 = state_67142__$1;
(statearr_67179_67512[(1)] = (6));

} else {
var statearr_67180_67513 = state_67142__$1;
(statearr_67180_67513[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (11))){
var inst_67114 = (state_67142[(19)]);
var inst_67125 = (state_67142[(2)]);
var state_67142__$1 = (function (){var statearr_67181 = state_67142;
(statearr_67181[(15)] = inst_67125);

return statearr_67181;
})();
if(cljs.core.truth_(inst_67114)){
var statearr_67182_67515 = state_67142__$1;
(statearr_67182_67515[(1)] = (12));

} else {
var statearr_67183_67522 = state_67142__$1;
(statearr_67183_67522[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (9))){
var inst_67113 = (state_67142[(16)]);
var inst_67120 = (state_67142[(20)]);
var inst_67122 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_67120,new cljs.core.Keyword(null,"next","next",-117701485),inst_67113);
var state_67142__$1 = state_67142;
var statearr_67184_67524 = state_67142__$1;
(statearr_67184_67524[(2)] = inst_67122);

(statearr_67184_67524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (5))){
var inst_67083 = (state_67142[(8)]);
var inst_67087 = (state_67142[(9)]);
var inst_67085 = (state_67142[(10)]);
var inst_67086 = (state_67142[(11)]);
var inst_67082 = (state_67142[(12)]);
var inst_67092 = (state_67142[(2)]);
var inst_67093 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_67083),inst_67092,cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_67085),cljs.core.str.cljs$core$IFn$_invoke$arity$1(api)].join('');
var inst_67095 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_67097 = ["Zotero-API-Key","Zotero-API-Version"];
var inst_67098 = [inst_67086,inst_67082];
var inst_67099 = cljs.core.PersistentHashMap.fromArrays(inst_67097,inst_67098);
var inst_67100 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_camelCaseString,query_params);
var inst_67101 = [inst_67087,false,inst_67099,inst_67100];
var inst_67102 = cljs.core.PersistentHashMap.fromArrays(inst_67095,inst_67101);
var inst_67103 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_67093,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_67102], 0));
var state_67142__$1 = state_67142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67142__$1,(2),inst_67103);
} else {
if((state_val_67143 === (14))){
var inst_67115 = (state_67142[(13)]);
var inst_67130 = (state_67142[(2)]);
var state_67142__$1 = (function (){var statearr_67186 = state_67142;
(statearr_67186[(14)] = inst_67130);

return statearr_67186;
})();
if(cljs.core.truth_(inst_67115)){
var statearr_67187_67525 = state_67142__$1;
(statearr_67187_67525[(1)] = (15));

} else {
var statearr_67188_67526 = state_67142__$1;
(statearr_67188_67526[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (16))){
var inst_67130 = (state_67142[(14)]);
var state_67142__$1 = state_67142;
var statearr_67189_67527 = state_67142__$1;
(statearr_67189_67527[(2)] = inst_67130);

(statearr_67189_67527[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (10))){
var inst_67120 = (state_67142[(20)]);
var state_67142__$1 = state_67142;
var statearr_67192_67529 = state_67142__$1;
(statearr_67192_67529[(2)] = inst_67120);

(statearr_67192_67529[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67143 === (8))){
var inst_67139 = (state_67142[(2)]);
var state_67142__$1 = state_67142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67142__$1,inst_67139);
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
var frontend$extensions$zotero$api$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$api$state_machine__41839__auto____0 = (function (){
var statearr_67197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67197[(0)] = frontend$extensions$zotero$api$state_machine__41839__auto__);

(statearr_67197[(1)] = (1));

return statearr_67197;
});
var frontend$extensions$zotero$api$state_machine__41839__auto____1 = (function (state_67142){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67142);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67200){var ex__41842__auto__ = e67200;
var statearr_67201_67535 = state_67142;
(statearr_67201_67535[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67142[(4)]))){
var statearr_67203_67536 = state_67142;
(statearr_67203_67536[(1)] = cljs.core.first((state_67142[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67539 = state_67142;
state_67142 = G__67539;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$api$state_machine__41839__auto__ = function(state_67142){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$state_machine__41839__auto____1.call(this,state_67142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$state_machine__41839__auto____0;
frontend$extensions$zotero$api$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$state_machine__41839__auto____1;
return frontend$extensions$zotero$api$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67206 = f__41862__auto__();
(statearr_67206[(6)] = c__41861__auto__);

return statearr_67206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.extensions.zotero.api.get_STAR_.cljs$lang$maxFixedArity = 3);

frontend.extensions.zotero.api.item = (function frontend$extensions$zotero$api$item(key){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.api.config(),["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')));
});
frontend.extensions.zotero.api.all_top_items_count = (function frontend$extensions$zotero$api$all_top_items_count(){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67219){
var state_val_67220 = (state_67219[(1)]);
if((state_val_67220 === (1))){
var inst_67210 = frontend.extensions.zotero.api.config();
var inst_67211 = [new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"item-type","item-type",-73995695)];
var inst_67212 = [(1),"-attachment"];
var inst_67213 = cljs.core.PersistentHashMap.fromArrays(inst_67211,inst_67212);
var inst_67214 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_67210,"/items/top",inst_67213);
var state_67219__$1 = state_67219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67219__$1,(2),inst_67214);
} else {
if((state_val_67220 === (2))){
var inst_67216 = (state_67219[(2)]);
var inst_67217 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(inst_67216);
var state_67219__$1 = state_67219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67219__$1,inst_67217);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__ = null;
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____0 = (function (){
var statearr_67221 = [null,null,null,null,null,null,null];
(statearr_67221[(0)] = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__);

(statearr_67221[(1)] = (1));

return statearr_67221;
});
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____1 = (function (state_67219){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67219);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67222){var ex__41842__auto__ = e67222;
var statearr_67223_67549 = state_67219;
(statearr_67223_67549[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67219[(4)]))){
var statearr_67225_67550 = state_67219;
(statearr_67225_67550[(1)] = cljs.core.first((state_67219[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67551 = state_67219;
state_67219 = G__67551;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__ = function(state_67219){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____1.call(this,state_67219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____0;
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67226 = f__41862__auto__();
(statearr_67226[(6)] = c__41861__auto__);

return statearr_67226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.extensions.zotero.api.all_top_items = (function frontend$extensions$zotero$api$all_top_items(){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67266){
var state_val_67267 = (state_67266[(1)]);
if((state_val_67267 === (7))){
var inst_67262 = (state_67266[(2)]);
var state_67266__$1 = state_67266;
var statearr_67268_67556 = state_67266__$1;
(statearr_67268_67556[(2)] = inst_67262);

(statearr_67268_67556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67267 === (1))){
var inst_67227 = cljs.core.PersistentVector.EMPTY;
var inst_67228 = "0";
var inst_67229 = inst_67227;
var state_67266__$1 = (function (){var statearr_67269 = state_67266;
(statearr_67269[(7)] = inst_67228);

(statearr_67269[(8)] = inst_67229);

return statearr_67269;
})();
var statearr_67270_67559 = state_67266__$1;
(statearr_67270_67559[(2)] = null);

(statearr_67270_67559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67267 === (4))){
var inst_67238 = (state_67266[(2)]);
var inst_67239 = cljs.core.__destructure_map(inst_67238);
var inst_67240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67239,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_67241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67239,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_67242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67239,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_67243 = inst_67240 === false;
var state_67266__$1 = (function (){var statearr_67271 = state_67266;
(statearr_67271[(9)] = inst_67241);

(statearr_67271[(10)] = inst_67242);

return statearr_67271;
})();
if(cljs.core.truth_(inst_67243)){
var statearr_67272_67563 = state_67266__$1;
(statearr_67272_67563[(1)] = (5));

} else {
var statearr_67273_67564 = state_67266__$1;
(statearr_67273_67564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67267 === (13))){
var inst_67258 = (state_67266[(2)]);
var state_67266__$1 = state_67266;
var statearr_67274_67565 = state_67266__$1;
(statearr_67274_67565[(2)] = inst_67258);

(statearr_67274_67565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67267 === (6))){
var inst_67241 = (state_67266[(9)]);
var state_67266__$1 = state_67266;
if(cljs.core.truth_(inst_67241)){
var statearr_67275_67566 = state_67266__$1;
(statearr_67275_67566[(1)] = (8));

} else {
var statearr_67276_67567 = state_67266__$1;
(statearr_67276_67567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67267 === (3))){
var inst_67264 = (state_67266[(2)]);
var state_67266__$1 = state_67266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67266__$1,inst_67264);
} else {
if((state_val_67267 === (12))){
var state_67266__$1 = state_67266;
var statearr_67277_67568 = state_67266__$1;
(statearr_67277_67568[(2)] = null);

(statearr_67277_67568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67267 === (2))){
var inst_67228 = (state_67266[(7)]);
var inst_67232 = frontend.extensions.zotero.api.config();
var inst_67233 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_67234 = ["-attachment",inst_67228];
var inst_67235 = cljs.core.PersistentHashMap.fromArrays(inst_67233,inst_67234);
var inst_67236 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_67232,"/items/top",inst_67235);
var state_67266__$1 = state_67266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67266__$1,(4),inst_67236);
} else {
if((state_val_67267 === (11))){
var inst_67229 = (state_67266[(8)]);
var inst_67242 = (state_67266[(10)]);
var inst_67253 = cljs.core.PersistentVector.EMPTY;
var inst_67254 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_67229,inst_67242);
var inst_67255 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_67253,inst_67254);
var state_67266__$1 = state_67266;
var statearr_67279_67571 = state_67266__$1;
(statearr_67279_67571[(2)] = inst_67255);

(statearr_67279_67571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67267 === (9))){
var state_67266__$1 = state_67266;
var statearr_67282_67572 = state_67266__$1;
(statearr_67282_67572[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67267 === (5))){
var inst_67229 = (state_67266[(8)]);
var state_67266__$1 = state_67266;
var statearr_67292_67574 = state_67266__$1;
(statearr_67292_67574[(2)] = inst_67229);

(statearr_67292_67574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67267 === (10))){
var inst_67260 = (state_67266[(2)]);
var state_67266__$1 = state_67266;
var statearr_67295_67576 = state_67266__$1;
(statearr_67295_67576[(2)] = inst_67260);

(statearr_67295_67576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67267 === (8))){
var inst_67229 = (state_67266[(8)]);
var inst_67241 = (state_67266[(9)]);
var inst_67242 = (state_67266[(10)]);
var inst_67247 = cljs.core.PersistentVector.EMPTY;
var inst_67248 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_67229,inst_67242);
var inst_67249 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_67247,inst_67248);
var inst_67228 = inst_67241;
var inst_67229__$1 = inst_67249;
var state_67266__$1 = (function (){var statearr_67296 = state_67266;
(statearr_67296[(7)] = inst_67228);

(statearr_67296[(8)] = inst_67229__$1);

return statearr_67296;
})();
var statearr_67297_67579 = state_67266__$1;
(statearr_67297_67579[(2)] = null);

(statearr_67297_67579[(1)] = (2));


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
var frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto__ = null;
var frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto____0 = (function (){
var statearr_67299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67299[(0)] = frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto__);

(statearr_67299[(1)] = (1));

return statearr_67299;
});
var frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto____1 = (function (state_67266){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67266);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67300){var ex__41842__auto__ = e67300;
var statearr_67301_67581 = state_67266;
(statearr_67301_67581[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67266[(4)]))){
var statearr_67303_67582 = state_67266;
(statearr_67303_67582[(1)] = cljs.core.first((state_67266[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67583 = state_67266;
state_67266 = G__67583;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto__ = function(state_67266){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto____1.call(this,state_67266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto____0;
frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67307 = f__41862__auto__();
(statearr_67307[(6)] = c__41861__auto__);

return statearr_67307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
/**
 * Query all top level items except attachments
 */
frontend.extensions.zotero.api.query_top_items = (function frontend$extensions$zotero$api$query_top_items(var_args){
var G__67312 = arguments.length;
switch (G__67312) {
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
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67366){
var state_val_67367 = (state_67366[(1)]);
if((state_val_67367 === (7))){
var inst_67362 = (state_67366[(2)]);
var state_67366__$1 = state_67366;
var statearr_67378_67587 = state_67366__$1;
(statearr_67378_67587[(2)] = inst_67362);

(statearr_67378_67587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67367 === (1))){
var inst_67326 = cljs.core.PersistentVector.EMPTY;
var inst_67327 = "0";
var inst_67328 = inst_67326;
var state_67366__$1 = (function (){var statearr_67381 = state_67366;
(statearr_67381[(7)] = inst_67328);

(statearr_67381[(8)] = inst_67327);

return statearr_67381;
})();
var statearr_67383_67589 = state_67366__$1;
(statearr_67383_67589[(2)] = null);

(statearr_67383_67589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67367 === (4))){
var inst_67338 = (state_67366[(2)]);
var inst_67339 = cljs.core.__destructure_map(inst_67338);
var inst_67340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67339,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_67341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67339,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_67342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67339,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_67343 = inst_67340 === false;
var state_67366__$1 = (function (){var statearr_67387 = state_67366;
(statearr_67387[(9)] = inst_67342);

(statearr_67387[(10)] = inst_67341);

return statearr_67387;
})();
if(cljs.core.truth_(inst_67343)){
var statearr_67388_67591 = state_67366__$1;
(statearr_67388_67591[(1)] = (5));

} else {
var statearr_67390_67592 = state_67366__$1;
(statearr_67390_67592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67367 === (13))){
var inst_67358 = (state_67366[(2)]);
var state_67366__$1 = state_67366;
var statearr_67392_67594 = state_67366__$1;
(statearr_67392_67594[(2)] = inst_67358);

(statearr_67392_67594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67367 === (6))){
var inst_67341 = (state_67366[(10)]);
var state_67366__$1 = state_67366;
if(cljs.core.truth_(inst_67341)){
var statearr_67394_67595 = state_67366__$1;
(statearr_67394_67595[(1)] = (8));

} else {
var statearr_67395_67596 = state_67366__$1;
(statearr_67395_67596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67367 === (3))){
var inst_67364 = (state_67366[(2)]);
var state_67366__$1 = state_67366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67366__$1,inst_67364);
} else {
if((state_val_67367 === (12))){
var state_67366__$1 = state_67366;
var statearr_67402_67597 = state_67366__$1;
(statearr_67402_67597[(2)] = null);

(statearr_67402_67597[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67367 === (2))){
var inst_67327 = (state_67366[(8)]);
var inst_67331 = frontend.extensions.zotero.api.config();
var inst_67332 = ["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"/children"].join('');
var inst_67333 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_67334 = [type,inst_67327];
var inst_67335 = cljs.core.PersistentHashMap.fromArrays(inst_67333,inst_67334);
var inst_67336 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_67331,inst_67332,inst_67335);
var state_67366__$1 = state_67366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67366__$1,(4),inst_67336);
} else {
if((state_val_67367 === (11))){
var inst_67342 = (state_67366[(9)]);
var inst_67328 = (state_67366[(7)]);
var inst_67353 = cljs.core.PersistentVector.EMPTY;
var inst_67354 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_67328,inst_67342);
var inst_67355 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_67353,inst_67354);
var state_67366__$1 = state_67366;
var statearr_67403_67601 = state_67366__$1;
(statearr_67403_67601[(2)] = inst_67355);

(statearr_67403_67601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67367 === (9))){
var state_67366__$1 = state_67366;
var statearr_67404_67602 = state_67366__$1;
(statearr_67404_67602[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67367 === (5))){
var inst_67328 = (state_67366[(7)]);
var state_67366__$1 = state_67366;
var statearr_67407_67603 = state_67366__$1;
(statearr_67407_67603[(2)] = inst_67328);

(statearr_67407_67603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67367 === (10))){
var inst_67360 = (state_67366[(2)]);
var state_67366__$1 = state_67366;
var statearr_67409_67604 = state_67366__$1;
(statearr_67409_67604[(2)] = inst_67360);

(statearr_67409_67604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67367 === (8))){
var inst_67342 = (state_67366[(9)]);
var inst_67341 = (state_67366[(10)]);
var inst_67328 = (state_67366[(7)]);
var inst_67347 = cljs.core.PersistentVector.EMPTY;
var inst_67348 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_67328,inst_67342);
var inst_67349 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_67347,inst_67348);
var inst_67327 = inst_67341;
var inst_67328__$1 = inst_67349;
var state_67366__$1 = (function (){var statearr_67412 = state_67366;
(statearr_67412[(7)] = inst_67328__$1);

(statearr_67412[(8)] = inst_67327);

return statearr_67412;
})();
var statearr_67414_67610 = state_67366__$1;
(statearr_67414_67610[(2)] = null);

(statearr_67414_67610[(1)] = (2));


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
var frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto__ = null;
var frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto____0 = (function (){
var statearr_67417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67417[(0)] = frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto__);

(statearr_67417[(1)] = (1));

return statearr_67417;
});
var frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto____1 = (function (state_67366){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67366);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67419){var ex__41842__auto__ = e67419;
var statearr_67421_67613 = state_67366;
(statearr_67421_67613[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67366[(4)]))){
var statearr_67422_67616 = state_67366;
(statearr_67422_67616[(1)] = cljs.core.first((state_67366[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67617 = state_67366;
state_67366 = G__67617;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto__ = function(state_67366){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto____1.call(this,state_67366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto____0;
frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67424 = f__41862__auto__();
(statearr_67424[(6)] = c__41861__auto__);

return statearr_67424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.extensions.zotero.api.notes = (function frontend$extensions$zotero$api$notes(key){
return frontend.extensions.zotero.api.all_children_items(key,"note");
});
frontend.extensions.zotero.api.attachments = (function frontend$extensions$zotero$api$attachments(key){
return frontend.extensions.zotero.api.all_children_items(key,"attachment");
});

//# sourceMappingURL=frontend.extensions.zotero.api.js.map
