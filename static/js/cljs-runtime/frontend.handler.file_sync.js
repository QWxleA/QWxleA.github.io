goog.provide('frontend.handler.file_sync');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
frontend.handler.file_sync.hiding_login_AMPERSAND_file_sync = cljs.core.not(frontend.config.dev_QMARK_);
frontend.handler.file_sync.refresh_file_sync_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.handler.file_sync.graph_txid_exists_QMARK_ = (function frontend$handler$file_sync$graph_txid_exists_QMARK_(){
var vec__58833 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var _user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58833,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58833,(1),null);
var _txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58833,(2),null);
return (!((graph_uuid == null)));
});
frontend.handler.file_sync.create_graph = (function frontend$handler$file_sync$create_graph(name){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58875){
var state_val_58876 = (state_58875[(1)]);
if((state_val_58876 === (7))){
var inst_58846 = (state_58875[(7)]);
var state_58875__$1 = state_58875;
var statearr_58878_59338 = state_58875__$1;
(statearr_58878_59338[(2)] = inst_58846);

(statearr_58878_59338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (1))){
var inst_58836 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$create_graph$arity$2(null,name);
var state_58875__$1 = state_58875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58875__$1,(2),inst_58836);
} else {
if((state_val_58876 === (4))){
var inst_58838 = (state_58875[(8)]);
var inst_58842 = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(inst_58838);
var state_58875__$1 = state_58875;
var statearr_58880_59341 = state_58875__$1;
(statearr_58880_59341[(2)] = inst_58842);

(statearr_58880_59341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (13))){
var inst_58844 = (state_58875[(9)]);
var inst_58868 = ["Create graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58844)].join('');
var inst_58869 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58868,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_58875__$1 = state_58875;
var statearr_58881_59343 = state_58875__$1;
(statearr_58881_59343[(2)] = inst_58869);

(statearr_58881_59343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (6))){
var inst_58844 = (state_58875[(9)]);
var inst_58848 = typeof inst_58844 === 'string';
var state_58875__$1 = state_58875;
var statearr_58882_59344 = state_58875__$1;
(statearr_58882_59344[(2)] = inst_58848);

(statearr_58882_59344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (3))){
var inst_58838 = (state_58875[(8)]);
var state_58875__$1 = state_58875;
var statearr_58883_59345 = state_58875__$1;
(statearr_58883_59345[(2)] = inst_58838);

(statearr_58883_59345[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (12))){
var inst_58865 = ["Create graph failed: already existed graph: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var inst_58866 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58865,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_58875__$1 = state_58875;
var statearr_58884_59346 = state_58875__$1;
(statearr_58884_59346[(2)] = inst_58866);

(statearr_58884_59346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (2))){
var inst_58838 = (state_58875[(8)]);
var inst_58838__$1 = (state_58875[(2)]);
var inst_58839 = (inst_58838__$1 instanceof cljs.core.ExceptionInfo);
var state_58875__$1 = (function (){var statearr_58885 = state_58875;
(statearr_58885[(8)] = inst_58838__$1);

return statearr_58885;
})();
if(cljs.core.truth_(inst_58839)){
var statearr_58886_59347 = state_58875__$1;
(statearr_58886_59347[(1)] = (3));

} else {
var statearr_58887_59348 = state_58875__$1;
(statearr_58887_59348[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (11))){
var inst_58873 = (state_58875[(2)]);
var state_58875__$1 = state_58875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58875__$1,inst_58873);
} else {
if((state_val_58876 === (9))){
var inst_58844 = (state_58875[(9)]);
var inst_58853 = frontend.handler.user.user_uuid();
var inst_58854 = frontend.state.get_current_repo();
var inst_58855 = frontend.fs.sync.update_graphs_txid_BANG_((0),inst_58844,inst_58853,inst_58854);
var inst_58856 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_58875__$1 = (function (){var statearr_58888 = state_58875;
(statearr_58888[(10)] = inst_58855);

return statearr_58888;
})();
var statearr_58889_59349 = state_58875__$1;
(statearr_58889_59349[(2)] = inst_58856);

(statearr_58889_59349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (5))){
var inst_58844 = (state_58875[(9)]);
var inst_58846 = (state_58875[(7)]);
var inst_58844__$1 = (state_58875[(2)]);
var inst_58845 = (inst_58844__$1 instanceof cljs.core.ExceptionInfo);
var inst_58846__$1 = cljs.core.not(inst_58845);
var state_58875__$1 = (function (){var statearr_58891 = state_58875;
(statearr_58891[(9)] = inst_58844__$1);

(statearr_58891[(7)] = inst_58846__$1);

return statearr_58891;
})();
if(inst_58846__$1){
var statearr_58892_59350 = state_58875__$1;
(statearr_58892_59350[(1)] = (6));

} else {
var statearr_58893_59351 = state_58875__$1;
(statearr_58893_59351[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (14))){
var inst_58871 = (state_58875[(2)]);
var state_58875__$1 = state_58875;
var statearr_58894_59352 = state_58875__$1;
(statearr_58894_59352[(2)] = inst_58871);

(statearr_58894_59352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (10))){
var inst_58844 = (state_58875[(9)]);
var inst_58858 = cljs.core.ex_data(inst_58844);
var inst_58859 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58860 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_58861 = (new cljs.core.PersistentVector(null,2,(5),inst_58859,inst_58860,null));
var inst_58862 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_58858,inst_58861);
var inst_58863 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),inst_58862);
var state_58875__$1 = state_58875;
if(inst_58863){
var statearr_58896_59353 = state_58875__$1;
(statearr_58896_59353[(1)] = (12));

} else {
var statearr_58897_59354 = state_58875__$1;
(statearr_58897_59354[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (8))){
var inst_58851 = (state_58875[(2)]);
var state_58875__$1 = state_58875;
if(cljs.core.truth_(inst_58851)){
var statearr_58898_59355 = state_58875__$1;
(statearr_58898_59355[(1)] = (9));

} else {
var statearr_58899_59356 = state_58875__$1;
(statearr_58899_59356[(1)] = (10));

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
var statearr_58900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58900[(0)] = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__);

(statearr_58900[(1)] = (1));

return statearr_58900;
});
var frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1 = (function (state_58875){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58875);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58901){var ex__27576__auto__ = e58901;
var statearr_58902_59357 = state_58875;
(statearr_58902_59357[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58875[(4)]))){
var statearr_58903_59358 = state_58875;
(statearr_58903_59358[(1)] = cljs.core.first((state_58875[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59359 = state_58875;
state_58875 = G__59359;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__ = function(state_58875){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1.call(this,state_58875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____0;
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58904 = f__27596__auto__();
(statearr_58904[(6)] = c__27595__auto__);

return statearr_58904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.delete_graph = (function frontend$handler$file_sync$delete_graph(graph_uuid){
frontend.fs.sync.sync_stop();

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58934){
var state_val_58935 = (state_58934[(1)]);
if((state_val_58935 === (1))){
var inst_58907 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2(null,graph_uuid);
var state_58934__$1 = state_58934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58934__$1,(2),inst_58907);
} else {
if((state_val_58935 === (2))){
var inst_58909 = (state_58934[(2)]);
var inst_58910 = (inst_58909 instanceof cljs.core.ExceptionInfo);
var state_58934__$1 = state_58934;
if(cljs.core.truth_(inst_58910)){
var statearr_58941_59360 = state_58934__$1;
(statearr_58941_59360[(1)] = (3));

} else {
var statearr_58942_59361 = state_58934__$1;
(statearr_58942_59361[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58935 === (3))){
var inst_58912 = ["Delete graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid)].join('');
var inst_58913 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58912,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_58934__$1 = state_58934;
var statearr_58943_59362 = state_58934__$1;
(statearr_58943_59362[(2)] = inst_58913);

(statearr_58943_59362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58935 === (4))){
var inst_58918 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_58919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58918,(0),null);
var inst_58920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58918,(1),null);
var inst_58921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58918,(2),null);
var inst_58922 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_uuid,inst_58920);
var state_58934__$1 = (function (){var statearr_58949 = state_58934;
(statearr_58949[(7)] = inst_58919);

(statearr_58949[(8)] = inst_58921);

return statearr_58949;
})();
if(inst_58922){
var statearr_58950_59363 = state_58934__$1;
(statearr_58950_59363[(1)] = (6));

} else {
var statearr_58952_59364 = state_58934__$1;
(statearr_58952_59364[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58935 === (5))){
var inst_58932 = (state_58934[(2)]);
var state_58934__$1 = state_58934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58934__$1,inst_58932);
} else {
if((state_val_58935 === (6))){
var inst_58924 = frontend.state.get_current_repo();
var inst_58925 = frontend.fs.sync.clear_graphs_txid_BANG_(inst_58924);
var inst_58926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_58934__$1 = (function (){var statearr_58955 = state_58934;
(statearr_58955[(9)] = inst_58925);

return statearr_58955;
})();
var statearr_58956_59365 = state_58934__$1;
(statearr_58956_59365[(2)] = inst_58926);

(statearr_58956_59365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58935 === (7))){
var state_58934__$1 = state_58934;
var statearr_58959_59366 = state_58934__$1;
(statearr_58959_59366[(2)] = null);

(statearr_58959_59366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58935 === (8))){
var inst_58929 = (state_58934[(2)]);
var inst_58930 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Graph deleted",new cljs.core.Keyword(null,"success","success",1890645906));
var state_58934__$1 = (function (){var statearr_58960 = state_58934;
(statearr_58960[(10)] = inst_58929);

return statearr_58960;
})();
var statearr_58961_59367 = state_58934__$1;
(statearr_58961_59367[(2)] = inst_58930);

(statearr_58961_59367[(1)] = (5));


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
var statearr_58966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58966[(0)] = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__);

(statearr_58966[(1)] = (1));

return statearr_58966;
});
var frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1 = (function (state_58934){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58934);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58970){var ex__27576__auto__ = e58970;
var statearr_58971_59368 = state_58934;
(statearr_58971_59368[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58934[(4)]))){
var statearr_58972_59369 = state_58934;
(statearr_58972_59369[(1)] = cljs.core.first((state_58934[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59370 = state_58934;
state_58934 = G__59370;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__ = function(state_58934){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1.call(this,state_58934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____0;
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58973 = f__27596__auto__();
(statearr_58973[(6)] = c__27595__auto__);

return statearr_58973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.list_graphs = (function frontend$handler$file_sync$list_graphs(){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58981){
var state_val_58982 = (state_58981[(1)]);
if((state_val_58982 === (1))){
var inst_58976 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_58981__$1 = state_58981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58981__$1,(2),inst_58976);
} else {
if((state_val_58982 === (2))){
var inst_58978 = (state_58981[(2)]);
var inst_58979 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_58978);
var state_58981__$1 = state_58981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58981__$1,inst_58979);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0 = (function (){
var statearr_58988 = [null,null,null,null,null,null,null];
(statearr_58988[(0)] = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__);

(statearr_58988[(1)] = (1));

return statearr_58988;
});
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1 = (function (state_58981){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58981);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58991){var ex__27576__auto__ = e58991;
var statearr_58992_59371 = state_58981;
(statearr_58992_59371[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58981[(4)]))){
var statearr_58993_59372 = state_58981;
(statearr_58993_59372[(1)] = cljs.core.first((state_58981[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59373 = state_58981;
state_58981 = G__59373;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__ = function(state_58981){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1.call(this,state_58981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58995 = f__27596__auto__();
(statearr_58995[(6)] = c__27595__auto__);

return statearr_58995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.download_all_files = (function frontend$handler$file_sync$download_all_files(repo,graph_uuid,user_uuid,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59077){
var state_val_59078 = (state_59077[(1)]);
if((state_val_59078 === (1))){
var inst_59007 = frontend.state.reset_file_sync_download_init_state_BANG_();
var inst_59009 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"finished","finished",-1018867731),new cljs.core.Keyword(null,"downloading?","downloading?",38673093)];
var inst_59010 = [NaN,(0),true];
var inst_59011 = cljs.core.PersistentHashMap.fromArrays(inst_59009,inst_59010);
var inst_59012 = frontend.state.set_file_sync_download_init_state_BANG_(inst_59011);
var inst_59015 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,graph_uuid);
var state_59077__$1 = (function (){var statearr_59079 = state_59077;
(statearr_59079[(7)] = inst_59007);

(statearr_59079[(8)] = inst_59012);

return statearr_59079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59077__$1,(2),inst_59015);
} else {
if((state_val_59078 === (2))){
var inst_59017 = (state_59077[(2)]);
var inst_59018 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,graph_uuid,base_path);
var state_59077__$1 = (function (){var statearr_59080 = state_59077;
(statearr_59080[(9)] = inst_59017);

return statearr_59080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59077__$1,(3),inst_59018);
} else {
if((state_val_59078 === (3))){
var inst_59017 = (state_59077[(9)]);
var inst_59020 = (state_59077[(10)]);
var inst_59020__$1 = (state_59077[(2)]);
var inst_59021 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_59017,inst_59020__$1);
var inst_59022 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,graph_uuid);
var state_59077__$1 = (function (){var statearr_59081 = state_59077;
(statearr_59081[(10)] = inst_59020__$1);

(statearr_59081[(11)] = inst_59021);

return statearr_59081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59077__$1,(4),inst_59022);
} else {
if((state_val_59078 === (4))){
var inst_59017 = (state_59077[(9)]);
var inst_59020 = (state_59077[(10)]);
var inst_59021 = (state_59077[(11)]);
var inst_59025 = (state_59077[(12)]);
var inst_59024 = (state_59077[(2)]);
var inst_59025__$1 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_59024);
var inst_59050 = frontend.fs.sync.filepaths__GT_partitioned_filetxns((10),graph_uuid,user_uuid);
var inst_59051 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_59021);
var inst_59052 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_59050,inst_59051);
var inst_59053 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"finished","finished",-1018867731)];
var inst_59054 = cljs.core.count(inst_59021);
var inst_59055 = [inst_59054,(0)];
var inst_59057 = cljs.core.PersistentHashMap.fromArrays(inst_59053,inst_59055);
var inst_59058 = frontend.state.set_file_sync_download_init_state_BANG_(inst_59057);
var inst_59059 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var inst_59060 = (function (){var remote_all_files_meta = inst_59017;
var local_all_files_meta = inst_59020;
var diff_remote_files = inst_59021;
var latest_txid = inst_59025__$1;
var partitioned_filetxns = inst_59052;
return (function (filetxns){
return frontend.state.set_file_sync_download_init_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"downloading-files","downloading-files",1777262232),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,filetxns)], null));
});
})();
var inst_59061 = (function (){var remote_all_files_meta = inst_59017;
var local_all_files_meta = inst_59020;
var diff_remote_files = inst_59021;
var latest_txid = inst_59025__$1;
var partitioned_filetxns = inst_59052;
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
var inst_59062 = frontend.fs.sync.apply_filetxns_partitions(null,user_uuid,graph_uuid,base_path,inst_59052,repo,null,inst_59059,inst_59060,inst_59061);
var state_59077__$1 = (function (){var statearr_59093 = state_59077;
(statearr_59093[(13)] = inst_59058);

(statearr_59093[(12)] = inst_59025__$1);

return statearr_59093;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59077__$1,(5),inst_59062);
} else {
if((state_val_59078 === (5))){
var inst_59064 = (state_59077[(14)]);
var inst_59064__$1 = (state_59077[(2)]);
var inst_59066 = (inst_59064__$1 instanceof cljs.core.ExceptionInfo);
var state_59077__$1 = (function (){var statearr_59094 = state_59077;
(statearr_59094[(14)] = inst_59064__$1);

return statearr_59094;
})();
if(cljs.core.truth_(inst_59066)){
var statearr_59095_59375 = state_59077__$1;
(statearr_59095_59375[(1)] = (6));

} else {
var statearr_59096_59376 = state_59077__$1;
(statearr_59096_59376[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (6))){
var inst_59064 = (state_59077[(14)]);
var inst_59068 = cljs.core.ex_cause(inst_59064);
var inst_59069 = ["Download graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59068)].join('');
var inst_59070 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59069,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_59077__$1 = state_59077;
var statearr_59097_59378 = state_59077__$1;
(statearr_59097_59378[(2)] = inst_59070);

(statearr_59097_59378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (7))){
var inst_59025 = (state_59077[(12)]);
var inst_59072 = frontend.state.reset_file_sync_download_init_state_BANG_();
var inst_59073 = frontend.fs.sync.update_graphs_txid_BANG_(inst_59025,graph_uuid,user_uuid,repo);
var state_59077__$1 = (function (){var statearr_59098 = state_59077;
(statearr_59098[(15)] = inst_59072);

return statearr_59098;
})();
var statearr_59099_59379 = state_59077__$1;
(statearr_59099_59379[(2)] = inst_59073);

(statearr_59099_59379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (8))){
var inst_59075 = (state_59077[(2)]);
var state_59077__$1 = state_59077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59077__$1,inst_59075);
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
var statearr_59100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59100[(0)] = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__);

(statearr_59100[(1)] = (1));

return statearr_59100;
});
var frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1 = (function (state_59077){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59077);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59101){var ex__27576__auto__ = e59101;
var statearr_59102_59381 = state_59077;
(statearr_59102_59381[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59077[(4)]))){
var statearr_59103_59382 = state_59077;
(statearr_59103_59382[(1)] = cljs.core.first((state_59077[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59383 = state_59077;
state_59077 = G__59383;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__ = function(state_59077){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1.call(this,state_59077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____0;
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59105 = f__27596__auto__();
(statearr_59105[(6)] = c__27595__auto__);

return statearr_59105;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59155){
var state_val_59156 = (state_59155[(1)]);
if((state_val_59156 === (1))){
var inst_59119 = (state_59155[(7)]);
var inst_59119__$1 = module$node_modules$path$path.join("version-files",file_uuid,version_uuid);
var inst_59120 = frontend.state.get_current_repo();
var inst_59121 = frontend.config.get_repo_dir(inst_59120);
var inst_59122 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59123 = [inst_59119__$1];
var inst_59124 = (new cljs.core.PersistentVector(null,1,(5),inst_59122,inst_59123,null));
var inst_59125 = frontend.fs.sync.update_local_files(frontend.fs.sync.rsapi,graph_uuid,inst_59121,inst_59124);
var state_59155__$1 = (function (){var statearr_59164 = state_59155;
(statearr_59164[(7)] = inst_59119__$1);

return statearr_59164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59155__$1,(2),inst_59125);
} else {
if((state_val_59156 === (2))){
var inst_59127 = (state_59155[(8)]);
var inst_59127__$1 = (state_59155[(2)]);
var inst_59128 = (inst_59127__$1 instanceof cljs.core.ExceptionInfo);
var state_59155__$1 = (function (){var statearr_59167 = state_59155;
(statearr_59167[(8)] = inst_59127__$1);

return statearr_59167;
})();
if(cljs.core.truth_(inst_59128)){
var statearr_59168_59384 = state_59155__$1;
(statearr_59168_59384[(1)] = (3));

} else {
var statearr_59170_59385 = state_59155__$1;
(statearr_59170_59385[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59156 === (3))){
var inst_59127 = (state_59155[(8)]);
var inst_59132 = cljs.core.ex_cause(inst_59127);
var inst_59135 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59132,new cljs.core.Keyword(null,"error","error",-978969032));
var state_59155__$1 = state_59155;
var statearr_59171_59386 = state_59155__$1;
(statearr_59171_59386[(2)] = inst_59135);

(statearr_59171_59386[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59156 === (4))){
var inst_59119 = (state_59155[(7)]);
var inst_59137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59139 = [new cljs.core.Keyword(null,"div","div",1057191632),"Downloaded version file at: "];
var inst_59140 = (new cljs.core.PersistentVector(null,2,(5),inst_59138,inst_59139,null));
var inst_59141 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59142 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_59119];
var inst_59143 = (new cljs.core.PersistentVector(null,2,(5),inst_59141,inst_59142,null));
var inst_59144 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_59140,inst_59143];
var inst_59145 = (new cljs.core.PersistentVector(null,3,(5),inst_59137,inst_59144,null));
var inst_59146 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59145,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_59155__$1 = state_59155;
var statearr_59172_59387 = state_59155__$1;
(statearr_59172_59387[(2)] = inst_59146);

(statearr_59172_59387[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59156 === (5))){
var inst_59127 = (state_59155[(8)]);
var inst_59148 = (state_59155[(2)]);
var inst_59149 = (inst_59127 instanceof cljs.core.ExceptionInfo);
var state_59155__$1 = (function (){var statearr_59174 = state_59155;
(statearr_59174[(9)] = inst_59148);

return statearr_59174;
})();
if(cljs.core.truth_(inst_59149)){
var statearr_59175_59388 = state_59155__$1;
(statearr_59175_59388[(1)] = (6));

} else {
var statearr_59176_59389 = state_59155__$1;
(statearr_59176_59389[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59156 === (6))){
var state_59155__$1 = state_59155;
var statearr_59179_59390 = state_59155__$1;
(statearr_59179_59390[(2)] = null);

(statearr_59179_59390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59156 === (7))){
var inst_59119 = (state_59155[(7)]);
var state_59155__$1 = state_59155;
var statearr_59180_59391 = state_59155__$1;
(statearr_59180_59391[(2)] = inst_59119);

(statearr_59180_59391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59156 === (8))){
var inst_59153 = (state_59155[(2)]);
var state_59155__$1 = state_59155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59155__$1,inst_59153);
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
var statearr_59181 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59181[(0)] = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__);

(statearr_59181[(1)] = (1));

return statearr_59181;
});
var frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1 = (function (state_59155){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59155);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59182){var ex__27576__auto__ = e59182;
var statearr_59183_59393 = state_59155;
(statearr_59183_59393[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59155[(4)]))){
var statearr_59184_59394 = state_59155;
(statearr_59184_59394[(1)] = cljs.core.first((state_59155[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59395 = state_59155;
state_59155 = G__59395;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__ = function(state_59155){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1.call(this,state_59155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____0;
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59185 = f__27596__auto__();
(statearr_59185[(6)] = c__27595__auto__);

return statearr_59185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.list_file_local_versions = (function frontend$handler$file_sync$list_file_local_versions(page){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59224){
var state_val_59225 = (state_59224[(1)]);
if((state_val_59225 === (7))){
var inst_59189 = (state_59224[(7)]);
var inst_59193 = (state_59224[(8)]);
var inst_59200 = (state_59224[(9)]);
var inst_59204 = (state_59224[(10)]);
var inst_59192 = (state_59224[(11)]);
var inst_59208 = (function (){var temp__5720__auto__ = inst_59189;
var path = inst_59189;
var base_path = inst_59192;
var rel_path = inst_59193;
var version_files_dir = inst_59200;
var version_file_paths_STAR_ = inst_59204;
return (function (dir_or_file){
return cljs.core.seq(new cljs.core.Keyword(null,"ext","ext",-996964541).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$path$path.parse(dir_or_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
});
})();
var inst_59209 = frontend.fs.readdir(inst_59200);
var inst_59210 = cljs.core.async.interop.p__GT_c(inst_59209);
var state_59224__$1 = (function (){var statearr_59226 = state_59224;
(statearr_59226[(12)] = inst_59208);

return statearr_59226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59224__$1,(9),inst_59210);
} else {
if((state_val_59225 === (1))){
var inst_59189 = (state_59224[(7)]);
var inst_59188 = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
var inst_59189__$1 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(inst_59188);
var state_59224__$1 = (function (){var statearr_59227 = state_59224;
(statearr_59227[(7)] = inst_59189__$1);

return statearr_59227;
})();
if(cljs.core.truth_(inst_59189__$1)){
var statearr_59228_59396 = state_59224__$1;
(statearr_59228_59396[(1)] = (2));

} else {
var statearr_59229_59397 = state_59224__$1;
(statearr_59229_59397[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59225 === (4))){
var inst_59222 = (state_59224[(2)]);
var state_59224__$1 = state_59224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59224__$1,inst_59222);
} else {
if((state_val_59225 === (6))){
var state_59224__$1 = state_59224;
var statearr_59230_59398 = state_59224__$1;
(statearr_59230_59398[(2)] = null);

(statearr_59230_59398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59225 === (3))){
var state_59224__$1 = state_59224;
var statearr_59231_59403 = state_59224__$1;
(statearr_59231_59403[(2)] = null);

(statearr_59231_59403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59225 === (2))){
var inst_59189 = (state_59224[(7)]);
var inst_59193 = (state_59224[(8)]);
var inst_59200 = (state_59224[(9)]);
var inst_59192 = (state_59224[(11)]);
var inst_59191 = frontend.state.get_current_repo();
var inst_59192__$1 = frontend.config.get_repo_dir(inst_59191);
var inst_59193__$1 = clojure.string.replace_first(inst_59189,inst_59192__$1,"");
var inst_59194 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"name","name",1843675177));
var inst_59195 = (function (){var temp__5720__auto__ = inst_59189;
var path = inst_59189;
var base_path = inst_59192__$1;
var rel_path = inst_59193__$1;
return (function (p1__59186_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__59186_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
})();
var inst_59196 = module$node_modules$path$path.join("version-files/local",inst_59193__$1);
var inst_59197 = module$node_modules$path$path.parse(inst_59196);
var inst_59198 = inst_59195(inst_59197);
var inst_59199 = inst_59194(inst_59198);
var inst_59200__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$path$path.join,inst_59192__$1,inst_59199);
var inst_59201 = frontend.fs.readdir(inst_59200__$1);
var inst_59202 = cljs.core.async.interop.p__GT_c(inst_59201);
var state_59224__$1 = (function (){var statearr_59232 = state_59224;
(statearr_59232[(8)] = inst_59193__$1);

(statearr_59232[(9)] = inst_59200__$1);

(statearr_59232[(11)] = inst_59192__$1);

return statearr_59232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59224__$1,(5),inst_59202);
} else {
if((state_val_59225 === (9))){
var inst_59189 = (state_59224[(7)]);
var inst_59208 = (state_59224[(12)]);
var inst_59193 = (state_59224[(8)]);
var inst_59200 = (state_59224[(9)]);
var inst_59204 = (state_59224[(10)]);
var inst_59192 = (state_59224[(11)]);
var inst_59212 = (state_59224[(2)]);
var inst_59213 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_59212);
var inst_59214 = cljs.core.filterv(inst_59208,inst_59213);
var inst_59215 = (function (){var temp__5720__auto__ = inst_59189;
var path = inst_59189;
var base_path = inst_59192;
var rel_path = inst_59193;
var version_files_dir = inst_59200;
var version_file_paths_STAR_ = inst_59204;
var version_file_paths = inst_59214;
return (function (path__$1){
var create_time = (function (p1__59187_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH_mm_ss.SSSZZ"),p1__59187_SHARP_);
})(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$path$path.parse(path__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create-time","create-time",875410581),create_time,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172),clojure.string.replace_first(path__$1,base_path,"")], null);
});
})();
var inst_59216 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_59215,inst_59214);
var state_59224__$1 = state_59224;
var statearr_59235_59404 = state_59224__$1;
(statearr_59235_59404[(2)] = inst_59216);

(statearr_59235_59404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59225 === (5))){
var inst_59204 = (state_59224[(10)]);
var inst_59204__$1 = (state_59224[(2)]);
var inst_59205 = (inst_59204__$1 instanceof cljs.core.ExceptionInfo);
var state_59224__$1 = (function (){var statearr_59236 = state_59224;
(statearr_59236[(10)] = inst_59204__$1);

return statearr_59236;
})();
if(cljs.core.truth_(inst_59205)){
var statearr_59237_59405 = state_59224__$1;
(statearr_59237_59405[(1)] = (6));

} else {
var statearr_59238_59406 = state_59224__$1;
(statearr_59238_59406[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59225 === (8))){
var inst_59218 = (state_59224[(2)]);
var state_59224__$1 = state_59224;
var statearr_59239_59407 = state_59224__$1;
(statearr_59239_59407[(2)] = inst_59218);

(statearr_59239_59407[(1)] = (4));


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
var statearr_59240 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59240[(0)] = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__);

(statearr_59240[(1)] = (1));

return statearr_59240;
});
var frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1 = (function (state_59224){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59224);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59241){var ex__27576__auto__ = e59241;
var statearr_59242_59408 = state_59224;
(statearr_59242_59408[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59224[(4)]))){
var statearr_59243_59409 = state_59224;
(statearr_59243_59409[(1)] = cljs.core.first((state_59224[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59411 = state_59224;
state_59224 = G__59411;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__ = function(state_59224){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1.call(this,state_59224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59244 = f__27596__auto__();
(statearr_59244[(6)] = c__27595__auto__);

return statearr_59244;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59273){
var state_val_59274 = (state_59273[(1)]);
if((state_val_59274 === (1))){
var inst_59246 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3(null,graph_uuid,path_STAR_);
var state_59273__$1 = state_59273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59273__$1,(2),inst_59246);
} else {
if((state_val_59274 === (2))){
var inst_59248 = (state_59273[(2)]);
var inst_59249 = new cljs.core.Keyword(null,"VersionList","VersionList",-1189454538).cljs$core$IFn$_invoke$arity$1(inst_59248);
var inst_59250 = frontend.handler.file_sync.list_file_local_versions(page);
var state_59273__$1 = (function (){var statearr_59276 = state_59273;
(statearr_59276[(7)] = inst_59249);

return statearr_59276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59273__$1,(3),inst_59250);
} else {
if((state_val_59274 === (3))){
var inst_59249 = (state_59273[(7)]);
var inst_59252 = (state_59273[(2)]);
var inst_59253 = (function (){var version_list = inst_59249;
var local_version_list = inst_59252;
return (function (p1__59245_SHARP_){
var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(p1__59245_SHARP_));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(p1__59245_SHARP_);
}
});
})();
var inst_59254 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_59249,inst_59252);
var inst_59255 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(inst_59253,cljs.core._GT_,inst_59254);
var inst_59256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59257 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59258 = [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"File history - ",path_STAR_];
var inst_59259 = (new cljs.core.PersistentVector(null,3,(5),inst_59257,inst_59258,null));
var inst_59260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59261 = [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)];
var inst_59262 = (new cljs.core.PersistentVector(null,1,(5),inst_59260,inst_59261,null));
var inst_59267 = (function (){var version_list = inst_59249;
var local_version_list = inst_59252;
var all_version_list = inst_59255;
return (function frontend$handler$file_sync$list_file_versions_$_iter__59263(s__59264){
return (new cljs.core.LazySeq(null,(function (){
var s__59264__$1 = s__59264;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__59264__$1);
if(temp__5720__auto____$1){
var s__59264__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59264__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__59264__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__59266 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__59265 = (0);
while(true){
if((i__59265 < size__5519__auto__)){
var version = cljs.core._nth(c__5518__auto__,i__59265);
cljs.core.chunk_append(b__59266,(function (){var version_uuid = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version);
}
})();
var local_QMARK_ = (!((new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version) == null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__59265,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59266,s__59264__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59249,inst_59252,inst_59253,inst_59254,inst_59255,inst_59256,inst_59257,inst_59258,inst_59259,inst_59260,inst_59261,inst_59262,state_val_59274,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
if(local_QMARK_){
return window.apis.openPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(version));
} else {
var c__27595__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (i__59265,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59266,s__59264__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59249,inst_59252,inst_59253,inst_59254,inst_59255,inst_59256,inst_59257,inst_59258,inst_59259,inst_59260,inst_59261,inst_59262,state_val_59274,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = ((function (i__59265,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59266,s__59264__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59249,inst_59252,inst_59253,inst_59254,inst_59255,inst_59256,inst_59257,inst_59258,inst_59259,inst_59260,inst_59261,inst_59262,state_val_59274,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (state_59290){
var state_val_59291 = (state_59290[(1)]);
if((state_val_59291 === (1))){
var inst_59282 = new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version);
var inst_59283 = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
var inst_59284 = frontend.handler.file_sync.download_version_file(graph_uuid,inst_59282,inst_59283);
var state_59290__$1 = state_59290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59290__$1,(2),inst_59284);
} else {
if((state_val_59291 === (2))){
var inst_59286 = (state_59290[(2)]);
var inst_59287 = module$node_modules$path$path.join(base_path,inst_59286);
var inst_59288 = window.apis.openPath(inst_59287);
var state_59290__$1 = state_59290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59290__$1,inst_59288);
} else {
return null;
}
}
});})(i__59265,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59266,s__59264__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59249,inst_59252,inst_59253,inst_59254,inst_59255,inst_59256,inst_59257,inst_59258,inst_59259,inst_59260,inst_59261,inst_59262,state_val_59274,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
;
return ((function (i__59265,switch__27572__auto__,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59266,s__59264__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59249,inst_59252,inst_59253,inst_59254,inst_59255,inst_59256,inst_59257,inst_59258,inst_59259,inst_59260,inst_59261,inst_59262,state_val_59274,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function() {
var frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____0 = (function (){
var statearr_59296 = [null,null,null,null,null,null,null];
(statearr_59296[(0)] = frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__);

(statearr_59296[(1)] = (1));

return statearr_59296;
});
var frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____1 = (function (state_59290){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59290);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59297){var ex__27576__auto__ = e59297;
var statearr_59298_59418 = state_59290;
(statearr_59298_59418[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59290[(4)]))){
var statearr_59299_59419 = state_59290;
(statearr_59299_59419[(1)] = cljs.core.first((state_59290[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59420 = state_59290;
state_59290 = G__59420;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__ = function(state_59290){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____1.call(this,state_59290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__;
})()
;})(i__59265,switch__27572__auto__,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59266,s__59264__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59249,inst_59252,inst_59253,inst_59254,inst_59255,inst_59256,inst_59257,inst_59258,inst_59259,inst_59260,inst_59261,inst_59262,state_val_59274,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
})();
var state__27597__auto__ = (function (){var statearr_59300 = f__27596__auto__();
(statearr_59300[(6)] = c__27595__auto____$1);

return statearr_59300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
});})(i__59265,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59266,s__59264__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59249,inst_59252,inst_59253,inst_59254,inst_59255,inst_59256,inst_59257,inst_59258,inst_59259,inst_59260,inst_59261,inst_59262,state_val_59274,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
);

return c__27595__auto____$1;
}
});})(i__59265,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__59266,s__59264__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59249,inst_59252,inst_59253,inst_59254,inst_59255,inst_59256,inst_59257,inst_59258,inst_59259,inst_59260,inst_59261,inst_59262,state_val_59274,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),((local_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago((function (){var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(version);
}
})())], null)], null);
})());

var G__59421 = (i__59265 + (1));
i__59265 = G__59421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59266),frontend$handler$file_sync$list_file_versions_$_iter__59263(cljs.core.chunk_rest(s__59264__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59266),null);
}
} else {
var version = cljs.core.first(s__59264__$2);
return cljs.core.cons((function (){var version_uuid = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version);
}
})();
var local_QMARK_ = (!((new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version) == null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (version_uuid,local_QMARK_,version,s__59264__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59249,inst_59252,inst_59253,inst_59254,inst_59255,inst_59256,inst_59257,inst_59258,inst_59259,inst_59260,inst_59261,inst_59262,state_val_59274,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
if(local_QMARK_){
return window.apis.openPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(version));
} else {
var c__27595__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_59309){
var state_val_59310 = (state_59309[(1)]);
if((state_val_59310 === (1))){
var inst_59301 = new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version);
var inst_59302 = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
var inst_59303 = frontend.handler.file_sync.download_version_file(graph_uuid,inst_59301,inst_59302);
var state_59309__$1 = state_59309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59309__$1,(2),inst_59303);
} else {
if((state_val_59310 === (2))){
var inst_59305 = (state_59309[(2)]);
var inst_59306 = module$node_modules$path$path.join(base_path,inst_59305);
var inst_59307 = window.apis.openPath(inst_59306);
var state_59309__$1 = state_59309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59309__$1,inst_59307);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____0 = (function (){
var statearr_59313 = [null,null,null,null,null,null,null];
(statearr_59313[(0)] = frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__);

(statearr_59313[(1)] = (1));

return statearr_59313;
});
var frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____1 = (function (state_59309){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59309);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59314){var ex__27576__auto__ = e59314;
var statearr_59315_59423 = state_59309;
(statearr_59315_59423[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59309[(4)]))){
var statearr_59319_59424 = state_59309;
(statearr_59319_59424[(1)] = cljs.core.first((state_59309[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59425 = state_59309;
state_59309 = G__59425;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__ = function(state_59309){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____1.call(this,state_59309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_iter__59263_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59320 = f__27596__auto__();
(statearr_59320[(6)] = c__27595__auto____$1);

return statearr_59320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto____$1;
}
});})(version_uuid,local_QMARK_,version,s__59264__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_59249,inst_59252,inst_59253,inst_59254,inst_59255,inst_59256,inst_59257,inst_59258,inst_59259,inst_59260,inst_59261,inst_59262,state_val_59274,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),((local_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago((function (){var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(version);
}
})())], null)], null);
})(),frontend$handler$file_sync$list_file_versions_$_iter__59263(cljs.core.rest(s__59264__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
})();
var inst_59268 = inst_59267(inst_59255);
var inst_59269 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_59259,inst_59262,inst_59268];
var inst_59270 = (new cljs.core.PersistentVector(null,4,(5),inst_59256,inst_59269,null));
var inst_59271 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59270,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_59273__$1 = state_59273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59273__$1,inst_59271);
} else {
return null;
}
}
}
});
return (function() {
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0 = (function (){
var statearr_59325 = [null,null,null,null,null,null,null,null];
(statearr_59325[(0)] = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__);

(statearr_59325[(1)] = (1));

return statearr_59325;
});
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1 = (function (state_59273){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_59273);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e59326){var ex__27576__auto__ = e59326;
var statearr_59327_59426 = state_59273;
(statearr_59327_59426[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_59273[(4)]))){
var statearr_59331_59427 = state_59273;
(statearr_59331_59427[(1)] = cljs.core.first((state_59273[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59428 = state_59273;
state_59273 = G__59428;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__ = function(state_59273){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1.call(this,state_59273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_59332 = f__27596__auto__();
(statearr_59332[(6)] = c__27595__auto__);

return statearr_59332;
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
