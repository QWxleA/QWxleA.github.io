goog.provide('frontend.handler.user');
frontend.handler.user.set_preferred_format_BANG_ = (function frontend$handler$user$set_preferred_format_BANG_(format){
if(cljs.core.truth_(format)){
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"preferred-format","preferred-format",-1784393121),format);

return frontend.state.set_preferred_format_BANG_(format);
} else {
return null;
}
});
frontend.handler.user.set_preferred_workflow_BANG_ = (function frontend$handler$user$set_preferred_workflow_BANG_(workflow){
if(cljs.core.truth_(workflow)){
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"preferred-workflow","preferred-workflow",-1794663444),workflow);

return frontend.state.set_preferred_workflow_BANG_(workflow);
} else {
return null;
}
});
frontend.handler.user.parse_jwt = (function frontend$handler$user$parse_jwt(jwt){
var G__51173 = jwt;
var G__51173__$1 = (((G__51173 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__51173,"."));
var G__51173__$2 = (((G__51173__$1 == null))?null:cljs.core.second(G__51173__$1));
var G__51173__$3 = (((G__51173__$2 == null))?null:atob(G__51173__$2));
var G__51173__$4 = (((G__51173__$3 == null))?null:JSON.parse(G__51173__$3));
if((G__51173__$4 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__51173__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
frontend.handler.user.expired_QMARK_ = (function frontend$handler$user$expired_QMARK_(parsed_jwt){
var G__51177 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__51177__$1 = (((G__51177 == null))?null:cljs_time.coerce.from_long(G__51177));
if((G__51177__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__51177__$1,cljs_time.core.now());
}
});
/**
 * return true when jwt will expire after 1h
 */
frontend.handler.user.almost_expired_QMARK_ = (function frontend$handler$user$almost_expired_QMARK_(parsed_jwt){
var G__51178 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__51178__$1 = (((G__51178 == null))?null:cljs_time.coerce.from_long(G__51178));
if((G__51178__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__51178__$1,cljs_time.core.from_now(cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((1))));
}
});
frontend.handler.user.email = (function frontend$handler$user$email(){
var G__51179 = frontend.state.get_auth_id_token();
var G__51179__$1 = (((G__51179 == null))?null:frontend.handler.user.parse_jwt(G__51179));
if((G__51179__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(G__51179__$1);
}
});
frontend.handler.user.user_uuid = (function frontend$handler$user$user_uuid(){
var G__51180 = frontend.state.get_auth_id_token();
var G__51180__$1 = (((G__51180 == null))?null:frontend.handler.user.parse_jwt(G__51180));
if((G__51180__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__51180__$1);
}
});
frontend.handler.user.logged_in_QMARK_ = (function frontend$handler$user$logged_in_QMARK_(){
return cljs.core.boolean$((function (){var G__51188 = frontend.state.get_auth_id_token();
var G__51188__$1 = (((G__51188 == null))?null:frontend.handler.user.parse_jwt(G__51188));
var G__51188__$2 = (((G__51188__$1 == null))?null:frontend.handler.user.expired_QMARK_(G__51188__$1));
if((G__51188__$2 == null)){
return null;
} else {
return cljs.core.not(G__51188__$2);
}
})());
});
frontend.handler.user.clear_tokens = (function frontend$handler$user$clear_tokens(){
frontend.state.set_auth_id_token(null);

frontend.state.set_auth_access_token(null);

return frontend.state.set_auth_refresh_token(null);
});
frontend.handler.user.set_tokens_BANG_ = (function frontend$handler$user$set_tokens_BANG_(var_args){
var G__51194 = arguments.length;
switch (G__51194) {
case 2:
return frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id_token,access_token){
frontend.state.set_auth_id_token(id_token);

return frontend.state.set_auth_access_token(access_token);
}));

(frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id_token,access_token,refresh_token){
frontend.state.set_auth_id_token(id_token);

frontend.state.set_auth_access_token(access_token);

return frontend.state.set_auth_refresh_token(refresh_token);
}));

(frontend.handler.user.set_tokens_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.user.login_callback = (function frontend$handler$user$login_callback(code){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51236){
var state_val_51241 = (state_51236[(1)]);
if((state_val_51241 === (1))){
var inst_51195 = ["https://",frontend.config.API_DOMAIN,"/auth_callback?code=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join('');
var inst_51196 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51197 = [false];
var inst_51198 = cljs.core.PersistentHashMap.fromArrays(inst_51196,inst_51197);
var inst_51199 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_51195,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51198], 0));
var state_51236__$1 = state_51236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51236__$1,(2),inst_51199);
} else {
if((state_val_51241 === (2))){
var inst_51201 = (state_51236[(7)]);
var inst_51201__$1 = (state_51236[(2)]);
var inst_51202 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51201__$1);
var inst_51203 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_51202);
var state_51236__$1 = (function (){var statearr_51248 = state_51236;
(statearr_51248[(7)] = inst_51201__$1);

return statearr_51248;
})();
if(inst_51203){
var statearr_51251_51432 = state_51236__$1;
(statearr_51251_51432[(1)] = (3));

} else {
var statearr_51253_51433 = state_51236__$1;
(statearr_51253_51433[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51241 === (3))){
var inst_51201 = (state_51236[(7)]);
var inst_51205 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51201);
var inst_51206 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_51205);
var inst_51207 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_51205);
var inst_51212 = new cljs.core.Keyword(null,"refresh_token","refresh_token",-162233815).cljs$core$IFn$_invoke$arity$1(inst_51205);
var inst_51213 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51206,inst_51207,inst_51212);
var state_51236__$1 = state_51236;
var statearr_51256_51434 = state_51236__$1;
(statearr_51256_51434[(2)] = inst_51213);

(statearr_51256_51434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51241 === (4))){
var inst_51201 = (state_51236[(7)]);
var inst_51218 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["login-callback",inst_51201], 0));
var state_51236__$1 = state_51236;
var statearr_51258_51435 = state_51236__$1;
(statearr_51258_51435[(2)] = inst_51218);

