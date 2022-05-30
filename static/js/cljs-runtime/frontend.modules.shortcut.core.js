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
var seq__54168_54484 = cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending));
var chunk__54169_54485 = null;
var count__54170_54486 = (0);
var i__54171_54487 = (0);
while(true){
if((i__54171_54487 < count__54170_54486)){
var vec__54185_54489 = chunk__54169_54485.cljs$core$IIndexed$_nth$arity$2(null,i__54171_54487);
var handler_id_54490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54185_54489,(0),null);
var id_54491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54185_54489,(1),null);
var shortcut_54492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54185_54489,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_54490,id_54491,shortcut_54492) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_54490,id_54491,shortcut_54492));


var G__54493 = seq__54168_54484;
var G__54494 = chunk__54169_54485;
var G__54495 = count__54170_54486;
var G__54496 = (i__54171_54487 + (1));
seq__54168_54484 = G__54493;
chunk__54169_54485 = G__54494;
count__54170_54486 = G__54495;
i__54171_54487 = G__54496;
continue;
} else {
var temp__5720__auto___54498 = cljs.core.seq(seq__54168_54484);
if(temp__5720__auto___54498){
var seq__54168_54499__$1 = temp__5720__auto___54498;
if(cljs.core.chunked_seq_QMARK_(seq__54168_54499__$1)){
var c__5565__auto___54500 = cljs.core.chunk_first(seq__54168_54499__$1);
var G__54501 = cljs.core.chunk_rest(seq__54168_54499__$1);
var G__54502 = c__5565__auto___54500;
var G__54503 = cljs.core.count(c__5565__auto___54500);
var G__54504 = (0);
seq__54168_54484 = G__54501;
chunk__54169_54485 = G__54502;
count__54170_54486 = G__54503;
i__54171_54487 = G__54504;
continue;
} else {
var vec__54188_54505 = cljs.core.first(seq__54168_54499__$1);
var handler_id_54506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54188_54505,(0),null);
var id_54507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54188_54505,(1),null);
var shortcut_54508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54188_54505,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_54506,id_54507,shortcut_54508) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_54506,id_54507,shortcut_54508));


var G__54509 = cljs.core.next(seq__54168_54499__$1);
var G__54510 = null;
var G__54511 = (0);
var G__54512 = (0);
seq__54168_54484 = G__54509;
chunk__54169_54485 = G__54510;
count__54170_54486 = G__54511;
i__54171_54487 = G__54512;
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
return new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54191_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__54191_SHARP_),handler_id);
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
var G__54193 = arguments.length;
switch (G__54193) {
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
var seq__54194 = cljs.core.seq(frontend.modules.shortcut.data_helper.shortcut_binding(id));
var chunk__54195 = null;
var count__54196 = (0);
var i__54197 = (0);
while(true){
if((i__54197 < count__54196)){
var k = chunk__54195.cljs$core$IIndexed$_nth$arity$2(null,i__54197);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e54200){if((e54200 instanceof Object)){
var e_54526 = e54200;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_54526], null),new cljs.core.Keyword(null,"line","line",212345235),70], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_54526.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e54200;

}
}

var G__54607 = seq__54194;
var G__54608 = chunk__54195;
var G__54609 = count__54196;
var G__54610 = (i__54197 + (1));
seq__54194 = G__54607;
chunk__54195 = G__54608;
count__54196 = G__54609;
i__54197 = G__54610;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__54194);
if(temp__5720__auto____$1){
var seq__54194__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54194__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__54194__$1);
var G__54611 = cljs.core.chunk_rest(seq__54194__$1);
var G__54612 = c__5565__auto__;
var G__54613 = cljs.core.count(c__5565__auto__);
var G__54614 = (0);
seq__54194 = G__54611;
chunk__54195 = G__54612;
count__54196 = G__54613;
i__54197 = G__54614;
continue;
} else {
var k = cljs.core.first(seq__54194__$1);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e54201){if((e54201 instanceof Object)){
var e_54617 = e54201;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_54617], null),new cljs.core.Keyword(null,"line","line",212345235),70], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_54617.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e54201;

}
}

