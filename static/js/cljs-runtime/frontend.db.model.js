goog.provide('frontend.db.model');
frontend.db.model.initial_blocks_length = (100);
frontend.db.model.step_loading_blocks = (50);
frontend.db.model.block_attrs = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","_refs","block/_refs",830218531),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","marker","block/marker",1231576318),new cljs.core.Keyword("block","priority","block/priority",1491369544),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),new cljs.core.Keyword("block","scheduled","block/scheduled",584810412),new cljs.core.Keyword("block","deadline","block/deadline",660945231),new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Keyword("block","heading-level","block/heading-level",661361785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_parent","block/_parent",-639389670),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
frontend.db.model.transact_files_db_BANG_ = (function frontend$db$model$transact_files_db_BANG_(var_args){
var G__76979 = arguments.length;
switch (G__76979) {
case 1:
return frontend.db.model.transact_files_db_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.transact_files_db_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.transact_files_db_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tx_data){
return frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),tx_data);
}));

(frontend.db.model.transact_files_db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,tx_data){
if(frontend.config.publishing_QMARK_){
return null;
} else {
var tx_data__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__76977_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__76977_SHARP_,new cljs.core.Keyword("file","handle","file/handle",1544192618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","type","file/type",1177401880)], 0));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,logseq.graph_parser.util.remove_nils(tx_data)));
if(cljs.core.seq(tx_data__$1)){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(repo_url,false);
if(cljs.core.truth_(temp__5720__auto__)){
var conn = temp__5720__auto__;
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.vec(tx_data__$1));
} else {
return null;
}
} else {
return null;
}
}
}));

(frontend.db.model.transact_files_db_BANG_.cljs$lang$maxFixedArity = 2);

frontend.db.model.pull_block = (function frontend$db$model$pull_block(id){
var repo = frontend.state.get_current_repo();
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
return cljs.core.first(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","block","frontend.db.react/block",1552179739),id], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,frontend.db.model.block_attrs], 0))));
} else {
return null;
}
});
frontend.db.model.get_tag_pages = (function frontend$db$model$get_tag_pages(repo,tag_name){
if(cljs.core.truth_(tag_name)){
var G__76980 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?original-name","?original-name",-1097243956,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?tag","?tag",157764474,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?tag","?tag",157764474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?original-name","?original-name",-1097243956,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null)], null);
var G__76981 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__76982 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(tag_name) : frontend.util.page_name_sanity_lc.call(null,tag_name));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__76980,G__76981,G__76982) : datascript.core.q.call(null,G__76980,G__76981,G__76982));
} else {
return null;
}
});
frontend.db.model.get_all_tagged_pages = (function frontend$db$model$get_all_tagged_pages(repo){
var G__76983 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Symbol(null,"?tag","?tag",157764474,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?tag","?tag",157764474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null)], null);
var G__76984 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__76983,G__76984) : datascript.core.q.call(null,G__76983,G__76984));
});
frontend.db.model.get_all_namespace_relation = (function frontend$db$model$get_all_namespace_relation(repo){
var G__76985 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null)], null)], null);
var G__76986 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__76985,G__76986) : datascript.core.q.call(null,G__76985,G__76986));
});
frontend.db.model.get_pages = (function frontend$db$model$get_pages(repo){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__76987 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-original-name","?page-original-name",849062408,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)),new cljs.core.Symbol(null,"?page-original-name","?page-original-name",849062408,null)], null)], null);
var G__76988 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__76987,G__76988) : datascript.core.q.call(null,G__76987,G__76988));
})());
});
frontend.db.model.get_all_pages = (function frontend$db$model$get_all_pages(repo){
var G__76989 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null)], null);
var G__76990 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__76989,G__76990) : datascript.core.q.call(null,G__76989,G__76990));
});
frontend.db.model.get_page_alias = (function frontend$db$model$get_page_alias(repo,page_name){
var temp__5720__auto__ = (function (){var and__4251__auto__ = repo;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var G__76991 = (function (){var G__76992 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null)], null)], null);
var G__76993 = db;
var G__76994 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__76992,G__76993,G__76994) : datascript.core.q.call(null,G__76992,G__76993,G__76994));
})();
var G__76991__$1 = (((G__76991 == null))?null:frontend.db.utils.seq_flatten(G__76991));
if((G__76991__$1 == null)){
return null;
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(G__76991__$1);
}
} else {
return null;
}
});
frontend.db.model.get_alias_source_page = (function frontend$db$model$get_alias_source_page(repo,alias){
var temp__5720__auto__ = (function (){var and__4251__auto__ = repo;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var alias__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(alias) : frontend.util.page_name_sanity_lc.call(null,alias));
var pages = frontend.db.utils.seq_flatten((function (){var G__76995 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?a","?a",1314302913,null)], null)], null);
var G__76996 = db;
var G__76997 = alias__$1;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__76995,G__76996,G__76997) : datascript.core.q.call(null,G__76995,G__76996,G__76997));
})());
if(cljs.core.seq(pages)){
return cljs.core.some((function (page){
var aliases = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"alias","alias",-2039751630)], null))));
if(cljs.core.contains_QMARK_(aliases,alias__$1)){
return page;
} else {
return null;
}
}),pages);
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_files = (function frontend$db$model$get_files(repo){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return cljs.core.reverse(cljs.core.seq((function (){var G__76998 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null)], null);
var G__76999 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__76998,G__76999) : datascript.core.q.call(null,G__76998,G__76999));
})()));
} else {
return null;
}
});
frontend.db.model.get_files_blocks = (function frontend$db$model$get_files_blocks(repo_url,paths){
var paths__$1 = cljs.core.set(paths);
var pred = (function (_db,e){
return cljs.core.contains_QMARK_(paths__$1,e);
});
return frontend.db.utils.seq_flatten((function (){var G__77000 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null);
var G__77001 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
var G__77002 = pred;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77000,G__77001,G__77002) : datascript.core.q.call(null,G__77000,G__77001,G__77002));
})());
});
frontend.db.model.get_file_blocks = (function frontend$db$model$get_file_blocks(repo_url,path){
return frontend.db.utils.seq_flatten((function (){var G__77003 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null);
var G__77004 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
var G__77005 = path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77003,G__77004,G__77005) : datascript.core.q.call(null,G__77003,G__77004,G__77005));
})());
});
frontend.db.model.get_file_pages = (function frontend$db$model$get_file_pages(repo_url,path){
return frontend.db.utils.seq_flatten((function (){var G__77006 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null)], null);
var G__77007 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
var G__77008 = path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77006,G__77007,G__77008) : datascript.core.q.call(null,G__77006,G__77007,G__77008));
})());
});
frontend.db.model.set_file_last_modified_at_BANG_ = (function frontend$db$model$set_file_last_modified_at_BANG_(repo,path,last_modified_at){
if(cljs.core.truth_((function (){var and__4251__auto__ = repo;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = path;
if(cljs.core.truth_(and__4251__auto____$1)){
return last_modified_at;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(repo,false);
if(cljs.core.truth_(temp__5720__auto__)){
var conn = temp__5720__auto__;
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),last_modified_at], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-refresh?","skip-refresh?",878432095),true], null));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_file_last_modified_at = (function frontend$db$model$get_file_last_modified_at(repo,path){
if(cljs.core.truth_((function (){var and__4251__auto__ = repo;
if(cljs.core.truth_(and__4251__auto__)){
return path;
} else {
return and__4251__auto__;
}
})())){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310).cljs$core$IFn$_invoke$arity$1((function (){var G__77009 = db;
var G__77010 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__77009,G__77010) : datascript.core.entity.call(null,G__77009,G__77010));
})());
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.file_exists_QMARK_ = (function frontend$db$model$file_exists_QMARK_(repo,path){
if(cljs.core.truth_((function (){var and__4251__auto__ = repo;
if(cljs.core.truth_(and__4251__auto__)){
return path;
} else {
return and__4251__auto__;
}
})())){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var G__77011 = db;
var G__77012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__77011,G__77012) : datascript.core.entity.call(null,G__77011,G__77012));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_file_contents = (function frontend$db$model$get_file_contents(repo){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__77013 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Symbol(null,"?content","?content",-956653715,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","content","file/content",12680964),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null)], null);
var G__77014 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__77013,G__77014) : datascript.core.q.call(null,G__77013,G__77014));
})());
} else {
return null;
}
});
frontend.db.model.get_files_full = (function frontend$db$model$get_files_full(repo){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return cljs.core.flatten((function (){var G__77015 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null);
var G__77016 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__77015,G__77016) : datascript.core.q.call(null,G__77015,G__77016));
})());
} else {
return null;
}
});
frontend.db.model.get_file = (function frontend$db$model$get_file(var_args){
var G__77018 = arguments.length;
switch (G__77018) {
case 1:
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$1 = (function (path){
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),path);
}));

(frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$2 = (function (repo,path){
if(cljs.core.truth_((function (){var and__4251__auto__ = repo;
if(cljs.core.truth_(and__4251__auto__)){
return path;
} else {
return and__4251__auto__;
}
})())){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1((function (){var G__77019 = db;
var G__77020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__77019,G__77020) : datascript.core.entity.call(null,G__77019,G__77020));
})());
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_file.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_custom_css = (function frontend$db$model$get_custom_css(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$1(frontend.config.get_file_path(repo,"logseq/custom.css"));
} else {
return null;
}
});
frontend.db.model.get_block_by_uuid = (function frontend$db$model$get_block_by_uuid(id){
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),((cljs.core.uuid_QMARK_(id))?id:cljs.core.uuid(id))], null));
});
frontend.db.model.query_block_by_uuid = (function frontend$db$model$query_block_by_uuid(id){
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),((cljs.core.uuid_QMARK_(id))?id:cljs.core.uuid(id))], null));
});
frontend.db.model.get_page_format = (function frontend$db$model$get_page_format(page_name){
var or__4253__auto__ = (function (){var page = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page_name)], null));
var or__4253__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5720__auto__ = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5720__auto__)){
var file = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(file)));
if(cljs.core.truth_(temp__5720__auto____$1)){
var path = temp__5720__auto____$1;
return logseq.graph_parser.util.get_format(path);
} else {
return null;
}
} else {
return null;
}
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
}
});
frontend.db.model.page_alias_set = (function frontend$db$model$page_alias_set(repo_url,page){
var temp__5720__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null)));
if(cljs.core.truth_(temp__5720__auto__)){
var page_id = temp__5720__auto__;
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([page_id]),cljs.core.set(frontend.db.utils.seq_flatten((function (){var G__77021 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null))], null);
var G__77022 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
var G__77023 = frontend.util.safe_page_name_sanity_lc(page);
var G__77024 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null),new cljs.core.Symbol(null,"?e3","?e3",-717655771,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e3","?e3",-717655771,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?e3","?e3",-717655771,null),new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e3","?e3",-717655771,null)], null)], null)], null);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__77021,G__77022,G__77023,G__77024) : datascript.core.q.call(null,G__77021,G__77022,G__77023,G__77024));
})())));
} else {
return null;
}
});
frontend.db.model.get_entities_by_ids = (function frontend$db$model$get_entities_by_ids(var_args){
var G__77026 = arguments.length;
switch (G__77026) {
case 1:
return frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$1 = (function (ids){
return frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),ids);
}));

(frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$2 = (function (repo,ids){
if(cljs.core.truth_(repo)){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),ids);
} else {
return null;
}
}));

(frontend.db.model.get_entities_by_ids.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_names_by_ids = (function frontend$db$model$get_page_names_by_ids(var_args){
var G__77028 = arguments.length;
switch (G__77028) {
case 1:
return frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$1 = (function (ids){
return frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),ids);
}));

(frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2 = (function (repo,ids){
if(cljs.core.truth_(repo)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316)], null),ids));
} else {
return null;
}
}));

(frontend.db.model.get_page_names_by_ids.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_alias_names = (function frontend$db$model$get_page_alias_names(repo,page_name){
var alias_ids = frontend.db.model.page_alias_set(repo,page_name);
if(cljs.core.seq(alias_ids)){
var names = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__77029_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(p1__77029_SHARP_) : frontend.util.page_name_sanity_lc.call(null,p1__77029_SHARP_)),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name)));
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2(repo,alias_ids)));
var lookup_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(name) : frontend.util.page_name_sanity_lc.call(null,name))], null);
}),names);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(m);
}
}),frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),lookup_refs));
} else {
return null;
}
});
frontend.db.model.with_pages = (function frontend$db$model$with_pages(blocks){
var pages_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","page","block/page",822314108)),blocks));
var pages = ((cljs.core.seq(pages_ids))?frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366)], null),pages_ids):null);
var pages_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p),p);
}),cljs.core.PersistentArrayMap.EMPTY,pages);
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","page","block/page",822314108),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pages_map,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block))));
}),blocks);
return blocks__$1;
});
frontend.db.model.get_page_properties = (function frontend$db$model$get_page_properties(page){
var temp__5720__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var page__$1 = temp__5720__auto__;
return new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page__$1);
} else {
return null;
}
});
frontend.db.model.sort_by_left = (function frontend$db$model$sort_by_left(var_args){
var G__77032 = arguments.length;
switch (G__77032) {
case 2:
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2 = (function (blocks,parent){
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$3(blocks,parent,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"check?","check?",-1230991970),true], null));
}));

(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$3 = (function (blocks,parent,p__77033){
var map__77034 = p__77033;
var map__77034__$1 = cljs.core.__destructure_map(map__77034);
var check_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77034__$1,new cljs.core.Keyword(null,"check?","check?",-1230991970));
if(cljs.core.truth_(check_QMARK_)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566),blocks))))){
var duplicates_77211 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77035){
var vec__77036 = p__77035;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77036,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77036,(1),null);
var left = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(k);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"duplicates","duplicates",1265485699),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77030_SHARP_){
return cljs.core.select_keys(p1__77030_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","file","block/file",183171933)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block)));
}),blocks))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__77039){
var vec__77040 = p__77039;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77040,(1),null);
return (v > (1));
}),cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","left","block/left",-443712566)),blocks))));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566),blocks))))){
} else {
throw (new Error(["Assert failed: ","Each block should have a different left node","\n","(= (count blocks) (count (set (map :block/left blocks))))"].join('')));
}
} else {
}

var left__GT_blocks = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(b)),b);
}),cljs.core.PersistentArrayMap.EMPTY,blocks);
var block = parent;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(left__GT_blocks,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5718__auto__)){
var next = temp__5718__auto__;
var G__77212 = next;
var G__77213 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,next);
block = G__77212;
result = G__77213;
continue;
} else {
return cljs.core.vec(result);
}
break;
}
}));

(frontend.db.model.sort_by_left.cljs$lang$maxFixedArity = 3);

frontend.db.model.sort_by_left_recursive = (function frontend$db$model$sort_by_left_recursive(form){
return clojure.walk.postwalk((function (f){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_(f);
if(and__4251__auto__){
return new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(f);
} else {
return and__4251__auto__;
}
})())){
var children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(f);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword("block","_parent","block/_parent",-639389670)),new cljs.core.Keyword("block","children","block/children",-1040716209),frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,f));
} else {
return f;
}
}),form);
});
frontend.db.model.has_children_QMARK_ = (function frontend$db$model$has_children_QMARK_(var_args){
var G__77044 = arguments.length;
switch (G__77044) {
case 1:
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0(),block_id);
}));

(frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db,block_id){
return (!((new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1((function (){var G__77045 = db;
var G__77046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__77045,G__77046) : datascript.core.entity.call(null,G__77045,G__77046));
})()) == null)));
}));

(frontend.db.model.has_children_QMARK_.cljs$lang$maxFixedArity = 2);

frontend.db.model.collapsed_and_has_children_QMARK_ = (function frontend$db$model$collapsed_and_has_children_QMARK_(db,block){
var and__4251__auto__ = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__4251__auto__)){
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__4251__auto__;
}
});
frontend.db.model.get_by_parent__AMPERSAND__left = (function frontend$db$model$get_by_parent__AMPERSAND__left(db,parent_id,left_id){
if(cljs.core.truth_((function (){var and__4251__auto__ = parent_id;
if(cljs.core.truth_(and__4251__auto__)){
return left_id;
} else {
return and__4251__auto__;
}
})())){
var lefts = new cljs.core.Keyword("block","_left","block/_left",865231986).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,left_id) : datascript.core.entity.call(null,db,left_id)));
return cljs.core.some((function (node){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(node)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node))))){
return node;
} else {
return null;
}
}),lefts);
} else {
return null;
}
});
/**
 * Get the next outdented block of the block that has the `id`.
 *   e.g.
 *   - a
 *  - b
 *    - c
 *   - d
 * 
 *   The next outdented block of `c` is `d`.
 */
