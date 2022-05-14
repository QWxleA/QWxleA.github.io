goog.provide('frontend.modules.instrumentation.sentry');
var module$node_modules$$sentry$react$dist$index=shadow.js.require("module$node_modules$$sentry$react$dist$index", {});
var module$node_modules$$sentry$tracing$dist$index=shadow.js.require("module$node_modules$$sentry$tracing$dist$index", {});
var module$node_modules$posthog_js$dist$module=shadow.js.require("module$node_modules$posthog_js$dist$module", {});
frontend.modules.instrumentation.sentry.config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"dsn","dsn",1561266567),"https://636e9174ffa148c98d2b9d3369661683@o416451.ingest.sentry.io/5311485",new cljs.core.Keyword(null,"release","release",-1534371381),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("logseq%s@%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?"-android":(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?"-ios":""
)),frontend.version.version], 0)),new cljs.core.Keyword(null,"environment","environment",-666037640),(cljs.core.truth_(frontend.config.dev_QMARK_)?"development":"production"),new cljs.core.Keyword(null,"initialScope","initialScope",-1985815457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"platform","platform",-1086422114),(cljs.core.truth_(frontend.util.electron_QMARK_())?"electron":(cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())?"mobile":"web"
)),new cljs.core.Keyword(null,"publishing","publishing",-244219384),frontend.config.publishing_QMARK_], null)], null),new cljs.core.Keyword(null,"integrations","integrations",1844532423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$posthog_js$dist$module.SentryIntegration(module$node_modules$posthog_js$dist$module,"logseq",(5311485))),(new module$node_modules$$sentry$tracing$dist$index.BrowserTracing())], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),frontend.config.dev_QMARK_,new cljs.core.Keyword(null,"tracesSampleRate","tracesSampleRate",446547798),1.0,new cljs.core.Keyword(null,"beforeSend","beforeSend",-1560616376),(function (event){
try{var temp__5720__auto___101924 = cljs.core.re_matches(/file:\/\/.*?\/(app\/electron|static\/index)\.html(.*)/,event.request.url);
if(cljs.core.truth_(temp__5720__auto___101924)){
var vec__101838_101925 = temp__5720__auto___101924;
var __101926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101838_101925,(0),null);
var __101927__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101838_101925,(1),null);
var query_and_fragment_101928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101838_101925,(2),null);
(event.request.url = ["http://localhost/electron.html",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_and_fragment_101928)].join(''));
} else {
}

var seq__101841_101929 = cljs.core.seq(event.exception.values);
var chunk__101842_101930 = null;
var count__101843_101931 = (0);
var i__101844_101932 = (0);
while(true){
if((i__101844_101932 < count__101843_101931)){
var value_101933 = chunk__101842_101930.cljs$core$IIndexed$_nth$arity$2(null,i__101844_101932);
var seq__101878_101934 = cljs.core.seq(value_101933.stacktrace.frames);
var chunk__101879_101935 = null;
var count__101880_101936 = (0);
var i__101881_101937 = (0);
while(true){
if((i__101881_101937 < count__101880_101936)){
var frame_101938 = chunk__101879_101935.cljs$core$IIndexed$_nth$arity$2(null,i__101881_101937);
if(cljs.core.truth_(cljs.core.not_empty(frame_101938.filename))){
var temp__5720__auto___101939 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_101938.filename);
if(cljs.core.truth_(temp__5720__auto___101939)){
var vec__101888_101940 = temp__5720__auto___101939;
var __101941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101888_101940,(0),null);
var filename_101942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101888_101940,(1),null);
(frame_101938.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_101942)].join(''));

(frame_101938.lineno = (frame_101938.lineno - (2)));
} else {
}
} else {
}


var G__101943 = seq__101878_101934;
var G__101944 = chunk__101879_101935;
var G__101945 = count__101880_101936;
var G__101946 = (i__101881_101937 + (1));
seq__101878_101934 = G__101943;
chunk__101879_101935 = G__101944;
count__101880_101936 = G__101945;
i__101881_101937 = G__101946;
continue;
} else {
var temp__5720__auto___101947 = cljs.core.seq(seq__101878_101934);
if(temp__5720__auto___101947){
var seq__101878_101948__$1 = temp__5720__auto___101947;
if(cljs.core.chunked_seq_QMARK_(seq__101878_101948__$1)){
var c__4679__auto___101949 = cljs.core.chunk_first(seq__101878_101948__$1);
var G__101950 = cljs.core.chunk_rest(seq__101878_101948__$1);
var G__101951 = c__4679__auto___101949;
var G__101952 = cljs.core.count(c__4679__auto___101949);
var G__101953 = (0);
seq__101878_101934 = G__101950;
chunk__101879_101935 = G__101951;
count__101880_101936 = G__101952;
i__101881_101937 = G__101953;
continue;
} else {
var frame_101954 = cljs.core.first(seq__101878_101948__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_101954.filename))){
var temp__5720__auto___101955__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_101954.filename);
if(cljs.core.truth_(temp__5720__auto___101955__$1)){
var vec__101891_101956 = temp__5720__auto___101955__$1;
var __101957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101891_101956,(0),null);
var filename_101958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101891_101956,(1),null);
(frame_101954.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_101958)].join(''));

