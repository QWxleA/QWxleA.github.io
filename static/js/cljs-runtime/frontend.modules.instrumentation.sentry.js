goog.provide('frontend.modules.instrumentation.sentry');
var module$node_modules$$sentry$react$dist$index=shadow.js.require("module$node_modules$$sentry$react$dist$index", {});
var module$node_modules$$sentry$tracing$dist$index=shadow.js.require("module$node_modules$$sentry$tracing$dist$index", {});
var module$node_modules$posthog_js$dist$module=shadow.js.require("module$node_modules$posthog_js$dist$module", {});
frontend.modules.instrumentation.sentry.config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"dsn","dsn",1561266567),"https://636e9174ffa148c98d2b9d3369661683@o416451.ingest.sentry.io/5311485",new cljs.core.Keyword(null,"release","release",-1534371381),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("logseq%s@%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?"-android":(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?"-ios":""
)),frontend.version.version], 0)),new cljs.core.Keyword(null,"environment","environment",-666037640),(cljs.core.truth_(frontend.config.dev_QMARK_)?"development":"production"),new cljs.core.Keyword(null,"initialScope","initialScope",-1985815457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"platform","platform",-1086422114),(cljs.core.truth_(frontend.util.electron_QMARK_())?"electron":(cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())?"mobile":"web"
)),new cljs.core.Keyword(null,"publishing","publishing",-244219384),frontend.config.publishing_QMARK_], null)], null),new cljs.core.Keyword(null,"integrations","integrations",1844532423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$posthog_js$dist$module.SentryIntegration(module$node_modules$posthog_js$dist$module,"logseq",(5311485))),(new module$node_modules$$sentry$tracing$dist$index.BrowserTracing())], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),frontend.config.dev_QMARK_,new cljs.core.Keyword(null,"tracesSampleRate","tracesSampleRate",446547798),1.0,new cljs.core.Keyword(null,"beforeSend","beforeSend",-1560616376),(function (event){
try{var temp__5720__auto___73925 = cljs.core.re_matches(/file:\/\/.*?\/(app\/electron|static\/index)\.html(.*)/,event.request.url);
if(cljs.core.truth_(temp__5720__auto___73925)){
var vec__73817_73926 = temp__5720__auto___73925;
var __73927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73817_73926,(0),null);
var __73928__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73817_73926,(1),null);
var query_and_fragment_73929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73817_73926,(2),null);
(event.request.url = ["http://localhost/electron.html",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_and_fragment_73929)].join(''));
} else {
}

var seq__73820_73930 = cljs.core.seq(event.exception.values);
var chunk__73821_73931 = null;
var count__73822_73932 = (0);
var i__73823_73933 = (0);
while(true){
if((i__73823_73933 < count__73822_73932)){
var value_73934 = chunk__73821_73931.cljs$core$IIndexed$_nth$arity$2(null,i__73823_73933);
var seq__73871_73935 = cljs.core.seq(value_73934.stacktrace.frames);
var chunk__73872_73936 = null;
var count__73873_73937 = (0);
var i__73874_73938 = (0);
while(true){
if((i__73874_73938 < count__73873_73937)){
var frame_73939 = chunk__73872_73936.cljs$core$IIndexed$_nth$arity$2(null,i__73874_73938);
if(cljs.core.truth_(cljs.core.not_empty(frame_73939.filename))){
var temp__5720__auto___73940 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_73939.filename);
if(cljs.core.truth_(temp__5720__auto___73940)){
var vec__73889_73942 = temp__5720__auto___73940;
var __73943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73889_73942,(0),null);
var filename_73944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73889_73942,(1),null);
(frame_73939.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_73944)].join(''));

(frame_73939.lineno = (frame_73939.lineno - (2)));
} else {
}
} else {
}


var G__73945 = seq__73871_73935;
var G__73946 = chunk__73872_73936;
var G__73947 = count__73873_73937;
var G__73948 = (i__73874_73938 + (1));
seq__73871_73935 = G__73945;
chunk__73872_73936 = G__73946;
count__73873_73937 = G__73947;
i__73874_73938 = G__73948;
continue;
} else {
var temp__5720__auto___73949 = cljs.core.seq(seq__73871_73935);
if(temp__5720__auto___73949){
var seq__73871_73950__$1 = temp__5720__auto___73949;
if(cljs.core.chunked_seq_QMARK_(seq__73871_73950__$1)){
var c__4679__auto___73951 = cljs.core.chunk_first(seq__73871_73950__$1);
var G__73952 = cljs.core.chunk_rest(seq__73871_73950__$1);
var G__73953 = c__4679__auto___73951;
var G__73954 = cljs.core.count(c__4679__auto___73951);
var G__73955 = (0);
seq__73871_73935 = G__73952;
chunk__73872_73936 = G__73953;
count__73873_73937 = G__73954;
i__73874_73938 = G__73955;
continue;
} else {
var frame_73956 = cljs.core.first(seq__73871_73950__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_73956.filename))){
var temp__5720__auto___73957__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_73956.filename);
if(cljs.core.truth_(temp__5720__auto___73957__$1)){
var vec__73893_73958 = temp__5720__auto___73957__$1;
var __73959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73893_73958,(0),null);
var filename_73960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73893_73958,(1),null);
(frame_73956.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_73960)].join(''));

