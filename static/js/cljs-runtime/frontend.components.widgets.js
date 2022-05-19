goog.provide('frontend.components.widgets');
frontend.components.widgets.add_local_directory = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"flex flex-col"},[(function (){var attrs71882 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","add-graph","on-boarding/add-graph",-1235230195)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs71882))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs71882], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs71882))?null:[daiquiri.interpreter.interpret(attrs71882)]));
})(),(function (){var nfs_supported_QMARK_ = (function (){var or__4253__auto__ = frontend.handler.web.nfs.supported_QMARK_();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.mobile.util.is_native_platform_QMARK_();
}
})();
if(cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())){
var attrs71883 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Open a local directory",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_(frontend.modules.shortcut.core.refresh_BANG_);
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71883))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs71883], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs71883))?[daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("ol",null,[daiquiri.core.create_element("li",null,[daiquiri.core.create_element("div",{'className':"font-bold mb-2"},["How to sync my notes?"]),(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["We're developing our built-in paid Logseq Sync, but you can use any third-party sync service to keep your notes sync with other devices."]),daiquiri.core.create_element("p",null,["If you prefer to use Dropbox to sync your notes, you can use ",daiquiri.core.create_element("a",{'href':"https://play.google.com/store/apps/details?id=com.ttxapps.dropsync",'target':"_blank"},["Dropsync"]),". Or you can use ",daiquiri.core.create_element("a",{'href':"https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite",'target':"_blank"},["FolderSync"]),"."])]):daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["You can sync your graphs by using iCloud. Please choose an existing graph or create a new graph in your iCloud Drive's Logseq directory."]),daiquiri.core.create_element("p",null,["We're developing our built-in paid Logseq Sync. Stay tuned."])]))]),daiquiri.core.create_element("li",{'className':"mt-8"},[daiquiri.core.create_element("div",{'className':"font-bold mb-2"},["I need some help"]),daiquiri.core.create_element("p",null,["\uD83D\uDC4B Join our discord group to chat with the makers and our helpful community members."]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Join the community",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),"https://discord.gg/KpN4eHY",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], 0)))])])]:[daiquiri.interpreter.interpret(attrs71883),daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("ol",null,[daiquiri.core.create_element("li",null,[daiquiri.core.create_element("div",{'className':"font-bold mb-2"},["How to sync my notes?"]),(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["We're developing our built-in paid Logseq Sync, but you can use any third-party sync service to keep your notes sync with other devices."]),daiquiri.core.create_element("p",null,["If you prefer to use Dropbox to sync your notes, you can use ",daiquiri.core.create_element("a",{'href':"https://play.google.com/store/apps/details?id=com.ttxapps.dropsync",'target':"_blank"},["Dropsync"]),". Or you can use ",daiquiri.core.create_element("a",{'href':"https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite",'target':"_blank"},["FolderSync"]),"."])]):daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["You can sync your graphs by using iCloud. Please choose an existing graph or create a new graph in your iCloud Drive's Logseq directory."]),daiquiri.core.create_element("p",null,["We're developing our built-in paid Logseq Sync. Stay tuned."])]))]),daiquiri.core.create_element("li",{'className':"mt-8"},[daiquiri.core.create_element("div",{'className':"font-bold mb-2"},["I need some help"]),daiquiri.core.create_element("p",null,["\uD83D\uDC4B Join our discord group to chat with the makers and our helpful community members."]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Join the community",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),"https://discord.gg/KpN4eHY",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], 0)))])])]));
} else {
return daiquiri.core.create_element("div",{'className':"cp__widgets-open-local-directory"},[(function (){var attrs71909 = (cljs.core.truth_(nfs_supported_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_(frontend.modules.shortcut.core.refresh_BANG_);
})], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71909))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select-file-wrap","cursor"], null)], null),attrs71909], 0))):{'className':"select-file-wrap cursor"}),((cljs.core.map_QMARK_(attrs71909))?[daiquiri.core.create_element("div",null,[(function (){var attrs71910 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","open-local-dir","on-boarding/open-local-dir",1245345940)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs71910))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs71910], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs71910))?null:[daiquiri.interpreter.interpret(attrs71910)]));
})(),(function (){var attrs71911 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-1","on-boarding/new-graph-desc-1",-268439211)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs71911))?daiquiri.interpreter.element_attributes(attrs71911):null),((cljs.core.map_QMARK_(attrs71911))?null:[daiquiri.interpreter.interpret(attrs71911)]));
})(),(function (){var attrs71912 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-2","on-boarding/new-graph-desc-2",-2126787175)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs71912))?daiquiri.interpreter.element_attributes(attrs71912):null),((cljs.core.map_QMARK_(attrs71912))?null:[daiquiri.interpreter.interpret(attrs71912)]));
})(),daiquiri.core.create_element("ul",null,[(function (){var attrs71918 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-3","on-boarding/new-graph-desc-3",-494052293)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs71918))?daiquiri.interpreter.element_attributes(attrs71918):null),((cljs.core.map_QMARK_(attrs71918))?null:[daiquiri.interpreter.interpret(attrs71918)]));
})(),(function (){var attrs71919 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-4","on-boarding/new-graph-desc-4",1746596573)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs71919))?daiquiri.interpreter.element_attributes(attrs71919):null),((cljs.core.map_QMARK_(attrs71919))?null:[daiquiri.interpreter.interpret(attrs71919)]));
})(),(function (){var attrs71920 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-5","on-boarding/new-graph-desc-5",795026466)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs71920))?daiquiri.interpreter.element_attributes(attrs71920):null),((cljs.core.map_QMARK_(attrs71920))?null:[daiquiri.interpreter.interpret(attrs71920)]));
})()]),(cljs.core.truth_(nfs_supported_QMARK_)?null:daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It seems that your browser doesn't support the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://web.dev/file-system-access/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"new native filesystem API"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", please use any Chromium 86+ based browser like Chrome, Vivaldi, Edge, etc. Notice that the API doesn't support mobile browsers at the moment."], null)], null))))])]:[daiquiri.interpreter.interpret(attrs71909),daiquiri.core.create_element("div",null,[(function (){var attrs71925 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","open-local-dir","on-boarding/open-local-dir",1245345940)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs71925))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs71925], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs71925))?null:[daiquiri.interpreter.interpret(attrs71925)]));
})(),(function (){var attrs71926 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-1","on-boarding/new-graph-desc-1",-268439211)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs71926))?daiquiri.interpreter.element_attributes(attrs71926):null),((cljs.core.map_QMARK_(attrs71926))?null:[daiquiri.interpreter.interpret(attrs71926)]));
})(),(function (){var attrs71927 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-2","on-boarding/new-graph-desc-2",-2126787175)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs71927))?daiquiri.interpreter.element_attributes(attrs71927):null),((cljs.core.map_QMARK_(attrs71927))?null:[daiquiri.interpreter.interpret(attrs71927)]));
})(),daiquiri.core.create_element("ul",null,[(function (){var attrs71929 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-3","on-boarding/new-graph-desc-3",-494052293)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs71929))?daiquiri.interpreter.element_attributes(attrs71929):null),((cljs.core.map_QMARK_(attrs71929))?null:[daiquiri.interpreter.interpret(attrs71929)]));
})(),(function (){var attrs71930 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-4","on-boarding/new-graph-desc-4",1746596573)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs71930))?daiquiri.interpreter.element_attributes(attrs71930):null),((cljs.core.map_QMARK_(attrs71930))?null:[daiquiri.interpreter.interpret(attrs71930)]));
})(),(function (){var attrs71932 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","new-graph-desc-5","on-boarding/new-graph-desc-5",795026466)], 0));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs71932))?daiquiri.interpreter.element_attributes(attrs71932):null),((cljs.core.map_QMARK_(attrs71932))?null:[daiquiri.interpreter.interpret(attrs71932)]));
})()]),(cljs.core.truth_(nfs_supported_QMARK_)?null:daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It seems that your browser doesn't support the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://web.dev/file-system-access/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"new native filesystem API"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", please use any Chromium 86+ based browser like Chrome, Vivaldi, Edge, etc. Notice that the API doesn't support mobile browsers at the moment."], null)], null))))])]));
})()]);
}
})()]);
}),null,"frontend.components.widgets/add-local-directory");
frontend.components.widgets.android_permission_alert = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())){
return daiquiri.core.create_element("div",{'className':"flex flex-col"},[daiquiri.core.create_element("h1",{'className':"title"},["Storage access permission"]),daiquiri.core.create_element("div",{'className':"text-sm"},[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["Logseq needs the permission to access your device storage. Read ",daiquiri.core.create_element("a",{'href':"https://developer.android.com/about/versions/11/privacy/storage#all-files-access",'target':"_blank"},["more"]),"."]),(function (){var attrs71950 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Grant Permission",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_(frontend.modules.shortcut.core.refresh_BANG_);
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71950))?daiquiri.interpreter.element_attributes(attrs71950):null),((cljs.core.map_QMARK_(attrs71950))?null:[daiquiri.interpreter.interpret(attrs71950)]));
})(),daiquiri.core.create_element("p",{'className':"mb-1"},["Note:"]),daiquiri.core.create_element("ol",null,[daiquiri.core.create_element("li",null,["We will never access files outside of your graph folders you choose."]),daiquiri.core.create_element("li",null,["If you have granted the permission, you don't need to do it again."])])]),daiquiri.core.create_element("hr",null,null)])]);
} else {
return null;
}
}),null,"frontend.components.widgets/android-permission-alert");
frontend.components.widgets.add_graph = rum.core.lazy_build(rum.core.build_defcs,(function() { 
var G__71979__delegate = function (state,p__71961){
var map__71962 = p__71961;
var map__71962__$1 = cljs.core.__destructure_map(map__71962);
var graph_types = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71962__$1,new cljs.core.Keyword(null,"graph-types","graph-types",-1372538535),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local","local",-1497766724)], null));
var generate_f = (function (x){
var G__71963 = x;
var G__71963__$1 = (((G__71963 instanceof cljs.core.Keyword))?G__71963.fqn:null);
switch (G__71963__$1) {
case "local":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.with_key(frontend.components.widgets.android_permission_alert(),"android-permission-alert"),rum.core.with_key(frontend.components.widgets.add_local_directory(),"add-local-directory")], null);

break;
default:
return null;

}
});
var available_graph = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b.mt-10.mb-5.opacity-50","b.mt-10.mb-5.opacity-50",808916990),"OR"], null),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(generate_f,cljs.core.set(graph_types))));
var attrs71960 = available_graph;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71960))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["p-8","flex","flex-col"], null)], null),attrs71960], 0))):{'className':"p-8 flex flex-col"}),((cljs.core.map_QMARK_(attrs71960))?null:[daiquiri.interpreter.interpret(attrs71960)]));
};
var G__71979 = function (state,var_args){
var p__71961 = null;
if (arguments.length > 1) {
var G__71983__i = 0, G__71983__a = new Array(arguments.length -  1);
while (G__71983__i < G__71983__a.length) {G__71983__a[G__71983__i] = arguments[G__71983__i + 1]; ++G__71983__i;}
  p__71961 = new cljs.core.IndexedSeq(G__71983__a,0,null);
} 
return G__71979__delegate.call(this,state,p__71961);};
G__71979.cljs$lang$maxFixedArity = 1;
G__71979.cljs$lang$applyTo = (function (arglist__71984){
var state = cljs.core.first(arglist__71984);
var p__71961 = cljs.core.rest(arglist__71984);
return G__71979__delegate(state,p__71961);
});
G__71979.cljs$core$IFn$_invoke$arity$variadic = G__71979__delegate;
return G__71979;
})()
,null,"frontend.components.widgets/add-graph");
frontend.components.widgets.demo_graph_alert = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(and__4251__auto__)){
return (!(frontend.config.publishing_QMARK_));
} else {
return and__4251__auto__;
}
})())){
return daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","demo-graph","on-boarding/demo-graph",766940271)], 0))], null)));
} else {
return null;
}
}),null,"frontend.components.widgets/demo-graph-alert");

//# sourceMappingURL=frontend.components.widgets.js.map
