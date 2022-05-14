goog.provide('frontend.mobile.core');
var module$node_modules$$capacitor$app$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$app$dist$plugin_cjs", {});
var module$node_modules$$capacitor$status_bar$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$status_bar$dist$plugin_cjs", {});
frontend.mobile.core.ios_init = (function frontend$mobile$core$ios_init(){
var path = frontend.fs.capacitor_fs.iOS_ensure_documents_BANG_();
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["iOS container path: ",path], 0));
});
frontend.mobile.core.init_BANG_ = (function frontend$mobile$core$init_BANG_(){
if(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())){
module$node_modules$$capacitor$app$dist$plugin_cjs.App.addListener("backButton",(function (){
var href = window.location.href;
if((cljs.core.truth_(frontend.state.get_left_sidebar_open_QMARK_())?frontend.state.set_left_sidebar_open_BANG_(false):(cljs.core.truth_(frontend.state.settings_open_QMARK_())?frontend.state.close_settings_BANG_():(cljs.core.truth_(frontend.state.modal_opened_QMARK_())?frontend.state.close_modal_BANG_():true
))) === true){
if(((clojure.string.ends_with_QMARK_(href,"#/")) || (((clojure.string.ends_with_QMARK_(href,"/")) || ((!(clojure.string.includes_QMARK_(href,"#/")))))))){
return module$node_modules$$capacitor$app$dist$plugin_cjs.App.exitApp();
} else {
return window.history.back();
}
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
frontend.mobile.core.ios_init();

frontend.mobile.util.file_sync.removeAllListeners();

module$node_modules$$capacitor$app$dist$plugin_cjs.App.addListener("appUrlOpen",(function (data){
var temp__5720__auto__ = data.url;
if(cljs.core.truth_(temp__5720__auto__)){
var url = temp__5720__auto__;
if(clojure.string.starts_with_QMARK_(url,"logseq://auth-callback")){
var parsed_url = (new URL(url));
var code = parsed_url.searchParams.get("code");
return frontend.handler.user.login_callback(code);
} else {
return null;
}
} else {
return null;
}
}));

frontend.mobile.util.file_sync.addListener("debug",(function (event){
return console.log("\uD83D\uDD04",event);
}));
} else {
}

if(cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())){
frontend.mobile.util.fs_watcher.addListener("watcher",(function (event){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-watcher","changed","file-watcher/changed",-365229680),event], null));
}));

window.addEventListener("statusTap",(function (){
return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$1(true);
}));

module$node_modules$$capacitor$app$dist$plugin_cjs.App.addListener("appStateChange",(function (state){
if(cljs.core.truth_(frontend.state.get_current_repo())){
var is_active_QMARK_ = state.isActive;
if(cljs.core.truth_(is_active_QMARK_)){
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
} else {
return null;
}
}));

return window.addEventListener("sendIntentReceived",(function (){
return frontend.mobile.intent.handle_received();
}));
} else {
return null;
}
});

//# sourceMappingURL=frontend.mobile.core.js.map