(frame_101954.lineno = (frame_101954.lineno - (2)));
} else {
}
} else {
}


var G__101959 = cljs.core.next(seq__101878_101948__$1);
var G__101960 = null;
var G__101961 = (0);
var G__101962 = (0);
seq__101878_101934 = G__101959;
chunk__101879_101935 = G__101960;
count__101880_101936 = G__101961;
i__101881_101937 = G__101962;
continue;
}
} else {
}
}
break;
}


var G__101963 = seq__101841_101929;
var G__101964 = chunk__101842_101930;
var G__101965 = count__101843_101931;
var G__101966 = (i__101844_101932 + (1));
seq__101841_101929 = G__101963;
chunk__101842_101930 = G__101964;
count__101843_101931 = G__101965;
i__101844_101932 = G__101966;
continue;
} else {
var temp__5720__auto___101967 = cljs.core.seq(seq__101841_101929);
if(temp__5720__auto___101967){
var seq__101841_101968__$1 = temp__5720__auto___101967;
if(cljs.core.chunked_seq_QMARK_(seq__101841_101968__$1)){
var c__4679__auto___101969 = cljs.core.chunk_first(seq__101841_101968__$1);
var G__101970 = cljs.core.chunk_rest(seq__101841_101968__$1);
var G__101971 = c__4679__auto___101969;
var G__101972 = cljs.core.count(c__4679__auto___101969);
var G__101973 = (0);
seq__101841_101929 = G__101970;
chunk__101842_101930 = G__101971;
count__101843_101931 = G__101972;
i__101844_101932 = G__101973;
continue;
} else {
var value_101974 = cljs.core.first(seq__101841_101968__$1);
var seq__101894_101975 = cljs.core.seq(value_101974.stacktrace.frames);
var chunk__101895_101976 = null;
var count__101896_101977 = (0);
var i__101897_101978 = (0);
while(true){
if((i__101897_101978 < count__101896_101977)){
var frame_101979 = chunk__101895_101976.cljs$core$IIndexed$_nth$arity$2(null,i__101897_101978);
if(cljs.core.truth_(cljs.core.not_empty(frame_101979.filename))){
var temp__5720__auto___101980__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_101979.filename);
if(cljs.core.truth_(temp__5720__auto___101980__$1)){
var vec__101908_101981 = temp__5720__auto___101980__$1;
var __101982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101908_101981,(0),null);
var filename_101983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101908_101981,(1),null);
(frame_101979.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_101983)].join(''));

(frame_101979.lineno = (frame_101979.lineno - (2)));
} else {
}
} else {
}


var G__101985 = seq__101894_101975;
var G__101986 = chunk__101895_101976;
var G__101987 = count__101896_101977;
var G__101988 = (i__101897_101978 + (1));
seq__101894_101975 = G__101985;
chunk__101895_101976 = G__101986;
count__101896_101977 = G__101987;
i__101897_101978 = G__101988;
continue;
} else {
var temp__5720__auto___101989__$1 = cljs.core.seq(seq__101894_101975);
if(temp__5720__auto___101989__$1){
var seq__101894_101990__$1 = temp__5720__auto___101989__$1;
if(cljs.core.chunked_seq_QMARK_(seq__101894_101990__$1)){
var c__4679__auto___101991 = cljs.core.chunk_first(seq__101894_101990__$1);
var G__101992 = cljs.core.chunk_rest(seq__101894_101990__$1);
var G__101993 = c__4679__auto___101991;
var G__101994 = cljs.core.count(c__4679__auto___101991);
var G__101995 = (0);
seq__101894_101975 = G__101992;
chunk__101895_101976 = G__101993;
count__101896_101977 = G__101994;
i__101897_101978 = G__101995;
continue;
} else {
var frame_101996 = cljs.core.first(seq__101894_101990__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_101996.filename))){
var temp__5720__auto___101997__$2 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_101996.filename);
if(cljs.core.truth_(temp__5720__auto___101997__$2)){
var vec__101915_101999 = temp__5720__auto___101997__$2;
var __102000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101915_101999,(0),null);
var filename_102001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101915_101999,(1),null);
(frame_101996.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_102001)].join(''));

(frame_101996.lineno = (frame_101996.lineno - (2)));
} else {
}
} else {
}


var G__102003 = cljs.core.next(seq__101894_101990__$1);
var G__102004 = null;
var G__102005 = (0);
var G__102006 = (0);
seq__101894_101975 = G__102003;
chunk__101895_101976 = G__102004;
count__101896_101977 = G__102005;
i__101897_101978 = G__102006;
continue;
}
} else {
}
}
break;
}


var G__102007 = cljs.core.next(seq__101841_101968__$1);
var G__102008 = null;
var G__102009 = (0);
var G__102010 = (0);
seq__101841_101929 = G__102007;
chunk__101842_101930 = G__102008;
count__101843_101931 = G__102009;
i__101844_101932 = G__102010;
continue;
}
} else {
}
}
break;
}
}catch (e101837){var e_102011 = e101837;
console.error(e_102011);
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