(statearr_51258_51435[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51241 === (5))){
var inst_51220 = (state_51236[(2)]);
var state_51236__$1 = state_51236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51236__$1,inst_51220);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$user$login_callback_$_state_machine__27573__auto__ = null;
var frontend$handler$user$login_callback_$_state_machine__27573__auto____0 = (function (){
var statearr_51259 = [null,null,null,null,null,null,null,null];
(statearr_51259[(0)] = frontend$handler$user$login_callback_$_state_machine__27573__auto__);

(statearr_51259[(1)] = (1));

return statearr_51259;
});
var frontend$handler$user$login_callback_$_state_machine__27573__auto____1 = (function (state_51236){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51236);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51260){var ex__27576__auto__ = e51260;
var statearr_51261_51439 = state_51236;
(statearr_51261_51439[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51236[(4)]))){
var statearr_51264_51440 = state_51236;
(statearr_51264_51440[(1)] = cljs.core.first((state_51236[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51441 = state_51236;
state_51236 = G__51441;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$login_callback_$_state_machine__27573__auto__ = function(state_51236){
switch(arguments.length){
case 0:
return frontend$handler$user$login_callback_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$login_callback_$_state_machine__27573__auto____1.call(this,state_51236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$login_callback_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$login_callback_$_state_machine__27573__auto____0;
frontend$handler$user$login_callback_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$login_callback_$_state_machine__27573__auto____1;
return frontend$handler$user$login_callback_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51269 = f__27596__auto__();
(statearr_51269[(6)] = c__27595__auto__);

return statearr_51269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.user.logout = (function frontend$handler$user$logout(){
return frontend.handler.user.clear_tokens();
});
/**
 * refresh id-token and access-token, if refresh_token expired, clear all tokens
 * return true if success, else false
 */
frontend.handler.user.refresh_id_token_AMPERSAND_access_token = (function frontend$handler$user$refresh_id_token_AMPERSAND_access_token(){
var temp__5720__auto__ = frontend.state.get_auth_refresh_token();
if(cljs.core.truth_(temp__5720__auto__)){
var refresh_token = temp__5720__auto__;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51302){
var state_val_51303 = (state_51302[(1)]);
if((state_val_51303 === (1))){
var inst_51275 = ["https://",frontend.config.API_DOMAIN,"/auth_refresh_token?refresh_token=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(refresh_token)].join('');
var inst_51276 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51277 = [false];
var inst_51278 = cljs.core.PersistentHashMap.fromArrays(inst_51276,inst_51277);
var inst_51279 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_51275,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51278], 0));
var state_51302__$1 = state_51302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51302__$1,(2),inst_51279);
} else {
if((state_val_51303 === (2))){
var inst_51281 = (state_51302[(7)]);
var inst_51281__$1 = (state_51302[(2)]);
var inst_51282 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51281__$1);
var inst_51283 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((400),inst_51282);
var state_51302__$1 = (function (){var statearr_51310 = state_51302;
(statearr_51310[(7)] = inst_51281__$1);

return statearr_51310;
})();
if(inst_51283){
var statearr_51311_51442 = state_51302__$1;
(statearr_51311_51442[(1)] = (3));

} else {
var statearr_51312_51443 = state_51302__$1;
(statearr_51312_51443[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51303 === (3))){
var inst_51285 = frontend.handler.user.clear_tokens();
var state_51302__$1 = (function (){var statearr_51313 = state_51302;
(statearr_51313[(8)] = inst_51285);

return statearr_51313;
})();
var statearr_51314_51444 = state_51302__$1;
(statearr_51314_51444[(2)] = false);

(statearr_51314_51444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51303 === (4))){
var inst_51281 = (state_51302[(7)]);
var inst_51290 = (state_51302[(9)]);
var inst_51289 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51281);
var inst_51290__$1 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_51289) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_51289));
var state_51302__$1 = (function (){var statearr_51316 = state_51302;
(statearr_51316[(9)] = inst_51290__$1);

return statearr_51316;
})();
if(cljs.core.truth_(inst_51290__$1)){
var statearr_51317_51445 = state_51302__$1;
(statearr_51317_51445[(1)] = (6));

} else {
var statearr_51318_51446 = state_51302__$1;
(statearr_51318_51446[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51303 === (5))){
var inst_51300 = (state_51302[(2)]);
var state_51302__$1 = state_51302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51302__$1,inst_51300);
} else {
if((state_val_51303 === (6))){
var inst_51281 = (state_51302[(7)]);
var state_51302__$1 = state_51302;
var statearr_51320_51447 = state_51302__$1;
(statearr_51320_51447[(2)] = inst_51281);

(statearr_51320_51447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51303 === (7))){
var inst_51290 = (state_51302[(9)]);
var state_51302__$1 = state_51302;
var statearr_51321_51448 = state_51302__$1;
(statearr_51321_51448[(2)] = inst_51290);

(statearr_51321_51448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51303 === (8))){
var inst_51294 = (state_51302[(2)]);
var inst_51295 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51294);
var inst_51296 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_51295);
var inst_51297 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_51295);
var inst_51298 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51296,inst_51297);
var state_51302__$1 = (function (){var statearr_51322 = state_51302;
(statearr_51322[(10)] = inst_51298);

return statearr_51322;
})();
var statearr_51323_51449 = state_51302__$1;
(statearr_51323_51449[(2)] = true);

(statearr_51323_51449[(1)] = (5));


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
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__ = null;
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____0 = (function (){
var statearr_51328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51328[(0)] = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__);

(statearr_51328[(1)] = (1));

return statearr_51328;
});
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1 = (function (state_51302){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51302);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51329){var ex__27576__auto__ = e51329;
var statearr_51330_51450 = state_51302;
(statearr_51330_51450[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51302[(4)]))){
var statearr_51334_51451 = state_51302;
(statearr_51334_51451[(1)] = cljs.core.first((state_51302[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51452 = state_51302;
state_51302 = G__51452;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__ = function(state_51302){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1.call(this,state_51302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____0;
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1;
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51340 = f__27596__auto__();
(statearr_51340[(6)] = c__27595__auto__);

return statearr_51340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
} else {
return null;
}
});
frontend.handler.user.stop_refresh = false;
frontend.handler.user.refresh_tokens_loop = (function frontend$handler$user$refresh_tokens_loop(){
frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start refresh-tokens-loop"], 0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51390){
var state_val_51391 = (state_51390[(1)]);
if((state_val_51391 === (7))){
var inst_51381 = (state_51390[(2)]);
var state_51390__$1 = (function (){var statearr_51392 = state_51390;
(statearr_51392[(7)] = inst_51381);

return statearr_51392;
})();
if(frontend.handler.user.stop_refresh){
var statearr_51396_51453 = state_51390__$1;
(statearr_51396_51453[(1)] = (14));

} else {
var statearr_51397_51454 = state_51390__$1;
(statearr_51397_51454[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (1))){
var state_51390__$1 = state_51390;
var statearr_51398_51455 = state_51390__$1;
(statearr_51398_51455[(2)] = null);

(statearr_51398_51455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (4))){
var inst_51358 = (state_51390[(2)]);
var inst_51359 = frontend.state.get_auth_refresh_token();
var state_51390__$1 = (function (){var statearr_51399 = state_51390;
(statearr_51399[(8)] = inst_51358);

return statearr_51399;
})();
if(cljs.core.truth_(inst_51359)){
var statearr_51400_51456 = state_51390__$1;
(statearr_51400_51456[(1)] = (5));

} else {
var statearr_51405_51457 = state_51390__$1;
(statearr_51405_51457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (15))){
var state_51390__$1 = state_51390;
var statearr_51406_51458 = state_51390__$1;
(statearr_51406_51458[(2)] = null);

(statearr_51406_51458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (13))){
var inst_51378 = (state_51390[(2)]);
var state_51390__$1 = state_51390;
var statearr_51407_51459 = state_51390__$1;
(statearr_51407_51459[(2)] = inst_51378);

(statearr_51407_51459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (6))){
var state_51390__$1 = state_51390;
var statearr_51408_51460 = state_51390__$1;
(statearr_51408_51460[(2)] = null);

(statearr_51408_51460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (3))){
var inst_51388 = (state_51390[(2)]);
var state_51390__$1 = state_51390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51390__$1,inst_51388);
} else {
if((state_val_51391 === (12))){
var state_51390__$1 = state_51390;
var statearr_51409_51461 = state_51390__$1;
(statearr_51409_51461[(2)] = null);

(statearr_51409_51461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (2))){
var inst_51356 = cljs.core.async.timeout((60000));
var state_51390__$1 = state_51390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51390__$1,(4),inst_51356);
} else {
if((state_val_51391 === (11))){
var inst_51371 = cljs_time.core.now();
var inst_51372 = cljs_time.coerce.to_string(inst_51371);
var inst_51373 = ["refresh tokens... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51372)].join('');
var inst_51374 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51373], 0));
var inst_51375 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_51390__$1 = (function (){var statearr_51410 = state_51390;
(statearr_51410[(9)] = inst_51374);

return statearr_51410;
})();
var statearr_51411_51462 = state_51390__$1;
(statearr_51411_51462[(2)] = inst_51375);

(statearr_51411_51462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (9))){
var inst_51361 = (state_51390[(10)]);
var inst_51366 = frontend.handler.user.parse_jwt(inst_51361);
var inst_51367 = frontend.handler.user.almost_expired_QMARK_(inst_51366);
var state_51390__$1 = state_51390;
var statearr_51412_51463 = state_51390__$1;
(statearr_51412_51463[(2)] = inst_51367);

(statearr_51412_51463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (5))){
var inst_51361 = (state_51390[(10)]);
var inst_51362 = (state_51390[(11)]);
var inst_51361__$1 = frontend.state.get_auth_id_token();
var inst_51362__$1 = (inst_51361__$1 == null);
var state_51390__$1 = (function (){var statearr_51413 = state_51390;
(statearr_51413[(10)] = inst_51361__$1);

(statearr_51413[(11)] = inst_51362__$1);

return statearr_51413;
})();
if(cljs.core.truth_(inst_51362__$1)){
var statearr_51414_51464 = state_51390__$1;
(statearr_51414_51464[(1)] = (8));

} else {
var statearr_51415_51465 = state_51390__$1;
(statearr_51415_51465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (14))){
var state_51390__$1 = state_51390;
var statearr_51416_51466 = state_51390__$1;
(statearr_51416_51466[(2)] = null);

(statearr_51416_51466[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (16))){
var inst_51386 = (state_51390[(2)]);
var state_51390__$1 = state_51390;
var statearr_51417_51467 = state_51390__$1;
(statearr_51417_51467[(2)] = inst_51386);

(statearr_51417_51467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (10))){
var inst_51369 = (state_51390[(2)]);
var state_51390__$1 = state_51390;
if(cljs.core.truth_(inst_51369)){
var statearr_51418_51468 = state_51390__$1;
(statearr_51418_51468[(1)] = (11));

} else {
var statearr_51419_51469 = state_51390__$1;
(statearr_51419_51469[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51391 === (8))){
var inst_51362 = (state_51390[(11)]);
var state_51390__$1 = state_51390;
var statearr_51420_51470 = state_51390__$1;
(statearr_51420_51470[(2)] = inst_51362);

(statearr_51420_51470[(1)] = (10));


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
});
return (function() {
var frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__ = null;
var frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____0 = (function (){
var statearr_51421 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51421[(0)] = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__);

(statearr_51421[(1)] = (1));

return statearr_51421;
});
var frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1 = (function (state_51390){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51390);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51422){var ex__27576__auto__ = e51422;
var statearr_51423_51471 = state_51390;
(statearr_51423_51471[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51390[(4)]))){
var statearr_51424_51472 = state_51390;
(statearr_51424_51472[(1)] = cljs.core.first((state_51390[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51473 = state_51390;
state_51390 = G__51473;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__ = function(state_51390){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1.call(this,state_51390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____0;
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1;
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51425 = f__27596__auto__();
(statearr_51425[(6)] = c__27595__auto__);

return statearr_51425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.handler.user.js.map
