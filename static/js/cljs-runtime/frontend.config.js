goog.provide('frontend.config');
/**
 * @define {boolean}
 */
frontend.config.DEV_RELEASE = goog.define("frontend.config.DEV_RELEASE",false);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.dev_release_QMARK_ !== 'undefined')){
} else {
frontend.config.dev_release_QMARK_ = frontend.config.DEV_RELEASE;
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.dev_QMARK_ !== 'undefined')){
} else {
frontend.config.dev_QMARK_ = (function (){var or__4253__auto__ = frontend.config.dev_release_QMARK_;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return goog.DEBUG;
}
})();
}
/**
 * @define {boolean}
 */
frontend.config.PUBLISHING = goog.define("frontend.config.PUBLISHING",false);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.publishing_QMARK_ !== 'undefined')){
} else {
frontend.config.publishing_QMARK_ = frontend.config.PUBLISHING;
}
cljs.core.reset_BANG_(frontend.state.publishing_QMARK_,frontend.config.publishing_QMARK_);
frontend.config.test_QMARK_ = false;
/**
 * @define {boolean}
 */
frontend.config.FILE_SYNC_PROD_QMARK_ = goog.define("frontend.config.FILE_SYNC_PROD_QMARK_",false);
/**
 * @define {string}
 */
frontend.config.LOGIN_URL = goog.define("frontend.config.LOGIN_URL","https://logseq-test2.auth.us-east-2.amazoncognito.com/login?client_id=3ji1a0059hspovjq5fhed3uil8&response_type=code&scope=email+openid+phone&redirect_uri=logseq%3A%2F%2Fauth-callback");
/**
 * @define {string}
 */
frontend.config.API_DOMAIN = goog.define("frontend.config.API_DOMAIN","api.logseq.com");
/**
 * @define {string}
 */
