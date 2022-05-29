goog.provide('frontend.modules.outliner.pipeline');
frontend.modules.outliner.pipeline.updated_page_hook = (function frontend$modules$outliner$pipeline$updated_page_hook(page){
return frontend.modules.outliner.file.sync_to_file(page);
});
frontend.modules.outliner.pipeline.invoke_hooks = (function frontend$modules$outliner$pipeline$invoke_hooks(tx_report){
var map__50426 = frontend.modules.datascript_report.core.get_blocks_and_pages(tx_report);
var map__50426__$1 = cljs.core.__destructure_map(map__50426);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50426__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50426__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var seq__50427_50431 = cljs.core.seq(cljs.core.seq(pages));
var chunk__50428_50432 = null;
var count__50429_50433 = (0);
var i__50430_50434 = (0);
while(true){
if((i__50430_50434 < count__50429_50433)){
var p_50435 = chunk__50428_50432.cljs$core$IIndexed$_nth$arity$2(null,i__50430_50434);
frontend.modules.outliner.pipeline.updated_page_hook(p_50435);


var G__50436 = seq__50427_50431;
var G__50437 = chunk__50428_50432;
var G__50438 = count__50429_50433;
var G__50439 = (i__50430_50434 + (1));
seq__50427_50431 = G__50436;
chunk__50428_50432 = G__50437;
count__50429_50433 = G__50438;
i__50430_50434 = G__50439;
continue;
} else {
var temp__5720__auto___50440 = cljs.core.seq(seq__50427_50431);
if(temp__5720__auto___50440){
var seq__50427_50441__$1 = temp__5720__auto___50440;
if(cljs.core.chunked_seq_QMARK_(seq__50427_50441__$1)){
var c__5565__auto___50442 = cljs.core.chunk_first(seq__50427_50441__$1);
var G__50443 = cljs.core.chunk_rest(seq__50427_50441__$1);
var G__50444 = c__5565__auto___50442;
var G__50445 = cljs.core.count(c__5565__auto___50442);
var G__50446 = (0);
seq__50427_50431 = G__50443;
chunk__50428_50432 = G__50444;
count__50429_50433 = G__50445;
i__50430_50434 = G__50446;
continue;
} else {
var p_50447 = cljs.core.first(seq__50427_50441__$1);
frontend.modules.outliner.pipeline.updated_page_hook(p_50447);


var G__50448 = cljs.core.next(seq__50427_50441__$1);
var G__50449 = null;
var G__50450 = (0);
var G__50451 = (0);
seq__50427_50431 = G__50448;
chunk__50428_50432 = G__50449;
count__50429_50433 = G__50450;
i__50430_50434 = G__50451;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(blocks);
} else {
return and__5041__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","hook-db-tx","plugin/hook-db-tx",1065547419),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)], null)], null));
} else {
return null;
}
});

//# sourceMappingURL=frontend.modules.outliner.pipeline.js.map