frontend.db.model.get_next_outdented_block = (function frontend$db$model$get_next_outdented_block(db,id){
var temp__5720__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
var temp__5718__auto__ = frontend.db.model.get_by_parent__AMPERSAND__left(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
if(cljs.core.truth_(temp__5718__auto__)){
var parent_sibling = temp__5718__auto__;
return parent_sibling;
} else {
var G__77047 = db;
var G__77048 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
return (frontend.db.model.get_next_outdented_block.cljs$core$IFn$_invoke$arity$2 ? frontend.db.model.get_next_outdented_block.cljs$core$IFn$_invoke$arity$2(G__77047,G__77048) : frontend.db.model.get_next_outdented_block.call(null,G__77047,G__77048));
}
} else {
return null;
}
});
frontend.db.model.get_block_parent = (function frontend$db$model$get_block_parent(var_args){
var G__77050 = arguments.length;
switch (G__77050) {
case 1:
return frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),block_id);
}));

(frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2 = (function (repo,block_id){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var temp__5720__auto____$1 = (function (){var G__77051 = db;
var G__77052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__77051,G__77052) : datascript.core.entity.call(null,G__77051,G__77052));
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var block = temp__5720__auto____$1;
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_block_parent.cljs$lang$maxFixedArity = 2);

frontend.db.model.top_block_QMARK_ = (function frontend$db$model$top_block_QMARK_(block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
});
frontend.db.model.get_block_parents = (function frontend$db$model$get_block_parents(var_args){
var G__77054 = arguments.length;
switch (G__77054) {
case 2:
return frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2 = (function (repo,block_id){
return frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$3(repo,block_id,(100));
}));

(frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$3 = (function (repo,block_id,depth){
var block_id__$1 = block_id;
var parents = cljs.core.List.EMPTY;
var d = (1);
while(true){
if((d > depth)){
return parents;
} else {
var temp__5718__auto__ = frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2(repo,block_id__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var parent = temp__5718__auto__;
var G__77218 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent);
var G__77219 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,parent);
var G__77220 = (d + (1));
block_id__$1 = G__77218;
parents = G__77219;
d = G__77220;
continue;
} else {
return parents;
}
}
break;
}
}));

(frontend.db.model.get_block_parents.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_block_parents_v2 = (function frontend$db$model$get_block_parents_v2(repo,block_id){
var G__77055 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__77056 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__77057 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__77055,G__77056,G__77057) : datascript.core.pull.call(null,G__77055,G__77056,G__77057));
});
frontend.db.model.get_next_open_block = (function frontend$db$model$get_next_open_block(var_args){
var G__77059 = arguments.length;
switch (G__77059) {
case 2:
return frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$2 = (function (db,block){
return frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3(db,block,null);
}));

(frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3 = (function (db,block,scoped_block_id){
var block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
var block_parent_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block));
var next_block = (function (){var or__4253__auto__ = (cljs.core.truth_((function (){var and__4251__auto__ = frontend.db.model.collapsed_and_has_children_QMARK_(db,block);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_id,scoped_block_id);
} else {
return and__4251__auto__;
}
})())?frontend.db.model.get_by_parent__AMPERSAND__left(db,block_parent_id,block_id):(function (){var or__4253__auto__ = frontend.db.model.get_by_parent__AMPERSAND__left(db,block_id,block_id);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.db.model.get_by_parent__AMPERSAND__left(db,block_parent_id,block_id);
}
})());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.db.model.get_next_outdented_block(db,block_id);
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = scoped_block_id;
if(cljs.core.truth_(and__4251__auto__)){
return next_block;
} else {
return and__4251__auto__;
}
})())){
var parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(next_block))));
if(cljs.core.contains_QMARK_(parents,scoped_block_id)){
return next_block;
} else {
return null;
}
} else {
return next_block;
}
}));

(frontend.db.model.get_next_open_block.cljs$lang$maxFixedArity = 3);

/**
 * Result should be sorted.
 */
frontend.db.model.get_paginated_blocks_no_cache = (function frontend$db$model$get_paginated_blocks_no_cache(db,start_id,p__77060){
var map__77061 = p__77060;
var map__77061__$1 = cljs.core.__destructure_map(map__77061);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77061__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var include_start_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77061__$1,new cljs.core.Keyword(null,"include-start?","include-start?",1270472824));
var scoped_block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77061__$1,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117));
var temp__5720__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,start_id) : datascript.core.entity.call(null,db,start_id));
if(cljs.core.truth_(temp__5720__auto__)){
var start = temp__5720__auto__;
var scoped_block_parents = (cljs.core.truth_(scoped_block_id)?(function (){var block = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,scoped_block_id) : datascript.core.entity.call(null,db,scoped_block_id));
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))));
})():null);
var result = (function (){var block = start;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_((function (){var and__4251__auto__ = limit;
if(cljs.core.truth_(and__4251__auto__)){
return (cljs.core.count(result) >= limit);
} else {
return and__4251__auto__;
}
})())){
return result;
} else {
var next_block = frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3(db,block,scoped_block_id);
if(cljs.core.truth_(next_block)){
if(((cljs.core.seq(scoped_block_parents)) && (cljs.core.contains_QMARK_(scoped_block_parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(next_block)))))){
return result;
} else {
var G__77223 = next_block;
var G__77224 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,next_block);
block = G__77223;
result = G__77224;
continue;
}
} else {
return result;
}
}
break;
}
})();
if(cljs.core.truth_(include_start_QMARK_)){
return cljs.core.cons(start,result);
} else {
return result;
}
} else {
return null;
}
});
/**
 * Notice: if `not-collapsed?` is true, will skip searching for any collapsed block.
 */
frontend.db.model.get_block_last_direct_child = (function frontend$db$model$get_block_last_direct_child(var_args){
var G__77063 = arguments.length;
switch (G__77063) {
case 2:
return frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2 = (function (db,db_id){
return frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3(db,db_id,true);
}));

(frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3 = (function (db,db_id,not_collapsed_QMARK_){
var temp__5720__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,db_id) : datascript.core.entity.call(null,db,db_id));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
if((cljs.core.truth_(not_collapsed_QMARK_)?cljs.core.not(frontend.db.model.collapsed_and_has_children_QMARK_(db,block)):true)){
var children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
var all_left = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","left","block/left",-443712566)),children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_id], null)));
var all_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),children));
return cljs.core.first(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(all_ids,all_left));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_block_last_direct_child.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_block_last_child = (function frontend$db$model$get_block_last_child(db,db_id){
var last_child = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2(db,db_id);
var prev = last_child;
var last_child__$1 = last_child;
while(true){
if(cljs.core.truth_(last_child__$1)){
var G__77226 = last_child__$1;
var G__77227 = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2(db,last_child__$1);
prev = G__77226;
last_child__$1 = G__77227;
continue;
} else {
return prev;
}
break;
}
});
frontend.db.model.get_prev_open_block = (function frontend$db$model$get_prev_open_block(db,id){
var block = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
var left = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block);
var left_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)))){
return left_id;
} else {
if(cljs.core.truth_(frontend.util.collapsed_QMARK_(left))){
return left_id;
} else {
var or__4253__auto__ = frontend.db.model.get_block_last_child(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return left_id;
}
}
}
});
frontend.db.model.recursive_child_QMARK_ = (function frontend$db$model$recursive_child_QMARK_(repo,child_id,parent_id){
var _STAR_last_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var node = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,child_id);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_last_node),node)){
return null;
} else {
cljs.core.reset_BANG_(_STAR_last_node,node);

if(cljs.core.truth_(node)){
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),parent_id)){
return true;
} else {
var G__77228 = parent;
node = G__77228;
continue;
}
} else {
return false;
}
}
break;
}
});
frontend.db.model.get_start_id_for_pagination_query = (function frontend$db$model$get_start_id_for_pagination_query(repo_url,current_db,p__77065,result,outliner_op,page_id,block_id,tx_block_ids){
var map__77066 = p__77065;
var map__77066__$1 = cljs.core.__destructure_map(map__77066);
var tx_report = map__77066__$1;
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77066__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77066__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var db_before__$1 = (function (){var or__4253__auto__ = db_before;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return current_db;
}
})();
var cached_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.deref(result));
var cached_ids_set = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cached_ids,page_id));
var first_changed_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933).cljs$core$IFn$_invoke$arity$1(tx_meta),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)))?cljs.core.last(new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999).cljs$core$IFn$_invoke$arity$1(tx_meta)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)))?(function (){var map__77067 = tx_meta;
var map__77067__$1 = cljs.core.__destructure_map(map__77067);
var move_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77067__$1,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77067__$1,new cljs.core.Keyword(null,"target","target",253001721));
var from_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77067__$1,new cljs.core.Keyword(null,"from-page","from-page",75165656));
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77067__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,target)){
return null;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = from_page;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = to_page;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_page,to_page);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,from_page)){
return cljs.core.first(move_blocks);
} else {
return target;
}
} else {
var match_ids = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(move_blocks,target));
var G__77071 = cached_ids;
var vec__77072 = G__77071;
var seq__77073 = cljs.core.seq(vec__77072);
var first__77074 = cljs.core.first(seq__77073);
var seq__77073__$1 = cljs.core.next(seq__77073);
var id = first__77074;
var others = seq__77073__$1;
var G__77071__$1 = G__77071;
while(true){
var vec__77078 = G__77071__$1;
var seq__77079 = cljs.core.seq(vec__77078);
var first__77080 = cljs.core.first(seq__77079);
var seq__77079__$1 = cljs.core.next(seq__77079);
var id__$1 = first__77080;
var others__$1 = seq__77079__$1;
if(cljs.core.truth_(id__$1)){
if(cljs.core.contains_QMARK_(match_ids,id__$1)){
return id__$1;
} else {
if(cljs.core.seq(others__$1)){
var G__77229 = others__$1;
G__77071__$1 = G__77229;
continue;
} else {
return null;
}
}
} else {
return null;
}
break;
}

}
}
})():(function (){var insert_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),outliner_op);
return cljs.core.some((function (p1__77064_SHARP_){
if(cljs.core.truth_((function (){var and__4251__auto__ = ((((insert_QMARK_) && ((!(cljs.core.contains_QMARK_(cached_ids_set,p1__77064_SHARP_)))))) || (true));
if(and__4251__auto__){
return frontend.db.model.recursive_child_QMARK_(repo_url,p1__77064_SHARP_,block_id);
} else {
return and__4251__auto__;
}
})())){
return p1__77064_SHARP_;
} else {
return null;
}
}),tx_block_ids);
})()
));
if(cljs.core.truth_(first_changed_id)){
var or__4253__auto__ = frontend.db.model.get_prev_open_block(db_before__$1,first_changed_id);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.db.model.get_prev_open_block(current_db,first_changed_id);
}
} else {
return null;
}
});
/**
 * Notice: tx-report could be nil.
 */
