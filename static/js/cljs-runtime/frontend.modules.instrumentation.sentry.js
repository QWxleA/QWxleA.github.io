goog.provide('frontend.modules.instrumentation.sentry');
var module$node_modules$$sentry$react$dist$index=shadow.js.require("module$node_modules$$sentry$react$dist$index", {});
var module$node_modules$$sentry$tracing$dist$index=shadow.js.require("module$node_modules$$sentry$tracing$dist$index", {});
var module$node_modules$posthog_js$dist$module=shadow.js.require("module$node_modules$posthog_js$dist$module", {});
frontend.modules.instrumentation.sentry.config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"dsn","dsn",1561266567),"https://636e9174ffa148c98d2b9d3369661683@o416451.ingest.sentry.io/5311485",new cljs.core.Keyword(null,"release","release",-1534371381),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("logseq%s@%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?"-android":(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?"-ios":""
)),frontend.version.version], 0)),new cljs.core.Keyword(null,"environment","environment",-666037640),(cljs.core.truth_(frontend.config.dev_QMARK_)?"development":"production"),new cljs.core.Keyword(null,"initialScope","initialScope",-1985815457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"platform","platform",-1086422114),(cljs.core.truth_(frontend.util.electron_QMARK_())?"electron":(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?"mobile":"web"
)),new cljs.core.Keyword(null,"publishing","publishing",-244219384),frontend.config.publishing_QMARK_], null)], null),new cljs.core.Keyword(null,"integrations","integrations",1844532423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$posthog_js$dist$module.SentryIntegration(module$node_modules$posthog_js$dist$module,"logseq",(5311485))),(new module$node_modules$$sentry$tracing$dist$index.BrowserTracing())], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),frontend.config.dev_QMARK_,new cljs.core.Keyword(null,"tracesSampleRate","tracesSampleRate",446547798),1.0,new cljs.core.Keyword(null,"beforeSend","beforeSend",-1560616376),(function (event){
try{var temp__5720__auto___61403 = cljs.core.re_matches(/file:\/\/.*?\/(app\/electron|static\/index)\.html(.*)/,event.request.url);
if(cljs.core.truth_(temp__5720__auto___61403)){
var vec__61320_61404 = temp__5720__auto___61403;
var __61405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61320_61404,(0),null);
var __61406__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61320_61404,(1),null);
var query_and_fragment_61407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61320_61404,(2),null);
(event.request.url = ["http://localhost/electron.html",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_and_fragment_61407)].join(''));
} else {
}

var seq__61323_61408 = cljs.core.seq(event.exception.values);
var chunk__61324_61409 = null;
var count__61325_61410 = (0);
var i__61326_61411 = (0);
while(true){
if((i__61326_61411 < count__61325_61410)){
var value_61412 = chunk__61324_61409.cljs$core$IIndexed$_nth$arity$2(null,i__61326_61411);
var seq__61360_61413 = cljs.core.seq(value_61412.stacktrace.frames);
var chunk__61361_61414 = null;
var count__61362_61415 = (0);
var i__61363_61416 = (0);
while(true){
if((i__61363_61416 < count__61362_61415)){
var frame_61417 = chunk__61361_61414.cljs$core$IIndexed$_nth$arity$2(null,i__61363_61416);
if(cljs.core.truth_(cljs.core.not_empty(frame_61417.filename))){
var temp__5720__auto___61418 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_61417.filename);
if(cljs.core.truth_(temp__5720__auto___61418)){
var vec__61377_61419 = temp__5720__auto___61418;
var __61420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61377_61419,(0),null);
var filename_61421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61377_61419,(1),null);
(frame_61417.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_61421)].join(''));

(frame_61417.lineno = (frame_61417.lineno - (2)));
} else {
}
} else {
}


var G__61422 = seq__61360_61413;
var G__61423 = chunk__61361_61414;
var G__61424 = count__61362_61415;
var G__61425 = (i__61363_61416 + (1));
seq__61360_61413 = G__61422;
chunk__61361_61414 = G__61423;
count__61362_61415 = G__61424;
i__61363_61416 = G__61425;
continue;
} else {
var temp__5720__auto___61426 = cljs.core.seq(seq__61360_61413);
if(temp__5720__auto___61426){
var seq__61360_61427__$1 = temp__5720__auto___61426;
if(cljs.core.chunked_seq_QMARK_(seq__61360_61427__$1)){
var c__5565__auto___61428 = cljs.core.chunk_first(seq__61360_61427__$1);
var G__61429 = cljs.core.chunk_rest(seq__61360_61427__$1);
var G__61430 = c__5565__auto___61428;
var G__61431 = cljs.core.count(c__5565__auto___61428);
var G__61432 = (0);
seq__61360_61413 = G__61429;
chunk__61361_61414 = G__61430;
count__61362_61415 = G__61431;
i__61363_61416 = G__61432;
continue;
} else {
var frame_61433 = cljs.core.first(seq__61360_61427__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_61433.filename))){
var temp__5720__auto___61434__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_61433.filename);
if(cljs.core.truth_(temp__5720__auto___61434__$1)){
var vec__61380_61435 = temp__5720__auto___61434__$1;
var __61436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61380_61435,(0),null);
var filename_61437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61380_61435,(1),null);
(frame_61433.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_61437)].join(''));

