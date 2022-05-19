goog.provide('frontend.mixins');
/**
 * Detach all event listeners.
 */
frontend.mixins.detach = (function frontend$mixins$detach(state){
var G__66254 = state;
var G__66254__$1 = (((G__66254 == null))?null:new cljs.core.Keyword("frontend.mixins","event-handler","frontend.mixins/event-handler",1780579383).cljs$core$IFn$_invoke$arity$1(G__66254));
if((G__66254__$1 == null)){
return null;
} else {
return G__66254__$1.removeAll();
}
});
/**
 * Register an event `handler` for events of `type` on `target`.
 */
frontend.mixins.listen = (function frontend$mixins$listen(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66315 = arguments.length;
var i__4865__auto___66316 = (0);
while(true){
if((i__4865__auto___66316 < len__4864__auto___66315)){
args__4870__auto__.push((arguments[i__4865__auto___66316]));

var G__66317 = (i__4865__auto___66316 + (1));
i__4865__auto___66316 = G__66317;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return frontend.mixins.listen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(frontend.mixins.listen.cljs$core$IFn$_invoke$arity$variadic = (function (state,target,type,handler,p__66262){
var vec__66263 = p__66262;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66263,(0),null);
var temp__5720__auto__ = new cljs.core.Keyword("frontend.mixins","event-handler","frontend.mixins/event-handler",1780579383).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto__)){
var event_handler = temp__5720__auto__;
return event_handler.listen(target,cljs.core.name(type),handler,cljs.core.clj__GT_js(opts));
} else {
return null;
}
}));

(frontend.mixins.listen.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(frontend.mixins.listen.cljs$lang$applyTo = (function (seq66255){
var G__66256 = cljs.core.first(seq66255);
var seq66255__$1 = cljs.core.next(seq66255);
var G__66257 = cljs.core.first(seq66255__$1);
var seq66255__$2 = cljs.core.next(seq66255__$1);
var G__66258 = cljs.core.first(seq66255__$2);
var seq66255__$3 = cljs.core.next(seq66255__$2);
var G__66259 = cljs.core.first(seq66255__$3);
var seq66255__$4 = cljs.core.next(seq66255__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66256,G__66257,G__66258,G__66259,seq66255__$4);
}));

/**
 * The event handler mixin.
 */
frontend.mixins.event_handler_mixin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.mixins","event-handler","frontend.mixins/event-handler",1780579383),(new goog.events.EventHandler()));
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.mixins.detach(state);

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.mixins","event-handler","frontend.mixins/event-handler",1780579383));
})], null);
frontend.mixins.hide_when_esc_or_outside = (function frontend$mixins$hide_when_esc_or_outside(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66318 = arguments.length;
var i__4865__auto___66319 = (0);
while(true){
if((i__4865__auto___66319 < len__4864__auto___66318)){
args__4870__auto__.push((arguments[i__4865__auto___66319]));

var G__66320 = (i__4865__auto___66319 + (1));
i__4865__auto___66319 = G__66320;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return frontend.mixins.hide_when_esc_or_outside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(frontend.mixins.hide_when_esc_or_outside.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__66272){
var map__66273 = p__66272;
var map__66273__$1 = cljs.core.__destructure_map(map__66273);
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66273__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66273__$1,new cljs.core.Keyword(null,"node","node",581201198));
var visibilitychange_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66273__$1,new cljs.core.Keyword(null,"visibilitychange?","visibilitychange?",994612206));
var outside_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66273__$1,new cljs.core.Keyword(null,"outside?","outside?",-1930213908));
try{var dom_node = rum.core.dom_node(state);
var temp__5720__auto__ = (function (){var or__4253__auto__ = node;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return dom_node;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var dom_node__$1 = temp__5720__auto__;
var or__4253__auto___66321 = outside_QMARK_ === false;
if(or__4253__auto___66321){
} else {
frontend.mixins.listen(state,window,"mousedown",(function (e){
var target = e.target;
if(((cljs.core.not(goog.dom.contains(dom_node__$1,target))) && (cljs.core.not(target.classList.contains("ignore-outside-event"))))){
return (on_hide.cljs$core$IFn$_invoke$arity$3 ? on_hide.cljs$core$IFn$_invoke$arity$3(state,e,new cljs.core.Keyword(null,"click","click",1912301393)) : on_hide.call(null,state,e,new cljs.core.Keyword(null,"click","click",1912301393)));
} else {
return null;
}
}));
}

frontend.mixins.listen(state,window,"keydown",(function (e){
var G__66276 = e.keyCode;
switch (G__66276) {
case (27):
return (on_hide.cljs$core$IFn$_invoke$arity$3 ? on_hide.cljs$core$IFn$_invoke$arity$3(state,e,new cljs.core.Keyword(null,"esc","esc",-1671924121)) : on_hide.call(null,state,e,new cljs.core.Keyword(null,"esc","esc",-1671924121)));

break;
default:
return null;

}
}));

if(cljs.core.truth_(visibilitychange_QMARK_)){
return frontend.mixins.listen(state,window,"visibilitychange",(function (e){
return (on_hide.cljs$core$IFn$_invoke$arity$3 ? on_hide.cljs$core$IFn$_invoke$arity$3(state,e,new cljs.core.Keyword(null,"visibilitychange","visibilitychange",-1648113311)) : on_hide.call(null,state,e,new cljs.core.Keyword(null,"visibilitychange","visibilitychange",-1648113311)));
}));
} else {
return null;
}
} else {
return null;
}
}catch (e66274){if((e66274 instanceof Error)){
var _e = e66274;
return null;
} else {
throw e66274;

}
}}));

