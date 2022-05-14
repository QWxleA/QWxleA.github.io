goog.provide('frontend.modules.shortcut.core');
frontend.modules.shortcut.core._STAR_installed = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.modules.shortcut.core._STAR_inited_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.modules.shortcut.core._STAR_pending = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
frontend.modules.shortcut.core.global_keys = [goog.events.KeyCodes.TAB,goog.events.KeyCodes.ENTER,goog.events.KeyCodes.BACKSPACE,goog.events.KeyCodes.DELETE,goog.events.KeyCodes.UP,goog.events.KeyCodes.LEFT,goog.events.KeyCodes.DOWN,goog.events.KeyCodes.RIGHT];
frontend.modules.shortcut.core.key_names = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.KeyNames);
frontend.modules.shortcut.core.consume_pending_shortcuts_BANG_ = (function frontend$modules$shortcut$core$consume_pending_shortcuts_BANG_(){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(frontend.modules.shortcut.core._STAR_inited_QMARK_);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending));
} else {
return and__4251__auto__;
}
})())){
var seq__64486_64721 = cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending));
var chunk__64487_64722 = null;
var count__64488_64723 = (0);
var i__64489_64724 = (0);
while(true){
if((i__64489_64724 < count__64488_64723)){
var vec__64543_64725 = chunk__64487_64722.cljs$core$IIndexed$_nth$arity$2(null,i__64489_64724);
var handler_id_64726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64543_64725,(0),null);
var id_64727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64543_64725,(1),null);
var shortcut_64728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64543_64725,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_64726,id_64727,shortcut_64728) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_64726,id_64727,shortcut_64728));


var G__64740 = seq__64486_64721;
var G__64741 = chunk__64487_64722;
var G__64742 = count__64488_64723;
var G__64743 = (i__64489_64724 + (1));
seq__64486_64721 = G__64740;
chunk__64487_64722 = G__64741;
count__64488_64723 = G__64742;
i__64489_64724 = G__64743;
continue;
} else {
var temp__5720__auto___64744 = cljs.core.seq(seq__64486_64721);
if(temp__5720__auto___64744){
var seq__64486_64745__$1 = temp__5720__auto___64744;
if(cljs.core.chunked_seq_QMARK_(seq__64486_64745__$1)){
var c__4679__auto___64746 = cljs.core.chunk_first(seq__64486_64745__$1);
var G__64747 = cljs.core.chunk_rest(seq__64486_64745__$1);
var G__64748 = c__4679__auto___64746;
var G__64749 = cljs.core.count(c__4679__auto___64746);
var G__64750 = (0);
seq__64486_64721 = G__64747;
chunk__64487_64722 = G__64748;
count__64488_64723 = G__64749;
i__64489_64724 = G__64750;
continue;
} else {
var vec__64548_64751 = cljs.core.first(seq__64486_64745__$1);
var handler_id_64752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64548_64751,(0),null);
var id_64753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64548_64751,(1),null);
var shortcut_64754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64548_64751,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_64752,id_64753,shortcut_64754) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_64752,id_64753,shortcut_64754));


var G__64755 = cljs.core.next(seq__64486_64745__$1);
var G__64756 = null;
var G__64757 = (0);
var G__64758 = (0);
seq__64486_64721 = G__64755;
chunk__64487_64722 = G__64756;
count__64488_64723 = G__64757;
i__64489_64724 = G__64758;
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
return new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64553_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__64553_SHARP_),handler_id);
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
var G__64559 = arguments.length;
switch (G__64559) {
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
var seq__64564 = cljs.core.seq(frontend.modules.shortcut.data_helper.shortcut_binding(id));
var chunk__64565 = null;
var count__64566 = (0);
var i__64567 = (0);
while(true){
if((i__64567 < count__64566)){
var k = chunk__64565.cljs$core$IIndexed$_nth$arity$2(null,i__64567);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),68], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e64575){if((e64575 instanceof Object)){
var e_64763 = e64575;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_64763], null),new cljs.core.Keyword(null,"line","line",212345235),71], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_64763.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e64575;

}
}

