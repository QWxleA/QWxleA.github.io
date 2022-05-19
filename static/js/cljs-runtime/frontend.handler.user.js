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
var G__63928 = jwt;
var G__63928__$1 = (((G__63928 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__63928,"."));
var G__63928__$2 = (((G__63928__$1 == null))?null:cljs.core.second(G__63928__$1));
var G__63928__$3 = (((G__63928__$2 == null))?null:atob(G__63928__$2));
var G__63928__$4 = (((G__63928__$3 == null))?null:JSON.parse(G__63928__$3));
if((G__63928__$4 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__63928__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
frontend.handler.user.expired_QMARK_ = (function frontend$handler$user$expired_QMARK_(parsed_jwt){
var G__63932 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__63932__$1 = (((G__63932 == null))?null:cljs_time.coerce.from_long(G__63932));
if((G__63932__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__63932__$1,cljs_time.core.now());
}
});
/**
 * return true when jwt will expire after 1h
 */
frontend.handler.user.almost_expired_QMARK_ = (function frontend$handler$user$almost_expired_QMARK_(parsed_jwt){
var G__63937 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__63937__$1 = (((G__63937 == null))?null:cljs_time.coerce.from_long(G__63937));
if((G__63937__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__63937__$1,cljs_time.core.from_now(cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((1))));
}
});
frontend.handler.user.email = (function frontend$handler$user$email(){
var G__63938 = frontend.state.get_auth_id_token();
var G__63938__$1 = (((G__63938 == null))?null:frontend.handler.user.parse_jwt(G__63938));
if((G__63938__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(G__63938__$1);
}
});
frontend.handler.user.user_uuid = (function frontend$handler$user$user_uuid(){
var G__63939 = frontend.state.get_auth_id_token();
var G__63939__$1 = (((G__63939 == null))?null:frontend.handler.user.parse_jwt(G__63939));
if((G__63939__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__63939__$1);
}
});
frontend.handler.user.logged_in_QMARK_ = (function frontend$handler$user$logged_in_QMARK_(){
return cljs.core.boolean$((function (){var G__63940 = frontend.state.get_auth_id_token();
var G__63940__$1 = (((G__63940 == null))?null:frontend.handler.user.parse_jwt(G__63940));
var G__63940__$2 = (((G__63940__$1 == null))?null:frontend.handler.user.expired_QMARK_(G__63940__$1));
if((G__63940__$2 == null)){
return null;
} else {
return cljs.core.not(G__63940__$2);
}
})());
});
frontend.handler.user.clear_tokens = (function frontend$handler$user$clear_tokens(){
frontend.state.set_auth_id_token(null);

frontend.state.set_auth_access_token(null);

return frontend.state.set_auth_refresh_token(null);
});
frontend.handler.user.set_tokens_BANG_ = (function frontend$handler$user$set_tokens_BANG_(var_args){
var G__63946 = arguments.length;
switch (G__63946) {
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63970){
var state_val_63971 = (state_63970[(1)]);
if((state_val_63971 === (1))){
var inst_63950 = ["https://",frontend.config.API_DOMAIN,"/auth_callback?code=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join('');
var inst_63951 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_63952 = [false];
var inst_63953 = cljs.core.PersistentHashMap.fromArrays(inst_63951,inst_63952);
var inst_63954 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_63950,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_63953], 0));
var state_63970__$1 = state_63970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63970__$1,(2),inst_63954);
} else {
if((state_val_63971 === (2))){
var inst_63956 = (state_63970[(7)]);
var inst_63956__$1 = (state_63970[(2)]);
var inst_63957 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_63956__$1);
var inst_63958 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_63957);
var state_63970__$1 = (function (){var statearr_63972 = state_63970;
(statearr_63972[(7)] = inst_63956__$1);

return statearr_63972;
})();
if(inst_63958){
var statearr_63974_64160 = state_63970__$1;
(statearr_63974_64160[(1)] = (3));

} else {
var statearr_63978_64161 = state_63970__$1;
(statearr_63978_64161[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63971 === (3))){
var inst_63956 = (state_63970[(7)]);
var inst_63960 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_63956);
var inst_63961 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_63960);
var inst_63962 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_63960);
var inst_63963 = new cljs.core.Keyword(null,"refresh_token","refresh_token",-162233815).cljs$core$IFn$_invoke$arity$1(inst_63960);
var inst_63964 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63961,inst_63962,inst_63963);
var state_63970__$1 = state_63970;
var statearr_63989_64162 = state_63970__$1;
(statearr_63989_64162[(2)] = inst_63964);

(statearr_63989_64162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63971 === (4))){
var inst_63956 = (state_63970[(7)]);
var inst_63966 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["login-callback",inst_63956], 0));
var state_63970__$1 = state_63970;
var statearr_63990_64163 = state_63970__$1;
(statearr_63990_64163[(2)] = inst_63966);