(frontend.mixins.hide_when_esc_or_outside.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.mixins.hide_when_esc_or_outside.cljs$lang$applyTo = (function (seq66266){
var G__66267 = cljs.core.first(seq66266);
var seq66266__$1 = cljs.core.next(seq66266);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66267,seq66266__$1);
}));

frontend.mixins.on_enter = (function frontend$mixins$on_enter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66326 = arguments.length;
var i__4865__auto___66327 = (0);
while(true){
if((i__4865__auto___66327 < len__4864__auto___66326)){
args__4870__auto__.push((arguments[i__4865__auto___66327]));

var G__66328 = (i__4865__auto___66327 + (1));
i__4865__auto___66327 = G__66328;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return frontend.mixins.on_enter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(frontend.mixins.on_enter.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__66283){
var map__66284 = p__66283;
var map__66284__$1 = cljs.core.__destructure_map(map__66284);
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66284__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66284__$1,new cljs.core.Keyword(null,"node","node",581201198));
var node__$1 = (function (){var or__4253__auto__ = node;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return rum.core.dom_node(state);
}
})();
return frontend.mixins.listen(state,node__$1,"keyup",(function (e){
var G__66289 = e.keyCode;
switch (G__66289) {
case (13):
return (on_enter.cljs$core$IFn$_invoke$arity$1 ? on_enter.cljs$core$IFn$_invoke$arity$1(e) : on_enter.call(null,e));

break;
default:
return null;

}
}));
}));

(frontend.mixins.on_enter.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.mixins.on_enter.cljs$lang$applyTo = (function (seq66281){
var G__66282 = cljs.core.first(seq66281);
var seq66281__$1 = cljs.core.next(seq66281);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66282,seq66281__$1);
}));

