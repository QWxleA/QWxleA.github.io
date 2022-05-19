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
var page_block = (function (){var G__77315 = repo;
var G__77316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__77317 = page_db_id;
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__77315,G__77316,G__77317) : frontend.db.pull.call(null,G__77315,G__77316,G__77317));
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
var seq__77321 = cljs.core.seq(cljs.core.set(pages));
var chunk__77322 = null;
var count__77323 = (0);
var i__77324 = (0);
while(true){
if((i__77324 < count__77323)){
var vec__77341 = chunk__77322.cljs$core$IIndexed$_nth$arity$2(null,i__77324);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77341,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77341,(1),null);
try{frontend.modules.outliner.file.do_write_file_BANG_(repo,page_id);
}catch (e77345){if((e77345 instanceof Error)){
var e_77364 = e77345;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Write file failed, please copy the changes to other editors in case of losing data."], null),"Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.file.goog$module$goog$object.get(e_77364,"stack"))], null),new cljs.core.Keyword(null,"error","error",-978969032));

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.outliner.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","write-file-error","file/write-file-error",-1260826625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e_77364], null),new cljs.core.Keyword(null,"line","line",212345235),49], null)),null);
} else {
throw e77345;

}
}

var G__77370 = seq__77321;
var G__77371 = chunk__77322;
var G__77372 = count__77323;
var G__77373 = (i__77324 + (1));
seq__77321 = G__77370;
chunk__77322 = G__77371;
count__77323 = G__77372;
i__77324 = G__77373;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__77321);
if(temp__5720__auto__){
var seq__77321__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77321__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77321__$1);
var G__77374 = cljs.core.chunk_rest(seq__77321__$1);
var G__77375 = c__4679__auto__;
var G__77376 = cljs.core.count(c__4679__auto__);
var G__77377 = (0);
seq__77321 = G__77374;
chunk__77322 = G__77375;
count__77323 = G__77376;
i__77324 = G__77377;
continue;
} else {
var vec__77347 = cljs.core.first(seq__77321__$1);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77347,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77347,(1),null);
try{frontend.modules.outliner.file.do_write_file_BANG_(repo,page_id);
}catch (e77350){if((e77350 instanceof Error)){
var e_77379 = e77350;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Write file failed, please copy the changes to other editors in case of losing data."], null),"Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.file.goog$module$goog$object.get(e_77379,"stack"))], null),new cljs.core.Keyword(null,"error","error",-978969032));

lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.outliner.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","write-file-error","file/write-file-error",-1260826625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e_77379], null),new cljs.core.Keyword(null,"line","line",212345235),49], null)),null);
} else {
throw e77350;

}
}

var G__77381 = cljs.core.next(seq__77321__$1);
var G__77382 = null;
var G__77383 = (0);
var G__77384 = (0);
seq__77321 = G__77381;
chunk__77322 = G__77382;
count__77323 = G__77383;
i__77324 = G__77384;
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
frontend.modules.outliner.file.sync_to_file = (function frontend$modules$outliner$file$sync_to_file(p__77355){
var map__77356 = p__77355;
var map__77356__$1 = cljs.core.__destructure_map(map__77356);
var page_db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77356__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
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
