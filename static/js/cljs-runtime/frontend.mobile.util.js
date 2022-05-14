goog.provide('frontend.mobile.util');
var module$node_modules$$capacitor$core$dist$index_cjs=shadow.js.require("module$node_modules$$capacitor$core$dist$index_cjs", {});
var module$node_modules$$capacitor$splash_screen$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$splash_screen$dist$plugin_cjs", {});
frontend.mobile.util.platform = (function frontend$mobile$util$platform(){
return module$node_modules$$capacitor$core$dist$index_cjs.Capacitor.getPlatform();
});
frontend.mobile.util.is_native_platform_QMARK_ = (function frontend$mobile$util$is_native_platform_QMARK_(){
return module$node_modules$$capacitor$core$dist$index_cjs.Capacitor.isNativePlatform();
});
frontend.mobile.util.native_ios_QMARK_ = (function frontend$mobile$util$native_ios_QMARK_(){
var and__4251__auto__ = frontend.mobile.util.is_native_platform_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.platform(),"ios");
} else {
return and__4251__auto__;
}
});
frontend.mobile.util.native_android_QMARK_ = (function frontend$mobile$util$native_android_QMARK_(){
var and__4251__auto__ = frontend.mobile.util.is_native_platform_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.platform(),"android");
} else {
return and__4251__auto__;
}
});
frontend.mobile.util.convert_file_src = (function frontend$mobile$util$convert_file_src(path_str){
return module$node_modules$$capacitor$core$dist$index_cjs.Capacitor.convertFileSrc(path_str);
});
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.folder_picker !== 'undefined')){
} else {
frontend.mobile.util.folder_picker = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("FolderPicker");
}
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.download_icloud_files !== 'undefined')){
} else {
frontend.mobile.util.download_icloud_files = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("DownloadiCloudFiles");
}

if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.ios_file_container !== 'undefined')){
} else {
frontend.mobile.util.ios_file_container = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("FileContainer");
}

