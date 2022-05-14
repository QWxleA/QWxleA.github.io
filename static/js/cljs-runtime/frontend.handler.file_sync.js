goog.provide('frontend.handler.file_sync');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
frontend.handler.file_sync.hiding_login_AMPERSAND_file_sync = cljs.core.not(frontend.config.dev_QMARK_);
frontend.handler.file_sync.refresh_file_sync_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.handler.file_sync.graph_txid_exists_QMARK_ = (function frontend$handler$file_sync$graph_txid_exists_QMARK_(){
var vec__69269 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var _user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69269,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69269,(1),null);
var _txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69269,(2),null);
return (!((graph_uuid == null)));
});
frontend.handler.file_sync.create_graph = (function frontend$handler$file_sync$create_graph(name){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_69315){
var state_val_69316 = (state_69315[(1)]);
if((state_val_69316 === (7))){
var inst_69286 = (state_69315[(7)]);
var state_69315__$1 = state_69315;
var statearr_69318_69512 = state_69315__$1;
(statearr_69318_69512[(2)] = inst_69286);

(statearr_69318_69512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69316 === (1))){
var inst_69276 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$create_graph$arity$2(null,name);
var state_69315__$1 = state_69315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69315__$1,(2),inst_69276);
} else {
if((state_val_69316 === (4))){
var inst_69278 = (state_69315[(8)]);
var inst_69282 = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(inst_69278);
var state_69315__$1 = state_69315;
var statearr_69323_69513 = state_69315__$1;
(statearr_69323_69513[(2)] = inst_69282);

(statearr_69323_69513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69316 === (13))){
var inst_69284 = (state_69315[(9)]);
var inst_69308 = ["Create graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69284)].join('');
var inst_69309 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_69308,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_69315__$1 = state_69315;
var statearr_69324_69514 = state_69315__$1;
(statearr_69324_69514[(2)] = inst_69309);

(statearr_69324_69514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69316 === (6))){
var inst_69284 = (state_69315[(9)]);
var inst_69288 = typeof inst_69284 === 'string';
var state_69315__$1 = state_69315;
var statearr_69325_69515 = state_69315__$1;
(statearr_69325_69515[(2)] = inst_69288);

(statearr_69325_69515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69316 === (3))){
var inst_69278 = (state_69315[(8)]);
var state_69315__$1 = state_69315;
var statearr_69326_69516 = state_69315__$1;
(statearr_69326_69516[(2)] = inst_69278);

(statearr_69326_69516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69316 === (12))){
var inst_69305 = ["Create graph failed: already existed graph: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var inst_69306 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_69305,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_69315__$1 = state_69315;
var statearr_69327_69517 = state_69315__$1;
(statearr_69327_69517[(2)] = inst_69306);

(statearr_69327_69517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69316 === (2))){
var inst_69278 = (state_69315[(8)]);
var inst_69278__$1 = (state_69315[(2)]);
var inst_69279 = (inst_69278__$1 instanceof cljs.core.ExceptionInfo);
var state_69315__$1 = (function (){var statearr_69328 = state_69315;
(statearr_69328[(8)] = inst_69278__$1);

return statearr_69328;
})();
if(cljs.core.truth_(inst_69279)){
var statearr_69329_69518 = state_69315__$1;
(statearr_69329_69518[(1)] = (3));

} else {
var statearr_69330_69519 = state_69315__$1;
(statearr_69330_69519[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69316 === (11))){
var inst_69313 = (state_69315[(2)]);
var state_69315__$1 = state_69315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69315__$1,inst_69313);
} else {
if((state_val_69316 === (9))){
var inst_69284 = (state_69315[(9)]);
var inst_69293 = frontend.handler.user.user_uuid();
var inst_69294 = frontend.state.get_current_repo();
var inst_69295 = frontend.fs.sync.update_graphs_txid_BANG_((0),inst_69284,inst_69293,inst_69294);
var inst_69296 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_69315__$1 = (function (){var statearr_69331 = state_69315;
(statearr_69331[(10)] = inst_69295);

return statearr_69331;
})();
var statearr_69332_69522 = state_69315__$1;
(statearr_69332_69522[(2)] = inst_69296);

(statearr_69332_69522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69316 === (5))){
var inst_69286 = (state_69315[(7)]);
var inst_69284 = (state_69315[(9)]);
var inst_69284__$1 = (state_69315[(2)]);
var inst_69285 = (inst_69284__$1 instanceof cljs.core.ExceptionInfo);
var inst_69286__$1 = cljs.core.not(inst_69285);
var state_69315__$1 = (function (){var statearr_69333 = state_69315;
(statearr_69333[(7)] = inst_69286__$1);

(statearr_69333[(9)] = inst_69284__$1);

return statearr_69333;
})();
if(inst_69286__$1){
var statearr_69334_69523 = state_69315__$1;
(statearr_69334_69523[(1)] = (6));

} else {
var statearr_69335_69524 = state_69315__$1;
(statearr_69335_69524[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69316 === (14))){
var inst_69311 = (state_69315[(2)]);
var state_69315__$1 = state_69315;
var statearr_69336_69525 = state_69315__$1;
(statearr_69336_69525[(2)] = inst_69311);

(statearr_69336_69525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69316 === (10))){
var inst_69284 = (state_69315[(9)]);
var inst_69298 = cljs.core.ex_data(inst_69284);
var inst_69299 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69300 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_69301 = (new cljs.core.PersistentVector(null,2,(5),inst_69299,inst_69300,null));
var inst_69302 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_69298,inst_69301);
var inst_69303 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),inst_69302);
var state_69315__$1 = state_69315;
if(inst_69303){
var statearr_69337_69527 = state_69315__$1;
(statearr_69337_69527[(1)] = (12));

} else {
var statearr_69338_69528 = state_69315__$1;
(statearr_69338_69528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69316 === (8))){
var inst_69291 = (state_69315[(2)]);
var state_69315__$1 = state_69315;
if(cljs.core.truth_(inst_69291)){
var statearr_69339_69529 = state_69315__$1;
(statearr_69339_69529[(1)] = (9));

} else {
var statearr_69340_69530 = state_69315__$1;
(statearr_69340_69530[(1)] = (10));

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
});
return (function() {
var frontend$handler$file_sync$create_graph_$_state_machine__41839__auto__ = null;
var frontend$handler$file_sync$create_graph_$_state_machine__41839__auto____0 = (function (){
var statearr_69341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69341[(0)] = frontend$handler$file_sync$create_graph_$_state_machine__41839__auto__);

(statearr_69341[(1)] = (1));

return statearr_69341;
});
var frontend$handler$file_sync$create_graph_$_state_machine__41839__auto____1 = (function (state_69315){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_69315);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e69344){var ex__41842__auto__ = e69344;
var statearr_69345_69531 = state_69315;
(statearr_69345_69531[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_69315[(4)]))){
var statearr_69346_69532 = state_69315;
(statearr_69346_69532[(1)] = cljs.core.first((state_69315[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69533 = state_69315;
state_69315 = G__69533;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$file_sync$create_graph_$_state_machine__41839__auto__ = function(state_69315){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$create_graph_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$file_sync$create_graph_$_state_machine__41839__auto____1.call(this,state_69315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$create_graph_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$create_graph_$_state_machine__41839__auto____0;
frontend$handler$file_sync$create_graph_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$create_graph_$_state_machine__41839__auto____1;
return frontend$handler$file_sync$create_graph_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_69349 = f__41862__auto__();
(statearr_69349[(6)] = c__41861__auto__);

return statearr_69349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.handler.file_sync.delete_graph = (function frontend$handler$file_sync$delete_graph(graph_uuid){
frontend.fs.sync.sync_stop();

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_69381){
var state_val_69382 = (state_69381[(1)]);
if((state_val_69382 === (1))){
var inst_69351 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2(null,graph_uuid);
var state_69381__$1 = state_69381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69381__$1,(2),inst_69351);
} else {
if((state_val_69382 === (2))){
var inst_69353 = (state_69381[(2)]);
var inst_69354 = (inst_69353 instanceof cljs.core.ExceptionInfo);
var state_69381__$1 = state_69381;
if(cljs.core.truth_(inst_69354)){
var statearr_69383_69534 = state_69381__$1;
(statearr_69383_69534[(1)] = (3));

} else {
var statearr_69384_69535 = state_69381__$1;
(statearr_69384_69535[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69382 === (3))){
var inst_69356 = ["Delete graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid)].join('');
var inst_69357 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_69356,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_69381__$1 = state_69381;
var statearr_69385_69536 = state_69381__$1;
(statearr_69385_69536[(2)] = inst_69357);

(statearr_69385_69536[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69382 === (4))){
var inst_69363 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_69364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69363,(0),null);
var inst_69365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69363,(1),null);
var inst_69366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69363,(2),null);
var inst_69367 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_uuid,inst_69365);
var state_69381__$1 = (function (){var statearr_69387 = state_69381;
(statearr_69387[(7)] = inst_69364);

(statearr_69387[(8)] = inst_69366);

return statearr_69387;
})();
if(inst_69367){
var statearr_69388_69537 = state_69381__$1;
(statearr_69388_69537[(1)] = (6));

} else {
var statearr_69389_69538 = state_69381__$1;
(statearr_69389_69538[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69382 === (5))){
var inst_69378 = (state_69381[(2)]);
var state_69381__$1 = state_69381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69381__$1,inst_69378);
} else {
if((state_val_69382 === (6))){
var inst_69369 = frontend.state.get_current_repo();
var inst_69370 = frontend.fs.sync.clear_graphs_txid_BANG_(inst_69369);
var inst_69371 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_69381__$1 = (function (){var statearr_69392 = state_69381;
(statearr_69392[(9)] = inst_69370);

return statearr_69392;
})();
var statearr_69393_69539 = state_69381__$1;
(statearr_69393_69539[(2)] = inst_69371);

(statearr_69393_69539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69382 === (7))){
var state_69381__$1 = state_69381;
var statearr_69394_69540 = state_69381__$1;
(statearr_69394_69540[(2)] = null);

(statearr_69394_69540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69382 === (8))){
var inst_69374 = (state_69381[(2)]);
var inst_69376 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Graph deleted",new cljs.core.Keyword(null,"success","success",1890645906));
var state_69381__$1 = (function (){var statearr_69395 = state_69381;
(statearr_69395[(10)] = inst_69374);

return statearr_69395;
})();
var statearr_69396_69541 = state_69381__$1;
(statearr_69396_69541[(2)] = inst_69376);

(statearr_69396_69541[(1)] = (5));


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
var frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto__ = null;
var frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto____0 = (function (){
var statearr_69397 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69397[(0)] = frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto__);

(statearr_69397[(1)] = (1));

return statearr_69397;
});
var frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto____1 = (function (state_69381){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_69381);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e69398){var ex__41842__auto__ = e69398;
var statearr_69399_69542 = state_69381;
(statearr_69399_69542[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_69381[(4)]))){
var statearr_69400_69543 = state_69381;
(statearr_69400_69543[(1)] = cljs.core.first((state_69381[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69544 = state_69381;
state_69381 = G__69544;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto__ = function(state_69381){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto____1.call(this,state_69381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto____0;
frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto____1;
return frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_69403 = f__41862__auto__();
(statearr_69403[(6)] = c__41861__auto__);

return statearr_69403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.handler.file_sync.list_graphs = (function frontend$handler$file_sync$list_graphs(){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_69409){
var state_val_69410 = (state_69409[(1)]);
if((state_val_69410 === (1))){
var inst_69404 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_69409__$1 = state_69409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69409__$1,(2),inst_69404);
} else {
if((state_val_69410 === (2))){
var inst_69406 = (state_69409[(2)]);
var inst_69407 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_69406);
var state_69409__$1 = state_69409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69409__$1,inst_69407);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__ = null;
var frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____0 = (function (){
var statearr_69415 = [null,null,null,null,null,null,null];
(statearr_69415[(0)] = frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__);

(statearr_69415[(1)] = (1));

return statearr_69415;
});
var frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____1 = (function (state_69409){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_69409);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e69416){var ex__41842__auto__ = e69416;
var statearr_69417_69546 = state_69409;
(statearr_69417_69546[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_69409[(4)]))){
var statearr_69418_69547 = state_69409;
(statearr_69418_69547[(1)] = cljs.core.first((state_69409[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69548 = state_69409;
state_69409 = G__69548;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__ = function(state_69409){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____1.call(this,state_69409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____0;
frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____1;
return frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_69423 = f__41862__auto__();
(statearr_69423[(6)] = c__41861__auto__);

return statearr_69423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.handler.file_sync.switch_graph = (function frontend$handler$file_sync$switch_graph(graph_uuid){
frontend.fs.sync.update_graphs_txid_BANG_((0),graph_uuid,frontend.handler.user.user_uuid(),frontend.state.get_current_repo());

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
});
frontend.handler.file_sync.download_version_file = (function frontend$handler$file_sync$download_version_file(graph_uuid,file_uuid,version_uuid){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_69451){
var state_val_69452 = (state_69451[(1)]);
if((state_val_69452 === (1))){
var inst_69424 = (state_69451[(7)]);
var inst_69424__$1 = module$node_modules$path$path.join("version-files",file_uuid,version_uuid);
var inst_69425 = frontend.state.get_current_repo();
var inst_69426 = frontend.config.get_repo_dir(inst_69425);
var inst_69427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69428 = [inst_69424__$1];
var inst_69429 = (new cljs.core.PersistentVector(null,1,(5),inst_69427,inst_69428,null));
var inst_69430 = frontend.fs.sync.update_local_files(frontend.fs.sync.rsapi,graph_uuid,inst_69426,inst_69429);
var state_69451__$1 = (function (){var statearr_69455 = state_69451;
(statearr_69455[(7)] = inst_69424__$1);

return statearr_69455;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69451__$1,(2),inst_69430);
} else {
if((state_val_69452 === (2))){
var inst_69432 = (state_69451[(8)]);
var inst_69432__$1 = (state_69451[(2)]);
var inst_69433 = (inst_69432__$1 instanceof cljs.core.ExceptionInfo);
var state_69451__$1 = (function (){var statearr_69456 = state_69451;
(statearr_69456[(8)] = inst_69432__$1);

return statearr_69456;
})();
if(cljs.core.truth_(inst_69433)){
var statearr_69457_69549 = state_69451__$1;
(statearr_69457_69549[(1)] = (3));

} else {
var statearr_69458_69550 = state_69451__$1;
(statearr_69458_69550[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (3))){
var inst_69432 = (state_69451[(8)]);
var inst_69435 = cljs.core.ex_cause(inst_69432);
var inst_69436 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_69435,new cljs.core.Keyword(null,"error","error",-978969032));
var state_69451__$1 = state_69451;
var statearr_69459_69555 = state_69451__$1;
(statearr_69459_69555[(2)] = inst_69436);

(statearr_69459_69555[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (4))){
var inst_69424 = (state_69451[(7)]);
var inst_69438 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69439 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69440 = [new cljs.core.Keyword(null,"div","div",1057191632),"Downloaded version file at: "];
var inst_69441 = (new cljs.core.PersistentVector(null,2,(5),inst_69439,inst_69440,null));
var inst_69442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69443 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_69424];
var inst_69444 = (new cljs.core.PersistentVector(null,2,(5),inst_69442,inst_69443,null));
var inst_69445 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_69441,inst_69444];
var inst_69446 = (new cljs.core.PersistentVector(null,3,(5),inst_69438,inst_69445,null));
var inst_69447 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_69446,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_69451__$1 = state_69451;
var statearr_69462_69556 = state_69451__$1;
(statearr_69462_69556[(2)] = inst_69447);

(statearr_69462_69556[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69452 === (5))){
var inst_69449 = (state_69451[(2)]);
var state_69451__$1 = state_69451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69451__$1,inst_69449);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto__ = null;
var frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto____0 = (function (){
var statearr_69464 = [null,null,null,null,null,null,null,null,null];
(statearr_69464[(0)] = frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto__);

(statearr_69464[(1)] = (1));

return statearr_69464;
});
var frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto____1 = (function (state_69451){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_69451);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e69465){var ex__41842__auto__ = e69465;
var statearr_69466_69557 = state_69451;
(statearr_69466_69557[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_69451[(4)]))){
var statearr_69467_69558 = state_69451;
(statearr_69467_69558[(1)] = cljs.core.first((state_69451[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69559 = state_69451;
state_69451 = G__69559;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto__ = function(state_69451){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto____1.call(this,state_69451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto____0;
frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto____1;
return frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_69472 = f__41862__auto__();
(statearr_69472[(6)] = c__41861__auto__);

return statearr_69472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.handler.file_sync.list_file_versions = (function frontend$handler$file_sync$list_file_versions(graph_uuid,page){
var file_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page));
var temp__5720__auto__ = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(file_id) : frontend.db.entity.call(null,file_id)));
if(cljs.core.truth_(temp__5720__auto__)){
var path = temp__5720__auto__;
var base_path = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var path_STAR_ = clojure.string.replace_first(path,base_path,"");
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_69500){
var state_val_69501 = (state_69500[(1)]);
if((state_val_69501 === (1))){
var inst_69476 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3(null,graph_uuid,path_STAR_);
var state_69500__$1 = state_69500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69500__$1,(2),inst_69476);
} else {
if((state_val_69501 === (2))){
var inst_69478 = (state_69500[(2)]);
var inst_69479 = new cljs.core.Keyword(null,"VersionList","VersionList",-1189454538).cljs$core$IFn$_invoke$arity$1(inst_69478);
var inst_69483 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69485 = [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"File history - ",path_STAR_];
var inst_69486 = (new cljs.core.PersistentVector(null,3,(5),inst_69484,inst_69485,null));
var inst_69487 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69488 = [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)];
var inst_69489 = (new cljs.core.PersistentVector(null,1,(5),inst_69487,inst_69488,null));
var inst_69494 = (function (){var version_list = inst_69479;
return (function frontend$handler$file_sync$list_file_versions_$_iter__69490(s__69491){
return (new cljs.core.LazySeq(null,(function (){
var s__69491__$1 = s__69491;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__69491__$1);
if(temp__5720__auto____$1){
var s__69491__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__69491__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__69491__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__69493 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__69492 = (0);
while(true){
if((i__69492 < size__4651__auto__)){
var version = cljs.core._nth(c__4650__auto__,i__69492);
cljs.core.chunk_append(b__69493,(function (){var version_uuid = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__69492,version_uuid,version,c__4650__auto__,size__4651__auto__,b__69493,s__69491__$2,temp__5720__auto____$1,version_list,inst_69478,inst_69479,inst_69483,inst_69484,inst_69485,inst_69486,inst_69487,inst_69488,inst_69489,state_val_69501,c__41861__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
return frontend.handler.file_sync.download_version_file(graph_uuid,new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version),new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version));
});})(i__69492,version_uuid,version,c__4650__auto__,size__4651__auto__,b__69493,s__69491__$2,temp__5720__auto____$1,version_list,inst_69478,inst_69479,inst_69483,inst_69484,inst_69485,inst_69486,inst_69487,inst_69488,inst_69489,state_val_69501,c__41861__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago(cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version)))], null)], null);
})());

var G__69560 = (i__69492 + (1));
i__69492 = G__69560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69493),frontend$handler$file_sync$list_file_versions_$_iter__69490(cljs.core.chunk_rest(s__69491__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69493),null);
}
} else {
var version = cljs.core.first(s__69491__$2);
return cljs.core.cons((function (){var version_uuid = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (version_uuid,version,s__69491__$2,temp__5720__auto____$1,version_list,inst_69478,inst_69479,inst_69483,inst_69484,inst_69485,inst_69486,inst_69487,inst_69488,inst_69489,state_val_69501,c__41861__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
return frontend.handler.file_sync.download_version_file(graph_uuid,new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version),new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version));
});})(version_uuid,version,s__69491__$2,temp__5720__auto____$1,version_list,inst_69478,inst_69479,inst_69483,inst_69484,inst_69485,inst_69486,inst_69487,inst_69488,inst_69489,state_val_69501,c__41861__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago(cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version)))], null)], null);
})(),frontend$handler$file_sync$list_file_versions_$_iter__69490(cljs.core.rest(s__69491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
})();
var inst_69495 = inst_69494(inst_69479);
var inst_69496 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_69486,inst_69489,inst_69495];
var inst_69497 = (new cljs.core.PersistentVector(null,4,(5),inst_69483,inst_69496,null));
var inst_69498 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_69497,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_69500__$1 = state_69500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69500__$1,inst_69498);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____0 = (function (){
var statearr_69507 = [null,null,null,null,null,null,null];
(statearr_69507[(0)] = frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__);

(statearr_69507[(1)] = (1));

return statearr_69507;
});
var frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____1 = (function (state_69500){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_69500);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e69508){var ex__41842__auto__ = e69508;
var statearr_69509_69562 = state_69500;
(statearr_69509_69562[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_69500[(4)]))){
var statearr_69510_69563 = state_69500;
(statearr_69510_69563[(1)] = cljs.core.first((state_69500[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69564 = state_69500;
state_69500 = G__69564;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__ = function(state_69500){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____1.call(this,state_69500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____0;
frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____1;
return frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_69511 = f__41862__auto__();
(statearr_69511[(6)] = c__41861__auto__);

return statearr_69511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
} else {
return null;
}
});
frontend.handler.file_sync.get_current_graph_uuid = (function frontend$handler$file_sync$get_current_graph_uuid(){
return cljs.core.second(cljs.core.deref(frontend.fs.sync.graphs_txid));
});

//# sourceMappingURL=frontend.handler.file_sync.js.map
