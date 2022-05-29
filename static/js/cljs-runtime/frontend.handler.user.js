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
var G__51396 = jwt;
var G__51396__$1 = (((G__51396 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__51396,"."));
var G__51396__$2 = (((G__51396__$1 == null))?null:cljs.core.second(G__51396__$1));
var G__51396__$3 = (((G__51396__$2 == null))?null:atob(G__51396__$2));
var G__51396__$4 = (((G__51396__$3 == null))?null:JSON.parse(G__51396__$3));
if((G__51396__$4 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__51396__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
frontend.handler.user.expired_QMARK_ = (function frontend$handler$user$expired_QMARK_(parsed_jwt){
var G__51398 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__51398__$1 = (((G__51398 == null))?null:cljs_time.coerce.from_long(G__51398));
if((G__51398__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__51398__$1,cljs_time.core.now());
}
});
/**
 * return true when jwt will expire after 1h
 */
frontend.handler.user.almost_expired_QMARK_ = (function frontend$handler$user$almost_expired_QMARK_(parsed_jwt){
var G__51403 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__51403__$1 = (((G__51403 == null))?null:cljs_time.coerce.from_long(G__51403));
if((G__51403__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__51403__$1,cljs_time.core.from_now(cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((1))));
}
});
frontend.handler.user.email = (function frontend$handler$user$email(){
var G__51410 = frontend.state.get_auth_id_token();
var G__51410__$1 = (((G__51410 == null))?null:frontend.handler.user.parse_jwt(G__51410));
if((G__51410__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(G__51410__$1);
}
});
frontend.handler.user.user_uuid = (function frontend$handler$user$user_uuid(){
var G__51418 = frontend.state.get_auth_id_token();
var G__51418__$1 = (((G__51418 == null))?null:frontend.handler.user.parse_jwt(G__51418));
if((G__51418__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__51418__$1);
}
});
frontend.handler.user.logged_in_QMARK_ = (function frontend$handler$user$logged_in_QMARK_(){
return cljs.core.boolean$((function (){var G__51425 = frontend.state.get_auth_id_token();
var G__51425__$1 = (((G__51425 == null))?null:frontend.handler.user.parse_jwt(G__51425));
var G__51425__$2 = (((G__51425__$1 == null))?null:frontend.handler.user.expired_QMARK_(G__51425__$1));
if((G__51425__$2 == null)){
return null;
} else {
return cljs.core.not(G__51425__$2);
}
})());
});
frontend.handler.user.clear_tokens = (function frontend$handler$user$clear_tokens(){
frontend.state.set_auth_id_token(null);

frontend.state.set_auth_access_token(null);

return frontend.state.set_auth_refresh_token(null);
});
frontend.handler.user.set_tokens_BANG_ = (function frontend$handler$user$set_tokens_BANG_(var_args){
var G__51447 = arguments.length;
switch (G__51447) {
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51479){
var state_val_51480 = (state_51479[(1)]);
if((state_val_51480 === (1))){
var inst_51451 = ["https://",frontend.config.API_DOMAIN,"/auth_callback?code=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join('');
var inst_51456 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51457 = [false];
var inst_51458 = cljs.core.PersistentHashMap.fromArrays(inst_51456,inst_51457);
var inst_51459 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_51451,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51458], 0));
var state_51479__$1 = state_51479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51479__$1,(2),inst_51459);
} else {
if((state_val_51480 === (2))){
var inst_51461 = (state_51479[(7)]);
var inst_51461__$1 = (state_51479[(2)]);
var inst_51462 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51461__$1);
var inst_51463 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_51462);
var state_51479__$1 = (function (){var statearr_51483 = state_51479;
(statearr_51483[(7)] = inst_51461__$1);

return statearr_51483;
})();
if(inst_51463){
var statearr_51484_51633 = state_51479__$1;
(statearr_51484_51633[(1)] = (3));

} else {
var statearr_51485_51634 = state_51479__$1;
(statearr_51485_51634[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51480 === (3))){
var inst_51461 = (state_51479[(7)]);
var inst_51468 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51461);
var inst_51469 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_51468);
var inst_51470 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_51468);
var inst_51471 = new cljs.core.Keyword(null,"refresh_token","refresh_token",-162233815).cljs$core$IFn$_invoke$arity$1(inst_51468);
var inst_51472 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51469,inst_51470,inst_51471);
var state_51479__$1 = state_51479;
var statearr_51487_51635 = state_51479__$1;
(statearr_51487_51635[(2)] = inst_51472);

(statearr_51487_51635[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51480 === (4))){
var inst_51461 = (state_51479[(7)]);
var inst_51474 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["login-callback",inst_51461], 0));
var state_51479__$1 = state_51479;
var statearr_51488_51639 = state_51479__$1;
(statearr_51488_51639[(2)] = inst_51474);

(statearr_51488_51639[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51480 === (5))){
var inst_51476 = (state_51479[(2)]);
var state_51479__$1 = state_51479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51479__$1,inst_51476);
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
var statearr_51489 = [null,null,null,null,null,null,null,null];
(statearr_51489[(0)] = frontend$handler$user$login_callback_$_state_machine__27573__auto__);

(statearr_51489[(1)] = (1));

return statearr_51489;
});
var frontend$handler$user$login_callback_$_state_machine__27573__auto____1 = (function (state_51479){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51479);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51490){var ex__27576__auto__ = e51490;
var statearr_51491_51640 = state_51479;
(statearr_51491_51640[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51479[(4)]))){
var statearr_51492_51641 = state_51479;
(statearr_51492_51641[(1)] = cljs.core.first((state_51479[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51642 = state_51479;
state_51479 = G__51642;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$login_callback_$_state_machine__27573__auto__ = function(state_51479){
switch(arguments.length){
case 0:
return frontend$handler$user$login_callback_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$login_callback_$_state_machine__27573__auto____1.call(this,state_51479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$login_callback_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$login_callback_$_state_machine__27573__auto____0;
frontend$handler$user$login_callback_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$login_callback_$_state_machine__27573__auto____1;
return frontend$handler$user$login_callback_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51493 = f__27596__auto__();
(statearr_51493[(6)] = c__27595__auto__);

return statearr_51493;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51526){
var state_val_51527 = (state_51526[(1)]);
if((state_val_51527 === (1))){
var inst_51497 = ["https://",frontend.config.API_DOMAIN,"/auth_refresh_token?refresh_token=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(refresh_token)].join('');
var inst_51498 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51499 = [false];
var inst_51500 = cljs.core.PersistentHashMap.fromArrays(inst_51498,inst_51499);
var inst_51501 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_51497,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51500], 0));
var state_51526__$1 = state_51526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51526__$1,(2),inst_51501);
} else {
if((state_val_51527 === (2))){
var inst_51503 = (state_51526[(7)]);
var inst_51503__$1 = (state_51526[(2)]);
var inst_51504 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51503__$1);
var inst_51505 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((400),inst_51504);
var state_51526__$1 = (function (){var statearr_51528 = state_51526;
(statearr_51528[(7)] = inst_51503__$1);

return statearr_51528;
})();
if(inst_51505){
var statearr_51529_51644 = state_51526__$1;
(statearr_51529_51644[(1)] = (3));

} else {
var statearr_51530_51645 = state_51526__$1;
(statearr_51530_51645[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (3))){
var inst_51508 = frontend.handler.user.clear_tokens();
var state_51526__$1 = (function (){var statearr_51531 = state_51526;
(statearr_51531[(8)] = inst_51508);

return statearr_51531;
})();
var statearr_51532_51646 = state_51526__$1;
(statearr_51532_51646[(2)] = false);

(statearr_51532_51646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (4))){
var inst_51514 = (state_51526[(9)]);
var inst_51503 = (state_51526[(7)]);
var inst_51513 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51503);
var inst_51514__$1 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_51513) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_51513));
var state_51526__$1 = (function (){var statearr_51535 = state_51526;
(statearr_51535[(9)] = inst_51514__$1);

return statearr_51535;
})();
if(cljs.core.truth_(inst_51514__$1)){
var statearr_51536_51647 = state_51526__$1;
(statearr_51536_51647[(1)] = (6));

} else {
var statearr_51537_51648 = state_51526__$1;
(statearr_51537_51648[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (5))){
var inst_51524 = (state_51526[(2)]);
var state_51526__$1 = state_51526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51526__$1,inst_51524);
} else {
if((state_val_51527 === (6))){
var inst_51503 = (state_51526[(7)]);
var state_51526__$1 = state_51526;
var statearr_51538_51649 = state_51526__$1;
(statearr_51538_51649[(2)] = inst_51503);

(statearr_51538_51649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (7))){
var inst_51514 = (state_51526[(9)]);
var state_51526__$1 = state_51526;
var statearr_51539_51653 = state_51526__$1;
(statearr_51539_51653[(2)] = inst_51514);

(statearr_51539_51653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (8))){
var inst_51518 = (state_51526[(2)]);
var inst_51519 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51518);
var inst_51520 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_51519);
var inst_51521 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_51519);
var inst_51522 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51520,inst_51521);
var state_51526__$1 = (function (){var statearr_51543 = state_51526;
(statearr_51543[(10)] = inst_51522);

return statearr_51543;
})();
var statearr_51544_51654 = state_51526__$1;
(statearr_51544_51654[(2)] = true);

(statearr_51544_51654[(1)] = (5));


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
var statearr_51545 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51545[(0)] = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__);

(statearr_51545[(1)] = (1));

return statearr_51545;
});
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1 = (function (state_51526){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51526);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51546){var ex__27576__auto__ = e51546;
var statearr_51547_51655 = state_51526;
(statearr_51547_51655[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51526[(4)]))){
var statearr_51548_51656 = state_51526;
(statearr_51548_51656[(1)] = cljs.core.first((state_51526[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51658 = state_51526;
state_51526 = G__51658;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__ = function(state_51526){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1.call(this,state_51526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____0;
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1;
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51550 = f__27596__auto__();
(statearr_51550[(6)] = c__27595__auto__);

return statearr_51550;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51585){
var state_val_51586 = (state_51585[(1)]);
if((state_val_51586 === (7))){
var inst_51576 = (state_51585[(2)]);
var state_51585__$1 = (function (){var statearr_51587 = state_51585;
(statearr_51587[(7)] = inst_51576);

return statearr_51587;
})();
if(frontend.handler.user.stop_refresh){
var statearr_51588_51659 = state_51585__$1;
(statearr_51588_51659[(1)] = (14));

} else {
var statearr_51589_51660 = state_51585__$1;
(statearr_51589_51660[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (1))){
var state_51585__$1 = state_51585;
var statearr_51590_51661 = state_51585__$1;
(statearr_51590_51661[(2)] = null);

(statearr_51590_51661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (4))){
var inst_51554 = (state_51585[(2)]);
var inst_51555 = frontend.state.get_auth_refresh_token();
var state_51585__$1 = (function (){var statearr_51591 = state_51585;
(statearr_51591[(8)] = inst_51554);

return statearr_51591;
})();
if(cljs.core.truth_(inst_51555)){
var statearr_51592_51662 = state_51585__$1;
(statearr_51592_51662[(1)] = (5));

} else {
var statearr_51593_51663 = state_51585__$1;
(statearr_51593_51663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (15))){
var state_51585__$1 = state_51585;
var statearr_51594_51664 = state_51585__$1;
(statearr_51594_51664[(2)] = null);

(statearr_51594_51664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (13))){
var inst_51573 = (state_51585[(2)]);
var state_51585__$1 = state_51585;
var statearr_51598_51665 = state_51585__$1;
(statearr_51598_51665[(2)] = inst_51573);

(statearr_51598_51665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (6))){
var state_51585__$1 = state_51585;
var statearr_51599_51666 = state_51585__$1;
(statearr_51599_51666[(2)] = null);

(statearr_51599_51666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (3))){
var inst_51583 = (state_51585[(2)]);
var state_51585__$1 = state_51585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51585__$1,inst_51583);
} else {
if((state_val_51586 === (12))){
var state_51585__$1 = state_51585;
var statearr_51600_51667 = state_51585__$1;
(statearr_51600_51667[(2)] = null);

(statearr_51600_51667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (2))){
var inst_51552 = cljs.core.async.timeout((60000));
var state_51585__$1 = state_51585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51585__$1,(4),inst_51552);
} else {
if((state_val_51586 === (11))){
var inst_51566 = cljs_time.core.now();
var inst_51567 = cljs_time.coerce.to_string(inst_51566);
var inst_51568 = ["refresh tokens... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51567)].join('');
var inst_51569 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51568], 0));
var inst_51570 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_51585__$1 = (function (){var statearr_51601 = state_51585;
(statearr_51601[(9)] = inst_51569);

return statearr_51601;
})();
var statearr_51603_51668 = state_51585__$1;
(statearr_51603_51668[(2)] = inst_51570);

(statearr_51603_51668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (9))){
var inst_51557 = (state_51585[(10)]);
var inst_51561 = frontend.handler.user.parse_jwt(inst_51557);
var inst_51562 = frontend.handler.user.almost_expired_QMARK_(inst_51561);
var state_51585__$1 = state_51585;
var statearr_51604_51669 = state_51585__$1;
(statearr_51604_51669[(2)] = inst_51562);

(statearr_51604_51669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (5))){
var inst_51558 = (state_51585[(11)]);
var inst_51557 = (state_51585[(10)]);
var inst_51557__$1 = frontend.state.get_auth_id_token();
var inst_51558__$1 = (inst_51557__$1 == null);
var state_51585__$1 = (function (){var statearr_51605 = state_51585;
(statearr_51605[(11)] = inst_51558__$1);

(statearr_51605[(10)] = inst_51557__$1);

return statearr_51605;
})();
if(cljs.core.truth_(inst_51558__$1)){
var statearr_51606_51670 = state_51585__$1;
(statearr_51606_51670[(1)] = (8));

} else {
var statearr_51607_51671 = state_51585__$1;
(statearr_51607_51671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (14))){
var state_51585__$1 = state_51585;
var statearr_51608_51675 = state_51585__$1;
(statearr_51608_51675[(2)] = null);

(statearr_51608_51675[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (16))){
var inst_51581 = (state_51585[(2)]);
var state_51585__$1 = state_51585;
var statearr_51611_51676 = state_51585__$1;
(statearr_51611_51676[(2)] = inst_51581);

(statearr_51611_51676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (10))){
var inst_51564 = (state_51585[(2)]);
var state_51585__$1 = state_51585;
if(cljs.core.truth_(inst_51564)){
var statearr_51616_51685 = state_51585__$1;
(statearr_51616_51685[(1)] = (11));

} else {
var statearr_51617_51686 = state_51585__$1;
(statearr_51617_51686[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51586 === (8))){
var inst_51558 = (state_51585[(11)]);
var state_51585__$1 = state_51585;
var statearr_51618_51691 = state_51585__$1;
(statearr_51618_51691[(2)] = inst_51558);

(statearr_51618_51691[(1)] = (10));


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
var statearr_51626 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51626[(0)] = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__);

(statearr_51626[(1)] = (1));

return statearr_51626;
});
var frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1 = (function (state_51585){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51585);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51627){var ex__27576__auto__ = e51627;
var statearr_51628_51706 = state_51585;
(statearr_51628_51706[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51585[(4)]))){
var statearr_51629_51707 = state_51585;
(statearr_51629_51707[(1)] = cljs.core.first((state_51585[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51709 = state_51585;
state_51585 = G__51709;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__ = function(state_51585){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1.call(this,state_51585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____0;
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1;
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51630 = f__27596__auto__();
(statearr_51630[(6)] = c__27595__auto__);

return statearr_51630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.handler.user.js.map
