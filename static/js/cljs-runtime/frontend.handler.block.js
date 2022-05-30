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
var ref_pages = (function (){var G__50430 = repo;
var G__50431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316)], null);
var G__50432 = ref_pages_ids;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__50430,G__50431,G__50432) : frontend.db.pull_many.call(null,G__50430,G__50431,G__50432));
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
var G__50433 = ref_blocks__$1;
var G__50433__$1 = ((cljs.core.seq(exclude_ids))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
var ids = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),frontend.handler.block.get_block_refs_with_children(block)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block))], null)));
return cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(exclude_ids,ids));
}),G__50433):G__50433);
if(cljs.core.seq(include_ids)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
var page_block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
var ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),frontend.handler.block.get_block_refs_with_children(block)));
if(((cljs.core.contains_QMARK_(include_ids,page_block_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(include_ids))))){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page_block_id,cljs.core.first(include_ids));
} else {
return cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(include_ids,cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ids,page_block_id))));
}
}),G__50433__$1);
} else {
return G__50433__$1;
}
});
if(cljs.core.truth_(group_by_page_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50429_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.second(p1__50429_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50439){
var vec__50440 = p__50439;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50440,(0),null);
var ref_blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50440,(1),null);
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
}),(function (p1__50444_SHARP_){
return cljs.core.second(cljs.core.second(p1__50444_SHARP_));
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
var option = (function (){var G__50452 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),frontend.db.model.step_loading_blocks], null);
if(block_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50452,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),db_id);
} else {
return G__50452;
}
})();
var more_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50449_SHARP_){
var G__50454 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__50449_SHARP_);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__50454) : frontend.db.pull.call(null,G__50454));
}),frontend.db.model.get_paginated_blocks_no_cache(db,start_id,option));
return frontend.db.react.swap_new_result_BANG_(query_k,(function (result){
return frontend.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,more_data));
}));
});
frontend.handler.block.indentable_QMARK_ = (function frontend$handler$block$indentable_QMARK_(p__50456){
var map__50457 = p__50456;
var map__50457__$1 = cljs.core.__destructure_map(map__50457);
var block = map__50457__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50457__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
if(cljs.core.truth_(parent)){
var parent_block = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
var first_child = cljs.core.first(frontend.db.model.get_block_immediate_children(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent_block)));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(first_child));
} else {
return null;
}
});
frontend.handler.block.outdentable_QMARK_ = (function frontend$handler$block$outdentable_QMARK_(p__50460){
var map__50461 = p__50460;
var map__50461__$1 = cljs.core.__destructure_map(map__50461);
var _block = map__50461__$1;
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50461__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(level,(1));
});
frontend.handler.block.indent_outdent_block_BANG_ = (function frontend$handler$block$indent_outdent_block_BANG_(block,direction){
var transact_data__49633__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49634__auto__ = (cljs.core.truth_(transact_data__49633__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null));
if(cljs.core.truth_(transact_data__49633__auto__)){
return frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
var _STAR_transaction_data_STAR__orig_val__50466 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__50468 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__50468);

try{frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));

var r__49635__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49636__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49635__auto__], 0));
var tx_meta__49637__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49635__auto__));
var all_tx__49638__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49636__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49634__auto__));
var opts_SHARP___49639__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49634__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49637__auto__], 0));
if(cljs.core.seq(all_tx__49638__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49634__auto__))){
return null;
} else {
var result__49640__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49638__auto__,opts_SHARP___49639__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49638__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49637__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49640__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__50466);
}}
});
frontend.handler.block.select_block_BANG_ = (function frontend$handler$block$select_block_BANG_(block_uuid){
var blocks = document.getElementsByClassName(cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid));
if(cljs.core.seq(blocks)){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(blocks);
} else {
return null;
}
});
frontend.handler.block._STAR_swipe = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.handler.block.on_touch_start = (function frontend$handler$block$on_touch_start(event){
var temp__5720__auto__ = event.targetTouches;
if(cljs.core.truth_(temp__5720__auto__)){
var touches = temp__5720__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(touches.length,(1))){
var touch = (touches[(0)]);
var x = touch.clientX;
var y = touch.clientY;
return cljs.core.reset_BANG_(frontend.handler.block._STAR_swipe,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"xi","xi",-163483319),x,new cljs.core.Keyword(null,"yi","yi",-1352135633),y,new cljs.core.Keyword(null,"tx","tx",466630418),x,new cljs.core.Keyword(null,"ty","ty",158290825),y,new cljs.core.Keyword(null,"direction","direction",-633359395),null], null));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.block.on_touch_move = (function frontend$handler$block$on_touch_move(event,block,uuid,_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_){
var temp__5720__auto__ = event.targetTouches;
if(cljs.core.truth_(temp__5720__auto__)){
var touches = temp__5720__auto__;
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(touches.length,(1));
if(and__5041__auto__){
return cljs.core.deref(frontend.handler.block._STAR_swipe);
} else {
return and__5041__auto__;
}
})())){
var map__50486 = cljs.core.deref(frontend.handler.block._STAR_swipe);
var map__50486__$1 = cljs.core.__destructure_map(map__50486);
var x0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50486__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var xi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50486__$1,new cljs.core.Keyword(null,"xi","xi",-163483319));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50486__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var touch = (touches[(0)]);
var tx = touch.clientX;
var ty = touch.clientY;
var direction__$1 = (((direction == null))?(((tx > x0))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937)):direction);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.block._STAR_swipe,(function (p1__50480_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50480_SHARP_,new cljs.core.Keyword(null,"tx","tx",466630418),tx),new cljs.core.Keyword(null,"ty","ty",158290825),ty),new cljs.core.Keyword(null,"xi","xi",-163483319),tx),new cljs.core.Keyword(null,"yi","yi",-1352135633),ty),new cljs.core.Keyword(null,"direction","direction",-633359395),direction__$1);
}));

