goog.provide('logseq.graph_parser.util');
logseq.graph_parser.util.uuid_pattern = "[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}";
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.util !== 'undefined') && (typeof logseq.graph_parser.util.exactly_uuid_pattern !== 'undefined')){
} else {
logseq.graph_parser.util.exactly_uuid_pattern = cljs.core.re_pattern(["(?i)^",logseq.graph_parser.util.uuid_pattern,"$"].join(''));
}
/**
 * Copy of frontend.util/safe-re-find. Too basic to couple to main app
 */
logseq.graph_parser.util.safe_re_find = (function logseq$graph_parser$util$safe_re_find(pattern,s){
if(typeof s === 'string'){
} else {
console.trace();
}

if(typeof s === 'string'){
return cljs.core.re_find(pattern,s);
} else {
return null;
}
});
/**
 * Copy of frontend.util/uuid-string?. Too basic to couple to main app
 */
logseq.graph_parser.util.uuid_string_QMARK_ = (function logseq$graph_parser$util$uuid_string_QMARK_(s){
return logseq.graph_parser.util.safe_re_find(logseq.graph_parser.util.exactly_uuid_pattern,s);
});
/**
 * Normalize file path (for reading paths from FS, not required by writting)
 */
logseq.graph_parser.util.path_normalize = (function logseq$graph_parser$util$path_normalize(s){
return s.normalize("NFC");
});
/**
 * remove pairs of key-value that has nil value from a (possibly nested) map.
 */
logseq.graph_parser.util.remove_nils = (function logseq$graph_parser$util$remove_nils(nm){
return clojure.walk.postwalk((function (el){
if(cljs.core.map_QMARK_(el)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second)),el);
} else {
return el;
}
}),nm);
});
logseq.graph_parser.util.split_first = (function logseq$graph_parser$util$split_first(pattern,s){
var temp__5720__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,pattern);
if(cljs.core.truth_(temp__5720__auto__)){
var first_index = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),first_index),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(first_index + cljs.core.count(pattern)),cljs.core.count(s))], null);
} else {
return null;
}
});
logseq.graph_parser.util.split_last = (function logseq$graph_parser$util$split_last(pattern,s){
var temp__5720__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,pattern);
if(cljs.core.truth_(temp__5720__auto__)){
var last_index = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_index),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_index + cljs.core.count(pattern)),cljs.core.count(s))], null);
} else {
return null;
}
});
logseq.graph_parser.util.tag_valid_QMARK_ = (function logseq$graph_parser$util$tag_valid_QMARK_(tag_name){
if(typeof tag_name === 'string'){
return cljs.core.not(logseq.graph_parser.util.safe_re_find(/[# \t\r\n]+/,tag_name));
} else {
return null;
}
});
logseq.graph_parser.util.safe_subs = (function logseq$graph_parser$util$safe_subs(var_args){
var G__44282 = arguments.length;
switch (G__44282) {
case 2:
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
var c = cljs.core.count(s);
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(s,start,c);
}));

(logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
var c = cljs.core.count(s);
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(function (){var x__4339__auto__ = c;
var y__4340__auto__ = start;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})(),(function (){var x__4339__auto__ = c;
var y__4340__auto__ = end;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})());
}));

(logseq.graph_parser.util.safe_subs.cljs$lang$maxFixedArity = 3);

logseq.graph_parser.util.unquote_string = (function logseq$graph_parser$util$unquote_string(v){
return clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(v,(1),(cljs.core.count(v) - (1))));
});
logseq.graph_parser.util.wrapped_by_quotes_QMARK_ = (function logseq$graph_parser$util$wrapped_by_quotes_QMARK_(v){
return ((typeof v === 'string') && ((((cljs.core.count(v) >= (2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("\"",cljs.core.first(v),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(v)], 0))))));
});
/**
 * Copy of frontend.util/parse-int. Too basic to couple to main app
 */
logseq.graph_parser.util.parse_int = (function logseq$graph_parser$util$parse_int(x){
if(typeof x === 'string'){
return parseInt(x);
} else {
return x;
}
});
/**
 * Copy of frontend.util/safe-parse-int. Too basic to couple to main app
 */
