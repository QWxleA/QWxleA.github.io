goog.provide('logseq.graph_parser.text');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
logseq.graph_parser.text.page_ref_re_0 = /\[\[(.*)\]\]/;
logseq.graph_parser.text.org_page_ref_re = /\[\[(file:.*)\]\[.+?\]\]/;
logseq.graph_parser.text.markdown_page_ref_re = /\[(.*)\]\(file:.*\)/;
logseq.graph_parser.text.get_file_basename = (function logseq$graph_parser$text$get_file_basename(path){
if(clojure.string.blank_QMARK_(path)){
return null;
} else {
return module$node_modules$path$path.parse(clojure.string.replace(path,"+","/")).name;
}
});
logseq.graph_parser.text.get_page_name = (function logseq$graph_parser$text$get_page_name(s){
var and__4251__auto__ = typeof s === 'string';
if(and__4251__auto__){
var or__4253__auto__ = (function (){var temp__5720__auto__ = cljs.core.re_matches(logseq.graph_parser.text.markdown_page_ref_re,s);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__47452 = temp__5720__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47452,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47452,(1),null);
var _path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47452,(2),null);
return clojure.string.trim(label);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.re_matches(logseq.graph_parser.text.org_page_ref_re,s);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__47455 = temp__5720__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47455,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47455,(1),null);
var _label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47455,(2),null);
var G__47458 = logseq.graph_parser.text.get_file_basename(path);
if((G__47458 == null)){
return null;
} else {
return clojure.string.replace(G__47458,".","/");
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.core.second(cljs.core.re_matches(logseq.graph_parser.text.page_ref_re_0,s));
}
}
} else {
return and__4251__auto__;
}
});
logseq.graph_parser.text.page_ref_QMARK_ = (function logseq$graph_parser$text$page_ref_QMARK_(s){
return ((typeof s === 'string') && (((clojure.string.starts_with_QMARK_(s,"[[")) && (clojure.string.ends_with_QMARK_(s,"]]")))));
});
logseq.graph_parser.text.block_ref_re = /\(\(([a-zA-z0-9]{8}-[a-zA-z0-9]{4}-[a-zA-z0-9]{4}-[a-zA-z0-9]{4}-[a-zA-z0-9]{12})\)\)/;
logseq.graph_parser.text.get_block_ref = (function logseq$graph_parser$text$get_block_ref(s){
var and__4251__auto__ = typeof s === 'string';
if(and__4251__auto__){
return cljs.core.second(cljs.core.re_matches(logseq.graph_parser.text.block_ref_re,s));
} else {
return and__4251__auto__;
}
});
logseq.graph_parser.text.block_ref_QMARK_ = (function logseq$graph_parser$text$block_ref_QMARK_(s){
return cljs.core.boolean$(logseq.graph_parser.text.get_block_ref(s));
});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.text !== 'undefined') && (typeof logseq.graph_parser.text.page_ref_re !== 'undefined')){
} else {
logseq.graph_parser.text.page_ref_re = /\[\[(.*?)\]\]/;
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.text !== 'undefined') && (typeof logseq.graph_parser.text.page_ref_re_2 !== 'undefined')){
} else {
logseq.graph_parser.text.page_ref_re_2 = /(\[\[.*?\]\])/;
}
logseq.graph_parser.text.page_ref_re_without_nested = /\[\[([^\[\]]+)\]\]/;
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.text !== 'undefined') && (typeof logseq.graph_parser.text.between_re !== 'undefined')){
} else {
logseq.graph_parser.text.between_re = /\(between ([^\)]+)\)/;
}
logseq.graph_parser.text.page_ref_un_brackets_BANG_ = (function logseq$graph_parser$text$page_ref_un_brackets_BANG_(s){
var or__4253__auto__ = logseq.graph_parser.text.get_page_name(s);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return s;
}
});
logseq.graph_parser.text.block_ref_un_brackets_BANG_ = (function logseq$graph_parser$text$block_ref_un_brackets_BANG_(s){
if(typeof s === 'string'){
if(logseq.graph_parser.text.block_ref_QMARK_(s)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),(((s).length) - (2)));
} else {
return s;
}
} else {
return null;
}
});
logseq.graph_parser.text.sep_by_comma = (function logseq$graph_parser$text$sep_by_comma(s){
if(cljs.core.truth_(s)){
var G__47459 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/[\,|，]{1}/);
var G__47459__$1 = (((G__47459 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,G__47459));
if((G__47459__$1 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,G__47459__$1);
}
} else {
return null;
}
});
logseq.graph_parser.text.sep_by_hashtag = (function logseq$graph_parser$text$sep_by_hashtag(s){
if(cljs.core.truth_(s)){
var G__47461 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/#/);
var G__47461__$1 = (((G__47461 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,G__47461));
if((G__47461__$1 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,G__47461__$1);
}
} else {
return null;
}
});
logseq.graph_parser.text.not_matched_nested_pages = (function logseq$graph_parser$text$not_matched_nested_pages(s){
return ((typeof s === 'string') && ((cljs.core.count(cljs.core.re_seq(/\[\[/,s)) > cljs.core.count(cljs.core.re_seq(/\]\]/,s)))));
});
logseq.graph_parser.text.ref_matched_QMARK_ = (function logseq$graph_parser$text$ref_matched_QMARK_(s){
var x = cljs.core.re_seq(/\[\[/,s);
var y = cljs.core.re_seq(/\]\]/,s);
return (((cljs.core.count(x) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y))));
});
logseq.graph_parser.text.get_nested_page_name = (function logseq$graph_parser$text$get_nested_page_name(page_name){
var temp__5720__auto__ = cljs.core.re_find(logseq.graph_parser.text.page_ref_re_without_nested,page_name);
if(cljs.core.truth_(temp__5720__auto__)){
var first_match = temp__5720__auto__;
return cljs.core.second(first_match);
} else {
return null;
}
});
logseq.graph_parser.text.concat_nested_pages = (function logseq$graph_parser$text$concat_nested_pages(coll){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47466,s){
var vec__47467 = p__47466;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47467,(0),null);
var not_matched_s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47467,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = not_matched_s;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"]]");
} else {
return and__4251__auto__;
}
})())){
var s_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_matched_s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
if(logseq.graph_parser.text.ref_matched_QMARK_(s_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,s_SINGLEQUOTE_),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,s_SINGLEQUOTE_], null);
}
} else {
if(cljs.core.truth_(not_matched_s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_matched_s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null);
} else {
if(logseq.graph_parser.text.not_matched_nested_pages(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,s], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,s),not_matched_s], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),coll));
});
logseq.graph_parser.text.sep_by_quotes = (function logseq$graph_parser$text$sep_by_quotes(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/(\"[^\"]*\")/);
});
logseq.graph_parser.text.markdown_link = /\[([^\[]+)\](\(.*\))/;
logseq.graph_parser.text.split_page_refs_without_brackets = (function logseq$graph_parser$text$split_page_refs_without_brackets(var_args){
var G__47472 = arguments.length;
switch (G__47472) {
case 1:
return logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$1 = (function (s){
return logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$2 = (function (s,p__47473){
var map__47474 = p__47473;
var map__47474__$1 = cljs.core.__destructure_map(map__47474);
var un_brackets_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47474__$1,new cljs.core.Keyword(null,"un-brackets?","un-brackets?",518613875),true);
if(((typeof s === 'string') && (logseq.graph_parser.util.wrapped_by_quotes_QMARK_(s)))){
return logseq.graph_parser.util.unquote_string(s);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = typeof s === 'string';
if(and__4251__auto__){
return cljs.core.re_find(logseq.graph_parser.text.markdown_link,s);
} else {
return and__4251__auto__;
}
})())){
return s;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = typeof s === 'string';
if(and__4251__auto__){
var or__4253__auto__ = logseq.graph_parser.util.safe_re_find(logseq.graph_parser.text.page_ref_re,s);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return logseq.graph_parser.util.safe_re_find(/[\,|，|#|\"]+/,s);
}
} else {
return and__4251__auto__;
}
})())){
var result = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s__$1){
if(logseq.graph_parser.util.wrapped_by_quotes_QMARK_(s__$1)){
return null;
} else {
if(logseq.graph_parser.text.page_ref_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(un_brackets_QMARK_)?logseq.graph_parser.text.page_ref_un_brackets_BANG_(s__$1):s__$1)], null);
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.graph_parser.text.sep_by_hashtag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.text.sep_by_comma(s__$1)], 0));

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,logseq.graph_parser.text.concat_nested_pages(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s__$1){
if(clojure.string.ends_with_QMARK_(s__$1,"]]")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(0),(cljs.core.count(s__$1) - (2))),"]]"], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__47470_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__47470_SHARP_,"");
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s__$1){
if(logseq.graph_parser.util.wrapped_by_quotes_QMARK_(s__$1)){
return null;
} else {
if(clojure.string.includes_QMARK_(clojure.string.trimr(s__$1),"]],")){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s__$1,"]],");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(0),idx),"]]",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(idx + (3)))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1], null);

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s__$1){
if(logseq.graph_parser.util.wrapped_by_quotes_QMARK_(clojure.string.trim(s__$1))){
return null;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,logseq.graph_parser.text.page_ref_re_2);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.text.sep_by_quotes(s)], 0))], 0)))], 0))))], 0)));
if(((cljs.core.coll_QMARK_(result)) || (((typeof result === 'string') && (clojure.string.starts_with_QMARK_(result,"#")))))){
var result__$1 = (cljs.core.truth_(cljs.core.coll_QMARK_)?result:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null));
var result__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s__$1){
return clojure.string.replace(s__$1,/^#+/,"");
}),result__$1);
return cljs.core.set(result__$2);
} else {
return cljs.core.first(result);
}
} else {
return s;

}
}
}
}));

