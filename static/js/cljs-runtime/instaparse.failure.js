goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__96347 = (line + (1));
var G__96348 = (1);
var G__96349 = (counter + (1));
line = G__96347;
col = G__96348;
counter = G__96349;
continue;
} else {
var G__96350 = line;
var G__96351 = (col + (1));
var G__96352 = (counter + (1));
line = G__96350;
col = G__96351;
counter = G__96352;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__96353 = cljs.core.next(chars);
var G__96354 = (n__$1 - (1));
chars = G__96353;
n__$1 = G__96354;
continue;
} else {
var G__96355 = cljs.core.next(chars);
var G__96356 = n__$1;
chars = G__96355;
n__$1 = G__96356;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__96315){
var map__96316 = p__96315;
var map__96316__$1 = cljs.core.__destructure_map(map__96316);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96316__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96316__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96316__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96316__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__96335_96373 = cljs.core.seq(full_reasons);
var chunk__96336_96374 = null;
var count__96337_96375 = (0);
var i__96338_96376 = (0);
while(true){
if((i__96338_96376 < count__96337_96375)){
var r_96377 = chunk__96336_96374.cljs$core$IIndexed$_nth$arity$2(null,i__96338_96376);
instaparse.failure.print_reason(r_96377);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__96378 = seq__96335_96373;
var G__96379 = chunk__96336_96374;
var G__96380 = count__96337_96375;
var G__96381 = (i__96338_96376 + (1));
seq__96335_96373 = G__96378;
chunk__96336_96374 = G__96379;
count__96337_96375 = G__96380;
i__96338_96376 = G__96381;
continue;
} else {
var temp__5720__auto___96382 = cljs.core.seq(seq__96335_96373);
if(temp__5720__auto___96382){
var seq__96335_96383__$1 = temp__5720__auto___96382;
if(cljs.core.chunked_seq_QMARK_(seq__96335_96383__$1)){
var c__5565__auto___96384 = cljs.core.chunk_first(seq__96335_96383__$1);
var G__96385 = cljs.core.chunk_rest(seq__96335_96383__$1);
var G__96386 = c__5565__auto___96384;
var G__96387 = cljs.core.count(c__5565__auto___96384);
var G__96388 = (0);
seq__96335_96373 = G__96385;
chunk__96336_96374 = G__96386;
count__96337_96375 = G__96387;
i__96338_96376 = G__96388;
continue;
} else {
var r_96389 = cljs.core.first(seq__96335_96383__$1);
instaparse.failure.print_reason(r_96389);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__96390 = cljs.core.next(seq__96335_96383__$1);
var G__96391 = null;
var G__96392 = (0);
var G__96393 = (0);
seq__96335_96373 = G__96390;
chunk__96336_96374 = G__96391;
count__96337_96375 = G__96392;
i__96338_96376 = G__96393;
continue;
}
} else {
}
}
break;
}

var seq__96343 = cljs.core.seq(partial_reasons);
var chunk__96344 = null;
var count__96345 = (0);
var i__96346 = (0);
while(true){
if((i__96346 < count__96345)){
var r = chunk__96344.cljs$core$IIndexed$_nth$arity$2(null,i__96346);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__96394 = seq__96343;
var G__96395 = chunk__96344;
var G__96396 = count__96345;
var G__96397 = (i__96346 + (1));
seq__96343 = G__96394;
chunk__96344 = G__96395;
count__96345 = G__96396;
i__96346 = G__96397;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__96343);
if(temp__5720__auto__){
var seq__96343__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__96343__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__96343__$1);
var G__96398 = cljs.core.chunk_rest(seq__96343__$1);
var G__96399 = c__5565__auto__;
var G__96400 = cljs.core.count(c__5565__auto__);
var G__96401 = (0);
seq__96343 = G__96398;
chunk__96344 = G__96399;
count__96345 = G__96400;
i__96346 = G__96401;
continue;
} else {
var r = cljs.core.first(seq__96343__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__96402 = cljs.core.next(seq__96343__$1);
var G__96403 = null;
var G__96404 = (0);
var G__96405 = (0);
seq__96343 = G__96402;
chunk__96344 = G__96403;
count__96345 = G__96404;
i__96346 = G__96405;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
