goog.provide('frontend.search');
goog.scope(function(){
  frontend.search.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.search.get_engine = (function frontend$search$get_engine(repo){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.search.node.__GT_Node(repo);
} else {
return frontend.search.browser.__GT_Browser(repo);
}
});
frontend.search.str_len_distance = (function frontend$search$str_len_distance(s1,s2){
var c1 = cljs.core.count(s1);
var c2 = cljs.core.count(s2);
var maxed = (function (){var x__4336__auto__ = c1;
var y__4337__auto__ = c2;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var mined = (function (){var x__4339__auto__ = c1;
var y__4340__auto__ = c2;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
return ((1) - ((maxed - mined) / maxed));
});
frontend.search.MAX_STRING_LENGTH = 1000.0;
frontend.search.clean_str = (function frontend$search$clean_str(s){
return clojure.string.replace(clojure.string.lower_case(s),/[\[ \\\/_\]\(\)]+/,"");
});
frontend.search.escape_str = frontend.regex.escape;
frontend.search.char_array = (function frontend$search$char_array(s){
return cljs_bean.core.__GT_js(cljs.core.seq(s));
});
frontend.search.score = (function frontend$search$score(oquery,ostr){
var query = frontend.search.clean_str(oquery);
var str = frontend.search.clean_str(ostr);
var q = cljs.core.seq(frontend.search.char_array(query));
var s = cljs.core.seq(frontend.search.char_array(str));
var mult = (1);
var idx = frontend.search.MAX_STRING_LENGTH;
var score = (0);
while(true){
if(cljs.core.empty_QMARK_(q)){
return ((score + frontend.search.str_len_distance(query,str)) + ((((0) <= ostr.indexOf(oquery)))?frontend.search.MAX_STRING_LENGTH:(0)));
} else {
if(cljs.core.empty_QMARK_(s)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(q),cljs.core.first(s))){
var G__57446 = cljs.core.rest(q);
var G__57447 = cljs.core.rest(s);
var G__57448 = (mult + (1));
var G__57449 = (idx - (1));
var G__57450 = (mult + score);
q = G__57446;
s = G__57447;
mult = G__57448;
idx = G__57449;
score = G__57450;
continue;
} else {
var G__57451 = q;
var G__57452 = cljs.core.rest(s);
var G__57453 = (1);
var G__57454 = (idx - (1));
var G__57455 = score;
q = G__57451;
s = G__57452;
mult = G__57453;
idx = G__57454;
score = G__57455;
continue;
}

}
}
break;
}
});
frontend.search.fuzzy_search = (function frontend$search$fuzzy_search(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57456 = arguments.length;
var i__4865__auto___57457 = (0);
while(true){
if((i__4865__auto___57457 < len__4864__auto___57456)){
args__4870__auto__.push((arguments[i__4865__auto___57457]));

var G__57458 = (i__4865__auto___57457 + (1));
i__4865__auto___57457 = G__57458;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic = (function (data,query,p__57400){
var map__57401 = p__57400;
var map__57401__$1 = cljs.core.__destructure_map(map__57401);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57401__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20));
var extract_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57401__$1,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723));
var query__$1 = frontend.util.search_normalize(query);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.compare),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57392_SHARP_){
return ((0) < new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__57392_SHARP_));
}),(function (){var iter__4652__auto__ = (function frontend$search$iter__57402(s__57403){
return (new cljs.core.LazySeq(null,(function (){
var s__57403__$1 = s__57403;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57403__$1);
if(temp__5720__auto__){
var s__57403__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57403__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__57403__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__57405 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__57404 = (0);
while(true){
if((i__57404 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__57404);
cljs.core.chunk_append(b__57405,(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(extract_fn)?(extract_fn.cljs$core$IFn$_invoke$arity$1 ? extract_fn.cljs$core$IFn$_invoke$arity$1(item) : extract_fn.call(null,item)):item));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),frontend.search.score(query__$1,frontend.util.search_normalize(s))], null);
})());

var G__57482 = (i__57404 + (1));
i__57404 = G__57482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57405),frontend$search$iter__57402(cljs.core.chunk_rest(s__57403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57405),null);
}
} else {
var item = cljs.core.first(s__57403__$2);
return cljs.core.cons((function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(extract_fn)?(extract_fn.cljs$core$IFn$_invoke$arity$1 ? extract_fn.cljs$core$IFn$_invoke$arity$1(item) : extract_fn.call(null,item)):item));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),frontend.search.score(query__$1,frontend.util.search_normalize(s))], null);
})(),frontend$search$iter__57402(cljs.core.rest(s__57403__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(data);
})()))));
}));

(frontend.search.fuzzy_search.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.search.fuzzy_search.cljs$lang$applyTo = (function (seq57393){
var G__57394 = cljs.core.first(seq57393);
var seq57393__$1 = cljs.core.next(seq57393);
var G__57395 = cljs.core.first(seq57393__$1);
var seq57393__$2 = cljs.core.next(seq57393__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57394,G__57395,seq57393__$2);
}));

