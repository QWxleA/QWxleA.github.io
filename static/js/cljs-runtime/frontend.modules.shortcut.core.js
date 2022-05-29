goog.provide('frontend.modules.shortcut.core');
frontend.modules.shortcut.core._STAR_installed = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.modules.shortcut.core._STAR_inited_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.modules.shortcut.core._STAR_pending = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
frontend.modules.shortcut.core.global_keys = [goog.events.KeyCodes.TAB,goog.events.KeyCodes.ENTER,goog.events.KeyCodes.BACKSPACE,goog.events.KeyCodes.DELETE,goog.events.KeyCodes.UP,goog.events.KeyCodes.LEFT,goog.events.KeyCodes.DOWN,goog.events.KeyCodes.RIGHT];
frontend.modules.shortcut.core.key_names = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.KeyNames);
frontend.modules.shortcut.core.consume_pending_shortcuts_BANG_ = (function frontend$modules$shortcut$core$consume_pending_shortcuts_BANG_(){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.deref(frontend.modules.shortcut.core._STAR_inited_QMARK_);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending));
} else {
return and__5041__auto__;
}
})())){
var seq__55153_55423 = cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending));
var chunk__55154_55424 = null;
var count__55155_55425 = (0);
var i__55156_55426 = (0);
while(true){
if((i__55156_55426 < count__55155_55425)){
var vec__55163_55427 = chunk__55154_55424.cljs$core$IIndexed$_nth$arity$2(null,i__55156_55426);
var handler_id_55428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55163_55427,(0),null);
var id_55429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55163_55427,(1),null);
var shortcut_55430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55163_55427,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_55428,id_55429,shortcut_55430) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_55428,id_55429,shortcut_55430));


var G__55431 = seq__55153_55423;
var G__55432 = chunk__55154_55424;
var G__55433 = count__55155_55425;
var G__55434 = (i__55156_55426 + (1));
seq__55153_55423 = G__55431;
chunk__55154_55424 = G__55432;
count__55155_55425 = G__55433;
i__55156_55426 = G__55434;
continue;
} else {
var temp__5720__auto___55435 = cljs.core.seq(seq__55153_55423);
if(temp__5720__auto___55435){
var seq__55153_55436__$1 = temp__5720__auto___55435;
if(cljs.core.chunked_seq_QMARK_(seq__55153_55436__$1)){
var c__5565__auto___55437 = cljs.core.chunk_first(seq__55153_55436__$1);
var G__55438 = cljs.core.chunk_rest(seq__55153_55436__$1);
var G__55439 = c__5565__auto___55437;
var G__55440 = cljs.core.count(c__5565__auto___55437);
var G__55441 = (0);
seq__55153_55423 = G__55438;
chunk__55154_55424 = G__55439;
count__55155_55425 = G__55440;
i__55156_55426 = G__55441;
continue;
} else {
var vec__55166_55442 = cljs.core.first(seq__55153_55436__$1);
var handler_id_55443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55166_55442,(0),null);
var id_55444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55166_55442,(1),null);
var shortcut_55445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55166_55442,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_55443,id_55444,shortcut_55445) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_55443,id_55444,shortcut_55445));


var G__55446 = cljs.core.next(seq__55153_55436__$1);
var G__55447 = null;
var G__55448 = (0);
var G__55449 = (0);
seq__55153_55423 = G__55446;
chunk__55154_55424 = G__55447;
count__55155_55425 = G__55448;
i__55156_55426 = G__55449;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(frontend.modules.shortcut.core._STAR_pending,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
frontend.modules.shortcut.core.get_handler_by_id = (function frontend$modules$shortcut$core$get_handler_by_id(handler_id){
return new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55169_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__55169_SHARP_),handler_id);
}),cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)))));
});
/**
 * Register a shortcut, notice the id need to be a namespaced keyword to avoid
 *   conflicts.
 *   Example:
 *   (register-shortcut! :shortcut.handler/misc :foo/bar {:binding "mod+shift+8"
 *   :fn (fn [_state _event]
 *   (js/alert "test shortcut"))})
 */