frontend.db.model.build_paginated_blocks_from_cache = (function frontend$db$model$build_paginated_blocks_from_cache(repo_url,tx_report,result,outliner_op,page_id,block_id,tx_block_ids,scoped_block_id){
var map__77081 = tx_report;
var map__77081__$1 = cljs.core.__destructure_map(map__77081);
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77081__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var current_db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-block","save-block",591532560),null,new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),null], null), null),outliner_op)){
return cljs.core.deref(result);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),null,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null,new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367),null], null), null),outliner_op)){
var temp__5720__auto__ = frontend.db.model.get_start_id_for_pagination_query(repo_url,current_db,tx_report,result,outliner_op,page_id,block_id,tx_block_ids);
if(cljs.core.truth_(temp__5720__auto__)){
var start_id = temp__5720__auto__;
var start_page_QMARK_ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(start_id));
if(cljs.core.truth_(start_page_QMARK_)){
return null;
} else {
var previous_blocks = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b));
}),cljs.core.deref(result));
var limit = (25);
var more = frontend.db.model.get_paginated_blocks_no_cache(current_db,start_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"include-start?","include-start?",1270472824),true,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),scoped_block_id], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(previous_blocks,more);
}
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Get paginated blocks for a page or a specific block.
 * `scoped-block-id`: if specified, returns its children only.
 */
frontend.db.model.get_paginated_blocks = (function frontend$db$model$get_paginated_blocks(var_args){
var G__77084 = arguments.length;
switch (G__77084) {
case 2:
return frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,block_id){
return frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(repo_url,block_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,block_id,p__77085){
var map__77086 = p__77085;
var map__77086__$1 = cljs.core.__destructure_map(map__77086);
var pull_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77086__$1,new cljs.core.Keyword(null,"pull-keys","pull-keys",-768938808),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword("block","_refs","block/_refs",830218531)], null));
var start_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77086__$1,new cljs.core.Keyword(null,"start-block","start-block",885980136));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77086__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),frontend.db.model.initial_blocks_length);
var use_cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77086__$1,new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),true);
var scoped_block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77086__$1,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),null);
if(cljs.core.truth_(block_id)){
if(cljs.core.integer_QMARK_(block_id)){
} else {
throw (new Error(["Assert failed: ",["wrong block-id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)].join(''),"\n","(integer? block-id)"].join('')));
}

var entity = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo_url,block_id);
var page_QMARK_ = (!((new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(entity) == null)));
var page_entity = ((page_QMARK_)?entity:new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(entity));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity);
var bare_page_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),page_id,new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page_entity)], null);
var query_key = ((page_QMARK_)?new cljs.core.Keyword("frontend.db.react","page-blocks","frontend.db.react/page-blocks",1515328263):new cljs.core.Keyword("frontend.db.react","block-and-children","frontend.db.react/block-and-children",-1481509175));
var G__77087 = frontend.db.react.q(repo_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_key,block_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),use_cache_QMARK_,new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),(function (db,tx_report,result){
var tx_data = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report);
var refs = (function (){var G__77091 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77082_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p1__77082_SHARP_));
}),tx_data);
if((G__77091 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),G__77091);
}
})();
var tx_block_ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),tx_data),refs));
var vec__77088 = (cljs.core.truth_((function (){var and__4251__auto__ = tx_report;
if(cljs.core.truth_(and__4251__auto__)){
return result;
} else {
return and__4251__auto__;
}
})())?(function (){var blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,tx_block_ids));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.zipmap(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks),blocks),cljs.core.zipmap(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.deref(result)),cljs.core.deref(result))], null);
})():null);
var tx_id__GT_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77088,(0),null);
var cached_id__GT_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77088,(1),null);
var limit__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = result;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(result);
} else {
return and__4251__auto__;
}
})())?(function (){var x__4336__auto__ = (cljs.core.count(cljs.core.deref(result)) + (5));
var y__4337__auto__ = limit;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})():limit);
var outliner_op = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450)], null));
var blocks = frontend.db.model.build_paginated_blocks_from_cache(repo_url,tx_report,result,outliner_op,page_id,block_id,tx_block_ids,scoped_block_id);
var blocks__$1 = (function (){var or__4253__auto__ = blocks;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.db.model.get_paginated_blocks_no_cache(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url),block_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit__$1,new cljs.core.Keyword(null,"include-start?","include-start?",1270472824),(!(page_QMARK_)),new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),scoped_block_id], null));
}
})();
var block_eids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks__$1);
var blocks__$2 = ((((cljs.core.seq(tx_id__GT_block)) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null], null), null),outliner_op))))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx_id__GT_block,id);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cached_id__GT_block,id);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,id);
}
}
}),block_eids):frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,block_eids));
var blocks__$3 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return (new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(b) == null);
}),blocks__$2);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","page","block/page",822314108),bare_page_map);
}),blocks__$3);
})], null),null);
if((G__77087 == null)){
return null;
} else {
return frontend.util.react(G__77087);
}
} else {
return null;
}
}));

(frontend.db.model.get_paginated_blocks.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_page_blocks_no_cache = (function frontend$db$model$get_page_blocks_no_cache(var_args){
var G__77093 = arguments.length;
switch (G__77093) {
case 1:
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 = (function (page){
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),page,null);
}));

(frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,page){
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(repo_url,page,null);
}));

(frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,page,p__77094){
var map__77095 = p__77094;
var map__77095__$1 = cljs.core.__destructure_map(map__77095);
var pull_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77095__$1,new cljs.core.Keyword(null,"pull-keys","pull-keys",-768938808),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
if(cljs.core.truth_(page)){
var page__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page__$1], null)));
var db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
if(cljs.core.truth_(page_id)){
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),page_id);
var block_eids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms);
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,block_eids);
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_page_blocks_no_cache.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_page_blocks_count = (function frontend$db$model$get_page_blocks_count(repo,page_id){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return cljs.core.count(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),page_id));
} else {
return null;
}
});
/**
 * Whether a page exists.
 */
frontend.db.model.page_exists_QMARK_ = (function frontend$db$model$page_exists_QMARK_(page_name){
if(cljs.core.truth_(page_name)){
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null));
} else {
return null;
}
});
/**
 * Whether a page is empty. Does it has a non-page block?
 *   `page-id` could be either a string or a db/id.
 */