if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.file_sync !== 'undefined')){
} else {
frontend.mobile.util.file_sync = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("FileSync");
}
} else {
}
if(cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())){
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.fs_watcher !== 'undefined')){
} else {
frontend.mobile.util.fs_watcher = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("FsWatcher");
}
} else {
}
frontend.mobile.util.sync_icloud_repo = (function frontend$mobile$util$sync_icloud_repo(repo_dir){
var repo_name = decodeURI(clojure.string.trim(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(repo_dir,"Documents/"))));
return frontend.mobile.util.download_icloud_files.syncGraph(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph","graph",1558099509),repo_name], null)));
});
frontend.mobile.util.hide_splash = (function frontend$mobile$util$hide_splash(){
return module$node_modules$$capacitor$splash_screen$dist$plugin_cjs.SplashScreen.hide();
});
frontend.mobile.util.idevice_info = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"iPadAir10.5","iPadAir10.5",732042464),new cljs.core.Keyword(null,"iPhone6s","iPhone6s",-1340976031),new cljs.core.Keyword(null,"iPadPro12.9","iPadPro12.9",104831746),new cljs.core.Keyword(null,"iPhone6Plus","iPhone6Plus",-1218896893),new cljs.core.Keyword(null,"iPadAir9.7","iPadAir9.7",1757517316),new cljs.core.Keyword(null,"iPhone6","iPhone6",-958313500),new cljs.core.Keyword(null,"iPhone12","iPhone12",497459525),new cljs.core.Keyword(null,"iPhone12ProMax","iPhone12ProMax",1735784101),new cljs.core.Keyword(null,"iPhoneXSMax","iPhoneXSMax",1556124902),new cljs.core.Keyword(null,"iPadPro10.5","iPadPro10.5",-1202885018),new cljs.core.Keyword(null,"iPhone11Pro","iPhone11Pro",-1637492281),new cljs.core.Keyword(null,"iPadAir10.9","iPadAir10.9",1053570631),new cljs.core.Keyword(null,"iPadPro11","iPadPro11",1949391528),new cljs.core.Keyword(null,"iPhone12mini","iPhone12mini",1230573417),new cljs.core.Keyword(null,"iPhone11","iPhone11",-2060682933),new cljs.core.Keyword(null,"iPad9.7","iPad9.7",366110219),new cljs.core.Keyword(null,"iPad10.2","iPad10.2",1220611755),new cljs.core.Keyword(null,"iPhoneX","iPhoneX",-492880754),new cljs.core.Keyword(null,"iPhone7","iPhone7",-315264977),new cljs.core.Keyword(null,"iPadPro9.7","iPadPro9.7",440142927),new cljs.core.Keyword(null,"iPhone8Plus","iPhone8Plus",-307403569),new cljs.core.Keyword(null,"iPadmini9.7","iPadmini9.7",1587230032),new cljs.core.Keyword(null,"iPhone6sPlus","iPhone6sPlus",1558556592),new cljs.core.Keyword(null,"iPadmini8.3","iPadmini8.3",-1647816367),new cljs.core.Keyword(null,"iPhone12Pro","iPhone12Pro",-106210317),new cljs.core.Keyword(null,"iPhoneXR","iPhoneXR",1945330932),new cljs.core.Keyword(null,"iPhone7Plus","iPhone7Plus",1084017237),new cljs.core.Keyword(null,"iPhone13","iPhone13",-1132489835),new cljs.core.Keyword(null,"iPhoneXS","iPhoneXS",-673445162),new cljs.core.Keyword(null,"iPhone11ProMax","iPhone11ProMax",2082624470),new cljs.core.Keyword(null,"iPodtouch5","iPodtouch5",1910528984),new cljs.core.Keyword(null,"iPhone13ProMax","iPhone13ProMax",-1480672996),new cljs.core.Keyword(null,"iPhone13mini","iPhone13mini",-474428132),new cljs.core.Keyword(null,"iPhone8","iPhone8",410284541),new cljs.core.Keyword(null,"iPhoneSE4","iPhoneSE4",-581972259),new cljs.core.Keyword(null,"iPhone13Pro","iPhone13Pro",1044032062)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(834),new cljs.core.Keyword(null,"height","height",1025178622),(1112),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(40)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(375),new cljs.core.Keyword(null,"height","height",1025178622),(667),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(20)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(1024),new cljs.core.Keyword(null,"height","height",1025178622),(1366),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(40)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(476),new cljs.core.Keyword(null,"height","height",1025178622),(847),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(20)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(768),new cljs.core.Keyword(null,"height","height",1025178622),(1024),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(40)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(375),new cljs.core.Keyword(null,"height","height",1025178622),(667),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(20)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(390),new cljs.core.Keyword(null,"height","height",1025178622),(844),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(47)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(428),new cljs.core.Keyword(null,"height","height",1025178622),(926),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(47)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(414),new cljs.core.Keyword(null,"height","height",1025178622),(896),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(48)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(834),new cljs.core.Keyword(null,"height","height",1025178622),(1112),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(40)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(375),new cljs.core.Keyword(null,"height","height",1025178622),(812),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(44)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(820),new cljs.core.Keyword(null,"height","height",1025178622),(1180),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(40)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(834),new cljs.core.Keyword(null,"height","height",1025178622),(1194),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(40)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(375),new cljs.core.Keyword(null,"height","height",1025178622),(812),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(44)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(414),new cljs.core.Keyword(null,"height","height",1025178622),(896),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(48)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(768),new cljs.core.Keyword(null,"height","height",1025178622),(1024),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(40)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(810),new cljs.core.Keyword(null,"height","height",1025178622),(1080),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(40)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(375),new cljs.core.Keyword(null,"height","height",1025178622),(812),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(44)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(375),new cljs.core.Keyword(null,"height","height",1025178622),(667),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(20)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(768),new cljs.core.Keyword(null,"height","height",1025178622),(1024),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(40)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(414),new cljs.core.Keyword(null,"height","height",1025178622),(736),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(20)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(768),new cljs.core.Keyword(null,"height","height",1025178622),(1024),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(40)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(476),new cljs.core.Keyword(null,"height","height",1025178622),(847),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(20)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(744),new cljs.core.Keyword(null,"height","height",1025178622),(1133),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(40)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(390),new cljs.core.Keyword(null,"height","height",1025178622),(844),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(47)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(414),new cljs.core.Keyword(null,"height","height",1025178622),(896),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(48)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(476),new cljs.core.Keyword(null,"height","height",1025178622),(847),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(20)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(390),new cljs.core.Keyword(null,"height","height",1025178622),(844),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(47)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(375),new cljs.core.Keyword(null,"height","height",1025178622),(812),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(44)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(414),new cljs.core.Keyword(null,"height","height",1025178622),(896),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(44)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(320),new cljs.core.Keyword(null,"height","height",1025178622),(568),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(20)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(428),new cljs.core.Keyword(null,"height","height",1025178622),(926),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(47)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(375),new cljs.core.Keyword(null,"height","height",1025178622),(812),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(44)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(375),new cljs.core.Keyword(null,"height","height",1025178622),(667),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(20)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(320),new cljs.core.Keyword(null,"height","height",1025178622),(568),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(20)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(390),new cljs.core.Keyword(null,"height","height",1025178622),(844),new cljs.core.Keyword(null,"statusbar","statusbar",-680036405),(47)], null)]));
frontend.mobile.util.get_idevice_model = (function frontend$mobile$util$get_idevice_model(){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
var width = screen.width;
var height = screen.height;
var landscape_QMARK_ = (width > height);
var vec__66104 = ((landscape_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66104,(0),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66104,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__66114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width__$1,height__$1], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(476),(847)], null),G__66114)){
return "iPhone7Plus";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(390),(844)], null),G__66114)){
return "iPhone12";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(834),(1112)], null),G__66114)){
return "iPadAir10.5";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(414),(736)], null),G__66114)){
return "iPhone8Plus";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(414),(896)], null),G__66114)){
return "iPhone11";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1024),(1366)], null),G__66114)){
return "iPadPro12.9";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(834),(1194)], null),G__66114)){
return "iPadPro11";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(820),(1180)], null),G__66114)){
return "iPad10.9";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(375),(812)], null),G__66114)){
return "iPhoneX";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(744),(1133)], null),G__66114)){
return "iPadmini8.3";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(428),(926)], null),G__66114)){
return "iPhone13ProMax";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(375),(667)], null),G__66114)){
return "iPhone8";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(810),(1080)], null),G__66114)){
return "iPad10.2";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(320),(568)], null),G__66114)){
return "iPhoneSE4";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(768),(1024)], null),G__66114)){
return "iPad9.7";
} else {
return "Not a known Apple device!";

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})(),landscape_QMARK_], null);
} else {
return null;
}
});
frontend.mobile.util.native_iphone_without_notch_QMARK_ = (function frontend$mobile$util$native_iphone_without_notch_QMARK_(){
var temp__5720__auto__ = frontend.mobile.util.get_idevice_model();
if(cljs.core.truth_(temp__5720__auto__)){
var model = temp__5720__auto__;
return clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPhone8");
} else {
return null;
}
});
frontend.mobile.util.native_iphone_QMARK_ = (function frontend$mobile$util$native_iphone_QMARK_(){
var temp__5720__auto__ = frontend.mobile.util.get_idevice_model();
if(cljs.core.truth_(temp__5720__auto__)){
var model = temp__5720__auto__;
return ((clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPhone")) && ((!(clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPhone8")))));
} else {
return null;
}
});
frontend.mobile.util.native_ipad_QMARK_ = (function frontend$mobile$util$native_ipad_QMARK_(){
var temp__5720__auto__ = frontend.mobile.util.get_idevice_model();
if(cljs.core.truth_(temp__5720__auto__)){
var model = temp__5720__auto__;
return clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPad");
} else {
return null;
}
});
frontend.mobile.util.get_idevice_statusbar_height = (function frontend$mobile$util$get_idevice_statusbar_height(){
var vec__66148 = frontend.mobile.util.get_idevice_model();
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66148,(0),null);
var landscape_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66148,(1),null);
var model__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model,"Not a known Apple device!"))?null:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(model));
if(cljs.core.truth_((function (){var and__4251__auto__ = model__$1;
if(cljs.core.truth_(and__4251__auto__)){
return landscape_QMARK_;
} else {
return and__4251__auto__;
}
})())){
return (20);
} else {
return new cljs.core.Keyword(null,"statusbar","statusbar",-680036405).cljs$core$IFn$_invoke$arity$1((function (){var G__66156 = cljs.core.deref(frontend.mobile.util.idevice_info);
return (model__$1.cljs$core$IFn$_invoke$arity$1 ? model__$1.cljs$core$IFn$_invoke$arity$1(G__66156) : model__$1.call(null,G__66156));
})());
}
});

//# sourceMappingURL=frontend.mobile.util.js.map
