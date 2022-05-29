goog.provide('frontend.modules.instrumentation.sentry');
var module$node_modules$$sentry$react$dist$index=shadow.js.require("module$node_modules$$sentry$react$dist$index", {});
var module$node_modules$$sentry$tracing$dist$index=shadow.js.require("module$node_modules$$sentry$tracing$dist$index", {});
var module$node_modules$posthog_js$dist$module=shadow.js.require("module$node_modules$posthog_js$dist$module", {});
frontend.modules.instrumentation.sentry.config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"dsn","dsn",1561266567),"https://636e9174ffa148c98d2b9d3369661683@o416451.ingest.sentry.io/5311485",new cljs.core.Keyword(null,"release","release",-1534371381),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("logseq%s@%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?"-android":(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?"-ios":""
)),frontend.version.version], 0)),new cljs.core.Keyword(null,"environment","environment",-666037640),(cljs.core.truth_(frontend.config.dev_QMARK_)?"development":"production"),new cljs.core.Keyword(null,"initialScope","initialScope",-1985815457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"platform","platform",-1086422114),(cljs.core.truth_(frontend.util.electron_QMARK_())?"electron":(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?"mobile":"web"
)),new cljs.core.Keyword(null,"publishing","publishing",-244219384),frontend.config.publishing_QMARK_], null)], null),new cljs.core.Keyword(null,"integrations","integrations",1844532423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$posthog_js$dist$module.SentryIntegration(module$node_modules$posthog_js$dist$module,"logseq",(5311485))),(new module$node_modules$$sentry$tracing$dist$index.BrowserTracing())], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),frontend.config.dev_QMARK_,new cljs.core.Keyword(null,"tracesSampleRate","tracesSampleRate",446547798),1.0,new cljs.core.Keyword(null,"beforeSend","beforeSend",-1560616376),(function (event){
try{var temp__5720__auto___61351 = cljs.core.re_matches(/file:\/\/.*?\/(app\/electron|static\/index)\.html(.*)/,event.request.url);
if(cljs.core.truth_(temp__5720__auto___61351)){
var vec__61257_61352 = temp__5720__auto___61351;
var __61353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61257_61352,(0),null);
var __61354__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61257_61352,(1),null);
var query_and_fragment_61355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61257_61352,(2),null);
(event.request.url = ["http://localhost/electron.html",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_and_fragment_61355)].join(''));
} else {
}

var seq__61260_61357 = cljs.core.seq(event.exception.values);
var chunk__61261_61358 = null;
var count__61262_61359 = (0);
var i__61263_61360 = (0);
while(true){
if((i__61263_61360 < count__61262_61359)){
var value_61362 = chunk__61261_61358.cljs$core$IIndexed$_nth$arity$2(null,i__61263_61360);
var seq__61305_61363 = cljs.core.seq(value_61362.stacktrace.frames);
var chunk__61306_61365 = null;
var count__61307_61366 = (0);
var i__61308_61367 = (0);
while(true){
if((i__61308_61367 < count__61307_61366)){
var frame_61369 = chunk__61306_61365.cljs$core$IIndexed$_nth$arity$2(null,i__61308_61367);
if(cljs.core.truth_(cljs.core.not_empty(frame_61369.filename))){
var temp__5720__auto___61371 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_61369.filename);
if(cljs.core.truth_(temp__5720__auto___61371)){
var vec__61316_61372 = temp__5720__auto___61371;
var __61373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61316_61372,(0),null);
var filename_61374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61316_61372,(1),null);
(frame_61369.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_61374)].join(''));

(frame_61369.lineno = (frame_61369.lineno - (2)));
} else {
}
} else {
}


var G__61378 = seq__61305_61363;
var G__61379 = chunk__61306_61365;
var G__61380 = count__61307_61366;
var G__61381 = (i__61308_61367 + (1));
seq__61305_61363 = G__61378;
chunk__61306_61365 = G__61379;
count__61307_61366 = G__61380;
i__61308_61367 = G__61381;
continue;
} else {
var temp__5720__auto___61382 = cljs.core.seq(seq__61305_61363);
if(temp__5720__auto___61382){
var seq__61305_61383__$1 = temp__5720__auto___61382;
if(cljs.core.chunked_seq_QMARK_(seq__61305_61383__$1)){
var c__5565__auto___61384 = cljs.core.chunk_first(seq__61305_61383__$1);
var G__61385 = cljs.core.chunk_rest(seq__61305_61383__$1);
var G__61386 = c__5565__auto___61384;
var G__61387 = cljs.core.count(c__5565__auto___61384);
var G__61388 = (0);
seq__61305_61363 = G__61385;
chunk__61306_61365 = G__61386;
count__61307_61366 = G__61387;
i__61308_61367 = G__61388;
continue;
} else {
var frame_61389 = cljs.core.first(seq__61305_61383__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_61389.filename))){
var temp__5720__auto___61391__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_61389.filename);
if(cljs.core.truth_(temp__5720__auto___61391__$1)){
var vec__61320_61392 = temp__5720__auto___61391__$1;
var __61393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61320_61392,(0),null);
var filename_61394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61320_61392,(1),null);
(frame_61389.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_61394)].join(''));