frontend.db.model.page_empty_QMARK_ = (function frontend$db$model$page_empty_QMARK_(repo,page_id){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var page_id__$1 = ((typeof page_id === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page_id)], null):page_id);
var page = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,page_id__$1) : datascript.core.entity.call(null,db,page_id__$1));
return (new cljs.core.Keyword("block","_left","block/_left",865231986).cljs$core$IFn$_invoke$arity$1(page) == null);
} else {
return null;
}
});
frontend.db.model.page_empty_or_dummy_QMARK_ = (function frontend$db$model$page_empty_or_dummy_QMARK_(repo,page_id){
var or__4253__auto__ = frontend.db.model.page_empty_QMARK_(repo,page_id);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),page_id);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(datoms),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)))))));
} else {
return null;
}
}
});
frontend.db.model.parents_collapsed_QMARK_ = (function frontend$db$model$parents_collapsed_QMARK_(repo,block_id){
var temp__5720__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_block_parents_v2(repo,block_id));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return cljs.core.some(frontend.util.collapsed_QMARK_,cljs.core.tree_seq(cljs.core.map_QMARK_,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(x)], null);
}),block));
} else {
return null;
}
});
frontend.db.model.block_collapsed_QMARK_ = (function frontend$db$model$block_collapsed_QMARK_(var_args){
var G__77097 = arguments.length;
switch (G__77097) {
case 1:
return frontend.db.model.block_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.block_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.block_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.db.model.block_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),block_id);
}));

(frontend.db.model.block_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (repo,block_id){
var temp__5720__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return frontend.util.collapsed_QMARK_(block);
} else {
return null;
}
}));

(frontend.db.model.block_collapsed_QMARK_.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_block_page = (function frontend$db$model$get_block_page(repo,block_id){
var temp__5720__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
} else {
return null;
}
});
frontend.db.model.get_pages_by_name_partition = (function frontend$db$model$get_pages_by_name_partition(repo,partition){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
if(clojure.string.blank_QMARK_(partition)){
return null;
} else {
var partition__$1 = (function (){var G__77098 = clojure.string.trim(partition);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__77098) : frontend.util.page_name_sanity_lc.call(null,G__77098));
})();
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (datom){
var page = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
return clojure.string.includes_QMARK_(page,partition__$1);
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword("block","name","block/name",1619760316))));
if(cljs.core.seq(ids)){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),ids);
} else {
return null;
}
}
} else {
return null;
}
});
frontend.db.model.get_block_children_ids = (function frontend$db$model$get_block_children_ids(repo,block_uuid){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__77099 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
var G__77100 = db;
var G__77101 = eid;
var G__77102 = frontend.db.rules.rules;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__77099,G__77100,G__77101,G__77102) : datascript.core.q.call(null,G__77099,G__77100,G__77101,G__77102));
})());
} else {
return null;
}
});
/**
 * Doesn't include nested children.
 */
frontend.db.model.get_block_immediate_children = (function frontend$db$model$get_block_immediate_children(repo,block_uuid){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2((function (){var G__77103 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?parent-id","?parent-id",-276669426,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?parent-id","?parent-id",-276669426,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null)], null)], null);
var G__77104 = db;
var G__77105 = block_uuid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77103,G__77104,G__77105) : datascript.core.q.call(null,G__77103,G__77104,G__77105));
})(),frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)));
} else {
return null;
}
});
/**
 * Doesn't include nested children.
 */
frontend.db.model.sub_block_direct_children = (function frontend$db$model$sub_block_direct_children(repo,block_uuid){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","block-direct-children","frontend.db.react/block-direct-children",94659787),block_uuid], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?parent-id","?parent-id",-276669426,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?parent-id","?parent-id",-276669426,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_uuid], 0))),frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)));
} else {
return null;
}
});
/**
 * Including nested children.
 */
frontend.db.model.get_block_children = (function frontend$db$model$get_block_children(repo,block_uuid){
var ids = frontend.db.model.get_block_children_ids(repo,block_uuid);
var ids__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),ids);
if(cljs.core.seq(ids__$1)){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),ids__$1);
} else {
return null;
}
});
frontend.db.model.flatten_tree = (function frontend$db$model$flatten_tree(blocks_tree){
var temp__5718__auto__ = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(blocks_tree);
if(cljs.core.truth_(temp__5718__auto__)){
var children = temp__5718__auto__;
return cljs.core.cons(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(blocks_tree,new cljs.core.Keyword("block","_parent","block/_parent",-639389670)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.db.model.flatten_tree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks_tree], null);
}
});
frontend.db.model.get_block_and_children = (function frontend$db$model$get_block_and_children(repo,block_uuid){
var G__77106 = (function (){var G__77107 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
var G__77108 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__77109 = block_uuid;
var G__77110 = frontend.db.model.block_attrs;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__77107,G__77108,G__77109,G__77110) : datascript.core.q.call(null,G__77107,G__77108,G__77109,G__77110));
})();
var G__77106__$1 = (((G__77106 == null))?null:cljs.core.first(G__77106));
if((G__77106__$1 == null)){
return null;
} else {
return frontend.db.model.flatten_tree(G__77106__$1);
}
});
frontend.db.model.get_file_page = (function frontend$db$model$get_file_page(var_args){
var G__77112 = arguments.length;
switch (G__77112) {
case 1:
return frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$1 = (function (file_path){
return frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$2(file_path,true);
}));

(frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$2 = (function (file_path,original_name_QMARK_){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto____$1)){
var db = temp__5720__auto____$1;
var G__77113 = (function (){var G__77114 = (cljs.core.truth_(original_name_QMARK_)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null)], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null)], null));
var G__77115 = db;
var G__77116 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77114,G__77115,G__77116) : datascript.core.q.call(null,G__77114,G__77115,G__77116));
})();
var G__77113__$1 = (((G__77113 == null))?null:frontend.db.utils.seq_flatten(G__77113));
if((G__77113__$1 == null)){
return null;
} else {
return cljs.core.first(G__77113__$1);
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_file_page.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_file = (function frontend$db$model$get_page_file(var_args){
var G__77118 = arguments.length;
switch (G__77118) {
case 1:
return frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
return frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),page_name);
}));

(frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$2 = (function (repo,page_name){
var G__77119 = (function (){var or__4253__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),page_name], null));
}
})();
if((G__77119 == null)){
return null;
} else {
return new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(G__77119);
}
}));

(frontend.db.model.get_page_file.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_block_file_path = (function frontend$db$model$get_block_file_path(block){
var temp__5720__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5720__auto__)){
var page_id = temp__5720__auto__;
return new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(page_id)));
} else {
return null;
}
});
frontend.db.model.get_file_page_id = (function frontend$db$model$get_file_page_id(file_path){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto____$1)){
var db = temp__5720__auto____$1;
var G__77120 = (function (){var G__77121 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null)], null);
var G__77122 = db;
var G__77123 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77121,G__77122,G__77123) : datascript.core.q.call(null,G__77121,G__77122,G__77123));
})();
var G__77120__$1 = (((G__77120 == null))?null:frontend.db.utils.seq_flatten(G__77120));
if((G__77120__$1 == null)){
return null;
} else {
return cljs.core.first(G__77120__$1);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_page = (function frontend$db$model$get_page(page_name){
if(cljs.core.truth_(frontend.util.uuid_string_QMARK_(page_name))){
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(page_name)], null));
} else {
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null));
}
});
/**
 * Given any readable page-name, return the exact page-name in db. If page
 * doesn't exists yet, will return the passed `page-name`. Accepts both
 * sanitized or unsanitized names.
 * alias?: if true, alias is allowed to be returned; otherwise, it would be deref.
 */
frontend.db.model.get_redirect_page_name = (function frontend$db$model$get_redirect_page_name(var_args){
var G__77125 = arguments.length;
switch (G__77125) {
case 1:
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2(page_name,false);
}));

(frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2 = (function (page_name,alias_QMARK_){
if(cljs.core.truth_(page_name)){
var page_name_SINGLEQUOTE_ = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var page_entity = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name_SINGLEQUOTE_], null));
if(cljs.core.truth_(alias_QMARK_)){
return page_name_SINGLEQUOTE_;
} else {
if((page_entity == null)){
return page_name;
} else {
if(cljs.core.truth_(frontend.db.model.page_empty_or_dummy_QMARK_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity)))){
var source_page = frontend.db.model.get_alias_source_page(frontend.state.get_current_repo(),page_name_SINGLEQUOTE_);
var or__4253__auto__ = (cljs.core.truth_(source_page)?new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(source_page):null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return page_name_SINGLEQUOTE_;
}
} else {
return page_name_SINGLEQUOTE_;

}
}
}
} else {
return null;
}
}));