frontend.mixins.on_key_up = (function frontend$mixins$on_key_up(state,keycode_map,all_handler){
return frontend.mixins.listen(state,window,"keyup",(function (e){
var key_code = e.keyCode;
var temp__5720__auto___66330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keycode_map,key_code);
if(cljs.core.truth_(temp__5720__auto___66330)){
var f_66331 = temp__5720__auto___66330;
(f_66331.cljs$core$IFn$_invoke$arity$2 ? f_66331.cljs$core$IFn$_invoke$arity$2(state,e) : f_66331.call(null,state,e));
} else {
}

if(cljs.core.truth_(all_handler)){
return (all_handler.cljs$core$IFn$_invoke$arity$2 ? all_handler.cljs$core$IFn$_invoke$arity$2(e,key_code) : all_handler.call(null,e,key_code));
} else {
return null;
}
}));
});
frontend.mixins.on_key_down = (function frontend$mixins$on_key_down(var_args){
var G__66297 = arguments.length;
switch (G__66297) {
case 2:
return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$2 = (function (state,keycode_map){
return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$3(state,keycode_map,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$3 = (function (state,keycode_map,p__66298){
var map__66299 = p__66298;
var map__66299__$1 = cljs.core.__destructure_map(map__66299);
var not_matched_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66299__$1,new cljs.core.Keyword(null,"not-matched-handler","not-matched-handler",1162926887));
var all_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66299__$1,new cljs.core.Keyword(null,"all-handler","all-handler",396726950));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66299__$1,new cljs.core.Keyword(null,"target","target",253001721));
return frontend.mixins.listen(state,(function (){var or__4253__auto__ = target;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return window;
}
})(),"keydown",(function (e){
var key_code = e.keyCode;
var temp__5718__auto___66333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keycode_map,key_code);
if(cljs.core.truth_(temp__5718__auto___66333)){
var f_66334 = temp__5718__auto___66333;
(f_66334.cljs$core$IFn$_invoke$arity$2 ? f_66334.cljs$core$IFn$_invoke$arity$2(state,e) : f_66334.call(null,state,e));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = not_matched_handler;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.fn_QMARK_(not_matched_handler);
} else {
return and__4251__auto__;
}
})())){
(not_matched_handler.cljs$core$IFn$_invoke$arity$2 ? not_matched_handler.cljs$core$IFn$_invoke$arity$2(e,key_code) : not_matched_handler.call(null,e,key_code));
} else {
}
}

if(cljs.core.truth_((function (){var and__4251__auto__ = all_handler;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.fn_QMARK_(all_handler);
} else {
return and__4251__auto__;
}
})())){
return (all_handler.cljs$core$IFn$_invoke$arity$2 ? all_handler.cljs$core$IFn$_invoke$arity$2(e,key_code) : all_handler.call(null,e,key_code));
} else {
return null;
}
}));
}));

(frontend.mixins.on_key_down.cljs$lang$maxFixedArity = 3);

frontend.mixins.event_mixin = (function frontend$mixins$event_mixin(var_args){
var G__66305 = arguments.length;
switch (G__66305) {
case 1:
return frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1 = (function (attach_listeners){
return frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$2(attach_listeners,cljs.core.identity);
}));

(frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$2 = (function (attach_listeners,init_callback){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.mixins.event_handler_mixin,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,_props){
return (init_callback.cljs$core$IFn$_invoke$arity$1 ? init_callback.cljs$core$IFn$_invoke$arity$1(state) : init_callback.call(null,state));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
(attach_listeners.cljs$core$IFn$_invoke$arity$1 ? attach_listeners.cljs$core$IFn$_invoke$arity$1(state) : attach_listeners.call(null,state));

return state;
}),new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),(function (old_state,new_state){
frontend.mixins.detach(old_state);

(attach_listeners.cljs$core$IFn$_invoke$arity$1 ? attach_listeners.cljs$core$IFn$_invoke$arity$1(new_state) : attach_listeners.call(null,new_state));

return new_state;
})], null)], 0));
}));

(frontend.mixins.event_mixin.cljs$lang$maxFixedArity = 2);

frontend.mixins.modal = (function frontend$mixins$modal(k){
return frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$2((function (state){
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,k);
return frontend.mixins.hide_when_esc_or_outside.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
if(cljs.core.truth_((function (){var and__4251__auto__ = open_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(open_QMARK_);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.reset_BANG_(open_QMARK_,false);
} else {
return null;
}
})], 0));
}),(function (state){
var open_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(open_QMARK_,new cljs.core.Keyword("frontend.mixins","open","frontend.mixins/open",396960498),(function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"open?","open?",1238443125),open_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),(function (){
return cljs.core.reset_BANG_(open_QMARK_,false);
}),new cljs.core.Keyword(null,"open-fn","open-fn",1265855718),(function (){
return cljs.core.reset_BANG_(open_QMARK_,true);
}),new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
})], 0));
}));
});
frontend.mixins.component_editing_mode = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
frontend.state.set_block_component_editing_mode_BANG_(true);

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.set_block_component_editing_mode_BANG_(false);

return state;
})], null);
/**
 * Does performance measurements in development.
 */
frontend.mixins.perf_measure_mixin = (function frontend$mixins$perf_measure_mixin(desc){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function frontend$mixins$perf_measure_mixin_$_wrap_render(render_fn){
return (function (state){
if(cljs.core.truth_(goog.DEBUG)){
var k__44567__auto__ = ["Render ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desc)].join('');
console.time(k__44567__auto__);

var res__44568__auto__ = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
console.timeEnd(k__44567__auto__);

return res__44568__auto__;
} else {
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
}
});
})], null);
});

//# sourceMappingURL=frontend.mixins.js.map
