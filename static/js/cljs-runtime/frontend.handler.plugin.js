goog.provide('frontend.handler.plugin');
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin.lsp_enabled_QMARK_ !== 'undefined')){
} else {
frontend.handler.plugin.lsp_enabled_QMARK_ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.lsp_enabled_QMARK__or_theme();
} else {
return and__5041__auto__;
}
})();
}
frontend.handler.plugin.normalize_keyword_for_json = (function frontend$handler$plugin$normalize_keyword_for_json(input){
if(cljs.core.truth_(input)){
return clojure.walk.postwalk((function (a){
if((a instanceof cljs.core.Keyword)){
return camel_snake_kebab.core.__GT_camelCase(cljs.core.name(a));
} else {
if(cljs.core.uuid_QMARK_(a)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
} else {
return a;

}
}
}),input);
} else {
return null;
}
});
frontend.handler.plugin.invoke_exported_api = (function frontend$handler$plugin$invoke_exported_api(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49600 = arguments.length;
var i__5767__auto___49601 = (0);
while(true){
if((i__5767__auto___49601 < len__5766__auto___49600)){
args__5772__auto__.push((arguments[i__5767__auto___49601]));

var G__49602 = (i__5767__auto___49601 + (1));
i__5767__auto___49601 = G__49602;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,(window.logseq["api"]),type,args);
}catch (e49211){if((e49211 instanceof Error)){
var e = e49211;
return console.error(e);
} else {
throw e49211;

}
}}));

(frontend.handler.plugin.invoke_exported_api.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.plugin.invoke_exported_api.cljs$lang$applyTo = (function (seq49209){
var G__49210 = cljs.core.first(seq49209);
var seq49209__$1 = cljs.core.next(seq49209);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49210,seq49209__$1);
}));

if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin.central_endpoint !== 'undefined')){
} else {
frontend.handler.plugin.central_endpoint = "https://raw.githubusercontent.com/logseq/marketplace/master/";
}
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin.plugins_url !== 'undefined')){
} else {
frontend.handler.plugin.plugins_url = [frontend.handler.plugin.central_endpoint,"plugins.json"].join('');
}
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.plugin !== 'undefined') && (typeof frontend.handler.plugin.stats_url !== 'undefined')){
} else {
frontend.handler.plugin.stats_url = [frontend.handler.plugin.central_endpoint,"stats.json"].join('');
}
frontend.handler.plugin.gh_repo_url = (function frontend$handler$plugin$gh_repo_url(repo){
return ["https://github.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)].join('');
});
frontend.handler.plugin.pkg_asset = (function frontend$handler$plugin$pkg_asset(id,asset){
if(cljs.core.truth_((function (){var and__5041__auto__ = asset;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.starts_with_QMARK_(asset,"http");
} else {
return and__5041__auto__;
}
})())){
return asset;
} else {
var temp__5720__auto__ = (function (){var and__5041__auto__ = asset;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.replace(asset,/^[.\/]+/,"");
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var asset__$1 = temp__5720__auto__;
return [frontend.handler.plugin.central_endpoint,"packages/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset__$1)].join('');
} else {
return null;
}
}
});
frontend.handler.plugin.load_marketplace_plugins = (function frontend$handler$plugin$load_marketplace_plugins(refresh_QMARK_){
if(cljs.core.truth_((function (){var or__5043__auto__ = refresh_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)) == null);
}
})())){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.util.fetch.cljs$core$IFn$_invoke$arity$3(frontend.handler.plugin.plugins_url,(function (res){
var pkgs = new cljs.core.Keyword(null,"packages","packages",1549741112).cljs$core$IFn$_invoke$arity$1(res);
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798),pkgs);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(pkgs) : resolve.call(null,pkgs));
}),reject),reject);
}));
} else {
return promesa.core.resolved(new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
}
});
frontend.handler.plugin.load_marketplace_stats = (function frontend$handler$plugin$load_marketplace_stats(refresh_QMARK_){
if(cljs.core.truth_((function (){var or__5043__auto__ = refresh_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.Keyword("plugin","marketplace-stats","plugin/marketplace-stats",1801405730).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)) == null);
}
})())){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
return frontend.util.fetch.cljs$core$IFn$_invoke$arity$3(frontend.handler.plugin.stats_url,(function (res){
if(cljs.core.truth_(res)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","marketplace-stats","plugin/marketplace-stats",1801405730),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49212){
var vec__49213 = p__49212;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49213,(0),null);
var stat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49213,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stat,new cljs.core.Keyword(null,"total_downloads","total_downloads",-1370933259),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
return (a + cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,(2)));
}),(0),new cljs.core.Keyword(null,"releases","releases",460978484).cljs$core$IFn$_invoke$arity$1(stat)))], null);
}),res)));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));
} else {
return null;
}
}),reject);
}));
} else {
return promesa.core.resolved(null);
}
});
frontend.handler.plugin.installed_QMARK_ = (function frontend$handler$plugin$installed_QMARK_(id){
var and__5041__auto__ = cljs.core.contains_QMARK_(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id));
if(and__5041__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"iir","iir",-231680811)], null));
} else {
return and__5041__auto__;
}
});
frontend.handler.plugin.install_marketplace_plugin = (function frontend$handler$plugin$install_marketplace_plugin(p__49216){
var map__49217 = p__49216;
var map__49217__$1 = cljs.core.__destructure_map(map__49217);
var mft = map__49217__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49217__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.plugin.installed_QMARK_(id);
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581),mft);

electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"installMarketPlugin","installMarketPlugin",842572313),mft], 0));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(id) : resolve.call(null,id));
}));
}
});
frontend.handler.plugin.check_or_update_marketplace_plugin = (function frontend$handler$plugin$check_or_update_marketplace_plugin(p__49219,error_handler){
var map__49224 = p__49219;
var map__49224__$1 = cljs.core.__destructure_map(map__49224);
var pkg = map__49224__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49224__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.handler.plugin.installed_QMARK_(id));
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581),pkg);

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.load_marketplace_plugins(false),(function (e){
frontend.state.reset_all_updates_state();

throw e;
}));
})()
,(function (mfts){
var mft_49606 = cljs.core.some((function (p1__49218_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49218_SHARP_),id)){
return p1__49218_SHARP_;
} else {
return null;
}
}),mfts);
electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"updateMarketPlugin","updateMarketPlugin",-1044261342),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(pkg,new cljs.core.Keyword(null,"logger","logger",-220675947)),mft_49606], 0))], 0));

return true;
})),(function (e){
(error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(e) : error_handler.call(null,e));

frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581),null);

return console.error(e);
}));
}
});
frontend.handler.plugin.get_plugin_inst = (function frontend$handler$plugin$get_plugin_inst(id){
try{return LSPluginCore.ensurePlugin(cljs.core.name(id));
}catch (e49225){if((e49225 instanceof Error)){
var _e = e49225;
return null;
} else {
throw e49225;

}
}});
frontend.handler.plugin.open_updates_downloading = (function frontend$handler$plugin$open_updates_downloading(){
if(((cljs.core.not(new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))) && (cljs.core.seq(frontend.state.all_available_coming_updates())))){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49227_SHARP_){
if(cljs.core.truth_(frontend.state.coming_update_new_version_QMARK_(cljs.core.second(p1__49227_SHARP_)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__49227_SHARP_,(1),cljs.core.dissoc,new cljs.core.Keyword(null,"error-code","error-code",180497232));
} else {
return p1__49227_SHARP_;
}
}),new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608),true);
} else {
return null;
}
});
frontend.handler.plugin.close_updates_downloading = (function frontend$handler$plugin$close_updates_downloading(){
if(cljs.core.truth_(new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608),false);
} else {
return null;
}
});
frontend.handler.plugin.has_setting_schema_QMARK_ = (function frontend$handler$plugin$has_setting_schema_QMARK_(id){
var temp__5720__auto__ = (function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.plugin.get_plugin_inst(cljs.core.name(id));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var pl = temp__5720__auto__;
return cljs.core.boolean$(pl.settingsSchema);
} else {
return null;
}
});
frontend.handler.plugin.get_enabled_plugins_if_setting_schema = (function frontend$handler$plugin$get_enabled_plugins_if_setting_schema(){
var temp__5720__auto__ = cljs.core.seq(frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$3(false,null,true));
if(temp__5720__auto__){
var plugins = temp__5720__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49237_SHARP_){
return frontend.handler.plugin.has_setting_schema_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__49237_SHARP_));
}),plugins);
} else {
return null;
}
});
frontend.handler.plugin.setup_install_listener_BANG_ = (function frontend$handler$plugin$setup_install_listener_BANG_(t){
var channel = cljs.core.name(new cljs.core.Keyword(null,"lsp-installed","lsp-installed",-604801386));
var listener = (function (_,e){
console.debug(new cljs.core.Keyword(null,"lsp-installed","lsp-installed",-604801386),e);

var temp__5720__auto___49607 = cljs_bean.core.__GT_clj(e);
if(cljs.core.truth_(temp__5720__auto___49607)){
var map__49250_49608 = temp__5720__auto___49607;
var map__49250_49609__$1 = cljs.core.__destructure_map(map__49250_49608);
var status_49610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49250_49609__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var payload_49611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49250_49609__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var only_check_49612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49250_49609__$1,new cljs.core.Keyword(null,"only-check","only-check",-1961506795));
var G__49251_49613 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(status_49610);
var G__49251_49614__$1 = (((G__49251_49613 instanceof cljs.core.Keyword))?G__49251_49613.fqn:null);
switch (G__49251_49614__$1) {
case "completed":
var map__49252_49616 = payload_49611;
var map__49252_49617__$1 = cljs.core.__destructure_map(map__49252_49616);
var id_49618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49252_49617__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var dst_49619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49252_49617__$1,new cljs.core.Keyword(null,"dst","dst",844682948));
var name_49620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49252_49617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title_49621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49252_49617__$1,new cljs.core.Keyword(null,"title","title",636505583));
var theme_49622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49252_49617__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var name_49623__$1 = (function (){var or__5043__auto__ = title_49621;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = name_49620;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "Untitled";
}
}
})();
if(cljs.core.truth_(only_check_49612)){
frontend.state.consume_updates_coming_plugin(payload_49611,false);
} else {
if(cljs.core.truth_(frontend.handler.plugin.installed_QMARK_(id_49618))){
var temp__5720__auto___49624__$1 = frontend.handler.plugin.get_plugin_inst(id_49618);
if(cljs.core.truth_(temp__5720__auto___49624__$1)){
var pl_49625 = temp__5720__auto___49624__$1;
promesa.core.then.cljs$core$IFn$_invoke$arity$2(pl_49625.reload(),(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","update","plugin/update",2040056703)) : t.call(null,new cljs.core.Keyword("plugin","update","plugin/update",2040056703)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plugins","plugins",1900073717)) : t.call(null,new cljs.core.Keyword(null,"plugins","plugins",1900073717)))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_49623__$1)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pl_49625.options.version)].join(''),new cljs.core.Keyword(null,"success","success",1890645906));