(frontend.db.model.get_redirect_page_name.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_original_name = (function frontend$db$model$get_page_original_name(page_name){
if(typeof page_name === 'string'){
var page = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null));
var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
} else {
return null;
}
});
frontend.db.model.get_journals_length = (function frontend$db$model$get_journals_length(){
var today = frontend.db.utils.date__GT_int((new Date()));
var G__77126 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null))], null)], null);
var G__77127 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
var G__77128 = today;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77126,G__77127,G__77128) : datascript.core.q.call(null,G__77126,G__77127,G__77128));
});
frontend.db.model.get_latest_journals = (function frontend$db$model$get_latest_journals(var_args){
var G__77130 = arguments.length;
switch (G__77130) {
case 1:
return frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$1 = (function (n){
return frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),n);
}));

(frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,n){
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url))){
var date = (new Date());
var _ = date.setDate((date.getDate() - (n - (1))));
var today = frontend.db.utils.date__GT_int((new Date()));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","journals","frontend.db.react/journals",-1864001064)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([today], 0))))));
} else {
return null;
}
}));

(frontend.db.model.get_latest_journals.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_referenced_pages = (function frontend$db$model$get_page_referenced_pages(repo,page){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var page_name = frontend.util.safe_page_name_sanity_lc(page);
var pages = frontend.db.model.page_alias_set(repo,page);
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null)));
var ref_pages = (function (){var G__77131 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"untuple","untuple",-606149900,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null)], null)], null);
var G__77132 = db;
var G__77133 = pages;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77131,G__77132,G__77133) : datascript.core.q.call(null,G__77131,G__77132,G__77133));
})();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,frontend.db.model.get_page_alias(repo,page__$1)], null);
}),ref_pages);
} else {
return null;
}
});
frontend.db.model.get_page_linked_refs_refed_pages = (function frontend$db$model$get_page_linked_refs_refed_pages(repo,page){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var G__77134 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?other-p","?other-p",-1891084128,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?other-p","?other-p",-1891084128,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?other-p","?other-p",-1891084128,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null)], null);
var G__77135 = db;
var G__77136 = frontend.db.rules.rules;
var G__77137 = frontend.util.safe_page_name_sanity_lc(page);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__77134,G__77135,G__77136,G__77137) : datascript.core.q.call(null,G__77134,G__77135,G__77136,G__77137));
})());
} else {
return null;
}
});
frontend.db.model.get_pages_relation = (function frontend$db$model$get_pages_relation(repo,with_journal_QMARK_){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var q = (cljs.core.truth_(with_journal_QMARK_)?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null)], null)], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null)], null)], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77138){
var vec__77139 = p__77138;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77139,(0),null);
var ref_page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77139,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,ref_page_name], null);
}),(datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(q,db) : datascript.core.q.call(null,q,db)));
} else {
return null;
}
});
frontend.db.model.get_pages_that_mentioned_page = (function frontend$db$model$get_pages_that_mentioned_page(repo,page){
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null)));
var pages = frontend.db.model.page_alias_set(repo,page);
var mentioned_pages = frontend.db.utils.seq_flatten(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","page<-pages","frontend.db.react/page<-pages",-577219055),page_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?mentioned-page-name","?mentioned-page-name",-1771964146,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?mentioned-page","?mentioned-page",116609701,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?mentioned-page","?mentioned-page",116609701,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?mentioned-page-name","?mentioned-page-name",-1771964146,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages,page], 0))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,frontend.db.model.get_page_alias(repo,page__$1)], null);
}),mentioned_pages);
} else {
return null;
}
});
frontend.db.model.get_page_referenced_blocks_no_cache = (function frontend$db$model$get_page_referenced_blocks_no_cache(page_id){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return cljs.core.flatten((function (){var G__77142 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page-id","?page-id",-247711165,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?page-id","?page-id",-247711165,null)], null)], null);
var G__77143 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__77144 = page_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77142,G__77143,G__77144) : datascript.core.q.call(null,G__77142,G__77143,G__77144));
})());
} else {
return null;
}
});
frontend.db.model.get_page_referenced_blocks = (function frontend$db$model$get_page_referenced_blocks(var_args){
var G__77146 = arguments.length;
switch (G__77146) {
case 1:
return frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1 = (function (page){
return frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),page);
}));

(frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$2 = (function (repo,page){
if(cljs.core.truth_(repo)){
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null)));
var pages = frontend.db.model.page_alias_set(repo,page);
var aliases = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pages,cljs.core.PersistentHashSet.createAsIfByAssoc([page_id]));
var query_result = frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","page<-blocks-or-block<-blocks","frontend.db.react/page<-blocks-or-block<-blocks",-1997031897),page_id], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages,cljs.core.butlast(frontend.db.model.block_attrs)], 0));
var result = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77147){
var vec__77148 = p__77147;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77148,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77148,(1),null);
var k__$1 = ((cljs.core.contains_QMARK_(aliases,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(k)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(k,new cljs.core.Keyword("block","alias?","block/alias?",-551896044),true):k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,blocks], null);
}),frontend.db.utils.group_by_page(frontend.db.model.sort_by_left_recursive(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
}),frontend.util.react(query_result)))));
return result;
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_page_referenced_blocks.cljs$lang$maxFixedArity = 2);

/**
 * Faster and can be used for pagination later.
 */
frontend.db.model.get_page_referenced_blocks_ids = (function frontend$db$model$get_page_referenced_blocks_ids(var_args){
var G__77152 = arguments.length;
switch (G__77152) {
case 1:
return frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$1 = (function (page){
return frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),page);
}));

(frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$2 = (function (repo,page){
if(cljs.core.truth_(repo)){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var pages = frontend.db.model.page_alias_set(repo,page);
var G__77153 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null)], null);
var G__77154 = db;
var G__77155 = pages;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77153,G__77154,G__77155) : datascript.core.q.call(null,G__77153,G__77154,G__77155));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_page_referenced_blocks_ids.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_date_scheduled_or_deadlines = (function frontend$db$model$get_date_scheduled_or_deadlines(journal_title){
var temp__5720__auto__ = frontend.date.journal_title__GT_int(journal_title);
if(cljs.core.truth_(temp__5720__auto__)){
var date = temp__5720__auto__;
var future_days = frontend.state.get_scheduled_future_days();
var temp__5720__auto____$1 = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto____$1)){
var repo = temp__5720__auto____$1;
return frontend.db.utils.group_by_page(frontend.db.model.sort_by_left_recursive(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom","custom",340151948),new cljs.core.Keyword(null,"scheduled-deadline","scheduled-deadline",915680828),journal_title], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?day","?day",686036275,null),new cljs.core.Symbol(null,"?future","?future",1027205190,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","scheduled","block/scheduled",584810412),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","deadline","block/deadline",660945231),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799),false),new cljs.core.Symbol(null,"?repeated","?repeated",449465208,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","marker","block/marker",1231576318),"NIL"),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null),"DONE")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null),"CANCELED")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null),"CANCELLED")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?future","?future",1027205190,null))], null),cljs.core.list(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?repeated","?repeated",449465208,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?day","?day",686036275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"?repeated","?repeated",449465208,null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?day","?day",686036275,null))], null))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([date,(date + future_days),frontend.db.model.block_attrs], 0)))));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.pattern = (function frontend$db$model$pattern(name){
return cljs.core.re_pattern(["(?i)(^|[^\\[#0-9a-zA-Z]|((^|[^\\[])\\[))",frontend.util.regex_escape(name),"($|[^0-9a-zA-Z])"].join(''));
});
frontend.db.model.get_page_unlinked_references = (function frontend$db$model$get_page_unlinked_references(page){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var page__$1 = frontend.util.safe_page_name_sanity_lc(page);
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page__$1], null)));
var alias_names = frontend.db.model.get_page_alias_names(repo,page__$1);
var patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.db.model.pattern,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(alias_names,page__$1));
var filter_fn = (function (datom){
return cljs.core.some((function (p){
return cljs.core.re_find(p,frontend.util.drawer.remove_logbook(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)));
}),patterns);
});
return frontend.db.utils.group_by_page(frontend.db.model.sort_by_left_recursive(frontend.util.react(frontend.db.react.q(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","page-unlinked-refs","frontend.db.react/page-unlinked-refs",2088680220),page_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),(function (db,_tx_report,_result){
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword("block","content","block/content",-161885195))));
var result = (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(db,frontend.db.model.block_attrs,ids) : datascript.core.pull_many.call(null,db,frontend.db.model.block_attrs,ids));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
}),result);
})], null),null))));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_block_referenced_blocks = (function frontend$db$model$get_block_referenced_blocks(block_uuid){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var block = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null));
return frontend.db.utils.group_by_page(frontend.db.model.sort_by_left_recursive(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","page<-blocks-or-block<-blocks","frontend.db.react/page<-blocks-or-block<-blocks",-1997031897),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?ref-block","?ref-block",1202355574,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block-uuid","?block-uuid",1931397442,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?block-uuid","?block-uuid",1931397442,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-block","?ref-block",1202355574,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?block","?block",1541466123,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_uuid,frontend.db.model.block_attrs], 0)))));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_block_referenced_blocks_ids = (function frontend$db$model$get_block_referenced_blocks_ids(block_uuid){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var block = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null));
return frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","block<-block-ids","frontend.db.react/block<-block-ids",562274831),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ref-block","?ref-block",1202355574,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block-uuid","?block-uuid",1931397442,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?block-uuid","?block-uuid",1931397442,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-block","?ref-block",1202355574,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?block","?block",1541466123,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_uuid,frontend.db.model.block_attrs], 0)));
} else {
return null;
}
});
frontend.db.model.get_referenced_blocks_ids = (function frontend$db$model$get_referenced_blocks_ids(page_name_or_block_uuid){
if(cljs.core.truth_(frontend.util.uuid_string_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name_or_block_uuid)))){
var id = cljs.core.uuid(page_name_or_block_uuid);
return frontend.db.model.get_block_referenced_blocks_ids(id);
} else {
return frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$1(page_name_or_block_uuid);
}
});
frontend.db.model.get_matched_blocks = (function frontend$db$model$get_matched_blocks(match_fn,limit){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var pred = (function (_db,content){
return (match_fn.cljs$core$IFn$_invoke$arity$1 ? match_fn.cljs$core$IFn$_invoke$arity$1(content) : match_fn.call(null,content));
});
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316)], null)], null)], null),frontend.db.utils.seq_flatten(cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,(function (){var G__77156 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?content","?content",-956653715,null))], null)], null);
var G__77157 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var G__77158 = pred;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77156,G__77157,G__77158) : datascript.core.q.call(null,G__77156,G__77157,G__77158));
})())));
} else {
return null;
}
});
frontend.db.model.get_blocks_contents = (function frontend$db$model$get_blocks_contents(repo,block_uuids){
var db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","content","block/content",-161885195)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_uuids));
});
/**
 * sanitized page-name only
 */
frontend.db.model.journal_page_QMARK_ = (function frontend$db$model$journal_page_QMARK_(page_name){
return new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null)));
});
frontend.db.model.get_db_type = (function frontend$db$model$get_db_type(repo){
return frontend.db.utils.get_key_value.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword("db","type","db/type",1174271242));
});
frontend.db.model.get_public_pages = (function frontend$db$model$get_public_pages(db){
return frontend.db.utils.seq_flatten((function (){var G__77159 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"public","public",1566243851)),new cljs.core.Symbol(null,"?pub","?pub",-221826138,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,new cljs.core.Symbol(null,"?pub","?pub",-221826138,null))], null)], null);
var G__77160 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__77159,G__77160) : datascript.core.q.call(null,G__77159,G__77160));
})());
});
frontend.db.model.get_public_false_pages = (function frontend$db$model$get_public_false_pages(db){
return frontend.db.utils.seq_flatten((function (){var G__77161 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"public","public",1566243851)),new cljs.core.Symbol(null,"?pub","?pub",-221826138,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,new cljs.core.Symbol(null,"?pub","?pub",-221826138,null))], null)], null);
var G__77162 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__77161,G__77162) : datascript.core.q.call(null,G__77161,G__77162));
})());
});
frontend.db.model.get_public_false_block_ids = (function frontend$db$model$get_public_false_block_ids(db){
return frontend.db.utils.seq_flatten((function (){var G__77163 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"public","public",1566243851)),new cljs.core.Symbol(null,"?pub","?pub",-221826138,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,new cljs.core.Symbol(null,"?pub","?pub",-221826138,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null);
var G__77164 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__77163,G__77164) : datascript.core.q.call(null,G__77163,G__77164));
})());
});
frontend.db.model.get_all_templates = (function frontend$db$model$get_all_templates(){
var pred = (function (_db,properties){
return (!((new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(properties) == null)));
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77165){
var vec__77166 = p__77165;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77166,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77166,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"template","template",-702405684)),e], null);
}),(function (){var G__77169 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null))], null)], null);
var G__77170 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var G__77171 = pred;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77169,G__77170,G__77171) : datascript.core.q.call(null,G__77169,G__77170,G__77171));
})()));
});
frontend.db.model.get_template_by_name = (function frontend$db$model$get_template_by_name(name){
if(typeof name === 'string'){
return cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),(function (){var G__77172 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"template","template",-702405684)),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null))], null)], null);
var G__77173 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var G__77174 = name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77172,G__77173,G__77174) : datascript.core.q.call(null,G__77172,G__77173,G__77174));
})()));
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.model !== 'undefined') && (typeof frontend.db.model.blocks_count_cache !== 'undefined')){
} else {
frontend.db.model.blocks_count_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.db.model.blocks_count = (function frontend$db$model$blocks_count(var_args){
var G__77176 = arguments.length;
switch (G__77176) {
case 0:
return frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$1 = (function (cache_QMARK_){
if(cljs.core.truth_((function (){var and__4251__auto__ = cache_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(frontend.db.model.blocks_count_cache);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.deref(frontend.db.model.blocks_count_cache);
} else {
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var n = cljs.core.count(datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)));
cljs.core.reset_BANG_(frontend.db.model.blocks_count_cache,n);

return n;
} else {
return null;
}
}
}));

(frontend.db.model.blocks_count.cljs$lang$maxFixedArity = 1);

frontend.db.model.get_all_block_contents = (function frontend$db$model$get_all_block_contents(){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var e = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null));
if(((cljs.core.not(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(e))) && ((!(clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(e))))))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id,new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(e)),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(e)], null);
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)))));
} else {
return null;
}
});
frontend.db.model.get_assets = (function frontend$db$model$get_assets(datoms){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (datom){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom))){
var matched = cljs.core.re_seq(/\([.\/]*\/assets\/([^)]+)\)/,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom));
var matched__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,matched),(0));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(matched__$1,(1));
if(((typeof path === 'string') && ((!(clojure.string.ends_with_QMARK_(path,".js")))))){
return path;
} else {
return null;
}
} else {
return null;
}
}),datoms);
});
frontend.db.model.clean_export_BANG_ = (function frontend$db$model$clean_export_BANG_(db){
var remove_QMARK_ = (function (p1__77177_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["file",null,"recent",null,"me",null], null), null),p1__77177_SHARP_);
});
var non_public_pages = frontend.db.model.get_public_false_pages(db);
var non_public_datoms = frontend.db.model.get_public_false_block_ids(db);
var non_public_datom_ids = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(non_public_pages,non_public_datoms));
var filtered_db = datascript.core.filter(db,(function (_db,datom){
var ns = cljs.core.namespace(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom));
return (((!(remove_QMARK_(ns)))) && ((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),null], null), null),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom))))) && ((!(cljs.core.contains_QMARK_(non_public_datom_ids,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom))))))));
}));
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(filtered_db,new cljs.core.Keyword(null,"eavt","eavt",-666437073));
var assets = frontend.db.model.get_assets(datoms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2(datoms,frontend.db_schema.schema)),assets], null);
});
frontend.db.model.filter_only_public_pages_and_blocks = (function frontend$db$model$filter_only_public_pages_and_blocks(db){
var public_pages = frontend.db.model.get_public_pages(db);
if(cljs.core.seq(public_pages)){
var public_pages__$1 = cljs.core.set(public_pages);
var exported_namespace_QMARK_ = (function (p1__77178_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["block",null,"recent",null,"me",null], null), null),p1__77178_SHARP_);
});
var filtered_db = datascript.core.filter(db,(function (db__$1,datom){
var ns = cljs.core.namespace(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom));
return (((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),null], null), null),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom))))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ns,"file")) && ((((!(exported_namespace_QMARK_(ns)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,"block")) && (((cljs.core.contains_QMARK_(public_pages__$1,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom))) || (cljs.core.contains_QMARK_(public_pages__$1,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__77179 = db__$1;
var G__77180 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__77179,G__77180) : datascript.core.entity.call(null,G__77179,G__77180));
})())))))))))))));
}));
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(filtered_db,new cljs.core.Keyword(null,"eavt","eavt",-666437073));
var assets = frontend.db.model.get_assets(datoms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2(datoms,frontend.db_schema.schema)),assets], null);
} else {
return null;
}
});
frontend.db.model.delete_blocks = (function frontend$db$model$delete_blocks(repo_url,files,_delete_page_QMARK_){
if(cljs.core.seq(files)){
var blocks = frontend.db.model.get_files_blocks(repo_url,files);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),eid], null);
}),blocks);
} else {
return null;
}
});
frontend.db.model.delete_files = (function frontend$db$model$delete_files(files){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null)], null);
}),files);
});
frontend.db.model.delete_file_blocks_BANG_ = (function frontend$db$model$delete_file_blocks_BANG_(repo_url,path){
var blocks = frontend.db.model.get_file_blocks(repo_url,path);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),eid], null);
}),blocks);
});
frontend.db.model.delete_page_blocks = (function frontend$db$model$delete_page_blocks(repo_url,page){
if(cljs.core.truth_(page)){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var page__$1 = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null));
if(cljs.core.truth_(page__$1)){
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1));
var block_eids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),eid], null);
}),block_eids);
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
frontend.db.model.delete_file_pages_BANG_ = (function frontend$db$model$delete_file_pages_BANG_(repo_url,path){
var pages = frontend.db.model.get_file_pages(repo_url,path);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),eid], null);
}),pages);
});
frontend.db.model.delete_file_tx = (function frontend$db$model$delete_file_tx(repo_url,file_path){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(frontend.db.model.delete_file_blocks_BANG_(repo_url,file_path),frontend.db.model.delete_file_pages_BANG_(repo_url,file_path),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),file_path], null)], null)], null)], 0)));
});
frontend.db.model.delete_file_BANG_ = (function frontend$db$model$delete_file_BANG_(repo_url,file_path){
return frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$2(repo_url,frontend.db.model.delete_file_tx(repo_url,file_path));
});
frontend.db.model.delete_pages_by_files = (function frontend$db$model$delete_pages_by_files(files){
var pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.db.model.get_file_page,files));
if(cljs.core.seq(pages)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page], null)], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc,pages));
} else {
return null;
}
});
frontend.db.model.set_file_content_BANG_ = (function frontend$db$model$set_file_content_BANG_(repo,path,content){
if(cljs.core.truth_((function (){var and__4251__auto__ = repo;
if(cljs.core.truth_(and__4251__auto__)){
return path;
} else {
return and__4251__auto__;
}
})())){
var tx_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","content","file/content",12680964),content], null);
return frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-refresh?","skip-refresh?",878432095),true], null));
} else {
return null;
}
});
frontend.db.model.get_pre_block = (function frontend$db$model$get_pre_block(repo,page_id){
return cljs.core.ffirst((function (){var G__77181 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),true], null)], null);
var G__77182 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__77183 = page_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77181,G__77182,G__77183) : datascript.core.q.call(null,G__77181,G__77182,G__77183));
})());
});
/**
 * Accepts both sanitized and unsanitized namespaces
 */
