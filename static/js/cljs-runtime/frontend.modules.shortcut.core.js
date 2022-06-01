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
var seq__54674_54938 = cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending));
var chunk__54675_54939 = null;
var count__54676_54940 = (0);
var i__54677_54941 = (0);
while(true){
if((i__54677_54941 < count__54676_54940)){
var vec__54689_54943 = chunk__54675_54939.cljs$core$IIndexed$_nth$arity$2(null,i__54677_54941);
var handler_id_54944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54689_54943,(0),null);
var id_54945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54689_54943,(1),null);
var shortcut_54946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54689_54943,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_54944,id_54945,shortcut_54946) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_54944,id_54945,shortcut_54946));


var G__54947 = seq__54674_54938;
var G__54948 = chunk__54675_54939;
var G__54949 = count__54676_54940;
var G__54950 = (i__54677_54941 + (1));
seq__54674_54938 = G__54947;
chunk__54675_54939 = G__54948;
count__54676_54940 = G__54949;
i__54677_54941 = G__54950;
continue;
} else {
var temp__5720__auto___54951 = cljs.core.seq(seq__54674_54938);
if(temp__5720__auto___54951){
var seq__54674_54952__$1 = temp__5720__auto___54951;
if(cljs.core.chunked_seq_QMARK_(seq__54674_54952__$1)){
var c__5565__auto___54953 = cljs.core.chunk_first(seq__54674_54952__$1);
var G__54954 = cljs.core.chunk_rest(seq__54674_54952__$1);
var G__54955 = c__5565__auto___54953;
var G__54956 = cljs.core.count(c__5565__auto___54953);
var G__54957 = (0);
seq__54674_54938 = G__54954;
chunk__54675_54939 = G__54955;
count__54676_54940 = G__54956;
i__54677_54941 = G__54957;
continue;
} else {
var vec__54693_54958 = cljs.core.first(seq__54674_54952__$1);
var handler_id_54959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54693_54958,(0),null);
var id_54960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54693_54958,(1),null);
var shortcut_54961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54693_54958,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_54959,id_54960,shortcut_54961) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_54959,id_54960,shortcut_54961));


var G__54962 = cljs.core.next(seq__54674_54952__$1);
var G__54963 = null;
var G__54964 = (0);
var G__54965 = (0);
seq__54674_54938 = G__54962;
chunk__54675_54939 = G__54963;
count__54676_54940 = G__54964;
i__54677_54941 = G__54965;
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
return new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54708_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__54708_SHARP_),handler_id);
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
var G__54735 = arguments.length;
switch (G__54735) {
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
var seq__54738 = cljs.core.seq(frontend.modules.shortcut.data_helper.shortcut_binding(id));
var chunk__54739 = null;
var count__54740 = (0);
var i__54741 = (0);
while(true){
if((i__54741 < count__54740)){
var k = chunk__54739.cljs$core$IIndexed$_nth$arity$2(null,i__54741);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e54753){if((e54753 instanceof Object)){
var e_54972 = e54753;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_54972], null),new cljs.core.Keyword(null,"line","line",212345235),70], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_54972.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e54753;

}
}

var G__54973 = seq__54738;
var G__54974 = chunk__54739;
var G__54975 = count__54740;
var G__54976 = (i__54741 + (1));
seq__54738 = G__54973;
chunk__54739 = G__54974;
count__54740 = G__54975;
i__54741 = G__54976;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__54738);
if(temp__5720__auto____$1){
var seq__54738__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54738__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__54738__$1);
var G__54977 = cljs.core.chunk_rest(seq__54738__$1);
var G__54978 = c__5565__auto__;
var G__54979 = cljs.core.count(c__5565__auto__);
var G__54980 = (0);
seq__54738 = G__54977;
chunk__54739 = G__54978;
count__54740 = G__54979;
i__54741 = G__54980;
continue;
} else {
var k = cljs.core.first(seq__54738__$1);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e54756){if((e54756 instanceof Object)){
var e_54981 = e54756;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_54981], null),new cljs.core.Keyword(null,"line","line",212345235),70], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_54981.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e54756;

}
}

