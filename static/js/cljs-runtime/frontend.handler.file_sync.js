goog.provide('frontend.handler.file_sync');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
frontend.handler.file_sync.hiding_login_AMPERSAND_file_sync = cljs.core.not(frontend.config.dev_QMARK_);
frontend.handler.file_sync.refresh_file_sync_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.handler.file_sync.graph_txid_exists_QMARK_ = (function frontend$handler$file_sync$graph_txid_exists_QMARK_(){
var vec__58976 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var _user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58976,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58976,(1),null);
var _txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58976,(2),null);
return (!((graph_uuid == null)));
});
frontend.handler.file_sync.create_graph = (function frontend$handler$file_sync$create_graph(name){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59019){
var state_val_59020 = (state_59019[(1)]);
if((state_val_59020 === (7))){
var inst_58990 = (state_59019[(7)]);
var state_59019__$1 = state_59019;
var statearr_59021_59430 = state_59019__$1;
(statearr_59021_59430[(2)] = inst_58990);

(statearr_59021_59430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59020 === (1))){
var inst_58979 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$create_graph$arity$2(null,name);
var state_59019__$1 = state_59019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59019__$1,(2),inst_58979);
} else {
if((state_val_59020 === (4))){
var inst_58981 = (state_59019[(8)]);
var inst_58985 = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(inst_58981);
var state_59019__$1 = state_59019;
var statearr_59022_59431 = state_59019__$1;
(statearr_59022_59431[(2)] = inst_58985);

(statearr_59022_59431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59020 === (13))){
var inst_58987 = (state_59019[(9)]);
var inst_59012 = ["Create graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58987)].join('');
var inst_59013 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59012,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_59019__$1 = state_59019;
var statearr_59023_59432 = state_59019__$1;
(statearr_59023_59432[(2)] = inst_59013);

(statearr_59023_59432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59020 === (6))){
var inst_58987 = (state_59019[(9)]);
var inst_58992 = typeof inst_58987 === 'string';
var state_59019__$1 = state_59019;
var statearr_59025_59433 = state_59019__$1;
(statearr_59025_59433[(2)] = inst_58992);

(statearr_59025_59433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59020 === (3))){
var inst_58981 = (state_59019[(8)]);
var state_59019__$1 = state_59019;
var statearr_59027_59434 = state_59019__$1;
(statearr_59027_59434[(2)] = inst_58981);

(statearr_59027_59434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59020 === (12))){
var inst_59009 = ["Create graph failed: already existed graph: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var inst_59010 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59009,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_59019__$1 = state_59019;
var statearr_59028_59435 = state_59019__$1;
(statearr_59028_59435[(2)] = inst_59010);

(statearr_59028_59435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59020 === (2))){
var inst_58981 = (state_59019[(8)]);
var inst_58981__$1 = (state_59019[(2)]);
var inst_58982 = (inst_58981__$1 instanceof cljs.core.ExceptionInfo);
var state_59019__$1 = (function (){var statearr_59029 = state_59019;
(statearr_59029[(8)] = inst_58981__$1);

return statearr_59029;
})();
if(cljs.core.truth_(inst_58982)){
var statearr_59030_59437 = state_59019__$1;
(statearr_59030_59437[(1)] = (3));

} else {
var statearr_59031_59438 = state_59019__$1;
(statearr_59031_59438[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59020 === (11))){
var inst_59017 = (state_59019[(2)]);
var state_59019__$1 = state_59019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59019__$1,inst_59017);
} else {
if((state_val_59020 === (9))){
var inst_58987 = (state_59019[(9)]);
var inst_58997 = frontend.handler.user.user_uuid();
var inst_58998 = frontend.state.get_current_repo();
var inst_58999 = frontend.fs.sync.update_graphs_txid_BANG_((0),inst_58987,inst_58997,inst_58998);
var inst_59000 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_59019__$1 = (function (){var statearr_59032 = state_59019;
(statearr_59032[(10)] = inst_58999);

return statearr_59032;
})();
var statearr_59033_59439 = state_59019__$1;
(statearr_59033_59439[(2)] = inst_59000);

(statearr_59033_59439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59020 === (5))){
var inst_58990 = (state_59019[(7)]);
var inst_58987 = (state_59019[(9)]);
var inst_58987__$1 = (state_59019[(2)]);
var inst_58989 = (inst_58987__$1 instanceof cljs.core.ExceptionInfo);
var inst_58990__$1 = cljs.core.not(inst_58989);
var state_59019__$1 = (function (){var statearr_59034 = state_59019;
(statearr_59034[(7)] = inst_58990__$1);

(statearr_59034[(9)] = inst_58987__$1);

return statearr_59034;
})();
if(inst_58990__$1){
var statearr_59035_59440 = state_59019__$1;
(statearr_59035_59440[(1)] = (6));

} else {
var statearr_59036_59441 = state_59019__$1;
(statearr_59036_59441[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59020 === (14))){
var inst_59015 = (state_59019[(2)]);
var state_59019__$1 = state_59019;
var statearr_59038_59442 = state_59019__$1;
(statearr_59038_59442[(2)] = inst_59015);

(statearr_59038_59442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59020 === (10))){
var inst_58987 = (state_59019[(9)]);
var inst_59002 = cljs.core.ex_data(inst_58987);
var inst_59003 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59004 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_59005 = (new cljs.core.PersistentVector(null,2,(5),inst_59003,inst_59004,null));
var inst_59006 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_59002,inst_59005);
var inst_59007 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),inst_59006);
var state_59019__$1 = state_59019;
if(inst_59007){
var statearr_59040_59444 = state_59019__$1;
(statearr_59040_59444[(1)] = (12));

} else {
var statearr_59041_59445 = state_59019__$1;
(statearr_59041_59445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59020 === (8))){
var inst_58995 = (state_59019[(2)]);
var state_59019__$1 = state_59019;
if(cljs.core.truth_(inst_58995)){
var statearr_59044_59446 = state_59019__$1;
(statearr_59044_59446[(1)] = (9));

} else {
var statearr_59045_59447 = state_59019__$1;
(statearr_59045_59447[(1)] = (10));

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
var frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____0 = (function (){
var statearr_59046 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59046[(0)] = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__);

(statearr_59046[(1)] = (1));

return statearr_59046;
});
var frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1 = (function (state_59019){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59019);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59047){var ex__27576__auto__ = e59047;
var statearr_59048_59448 = state_59019;
(statearr_59048_59448[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59019[(4)]))){
var statearr_59049_59449 = state_59019;
(statearr_59049_59449[(1)] = cljs.core.first((state_59019[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59451 = state_59019;
state_59019 = G__59451;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__ = function(state_59019){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1.call(this,state_59019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____0;
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59050 = f__27596__auto__();
(statearr_59050[(6)] = c__27595__auto__);

return statearr_59050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.delete_graph = (function frontend$handler$file_sync$delete_graph(graph_uuid){
frontend.fs.sync.sync_stop();

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59078){
var state_val_59079 = (state_59078[(1)]);
if((state_val_59079 === (1))){
var inst_59051 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2(null,graph_uuid);
var state_59078__$1 = state_59078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59078__$1,(2),inst_59051);
} else {
if((state_val_59079 === (2))){
var inst_59053 = (state_59078[(2)]);
var inst_59054 = (inst_59053 instanceof cljs.core.ExceptionInfo);
var state_59078__$1 = state_59078;
if(cljs.core.truth_(inst_59054)){
var statearr_59082_59452 = state_59078__$1;
(statearr_59082_59452[(1)] = (3));

} else {
var statearr_59083_59453 = state_59078__$1;
(statearr_59083_59453[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59079 === (3))){
var inst_59056 = ["Delete graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid)].join('');
var inst_59057 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59056,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_59078__$1 = state_59078;
var statearr_59087_59454 = state_59078__$1;
(statearr_59087_59454[(2)] = inst_59057);

(statearr_59087_59454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59079 === (4))){
var inst_59062 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_59063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59062,(0),null);
var inst_59064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59062,(1),null);
var inst_59065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59062,(2),null);
var inst_59066 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_uuid,inst_59064);
var state_59078__$1 = (function (){var statearr_59090 = state_59078;
(statearr_59090[(7)] = inst_59063);

(statearr_59090[(8)] = inst_59065);

return statearr_59090;
})();
if(inst_59066){
var statearr_59091_59455 = state_59078__$1;
(statearr_59091_59455[(1)] = (6));

} else {
var statearr_59092_59456 = state_59078__$1;
(statearr_59092_59456[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59079 === (5))){
var inst_59076 = (state_59078[(2)]);
var state_59078__$1 = state_59078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59078__$1,inst_59076);
} else {
if((state_val_59079 === (6))){
var inst_59068 = frontend.state.get_current_repo();
var inst_59069 = frontend.fs.sync.clear_graphs_txid_BANG_(inst_59068);
var inst_59070 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_59078__$1 = (function (){var statearr_59097 = state_59078;
(statearr_59097[(9)] = inst_59069);

return statearr_59097;
})();
var statearr_59098_59457 = state_59078__$1;
(statearr_59098_59457[(2)] = inst_59070);

(statearr_59098_59457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59079 === (7))){
var state_59078__$1 = state_59078;
var statearr_59101_59458 = state_59078__$1;
(statearr_59101_59458[(2)] = null);

(statearr_59101_59458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59079 === (8))){
var inst_59073 = (state_59078[(2)]);
var inst_59074 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Graph deleted",new cljs.core.Keyword(null,"success","success",1890645906));
var state_59078__$1 = (function (){var statearr_59102 = state_59078;
(statearr_59102[(10)] = inst_59073);

return statearr_59102;
})();
var statearr_59104_59459 = state_59078__$1;
(statearr_59104_59459[(2)] = inst_59074);

(statearr_59104_59459[(1)] = (5));


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
var frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____0 = (function (){
var statearr_59106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59106[(0)] = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__);

(statearr_59106[(1)] = (1));

return statearr_59106;
});
var frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1 = (function (state_59078){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59078);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59108){var ex__27576__auto__ = e59108;
var statearr_59109_59460 = state_59078;
(statearr_59109_59460[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59078[(4)]))){
var statearr_59110_59461 = state_59078;
(statearr_59110_59461[(1)] = cljs.core.first((state_59078[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59462 = state_59078;
state_59078 = G__59462;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__ = function(state_59078){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1.call(this,state_59078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____0;
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59112 = f__27596__auto__();
(statearr_59112[(6)] = c__27595__auto__);

return statearr_59112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.list_graphs = (function frontend$handler$file_sync$list_graphs(){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59119){
var state_val_59120 = (state_59119[(1)]);
if((state_val_59120 === (1))){
var inst_59114 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_59119__$1 = state_59119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59119__$1,(2),inst_59114);
} else {
if((state_val_59120 === (2))){
var inst_59116 = (state_59119[(2)]);
var inst_59117 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_59116);
var state_59119__$1 = state_59119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59119__$1,inst_59117);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0 = (function (){
var statearr_59128 = [null,null,null,null,null,null,null];
(statearr_59128[(0)] = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__);

(statearr_59128[(1)] = (1));

return statearr_59128;
});
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1 = (function (state_59119){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59119);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59129){var ex__27576__auto__ = e59129;
var statearr_59130_59464 = state_59119;
(statearr_59130_59464[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59119[(4)]))){
var statearr_59131_59465 = state_59119;
(statearr_59131_59465[(1)] = cljs.core.first((state_59119[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59466 = state_59119;
state_59119 = G__59466;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__ = function(state_59119){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1.call(this,state_59119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59132 = f__27596__auto__();
(statearr_59132[(6)] = c__27595__auto__);

return statearr_59132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.download_all_files = (function frontend$handler$file_sync$download_all_files(repo,graph_uuid,user_uuid,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59175){
var state_val_59176 = (state_59175[(1)]);
if((state_val_59176 === (1))){
var inst_59133 = frontend.state.reset_file_sync_download_init_state_BANG_();
var inst_59134 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"finished","finished",-1018867731),new cljs.core.Keyword(null,"downloading?","downloading?",38673093)];
var inst_59135 = [NaN,(0),true];
var inst_59136 = cljs.core.PersistentHashMap.fromArrays(inst_59134,inst_59135);
var inst_59137 = frontend.state.set_file_sync_download_init_state_BANG_(inst_59136);
var inst_59138 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,graph_uuid);
var state_59175__$1 = (function (){var statearr_59177 = state_59175;
(statearr_59177[(7)] = inst_59133);

(statearr_59177[(8)] = inst_59137);

return statearr_59177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59175__$1,(2),inst_59138);
} else {
if((state_val_59176 === (2))){
var inst_59140 = (state_59175[(2)]);
var inst_59141 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,graph_uuid,base_path);
var state_59175__$1 = (function (){var statearr_59178 = state_59175;
(statearr_59178[(9)] = inst_59140);

return statearr_59178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59175__$1,(3),inst_59141);
} else {
if((state_val_59176 === (3))){
var inst_59143 = (state_59175[(10)]);
var inst_59140 = (state_59175[(9)]);
var inst_59143__$1 = (state_59175[(2)]);
var inst_59144 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_59140,inst_59143__$1);
var inst_59145 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,graph_uuid);
var state_59175__$1 = (function (){var statearr_59179 = state_59175;
(statearr_59179[(10)] = inst_59143__$1);

(statearr_59179[(11)] = inst_59144);

return statearr_59179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59175__$1,(4),inst_59145);
} else {
if((state_val_59176 === (4))){
var inst_59143 = (state_59175[(10)]);
var inst_59148 = (state_59175[(12)]);
var inst_59140 = (state_59175[(9)]);
var inst_59144 = (state_59175[(11)]);
var inst_59147 = (state_59175[(2)]);
var inst_59148__$1 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_59147);
var inst_59149 = frontend.fs.sync.filepaths__GT_partitioned_filetxns((10),graph_uuid,user_uuid);
var inst_59150 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_59144);
var inst_59151 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_59149,inst_59150);
var inst_59152 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"finished","finished",-1018867731)];
var inst_59153 = cljs.core.count(inst_59144);
var inst_59154 = [inst_59153,(0)];
var inst_59155 = cljs.core.PersistentHashMap.fromArrays(inst_59152,inst_59154);
var inst_59156 = frontend.state.set_file_sync_download_init_state_BANG_(inst_59155);
var inst_59157 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var inst_59158 = (function (){var remote_all_files_meta = inst_59140;
var local_all_files_meta = inst_59143;
var diff_remote_files = inst_59144;
var latest_txid = inst_59148__$1;
var partitioned_filetxns = inst_59151;
return (function (filetxns){
return frontend.state.set_file_sync_download_init_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"downloading-files","downloading-files",1777262232),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,filetxns)], null));
});
})();
var inst_59159 = (function (){var remote_all_files_meta = inst_59140;
var local_all_files_meta = inst_59143;
var diff_remote_files = inst_59144;
var latest_txid = inst_59148__$1;
var partitioned_filetxns = inst_59151;
return (function (filetxns){
return frontend.state.set_file_sync_download_init_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"finished","finished",-1018867731),(cljs.core.count(filetxns) + (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(frontend.state.get_file_sync_download_init_state());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})())], null));
});
})();
var inst_59160 = frontend.fs.sync.apply_filetxns_partitions(null,user_uuid,graph_uuid,base_path,inst_59151,repo,null,inst_59157,inst_59158,inst_59159);
var state_59175__$1 = (function (){var statearr_59185 = state_59175;
(statearr_59185[(12)] = inst_59148__$1);

(statearr_59185[(13)] = inst_59156);

return statearr_59185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59175__$1,(5),inst_59160);
} else {
if((state_val_59176 === (5))){
var inst_59162 = (state_59175[(14)]);
var inst_59162__$1 = (state_59175[(2)]);
var inst_59163 = (inst_59162__$1 instanceof cljs.core.ExceptionInfo);
var state_59175__$1 = (function (){var statearr_59186 = state_59175;
(statearr_59186[(14)] = inst_59162__$1);

return statearr_59186;
})();
if(cljs.core.truth_(inst_59163)){
var statearr_59187_59503 = state_59175__$1;
(statearr_59187_59503[(1)] = (6));

} else {
var statearr_59191_59504 = state_59175__$1;
(statearr_59191_59504[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59176 === (6))){
var inst_59162 = (state_59175[(14)]);
var inst_59165 = cljs.core.ex_cause(inst_59162);
var inst_59166 = ["Download graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59165)].join('');
var inst_59167 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59166,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_59175__$1 = state_59175;
var statearr_59192_59506 = state_59175__$1;
(statearr_59192_59506[(2)] = inst_59167);

(statearr_59192_59506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59176 === (7))){
var inst_59148 = (state_59175[(12)]);
var inst_59169 = frontend.state.reset_file_sync_download_init_state_BANG_();
var inst_59170 = frontend.fs.sync.update_graphs_txid_BANG_(inst_59148,graph_uuid,user_uuid,repo);
var state_59175__$1 = (function (){var statearr_59194 = state_59175;
(statearr_59194[(15)] = inst_59169);

return statearr_59194;
})();
var statearr_59196_59508 = state_59175__$1;
(statearr_59196_59508[(2)] = inst_59170);

(statearr_59196_59508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59176 === (8))){
var inst_59172 = (state_59175[(2)]);
var state_59175__$1 = state_59175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59175__$1,inst_59172);
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
var frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____0 = (function (){
var statearr_59197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59197[(0)] = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__);

(statearr_59197[(1)] = (1));

return statearr_59197;
});
var frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1 = (function (state_59175){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59175);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59198){var ex__27576__auto__ = e59198;
var statearr_59203_59513 = state_59175;
(statearr_59203_59513[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59175[(4)]))){
var statearr_59204_59514 = state_59175;
(statearr_59204_59514[(1)] = cljs.core.first((state_59175[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59515 = state_59175;
state_59175 = G__59515;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__ = function(state_59175){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1.call(this,state_59175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____0;
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59207 = f__27596__auto__();
(statearr_59207[(6)] = c__27595__auto__);

return statearr_59207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.switch_graph = (function frontend$handler$file_sync$switch_graph(graph_uuid){
var repo = frontend.state.get_current_repo();
var base_path = frontend.config.get_repo_dir(repo);
var user_uuid = frontend.handler.user.user_uuid();
frontend.fs.sync.update_graphs_txid_BANG_((0),graph_uuid,user_uuid,repo);

frontend.handler.file_sync.download_all_files(repo,graph_uuid,user_uuid,base_path);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
});
frontend.handler.file_sync.download_version_file = (function frontend$handler$file_sync$download_version_file(graph_uuid,file_uuid,version_uuid){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59249){
var state_val_59250 = (state_59249[(1)]);
if((state_val_59250 === (1))){
var inst_59213 = (state_59249[(7)]);
var inst_59213__$1 = module$node_modules$path$path.join("version-files",file_uuid,version_uuid);
var inst_59214 = frontend.state.get_current_repo();
var inst_59215 = frontend.config.get_repo_dir(inst_59214);
var inst_59217 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59218 = [inst_59213__$1];
var inst_59219 = (new cljs.core.PersistentVector(null,1,(5),inst_59217,inst_59218,null));
var inst_59220 = frontend.fs.sync.update_local_files(frontend.fs.sync.rsapi,graph_uuid,inst_59215,inst_59219);
var state_59249__$1 = (function (){var statearr_59256 = state_59249;
(statearr_59256[(7)] = inst_59213__$1);

return statearr_59256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59249__$1,(2),inst_59220);
} else {
if((state_val_59250 === (2))){
var inst_59222 = (state_59249[(8)]);
var inst_59222__$1 = (state_59249[(2)]);
var inst_59225 = (inst_59222__$1 instanceof cljs.core.ExceptionInfo);
var state_59249__$1 = (function (){var statearr_59259 = state_59249;
(statearr_59259[(8)] = inst_59222__$1);

return statearr_59259;
})();
if(cljs.core.truth_(inst_59225)){
var statearr_59260_59516 = state_59249__$1;
(statearr_59260_59516[(1)] = (3));

} else {
var statearr_59261_59517 = state_59249__$1;
(statearr_59261_59517[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (3))){
var inst_59222 = (state_59249[(8)]);
var inst_59227 = cljs.core.ex_cause(inst_59222);
var inst_59228 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59227,new cljs.core.Keyword(null,"error","error",-978969032));
var state_59249__$1 = state_59249;
var statearr_59263_59518 = state_59249__$1;
(statearr_59263_59518[(2)] = inst_59228);

(statearr_59263_59518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (4))){
var inst_59213 = (state_59249[(7)]);
var inst_59230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59231 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59232 = [new cljs.core.Keyword(null,"div","div",1057191632),"Downloaded version file at: "];
var inst_59233 = (new cljs.core.PersistentVector(null,2,(5),inst_59231,inst_59232,null));
var inst_59234 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59235 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_59213];
var inst_59236 = (new cljs.core.PersistentVector(null,2,(5),inst_59234,inst_59235,null));
var inst_59237 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_59233,inst_59236];
var inst_59238 = (new cljs.core.PersistentVector(null,3,(5),inst_59230,inst_59237,null));
var inst_59239 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59238,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_59249__$1 = state_59249;
var statearr_59265_59519 = state_59249__$1;
(statearr_59265_59519[(2)] = inst_59239);

(statearr_59265_59519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (5))){
var inst_59222 = (state_59249[(8)]);
var inst_59241 = (state_59249[(2)]);
var inst_59242 = (inst_59222 instanceof cljs.core.ExceptionInfo);
var state_59249__$1 = (function (){var statearr_59266 = state_59249;
(statearr_59266[(9)] = inst_59241);

return statearr_59266;
})();
if(cljs.core.truth_(inst_59242)){
var statearr_59267_59520 = state_59249__$1;
(statearr_59267_59520[(1)] = (6));

} else {
var statearr_59268_59521 = state_59249__$1;
(statearr_59268_59521[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (6))){
var state_59249__$1 = state_59249;
var statearr_59269_59522 = state_59249__$1;
(statearr_59269_59522[(2)] = null);

(statearr_59269_59522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (7))){
var inst_59213 = (state_59249[(7)]);
var state_59249__$1 = state_59249;
var statearr_59272_59523 = state_59249__$1;
(statearr_59272_59523[(2)] = inst_59213);

(statearr_59272_59523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (8))){
var inst_59247 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59249__$1,inst_59247);
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
var frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____0 = (function (){
var statearr_59273 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59273[(0)] = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__);

(statearr_59273[(1)] = (1));

return statearr_59273;
});
var frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1 = (function (state_59249){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59249);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59274){var ex__27576__auto__ = e59274;
var statearr_59276_59524 = state_59249;
(statearr_59276_59524[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59249[(4)]))){
var statearr_59279_59525 = state_59249;
(statearr_59279_59525[(1)] = cljs.core.first((state_59249[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59526 = state_59249;
state_59249 = G__59526;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__ = function(state_59249){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1.call(this,state_59249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____0;
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59282 = f__27596__auto__();
(statearr_59282[(6)] = c__27595__auto__);

return statearr_59282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.list_file_local_versions = (function frontend$handler$file_sync$list_file_local_versions(page){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59321){
var state_val_59322 = (state_59321[(1)]);
if((state_val_59322 === (7))){
var inst_59298 = (state_59321[(7)]);
var inst_59290 = (state_59321[(8)]);
var inst_59291 = (state_59321[(9)]);
var inst_59302 = (state_59321[(10)]);
var inst_59287 = (state_59321[(11)]);
var inst_59306 = (function (){var temp__5720__auto__ = inst_59287;
var path = inst_59287;
var base_path = inst_59290;
var rel_path = inst_59291;
var version_files_dir = inst_59298;
var version_file_paths_STAR_ = inst_59302;
return (function (dir_or_file){
return cljs.core.seq(new cljs.core.Keyword(null,"ext","ext",-996964541).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$path$path.parse(dir_or_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
});
})();
var inst_59307 = frontend.fs.readdir(inst_59298);
var inst_59308 = cljs.core.async.interop.p__GT_c(inst_59307);
var state_59321__$1 = (function (){var statearr_59323 = state_59321;
(statearr_59323[(12)] = inst_59306);

return statearr_59323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59321__$1,(9),inst_59308);
} else {
if((state_val_59322 === (1))){
var inst_59287 = (state_59321[(11)]);
var inst_59286 = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
var inst_59287__$1 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(inst_59286);
var state_59321__$1 = (function (){var statearr_59324 = state_59321;
(statearr_59324[(11)] = inst_59287__$1);

return statearr_59324;
})();
if(cljs.core.truth_(inst_59287__$1)){
var statearr_59325_59527 = state_59321__$1;
(statearr_59325_59527[(1)] = (2));

} else {
var statearr_59326_59528 = state_59321__$1;
(statearr_59326_59528[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59322 === (4))){
var inst_59319 = (state_59321[(2)]);
var state_59321__$1 = state_59321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59321__$1,inst_59319);
} else {
if((state_val_59322 === (6))){
var state_59321__$1 = state_59321;
var statearr_59327_59529 = state_59321__$1;
(statearr_59327_59529[(2)] = null);

(statearr_59327_59529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59322 === (3))){
var state_59321__$1 = state_59321;
var statearr_59328_59530 = state_59321__$1;
(statearr_59328_59530[(2)] = null);

(statearr_59328_59530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59322 === (2))){
var inst_59298 = (state_59321[(7)]);
var inst_59290 = (state_59321[(8)]);
var inst_59291 = (state_59321[(9)]);
var inst_59287 = (state_59321[(11)]);
var inst_59289 = frontend.state.get_current_repo();
var inst_59290__$1 = frontend.config.get_repo_dir(inst_59289);
var inst_59291__$1 = clojure.string.replace_first(inst_59287,inst_59290__$1,"");
var inst_59292 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"name","name",1843675177));
var inst_59293 = (function (){var temp__5720__auto__ = inst_59287;
var path = inst_59287;
var base_path = inst_59290__$1;
var rel_path = inst_59291__$1;
return (function (p1__59283_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__59283_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
})();
var inst_59294 = module$node_modules$path$path.join("version-files/local",inst_59291__$1);
var inst_59295 = module$node_modules$path$path.parse(inst_59294);
var inst_59296 = inst_59293(inst_59295);
var inst_59297 = inst_59292(inst_59296);
var inst_59298__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$path$path.join,inst_59290__$1,inst_59297);
var inst_59299 = frontend.fs.readdir(inst_59298__$1);
var inst_59300 = cljs.core.async.interop.p__GT_c(inst_59299);
var state_59321__$1 = (function (){var statearr_59329 = state_59321;
(statearr_59329[(7)] = inst_59298__$1);

(statearr_59329[(8)] = inst_59290__$1);

(statearr_59329[(9)] = inst_59291__$1);

return statearr_59329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59321__$1,(5),inst_59300);
} else {
if((state_val_59322 === (9))){
var inst_59298 = (state_59321[(7)]);
var inst_59290 = (state_59321[(8)]);
var inst_59291 = (state_59321[(9)]);
var inst_59302 = (state_59321[(10)]);
var inst_59306 = (state_59321[(12)]);
var inst_59287 = (state_59321[(11)]);
var inst_59310 = (state_59321[(2)]);
var inst_59311 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_59310);
var inst_59312 = cljs.core.filterv(inst_59306,inst_59311);
var inst_59313 = (function (){var temp__5720__auto__ = inst_59287;
var path = inst_59287;
var base_path = inst_59290;
var rel_path = inst_59291;
var version_files_dir = inst_59298;
var version_file_paths_STAR_ = inst_59302;
var version_file_paths = inst_59312;
return (function (path__$1){
var create_time = (function (p1__59285_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH_mm_ss.SSSZZ"),p1__59285_SHARP_);
})(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$path$path.parse(path__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create-time","create-time",875410581),create_time,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172),clojure.string.replace_first(path__$1,base_path,"")], null);
});
})();
var inst_59314 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_59313,inst_59312);
var state_59321__$1 = state_59321;
var statearr_59330_59533 = state_59321__$1;
(statearr_59330_59533[(2)] = inst_59314);

(statearr_59330_59533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59322 === (5))){
var inst_59302 = (state_59321[(10)]);
var inst_59302__$1 = (state_59321[(2)]);
var inst_59303 = (inst_59302__$1 instanceof cljs.core.ExceptionInfo);
var state_59321__$1 = (function (){var statearr_59331 = state_59321;
(statearr_59331[(10)] = inst_59302__$1);

return statearr_59331;
})();
if(cljs.core.truth_(inst_59303)){
var statearr_59332_59534 = state_59321__$1;
(statearr_59332_59534[(1)] = (6));

} else {
var statearr_59333_59535 = state_59321__$1;
(statearr_59333_59535[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59322 === (8))){
var inst_59316 = (state_59321[(2)]);
var state_59321__$1 = state_59321;
var statearr_59334_59536 = state_59321__$1;
(statearr_59334_59536[(2)] = inst_59316);

(statearr_59334_59536[(1)] = (4));


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
});
return (function() {
var frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____0 = (function (){
var statearr_59335 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59335[(0)] = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__);

(statearr_59335[(1)] = (1));

return statearr_59335;
});
var frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1 = (function (state_59321){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59321);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59336){var ex__27576__auto__ = e59336;
var statearr_59337_59538 = state_59321;
(statearr_59337_59538[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59321[(4)]))){
var statearr_59338_59539 = state_59321;
(statearr_59338_59539[(1)] = cljs.core.first((state_59321[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59540 = state_59321;
state_59321 = G__59540;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__ = function(state_59321){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1.call(this,state_59321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59339 = f__27596__auto__();
(statearr_59339[(6)] = c__27595__auto__);

return statearr_59339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.list_file_versions = (function frontend$handler$file_sync$list_file_versions(graph_uuid,page){
var file_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page));
var temp__5720__auto__ = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(file_id) : frontend.db.entity.call(null,file_id)));
if(cljs.core.truth_(temp__5720__auto__)){
var path = temp__5720__auto__;
var base_path = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var path_STAR_ = clojure.string.replace_first(path,base_path,"");
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59371){
var state_val_59372 = (state_59371[(1)]);
if((state_val_59372 === (1))){
var inst_59344 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3(null,graph_uuid,path_STAR_);
var state_59371__$1 = state_59371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59371__$1,(2),inst_59344);
} else {
if((state_val_59372 === (2))){
var inst_59346 = (state_59371[(2)]);
var inst_59347 = new cljs.core.Keyword(null,"VersionList","VersionList",-1189454538).cljs$core$IFn$_invoke$arity$1(inst_59346);
var inst_59348 = frontend.handler.file_sync.list_file_local_versions(page);
var state_59371__$1 = (function (){var statearr_59374 = state_59371;
(statearr_59374[(7)] = inst_59347);

return statearr_59374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59371__$1,(3),inst_59348);
} else {
if((state_val_59372 === (3))){
var inst_59347 = (state_59371[(7)]);
var inst_59350 = (state_59371[(2)]);
var inst_59351 = (function (){var version_list = inst_59347;
var local_version_list = inst_59350;
return (function (p1__59341_SHARP_){
var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(p1__59341_SHARP_));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(p1__59341_SHARP_);
}
});
})();
var inst_59352 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_59347,inst_59350);
var inst_59353 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(inst_59351,cljs.core._GT_,inst_59352);
var inst_59354 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59356 = [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"File history - ",path_STAR_];
var inst_59357 = (new cljs.core.PersistentVector(null,3,(5),inst_59355,inst_59356,null));
var inst_59358 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59359 = [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)];
var inst_59360 = (new cljs.core.PersistentVector(null,1,(5),inst_59358,inst_59359,null));
var inst_59365 = (function (){var version_list = inst_59347;
var local_version_list = inst_59350;
var all_version_list = inst_59353;
return (function frontend$handler$file_sync$list_file_versions_$_iter__59361(s__59362){
return (new cljs.core.LazySeq(null,(function (){
var s__59362__$1 = s__59362;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__59362__$1);
if(temp__5720__auto____$1){
var s__59362__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59362__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__59362__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__59364 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__59363 = (0);
while(true){
if((i__59363 < size__5519__auto__)){
var version = cljs.core._nth(c__5518__auto__,i__59363);
cljs.core.chunk_append(b__59364,(function (){var version_uuid = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version);
}
})();
var local_QMARK_ = (!((new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version) == null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__59363,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59364,s__59362__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59347,inst_59350,inst_59351,inst_59352,inst_59353,inst_59354,inst_59355,inst_59356,inst_59357,inst_59358,inst_59359,inst_59360,state_val_59372,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
if(local_QMARK_){
return window.apis.openPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(version));
} else {
var c__27595__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (i__59363,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59364,s__59362__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59347,inst_59350,inst_59351,inst_59352,inst_59353,inst_59354,inst_59355,inst_59356,inst_59357,inst_59358,inst_59359,inst_59360,state_val_59372,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = ((function (i__59363,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59364,s__59362__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59347,inst_59350,inst_59351,inst_59352,inst_59353,inst_59354,inst_59355,inst_59356,inst_59357,inst_59358,inst_59359,inst_59360,state_val_59372,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (state_59390){
var state_val_59391 = (state_59390[(1)]);
if((state_val_59391 === (1))){
var inst_59382 = new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version);
var inst_59383 = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
var inst_59384 = frontend.handler.file_sync.download_version_file(graph_uuid,inst_59382,inst_59383);
var state_59390__$1 = state_59390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59390__$1,(2),inst_59384);
} else {
if((state_val_59391 === (2))){
var inst_59386 = (state_59390[(2)]);
var inst_59387 = module$node_modules$path$path.join(base_path,inst_59386);
var inst_59388 = window.apis.openPath(inst_59387);
var state_59390__$1 = state_59390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59390__$1,inst_59388);
} else {
return null;
}
}
});})(i__59363,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59364,s__59362__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59347,inst_59350,inst_59351,inst_59352,inst_59353,inst_59354,inst_59355,inst_59356,inst_59357,inst_59358,inst_59359,inst_59360,state_val_59372,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
;
return ((function (i__59363,switch__27572__auto__,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59364,s__59362__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59347,inst_59350,inst_59351,inst_59352,inst_59353,inst_59354,inst_59355,inst_59356,inst_59357,inst_59358,inst_59359,inst_59360,state_val_59372,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function() {
var frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____0 = (function (){
var statearr_59393 = [null,null,null,null,null,null,null];
(statearr_59393[(0)] = frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__);

(statearr_59393[(1)] = (1));

return statearr_59393;
});
var frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____1 = (function (state_59390){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59390);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59394){var ex__27576__auto__ = e59394;
var statearr_59395_59552 = state_59390;
(statearr_59395_59552[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59390[(4)]))){
var statearr_59396_59553 = state_59390;
(statearr_59396_59553[(1)] = cljs.core.first((state_59390[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59555 = state_59390;
state_59390 = G__59555;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__ = function(state_59390){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____1.call(this,state_59390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__;
})()
;})(i__59363,switch__27572__auto__,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59364,s__59362__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59347,inst_59350,inst_59351,inst_59352,inst_59353,inst_59354,inst_59355,inst_59356,inst_59357,inst_59358,inst_59359,inst_59360,state_val_59372,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
})();
var state__27597__auto__ = (function (){var statearr_59397 = f__27596__auto__();
(statearr_59397[(6)] = c__27595__auto____$1);

return statearr_59397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
});})(i__59363,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59364,s__59362__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59347,inst_59350,inst_59351,inst_59352,inst_59353,inst_59354,inst_59355,inst_59356,inst_59357,inst_59358,inst_59359,inst_59360,state_val_59372,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
);

return c__27595__auto____$1;
}
});})(i__59363,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59364,s__59362__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59347,inst_59350,inst_59351,inst_59352,inst_59353,inst_59354,inst_59355,inst_59356,inst_59357,inst_59358,inst_59359,inst_59360,state_val_59372,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),((local_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago((function (){var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(version);
}
})())], null)], null);
})());

var G__59562 = (i__59363 + (1));
i__59363 = G__59562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59364),frontend$handler$file_sync$list_file_versions_$_iter__59361(cljs.core.chunk_rest(s__59362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59364),null);
}
} else {
var version = cljs.core.first(s__59362__$2);
return cljs.core.cons((function (){var version_uuid = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version);
}
})();
var local_QMARK_ = (!((new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version) == null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (version_uuid,local_QMARK_,version,s__59362__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59347,inst_59350,inst_59351,inst_59352,inst_59353,inst_59354,inst_59355,inst_59356,inst_59357,inst_59358,inst_59359,inst_59360,state_val_59372,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
if(local_QMARK_){
return window.apis.openPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(version));
} else {
var c__27595__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59408){
var state_val_59409 = (state_59408[(1)]);
if((state_val_59409 === (1))){
var inst_59400 = new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version);
var inst_59401 = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
var inst_59402 = frontend.handler.file_sync.download_version_file(graph_uuid,inst_59400,inst_59401);
var state_59408__$1 = state_59408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59408__$1,(2),inst_59402);
} else {
if((state_val_59409 === (2))){
var inst_59404 = (state_59408[(2)]);
var inst_59405 = module$node_modules$path$path.join(base_path,inst_59404);
var inst_59406 = window.apis.openPath(inst_59405);
var state_59408__$1 = state_59408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59408__$1,inst_59406);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____0 = (function (){
var statearr_59413 = [null,null,null,null,null,null,null];
(statearr_59413[(0)] = frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__);

(statearr_59413[(1)] = (1));

return statearr_59413;
});
var frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____1 = (function (state_59408){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59408);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59414){var ex__27576__auto__ = e59414;
var statearr_59415_59565 = state_59408;
(statearr_59415_59565[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59408[(4)]))){
var statearr_59416_59566 = state_59408;
(statearr_59416_59566[(1)] = cljs.core.first((state_59408[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59567 = state_59408;
state_59408 = G__59567;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__ = function(state_59408){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____1.call(this,state_59408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_iter__59361_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59419 = f__27596__auto__();
(statearr_59419[(6)] = c__27595__auto____$1);

return statearr_59419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto____$1;
}
});})(version_uuid,local_QMARK_,version,s__59362__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59347,inst_59350,inst_59351,inst_59352,inst_59353,inst_59354,inst_59355,inst_59356,inst_59357,inst_59358,inst_59359,inst_59360,state_val_59372,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),((local_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago((function (){var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(version);
}
})())], null)], null);
})(),frontend$handler$file_sync$list_file_versions_$_iter__59361(cljs.core.rest(s__59362__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
})();
var inst_59366 = inst_59365(inst_59353);
var inst_59367 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_59357,inst_59360,inst_59366];
var inst_59368 = (new cljs.core.PersistentVector(null,4,(5),inst_59354,inst_59367,null));
var inst_59369 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59368,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_59371__$1 = state_59371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59371__$1,inst_59369);
} else {
return null;
}
}
}
});
return (function() {
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0 = (function (){
var statearr_59422 = [null,null,null,null,null,null,null,null];
(statearr_59422[(0)] = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__);

(statearr_59422[(1)] = (1));

return statearr_59422;
});
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1 = (function (state_59371){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59371);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59423){var ex__27576__auto__ = e59423;
var statearr_59424_59568 = state_59371;
(statearr_59424_59568[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59371[(4)]))){
var statearr_59425_59569 = state_59371;
(statearr_59425_59569[(1)] = cljs.core.first((state_59371[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59570 = state_59371;
state_59371 = G__59570;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__ = function(state_59371){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1.call(this,state_59371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59426 = f__27596__auto__();
(statearr_59426[(6)] = c__27595__auto__);

return statearr_59426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
} else {
return null;
}
});
frontend.handler.file_sync.get_current_graph_uuid = (function frontend$handler$file_sync$get_current_graph_uuid(){
return cljs.core.second(cljs.core.deref(frontend.fs.sync.graphs_txid));
});

//# sourceMappingURL=frontend.handler.file_sync.js.map
