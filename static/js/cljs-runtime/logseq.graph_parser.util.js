goog.provide('logseq.graph_parser.util');
logseq.graph_parser.util.uuid_pattern = "[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}";
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.util !== 'undefined') && (typeof logseq.graph_parser.util.exactly_uuid_pattern !== 'undefined')){
} else {
logseq.graph_parser.util.exactly_uuid_pattern = cljs.core.re_pattern(["(?i)^",logseq.graph_parser.util.uuid_pattern,"$"].join(''));
}
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
var G__66015 = arguments.length;
switch (G__66015) {
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
 * Copy of frontend.util/parse-int. Don't want to couple to main app too much
 */
logseq.graph_parser.util.parse_int = (function logseq$graph_parser$util$parse_int(x){
if(typeof x === 'string'){
return parseInt(x);
} else {
return x;
}
});
/**
 * Copy of frontend.util/safe-parse-int. Don't want to couple to main app too much
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
}catch (e66021){if((e66021 instanceof Error)){
var _e = e66021;
return false;
} else {
throw e66021;

}
}} else {
return and__4251__auto__;
}
});
logseq.graph_parser.util.json__GT_clj = (function logseq$graph_parser$util$json__GT_clj(json_string){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(json_string),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});

//# sourceMappingURL=logseq.graph_parser.util.js.map