return frontend.state.consume_updates_coming_plugin(payload_49611,true);
}));
} else {
}
} else {
promesa.core.then.cljs$core$IFn$_invoke$arity$2(LSPluginCore.register(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id_49618,new cljs.core.Keyword(null,"url","url",276297046),dst_49619], null))),(function (){
if(cljs.core.truth_(theme_49622)){
return setTimeout((function (){
return (frontend.handler.plugin.select_a_plugin_theme.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.plugin.select_a_plugin_theme.cljs$core$IFn$_invoke$arity$1(id_49618) : frontend.handler.plugin.select_a_plugin_theme.call(null,id_49618));
}),(300));
} else {
return null;
}
}));

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)) : t.call(null,new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plugins","plugins",1900073717)) : t.call(null,new cljs.core.Keyword(null,"plugins","plugins",1900073717)))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_49623__$1)].join(''),new cljs.core.Keyword(null,"success","success",1890645906));
}
}

break;
case "error":
var error_code_49626 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(payload_49611),/^[\s\:\[]+/,""));
var vec__49260_49627 = (function (){var G__49263 = error_code_49626;
var G__49263__$1 = (((G__49263 instanceof cljs.core.Keyword))?G__49263.fqn:null);
switch (G__49263__$1) {
case "no-new-version":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","up-to-date","plugin/up-to-date",-1634846608)) : t.call(null,new cljs.core.Keyword("plugin","up-to-date","plugin/up-to-date",-1634846608))))," :)"].join(''),new cljs.core.Keyword(null,"success","success",1890645906)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [error_code_49626,new cljs.core.Keyword(null,"error","error",-978969032)], null);

}
})();
var msg_49628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260_49627,(0),null);
var type_49629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260_49627,(1),null);
var pending_QMARK__49630 = cljs.core.seq(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
if(cljs.core.truth_((function (){var and__5041__auto__ = only_check_49612;
if(cljs.core.truth_(and__5041__auto__)){
return pending_QMARK__49630;
} else {
return and__5041__auto__;
}
})())){
frontend.state.consume_updates_coming_plugin(payload_49611,false);
} else {
if(((cljs.core.not(only_check_49612)) && (cljs.core.not(pending_QMARK__49630)))){
frontend.state.consume_updates_coming_plugin(payload_49611,true);
} else {
}

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),type_49629))?"[Error]":""),["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload_49611)),"> "].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49628)].join(''),type_49629);
}

console.error(payload_49611);

break;
default:

}
} else {
}

setTimeout((function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581),null);
}),(512));

return true;
});
window.apis.addListener(channel,listener);

return (function (){
return window.apis.removeAllListeners(channel);
});
});
frontend.handler.plugin.register_plugin = (function frontend$handler$plugin$register_plugin(pl){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pl)),pl], 0));
});
frontend.handler.plugin.unregister_plugin = (function frontend$handler$plugin$unregister_plugin(id){
return LSPluginCore.unregister(id);
});
frontend.handler.plugin.host_mounted_BANG_ = (function frontend$handler$plugin$host_mounted_BANG_(){
var and__5041__auto__ = frontend.handler.plugin.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return LSPluginCore.hostMounted();
} else {
return and__5041__auto__;
}
});
frontend.handler.plugin.register_plugin_slash_command = (function frontend$handler$plugin$register_plugin_slash_command(pid,p__49269){
var vec__49270 = p__49269;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49270,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49270,(1),null);
var temp__5720__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5720__auto__)){
var pid__$1 = temp__5720__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),pid__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-slash-commands","plugin/installed-slash-commands",-58447235),pid__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cmd],[cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49264_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__49264_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid__$1], null));
}),actions)])], 0));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rebuild-slash-commands-list","rebuild-slash-commands-list",-639662306)], null));

