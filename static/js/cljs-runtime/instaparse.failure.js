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
var G__109668 = (line + (1));
var G__109669 = (1);
var G__109670 = (counter + (1));
line = G__109668;
col = G__109669;
counter = G__109670;
continue;
} else {
var G__109671 = line;
var G__109672 = (col + (1));
var G__109673 = (counter + (1));
line = G__109671;
col = G__109672;
counter = G__109673;
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
var G__109674 = cljs.core.next(chars);
var G__109675 = (n__$1 - (1));
chars = G__109674;
n__$1 = G__109675;
continue;
} else {
var G__109676 = cljs.core.next(chars);
var G__109677 = n__$1;
chars = G__109676;
n__$1 = G__109677;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__109658){
var map__109659 = p__109658;
var map__109659__$1 = cljs.core.__destructure_map(map__109659);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109659__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109659__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109659__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109659__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__109660_109678 = cljs.core.seq(full_reasons);
var chunk__109661_109679 = null;
var count__109662_109680 = (0);
var i__109663_109681 = (0);
while(true){
if((i__109663_109681 < count__109662_109680)){
var r_109682 = chunk__109661_109679.cljs$core$IIndexed$_nth$arity$2(null,i__109663_109681);
instaparse.failure.print_reason(r_109682);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__109683 = seq__109660_109678;
var G__109684 = chunk__109661_109679;
var G__109685 = count__109662_109680;
var G__109686 = (i__109663_109681 + (1));
seq__109660_109678 = G__109683;
chunk__109661_109679 = G__109684;
count__109662_109680 = G__109685;
i__109663_109681 = G__109686;
continue;
} else {
var temp__5720__auto___109687 = cljs.core.seq(seq__109660_109678);
if(temp__5720__auto___109687){
var seq__109660_109688__$1 = temp__5720__auto___109687;
if(cljs.core.chunked_seq_QMARK_(seq__109660_109688__$1)){
var c__4679__auto___109689 = cljs.core.chunk_first(seq__109660_109688__$1);
var G__109690 = cljs.core.chunk_rest(seq__109660_109688__$1);
var G__109691 = c__4679__auto___109689;
var G__109692 = cljs.core.count(c__4679__auto___109689);
var G__109693 = (0);
seq__109660_109678 = G__109690;
chunk__109661_109679 = G__109691;
count__109662_109680 = G__109692;
i__109663_109681 = G__109693;
continue;
} else {
var r_109694 = cljs.core.first(seq__109660_109688__$1);
instaparse.failure.print_reason(r_109694);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__109695 = cljs.core.next(seq__109660_109688__$1);
var G__109696 = null;
var G__109697 = (0);
var G__109698 = (0);
seq__109660_109678 = G__109695;
chunk__109661_109679 = G__109696;
count__109662_109680 = G__109697;
i__109663_109681 = G__109698;
continue;
}
} else {
}
}
break;
}

var seq__109664 = cljs.core.seq(partial_reasons);
var chunk__109665 = null;
var count__109666 = (0);
var i__109667 = (0);
while(true){
if((i__109667 < count__109666)){
var r = chunk__109665.cljs$core$IIndexed$_nth$arity$2(null,i__109667);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__109699 = seq__109664;
var G__109700 = chunk__109665;
var G__109701 = count__109666;
var G__109702 = (i__109667 + (1));
seq__109664 = G__109699;
chunk__109665 = G__109700;
count__109666 = G__109701;
i__109667 = G__109702;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__109664);
if(temp__5720__auto__){
var seq__109664__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__109664__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__109664__$1);
var G__109703 = cljs.core.chunk_rest(seq__109664__$1);
var G__109704 = c__4679__auto__;
var G__109705 = cljs.core.count(c__4679__auto__);
var G__109706 = (0);
seq__109664 = G__109703;
chunk__109665 = G__109704;
count__109666 = G__109705;
i__109667 = G__109706;
continue;
} else {
var r = cljs.core.first(seq__109664__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__109707 = cljs.core.next(seq__109664__$1);
var G__109708 = null;
var G__109709 = (0);
var G__109710 = (0);
seq__109664 = G__109707;
chunk__109665 = G__109708;
count__109666 = G__109709;
i__109667 = G__109710;
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
