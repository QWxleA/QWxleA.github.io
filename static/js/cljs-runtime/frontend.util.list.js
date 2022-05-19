goog.provide('frontend.util.list');
frontend.util.list.get_prev_item = (function frontend$util$list$get_prev_item(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63757 = arguments.length;
var i__4865__auto___63758 = (0);
while(true){
if((i__4865__auto___63758 < len__4864__auto___63757)){
args__4870__auto__.push((arguments[i__4865__auto___63758]));

var G__63759 = (i__4865__auto___63758 + (1));
i__4865__auto___63758 = G__63759;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__63707){
var vec__63708 = p__63707;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63708,(0),null);
if(frontend.util.cursor.textarea_cursor_first_row_QMARK_(input)){
return null;
} else {
var temp__5718__auto___63760 = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto___63760)){
var item_63761 = temp__5718__auto___63760;
var map__63711_63762 = item_63761;
var map__63711_63763__$1 = cljs.core.__destructure_map(map__63711_63762);
var bullet_63764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63711_63763__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var ordered_63765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63711_63763__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
if(cljs.core.truth_((function (){var and__4251__auto__ = ordered_63765;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bullet_63764,"1");
} else {
return and__4251__auto__;
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
(frontend.util.list.get_prev_item.cljs$lang$applyTo = (function (seq63706){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63706));
}));

frontend.util.list.get_next_item = (function frontend$util$list$get_next_item(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63766 = arguments.length;
var i__4865__auto___63767 = (0);
while(true){
if((i__4865__auto___63767 < len__4864__auto___63766)){
args__4870__auto__.push((arguments[i__4865__auto___63767]));

var G__63768 = (i__4865__auto___63767 + (1));
i__4865__auto___63767 = G__63768;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__63713){
var vec__63714 = p__63713;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63714,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var map__63717 = item;
var map__63717__$1 = cljs.core.__destructure_map(map__63717);
var _bullet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63717__$1,new cljs.core.Keyword(null,"_bullet","_bullet",-1077971906));
var _ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63717__$1,new cljs.core.Keyword(null,"_ordered","_ordered",-802303492));
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
(frontend.util.list.get_next_item.cljs$lang$applyTo = (function (seq63712){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63712));
}));

frontend.util.list.list_beginning_pos = (function frontend$util$list$list_beginning_pos(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63769 = arguments.length;
var i__4865__auto___63770 = (0);
while(true){
if((i__4865__auto___63770 < len__4864__auto___63769)){
args__4870__auto__.push((arguments[i__4865__auto___63770]));

var G__63771 = (i__4865__auto___63770 + (1));
i__4865__auto___63770 = G__63771;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic = (function (p__63725){
var vec__63726 = p__63725;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63726,(0),null);
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
(frontend.util.list.list_beginning_pos.cljs$lang$applyTo = (function (seq63722){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63722));
}));

frontend.util.list.list_end_pos = (function frontend$util$list$list_end_pos(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63772 = arguments.length;
var i__4865__auto___63773 = (0);
while(true){
if((i__4865__auto___63773 < len__4864__auto___63772)){
args__4870__auto__.push((arguments[i__4865__auto___63773]));

var G__63774 = (i__4865__auto___63773 + (1));
i__4865__auto___63773 = G__63774;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic = (function (p__63731){
var vec__63732 = p__63731;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63732,(0),null);
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
(frontend.util.list.list_end_pos.cljs$lang$applyTo = (function (seq63729){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63729));
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
var vec__63748 = lines__$1;
var seq__63749 = cljs.core.seq(vec__63748);
var first__63750 = cljs.core.first(seq__63749);
var seq__63749__$1 = cljs.core.next(seq__63749);
var line = first__63750;
var others = seq__63749__$1;
if(cljs.core.empty_QMARK_(lines__$1)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines__$1,idx,result,double_newlines_QMARK_,vec__63748,seq__63749,first__63750,seq__63749__$1,line,others){
return (function (line__$1){
if(frontend.util.list.newline_QMARK_(line__$1)){
return "";
} else {
return line__$1;
}
});})(lines__$1,idx,result,double_newlines_QMARK_,vec__63748,seq__63749,first__63750,seq__63749__$1,line,others))
,result));
} else {
var vec__63751 = cljs.core.re_find(/^(\d+){1}\./,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63751,(0),null);
var num_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63751,(1),null);
var num = (cljs.core.truth_(num_str)?frontend.util.safe_parse_int(num_str):null);
var double_newlines_QMARK__SINGLEQUOTE_ = ((double_newlines_QMARK_) || (((frontend.util.list.newline_QMARK_(line)) && (((cljs.core.seq(others)) && (frontend.util.list.newline_QMARK_(cljs.core.first(others))))))));
var vec__63754 = (cljs.core.truth_((function (){var and__4251__auto__ = (!(double_newlines_QMARK__SINGLEQUOTE_));
if(and__4251__auto__){
return num;
} else {
return and__4251__auto__;
}
})())?(function (){var idx_SINGLEQUOTE_ = (idx + (1));
var line_SINGLEQUOTE_ = clojure.string.replace_first(line,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),"."].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_SINGLEQUOTE_),"."].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line_SINGLEQUOTE_)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line)], null));
var idx_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63754,(0),null);
var result_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63754,(1),null);
var G__63775 = others;
var G__63776 = idx_SINGLEQUOTE_;
var G__63777 = result_SINGLEQUOTE_;
var G__63778 = double_newlines_QMARK__SINGLEQUOTE_;
lines__$1 = G__63775;
idx = G__63776;
result = G__63777;
double_newlines_QMARK_ = G__63778;
continue;
}
break;
}
});

//# sourceMappingURL=frontend.util.list.js.map
