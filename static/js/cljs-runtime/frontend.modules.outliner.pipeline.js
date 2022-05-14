goog.provide('frontend.modules.outliner.pipeline');
frontend.modules.outliner.pipeline.updated_page_hook = (function frontend$modules$outliner$pipeline$updated_page_hook(page){
return frontend.modules.outliner.file.sync_to_file(page);
});
frontend.modules.outliner.pipeline.invoke_hooks = (function frontend$modules$outliner$pipeline$invoke_hooks(tx_report){
var map__62493 = frontend.modules.datascript_report.core.get_blocks_and_pages(tx_report);
var map__62493__$1 = cljs.core.__destructure_map(map__62493);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62493__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62493__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var seq__62494_62499 = cljs.core.seq(cljs.core.seq(pages));
var chunk__62495_62500 = null;
var count__62496_62501 = (0);
var i__62497_62502 = (0);
while(true){
if((i__62497_62502 < count__62496_62501)){
var p_62503 = chunk__62495_62500.cljs$core$IIndexed$_nth$arity$2(null,i__62497_62502);
frontend.modules.outliner.pipeline.updated_page_hook(p_62503);


var G__62504 = seq__62494_62499;
var G__62505 = chunk__62495_62500;
var G__62506 = count__62496_62501;
var G__62507 = (i__62497_62502 + (1));
seq__62494_62499 = G__62504;
chunk__62495_62500 = G__62505;
count__62496_62501 = G__62506;
i__62497_62502 = G__62507;
continue;
} else {
var temp__5720__auto___62508 = cljs.core.seq(seq__62494_62499);
if(temp__5720__auto___62508){
var seq__62494_62509__$1 = temp__5720__auto___62508;
if(cljs.core.chunked_seq_QMARK_(seq__62494_62509__$1)){
var c__4679__auto___62510 = cljs.core.chunk_first(seq__62494_62509__$1);
var G__62511 = cljs.core.chunk_rest(seq__62494_62509__$1);
var G__62512 = c__4679__auto___62510;
var G__62513 = cljs.core.count(c__4679__auto___62510);
var G__62514 = (0);
seq__62494_62499 = G__62511;
chunk__62495_62500 = G__62512;
count__62496_62501 = G__62513;
i__62497_62502 = G__62514;
continue;
} else {
var p_62515 = cljs.core.first(seq__62494_62509__$1);
frontend.modules.outliner.pipeline.updated_page_hook(p_62515);


var G__62516 = cljs.core.next(seq__62494_62509__$1);
var G__62517 = null;
var G__62518 = (0);
var G__62519 = (0);
seq__62494_62499 = G__62516;
chunk__62495_62500 = G__62517;
count__62496_62501 = G__62518;
i__62497_62502 = G__62519;
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