var G__64765 = seq__64564;
var G__64766 = chunk__64565;
var G__64767 = count__64566;
var G__64768 = (i__64567 + (1));
seq__64564 = G__64765;
chunk__64565 = G__64766;
count__64566 = G__64767;
i__64567 = G__64768;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__64564);
if(temp__5720__auto____$1){
var seq__64564__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__64564__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64564__$1);
var G__64769 = cljs.core.chunk_rest(seq__64564__$1);
var G__64770 = c__4679__auto__;
var G__64771 = cljs.core.count(c__4679__auto__);
var G__64772 = (0);
seq__64564 = G__64769;
chunk__64565 = G__64770;
count__64566 = G__64771;
i__64567 = G__64772;
continue;
} else {
var k = cljs.core.first(seq__64564__$1);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),68], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e64577){if((e64577 instanceof Object)){
var e_64776 = e64577;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_64776], null),new cljs.core.Keyword(null,"line","line",212345235),71], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_64776.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e64577;

}
}

var G__64777 = cljs.core.next(seq__64564__$1);
var G__64778 = null;
var G__64779 = (0);
var G__64780 = (0);
seq__64564 = G__64777;
chunk__64565 = G__64778;
count__64566 = G__64779;
i__64567 = G__64780;
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
var temp__5720__auto___64781__$1 = frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_id);
if(cljs.core.truth_(temp__5720__auto___64781__$1)){
var ks_64782 = temp__5720__auto___64781__$1;
var seq__64581_64783 = cljs.core.seq(ks_64782);
var chunk__64582_64784 = null;
var count__64583_64785 = (0);
var i__64584_64786 = (0);
while(true){
if((i__64584_64786 < count__64583_64785)){
var k_64787 = chunk__64582_64784.cljs$core$IIndexed$_nth$arity$2(null,i__64584_64786);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_64787));


var G__64788 = seq__64581_64783;
var G__64789 = chunk__64582_64784;
var G__64790 = count__64583_64785;
var G__64791 = (i__64584_64786 + (1));
seq__64581_64783 = G__64788;
chunk__64582_64784 = G__64789;
count__64583_64785 = G__64790;
i__64584_64786 = G__64791;
continue;
} else {
var temp__5720__auto___64792__$2 = cljs.core.seq(seq__64581_64783);
if(temp__5720__auto___64792__$2){
var seq__64581_64793__$1 = temp__5720__auto___64792__$2;
if(cljs.core.chunked_seq_QMARK_(seq__64581_64793__$1)){
var c__4679__auto___64794 = cljs.core.chunk_first(seq__64581_64793__$1);
var G__64795 = cljs.core.chunk_rest(seq__64581_64793__$1);
var G__64796 = c__4679__auto___64794;
var G__64797 = cljs.core.count(c__4679__auto___64794);
var G__64798 = (0);
seq__64581_64783 = G__64795;
chunk__64582_64784 = G__64796;
count__64583_64785 = G__64797;
i__64584_64786 = G__64798;
continue;
} else {
var k_64799 = cljs.core.first(seq__64581_64793__$1);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_64799));


var G__64801 = cljs.core.next(seq__64581_64793__$1);
var G__64802 = null;
var G__64803 = (0);
var G__64804 = (0);
seq__64581_64783 = G__64801;
chunk__64582_64784 = G__64802;
count__64583_64785 = G__64803;
i__64584_64786 = G__64804;
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
frontend.modules.shortcut.core.install_shortcut_BANG_ = (function frontend$modules$shortcut$core$install_shortcut_BANG_(handler_id,p__64597){
var map__64598 = p__64597;
var map__64598__$1 = cljs.core.__destructure_map(map__64598);
var set_global_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64598__$1,new cljs.core.Keyword(null,"set-global-keys?","set-global-keys?",-497167260),true);
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64598__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),false);
var skip_installed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64598__$1,new cljs.core.Keyword(null,"skip-installed?","skip-installed?",2027430119),false);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64598__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var shortcut_map = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var handler = (new goog.ui.KeyboardShortcutHandler(window));
if(cljs.core.truth_(set_global_keys_QMARK_)){
handler.setGlobalKeys(frontend.modules.shortcut.core.global_keys);
} else {
}

handler.setAlwaysPreventDefault(prevent_default_QMARK_);

