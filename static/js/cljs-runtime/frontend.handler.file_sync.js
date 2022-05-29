goog.provide('frontend.handler.file_sync');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
frontend.handler.file_sync.hiding_login_AMPERSAND_file_sync = cljs.core.not(frontend.config.dev_QMARK_);
frontend.handler.file_sync.refresh_file_sync_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.handler.file_sync.graph_txid_exists_QMARK_ = (function frontend$handler$file_sync$graph_txid_exists_QMARK_(){
var vec__59238 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var _user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59238,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59238,(1),null);
var _txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59238,(2),null);
return (!((graph_uuid == null)));
});
frontend.handler.file_sync.create_graph = (function frontend$handler$file_sync$create_graph(name){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59284){
var state_val_59285 = (state_59284[(1)]);
if((state_val_59285 === (7))){
var inst_59255 = (state_59284[(7)]);
var state_59284__$1 = state_59284;
var statearr_59316_59694 = state_59284__$1;
(statearr_59316_59694[(2)] = inst_59255);

(statearr_59316_59694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59285 === (1))){
var inst_59242 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$create_graph$arity$2(null,name);
var state_59284__$1 = state_59284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59284__$1,(2),inst_59242);
} else {
if((state_val_59285 === (4))){
var inst_59244 = (state_59284[(8)]);
var inst_59248 = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(inst_59244);
var state_59284__$1 = state_59284;
var statearr_59317_59696 = state_59284__$1;
(statearr_59317_59696[(2)] = inst_59248);

(statearr_59317_59696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59285 === (13))){
var inst_59250 = (state_59284[(9)]);
var inst_59277 = ["Create graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59250)].join('');
var inst_59278 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59277,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_59284__$1 = state_59284;
var statearr_59318_59699 = state_59284__$1;
(statearr_59318_59699[(2)] = inst_59278);

(statearr_59318_59699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59285 === (6))){
var inst_59250 = (state_59284[(9)]);
var inst_59257 = typeof inst_59250 === 'string';
var state_59284__$1 = state_59284;
var statearr_59319_59701 = state_59284__$1;
(statearr_59319_59701[(2)] = inst_59257);

(statearr_59319_59701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59285 === (3))){
var inst_59244 = (state_59284[(8)]);
var state_59284__$1 = state_59284;
var statearr_59320_59702 = state_59284__$1;
(statearr_59320_59702[(2)] = inst_59244);

(statearr_59320_59702[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59285 === (12))){
var inst_59274 = ["Create graph failed: already existed graph: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var inst_59275 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59274,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_59284__$1 = state_59284;
var statearr_59321_59703 = state_59284__$1;
(statearr_59321_59703[(2)] = inst_59275);

(statearr_59321_59703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59285 === (2))){
var inst_59244 = (state_59284[(8)]);
var inst_59244__$1 = (state_59284[(2)]);
var inst_59245 = (inst_59244__$1 instanceof cljs.core.ExceptionInfo);
var state_59284__$1 = (function (){var statearr_59322 = state_59284;
(statearr_59322[(8)] = inst_59244__$1);

return statearr_59322;
})();
if(cljs.core.truth_(inst_59245)){
var statearr_59323_59708 = state_59284__$1;
(statearr_59323_59708[(1)] = (3));

} else {
var statearr_59324_59709 = state_59284__$1;
(statearr_59324_59709[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59285 === (11))){
var inst_59282 = (state_59284[(2)]);
var state_59284__$1 = state_59284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59284__$1,inst_59282);
} else {
if((state_val_59285 === (9))){
var inst_59250 = (state_59284[(9)]);
var inst_59262 = frontend.handler.user.user_uuid();
var inst_59263 = frontend.state.get_current_repo();
var inst_59264 = frontend.fs.sync.update_graphs_txid_BANG_((0),inst_59250,inst_59262,inst_59263);
var inst_59265 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_59284__$1 = (function (){var statearr_59325 = state_59284;
(statearr_59325[(10)] = inst_59264);

return statearr_59325;
})();
var statearr_59326_59710 = state_59284__$1;
(statearr_59326_59710[(2)] = inst_59265);

(statearr_59326_59710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59285 === (5))){
var inst_59250 = (state_59284[(9)]);
var inst_59255 = (state_59284[(7)]);
var inst_59250__$1 = (state_59284[(2)]);
var inst_59254 = (inst_59250__$1 instanceof cljs.core.ExceptionInfo);
var inst_59255__$1 = cljs.core.not(inst_59254);
var state_59284__$1 = (function (){var statearr_59327 = state_59284;
(statearr_59327[(9)] = inst_59250__$1);

(statearr_59327[(7)] = inst_59255__$1);

return statearr_59327;
})();
if(inst_59255__$1){
var statearr_59328_59711 = state_59284__$1;
(statearr_59328_59711[(1)] = (6));

} else {
var statearr_59329_59712 = state_59284__$1;
(statearr_59329_59712[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59285 === (14))){
var inst_59280 = (state_59284[(2)]);
var state_59284__$1 = state_59284;
var statearr_59330_59713 = state_59284__$1;
(statearr_59330_59713[(2)] = inst_59280);

(statearr_59330_59713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59285 === (10))){
var inst_59250 = (state_59284[(9)]);
var inst_59267 = cljs.core.ex_data(inst_59250);
var inst_59268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59269 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_59270 = (new cljs.core.PersistentVector(null,2,(5),inst_59268,inst_59269,null));
var inst_59271 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_59267,inst_59270);
var inst_59272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),inst_59271);
var state_59284__$1 = state_59284;
if(inst_59272){
var statearr_59331_59714 = state_59284__$1;
(statearr_59331_59714[(1)] = (12));

} else {
var statearr_59332_59715 = state_59284__$1;
(statearr_59332_59715[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59285 === (8))){
var inst_59260 = (state_59284[(2)]);
var state_59284__$1 = state_59284;
if(cljs.core.truth_(inst_59260)){
var statearr_59333_59716 = state_59284__$1;
(statearr_59333_59716[(1)] = (9));

} else {
var statearr_59335_59717 = state_59284__$1;
(statearr_59335_59717[(1)] = (10));

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
var statearr_59336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59336[(0)] = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__);

(statearr_59336[(1)] = (1));

return statearr_59336;
});
var frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1 = (function (state_59284){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59284);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59338){var ex__27576__auto__ = e59338;
var statearr_59339_59718 = state_59284;
(statearr_59339_59718[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59284[(4)]))){
var statearr_59340_59719 = state_59284;
(statearr_59340_59719[(1)] = cljs.core.first((state_59284[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59720 = state_59284;
state_59284 = G__59720;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__ = function(state_59284){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1.call(this,state_59284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____0;
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59342 = f__27596__auto__();
(statearr_59342[(6)] = c__27595__auto__);

return statearr_59342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.delete_graph = (function frontend$handler$file_sync$delete_graph(graph_uuid){
frontend.fs.sync.sync_stop();

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59372){
var state_val_59373 = (state_59372[(1)]);
if((state_val_59373 === (1))){
var inst_59345 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2(null,graph_uuid);
var state_59372__$1 = state_59372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59372__$1,(2),inst_59345);
} else {
if((state_val_59373 === (2))){
var inst_59347 = (state_59372[(2)]);
var inst_59348 = (inst_59347 instanceof cljs.core.ExceptionInfo);
var state_59372__$1 = state_59372;
if(cljs.core.truth_(inst_59348)){
var statearr_59376_59721 = state_59372__$1;
(statearr_59376_59721[(1)] = (3));

} else {
var statearr_59377_59722 = state_59372__$1;
(statearr_59377_59722[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59373 === (3))){
var inst_59350 = ["Delete graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid)].join('');
var inst_59351 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59350,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_59372__$1 = state_59372;
var statearr_59379_59723 = state_59372__$1;
(statearr_59379_59723[(2)] = inst_59351);

(statearr_59379_59723[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59373 === (4))){
var inst_59356 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_59357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59356,(0),null);
var inst_59358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59356,(1),null);
var inst_59359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59356,(2),null);
var inst_59360 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_uuid,inst_59358);
var state_59372__$1 = (function (){var statearr_59381 = state_59372;
(statearr_59381[(7)] = inst_59359);

(statearr_59381[(8)] = inst_59357);

return statearr_59381;
})();
if(inst_59360){
var statearr_59382_59724 = state_59372__$1;
(statearr_59382_59724[(1)] = (6));

} else {
var statearr_59383_59725 = state_59372__$1;
(statearr_59383_59725[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59373 === (5))){
var inst_59370 = (state_59372[(2)]);
var state_59372__$1 = state_59372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59372__$1,inst_59370);
} else {
if((state_val_59373 === (6))){
var inst_59362 = frontend.state.get_current_repo();
var inst_59363 = frontend.fs.sync.clear_graphs_txid_BANG_(inst_59362);
var inst_59364 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_59372__$1 = (function (){var statearr_59384 = state_59372;
(statearr_59384[(9)] = inst_59363);

return statearr_59384;
})();
var statearr_59385_59726 = state_59372__$1;
(statearr_59385_59726[(2)] = inst_59364);

(statearr_59385_59726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59373 === (7))){
var state_59372__$1 = state_59372;
var statearr_59386_59727 = state_59372__$1;
(statearr_59386_59727[(2)] = null);

(statearr_59386_59727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59373 === (8))){
var inst_59367 = (state_59372[(2)]);
var inst_59368 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Graph deleted",new cljs.core.Keyword(null,"success","success",1890645906));
var state_59372__$1 = (function (){var statearr_59387 = state_59372;
(statearr_59387[(10)] = inst_59367);

return statearr_59387;
})();
var statearr_59388_59728 = state_59372__$1;
(statearr_59388_59728[(2)] = inst_59368);

(statearr_59388_59728[(1)] = (5));


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
var statearr_59389 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59389[(0)] = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__);

(statearr_59389[(1)] = (1));

return statearr_59389;
});
var frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1 = (function (state_59372){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59372);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59390){var ex__27576__auto__ = e59390;
var statearr_59391_59729 = state_59372;
(statearr_59391_59729[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59372[(4)]))){
var statearr_59392_59730 = state_59372;
(statearr_59392_59730[(1)] = cljs.core.first((state_59372[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59735 = state_59372;
state_59372 = G__59735;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__ = function(state_59372){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1.call(this,state_59372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____0;
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59394 = f__27596__auto__();
(statearr_59394[(6)] = c__27595__auto__);

return statearr_59394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.list_graphs = (function frontend$handler$file_sync$list_graphs(){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59400){
var state_val_59401 = (state_59400[(1)]);
if((state_val_59401 === (1))){
var inst_59395 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_59400__$1 = state_59400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59400__$1,(2),inst_59395);
} else {
if((state_val_59401 === (2))){
var inst_59397 = (state_59400[(2)]);
var inst_59398 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_59397);
var state_59400__$1 = state_59400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59400__$1,inst_59398);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0 = (function (){
var statearr_59402 = [null,null,null,null,null,null,null];
(statearr_59402[(0)] = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__);

(statearr_59402[(1)] = (1));

return statearr_59402;
});
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1 = (function (state_59400){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59400);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59403){var ex__27576__auto__ = e59403;
var statearr_59404_59737 = state_59400;
(statearr_59404_59737[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59400[(4)]))){
var statearr_59406_59738 = state_59400;
(statearr_59406_59738[(1)] = cljs.core.first((state_59400[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59739 = state_59400;
state_59400 = G__59739;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__ = function(state_59400){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1.call(this,state_59400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59408 = f__27596__auto__();
(statearr_59408[(6)] = c__27595__auto__);

return statearr_59408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.download_all_files = (function frontend$handler$file_sync$download_all_files(repo,graph_uuid,user_uuid,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59453){
var state_val_59454 = (state_59453[(1)]);
if((state_val_59454 === (1))){
var inst_59410 = frontend.state.reset_file_sync_download_init_state_BANG_();
var inst_59411 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"finished","finished",-1018867731),new cljs.core.Keyword(null,"downloading?","downloading?",38673093)];
var inst_59412 = [NaN,(0),true];
var inst_59413 = cljs.core.PersistentHashMap.fromArrays(inst_59411,inst_59412);
var inst_59414 = frontend.state.set_file_sync_download_init_state_BANG_(inst_59413);
var inst_59415 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,graph_uuid);
var state_59453__$1 = (function (){var statearr_59461 = state_59453;
(statearr_59461[(7)] = inst_59414);

(statearr_59461[(8)] = inst_59410);

return statearr_59461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59453__$1,(2),inst_59415);
} else {
if((state_val_59454 === (2))){
var inst_59418 = (state_59453[(2)]);
var inst_59419 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,graph_uuid,base_path);
var state_59453__$1 = (function (){var statearr_59463 = state_59453;
(statearr_59463[(9)] = inst_59418);

return statearr_59463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59453__$1,(3),inst_59419);
} else {
if((state_val_59454 === (3))){
var inst_59418 = (state_59453[(9)]);
var inst_59421 = (state_59453[(10)]);
var inst_59421__$1 = (state_59453[(2)]);
var inst_59422 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_59418,inst_59421__$1);
var inst_59423 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,graph_uuid);
var state_59453__$1 = (function (){var statearr_59466 = state_59453;
(statearr_59466[(10)] = inst_59421__$1);

(statearr_59466[(11)] = inst_59422);

return statearr_59466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59453__$1,(4),inst_59423);
} else {
if((state_val_59454 === (4))){
var inst_59426 = (state_59453[(12)]);
var inst_59418 = (state_59453[(9)]);
var inst_59421 = (state_59453[(10)]);
var inst_59422 = (state_59453[(11)]);
var inst_59425 = (state_59453[(2)]);
var inst_59426__$1 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_59425);
var inst_59427 = frontend.fs.sync.filepaths__GT_partitioned_filetxns((10),graph_uuid,user_uuid);
var inst_59428 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_59422);
var inst_59429 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_59427,inst_59428);
var inst_59430 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"finished","finished",-1018867731)];
var inst_59431 = cljs.core.count(inst_59422);
var inst_59432 = [inst_59431,(0)];
var inst_59433 = cljs.core.PersistentHashMap.fromArrays(inst_59430,inst_59432);
var inst_59434 = frontend.state.set_file_sync_download_init_state_BANG_(inst_59433);
var inst_59435 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var inst_59436 = (function (){var remote_all_files_meta = inst_59418;
var local_all_files_meta = inst_59421;
var diff_remote_files = inst_59422;
var latest_txid = inst_59426__$1;
var partitioned_filetxns = inst_59429;
return (function (filetxns){
return frontend.state.set_file_sync_download_init_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"downloading-files","downloading-files",1777262232),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,filetxns)], null));
});
})();
var inst_59437 = (function (){var remote_all_files_meta = inst_59418;
var local_all_files_meta = inst_59421;
var diff_remote_files = inst_59422;
var latest_txid = inst_59426__$1;
var partitioned_filetxns = inst_59429;
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
var inst_59438 = frontend.fs.sync.apply_filetxns_partitions(null,user_uuid,graph_uuid,base_path,inst_59429,repo,null,inst_59435,inst_59436,inst_59437);
var state_59453__$1 = (function (){var statearr_59467 = state_59453;
(statearr_59467[(12)] = inst_59426__$1);

(statearr_59467[(13)] = inst_59434);

return statearr_59467;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59453__$1,(5),inst_59438);
} else {
if((state_val_59454 === (5))){
var inst_59440 = (state_59453[(14)]);
var inst_59440__$1 = (state_59453[(2)]);
var inst_59441 = (inst_59440__$1 instanceof cljs.core.ExceptionInfo);
var state_59453__$1 = (function (){var statearr_59468 = state_59453;
(statearr_59468[(14)] = inst_59440__$1);

return statearr_59468;
})();
if(cljs.core.truth_(inst_59441)){
var statearr_59469_59744 = state_59453__$1;
(statearr_59469_59744[(1)] = (6));

} else {
var statearr_59470_59745 = state_59453__$1;
(statearr_59470_59745[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59454 === (6))){
var inst_59440 = (state_59453[(14)]);
var inst_59443 = cljs.core.ex_cause(inst_59440);
var inst_59444 = ["Download graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59443)].join('');
var inst_59445 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59444,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_59453__$1 = state_59453;
var statearr_59471_59746 = state_59453__$1;
(statearr_59471_59746[(2)] = inst_59445);

(statearr_59471_59746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59454 === (7))){
var inst_59426 = (state_59453[(12)]);
var inst_59448 = frontend.state.reset_file_sync_download_init_state_BANG_();
var inst_59449 = frontend.fs.sync.update_graphs_txid_BANG_(inst_59426,graph_uuid,user_uuid,repo);
var state_59453__$1 = (function (){var statearr_59472 = state_59453;
(statearr_59472[(15)] = inst_59448);

return statearr_59472;
})();
var statearr_59474_59749 = state_59453__$1;
(statearr_59474_59749[(2)] = inst_59449);

(statearr_59474_59749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59454 === (8))){
var inst_59451 = (state_59453[(2)]);
var state_59453__$1 = state_59453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59453__$1,inst_59451);
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
var statearr_59476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59476[(0)] = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__);

(statearr_59476[(1)] = (1));

return statearr_59476;
});
var frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1 = (function (state_59453){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59453);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59477){var ex__27576__auto__ = e59477;
var statearr_59478_59750 = state_59453;
(statearr_59478_59750[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59453[(4)]))){
var statearr_59480_59751 = state_59453;
(statearr_59480_59751[(1)] = cljs.core.first((state_59453[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59753 = state_59453;
state_59453 = G__59753;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__ = function(state_59453){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1.call(this,state_59453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____0;
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59482 = f__27596__auto__();
(statearr_59482[(6)] = c__27595__auto__);

return statearr_59482;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59519){
var state_val_59520 = (state_59519[(1)]);
if((state_val_59520 === (1))){
var inst_59485 = (state_59519[(7)]);
var inst_59485__$1 = module$node_modules$path$path.join("version-files",file_uuid,version_uuid);
var inst_59486 = frontend.state.get_current_repo();
var inst_59487 = frontend.config.get_repo_dir(inst_59486);
var inst_59488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59489 = [inst_59485__$1];
var inst_59490 = (new cljs.core.PersistentVector(null,1,(5),inst_59488,inst_59489,null));
var inst_59491 = frontend.fs.sync.update_local_files(frontend.fs.sync.rsapi,graph_uuid,inst_59487,inst_59490);
var state_59519__$1 = (function (){var statearr_59529 = state_59519;
(statearr_59529[(7)] = inst_59485__$1);

return statearr_59529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59519__$1,(2),inst_59491);
} else {
if((state_val_59520 === (2))){
var inst_59493 = (state_59519[(8)]);
var inst_59493__$1 = (state_59519[(2)]);
var inst_59494 = (inst_59493__$1 instanceof cljs.core.ExceptionInfo);
var state_59519__$1 = (function (){var statearr_59533 = state_59519;
(statearr_59533[(8)] = inst_59493__$1);

return statearr_59533;
})();
if(cljs.core.truth_(inst_59494)){
var statearr_59534_59756 = state_59519__$1;
(statearr_59534_59756[(1)] = (3));

} else {
var statearr_59536_59757 = state_59519__$1;
(statearr_59536_59757[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59520 === (3))){
var inst_59493 = (state_59519[(8)]);
var inst_59496 = cljs.core.ex_cause(inst_59493);
var inst_59497 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59496,new cljs.core.Keyword(null,"error","error",-978969032));
var state_59519__$1 = state_59519;
var statearr_59539_59758 = state_59519__$1;
(statearr_59539_59758[(2)] = inst_59497);

(statearr_59539_59758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59520 === (4))){
var inst_59485 = (state_59519[(7)]);
var inst_59499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59500 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59501 = [new cljs.core.Keyword(null,"div","div",1057191632),"Downloaded version file at: "];
var inst_59502 = (new cljs.core.PersistentVector(null,2,(5),inst_59500,inst_59501,null));
var inst_59503 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59504 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_59485];
var inst_59505 = (new cljs.core.PersistentVector(null,2,(5),inst_59503,inst_59504,null));
var inst_59507 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_59502,inst_59505];
var inst_59508 = (new cljs.core.PersistentVector(null,3,(5),inst_59499,inst_59507,null));
var inst_59509 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59508,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_59519__$1 = state_59519;
var statearr_59540_59760 = state_59519__$1;
(statearr_59540_59760[(2)] = inst_59509);

(statearr_59540_59760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59520 === (5))){
var inst_59493 = (state_59519[(8)]);
var inst_59511 = (state_59519[(2)]);
var inst_59512 = (inst_59493 instanceof cljs.core.ExceptionInfo);
var state_59519__$1 = (function (){var statearr_59541 = state_59519;
(statearr_59541[(9)] = inst_59511);

return statearr_59541;
})();
if(cljs.core.truth_(inst_59512)){
var statearr_59542_59761 = state_59519__$1;
(statearr_59542_59761[(1)] = (6));

} else {
var statearr_59544_59763 = state_59519__$1;
(statearr_59544_59763[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59520 === (6))){
var state_59519__$1 = state_59519;
var statearr_59545_59765 = state_59519__$1;
(statearr_59545_59765[(2)] = null);

(statearr_59545_59765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59520 === (7))){
var inst_59485 = (state_59519[(7)]);
var state_59519__$1 = state_59519;
var statearr_59547_59766 = state_59519__$1;
(statearr_59547_59766[(2)] = inst_59485);

(statearr_59547_59766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59520 === (8))){
var inst_59516 = (state_59519[(2)]);
var state_59519__$1 = state_59519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59519__$1,inst_59516);
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
var statearr_59550 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59550[(0)] = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__);

(statearr_59550[(1)] = (1));

return statearr_59550;
});
var frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1 = (function (state_59519){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59519);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59551){var ex__27576__auto__ = e59551;
var statearr_59552_59767 = state_59519;
(statearr_59552_59767[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59519[(4)]))){
var statearr_59553_59768 = state_59519;
(statearr_59553_59768[(1)] = cljs.core.first((state_59519[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59769 = state_59519;
state_59519 = G__59769;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__ = function(state_59519){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1.call(this,state_59519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____0;
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59554 = f__27596__auto__();
(statearr_59554[(6)] = c__27595__auto__);

return statearr_59554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.list_file_local_versions = (function frontend$handler$file_sync$list_file_local_versions(page){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59596){
var state_val_59597 = (state_59596[(1)]);
if((state_val_59597 === (7))){
var inst_59562 = (state_59596[(7)]);
var inst_59561 = (state_59596[(8)]);
var inst_59573 = (state_59596[(9)]);
var inst_59569 = (state_59596[(10)]);
var inst_59558 = (state_59596[(11)]);
var inst_59577 = (function (){var temp__5720__auto__ = inst_59558;
var path = inst_59558;
var base_path = inst_59561;
var rel_path = inst_59562;
var version_files_dir = inst_59569;
var version_file_paths_STAR_ = inst_59573;
return (function (dir_or_file){
return cljs.core.seq(new cljs.core.Keyword(null,"ext","ext",-996964541).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$path$path.parse(dir_or_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
});
})();
var inst_59578 = frontend.fs.readdir(inst_59569);
var inst_59579 = cljs.core.async.interop.p__GT_c(inst_59578);
var state_59596__$1 = (function (){var statearr_59598 = state_59596;
(statearr_59598[(12)] = inst_59577);

return statearr_59598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59596__$1,(9),inst_59579);
} else {
if((state_val_59597 === (1))){
var inst_59558 = (state_59596[(11)]);
var inst_59557 = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
var inst_59558__$1 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(inst_59557);
var state_59596__$1 = (function (){var statearr_59599 = state_59596;
(statearr_59599[(11)] = inst_59558__$1);

return statearr_59599;
})();
if(cljs.core.truth_(inst_59558__$1)){
var statearr_59600_59770 = state_59596__$1;
(statearr_59600_59770[(1)] = (2));

} else {
var statearr_59601_59771 = state_59596__$1;
(statearr_59601_59771[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59597 === (4))){
var inst_59590 = (state_59596[(2)]);
var state_59596__$1 = state_59596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59596__$1,inst_59590);
} else {
if((state_val_59597 === (6))){
var state_59596__$1 = state_59596;
var statearr_59602_59772 = state_59596__$1;
(statearr_59602_59772[(2)] = null);

(statearr_59602_59772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59597 === (3))){
var state_59596__$1 = state_59596;
var statearr_59603_59773 = state_59596__$1;
(statearr_59603_59773[(2)] = null);

(statearr_59603_59773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59597 === (2))){
var inst_59562 = (state_59596[(7)]);
var inst_59561 = (state_59596[(8)]);
var inst_59569 = (state_59596[(10)]);
var inst_59558 = (state_59596[(11)]);
var inst_59560 = frontend.state.get_current_repo();
var inst_59561__$1 = frontend.config.get_repo_dir(inst_59560);
var inst_59562__$1 = clojure.string.replace_first(inst_59558,inst_59561__$1,"");
var inst_59563 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"name","name",1843675177));
var inst_59564 = (function (){var temp__5720__auto__ = inst_59558;
var path = inst_59558;
var base_path = inst_59561__$1;
var rel_path = inst_59562__$1;
return (function (p1__59555_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__59555_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
})();
var inst_59565 = module$node_modules$path$path.join("version-files/local",inst_59562__$1);
var inst_59566 = module$node_modules$path$path.parse(inst_59565);
var inst_59567 = inst_59564(inst_59566);
var inst_59568 = inst_59563(inst_59567);
var inst_59569__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$path$path.join,inst_59561__$1,inst_59568);
var inst_59570 = frontend.fs.readdir(inst_59569__$1);
var inst_59571 = cljs.core.async.interop.p__GT_c(inst_59570);
var state_59596__$1 = (function (){var statearr_59605 = state_59596;
(statearr_59605[(7)] = inst_59562__$1);

(statearr_59605[(8)] = inst_59561__$1);

(statearr_59605[(10)] = inst_59569__$1);

return statearr_59605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59596__$1,(5),inst_59571);
} else {
if((state_val_59597 === (9))){
var inst_59562 = (state_59596[(7)]);
var inst_59561 = (state_59596[(8)]);
var inst_59573 = (state_59596[(9)]);
var inst_59569 = (state_59596[(10)]);
var inst_59577 = (state_59596[(12)]);
var inst_59558 = (state_59596[(11)]);
var inst_59581 = (state_59596[(2)]);
var inst_59582 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_59581);
var inst_59583 = cljs.core.filterv(inst_59577,inst_59582);
var inst_59584 = (function (){var temp__5720__auto__ = inst_59558;
var path = inst_59558;
var base_path = inst_59561;
var rel_path = inst_59562;
var version_files_dir = inst_59569;
var version_file_paths_STAR_ = inst_59573;
var version_file_paths = inst_59583;
return (function (path__$1){
var create_time = (function (p1__59556_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH_mm_ss.SSSZZ"),p1__59556_SHARP_);
})(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$path$path.parse(path__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create-time","create-time",875410581),create_time,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172),clojure.string.replace_first(path__$1,base_path,"")], null);
});
})();
var inst_59585 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_59584,inst_59583);
var state_59596__$1 = state_59596;
var statearr_59606_59775 = state_59596__$1;
(statearr_59606_59775[(2)] = inst_59585);

(statearr_59606_59775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59597 === (5))){
var inst_59573 = (state_59596[(9)]);
var inst_59573__$1 = (state_59596[(2)]);
var inst_59574 = (inst_59573__$1 instanceof cljs.core.ExceptionInfo);
var state_59596__$1 = (function (){var statearr_59607 = state_59596;
(statearr_59607[(9)] = inst_59573__$1);

return statearr_59607;
})();
if(cljs.core.truth_(inst_59574)){
var statearr_59608_59778 = state_59596__$1;
(statearr_59608_59778[(1)] = (6));

} else {
var statearr_59609_59779 = state_59596__$1;
(statearr_59609_59779[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59597 === (8))){
var inst_59587 = (state_59596[(2)]);
var state_59596__$1 = state_59596;
var statearr_59610_59780 = state_59596__$1;
(statearr_59610_59780[(2)] = inst_59587);

(statearr_59610_59780[(1)] = (4));


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
var statearr_59611 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59611[(0)] = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__);

(statearr_59611[(1)] = (1));

return statearr_59611;
});
var frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1 = (function (state_59596){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59596);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59612){var ex__27576__auto__ = e59612;
var statearr_59613_59781 = state_59596;
(statearr_59613_59781[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59596[(4)]))){
var statearr_59614_59782 = state_59596;
(statearr_59614_59782[(1)] = cljs.core.first((state_59596[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59783 = state_59596;
state_59596 = G__59783;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__ = function(state_59596){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1.call(this,state_59596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59615 = f__27596__auto__();
(statearr_59615[(6)] = c__27595__auto__);

return statearr_59615;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59645){
var state_val_59646 = (state_59645[(1)]);
if((state_val_59646 === (1))){
var inst_59618 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3(null,graph_uuid,path_STAR_);
var state_59645__$1 = state_59645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59645__$1,(2),inst_59618);
} else {
if((state_val_59646 === (2))){
var inst_59620 = (state_59645[(2)]);
var inst_59621 = new cljs.core.Keyword(null,"VersionList","VersionList",-1189454538).cljs$core$IFn$_invoke$arity$1(inst_59620);
var inst_59622 = frontend.handler.file_sync.list_file_local_versions(page);
var state_59645__$1 = (function (){var statearr_59648 = state_59645;
(statearr_59648[(7)] = inst_59621);

return statearr_59648;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59645__$1,(3),inst_59622);
} else {
if((state_val_59646 === (3))){
var inst_59621 = (state_59645[(7)]);
var inst_59624 = (state_59645[(2)]);
var inst_59625 = (function (){var version_list = inst_59621;
var local_version_list = inst_59624;
return (function (p1__59617_SHARP_){
var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(p1__59617_SHARP_));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(p1__59617_SHARP_);
}
});
})();
var inst_59626 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_59621,inst_59624);
var inst_59627 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(inst_59625,cljs.core._GT_,inst_59626);
var inst_59628 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59629 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59630 = [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"File history - ",path_STAR_];
var inst_59631 = (new cljs.core.PersistentVector(null,3,(5),inst_59629,inst_59630,null));
var inst_59632 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59633 = [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)];
var inst_59634 = (new cljs.core.PersistentVector(null,1,(5),inst_59632,inst_59633,null));
var inst_59639 = (function (){var version_list = inst_59621;
var local_version_list = inst_59624;
var all_version_list = inst_59627;
return (function frontend$handler$file_sync$list_file_versions_$_iter__59635(s__59636){
return (new cljs.core.LazySeq(null,(function (){
var s__59636__$1 = s__59636;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__59636__$1);
if(temp__5720__auto____$1){
var s__59636__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59636__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__59636__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__59638 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__59637 = (0);
while(true){
if((i__59637 < size__5519__auto__)){
var version = cljs.core._nth(c__5518__auto__,i__59637);
cljs.core.chunk_append(b__59638,(function (){var version_uuid = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version);
}
})();
var local_QMARK_ = (!((new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version) == null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__59637,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59638,s__59636__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59621,inst_59624,inst_59625,inst_59626,inst_59627,inst_59628,inst_59629,inst_59630,inst_59631,inst_59632,inst_59633,inst_59634,state_val_59646,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
if(local_QMARK_){
return window.apis.openPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(version));
} else {
var c__27595__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (i__59637,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59638,s__59636__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59621,inst_59624,inst_59625,inst_59626,inst_59627,inst_59628,inst_59629,inst_59630,inst_59631,inst_59632,inst_59633,inst_59634,state_val_59646,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = ((function (i__59637,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59638,s__59636__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59621,inst_59624,inst_59625,inst_59626,inst_59627,inst_59628,inst_59629,inst_59630,inst_59631,inst_59632,inst_59633,inst_59634,state_val_59646,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (state_59659){
var state_val_59660 = (state_59659[(1)]);
if((state_val_59660 === (1))){
var inst_59651 = new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version);
var inst_59652 = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
var inst_59653 = frontend.handler.file_sync.download_version_file(graph_uuid,inst_59651,inst_59652);
var state_59659__$1 = state_59659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59659__$1,(2),inst_59653);
} else {
if((state_val_59660 === (2))){
var inst_59655 = (state_59659[(2)]);
var inst_59656 = module$node_modules$path$path.join(base_path,inst_59655);
var inst_59657 = window.apis.openPath(inst_59656);
var state_59659__$1 = state_59659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59659__$1,inst_59657);
} else {
return null;
}
}
});})(i__59637,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59638,s__59636__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59621,inst_59624,inst_59625,inst_59626,inst_59627,inst_59628,inst_59629,inst_59630,inst_59631,inst_59632,inst_59633,inst_59634,state_val_59646,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
;
return ((function (i__59637,switch__27572__auto__,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59638,s__59636__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59621,inst_59624,inst_59625,inst_59626,inst_59627,inst_59628,inst_59629,inst_59630,inst_59631,inst_59632,inst_59633,inst_59634,state_val_59646,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function() {
var frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____0 = (function (){
var statearr_59661 = [null,null,null,null,null,null,null];
(statearr_59661[(0)] = frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__);

(statearr_59661[(1)] = (1));

return statearr_59661;
});
var frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____1 = (function (state_59659){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59659);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59662){var ex__27576__auto__ = e59662;
var statearr_59663_59794 = state_59659;
(statearr_59663_59794[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59659[(4)]))){
var statearr_59664_59795 = state_59659;
(statearr_59664_59795[(1)] = cljs.core.first((state_59659[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59796 = state_59659;
state_59659 = G__59796;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__ = function(state_59659){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____1.call(this,state_59659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__;
})()
;})(i__59637,switch__27572__auto__,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59638,s__59636__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59621,inst_59624,inst_59625,inst_59626,inst_59627,inst_59628,inst_59629,inst_59630,inst_59631,inst_59632,inst_59633,inst_59634,state_val_59646,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
})();
var state__27597__auto__ = (function (){var statearr_59665 = f__27596__auto__();
(statearr_59665[(6)] = c__27595__auto____$1);

return statearr_59665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
});})(i__59637,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59638,s__59636__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59621,inst_59624,inst_59625,inst_59626,inst_59627,inst_59628,inst_59629,inst_59630,inst_59631,inst_59632,inst_59633,inst_59634,state_val_59646,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
);

return c__27595__auto____$1;
}
});})(i__59637,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59638,s__59636__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59621,inst_59624,inst_59625,inst_59626,inst_59627,inst_59628,inst_59629,inst_59630,inst_59631,inst_59632,inst_59633,inst_59634,state_val_59646,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),((local_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago((function (){var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(version);
}
})())], null)], null);
})());

var G__59797 = (i__59637 + (1));
i__59637 = G__59797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59638),frontend$handler$file_sync$list_file_versions_$_iter__59635(cljs.core.chunk_rest(s__59636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59638),null);
}
} else {
var version = cljs.core.first(s__59636__$2);
return cljs.core.cons((function (){var version_uuid = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version);
}
})();
var local_QMARK_ = (!((new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version) == null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (version_uuid,local_QMARK_,version,s__59636__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59621,inst_59624,inst_59625,inst_59626,inst_59627,inst_59628,inst_59629,inst_59630,inst_59631,inst_59632,inst_59633,inst_59634,state_val_59646,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
if(local_QMARK_){
return window.apis.openPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(version));
} else {
var c__27595__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59674){
var state_val_59675 = (state_59674[(1)]);
if((state_val_59675 === (1))){
var inst_59666 = new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version);
var inst_59667 = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
var inst_59668 = frontend.handler.file_sync.download_version_file(graph_uuid,inst_59666,inst_59667);
var state_59674__$1 = state_59674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59674__$1,(2),inst_59668);
} else {
if((state_val_59675 === (2))){
var inst_59670 = (state_59674[(2)]);
var inst_59671 = module$node_modules$path$path.join(base_path,inst_59670);
var inst_59672 = window.apis.openPath(inst_59671);
var state_59674__$1 = state_59674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59674__$1,inst_59672);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____0 = (function (){
var statearr_59676 = [null,null,null,null,null,null,null];
(statearr_59676[(0)] = frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__);

(statearr_59676[(1)] = (1));

return statearr_59676;
});
var frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____1 = (function (state_59674){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59674);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59677){var ex__27576__auto__ = e59677;
var statearr_59678_59798 = state_59674;
(statearr_59678_59798[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59674[(4)]))){
var statearr_59679_59800 = state_59674;
(statearr_59679_59800[(1)] = cljs.core.first((state_59674[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59802 = state_59674;
state_59674 = G__59802;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__ = function(state_59674){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____1.call(this,state_59674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_iter__59635_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59680 = f__27596__auto__();
(statearr_59680[(6)] = c__27595__auto____$1);

return statearr_59680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto____$1;
}
});})(version_uuid,local_QMARK_,version,s__59636__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59621,inst_59624,inst_59625,inst_59626,inst_59627,inst_59628,inst_59629,inst_59630,inst_59631,inst_59632,inst_59633,inst_59634,state_val_59646,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),((local_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago((function (){var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(version);
}
})())], null)], null);
})(),frontend$handler$file_sync$list_file_versions_$_iter__59635(cljs.core.rest(s__59636__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
})();
var inst_59640 = inst_59639(inst_59627);
var inst_59641 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_59631,inst_59634,inst_59640];
var inst_59642 = (new cljs.core.PersistentVector(null,4,(5),inst_59628,inst_59641,null));
var inst_59643 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59642,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_59645__$1 = state_59645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59645__$1,inst_59643);
} else {
return null;
}
}
}
});
return (function() {
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0 = (function (){
var statearr_59683 = [null,null,null,null,null,null,null,null];
(statearr_59683[(0)] = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__);

(statearr_59683[(1)] = (1));

return statearr_59683;
});
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1 = (function (state_59645){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59645);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59684){var ex__27576__auto__ = e59684;
var statearr_59685_59803 = state_59645;
(statearr_59685_59803[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59645[(4)]))){
var statearr_59686_59804 = state_59645;
(statearr_59686_59804[(1)] = cljs.core.first((state_59645[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59805 = state_59645;
state_59645 = G__59805;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__ = function(state_59645){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1.call(this,state_59645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59687 = f__27596__auto__();
(statearr_59687[(6)] = c__27595__auto__);

return statearr_59687;
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
