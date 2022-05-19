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
var seq__64678_64953 = cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending));
var chunk__64679_64954 = null;
var count__64680_64955 = (0);
var i__64681_64956 = (0);
while(true){
if((i__64681_64956 < count__64680_64955)){
var vec__64700_64957 = chunk__64679_64954.cljs$core$IIndexed$_nth$arity$2(null,i__64681_64956);
var handler_id_64958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64700_64957,(0),null);
var id_64959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64700_64957,(1),null);
var shortcut_64960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64700_64957,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_64958,id_64959,shortcut_64960) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_64958,id_64959,shortcut_64960));


var G__64961 = seq__64678_64953;
var G__64962 = chunk__64679_64954;
var G__64963 = count__64680_64955;
var G__64964 = (i__64681_64956 + (1));
seq__64678_64953 = G__64961;
chunk__64679_64954 = G__64962;
count__64680_64955 = G__64963;
i__64681_64956 = G__64964;
continue;
} else {
var temp__5720__auto___64965 = cljs.core.seq(seq__64678_64953);
if(temp__5720__auto___64965){
var seq__64678_64966__$1 = temp__5720__auto___64965;
if(cljs.core.chunked_seq_QMARK_(seq__64678_64966__$1)){
var c__4679__auto___64967 = cljs.core.chunk_first(seq__64678_64966__$1);
var G__64968 = cljs.core.chunk_rest(seq__64678_64966__$1);
var G__64969 = c__4679__auto___64967;
var G__64970 = cljs.core.count(c__4679__auto___64967);
var G__64971 = (0);
seq__64678_64953 = G__64968;
chunk__64679_64954 = G__64969;
count__64680_64955 = G__64970;
i__64681_64956 = G__64971;
continue;
} else {
var vec__64707_64972 = cljs.core.first(seq__64678_64966__$1);
var handler_id_64973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64707_64972,(0),null);
var id_64974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64707_64972,(1),null);
var shortcut_64975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64707_64972,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_64973,id_64974,shortcut_64975) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_64973,id_64974,shortcut_64975));


var G__64976 = cljs.core.next(seq__64678_64966__$1);
var G__64977 = null;
var G__64978 = (0);
var G__64979 = (0);
seq__64678_64953 = G__64976;
chunk__64679_64954 = G__64977;
count__64680_64955 = G__64978;
i__64681_64956 = G__64979;
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
return new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64711_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__64711_SHARP_),handler_id);
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
var G__64718 = arguments.length;
switch (G__64718) {
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
var seq__64729 = cljs.core.seq(frontend.modules.shortcut.data_helper.shortcut_binding(id));
var chunk__64730 = null;
var count__64731 = (0);
var i__64732 = (0);
while(true){
if((i__64732 < count__64731)){
var k = chunk__64730.cljs$core$IIndexed$_nth$arity$2(null,i__64732);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),68], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e64740){if((e64740 instanceof Object)){
var e_65003 = e64740;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_65003], null),new cljs.core.Keyword(null,"line","line",212345235),71], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_65003.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e64740;

}
}

var G__65005 = seq__64729;
var G__65006 = chunk__64730;
var G__65007 = count__64731;
var G__65008 = (i__64732 + (1));
seq__64729 = G__65005;
chunk__64730 = G__65006;
count__64731 = G__65007;
i__64732 = G__65008;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__64729);
if(temp__5720__auto____$1){
var seq__64729__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__64729__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64729__$1);
var G__65011 = cljs.core.chunk_rest(seq__64729__$1);
var G__65012 = c__4679__auto__;
var G__65013 = cljs.core.count(c__4679__auto__);
var G__65014 = (0);
seq__64729 = G__65011;
chunk__64730 = G__65012;
count__64731 = G__65013;
i__64732 = G__65014;
continue;
} else {
var k = cljs.core.first(seq__64729__$1);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),68], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e64752){if((e64752 instanceof Object)){
var e_65016 = e64752;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_65016], null),new cljs.core.Keyword(null,"line","line",212345235),71], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_65016.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e64752;

}
}

