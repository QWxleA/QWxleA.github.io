goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__44769,res){
var map__44771 = p__44769;
var map__44771__$1 = cljs.core.__destructure_map(map__44771);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44771__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44771__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__44772 = res;
var G__44772__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44772,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__44772);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44772__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__44772__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__44780 = arguments.length;
switch (G__44780) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__44784,msg,handlers,timeout_after_ms){
var map__44785 = p__44784;
var map__44785__$1 = cljs.core.__destructure_map(map__44785);
var runtime = map__44785__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44785__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45119 = arguments.length;
var i__5767__auto___45120 = (0);
while(true){
if((i__5767__auto___45120 < len__5766__auto___45119)){
args__5772__auto__.push((arguments[i__5767__auto___45120]));

var G__45121 = (i__5767__auto___45120 + (1));
i__5767__auto___45120 = G__45121;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__44792,ev,args){
var map__44793 = p__44792;
var map__44793__$1 = cljs.core.__destructure_map(map__44793);
var runtime = map__44793__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44793__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__44794 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__44797 = null;
var count__44798 = (0);
var i__44799 = (0);
while(true){
if((i__44799 < count__44798)){
var ext = chunk__44797.cljs$core$IIndexed$_nth$arity$2(null,i__44799);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45125 = seq__44794;
var G__45126 = chunk__44797;
var G__45127 = count__44798;
var G__45128 = (i__44799 + (1));
seq__44794 = G__45125;
chunk__44797 = G__45126;
count__44798 = G__45127;
i__44799 = G__45128;
continue;
} else {
var G__45129 = seq__44794;
var G__45130 = chunk__44797;
var G__45131 = count__44798;
var G__45132 = (i__44799 + (1));
seq__44794 = G__45129;
chunk__44797 = G__45130;
count__44798 = G__45131;
i__44799 = G__45132;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__44794);
if(temp__5720__auto__){
var seq__44794__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44794__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__44794__$1);
var G__45134 = cljs.core.chunk_rest(seq__44794__$1);
var G__45135 = c__5565__auto__;
var G__45136 = cljs.core.count(c__5565__auto__);
var G__45137 = (0);
seq__44794 = G__45134;
chunk__44797 = G__45135;
count__44798 = G__45136;
i__44799 = G__45137;
continue;
} else {
var ext = cljs.core.first(seq__44794__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45139 = cljs.core.next(seq__44794__$1);
var G__45140 = null;
var G__45141 = (0);
var G__45142 = (0);
seq__44794 = G__45139;
chunk__44797 = G__45140;
count__44798 = G__45141;
i__44799 = G__45142;
continue;
} else {
var G__45143 = cljs.core.next(seq__44794__$1);
var G__45144 = null;
var G__45145 = (0);
var G__45146 = (0);
seq__44794 = G__45143;
chunk__44797 = G__45144;
count__44798 = G__45145;
i__44799 = G__45146;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq44789){
var G__44790 = cljs.core.first(seq44789);
var seq44789__$1 = cljs.core.next(seq44789);
var G__44791 = cljs.core.first(seq44789__$1);
var seq44789__$2 = cljs.core.next(seq44789__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44790,G__44791,seq44789__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__44909,p__44910){
var map__44918 = p__44909;
var map__44918__$1 = cljs.core.__destructure_map(map__44918);
var runtime = map__44918__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44918__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__44924 = p__44910;
var map__44924__$1 = cljs.core.__destructure_map(map__44924);
var msg = map__44924__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44924__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__44943 = cljs.core.deref(state_ref);
var map__44943__$1 = cljs.core.__destructure_map(map__44943);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44943__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44943__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__44947){
var map__44948 = p__44947;
var map__44948__$1 = cljs.core.__destructure_map(map__44948);
var runtime = map__44948__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44948__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__44952,msg){
var map__44953 = p__44952;
var map__44953__$1 = cljs.core.__destructure_map(map__44953);
var runtime = map__44953__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44953__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__44981,key,p__44982){
var map__44983 = p__44981;
var map__44983__$1 = cljs.core.__destructure_map(map__44983);
var state = map__44983__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44983__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__44985 = p__44982;
var map__44985__$1 = cljs.core.__destructure_map(map__44985);
var spec = map__44985__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44985__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__44988,key,spec){
var map__44989 = p__44988;
var map__44989__$1 = cljs.core.__destructure_map(map__44989);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44989__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__44995_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__44995_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__44996_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__44996_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__44997_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__44997_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__44998_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__44998_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__44999_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__44999_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__45020,key){
var map__45025 = p__45020;
var map__45025__$1 = cljs.core.__destructure_map(map__45025);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45025__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__45031,msg){
var map__45032 = p__45031;
var map__45032__$1 = cljs.core.__destructure_map(map__45032);
var runtime = map__45032__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45032__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__45060,p__45061){
var map__45063 = p__45060;
var map__45063__$1 = cljs.core.__destructure_map(map__45063);
var runtime = map__45063__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45063__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45065 = p__45061;
var map__45065__$1 = cljs.core.__destructure_map(map__45065);
var msg = map__45065__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45065__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45065__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__45080 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45082 = null;
var count__45083 = (0);
var i__45084 = (0);
while(true){
if((i__45084 < count__45083)){
var map__45091 = chunk__45082.cljs$core$IIndexed$_nth$arity$2(null,i__45084);
var map__45091__$1 = cljs.core.__destructure_map(map__45091);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45091__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45159 = seq__45080;
var G__45160 = chunk__45082;
var G__45161 = count__45083;
var G__45162 = (i__45084 + (1));
seq__45080 = G__45159;
chunk__45082 = G__45160;
count__45083 = G__45161;
i__45084 = G__45162;
continue;
} else {
var G__45163 = seq__45080;
var G__45164 = chunk__45082;
var G__45165 = count__45083;
var G__45166 = (i__45084 + (1));
seq__45080 = G__45163;
chunk__45082 = G__45164;
count__45083 = G__45165;
i__45084 = G__45166;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__45080);
if(temp__5720__auto__){
var seq__45080__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45080__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45080__$1);
var G__45168 = cljs.core.chunk_rest(seq__45080__$1);
var G__45169 = c__5565__auto__;
var G__45170 = cljs.core.count(c__5565__auto__);
var G__45171 = (0);
seq__45080 = G__45168;
chunk__45082 = G__45169;
count__45083 = G__45170;
i__45084 = G__45171;
continue;
} else {
var map__45092 = cljs.core.first(seq__45080__$1);
var map__45092__$1 = cljs.core.__destructure_map(map__45092);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45092__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45172 = cljs.core.next(seq__45080__$1);
var G__45173 = null;
var G__45174 = (0);
var G__45175 = (0);
seq__45080 = G__45172;
chunk__45082 = G__45173;
count__45083 = G__45174;
i__45084 = G__45175;
continue;
} else {
var G__45176 = cljs.core.next(seq__45080__$1);
var G__45177 = null;
var G__45178 = (0);
var G__45179 = (0);
seq__45080 = G__45176;
chunk__45082 = G__45177;
count__45083 = G__45178;
i__45084 = G__45179;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
