goog.provide('frontend.components.widgets');
frontend.components.widgets.add_local_directory = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"flex flex-col"},[(function (){var attrs61784 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","add-graph","on-boarding/add-graph",-1235230195)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs61784))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs61784], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs61784))?null:[daiquiri.interpreter.interpret(attrs61784)]));
})(),(function (){var nfs_supported_QMARK_ = (function (){var or__5043__auto__ = frontend.handler.web.nfs.supported_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})();
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
var attrs61789 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Open a local directory",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_(frontend.modules.shortcut.core.refresh_BANG_);
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs61789))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs61789], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs61789))?[daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("ol",null,[daiquiri.core.create_element("li",null,[daiquiri.core.create_element("div",{'className':"font-bold mb-2"},["How to sync my notes?"]),(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["We're developing our built-in paid Logseq Sync, but you can use any third-party sync service to keep your notes sync with other devices."]),daiquiri.core.create_element("p",null,["If you prefer to use Dropbox to sync your notes, you can use ",daiquiri.core.create_element("a",{'href':"https://play.google.com/store/apps/details?id=com.ttxapps.dropsync",'target':"_blank"},["Dropsync"]),". Or you can use ",daiquiri.core.create_element("a",{'href':"https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite",'target':"_blank"},["FolderSync"]),"."])]):daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["You can sync your graphs by using iCloud. Please choose an existing graph or create a new graph in your iCloud Drive's Logseq directory."]),daiquiri.core.create_element("p",null,["We're developing our built-in paid Logseq Sync. Stay tuned."])]))]),daiquiri.core.create_element("li",{'className':"mt-8"},[daiquiri.core.create_element("div",{'className':"font-bold mb-2"},["I need some help"]),daiquiri.core.create_element("p",null,["\uD83D\uDC4B Join our discord group to chat with the makers and our helpful community members."]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Join the community",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),"https://discord.gg/KpN4eHY",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], 0)))])])]:[daiquiri.interpreter.interpret(attrs61789),daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("ol",null,[daiquiri.core.create_element("li",null,[daiquiri.core.create_element("div",{'className':"font-bold mb-2"},["How to sync my notes?"]),(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["We're developing our built-in paid Logseq Sync, but you can use any third-party sync service to keep your notes sync with other devices."]),daiquiri.core.create_element("p",null,["If you prefer to use Dropbox to sync your notes, you can use ",daiquiri.core.create_element("a",{'href':"https://play.google.com/store/apps/details?id=com.ttxapps.dropsync",'target':"_blank"},["Dropsync"]),". Or you can use ",daiquiri.core.create_element("a",{'href':"https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite",'target':"_blank"},["FolderSync"]),"."])]):daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["You can sync your graphs by using iCloud. Please choose an existing graph or create a new graph in your iCloud Drive's Logseq directory."]),daiquiri.core.create_element("p",null,["We're developing our built-in paid Logseq Sync. Stay tuned."])]))]),daiquiri.core.create_element("li",{'className':"mt-8"},[daiquiri.core.create_element("div",{'className':"font-bold mb-2"},["I need some help"]),daiquiri.core.create_element("p",null,["\uD83D\uDC4B Join our discord group to chat with the makers and our helpful community members."]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Join the community",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),"https://discord.gg/KpN4eHY",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], 0)))])])]));
} else {
return daiquiri.core.create_element("div",{'className':"cp__widgets-open-local-directory"},[(function (){var attrs61836 = (cljs.core.truth_(nfs_supported_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_(frontend.modules.shortcut.core.refresh_BANG_);
})], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs61836))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select-file-wrap","cursor"], null)], null),attrs61836], 0))):{'className':"select-file-wrap cursor"}),((cljs.core.map_QMARK_(attrs61836))?[daiquiri.core.create_element("div",null,[(function (){var attrs61837 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","open-local-dir","on-boarding/open-local-dir",1245345940)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs61837))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs61837], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs61837))?null:[daiquiri.interpreter.interpret(attrs61837)]));
})(),(function (){var attrs61838 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-1","on-boarding/new-graph-desc-1",-268439211)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs61838))?daiquiri.interpreter.element_attributes(attrs61838):null),((cljs.core.map_QMARK_(attrs61838))?null:[daiquiri.interpreter.interpret(attrs61838)]));
})(),(function (){var attrs61843 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-2","on-boarding/new-graph-desc-2",-2126787175)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs61843))?daiquiri.interpreter.element_attributes(attrs61843):null),((cljs.core.map_QMARK_(attrs61843))?null:[daiquiri.interpreter.interpret(attrs61843)]));
})(),daiquiri.core.create_element("ul",null,[(function (){var attrs61847 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-3","on-boarding/new-graph-desc-3",-494052293)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs61847))?daiquiri.interpreter.element_attributes(attrs61847):null),((cljs.core.map_QMARK_(attrs61847))?null:[daiquiri.interpreter.interpret(attrs61847)]));
})(),(function (){var attrs61849 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-4","on-boarding/new-graph-desc-4",1746596573)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs61849))?daiquiri.interpreter.element_attributes(attrs61849):null),((cljs.core.map_QMARK_(attrs61849))?null:[daiquiri.interpreter.interpret(attrs61849)]));
})(),(function (){var attrs61852 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-5","on-boarding/new-graph-desc-5",795026466)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs61852))?daiquiri.interpreter.element_attributes(attrs61852):null),((cljs.core.map_QMARK_(attrs61852))?null:[daiquiri.interpreter.interpret(attrs61852)]));
})()]),(cljs.core.truth_(nfs_supported_QMARK_)?null:daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It seems that your browser doesn't support the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://web.dev/file-system-access/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"new native filesystem API"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", please use any Chromium 86+ based browser like Chrome, Vivaldi, Edge, etc. Notice that the API doesn't support mobile browsers at the moment."], null)], null))))])]:[daiquiri.interpreter.interpret(attrs61836),daiquiri.core.create_element("div",null,[(function (){var attrs61857 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","open-local-dir","on-boarding/open-local-dir",1245345940)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs61857))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs61857], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs61857))?null:[daiquiri.interpreter.interpret(attrs61857)]));
})(),(function (){var attrs61858 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-1","on-boarding/new-graph-desc-1",-268439211)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs61858))?daiquiri.interpreter.element_attributes(attrs61858):null),((cljs.core.map_QMARK_(attrs61858))?null:[daiquiri.interpreter.interpret(attrs61858)]));
})(),(function (){var attrs61859 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-2","on-boarding/new-graph-desc-2",-2126787175)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs61859))?daiquiri.interpreter.element_attributes(attrs61859):null),((cljs.core.map_QMARK_(attrs61859))?null:[daiquiri.interpreter.interpret(attrs61859)]));
})(),daiquiri.core.create_element("ul",null,[(function (){var attrs61863 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-3","on-boarding/new-graph-desc-3",-494052293)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs61863))?daiquiri.interpreter.element_attributes(attrs61863):null),((cljs.core.map_QMARK_(attrs61863))?null:[daiquiri.interpreter.interpret(attrs61863)]));
})(),(function (){var attrs61864 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-4","on-boarding/new-graph-desc-4",1746596573)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs61864))?daiquiri.interpreter.element_attributes(attrs61864):null),((cljs.core.map_QMARK_(attrs61864))?null:[daiquiri.interpreter.interpret(attrs61864)]));
})(),(function (){var attrs61865 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-5","on-boarding/new-graph-desc-5",795026466)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs61865))?daiquiri.interpreter.element_attributes(attrs61865):null),((cljs.core.map_QMARK_(attrs61865))?null:[daiquiri.interpreter.interpret(attrs61865)]));
})()]),(cljs.core.truth_(nfs_supported_QMARK_)?null:daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It seems that your browser doesn't support the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://web.dev/file-system-access/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"new native filesystem API"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", please use any Chromium 86+ based browser like Chrome, Vivaldi, Edge, etc. Notice that the API doesn't support mobile browsers at the moment."], null)], null))))])]));
})()]);
}
})()]);
}),null,"frontend.components.widgets/add-local-directory");
frontend.components.widgets.android_permission_alert = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())){
return daiquiri.core.create_element("div",{'className':"flex flex-col"},[daiquiri.core.create_element("h1",{'className':"title"},["Storage access permission"]),daiquiri.core.create_element("div",{'className':"text-sm"},[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["Logseq needs the permission to access your device storage. Read ",daiquiri.core.create_element("a",{'href':"https://developer.android.com/about/versions/11/privacy/storage#all-files-access",'target':"_blank"},["more"]),"."]),(function (){var attrs61882 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Grant Permission",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_(frontend.modules.shortcut.core.refresh_BANG_);
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs61882))?daiquiri.interpreter.element_attributes(attrs61882):null),((cljs.core.map_QMARK_(attrs61882))?null:[daiquiri.interpreter.interpret(attrs61882)]));
})(),daiquiri.core.create_element("p",{'className':"mb-1"},["Note:"]),daiquiri.core.create_element("ol",null,[daiquiri.core.create_element("li",null,["We will never access files outside of your graph folders you choose."]),daiquiri.core.create_element("li",null,["If you have granted the permission, you don't need to do it again."])])]),daiquiri.core.create_element("hr",null,null)])]);
} else {
return null;
}
}),null,"frontend.components.widgets/android-permission-alert");
frontend.components.widgets.add_graph = rum.core.lazy_build(rum.core.build_defcs,(function() { 
var G__61912__delegate = function (state,p__61894){
var map__61896 = p__61894;
var map__61896__$1 = cljs.core.__destructure_map(map__61896);
var graph_types = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61896__$1,new cljs.core.Keyword(null,"graph-types","graph-types",-1372538535),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local","local",-1497766724)], null));
var generate_f = (function (x){
var G__61898 = x;
var G__61898__$1 = (((G__61898 instanceof cljs.core.Keyword))?G__61898.fqn:null);
switch (G__61898__$1) {
case "local":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.with_key(frontend.components.widgets.android_permission_alert(),"android-permission-alert"),rum.core.with_key(frontend.components.widgets.add_local_directory(),"add-local-directory")], null);

break;
default:
return null;

}
});
var available_graph = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.mt-10.mb-5.opacity-50","b.mt-10.mb-5.opacity-50",808916990),"OR"], null),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(generate_f,cljs.core.set(graph_types))));
var attrs61892 = available_graph;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs61892))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["p-8","flex","flex-col"], null)], null),attrs61892], 0))):{'className':"p-8 flex flex-col"}),((cljs.core.map_QMARK_(attrs61892))?null:[daiquiri.interpreter.interpret(attrs61892)]));
};
var G__61912 = function (state,var_args){
var p__61894 = null;
if (arguments.length > 1) {
var G__61914__i = 0, G__61914__a = new Array(arguments.length -  1);
while (G__61914__i < G__61914__a.length) {G__61914__a[G__61914__i] = arguments[G__61914__i + 1]; ++G__61914__i;}
  p__61894 = new cljs.core.IndexedSeq(G__61914__a,0,null);
} 
return G__61912__delegate.call(this,state,p__61894);};
G__61912.cljs$lang$maxFixedArity = 1;
G__61912.cljs$lang$applyTo = (function (arglist__61915){
var state = cljs.core.first(arglist__61915);
var p__61894 = cljs.core.rest(arglist__61915);
return G__61912__delegate(state,p__61894);
});
G__61912.cljs$core$IFn$_invoke$arity$variadic = G__61912__delegate;
return G__61912;
})()
,null,"frontend.components.widgets/add-graph");
frontend.components.widgets.demo_graph_alert = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.config.publishing_QMARK_));
} else {
return and__5041__auto__;
}
})())){
return daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","demo-graph","on-boarding/demo-graph",766940271)], 0))], null)));
} else {
return null;
}
}),null,"frontend.components.widgets/demo-graph-alert");

//# sourceMappingURL=frontend.components.widgets.js.map