return true;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_slash_command = (function frontend$handler$plugin$unregister_plugin_slash_command(pid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.state,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-slash-commands","plugin/installed-slash-commands",-58447235),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid)], null));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rebuild-slash-commands-list","rebuild-slash-commands-list",-639662306)], null));
});
frontend.handler.plugin.keybinding_mode_handler_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),new cljs.core.Keyword(null,"non-editing","non-editing",-24940958),new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985),new cljs.core.Keyword(null,"editing","editing",1365491601),new cljs.core.Keyword("shortcut.handler","block-editing-only","shortcut.handler/block-editing-only",794342449)], null);
frontend.handler.plugin.simple_cmd__GT_palette_cmd = (function frontend$handler$plugin$simple_cmd__GT_palette_cmd(pid,p__49325,action){
var map__49326 = p__49325;
var map__49326__$1 = cljs.core.__destructure_map(map__49326);
var cmd = map__49326__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49326__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49326__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49326__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49326__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var keybinding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49326__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var palette_cmd = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["plugin.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')),new cljs.core.Keyword(null,"desc","desc",2093485764),(function (){var or__5043__auto__ = desc;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return label;
}
})(),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(keybinding);
if(cljs.core.truth_(temp__5720__auto__)){
var shortcut = temp__5720__auto__;
if(cljs.core.truth_(frontend.util.mac_QMARK_)){
var or__5043__auto__ = new cljs.core.Keyword(null,"mac","mac",-1879391650).cljs$core$IFn$_invoke$arity$1(keybinding);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return shortcut;
}
} else {
return shortcut;
}
} else {
return null;
}
})(),new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),(function (){var mode = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(keybinding);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})();
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.keybinding_mode_handler_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(mode));
})(),new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exec-plugin-cmd","exec-plugin-cmd",1049730302),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cmd,new cljs.core.Keyword(null,"action","action",-811238024),action], null)], null));
})], null);
return palette_cmd;
});
frontend.handler.plugin.simple_cmd_keybinding__GT_shortcut_args = (function frontend$handler$plugin$simple_cmd_keybinding__GT_shortcut_args(pid,key,keybinding){
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["plugin.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''));
var binding = new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(keybinding);
var binding__$1 = (cljs.core.truth_(frontend.util.mac_QMARK_)?(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"mac","mac",-1879391650).cljs$core$IFn$_invoke$arity$1(keybinding);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return binding;
}
})():binding);
var mode = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(keybinding);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"global","global",93595047);
}
})();
var mode__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.keybinding_mode_handler_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(mode));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode__$1,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),binding__$1], null)], null);
});
frontend.handler.plugin.register_plugin_simple_command = (function frontend$handler$plugin$register_plugin_simple_command(pid,p__49373,action){
var map__49374 = p__49373;
var map__49374__$1 = cljs.core.__destructure_map(map__49374);
var cmd = map__49374__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49374__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5720__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5720__auto__)){
var pid__$1 = temp__5720__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),pid__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996),pid__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cmd,action,pid__$1], null)], 0));

return true;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_simple_command = (function frontend$handler$plugin$unregister_plugin_simple_command(pid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.state,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid)], null));
});
frontend.handler.plugin.register_plugin_ui_item = (function frontend$handler$plugin$register_plugin_ui_item(pid,p__49380){
var map__49381 = p__49380;
var map__49381__$1 = cljs.core.__destructure_map(map__49381);
var opts = map__49381__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49381__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5720__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5720__auto__)){
var pid__$1 = temp__5720__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),pid__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868),pid__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,opts,pid__$1], null)], 0));

return true;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_ui_items = (function frontend$handler$plugin$unregister_plugin_ui_items(pid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid)], null),cljs.core.PersistentVector.EMPTY);
});
frontend.handler.plugin.register_plugin_resources = (function frontend$handler$plugin$register_plugin_resources(pid,type,p__49386){
var map__49387 = p__49386;
var map__49387__$1 = cljs.core.__destructure_map(map__49387);
var opts = map__49387__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49387__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var temp__5720__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5720__auto__)){
var pid__$1 = temp__5720__auto__;
var temp__5720__auto____$1 = (function (){var and__5041__auto__ = key;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var type__$1 = temp__5720__auto____$1;
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),pid__$1,type__$1], null);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update_in,path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid__$1], null)], 0))], 0));

return true;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_resources = (function frontend$handler$plugin$unregister_plugin_resources(pid){
var temp__5720__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5720__auto__)){
var pid__$1 = temp__5720__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.state,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),pid__$1], null));