logseq.graph_parser.util.safe_parse_int = (function logseq$graph_parser$util$safe_parse_int(x){
var result = logseq.graph_parser.util.parse_int(x);
if(cljs.core.truth_(isNaN(result))){
return null;
} else {
return result;
}
});
logseq.graph_parser.util.url_QMARK_ = (function logseq$graph_parser$util$url_QMARK_(s){
var and__4251__auto__ = typeof s === 'string';
if(and__4251__auto__){
try{(new URL(s));

return true;
}catch (e44318){if((e44318 instanceof Error)){
var _e = e44318;
return false;
} else {
throw e44318;

}
}} else {
return and__4251__auto__;
}
});
logseq.graph_parser.util.json__GT_clj = (function logseq$graph_parser$util$json__GT_clj(json_string){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(json_string),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
/**
 * Maps function `f` over the keys of map `m` to produce a new map.
 */
logseq.graph_parser.util.map_keys = (function logseq$graph_parser$util$map_keys(f,m){
return cljs.core.reduce_kv((function (m_,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Copy of frontend.util/zero-pad. Too basic to couple to main app
 */
logseq.graph_parser.util.zero_pad = (function logseq$graph_parser$util$zero_pad(n){
if((n < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}
});
/**
 * Copy of frontend.util/get-file-ext. Too basic to couple to main app
 */
logseq.graph_parser.util.get_file_ext = (function logseq$graph_parser$util$get_file_ext(file){
var and__4251__auto__ = typeof file === 'string';
if(and__4251__auto__){
var and__4251__auto____$1 = clojure.string.includes_QMARK_(file,".");
if(and__4251__auto____$1){
var G__44334 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,/\./));
if((G__44334 == null)){
return null;
} else {
return clojure.string.lower_case(G__44334);
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
logseq.graph_parser.util.remove_boundary_slashes = (function logseq$graph_parser$util$remove_boundary_slashes(s){
if(typeof s === 'string'){
var s__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(s)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.last(s__$1))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(0),(((s__$1).length) - (1)));
} else {
return s__$1;
}
} else {
return null;
}
});
logseq.graph_parser.util.split_namespace_pages = (function logseq$graph_parser$util$split_namespace_pages(title){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(title,"/");
var others = cljs.core.rest(parts);
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts)], null);
while(true){
if(cljs.core.seq(others)){
var prev = cljs.core.last(result);
var G__44395 = cljs.core.rest(others);
var G__44396 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prev),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(others))].join(''));
others = G__44395;
result = G__44396;
continue;
} else {
return result;
}
break;
}
});
/**
 * Sanitize the page-name.
 */
logseq.graph_parser.util.page_name_sanity = (function logseq$graph_parser$util$page_name_sanity(var_args){
var G__44366 = arguments.length;
switch (G__44366) {
case 1:
return logseq.graph_parser.util.page_name_sanity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.graph_parser.util.page_name_sanity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.util.page_name_sanity.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
return logseq.graph_parser.util.page_name_sanity.cljs$core$IFn$_invoke$arity$2(page_name,false);
}));

(logseq.graph_parser.util.page_name_sanity.cljs$core$IFn$_invoke$arity$2 = (function (page_name,replace_slash_QMARK_){
var page = (function (){var G__44369 = page_name;
var G__44369__$1 = (((G__44369 == null))?null:logseq.graph_parser.util.remove_boundary_slashes(G__44369));
if((G__44369__$1 == null)){
return null;
} else {
return logseq.graph_parser.util.path_normalize(G__44369__$1);
}
})();
if(cljs.core.truth_(replace_slash_QMARK_)){
return clojure.string.replace(page,/\//,"%2A");
} else {
return page;
}
}));

(logseq.graph_parser.util.page_name_sanity.cljs$lang$maxFixedArity = 2);

/**
 * Sanitize the query string for a page name (mandate for :block/name)
 */
logseq.graph_parser.util.page_name_sanity_lc = (function logseq$graph_parser$util$page_name_sanity_lc(s){
return logseq.graph_parser.util.page_name_sanity.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(s));
});
logseq.graph_parser.util.capitalize_all = (function logseq$graph_parser$util$capitalize_all(s){
var G__44370 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/ /);
var G__44370__$1 = (((G__44370 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,G__44370));
if((G__44370__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",G__44370__$1);
}
});
/**
 * Copy of frontend.util/distinct-by. Too basic to couple to main app
 */
logseq.graph_parser.util.distinct_by = (function logseq$graph_parser$util$distinct_by(f,col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.truth_(cljs.core.some((function (p1__44371_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__44371_SHARP_) : f.call(null,p1__44371_SHARP_)));
}),acc))){
return acc;
} else {
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
}
}),cljs.core.PersistentVector.EMPTY,col);
});
logseq.graph_parser.util.normalize_format = (function logseq$graph_parser$util$normalize_format(format){
var G__44379 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__44379__$1 = (((G__44379 instanceof cljs.core.Keyword))?G__44379.fqn:null);
switch (G__44379__$1) {
case "md":
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);

break;
case "asciidoc":
return new cljs.core.Keyword(null,"adoc","adoc",-1288345346);

break;
default:
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);

}
});
logseq.graph_parser.util.get_format = (function logseq$graph_parser$util$get_format(file){
if(cljs.core.truth_(file)){
return logseq.graph_parser.util.normalize_format(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,/\./)))));
} else {
return null;
}
});

//# sourceMappingURL=logseq.graph_parser.util.js.map
