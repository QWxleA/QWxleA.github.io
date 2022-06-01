goog.provide('frontend.util.list');
frontend.util.list.get_prev_item = (function frontend$util$list$get_prev_item(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50970 = arguments.length;
var i__5767__auto___50971 = (0);
while(true){
if((i__5767__auto___50971 < len__5766__auto___50970)){
args__5772__auto__.push((arguments[i__5767__auto___50971]));

var G__50972 = (i__5767__auto___50971 + (1));
i__5767__auto___50971 = G__50972;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__50816){
var vec__50818 = p__50816;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50818,(0),null);
if(frontend.util.cursor.textarea_cursor_first_row_QMARK_(input)){
return null;
} else {
var temp__5718__auto___50973 = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto___50973)){
var item_50974 = temp__5718__auto___50973;
var map__50822_50975 = item_50974;
var map__50822_50976__$1 = cljs.core.__destructure_map(map__50822_50975);
var bullet_50977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50822_50976__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var ordered_50978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50822_50976__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
if(cljs.core.truth_((function (){var and__5041__auto__ = ordered_50978;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bullet_50977,"1");
} else {
return and__5041__auto__;
}
})())){
} else {
frontend.util.cursor.move_cursor_up(input);
}
} else {
frontend.util.cursor.move_cursor_up(input);
}

return frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
}));

(frontend.util.list.get_prev_item.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.list.get_prev_item.cljs$lang$applyTo = (function (seq50811){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50811));
}));

frontend.util.list.get_next_item = (function frontend$util$list$get_next_item(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50979 = arguments.length;
var i__5767__auto___50980 = (0);
while(true){
if((i__5767__auto___50980 < len__5766__auto___50979)){
args__5772__auto__.push((arguments[i__5767__auto___50980]));

var G__50982 = (i__5767__auto___50980 + (1));
i__5767__auto___50980 = G__50982;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__50829){
var vec__50830 = p__50829;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50830,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var map__50834 = item;
var map__50834__$1 = cljs.core.__destructure_map(map__50834);
var _bullet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50834__$1,new cljs.core.Keyword(null,"_bullet","_bullet",-1077971906));
var _ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50834__$1,new cljs.core.Keyword(null,"_ordered","_ordered",-802303492));
if(frontend.util.cursor.textarea_cursor_last_row_QMARK_(input)){
return null;
} else {
frontend.util.cursor.move_cursor_down(input);

return frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
} else {
return null;
}
}));

(frontend.util.list.get_next_item.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.list.get_next_item.cljs$lang$applyTo = (function (seq50827){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50827));
}));

frontend.util.list.list_beginning_pos = (function frontend$util$list$list_beginning_pos(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50984 = arguments.length;
var i__5767__auto___50985 = (0);
while(true){
if((i__5767__auto___50985 < len__5766__auto___50984)){
args__5772__auto__.push((arguments[i__5767__auto___50985]));

var G__50986 = (i__5767__auto___50985 + (1));
i__5767__auto___50985 = G__50986;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic = (function (p__50841){
var vec__50842 = p__50841;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50842,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var current_pos = frontend.util.cursor.pos(input);
var item_start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(item);
var beginning_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(item_start);
while(true){
if(cljs.core.truth_((function (){var temp__5720__auto____$1 = frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto____$1)){
var prev_item = temp__5720__auto____$1;
return cljs.core.reset_BANG_(beginning_pos,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(prev_item));
} else {
return null;
}
})())){
continue;
} else {
}
break;
}

frontend.util.cursor.move_cursor_to(input,current_pos);

return cljs.core.deref(beginning_pos);
} else {
return null;
}
}));

(frontend.util.list.list_beginning_pos.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.list.list_beginning_pos.cljs$lang$applyTo = (function (seq50838){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50838));
}));

frontend.util.list.list_end_pos = (function frontend$util$list$list_end_pos(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50987 = arguments.length;
var i__5767__auto___50988 = (0);
while(true){
if((i__5767__auto___50988 < len__5766__auto___50987)){
args__5772__auto__.push((arguments[i__5767__auto___50988]));

var G__50989 = (i__5767__auto___50988 + (1));
i__5767__auto___50988 = G__50989;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic = (function (p__50868){
var vec__50870 = p__50868;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50870,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var current_pos = frontend.util.cursor.pos(input);
var item_end = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(item);
var end_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(item_end);
while(true){
if(cljs.core.truth_((function (){var temp__5720__auto____$1 = frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto____$1)){
var next_item = temp__5720__auto____$1;
return cljs.core.reset_BANG_(end_pos,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(next_item));
} else {
return null;
}
})())){
continue;
} else {
}
break;
}

frontend.util.cursor.move_cursor_to(input,current_pos);

return cljs.core.deref(end_pos);
} else {
return null;
}
}));

(frontend.util.list.list_end_pos.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.list.list_end_pos.cljs$lang$applyTo = (function (seq50852){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50852));
}));

frontend.util.list.newline_QMARK_ = (function frontend$util$list$newline_QMARK_(line){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line,"\n")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line,"\r\n")));
});
frontend.util.list.re_order_items = (function frontend$util$list$re_order_items(lines,start_idx){
var lines__$1 = lines;
var idx = start_idx;
var result = cljs.core.PersistentVector.EMPTY;
var double_newlines_QMARK_ = false;
while(true){
var vec__50936 = lines__$1;
var seq__50937 = cljs.core.seq(vec__50936);
var first__50938 = cljs.core.first(seq__50937);
var seq__50937__$1 = cljs.core.next(seq__50937);
var line = first__50938;
var others = seq__50937__$1;
if(cljs.core.empty_QMARK_(lines__$1)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines__$1,idx,result,double_newlines_QMARK_,vec__50936,seq__50937,first__50938,seq__50937__$1,line,others){
return (function (line__$1){
if(frontend.util.list.newline_QMARK_(line__$1)){
return "";
} else {
return line__$1;
}
});})(lines__$1,idx,result,double_newlines_QMARK_,vec__50936,seq__50937,first__50938,seq__50937__$1,line,others))
,result));
} else {
var vec__50945 = cljs.core.re_find(/^(\d+){1}\./,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50945,(0),null);
var num_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50945,(1),null);
var num = (cljs.core.truth_(num_str)?cljs.core.parse_long(num_str):null);
var double_newlines_QMARK__SINGLEQUOTE_ = ((double_newlines_QMARK_) || (((frontend.util.list.newline_QMARK_(line)) && (((cljs.core.seq(others)) && (frontend.util.list.newline_QMARK_(cljs.core.first(others))))))));
var vec__50952 = (cljs.core.truth_((function (){var and__5041__auto__ = (!(double_newlines_QMARK__SINGLEQUOTE_));
if(and__5041__auto__){
return num;
} else {
return and__5041__auto__;
}
})())?(function (){var idx_SINGLEQUOTE_ = (idx + (1));
var line_SINGLEQUOTE_ = clojure.string.replace_first(line,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),"."].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_SINGLEQUOTE_),"."].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line_SINGLEQUOTE_)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line)], null));
var idx_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50952,(0),null);
var result_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50952,(1),null);
var G__50994 = others;
var G__50995 = idx_SINGLEQUOTE_;
var G__50996 = result_SINGLEQUOTE_;
var G__50997 = double_newlines_QMARK__SINGLEQUOTE_;
lines__$1 = G__50994;
idx = G__50995;
result = G__50996;
double_newlines_QMARK_ = G__50997;
continue;
}
break;
}
});

//# sourceMappingURL=frontend.util.list.js.map