return true;
} else {
return null;
}
});
frontend.handler.plugin.unregister_plugin_themes = (function frontend$handler$plugin$unregister_plugin_themes(var_args){
var G__49392 = arguments.length;
switch (G__49392) {
case 1:
return frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$1 = (function (pid){
return frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$2(pid,true);
}));

(frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$2 = (function (pid,effect){
return LSPluginCore.unregisterTheme(cljs.core.name(pid),effect);
}));

(frontend.handler.plugin.unregister_plugin_themes.cljs$lang$maxFixedArity = 2);

frontend.handler.plugin._STAR_fenced_code_providers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
frontend.handler.plugin.register_fenced_code_renderer = (function frontend$handler$plugin$register_fenced_code_renderer(pid,type,p__49399){
var map__49400 = p__49399;
var map__49400__$1 = cljs.core.__destructure_map(map__49400);
var _opts = map__49400__$1;
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49400__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49400__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49400__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49400__$1,new cljs.core.Keyword(null,"edit","edit",-1641834166));
var temp__5720__auto__ = (function (){var and__5041__auto__ = type;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var key = temp__5720__auto__;
frontend.handler.plugin.register_plugin_resources(pid,new cljs.core.Keyword(null,"fenced-code-renderers","fenced-code-renderers",2028100130),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"edit","edit",-1641834166),edit,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"subs","subs",-186681991),subs,new cljs.core.Keyword(null,"render","render",-1408033454),render], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.plugin._STAR_fenced_code_providers,cljs.core.conj,pid);

return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.plugin._STAR_fenced_code_providers,cljs.core.disj,pid);
});
} else {
return null;
}
});
frontend.handler.plugin.hook_fenced_code_by_type = (function frontend$handler$plugin$hook_fenced_code_by_type(type){
var temp__5720__auto__ = (function (){var and__5041__auto__ = cljs.core.seq(cljs.core.deref(frontend.handler.plugin._STAR_fenced_code_providers));
if(and__5041__auto__){
var and__5041__auto____$1 = type;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var key = temp__5720__auto__;
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49403_SHARP_){
return frontend.state.get_plugin_resource(p1__49403_SHARP_,new cljs.core.Keyword(null,"fenced-code-renderers","fenced-code-renderers",2028100130),key);
}),cljs.core.deref(frontend.handler.plugin._STAR_fenced_code_providers)));
} else {
return null;
}
});
frontend.handler.plugin._STAR_extensions_enhancer_providers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
frontend.handler.plugin.register_extensions_enhancer = (function frontend$handler$plugin$register_extensions_enhancer(pid,type,p__49408){
var map__49409 = p__49408;
var map__49409__$1 = cljs.core.__destructure_map(map__49409);
var _opts = map__49409__$1;
var enhancer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49409__$1,new cljs.core.Keyword(null,"enhancer","enhancer",-929020171));
var temp__5720__auto__ = (function (){var and__5041__auto__ = type;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var key = temp__5720__auto__;
frontend.handler.plugin.register_plugin_resources(pid,new cljs.core.Keyword(null,"extensions-enhancers","extensions-enhancers",-1229704403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"enhancer","enhancer",-929020171),enhancer], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.plugin._STAR_extensions_enhancer_providers,cljs.core.conj,pid);

return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.plugin._STAR_extensions_enhancer_providers,cljs.core.disj,pid);
});
} else {
return null;
}
});
frontend.handler.plugin.hook_extensions_enhancer_by_type = (function frontend$handler$plugin$hook_extensions_enhancer_by_type(type){
var temp__5720__auto__ = (function (){var and__5041__auto__ = type;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var key = temp__5720__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49413_SHARP_){
return frontend.state.get_plugin_resource(p1__49413_SHARP_,new cljs.core.Keyword(null,"extensions-enhancers","extensions-enhancers",-1229704403),key);
}),cljs.core.deref(frontend.handler.plugin._STAR_extensions_enhancer_providers));
} else {
return null;
}
});
frontend.handler.plugin.select_a_plugin_theme = (function frontend$handler$plugin$select_a_plugin_theme(pid){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.group_by(new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword("plugin","installed-themes","plugin/installed-themes",1969555197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))),pid);
if(cljs.core.truth_(temp__5720__auto__)){
var themes = temp__5720__auto__;
var temp__5720__auto____$1 = cljs.core.first(themes);
if(cljs.core.truth_(temp__5720__auto____$1)){
var theme = temp__5720__auto____$1;
return LSPluginCore.selectTheme(cljs_bean.core.__GT_js(theme));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.update_plugin_settings_state = (function frontend$handler$plugin$update_plugin_settings_state(id,settings){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),id,new cljs.core.Keyword(null,"settings","settings",1556144875)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.boolean$(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(settings))));
});
frontend.handler.plugin.open_settings_file_in_default_app_BANG_ = (function frontend$handler$plugin$open_settings_file_in_default_app_BANG_(id_or_plugin){
var temp__5720__auto__ = ((cljs.core.coll_QMARK_(id_or_plugin))?id_or_plugin:frontend.state.get_plugin_by_id(id_or_plugin));
if(cljs.core.truth_(temp__5720__auto__)){
var plugin = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword(null,"usf","usf",-1824885303).cljs$core$IFn$_invoke$arity$1(plugin);
if(cljs.core.truth_(temp__5720__auto____$1)){
var file_path = temp__5720__auto____$1;
return apis.openPath(file_path);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.plugin.open_plugin_settings_BANG_ = (function frontend$handler$plugin$open_plugin_settings_BANG_(var_args){
var G__49432 = arguments.length;
switch (G__49432) {
case 1:
return frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$2(id,false);
}));

(frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,nav_QMARK_){
var temp__5720__auto__ = (function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.get_plugin_by_id(id);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var plugin = temp__5720__auto__;
if(cljs.core.truth_(frontend.handler.plugin.has_setting_schema_QMARK_(id))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),id,nav_QMARK_,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plugin);
}
})()], null));
} else {
return frontend.handler.plugin.open_settings_file_in_default_app_BANG_(plugin);
}
} else {
return null;
}
}));

(frontend.handler.plugin.open_plugin_settings_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.plugin.parse_user_md_content = (function frontend$handler$plugin$parse_user_md_content(content,p__49445){
var map__49446 = p__49445;
var map__49446__$1 = cljs.core.__destructure_map(map__49446);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49446__$1,new cljs.core.Keyword(null,"url","url",276297046));
try{if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var content__$1 = (((!(clojure.string.blank_QMARK_(url))))?clojure.string.replace(content,/!\[[^\]]*\]\((.*?)\s*(\"(?:.*[^\"])\")?\s*\)/,(function (p__49455){
var vec__49456 = p__49455;
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49456,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49456,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = link;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.starts_with_QMARK_(link,"http")));
} else {
return and__5041__auto__;
}
})())){
return clojure.string.replace(matched,link,(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(url,link) : frontend.util.node_path.join.call(null,url,link)));
} else {
return matched;
}
})):content);
return frontend.format.to_html.cljs$core$IFn$_invoke$arity$3(content__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089),logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"markdown","markdown",1227225089)));
}
}catch (e49448){if((e49448 instanceof Error)){
var e = e49448;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.plugin",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parse-user-md-exception","parse-user-md-exception",168116088),e,new cljs.core.Keyword(null,"line","line",212345235),406], null)),null);

