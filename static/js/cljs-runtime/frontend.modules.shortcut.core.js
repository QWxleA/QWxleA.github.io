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
var seq__47915_47998 = cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending));
var chunk__47916_47999 = null;
var count__47917_48000 = (0);
var i__47918_48001 = (0);
while(true){
if((i__47918_48001 < count__47917_48000)){
var vec__47925_48002 = chunk__47916_47999.cljs$core$IIndexed$_nth$arity$2(null,i__47918_48001);
var handler_id_48003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47925_48002,(0),null);
var id_48004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47925_48002,(1),null);
var shortcut_48005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47925_48002,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_48003,id_48004,shortcut_48005) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_48003,id_48004,shortcut_48005));


var G__48006 = seq__47915_47998;
var G__48007 = chunk__47916_47999;
var G__48008 = count__47917_48000;
var G__48009 = (i__47918_48001 + (1));
seq__47915_47998 = G__48006;
chunk__47916_47999 = G__48007;
count__47917_48000 = G__48008;
i__47918_48001 = G__48009;
continue;
} else {
var temp__5720__auto___48010 = cljs.core.seq(seq__47915_47998);
if(temp__5720__auto___48010){
var seq__47915_48011__$1 = temp__5720__auto___48010;
if(cljs.core.chunked_seq_QMARK_(seq__47915_48011__$1)){
var c__5565__auto___48012 = cljs.core.chunk_first(seq__47915_48011__$1);
var G__48013 = cljs.core.chunk_rest(seq__47915_48011__$1);
var G__48014 = c__5565__auto___48012;
var G__48015 = cljs.core.count(c__5565__auto___48012);
var G__48016 = (0);
seq__47915_47998 = G__48013;
chunk__47916_47999 = G__48014;
count__47917_48000 = G__48015;
i__47918_48001 = G__48016;
continue;
} else {
var vec__47928_48017 = cljs.core.first(seq__47915_48011__$1);
var handler_id_48018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47928_48017,(0),null);
var id_48019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47928_48017,(1),null);
var shortcut_48020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47928_48017,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_48018,id_48019,shortcut_48020) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_48018,id_48019,shortcut_48020));


var G__48021 = cljs.core.next(seq__47915_48011__$1);
var G__48022 = null;
var G__48023 = (0);
var G__48024 = (0);
seq__47915_47998 = G__48021;
chunk__47916_47999 = G__48022;
count__47917_48000 = G__48023;
i__47918_48001 = G__48024;
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
return new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47931_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__47931_SHARP_),handler_id);
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
var G__47933 = arguments.length;
switch (G__47933) {
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
var seq__47934 = cljs.core.seq(frontend.modules.shortcut.data_helper.shortcut_binding(id));
var chunk__47935 = null;
var count__47936 = (0);
var i__47937 = (0);
while(true){
if((i__47937 < count__47936)){
var k = chunk__47935.cljs$core$IIndexed$_nth$arity$2(null,i__47937);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e47940){if((e47940 instanceof Object)){
var e_48026 = e47940;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_48026], null),new cljs.core.Keyword(null,"line","line",212345235),70], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_48026.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e47940;

}
}

var G__48027 = seq__47934;
var G__48028 = chunk__47935;
var G__48029 = count__47936;
var G__48030 = (i__47937 + (1));
seq__47934 = G__48027;
chunk__47935 = G__48028;
count__47936 = G__48029;
i__47937 = G__48030;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__47934);
if(temp__5720__auto____$1){
var seq__47934__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__47934__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47934__$1);
var G__48031 = cljs.core.chunk_rest(seq__47934__$1);
var G__48032 = c__5565__auto__;
var G__48033 = cljs.core.count(c__5565__auto__);
var G__48034 = (0);
seq__47934 = G__48031;
chunk__47935 = G__48032;
count__47936 = G__48033;
i__47937 = G__48034;
continue;
} else {
var k = cljs.core.first(seq__47934__$1);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e47941){if((e47941 instanceof Object)){
var e_48035 = e47941;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_48035], null),new cljs.core.Keyword(null,"line","line",212345235),70], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_48035.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e47941;

}
}