var G__65020 = cljs.core.next(seq__64729__$1);
var G__65021 = null;
var G__65022 = (0);
var G__65023 = (0);
seq__64729 = G__65020;
chunk__64730 = G__65021;
count__64731 = G__65022;
i__64732 = G__65023;
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
var temp__5720__auto___65025__$1 = frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_id);
if(cljs.core.truth_(temp__5720__auto___65025__$1)){
var ks_65026 = temp__5720__auto___65025__$1;
var seq__64757_65027 = cljs.core.seq(ks_65026);
var chunk__64758_65028 = null;
var count__64759_65029 = (0);
var i__64760_65030 = (0);
while(true){
if((i__64760_65030 < count__64759_65029)){
var k_65032 = chunk__64758_65028.cljs$core$IIndexed$_nth$arity$2(null,i__64760_65030);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_65032));


var G__65034 = seq__64757_65027;
var G__65035 = chunk__64758_65028;
var G__65036 = count__64759_65029;
var G__65037 = (i__64760_65030 + (1));
seq__64757_65027 = G__65034;
chunk__64758_65028 = G__65035;
count__64759_65029 = G__65036;
i__64760_65030 = G__65037;
continue;
} else {
var temp__5720__auto___65039__$2 = cljs.core.seq(seq__64757_65027);
if(temp__5720__auto___65039__$2){
var seq__64757_65041__$1 = temp__5720__auto___65039__$2;
if(cljs.core.chunked_seq_QMARK_(seq__64757_65041__$1)){
var c__4679__auto___65042 = cljs.core.chunk_first(seq__64757_65041__$1);
var G__65043 = cljs.core.chunk_rest(seq__64757_65041__$1);
var G__65044 = c__4679__auto___65042;
var G__65045 = cljs.core.count(c__4679__auto___65042);
var G__65046 = (0);
seq__64757_65027 = G__65043;
chunk__64758_65028 = G__65044;
count__64759_65029 = G__65045;
i__64760_65030 = G__65046;
continue;
} else {
var k_65047 = cljs.core.first(seq__64757_65041__$1);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_65047));


var G__65048 = cljs.core.next(seq__64757_65041__$1);
var G__65049 = null;
var G__65050 = (0);
var G__65051 = (0);
seq__64757_65027 = G__65048;
chunk__64758_65028 = G__65049;
count__64759_65029 = G__65050;
i__64760_65030 = G__65051;
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
frontend.modules.shortcut.core.install_shortcut_BANG_ = (function frontend$modules$shortcut$core$install_shortcut_BANG_(handler_id,p__64776){
var map__64777 = p__64776;
var map__64777__$1 = cljs.core.__destructure_map(map__64777);
var set_global_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64777__$1,new cljs.core.Keyword(null,"set-global-keys?","set-global-keys?",-497167260),true);
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64777__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),false);
var skip_installed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64777__$1,new cljs.core.Keyword(null,"skip-installed?","skip-installed?",2027430119),false);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64777__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var shortcut_map = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var handler = (new goog.ui.KeyboardShortcutHandler(window));
if(cljs.core.truth_(set_global_keys_QMARK_)){
handler.setGlobalKeys(frontend.modules.shortcut.core.global_keys);
} else {
}

handler.setAlwaysPreventDefault(prevent_default_QMARK_);

var seq__64778_65053 = cljs.core.seq(shortcut_map);
var chunk__64779_65054 = null;
var count__64780_65055 = (0);
var i__64781_65056 = (0);
while(true){
if((i__64781_65056 < count__64780_65055)){
var vec__64789_65057 = chunk__64779_65054.cljs$core$IIndexed$_nth$arity$2(null,i__64781_65056);
var id_65058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64789_65057,(0),null);
var __65059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64789_65057,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_65058);


