goog.provide('frontend.modules.outliner.pipeline');
frontend.modules.outliner.pipeline.updated_page_hook = (function frontend$modules$outliner$pipeline$updated_page_hook(_tx_report,page){
return frontend.modules.outliner.file.sync_to_file(page);
});
frontend.modules.outliner.pipeline.invoke_hooks = (function frontend$modules$outliner$pipeline$invoke_hooks(tx_report){
var map__49585 = frontend.modules.datascript_report.core.get_blocks_and_pages(tx_report);
var map__49585__$1 = cljs.core.__destructure_map(map__49585);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49585__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49585__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if(cljs.core.truth_(new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)))){
} else {
var seq__49586_49590 = cljs.core.seq(cljs.core.seq(pages));
var chunk__49587_49591 = null;
var count__49588_49592 = (0);
var i__49589_49593 = (0);
while(true){
if((i__49589_49593 < count__49588_49592)){
var p_49594 = chunk__49587_49591.cljs$core$IIndexed$_nth$arity$2(null,i__49589_49593);
frontend.modules.outliner.pipeline.updated_page_hook(tx_report,p_49594);


var G__49595 = seq__49586_49590;
var G__49596 = chunk__49587_49591;
var G__49597 = count__49588_49592;
var G__49598 = (i__49589_49593 + (1));
seq__49586_49590 = G__49595;
chunk__49587_49591 = G__49596;
count__49588_49592 = G__49597;
i__49589_49593 = G__49598;
continue;
} else {
var temp__5720__auto___49599 = cljs.core.seq(seq__49586_49590);
if(temp__5720__auto___49599){
var seq__49586_49600__$1 = temp__5720__auto___49599;
if(cljs.core.chunked_seq_QMARK_(seq__49586_49600__$1)){
var c__5565__auto___49601 = cljs.core.chunk_first(seq__49586_49600__$1);
var G__49602 = cljs.core.chunk_rest(seq__49586_49600__$1);
var G__49603 = c__5565__auto___49601;
var G__49604 = cljs.core.count(c__5565__auto___49601);
var G__49605 = (0);
seq__49586_49590 = G__49602;
chunk__49587_49591 = G__49603;
count__49588_49592 = G__49604;
i__49589_49593 = G__49605;
continue;
} else {
var p_49606 = cljs.core.first(seq__49586_49600__$1);
frontend.modules.outliner.pipeline.updated_page_hook(tx_report,p_49606);


var G__49607 = cljs.core.next(seq__49586_49600__$1);
var G__49608 = null;
var G__49609 = (0);
var G__49610 = (0);
seq__49586_49590 = G__49607;
chunk__49587_49591 = G__49608;
count__49588_49592 = G__49609;
i__49589_49593 = G__49610;
continue;
}
} else {
}
}
break;
}
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