var G__54619 = cljs.core.next(seq__54194__$1);
var G__54620 = null;
var G__54621 = (0);
var G__54622 = (0);
seq__54194 = G__54619;
chunk__54195 = G__54620;
count__54196 = G__54621;
i__54197 = G__54622;
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
var temp__5720__auto___54624__$1 = frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_id);
if(cljs.core.truth_(temp__5720__auto___54624__$1)){
var ks_54625 = temp__5720__auto___54624__$1;
var seq__54202_54626 = cljs.core.seq(ks_54625);
var chunk__54203_54627 = null;
var count__54204_54628 = (0);
var i__54205_54629 = (0);
while(true){
if((i__54205_54629 < count__54204_54628)){
var k_54630 = chunk__54203_54627.cljs$core$IIndexed$_nth$arity$2(null,i__54205_54629);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_54630));


var G__54631 = seq__54202_54626;
var G__54632 = chunk__54203_54627;
var G__54633 = count__54204_54628;
var G__54634 = (i__54205_54629 + (1));
seq__54202_54626 = G__54631;
chunk__54203_54627 = G__54632;
count__54204_54628 = G__54633;
i__54205_54629 = G__54634;
continue;
} else {
var temp__5720__auto___54635__$2 = cljs.core.seq(seq__54202_54626);
if(temp__5720__auto___54635__$2){
var seq__54202_54637__$1 = temp__5720__auto___54635__$2;
if(cljs.core.chunked_seq_QMARK_(seq__54202_54637__$1)){
var c__5565__auto___54638 = cljs.core.chunk_first(seq__54202_54637__$1);
var G__54640 = cljs.core.chunk_rest(seq__54202_54637__$1);
var G__54641 = c__5565__auto___54638;
var G__54642 = cljs.core.count(c__5565__auto___54638);
var G__54643 = (0);
seq__54202_54626 = G__54640;
chunk__54203_54627 = G__54641;
count__54204_54628 = G__54642;
i__54205_54629 = G__54643;
continue;
} else {
var k_54644 = cljs.core.first(seq__54202_54637__$1);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_54644));


var G__54645 = cljs.core.next(seq__54202_54637__$1);
var G__54646 = null;
var G__54647 = (0);
var G__54648 = (0);
seq__54202_54626 = G__54645;
chunk__54203_54627 = G__54646;
count__54204_54628 = G__54647;
i__54205_54629 = G__54648;
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
frontend.modules.shortcut.core.install_shortcut_BANG_ = (function frontend$modules$shortcut$core$install_shortcut_BANG_(handler_id,p__54206){
var map__54207 = p__54206;
var map__54207__$1 = cljs.core.__destructure_map(map__54207);
var set_global_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54207__$1,new cljs.core.Keyword(null,"set-global-keys?","set-global-keys?",-497167260),true);
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54207__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),false);
var skip_installed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54207__$1,new cljs.core.Keyword(null,"skip-installed?","skip-installed?",2027430119),false);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54207__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var shortcut_map = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var handler = (new goog.ui.KeyboardShortcutHandler(window));
if(cljs.core.truth_(set_global_keys_QMARK_)){
handler.setGlobalKeys(frontend.modules.shortcut.core.global_keys);
} else {
}

handler.setAlwaysPreventDefault(prevent_default_QMARK_);

var seq__54208_54655 = cljs.core.seq(shortcut_map);
var chunk__54209_54656 = null;
var count__54210_54657 = (0);
var i__54211_54658 = (0);
while(true){
if((i__54211_54658 < count__54210_54657)){
var vec__54218_54661 = chunk__54209_54656.cljs$core$IIndexed$_nth$arity$2(null,i__54211_54658);
var id_54662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54218_54661,(0),null);
var __54663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54218_54661,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_54662);