(statearr_63990_64163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63971 === (5))){
var inst_63968 = (state_63970[(2)]);
var state_63970__$1 = state_63970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63970__$1,inst_63968);
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
var statearr_63994 = [null,null,null,null,null,null,null,null];
(statearr_63994[(0)] = frontend$handler$user$login_callback_$_state_machine__41839__auto__);

(statearr_63994[(1)] = (1));

return statearr_63994;
});
var frontend$handler$user$login_callback_$_state_machine__41839__auto____1 = (function (state_63970){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63970);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63995){var ex__41842__auto__ = e63995;
var statearr_63996_64164 = state_63970;
(statearr_63996_64164[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63970[(4)]))){
var statearr_63997_64165 = state_63970;
(statearr_63997_64165[(1)] = cljs.core.first((state_63970[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64169 = state_63970;
state_63970 = G__64169;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$user$login_callback_$_state_machine__41839__auto__ = function(state_63970){
switch(arguments.length){
case 0:
return frontend$handler$user$login_callback_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$user$login_callback_$_state_machine__41839__auto____1.call(this,state_63970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$login_callback_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$login_callback_$_state_machine__41839__auto____0;
frontend$handler$user$login_callback_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$login_callback_$_state_machine__41839__auto____1;
return frontend$handler$user$login_callback_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64001 = f__41862__auto__();
(statearr_64001[(6)] = c__41861__auto__);

return statearr_64001;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64029){
var state_val_64030 = (state_64029[(1)]);
if((state_val_64030 === (1))){
var inst_64004 = ["https://",frontend.config.API_DOMAIN,"/auth_refresh_token?refresh_token=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(refresh_token)].join('');
var inst_64005 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_64006 = [false];
var inst_64007 = cljs.core.PersistentHashMap.fromArrays(inst_64005,inst_64006);
var inst_64008 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_64004,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_64007], 0));
var state_64029__$1 = state_64029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64029__$1,(2),inst_64008);
} else {
if((state_val_64030 === (2))){
var inst_64010 = (state_64029[(7)]);
var inst_64010__$1 = (state_64029[(2)]);
var inst_64011 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_64010__$1);
var inst_64012 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((400),inst_64011);
var state_64029__$1 = (function (){var statearr_64031 = state_64029;
(statearr_64031[(7)] = inst_64010__$1);

return statearr_64031;
})();
if(inst_64012){
var statearr_64033_64170 = state_64029__$1;
(statearr_64033_64170[(1)] = (3));

} else {
var statearr_64034_64171 = state_64029__$1;
(statearr_64034_64171[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (3))){
var inst_64014 = frontend.handler.user.clear_tokens();
var state_64029__$1 = (function (){var statearr_64035 = state_64029;
(statearr_64035[(8)] = inst_64014);

return statearr_64035;
})();
var statearr_64036_64172 = state_64029__$1;
(statearr_64036_64172[(2)] = false);

(statearr_64036_64172[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (4))){
var inst_64017 = (state_64029[(9)]);
var inst_64010 = (state_64029[(7)]);
var inst_64016 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_64010);
var inst_64017__$1 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_64016) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_64016));
var state_64029__$1 = (function (){var statearr_64037 = state_64029;
(statearr_64037[(9)] = inst_64017__$1);

return statearr_64037;
})();
if(cljs.core.truth_(inst_64017__$1)){
var statearr_64038_64173 = state_64029__$1;
(statearr_64038_64173[(1)] = (6));

} else {
var statearr_64039_64174 = state_64029__$1;
(statearr_64039_64174[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (5))){
var inst_64027 = (state_64029[(2)]);
var state_64029__$1 = state_64029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64029__$1,inst_64027);
} else {
if((state_val_64030 === (6))){
var inst_64010 = (state_64029[(7)]);
var state_64029__$1 = state_64029;
var statearr_64040_64175 = state_64029__$1;
(statearr_64040_64175[(2)] = inst_64010);

(statearr_64040_64175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (7))){
var inst_64017 = (state_64029[(9)]);
var state_64029__$1 = state_64029;
var statearr_64041_64176 = state_64029__$1;
(statearr_64041_64176[(2)] = inst_64017);

(statearr_64041_64176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (8))){
var inst_64021 = (state_64029[(2)]);
var inst_64022 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_64021);
var inst_64023 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_64022);
var inst_64024 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_64022);
var inst_64025 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2(inst_64023,inst_64024);
var state_64029__$1 = (function (){var statearr_64042 = state_64029;
(statearr_64042[(10)] = inst_64025);

return statearr_64042;
})();
var statearr_64043_64177 = state_64029__$1;
(statearr_64043_64177[(2)] = true);

(statearr_64043_64177[(1)] = (5));


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
var statearr_64045 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64045[(0)] = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto__);

(statearr_64045[(1)] = (1));

return statearr_64045;
});
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto____1 = (function (state_64029){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64029);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64046){var ex__41842__auto__ = e64046;
var statearr_64047_64182 = state_64029;
(statearr_64047_64182[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64029[(4)]))){
var statearr_64048_64183 = state_64029;
(statearr_64048_64183[(1)] = cljs.core.first((state_64029[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64188 = state_64029;
state_64029 = G__64188;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto__ = function(state_64029){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto____1.call(this,state_64029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto____0;
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto____1;
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64054 = f__41862__auto__();
(statearr_64054[(6)] = c__41861__auto__);

return statearr_64054;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64114){
var state_val_64115 = (state_64114[(1)]);
if((state_val_64115 === (7))){
var inst_64103 = (state_64114[(2)]);
var state_64114__$1 = (function (){var statearr_64116 = state_64114;
(statearr_64116[(7)] = inst_64103);

return statearr_64116;
})();
if(frontend.handler.user.stop_refresh){
var statearr_64118_64189 = state_64114__$1;
(statearr_64118_64189[(1)] = (14));

} else {
var statearr_64120_64190 = state_64114__$1;
(statearr_64120_64190[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (1))){
var state_64114__$1 = state_64114;
var statearr_64123_64191 = state_64114__$1;
(statearr_64123_64191[(2)] = null);

(statearr_64123_64191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (4))){
var inst_64060 = (state_64114[(2)]);
var inst_64061 = frontend.state.get_auth_refresh_token();
var state_64114__$1 = (function (){var statearr_64125 = state_64114;
(statearr_64125[(8)] = inst_64060);

return statearr_64125;
})();
if(cljs.core.truth_(inst_64061)){
var statearr_64126_64192 = state_64114__$1;
(statearr_64126_64192[(1)] = (5));

} else {
var statearr_64128_64193 = state_64114__$1;
(statearr_64128_64193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (15))){
var state_64114__$1 = state_64114;
var statearr_64129_64194 = state_64114__$1;
(statearr_64129_64194[(2)] = null);

(statearr_64129_64194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (13))){
var inst_64100 = (state_64114[(2)]);
var state_64114__$1 = state_64114;
var statearr_64131_64195 = state_64114__$1;
(statearr_64131_64195[(2)] = inst_64100);

(statearr_64131_64195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (6))){
var state_64114__$1 = state_64114;
var statearr_64134_64196 = state_64114__$1;
(statearr_64134_64196[(2)] = null);

(statearr_64134_64196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (3))){
var inst_64112 = (state_64114[(2)]);
var state_64114__$1 = state_64114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64114__$1,inst_64112);
} else {
if((state_val_64115 === (12))){
var state_64114__$1 = state_64114;
var statearr_64136_64197 = state_64114__$1;
(statearr_64136_64197[(2)] = null);

(statearr_64136_64197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (2))){
var inst_64058 = cljs.core.async.timeout((60000));
var state_64114__$1 = state_64114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64114__$1,(4),inst_64058);
} else {
if((state_val_64115 === (11))){
var inst_64091 = cljs_time.core.now();
var inst_64092 = cljs_time.coerce.to_string(inst_64091);
var inst_64093 = ["refresh tokens... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64092)].join('');
var inst_64094 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_64093], 0));
var inst_64096 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_64114__$1 = (function (){var statearr_64138 = state_64114;
(statearr_64138[(9)] = inst_64094);

return statearr_64138;
})();
var statearr_64139_64198 = state_64114__$1;
(statearr_64139_64198[(2)] = inst_64096);

(statearr_64139_64198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (9))){
var inst_64064 = (state_64114[(10)]);
var inst_64075 = frontend.handler.user.parse_jwt(inst_64064);
var inst_64076 = frontend.handler.user.almost_expired_QMARK_(inst_64075);
var state_64114__$1 = state_64114;
var statearr_64140_64199 = state_64114__$1;
(statearr_64140_64199[(2)] = inst_64076);

(statearr_64140_64199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (5))){
var inst_64064 = (state_64114[(10)]);
var inst_64071 = (state_64114[(11)]);
var inst_64064__$1 = frontend.state.get_auth_id_token();
var inst_64071__$1 = (inst_64064__$1 == null);
var state_64114__$1 = (function (){var statearr_64143 = state_64114;
(statearr_64143[(10)] = inst_64064__$1);

(statearr_64143[(11)] = inst_64071__$1);

return statearr_64143;
})();
if(cljs.core.truth_(inst_64071__$1)){
var statearr_64144_64201 = state_64114__$1;
(statearr_64144_64201[(1)] = (8));

} else {
var statearr_64145_64202 = state_64114__$1;
(statearr_64145_64202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (14))){
var state_64114__$1 = state_64114;
var statearr_64146_64204 = state_64114__$1;
(statearr_64146_64204[(2)] = null);

(statearr_64146_64204[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (16))){
var inst_64109 = (state_64114[(2)]);
var state_64114__$1 = state_64114;
var statearr_64147_64205 = state_64114__$1;
(statearr_64147_64205[(2)] = inst_64109);

(statearr_64147_64205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (10))){
var inst_64078 = (state_64114[(2)]);
var state_64114__$1 = state_64114;
if(cljs.core.truth_(inst_64078)){
var statearr_64148_64206 = state_64114__$1;
(statearr_64148_64206[(1)] = (11));

} else {
var statearr_64149_64207 = state_64114__$1;
(statearr_64149_64207[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64115 === (8))){
var inst_64071 = (state_64114[(11)]);
var state_64114__$1 = state_64114;
var statearr_64150_64208 = state_64114__$1;
(statearr_64150_64208[(2)] = inst_64071);

(statearr_64150_64208[(1)] = (10));


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
var statearr_64151 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64151[(0)] = frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto__);

(statearr_64151[(1)] = (1));

return statearr_64151;
});
var frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto____1 = (function (state_64114){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64114);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64152){var ex__41842__auto__ = e64152;
var statearr_64153_64209 = state_64114;
(statearr_64153_64209[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64114[(4)]))){
var statearr_64155_64210 = state_64114;
(statearr_64155_64210[(1)] = cljs.core.first((state_64114[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64211 = state_64114;
state_64114 = G__64211;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto__ = function(state_64114){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto____1.call(this,state_64114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto____0;
frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto____1;
return frontend$handler$user$refresh_tokens_loop_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64157 = f__41862__auto__();
(statearr_64157[(6)] = c__41861__auto__);

return statearr_64157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});

//# sourceMappingURL=frontend.handler.user.js.map