(frame_61389.lineno = (frame_61389.lineno - (2)));
} else {
}
} else {
}


var G__61397 = cljs.core.next(seq__61305_61383__$1);
var G__61398 = null;
var G__61399 = (0);
var G__61400 = (0);
seq__61305_61363 = G__61397;
chunk__61306_61365 = G__61398;
count__61307_61366 = G__61399;
i__61308_61367 = G__61400;
continue;
}
} else {
}
}
break;
}


var G__61401 = seq__61260_61357;
var G__61402 = chunk__61261_61358;
var G__61403 = count__61262_61359;
var G__61404 = (i__61263_61360 + (1));
seq__61260_61357 = G__61401;
chunk__61261_61358 = G__61402;
count__61262_61359 = G__61403;
i__61263_61360 = G__61404;
continue;
} else {
var temp__5720__auto___61405 = cljs.core.seq(seq__61260_61357);
if(temp__5720__auto___61405){
var seq__61260_61406__$1 = temp__5720__auto___61405;
if(cljs.core.chunked_seq_QMARK_(seq__61260_61406__$1)){
var c__5565__auto___61408 = cljs.core.chunk_first(seq__61260_61406__$1);
var G__61409 = cljs.core.chunk_rest(seq__61260_61406__$1);
var G__61410 = c__5565__auto___61408;
var G__61411 = cljs.core.count(c__5565__auto___61408);
var G__61412 = (0);
seq__61260_61357 = G__61409;
chunk__61261_61358 = G__61410;
count__61262_61359 = G__61411;
i__61263_61360 = G__61412;
continue;
} else {
var value_61413 = cljs.core.first(seq__61260_61406__$1);
var seq__61324_61414 = cljs.core.seq(value_61413.stacktrace.frames);
var chunk__61325_61415 = null;
var count__61326_61416 = (0);
var i__61327_61417 = (0);
while(true){
if((i__61327_61417 < count__61326_61416)){
var frame_61418 = chunk__61325_61415.cljs$core$IIndexed$_nth$arity$2(null,i__61327_61417);
if(cljs.core.truth_(cljs.core.not_empty(frame_61418.filename))){
var temp__5720__auto___61419__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_61418.filename);
if(cljs.core.truth_(temp__5720__auto___61419__$1)){
var vec__61337_61421 = temp__5720__auto___61419__$1;
var __61422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61337_61421,(0),null);
var filename_61423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61337_61421,(1),null);
(frame_61418.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_61423)].join(''));

(frame_61418.lineno = (frame_61418.lineno - (2)));
} else {
}
} else {
}


var G__61425 = seq__61324_61414;
var G__61426 = chunk__61325_61415;
var G__61427 = count__61326_61416;
var G__61428 = (i__61327_61417 + (1));
seq__61324_61414 = G__61425;
chunk__61325_61415 = G__61426;
count__61326_61416 = G__61427;
i__61327_61417 = G__61428;
continue;
} else {
var temp__5720__auto___61429__$1 = cljs.core.seq(seq__61324_61414);
if(temp__5720__auto___61429__$1){
var seq__61324_61430__$1 = temp__5720__auto___61429__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61324_61430__$1)){
var c__5565__auto___61431 = cljs.core.chunk_first(seq__61324_61430__$1);
var G__61432 = cljs.core.chunk_rest(seq__61324_61430__$1);
var G__61433 = c__5565__auto___61431;
var G__61434 = cljs.core.count(c__5565__auto___61431);
var G__61435 = (0);
seq__61324_61414 = G__61432;
chunk__61325_61415 = G__61433;
count__61326_61416 = G__61434;
i__61327_61417 = G__61435;
continue;
} else {
var frame_61436 = cljs.core.first(seq__61324_61430__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_61436.filename))){
var temp__5720__auto___61437__$2 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_61436.filename);
if(cljs.core.truth_(temp__5720__auto___61437__$2)){
var vec__61340_61438 = temp__5720__auto___61437__$2;
var __61439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61340_61438,(0),null);
var filename_61440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61340_61438,(1),null);
(frame_61436.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_61440)].join(''));

(frame_61436.lineno = (frame_61436.lineno - (2)));
} else {
}
} else {
}


var G__61445 = cljs.core.next(seq__61324_61430__$1);
var G__61446 = null;
var G__61447 = (0);
var G__61448 = (0);
seq__61324_61414 = G__61445;
chunk__61325_61415 = G__61446;
count__61326_61416 = G__61447;
i__61327_61417 = G__61448;
continue;
}
} else {
}
}
break;
}


var G__61449 = cljs.core.next(seq__61260_61406__$1);
var G__61450 = null;
var G__61451 = (0);
var G__61452 = (0);
seq__61260_61357 = G__61449;
chunk__61261_61358 = G__61450;
count__61262_61359 = G__61451;
i__61263_61360 = G__61452;
continue;
}
} else {
}
}
break;
}
}catch (e61256){var e_61453 = e61256;
console.error(e_61453);
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
