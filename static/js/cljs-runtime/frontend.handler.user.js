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
var G__51499 = jwt;
var G__51499__$1 = (((G__51499 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__51499,"."));
var G__51499__$2 = (((G__51499__$1 == null))?null:cljs.core.second(G__51499__$1));
var G__51499__$3 = (((G__51499__$2 == null))?null:atob(G__51499__$2));
var G__51499__$4 = (((G__51499__$3 == null))?null:JSON.parse(G__51499__$3));
if((G__51499__$4 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__51499__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
frontend.handler.user.expired_QMARK_ = (function frontend$handler$user$expired_QMARK_(parsed_jwt){
var G__51504 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__51504__$1 = (((G__51504 == null))?null:cljs_time.coerce.from_long(G__51504));
if((G__51504__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__51504__$1,cljs_time.core.now());
}
});
/**
 * return true when jwt will expire after 1h
 */
frontend.handler.user.almost_expired_QMARK_ = (function frontend$handler$user$almost_expired_QMARK_(parsed_jwt){
var G__51505 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__51505__$1 = (((G__51505 == null))?null:cljs_time.coerce.from_long(G__51505));
if((G__51505__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__51505__$1,cljs_time.core.from_now(cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((1))));
}
});
frontend.handler.user.email = (function frontend$handler$user$email(){
var G__51506 = frontend.state.get_auth_id_token();
var G__51506__$1 = (((G__51506 == null))?null:frontend.handler.user.parse_jwt(G__51506));
if((G__51506__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(G__51506__$1);
}
});
frontend.handler.user.user_uuid = (function frontend$handler$user$user_uuid(){
var G__51507 = frontend.state.get_auth_id_token();
var G__51507__$1 = (((G__51507 == null))?null:frontend.handler.user.parse_jwt(G__51507));
if((G__51507__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__51507__$1);
}
});
frontend.handler.user.logged_in_QMARK_ = (function frontend$handler$user$logged_in_QMARK_(){
return cljs.core.boolean$((function (){var G__51508 = frontend.state.get_auth_id_token();
var G__51508__$1 = (((G__51508 == null))?null:frontend.handler.user.parse_jwt(G__51508));
var G__51508__$2 = (((G__51508__$1 == null))?null:frontend.handler.user.expired_QMARK_(G__51508__$1));
if((G__51508__$2 == null)){
return null;
} else {
return cljs.core.not(G__51508__$2);
}
})());
});
frontend.handler.user.clear_tokens = (function frontend$handler$user$clear_tokens(){
frontend.state.set_auth_id_token(null);

frontend.state.set_auth_access_token(null);

return frontend.state.set_auth_refresh_token(null);
});
frontend.handler.user.set_tokens_BANG_ = (function frontend$handler$user$set_tokens_BANG_(var_args){
var G__51510 = arguments.length;
switch (G__51510) {
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51532){
var state_val_51533 = (state_51532[(1)]);
if((state_val_51533 === (1))){
var inst_51512 = ["https://",frontend.config.API_DOMAIN,"/auth_callback?code=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join('');
var inst_51513 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51514 = [false];
var inst_51515 = cljs.core.PersistentHashMap.fromArrays(inst_51513,inst_51514);
var inst_51516 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_51512,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51515], 0));
var state_51532__$1 = state_51532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51532__$1,(2),inst_51516);
} else {
if((state_val_51533 === (2))){
var inst_51518 = (state_51532[(7)]);
var inst_51518__$1 = (state_51532[(2)]);
var inst_51519 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51518__$1);
var inst_51520 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_51519);
var state_51532__$1 = (function (){var statearr_51534 = state_51532;
(statearr_51534[(7)] = inst_51518__$1);

return statearr_51534;
})();
if(inst_51520){
var statearr_51535_51715 = state_51532__$1;
(statearr_51535_51715[(1)] = (3));

} else {
var statearr_51536_51716 = state_51532__$1;
(statearr_51536_51716[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51533 === (3))){
var inst_51518 = (state_51532[(7)]);
var inst_51522 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51518);
var inst_51523 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_51522);
var inst_51524 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_51522);
var inst_51525 = new cljs.core.Keyword(null,"refresh_token","refresh_token",-162233815).cljs$core$IFn$_invoke$arity$1(inst_51522);
var inst_51526 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51523,inst_51524,inst_51525);
var state_51532__$1 = state_51532;
var statearr_51539_51717 = state_51532__$1;
(statearr_51539_51717[(2)] = inst_51526);

(statearr_51539_51717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51533 === (4))){
var inst_51518 = (state_51532[(7)]);
var inst_51528 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["login-callback",inst_51518], 0));
var state_51532__$1 = state_51532;
var statearr_51540_51718 = state_51532__$1;
(statearr_51540_51718[(2)] = inst_51528);