frontend.search.block_search = (function frontend$search$block_search(repo,q,option){
var temp__5720__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var engine = temp__5720__auto__;
var q__$1 = frontend.util.search_normalize(q);
var q__$2 = (cljs.core.truth_(frontend.util.electron_QMARK_())?q__$1:(frontend.search.escape_str.cljs$core$IFn$_invoke$arity$1 ? frontend.search.escape_str.cljs$core$IFn$_invoke$arity$1(q__$1) : frontend.search.escape_str.call(null,q__$1)));
if(clojure.string.blank_QMARK_(q__$2)){
return null;
} else {
return frontend.search.protocol.query(engine,q__$2,option);
}
} else {
return null;
}
});
frontend.search.transact_blocks_BANG_ = (function frontend$search$transact_blocks_BANG_(repo,data){
var temp__5720__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var engine = temp__5720__auto__;
return frontend.search.protocol.transact_blocks_BANG_(engine,data);
} else {
return null;
}
});
/**
 * Check if two strings points toward same search result
 */
frontend.search.exact_matched_QMARK_ = (function frontend$search$exact_matched_QMARK_(q,match){
if(((typeof q === 'string') && (typeof match === 'string'))){
return cljs.core.boolean$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (coll,char$){
var coll_SINGLEQUOTE_ = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__57406_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(char$,p1__57406_SHARP_);
}),coll);
if(cljs.core.seq(coll_SINGLEQUOTE_)){
return cljs.core.rest(coll_SINGLEQUOTE_);
} else {
return cljs.core.reduced(false);
}
}),cljs.core.seq(frontend.util.search_normalize(match)),cljs.core.seq(frontend.util.search_normalize(q))));
} else {
return null;
}
});
/**
 * Return a list of page names that match the query
 */
frontend.search.page_search = (function frontend$search$page_search(var_args){
var G__57408 = arguments.length;
switch (G__57408) {
case 1:
return frontend.search.page_search.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.search.page_search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.search.page_search.cljs$core$IFn$_invoke$arity$1 = (function (q){
return frontend.search.page_search.cljs$core$IFn$_invoke$arity$2(q,(10));
}));

(frontend.search.page_search.cljs$core$IFn$_invoke$arity$2 = (function (q,limit){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var q__$1 = frontend.util.search_normalize(q);
var q__$2 = frontend.search.clean_str(q__$1);
if(clojure.string.blank_QMARK_(q__$2)){
return null;
} else {
var indice = (function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.search.db.indices),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"pages","pages",-285406513)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.search.db.make_pages_indice_BANG_();
}
})();
var result = cljs_bean.core.__GT_clj(indice.search(q__$2,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null))));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (original_name){
return frontend.search.exact_matched_QMARK_(q__$2,original_name);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57409){
var map__57410 = p__57409;
var map__57410__$1 = cljs.core.__destructure_map(map__57410);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57410__$1,new cljs.core.Keyword(null,"item","item",249373802));
return new cljs.core.Keyword(null,"original-name","original-name",-1427702839).cljs$core$IFn$_invoke$arity$1(item);
}),result)))));
}
} else {
return null;
}
}));

(frontend.search.page_search.cljs$lang$maxFixedArity = 2);

frontend.search.file_search = (function frontend$search$file_search(var_args){
var G__57415 = arguments.length;
switch (G__57415) {
case 1:
return frontend.search.file_search.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.search.file_search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.search.file_search.cljs$core$IFn$_invoke$arity$1 = (function (q){
return frontend.search.file_search.cljs$core$IFn$_invoke$arity$2(q,(3));
}));

(frontend.search.file_search.cljs$core$IFn$_invoke$arity$2 = (function (q,limit){
var q__$1 = frontend.search.clean_str(q);
if(clojure.string.blank_QMARK_(q__$1)){
return null;
} else {
var mldoc_exts = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,logseq.graph_parser.config.mldoc_support_formats));
var files = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (file){
var G__57416 = frontend.util.get_file_ext(file);
return (mldoc_exts.cljs$core$IFn$_invoke$arity$1 ? mldoc_exts.cljs$core$IFn$_invoke$arity$1(G__57416) : mldoc_exts.call(null,G__57416));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__57417 = frontend.state.get_current_repo();
return (frontend.db.get_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files.cljs$core$IFn$_invoke$arity$1(G__57417) : frontend.db.get_files.call(null,G__57417));
})()));
if(cljs.core.seq(files)){
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(files,q__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], 0));
} else {
return null;
}
}
}));

(frontend.search.file_search.cljs$lang$maxFixedArity = 2);

