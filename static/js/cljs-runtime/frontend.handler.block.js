goog.provide('frontend.handler.block');
frontend.handler.block.long_page_QMARK_ = (function frontend$handler$block$long_page_QMARK_(repo,page_id){
return ((frontend.db.get_page_blocks_count.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_blocks_count.cljs$core$IFn$_invoke$arity$2(repo,page_id) : frontend.db.get_page_blocks_count.call(null,repo,page_id)) >= frontend.db.model.initial_blocks_length);
});
frontend.handler.block.get_block_refs_with_children = (function frontend$handler$block$get_block_refs_with_children(block){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.tree_seq(new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","children","block/children",-1040716209),block)], 0)));
});
frontend.handler.block.filter_blocks = (function frontend$handler$block$filter_blocks(repo,ref_blocks,filters,group_by_page_QMARK_){
var ref_pages_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(group_by_page_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ref_blocks):null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (b){
return frontend.handler.block.get_block_refs_with_children(b);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(group_by_page_QMARK_)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.last,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref_blocks], 0)):ref_blocks)], 0))))));
var ref_pages = (function (){var G__49494 = repo;
var G__49495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316)], null);
var G__49496 = ref_pages_ids;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__49494,G__49495,G__49496) : frontend.db.pull_many.call(null,G__49494,G__49495,G__49496));
})();
var ref_pages__$1 = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),ref_pages),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),ref_pages));
var exclude_ids = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ref_pages__$1,page);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,false))));
var include_ids = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ref_pages__$1,page);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,true))));
if(cljs.core.empty_QMARK_(filters)){
return ref_blocks;
} else {
var filter_f = (function (ref_blocks__$1){
var G__49516 = ref_blocks__$1;
var G__49516__$1 = ((cljs.core.seq(exclude_ids))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
var ids = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),frontend.handler.block.get_block_refs_with_children(block)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block))], null)));
return cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(exclude_ids,ids));
}),G__49516):G__49516);
if(cljs.core.seq(include_ids)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
var page_block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
var ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),frontend.handler.block.get_block_refs_with_children(block)));
if(((cljs.core.contains_QMARK_(include_ids,page_block_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(include_ids))))){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page_block_id,cljs.core.first(include_ids));
} else {
return cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(include_ids,cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ids,page_block_id))));
}
}),G__49516__$1);
} else {
return G__49516__$1;
}
});
if(cljs.core.truth_(group_by_page_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49440_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.second(p1__49440_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49528){
var vec__49529 = p__49528;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49529,(0),null);
var ref_blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49529,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,filter_f(ref_blocks__$1)], null);
}),ref_blocks));
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,filter_f(ref_blocks));
}
}
});
frontend.handler.block.walk_block = (function frontend$handler$block$walk_block(block,check_QMARK_,transform){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.walk.postwalk((function (x){
if(cljs.core.truth_((check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? check_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : check_QMARK_.call(null,x)))){
return cljs.core.reset_BANG_(result,(transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(x) : transform.call(null,x)));
} else {
return x;
}
}),new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block));

return cljs.core.deref(result);
});
frontend.handler.block.get_timestamp = (function frontend$handler$block$get_timestamp(block,typ){
return frontend.handler.block.walk_block(block,(function (x){
return ((logseq.graph_parser.block.timestamp_block_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,cljs.core.first(cljs.core.second(x)))));
}),(function (p1__49542_SHARP_){
return cljs.core.second(cljs.core.second(p1__49542_SHARP_));
}));
});
frontend.handler.block.get_scheduled_ast = (function frontend$handler$block$get_scheduled_ast(block){
return frontend.handler.block.get_timestamp(block,"Scheduled");
});
frontend.handler.block.get_deadline_ast = (function frontend$handler$block$get_deadline_ast(block){
return frontend.handler.block.get_timestamp(block,"Deadline");
});
frontend.handler.block.load_more_BANG_ = (function frontend$handler$block$load_more_BANG_(db_id,start_id){
var repo = frontend.state.get_current_repo();
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var block = (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(repo,db_id) : frontend.db.entity.call(null,repo,db_id));
var block_QMARK_ = cljs.core.not(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block));
var k = ((block_QMARK_)?new cljs.core.Keyword("frontend.db.react","block-and-children","frontend.db.react/block-and-children",-1481509175):new cljs.core.Keyword("frontend.db.react","page-blocks","frontend.db.react/page-blocks",1515328263));
var query_k = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,k,db_id], null);
var option = (function (){var G__49554 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),frontend.db.model.step_loading_blocks], null);
if(block_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49554,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),db_id);
} else {
return G__49554;
}
})();
var more_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49550_SHARP_){
var G__49556 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__49550_SHARP_);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__49556) : frontend.db.pull.call(null,G__49556));
}),frontend.db.model.get_paginated_blocks_no_cache(db,start_id,option));
return frontend.db.react.swap_new_result_BANG_(query_k,(function (result){
return frontend.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,more_data));
}));
});

//# sourceMappingURL=frontend.handler.block.js.map