(logseq.graph_parser.text.split_page_refs_without_brackets.cljs$lang$maxFixedArity = 2);

logseq.graph_parser.text.remove_level_space_aux_BANG_ = (function logseq$graph_parser$text$remove_level_space_aux_BANG_(text,pattern,space_QMARK_,trim_left_QMARK_){
var pattern__$1 = goog.string.format((cljs.core.truth_(space_QMARK_)?"^[%s]+\\s+":"^[%s]+\\s?"),pattern);
var text__$1 = (cljs.core.truth_(trim_left_QMARK_)?clojure.string.triml(text):text);
return clojure.string.replace_first(text__$1,cljs.core.re_pattern(pattern__$1),"");
});
logseq.graph_parser.text.remove_level_spaces = (function logseq$graph_parser$text$remove_level_spaces(var_args){
var G__47481 = arguments.length;
switch (G__47481) {
case 3:
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3 = (function (text,format,block_pattern){
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5(text,format,block_pattern,false,true);
}));

(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$4 = (function (text,format,block_pattern,space_QMARK_){
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5(text,format,block_pattern,space_QMARK_,true);
}));

(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5 = (function (text,format,block_pattern,space_QMARK_,trim_left_QMARK_){
if(cljs.core.truth_(format)){
if(clojure.string.blank_QMARK_(text)){
return "";
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("markdown",cljs.core.name(format))) && (clojure.string.starts_with_QMARK_(text,"---")))){
return text;
} else {
return logseq.graph_parser.text.remove_level_space_aux_BANG_(text,block_pattern,space_QMARK_,trim_left_QMARK_);

}
}
} else {
return null;
}
}));