var G__48036 = cljs.core.next(seq__47934__$1);
var G__48037 = null;
var G__48038 = (0);
var G__48039 = (0);
seq__47934 = G__48036;
chunk__47935 = G__48037;
count__47936 = G__48038;
i__47937 = G__48039;
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
var temp__5720__auto___48040__$1 = frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_id);
if(cljs.core.truth_(temp__5720__auto___48040__$1)){
var ks_48041 = temp__5720__auto___48040__$1;
var seq__47942_48042 = cljs.core.seq(ks_48041);
var chunk__47943_48043 = null;
var count__47944_48044 = (0);
var i__47945_48045 = (0);
while(true){
if((i__47945_48045 < count__47944_48044)){
var k_48046 = chunk__47943_48043.cljs$core$IIndexed$_nth$arity$2(null,i__47945_48045);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_48046));


var G__48047 = seq__47942_48042;
var G__48048 = chunk__47943_48043;
var G__48049 = count__47944_48044;
var G__48050 = (i__47945_48045 + (1));
seq__47942_48042 = G__48047;
chunk__47943_48043 = G__48048;
count__47944_48044 = G__48049;
i__47945_48045 = G__48050;
continue;
} else {
var temp__5720__auto___48051__$2 = cljs.core.seq(seq__47942_48042);
if(temp__5720__auto___48051__$2){
var seq__47942_48052__$1 = temp__5720__auto___48051__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47942_48052__$1)){
var c__5565__auto___48053 = cljs.core.chunk_first(seq__47942_48052__$1);
var G__48054 = cljs.core.chunk_rest(seq__47942_48052__$1);
var G__48055 = c__5565__auto___48053;
var G__48056 = cljs.core.count(c__5565__auto___48053);
var G__48057 = (0);
seq__47942_48042 = G__48054;
chunk__47943_48043 = G__48055;
count__47944_48044 = G__48056;
i__47945_48045 = G__48057;
continue;
} else {
var k_48058 = cljs.core.first(seq__47942_48052__$1);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_48058));


var G__48059 = cljs.core.next(seq__47942_48052__$1);
var G__48060 = null;
var G__48061 = (0);
var G__48062 = (0);
seq__47942_48042 = G__48059;
chunk__47943_48043 = G__48060;
count__47944_48044 = G__48061;
i__47945_48045 = G__48062;
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
frontend.modules.shortcut.core.install_shortcut_BANG_ = (function frontend$modules$shortcut$core$install_shortcut_BANG_(handler_id,p__47946){
var map__47947 = p__47946;
var map__47947__$1 = cljs.core.__destructure_map(map__47947);
var set_global_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47947__$1,new cljs.core.Keyword(null,"set-global-keys?","set-global-keys?",-497167260),true);
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47947__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),false);
var skip_installed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47947__$1,new cljs.core.Keyword(null,"skip-installed?","skip-installed?",2027430119),false);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47947__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var shortcut_map = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var handler = (new goog.ui.KeyboardShortcutHandler(window));
if(cljs.core.truth_(set_global_keys_QMARK_)){
handler.setGlobalKeys(frontend.modules.shortcut.core.global_keys);
} else {
}

handler.setAlwaysPreventDefault(prevent_default_QMARK_);

var seq__47948_48063 = cljs.core.seq(shortcut_map);
var chunk__47949_48064 = null;
var count__47950_48065 = (0);
var i__47951_48066 = (0);
while(true){
if((i__47951_48066 < count__47950_48065)){
var vec__47958_48067 = chunk__47949_48064.cljs$core$IIndexed$_nth$arity$2(null,i__47951_48066);
var id_48068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47958_48067,(0),null);
var __48069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47958_48067,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_48068);