var G__54982 = cljs.core.next(seq__54738__$1);
var G__54983 = null;
var G__54984 = (0);
var G__54985 = (0);
seq__54738 = G__54982;
chunk__54739 = G__54983;
count__54740 = G__54984;
i__54741 = G__54985;
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
var temp__5720__auto___54986__$1 = frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_id);
if(cljs.core.truth_(temp__5720__auto___54986__$1)){
var ks_54987 = temp__5720__auto___54986__$1;
var seq__54758_54988 = cljs.core.seq(ks_54987);
var chunk__54759_54989 = null;
var count__54760_54990 = (0);
var i__54761_54991 = (0);
while(true){
if((i__54761_54991 < count__54760_54990)){
var k_55002 = chunk__54759_54989.cljs$core$IIndexed$_nth$arity$2(null,i__54761_54991);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_55002));


var G__55013 = seq__54758_54988;
var G__55014 = chunk__54759_54989;
var G__55015 = count__54760_54990;
var G__55016 = (i__54761_54991 + (1));
seq__54758_54988 = G__55013;
chunk__54759_54989 = G__55014;
count__54760_54990 = G__55015;
i__54761_54991 = G__55016;
continue;
} else {
var temp__5720__auto___55022__$2 = cljs.core.seq(seq__54758_54988);
if(temp__5720__auto___55022__$2){
var seq__54758_55024__$1 = temp__5720__auto___55022__$2;
if(cljs.core.chunked_seq_QMARK_(seq__54758_55024__$1)){
var c__5565__auto___55026 = cljs.core.chunk_first(seq__54758_55024__$1);
var G__55027 = cljs.core.chunk_rest(seq__54758_55024__$1);
var G__55028 = c__5565__auto___55026;
var G__55029 = cljs.core.count(c__5565__auto___55026);
var G__55030 = (0);
seq__54758_54988 = G__55027;
chunk__54759_54989 = G__55028;
count__54760_54990 = G__55029;
i__54761_54991 = G__55030;
continue;
} else {
var k_55031 = cljs.core.first(seq__54758_55024__$1);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_55031));


var G__55032 = cljs.core.next(seq__54758_55024__$1);
var G__55033 = null;
var G__55034 = (0);
var G__55035 = (0);
seq__54758_54988 = G__55032;
chunk__54759_54989 = G__55033;
count__54760_54990 = G__55034;
i__54761_54991 = G__55035;
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
frontend.modules.shortcut.core.install_shortcut_BANG_ = (function frontend$modules$shortcut$core$install_shortcut_BANG_(handler_id,p__54832){
var map__54840 = p__54832;
var map__54840__$1 = cljs.core.__destructure_map(map__54840);
var set_global_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54840__$1,new cljs.core.Keyword(null,"set-global-keys?","set-global-keys?",-497167260),true);
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54840__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),false);
var skip_installed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54840__$1,new cljs.core.Keyword(null,"skip-installed?","skip-installed?",2027430119),false);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54840__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var shortcut_map = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var handler = (new goog.ui.KeyboardShortcutHandler(window));
if(cljs.core.truth_(set_global_keys_QMARK_)){
handler.setGlobalKeys(frontend.modules.shortcut.core.global_keys);
} else {
}

handler.setAlwaysPreventDefault(prevent_default_QMARK_);

var seq__54843_55037 = cljs.core.seq(shortcut_map);
var chunk__54844_55038 = null;
var count__54845_55039 = (0);
var i__54846_55040 = (0);
while(true){
if((i__54846_55040 < count__54845_55039)){
var vec__54853_55041 = chunk__54844_55038.cljs$core$IIndexed$_nth$arity$2(null,i__54846_55040);
var id_55042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54853_55041,(0),null);
var __55043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54853_55041,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_55042);