(logseq.graph_parser.text.remove_level_spaces.cljs$lang$maxFixedArity = 5);

logseq.graph_parser.text.build_data_value = (function logseq$graph_parser$text$build_data_value(col){
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item),"\""].join('');
}),col);
return goog.string.format("[%s]",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",items));
});
logseq.graph_parser.text.media_link_QMARK_ = (function logseq$graph_parser$text$media_link_QMARK_(media_formats,s){
return cljs.core.some((function (fmt){
return logseq.graph_parser.util.safe_re_find(cljs.core.re_pattern(["(?i)\\.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt),"(?:\\?([^#]*))?(?:#(.*))?$"].join('')),s);
}),media_formats);
});
logseq.graph_parser.text.namespace_page_QMARK_ = (function logseq$graph_parser$text$namespace_page_QMARK_(p){
return ((typeof p === 'string') && (((clojure.string.includes_QMARK_(p,"/")) && ((((!(clojure.string.starts_with_QMARK_(p,"../")))) && ((((!(clojure.string.starts_with_QMARK_(p,"./")))) && (cljs.core.not(logseq.graph_parser.util.url_QMARK_(p))))))))));
});
logseq.graph_parser.text.add_timestamp = (function logseq$graph_parser$text$add_timestamp(content,key,value){
var new_line = [clojure.string.upper_case(key),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
var lines = clojure.string.split_lines(content);
var new_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return clojure.string.trim(((clojure.string.starts_with_QMARK_(clojure.string.lower_case(line),key))?new_line:line));
}),lines);
var new_lines__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,lines),new_lines))?new_lines:cljs.core.cons(cljs.core.first(new_lines),cljs.core.cons(new_line,cljs.core.rest(new_lines))));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new_lines__$1);
});
logseq.graph_parser.text.remove_timestamp = (function logseq$graph_parser$text$remove_timestamp(content,key){
var lines = clojure.string.split_lines(content);
var new_lines = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (line){
return (!(clojure.string.starts_with_QMARK_(clojure.string.lower_case(line),key)));
}),lines);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new_lines);
});
logseq.graph_parser.text.get_current_line_by_pos = (function logseq$graph_parser$text$get_current_line_by_pos(s,pos){
var lines = clojure.string.split_lines(s);
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,line){
var new_pos = (acc + cljs.core.count(line));
if((new_pos >= pos)){
return cljs.core.reduced(line);
} else {
return (new_pos + (1));
}
}),(0),lines);
if(typeof result === 'string'){
return result;
} else {
return null;
}
});
/**
 * Get all indexes of `value` in the string `s`.
 */