var G__65060 = seq__64778_65053;
var G__65061 = chunk__64779_65054;
var G__65062 = count__64780_65055;
var G__65063 = (i__64781_65056 + (1));
seq__64778_65053 = G__65060;
chunk__64779_65054 = G__65061;
count__64780_65055 = G__65062;
i__64781_65056 = G__65063;
continue;
} else {
var temp__5720__auto___65064 = cljs.core.seq(seq__64778_65053);
if(temp__5720__auto___65064){
var seq__64778_65065__$1 = temp__5720__auto___65064;
if(cljs.core.chunked_seq_QMARK_(seq__64778_65065__$1)){
var c__4679__auto___65066 = cljs.core.chunk_first(seq__64778_65065__$1);
var G__65067 = cljs.core.chunk_rest(seq__64778_65065__$1);
var G__65068 = c__4679__auto___65066;
var G__65069 = cljs.core.count(c__4679__auto___65066);
var G__65070 = (0);
seq__64778_65053 = G__65067;
chunk__64779_65054 = G__65068;
count__64780_65055 = G__65069;
i__64781_65056 = G__65070;
continue;
} else {
var vec__64794_65072 = cljs.core.first(seq__64778_65065__$1);
var id_65073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64794_65072,(0),null);
var __65075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64794_65072,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_65073);


var G__65077 = cljs.core.next(seq__64778_65065__$1);
var G__65078 = null;
var G__65079 = (0);
var G__65080 = (0);
seq__64778_65053 = G__65077;
chunk__64779_65054 = G__65078;
count__64780_65055 = G__65079;
i__64781_65056 = G__65080;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64799_SHARP_){
return frontend.modules.shortcut.core.install_shortcut_BANG_(p1__64799_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
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
var temp__5720__auto___65100 = new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___65100)){
var install_id_65101 = temp__5720__auto___65100;
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(install_id_65101);
} else {
}

