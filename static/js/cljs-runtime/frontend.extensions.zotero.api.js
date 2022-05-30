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
var c__27595__auto___57504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57105){
var state_val_57106 = (state_57105[(1)]);
if((state_val_57106 === (7))){
var inst_57048 = (state_57105[(2)]);
var state_57105__$1 = state_57105;
var statearr_57107_57505 = state_57105__$1;
(statearr_57107_57505[(2)] = inst_57048);

(statearr_57107_57505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (20))){
var state_57105__$1 = state_57105;
var statearr_57108_57506 = state_57105__$1;
(statearr_57108_57506[(2)] = null);

(statearr_57108_57506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (1))){
var inst_57043 = null;
var state_57105__$1 = (function (){var statearr_57109 = state_57105;
(statearr_57109[(7)] = inst_57043);

return statearr_57109;
})();
var statearr_57110_57507 = state_57105__$1;
(statearr_57110_57507[(2)] = null);

(statearr_57110_57507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (4))){
var state_57105__$1 = state_57105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57105__$1,(7),in$);
} else {
if((state_val_57106 === (15))){
var inst_57051 = (state_57105[(8)]);
var inst_57065 = (state_57105[(9)]);
var inst_57086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57065,(0),null);
var state_57105__$1 = (function (){var statearr_57111 = state_57105;
(statearr_57111[(10)] = inst_57086);

return statearr_57111;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57105__$1,(18),out,inst_57051);
} else {
if((state_val_57106 === (21))){
var inst_57095 = (state_57105[(2)]);
var state_57105__$1 = state_57105;
var statearr_57114_57508 = state_57105__$1;
(statearr_57114_57508[(2)] = inst_57095);

(statearr_57114_57508[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (13))){
var inst_57077 = cljs.core.async.close_BANG_(out);
var state_57105__$1 = state_57105;
var statearr_57115_57509 = state_57105__$1;
(statearr_57115_57509[(2)] = inst_57077);

(statearr_57115_57509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (6))){
var inst_57052 = (state_57105[(11)]);
var inst_57060 = (state_57105[(12)]);
var inst_57051 = (state_57105[(2)]);
var inst_57052__$1 = cljs.core.async.timeout(ms);
var inst_57060__$1 = in$;
var inst_57061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57062 = [inst_57060__$1,inst_57052__$1];
var inst_57063 = (new cljs.core.PersistentVector(null,2,(5),inst_57061,inst_57062,null));
var state_57105__$1 = (function (){var statearr_57117 = state_57105;
(statearr_57117[(8)] = inst_57051);

(statearr_57117[(11)] = inst_57052__$1);

(statearr_57117[(12)] = inst_57060__$1);

return statearr_57117;
})();
return cljs.core.async.ioc_alts_BANG_(state_57105__$1,(8),inst_57063);
} else {
if((state_val_57106 === (17))){
var inst_57097 = (state_57105[(2)]);
var state_57105__$1 = state_57105;
var statearr_57118_57510 = state_57105__$1;
(statearr_57118_57510[(2)] = inst_57097);

(statearr_57118_57510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (3))){
var inst_57101 = (state_57105[(2)]);
var state_57105__$1 = state_57105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57105__$1,inst_57101);
} else {
if((state_val_57106 === (12))){
var inst_57073 = (state_57105[(13)]);
var inst_57043 = inst_57073;
var state_57105__$1 = (function (){var statearr_57119 = state_57105;
(statearr_57119[(7)] = inst_57043);

return statearr_57119;
})();
var statearr_57120_57511 = state_57105__$1;
(statearr_57120_57511[(2)] = null);

(statearr_57120_57511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (2))){
var inst_57043 = (state_57105[(7)]);
var inst_57045 = (inst_57043 == null);
var state_57105__$1 = state_57105;
if(cljs.core.truth_(inst_57045)){
var statearr_57121_57512 = state_57105__$1;
(statearr_57121_57512[(1)] = (4));

} else {
var statearr_57122_57513 = state_57105__$1;
(statearr_57122_57513[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (19))){
var inst_57066 = (state_57105[(14)]);
var state_57105__$1 = state_57105;
var statearr_57124_57514 = state_57105__$1;
(statearr_57124_57514[(2)] = inst_57066);

(statearr_57124_57514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (11))){
var inst_57099 = (state_57105[(2)]);
var state_57105__$1 = state_57105;
var statearr_57126_57515 = state_57105__$1;
(statearr_57126_57515[(2)] = inst_57099);

(statearr_57126_57515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (9))){
var inst_57073 = (state_57105[(13)]);
var inst_57065 = (state_57105[(9)]);
var inst_57073__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57065,(0),null);
var state_57105__$1 = (function (){var statearr_57128 = state_57105;
(statearr_57128[(13)] = inst_57073__$1);

return statearr_57128;
})();
if(cljs.core.truth_(inst_57073__$1)){
var statearr_57129_57516 = state_57105__$1;
(statearr_57129_57516[(1)] = (12));

} else {
var statearr_57130_57517 = state_57105__$1;
(statearr_57130_57517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (5))){
var inst_57043 = (state_57105[(7)]);
var state_57105__$1 = state_57105;
var statearr_57131_57518 = state_57105__$1;
(statearr_57131_57518[(2)] = inst_57043);

(statearr_57131_57518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (14))){
var inst_57079 = (state_57105[(2)]);
var state_57105__$1 = state_57105;
var statearr_57133_57519 = state_57105__$1;
(statearr_57133_57519[(2)] = inst_57079);

(statearr_57133_57519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (16))){
var inst_57067 = (state_57105[(15)]);
var inst_57091 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57067,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_57105__$1 = state_57105;
if(inst_57091){
var statearr_57135_57520 = state_57105__$1;
(statearr_57135_57520[(1)] = (19));

} else {
var statearr_57136_57521 = state_57105__$1;
(statearr_57136_57521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (10))){
var inst_57067 = (state_57105[(15)]);
var inst_57052 = (state_57105[(11)]);
var inst_57081 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57067,inst_57052);
var state_57105__$1 = state_57105;
if(inst_57081){
var statearr_57139_57526 = state_57105__$1;
(statearr_57139_57526[(1)] = (15));

} else {
var statearr_57140_57527 = state_57105__$1;
(statearr_57140_57527[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (18))){
var inst_57088 = (state_57105[(2)]);
var inst_57043 = null;
var state_57105__$1 = (function (){var statearr_57141 = state_57105;
(statearr_57141[(7)] = inst_57043);

(statearr_57141[(16)] = inst_57088);

return statearr_57141;
})();
var statearr_57142_57528 = state_57105__$1;
(statearr_57142_57528[(2)] = null);

(statearr_57142_57528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57106 === (8))){
var inst_57067 = (state_57105[(15)]);
var inst_57065 = (state_57105[(9)]);
var inst_57060 = (state_57105[(12)]);
var inst_57065__$1 = (state_57105[(2)]);
var inst_57066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57065__$1,(0),null);
var inst_57067__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57065__$1,(1),null);
var inst_57068 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57067__$1,inst_57060);
var state_57105__$1 = (function (){var statearr_57143 = state_57105;
(statearr_57143[(15)] = inst_57067__$1);

(statearr_57143[(9)] = inst_57065__$1);

(statearr_57143[(14)] = inst_57066);

return statearr_57143;
})();
if(inst_57068){
var statearr_57144_57530 = state_57105__$1;
(statearr_57144_57530[(1)] = (9));

} else {
var statearr_57145_57531 = state_57105__$1;
(statearr_57145_57531[(1)] = (10));

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
var statearr_57146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57146[(0)] = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__);

(statearr_57146[(1)] = (1));

return statearr_57146;
});
var frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1 = (function (state_57105){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57105);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57149){var ex__27576__auto__ = e57149;
var statearr_57150_57532 = state_57105;
(statearr_57150_57532[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57105[(4)]))){
var statearr_57151_57533 = state_57105;
(statearr_57151_57533[(1)] = cljs.core.first((state_57105[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57534 = state_57105;
state_57105 = G__57534;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__ = function(state_57105){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1.call(this,state_57105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57152 = f__27596__auto__();
(statearr_57152[(6)] = c__27595__auto___57504);

return statearr_57152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return out;
});
frontend.extensions.zotero.api.parse_start = (function frontend$extensions$zotero$api$parse_start(headers,next_or_prev){
var inclue_text = (function (){var G__57172 = next_or_prev;
var G__57172__$1 = (((G__57172 instanceof cljs.core.Keyword))?G__57172.fqn:null);
switch (G__57172__$1) {
case "next":
return "rel=\"next\"";

break;
case "prev":
return "rel=\"prev\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57172__$1)].join('')));

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
var G__57198 = arguments.length;
switch (G__57198) {
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57274){
var state_val_57275 = (state_57274[(1)]);
if((state_val_57275 === (7))){
var inst_57239 = (state_57274[(7)]);
var state_57274__$1 = state_57274;
var statearr_57283_57537 = state_57274__$1;
(statearr_57283_57537[(2)] = inst_57239);

(statearr_57283_57537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (1))){
var inst_57205 = config;
var inst_57206 = cljs.core.__destructure_map(inst_57205);
var inst_57207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57206,new cljs.core.Keyword(null,"api-version","api-version",108847181));
var inst_57208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57206,new cljs.core.Keyword(null,"base","base",185279322));
var inst_57209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57206,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_57211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57206,new cljs.core.Keyword(null,"type-id","type-id",2030062700));
var inst_57215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57206,new cljs.core.Keyword(null,"api-key","api-key",1037904031));
var inst_57216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57206,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_57217 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57209,new cljs.core.Keyword(null,"user","user",1532431356));
var state_57274__$1 = (function (){var statearr_57284 = state_57274;
(statearr_57284[(8)] = inst_57215);

(statearr_57284[(9)] = inst_57211);

(statearr_57284[(10)] = inst_57208);

(statearr_57284[(11)] = inst_57207);

(statearr_57284[(12)] = inst_57216);

return statearr_57284;
})();
if(inst_57217){
var statearr_57285_57538 = state_57274__$1;
(statearr_57285_57538[(1)] = (3));

} else {
var statearr_57286_57539 = state_57274__$1;
(statearr_57286_57539[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (4))){
var state_57274__$1 = state_57274;
var statearr_57287_57540 = state_57274__$1;
(statearr_57287_57540[(2)] = "/groups/");

(statearr_57287_57540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (15))){
var inst_57263 = (state_57274[(13)]);
var inst_57248 = (state_57274[(14)]);
var inst_57265 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_57263,new cljs.core.Keyword(null,"count","count",2139924085),inst_57248);
var state_57274__$1 = state_57274;
var statearr_57288_57541 = state_57274__$1;
(statearr_57288_57541[(2)] = inst_57265);

(statearr_57288_57541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (13))){
var inst_57258 = (state_57274[(15)]);
var state_57274__$1 = state_57274;
var statearr_57290_57542 = state_57274__$1;
(statearr_57290_57542[(2)] = inst_57258);

(statearr_57290_57542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (6))){
var inst_57241 = (state_57274[(16)]);
var inst_57242 = (state_57274[(17)]);
var inst_57246 = (state_57274[(18)]);
var inst_57245 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,inst_57241);
var inst_57246__$1 = frontend.extensions.zotero.api.parse_start(inst_57242,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_57247 = frontend.extensions.zotero.api.parse_start(inst_57242,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_57248 = frontend.extensions.zotero.api.results_count(inst_57242);
var inst_57250 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_57251 = [inst_57245];
var inst_57252 = cljs.core.PersistentHashMap.fromArrays(inst_57250,inst_57251);
var state_57274__$1 = (function (){var statearr_57292 = state_57274;
(statearr_57292[(19)] = inst_57247);

(statearr_57292[(20)] = inst_57252);

(statearr_57292[(18)] = inst_57246__$1);

(statearr_57292[(14)] = inst_57248);

return statearr_57292;
})();
if(cljs.core.truth_(inst_57246__$1)){
var statearr_57293_57543 = state_57274__$1;
(statearr_57293_57543[(1)] = (9));

} else {
var statearr_57294_57544 = state_57274__$1;
(statearr_57294_57544[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (17))){
var inst_57268 = (state_57274[(2)]);
var state_57274__$1 = state_57274;
var statearr_57295_57545 = state_57274__$1;
(statearr_57295_57545[(2)] = inst_57268);

(statearr_57295_57545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (3))){
var state_57274__$1 = state_57274;
var statearr_57296_57546 = state_57274__$1;
(statearr_57296_57546[(2)] = "/users/");

(statearr_57296_57546[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (12))){
var inst_57247 = (state_57274[(19)]);
var inst_57258 = (state_57274[(15)]);
var inst_57260 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_57258,new cljs.core.Keyword(null,"prev","prev",-1597069226),inst_57247);
var state_57274__$1 = state_57274;
var statearr_57297_57547 = state_57274__$1;
(statearr_57297_57547[(2)] = inst_57260);

(statearr_57297_57547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (2))){
var inst_57239 = (state_57274[(7)]);
var inst_57238 = (state_57274[(2)]);
var inst_57239__$1 = cljs.core.__destructure_map(inst_57238);
var inst_57240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57239__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_57241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57239__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_57242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57239__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var state_57274__$1 = (function (){var statearr_57298 = state_57274;
(statearr_57298[(7)] = inst_57239__$1);

(statearr_57298[(16)] = inst_57241);

(statearr_57298[(17)] = inst_57242);

return statearr_57298;
})();
if(cljs.core.truth_(inst_57240)){
var statearr_57299_57548 = state_57274__$1;
(statearr_57299_57548[(1)] = (6));

} else {
var statearr_57300_57549 = state_57274__$1;
(statearr_57300_57549[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (11))){
var inst_57247 = (state_57274[(19)]);
var inst_57258 = (state_57274[(2)]);
var state_57274__$1 = (function (){var statearr_57301 = state_57274;
(statearr_57301[(15)] = inst_57258);

return statearr_57301;
})();
if(cljs.core.truth_(inst_57247)){
var statearr_57302_57550 = state_57274__$1;
(statearr_57302_57550[(1)] = (12));

} else {
var statearr_57303_57551 = state_57274__$1;
(statearr_57303_57551[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (9))){
var inst_57252 = (state_57274[(20)]);
var inst_57246 = (state_57274[(18)]);
var inst_57255 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_57252,new cljs.core.Keyword(null,"next","next",-117701485),inst_57246);
var state_57274__$1 = state_57274;
var statearr_57304_57552 = state_57274__$1;
(statearr_57304_57552[(2)] = inst_57255);

(statearr_57304_57552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (5))){
var inst_57215 = (state_57274[(8)]);
var inst_57211 = (state_57274[(9)]);
var inst_57208 = (state_57274[(10)]);
var inst_57207 = (state_57274[(11)]);
var inst_57216 = (state_57274[(12)]);
var inst_57222 = (state_57274[(2)]);
var inst_57226 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57208),inst_57222,cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57211),cljs.core.str.cljs$core$IFn$_invoke$arity$1(api)].join('');
var inst_57227 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_57229 = ["Zotero-API-Key","Zotero-API-Version"];
var inst_57230 = [inst_57215,inst_57207];
var inst_57231 = cljs.core.PersistentHashMap.fromArrays(inst_57229,inst_57230);
var inst_57233 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_camelCaseString,query_params);
var inst_57234 = [inst_57216,false,inst_57231,inst_57233];
var inst_57235 = cljs.core.PersistentHashMap.fromArrays(inst_57227,inst_57234);
var inst_57236 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_57226,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57235], 0));
var state_57274__$1 = state_57274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57274__$1,(2),inst_57236);
} else {
if((state_val_57275 === (14))){
var inst_57248 = (state_57274[(14)]);
var inst_57263 = (state_57274[(2)]);
var state_57274__$1 = (function (){var statearr_57305 = state_57274;
(statearr_57305[(13)] = inst_57263);

return statearr_57305;
})();
if(cljs.core.truth_(inst_57248)){
var statearr_57306_57553 = state_57274__$1;
(statearr_57306_57553[(1)] = (15));

} else {
var statearr_57307_57554 = state_57274__$1;
(statearr_57307_57554[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (16))){
var inst_57263 = (state_57274[(13)]);
var state_57274__$1 = state_57274;
var statearr_57308_57555 = state_57274__$1;
(statearr_57308_57555[(2)] = inst_57263);

(statearr_57308_57555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (10))){
var inst_57252 = (state_57274[(20)]);
var state_57274__$1 = state_57274;
var statearr_57309_57556 = state_57274__$1;
(statearr_57309_57556[(2)] = inst_57252);

(statearr_57309_57556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57275 === (8))){
var inst_57271 = (state_57274[(2)]);
var state_57274__$1 = state_57274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57274__$1,inst_57271);
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
var statearr_57310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57310[(0)] = frontend$extensions$zotero$api$state_machine__27573__auto__);

(statearr_57310[(1)] = (1));

return statearr_57310;
});
var frontend$extensions$zotero$api$state_machine__27573__auto____1 = (function (state_57274){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57274);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57311){var ex__27576__auto__ = e57311;
var statearr_57312_57557 = state_57274;
(statearr_57312_57557[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57274[(4)]))){
var statearr_57313_57558 = state_57274;
(statearr_57313_57558[(1)] = cljs.core.first((state_57274[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57559 = state_57274;
state_57274 = G__57559;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$state_machine__27573__auto__ = function(state_57274){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$state_machine__27573__auto____1.call(this,state_57274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$state_machine__27573__auto____0;
frontend$extensions$zotero$api$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$state_machine__27573__auto____1;
return frontend$extensions$zotero$api$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57314 = f__27596__auto__();
(statearr_57314[(6)] = c__27595__auto__);

return statearr_57314;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57326){
var state_val_57327 = (state_57326[(1)]);
if((state_val_57327 === (1))){
var inst_57317 = frontend.extensions.zotero.api.config();
var inst_57318 = [new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"item-type","item-type",-73995695)];
var inst_57319 = [(1),"-attachment"];
var inst_57320 = cljs.core.PersistentHashMap.fromArrays(inst_57318,inst_57319);
var inst_57321 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_57317,"/items/top",inst_57320);
var state_57326__$1 = state_57326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57326__$1,(2),inst_57321);
} else {
if((state_val_57327 === (2))){
var inst_57323 = (state_57326[(2)]);
var inst_57324 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(inst_57323);
var state_57326__$1 = state_57326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57326__$1,inst_57324);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0 = (function (){
var statearr_57332 = [null,null,null,null,null,null,null];
(statearr_57332[(0)] = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__);

(statearr_57332[(1)] = (1));

return statearr_57332;
});
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1 = (function (state_57326){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57326);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57333){var ex__27576__auto__ = e57333;
var statearr_57334_57560 = state_57326;
(statearr_57334_57560[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57326[(4)]))){
var statearr_57335_57561 = state_57326;
(statearr_57335_57561[(1)] = cljs.core.first((state_57326[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57562 = state_57326;
state_57326 = G__57562;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__ = function(state_57326){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1.call(this,state_57326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57336 = f__27596__auto__();
(statearr_57336[(6)] = c__27595__auto__);

return statearr_57336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.extensions.zotero.api.all_top_items = (function frontend$extensions$zotero$api$all_top_items(){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57377){
var state_val_57378 = (state_57377[(1)]);
if((state_val_57378 === (7))){
var inst_57372 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57380_57563 = state_57377__$1;
(statearr_57380_57563[(2)] = inst_57372);

(statearr_57380_57563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (1))){
var inst_57337 = cljs.core.PersistentVector.EMPTY;
var inst_57338 = "0";
var inst_57339 = inst_57337;
var state_57377__$1 = (function (){var statearr_57381 = state_57377;
(statearr_57381[(7)] = inst_57339);

(statearr_57381[(8)] = inst_57338);

return statearr_57381;
})();
var statearr_57382_57564 = state_57377__$1;
(statearr_57382_57564[(2)] = null);

(statearr_57382_57564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (4))){
var inst_57348 = (state_57377[(2)]);
var inst_57349 = cljs.core.__destructure_map(inst_57348);
var inst_57350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57349,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_57351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57349,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_57352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57349,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_57353 = inst_57350 === false;
var state_57377__$1 = (function (){var statearr_57383 = state_57377;
(statearr_57383[(9)] = inst_57351);

(statearr_57383[(10)] = inst_57352);

return statearr_57383;
})();
if(cljs.core.truth_(inst_57353)){
var statearr_57384_57565 = state_57377__$1;
(statearr_57384_57565[(1)] = (5));

} else {
var statearr_57385_57566 = state_57377__$1;
(statearr_57385_57566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (13))){
var inst_57368 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57386_57567 = state_57377__$1;
(statearr_57386_57567[(2)] = inst_57368);

(statearr_57386_57567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (6))){
var inst_57351 = (state_57377[(9)]);
var state_57377__$1 = state_57377;
if(cljs.core.truth_(inst_57351)){
var statearr_57387_57568 = state_57377__$1;
(statearr_57387_57568[(1)] = (8));

} else {
var statearr_57388_57569 = state_57377__$1;
(statearr_57388_57569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (3))){
var inst_57374 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57377__$1,inst_57374);
} else {
if((state_val_57378 === (12))){
var state_57377__$1 = state_57377;
var statearr_57389_57570 = state_57377__$1;
(statearr_57389_57570[(2)] = null);

(statearr_57389_57570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (2))){
var inst_57338 = (state_57377[(8)]);
var inst_57342 = frontend.extensions.zotero.api.config();
var inst_57343 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_57344 = ["-attachment",inst_57338];
var inst_57345 = cljs.core.PersistentHashMap.fromArrays(inst_57343,inst_57344);
var inst_57346 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_57342,"/items/top",inst_57345);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57377__$1,(4),inst_57346);
} else {
if((state_val_57378 === (11))){
var inst_57339 = (state_57377[(7)]);
var inst_57352 = (state_57377[(10)]);
var inst_57363 = cljs.core.PersistentVector.EMPTY;
var inst_57364 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57339,inst_57352);
var inst_57365 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57363,inst_57364);
var state_57377__$1 = state_57377;
var statearr_57394_57571 = state_57377__$1;
(statearr_57394_57571[(2)] = inst_57365);

(statearr_57394_57571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (9))){
var state_57377__$1 = state_57377;
var statearr_57396_57572 = state_57377__$1;
(statearr_57396_57572[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (5))){
var inst_57339 = (state_57377[(7)]);
var state_57377__$1 = state_57377;
var statearr_57398_57573 = state_57377__$1;
(statearr_57398_57573[(2)] = inst_57339);

(statearr_57398_57573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (10))){
var inst_57370 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57399_57574 = state_57377__$1;
(statearr_57399_57574[(2)] = inst_57370);

(statearr_57399_57574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (8))){
var inst_57339 = (state_57377[(7)]);
var inst_57351 = (state_57377[(9)]);
var inst_57352 = (state_57377[(10)]);
var inst_57357 = cljs.core.PersistentVector.EMPTY;
var inst_57358 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57339,inst_57352);
var inst_57359 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57357,inst_57358);
var inst_57338 = inst_57351;
var inst_57339__$1 = inst_57359;
var state_57377__$1 = (function (){var statearr_57400 = state_57377;
(statearr_57400[(7)] = inst_57339__$1);

(statearr_57400[(8)] = inst_57338);

return statearr_57400;
})();
var statearr_57401_57575 = state_57377__$1;
(statearr_57401_57575[(2)] = null);

(statearr_57401_57575[(1)] = (2));


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
var statearr_57402 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57402[(0)] = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__);

(statearr_57402[(1)] = (1));

return statearr_57402;
});
var frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1 = (function (state_57377){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57377);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57404){var ex__27576__auto__ = e57404;
var statearr_57405_57576 = state_57377;
(statearr_57405_57576[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57377[(4)]))){
var statearr_57406_57577 = state_57377;
(statearr_57406_57577[(1)] = cljs.core.first((state_57377[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57578 = state_57377;
state_57377 = G__57578;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__ = function(state_57377){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1.call(this,state_57377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57411 = f__27596__auto__();
(statearr_57411[(6)] = c__27595__auto__);

return statearr_57411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
/**
 * Query all top level items except attachments
 */
frontend.extensions.zotero.api.query_top_items = (function frontend$extensions$zotero$api$query_top_items(var_args){
var G__57413 = arguments.length;
switch (G__57413) {
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57459){
var state_val_57460 = (state_57459[(1)]);
if((state_val_57460 === (7))){
var inst_57455 = (state_57459[(2)]);
var state_57459__$1 = state_57459;
var statearr_57461_57580 = state_57459__$1;
(statearr_57461_57580[(2)] = inst_57455);

(statearr_57461_57580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57460 === (1))){
var inst_57415 = cljs.core.PersistentVector.EMPTY;
var inst_57416 = "0";
var inst_57417 = inst_57415;
var state_57459__$1 = (function (){var statearr_57462 = state_57459;
(statearr_57462[(7)] = inst_57416);

(statearr_57462[(8)] = inst_57417);

return statearr_57462;
})();
var statearr_57463_57581 = state_57459__$1;
(statearr_57463_57581[(2)] = null);

(statearr_57463_57581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57460 === (4))){
var inst_57427 = (state_57459[(2)]);
var inst_57428 = cljs.core.__destructure_map(inst_57427);
var inst_57429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57428,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_57430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57428,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_57431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57428,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_57432 = inst_57429 === false;
var state_57459__$1 = (function (){var statearr_57464 = state_57459;
(statearr_57464[(9)] = inst_57430);

(statearr_57464[(10)] = inst_57431);

return statearr_57464;
})();
if(cljs.core.truth_(inst_57432)){
var statearr_57465_57582 = state_57459__$1;
(statearr_57465_57582[(1)] = (5));

} else {
var statearr_57466_57583 = state_57459__$1;
(statearr_57466_57583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57460 === (13))){
var inst_57451 = (state_57459[(2)]);
var state_57459__$1 = state_57459;
var statearr_57467_57584 = state_57459__$1;
(statearr_57467_57584[(2)] = inst_57451);

(statearr_57467_57584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57460 === (6))){
var inst_57430 = (state_57459[(9)]);
var state_57459__$1 = state_57459;
if(cljs.core.truth_(inst_57430)){
var statearr_57468_57585 = state_57459__$1;
(statearr_57468_57585[(1)] = (8));

} else {
var statearr_57469_57586 = state_57459__$1;
(statearr_57469_57586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57460 === (3))){
var inst_57457 = (state_57459[(2)]);
var state_57459__$1 = state_57459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57459__$1,inst_57457);
} else {
if((state_val_57460 === (12))){
var state_57459__$1 = state_57459;
var statearr_57470_57587 = state_57459__$1;
(statearr_57470_57587[(2)] = null);

(statearr_57470_57587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57460 === (2))){
var inst_57416 = (state_57459[(7)]);
var inst_57420 = frontend.extensions.zotero.api.config();
var inst_57421 = ["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"/children"].join('');
var inst_57422 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_57423 = [type,inst_57416];
var inst_57424 = cljs.core.PersistentHashMap.fromArrays(inst_57422,inst_57423);
var inst_57425 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_57420,inst_57421,inst_57424);
var state_57459__$1 = state_57459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57459__$1,(4),inst_57425);
} else {
if((state_val_57460 === (11))){
var inst_57431 = (state_57459[(10)]);
var inst_57417 = (state_57459[(8)]);
var inst_57446 = cljs.core.PersistentVector.EMPTY;
var inst_57447 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57417,inst_57431);
var inst_57448 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57446,inst_57447);
var state_57459__$1 = state_57459;
var statearr_57473_57588 = state_57459__$1;
(statearr_57473_57588[(2)] = inst_57448);

(statearr_57473_57588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57460 === (9))){
var state_57459__$1 = state_57459;
var statearr_57477_57589 = state_57459__$1;
(statearr_57477_57589[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57460 === (5))){
var inst_57417 = (state_57459[(8)]);
var state_57459__$1 = state_57459;
var statearr_57482_57590 = state_57459__$1;
(statearr_57482_57590[(2)] = inst_57417);

(statearr_57482_57590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57460 === (10))){
var inst_57453 = (state_57459[(2)]);
var state_57459__$1 = state_57459;
var statearr_57484_57591 = state_57459__$1;
(statearr_57484_57591[(2)] = inst_57453);

(statearr_57484_57591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57460 === (8))){
var inst_57430 = (state_57459[(9)]);
var inst_57431 = (state_57459[(10)]);
var inst_57417 = (state_57459[(8)]);
var inst_57440 = cljs.core.PersistentVector.EMPTY;
var inst_57441 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57417,inst_57431);
var inst_57442 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57440,inst_57441);
var inst_57416 = inst_57430;
var inst_57417__$1 = inst_57442;
var state_57459__$1 = (function (){var statearr_57486 = state_57459;
(statearr_57486[(7)] = inst_57416);

(statearr_57486[(8)] = inst_57417__$1);

return statearr_57486;
})();
var statearr_57487_57592 = state_57459__$1;
(statearr_57487_57592[(2)] = null);

(statearr_57487_57592[(1)] = (2));


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
var statearr_57489 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57489[(0)] = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__);

(statearr_57489[(1)] = (1));

return statearr_57489;
});
var frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1 = (function (state_57459){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57459);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57490){var ex__27576__auto__ = e57490;
var statearr_57491_57593 = state_57459;
(statearr_57491_57593[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57459[(4)]))){
var statearr_57492_57594 = state_57459;
(statearr_57492_57594[(1)] = cljs.core.first((state_57459[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57595 = state_57459;
state_57459 = G__57595;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__ = function(state_57459){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1.call(this,state_57459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57493 = f__27596__auto__();
(statearr_57493[(6)] = c__27595__auto__);

return statearr_57493;
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