frontend.modules.shortcut.core.register_shortcut_BANG_ = (function frontend$modules$shortcut$core$register_shortcut_BANG_(var_args){
var G__55171 = arguments.length;
switch (G__55171) {
case 2:
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,id){
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,id,null);
}));

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,id,shortcut_map){
if((((handler_id instanceof cljs.core.Keyword)) && (cljs.core.not(cljs.core.deref(frontend.modules.shortcut.core._STAR_inited_QMARK_))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_pending,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler_id,id,shortcut_map], null));
} else {
var temp__5720__auto__ = ((((typeof handler_id === 'string') || ((handler_id instanceof cljs.core.Keyword))))?(function (){var handler_id__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(handler_id);
return frontend.modules.shortcut.core.get_handler_by_id(handler_id__$1);
})():handler_id);
if(cljs.core.truth_(temp__5720__auto__)){
var handler = temp__5720__auto__;
if(cljs.core.truth_(shortcut_map)){
frontend.modules.shortcut.config.add_shortcut_BANG_(handler_id,id,shortcut_map);
} else {
}

if(frontend.modules.shortcut.data_helper.shortcut_binding(id) === false){
return null;
} else {
var seq__55173 = cljs.core.seq(frontend.modules.shortcut.data_helper.shortcut_binding(id));
var chunk__55174 = null;
var count__55175 = (0);
var i__55176 = (0);
while(true){
if((i__55176 < count__55175)){
var k = chunk__55174.cljs$core$IIndexed$_nth$arity$2(null,i__55176);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e55194){if((e55194 instanceof Object)){
var e_55452 = e55194;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_55452], null),new cljs.core.Keyword(null,"line","line",212345235),70], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_55452.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e55194;

}
}

var G__55454 = seq__55173;
var G__55455 = chunk__55174;
var G__55456 = count__55175;
var G__55457 = (i__55176 + (1));
seq__55173 = G__55454;
chunk__55174 = G__55455;
count__55175 = G__55456;
i__55176 = G__55457;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__55173);
if(temp__5720__auto____$1){
var seq__55173__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__55173__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__55173__$1);
var G__55458 = cljs.core.chunk_rest(seq__55173__$1);
var G__55459 = c__5565__auto__;
var G__55460 = cljs.core.count(c__5565__auto__);
var G__55461 = (0);
seq__55173 = G__55458;
chunk__55174 = G__55459;
count__55175 = G__55460;
i__55176 = G__55461;
continue;
} else {
var k = cljs.core.first(seq__55173__$1);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e55195){if((e55195 instanceof Object)){
var e_55463 = e55195;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_55463], null),new cljs.core.Keyword(null,"line","line",212345235),70], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_55463.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e55195;

}
}

var G__55464 = cljs.core.next(seq__55173__$1);
var G__55465 = null;
var G__55466 = (0);
var G__55467 = (0);
seq__55173 = G__55464;
chunk__55174 = G__55465;
count__55175 = G__55466;
i__55176 = G__55467;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
}
}));

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Unregister a shortcut.
 *   Example:
 *   (unregister-shortcut! :shortcut.handler/misc :foo/bar)
 */
frontend.modules.shortcut.core.unregister_shortcut_BANG_ = (function frontend$modules$shortcut$core$unregister_shortcut_BANG_(handler_id,shortcut_id){
var temp__5720__auto__ = frontend.modules.shortcut.core.get_handler_by_id(handler_id);
if(cljs.core.truth_(temp__5720__auto__)){
var handler = temp__5720__auto__;
var temp__5720__auto___55468__$1 = frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_id);
if(cljs.core.truth_(temp__5720__auto___55468__$1)){
var ks_55469 = temp__5720__auto___55468__$1;
var seq__55197_55470 = cljs.core.seq(ks_55469);
var chunk__55198_55471 = null;
var count__55199_55472 = (0);
var i__55200_55473 = (0);
while(true){
if((i__55200_55473 < count__55199_55472)){
var k_55474 = chunk__55198_55471.cljs$core$IIndexed$_nth$arity$2(null,i__55200_55473);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_55474));


var G__55475 = seq__55197_55470;
var G__55476 = chunk__55198_55471;
var G__55477 = count__55199_55472;
var G__55478 = (i__55200_55473 + (1));
seq__55197_55470 = G__55475;
chunk__55198_55471 = G__55476;
count__55199_55472 = G__55477;
i__55200_55473 = G__55478;
continue;
} else {
var temp__5720__auto___55479__$2 = cljs.core.seq(seq__55197_55470);
if(temp__5720__auto___55479__$2){
var seq__55197_55480__$1 = temp__5720__auto___55479__$2;
if(cljs.core.chunked_seq_QMARK_(seq__55197_55480__$1)){
var c__5565__auto___55481 = cljs.core.chunk_first(seq__55197_55480__$1);
var G__55482 = cljs.core.chunk_rest(seq__55197_55480__$1);
var G__55483 = c__5565__auto___55481;
var G__55484 = cljs.core.count(c__5565__auto___55481);
var G__55485 = (0);
seq__55197_55470 = G__55482;
chunk__55198_55471 = G__55483;
count__55199_55472 = G__55484;
i__55200_55473 = G__55485;
continue;
} else {
var k_55486 = cljs.core.first(seq__55197_55480__$1);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_55486));


var G__55487 = cljs.core.next(seq__55197_55480__$1);
var G__55488 = null;
var G__55489 = (0);
var G__55490 = (0);
seq__55197_55470 = G__55487;
chunk__55198_55471 = G__55488;
count__55199_55472 = G__55489;
i__55200_55473 = G__55490;
continue;
}
} else {
}
}
break;
}
} else {
}

