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
var G__95560 = jwt;
var G__95560__$1 = (((G__95560 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__95560,"."));
var G__95560__$2 = (((G__95560__$1 == null))?null:cljs.core.second(G__95560__$1));
var G__95560__$3 = (((G__95560__$2 == null))?null:atob(G__95560__$2));
var G__95560__$4 = (((G__95560__$3 == null))?null:JSON.parse(G__95560__$3));
if((G__95560__$4 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__95560__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
frontend.handler.user.expired_QMARK_ = (function frontend$handler$user$expired_QMARK_(parsed_jwt){
var G__95567 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__95567__$1 = (((G__95567 == null))?null:cljs_time.coerce.from_long(G__95567));
if((G__95567__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__95567__$1,cljs_time.core.now());
}
});
/**
 * return true when jwt will expire after 1h
 */
frontend.handler.user.almost_expired_QMARK_ = (function frontend$handler$user$almost_expired_QMARK_(parsed_jwt){
var G__95572 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__95572__$1 = (((G__95572 == null))?null:cljs_time.coerce.from_long(G__95572));
if((G__95572__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__95572__$1,cljs_time.core.from_now(cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((1))));
}
});
frontend.handler.user.email = (function frontend$handler$user$email(){
var G__95576 = frontend.state.get_auth_id_token();
var G__95576__$1 = (((G__95576 == null))?null:frontend.handler.user.parse_jwt(G__95576));
if((G__95576__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(G__95576__$1);
}
});
frontend.handler.user.user_uuid = (function frontend$handler$user$user_uuid(){
var G__95578 = frontend.state.get_auth_id_token();
var G__95578__$1 = (((G__95578 == null))?null:frontend.handler.user.parse_jwt(G__95578));
if((G__95578__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__95578__$1);
}
});
frontend.handler.user.logged_in_QMARK_ = (function frontend$handler$user$logged_in_QMARK_(){
return cljs.core.boolean$((function (){var G__95579 = frontend.state.get_auth_id_token();
var G__95579__$1 = (((G__95579 == null))?null:frontend.handler.user.parse_jwt(G__95579));
var G__95579__$2 = (((G__95579__$1 == null))?null:frontend.handler.user.expired_QMARK_(G__95579__$1));
if((G__95579__$2 == null)){
return null;
} else {
return cljs.core.not(G__95579__$2);
}
})());
});
frontend.handler.user.clear_tokens = (function frontend$handler$user$clear_tokens(){
frontend.state.set_auth_id_token(null);

frontend.state.set_auth_access_token(null);

return frontend.state.set_auth_refresh_token(null);
});
frontend.handler.user.set_tokens_BANG_ = (function frontend$handler$user$set_tokens_BANG_(var_args){
var G__95583 = arguments.length;
switch (G__95583) {
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
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_95606){
var state_val_95607 = (state_95606[(1)]);
if((state_val_95607 === (1))){
var inst_95586 = ["https://",frontend.config.API_DOMAIN,"/auth_callback?code=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join('');
var inst_95587 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_95588 = [false];
var inst_95589 = cljs.core.PersistentHashMap.fromArrays(inst_95587,inst_95588);
var inst_95590 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_95586,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_95589], 0));
var state_95606__$1 = state_95606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95606__$1,(2),inst_95590);
} else {
if((state_val_95607 === (2))){
var inst_95592 = (state_95606[(7)]);
var inst_95592__$1 = (state_95606[(2)]);
var inst_95593 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_95592__$1);
var inst_95594 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_95593);
var state_95606__$1 = (function (){var statearr_95612 = state_95606;
(statearr_95612[(7)] = inst_95592__$1);

return statearr_95612;
})();
if(inst_95594){
var statearr_95614_95849 = state_95606__$1;
(statearr_95614_95849[(1)] = (3));

} else {
var statearr_95615_95850 = state_95606__$1;
(statearr_95615_95850[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95607 === (3))){
var inst_95592 = (state_95606[(7)]);
var inst_95596 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_95592);
var inst_95597 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_95596);
var inst_95598 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_95596);
var inst_95599 = new cljs.core.Keyword(null,"refresh_token","refresh_token",-162233815).cljs$core$IFn$_invoke$arity$1(inst_95596);
var inst_95600 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3(inst_95597,inst_95598,inst_95599);
var state_95606__$1 = state_95606;
var statearr_95619_95851 = state_95606__$1;
(statearr_95619_95851[(2)] = inst_95600);

(statearr_95619_95851[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95607 === (4))){
var inst_95592 = (state_95606[(7)]);
var inst_95602 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["login-callback",inst_95592], 0));
var state_95606__$1 = state_95606;
var statearr_95620_95853 = state_95606__$1;
(statearr_95620_95853[(2)] = inst_95602);

(statearr_95620_95853[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95607 === (5))){
var inst_95604 = (state_95606[(2)]);
var state_95606__$1 = state_95606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95606__$1,inst_95604);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$user$login_callback_$_state_machine__41839__auto__ = null;
var frontend$handler$user$login_callback_$_state_machine__41839__auto____0 = (function (){
var statearr_95624 = [null,null,null,null,null,null,null,null];
(statearr_95624[(0)] = frontend$handler$user$login_callback_$_state_machine__41839__auto__);

(statearr_95624[(1)] = (1));

return statearr_95624;
});
var frontend$handler$user$login_callback_$_state_machine__41839__auto____1 = (function (state_95606){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_95606);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e95625){var ex__41842__auto__ = e95625;
var statearr_95626_95854 = state_95606;
(statearr_95626_95854[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_95606[(4)]))){
var statearr_95627_95855 = state_95606;
(statearr_95627_95855[(1)] = cljs.core.first((state_95606[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95856 = state_95606;
state_95606 = G__95856;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$user$login_callback_$_state_machine__41839__auto__ = function(state_95606){
switch(arguments.length){
case 0:
return frontend$handler$user$login_callback_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$user$login_callback_$_state_machine__41839__auto____1.call(this,state_95606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$login_callback_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$login_callback_$_state_machine__41839__auto____0;
frontend$handler$user$login_callback_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$login_callback_$_state_machine__41839__auto____1;
return frontend$handler$user$login_callback_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_95632 = f__41862__auto__();
(statearr_95632[(6)] = c__41861__auto__);

return statearr_95632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
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
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_95684){
var state_val_95685 = (state_95684[(1)]);
if((state_val_95685 === (1))){
var inst_95640 = ["https://",frontend.config.API_DOMAIN,"/auth_refresh_token?refresh_token=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(refresh_token)].join('');
var inst_95646 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_95660 = [false];
var inst_95661 = cljs.core.PersistentHashMap.fromArrays(inst_95646,inst_95660);
var inst_95662 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_95640,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_95661], 0));
var state_95684__$1 = state_95684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95684__$1,(2),inst_95662);
} else {
if((state_val_95685 === (2))){
var inst_95664 = (state_95684[(7)]);
var inst_95664__$1 = (state_95684[(2)]);
var inst_95665 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_95664__$1);
var inst_95666 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((400),inst_95665);
var state_95684__$1 = (function (){var statearr_95694 = state_95684;
(statearr_95694[(7)] = inst_95664__$1);

return statearr_95694;
})();
if(inst_95666){
var statearr_95695_95857 = state_95684__$1;
(statearr_95695_95857[(1)] = (3));

} else {
var statearr_95696_95858 = state_95684__$1;
(statearr_95696_95858[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95685 === (3))){
var inst_95668 = frontend.handler.user.clear_tokens();
var state_95684__$1 = (function (){var statearr_95697 = state_95684;
(statearr_95697[(8)] = inst_95668);

return statearr_95697;
})();
var statearr_95699_95859 = state_95684__$1;
(statearr_95699_95859[(2)] = false);

(statearr_95699_95859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95685 === (4))){
var inst_95672 = (state_95684[(9)]);
var inst_95664 = (state_95684[(7)]);
var inst_95670 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_95664);
var inst_95672__$1 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_95670) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_95670));
var state_95684__$1 = (function (){var statearr_95701 = state_95684;
(statearr_95701[(9)] = inst_95672__$1);

return statearr_95701;
})();
if(cljs.core.truth_(inst_95672__$1)){
var statearr_95702_95860 = state_95684__$1;
(statearr_95702_95860[(1)] = (6));

} else {
var statearr_95703_95861 = state_95684__$1;
(statearr_95703_95861[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95685 === (5))){
var inst_95682 = (state_95684[(2)]);
var state_95684__$1 = state_95684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95684__$1,inst_95682);
} else {
if((state_val_95685 === (6))){
var inst_95664 = (state_95684[(7)]);
var state_95684__$1 = state_95684;
var statearr_95708_95862 = state_95684__$1;
(statearr_95708_95862[(2)] = inst_95664);

(statearr_95708_95862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95685 === (7))){
var inst_95672 = (state_95684[(9)]);
var state_95684__$1 = state_95684;
var statearr_95711_95863 = state_95684__$1;
(statearr_95711_95863[(2)] = inst_95672);

(statearr_95711_95863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95685 === (8))){
var inst_95676 = (state_95684[(2)]);
var inst_95677 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_95676);
var inst_95678 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_95677);
var inst_95679 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_95677);
var inst_95680 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2(inst_95678,inst_95679);
var state_95684__$1 = (function (){var statearr_95712 = state_95684;
(statearr_95712[(10)] = inst_95680);

return statearr_95712;
})();
var statearr_95713_95865 = state_95684__$1;
(statearr_95713_95865[(2)] = true);

(statearr_95713_95865[(1)] = (5));


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
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto__ = null;
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto____0 = (function (){
var statearr_95714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_95714[(0)] = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto__);

(statearr_95714[(1)] = (1));

return statearr_95714;
});
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto____1 = (function (state_95684){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_95684);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e95715){var ex__41842__auto__ = e95715;
var statearr_95716_95867 = state_95684;
(statearr_95716_95867[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_95684[(4)]))){
var statearr_95717_95868 = state_95684;
(statearr_95717_95868[(1)] = cljs.core.first((state_95684[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95869 = state_95684;
state_95684 = G__95869;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto__ = function(state_95684){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto____1.call(this,state_95684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto____0;
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto____1;
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_95718 = f__41862__auto__();
(statearr_95718[(6)] = c__41861__auto__);

return statearr_95718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
} else {
return null;
}
});
frontend.handler.user.stop_refresh = false;
frontend.handler.user.refresh_tokens_loop = (function frontend$handler$user$refresh_tokens_loop(){
frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start refresh-tokens-loop"], 0));

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_95756){
var state_val_95757 = (state_95756[(1)]);
if((state_val_95757 === (7))){
var inst_95747 = (state_95756[(2)]);
var state_95756__$1 = (function (){var statearr_95761 = state_95756;
(statearr_95761[(7)] = inst_95747);

return statearr_95761;
})();
if(frontend.handler.user.stop_refresh){
var statearr_95762_95873 = state_95756__$1;
(statearr_95762_95873[(1)] = (14));

} else {
var statearr_95763_95874 = state_95756__$1;
(statearr_95763_95874[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (1))){
var state_95756__$1 = state_95756;
var statearr_95764_95875 = state_95756__$1;
(statearr_95764_95875[(2)] = null);

(statearr_95764_95875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (4))){
var inst_95724 = (state_95756[(2)]);
var inst_95725 = frontend.state.get_auth_refresh_token();
var state_95756__$1 = (function (){var statearr_95767 = state_95756;
(statearr_95767[(8)] = inst_95724);

return statearr_95767;
})();
if(cljs.core.truth_(inst_95725)){
var statearr_95772_95876 = state_95756__$1;
(statearr_95772_95876[(1)] = (5));

} else {
var statearr_95774_95877 = state_95756__$1;
(statearr_95774_95877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (15))){
var state_95756__$1 = state_95756;
var statearr_95777_95878 = state_95756__$1;
(statearr_95777_95878[(2)] = null);

(statearr_95777_95878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (13))){
var inst_95744 = (state_95756[(2)]);
var state_95756__$1 = state_95756;
var statearr_95779_95879 = state_95756__$1;
(statearr_95779_95879[(2)] = inst_95744);

(statearr_95779_95879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (6))){
var state_95756__$1 = state_95756;
var statearr_95782_95880 = state_95756__$1;
(statearr_95782_95880[(2)] = null);

(statearr_95782_95880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (3))){
var inst_95754 = (state_95756[(2)]);
var state_95756__$1 = state_95756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95756__$1,inst_95754);
} else {
if((state_val_95757 === (12))){
var state_95756__$1 = state_95756;
var statearr_95785_95881 = state_95756__$1;
(statearr_95785_95881[(2)] = null);

(statearr_95785_95881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (2))){
var inst_95722 = cljs.core.async.timeout((60000));
var state_95756__$1 = state_95756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95756__$1,(4),inst_95722);
} else {
if((state_val_95757 === (11))){
var inst_95737 = cljs_time.core.now();
var inst_95738 = cljs_time.coerce.to_string(inst_95737);
var inst_95739 = ["refresh tokens... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_95738)].join('');
var inst_95740 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_95739], 0));
var inst_95741 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_95756__$1 = (function (){var statearr_95787 = state_95756;
(statearr_95787[(9)] = inst_95740);

return statearr_95787;
})();
var statearr_95788_95883 = state_95756__$1;
(statearr_95788_95883[(2)] = inst_95741);

(statearr_95788_95883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (9))){
var inst_95727 = (state_95756[(10)]);
var inst_95731 = frontend.handler.user.parse_jwt(inst_95727);
var inst_95732 = frontend.handler.user.almost_expired_QMARK_(inst_95731);
var state_95756__$1 = state_95756;
var statearr_95793_95884 = state_95756__$1;
(statearr_95793_95884[(2)] = inst_95732);

(statearr_95793_95884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (5))){
var inst_95728 = (state_95756[(11)]);
var inst_95727 = (state_95756[(10)]);
var inst_95727__$1 = frontend.state.get_auth_id_token();
var inst_95728__$1 = (inst_95727__$1 == null);
var state_95756__$1 = (function (){var statearr_95795 = state_95756;
(statearr_95795[(11)] = inst_95728__$1);

(statearr_95795[(10)] = inst_95727__$1);

return statearr_95795;
})();
if(cljs.core.truth_(inst_95728__$1)){
var statearr_95798_95885 = state_95756__$1;
(statearr_95798_95885[(1)] = (8));

} else {
var statearr_95799_95886 = state_95756__$1;
(statearr_95799_95886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (14))){
var state_95756__$1 = state_95756;
var statearr_95804_95887 = state_95756__$1;
(statearr_95804_95887[(2)] = null);

(statearr_95804_95887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (16))){
var inst_95752 = (state_95756[(2)]);
var state_95756__$1 = state_95756;
var statearr_95809_95888 = state_95756__$1;
(statearr_95809_95888[(2)] = inst_95752);

(statearr_95809_95888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (10))){
var inst_95734 = (state_95756[(2)]);
var state_95756__$1 = state_95756;
if(cljs.core.truth_(inst_95734)){
var statearr_95813_95889 = state_95756__$1;
(statearr_95813_95889[(1)] = (11));

} else {
var statearr_95814_95893 = state_95756__$1;
(statearr_95814_95893[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95757 === (8))){
var inst_95728 = (state_95756[(11)]);
var state_95756__$1 = state_95756;
var statearr_95819_95894 = state_95756__$1;
(statearr_95819_95894[(2)] = inst_95728);

(statearr_95819_95894[(1)] = (10));


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
var frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto__ = null;
var frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto____0 = (function (){
var statearr_95820 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_95820[(0)] = frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto__);

(statearr_95820[(1)] = (1));

return statearr_95820;
});
var frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto____1 = (function (state_95756){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_95756);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e95821){var ex__41842__auto__ = e95821;
var statearr_95825_95895 = state_95756;
(statearr_95825_95895[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_95756[(4)]))){
var statearr_95830_95896 = state_95756;
(statearr_95830_95896[(1)] = cljs.core.first((state_95756[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95897 = state_95756;
state_95756 = G__95897;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto__ = function(state_95756){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto____1.call(this,state_95756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto____0;
frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto____1;
return frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_95831 = f__41862__auto__();
(statearr_95831[(6)] = c__41861__auto__);

return statearr_95831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});

//# sourceMappingURL=frontend.handler.user.js.map