var G__55045 = seq__54843_55037;
var G__55046 = chunk__54844_55038;
var G__55047 = count__54845_55039;
var G__55048 = (i__54846_55040 + (1));
seq__54843_55037 = G__55045;
chunk__54844_55038 = G__55046;
count__54845_55039 = G__55047;
i__54846_55040 = G__55048;
continue;
} else {
var temp__5720__auto___55055 = cljs.core.seq(seq__54843_55037);
if(temp__5720__auto___55055){
var seq__54843_55056__$1 = temp__5720__auto___55055;
if(cljs.core.chunked_seq_QMARK_(seq__54843_55056__$1)){
var c__5565__auto___55057 = cljs.core.chunk_first(seq__54843_55056__$1);
var G__55058 = cljs.core.chunk_rest(seq__54843_55056__$1);
var G__55059 = c__5565__auto___55057;
var G__55060 = cljs.core.count(c__5565__auto___55057);
var G__55061 = (0);
seq__54843_55037 = G__55058;
chunk__54844_55038 = G__55059;
count__54845_55039 = G__55060;
i__54846_55040 = G__55061;
continue;
} else {
var vec__54857_55062 = cljs.core.first(seq__54843_55056__$1);
var id_55063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857_55062,(0),null);
var __55064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857_55062,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_55063);


var G__55066 = cljs.core.next(seq__54843_55056__$1);
var G__55067 = null;
var G__55068 = (0);
var G__55069 = (0);
seq__54843_55037 = G__55066;
chunk__54844_55038 = G__55067;
count__54845_55039 = G__55068;
i__54846_55040 = G__55069;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54865_SHARP_){
return frontend.modules.shortcut.core.install_shortcut_BANG_(p1__54865_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
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
var temp__5720__auto___55071 = new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___55071)){
var install_id_55072 = temp__5720__auto___55071;
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(install_id_55072);
} else {
}