var G__54664 = seq__54208_54655;
var G__54665 = chunk__54209_54656;
var G__54666 = count__54210_54657;
var G__54667 = (i__54211_54658 + (1));
seq__54208_54655 = G__54664;
chunk__54209_54656 = G__54665;
count__54210_54657 = G__54666;
i__54211_54658 = G__54667;
continue;
} else {
var temp__5720__auto___54668 = cljs.core.seq(seq__54208_54655);
if(temp__5720__auto___54668){
var seq__54208_54669__$1 = temp__5720__auto___54668;
if(cljs.core.chunked_seq_QMARK_(seq__54208_54669__$1)){
var c__5565__auto___54670 = cljs.core.chunk_first(seq__54208_54669__$1);
var G__54671 = cljs.core.chunk_rest(seq__54208_54669__$1);
var G__54672 = c__5565__auto___54670;
var G__54673 = cljs.core.count(c__5565__auto___54670);
var G__54674 = (0);
seq__54208_54655 = G__54671;
chunk__54209_54656 = G__54672;
count__54210_54657 = G__54673;
i__54211_54658 = G__54674;
continue;
} else {
var vec__54221_54675 = cljs.core.first(seq__54208_54669__$1);
var id_54676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54221_54675,(0),null);
var __54677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54221_54675,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_54676);


var G__54678 = cljs.core.next(seq__54208_54669__$1);
var G__54679 = null;
var G__54680 = (0);
var G__54681 = (0);
seq__54208_54655 = G__54678;
chunk__54209_54656 = G__54679;
count__54210_54657 = G__54680;
i__54211_54658 = G__54681;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54224_SHARP_){
return frontend.modules.shortcut.core.install_shortcut_BANG_(p1__54224_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
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
var temp__5720__auto___54687 = new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___54687)){
var install_id_54688 = temp__5720__auto___54687;
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(install_id_54688);
} else {
}

