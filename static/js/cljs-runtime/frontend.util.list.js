goog.provide('frontend.util.list');
frontend.util.list.get_prev_item = (function frontend$util$list$get_prev_item(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62604 = arguments.length;
var i__4865__auto___62605 = (0);
while(true){
if((i__4865__auto___62605 < len__4864__auto___62604)){
args__4870__auto__.push((arguments[i__4865__auto___62605]));

var G__62607 = (i__4865__auto___62605 + (1));
i__4865__auto___62605 = G__62607;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__62554){
var vec__62555 = p__62554;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62555,(0),null);
if(frontend.util.cursor.textarea_cursor_first_row_QMARK_(input)){
return null;
} else {
var temp__5718__auto___62608 = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto___62608)){
var item_62609 = temp__5718__auto___62608;
var map__62558_62610 = item_62609;
var map__62558_62611__$1 = cljs.core.__destructure_map(map__62558_62610);
var bullet_62612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62558_62611__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var ordered_62613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62558_62611__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
if(cljs.core.truth_((function (){var and__4251__auto__ = ordered_62613;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bullet_62612,"1");
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
(frontend.util.list.get_prev_item.cljs$lang$applyTo = (function (seq62553){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62553));
}));

frontend.util.list.get_next_item = (function frontend$util$list$get_next_item(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62617 = arguments.length;
var i__4865__auto___62618 = (0);
while(true){
if((i__4865__auto___62618 < len__4864__auto___62617)){
args__4870__auto__.push((arguments[i__4865__auto___62618]));

var G__62619 = (i__4865__auto___62618 + (1));
i__4865__auto___62618 = G__62619;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__62560){
var vec__62561 = p__62560;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62561,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var map__62564 = item;
var map__62564__$1 = cljs.core.__destructure_map(map__62564);
var _bullet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword(null,"_bullet","_bullet",-1077971906));
var _ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword(null,"_ordered","_ordered",-802303492));
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
(frontend.util.list.get_next_item.cljs$lang$applyTo = (function (seq62559){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62559));
}));

frontend.util.list.list_beginning_pos = (function frontend$util$list$list_beginning_pos(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62620 = arguments.length;
var i__4865__auto___62621 = (0);
while(true){
if((i__4865__auto___62621 < len__4864__auto___62620)){
args__4870__auto__.push((arguments[i__4865__auto___62621]));

var G__62622 = (i__4865__auto___62621 + (1));
i__4865__auto___62621 = G__62622;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic = (function (p__62567){
var vec__62568 = p__62567;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62568,(0),null);
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
(frontend.util.list.list_beginning_pos.cljs$lang$applyTo = (function (seq62566){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62566));
}));

frontend.util.list.list_end_pos = (function frontend$util$list$list_end_pos(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62623 = arguments.length;
var i__4865__auto___62624 = (0);
while(true){
if((i__4865__auto___62624 < len__4864__auto___62623)){
args__4870__auto__.push((arguments[i__4865__auto___62624]));

var G__62625 = (i__4865__auto___62624 + (1));
i__4865__auto___62624 = G__62625;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic = (function (p__62572){
var vec__62573 = p__62572;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62573,(0),null);
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
(frontend.util.list.list_end_pos.cljs$lang$applyTo = (function (seq62571){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62571));
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
var vec__62595 = lines__$1;
var seq__62596 = cljs.core.seq(vec__62595);
var first__62597 = cljs.core.first(seq__62596);
var seq__62596__$1 = cljs.core.next(seq__62596);
var line = first__62597;
var others = seq__62596__$1;
if(cljs.core.empty_QMARK_(lines__$1)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines__$1,idx,result,double_newlines_QMARK_,vec__62595,seq__62596,first__62597,seq__62596__$1,line,others){
return (function (line__$1){
if(frontend.util.list.newline_QMARK_(line__$1)){
return "";
} else {
return line__$1;
}
});})(lines__$1,idx,result,double_newlines_QMARK_,vec__62595,seq__62596,first__62597,seq__62596__$1,line,others))
,result));
} else {
var vec__62598 = cljs.core.re_find(/^(\d+){1}\./,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62598,(0),null);
var num_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62598,(1),null);
var num = (cljs.core.truth_(num_str)?frontend.util.safe_parse_int(num_str):null);
var double_newlines_QMARK__SINGLEQUOTE_ = ((double_newlines_QMARK_) || (((frontend.util.list.newline_QMARK_(line)) && (((cljs.core.seq(others)) && (frontend.util.list.newline_QMARK_(cljs.core.first(others))))))));
var vec__62601 = (cljs.core.truth_((function (){var and__4251__auto__ = (!(double_newlines_QMARK__SINGLEQUOTE_));
if(and__4251__auto__){
return num;
} else {
return and__4251__auto__;
}
})())?(function (){var idx_SINGLEQUOTE_ = (idx + (1));
var line_SINGLEQUOTE_ = clojure.string.replace_first(line,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),"."].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_SINGLEQUOTE_),"."].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line_SINGLEQUOTE_)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line)], null));
var idx_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62601,(0),null);
var result_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62601,(1),null);
var G__62627 = others;
var G__62628 = idx_SINGLEQUOTE_;
var G__62629 = result_SINGLEQUOTE_;
var G__62630 = double_newlines_QMARK__SINGLEQUOTE_;
lines__$1 = G__62627;
idx = G__62628;
result = G__62629;
double_newlines_QMARK_ = G__62630;
continue;
}
break;
}
});

//# sourceMappingURL=frontend.util.list.js.map
