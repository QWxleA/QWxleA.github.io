goog.provide('frontend.modules.outliner.file');
goog.scope(function(){
  frontend.modules.outliner.file.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.modules !== 'undefined') && (typeof frontend.modules.outliner !== 'undefined') && (typeof frontend.modules.outliner.file !== 'undefined') && (typeof frontend.modules.outliner.file.write_chan !== 'undefined')){
} else {
frontend.modules.outliner.file.write_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100));
}
if((typeof frontend !== 'undefined') && (typeof frontend.modules !== 'undefined') && (typeof frontend.modules.outliner !== 'undefined') && (typeof frontend.modules.outliner.file !== 'undefined') && (typeof frontend.modules.outliner.file.write_chan_batch_buf !== 'undefined')){
} else {
frontend.modules.outliner.file.write_chan_batch_buf = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
frontend.modules.outliner.file.batch_write_interval = (1000);
frontend.modules.outliner.file.writes_finished_QMARK_ = (function frontend$modules$outliner$file$writes_finished_QMARK_(){
return cljs.core.empty_QMARK_(cljs.core.deref(frontend.modules.outliner.file.write_chan_batch_buf));
});
frontend.modules.outliner.file.do_write_file_BANG_ = (function frontend$modules$outliner$file$do_write_file_BANG_(repo,page_db_id){
var page_block = (function (){var G__49546 = repo;
var G__49547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__49548 = page_db_id;
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__49546,G__49547,G__49548) : frontend.db.pull.call(null,G__49546,G__49547,G__49548));
})();
var page_db_id__$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_block);
var blocks = frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_block));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(blocks))) && (((clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)))) && ((new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page_block) == null)))))){
return null;
} else {
var tree = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$3(repo,blocks,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_block));
if(cljs.core.truth_(page_block)){
return frontend.modules.file.core.save_tree(page_block,tree);
} else {
return console.error(["can't find page id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_db_id__$1)].join(''));
}
}
});
frontend.modules.outliner.file.write_files_BANG_ = (function frontend$modules$outliner$file$write_files_BANG_(pages){
if(cljs.core.seq(pages)){
if(frontend.config.publishing_QMARK_){
return null;
} else {
var seq__49549 = cljs.core.seq(cljs.core.set(pages));
var chunk__49550 = null;
var count__49551 = (0);
var i__49552 = (0);
while(true){
if((i__49552 < count__49551)){
var vec__49561 = chunk__49550.cljs$core$IIndexed$_nth$arity$2(null,i__49552);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49561,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49561,(1),null);
try{frontend.modules.outliner.file.do_write_file_BANG_(repo,page_id);
}catch (e49564){if((e49564 instanceof Error)){
var e_49571 = e49564;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Write file failed, please copy the changes to other editors in case of losing data."], null),"Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.file.goog$module$goog$object.get(e_49571,"stack"))], null),new cljs.core.Keyword(null,"error","error",-978969032));

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.outliner.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","write-file-error","file/write-file-error",-1260826625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e_49571], null),new cljs.core.Keyword(null,"line","line",212345235),49], null)),null);
} else {
throw e49564;

}
}

var G__49572 = seq__49549;
var G__49573 = chunk__49550;
var G__49574 = count__49551;
var G__49575 = (i__49552 + (1));
seq__49549 = G__49572;
chunk__49550 = G__49573;
count__49551 = G__49574;
i__49552 = G__49575;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49549);
if(temp__5720__auto__){
var seq__49549__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49549__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49549__$1);
var G__49576 = cljs.core.chunk_rest(seq__49549__$1);
var G__49577 = c__5565__auto__;
var G__49578 = cljs.core.count(c__5565__auto__);
var G__49579 = (0);
seq__49549 = G__49576;
chunk__49550 = G__49577;
count__49551 = G__49578;
i__49552 = G__49579;
continue;
} else {
var vec__49565 = cljs.core.first(seq__49549__$1);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49565,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49565,(1),null);
try{frontend.modules.outliner.file.do_write_file_BANG_(repo,page_id);
}catch (e49568){if((e49568 instanceof Error)){
var e_49580 = e49568;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Write file failed, please copy the changes to other editors in case of losing data."], null),"Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.file.goog$module$goog$object.get(e_49580,"stack"))], null),new cljs.core.Keyword(null,"error","error",-978969032));

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.outliner.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","write-file-error","file/write-file-error",-1260826625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e_49580], null),new cljs.core.Keyword(null,"line","line",212345235),49], null)),null);
} else {
throw e49568;

}
}

var G__49581 = cljs.core.next(seq__49549__$1);
var G__49582 = null;
var G__49583 = (0);
var G__49584 = (0);
seq__49549 = G__49581;
chunk__49550 = G__49582;
count__49551 = G__49583;
i__49552 = G__49584;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
frontend.modules.outliner.file.sync_to_file = (function frontend$modules$outliner$file$sync_to_file(p__49569){
var map__49570 = p__49569;
var map__49570__$1 = cljs.core.__destructure_map(map__49570);
var page_db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49570__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if((page_db_id == null)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Write file failed, can't find the current page!",new cljs.core.Keyword(null,"error","error",-978969032));
} else {
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.file.write_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,page_db_id], null));
} else {
return null;
}
}
});
frontend.util.batch(frontend.modules.outliner.file.write_chan,frontend.modules.outliner.file.batch_write_interval,frontend.modules.outliner.file.write_files_BANG_,frontend.modules.outliner.file.write_chan_batch_buf);

//# sourceMappingURL=frontend.modules.outliner.file.js.map