var G__48070 = seq__47948_48063;
var G__48071 = chunk__47949_48064;
var G__48072 = count__47950_48065;
var G__48073 = (i__47951_48066 + (1));
seq__47948_48063 = G__48070;
chunk__47949_48064 = G__48071;
count__47950_48065 = G__48072;
i__47951_48066 = G__48073;
continue;
} else {
var temp__5720__auto___48074 = cljs.core.seq(seq__47948_48063);
if(temp__5720__auto___48074){
var seq__47948_48075__$1 = temp__5720__auto___48074;
if(cljs.core.chunked_seq_QMARK_(seq__47948_48075__$1)){
var c__5565__auto___48076 = cljs.core.chunk_first(seq__47948_48075__$1);
var G__48077 = cljs.core.chunk_rest(seq__47948_48075__$1);
var G__48078 = c__5565__auto___48076;
var G__48079 = cljs.core.count(c__5565__auto___48076);
var G__48080 = (0);
seq__47948_48063 = G__48077;
chunk__47949_48064 = G__48078;
count__47950_48065 = G__48079;
i__47951_48066 = G__48080;
continue;
} else {
var vec__47961_48081 = cljs.core.first(seq__47948_48075__$1);
var id_48082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47961_48081,(0),null);
var __48083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47961_48081,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_48082);


var G__48084 = cljs.core.next(seq__47948_48075__$1);
var G__48085 = null;
var G__48086 = (0);
var G__48087 = (0);
seq__47948_48063 = G__48084;
chunk__47949_48064 = G__48085;
count__47950_48065 = G__48086;
i__47951_48066 = G__48087;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47964_SHARP_){
return frontend.modules.shortcut.core.install_shortcut_BANG_(p1__47964_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
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
var temp__5720__auto___48088 = new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___48088)){
var install_id_48089 = temp__5720__auto___48088;
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(install_id_48089);
} else {
}