(frame_61433.lineno = (frame_61433.lineno - (2)));
} else {
}
} else {
}


var G__61438 = cljs.core.next(seq__61360_61427__$1);
var G__61439 = null;
var G__61440 = (0);
var G__61441 = (0);
seq__61360_61413 = G__61438;
chunk__61361_61414 = G__61439;
count__61362_61415 = G__61440;
i__61363_61416 = G__61441;
continue;
}
} else {
}
}
break;
}


var G__61442 = seq__61323_61408;
var G__61443 = chunk__61324_61409;
var G__61444 = count__61325_61410;
var G__61445 = (i__61326_61411 + (1));
seq__61323_61408 = G__61442;
chunk__61324_61409 = G__61443;
count__61325_61410 = G__61444;
i__61326_61411 = G__61445;
continue;
} else {
var temp__5720__auto___61446 = cljs.core.seq(seq__61323_61408);
if(temp__5720__auto___61446){
var seq__61323_61447__$1 = temp__5720__auto___61446;
if(cljs.core.chunked_seq_QMARK_(seq__61323_61447__$1)){
var c__5565__auto___61448 = cljs.core.chunk_first(seq__61323_61447__$1);
var G__61449 = cljs.core.chunk_rest(seq__61323_61447__$1);
var G__61450 = c__5565__auto___61448;
var G__61451 = cljs.core.count(c__5565__auto___61448);
var G__61452 = (0);
seq__61323_61408 = G__61449;
chunk__61324_61409 = G__61450;
count__61325_61410 = G__61451;
i__61326_61411 = G__61452;
continue;
} else {
var value_61453 = cljs.core.first(seq__61323_61447__$1);
var seq__61385_61454 = cljs.core.seq(value_61453.stacktrace.frames);
var chunk__61386_61455 = null;
var count__61387_61456 = (0);
var i__61388_61457 = (0);
while(true){
if((i__61388_61457 < count__61387_61456)){
var frame_61458 = chunk__61386_61455.cljs$core$IIndexed$_nth$arity$2(null,i__61388_61457);
if(cljs.core.truth_(cljs.core.not_empty(frame_61458.filename))){
var temp__5720__auto___61459__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_61458.filename);
if(cljs.core.truth_(temp__5720__auto___61459__$1)){
var vec__61397_61460 = temp__5720__auto___61459__$1;
var __61461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61397_61460,(0),null);
var filename_61462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61397_61460,(1),null);
(frame_61458.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_61462)].join(''));

(frame_61458.lineno = (frame_61458.lineno - (2)));
} else {
}
} else {
}


var G__61463 = seq__61385_61454;
var G__61464 = chunk__61386_61455;
var G__61465 = count__61387_61456;
var G__61466 = (i__61388_61457 + (1));
seq__61385_61454 = G__61463;
chunk__61386_61455 = G__61464;
count__61387_61456 = G__61465;
i__61388_61457 = G__61466;
continue;
} else {
var temp__5720__auto___61467__$1 = cljs.core.seq(seq__61385_61454);
if(temp__5720__auto___61467__$1){
var seq__61385_61468__$1 = temp__5720__auto___61467__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61385_61468__$1)){
var c__5565__auto___61469 = cljs.core.chunk_first(seq__61385_61468__$1);
var G__61470 = cljs.core.chunk_rest(seq__61385_61468__$1);
var G__61471 = c__5565__auto___61469;
var G__61472 = cljs.core.count(c__5565__auto___61469);
var G__61473 = (0);
seq__61385_61454 = G__61470;
chunk__61386_61455 = G__61471;
count__61387_61456 = G__61472;
i__61388_61457 = G__61473;
continue;
} else {
var frame_61474 = cljs.core.first(seq__61385_61468__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_61474.filename))){
var temp__5720__auto___61475__$2 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_61474.filename);
if(cljs.core.truth_(temp__5720__auto___61475__$2)){
var vec__61400_61476 = temp__5720__auto___61475__$2;
var __61477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61400_61476,(0),null);
var filename_61478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61400_61476,(1),null);
(frame_61474.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_61478)].join(''));

(frame_61474.lineno = (frame_61474.lineno - (2)));
} else {
}
} else {
}


var G__61479 = cljs.core.next(seq__61385_61468__$1);
var G__61480 = null;
var G__61481 = (0);
var G__61482 = (0);
seq__61385_61454 = G__61479;
chunk__61386_61455 = G__61480;
count__61387_61456 = G__61481;
i__61388_61457 = G__61482;
continue;
}
} else {
}
}
break;
}


var G__61483 = cljs.core.next(seq__61323_61447__$1);
var G__61484 = null;
var G__61485 = (0);
var G__61486 = (0);
seq__61323_61408 = G__61483;
chunk__61324_61409 = G__61484;
count__61325_61410 = G__61485;
i__61326_61411 = G__61486;
continue;
}
} else {
}
}
break;
}
}catch (e61319){var e_61487 = e61319;
console.error(e_61487);
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