return content;
} else {
throw e49448;

}
}});
frontend.handler.plugin.open_readme_BANG_ = (function frontend$handler$plugin$open_readme_BANG_(url,item,display){
var repo = new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(item);
if((repo == null)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic("load_plugin_readme",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0)),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.parse_user_md_content(content,item),(function (content__$1){
return promesa.protocols._promise((function (){
var and__5041__auto___49679 = clojure.string.blank_QMARK_(clojure.string.trim(content__$1));
if(and__5041__auto___49679){
throw null;
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","active-readme","plugin/active-readme",-677043988),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1,item], null));

return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (_){
return (display.cljs$core$IFn$_invoke$arity$0 ? display.cljs$core$IFn$_invoke$arity$0() : display.call(null));
}));
})()
);
}));
}));
})),(function (p1__49465_SHARP_){
console.warn(p1__49465_SHARP_);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("No README content.",new cljs.core.Keyword(null,"warn","warn",-436710552));
}));
} else {
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (_){
return (display.cljs$core$IFn$_invoke$arity$2 ? display.cljs$core$IFn$_invoke$arity$2(repo,null) : display.call(null,repo,null));
}));
}
});
frontend.handler.plugin.load_unpacked_plugin = (function frontend$handler$plugin$load_unpacked_plugin(){
if(cljs.core.truth_(frontend.util.electron_QMARK_)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openDialog"], 0)),(function (path){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))?null:frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185),path)));
}));
}));
} else {
return null;
}
});
frontend.handler.plugin.reset_unpacked_state = (function frontend$handler$plugin$reset_unpacked_state(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185),null);
});
frontend.handler.plugin.hook_plugin = (function frontend$handler$plugin$hook_plugin(tag,type,payload,plugin_id){
if(cljs.core.truth_(frontend.handler.plugin.lsp_enabled_QMARK_)){
try{return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(LSPluginCore,["hook",clojure.string.capitalize(cljs.core.name(tag))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(type),((cljs.core.coll_QMARK_(payload))?cljs_bean.core.__GT_js(frontend.handler.plugin.normalize_keyword_for_json(payload)):payload),(((plugin_id instanceof cljs.core.Keyword))?cljs.core.name(plugin_id):plugin_id)], 0));
}catch (e49481){if((e49481 instanceof Error)){
var e = e49481;
return console.error("[Hook Plugin Err]",e);
} else {
throw e49481;

}
}} else {
return null;
}
});
frontend.handler.plugin.hook_plugin_app = (function frontend$handler$plugin$hook_plugin_app(var_args){
var G__49483 = arguments.length;
switch (G__49483) {
case 2:
return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2 = (function (type,payload){
return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$3(type,payload,null);
}));

(frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$3 = (function (type,payload,plugin_id){
return frontend.handler.plugin.hook_plugin(new cljs.core.Keyword(null,"app","app",-560961707),type,payload,plugin_id);
}));

(frontend.handler.plugin.hook_plugin_app.cljs$lang$maxFixedArity = 3);

frontend.handler.plugin.hook_plugin_editor = (function frontend$handler$plugin$hook_plugin_editor(var_args){
var G__49486 = arguments.length;
switch (G__49486) {
case 2:
return frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$2 = (function (type,payload){
return frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$3(type,payload,null);
}));

(frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$3 = (function (type,payload,plugin_id){
return frontend.handler.plugin.hook_plugin(new cljs.core.Keyword(null,"editor","editor",-989377770),type,payload,plugin_id);
}));

(frontend.handler.plugin.hook_plugin_editor.cljs$lang$maxFixedArity = 3);

frontend.handler.plugin.hook_plugin_db = (function frontend$handler$plugin$hook_plugin_db(var_args){
var G__49491 = arguments.length;
switch (G__49491) {
case 2:
return frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$2 = (function (type,payload){
return frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$3(type,payload,null);
}));

(frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$3 = (function (type,payload,plugin_id){
return frontend.handler.plugin.hook_plugin(new cljs.core.Keyword(null,"db","db",993250759),type,payload,plugin_id);
}));

(frontend.handler.plugin.hook_plugin_db.cljs$lang$maxFixedArity = 3);

frontend.handler.plugin.hook_plugin_block_changes = (function frontend$handler$plugin$hook_plugin_block_changes(p__49492){
var map__49493 = p__49492;
var map__49493__$1 = cljs.core.__destructure_map(map__49493);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49493__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49493__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49493__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var seq__49494 = cljs.core.seq(blocks);
var chunk__49496 = null;
var count__49497 = (0);
var i__49498 = (0);
while(true){
if((i__49498 < count__49497)){
var b = chunk__49496.cljs$core$IIndexed$_nth$arity$2(null,i__49498);
var tx_data_SINGLEQUOTE__49686 = cljs.core.group_by(cljs.core.first,tx_data);
var type_49687 = ["block:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b))].join('');
frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$2(type_49687,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),b,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx_data_SINGLEQUOTE__49686,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));


var G__49688 = seq__49494;
var G__49689 = chunk__49496;
var G__49690 = count__49497;
var G__49691 = (i__49498 + (1));
seq__49494 = G__49688;
chunk__49496 = G__49689;
count__49497 = G__49690;
i__49498 = G__49691;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49494);
if(temp__5720__auto__){
var seq__49494__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49494__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49494__$1);
var G__49692 = cljs.core.chunk_rest(seq__49494__$1);
var G__49693 = c__5565__auto__;
var G__49694 = cljs.core.count(c__5565__auto__);
var G__49695 = (0);
seq__49494 = G__49692;
chunk__49496 = G__49693;
count__49497 = G__49694;
i__49498 = G__49695;
continue;
} else {
var b = cljs.core.first(seq__49494__$1);
var tx_data_SINGLEQUOTE__49696 = cljs.core.group_by(cljs.core.first,tx_data);
var type_49697 = ["block:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b))].join('');
frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$2(type_49697,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),b,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx_data_SINGLEQUOTE__49696,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));


var G__49698 = cljs.core.next(seq__49494__$1);
var G__49699 = null;
var G__49700 = (0);
var G__49701 = (0);
seq__49494 = G__49698;
chunk__49496 = G__49699;
count__49497 = G__49700;
i__49498 = G__49701;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.plugin.get_ls_dotdir_root = (function frontend$handler$plugin$get_ls_dotdir_root(){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getLogseqDotDirRoot"], 0));
});
frontend.handler.plugin.make_fn_to_load_dotdir_json = (function frontend$handler$plugin$make_fn_to_load_dotdir_json(dirname,default$){
return (function (key){
var temp__5720__auto__ = (function (){var and__5041__auto__ = key;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.name(key);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var key__$1 = temp__5720__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("",(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_(path,dirname),(function (exist_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(exist_QMARK_)?null:frontend.fs.mkdir_BANG_((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,dirname) : frontend.util.node_path.join.call(null,path,dirname)))),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var G__49531 = path;
var G__49532 = dirname;
var G__49533 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1),".json"].join('');
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(G__49531,G__49532,G__49533) : frontend.util.node_path.join.call(null,G__49531,G__49532,G__49533));
})(),(function (path__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo,"",path__$1,(function (){var or__5043__auto__ = default$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "{}";
}
})()),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",path__$1),(function (json){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path__$1,JSON.parse(json)], null));
}));
}));
}));
}));
}));
}));
}));
}));
} else {
return null;
}
});
});
frontend.handler.plugin.make_fn_to_save_dotdir_json = (function frontend$handler$plugin$make_fn_to_save_dotdir_json(dirname){
return (function (key,content){
var temp__5720__auto__ = (function (){var and__5041__auto__ = key;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.name(key);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var key__$1 = temp__5720__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("",(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var G__49538 = path;
var G__49539 = dirname;
var G__49540 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1),".json"].join('');
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(G__49538,G__49539,G__49540) : frontend.util.node_path.join.call(null,G__49538,G__49539,G__49540));
})(),(function (path__$1){
return promesa.protocols._promise(frontend.fs.write_file_BANG_(repo,"",path__$1,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)));
}));
}));
}));
}));
} else {
return null;
}
});
});
frontend.handler.plugin.make_fn_to_unlink_dotdir_json = (function frontend$handler$plugin$make_fn_to_unlink_dotdir_json(dirname){
return (function (key){
var temp__5720__auto__ = (function (){var and__5041__auto__ = key;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.name(key);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var key__$1 = temp__5720__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("",(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var G__49547 = path;
var G__49548 = dirname;
var G__49549 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1),".json"].join('');
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(G__49547,G__49548,G__49549) : frontend.util.node_path.join.call(null,G__49547,G__49548,G__49549));
})(),(function (path__$1){
return promesa.protocols._promise(frontend.fs.unlink_BANG_(repo,path__$1,null));
}));
}));
}));
}));
} else {
return null;
}
});
});
frontend.handler.plugin.show_themes_modal_BANG_ = (function frontend$handler$plugin$show_themes_modal_BANG_(){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-themes-modal","modal/show-themes-modal",238725999)], null));
});
frontend.handler.plugin.goto_plugins_dashboard_BANG_ = (function frontend$handler$plugin$goto_plugins_dashboard_BANG_(){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins","go/plugins",1900072925)], null));
});
frontend.handler.plugin.get_user_default_plugins = (function frontend$handler$plugin$get_user_default_plugins(){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getUserDefaultPlugins"], 0)),(function (files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(files),(function (files__$1){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49558_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"url","url",276297046)],[p1__49558_SHARP_]);
}),files__$1));
}));
}));
})),(function (e){
return console.error(e);
}));
});
frontend.handler.plugin.check_enabled_for_updates = (function frontend$handler$plugin$check_enabled_for_updates(theme_QMARK_){
var pending_QMARK_ = cljs.core.seq(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
var temp__5720__auto__ = ((cljs.core.not(pending_QMARK_)) && (cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((32),frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$1(theme_QMARK_)))));
if(temp__5720__auto__){
var plugins = temp__5720__auto__;
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v)),v], null);
}),plugins)));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","consume-updates","plugin/consume-updates",-331798674)], null));
} else {
return null;
}
});
frontend.handler.plugin.lsp_indicator = rum.core.lazy_build(rum.core.build_defc,(function (){
var text = frontend.state.sub(new cljs.core.Keyword("plugin","indicator-text","plugin/indicator-text",-221282032));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"END")){
return null;
} else {
return daiquiri.core.create_element("div",{'className':"flex align-items justify-center h-screen w-full preboot-loading"},[daiquiri.core.create_element("span",{'className':"flex items-center justify-center w-60 flex-col"},[daiquiri.core.create_element("small",{'className':"scale-250 opacity-70 mb-10 animate-pulse"},[frontend.components.svg.logo(false)]),daiquiri.core.create_element("small",{'style':{'right':"-8px"},'className':"block text-sm relative opacity-50"},[daiquiri.interpreter.interpret(text)])])]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.handler.plugin/lsp-indicator");
frontend.handler.plugin.init_plugins_BANG_ = (function frontend$handler$plugin$init_plugins_BANG_(callback){
var el_49706 = document.createElement("div");
document.body.appendChild(el_49706);

rum.core.mount(frontend.handler.plugin.lsp_indicator(),el_49706);

frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","indicator-text","plugin/indicator-text",-221282032),"LOADING");

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (root){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(LSPlugin.setupPluginCore(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"localUserConfigRoot","localUserConfigRoot",1613555808),root,new cljs.core.Keyword(null,"dotConfigRoot","dotConfigRoot",-1961584501),root], null))),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (pid){
frontend.handler.plugin.unregister_plugin_slash_command(pid);

frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic("unregister_plugin_simple_command",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pid], 0));

frontend.handler.plugin.invoke_exported_api.cljs$core$IFn$_invoke$arity$variadic("uninstall_plugin_hook",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pid], 0));

