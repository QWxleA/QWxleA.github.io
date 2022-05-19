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
var c__41861__auto___66945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66368){
var state_val_66369 = (state_66368[(1)]);
if((state_val_66369 === (7))){
var inst_66307 = (state_66368[(2)]);
var state_66368__$1 = state_66368;
var statearr_66374_66946 = state_66368__$1;
(statearr_66374_66946[(2)] = inst_66307);

(statearr_66374_66946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (20))){
var state_66368__$1 = state_66368;
var statearr_66376_66947 = state_66368__$1;
(statearr_66376_66947[(2)] = null);

(statearr_66376_66947[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (1))){
var inst_66302 = null;
var state_66368__$1 = (function (){var statearr_66378 = state_66368;
(statearr_66378[(7)] = inst_66302);

return statearr_66378;
})();
var statearr_66380_66949 = state_66368__$1;
(statearr_66380_66949[(2)] = null);

(statearr_66380_66949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (4))){
var state_66368__$1 = state_66368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66368__$1,(7),in$);
} else {
if((state_val_66369 === (15))){
var inst_66310 = (state_66368[(8)]);
var inst_66325 = (state_66368[(9)]);
var inst_66350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66325,(0),null);
var state_66368__$1 = (function (){var statearr_66383 = state_66368;
(statearr_66383[(10)] = inst_66350);

return statearr_66383;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66368__$1,(18),out,inst_66310);
} else {
if((state_val_66369 === (21))){
var inst_66359 = (state_66368[(2)]);
var state_66368__$1 = state_66368;
var statearr_66386_66950 = state_66368__$1;
(statearr_66386_66950[(2)] = inst_66359);

(statearr_66386_66950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (13))){
var inst_66341 = cljs.core.async.close_BANG_(out);
var state_66368__$1 = state_66368;
var statearr_66388_66951 = state_66368__$1;
(statearr_66388_66951[(2)] = inst_66341);

(statearr_66388_66951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (6))){
var inst_66319 = (state_66368[(11)]);
var inst_66311 = (state_66368[(12)]);
var inst_66310 = (state_66368[(2)]);
var inst_66311__$1 = cljs.core.async.timeout(ms);
var inst_66319__$1 = in$;
var inst_66320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66322 = [inst_66319__$1,inst_66311__$1];
var inst_66323 = (new cljs.core.PersistentVector(null,2,(5),inst_66320,inst_66322,null));
var state_66368__$1 = (function (){var statearr_66389 = state_66368;
(statearr_66389[(11)] = inst_66319__$1);

(statearr_66389[(8)] = inst_66310);

(statearr_66389[(12)] = inst_66311__$1);

return statearr_66389;
})();
return cljs.core.async.ioc_alts_BANG_(state_66368__$1,(8),inst_66323);
} else {
if((state_val_66369 === (17))){
var inst_66361 = (state_66368[(2)]);
var state_66368__$1 = state_66368;
var statearr_66392_66953 = state_66368__$1;
(statearr_66392_66953[(2)] = inst_66361);

(statearr_66392_66953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (3))){
var inst_66365 = (state_66368[(2)]);
var state_66368__$1 = state_66368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66368__$1,inst_66365);
} else {
if((state_val_66369 === (12))){
var inst_66336 = (state_66368[(13)]);
var inst_66302 = inst_66336;
var state_66368__$1 = (function (){var statearr_66393 = state_66368;
(statearr_66393[(7)] = inst_66302);

return statearr_66393;
})();
var statearr_66396_66954 = state_66368__$1;
(statearr_66396_66954[(2)] = null);

(statearr_66396_66954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (2))){
var inst_66302 = (state_66368[(7)]);
var inst_66304 = (inst_66302 == null);
var state_66368__$1 = state_66368;
if(cljs.core.truth_(inst_66304)){
var statearr_66398_66955 = state_66368__$1;
(statearr_66398_66955[(1)] = (4));

} else {
var statearr_66399_66956 = state_66368__$1;
(statearr_66399_66956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (19))){
var inst_66326 = (state_66368[(14)]);
var state_66368__$1 = state_66368;
var statearr_66401_66957 = state_66368__$1;
(statearr_66401_66957[(2)] = inst_66326);

(statearr_66401_66957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (11))){
var inst_66363 = (state_66368[(2)]);
var state_66368__$1 = state_66368;
var statearr_66403_66958 = state_66368__$1;
(statearr_66403_66958[(2)] = inst_66363);

(statearr_66403_66958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (9))){
var inst_66336 = (state_66368[(13)]);
var inst_66325 = (state_66368[(9)]);
var inst_66336__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66325,(0),null);
var state_66368__$1 = (function (){var statearr_66405 = state_66368;
(statearr_66405[(13)] = inst_66336__$1);

return statearr_66405;
})();
if(cljs.core.truth_(inst_66336__$1)){
var statearr_66406_66959 = state_66368__$1;
(statearr_66406_66959[(1)] = (12));

} else {
var statearr_66407_66960 = state_66368__$1;
(statearr_66407_66960[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (5))){
var inst_66302 = (state_66368[(7)]);
var state_66368__$1 = state_66368;
var statearr_66409_66961 = state_66368__$1;
(statearr_66409_66961[(2)] = inst_66302);

(statearr_66409_66961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (14))){
var inst_66343 = (state_66368[(2)]);
var state_66368__$1 = state_66368;
var statearr_66411_66962 = state_66368__$1;
(statearr_66411_66962[(2)] = inst_66343);

(statearr_66411_66962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (16))){
var inst_66327 = (state_66368[(15)]);
var inst_66355 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66327,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_66368__$1 = state_66368;
if(inst_66355){
var statearr_66414_66964 = state_66368__$1;
(statearr_66414_66964[(1)] = (19));

} else {
var statearr_66415_66965 = state_66368__$1;
(statearr_66415_66965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (10))){
var inst_66327 = (state_66368[(15)]);
var inst_66311 = (state_66368[(12)]);
var inst_66345 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66327,inst_66311);
var state_66368__$1 = state_66368;
if(inst_66345){
var statearr_66418_66966 = state_66368__$1;
(statearr_66418_66966[(1)] = (15));

} else {
var statearr_66420_66967 = state_66368__$1;
(statearr_66420_66967[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (18))){
var inst_66352 = (state_66368[(2)]);
var inst_66302 = null;
var state_66368__$1 = (function (){var statearr_66422 = state_66368;
(statearr_66422[(16)] = inst_66352);

(statearr_66422[(7)] = inst_66302);

return statearr_66422;
})();
var statearr_66423_66968 = state_66368__$1;
(statearr_66423_66968[(2)] = null);

(statearr_66423_66968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66369 === (8))){
var inst_66319 = (state_66368[(11)]);
var inst_66327 = (state_66368[(15)]);
var inst_66325 = (state_66368[(9)]);
var inst_66325__$1 = (state_66368[(2)]);
var inst_66326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66325__$1,(0),null);
var inst_66327__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66325__$1,(1),null);
var inst_66329 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66327__$1,inst_66319);
var state_66368__$1 = (function (){var statearr_66425 = state_66368;
(statearr_66425[(15)] = inst_66327__$1);

(statearr_66425[(14)] = inst_66326);

(statearr_66425[(9)] = inst_66325__$1);

return statearr_66425;
})();
if(inst_66329){
var statearr_66426_66969 = state_66368__$1;
(statearr_66426_66969[(1)] = (9));

} else {
var statearr_66427_66970 = state_66368__$1;
(statearr_66427_66970[(1)] = (10));

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
var statearr_66428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66428[(0)] = frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto__);

(statearr_66428[(1)] = (1));

return statearr_66428;
});
var frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto____1 = (function (state_66368){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66368);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66429){var ex__41842__auto__ = e66429;
var statearr_66430_66971 = state_66368;
(statearr_66430_66971[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66368[(4)]))){
var statearr_66431_66972 = state_66368;
(statearr_66431_66972[(1)] = cljs.core.first((state_66368[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66973 = state_66368;
state_66368 = G__66973;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto__ = function(state_66368){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto____1.call(this,state_66368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto____0;
frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$api$debounce_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66433 = f__41862__auto__();
(statearr_66433[(6)] = c__41861__auto___66945);

return statearr_66433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));


return out;
});
frontend.extensions.zotero.api.parse_start = (function frontend$extensions$zotero$api$parse_start(headers,next_or_prev){
var inclue_text = (function (){var G__66436 = next_or_prev;
var G__66436__$1 = (((G__66436 instanceof cljs.core.Keyword))?G__66436.fqn:null);
switch (G__66436__$1) {
case "next":
return "rel=\"next\"";

break;
case "prev":
return "rel=\"prev\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66436__$1)].join('')));

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
var G__66445 = arguments.length;
switch (G__66445) {
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66520){
var state_val_66521 = (state_66520[(1)]);
if((state_val_66521 === (7))){
var inst_66481 = (state_66520[(7)]);
var state_66520__$1 = state_66520;
var statearr_66526_66976 = state_66520__$1;
(statearr_66526_66976[(2)] = inst_66481);

(statearr_66526_66976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (1))){
var inst_66452 = config;
var inst_66453 = cljs.core.__destructure_map(inst_66452);
var inst_66454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66453,new cljs.core.Keyword(null,"api-version","api-version",108847181));
var inst_66456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66453,new cljs.core.Keyword(null,"base","base",185279322));
var inst_66457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66453,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_66458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66453,new cljs.core.Keyword(null,"type-id","type-id",2030062700));
var inst_66459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66453,new cljs.core.Keyword(null,"api-key","api-key",1037904031));
var inst_66460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66453,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_66463 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66457,new cljs.core.Keyword(null,"user","user",1532431356));
var state_66520__$1 = (function (){var statearr_66534 = state_66520;
(statearr_66534[(8)] = inst_66454);

(statearr_66534[(9)] = inst_66459);

(statearr_66534[(10)] = inst_66458);

(statearr_66534[(11)] = inst_66456);

(statearr_66534[(12)] = inst_66460);

return statearr_66534;
})();
if(inst_66463){
var statearr_66536_66977 = state_66520__$1;
(statearr_66536_66977[(1)] = (3));

} else {
var statearr_66538_66978 = state_66520__$1;
(statearr_66538_66978[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (4))){
var state_66520__$1 = state_66520;
var statearr_66541_66979 = state_66520__$1;
(statearr_66541_66979[(2)] = "/groups/");

(statearr_66541_66979[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (15))){
var inst_66490 = (state_66520[(13)]);
var inst_66505 = (state_66520[(14)]);
var inst_66507 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_66505,new cljs.core.Keyword(null,"count","count",2139924085),inst_66490);
var state_66520__$1 = state_66520;
var statearr_66544_66980 = state_66520__$1;
(statearr_66544_66980[(2)] = inst_66507);

(statearr_66544_66980[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (13))){
var inst_66500 = (state_66520[(15)]);
var state_66520__$1 = state_66520;
var statearr_66551_66981 = state_66520__$1;
(statearr_66551_66981[(2)] = inst_66500);

(statearr_66551_66981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (6))){
var inst_66488 = (state_66520[(16)]);
var inst_66483 = (state_66520[(17)]);
var inst_66485 = (state_66520[(18)]);
var inst_66487 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,inst_66483);
var inst_66488__$1 = frontend.extensions.zotero.api.parse_start(inst_66485,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_66489 = frontend.extensions.zotero.api.parse_start(inst_66485,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_66490 = frontend.extensions.zotero.api.results_count(inst_66485);
var inst_66493 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_66494 = [inst_66487];
var inst_66495 = cljs.core.PersistentHashMap.fromArrays(inst_66493,inst_66494);
var state_66520__$1 = (function (){var statearr_66554 = state_66520;
(statearr_66554[(13)] = inst_66490);

(statearr_66554[(19)] = inst_66489);

(statearr_66554[(16)] = inst_66488__$1);

(statearr_66554[(20)] = inst_66495);

return statearr_66554;
})();
if(cljs.core.truth_(inst_66488__$1)){
var statearr_66557_66982 = state_66520__$1;
(statearr_66557_66982[(1)] = (9));

} else {
var statearr_66558_66983 = state_66520__$1;
(statearr_66558_66983[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (17))){
var inst_66510 = (state_66520[(2)]);
var state_66520__$1 = state_66520;
var statearr_66559_66984 = state_66520__$1;
(statearr_66559_66984[(2)] = inst_66510);

(statearr_66559_66984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (3))){
var state_66520__$1 = state_66520;
var statearr_66561_66985 = state_66520__$1;
(statearr_66561_66985[(2)] = "/users/");

(statearr_66561_66985[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (12))){
var inst_66489 = (state_66520[(19)]);
var inst_66500 = (state_66520[(15)]);
var inst_66502 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_66500,new cljs.core.Keyword(null,"prev","prev",-1597069226),inst_66489);
var state_66520__$1 = state_66520;
var statearr_66562_66986 = state_66520__$1;
(statearr_66562_66986[(2)] = inst_66502);

(statearr_66562_66986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (2))){
var inst_66481 = (state_66520[(7)]);
var inst_66480 = (state_66520[(2)]);
var inst_66481__$1 = cljs.core.__destructure_map(inst_66480);
var inst_66482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66481__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_66483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66481__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_66485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66481__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var state_66520__$1 = (function (){var statearr_66565 = state_66520;
(statearr_66565[(17)] = inst_66483);

(statearr_66565[(7)] = inst_66481__$1);

(statearr_66565[(18)] = inst_66485);

return statearr_66565;
})();
if(cljs.core.truth_(inst_66482)){
var statearr_66567_66992 = state_66520__$1;
(statearr_66567_66992[(1)] = (6));

} else {
var statearr_66571_66993 = state_66520__$1;
(statearr_66571_66993[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (11))){
var inst_66489 = (state_66520[(19)]);
var inst_66500 = (state_66520[(2)]);
var state_66520__$1 = (function (){var statearr_66588 = state_66520;
(statearr_66588[(15)] = inst_66500);

return statearr_66588;
})();
if(cljs.core.truth_(inst_66489)){
var statearr_66595_66996 = state_66520__$1;
(statearr_66595_66996[(1)] = (12));

} else {
var statearr_66603_66997 = state_66520__$1;
(statearr_66603_66997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (9))){
var inst_66488 = (state_66520[(16)]);
var inst_66495 = (state_66520[(20)]);
var inst_66497 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_66495,new cljs.core.Keyword(null,"next","next",-117701485),inst_66488);
var state_66520__$1 = state_66520;
var statearr_66608_66998 = state_66520__$1;
(statearr_66608_66998[(2)] = inst_66497);

(statearr_66608_66998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (5))){
var inst_66454 = (state_66520[(8)]);
var inst_66459 = (state_66520[(9)]);
var inst_66458 = (state_66520[(10)]);
var inst_66456 = (state_66520[(11)]);
var inst_66460 = (state_66520[(12)]);
var inst_66468 = (state_66520[(2)]);
var inst_66469 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66456),inst_66468,cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66458),cljs.core.str.cljs$core$IFn$_invoke$arity$1(api)].join('');
var inst_66470 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_66472 = ["Zotero-API-Key","Zotero-API-Version"];
var inst_66473 = [inst_66459,inst_66454];
var inst_66474 = cljs.core.PersistentHashMap.fromArrays(inst_66472,inst_66473);
var inst_66475 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_camelCaseString,query_params);
var inst_66476 = [inst_66460,false,inst_66474,inst_66475];
var inst_66477 = cljs.core.PersistentHashMap.fromArrays(inst_66470,inst_66476);
var inst_66478 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_66469,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66477], 0));
var state_66520__$1 = state_66520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66520__$1,(2),inst_66478);
} else {
if((state_val_66521 === (14))){
var inst_66490 = (state_66520[(13)]);
var inst_66505 = (state_66520[(2)]);
var state_66520__$1 = (function (){var statearr_66618 = state_66520;
(statearr_66618[(14)] = inst_66505);

return statearr_66618;
})();
if(cljs.core.truth_(inst_66490)){
var statearr_66620_67002 = state_66520__$1;
(statearr_66620_67002[(1)] = (15));

} else {
var statearr_66621_67003 = state_66520__$1;
(statearr_66621_67003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (16))){
var inst_66505 = (state_66520[(14)]);
var state_66520__$1 = state_66520;
var statearr_66623_67004 = state_66520__$1;
(statearr_66623_67004[(2)] = inst_66505);

(statearr_66623_67004[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (10))){
var inst_66495 = (state_66520[(20)]);
var state_66520__$1 = state_66520;
var statearr_66625_67023 = state_66520__$1;
(statearr_66625_67023[(2)] = inst_66495);

(statearr_66625_67023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66521 === (8))){
var inst_66513 = (state_66520[(2)]);
var state_66520__$1 = state_66520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66520__$1,inst_66513);
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
var statearr_66630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66630[(0)] = frontend$extensions$zotero$api$state_machine__41839__auto__);

(statearr_66630[(1)] = (1));

return statearr_66630;
});
var frontend$extensions$zotero$api$state_machine__41839__auto____1 = (function (state_66520){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66520);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66633){var ex__41842__auto__ = e66633;
var statearr_66634_67033 = state_66520;
(statearr_66634_67033[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66520[(4)]))){
var statearr_66635_67034 = state_66520;
(statearr_66635_67034[(1)] = cljs.core.first((state_66520[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67035 = state_66520;
state_66520 = G__67035;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$api$state_machine__41839__auto__ = function(state_66520){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$state_machine__41839__auto____1.call(this,state_66520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$state_machine__41839__auto____0;
frontend$extensions$zotero$api$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$state_machine__41839__auto____1;
return frontend$extensions$zotero$api$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66641 = f__41862__auto__();
(statearr_66641[(6)] = c__41861__auto__);

return statearr_66641;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66705){
var state_val_66707 = (state_66705[(1)]);
if((state_val_66707 === (1))){
var inst_66686 = frontend.extensions.zotero.api.config();
var inst_66691 = [new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"item-type","item-type",-73995695)];
var inst_66692 = [(1),"-attachment"];
var inst_66693 = cljs.core.PersistentHashMap.fromArrays(inst_66691,inst_66692);
var inst_66694 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_66686,"/items/top",inst_66693);
var state_66705__$1 = state_66705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66705__$1,(2),inst_66694);
} else {
if((state_val_66707 === (2))){
var inst_66696 = (state_66705[(2)]);
var inst_66697 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(inst_66696);
var state_66705__$1 = state_66705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66705__$1,inst_66697);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__ = null;
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____0 = (function (){
var statearr_66735 = [null,null,null,null,null,null,null];
(statearr_66735[(0)] = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__);

(statearr_66735[(1)] = (1));

return statearr_66735;
});
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____1 = (function (state_66705){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66705);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66737){var ex__41842__auto__ = e66737;
var statearr_66739_67038 = state_66705;
(statearr_66739_67038[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66705[(4)]))){
var statearr_66741_67040 = state_66705;
(statearr_66741_67040[(1)] = cljs.core.first((state_66705[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67042 = state_66705;
state_66705 = G__67042;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__ = function(state_66705){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____1.call(this,state_66705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____0;
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66745 = f__41862__auto__();
(statearr_66745[(6)] = c__41861__auto__);

return statearr_66745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.extensions.zotero.api.all_top_items = (function frontend$extensions$zotero$api$all_top_items(){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66795){
var state_val_66796 = (state_66795[(1)]);
if((state_val_66796 === (7))){
var inst_66791 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66797_67046 = state_66795__$1;
(statearr_66797_67046[(2)] = inst_66791);

(statearr_66797_67046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (1))){
var inst_66752 = cljs.core.PersistentVector.EMPTY;
var inst_66753 = "0";
var inst_66754 = inst_66752;
var state_66795__$1 = (function (){var statearr_66798 = state_66795;
(statearr_66798[(7)] = inst_66753);

(statearr_66798[(8)] = inst_66754);

return statearr_66798;
})();
var statearr_66799_67048 = state_66795__$1;
(statearr_66799_67048[(2)] = null);

(statearr_66799_67048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (4))){
var inst_66765 = (state_66795[(2)]);
var inst_66766 = cljs.core.__destructure_map(inst_66765);
var inst_66768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66766,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_66769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66766,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_66770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66766,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_66771 = inst_66768 === false;
var state_66795__$1 = (function (){var statearr_66800 = state_66795;
(statearr_66800[(9)] = inst_66769);

(statearr_66800[(10)] = inst_66770);

return statearr_66800;
})();
if(cljs.core.truth_(inst_66771)){
var statearr_66802_67056 = state_66795__$1;
(statearr_66802_67056[(1)] = (5));

} else {
var statearr_66804_67057 = state_66795__$1;
(statearr_66804_67057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (13))){
var inst_66787 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66805_67058 = state_66795__$1;
(statearr_66805_67058[(2)] = inst_66787);

(statearr_66805_67058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (6))){
var inst_66769 = (state_66795[(9)]);
var state_66795__$1 = state_66795;
if(cljs.core.truth_(inst_66769)){
var statearr_66806_67060 = state_66795__$1;
(statearr_66806_67060[(1)] = (8));

} else {
var statearr_66807_67061 = state_66795__$1;
(statearr_66807_67061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (3))){
var inst_66793 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66795__$1,inst_66793);
} else {
if((state_val_66796 === (12))){
var state_66795__$1 = state_66795;
var statearr_66813_67064 = state_66795__$1;
(statearr_66813_67064[(2)] = null);

(statearr_66813_67064[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (2))){
var inst_66753 = (state_66795[(7)]);
var inst_66759 = frontend.extensions.zotero.api.config();
var inst_66760 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_66761 = ["-attachment",inst_66753];
var inst_66762 = cljs.core.PersistentHashMap.fromArrays(inst_66760,inst_66761);
var inst_66763 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_66759,"/items/top",inst_66762);
var state_66795__$1 = state_66795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66795__$1,(4),inst_66763);
} else {
if((state_val_66796 === (11))){
var inst_66770 = (state_66795[(10)]);
var inst_66754 = (state_66795[(8)]);
var inst_66782 = cljs.core.PersistentVector.EMPTY;
var inst_66783 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_66754,inst_66770);
var inst_66784 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_66782,inst_66783);
var state_66795__$1 = state_66795;
var statearr_66818_67066 = state_66795__$1;
(statearr_66818_67066[(2)] = inst_66784);

(statearr_66818_67066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (9))){
var state_66795__$1 = state_66795;
var statearr_66819_67069 = state_66795__$1;
(statearr_66819_67069[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (5))){
var inst_66754 = (state_66795[(8)]);
var state_66795__$1 = state_66795;
var statearr_66821_67070 = state_66795__$1;
(statearr_66821_67070[(2)] = inst_66754);

(statearr_66821_67070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (10))){
var inst_66789 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66823_67073 = state_66795__$1;
(statearr_66823_67073[(2)] = inst_66789);

(statearr_66823_67073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (8))){
var inst_66769 = (state_66795[(9)]);
var inst_66770 = (state_66795[(10)]);
var inst_66754 = (state_66795[(8)]);
var inst_66775 = cljs.core.PersistentVector.EMPTY;
var inst_66776 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_66754,inst_66770);
var inst_66777 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_66775,inst_66776);
var inst_66753 = inst_66769;
var inst_66754__$1 = inst_66777;
var state_66795__$1 = (function (){var statearr_66827 = state_66795;
(statearr_66827[(7)] = inst_66753);

(statearr_66827[(8)] = inst_66754__$1);

return statearr_66827;
})();
var statearr_66829_67107 = state_66795__$1;
(statearr_66829_67107[(2)] = null);

(statearr_66829_67107[(1)] = (2));


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
var statearr_66834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66834[(0)] = frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto__);

(statearr_66834[(1)] = (1));

return statearr_66834;
});
var frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto____1 = (function (state_66795){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66795);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66838){var ex__41842__auto__ = e66838;
var statearr_66839_67126 = state_66795;
(statearr_66839_67126[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66795[(4)]))){
var statearr_66841_67129 = state_66795;
(statearr_66841_67129[(1)] = cljs.core.first((state_66795[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67139 = state_66795;
state_66795 = G__67139;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto__ = function(state_66795){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto____1.call(this,state_66795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto____0;
frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$api$all_top_items_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66844 = f__41862__auto__();
(statearr_66844[(6)] = c__41861__auto__);

return statearr_66844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
/**
 * Query all top level items except attachments
 */
frontend.extensions.zotero.api.query_top_items = (function frontend$extensions$zotero$api$query_top_items(var_args){
var G__66850 = arguments.length;
switch (G__66850) {
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66895){
var state_val_66896 = (state_66895[(1)]);
if((state_val_66896 === (7))){
var inst_66891 = (state_66895[(2)]);
var state_66895__$1 = state_66895;
var statearr_66898_67204 = state_66895__$1;
(statearr_66898_67204[(2)] = inst_66891);

(statearr_66898_67204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66896 === (1))){
var inst_66855 = cljs.core.PersistentVector.EMPTY;
var inst_66856 = "0";
var inst_66857 = inst_66855;
var state_66895__$1 = (function (){var statearr_66903 = state_66895;
(statearr_66903[(7)] = inst_66856);

(statearr_66903[(8)] = inst_66857);

return statearr_66903;
})();
var statearr_66904_67223 = state_66895__$1;
(statearr_66904_67223[(2)] = null);

(statearr_66904_67223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66896 === (4))){
var inst_66867 = (state_66895[(2)]);
var inst_66868 = cljs.core.__destructure_map(inst_66867);
var inst_66869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66868,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_66870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66868,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_66871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66868,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_66872 = inst_66869 === false;
var state_66895__$1 = (function (){var statearr_66905 = state_66895;
(statearr_66905[(9)] = inst_66871);

(statearr_66905[(10)] = inst_66870);

return statearr_66905;
})();
if(cljs.core.truth_(inst_66872)){
var statearr_66906_67246 = state_66895__$1;
(statearr_66906_67246[(1)] = (5));

} else {
var statearr_66907_67247 = state_66895__$1;
(statearr_66907_67247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66896 === (13))){
var inst_66887 = (state_66895[(2)]);
var state_66895__$1 = state_66895;
var statearr_66910_67248 = state_66895__$1;
(statearr_66910_67248[(2)] = inst_66887);

(statearr_66910_67248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66896 === (6))){
var inst_66870 = (state_66895[(10)]);
var state_66895__$1 = state_66895;
if(cljs.core.truth_(inst_66870)){
var statearr_66911_67249 = state_66895__$1;
(statearr_66911_67249[(1)] = (8));

} else {
var statearr_66912_67250 = state_66895__$1;
(statearr_66912_67250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66896 === (3))){
var inst_66893 = (state_66895[(2)]);
var state_66895__$1 = state_66895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66895__$1,inst_66893);
} else {
if((state_val_66896 === (12))){
var state_66895__$1 = state_66895;
var statearr_66913_67251 = state_66895__$1;
(statearr_66913_67251[(2)] = null);

(statearr_66913_67251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66896 === (2))){
var inst_66856 = (state_66895[(7)]);
var inst_66860 = frontend.extensions.zotero.api.config();
var inst_66861 = ["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"/children"].join('');
var inst_66862 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_66863 = [type,inst_66856];
var inst_66864 = cljs.core.PersistentHashMap.fromArrays(inst_66862,inst_66863);
var inst_66865 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_66860,inst_66861,inst_66864);
var state_66895__$1 = state_66895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66895__$1,(4),inst_66865);
} else {
if((state_val_66896 === (11))){
var inst_66857 = (state_66895[(8)]);
var inst_66871 = (state_66895[(9)]);
var inst_66882 = cljs.core.PersistentVector.EMPTY;
var inst_66883 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_66857,inst_66871);
var inst_66884 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_66882,inst_66883);
var state_66895__$1 = state_66895;
var statearr_66914_67252 = state_66895__$1;
(statearr_66914_67252[(2)] = inst_66884);

(statearr_66914_67252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66896 === (9))){
var state_66895__$1 = state_66895;
var statearr_66915_67253 = state_66895__$1;
(statearr_66915_67253[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66896 === (5))){
var inst_66857 = (state_66895[(8)]);
var state_66895__$1 = state_66895;
var statearr_66917_67254 = state_66895__$1;
(statearr_66917_67254[(2)] = inst_66857);

(statearr_66917_67254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66896 === (10))){
var inst_66889 = (state_66895[(2)]);
var state_66895__$1 = state_66895;
var statearr_66918_67256 = state_66895__$1;
(statearr_66918_67256[(2)] = inst_66889);

(statearr_66918_67256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66896 === (8))){
var inst_66857 = (state_66895[(8)]);
var inst_66871 = (state_66895[(9)]);
var inst_66870 = (state_66895[(10)]);
var inst_66876 = cljs.core.PersistentVector.EMPTY;
var inst_66877 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_66857,inst_66871);
var inst_66878 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_66876,inst_66877);
var inst_66856 = inst_66870;
var inst_66857__$1 = inst_66878;
var state_66895__$1 = (function (){var statearr_66923 = state_66895;
(statearr_66923[(7)] = inst_66856);

(statearr_66923[(8)] = inst_66857__$1);

return statearr_66923;
})();
var statearr_66924_67259 = state_66895__$1;
(statearr_66924_67259[(2)] = null);

(statearr_66924_67259[(1)] = (2));


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
var statearr_66926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66926[(0)] = frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto__);

(statearr_66926[(1)] = (1));

return statearr_66926;
});
var frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto____1 = (function (state_66895){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66895);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66927){var ex__41842__auto__ = e66927;
var statearr_66931_67261 = state_66895;
(statearr_66931_67261[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66895[(4)]))){
var statearr_66932_67263 = state_66895;
(statearr_66932_67263[(1)] = cljs.core.first((state_66895[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67265 = state_66895;
state_66895 = G__67265;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto__ = function(state_66895){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto____1.call(this,state_66895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto____0;
frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$api$all_children_items_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66937 = f__41862__auto__();
(statearr_66937[(6)] = c__41861__auto__);

return statearr_66937;
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