return state;
})], null);
});
frontend.modules.shortcut.core.unlisten_all = (function frontend$modules$shortcut$core$unlisten_all(){
var seq__47965 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__47967 = null;
var count__47968 = (0);
var i__47969 = (0);
while(true){
if((i__47969 < count__47968)){
var map__47973 = chunk__47967.cljs$core$IIndexed$_nth$arity$2(null,i__47969);
var map__47973__$1 = cljs.core.__destructure_map(map__47973);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47973__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47973__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__48090 = seq__47965;
var G__48091 = chunk__47967;
var G__48092 = count__47968;
var G__48093 = (i__47969 + (1));
seq__47965 = G__48090;
chunk__47967 = G__48091;
count__47968 = G__48092;
i__47969 = G__48093;
continue;
} else {
var G__48094 = seq__47965;
var G__48095 = chunk__47967;
var G__48096 = count__47968;
var G__48097 = (i__47969 + (1));
seq__47965 = G__48094;
chunk__47967 = G__48095;
count__47968 = G__48096;
i__47969 = G__48097;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__47965);
if(temp__5720__auto__){
var seq__47965__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47965__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47965__$1);
var G__48098 = cljs.core.chunk_rest(seq__47965__$1);
var G__48099 = c__5565__auto__;
var G__48100 = cljs.core.count(c__5565__auto__);
var G__48101 = (0);
seq__47965 = G__48098;
chunk__47967 = G__48099;
count__47968 = G__48100;
i__47969 = G__48101;
continue;
} else {
var map__47974 = cljs.core.first(seq__47965__$1);
var map__47974__$1 = cljs.core.__destructure_map(map__47974);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47974__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47974__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__48102 = cljs.core.next(seq__47965__$1);
var G__48103 = null;
var G__48104 = (0);
var G__48105 = (0);
seq__47965 = G__48102;
chunk__47967 = G__48103;
count__47968 = G__48104;
i__47969 = G__48105;
continue;
} else {
var G__48106 = cljs.core.next(seq__47965__$1);
var G__48107 = null;
var G__48108 = (0);
var G__48109 = (0);
seq__47965 = G__48106;
chunk__47967 = G__48107;
count__47968 = G__48108;
i__47969 = G__48109;
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
var seq__47975 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__47977 = null;
var count__47978 = (0);
var i__47979 = (0);
while(true){
if((i__47979 < count__47978)){
var map__47983 = chunk__47977.cljs$core$IIndexed$_nth$arity$2(null,i__47979);
var map__47983__$1 = cljs.core.__destructure_map(map__47983);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47983__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47983__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47983__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__48110 = seq__47975;
var G__48111 = chunk__47977;
var G__48112 = count__47978;
var G__48113 = (i__47979 + (1));
seq__47975 = G__48110;
chunk__47977 = G__48111;
count__47978 = G__48112;
i__47979 = G__48113;
continue;
} else {
var G__48114 = seq__47975;
var G__48115 = chunk__47977;
var G__48116 = count__47978;
var G__48117 = (i__47979 + (1));
seq__47975 = G__48114;
chunk__47977 = G__48115;
count__47978 = G__48116;
i__47979 = G__48117;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__47975);
if(temp__5720__auto__){
var seq__47975__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47975__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47975__$1);
var G__48118 = cljs.core.chunk_rest(seq__47975__$1);
var G__48119 = c__5565__auto__;
var G__48120 = cljs.core.count(c__5565__auto__);
var G__48121 = (0);
seq__47975 = G__48118;
chunk__47977 = G__48119;
count__47978 = G__48120;
i__47979 = G__48121;
continue;
} else {
var map__47984 = cljs.core.first(seq__47975__$1);
var map__47984__$1 = cljs.core.__destructure_map(map__47984);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__48122 = cljs.core.next(seq__47975__$1);
var G__48123 = null;
var G__48124 = (0);
var G__48125 = (0);
seq__47975 = G__48122;
chunk__47977 = G__48123;
count__47978 = G__48124;
i__47979 = G__48125;
continue;
} else {
var G__48126 = cljs.core.next(seq__47975__$1);
var G__48127 = null;
var G__48128 = (0);
var G__48129 = (0);
seq__47975 = G__48126;
chunk__47977 = G__48127;
count__47978 = G__48128;
i__47979 = G__48129;
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

var seq__47985_48130 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__47986_48131 = null;
var count__47987_48132 = (0);
var i__47988_48133 = (0);
while(true){
if((i__47988_48133 < count__47987_48132)){
var id_48134 = chunk__47986_48131.cljs$core$IIndexed$_nth$arity$2(null,i__47988_48133);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_48134);


var G__48135 = seq__47985_48130;
var G__48136 = chunk__47986_48131;
var G__48137 = count__47987_48132;
var G__48138 = (i__47988_48133 + (1));
seq__47985_48130 = G__48135;
chunk__47986_48131 = G__48136;
count__47987_48132 = G__48137;
i__47988_48133 = G__48138;
continue;
} else {
var temp__5720__auto___48139 = cljs.core.seq(seq__47985_48130);
if(temp__5720__auto___48139){
var seq__47985_48140__$1 = temp__5720__auto___48139;
if(cljs.core.chunked_seq_QMARK_(seq__47985_48140__$1)){
var c__5565__auto___48141 = cljs.core.chunk_first(seq__47985_48140__$1);
var G__48142 = cljs.core.chunk_rest(seq__47985_48140__$1);
var G__48143 = c__5565__auto___48141;
var G__48144 = cljs.core.count(c__5565__auto___48141);
var G__48145 = (0);
seq__47985_48130 = G__48142;
chunk__47986_48131 = G__48143;
count__47987_48132 = G__48144;
i__47988_48133 = G__48145;
continue;
} else {
var id_48146 = cljs.core.first(seq__47985_48140__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_48146);


var G__48147 = cljs.core.next(seq__47985_48140__$1);
var G__48148 = null;
var G__48149 = (0);
var G__48150 = (0);
seq__47985_48130 = G__48147;
chunk__47986_48131 = G__48148;
count__47987_48132 = G__48149;
i__47988_48133 = G__48150;
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
var G__47989 = keyname;
var G__47989__$1 = (cljs.core.truth_(ctrl)?["ctrl+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47989)].join(''):G__47989);
var G__47989__$2 = (cljs.core.truth_(alt)?["alt+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47989__$1)].join(''):G__47989__$1);
var G__47989__$3 = (cljs.core.truth_(meta)?["meta+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47989__$2)].join(''):G__47989__$2);
if(cljs.core.truth_(shift)){
return ["shift+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47989__$3)].join('');
} else {
return G__47989__$3;
}
});
frontend.modules.shortcut.core.keyname = (function frontend$modules$shortcut$core$keyname(e){
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode));
var G__47990 = name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__47990)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ctrl",G__47990)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("shift",G__47990)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("alt",G__47990)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("esc",G__47990)){
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
var seq__47992_48151 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__47993_48152 = null;
var count__47994_48153 = (0);
var i__47995_48154 = (0);
while(true){
if((i__47995_48154 < count__47994_48153)){
var id_48155 = chunk__47993_48152.cljs$core$IIndexed$_nth$arity$2(null,i__47995_48154);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_48155);


var G__48156 = seq__47992_48151;
var G__48157 = chunk__47993_48152;
var G__48158 = count__47994_48153;
var G__48159 = (i__47995_48154 + (1));
seq__47992_48151 = G__48156;
chunk__47993_48152 = G__48157;
count__47994_48153 = G__48158;
i__47995_48154 = G__48159;
continue;
} else {
var temp__5720__auto___48160 = cljs.core.seq(seq__47992_48151);
if(temp__5720__auto___48160){
var seq__47992_48161__$1 = temp__5720__auto___48160;
if(cljs.core.chunked_seq_QMARK_(seq__47992_48161__$1)){
var c__5565__auto___48162 = cljs.core.chunk_first(seq__47992_48161__$1);
var G__48163 = cljs.core.chunk_rest(seq__47992_48161__$1);
var G__48164 = c__5565__auto___48162;
var G__48165 = cljs.core.count(c__5565__auto___48162);
var G__48166 = (0);
seq__47992_48151 = G__48163;
chunk__47993_48152 = G__48164;
count__47994_48153 = G__48165;
i__47995_48154 = G__48166;
continue;
} else {
var id_48167 = cljs.core.first(seq__47992_48161__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_48167);


var G__48168 = cljs.core.next(seq__47992_48161__$1);
var G__48169 = null;
var G__48170 = (0);
var G__48171 = (0);
seq__47992_48151 = G__48168;
chunk__47993_48152 = G__48169;
count__47994_48153 = G__48170;
i__47995_48154 = G__48171;
continue;
}
} else {
}
}
break;
}

goog.events.listen(handler,"key",(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keystroke,(function (p1__47991_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47991_SHARP_),frontend.modules.shortcut.core.keyname(e)].join('');
}));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698),handler);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (p__47996){
var map__47997 = p__47996;
var map__47997__$1 = cljs.core.__destructure_map(map__47997);
var state = map__47997__$1;
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47997__$1,new cljs.core.Keyword("rum","args","rum/args",1315791754));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47997__$1,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
var k_48172 = cljs.core.first(args);
var keystroke_48173 = clojure.string.trim(cljs.core.deref(local));
if(cljs.core.empty_QMARK_(keystroke_48173)){
} else {
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentArrayMap.createAsIfByAssoc([k_48172,keystroke_48173])], 0)));
}

var temp__5720__auto___48175 = new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___48175)){
var handler_48177 = temp__5720__auto___48175;
handler_48177.dispose();
} else {
}

setTimeout((function (){
return frontend.modules.shortcut.core.refresh_BANG_();
}),(500));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698));
})], null);
});

//# sourceMappingURL=frontend.modules.shortcut.core.js.map
