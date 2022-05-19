goog.provide('frontend.modules.outliner.pipeline');
frontend.modules.outliner.pipeline.updated_page_hook = (function frontend$modules$outliner$pipeline$updated_page_hook(page){
return frontend.modules.outliner.file.sync_to_file(page);
});
frontend.modules.outliner.pipeline.invoke_hooks = (function frontend$modules$outliner$pipeline$invoke_hooks(tx_report){
var map__63317 = frontend.modules.datascript_report.core.get_blocks_and_pages(tx_report);
var map__63317__$1 = cljs.core.__destructure_map(map__63317);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63317__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63317__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var seq__63322_63353 = cljs.core.seq(cljs.core.seq(pages));
var chunk__63323_63354 = null;
var count__63324_63355 = (0);
var i__63325_63356 = (0);
while(true){
if((i__63325_63356 < count__63324_63355)){
var p_63357 = chunk__63323_63354.cljs$core$IIndexed$_nth$arity$2(null,i__63325_63356);
frontend.modules.outliner.pipeline.updated_page_hook(p_63357);


var G__63358 = seq__63322_63353;
var G__63359 = chunk__63323_63354;
var G__63360 = count__63324_63355;
var G__63361 = (i__63325_63356 + (1));
seq__63322_63353 = G__63358;
chunk__63323_63354 = G__63359;
count__63324_63355 = G__63360;
i__63325_63356 = G__63361;
continue;
} else {
var temp__5720__auto___63362 = cljs.core.seq(seq__63322_63353);
if(temp__5720__auto___63362){
var seq__63322_63377__$1 = temp__5720__auto___63362;
if(cljs.core.chunked_seq_QMARK_(seq__63322_63377__$1)){
var c__4679__auto___63378 = cljs.core.chunk_first(seq__63322_63377__$1);
var G__63379 = cljs.core.chunk_rest(seq__63322_63377__$1);
var G__63380 = c__4679__auto___63378;
var G__63381 = cljs.core.count(c__4679__auto___63378);
var G__63382 = (0);
seq__63322_63353 = G__63379;
chunk__63323_63354 = G__63380;
count__63324_63355 = G__63381;
i__63325_63356 = G__63382;
continue;
} else {
var p_63388 = cljs.core.first(seq__63322_63377__$1);
frontend.modules.outliner.pipeline.updated_page_hook(p_63388);


var G__63389 = cljs.core.next(seq__63322_63377__$1);
var G__63390 = null;
var G__63391 = (0);
var G__63392 = (0);
seq__63322_63353 = G__63389;
chunk__63323_63354 = G__63390;
count__63324_63355 = G__63391;
i__63325_63356 = G__63392;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.state.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(blocks);
} else {
return and__4251__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","hook-db-tx","plugin/hook-db-tx",1065547419),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)], null)], null));
} else {
return null;
}
});

//# sourceMappingURL=frontend.modules.outliner.pipeline.js.map
