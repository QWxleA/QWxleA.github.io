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
var G__93986 = cljs.core.rest(q);
var G__93987 = cljs.core.rest(s);
var G__93988 = (mult + (1));
var G__93989 = (idx - (1));
var G__93990 = (mult + score);
q = G__93986;
s = G__93987;
mult = G__93988;
idx = G__93989;
score = G__93990;
continue;
} else {
var G__93991 = q;
var G__93992 = cljs.core.rest(s);
var G__93993 = (1);
var G__93994 = (idx - (1));
var G__93995 = score;
q = G__93991;
s = G__93992;
mult = G__93993;
idx = G__93994;
score = G__93995;
continue;
}

}
}
break;
}
});
frontend.search.fuzzy_search = (function frontend$search$fuzzy_search(var_args){
var args__4870__auto__ = [];
var len__4864__auto___93996 = arguments.length;
var i__4865__auto___93997 = (0);
while(true){
if((i__4865__auto___93997 < len__4864__auto___93996)){
args__4870__auto__.push((arguments[i__4865__auto___93997]));

var G__93998 = (i__4865__auto___93997 + (1));
i__4865__auto___93997 = G__93998;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic = (function (data,query,p__93928){
var map__93929 = p__93928;
var map__93929__$1 = cljs.core.__destructure_map(map__93929);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93929__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20));
var extract_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93929__$1,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723));
var query__$1 = frontend.util.search_normalize(query);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.compare),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__93923_SHARP_){
return ((0) < new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__93923_SHARP_));
}),(function (){var iter__4652__auto__ = (function frontend$search$iter__93930(s__93931){
return (new cljs.core.LazySeq(null,(function (){
var s__93931__$1 = s__93931;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__93931__$1);
if(temp__5720__auto__){
var s__93931__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__93931__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__93931__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__93933 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__93932 = (0);
while(true){
if((i__93932 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__93932);
cljs.core.chunk_append(b__93933,(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(extract_fn)?(extract_fn.cljs$core$IFn$_invoke$arity$1 ? extract_fn.cljs$core$IFn$_invoke$arity$1(item) : extract_fn.call(null,item)):item));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),frontend.search.score(query__$1,frontend.util.search_normalize(s))], null);
})());

var G__94002 = (i__93932 + (1));
i__93932 = G__94002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__93933),frontend$search$iter__93930(cljs.core.chunk_rest(s__93931__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__93933),null);
}
} else {
var item = cljs.core.first(s__93931__$2);
return cljs.core.cons((function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(extract_fn)?(extract_fn.cljs$core$IFn$_invoke$arity$1 ? extract_fn.cljs$core$IFn$_invoke$arity$1(item) : extract_fn.call(null,item)):item));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),frontend.search.score(query__$1,frontend.util.search_normalize(s))], null);
})(),frontend$search$iter__93930(cljs.core.rest(s__93931__$2)));
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
(frontend.search.fuzzy_search.cljs$lang$applyTo = (function (seq93924){
var G__93925 = cljs.core.first(seq93924);
var seq93924__$1 = cljs.core.next(seq93924);
var G__93926 = cljs.core.first(seq93924__$1);
var seq93924__$2 = cljs.core.next(seq93924__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__93925,G__93926,seq93924__$2);
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
var coll_SINGLEQUOTE_ = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__93935_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(char$,p1__93935_SHARP_);
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
var G__93942 = arguments.length;
switch (G__93942) {
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
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__93948){
var map__93949 = p__93948;
var map__93949__$1 = cljs.core.__destructure_map(map__93949);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93949__$1,new cljs.core.Keyword(null,"item","item",249373802));
return new cljs.core.Keyword(null,"original-name","original-name",-1427702839).cljs$core$IFn$_invoke$arity$1(item);
}),result)))));
}
} else {
return null;
}
}));

(frontend.search.page_search.cljs$lang$maxFixedArity = 2);