logseq.graph_parser.text.get_string_all_indexes = (function logseq$graph_parser$text$get_string_all_indexes(s,value){
var acc = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
var temp__5718__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,value,i);
if(cljs.core.truth_(temp__5718__auto__)){
var i__$1 = temp__5718__auto__;
var G__47504 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,i__$1);
var G__47505 = (i__$1 + cljs.core.count(value));
acc = G__47504;
i = G__47505;
continue;
} else {
return acc;
}
break;
}
});
/**
 * `pos` must be surrounded by `before` and `and` in string `value`, e.g. ((|))
 */
logseq.graph_parser.text.surround_by_QMARK_ = (function logseq$graph_parser$text$surround_by_QMARK_(value,pos,before,end){
var start_pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),before))?(0):(pos - cljs.core.count(before)));
var end_pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),end))?cljs.core.count(value):(pos + cljs.core.count(end)));
if((cljs.core.count(value) >= end_pos)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),end)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),before))))?"":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),end))?before:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),before))?end:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(before),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('')
))),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,start_pos,end_pos));
} else {
return null;
}
});
/**
 * `pos` must be wrapped by `before` and `and` in string `value`, e.g. ((a|b))
 */
logseq.graph_parser.text.wrapped_by_QMARK_ = (function logseq$graph_parser$text$wrapped_by_QMARK_(value,pos,before,end){
var before_matches = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"before","before",-1633692388)], null);
}),logseq.graph_parser.text.get_string_all_indexes(value,before));
var end_matches = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"end","end",-268185958)], null);
}),logseq.graph_parser.text.get_string_all_indexes(value,end));
var indexes = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before_matches,end_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,new cljs.core.Keyword(null,"between","between",1131099276)], null)], null)], 0)));
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,indexes);
var q = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"end","end",-268185958)], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,k))){
return cljs.core.reduced(true);
} else {
return cljs.core.vec(cljs.core.take_last((2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,k)));
}
}),cljs.core.PersistentVector.EMPTY,ks) === true;
});
logseq.graph_parser.text.get_graph_name_from_path = (function logseq$graph_parser$text$get_graph_name_from_path(path){
if(typeof path === 'string'){
var parts = cljs.core.take_last((2),clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
return decodeURI(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parts),"0"))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",parts):cljs.core.last(parts)));
} else {
return null;
}
});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.text !== 'undefined') && (typeof logseq.graph_parser.text.non_parsing_properties !== 'undefined')){
} else {
logseq.graph_parser.text.non_parsing_properties = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["background-color",null,"background_color",null], null), null));
}
logseq.graph_parser.text.parse_property = (function logseq$graph_parser$text$parse_property(var_args){
var G__47497 = arguments.length;
switch (G__47497) {
case 3:
return logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$3 = (function (k,v,config_state){
return logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"markdown","markdown",1227225089),k,v,config_state);
}));

(logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$4 = (function (format,k,v,config_state){
var k__$1 = cljs.core.name(k);
var v__$1 = (((((v instanceof cljs.core.Symbol)) || ((v instanceof cljs.core.Keyword))))?cljs.core.name(v):cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
var v__$2 = clojure.string.trim(v__$1);
if(cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["filters",null,"title",null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(config_state,new cljs.core.Keyword(null,"ignored-page-references-keywords","ignored-page-references-keywords",44006978))),k__$1)){
return v__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$2,"true")){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$2,"false")){
return false;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,"alias");
if(and__4251__auto__){
return logseq.graph_parser.util.safe_re_find(/^\d+$/,v__$2);
} else {
return and__4251__auto__;
}
})())){
return logseq.graph_parser.util.safe_parse_int(v__$2);
} else {
if(logseq.graph_parser.util.wrapped_by_quotes_QMARK_(v__$2)){
return v__$2;
} else {
if(cljs.core.contains_QMARK_(cljs.core.deref(logseq.graph_parser.text.non_parsing_properties),clojure.string.lower_case(k__$1))){
return v__$2;
} else {
if(cljs.core.truth_(logseq.graph_parser.mldoc.link_QMARK_(format,v__$2))){
return v__$2;
} else {
return logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$1(v__$2);

}
}
}
}
}
}
}
}));

(logseq.graph_parser.text.parse_property.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=logseq.graph_parser.text.js.map
