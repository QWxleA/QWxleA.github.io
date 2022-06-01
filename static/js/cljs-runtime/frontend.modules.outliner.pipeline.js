goog.provide('frontend.modules.outliner.pipeline');
frontend.modules.outliner.pipeline.updated_page_hook = (function frontend$modules$outliner$pipeline$updated_page_hook(_tx_report,page){
return frontend.modules.outliner.file.sync_to_file(page);
});
frontend.modules.outliner.pipeline.invoke_hooks = (function frontend$modules$outliner$pipeline$invoke_hooks(tx_report){
var map__49804 = frontend.modules.datascript_report.core.get_blocks_and_pages(tx_report);
var map__49804__$1 = cljs.core.__destructure_map(map__49804);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49804__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49804__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if(cljs.core.truth_(new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)))){
} else {
var seq__49810_49829 = cljs.core.seq(cljs.core.seq(pages));
var chunk__49811_49830 = null;
var count__49812_49831 = (0);
var i__49813_49832 = (0);
while(true){
if((i__49813_49832 < count__49812_49831)){
var p_49833 = chunk__49811_49830.cljs$core$IIndexed$_nth$arity$2(null,i__49813_49832);
frontend.modules.outliner.pipeline.updated_page_hook(tx_report,p_49833);


var G__49834 = seq__49810_49829;
var G__49835 = chunk__49811_49830;
var G__49836 = count__49812_49831;
var G__49837 = (i__49813_49832 + (1));
seq__49810_49829 = G__49834;
chunk__49811_49830 = G__49835;
count__49812_49831 = G__49836;
i__49813_49832 = G__49837;
continue;
} else {
var temp__5720__auto___49838 = cljs.core.seq(seq__49810_49829);
if(temp__5720__auto___49838){
var seq__49810_49839__$1 = temp__5720__auto___49838;
if(cljs.core.chunked_seq_QMARK_(seq__49810_49839__$1)){
var c__5565__auto___49840 = cljs.core.chunk_first(seq__49810_49839__$1);
var G__49841 = cljs.core.chunk_rest(seq__49810_49839__$1);
var G__49842 = c__5565__auto___49840;
var G__49843 = cljs.core.count(c__5565__auto___49840);
var G__49844 = (0);
seq__49810_49829 = G__49841;
chunk__49811_49830 = G__49842;
count__49812_49831 = G__49843;
i__49813_49832 = G__49844;
continue;
} else {
var p_49845 = cljs.core.first(seq__49810_49839__$1);
frontend.modules.outliner.pipeline.updated_page_hook(tx_report,p_49845);


var G__49846 = cljs.core.next(seq__49810_49839__$1);
var G__49847 = null;
var G__49848 = (0);
var G__49849 = (0);
seq__49810_49829 = G__49846;
chunk__49811_49830 = G__49847;
count__49812_49831 = G__49848;
i__49813_49832 = G__49849;
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