frontend.search.file_search = (function frontend$search$file_search(var_args){
var G__93954 = arguments.length;
switch (G__93954) {
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
var mldoc_exts = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,frontend.config.mldoc_support_formats));
var files = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (file){
var G__93955 = frontend.util.get_file_ext(file);
return (mldoc_exts.cljs$core$IFn$_invoke$arity$1 ? mldoc_exts.cljs$core$IFn$_invoke$arity$1(G__93955) : mldoc_exts.call(null,G__93955));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__93956 = frontend.state.get_current_repo();
return (frontend.db.get_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files.cljs$core$IFn$_invoke$arity$1(G__93956) : frontend.db.get_files.call(null,G__93956));
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
var G__93958 = arguments.length;
switch (G__93958) {
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
var pages_result_94006 = (function (){var G__93959 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null);
var G__93960 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),pages));
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2(G__93959,G__93960) : frontend.db.pull_many.call(null,G__93959,G__93960));
})();
var pages_to_add_set_94007 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),pages)));
var pages_to_add_94008 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.original_page_name__GT_index,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p);
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (page){
return cljs.core.contains_QMARK_(pages_to_add_set_94007,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page));
}),pages_result_94006)));
var pages_to_remove_set_94009 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),pages));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"pages","pages",-285406513)], null),(function (indice){
if(cljs.core.truth_(indice)){
var seq__93961_94010 = cljs.core.seq(pages_to_remove_set_94009);
var chunk__93962_94011 = null;
var count__93963_94012 = (0);
var i__93964_94013 = (0);
while(true){
if((i__93964_94013 < count__93963_94012)){
var page_name_94014 = chunk__93962_94011.cljs$core$IIndexed$_nth$arity$2(null,i__93964_94013);
indice.remove(((function (seq__93961_94010,chunk__93962_94011,count__93963_94012,i__93964_94013,page_name_94014,pages_result_94006,pages_to_add_set_94007,pages_to_add_94008,pages_to_remove_set_94009,datoms__$1,pages,blocks,repo,temp__5720__auto__){
return (function (page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc(page_name_94014),frontend.util.safe_page_name_sanity_lc(frontend.search.goog$module$goog$object.get(page,"original-name")));
});})(seq__93961_94010,chunk__93962_94011,count__93963_94012,i__93964_94013,page_name_94014,pages_result_94006,pages_to_add_set_94007,pages_to_add_94008,pages_to_remove_set_94009,datoms__$1,pages,blocks,repo,temp__5720__auto__))
);


var G__94015 = seq__93961_94010;
var G__94016 = chunk__93962_94011;
var G__94017 = count__93963_94012;
var G__94018 = (i__93964_94013 + (1));
seq__93961_94010 = G__94015;
chunk__93962_94011 = G__94016;
count__93963_94012 = G__94017;
i__93964_94013 = G__94018;
continue;
} else {
var temp__5720__auto___94019__$1 = cljs.core.seq(seq__93961_94010);
if(temp__5720__auto___94019__$1){
var seq__93961_94020__$1 = temp__5720__auto___94019__$1;
if(cljs.core.chunked_seq_QMARK_(seq__93961_94020__$1)){
var c__4679__auto___94021 = cljs.core.chunk_first(seq__93961_94020__$1);
var G__94022 = cljs.core.chunk_rest(seq__93961_94020__$1);
var G__94023 = c__4679__auto___94021;
var G__94024 = cljs.core.count(c__4679__auto___94021);
var G__94025 = (0);
seq__93961_94010 = G__94022;
chunk__93962_94011 = G__94023;
count__93963_94012 = G__94024;
i__93964_94013 = G__94025;
continue;
} else {
var page_name_94026 = cljs.core.first(seq__93961_94020__$1);
indice.remove(((function (seq__93961_94010,chunk__93962_94011,count__93963_94012,i__93964_94013,page_name_94026,seq__93961_94020__$1,temp__5720__auto___94019__$1,pages_result_94006,pages_to_add_set_94007,pages_to_add_94008,pages_to_remove_set_94009,datoms__$1,pages,blocks,repo,temp__5720__auto__){
return (function (page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc(page_name_94026),frontend.util.safe_page_name_sanity_lc(frontend.search.goog$module$goog$object.get(page,"original-name")));
});})(seq__93961_94010,chunk__93962_94011,count__93963_94012,i__93964_94013,page_name_94026,seq__93961_94020__$1,temp__5720__auto___94019__$1,pages_result_94006,pages_to_add_set_94007,pages_to_add_94008,pages_to_remove_set_94009,datoms__$1,pages,blocks,repo,temp__5720__auto__))
);


var G__94027 = cljs.core.next(seq__93961_94020__$1);
var G__94028 = null;
var G__94029 = (0);
var G__94030 = (0);
seq__93961_94010 = G__94027;
chunk__93962_94011 = G__94028;
count__93963_94012 = G__94029;
i__93964_94013 = G__94030;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(pages_to_add_94008)){
var seq__93971_94031 = cljs.core.seq(pages_to_add_94008);
var chunk__93972_94032 = null;
var count__93973_94033 = (0);
var i__93974_94034 = (0);
while(true){
if((i__93974_94034 < count__93973_94033)){
var page_94035 = chunk__93972_94032.cljs$core$IIndexed$_nth$arity$2(null,i__93974_94034);
indice.add(cljs_bean.core.__GT_js(page_94035));


var G__94036 = seq__93971_94031;
var G__94037 = chunk__93972_94032;
var G__94038 = count__93973_94033;
var G__94039 = (i__93974_94034 + (1));
seq__93971_94031 = G__94036;
chunk__93972_94032 = G__94037;
count__93973_94033 = G__94038;
i__93974_94034 = G__94039;
continue;
} else {
var temp__5720__auto___94040__$1 = cljs.core.seq(seq__93971_94031);
if(temp__5720__auto___94040__$1){
var seq__93971_94041__$1 = temp__5720__auto___94040__$1;
if(cljs.core.chunked_seq_QMARK_(seq__93971_94041__$1)){
var c__4679__auto___94042 = cljs.core.chunk_first(seq__93971_94041__$1);
var G__94043 = cljs.core.chunk_rest(seq__93971_94041__$1);
var G__94044 = c__4679__auto___94042;
var G__94045 = cljs.core.count(c__4679__auto___94042);
var G__94046 = (0);
seq__93971_94031 = G__94043;
chunk__93972_94032 = G__94044;
count__93973_94033 = G__94045;
i__93974_94034 = G__94046;
continue;
} else {
var page_94047 = cljs.core.first(seq__93971_94041__$1);
indice.add(cljs_bean.core.__GT_js(page_94047));


var G__94048 = cljs.core.next(seq__93971_94041__$1);
var G__94049 = null;
var G__94050 = (0);
var G__94051 = (0);
seq__93971_94031 = G__94048;
chunk__93972_94032 = G__94049;
count__93973_94033 = G__94050;
i__93974_94034 = G__94051;
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
}),(function (){var G__93982 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","page","block/page",822314108)], null);
var G__93983 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),blocks));
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2(G__93982,G__93983) : frontend.db.pull_many.call(null,G__93982,G__93983));
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
var G__93985 = arguments.length;
switch (G__93985) {
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
var temp__5720__auto___94056 = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5720__auto___94056)){
var engine_94057 = temp__5720__auto___94056;
frontend.search.protocol.truncate_blocks_BANG_(engine_94057);
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