frontend.config.WS_URL = goog.define("frontend.config.WS_URL","wss://og96xf1si7.execute-api.us-east-2.amazonaws.com/production?graphuuid=%s");
frontend.config.app_name = "logseq";
frontend.config.website = (cljs.core.truth_(frontend.config.dev_QMARK_)?"http://localhost:3000":frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("https://%s.com",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name], 0)));
frontend.config.api = (cljs.core.truth_(frontend.config.dev_QMARK_)?"http://localhost:3000/api/v1/":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.website),"/api/v1/"].join(''));
frontend.config.asset_domain = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("https://asset.%s.com",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name], 0));
frontend.config.asset_uri = (function frontend$config$asset_uri(path){
if(frontend.config.publishing_QMARK_){
return path;
} else {
if(frontend.util.file_protocol_QMARK_()){
return clojure.string.replace(path,"/static/","./");
} else {
if(cljs.core.truth_(frontend.config.dev_QMARK_)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.asset_domain),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
}

}
}
});
frontend.config.text_formats = (function frontend$config$text_formats(){
var config_formats = (function (){var G__93441 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"text-formats","text-formats",-737633982)], null));
var G__93441__$1 = (((G__93441 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),G__93441));
if((G__93441__$1 == null)){
return null;
} else {
return cljs.core.set(G__93441__$1);
}
})();
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(config_formats,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 24, [new cljs.core.Keyword(null,"dat","dat",683898592),null,new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"txt","txt",626843688),null,new cljs.core.Keyword(null,"yml","yml",1135976041),null,new cljs.core.Keyword(null,"erl","erl",-1257006295),null,new cljs.core.Keyword(null,"excalidraw","excalidraw",-397772502),null,new cljs.core.Keyword(null,"css","css",1135045163),null,new cljs.core.Keyword(null,"asciidoc","asciidoc",1736965296),null,new cljs.core.Keyword(null,"ts","ts",1617209904),null,new cljs.core.Keyword(null,"rb","rb",1673817808),null,new cljs.core.Keyword(null,"ml","ml",1909675057),null,new cljs.core.Keyword(null,"java","java",1958249105),null,new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"ex","ex",-1413771341),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"php","php",-97199496),null,new cljs.core.Keyword(null,"rst","rst",-824162183),null,new cljs.core.Keyword(null,"json","json",1279968570),null,new cljs.core.Keyword(null,"clj","clj",-660495428),null,new cljs.core.Keyword(null,"adoc","adoc",-1288345346),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null));
});
frontend.config.markup_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"asciidoc","asciidoc",1736965296),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"rst","rst",-824162183),null,new cljs.core.Keyword(null,"adoc","adoc",-1288345346),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null);
frontend.config.img_formats = (function frontend$config$img_formats(){
var config_formats = (function (){var G__93442 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"image-formats","image-formats",-1902870378)], null));
var G__93442__$1 = (((G__93442 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),G__93442));
if((G__93442__$1 == null)){
return null;
} else {
return cljs.core.set(G__93442__$1);
}
})();
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(config_formats,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"bmp","bmp",1866754050),null,new cljs.core.Keyword(null,"png","png",551930691),null,new cljs.core.Keyword(null,"gif","gif",1261828260),null,new cljs.core.Keyword(null,"webp","webp",1501869900),null,new cljs.core.Keyword(null,"svg","svg",856789142),null,new cljs.core.Keyword(null,"jpeg","jpeg",-646816934),null,new cljs.core.Keyword(null,"ico","ico",1994407291),null,new cljs.core.Keyword(null,"jpg","jpg",-1835942949),null], null), null));
});
frontend.config.doc_formats = (function frontend$config$doc_formats(){
var config_formats = (function (){var G__93443 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"document-formats","document-formats",1220198709)], null));
var G__93443__$1 = (((G__93443 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),G__93443));
if((G__93443__$1 == null)){
return null;
} else {
return cljs.core.set(G__93443__$1);
}
})();
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(config_formats,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"one","one",935007904),null,new cljs.core.Keyword(null,"pptx","pptx",1751889346),null,new cljs.core.Keyword(null,"ppt","ppt",976691076),null,new cljs.core.Keyword(null,"xlsx","xlsx",847128521),null,new cljs.core.Keyword(null,"epub","epub",-826123950),null,new cljs.core.Keyword(null,"xls","xls",732635219),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"docx","docx",-566057986),null], null), null));
});
frontend.config.audio_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"wav","wav",270623362),null,new cljs.core.Keyword(null,"aac","aac",-1635091669),null,new cljs.core.Keyword(null,"m4a","m4a",-91255727),null,new cljs.core.Keyword(null,"ogg","ogg",1456573938),null,new cljs.core.Keyword(null,"flac","flac",-535998251),null,new cljs.core.Keyword(null,"mpeg","mpeg",-1021588107),null,new cljs.core.Keyword(null,"wma","wma",1555140921),null,new cljs.core.Keyword(null,"mp3","mp3",-879934022),null], null), null);
frontend.config.media_formats = clojure.set.union.cljs$core$IFn$_invoke$arity$2(frontend.config.img_formats(),frontend.config.audio_formats);
frontend.config.html_render_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asciidoc","asciidoc",1736965296),null,new cljs.core.Keyword(null,"adoc","adoc",-1288345346),null], null), null);
frontend.config.supported_formats = (function frontend$config$supported_formats(){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(frontend.config.text_formats(),frontend.config.img_formats());
});
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.mldoc_support_formats !== 'undefined')){
} else {
frontend.config.mldoc_support_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null);
}
frontend.config.mldoc_support_QMARK_ = (function frontend$config$mldoc_support_QMARK_(format){
return cljs.core.contains_QMARK_(frontend.config.mldoc_support_formats,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format));
});
frontend.config.mobile_QMARK_ = ((frontend.util.node_test_QMARK_)?null:logseq.graph_parser.util.safe_re_find(/Mobi/,navigator.userAgent));
frontend.config.get_block_pattern = (function frontend$config$get_block_pattern(format){
var format__$1 = (function (){var or__4253__auto__ = format;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var format__$2 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format__$1);
var G__93444 = format__$2;
var G__93444__$1 = (((G__93444 instanceof cljs.core.Keyword))?G__93444.fqn:null);
switch (G__93444__$1) {
case "org":
return "*";

break;
default:
return "-";

}
});
frontend.config.get_hr = (function frontend$config$get_hr(format){
var format__$1 = (function (){var or__4253__auto__ = format;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__93445 = format__$1;
var G__93445__$1 = (((G__93445 instanceof cljs.core.Keyword))?G__93445.fqn:null);
switch (G__93445__$1) {
case "org":
return "-----";

break;
case "markdown":
return "---";

break;
default:
return "";

}
});
frontend.config.get_bold = (function frontend$config$get_bold(format){
var format__$1 = (function (){var or__4253__auto__ = format;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__93446 = format__$1;
var G__93446__$1 = (((G__93446 instanceof cljs.core.Keyword))?G__93446.fqn:null);
switch (G__93446__$1) {
case "org":
return "*";

break;
case "markdown":
return "**";

break;
default:
return "";

}
});
frontend.config.get_italic = (function frontend$config$get_italic(format){
var format__$1 = (function (){var or__4253__auto__ = format;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__93447 = format__$1;
var G__93447__$1 = (((G__93447 instanceof cljs.core.Keyword))?G__93447.fqn:null);
switch (G__93447__$1) {
case "org":
return "/";

break;
case "markdown":
return "_";

break;
default:
return "";

}
});
frontend.config.get_underline = (function frontend$config$get_underline(format){
var format__$1 = (function (){var or__4253__auto__ = format;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__93448 = format__$1;
var G__93448__$1 = (((G__93448 instanceof cljs.core.Keyword))?G__93448.fqn:null);
switch (G__93448__$1) {
case "org":
return "_";

break;
case "markdown":
return "__";

break;
default:
return "";

}
});
frontend.config.get_strike_through = (function frontend$config$get_strike_through(format){
var format__$1 = (function (){var or__4253__auto__ = format;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__93449 = format__$1;
var G__93449__$1 = (((G__93449 instanceof cljs.core.Keyword))?G__93449.fqn:null);
switch (G__93449__$1) {
case "org":
return "+";

break;
case "markdown":
return "~~";

break;
default:
return "";

}
});
frontend.config.get_highlight = (function frontend$config$get_highlight(format){
var G__93450 = format;
var G__93450__$1 = (((G__93450 instanceof cljs.core.Keyword))?G__93450.fqn:null);
switch (G__93450__$1) {
case "org":
return "^^";

break;
case "markdown":
return "==";

break;
default:
return "";

}
});
frontend.config.get_code = (function frontend$config$get_code(format){
var format__$1 = (function (){var or__4253__auto__ = format;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__93451 = format__$1;
var G__93451__$1 = (((G__93451 instanceof cljs.core.Keyword))?G__93451.fqn:null);
switch (G__93451__$1) {
case "org":
return "~";

break;
case "markdown":
return "`";

break;
default:
return "";

}
});
frontend.config.get_empty_link_and_forward_pos = (function frontend$config$get_empty_link_and_forward_pos(format){
var G__93452 = format;
var G__93452__$1 = (((G__93452 instanceof cljs.core.Keyword))?G__93452.fqn:null);
switch (G__93452__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[[][]]",(2)], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[]()",(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.link_format = (function frontend$config$link_format(format,label,link){
if(cljs.core.truth_(label)){
var G__93453 = format;
var G__93453__$1 = (((G__93453 instanceof cljs.core.Keyword))?G__93453.fqn:null);
switch (G__93453__$1) {
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link,label], 0));

break;
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,link], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__93453__$1)].join('')));

}
} else {
return link;
}
});
frontend.config.with_default_link = (function frontend$config$with_default_link(format,link){
var G__93454 = format;
var G__93454__$1 = (((G__93454 instanceof cljs.core.Keyword))?G__93454.fqn:null);
switch (G__93454__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link], 0)),((4) + cljs.core.count(link))], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link], 0)),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.with_label_link = (function frontend$config$with_label_link(format,label,link){
var G__93455 = format;
var G__93455__$1 = (((G__93455 instanceof cljs.core.Keyword))?G__93455.fqn:null);
switch (G__93455__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link,label], 0)),(((4) + cljs.core.count(link)) + cljs.core.count(label))], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,link], 0)),(((4) + cljs.core.count(link)) + cljs.core.count(label))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.with_default_label = (function frontend$config$with_default_label(format,label){
var G__93456 = format;
var G__93456__$1 = (((G__93456 instanceof cljs.core.Keyword))?G__93456.fqn:null);
switch (G__93456__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0)),(2)], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s]()",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0)),((3) + cljs.core.count(label))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.properties_wrapper_pattern = (function frontend$config$properties_wrapper_pattern(format){
var G__93457 = format;
var G__93457__$1 = (((G__93457 instanceof cljs.core.Keyword))?G__93457.fqn:null);
switch (G__93457__$1) {
case "markdown":
return "---\n%s\n---";

break;
default:
return "%s";

}
});
frontend.config.get_file_extension = (function frontend$config$get_file_extension(format){
var G__93458 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__93458__$1 = (((G__93458 instanceof cljs.core.Keyword))?G__93458.fqn:null);
switch (G__93458__$1) {
case "markdown":
return "md";

break;
default:
return cljs.core.name(format);

}
});
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.default_journals_directory !== 'undefined')){
} else {
frontend.config.default_journals_directory = "journals";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.default_pages_directory !== 'undefined')){
} else {
frontend.config.default_pages_directory = "pages";
}
frontend.config.get_pages_directory = (function frontend$config$get_pages_directory(){
var or__4253__auto__ = frontend.state.get_pages_directory();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.config.default_pages_directory;
}
});
frontend.config.get_journals_directory = (function frontend$config$get_journals_directory(){
var or__4253__auto__ = frontend.state.get_journals_directory();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.config.default_journals_directory;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.local_repo !== 'undefined')){
} else {
frontend.config.local_repo = "local";
}
frontend.config.demo_graph_QMARK_ = (function frontend$config$demo_graph_QMARK_(var_args){
var G__93460 = arguments.length;
switch (G__93460) {
case 0:
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (graph){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph,frontend.config.local_repo);
}));