return frontend.modules.shortcut.config.remove_shortcut_BANG_(handler_id,shortcut_id);
} else {
return null;
}
});
frontend.modules.shortcut.core.uninstall_shortcut_BANG_ = (function frontend$modules$shortcut$core$uninstall_shortcut_BANG_(install_id){
var temp__5720__auto__ = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed),install_id));
if(cljs.core.truth_(temp__5720__auto__)){
var handler = temp__5720__auto__;
handler.dispose();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_installed,cljs.core.dissoc,install_id);
} else {
return null;
}
});
frontend.modules.shortcut.core.install_shortcut_BANG_ = (function frontend$modules$shortcut$core$install_shortcut_BANG_(handler_id,p__55238){
var map__55239 = p__55238;
var map__55239__$1 = cljs.core.__destructure_map(map__55239);
var set_global_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55239__$1,new cljs.core.Keyword(null,"set-global-keys?","set-global-keys?",-497167260),true);
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55239__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),false);
var skip_installed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55239__$1,new cljs.core.Keyword(null,"skip-installed?","skip-installed?",2027430119),false);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55239__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var shortcut_map = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var handler = (new goog.ui.KeyboardShortcutHandler(window));
if(cljs.core.truth_(set_global_keys_QMARK_)){
handler.setGlobalKeys(frontend.modules.shortcut.core.global_keys);
} else {
}

handler.setAlwaysPreventDefault(prevent_default_QMARK_);

var seq__55240_55491 = cljs.core.seq(shortcut_map);
var chunk__55241_55492 = null;
var count__55242_55493 = (0);
var i__55243_55494 = (0);
while(true){
if((i__55243_55494 < count__55242_55493)){
var vec__55250_55495 = chunk__55241_55492.cljs$core$IIndexed$_nth$arity$2(null,i__55243_55494);
var id_55496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55250_55495,(0),null);
var __55497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55250_55495,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_55496);


var G__55498 = seq__55240_55491;
var G__55499 = chunk__55241_55492;
var G__55500 = count__55242_55493;
var G__55501 = (i__55243_55494 + (1));
seq__55240_55491 = G__55498;
chunk__55241_55492 = G__55499;
count__55242_55493 = G__55500;
i__55243_55494 = G__55501;
continue;
} else {
var temp__5720__auto___55502 = cljs.core.seq(seq__55240_55491);
if(temp__5720__auto___55502){
var seq__55240_55503__$1 = temp__5720__auto___55502;
if(cljs.core.chunked_seq_QMARK_(seq__55240_55503__$1)){
var c__5565__auto___55504 = cljs.core.chunk_first(seq__55240_55503__$1);
var G__55505 = cljs.core.chunk_rest(seq__55240_55503__$1);
var G__55506 = c__5565__auto___55504;
var G__55507 = cljs.core.count(c__5565__auto___55504);
var G__55508 = (0);
seq__55240_55491 = G__55505;
chunk__55241_55492 = G__55506;
count__55242_55493 = G__55507;
i__55243_55494 = G__55508;
continue;
} else {
var vec__55253_55509 = cljs.core.first(seq__55240_55503__$1);
var id_55510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55253_55509,(0),null);
var __55511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55253_55509,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_55510);


var G__55512 = cljs.core.next(seq__55240_55503__$1);
var G__55513 = null;
var G__55514 = (0);
var G__55515 = (0);
seq__55240_55491 = G__55512;
chunk__55241_55492 = G__55513;
count__55242_55493 = G__55514;
i__55243_55494 = G__55515;
continue;
}
} else {
}
}
break;
}

