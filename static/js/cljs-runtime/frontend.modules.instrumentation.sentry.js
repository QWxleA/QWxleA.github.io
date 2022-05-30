goog.provide('frontend.modules.instrumentation.sentry');
var module$node_modules$$sentry$react$dist$index=shadow.js.require("module$node_modules$$sentry$react$dist$index", {});
var module$node_modules$$sentry$tracing$dist$index=shadow.js.require("module$node_modules$$sentry$tracing$dist$index", {});
var module$node_modules$posthog_js$dist$module=shadow.js.require("module$node_modules$posthog_js$dist$module", {});
frontend.modules.instrumentation.sentry.config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"dsn","dsn",1561266567),"https://636e9174ffa148c98d2b9d3369661683@o416451.ingest.sentry.io/5311485",new cljs.core.Keyword(null,"release","release",-1534371381),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("logseq%s@%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?"-android":(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?"-ios":""
)),frontend.version.version], 0)),new cljs.core.Keyword(null,"environment","environment",-666037640),(cljs.core.truth_(frontend.config.dev_QMARK_)?"development":"production"),new cljs.core.Keyword(null,"initialScope","initialScope",-1985815457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"platform","platform",-1086422114),(cljs.core.truth_(frontend.util.electron_QMARK_())?"electron":(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?"mobile":"web"
)),new cljs.core.Keyword(null,"publishing","publishing",-244219384),frontend.config.publishing_QMARK_], null)], null),new cljs.core.Keyword(null,"integrations","integrations",1844532423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$posthog_js$dist$module.SentryIntegration(module$node_modules$posthog_js$dist$module,"logseq",(5311485))),(new module$node_modules$$sentry$tracing$dist$index.BrowserTracing())], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),frontend.config.dev_QMARK_,new cljs.core.Keyword(null,"tracesSampleRate","tracesSampleRate",446547798),1.0,new cljs.core.Keyword(null,"beforeSend","beforeSend",-1560616376),(function (event){
try{var temp__5720__auto___60930 = cljs.core.re_matches(/file:\/\/.*?\/(app\/electron|static\/index)\.html(.*)/,event.request.url);
if(cljs.core.truth_(temp__5720__auto___60930)){
var vec__60795_60934 = temp__5720__auto___60930;
var __60935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60795_60934,(0),null);
var __60936__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60795_60934,(1),null);
var query_and_fragment_60937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60795_60934,(2),null);
(event.request.url = ["http://localhost/electron.html",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_and_fragment_60937)].join(''));
} else {
}

var seq__60798_60941 = cljs.core.seq(event.exception.values);
var chunk__60799_60942 = null;
var count__60800_60943 = (0);
var i__60801_60944 = (0);
while(true){
if((i__60801_60944 < count__60800_60943)){
var value_60945 = chunk__60799_60942.cljs$core$IIndexed$_nth$arity$2(null,i__60801_60944);
var seq__60860_60967 = cljs.core.seq(value_60945.stacktrace.frames);
var chunk__60861_60968 = null;
var count__60862_60969 = (0);
var i__60863_60970 = (0);
while(true){
if((i__60863_60970 < count__60862_60969)){
var frame_60971 = chunk__60861_60968.cljs$core$IIndexed$_nth$arity$2(null,i__60863_60970);
if(cljs.core.truth_(cljs.core.not_empty(frame_60971.filename))){
var temp__5720__auto___60972 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_60971.filename);
if(cljs.core.truth_(temp__5720__auto___60972)){
var vec__60874_60973 = temp__5720__auto___60972;
var __60974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60874_60973,(0),null);
var filename_60975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60874_60973,(1),null);
(frame_60971.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_60975)].join(''));

(frame_60971.lineno = (frame_60971.lineno - (2)));
} else {
}
} else {
}


var G__60976 = seq__60860_60967;
var G__60977 = chunk__60861_60968;
var G__60978 = count__60862_60969;
var G__60979 = (i__60863_60970 + (1));
seq__60860_60967 = G__60976;
chunk__60861_60968 = G__60977;
count__60862_60969 = G__60978;
i__60863_60970 = G__60979;
continue;
} else {
var temp__5720__auto___60980 = cljs.core.seq(seq__60860_60967);
if(temp__5720__auto___60980){
var seq__60860_60981__$1 = temp__5720__auto___60980;
if(cljs.core.chunked_seq_QMARK_(seq__60860_60981__$1)){
var c__5565__auto___60982 = cljs.core.chunk_first(seq__60860_60981__$1);
var G__60983 = cljs.core.chunk_rest(seq__60860_60981__$1);
var G__60984 = c__5565__auto___60982;
var G__60985 = cljs.core.count(c__5565__auto___60982);
var G__60986 = (0);
seq__60860_60967 = G__60983;
chunk__60861_60968 = G__60984;
count__60862_60969 = G__60985;
i__60863_60970 = G__60986;
continue;
} else {
var frame_60987 = cljs.core.first(seq__60860_60981__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_60987.filename))){
var temp__5720__auto___60988__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_60987.filename);
if(cljs.core.truth_(temp__5720__auto___60988__$1)){
var vec__60877_60989 = temp__5720__auto___60988__$1;
var __60990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60877_60989,(0),null);
var filename_60991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60877_60989,(1),null);
(frame_60987.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_60991)].join(''));

(frame_60987.lineno = (frame_60987.lineno - (2)));
} else {
}
} else {
}