frontend.db.model.get_namespace_pages = (function frontend$db$model$get_namespace_pages(repo,namespace){
if(typeof namespace === 'string'){
} else {
throw (new Error("Assert failed: (string? namespace)"));
}

var namespace__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(namespace) : frontend.util.page_name_sanity_lc.call(null,namespace));
var G__77184 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?namespace","?namespace",567450183,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?namespace","?namespace",567450183,null)], null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?c","?c",870679775,null))], null);
var G__77185 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__77186 = frontend.db.rules.rules;
var G__77187 = namespace__$1;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__77184,G__77185,G__77186,G__77187) : datascript.core.q.call(null,G__77184,G__77185,G__77186,G__77187));
});
frontend.db.model.tree = (function frontend$db$model$tree(flat_col,root){
var sort_fn = (function (p1__77188_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),p1__77188_SHARP_);
});
var children = cljs.core.group_by(new cljs.core.Keyword("block","namespace","block/namespace",-282500695),flat_col);
var namespace_children = (function frontend$db$model$tree_$_namespace_children(parent_id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("namespace","children","namespace/children",-2095628387),sort_fn(frontend$db$model$tree_$_namespace_children(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(m)], null))));
}),sort_fn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(children,parent_id)));
});
return namespace_children(root);
});
/**
 * Unsanitized namespaces
 */
frontend.db.model.get_namespace_hierarchy = (function frontend$db$model$get_namespace_hierarchy(repo,namespace){
var children = frontend.db.model.get_namespace_pages(repo,namespace);
var namespace_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(namespace) : frontend.util.page_name_sanity_lc.call(null,namespace))], null)));
var root = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),namespace_id], null);
var col = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,root);
return frontend.db.model.tree(col,root);
});
frontend.db.model.get_page_namespace = (function frontend$db$model$get_page_namespace(repo,page){
return new cljs.core.Keyword("block","namespace","block/namespace",-282500695).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null)));
});
frontend.db.model.get_page_namespace_routes = (function frontend$db$model$get_page_namespace_routes(repo,page){
if(typeof page === 'string'){
} else {
throw (new Error("Assert failed: (string? page)"));
}

var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
if(clojure.string.blank_QMARK_(page)){
return null;
} else {
var page__$1 = (function (){var G__77189 = clojure.string.trim(page);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__77189) : frontend.util.page_name_sanity_lc.call(null,G__77189));
})();
var page_exist_QMARK_ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page__$1], null));
var ids = (cljs.core.truth_(page_exist_QMARK_)?cljs.core.List.EMPTY:cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (datom){
return clojure.string.ends_with_QMARK_(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom),["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page__$1)].join(''));
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword("block","name","block/name",1619760316)))));
if(cljs.core.seq(ids)){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null)], null),ids);
} else {
return null;
}
}
} else {
return null;
}
});
frontend.db.model.get_orphaned_pages = (function frontend$db$model$get_orphaned_pages(p__77190){
var map__77191 = p__77190;
var map__77191__$1 = cljs.core.__destructure_map(map__77191);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77191__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679),frontend.state.get_current_repo());
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77191__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var empty_ref_f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77191__$1,new cljs.core.Keyword(null,"empty-ref-f","empty-ref-f",666507359),(function (page){
return (cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(page)) === (0));
}));
var pages__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var or__4253__auto__ = pages;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.db.model.get_pages(repo);
}
})());
var built_in_pages = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,frontend.db.default$.built_in_pages_names));
var orphaned_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
var name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page));
var temp__5720__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),name], null));
if(cljs.core.truth_(temp__5720__auto__)){
var page__$1 = temp__5720__auto__;
var and__4251__auto__ = (empty_ref_f.cljs$core$IFn$_invoke$arity$1 ? empty_ref_f.cljs$core$IFn$_invoke$arity$1(page__$1) : empty_ref_f.call(null,page__$1));
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = (function (){var or__4253__auto__ = frontend.db.model.page_empty_QMARK_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var first_child = cljs.core.first(new cljs.core.Keyword("block","_left","block/_left",865231986).cljs$core$IFn$_invoke$arity$1(page__$1));
var children = new cljs.core.Keyword("block","_page","block/_page",1150043350).cljs$core$IFn$_invoke$arity$1(page__$1);
var and__4251__auto____$1 = first_child;
if(cljs.core.truth_(and__4251__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(children))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["",null,"*",null,"-",null], null), null),clojure.string.trim(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(first_child)))));
} else {
return and__4251__auto____$1;
}
}
})();
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = (!(cljs.core.contains_QMARK_(built_in_pages,name)));
if(and__4251__auto____$2){
var and__4251__auto____$3 = cljs.core.not(new cljs.core.Keyword("block","_namespace","block/_namespace",1151541806).cljs$core$IFn$_invoke$arity$1(page__$1));
if(and__4251__auto____$3){
var and__4251__auto____$4 = (!(((clojure.string.includes_QMARK_(name,"/")) && (cljs.core.not(new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(page__$1))))));
if(and__4251__auto____$4){
return page__$1;
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
} else {
return null;
}
}),pages__$1)));
return orphaned_pages;
});

//# sourceMappingURL=frontend.db.model.js.map
