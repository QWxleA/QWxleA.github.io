goog.provide('rewrite_cljc.parser.utils');
/**
 * Check if a given character is a whitespace.
 */
rewrite_cljc.parser.utils.whitespace_QMARK_ = (function rewrite_cljc$parser$utils$whitespace_QMARK_(c){
return rewrite_cljc.interop.clojure_whitespace_QMARK_(c);
});
/**
 * Check if a given character is a linebreak.
 */
rewrite_cljc.parser.utils.linebreak_QMARK_ = (function rewrite_cljc$parser$utils$linebreak_QMARK_(c){
var and__4251__auto__ = c;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\r")));
} else {
return and__4251__auto__;
}
});
/**
 * Check if a given character is a non-linebreak whitespace.
 */
rewrite_cljc.parser.utils.space_QMARK_ = (function rewrite_cljc$parser$utils$space_QMARK_(c){
var and__4251__auto__ = cljs.core.not(rewrite_cljc.parser.utils.linebreak_QMARK_(c));
if(and__4251__auto__){
return rewrite_cljc.parser.utils.whitespace_QMARK_(c);
} else {
return and__4251__auto__;
}
});
/**
 * Ignore next character of Reader.
 */
rewrite_cljc.parser.utils.ignore = (function rewrite_cljc$parser$utils$ignore(reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return null;
});
rewrite_cljc.parser.utils.throw_reader = (function rewrite_cljc$parser$utils$throw_reader(var_args){
var args__4870__auto__ = [];
var len__4864__auto___92714 = arguments.length;
var i__4865__auto___92715 = (0);
while(true){
if((i__4865__auto___92715 < len__4864__auto___92714)){
args__4870__auto__.push((arguments[i__4865__auto___92715]));

var G__92716 = (i__4865__auto___92715 + (1));
i__4865__auto___92715 = G__92716;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.parser.utils.throw_reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rewrite_cljc.parser.utils.throw_reader.cljs$core$IFn$_invoke$arity$variadic = (function (reader,msg){
var c = reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null);
var l = reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg))," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"]"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.parser.utils.throw_reader.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.parser.utils.throw_reader.cljs$lang$applyTo = (function (seq92711){
var G__92712 = cljs.core.first(seq92711);
var seq92711__$1 = cljs.core.next(seq92711);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92712,seq92711__$1);
}));

rewrite_cljc.parser.utils.read_eol = (function rewrite_cljc$parser$utils$read_eol(reader){
var char_seq = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
if(cljs.core.truth_(rewrite_cljc.parser.utils.linebreak_QMARK_(c))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(char_seq,c));
} else {
var G__92717 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(char_seq,c);
char_seq = G__92717;
continue;
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,char_seq);
}
break;
}
});

//# sourceMappingURL=rewrite_cljc.parser.utils.js.map