frontend.search.template_search = (function frontend$search$template_search(var_args){
var G__57419 = arguments.length;
switch (G__57419) {
case 1:
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.search.template_search.cljs$core$IFn$_invoke$arity$1 = (function (q){
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$2(q,(10));
}));

(frontend.search.template_search.cljs$core$IFn$_invoke$arity$2 = (function (q,limit){
var q__$1 = frontend.search.clean_str(q);
var templates = (frontend.db.get_all_templates.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_all_templates.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_all_templates.call(null));
if(cljs.core.seq(templates)){
var result = frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys(templates),q__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], 0));
return cljs.core.vec(cljs.core.select_keys(templates,result));
} else {
return null;
}
}));

(frontend.search.template_search.cljs$lang$maxFixedArity = 2);

frontend.search.sync_search_indice_BANG_ = (function frontend$search$sync_search_indice_BANG_(datoms){
if(cljs.core.seq(datoms)){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var datoms__$1 = cljs.core.group_by(new cljs.core.Keyword(null,"a","a",-2123407586),datoms);
var pages = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(datoms__$1);
var blocks = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(datoms__$1);
if(cljs.core.seq(pages)){
var pages_result_57495 = (function (){var G__57422 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null);
var G__57423 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),pages));
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2(G__57422,G__57423) : frontend.db.pull_many.call(null,G__57422,G__57423));
})();
var pages_to_add_set_57496 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),pages)));
var pages_to_add_57497 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.original_page_name__GT_index,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p);
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (page){
return cljs.core.contains_QMARK_(pages_to_add_set_57496,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page));
}),pages_result_57495)));
var pages_to_remove_set_57498 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),pages));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"pages","pages",-285406513)], null),(function (indice){
if(cljs.core.truth_(indice)){
var seq__57424_57500 = cljs.core.seq(pages_to_remove_set_57498);
var chunk__57425_57501 = null;
var count__57426_57502 = (0);
var i__57427_57503 = (0);
while(true){
if((i__57427_57503 < count__57426_57502)){
var page_name_57504 = chunk__57425_57501.cljs$core$IIndexed$_nth$arity$2(null,i__57427_57503);
indice.remove(((function (seq__57424_57500,chunk__57425_57501,count__57426_57502,i__57427_57503,page_name_57504,pages_result_57495,pages_to_add_set_57496,pages_to_add_57497,pages_to_remove_set_57498,datoms__$1,pages,blocks,repo,temp__5720__auto__){
return (function (page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc(page_name_57504),frontend.util.safe_page_name_sanity_lc(frontend.search.goog$module$goog$object.get(page,"original-name")));
});})(seq__57424_57500,chunk__57425_57501,count__57426_57502,i__57427_57503,page_name_57504,pages_result_57495,pages_to_add_set_57496,pages_to_add_57497,pages_to_remove_set_57498,datoms__$1,pages,blocks,repo,temp__5720__auto__))
);


var G__57506 = seq__57424_57500;
var G__57507 = chunk__57425_57501;
var G__57508 = count__57426_57502;
var G__57509 = (i__57427_57503 + (1));
seq__57424_57500 = G__57506;
chunk__57425_57501 = G__57507;
count__57426_57502 = G__57508;
i__57427_57503 = G__57509;
continue;
} else {
var temp__5720__auto___57510__$1 = cljs.core.seq(seq__57424_57500);
if(temp__5720__auto___57510__$1){
var seq__57424_57511__$1 = temp__5720__auto___57510__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57424_57511__$1)){
var c__4679__auto___57512 = cljs.core.chunk_first(seq__57424_57511__$1);
var G__57513 = cljs.core.chunk_rest(seq__57424_57511__$1);
var G__57514 = c__4679__auto___57512;
var G__57515 = cljs.core.count(c__4679__auto___57512);
var G__57516 = (0);
seq__57424_57500 = G__57513;
chunk__57425_57501 = G__57514;
count__57426_57502 = G__57515;
i__57427_57503 = G__57516;
continue;
} else {
var page_name_57517 = cljs.core.first(seq__57424_57511__$1);
indice.remove(((function (seq__57424_57500,chunk__57425_57501,count__57426_57502,i__57427_57503,page_name_57517,seq__57424_57511__$1,temp__5720__auto___57510__$1,pages_result_57495,pages_to_add_set_57496,pages_to_add_57497,pages_to_remove_set_57498,datoms__$1,pages,blocks,repo,temp__5720__auto__){
return (function (page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc(page_name_57517),frontend.util.safe_page_name_sanity_lc(frontend.search.goog$module$goog$object.get(page,"original-name")));
});})(seq__57424_57500,chunk__57425_57501,count__57426_57502,i__57427_57503,page_name_57517,seq__57424_57511__$1,temp__5720__auto___57510__$1,pages_result_57495,pages_to_add_set_57496,pages_to_add_57497,pages_to_remove_set_57498,datoms__$1,pages,blocks,repo,temp__5720__auto__))
);


var G__57518 = cljs.core.next(seq__57424_57511__$1);
var G__57519 = null;
var G__57520 = (0);
var G__57521 = (0);
seq__57424_57500 = G__57518;
chunk__57425_57501 = G__57519;
count__57426_57502 = G__57520;
i__57427_57503 = G__57521;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(pages_to_add_57497)){
var seq__57428_57522 = cljs.core.seq(pages_to_add_57497);
var chunk__57429_57523 = null;
var count__57430_57524 = (0);
var i__57431_57525 = (0);
while(true){
if((i__57431_57525 < count__57430_57524)){
var page_57526 = chunk__57429_57523.cljs$core$IIndexed$_nth$arity$2(null,i__57431_57525);
indice.add(cljs_bean.core.__GT_js(page_57526));


var G__57527 = seq__57428_57522;
var G__57528 = chunk__57429_57523;
var G__57529 = count__57430_57524;
var G__57530 = (i__57431_57525 + (1));
seq__57428_57522 = G__57527;
chunk__57429_57523 = G__57528;
count__57430_57524 = G__57529;
i__57431_57525 = G__57530;
continue;
} else {
var temp__5720__auto___57531__$1 = cljs.core.seq(seq__57428_57522);
if(temp__5720__auto___57531__$1){
var seq__57428_57532__$1 = temp__5720__auto___57531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57428_57532__$1)){
var c__4679__auto___57533 = cljs.core.chunk_first(seq__57428_57532__$1);
var G__57534 = cljs.core.chunk_rest(seq__57428_57532__$1);
var G__57535 = c__4679__auto___57533;
var G__57536 = cljs.core.count(c__4679__auto___57533);
var G__57537 = (0);
seq__57428_57522 = G__57534;
chunk__57429_57523 = G__57535;
count__57430_57524 = G__57536;
i__57431_57525 = G__57537;
continue;
} else {
var page_57538 = cljs.core.first(seq__57428_57532__$1);
indice.add(cljs_bean.core.__GT_js(page_57538));


var G__57539 = cljs.core.next(seq__57428_57532__$1);
var G__57540 = null;
var G__57541 = (0);
var G__57542 = (0);
seq__57428_57522 = G__57539;
chunk__57429_57523 = G__57540;
count__57430_57524 = G__57541;
i__57431_57525 = G__57542;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

return indice;
}));
} else {
}

if(cljs.core.seq(blocks)){
var blocks_result = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","page","block/page",822314108),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
}),(function (){var G__57433 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","page","block/page",822314108)], null);
var G__57434 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),blocks));
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2(G__57433,G__57434) : frontend.db.pull_many.call(null,G__57433,G__57434));
})());
var blocks_to_add_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),blocks)));
var blocks_to_add = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.block__GT_index,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.contains_QMARK_(blocks_to_add_set,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
}),blocks_result));
var blocks_to_remove_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),blocks)));
return frontend.search.transact_blocks_BANG_(repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks-to-remove-set","blocks-to-remove-set",266406009),blocks_to_remove_set,new cljs.core.Keyword(null,"blocks-to-add","blocks-to-add",-814061792),blocks_to_add], null));
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
frontend.search.rebuild_indices_BANG_ = (function frontend$search$rebuild_indices_BANG_(var_args){
var G__57437 = arguments.length;
switch (G__57437) {
case 0:
return frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
var temp__5720__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var engine = temp__5720__auto__;
var pages = frontend.search.db.make_pages_indice_BANG_();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.protocol.rebuild_blocks_indice_BANG_(engine),(function (blocks){
return promesa.protocols._promise((function (){var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pages","pages",-285406513),pages,new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.assoc,repo,result);

return frontend.search.db.indices;
})());
}));
}));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.search.rebuild_indices_BANG_.cljs$lang$maxFixedArity = 1);

frontend.search.reset_indice_BANG_ = (function frontend$search$reset_indice_BANG_(repo){
var temp__5720__auto___57550 = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5720__auto___57550)){
var engine_57551 = temp__5720__auto___57550;
frontend.search.protocol.truncate_blocks_BANG_(engine_57551);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"pages","pages",-285406513)], null),null);
});
frontend.search.remove_db_BANG_ = (function frontend$search$remove_db_BANG_(repo){
var temp__5720__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var engine = temp__5720__auto__;
return frontend.search.protocol.remove_db_BANG_(engine);
} else {
return null;
}
});
frontend.search.cache_stale_QMARK_ = (function frontend$search$cache_stale_QMARK_(repo){
var temp__5720__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var engine = temp__5720__auto__;
return frontend.search.protocol.cache_stale_QMARK_(engine,repo);
} else {
return null;
}
});

//# sourceMappingURL=frontend.search.js.map