return state;
})], null);
});
frontend.modules.shortcut.core.unlisten_all = (function frontend$modules$shortcut$core$unlisten_all(){
var seq__54225 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__54227 = null;
var count__54228 = (0);
var i__54229 = (0);
while(true){
if((i__54229 < count__54228)){
var map__54243 = chunk__54227.cljs$core$IIndexed$_nth$arity$2(null,i__54229);
var map__54243__$1 = cljs.core.__destructure_map(map__54243);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__54691 = seq__54225;
var G__54692 = chunk__54227;
var G__54693 = count__54228;
var G__54694 = (i__54229 + (1));
seq__54225 = G__54691;
chunk__54227 = G__54692;
count__54228 = G__54693;
i__54229 = G__54694;
continue;
} else {
var G__54695 = seq__54225;
var G__54696 = chunk__54227;
var G__54697 = count__54228;
var G__54698 = (i__54229 + (1));
seq__54225 = G__54695;
chunk__54227 = G__54696;
count__54228 = G__54697;
i__54229 = G__54698;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__54225);
if(temp__5720__auto__){
var seq__54225__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54225__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__54225__$1);
var G__54699 = cljs.core.chunk_rest(seq__54225__$1);
var G__54700 = c__5565__auto__;
var G__54701 = cljs.core.count(c__5565__auto__);
var G__54702 = (0);
seq__54225 = G__54699;
chunk__54227 = G__54700;
count__54228 = G__54701;
i__54229 = G__54702;
continue;
} else {
var map__54255 = cljs.core.first(seq__54225__$1);
var map__54255__$1 = cljs.core.__destructure_map(map__54255);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54255__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54255__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__54703 = cljs.core.next(seq__54225__$1);
var G__54704 = null;
var G__54705 = (0);
var G__54706 = (0);
seq__54225 = G__54703;
chunk__54227 = G__54704;
count__54228 = G__54705;
i__54229 = G__54706;
continue;
} else {
var G__54707 = cljs.core.next(seq__54225__$1);
var G__54708 = null;
var G__54709 = (0);
var G__54710 = (0);
seq__54225 = G__54707;
chunk__54227 = G__54708;
count__54228 = G__54709;
i__54229 = G__54710;
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
var seq__54266 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__54268 = null;
var count__54269 = (0);
var i__54270 = (0);
while(true){
if((i__54270 < count__54269)){
var map__54373 = chunk__54268.cljs$core$IIndexed$_nth$arity$2(null,i__54270);
var map__54373__$1 = cljs.core.__destructure_map(map__54373);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54373__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54373__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54373__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__54711 = seq__54266;
var G__54712 = chunk__54268;
var G__54713 = count__54269;
var G__54714 = (i__54270 + (1));
seq__54266 = G__54711;
chunk__54268 = G__54712;
count__54269 = G__54713;
i__54270 = G__54714;
continue;
} else {
var G__54720 = seq__54266;
var G__54721 = chunk__54268;
var G__54722 = count__54269;
var G__54723 = (i__54270 + (1));
seq__54266 = G__54720;
chunk__54268 = G__54721;
count__54269 = G__54722;
i__54270 = G__54723;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__54266);
if(temp__5720__auto__){
var seq__54266__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54266__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__54266__$1);
var G__54725 = cljs.core.chunk_rest(seq__54266__$1);
var G__54726 = c__5565__auto__;
var G__54727 = cljs.core.count(c__5565__auto__);
var G__54728 = (0);
seq__54266 = G__54725;
chunk__54268 = G__54726;
count__54269 = G__54727;
i__54270 = G__54728;
continue;
} else {
var map__54378 = cljs.core.first(seq__54266__$1);
var map__54378__$1 = cljs.core.__destructure_map(map__54378);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54378__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54378__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54378__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__54731 = cljs.core.next(seq__54266__$1);
var G__54732 = null;
var G__54733 = (0);
var G__54734 = (0);
seq__54266 = G__54731;
chunk__54268 = G__54732;
count__54269 = G__54733;
i__54270 = G__54734;
continue;
} else {
var G__54735 = cljs.core.next(seq__54266__$1);
var G__54736 = null;
var G__54737 = (0);
var G__54738 = (0);
seq__54266 = G__54735;
chunk__54268 = G__54736;
count__54269 = G__54737;
i__54270 = G__54738;
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

var seq__54404_54740 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__54405_54741 = null;
var count__54406_54742 = (0);
var i__54407_54743 = (0);
while(true){
if((i__54407_54743 < count__54406_54742)){
var id_54744 = chunk__54405_54741.cljs$core$IIndexed$_nth$arity$2(null,i__54407_54743);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_54744);


var G__54745 = seq__54404_54740;
var G__54746 = chunk__54405_54741;
var G__54747 = count__54406_54742;
var G__54748 = (i__54407_54743 + (1));
seq__54404_54740 = G__54745;
chunk__54405_54741 = G__54746;
count__54406_54742 = G__54747;
i__54407_54743 = G__54748;
continue;
} else {
var temp__5720__auto___54749 = cljs.core.seq(seq__54404_54740);
if(temp__5720__auto___54749){
var seq__54404_54750__$1 = temp__5720__auto___54749;
if(cljs.core.chunked_seq_QMARK_(seq__54404_54750__$1)){
var c__5565__auto___54751 = cljs.core.chunk_first(seq__54404_54750__$1);
var G__54752 = cljs.core.chunk_rest(seq__54404_54750__$1);
var G__54753 = c__5565__auto___54751;
var G__54754 = cljs.core.count(c__5565__auto___54751);
var G__54755 = (0);
seq__54404_54740 = G__54752;
chunk__54405_54741 = G__54753;
count__54406_54742 = G__54754;
i__54407_54743 = G__54755;
continue;
} else {
var id_54756 = cljs.core.first(seq__54404_54750__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_54756);


var G__54757 = cljs.core.next(seq__54404_54750__$1);
var G__54758 = null;
var G__54759 = (0);
var G__54760 = (0);
seq__54404_54740 = G__54757;
chunk__54405_54741 = G__54758;
count__54406_54742 = G__54759;
i__54407_54743 = G__54760;
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
var G__54418 = keyname;
var G__54418__$1 = (cljs.core.truth_(ctrl)?["ctrl+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54418)].join(''):G__54418);
var G__54418__$2 = (cljs.core.truth_(alt)?["alt+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54418__$1)].join(''):G__54418__$1);
var G__54418__$3 = (cljs.core.truth_(meta)?["meta+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54418__$2)].join(''):G__54418__$2);
if(cljs.core.truth_(shift)){
return ["shift+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54418__$3)].join('');
} else {
return G__54418__$3;
}
});
frontend.modules.shortcut.core.keyname = (function frontend$modules$shortcut$core$keyname(e){
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode));
var G__54423 = name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__54423)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ctrl",G__54423)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("shift",G__54423)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("alt",G__54423)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("esc",G__54423)){
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
var seq__54436_54766 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__54437_54767 = null;
var count__54438_54768 = (0);
var i__54439_54769 = (0);
while(true){
if((i__54439_54769 < count__54438_54768)){
var id_54771 = chunk__54437_54767.cljs$core$IIndexed$_nth$arity$2(null,i__54439_54769);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_54771);


var G__54772 = seq__54436_54766;
var G__54773 = chunk__54437_54767;
var G__54774 = count__54438_54768;
var G__54775 = (i__54439_54769 + (1));
seq__54436_54766 = G__54772;
chunk__54437_54767 = G__54773;
count__54438_54768 = G__54774;
i__54439_54769 = G__54775;
continue;
} else {
var temp__5720__auto___54776 = cljs.core.seq(seq__54436_54766);
if(temp__5720__auto___54776){
var seq__54436_54777__$1 = temp__5720__auto___54776;
if(cljs.core.chunked_seq_QMARK_(seq__54436_54777__$1)){
var c__5565__auto___54778 = cljs.core.chunk_first(seq__54436_54777__$1);
var G__54779 = cljs.core.chunk_rest(seq__54436_54777__$1);
var G__54780 = c__5565__auto___54778;
var G__54781 = cljs.core.count(c__5565__auto___54778);
var G__54782 = (0);
seq__54436_54766 = G__54779;
chunk__54437_54767 = G__54780;
count__54438_54768 = G__54781;
i__54439_54769 = G__54782;
continue;
} else {
var id_54786 = cljs.core.first(seq__54436_54777__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_54786);


var G__54787 = cljs.core.next(seq__54436_54777__$1);
var G__54788 = null;
var G__54789 = (0);
var G__54790 = (0);
seq__54436_54766 = G__54787;
chunk__54437_54767 = G__54788;
count__54438_54768 = G__54789;
i__54439_54769 = G__54790;
continue;
}
} else {
}
}
break;
}

goog.events.listen(handler,"key",(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keystroke,(function (p1__54425_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54425_SHARP_),frontend.modules.shortcut.core.keyname(e)].join('');
}));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698),handler);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (p__54476){
var map__54477 = p__54476;
var map__54477__$1 = cljs.core.__destructure_map(map__54477);
var state = map__54477__$1;
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54477__$1,new cljs.core.Keyword("rum","args","rum/args",1315791754));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54477__$1,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
var k_54797 = cljs.core.first(args);
var keystroke_54798 = clojure.string.trim(cljs.core.deref(local));
if(cljs.core.empty_QMARK_(keystroke_54798)){
} else {
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentArrayMap.createAsIfByAssoc([k_54797,keystroke_54798])], 0)));
}

var temp__5720__auto___54799 = new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___54799)){
var handler_54800 = temp__5720__auto___54799;
handler_54800.dispose();
} else {
}

setTimeout((function (){
return frontend.modules.shortcut.core.refresh_BANG_();
}),(500));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698));
})], null);
});

//# sourceMappingURL=frontend.modules.shortcut.core.js.map