(statearr_51540_51718[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51533 === (5))){
var inst_51530 = (state_51532[(2)]);
var state_51532__$1 = state_51532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51532__$1,inst_51530);
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
var statearr_51541 = [null,null,null,null,null,null,null,null];
(statearr_51541[(0)] = frontend$handler$user$login_callback_$_state_machine__27573__auto__);

(statearr_51541[(1)] = (1));

return statearr_51541;
});
var frontend$handler$user$login_callback_$_state_machine__27573__auto____1 = (function (state_51532){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51532);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51542){var ex__27576__auto__ = e51542;
var statearr_51547_51723 = state_51532;
(statearr_51547_51723[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51532[(4)]))){
var statearr_51551_51724 = state_51532;
(statearr_51551_51724[(1)] = cljs.core.first((state_51532[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51725 = state_51532;
state_51532 = G__51725;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$login_callback_$_state_machine__27573__auto__ = function(state_51532){
switch(arguments.length){
case 0:
return frontend$handler$user$login_callback_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$login_callback_$_state_machine__27573__auto____1.call(this,state_51532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$login_callback_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$login_callback_$_state_machine__27573__auto____0;
frontend$handler$user$login_callback_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$login_callback_$_state_machine__27573__auto____1;
return frontend$handler$user$login_callback_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51564 = f__27596__auto__();
(statearr_51564[(6)] = c__27595__auto__);

return statearr_51564;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51598){
var state_val_51599 = (state_51598[(1)]);
if((state_val_51599 === (1))){
var inst_51572 = ["https://",frontend.config.API_DOMAIN,"/auth_refresh_token?refresh_token=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(refresh_token)].join('');
var inst_51573 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51574 = [false];
var inst_51575 = cljs.core.PersistentHashMap.fromArrays(inst_51573,inst_51574);
var inst_51576 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_51572,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51575], 0));
var state_51598__$1 = state_51598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51598__$1,(2),inst_51576);
} else {
if((state_val_51599 === (2))){
var inst_51578 = (state_51598[(7)]);
var inst_51578__$1 = (state_51598[(2)]);
var inst_51579 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51578__$1);
var inst_51580 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((400),inst_51579);
var state_51598__$1 = (function (){var statearr_51600 = state_51598;
(statearr_51600[(7)] = inst_51578__$1);

return statearr_51600;
})();
if(inst_51580){
var statearr_51601_51731 = state_51598__$1;
(statearr_51601_51731[(1)] = (3));

} else {
var statearr_51602_51732 = state_51598__$1;
(statearr_51602_51732[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (3))){
var inst_51582 = frontend.handler.user.clear_tokens();
var state_51598__$1 = (function (){var statearr_51603 = state_51598;
(statearr_51603[(8)] = inst_51582);

return statearr_51603;
})();
var statearr_51604_51733 = state_51598__$1;
(statearr_51604_51733[(2)] = false);

(statearr_51604_51733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (4))){
var inst_51585 = (state_51598[(9)]);
var inst_51578 = (state_51598[(7)]);
var inst_51584 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51578);
var inst_51585__$1 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_51584) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_51584));
var state_51598__$1 = (function (){var statearr_51606 = state_51598;
(statearr_51606[(9)] = inst_51585__$1);

return statearr_51606;
})();
if(cljs.core.truth_(inst_51585__$1)){
var statearr_51607_51737 = state_51598__$1;
(statearr_51607_51737[(1)] = (6));

} else {
var statearr_51608_51738 = state_51598__$1;
(statearr_51608_51738[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (5))){
var inst_51596 = (state_51598[(2)]);
var state_51598__$1 = state_51598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51598__$1,inst_51596);
} else {
if((state_val_51599 === (6))){
var inst_51578 = (state_51598[(7)]);
var state_51598__$1 = state_51598;
var statearr_51611_51743 = state_51598__$1;
(statearr_51611_51743[(2)] = inst_51578);

(statearr_51611_51743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (7))){
var inst_51585 = (state_51598[(9)]);
var state_51598__$1 = state_51598;
var statearr_51612_51744 = state_51598__$1;
(statearr_51612_51744[(2)] = inst_51585);

(statearr_51612_51744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (8))){
var inst_51589 = (state_51598[(2)]);
var inst_51590 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51589);
var inst_51592 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_51590);
var inst_51593 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_51590);
var inst_51594 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51592,inst_51593);
var state_51598__$1 = (function (){var statearr_51615 = state_51598;
(statearr_51615[(10)] = inst_51594);

return statearr_51615;
})();
var statearr_51616_51745 = state_51598__$1;
(statearr_51616_51745[(2)] = true);

(statearr_51616_51745[(1)] = (5));


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
var statearr_51619 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51619[(0)] = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__);

(statearr_51619[(1)] = (1));

return statearr_51619;
});
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1 = (function (state_51598){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51598);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51620){var ex__27576__auto__ = e51620;
var statearr_51621_51749 = state_51598;
(statearr_51621_51749[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51598[(4)]))){
var statearr_51622_51754 = state_51598;
(statearr_51622_51754[(1)] = cljs.core.first((state_51598[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51755 = state_51598;
state_51598 = G__51755;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__ = function(state_51598){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1.call(this,state_51598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____0;
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1;
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51624 = f__27596__auto__();
(statearr_51624[(6)] = c__27595__auto__);

return statearr_51624;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51663){
var state_val_51665 = (state_51663[(1)]);
if((state_val_51665 === (7))){
var inst_51654 = (state_51663[(2)]);
var state_51663__$1 = (function (){var statearr_51669 = state_51663;
(statearr_51669[(7)] = inst_51654);

return statearr_51669;
})();
if(frontend.handler.user.stop_refresh){
var statearr_51670_51756 = state_51663__$1;
(statearr_51670_51756[(1)] = (14));

} else {
var statearr_51671_51757 = state_51663__$1;
(statearr_51671_51757[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (1))){
var state_51663__$1 = state_51663;
var statearr_51672_51758 = state_51663__$1;
(statearr_51672_51758[(2)] = null);

(statearr_51672_51758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (4))){
var inst_51632 = (state_51663[(2)]);
var inst_51633 = frontend.state.get_auth_refresh_token();
var state_51663__$1 = (function (){var statearr_51673 = state_51663;
(statearr_51673[(8)] = inst_51632);

return statearr_51673;
})();
if(cljs.core.truth_(inst_51633)){
var statearr_51674_51759 = state_51663__$1;
(statearr_51674_51759[(1)] = (5));

} else {
var statearr_51675_51761 = state_51663__$1;
(statearr_51675_51761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (15))){
var state_51663__$1 = state_51663;
var statearr_51677_51762 = state_51663__$1;
(statearr_51677_51762[(2)] = null);

(statearr_51677_51762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (13))){
var inst_51651 = (state_51663[(2)]);
var state_51663__$1 = state_51663;
var statearr_51679_51763 = state_51663__$1;
(statearr_51679_51763[(2)] = inst_51651);

(statearr_51679_51763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (6))){
var state_51663__$1 = state_51663;
var statearr_51680_51765 = state_51663__$1;
(statearr_51680_51765[(2)] = null);

(statearr_51680_51765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (3))){
var inst_51661 = (state_51663[(2)]);
var state_51663__$1 = state_51663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51663__$1,inst_51661);
} else {
if((state_val_51665 === (12))){
var state_51663__$1 = state_51663;
var statearr_51683_51767 = state_51663__$1;
(statearr_51683_51767[(2)] = null);

(statearr_51683_51767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (2))){
var inst_51630 = cljs.core.async.timeout((60000));
var state_51663__$1 = state_51663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51663__$1,(4),inst_51630);
} else {
if((state_val_51665 === (11))){
var inst_51644 = cljs_time.core.now();
var inst_51645 = cljs_time.coerce.to_string(inst_51644);
var inst_51646 = ["refresh tokens... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51645)].join('');
var inst_51647 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51646], 0));
var inst_51648 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_51663__$1 = (function (){var statearr_51684 = state_51663;
(statearr_51684[(9)] = inst_51647);

return statearr_51684;
})();
var statearr_51685_51768 = state_51663__$1;
(statearr_51685_51768[(2)] = inst_51648);

(statearr_51685_51768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (9))){
var inst_51635 = (state_51663[(10)]);
var inst_51639 = frontend.handler.user.parse_jwt(inst_51635);
var inst_51640 = frontend.handler.user.almost_expired_QMARK_(inst_51639);
var state_51663__$1 = state_51663;
var statearr_51686_51772 = state_51663__$1;
(statearr_51686_51772[(2)] = inst_51640);

(statearr_51686_51772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (5))){
var inst_51636 = (state_51663[(11)]);
var inst_51635 = (state_51663[(10)]);
var inst_51635__$1 = frontend.state.get_auth_id_token();
var inst_51636__$1 = (inst_51635__$1 == null);
var state_51663__$1 = (function (){var statearr_51688 = state_51663;
(statearr_51688[(11)] = inst_51636__$1);

(statearr_51688[(10)] = inst_51635__$1);

return statearr_51688;
})();
if(cljs.core.truth_(inst_51636__$1)){
var statearr_51690_51773 = state_51663__$1;
(statearr_51690_51773[(1)] = (8));

} else {
var statearr_51691_51775 = state_51663__$1;
(statearr_51691_51775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (14))){
var state_51663__$1 = state_51663;
var statearr_51692_51776 = state_51663__$1;
(statearr_51692_51776[(2)] = null);

(statearr_51692_51776[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (16))){
var inst_51659 = (state_51663[(2)]);
var state_51663__$1 = state_51663;
var statearr_51693_51777 = state_51663__$1;
(statearr_51693_51777[(2)] = inst_51659);

(statearr_51693_51777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (10))){
var inst_51642 = (state_51663[(2)]);
var state_51663__$1 = state_51663;
if(cljs.core.truth_(inst_51642)){
var statearr_51695_51778 = state_51663__$1;
(statearr_51695_51778[(1)] = (11));

} else {
var statearr_51696_51779 = state_51663__$1;
(statearr_51696_51779[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51665 === (8))){
var inst_51636 = (state_51663[(11)]);
var state_51663__$1 = state_51663;
var statearr_51697_51780 = state_51663__$1;
(statearr_51697_51780[(2)] = inst_51636);

(statearr_51697_51780[(1)] = (10));


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
var statearr_51698 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51698[(0)] = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__);

(statearr_51698[(1)] = (1));

return statearr_51698;
});
var frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1 = (function (state_51663){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51663);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51702){var ex__27576__auto__ = e51702;
var statearr_51703_51781 = state_51663;
(statearr_51703_51781[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51663[(4)]))){
var statearr_51704_51782 = state_51663;
(statearr_51704_51782[(1)] = cljs.core.first((state_51663[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51783 = state_51663;
state_51663 = G__51783;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__ = function(state_51663){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1.call(this,state_51663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____0;
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1;
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51705 = f__27596__auto__();
(statearr_51705[(6)] = c__27595__auto__);

return statearr_51705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.handler.user.js.map