var G__60992 = cljs.core.next(seq__60860_60981__$1);
var G__60993 = null;
var G__60994 = (0);
var G__60995 = (0);
seq__60860_60967 = G__60992;
chunk__60861_60968 = G__60993;
count__60862_60969 = G__60994;
i__60863_60970 = G__60995;
continue;
}
} else {
}
}
break;
}


var G__60996 = seq__60798_60941;
var G__60997 = chunk__60799_60942;
var G__60998 = count__60800_60943;
var G__60999 = (i__60801_60944 + (1));
seq__60798_60941 = G__60996;
chunk__60799_60942 = G__60997;
count__60800_60943 = G__60998;
i__60801_60944 = G__60999;
continue;
} else {
var temp__5720__auto___61000 = cljs.core.seq(seq__60798_60941);
if(temp__5720__auto___61000){
var seq__60798_61001__$1 = temp__5720__auto___61000;
if(cljs.core.chunked_seq_QMARK_(seq__60798_61001__$1)){
var c__5565__auto___61003 = cljs.core.chunk_first(seq__60798_61001__$1);
var G__61005 = cljs.core.chunk_rest(seq__60798_61001__$1);
var G__61006 = c__5565__auto___61003;
var G__61007 = cljs.core.count(c__5565__auto___61003);
var G__61008 = (0);
seq__60798_60941 = G__61005;
chunk__60799_60942 = G__61006;
count__60800_60943 = G__61007;
i__60801_60944 = G__61008;
continue;
} else {
var value_61009 = cljs.core.first(seq__60798_61001__$1);
var seq__60884_61010 = cljs.core.seq(value_61009.stacktrace.frames);
var chunk__60885_61011 = null;
var count__60886_61012 = (0);
var i__60887_61013 = (0);
while(true){
if((i__60887_61013 < count__60886_61012)){
var frame_61014 = chunk__60885_61011.cljs$core$IIndexed$_nth$arity$2(null,i__60887_61013);
if(cljs.core.truth_(cljs.core.not_empty(frame_61014.filename))){
var temp__5720__auto___61015__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_61014.filename);
if(cljs.core.truth_(temp__5720__auto___61015__$1)){
var vec__60907_61016 = temp__5720__auto___61015__$1;
var __61017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60907_61016,(0),null);
var filename_61018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60907_61016,(1),null);
(frame_61014.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_61018)].join(''));

(frame_61014.lineno = (frame_61014.lineno - (2)));
} else {
}
} else {
}


var G__61019 = seq__60884_61010;
var G__61020 = chunk__60885_61011;
var G__61021 = count__60886_61012;
var G__61022 = (i__60887_61013 + (1));
seq__60884_61010 = G__61019;
chunk__60885_61011 = G__61020;
count__60886_61012 = G__61021;
i__60887_61013 = G__61022;
continue;
} else {
var temp__5720__auto___61023__$1 = cljs.core.seq(seq__60884_61010);
if(temp__5720__auto___61023__$1){
var seq__60884_61024__$1 = temp__5720__auto___61023__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60884_61024__$1)){
var c__5565__auto___61025 = cljs.core.chunk_first(seq__60884_61024__$1);
var G__61026 = cljs.core.chunk_rest(seq__60884_61024__$1);
var G__61027 = c__5565__auto___61025;
var G__61028 = cljs.core.count(c__5565__auto___61025);
var G__61029 = (0);
seq__60884_61010 = G__61026;
chunk__60885_61011 = G__61027;
count__60886_61012 = G__61028;
i__60887_61013 = G__61029;
continue;
} else {
var frame_61030 = cljs.core.first(seq__60884_61024__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_61030.filename))){
var temp__5720__auto___61032__$2 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_61030.filename);
if(cljs.core.truth_(temp__5720__auto___61032__$2)){
var vec__60915_61033 = temp__5720__auto___61032__$2;
var __61034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60915_61033,(0),null);
var filename_61035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60915_61033,(1),null);
(frame_61030.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_61035)].join(''));

(frame_61030.lineno = (frame_61030.lineno - (2)));
} else {
}
} else {
}


var G__61036 = cljs.core.next(seq__60884_61024__$1);
var G__61037 = null;
var G__61038 = (0);
var G__61039 = (0);
seq__60884_61010 = G__61036;
chunk__60885_61011 = G__61037;
count__60886_61012 = G__61038;
i__60887_61013 = G__61039;
continue;
}
} else {
}
}
break;
}


var G__61040 = cljs.core.next(seq__60798_61001__$1);
var G__61041 = null;
var G__61042 = (0);
var G__61043 = (0);
seq__60798_60941 = G__61040;
chunk__60799_60942 = G__61041;
count__60800_60943 = G__61042;
i__60801_60944 = G__61043;
continue;
}
} else {
}
}
break;
}
}catch (e60794){var e_61044 = e60794;
console.error(e_61044);
}
return event;
})], null);
frontend.modules.instrumentation.sentry.init = (function frontend$modules$instrumentation$sentry$init(){
if(cljs.core.truth_(frontend.config.dev_QMARK_)){
return null;
} else {
var config = cljs.core.clj__GT_js(frontend.modules.instrumentation.sentry.config);
return module$node_modules$$sentry$react$dist$index.init(config);
}
});

//# sourceMappingURL=frontend.modules.instrumentation.sentry.js.map
