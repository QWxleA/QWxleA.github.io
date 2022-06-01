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
var maxed = (function (){var x__5128__auto__ = c1;
var y__5129__auto__ = c2;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var mined = (function (){var x__5131__auto__ = c1;
var y__5132__auto__ = c2;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
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
var G__43899 = cljs.core.rest(q);
var G__43900 = cljs.core.rest(s);
var G__43901 = (mult + (1));
var G__43902 = (idx - (1));
var G__43903 = (mult + score);
q = G__43899;
s = G__43900;
mult = G__43901;
idx = G__43902;
score = G__43903;
continue;
} else {
var G__43904 = q;
var G__43905 = cljs.core.rest(s);
var G__43906 = (1);
var G__43907 = (idx - (1));
var G__43908 = score;
q = G__43904;
s = G__43905;
mult = G__43906;
idx = G__43907;
score = G__43908;
continue;
}

}
}
break;
}
});
frontend.search.fuzzy_search = (function frontend$search$fuzzy_search(var_args){
var args__5772__auto__ = [];
var len__5766__auto___43909 = arguments.length;
var i__5767__auto___43910 = (0);
while(true){
if((i__5767__auto___43910 < len__5766__auto___43909)){
args__5772__auto__.push((arguments[i__5767__auto___43910]));

var G__43911 = (i__5767__auto___43910 + (1));
i__5767__auto___43910 = G__43911;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic = (function (data,query,p__43841){
var map__43842 = p__43841;
var map__43842__$1 = cljs.core.__destructure_map(map__43842);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43842__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20));
var extract_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43842__$1,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723));
var query__$1 = frontend.util.search_normalize(query);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.compare),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43837_SHARP_){
return ((0) < new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__43837_SHARP_));
}),(function (){var iter__5520__auto__ = (function frontend$search$iter__43843(s__43844){
return (new cljs.core.LazySeq(null,(function (){
var s__43844__$1 = s__43844;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__43844__$1);
if(temp__5720__auto__){
var s__43844__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43844__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__43844__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__43846 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__43845 = (0);
while(true){
if((i__43845 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__43845);
cljs.core.chunk_append(b__43846,(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(extract_fn)?(extract_fn.cljs$core$IFn$_invoke$arity$1 ? extract_fn.cljs$core$IFn$_invoke$arity$1(item) : extract_fn.call(null,item)):item));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),frontend.search.score(query__$1,frontend.util.search_normalize(s))], null);
})());

var G__43924 = (i__43845 + (1));
i__43845 = G__43924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43846),frontend$search$iter__43843(cljs.core.chunk_rest(s__43844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43846),null);
}
} else {
var item = cljs.core.first(s__43844__$2);
return cljs.core.cons((function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(extract_fn)?(extract_fn.cljs$core$IFn$_invoke$arity$1 ? extract_fn.cljs$core$IFn$_invoke$arity$1(item) : extract_fn.call(null,item)):item));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),frontend.search.score(query__$1,frontend.util.search_normalize(s))], null);
})(),frontend$search$iter__43843(cljs.core.rest(s__43844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(data);
})()))));
}));

(frontend.search.fuzzy_search.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.search.fuzzy_search.cljs$lang$applyTo = (function (seq43838){
var G__43839 = cljs.core.first(seq43838);
var seq43838__$1 = cljs.core.next(seq43838);
var G__43840 = cljs.core.first(seq43838__$1);
var seq43838__$2 = cljs.core.next(seq43838__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43839,G__43840,seq43838__$2);
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
var coll_SINGLEQUOTE_ = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__43848_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(char$,p1__43848_SHARP_);
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
var G__43851 = arguments.length;
switch (G__43851) {
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
var indice = (function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.search.db.indices),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"pages","pages",-285406513)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.search.db.make_pages_indice_BANG_();
}
})();
var result = cljs_bean.core.__GT_clj(indice.search(q__$2,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null))));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (original_name){
return frontend.search.exact_matched_QMARK_(q__$2,original_name);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43852){
var map__43853 = p__43852;
var map__43853__$1 = cljs.core.__destructure_map(map__43853);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43853__$1,new cljs.core.Keyword(null,"item","item",249373802));
return new cljs.core.Keyword(null,"original-name","original-name",-1427702839).cljs$core$IFn$_invoke$arity$1(item);
}),result)))));
}
} else {
return null;
}
}));