var seq__64602_64819 = cljs.core.seq(shortcut_map);
var chunk__64603_64820 = null;
var count__64604_64821 = (0);
var i__64605_64822 = (0);
while(true){
if((i__64605_64822 < count__64604_64821)){
var vec__64618_64826 = chunk__64603_64820.cljs$core$IIndexed$_nth$arity$2(null,i__64605_64822);
var id_64827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64618_64826,(0),null);
var __64828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64618_64826,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_64827);


var G__64838 = seq__64602_64819;
var G__64839 = chunk__64603_64820;
var G__64840 = count__64604_64821;
var G__64841 = (i__64605_64822 + (1));
seq__64602_64819 = G__64838;
chunk__64603_64820 = G__64839;
count__64604_64821 = G__64840;
i__64605_64822 = G__64841;
continue;
} else {
var temp__5720__auto___64845 = cljs.core.seq(seq__64602_64819);
if(temp__5720__auto___64845){
var seq__64602_64846__$1 = temp__5720__auto___64845;
if(cljs.core.chunked_seq_QMARK_(seq__64602_64846__$1)){
var c__4679__auto___64847 = cljs.core.chunk_first(seq__64602_64846__$1);
var G__64849 = cljs.core.chunk_rest(seq__64602_64846__$1);
var G__64850 = c__4679__auto___64847;
var G__64851 = cljs.core.count(c__4679__auto___64847);
var G__64852 = (0);
seq__64602_64819 = G__64849;
chunk__64603_64820 = G__64850;
count__64604_64821 = G__64851;
i__64605_64822 = G__64852;
continue;
} else {
var vec__64621_64854 = cljs.core.first(seq__64602_64846__$1);
var id_64855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64621_64854,(0),null);
var __64856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64621_64854,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_64855);


var G__64857 = cljs.core.next(seq__64602_64846__$1);
var G__64858 = null;
var G__64859 = (0);
var G__64860 = (0);
seq__64602_64819 = G__64857;
chunk__64603_64820 = G__64858;
count__64604_64821 = G__64859;
i__64605_64822 = G__64860;
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
var install_id = medley.core.random_uuid();
var data = cljs.core.PersistentArrayMap.createAsIfByAssoc([install_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),handler_id,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614),f,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null)]);
handler.listen(goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,f);

if(cljs.core.truth_(skip_installed_QMARK_)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_installed,cljs.core.merge,data);
}