return state;
})], null);
});
frontend.modules.shortcut.core.unlisten_all = (function frontend$modules$shortcut$core$unlisten_all(){
var seq__54876 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__54879 = null;
var count__54880 = (0);
var i__54881 = (0);
while(true){
if((i__54881 < count__54880)){
var map__54888 = chunk__54879.cljs$core$IIndexed$_nth$arity$2(null,i__54881);
var map__54888__$1 = cljs.core.__destructure_map(map__54888);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__55074 = seq__54876;
var G__55075 = chunk__54879;
var G__55076 = count__54880;
var G__55077 = (i__54881 + (1));
seq__54876 = G__55074;
chunk__54879 = G__55075;
count__54880 = G__55076;
i__54881 = G__55077;
continue;
} else {
var G__55078 = seq__54876;
var G__55079 = chunk__54879;
var G__55080 = count__54880;
var G__55081 = (i__54881 + (1));
seq__54876 = G__55078;
chunk__54879 = G__55079;
count__54880 = G__55080;
i__54881 = G__55081;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__54876);
if(temp__5720__auto__){
var seq__54876__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54876__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__54876__$1);
var G__55082 = cljs.core.chunk_rest(seq__54876__$1);
var G__55083 = c__5565__auto__;
var G__55084 = cljs.core.count(c__5565__auto__);
var G__55085 = (0);
seq__54876 = G__55082;
chunk__54879 = G__55083;
count__54880 = G__55084;
i__54881 = G__55085;
continue;
} else {
var map__54889 = cljs.core.first(seq__54876__$1);
var map__54889__$1 = cljs.core.__destructure_map(map__54889);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54889__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54889__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__55086 = cljs.core.next(seq__54876__$1);
var G__55087 = null;
var G__55088 = (0);
var G__55089 = (0);
seq__54876 = G__55086;
chunk__54879 = G__55087;
count__54880 = G__55088;
i__54881 = G__55089;
continue;
} else {
var G__55090 = cljs.core.next(seq__54876__$1);
var G__55091 = null;
var G__55092 = (0);
var G__55093 = (0);
seq__54876 = G__55090;
chunk__54879 = G__55091;
count__54880 = G__55092;
i__54881 = G__55093;
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
var seq__54892 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__54894 = null;
var count__54895 = (0);
var i__54896 = (0);
while(true){
if((i__54896 < count__54895)){
var map__54905 = chunk__54894.cljs$core$IIndexed$_nth$arity$2(null,i__54896);
var map__54905__$1 = cljs.core.__destructure_map(map__54905);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54905__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54905__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54905__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__55094 = seq__54892;
var G__55095 = chunk__54894;
var G__55096 = count__54895;
var G__55097 = (i__54896 + (1));
seq__54892 = G__55094;
chunk__54894 = G__55095;
count__54895 = G__55096;
i__54896 = G__55097;
continue;
} else {
var G__55098 = seq__54892;
var G__55099 = chunk__54894;
var G__55100 = count__54895;
var G__55101 = (i__54896 + (1));
seq__54892 = G__55098;
chunk__54894 = G__55099;
count__54895 = G__55100;
i__54896 = G__55101;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__54892);
if(temp__5720__auto__){
var seq__54892__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54892__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__54892__$1);
var G__55102 = cljs.core.chunk_rest(seq__54892__$1);
var G__55103 = c__5565__auto__;
var G__55104 = cljs.core.count(c__5565__auto__);
var G__55105 = (0);
seq__54892 = G__55102;
chunk__54894 = G__55103;
count__54895 = G__55104;
i__54896 = G__55105;
continue;
} else {
var map__54908 = cljs.core.first(seq__54892__$1);
var map__54908__$1 = cljs.core.__destructure_map(map__54908);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54908__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54908__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54908__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__55106 = cljs.core.next(seq__54892__$1);
var G__55107 = null;
var G__55108 = (0);
var G__55109 = (0);
seq__54892 = G__55106;
chunk__54894 = G__55107;
count__54895 = G__55108;
i__54896 = G__55109;
continue;
} else {
var G__55110 = cljs.core.next(seq__54892__$1);
var G__55111 = null;
var G__55112 = (0);
var G__55113 = (0);
seq__54892 = G__55110;
chunk__54894 = G__55111;
count__54895 = G__55112;
i__54896 = G__55113;
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

var seq__54914_55114 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__54915_55115 = null;
var count__54916_55116 = (0);
var i__54917_55117 = (0);
while(true){
if((i__54917_55117 < count__54916_55116)){
var id_55118 = chunk__54915_55115.cljs$core$IIndexed$_nth$arity$2(null,i__54917_55117);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_55118);


var G__55119 = seq__54914_55114;
var G__55120 = chunk__54915_55115;
var G__55121 = count__54916_55116;
var G__55122 = (i__54917_55117 + (1));
seq__54914_55114 = G__55119;
chunk__54915_55115 = G__55120;
count__54916_55116 = G__55121;
i__54917_55117 = G__55122;
continue;
} else {
var temp__5720__auto___55123 = cljs.core.seq(seq__54914_55114);
if(temp__5720__auto___55123){
var seq__54914_55124__$1 = temp__5720__auto___55123;
if(cljs.core.chunked_seq_QMARK_(seq__54914_55124__$1)){
var c__5565__auto___55125 = cljs.core.chunk_first(seq__54914_55124__$1);
var G__55126 = cljs.core.chunk_rest(seq__54914_55124__$1);
var G__55127 = c__5565__auto___55125;
var G__55128 = cljs.core.count(c__5565__auto___55125);
var G__55129 = (0);
seq__54914_55114 = G__55126;
chunk__54915_55115 = G__55127;
count__54916_55116 = G__55128;
i__54917_55117 = G__55129;
continue;
} else {
var id_55130 = cljs.core.first(seq__54914_55124__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_55130);


var G__55131 = cljs.core.next(seq__54914_55124__$1);
var G__55132 = null;
var G__55133 = (0);
var G__55134 = (0);
seq__54914_55114 = G__55131;
chunk__54915_55115 = G__55132;
count__54916_55116 = G__55133;
i__54917_55117 = G__55134;
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
var G__54925 = keyname;
var G__54925__$1 = (cljs.core.truth_(ctrl)?["ctrl+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54925)].join(''):G__54925);
var G__54925__$2 = (cljs.core.truth_(alt)?["alt+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54925__$1)].join(''):G__54925__$1);
var G__54925__$3 = (cljs.core.truth_(meta)?["meta+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54925__$2)].join(''):G__54925__$2);
if(cljs.core.truth_(shift)){
return ["shift+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54925__$3)].join('');
} else {
return G__54925__$3;
}
});
frontend.modules.shortcut.core.keyname = (function frontend$modules$shortcut$core$keyname(e){
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode));
var G__54926 = name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__54926)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ctrl",G__54926)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("shift",G__54926)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("alt",G__54926)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("esc",G__54926)){
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
var seq__54928_55135 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__54929_55136 = null;
var count__54930_55137 = (0);
var i__54931_55138 = (0);
while(true){
if((i__54931_55138 < count__54930_55137)){
var id_55139 = chunk__54929_55136.cljs$core$IIndexed$_nth$arity$2(null,i__54931_55138);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_55139);


var G__55140 = seq__54928_55135;
var G__55141 = chunk__54929_55136;
var G__55142 = count__54930_55137;
var G__55143 = (i__54931_55138 + (1));
seq__54928_55135 = G__55140;
chunk__54929_55136 = G__55141;
count__54930_55137 = G__55142;
i__54931_55138 = G__55143;
continue;
} else {
var temp__5720__auto___55144 = cljs.core.seq(seq__54928_55135);
if(temp__5720__auto___55144){
var seq__54928_55145__$1 = temp__5720__auto___55144;
if(cljs.core.chunked_seq_QMARK_(seq__54928_55145__$1)){
var c__5565__auto___55146 = cljs.core.chunk_first(seq__54928_55145__$1);
var G__55147 = cljs.core.chunk_rest(seq__54928_55145__$1);
var G__55148 = c__5565__auto___55146;
var G__55149 = cljs.core.count(c__5565__auto___55146);
var G__55150 = (0);
seq__54928_55135 = G__55147;
chunk__54929_55136 = G__55148;
count__54930_55137 = G__55149;
i__54931_55138 = G__55150;
continue;
} else {
var id_55151 = cljs.core.first(seq__54928_55145__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_55151);


var G__55152 = cljs.core.next(seq__54928_55145__$1);
var G__55153 = null;
var G__55154 = (0);
var G__55155 = (0);
seq__54928_55135 = G__55152;
chunk__54929_55136 = G__55153;
count__54930_55137 = G__55154;
i__54931_55138 = G__55155;
continue;
}
} else {
}
}
break;
}

goog.events.listen(handler,"key",(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keystroke,(function (p1__54927_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54927_SHARP_),frontend.modules.shortcut.core.keyname(e)].join('');
}));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698),handler);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (p__54936){
var map__54937 = p__54936;
var map__54937__$1 = cljs.core.__destructure_map(map__54937);
var state = map__54937__$1;
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54937__$1,new cljs.core.Keyword("rum","args","rum/args",1315791754));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54937__$1,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
var k_55156 = cljs.core.first(args);
var keystroke_55157 = clojure.string.trim(cljs.core.deref(local));
if(cljs.core.empty_QMARK_(keystroke_55157)){
} else {
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentArrayMap.createAsIfByAssoc([k_55156,keystroke_55157])], 0)));
}

var temp__5720__auto___55158 = new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___55158)){
var handler_55159 = temp__5720__auto___55158;
handler_55159.dispose();
} else {
}

setTimeout((function (){
return frontend.modules.shortcut.core.refresh_BANG_();
}),(500));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698));
})], null);
});

//# sourceMappingURL=frontend.modules.shortcut.core.js.map
