goog.provide('frontend.handler.file_sync');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
frontend.handler.file_sync.hiding_login_AMPERSAND_file_sync = cljs.core.not(frontend.config.dev_QMARK_);
frontend.handler.file_sync.refresh_file_sync_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.handler.file_sync.graph_txid_exists_QMARK_ = (function frontend$handler$file_sync$graph_txid_exists_QMARK_(){
var vec__69505 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var _user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69505,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69505,(1),null);
var _txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69505,(2),null);
return (!((graph_uuid == null)));
});
frontend.handler.file_sync.create_graph = (function frontend$handler$file_sync$create_graph(name){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_69548){
var state_val_69549 = (state_69548[(1)]);
if((state_val_69549 === (7))){
var inst_69519 = (state_69548[(7)]);
var state_69548__$1 = state_69548;
var statearr_69550_69757 = state_69548__$1;
(statearr_69550_69757[(2)] = inst_69519);

(statearr_69550_69757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69549 === (1))){
var inst_69509 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$create_graph$arity$2(null,name);
var state_69548__$1 = state_69548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69548__$1,(2),inst_69509);
} else {
if((state_val_69549 === (4))){
var inst_69511 = (state_69548[(8)]);
var inst_69515 = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(inst_69511);
var state_69548__$1 = state_69548;
var statearr_69551_69758 = state_69548__$1;
(statearr_69551_69758[(2)] = inst_69515);

(statearr_69551_69758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69549 === (13))){
var inst_69517 = (state_69548[(9)]);
var inst_69541 = ["Create graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_69517)].join('');
var inst_69542 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_69541,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_69548__$1 = state_69548;
var statearr_69552_69759 = state_69548__$1;
(statearr_69552_69759[(2)] = inst_69542);

(statearr_69552_69759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69549 === (6))){
var inst_69517 = (state_69548[(9)]);
var inst_69521 = typeof inst_69517 === 'string';
var state_69548__$1 = state_69548;
var statearr_69553_69760 = state_69548__$1;
(statearr_69553_69760[(2)] = inst_69521);

(statearr_69553_69760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69549 === (3))){
var inst_69511 = (state_69548[(8)]);
var state_69548__$1 = state_69548;
var statearr_69554_69761 = state_69548__$1;
(statearr_69554_69761[(2)] = inst_69511);

(statearr_69554_69761[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69549 === (12))){
var inst_69538 = ["Create graph failed: already existed graph: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var inst_69539 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_69538,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_69548__$1 = state_69548;
var statearr_69556_69762 = state_69548__$1;
(statearr_69556_69762[(2)] = inst_69539);

(statearr_69556_69762[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69549 === (2))){
var inst_69511 = (state_69548[(8)]);
var inst_69511__$1 = (state_69548[(2)]);
var inst_69512 = (inst_69511__$1 instanceof cljs.core.ExceptionInfo);
var state_69548__$1 = (function (){var statearr_69558 = state_69548;
(statearr_69558[(8)] = inst_69511__$1);

return statearr_69558;
})();
if(cljs.core.truth_(inst_69512)){
var statearr_69559_69763 = state_69548__$1;
(statearr_69559_69763[(1)] = (3));

} else {
var statearr_69560_69764 = state_69548__$1;
(statearr_69560_69764[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69549 === (11))){
var inst_69546 = (state_69548[(2)]);
var state_69548__$1 = state_69548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69548__$1,inst_69546);
} else {
if((state_val_69549 === (9))){
var inst_69517 = (state_69548[(9)]);
var inst_69526 = frontend.handler.user.user_uuid();
var inst_69527 = frontend.state.get_current_repo();
var inst_69528 = frontend.fs.sync.update_graphs_txid_BANG_((0),inst_69517,inst_69526,inst_69527);
var inst_69529 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_69548__$1 = (function (){var statearr_69561 = state_69548;
(statearr_69561[(10)] = inst_69528);

return statearr_69561;
})();
var statearr_69562_69765 = state_69548__$1;
(statearr_69562_69765[(2)] = inst_69529);

(statearr_69562_69765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69549 === (5))){
var inst_69517 = (state_69548[(9)]);
var inst_69519 = (state_69548[(7)]);
var inst_69517__$1 = (state_69548[(2)]);
var inst_69518 = (inst_69517__$1 instanceof cljs.core.ExceptionInfo);
var inst_69519__$1 = cljs.core.not(inst_69518);
var state_69548__$1 = (function (){var statearr_69563 = state_69548;
(statearr_69563[(9)] = inst_69517__$1);

(statearr_69563[(7)] = inst_69519__$1);

return statearr_69563;
})();
if(inst_69519__$1){
var statearr_69564_69769 = state_69548__$1;
(statearr_69564_69769[(1)] = (6));

} else {
var statearr_69565_69770 = state_69548__$1;
(statearr_69565_69770[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69549 === (14))){
var inst_69544 = (state_69548[(2)]);
var state_69548__$1 = state_69548;
var statearr_69566_69771 = state_69548__$1;
(statearr_69566_69771[(2)] = inst_69544);

(statearr_69566_69771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69549 === (10))){
var inst_69517 = (state_69548[(9)]);
var inst_69531 = cljs.core.ex_data(inst_69517);
var inst_69532 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69533 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_69534 = (new cljs.core.PersistentVector(null,2,(5),inst_69532,inst_69533,null));
var inst_69535 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_69531,inst_69534);
var inst_69536 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),inst_69535);
var state_69548__$1 = state_69548;
if(inst_69536){
var statearr_69567_69774 = state_69548__$1;
(statearr_69567_69774[(1)] = (12));

} else {
var statearr_69568_69775 = state_69548__$1;
(statearr_69568_69775[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69549 === (8))){
var inst_69524 = (state_69548[(2)]);
var state_69548__$1 = state_69548;
if(cljs.core.truth_(inst_69524)){
var statearr_69569_69776 = state_69548__$1;
(statearr_69569_69776[(1)] = (9));

} else {
var statearr_69570_69777 = state_69548__$1;
(statearr_69570_69777[(1)] = (10));

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
var statearr_69573 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69573[(0)] = frontend$handler$file_sync$create_graph_$_state_machine__41839__auto__);

(statearr_69573[(1)] = (1));

return statearr_69573;
});
var frontend$handler$file_sync$create_graph_$_state_machine__41839__auto____1 = (function (state_69548){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_69548);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e69574){var ex__41842__auto__ = e69574;
var statearr_69575_69778 = state_69548;
(statearr_69575_69778[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_69548[(4)]))){
var statearr_69576_69779 = state_69548;
(statearr_69576_69779[(1)] = cljs.core.first((state_69548[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69781 = state_69548;
state_69548 = G__69781;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$file_sync$create_graph_$_state_machine__41839__auto__ = function(state_69548){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$create_graph_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$file_sync$create_graph_$_state_machine__41839__auto____1.call(this,state_69548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$create_graph_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$create_graph_$_state_machine__41839__auto____0;
frontend$handler$file_sync$create_graph_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$create_graph_$_state_machine__41839__auto____1;
return frontend$handler$file_sync$create_graph_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_69579 = f__41862__auto__();
(statearr_69579[(6)] = c__41861__auto__);

return statearr_69579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.handler.file_sync.delete_graph = (function frontend$handler$file_sync$delete_graph(graph_uuid){
frontend.fs.sync.sync_stop();

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_69607){
var state_val_69608 = (state_69607[(1)]);
if((state_val_69608 === (1))){
var inst_69580 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2(null,graph_uuid);
var state_69607__$1 = state_69607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69607__$1,(2),inst_69580);
} else {
if((state_val_69608 === (2))){
var inst_69582 = (state_69607[(2)]);
var inst_69583 = (inst_69582 instanceof cljs.core.ExceptionInfo);
var state_69607__$1 = state_69607;
if(cljs.core.truth_(inst_69583)){
var statearr_69609_69782 = state_69607__$1;
(statearr_69609_69782[(1)] = (3));

} else {
var statearr_69610_69783 = state_69607__$1;
(statearr_69610_69783[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69608 === (3))){
var inst_69585 = ["Delete graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid)].join('');
var inst_69586 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_69585,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_69607__$1 = state_69607;
var statearr_69611_69784 = state_69607__$1;
(statearr_69611_69784[(2)] = inst_69586);

(statearr_69611_69784[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69608 === (4))){
var inst_69591 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_69592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69591,(0),null);
var inst_69593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69591,(1),null);
var inst_69594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69591,(2),null);
var inst_69595 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_uuid,inst_69593);
var state_69607__$1 = (function (){var statearr_69612 = state_69607;
(statearr_69612[(7)] = inst_69594);

(statearr_69612[(8)] = inst_69592);

return statearr_69612;
})();
if(inst_69595){
var statearr_69613_69785 = state_69607__$1;
(statearr_69613_69785[(1)] = (6));

} else {
var statearr_69614_69786 = state_69607__$1;
(statearr_69614_69786[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69608 === (5))){
var inst_69605 = (state_69607[(2)]);
var state_69607__$1 = state_69607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69607__$1,inst_69605);
} else {
if((state_val_69608 === (6))){
var inst_69597 = frontend.state.get_current_repo();
var inst_69598 = frontend.fs.sync.clear_graphs_txid_BANG_(inst_69597);
var inst_69599 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_69607__$1 = (function (){var statearr_69615 = state_69607;
(statearr_69615[(9)] = inst_69598);

return statearr_69615;
})();
var statearr_69617_69787 = state_69607__$1;
(statearr_69617_69787[(2)] = inst_69599);

(statearr_69617_69787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69608 === (7))){
var state_69607__$1 = state_69607;
var statearr_69618_69788 = state_69607__$1;
(statearr_69618_69788[(2)] = null);

(statearr_69618_69788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69608 === (8))){
var inst_69602 = (state_69607[(2)]);
var inst_69603 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Graph deleted",new cljs.core.Keyword(null,"success","success",1890645906));
var state_69607__$1 = (function (){var statearr_69619 = state_69607;
(statearr_69619[(10)] = inst_69602);

return statearr_69619;
})();
var statearr_69620_69789 = state_69607__$1;
(statearr_69620_69789[(2)] = inst_69603);

(statearr_69620_69789[(1)] = (5));


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
var statearr_69625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69625[(0)] = frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto__);

(statearr_69625[(1)] = (1));

return statearr_69625;
});
var frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto____1 = (function (state_69607){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_69607);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e69626){var ex__41842__auto__ = e69626;
var statearr_69627_69790 = state_69607;
(statearr_69627_69790[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_69607[(4)]))){
var statearr_69630_69791 = state_69607;
(statearr_69630_69791[(1)] = cljs.core.first((state_69607[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69792 = state_69607;
state_69607 = G__69792;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto__ = function(state_69607){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto____1.call(this,state_69607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto____0;
frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto____1;
return frontend$handler$file_sync$delete_graph_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_69632 = f__41862__auto__();
(statearr_69632[(6)] = c__41861__auto__);

return statearr_69632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.handler.file_sync.list_graphs = (function frontend$handler$file_sync$list_graphs(){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_69643){
var state_val_69644 = (state_69643[(1)]);
if((state_val_69644 === (1))){
var inst_69638 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_69643__$1 = state_69643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69643__$1,(2),inst_69638);
} else {
if((state_val_69644 === (2))){
var inst_69640 = (state_69643[(2)]);
var inst_69641 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_69640);
var state_69643__$1 = state_69643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69643__$1,inst_69641);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__ = null;
var frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____0 = (function (){
var statearr_69648 = [null,null,null,null,null,null,null];
(statearr_69648[(0)] = frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__);

(statearr_69648[(1)] = (1));

return statearr_69648;
});
var frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____1 = (function (state_69643){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_69643);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e69649){var ex__41842__auto__ = e69649;
var statearr_69650_69793 = state_69643;
(statearr_69650_69793[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_69643[(4)]))){
var statearr_69651_69794 = state_69643;
(statearr_69651_69794[(1)] = cljs.core.first((state_69643[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69795 = state_69643;
state_69643 = G__69795;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__ = function(state_69643){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____1.call(this,state_69643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____0;
frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto____1;
return frontend$handler$file_sync$list_graphs_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_69653 = f__41862__auto__();
(statearr_69653[(6)] = c__41861__auto__);

return statearr_69653;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_69689){
var state_val_69690 = (state_69689[(1)]);
if((state_val_69690 === (1))){
var inst_69660 = (state_69689[(7)]);
var inst_69660__$1 = module$node_modules$path$path.join("version-files",file_uuid,version_uuid);
var inst_69661 = frontend.state.get_current_repo();
var inst_69662 = frontend.config.get_repo_dir(inst_69661);
var inst_69665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69666 = [inst_69660__$1];
var inst_69667 = (new cljs.core.PersistentVector(null,1,(5),inst_69665,inst_69666,null));
var inst_69668 = frontend.fs.sync.update_local_files(frontend.fs.sync.rsapi,graph_uuid,inst_69662,inst_69667);
var state_69689__$1 = (function (){var statearr_69692 = state_69689;
(statearr_69692[(7)] = inst_69660__$1);

return statearr_69692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69689__$1,(2),inst_69668);
} else {
if((state_val_69690 === (2))){
var inst_69670 = (state_69689[(8)]);
var inst_69670__$1 = (state_69689[(2)]);
var inst_69671 = (inst_69670__$1 instanceof cljs.core.ExceptionInfo);
var state_69689__$1 = (function (){var statearr_69693 = state_69689;
(statearr_69693[(8)] = inst_69670__$1);

return statearr_69693;
})();
if(cljs.core.truth_(inst_69671)){
var statearr_69694_69796 = state_69689__$1;
(statearr_69694_69796[(1)] = (3));

} else {
var statearr_69695_69797 = state_69689__$1;
(statearr_69695_69797[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69690 === (3))){
var inst_69670 = (state_69689[(8)]);
var inst_69673 = cljs.core.ex_cause(inst_69670);
var inst_69674 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_69673,new cljs.core.Keyword(null,"error","error",-978969032));
var state_69689__$1 = state_69689;
var statearr_69696_69798 = state_69689__$1;
(statearr_69696_69798[(2)] = inst_69674);

(statearr_69696_69798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69690 === (4))){
var inst_69660 = (state_69689[(7)]);
var inst_69676 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69678 = [new cljs.core.Keyword(null,"div","div",1057191632),"Downloaded version file at: "];
var inst_69679 = (new cljs.core.PersistentVector(null,2,(5),inst_69677,inst_69678,null));
var inst_69680 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69681 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_69660];
var inst_69682 = (new cljs.core.PersistentVector(null,2,(5),inst_69680,inst_69681,null));
var inst_69683 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_69679,inst_69682];
var inst_69684 = (new cljs.core.PersistentVector(null,3,(5),inst_69676,inst_69683,null));
var inst_69685 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_69684,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_69689__$1 = state_69689;
var statearr_69697_69799 = state_69689__$1;
(statearr_69697_69799[(2)] = inst_69685);

(statearr_69697_69799[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69690 === (5))){
var inst_69687 = (state_69689[(2)]);
var state_69689__$1 = state_69689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69689__$1,inst_69687);
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
var statearr_69698 = [null,null,null,null,null,null,null,null,null];
(statearr_69698[(0)] = frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto__);

(statearr_69698[(1)] = (1));

return statearr_69698;
});
var frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto____1 = (function (state_69689){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_69689);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e69699){var ex__41842__auto__ = e69699;
var statearr_69700_69800 = state_69689;
(statearr_69700_69800[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_69689[(4)]))){
var statearr_69706_69801 = state_69689;
(statearr_69706_69801[(1)] = cljs.core.first((state_69689[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69802 = state_69689;
state_69689 = G__69802;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto__ = function(state_69689){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto____1.call(this,state_69689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto____0;
frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto____1;
return frontend$handler$file_sync$download_version_file_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_69707 = f__41862__auto__();
(statearr_69707[(6)] = c__41861__auto__);

return statearr_69707;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_69734){
var state_val_69735 = (state_69734[(1)]);
if((state_val_69735 === (1))){
var inst_69712 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3(null,graph_uuid,path_STAR_);
var state_69734__$1 = state_69734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69734__$1,(2),inst_69712);
} else {
if((state_val_69735 === (2))){
var inst_69714 = (state_69734[(2)]);
var inst_69715 = new cljs.core.Keyword(null,"VersionList","VersionList",-1189454538).cljs$core$IFn$_invoke$arity$1(inst_69714);
var inst_69716 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69717 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69718 = [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"File history - ",path_STAR_];
var inst_69719 = (new cljs.core.PersistentVector(null,3,(5),inst_69717,inst_69718,null));
var inst_69720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69722 = [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)];
var inst_69723 = (new cljs.core.PersistentVector(null,1,(5),inst_69720,inst_69722,null));
var inst_69728 = (function (){var version_list = inst_69715;
return (function frontend$handler$file_sync$list_file_versions_$_iter__69724(s__69725){
return (new cljs.core.LazySeq(null,(function (){
var s__69725__$1 = s__69725;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__69725__$1);
if(temp__5720__auto____$1){
var s__69725__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__69725__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__69725__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__69727 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__69726 = (0);
while(true){
if((i__69726 < size__4651__auto__)){
var version = cljs.core._nth(c__4650__auto__,i__69726);
cljs.core.chunk_append(b__69727,(function (){var version_uuid = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__69726,version_uuid,version,c__4650__auto__,size__4651__auto__,b__69727,s__69725__$2,temp__5720__auto____$1,version_list,inst_69714,inst_69715,inst_69716,inst_69717,inst_69718,inst_69719,inst_69720,inst_69722,inst_69723,state_val_69735,c__41861__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
return frontend.handler.file_sync.download_version_file(graph_uuid,new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version),new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version));
});})(i__69726,version_uuid,version,c__4650__auto__,size__4651__auto__,b__69727,s__69725__$2,temp__5720__auto____$1,version_list,inst_69714,inst_69715,inst_69716,inst_69717,inst_69718,inst_69719,inst_69720,inst_69722,inst_69723,state_val_69735,c__41861__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago(cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version)))], null)], null);
})());

var G__69805 = (i__69726 + (1));
i__69726 = G__69805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69727),frontend$handler$file_sync$list_file_versions_$_iter__69724(cljs.core.chunk_rest(s__69725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69727),null);
}
} else {
var version = cljs.core.first(s__69725__$2);
return cljs.core.cons((function (){var version_uuid = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (version_uuid,version,s__69725__$2,temp__5720__auto____$1,version_list,inst_69714,inst_69715,inst_69716,inst_69717,inst_69718,inst_69719,inst_69720,inst_69722,inst_69723,state_val_69735,c__41861__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
return frontend.handler.file_sync.download_version_file(graph_uuid,new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version),new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version));
});})(version_uuid,version,s__69725__$2,temp__5720__auto____$1,version_list,inst_69714,inst_69715,inst_69716,inst_69717,inst_69718,inst_69719,inst_69720,inst_69722,inst_69723,state_val_69735,c__41861__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago(cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version)))], null)], null);
})(),frontend$handler$file_sync$list_file_versions_$_iter__69724(cljs.core.rest(s__69725__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
})();
var inst_69729 = inst_69728(inst_69715);
var inst_69730 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_69719,inst_69723,inst_69729];
var inst_69731 = (new cljs.core.PersistentVector(null,4,(5),inst_69716,inst_69730,null));
var inst_69732 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_69731,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_69734__$1 = state_69734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69734__$1,inst_69732);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____0 = (function (){
var statearr_69750 = [null,null,null,null,null,null,null];
(statearr_69750[(0)] = frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__);

(statearr_69750[(1)] = (1));

return statearr_69750;
});
var frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____1 = (function (state_69734){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_69734);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e69751){var ex__41842__auto__ = e69751;
var statearr_69752_69807 = state_69734;
(statearr_69752_69807[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_69734[(4)]))){
var statearr_69753_69808 = state_69734;
(statearr_69753_69808[(1)] = cljs.core.first((state_69734[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69809 = state_69734;
state_69734 = G__69809;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__ = function(state_69734){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____1.call(this,state_69734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____0;
frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto____1;
return frontend$handler$file_sync$list_file_versions_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_69754 = f__41862__auto__();
(statearr_69754[(6)] = c__41861__auto__);

return statearr_69754;
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