return state;
})], null);
});
frontend.modules.shortcut.core.unlisten_all = (function frontend$modules$shortcut$core$unlisten_all(){
var seq__64823 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__64825 = null;
var count__64826 = (0);
var i__64827 = (0);
while(true){
if((i__64827 < count__64826)){
var map__64832 = chunk__64825.cljs$core$IIndexed$_nth$arity$2(null,i__64827);
var map__64832__$1 = cljs.core.__destructure_map(map__64832);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64832__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64832__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__65102 = seq__64823;
var G__65103 = chunk__64825;
var G__65104 = count__64826;
var G__65105 = (i__64827 + (1));
seq__64823 = G__65102;
chunk__64825 = G__65103;
count__64826 = G__65104;
i__64827 = G__65105;
continue;
} else {
var G__65106 = seq__64823;
var G__65107 = chunk__64825;
var G__65108 = count__64826;
var G__65109 = (i__64827 + (1));
seq__64823 = G__65106;
chunk__64825 = G__65107;
count__64826 = G__65108;
i__64827 = G__65109;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__64823);
if(temp__5720__auto__){
var seq__64823__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64823__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64823__$1);
var G__65110 = cljs.core.chunk_rest(seq__64823__$1);
var G__65111 = c__4679__auto__;
var G__65112 = cljs.core.count(c__4679__auto__);
var G__65113 = (0);
seq__64823 = G__65110;
chunk__64825 = G__65111;
count__64826 = G__65112;
i__64827 = G__65113;
continue;
} else {
var map__64833 = cljs.core.first(seq__64823__$1);
var map__64833__$1 = cljs.core.__destructure_map(map__64833);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64833__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64833__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__65114 = cljs.core.next(seq__64823__$1);
var G__65115 = null;
var G__65116 = (0);
var G__65117 = (0);
seq__64823 = G__65114;
chunk__64825 = G__65115;
count__64826 = G__65116;
i__64827 = G__65117;
continue;
} else {
var G__65118 = cljs.core.next(seq__64823__$1);
var G__65119 = null;
var G__65120 = (0);
var G__65121 = (0);
seq__64823 = G__65118;
chunk__64825 = G__65119;
count__64826 = G__65120;
i__64827 = G__65121;
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
var seq__64834 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__64836 = null;
var count__64837 = (0);
var i__64838 = (0);
while(true){
if((i__64838 < count__64837)){
var map__64857 = chunk__64836.cljs$core$IIndexed$_nth$arity$2(null,i__64838);
var map__64857__$1 = cljs.core.__destructure_map(map__64857);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64857__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64857__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64857__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__65125 = seq__64834;
var G__65126 = chunk__64836;
var G__65127 = count__64837;
var G__65128 = (i__64838 + (1));
seq__64834 = G__65125;
chunk__64836 = G__65126;
count__64837 = G__65127;
i__64838 = G__65128;
continue;
} else {
var G__65129 = seq__64834;
var G__65130 = chunk__64836;
var G__65131 = count__64837;
var G__65132 = (i__64838 + (1));
seq__64834 = G__65129;
chunk__64836 = G__65130;
count__64837 = G__65131;
i__64838 = G__65132;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__64834);
if(temp__5720__auto__){
var seq__64834__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64834__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64834__$1);
var G__65133 = cljs.core.chunk_rest(seq__64834__$1);
var G__65134 = c__4679__auto__;
var G__65135 = cljs.core.count(c__4679__auto__);
var G__65136 = (0);
seq__64834 = G__65133;
chunk__64836 = G__65134;
count__64837 = G__65135;
i__64838 = G__65136;
continue;
} else {
var map__64862 = cljs.core.first(seq__64834__$1);
var map__64862__$1 = cljs.core.__destructure_map(map__64862);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64862__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64862__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64862__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__65138 = cljs.core.next(seq__64834__$1);
var G__65139 = null;
var G__65140 = (0);
var G__65141 = (0);
seq__64834 = G__65138;
chunk__64836 = G__65139;
count__64837 = G__65140;
i__64838 = G__65141;
continue;
} else {
var G__65142 = cljs.core.next(seq__64834__$1);
var G__65143 = null;
var G__65144 = (0);
var G__65145 = (0);
seq__64834 = G__65142;
chunk__64836 = G__65143;
count__64837 = G__65144;
i__64838 = G__65145;
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

var seq__64872_65147 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__64873_65148 = null;
var count__64874_65149 = (0);
var i__64875_65150 = (0);
while(true){
if((i__64875_65150 < count__64874_65149)){
var id_65156 = chunk__64873_65148.cljs$core$IIndexed$_nth$arity$2(null,i__64875_65150);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_65156);


var G__65157 = seq__64872_65147;
var G__65158 = chunk__64873_65148;
var G__65159 = count__64874_65149;
var G__65160 = (i__64875_65150 + (1));
seq__64872_65147 = G__65157;
chunk__64873_65148 = G__65158;
count__64874_65149 = G__65159;
i__64875_65150 = G__65160;
continue;
} else {
var temp__5720__auto___65161 = cljs.core.seq(seq__64872_65147);
if(temp__5720__auto___65161){
var seq__64872_65162__$1 = temp__5720__auto___65161;
if(cljs.core.chunked_seq_QMARK_(seq__64872_65162__$1)){
var c__4679__auto___65164 = cljs.core.chunk_first(seq__64872_65162__$1);
var G__65166 = cljs.core.chunk_rest(seq__64872_65162__$1);
var G__65167 = c__4679__auto___65164;
var G__65168 = cljs.core.count(c__4679__auto___65164);
var G__65169 = (0);
seq__64872_65147 = G__65166;
chunk__64873_65148 = G__65167;
count__64874_65149 = G__65168;
i__64875_65150 = G__65169;
continue;
} else {
var id_65183 = cljs.core.first(seq__64872_65162__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_65183);


var G__65184 = cljs.core.next(seq__64872_65162__$1);
var G__65185 = null;
var G__65186 = (0);
var G__65187 = (0);
seq__64872_65147 = G__65184;
chunk__64873_65148 = G__65185;
count__64874_65149 = G__65186;
i__64875_65150 = G__65187;
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
var G__64882 = keyname;
var G__64882__$1 = (cljs.core.truth_(ctrl)?["ctrl+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64882)].join(''):G__64882);
var G__64882__$2 = (cljs.core.truth_(alt)?["alt+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64882__$1)].join(''):G__64882__$1);
var G__64882__$3 = (cljs.core.truth_(meta)?["meta+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64882__$2)].join(''):G__64882__$2);
if(cljs.core.truth_(shift)){
return ["shift+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64882__$3)].join('');
} else {
return G__64882__$3;
}
});
frontend.modules.shortcut.core.keyname = (function frontend$modules$shortcut$core$keyname(e){
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode));
var G__64905 = name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__64905)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ctrl",G__64905)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("shift",G__64905)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("alt",G__64905)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("esc",G__64905)){
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
var seq__64915_65193 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__64916_65194 = null;
var count__64917_65195 = (0);
var i__64918_65196 = (0);
while(true){
if((i__64918_65196 < count__64917_65195)){
var id_65197 = chunk__64916_65194.cljs$core$IIndexed$_nth$arity$2(null,i__64918_65196);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_65197);


var G__65199 = seq__64915_65193;
var G__65200 = chunk__64916_65194;
var G__65201 = count__64917_65195;
var G__65202 = (i__64918_65196 + (1));
seq__64915_65193 = G__65199;
chunk__64916_65194 = G__65200;
count__64917_65195 = G__65201;
i__64918_65196 = G__65202;
continue;
} else {
var temp__5720__auto___65203 = cljs.core.seq(seq__64915_65193);
if(temp__5720__auto___65203){
var seq__64915_65205__$1 = temp__5720__auto___65203;
if(cljs.core.chunked_seq_QMARK_(seq__64915_65205__$1)){
var c__4679__auto___65207 = cljs.core.chunk_first(seq__64915_65205__$1);
var G__65208 = cljs.core.chunk_rest(seq__64915_65205__$1);
var G__65209 = c__4679__auto___65207;
var G__65210 = cljs.core.count(c__4679__auto___65207);
var G__65211 = (0);
seq__64915_65193 = G__65208;
chunk__64916_65194 = G__65209;
count__64917_65195 = G__65210;
i__64918_65196 = G__65211;
continue;
} else {
var id_65213 = cljs.core.first(seq__64915_65205__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_65213);


var G__65214 = cljs.core.next(seq__64915_65205__$1);
var G__65215 = null;
var G__65216 = (0);
var G__65217 = (0);
seq__64915_65193 = G__65214;
chunk__64916_65194 = G__65215;
count__64917_65195 = G__65216;
i__64918_65196 = G__65217;
continue;
}
} else {
}
}
break;
}

goog.events.listen(handler,"key",(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keystroke,(function (p1__64913_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__64913_SHARP_),frontend.modules.shortcut.core.keyname(e)].join('');
}));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698),handler);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (p__64940){
var map__64941 = p__64940;
var map__64941__$1 = cljs.core.__destructure_map(map__64941);
var state = map__64941__$1;
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64941__$1,new cljs.core.Keyword("rum","args","rum/args",1315791754));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64941__$1,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
var k_65219 = cljs.core.first(args);
var keystroke_65220 = clojure.string.trim(cljs.core.deref(local));
if(cljs.core.empty_QMARK_(keystroke_65220)){
} else {
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentArrayMap.createAsIfByAssoc([k_65219,keystroke_65220])], 0)));
}

var temp__5720__auto___65221 = new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___65221)){
var handler_65223 = temp__5720__auto___65221;
handler_65223.dispose();
} else {
}

setTimeout((function (){
return frontend.modules.shortcut.core.refresh_BANG_();
}),(500));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698));
})], null);
});

//# sourceMappingURL=frontend.modules.shortcut.core.js.map