return install_id;
});
frontend.modules.shortcut.core.install_shortcuts_BANG_ = (function frontend$modules$shortcut$core$install_shortcuts_BANG_(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64629_SHARP_){
return frontend.modules.shortcut.core.install_shortcut_BANG_(p1__64629_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
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
var temp__5720__auto___64861 = new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___64861)){
var install_id_64862 = temp__5720__auto___64861;
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(install_id_64862);
} else {
}

return state;
})], null);
});
frontend.modules.shortcut.core.unlisten_all = (function frontend$modules$shortcut$core$unlisten_all(){
var seq__64652 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__64654 = null;
var count__64655 = (0);
var i__64656 = (0);
while(true){
if((i__64656 < count__64655)){
var map__64666 = chunk__64654.cljs$core$IIndexed$_nth$arity$2(null,i__64656);
var map__64666__$1 = cljs.core.__destructure_map(map__64666);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64666__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64666__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__64864 = seq__64652;
var G__64865 = chunk__64654;
var G__64866 = count__64655;
var G__64867 = (i__64656 + (1));
seq__64652 = G__64864;
chunk__64654 = G__64865;
count__64655 = G__64866;
i__64656 = G__64867;
continue;
} else {
var G__64868 = seq__64652;
var G__64869 = chunk__64654;
var G__64870 = count__64655;
var G__64871 = (i__64656 + (1));
seq__64652 = G__64868;
chunk__64654 = G__64869;
count__64655 = G__64870;
i__64656 = G__64871;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__64652);
if(temp__5720__auto__){
var seq__64652__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64652__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64652__$1);
var G__64872 = cljs.core.chunk_rest(seq__64652__$1);
var G__64873 = c__4679__auto__;
var G__64874 = cljs.core.count(c__4679__auto__);
var G__64875 = (0);
seq__64652 = G__64872;
chunk__64654 = G__64873;
count__64655 = G__64874;
i__64656 = G__64875;
continue;
} else {
var map__64668 = cljs.core.first(seq__64652__$1);
var map__64668__$1 = cljs.core.__destructure_map(map__64668);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64668__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64668__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__64876 = cljs.core.next(seq__64652__$1);
var G__64877 = null;
var G__64878 = (0);
var G__64879 = (0);
seq__64652 = G__64876;
chunk__64654 = G__64877;
count__64655 = G__64878;
i__64656 = G__64879;
continue;
} else {
var G__64880 = cljs.core.next(seq__64652__$1);
var G__64881 = null;
var G__64882 = (0);
var G__64883 = (0);
seq__64652 = G__64880;
chunk__64654 = G__64881;
count__64655 = G__64882;
i__64656 = G__64883;
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
var seq__64669 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__64671 = null;
var count__64672 = (0);
var i__64673 = (0);
while(true){
if((i__64673 < count__64672)){
var map__64677 = chunk__64671.cljs$core$IIndexed$_nth$arity$2(null,i__64673);
var map__64677__$1 = cljs.core.__destructure_map(map__64677);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64677__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64677__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64677__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__64884 = seq__64669;
var G__64885 = chunk__64671;
var G__64886 = count__64672;
var G__64887 = (i__64673 + (1));
seq__64669 = G__64884;
chunk__64671 = G__64885;
count__64672 = G__64886;
i__64673 = G__64887;
continue;
} else {
var G__64889 = seq__64669;
var G__64890 = chunk__64671;
var G__64891 = count__64672;
var G__64892 = (i__64673 + (1));
seq__64669 = G__64889;
chunk__64671 = G__64890;
count__64672 = G__64891;
i__64673 = G__64892;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__64669);
if(temp__5720__auto__){
var seq__64669__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64669__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64669__$1);
var G__64894 = cljs.core.chunk_rest(seq__64669__$1);
var G__64895 = c__4679__auto__;
var G__64896 = cljs.core.count(c__4679__auto__);
var G__64897 = (0);
seq__64669 = G__64894;
chunk__64671 = G__64895;
count__64672 = G__64896;
i__64673 = G__64897;
continue;
} else {
var map__64678 = cljs.core.first(seq__64669__$1);
var map__64678__$1 = cljs.core.__destructure_map(map__64678);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64678__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64678__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64678__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__64900 = cljs.core.next(seq__64669__$1);
var G__64901 = null;
var G__64902 = (0);
var G__64903 = (0);
seq__64669 = G__64900;
chunk__64671 = G__64901;
count__64672 = G__64902;
i__64673 = G__64903;
continue;
} else {
var G__64904 = cljs.core.next(seq__64669__$1);
var G__64905 = null;
var G__64906 = (0);
var G__64907 = (0);
seq__64669 = G__64904;
chunk__64671 = G__64905;
count__64672 = G__64906;
i__64673 = G__64907;
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
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","refresh","shortcut/refresh",-1755508577),cljs.core.deref(frontend.modules.shortcut.core._STAR_installed),new cljs.core.Keyword(null,"line","line",212345235),182], null)),null);

var seq__64679_64910 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__64680_64911 = null;
var count__64681_64912 = (0);
var i__64682_64913 = (0);
while(true){
if((i__64682_64913 < count__64681_64912)){
var id_64915 = chunk__64680_64911.cljs$core$IIndexed$_nth$arity$2(null,i__64682_64913);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_64915);


var G__64916 = seq__64679_64910;
var G__64917 = chunk__64680_64911;
var G__64918 = count__64681_64912;
var G__64919 = (i__64682_64913 + (1));
seq__64679_64910 = G__64916;
chunk__64680_64911 = G__64917;
count__64681_64912 = G__64918;
i__64682_64913 = G__64919;
continue;
} else {
var temp__5720__auto___64920 = cljs.core.seq(seq__64679_64910);
if(temp__5720__auto___64920){
var seq__64679_64921__$1 = temp__5720__auto___64920;
if(cljs.core.chunked_seq_QMARK_(seq__64679_64921__$1)){
var c__4679__auto___64922 = cljs.core.chunk_first(seq__64679_64921__$1);
var G__64923 = cljs.core.chunk_rest(seq__64679_64921__$1);
var G__64924 = c__4679__auto___64922;
var G__64925 = cljs.core.count(c__4679__auto___64922);
var G__64926 = (0);
seq__64679_64910 = G__64923;
chunk__64680_64911 = G__64924;
count__64681_64912 = G__64925;
i__64682_64913 = G__64926;
continue;
} else {
var id_64928 = cljs.core.first(seq__64679_64921__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_64928);


var G__64929 = cljs.core.next(seq__64679_64921__$1);
var G__64930 = null;
var G__64931 = (0);
var G__64932 = (0);
seq__64679_64910 = G__64929;
chunk__64680_64911 = G__64930;
count__64681_64912 = G__64931;
i__64682_64913 = G__64932;
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
var G__64683 = keyname;
var G__64683__$1 = (cljs.core.truth_(ctrl)?["ctrl+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64683)].join(''):G__64683);
var G__64683__$2 = (cljs.core.truth_(alt)?["alt+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64683__$1)].join(''):G__64683__$1);
var G__64683__$3 = (cljs.core.truth_(meta)?["meta+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64683__$2)].join(''):G__64683__$2);
if(cljs.core.truth_(shift)){
return ["shift+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64683__$3)].join('');
} else {
return G__64683__$3;
}
});
frontend.modules.shortcut.core.keyname = (function frontend$modules$shortcut$core$keyname(e){
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode));
var G__64685 = name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__64685)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ctrl",G__64685)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("shift",G__64685)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("alt",G__64685)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("esc",G__64685)){
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
var seq__64690_64934 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__64691_64935 = null;
var count__64692_64936 = (0);
var i__64693_64937 = (0);
while(true){
if((i__64693_64937 < count__64692_64936)){
var id_64939 = chunk__64691_64935.cljs$core$IIndexed$_nth$arity$2(null,i__64693_64937);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_64939);


var G__64940 = seq__64690_64934;
var G__64941 = chunk__64691_64935;
var G__64942 = count__64692_64936;
var G__64943 = (i__64693_64937 + (1));
seq__64690_64934 = G__64940;
chunk__64691_64935 = G__64941;
count__64692_64936 = G__64942;
i__64693_64937 = G__64943;
continue;
} else {
var temp__5720__auto___64944 = cljs.core.seq(seq__64690_64934);
if(temp__5720__auto___64944){
var seq__64690_64945__$1 = temp__5720__auto___64944;
if(cljs.core.chunked_seq_QMARK_(seq__64690_64945__$1)){
var c__4679__auto___64946 = cljs.core.chunk_first(seq__64690_64945__$1);
var G__64947 = cljs.core.chunk_rest(seq__64690_64945__$1);
var G__64948 = c__4679__auto___64946;
var G__64949 = cljs.core.count(c__4679__auto___64946);
var G__64950 = (0);
seq__64690_64934 = G__64947;
chunk__64691_64935 = G__64948;
count__64692_64936 = G__64949;
i__64693_64937 = G__64950;
continue;
} else {
var id_64951 = cljs.core.first(seq__64690_64945__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_64951);


var G__64953 = cljs.core.next(seq__64690_64945__$1);
var G__64954 = null;
var G__64955 = (0);
var G__64956 = (0);
seq__64690_64934 = G__64953;
chunk__64691_64935 = G__64954;
count__64692_64936 = G__64955;
i__64693_64937 = G__64956;
continue;
}
} else {
}
}
break;
}

goog.events.listen(handler,"key",(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keystroke,(function (p1__64689_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__64689_SHARP_),frontend.modules.shortcut.core.keyname(e)].join('');
}));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698),handler);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (p__64695){
var map__64696 = p__64695;
var map__64696__$1 = cljs.core.__destructure_map(map__64696);
var state = map__64696__$1;
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64696__$1,new cljs.core.Keyword("rum","args","rum/args",1315791754));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64696__$1,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
var k_64961 = cljs.core.first(args);
var keystroke_64962 = clojure.string.trim(cljs.core.deref(local));
if(cljs.core.empty_QMARK_(keystroke_64962)){
} else {
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentArrayMap.createAsIfByAssoc([k_64961,keystroke_64962])], 0)));
}

var temp__5720__auto___64963 = new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___64963)){
var handler_64964 = temp__5720__auto___64963;
handler_64964.dispose();
} else {
}

setTimeout((function (){
return frontend.modules.shortcut.core.refresh_BANG_();
}),(500));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698));
})], null);
});

//# sourceMappingURL=frontend.modules.shortcut.core.js.map