frontend.handler.plugin.unregister_plugin_ui_items(pid);

return frontend.handler.plugin.unregister_plugin_resources(pid);
}),(function (clear_commands_BANG_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var G__49572 = LSPluginCore;
G__49572.on("registered",(function (pl){
return frontend.handler.plugin.register_plugin(cljs_bean.core.__GT_clj(JSON.parse(JSON.stringify(pl))));
}));

G__49572.on("reloaded",(function (pl){
return frontend.handler.plugin.register_plugin(cljs_bean.core.__GT_clj(JSON.parse(JSON.stringify(pl))));
}));

G__49572.on("unregistered",(function (pid){
var pid__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$1(pid__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.state,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),pid__$1], null));

return (clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1 ? clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1(pid__$1) : clear_commands_BANG_.call(null,pid__$1));
}));

G__49572.on("unlink-plugin",(function (pid){
var pid__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["uninstallMarketPlugin",cljs.core.name(pid__$1)], 0));
}));

G__49572.on("beforereload",(function (pl){
var pid = pl.id;
(clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1 ? clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1(pid) : clear_commands_BANG_.call(null,pid));

return frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$2(pid,false);
}));

G__49572.on("disabled",(function (pid){
(clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1 ? clear_commands_BANG_.cljs$core$IFn$_invoke$arity$1(pid) : clear_commands_BANG_.call(null,pid));

return frontend.handler.plugin.unregister_plugin_themes.cljs$core$IFn$_invoke$arity$1(pid);
}));

