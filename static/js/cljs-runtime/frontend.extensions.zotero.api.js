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
var c__27595__auto___57496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57207){
var state_val_57208 = (state_57207[(1)]);
if((state_val_57208 === (7))){
var inst_57145 = (state_57207[(2)]);
var state_57207__$1 = state_57207;
var statearr_57209_57497 = state_57207__$1;
(statearr_57209_57497[(2)] = inst_57145);

(statearr_57209_57497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (20))){
var state_57207__$1 = state_57207;
var statearr_57210_57498 = state_57207__$1;
(statearr_57210_57498[(2)] = null);

(statearr_57210_57498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (1))){
var inst_57140 = null;
var state_57207__$1 = (function (){var statearr_57211 = state_57207;
(statearr_57211[(7)] = inst_57140);

return statearr_57211;
})();
var statearr_57212_57499 = state_57207__$1;
(statearr_57212_57499[(2)] = null);

(statearr_57212_57499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (4))){
var state_57207__$1 = state_57207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57207__$1,(7),in$);
} else {
if((state_val_57208 === (15))){
var inst_57162 = (state_57207[(8)]);
var inst_57148 = (state_57207[(9)]);
var inst_57183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57162,(0),null);
var state_57207__$1 = (function (){var statearr_57213 = state_57207;
(statearr_57213[(10)] = inst_57183);

return statearr_57213;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57207__$1,(18),out,inst_57148);
} else {
if((state_val_57208 === (21))){
var inst_57195 = (state_57207[(2)]);
var state_57207__$1 = state_57207;
var statearr_57214_57500 = state_57207__$1;
(statearr_57214_57500[(2)] = inst_57195);

(statearr_57214_57500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (13))){
var inst_57174 = cljs.core.async.close_BANG_(out);
var state_57207__$1 = state_57207;
var statearr_57216_57501 = state_57207__$1;
(statearr_57216_57501[(2)] = inst_57174);

(statearr_57216_57501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (6))){
var inst_57157 = (state_57207[(11)]);
var inst_57149 = (state_57207[(12)]);
var inst_57148 = (state_57207[(2)]);
var inst_57149__$1 = cljs.core.async.timeout(ms);
var inst_57157__$1 = in$;
var inst_57158 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57159 = [inst_57157__$1,inst_57149__$1];
var inst_57160 = (new cljs.core.PersistentVector(null,2,(5),inst_57158,inst_57159,null));
var state_57207__$1 = (function (){var statearr_57217 = state_57207;
(statearr_57217[(11)] = inst_57157__$1);

(statearr_57217[(9)] = inst_57148);

(statearr_57217[(12)] = inst_57149__$1);

return statearr_57217;
})();
return cljs.core.async.ioc_alts_BANG_(state_57207__$1,(8),inst_57160);
} else {
if((state_val_57208 === (17))){
var inst_57197 = (state_57207[(2)]);
var state_57207__$1 = state_57207;
var statearr_57220_57502 = state_57207__$1;
(statearr_57220_57502[(2)] = inst_57197);

(statearr_57220_57502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (3))){
var inst_57205 = (state_57207[(2)]);
var state_57207__$1 = state_57207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57207__$1,inst_57205);
} else {
if((state_val_57208 === (12))){
var inst_57170 = (state_57207[(13)]);
var inst_57140 = inst_57170;
var state_57207__$1 = (function (){var statearr_57224 = state_57207;
(statearr_57224[(7)] = inst_57140);

return statearr_57224;
})();
var statearr_57226_57503 = state_57207__$1;
(statearr_57226_57503[(2)] = null);

(statearr_57226_57503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (2))){
var inst_57140 = (state_57207[(7)]);
var inst_57142 = (inst_57140 == null);
var state_57207__$1 = state_57207;
if(cljs.core.truth_(inst_57142)){
var statearr_57230_57504 = state_57207__$1;
(statearr_57230_57504[(1)] = (4));

} else {
var statearr_57233_57505 = state_57207__$1;
(statearr_57233_57505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (19))){
var inst_57163 = (state_57207[(14)]);
var state_57207__$1 = state_57207;
var statearr_57237_57506 = state_57207__$1;
(statearr_57237_57506[(2)] = inst_57163);

(statearr_57237_57506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (11))){
var inst_57199 = (state_57207[(2)]);
var state_57207__$1 = state_57207;
var statearr_57238_57507 = state_57207__$1;
(statearr_57238_57507[(2)] = inst_57199);

(statearr_57238_57507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (9))){
var inst_57162 = (state_57207[(8)]);
var inst_57170 = (state_57207[(13)]);
var inst_57170__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57162,(0),null);
var state_57207__$1 = (function (){var statearr_57239 = state_57207;
(statearr_57239[(13)] = inst_57170__$1);

return statearr_57239;
})();
if(cljs.core.truth_(inst_57170__$1)){
var statearr_57240_57508 = state_57207__$1;
(statearr_57240_57508[(1)] = (12));

} else {
var statearr_57241_57509 = state_57207__$1;
(statearr_57241_57509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (5))){
var inst_57140 = (state_57207[(7)]);
var state_57207__$1 = state_57207;
var statearr_57242_57510 = state_57207__$1;
(statearr_57242_57510[(2)] = inst_57140);

(statearr_57242_57510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (14))){
var inst_57176 = (state_57207[(2)]);
var state_57207__$1 = state_57207;
var statearr_57243_57511 = state_57207__$1;
(statearr_57243_57511[(2)] = inst_57176);

(statearr_57243_57511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (16))){
var inst_57164 = (state_57207[(15)]);
var inst_57188 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57164,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_57207__$1 = state_57207;
if(inst_57188){
var statearr_57244_57512 = state_57207__$1;
(statearr_57244_57512[(1)] = (19));

} else {
var statearr_57245_57513 = state_57207__$1;
(statearr_57245_57513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (10))){
var inst_57149 = (state_57207[(12)]);
var inst_57164 = (state_57207[(15)]);
var inst_57178 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57164,inst_57149);
var state_57207__$1 = state_57207;
if(inst_57178){
var statearr_57246_57514 = state_57207__$1;
(statearr_57246_57514[(1)] = (15));

} else {
var statearr_57247_57515 = state_57207__$1;
(statearr_57247_57515[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (18))){
var inst_57185 = (state_57207[(2)]);
var inst_57140 = null;
var state_57207__$1 = (function (){var statearr_57248 = state_57207;
(statearr_57248[(7)] = inst_57140);

(statearr_57248[(16)] = inst_57185);

return statearr_57248;
})();
var statearr_57249_57516 = state_57207__$1;
(statearr_57249_57516[(2)] = null);

(statearr_57249_57516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57208 === (8))){
var inst_57157 = (state_57207[(11)]);
var inst_57162 = (state_57207[(8)]);
var inst_57164 = (state_57207[(15)]);
var inst_57162__$1 = (state_57207[(2)]);
var inst_57163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57162__$1,(0),null);
var inst_57164__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57162__$1,(1),null);
var inst_57165 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57164__$1,inst_57157);
var state_57207__$1 = (function (){var statearr_57250 = state_57207;
(statearr_57250[(14)] = inst_57163);

(statearr_57250[(8)] = inst_57162__$1);

(statearr_57250[(15)] = inst_57164__$1);

return statearr_57250;
})();
if(inst_57165){
var statearr_57251_57517 = state_57207__$1;
(statearr_57251_57517[(1)] = (9));

} else {
var statearr_57252_57518 = state_57207__$1;
(statearr_57252_57518[(1)] = (10));

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
var statearr_57253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57253[(0)] = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__);

(statearr_57253[(1)] = (1));

return statearr_57253;
});
var frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1 = (function (state_57207){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57207);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57254){var ex__27576__auto__ = e57254;
var statearr_57255_57519 = state_57207;
(statearr_57255_57519[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57207[(4)]))){
var statearr_57256_57520 = state_57207;
(statearr_57256_57520[(1)] = cljs.core.first((state_57207[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57521 = state_57207;
state_57207 = G__57521;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__ = function(state_57207){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1.call(this,state_57207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57257 = f__27596__auto__();
(statearr_57257[(6)] = c__27595__auto___57496);

return statearr_57257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return out;
});
frontend.extensions.zotero.api.parse_start = (function frontend$extensions$zotero$api$parse_start(headers,next_or_prev){
var inclue_text = (function (){var G__57258 = next_or_prev;
var G__57258__$1 = (((G__57258 instanceof cljs.core.Keyword))?G__57258.fqn:null);
switch (G__57258__$1) {
case "next":
return "rel=\"next\"";

break;
case "prev":
return "rel=\"prev\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57258__$1)].join('')));

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
var G__57260 = arguments.length;
switch (G__57260) {
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57319){
var state_val_57320 = (state_57319[(1)]);
if((state_val_57320 === (7))){
var inst_57287 = (state_57319[(7)]);
var state_57319__$1 = state_57319;
var statearr_57321_57524 = state_57319__$1;
(statearr_57321_57524[(2)] = inst_57287);

(statearr_57321_57524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (1))){
var inst_57263 = config;
var inst_57264 = cljs.core.__destructure_map(inst_57263);
var inst_57265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57264,new cljs.core.Keyword(null,"api-version","api-version",108847181));
var inst_57266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57264,new cljs.core.Keyword(null,"base","base",185279322));
var inst_57267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57264,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_57268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57264,new cljs.core.Keyword(null,"type-id","type-id",2030062700));
var inst_57269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57264,new cljs.core.Keyword(null,"api-key","api-key",1037904031));
var inst_57270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57264,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_57271 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57267,new cljs.core.Keyword(null,"user","user",1532431356));
var state_57319__$1 = (function (){var statearr_57322 = state_57319;
(statearr_57322[(8)] = inst_57266);

(statearr_57322[(9)] = inst_57268);

(statearr_57322[(10)] = inst_57270);

(statearr_57322[(11)] = inst_57265);

(statearr_57322[(12)] = inst_57269);

return statearr_57322;
})();
if(inst_57271){
var statearr_57323_57525 = state_57319__$1;
(statearr_57323_57525[(1)] = (3));

} else {
var statearr_57324_57526 = state_57319__$1;
(statearr_57324_57526[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (4))){
var state_57319__$1 = state_57319;
var statearr_57325_57527 = state_57319__$1;
(statearr_57325_57527[(2)] = "/groups/");

(statearr_57325_57527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (15))){
var inst_57295 = (state_57319[(13)]);
var inst_57309 = (state_57319[(14)]);
var inst_57311 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_57309,new cljs.core.Keyword(null,"count","count",2139924085),inst_57295);
var state_57319__$1 = state_57319;
var statearr_57326_57528 = state_57319__$1;
(statearr_57326_57528[(2)] = inst_57311);

(statearr_57326_57528[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (13))){
var inst_57304 = (state_57319[(15)]);
var state_57319__$1 = state_57319;
var statearr_57327_57529 = state_57319__$1;
(statearr_57327_57529[(2)] = inst_57304);

(statearr_57327_57529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (6))){
var inst_57293 = (state_57319[(16)]);
var inst_57289 = (state_57319[(17)]);
var inst_57290 = (state_57319[(18)]);
var inst_57292 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,inst_57289);
var inst_57293__$1 = frontend.extensions.zotero.api.parse_start(inst_57290,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_57294 = frontend.extensions.zotero.api.parse_start(inst_57290,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_57295 = frontend.extensions.zotero.api.results_count(inst_57290);
var inst_57297 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_57298 = [inst_57292];
var inst_57299 = cljs.core.PersistentHashMap.fromArrays(inst_57297,inst_57298);
var state_57319__$1 = (function (){var statearr_57328 = state_57319;
(statearr_57328[(13)] = inst_57295);

(statearr_57328[(16)] = inst_57293__$1);

(statearr_57328[(19)] = inst_57294);

(statearr_57328[(20)] = inst_57299);

return statearr_57328;
})();
if(cljs.core.truth_(inst_57293__$1)){
var statearr_57329_57530 = state_57319__$1;
(statearr_57329_57530[(1)] = (9));

} else {
var statearr_57330_57531 = state_57319__$1;
(statearr_57330_57531[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (17))){
var inst_57314 = (state_57319[(2)]);
var state_57319__$1 = state_57319;
var statearr_57331_57532 = state_57319__$1;
(statearr_57331_57532[(2)] = inst_57314);

(statearr_57331_57532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (3))){
var state_57319__$1 = state_57319;
var statearr_57332_57533 = state_57319__$1;
(statearr_57332_57533[(2)] = "/users/");

(statearr_57332_57533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (12))){
var inst_57304 = (state_57319[(15)]);
var inst_57294 = (state_57319[(19)]);
var inst_57306 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_57304,new cljs.core.Keyword(null,"prev","prev",-1597069226),inst_57294);
var state_57319__$1 = state_57319;
var statearr_57333_57534 = state_57319__$1;
(statearr_57333_57534[(2)] = inst_57306);

(statearr_57333_57534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (2))){
var inst_57287 = (state_57319[(7)]);
var inst_57286 = (state_57319[(2)]);
var inst_57287__$1 = cljs.core.__destructure_map(inst_57286);
var inst_57288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57287__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_57289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57287__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_57290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57287__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var state_57319__$1 = (function (){var statearr_57334 = state_57319;
(statearr_57334[(17)] = inst_57289);

(statearr_57334[(7)] = inst_57287__$1);

(statearr_57334[(18)] = inst_57290);

return statearr_57334;
})();
if(cljs.core.truth_(inst_57288)){
var statearr_57335_57535 = state_57319__$1;
(statearr_57335_57535[(1)] = (6));

} else {
var statearr_57336_57536 = state_57319__$1;
(statearr_57336_57536[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (11))){
var inst_57294 = (state_57319[(19)]);
var inst_57304 = (state_57319[(2)]);
var state_57319__$1 = (function (){var statearr_57337 = state_57319;
(statearr_57337[(15)] = inst_57304);

return statearr_57337;
})();
if(cljs.core.truth_(inst_57294)){
var statearr_57338_57537 = state_57319__$1;
(statearr_57338_57537[(1)] = (12));

} else {
var statearr_57339_57538 = state_57319__$1;
(statearr_57339_57538[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (9))){
var inst_57293 = (state_57319[(16)]);
var inst_57299 = (state_57319[(20)]);
var inst_57301 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_57299,new cljs.core.Keyword(null,"next","next",-117701485),inst_57293);
var state_57319__$1 = state_57319;
var statearr_57340_57539 = state_57319__$1;
(statearr_57340_57539[(2)] = inst_57301);

(statearr_57340_57539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (5))){
var inst_57266 = (state_57319[(8)]);
var inst_57268 = (state_57319[(9)]);
var inst_57270 = (state_57319[(10)]);
var inst_57265 = (state_57319[(11)]);
var inst_57269 = (state_57319[(12)]);
var inst_57275 = (state_57319[(2)]);
var inst_57276 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57266),inst_57275,cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57268),cljs.core.str.cljs$core$IFn$_invoke$arity$1(api)].join('');
var inst_57277 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_57278 = ["Zotero-API-Key","Zotero-API-Version"];
var inst_57279 = [inst_57269,inst_57265];
var inst_57280 = cljs.core.PersistentHashMap.fromArrays(inst_57278,inst_57279);
var inst_57281 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_camelCaseString,query_params);
var inst_57282 = [inst_57270,false,inst_57280,inst_57281];
var inst_57283 = cljs.core.PersistentHashMap.fromArrays(inst_57277,inst_57282);
var inst_57284 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_57276,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57283], 0));
var state_57319__$1 = state_57319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57319__$1,(2),inst_57284);
} else {
if((state_val_57320 === (14))){
var inst_57295 = (state_57319[(13)]);
var inst_57309 = (state_57319[(2)]);
var state_57319__$1 = (function (){var statearr_57341 = state_57319;
(statearr_57341[(14)] = inst_57309);

return statearr_57341;
})();
if(cljs.core.truth_(inst_57295)){
var statearr_57342_57540 = state_57319__$1;
(statearr_57342_57540[(1)] = (15));

} else {
var statearr_57343_57541 = state_57319__$1;
(statearr_57343_57541[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (16))){
var inst_57309 = (state_57319[(14)]);
var state_57319__$1 = state_57319;
var statearr_57344_57542 = state_57319__$1;
(statearr_57344_57542[(2)] = inst_57309);

(statearr_57344_57542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (10))){
var inst_57299 = (state_57319[(20)]);
var state_57319__$1 = state_57319;
var statearr_57345_57543 = state_57319__$1;
(statearr_57345_57543[(2)] = inst_57299);

(statearr_57345_57543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57320 === (8))){
var inst_57317 = (state_57319[(2)]);
var state_57319__$1 = state_57319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57319__$1,inst_57317);
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
var statearr_57346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57346[(0)] = frontend$extensions$zotero$api$state_machine__27573__auto__);

(statearr_57346[(1)] = (1));

return statearr_57346;
});
var frontend$extensions$zotero$api$state_machine__27573__auto____1 = (function (state_57319){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57319);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57347){var ex__27576__auto__ = e57347;
var statearr_57348_57544 = state_57319;
(statearr_57348_57544[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57319[(4)]))){
var statearr_57349_57545 = state_57319;
(statearr_57349_57545[(1)] = cljs.core.first((state_57319[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57546 = state_57319;
state_57319 = G__57546;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$state_machine__27573__auto__ = function(state_57319){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$state_machine__27573__auto____1.call(this,state_57319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$state_machine__27573__auto____0;
frontend$extensions$zotero$api$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$state_machine__27573__auto____1;
return frontend$extensions$zotero$api$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57350 = f__27596__auto__();
(statearr_57350[(6)] = c__27595__auto__);

return statearr_57350;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57360){
var state_val_57361 = (state_57360[(1)]);
if((state_val_57361 === (1))){
var inst_57351 = frontend.extensions.zotero.api.config();
var inst_57352 = [new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"item-type","item-type",-73995695)];
var inst_57353 = [(1),"-attachment"];
var inst_57354 = cljs.core.PersistentHashMap.fromArrays(inst_57352,inst_57353);
var inst_57355 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_57351,"/items/top",inst_57354);
var state_57360__$1 = state_57360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57360__$1,(2),inst_57355);
} else {
if((state_val_57361 === (2))){
var inst_57357 = (state_57360[(2)]);
var inst_57358 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(inst_57357);
var state_57360__$1 = state_57360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57360__$1,inst_57358);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0 = (function (){
var statearr_57362 = [null,null,null,null,null,null,null];
(statearr_57362[(0)] = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__);

(statearr_57362[(1)] = (1));

return statearr_57362;
});
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1 = (function (state_57360){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57360);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57363){var ex__27576__auto__ = e57363;
var statearr_57364_57547 = state_57360;
(statearr_57364_57547[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57360[(4)]))){
var statearr_57365_57548 = state_57360;
(statearr_57365_57548[(1)] = cljs.core.first((state_57360[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57549 = state_57360;
state_57360 = G__57549;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__ = function(state_57360){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1.call(this,state_57360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57366 = f__27596__auto__();
(statearr_57366[(6)] = c__27595__auto__);

return statearr_57366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.extensions.zotero.api.all_top_items = (function frontend$extensions$zotero$api$all_top_items(){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57406){
var state_val_57407 = (state_57406[(1)]);
if((state_val_57407 === (7))){
var inst_57402 = (state_57406[(2)]);
var state_57406__$1 = state_57406;
var statearr_57408_57550 = state_57406__$1;
(statearr_57408_57550[(2)] = inst_57402);

(statearr_57408_57550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57407 === (1))){
var inst_57367 = cljs.core.PersistentVector.EMPTY;
var inst_57368 = "0";
var inst_57369 = inst_57367;
var state_57406__$1 = (function (){var statearr_57409 = state_57406;
(statearr_57409[(7)] = inst_57369);

(statearr_57409[(8)] = inst_57368);

return statearr_57409;
})();
var statearr_57410_57551 = state_57406__$1;
(statearr_57410_57551[(2)] = null);

(statearr_57410_57551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57407 === (4))){
var inst_57378 = (state_57406[(2)]);
var inst_57379 = cljs.core.__destructure_map(inst_57378);
var inst_57380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57379,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_57381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57379,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_57382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57379,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_57383 = inst_57380 === false;
var state_57406__$1 = (function (){var statearr_57411 = state_57406;
(statearr_57411[(9)] = inst_57381);

(statearr_57411[(10)] = inst_57382);

return statearr_57411;
})();
if(cljs.core.truth_(inst_57383)){
var statearr_57412_57553 = state_57406__$1;
(statearr_57412_57553[(1)] = (5));

} else {
var statearr_57413_57554 = state_57406__$1;
(statearr_57413_57554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57407 === (13))){
var inst_57398 = (state_57406[(2)]);
var state_57406__$1 = state_57406;
var statearr_57414_57555 = state_57406__$1;
(statearr_57414_57555[(2)] = inst_57398);

(statearr_57414_57555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57407 === (6))){
var inst_57381 = (state_57406[(9)]);
var state_57406__$1 = state_57406;
if(cljs.core.truth_(inst_57381)){
var statearr_57415_57556 = state_57406__$1;
(statearr_57415_57556[(1)] = (8));

} else {
var statearr_57416_57557 = state_57406__$1;
(statearr_57416_57557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57407 === (3))){
var inst_57404 = (state_57406[(2)]);
var state_57406__$1 = state_57406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57406__$1,inst_57404);
} else {
if((state_val_57407 === (12))){
var state_57406__$1 = state_57406;
var statearr_57417_57559 = state_57406__$1;
(statearr_57417_57559[(2)] = null);

(statearr_57417_57559[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57407 === (2))){
var inst_57368 = (state_57406[(8)]);
var inst_57372 = frontend.extensions.zotero.api.config();
var inst_57373 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_57374 = ["-attachment",inst_57368];
var inst_57375 = cljs.core.PersistentHashMap.fromArrays(inst_57373,inst_57374);
var inst_57376 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_57372,"/items/top",inst_57375);
var state_57406__$1 = state_57406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57406__$1,(4),inst_57376);
} else {
if((state_val_57407 === (11))){
var inst_57369 = (state_57406[(7)]);
var inst_57382 = (state_57406[(10)]);
var inst_57393 = cljs.core.PersistentVector.EMPTY;
var inst_57394 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57369,inst_57382);
var inst_57395 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57393,inst_57394);
var state_57406__$1 = state_57406;
var statearr_57418_57560 = state_57406__$1;
(statearr_57418_57560[(2)] = inst_57395);

(statearr_57418_57560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57407 === (9))){
var state_57406__$1 = state_57406;
var statearr_57419_57561 = state_57406__$1;
(statearr_57419_57561[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57407 === (5))){
var inst_57369 = (state_57406[(7)]);
var state_57406__$1 = state_57406;
var statearr_57421_57562 = state_57406__$1;
(statearr_57421_57562[(2)] = inst_57369);

(statearr_57421_57562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57407 === (10))){
var inst_57400 = (state_57406[(2)]);
var state_57406__$1 = state_57406;
var statearr_57422_57563 = state_57406__$1;
(statearr_57422_57563[(2)] = inst_57400);

(statearr_57422_57563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57407 === (8))){
var inst_57369 = (state_57406[(7)]);
var inst_57381 = (state_57406[(9)]);
var inst_57382 = (state_57406[(10)]);
var inst_57387 = cljs.core.PersistentVector.EMPTY;
var inst_57388 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57369,inst_57382);
var inst_57389 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57387,inst_57388);
var inst_57368 = inst_57381;
var inst_57369__$1 = inst_57389;
var state_57406__$1 = (function (){var statearr_57423 = state_57406;
(statearr_57423[(7)] = inst_57369__$1);

(statearr_57423[(8)] = inst_57368);

return statearr_57423;
})();
var statearr_57424_57564 = state_57406__$1;
(statearr_57424_57564[(2)] = null);

(statearr_57424_57564[(1)] = (2));


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
var statearr_57425 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57425[(0)] = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__);

(statearr_57425[(1)] = (1));

return statearr_57425;
});
var frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1 = (function (state_57406){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57406);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57426){var ex__27576__auto__ = e57426;
var statearr_57427_57565 = state_57406;
(statearr_57427_57565[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57406[(4)]))){
var statearr_57428_57566 = state_57406;
(statearr_57428_57566[(1)] = cljs.core.first((state_57406[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57567 = state_57406;
state_57406 = G__57567;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__ = function(state_57406){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1.call(this,state_57406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57429 = f__27596__auto__();
(statearr_57429[(6)] = c__27595__auto__);

return statearr_57429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
/**
 * Query all top level items except attachments
 */
frontend.extensions.zotero.api.query_top_items = (function frontend$extensions$zotero$api$query_top_items(var_args){
var G__57431 = arguments.length;
switch (G__57431) {
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57472){
var state_val_57473 = (state_57472[(1)]);
if((state_val_57473 === (7))){
var inst_57468 = (state_57472[(2)]);
var state_57472__$1 = state_57472;
var statearr_57474_57569 = state_57472__$1;
(statearr_57474_57569[(2)] = inst_57468);

(statearr_57474_57569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57473 === (1))){
var inst_57432 = cljs.core.PersistentVector.EMPTY;
var inst_57433 = "0";
var inst_57434 = inst_57432;
var state_57472__$1 = (function (){var statearr_57475 = state_57472;
(statearr_57475[(7)] = inst_57433);

(statearr_57475[(8)] = inst_57434);

return statearr_57475;
})();
var statearr_57476_57570 = state_57472__$1;
(statearr_57476_57570[(2)] = null);

(statearr_57476_57570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57473 === (4))){
var inst_57444 = (state_57472[(2)]);
var inst_57445 = cljs.core.__destructure_map(inst_57444);
var inst_57446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57445,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_57447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57445,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_57448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57445,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_57449 = inst_57446 === false;
var state_57472__$1 = (function (){var statearr_57477 = state_57472;
(statearr_57477[(9)] = inst_57448);

(statearr_57477[(10)] = inst_57447);

return statearr_57477;
})();
if(cljs.core.truth_(inst_57449)){
var statearr_57478_57571 = state_57472__$1;
(statearr_57478_57571[(1)] = (5));

} else {
var statearr_57479_57572 = state_57472__$1;
(statearr_57479_57572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57473 === (13))){
var inst_57464 = (state_57472[(2)]);
var state_57472__$1 = state_57472;
var statearr_57480_57573 = state_57472__$1;
(statearr_57480_57573[(2)] = inst_57464);

(statearr_57480_57573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57473 === (6))){
var inst_57447 = (state_57472[(10)]);
var state_57472__$1 = state_57472;
if(cljs.core.truth_(inst_57447)){
var statearr_57481_57574 = state_57472__$1;
(statearr_57481_57574[(1)] = (8));

} else {
var statearr_57482_57575 = state_57472__$1;
(statearr_57482_57575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57473 === (3))){
var inst_57470 = (state_57472[(2)]);
var state_57472__$1 = state_57472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57472__$1,inst_57470);
} else {
if((state_val_57473 === (12))){
var state_57472__$1 = state_57472;
var statearr_57483_57576 = state_57472__$1;
(statearr_57483_57576[(2)] = null);

(statearr_57483_57576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57473 === (2))){
var inst_57433 = (state_57472[(7)]);
var inst_57437 = frontend.extensions.zotero.api.config();
var inst_57438 = ["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"/children"].join('');
var inst_57439 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_57440 = [type,inst_57433];
var inst_57441 = cljs.core.PersistentHashMap.fromArrays(inst_57439,inst_57440);
var inst_57442 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_57437,inst_57438,inst_57441);
var state_57472__$1 = state_57472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57472__$1,(4),inst_57442);
} else {
if((state_val_57473 === (11))){
var inst_57448 = (state_57472[(9)]);
var inst_57434 = (state_57472[(8)]);
var inst_57459 = cljs.core.PersistentVector.EMPTY;
var inst_57460 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57434,inst_57448);
var inst_57461 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57459,inst_57460);
var state_57472__$1 = state_57472;
var statearr_57484_57577 = state_57472__$1;
(statearr_57484_57577[(2)] = inst_57461);

(statearr_57484_57577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57473 === (9))){
var state_57472__$1 = state_57472;
var statearr_57485_57578 = state_57472__$1;
(statearr_57485_57578[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57473 === (5))){
var inst_57434 = (state_57472[(8)]);
var state_57472__$1 = state_57472;
var statearr_57487_57579 = state_57472__$1;
(statearr_57487_57579[(2)] = inst_57434);

(statearr_57487_57579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57473 === (10))){
var inst_57466 = (state_57472[(2)]);
var state_57472__$1 = state_57472;
var statearr_57488_57580 = state_57472__$1;
(statearr_57488_57580[(2)] = inst_57466);

(statearr_57488_57580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57473 === (8))){
var inst_57448 = (state_57472[(9)]);
var inst_57434 = (state_57472[(8)]);
var inst_57447 = (state_57472[(10)]);
var inst_57453 = cljs.core.PersistentVector.EMPTY;
var inst_57454 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_57434,inst_57448);
var inst_57455 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_57453,inst_57454);
var inst_57433 = inst_57447;
var inst_57434__$1 = inst_57455;
var state_57472__$1 = (function (){var statearr_57489 = state_57472;
(statearr_57489[(7)] = inst_57433);

(statearr_57489[(8)] = inst_57434__$1);

return statearr_57489;
})();
var statearr_57490_57581 = state_57472__$1;
(statearr_57490_57581[(2)] = null);

(statearr_57490_57581[(1)] = (2));


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
var statearr_57491 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57491[(0)] = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__);

(statearr_57491[(1)] = (1));

return statearr_57491;
});
var frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1 = (function (state_57472){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57472);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57492){var ex__27576__auto__ = e57492;
var statearr_57493_57582 = state_57472;
(statearr_57493_57582[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57472[(4)]))){
var statearr_57494_57583 = state_57472;
(statearr_57494_57583[(1)] = cljs.core.first((state_57472[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57584 = state_57472;
state_57472 = G__57584;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__ = function(state_57472){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1.call(this,state_57472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57495 = f__27596__auto__();
(statearr_57495[(6)] = c__27595__auto__);

return statearr_57495;
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
