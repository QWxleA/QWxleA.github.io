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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__59313,res){
var map__59314 = p__59313;
var map__59314__$1 = cljs.core.__destructure_map(map__59314);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59314__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59314__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__59316 = res;
var G__59316__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59316,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__59316);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59316__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__59316__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__59318 = arguments.length;
switch (G__59318) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__59319,msg,handlers,timeout_after_ms){
var map__59320 = p__59319;
var map__59320__$1 = cljs.core.__destructure_map(map__59320);
var runtime = map__59320__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59320__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59500 = arguments.length;
var i__4865__auto___59501 = (0);
while(true){
if((i__4865__auto___59501 < len__4864__auto___59500)){
args__4870__auto__.push((arguments[i__4865__auto___59501]));

var G__59502 = (i__4865__auto___59501 + (1));
i__4865__auto___59501 = G__59502;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__59325,ev,args){
var map__59326 = p__59325;
var map__59326__$1 = cljs.core.__destructure_map(map__59326);
var runtime = map__59326__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59326__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__59327 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59330 = null;
var count__59331 = (0);
var i__59332 = (0);
while(true){
if((i__59332 < count__59331)){
var ext = chunk__59330.cljs$core$IIndexed$_nth$arity$2(null,i__59332);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__59503 = seq__59327;
var G__59504 = chunk__59330;
var G__59505 = count__59331;
var G__59506 = (i__59332 + (1));
seq__59327 = G__59503;
chunk__59330 = G__59504;
count__59331 = G__59505;
i__59332 = G__59506;
continue;
} else {
var G__59507 = seq__59327;
var G__59508 = chunk__59330;
var G__59509 = count__59331;
var G__59510 = (i__59332 + (1));
seq__59327 = G__59507;
chunk__59330 = G__59508;
count__59331 = G__59509;
i__59332 = G__59510;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59327);
if(temp__5720__auto__){
var seq__59327__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59327__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59327__$1);
var G__59511 = cljs.core.chunk_rest(seq__59327__$1);
var G__59512 = c__4679__auto__;
var G__59513 = cljs.core.count(c__4679__auto__);
var G__59514 = (0);
seq__59327 = G__59511;
chunk__59330 = G__59512;
count__59331 = G__59513;
i__59332 = G__59514;
continue;
} else {
var ext = cljs.core.first(seq__59327__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__59515 = cljs.core.next(seq__59327__$1);
var G__59516 = null;
var G__59517 = (0);
var G__59518 = (0);
seq__59327 = G__59515;
chunk__59330 = G__59516;
count__59331 = G__59517;
i__59332 = G__59518;
continue;
} else {
var G__59519 = cljs.core.next(seq__59327__$1);
var G__59520 = null;
var G__59521 = (0);
var G__59522 = (0);
seq__59327 = G__59519;
chunk__59330 = G__59520;
count__59331 = G__59521;
i__59332 = G__59522;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq59322){
var G__59323 = cljs.core.first(seq59322);
var seq59322__$1 = cljs.core.next(seq59322);
var G__59324 = cljs.core.first(seq59322__$1);
var seq59322__$2 = cljs.core.next(seq59322__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59323,G__59324,seq59322__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59339,p__59340){
var map__59341 = p__59339;
var map__59341__$1 = cljs.core.__destructure_map(map__59341);
var runtime = map__59341__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59341__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59342 = p__59340;
var map__59342__$1 = cljs.core.__destructure_map(map__59342);
var msg = map__59342__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59342__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__59344 = cljs.core.deref(state_ref);
var map__59344__$1 = cljs.core.__destructure_map(map__59344);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59344__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59344__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__59345){
var map__59346 = p__59345;
var map__59346__$1 = cljs.core.__destructure_map(map__59346);
var runtime = map__59346__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59346__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59357,msg){
var map__59360 = p__59357;
var map__59360__$1 = cljs.core.__destructure_map(map__59360);
var runtime = map__59360__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59360__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59420,key,p__59421){
var map__59423 = p__59420;
var map__59423__$1 = cljs.core.__destructure_map(map__59423);
var state = map__59423__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59423__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59424 = p__59421;
var map__59424__$1 = cljs.core.__destructure_map(map__59424);
var spec = map__59424__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59424__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59428,key,spec){
var map__59429 = p__59428;
var map__59429__$1 = cljs.core.__destructure_map(map__59429);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59429__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59433_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59433_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59434_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59434_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59435_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59435_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__59436_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__59436_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59437_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59437_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59447,key){
var map__59449 = p__59447;
var map__59449__$1 = cljs.core.__destructure_map(map__59449);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59449__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__59453,msg){
var map__59454 = p__59453;
var map__59454__$1 = cljs.core.__destructure_map(map__59454);
var runtime = map__59454__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59454__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59463,p__59464){
var map__59467 = p__59463;
var map__59467__$1 = cljs.core.__destructure_map(map__59467);
var runtime = map__59467__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59467__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59469 = p__59464;
var map__59469__$1 = cljs.core.__destructure_map(map__59469);
var msg = map__59469__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59469__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59469__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__59477 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59479 = null;
var count__59480 = (0);
var i__59481 = (0);
while(true){
if((i__59481 < count__59480)){
var map__59488 = chunk__59479.cljs$core$IIndexed$_nth$arity$2(null,i__59481);
var map__59488__$1 = cljs.core.__destructure_map(map__59488);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59558 = seq__59477;
var G__59559 = chunk__59479;
var G__59560 = count__59480;
var G__59561 = (i__59481 + (1));
seq__59477 = G__59558;
chunk__59479 = G__59559;
count__59480 = G__59560;
i__59481 = G__59561;
continue;
} else {
var G__59562 = seq__59477;
var G__59563 = chunk__59479;
var G__59564 = count__59480;
var G__59565 = (i__59481 + (1));
seq__59477 = G__59562;
chunk__59479 = G__59563;
count__59480 = G__59564;
i__59481 = G__59565;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59477);
if(temp__5720__auto__){
var seq__59477__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59477__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59477__$1);
var G__59566 = cljs.core.chunk_rest(seq__59477__$1);
var G__59567 = c__4679__auto__;
var G__59568 = cljs.core.count(c__4679__auto__);
var G__59569 = (0);
seq__59477 = G__59566;
chunk__59479 = G__59567;
count__59480 = G__59568;
i__59481 = G__59569;
continue;
} else {
var map__59490 = cljs.core.first(seq__59477__$1);
var map__59490__$1 = cljs.core.__destructure_map(map__59490);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59490__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59570 = cljs.core.next(seq__59477__$1);
var G__59571 = null;
var G__59572 = (0);
var G__59573 = (0);
seq__59477 = G__59570;
chunk__59479 = G__59571;
count__59480 = G__59572;
i__59481 = G__59573;
continue;
} else {
var G__59574 = cljs.core.next(seq__59477__$1);
var G__59575 = null;
var G__59576 = (0);
var G__59577 = (0);
seq__59477 = G__59574;
chunk__59479 = G__59575;
count__59480 = G__59576;
i__59481 = G__59577;
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