(frame_73956.lineno = (frame_73956.lineno - (2)));
} else {
}
} else {
}


var G__73961 = cljs.core.next(seq__73871_73950__$1);
var G__73962 = null;
var G__73963 = (0);
var G__73964 = (0);
seq__73871_73935 = G__73961;
chunk__73872_73936 = G__73962;
count__73873_73937 = G__73963;
i__73874_73938 = G__73964;
continue;
}
} else {
}
}
break;
}


var G__73965 = seq__73820_73930;
var G__73966 = chunk__73821_73931;
var G__73967 = count__73822_73932;
var G__73968 = (i__73823_73933 + (1));
seq__73820_73930 = G__73965;
chunk__73821_73931 = G__73966;
count__73822_73932 = G__73967;
i__73823_73933 = G__73968;
continue;
} else {
var temp__5720__auto___73969 = cljs.core.seq(seq__73820_73930);
if(temp__5720__auto___73969){
var seq__73820_73971__$1 = temp__5720__auto___73969;
if(cljs.core.chunked_seq_QMARK_(seq__73820_73971__$1)){
var c__4679__auto___73972 = cljs.core.chunk_first(seq__73820_73971__$1);
var G__73973 = cljs.core.chunk_rest(seq__73820_73971__$1);
var G__73974 = c__4679__auto___73972;
var G__73975 = cljs.core.count(c__4679__auto___73972);
var G__73976 = (0);
seq__73820_73930 = G__73973;
chunk__73821_73931 = G__73974;
count__73822_73932 = G__73975;
i__73823_73933 = G__73976;
continue;
} else {
var value_73977 = cljs.core.first(seq__73820_73971__$1);
var seq__73901_73978 = cljs.core.seq(value_73977.stacktrace.frames);
var chunk__73902_73979 = null;
var count__73903_73980 = (0);
var i__73904_73981 = (0);
while(true){
if((i__73904_73981 < count__73903_73980)){
var frame_73982 = chunk__73902_73979.cljs$core$IIndexed$_nth$arity$2(null,i__73904_73981);
if(cljs.core.truth_(cljs.core.not_empty(frame_73982.filename))){
var temp__5720__auto___73983__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_73982.filename);
if(cljs.core.truth_(temp__5720__auto___73983__$1)){
var vec__73914_73984 = temp__5720__auto___73983__$1;
var __73985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73914_73984,(0),null);
var filename_73986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73914_73984,(1),null);
(frame_73982.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_73986)].join(''));

(frame_73982.lineno = (frame_73982.lineno - (2)));
} else {
}
} else {
}


var G__73987 = seq__73901_73978;
var G__73988 = chunk__73902_73979;
var G__73989 = count__73903_73980;
var G__73990 = (i__73904_73981 + (1));
seq__73901_73978 = G__73987;
chunk__73902_73979 = G__73988;
count__73903_73980 = G__73989;
i__73904_73981 = G__73990;
continue;
} else {
var temp__5720__auto___73991__$1 = cljs.core.seq(seq__73901_73978);
if(temp__5720__auto___73991__$1){
var seq__73901_73992__$1 = temp__5720__auto___73991__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73901_73992__$1)){
var c__4679__auto___73993 = cljs.core.chunk_first(seq__73901_73992__$1);
var G__73994 = cljs.core.chunk_rest(seq__73901_73992__$1);
var G__73995 = c__4679__auto___73993;
var G__73996 = cljs.core.count(c__4679__auto___73993);
var G__73997 = (0);
seq__73901_73978 = G__73994;
chunk__73902_73979 = G__73995;
count__73903_73980 = G__73996;
i__73904_73981 = G__73997;
continue;
} else {
var frame_73998 = cljs.core.first(seq__73901_73992__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_73998.filename))){
var temp__5720__auto___73999__$2 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_73998.filename);
if(cljs.core.truth_(temp__5720__auto___73999__$2)){
var vec__73921_74001 = temp__5720__auto___73999__$2;
var __74002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73921_74001,(0),null);
var filename_74003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73921_74001,(1),null);
(frame_73998.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_74003)].join(''));

(frame_73998.lineno = (frame_73998.lineno - (2)));
} else {
}
} else {
}


var G__74004 = cljs.core.next(seq__73901_73992__$1);
var G__74005 = null;
var G__74006 = (0);
var G__74007 = (0);
seq__73901_73978 = G__74004;
chunk__73902_73979 = G__74005;
count__73903_73980 = G__74006;
i__73904_73981 = G__74007;
continue;
}
} else {
}
}
break;
}


var G__74008 = cljs.core.next(seq__73820_73971__$1);
var G__74009 = null;
var G__74010 = (0);
var G__74011 = (0);
seq__73820_73930 = G__74008;
chunk__73821_73931 = G__74009;
count__73822_73932 = G__74010;
i__73823_73933 = G__74011;
continue;
}
} else {
}
}
break;
}
}catch (e73816){var e_74012 = e73816;
console.error(e_74012);
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