G__49572.on("theme-changed",(function (themes){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("plugin","installed-themes","plugin/installed-themes",1969555197),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__49586){
var vec__49587 = p__49586;
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49587,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49587,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49566_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49566_SHARP_,new cljs.core.Keyword(null,"pid","pid",1018387698),pid);
}),cljs_bean.core.__GT_clj(vs));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bean.core.__GT_clj(themes)], 0))));
}));

G__49572.on("theme-selected",(function (theme){
var theme__$1 = cljs_bean.core.__GT_clj(theme);
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(theme__$1);
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(theme__$1);
if(cljs.core.truth_(mode)){
frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$2(mode,theme__$1);

frontend.state.set_theme_mode_BANG_(mode);
} else {
}

return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","selected-theme","plugin/selected-theme",-172679220),url);
}));

G__49572.on("reset-custom-theme",(function (themes){
var themes__$1 = cljs_bean.core.__GT_clj(themes);
var custom_theme = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(themes__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(themes__$1);
frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),(((new cljs.core.Keyword(null,"light","light",1918998747).cljs$core$IFn$_invoke$arity$1(custom_theme) == null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"light"], null):new cljs.core.Keyword(null,"light","light",1918998747).cljs$core$IFn$_invoke$arity$1(custom_theme)),new cljs.core.Keyword(null,"dark","dark",1818973999),(((new cljs.core.Keyword(null,"dark","dark",1818973999).cljs$core$IFn$_invoke$arity$1(custom_theme) == null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"dark"], null):new cljs.core.Keyword(null,"dark","dark",1818973999).cljs$core$IFn$_invoke$arity$1(custom_theme))], null));

return frontend.state.set_theme_mode_BANG_(mode);
}));

G__49572.on("settings-changed",(function (id,settings){
var id__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id);
if(cljs.core.truth_((function (){var and__5041__auto__ = settings;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),id__$1);
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.plugin.update_plugin_settings_state(id__$1,cljs_bean.core.__GT_clj(settings));
} else {
return null;
}
}));

return G__49572;
})(),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_user_default_plugins(),(function (default_plugins){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(LSPluginCore.register(cljs_bean.core.__GT_js(((cljs.core.seq(default_plugins))?default_plugins:cljs.core.PersistentVector.EMPTY)),true),(function (___$2){
return promesa.protocols._promise(null);
}));
}));
}));
}));
}));
}));
})),(function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","indicator-text","plugin/indicator-text",-221282032),"END");

return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}));
});
/**
 * setup plugin core handler
 */
frontend.handler.plugin.setup_BANG_ = (function frontend$handler$plugin$setup_BANG_(callback){
if(cljs.core.not(frontend.handler.plugin.lsp_enabled_QMARK_)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return frontend.handler.plugin.init_plugins_BANG_(callback);
}
});

//# sourceMappingURL=frontend.handler.plugin.js.map