(frontend.config.demo_graph_QMARK_.cljs$lang$maxFixedArity = 1);

if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.recycle_dir !== 'undefined')){
} else {
frontend.config.recycle_dir = ".recycle";
}
frontend.config.config_file = "config.edn";
frontend.config.custom_css_file = "custom.css";
frontend.config.export_css_file = "export.css";
frontend.config.custom_js_file = "custom.js";
frontend.config.metadata_file = "metadata.edn";
frontend.config.pages_metadata_file = "pages-metadata.edn";
frontend.config.config_default_content = "{:meta/version 1\n\n ;; Currently, we support either \"Markdown\" or \"Org\".\n ;; This can overwrite your global preference so that\n ;; maybe your personal preferred format is Org but you'd\n ;; need to use Markdown for some projects.\n ;; :preferred-format \"\"\n\n ;; Preferred workflow style.\n ;; Value is either \":now\" for NOW/LATER style,\n ;; or \":todo\" for TODO/DOING style.\n :preferred-workflow :now\n\n ;; The app will ignore those directories or files.\n ;; E.g. \"/archived\" \"/test.md\"\n :hidden []\n\n ;; When creating the new journal page, the app will use your template if there is one.\n ;; You only need to input your template name here.\n :default-templates\n {:journals \"\"}\n\n ;; Whether to enable hover on tooltip preview feature\n ;; Default is true, you can also toggle this via setting page\n :ui/enable-tooltip? true\n\n :feature/enable-block-timestamps? false\n\n ;; Specify the date on which the week starts.\n ;; Goes from 0 to 6 (Monday to Sunday), default to 6\n :start-of-week 6\n\n ;; Specify a custom CSS import\n ;; This option take precedence over your local `logseq/custom.css` file\n ;; You may find a list of awesome logseq themes here:\n ;; https://github.com/logseq/awesome-logseq#css-themes\n ;; Example:\n ;; :custom-css-url \"@import url('https://cdn.jsdelivr.net/gh/dracula/logseq@master/custom.css');\"\n\n ;; When :all-pages-public? true, export repo would export all pages within that repo.\n ;; Regardless of whether you've set any page to public or not.\n ;; Example:\n ;; :publishing/all-pages-public? true\n\n ;; Specify default home page and sidebar status for Logseq\n ;; If not specified, Logseq default opens journals page on startup\n ;; value for `:page` is name of page\n ;; Possible options for `:sidebar` are\n ;; 1. `\"Contents\"` to open up `Contents` in sidebar by default\n ;; 2. `page name` to open up some page in sidebar\n ;; 3. Or multiple pages in an array [\"Contents\" \"Page A\" \"Page B\"]\n ;; If `:sidebar` is not set, sidebar will be hidden\n ;; Example:\n ;; 1. Setup page \"Changelog\" as home page and \"Contents\" in sidebar\n ;; :default-home {:page \"Changelog\", :sidebar \"Contents\"}\n ;; 2. Setup page \"Jun 3rd, 2021\" as home page without sidebar\n ;; :default-home {:page \"Jun 3rd, 2021\"}\n ;; 3. Setup page \"home\" as home page with multiple pages in sidebar\n ;; :default-home {:page \"home\" :sidebar [\"page a\" \"page b\"]}\n\n ;; Tell logseq to use a specific folder in the repo as a default location for notes\n ;; if not specified, notes are stored in `pages` directory\n ;; :pages-directory \"your-directory\"\n\n ;; Tell logseq to use a specific folder in the repo as a default location for journals\n ;; if not specified, journals are stored in `journals` directory\n ;; :journals-directory \"your-directory\"\n\n ;; Set this to true will convert\n ;; `[[Grant Ideas]]` to `[[file:./grant_ideas.org][Grant Ideas]]` for org-mode\n ;; For more, see https://github.com/logseq/logseq/issues/672\n ;; :org-mode/insert-file-link? true\n\n ;; If you prefer to use the file name as the page title\n ;; instead of the first heading's title\n ;; the only option for now is `file`\n ;; :page-name-order \"file\"\n\n ;; Setup custom shortcuts under `:shortcuts` key\n ;; Syntax:\n ;; 1. `+` means keys pressing simultaneously. eg: `ctrl+shift+a`\n ;; 2. ` ` empty space between keys represents key chords. eg: `t s` means press `s` follow by `t`\n ;; 3. `mod` means `Ctrl` for Windows/Linux  and `Command` for Mac\n ;; 4. use `false` to disable particular shortcut\n ;; 4. you can define multiple bindings for one action, eg `[\"ctrl+j\" \"down\"]`\n ;; full list of configurable shortcuts are available below:\n ;; https://github.com/logseq/logseq/blob/master/src/main/frontend/modules/shortcut/config.cljs\n ;; Example:\n ;; :shortcuts\n ;; {:editor/new-block       \"enter\"\n ;;  :editor/new-line        \"shift+enter\"\n ;;  :editor/insert-link     \"mod+shift+k\"\n ;;  :editor/hightlight       false\n ;;  :ui/toggle-settings     \"t s\"\n ;;  :editor/up              [\"ctrl+k\" \"up\"]\n ;;  :editor/down            [\"ctrl+j\" \"down\"]\n ;;  :editor/left            [\"ctrl+h\" \"left\"]\n ;;  :editor/right           [\"ctrl+l\" \"right\"]}\n :shortcuts {}\n\n ;; By default, pressing `Enter` in the document mode will create a new line.\n ;; Set this to `true` so that it's the same behaviour as the usual outliner mode.\n :shortcut/doc-mode-enter-for-new-block? false\n\n ;; Whether to show command doc on hover\n :ui/show-command-doc? true\n\n ;; Whether to show empty bullets for non-document mode (the default mode)\n :ui/show-empty-bullets? false\n\n ;; The app will show those queries in today's journal page,\n ;; the \"NOW\" query asks the tasks which need to be finished \"now\",\n ;; the \"NEXT\" query asks the future tasks.\n :default-queries\n {:journals\n  [{:title \"\uD83D\uDD28 NOW\"\n    :query [:find (pull ?h [*])\n            :in $ ?start ?today\n            :where\n            [?h :block/marker ?marker]\n            [(contains? #{\"NOW\" \"DOING\"} ?marker)]\n            [?h :block/page ?p]\n            [?p :block/journal? true]\n            [?p :block/journal-day ?d]\n            [(>= ?d ?start)]\n            [(<= ?d ?today)]]\n    :inputs [:14d :today]\n    :result-transform (fn [result]\n                        (sort-by (fn [h]\n                                   (get h :block/priority \"Z\")) result))\n    :collapsed? false}\n   {:title \"\uD83D\uDCC5 NEXT\"\n    :query [:find (pull ?h [*])\n            :in $ ?start ?next\n            :where\n            [?h :block/marker ?marker]\n            [(contains? #{\"NOW\" \"LATER\" \"TODO\"} ?marker)]\n            [?h :block/ref-pages ?p]\n            [?p :block/journal? true]\n            [?p :block/journal-day ?d]\n            [(> ?d ?start)]\n            [(< ?d ?next)]]\n    :inputs [:today :7d-after]\n    :collapsed? false}]}\n\n ;; Add your own commands to speedup.\n ;; E.g. [[\"js\" \"Javascript\"]]\n :commands\n []\n\n ;; By default, a block can only be collapsed if it has some children.\n ;; `:outliner/block-title-collapse-enabled? true` enables a block with a title\n ;; (multiple lines) can be collapsed too. For example:\n ;; - block title\n ;;   block content\n :outliner/block-title-collapse-enabled? false\n\n ;; Macros replace texts and will make you more productive.\n ;; For example:\n ;; Add this to the macros below:\n ;; {\"poem\" \"Rose is $1, violet's $2. Life's ordered: Org assists you.\"}\n ;; input \"{{{poem red,blue}}}\"\n ;; becomes\n ;; Rose is red, violet's blue. Life's ordered: Org assists you.\n :macros {}\n\n ;; The default level to be opened for the linked references.\n ;; For example, if we have some example blocks like this:\n ;; - a [[page]] (level 1)\n ;;   - b        (level 2)\n ;;     - c      (level 3)\n ;;       - d    (level 4)\n ;;\n ;; With the default value of level 2, `b` will be collapsed.\n ;; If we set the level's value to 3, `b` will be opened and `c` will be collapsed.\n :ref/default-open-blocks-level 2\n\n :ref/linked-references-collapsed-threshold 50\n\n ;; any number between 0 and 1 (the greater it is the faster the changes of the next-interval of card reviews) (default 0.5)\n ;; :srs/learning-fraction 0.5\n\n ;; the initial interval after the first successful review of a card (default 4)\n ;; :srs/initial-interval 4\n\n ;; hide specific properties for blocks\n ;; E.g. #{:created-at :updated-at}\n ;; :block-hidden-properties #{}\n\n ;; logbook setup\n ;; :logbook/settings\n ;; {:with-second-support? false ;limit logbook to minutes, seconds will be eliminated\n ;;  :enabled-in-all-blocks true ;display logbook in all blocks after timetracking\n ;;  :enabled-in-timestamped-blocks false ;don't display logbook at all\n ;; }\n\n ;; Mobile photo uploading setup\n ;; :mobile/photo\n ;; {:allow-editing? true}\n\n ;; Extra CodeMirror options\n ;; :editor/extra-codemirror-options {:keyMap \"emacs\" :lineWrapping true}\n\n ;; ignore #+keyword: for parsing page references in orgmode\n ;; :ignored-page-references-keywords #{\"author\" \"startup\"}\n \n ;; Quick capture templates on mobile for recieving contents from other apps.\n ;; Each template contains three elements {time}, {text} and {url}, which can be auto-expanded\n ;; by received contents from other apps. Note: the {} cannot be omitted.\n ;; - {time}: capture time\n ;; - {text}: text that users selected before sharing.\n ;; - {url}: url or assets path for media files stored in Logseq.\n ;; You can also reorder them, or even only use one or two of them in the template.\n ;; You can also insert or format any text in the template as shown in the following examples.\n ;; :quick-capture-templates\n ;; {:text \"[[quick capture]] **{time}**: \\n - {text} from {url}\"\n ;;  :media \"[[quick capture]] **{time}**: \\n - {url}\"}\n }\n";
frontend.config.markers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["started",null,"doing",null,"cancelled",null,"wait",null,"waiting",null,"in-progress",null,"todo",null,"now",null,"later",null,"done",null,"canceled",null], null), null);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.idb_db_prefix !== 'undefined')){
} else {
frontend.config.idb_db_prefix = "logseq-db/";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.local_db_prefix !== 'undefined')){
} else {
frontend.config.local_db_prefix = "logseq_local_";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.local_handle !== 'undefined')){
} else {
frontend.config.local_handle = "handle";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.local_handle_prefix !== 'undefined')){
} else {
frontend.config.local_handle_prefix = [frontend.config.local_handle,"/",frontend.config.local_db_prefix].join('');
}
frontend.config.local_db_QMARK_ = (function frontend$config$local_db_QMARK_(s){
return ((typeof s === 'string') && (clojure.string.starts_with_QMARK_(s,frontend.config.local_db_prefix)));
});
frontend.config.get_local_asset_absolute_path = (function frontend$config$get_local_asset_absolute_path(s){
return ["/",clojure.string.replace(s,/^[.\/]*/,"")].join('');
});
frontend.config.get_local_dir = (function frontend$config$get_local_dir(s){
return clojure.string.replace(s,frontend.config.local_db_prefix,"");
});
frontend.config.get_local_repo = (function frontend$config$get_local_repo(dir){
return [frontend.config.local_db_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join('');
});
frontend.config.get_repo_dir = (function frontend$config$get_repo_dir(repo_url){
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__4251__auto__;
}
})())){
return frontend.config.get_local_dir(repo_url);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.mobile.util.is_native_platform_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__4251__auto__;
}
})())){
var dir = frontend.config.get_local_dir(repo_url);
if(clojure.string.starts_with_QMARK_(dir,"file:")){
return dir;
} else {
return ["file:///",clojure.string.replace(dir,/^\/+/,"")].join('');
}
} else {
return ["/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.take_last((2),clojure.string.split.cljs$core$IFn$_invoke$arity$2(repo_url,/\//)))].join('');

}
}
});
frontend.config.get_repo_path = (function frontend$config$get_repo_path(repo_url,path){
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.mobile.util.is_native_platform_QMARK_();
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__4251__auto__;
}
})())){
return path;
} else {
var G__93461 = frontend.config.get_repo_dir(repo_url);
var G__93462 = path;
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__93461,G__93462) : frontend.util.node_path.join.call(null,G__93461,G__93462));
}
});
/**
 * Normalization happens here
 */