(frontend.search.page_search.cljs$lang$maxFixedArity = 2);

frontend.search.file_search = (function frontend$search$file_search(var_args){
var G__43859 = arguments.length;
switch (G__43859) {
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
var G__43866 = frontend.util.get_file_ext(file);
return (mldoc_exts.cljs$core$IFn$_invoke$arity$1 ? mldoc_exts.cljs$core$IFn$_invoke$arity$1(G__43866) : mldoc_exts.call(null,G__43866));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__43867 = frontend.state.get_current_repo();
return (frontend.db.get_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files.cljs$core$IFn$_invoke$arity$1(G__43867) : frontend.db.get_files.call(null,G__43867));
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
var G__43869 = arguments.length;
switch (G__43869) {
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

frontend.search.sync_search_indice_BANG_ = (function frontend$search$sync_search_indice_BANG_(repo,tx_report){
var data = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report);
var datoms = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (datom){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","content","block/content",-161885195),null,new cljs.core.Keyword("block","name","block/name",1619760316),null], null), null),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom));
}),data);
if(cljs.core.seq(datoms)){
var datoms__$1 = cljs.core.group_by(new cljs.core.Keyword(null,"a","a",-2123407586),datoms);
var pages = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(datoms__$1);
var blocks = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(datoms__$1);
if(cljs.core.seq(pages)){
var pages_result_43937 = (function (){var G__43879 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null);
var G__43880 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),pages));
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2(G__43879,G__43880) : frontend.db.pull_many.call(null,G__43879,G__43880));
})();
var pages_to_add_set_43938 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),pages)));
var pages_to_add_43939 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.original_page_name__GT_index,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p);
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (page){
return cljs.core.contains_QMARK_(pages_to_add_set_43938,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page));
}),pages_result_43937)));
var pages_to_remove_set_43940 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),pages));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"pages","pages",-285406513)], null),(function (indice){
if(cljs.core.truth_(indice)){
var seq__43881_43942 = cljs.core.seq(pages_to_remove_set_43940);
var chunk__43882_43943 = null;
var count__43883_43944 = (0);
var i__43884_43945 = (0);
while(true){
if((i__43884_43945 < count__43883_43944)){
var page_name_43946 = chunk__43882_43943.cljs$core$IIndexed$_nth$arity$2(null,i__43884_43945);
indice.remove(((function (seq__43881_43942,chunk__43882_43943,count__43883_43944,i__43884_43945,page_name_43946,pages_result_43937,pages_to_add_set_43938,pages_to_add_43939,pages_to_remove_set_43940,datoms__$1,pages,blocks,data,datoms){
return (function (page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc(page_name_43946),frontend.util.safe_page_name_sanity_lc(frontend.search.goog$module$goog$object.get(page,"original-name")));
});})(seq__43881_43942,chunk__43882_43943,count__43883_43944,i__43884_43945,page_name_43946,pages_result_43937,pages_to_add_set_43938,pages_to_add_43939,pages_to_remove_set_43940,datoms__$1,pages,blocks,data,datoms))
);


var G__43947 = seq__43881_43942;
var G__43948 = chunk__43882_43943;
var G__43949 = count__43883_43944;
var G__43950 = (i__43884_43945 + (1));
seq__43881_43942 = G__43947;
chunk__43882_43943 = G__43948;
count__43883_43944 = G__43949;
i__43884_43945 = G__43950;
continue;
} else {
var temp__5720__auto___43951 = cljs.core.seq(seq__43881_43942);
if(temp__5720__auto___43951){
var seq__43881_43952__$1 = temp__5720__auto___43951;
if(cljs.core.chunked_seq_QMARK_(seq__43881_43952__$1)){
var c__5565__auto___43953 = cljs.core.chunk_first(seq__43881_43952__$1);
var G__43955 = cljs.core.chunk_rest(seq__43881_43952__$1);
var G__43956 = c__5565__auto___43953;
var G__43957 = cljs.core.count(c__5565__auto___43953);
var G__43958 = (0);
seq__43881_43942 = G__43955;
chunk__43882_43943 = G__43956;
count__43883_43944 = G__43957;
i__43884_43945 = G__43958;
continue;
} else {
var page_name_43960 = cljs.core.first(seq__43881_43952__$1);
indice.remove(((function (seq__43881_43942,chunk__43882_43943,count__43883_43944,i__43884_43945,page_name_43960,seq__43881_43952__$1,temp__5720__auto___43951,pages_result_43937,pages_to_add_set_43938,pages_to_add_43939,pages_to_remove_set_43940,datoms__$1,pages,blocks,data,datoms){
return (function (page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc(page_name_43960),frontend.util.safe_page_name_sanity_lc(frontend.search.goog$module$goog$object.get(page,"original-name")));
});})(seq__43881_43942,chunk__43882_43943,count__43883_43944,i__43884_43945,page_name_43960,seq__43881_43952__$1,temp__5720__auto___43951,pages_result_43937,pages_to_add_set_43938,pages_to_add_43939,pages_to_remove_set_43940,datoms__$1,pages,blocks,data,datoms))
);


var G__43961 = cljs.core.next(seq__43881_43952__$1);
var G__43962 = null;
var G__43963 = (0);
var G__43964 = (0);
seq__43881_43942 = G__43961;
chunk__43882_43943 = G__43962;
count__43883_43944 = G__43963;
i__43884_43945 = G__43964;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(pages_to_add_43939)){
var seq__43888_43965 = cljs.core.seq(pages_to_add_43939);
var chunk__43889_43966 = null;
var count__43890_43967 = (0);
var i__43891_43968 = (0);
while(true){
if((i__43891_43968 < count__43890_43967)){
var page_43969 = chunk__43889_43966.cljs$core$IIndexed$_nth$arity$2(null,i__43891_43968);
indice.add(cljs_bean.core.__GT_js(page_43969));


var G__43970 = seq__43888_43965;
var G__43971 = chunk__43889_43966;
var G__43972 = count__43890_43967;
var G__43973 = (i__43891_43968 + (1));
seq__43888_43965 = G__43970;
chunk__43889_43966 = G__43971;
count__43890_43967 = G__43972;
i__43891_43968 = G__43973;
continue;
} else {
var temp__5720__auto___43974 = cljs.core.seq(seq__43888_43965);
if(temp__5720__auto___43974){
var seq__43888_43975__$1 = temp__5720__auto___43974;
if(cljs.core.chunked_seq_QMARK_(seq__43888_43975__$1)){
var c__5565__auto___43979 = cljs.core.chunk_first(seq__43888_43975__$1);
var G__43980 = cljs.core.chunk_rest(seq__43888_43975__$1);
var G__43981 = c__5565__auto___43979;
var G__43982 = cljs.core.count(c__5565__auto___43979);
var G__43983 = (0);
seq__43888_43965 = G__43980;
chunk__43889_43966 = G__43981;
count__43890_43967 = G__43982;
i__43891_43968 = G__43983;
continue;
} else {
var page_43984 = cljs.core.first(seq__43888_43975__$1);
indice.add(cljs_bean.core.__GT_js(page_43984));


var G__43985 = cljs.core.next(seq__43888_43975__$1);
var G__43986 = null;
var G__43987 = (0);
var G__43988 = (0);
seq__43888_43965 = G__43985;
chunk__43889_43966 = G__43986;
count__43890_43967 = G__43987;
i__43891_43968 = G__43988;
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
}),(function (){var G__43892 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","page","block/page",822314108)], null);
var G__43893 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),blocks));
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2(G__43892,G__43893) : frontend.db.pull_many.call(null,G__43892,G__43893));
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
});
frontend.search.rebuild_indices_BANG_ = (function frontend$search$rebuild_indices_BANG_(var_args){
var G__43897 = arguments.length;
switch (G__43897) {
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
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
var temp__5720__auto___43990 = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5720__auto___43990)){
var engine_43991 = temp__5720__auto___43990;
frontend.search.protocol.truncate_blocks_BANG_(engine_43991);
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