if((((xi - x0) * (tx - xi)) < (0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.block._STAR_swipe,(function (p1__50482_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50482_SHARP_,new cljs.core.Keyword(null,"x0","x0",410843387),tx),new cljs.core.Keyword(null,"y0","y0",111454807),ty);
}));
} else {
}

var map__50488 = cljs.core.deref(frontend.handler.block._STAR_swipe);
var map__50488__$1 = cljs.core.__destructure_map(map__50488);
var x0__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50488__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50488__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dx = (tx - x0__$1);
var dy = (ty - y0);
if((((Math.abs(dy) < (20))) && ((Math.abs(dx) > (10))))){
var left = goog.dom.getElement(["block-left-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''));
var right = goog.dom.getElement(["block-right-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction__$1,new cljs.core.Keyword(null,"right","right",-452581833))){
cljs.core.reset_BANG_(_STAR_show_left_menu_QMARK_,true);

if(cljs.core.truth_(left)){
if((dx >= (0))){
(left.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dx),"px"].join(''));
} else {
}

if((dx < (0))){
(left.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__5128__auto__ = ((50) + dx);
var y__5129__auto__ = (0);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})()),"px"].join(''));
} else {
}

var indent = goog.dom.getFirstElementChild(left);
if(cljs.core.truth_(frontend.handler.block.indentable_QMARK_(block))){
if((left.clientWidth >= (50))){
return (indent.style.opacity = "100%");
} else {
return (indent.style.opacity = "30%");
}
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction__$1,new cljs.core.Keyword(null,"left","left",-399115937))){
cljs.core.reset_BANG_(_STAR_show_right_menu_QMARK_,true);

if(cljs.core.truth_(right)){
if((dx <= (0))){
(right.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((- dx)),"px"].join(''));
} else {
}

if((dx > (0))){
(right.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__5128__auto__ = ((80) - dx);
var y__5129__auto__ = (0);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})()),"px"].join(''));
} else {
}

var outdent = goog.dom.getFirstElementChild(right);
var more = goog.dom.getLastElementChild(right);
if((((right.clientWidth >= (40))) && ((right.clientWidth < (80))))){
(outdent.style.opacity = "100%");
} else {
(outdent.style.opacity = "30%");
}

if(frontend.handler.block.outdentable_QMARK_(block)){
if((right.clientWidth >= (80))){
return (more.style.opacity = "100%");
} else {
return (more.style.opacity = "30%");
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;

}
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.block.on_touch_end = (function frontend$handler$block$on_touch_end(_event,block,uuid,_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_){
if(cljs.core.truth_(cljs.core.deref(frontend.handler.block._STAR_swipe))){
var left_menu = goog.dom.getElement(["block-left-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''));
var right_menu = goog.dom.getElement(["block-right-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''));
var map__50490 = cljs.core.deref(frontend.handler.block._STAR_swipe);
var map__50490__$1 = cljs.core.__destructure_map(map__50490);
var x0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50490__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50490__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var dx = (tx - x0);
try{if((Math.abs(dx) > (10))){
if(cljs.core.truth_((function (){var and__5041__auto__ = left_menu;
if(cljs.core.truth_(and__5041__auto__)){
return (left_menu.clientWidth >= (50));
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.truth_(frontend.handler.block.indentable_QMARK_(block))){
return frontend.mobile.haptics.with_haptics_impact(frontend.handler.block.indent_outdent_block_BANG_(block,new cljs.core.Keyword(null,"right","right",-452581833)),new cljs.core.Keyword(null,"light","light",1918998747));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = right_menu;
if(cljs.core.truth_(and__5041__auto__)){
return ((((40) < right_menu.clientWidth)) && ((right_menu.clientWidth < (80))));
} else {
return and__5041__auto__;
}
})())){
return frontend.mobile.haptics.with_haptics_impact((function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),true);

frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","actioned-block","mobile/actioned-block",347869705),block);

return frontend.handler.block.select_block_BANG_(uuid);
})()
,new cljs.core.Keyword(null,"light","light",1918998747));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = right_menu;
if(cljs.core.truth_(and__5041__auto__)){
return (right_menu.clientWidth >= (80));
} else {
return and__5041__auto__;
}
})())){
if(frontend.handler.block.outdentable_QMARK_(block)){
return frontend.mobile.haptics.with_haptics_impact(frontend.handler.block.indent_outdent_block_BANG_(block,new cljs.core.Keyword(null,"left","left",-399115937)),new cljs.core.Keyword(null,"light","light",1918998747));
} else {
return null;
}
} else {
return null;

}
}
}
} else {
return null;
}
}catch (e50491){if((e50491 instanceof Error)){
var e = e50491;
return console.error(e);
} else {
throw e50491;

}
}finally {cljs.core.reset_BANG_(_STAR_show_left_menu_QMARK_,false);

cljs.core.reset_BANG_(_STAR_show_right_menu_QMARK_,false);

cljs.core.reset_BANG_(frontend.handler.block._STAR_swipe,null);
}} else {
return null;
}
});
frontend.handler.block.on_touch_cancel = (function frontend$handler$block$on_touch_cancel(_event,_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_){
cljs.core.reset_BANG_(_STAR_show_left_menu_QMARK_,false);

cljs.core.reset_BANG_(_STAR_show_right_menu_QMARK_,false);

return cljs.core.reset_BANG_(frontend.handler.block._STAR_swipe,null);
});

//# sourceMappingURL=frontend.handler.block.js.map