frontend.config.get_file_path = (function frontend$config$get_file_path(repo_url,relative_path){
if(cljs.core.truth_((function (){var and__4251__auto__ = repo_url;
if(cljs.core.truth_(and__4251__auto__)){
return relative_path;
} else {
return and__4251__auto__;
}
})())){
var path = (cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__4251__auto__;
}
})())?(function (){var dir = frontend.config.get_repo_dir(repo_url);
if(clojure.string.starts_with_QMARK_(relative_path,dir)){
return relative_path;
} else {
return [dir,"/",clojure.string.replace(relative_path,/^\//,"")].join('');
}
})():(cljs.core.truth_((function (){var and__4251__auto__ = frontend.mobile.util.native_ios_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__4251__auto__;
}
})())?(function (){var dir = frontend.config.get_repo_dir(repo_url);
return decodeURI([dir,cljs.core.str.cljs$core$IFn$_invoke$arity$1(relative_path)].join(''));
})():(cljs.core.truth_((function (){var and__4251__auto__ = frontend.mobile.util.native_android_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__4251__auto__;
}
})())?(function (){var dir = frontend.config.get_repo_dir(repo_url);
var dir__$1 = ((((clojure.string.starts_with_QMARK_(dir,"file:")) || (clojure.string.starts_with_QMARK_(dir,"content:"))))?dir:["file:///",clojure.string.replace(dir,/^\/+/,"")].join(''));
return [clojure.string.replace(dir__$1,/\/+$/,""),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relative_path)].join('');
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(relative_path)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(relative_path,(1)):relative_path
))));
return logseq.graph_parser.util.path_normalize(path);
} else {
return null;
}
});
frontend.config.get_config_path = (function frontend$config$get_config_path(var_args){
var G__93464 = arguments.length;
switch (G__93464) {
case 0:
return frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.config_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_config_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_metadata_path = (function frontend$config$get_metadata_path(var_args){
var G__93466 = arguments.length;
switch (G__93466) {
case 0:
return frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.metadata_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_metadata_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_pages_metadata_path = (function frontend$config$get_pages_metadata_path(var_args){
var G__93468 = arguments.length;
switch (G__93468) {
case 0:
return frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.pages_metadata_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_pages_metadata_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_custom_css_path = (function frontend$config$get_custom_css_path(var_args){
var G__93470 = arguments.length;
switch (G__93470) {
case 0:
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.custom_css_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_custom_css_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_export_css_path = (function frontend$config$get_export_css_path(var_args){
var G__93472 = arguments.length;
switch (G__93472) {
case 0:
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.export_css_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_export_css_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_custom_js_path = (function frontend$config$get_custom_js_path(var_args){
var G__93474 = arguments.length;
switch (G__93474) {
case 0:
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.custom_js_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_custom_js_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_block_hidden_properties = (function frontend$config$get_block_hidden_properties(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),frontend.state.get_current_repo(),new cljs.core.Keyword(null,"block-hidden-properties","block-hidden-properties",-155956857)], null));
});

//# sourceMappingURL=frontend.config.js.map