var f = (function (e){
var shortcut_map__$1 = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shortcut_map__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.identifier));
if(cljs.core.truth_(dispatch_fn)){
return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(e) : dispatch_fn.call(null,e));
} else {
return null;
}
});
var install_id = cljs.core.random_uuid();
var data = cljs.core.PersistentArrayMap.createAsIfByAssoc([install_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),handler_id,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614),f,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null)]);
handler.listen(goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,f);

if(cljs.core.truth_(skip_installed_QMARK_)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_installed,cljs.core.merge,data);
}

return install_id;
});
frontend.modules.shortcut.core.install_shortcuts_BANG_ = (function frontend$modules$shortcut$core$install_shortcuts_BANG_(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55256_SHARP_){
return frontend.modules.shortcut.core.install_shortcut_BANG_(p1__55256_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741),new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985),new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682)], null)));
});
frontend.modules.shortcut.core.mixin = (function frontend$modules$shortcut$core$mixin(handler_id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var install_id = frontend.modules.shortcut.core.install_shortcut_BANG_(handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293),install_id);
}),new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),(function (old_state,new_state){
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(old_state));

var temp__5720__auto__ = frontend.modules.shortcut.core.install_shortcut_BANG_(handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new_state], null));
if(cljs.core.truth_(temp__5720__auto__)){
var install_id = temp__5720__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293),install_id);
} else {
return null;
}
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var temp__5720__auto___55516 = new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___55516)){
var install_id_55517 = temp__5720__auto___55516;
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(install_id_55517);
} else {
}

