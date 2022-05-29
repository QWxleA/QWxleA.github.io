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
var page_block = (function (){var G__50360 = repo;
var G__50361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__50362 = page_db_id;
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__50360,G__50361,G__50362) : frontend.db.pull.call(null,G__50360,G__50361,G__50362));
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
var seq__50368 = cljs.core.seq(cljs.core.set(pages));
var chunk__50369 = null;
var count__50370 = (0);
var i__50371 = (0);
while(true){
if((i__50371 < count__50370)){
var vec__50384 = chunk__50369.cljs$core$IIndexed$_nth$arity$2(null,i__50371);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50384,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50384,(1),null);
try{frontend.modules.outliner.file.do_write_file_BANG_(repo,page_id);
}catch (e50387){if((e50387 instanceof Error)){
var e_50412 = e50387;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Write file failed, please copy the changes to other editors in case of losing data."], null),"Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.file.goog$module$goog$object.get(e_50412,"stack"))], null),new cljs.core.Keyword(null,"error","error",-978969032));

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.outliner.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","write-file-error","file/write-file-error",-1260826625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e_50412], null),new cljs.core.Keyword(null,"line","line",212345235),49], null)),null);
} else {
throw e50387;

}
}

var G__50413 = seq__50368;
var G__50414 = chunk__50369;
var G__50415 = count__50370;
var G__50416 = (i__50371 + (1));
seq__50368 = G__50413;
chunk__50369 = G__50414;
count__50370 = G__50415;
i__50371 = G__50416;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50368);
if(temp__5720__auto__){
var seq__50368__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50368__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__50368__$1);
var G__50417 = cljs.core.chunk_rest(seq__50368__$1);
var G__50418 = c__5565__auto__;
var G__50419 = cljs.core.count(c__5565__auto__);
var G__50420 = (0);
seq__50368 = G__50417;
chunk__50369 = G__50418;
count__50370 = G__50419;
i__50371 = G__50420;
continue;
} else {
var vec__50391 = cljs.core.first(seq__50368__$1);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50391,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50391,(1),null);
try{frontend.modules.outliner.file.do_write_file_BANG_(repo,page_id);
}catch (e50394){if((e50394 instanceof Error)){
var e_50421 = e50394;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Write file failed, please copy the changes to other editors in case of losing data."], null),"Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.file.goog$module$goog$object.get(e_50421,"stack"))], null),new cljs.core.Keyword(null,"error","error",-978969032));

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.outliner.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","write-file-error","file/write-file-error",-1260826625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e_50421], null),new cljs.core.Keyword(null,"line","line",212345235),49], null)),null);
} else {
throw e50394;

}
}

var G__50422 = cljs.core.next(seq__50368__$1);
var G__50423 = null;
var G__50424 = (0);
var G__50425 = (0);
seq__50368 = G__50422;
chunk__50369 = G__50423;
count__50370 = G__50424;
i__50371 = G__50425;
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
frontend.modules.outliner.file.sync_to_file = (function frontend$modules$outliner$file$sync_to_file(p__50406){
var map__50407 = p__50406;
var map__50407__$1 = cljs.core.__destructure_map(map__50407);
var page_db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50407__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
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
