goog.provide('frontend.util.list');
frontend.util.list.get_prev_item = (function frontend$util$list$get_prev_item(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50349 = arguments.length;
var i__5767__auto___50350 = (0);
while(true){
if((i__5767__auto___50350 < len__5766__auto___50349)){
args__5772__auto__.push((arguments[i__5767__auto___50350]));

var G__50351 = (i__5767__auto___50350 + (1));
i__5767__auto___50350 = G__50351;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__50256){
var vec__50257 = p__50256;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50257,(0),null);
if(frontend.util.cursor.textarea_cursor_first_row_QMARK_(input)){
return null;
} else {
var temp__5718__auto___50355 = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto___50355)){
var item_50357 = temp__5718__auto___50355;
var map__50260_50358 = item_50357;
var map__50260_50359__$1 = cljs.core.__destructure_map(map__50260_50358);
var bullet_50360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50260_50359__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var ordered_50361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50260_50359__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
if(cljs.core.truth_((function (){var and__5041__auto__ = ordered_50361;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bullet_50360,"1");
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
(frontend.util.list.get_prev_item.cljs$lang$applyTo = (function (seq50255){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50255));
}));

frontend.util.list.get_next_item = (function frontend$util$list$get_next_item(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50363 = arguments.length;
var i__5767__auto___50364 = (0);
while(true){
if((i__5767__auto___50364 < len__5766__auto___50363)){
args__5772__auto__.push((arguments[i__5767__auto___50364]));

var G__50369 = (i__5767__auto___50364 + (1));
i__5767__auto___50364 = G__50369;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__50268){
var vec__50269 = p__50268;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50269,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var map__50272 = item;
var map__50272__$1 = cljs.core.__destructure_map(map__50272);
var _bullet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50272__$1,new cljs.core.Keyword(null,"_bullet","_bullet",-1077971906));
var _ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50272__$1,new cljs.core.Keyword(null,"_ordered","_ordered",-802303492));
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
(frontend.util.list.get_next_item.cljs$lang$applyTo = (function (seq50261){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50261));
}));

frontend.util.list.list_beginning_pos = (function frontend$util$list$list_beginning_pos(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50375 = arguments.length;
var i__5767__auto___50376 = (0);
while(true){
if((i__5767__auto___50376 < len__5766__auto___50375)){
args__5772__auto__.push((arguments[i__5767__auto___50376]));

var G__50378 = (i__5767__auto___50376 + (1));
i__5767__auto___50376 = G__50378;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic = (function (p__50274){
var vec__50275 = p__50274;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50275,(0),null);
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
(frontend.util.list.list_beginning_pos.cljs$lang$applyTo = (function (seq50273){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50273));
}));

frontend.util.list.list_end_pos = (function frontend$util$list$list_end_pos(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50383 = arguments.length;
var i__5767__auto___50384 = (0);
while(true){
if((i__5767__auto___50384 < len__5766__auto___50383)){
args__5772__auto__.push((arguments[i__5767__auto___50384]));

var G__50385 = (i__5767__auto___50384 + (1));
i__5767__auto___50384 = G__50385;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic = (function (p__50280){
var vec__50281 = p__50280;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50281,(0),null);
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
(frontend.util.list.list_end_pos.cljs$lang$applyTo = (function (seq50278){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50278));
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
var vec__50324 = lines__$1;
var seq__50325 = cljs.core.seq(vec__50324);
var first__50326 = cljs.core.first(seq__50325);
var seq__50325__$1 = cljs.core.next(seq__50325);
var line = first__50326;
var others = seq__50325__$1;
if(cljs.core.empty_QMARK_(lines__$1)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines__$1,idx,result,double_newlines_QMARK_,vec__50324,seq__50325,first__50326,seq__50325__$1,line,others){
return (function (line__$1){
if(frontend.util.list.newline_QMARK_(line__$1)){
return "";
} else {
return line__$1;
}
});})(lines__$1,idx,result,double_newlines_QMARK_,vec__50324,seq__50325,first__50326,seq__50325__$1,line,others))
,result));
} else {
var vec__50336 = cljs.core.re_find(/^(\d+){1}\./,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50336,(0),null);
var num_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50336,(1),null);
var num = (cljs.core.truth_(num_str)?cljs.core.parse_long(num_str):null);
var double_newlines_QMARK__SINGLEQUOTE_ = ((double_newlines_QMARK_) || (((frontend.util.list.newline_QMARK_(line)) && (((cljs.core.seq(others)) && (frontend.util.list.newline_QMARK_(cljs.core.first(others))))))));
var vec__50339 = (cljs.core.truth_((function (){var and__5041__auto__ = (!(double_newlines_QMARK__SINGLEQUOTE_));
if(and__5041__auto__){
return num;
} else {
return and__5041__auto__;
}
})())?(function (){var idx_SINGLEQUOTE_ = (idx + (1));
var line_SINGLEQUOTE_ = clojure.string.replace_first(line,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),"."].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_SINGLEQUOTE_),"."].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line_SINGLEQUOTE_)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line)], null));
var idx_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50339,(0),null);
var result_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50339,(1),null);
var G__50391 = others;
var G__50392 = idx_SINGLEQUOTE_;
var G__50393 = result_SINGLEQUOTE_;
var G__50394 = double_newlines_QMARK__SINGLEQUOTE_;
lines__$1 = G__50391;
idx = G__50392;
result = G__50393;
double_newlines_QMARK_ = G__50394;
continue;
}
break;
}
});

//# sourceMappingURL=frontend.util.list.js.map