return state;
})], null);
});
frontend.modules.shortcut.core.unlisten_all = (function frontend$modules$shortcut$core$unlisten_all(){
var seq__55294 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__55296 = null;
var count__55297 = (0);
var i__55298 = (0);
while(true){
if((i__55298 < count__55297)){
var map__55321 = chunk__55296.cljs$core$IIndexed$_nth$arity$2(null,i__55298);
var map__55321__$1 = cljs.core.__destructure_map(map__55321);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55321__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55321__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__55522 = seq__55294;
var G__55523 = chunk__55296;
var G__55524 = count__55297;
var G__55525 = (i__55298 + (1));
seq__55294 = G__55522;
chunk__55296 = G__55523;
count__55297 = G__55524;
i__55298 = G__55525;
continue;
} else {
var G__55526 = seq__55294;
var G__55527 = chunk__55296;
var G__55528 = count__55297;
var G__55529 = (i__55298 + (1));
seq__55294 = G__55526;
chunk__55296 = G__55527;
count__55297 = G__55528;
i__55298 = G__55529;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__55294);
if(temp__5720__auto__){
var seq__55294__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55294__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__55294__$1);
var G__55535 = cljs.core.chunk_rest(seq__55294__$1);
var G__55536 = c__5565__auto__;
var G__55537 = cljs.core.count(c__5565__auto__);
var G__55538 = (0);
seq__55294 = G__55535;
chunk__55296 = G__55536;
count__55297 = G__55537;
i__55298 = G__55538;
continue;
} else {
var map__55326 = cljs.core.first(seq__55294__$1);
var map__55326__$1 = cljs.core.__destructure_map(map__55326);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55326__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55326__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__55546 = cljs.core.next(seq__55294__$1);
var G__55547 = null;
var G__55548 = (0);
var G__55549 = (0);
seq__55294 = G__55546;
chunk__55296 = G__55547;
count__55297 = G__55548;
i__55298 = G__55549;
continue;
} else {
var G__55550 = cljs.core.next(seq__55294__$1);
var G__55551 = null;
var G__55552 = (0);
var G__55553 = (0);
seq__55294 = G__55550;
chunk__55296 = G__55551;
count__55297 = G__55552;
i__55298 = G__55553;
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
frontend.modules.shortcut.core.listen_all = (function frontend$modules$shortcut$core$listen_all(){
var seq__55330 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__55332 = null;
var count__55333 = (0);
var i__55334 = (0);
while(true){
if((i__55334 < count__55333)){
var map__55349 = chunk__55332.cljs$core$IIndexed$_nth$arity$2(null,i__55334);
var map__55349__$1 = cljs.core.__destructure_map(map__55349);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55349__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55349__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55349__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__55574 = seq__55330;
var G__55575 = chunk__55332;
var G__55576 = count__55333;
var G__55577 = (i__55334 + (1));
seq__55330 = G__55574;
chunk__55332 = G__55575;
count__55333 = G__55576;
i__55334 = G__55577;
continue;
} else {
var G__55590 = seq__55330;
var G__55591 = chunk__55332;
var G__55592 = count__55333;
var G__55593 = (i__55334 + (1));
seq__55330 = G__55590;
chunk__55332 = G__55591;
count__55333 = G__55592;
i__55334 = G__55593;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__55330);
if(temp__5720__auto__){
var seq__55330__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55330__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__55330__$1);
var G__55596 = cljs.core.chunk_rest(seq__55330__$1);
var G__55597 = c__5565__auto__;
var G__55598 = cljs.core.count(c__5565__auto__);
var G__55599 = (0);
seq__55330 = G__55596;
chunk__55332 = G__55597;
count__55333 = G__55598;
i__55334 = G__55599;
continue;
} else {
var map__55395 = cljs.core.first(seq__55330__$1);
var map__55395__$1 = cljs.core.__destructure_map(map__55395);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55395__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55395__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55395__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__55605 = cljs.core.next(seq__55330__$1);
var G__55606 = null;
var G__55607 = (0);
var G__55608 = (0);
seq__55330 = G__55605;
chunk__55332 = G__55606;
count__55333 = G__55607;
i__55334 = G__55608;
continue;
} else {
var G__55611 = cljs.core.next(seq__55330__$1);
var G__55612 = null;
var G__55613 = (0);
var G__55614 = (0);
seq__55330 = G__55611;
chunk__55332 = G__55612;
count__55333 = G__55613;
i__55334 = G__55614;
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
frontend.modules.shortcut.core.disable_all_shortcuts = (function frontend$modules$shortcut$core$disable_all_shortcuts(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.modules.shortcut.core.unlisten_all();

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.modules.shortcut.core.listen_all();

return state;
})], null);
});
/**
 * Always use this function to refresh shortcuts
 */
frontend.modules.shortcut.core.refresh_BANG_ = (function frontend$modules$shortcut$core$refresh_BANG_(){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","refresh","shortcut/refresh",-1755508577),cljs.core.deref(frontend.modules.shortcut.core._STAR_installed),new cljs.core.Keyword(null,"line","line",212345235),181], null)),null);

var seq__55402_55621 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__55403_55622 = null;
var count__55404_55623 = (0);
var i__55405_55624 = (0);
while(true){
if((i__55405_55624 < count__55404_55623)){
var id_55625 = chunk__55403_55622.cljs$core$IIndexed$_nth$arity$2(null,i__55405_55624);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_55625);


var G__55626 = seq__55402_55621;
var G__55627 = chunk__55403_55622;
var G__55628 = count__55404_55623;
var G__55629 = (i__55405_55624 + (1));
seq__55402_55621 = G__55626;
chunk__55403_55622 = G__55627;
count__55404_55623 = G__55628;
i__55405_55624 = G__55629;
continue;
} else {
var temp__5720__auto___55630 = cljs.core.seq(seq__55402_55621);
if(temp__5720__auto___55630){
var seq__55402_55631__$1 = temp__5720__auto___55630;
if(cljs.core.chunked_seq_QMARK_(seq__55402_55631__$1)){
var c__5565__auto___55632 = cljs.core.chunk_first(seq__55402_55631__$1);
var G__55633 = cljs.core.chunk_rest(seq__55402_55631__$1);
var G__55634 = c__5565__auto___55632;
var G__55635 = cljs.core.count(c__5565__auto___55632);
var G__55636 = (0);
seq__55402_55621 = G__55633;
chunk__55403_55622 = G__55634;
count__55404_55623 = G__55635;
i__55405_55624 = G__55636;
continue;
} else {
var id_55637 = cljs.core.first(seq__55402_55631__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_55637);


var G__55638 = cljs.core.next(seq__55402_55631__$1);
var G__55639 = null;
var G__55640 = (0);
var G__55641 = (0);
seq__55402_55621 = G__55638;
chunk__55403_55622 = G__55639;
count__55404_55623 = G__55640;
i__55405_55624 = G__55641;
continue;
}
} else {
}
}
break;
}

frontend.modules.shortcut.core.install_shortcuts_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcut-handler-refreshed","shortcut-handler-refreshed",1293579011)], null));
});
frontend.modules.shortcut.core.name_with_meta = (function frontend$modules$shortcut$core$name_with_meta(e){
var ctrl = e.ctrlKey;
var alt = e.altKey;
var meta = e.metaKey;
var shift = e.shiftKey;
var keyname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode));
var G__55408 = keyname;
var G__55408__$1 = (cljs.core.truth_(ctrl)?["ctrl+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55408)].join(''):G__55408);
var G__55408__$2 = (cljs.core.truth_(alt)?["alt+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55408__$1)].join(''):G__55408__$1);
var G__55408__$3 = (cljs.core.truth_(meta)?["meta+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55408__$2)].join(''):G__55408__$2);
if(cljs.core.truth_(shift)){
return ["shift+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55408__$3)].join('');
} else {
return G__55408__$3;
}
});
frontend.modules.shortcut.core.keyname = (function frontend$modules$shortcut$core$keyname(e){
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode));
var G__55415 = name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__55415)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ctrl",G__55415)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("shift",G__55415)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("alt",G__55415)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("esc",G__55415)){
return null;
} else {
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.core.name_with_meta(e))].join('');

}
}
}
}
}
});
frontend.modules.shortcut.core.record_BANG_ = (function frontend$modules$shortcut$core$record_BANG_(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var handler = (new goog.events.KeyHandler(document));
var keystroke = new cljs.core.Keyword("rum","local","rum/local",-1497916586).cljs$core$IFn$_invoke$arity$1(state);
var seq__55417_55642 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__55418_55643 = null;
var count__55419_55644 = (0);
var i__55420_55645 = (0);
while(true){
if((i__55420_55645 < count__55419_55644)){
var id_55648 = chunk__55418_55643.cljs$core$IIndexed$_nth$arity$2(null,i__55420_55645);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_55648);


var G__55649 = seq__55417_55642;
var G__55650 = chunk__55418_55643;
var G__55651 = count__55419_55644;
var G__55652 = (i__55420_55645 + (1));
seq__55417_55642 = G__55649;
chunk__55418_55643 = G__55650;
count__55419_55644 = G__55651;
i__55420_55645 = G__55652;
continue;
} else {
var temp__5720__auto___55654 = cljs.core.seq(seq__55417_55642);
if(temp__5720__auto___55654){
var seq__55417_55655__$1 = temp__5720__auto___55654;
if(cljs.core.chunked_seq_QMARK_(seq__55417_55655__$1)){
var c__5565__auto___55656 = cljs.core.chunk_first(seq__55417_55655__$1);
var G__55657 = cljs.core.chunk_rest(seq__55417_55655__$1);
var G__55658 = c__5565__auto___55656;
var G__55659 = cljs.core.count(c__5565__auto___55656);
var G__55660 = (0);
seq__55417_55642 = G__55657;
chunk__55418_55643 = G__55658;
count__55419_55644 = G__55659;
i__55420_55645 = G__55660;
continue;
} else {
var id_55661 = cljs.core.first(seq__55417_55655__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_55661);


var G__55662 = cljs.core.next(seq__55417_55655__$1);
var G__55663 = null;
var G__55664 = (0);
var G__55665 = (0);
seq__55417_55642 = G__55662;
chunk__55418_55643 = G__55663;
count__55419_55644 = G__55664;
i__55420_55645 = G__55665;
continue;
}
} else {
}
}
break;
}

goog.events.listen(handler,"key",(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keystroke,(function (p1__55416_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55416_SHARP_),frontend.modules.shortcut.core.keyname(e)].join('');
}));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698),handler);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (p__55421){
var map__55422 = p__55421;
var map__55422__$1 = cljs.core.__destructure_map(map__55422);
var state = map__55422__$1;
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55422__$1,new cljs.core.Keyword("rum","args","rum/args",1315791754));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55422__$1,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
var k_55669 = cljs.core.first(args);
var keystroke_55670 = clojure.string.trim(cljs.core.deref(local));
if(cljs.core.empty_QMARK_(keystroke_55670)){
} else {
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentArrayMap.createAsIfByAssoc([k_55669,keystroke_55670])], 0)));
}

var temp__5720__auto___55672 = new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___55672)){
var handler_55674 = temp__5720__auto___55672;
handler_55674.dispose();
} else {
}

setTimeout((function (){
return frontend.modules.shortcut.core.refresh_BANG_();
}),(500));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698));
})], null);
});

//# sourceMappingURL=frontend.modules.shortcut.core.js.map
