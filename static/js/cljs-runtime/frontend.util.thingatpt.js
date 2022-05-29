goog.provide('frontend.util.thingatpt');
goog.scope(function(){
  frontend.util.thingatpt.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.util.thingatpt.thing_at_point = (function frontend$util$thingatpt$thing_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50748 = arguments.length;
var i__5767__auto___50749 = (0);
while(true){
if((i__5767__auto___50749 < len__5766__auto___50748)){
args__5772__auto__.push((arguments[i__5767__auto___50749]));

var G__50750 = (i__5767__auto___50749 + (1));
i__5767__auto___50749 = G__50750;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (bounds,p__50631){
var vec__50636 = p__50631;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50636,(0),null);
var ignore = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50636,(1),null);
var input__$1 = (function (){var or__5043__auto__ = input;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_input();
}
})();
var content = frontend.util.thingatpt.goog$module$goog$object.get(input__$1,"value");
var pos = frontend.util.cursor.pos(input__$1);
var vec__50644 = ((cljs.core.coll_QMARK_(bounds))?bounds:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds,bounds], null));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50644,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50644,(1),null);
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var start = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(content,left,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,right))?(pos - cljs.core.count(left)):(pos - (1))));
var end = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(content,right,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,right))?pos:((pos - cljs.core.count(right)) + (1))));
var end_STAR_ = (cljs.core.count(right) + end);
if(cljs.core.truth_((function (){var and__5041__auto__ = start;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = end;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,pos);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var thing = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(start + cljs.core.count(left)),end);
if(cljs.core.every_QMARK_(cljs.core.false_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50626_SHARP_){
return clojure.string.includes_QMARK_(thing,p1__50626_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right,ignore], null)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"full-content","full-content",-817477443),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,start,end_STAR_),new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(start + cljs.core.count(left)),end),new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end_STAR_], null);
} else {
return null;
}
} else {
return null;
}
}
}));

(frontend.util.thingatpt.thing_at_point.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.util.thingatpt.thing_at_point.cljs$lang$applyTo = (function (seq50627){
var G__50628 = cljs.core.first(seq50627);
var seq50627__$1 = cljs.core.next(seq50627);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50628,seq50627__$1);
}));

frontend.util.thingatpt.line_at_point = (function frontend$util$thingatpt$line_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50756 = arguments.length;
var i__5767__auto___50757 = (0);
while(true){
if((i__5767__auto___50757 < len__5766__auto___50756)){
args__5772__auto__.push((arguments[i__5767__auto___50757]));

var G__50758 = (i__5767__auto___50757 + (1));
i__5767__auto___50757 = G__50758;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50653){
var vec__50654 = p__50653;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50654,(0),null);
var input__$1 = (function (){var or__5043__auto__ = input;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_input();
}
})();
var line_beginning_pos = frontend.util.cursor.line_beginning_pos(input__$1);
var line_end_pos = frontend.util.cursor.line_end_pos(input__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(line_beginning_pos,line_end_pos)){
var content = frontend.util.thingatpt.goog$module$goog$object.get(input__$1,"value");
var line = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,line_beginning_pos,line_end_pos);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"full-content","full-content",-817477443),line,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159),line,new cljs.core.Keyword(null,"start","start",-355208981),line_beginning_pos,new cljs.core.Keyword(null,"end","end",-268185958),line_end_pos], null);
} else {
return null;
}
}));

(frontend.util.thingatpt.line_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.line_at_point.cljs$lang$applyTo = (function (seq50652){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50652));
}));

frontend.util.thingatpt.block_ref_at_point = (function frontend$util$thingatpt$block_ref_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50759 = arguments.length;
var i__5767__auto___50760 = (0);
while(true){
if((i__5767__auto___50760 < len__5766__auto___50759)){
args__5772__auto__.push((arguments[i__5767__auto___50760]));

var G__50761 = (i__5767__auto___50760 + (1));
i__5767__auto___50760 = G__50761;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50658){
var vec__50659 = p__50658;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50659,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((","))"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input," "], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var block_ref = temp__5720__auto__;
var temp__5720__auto____$1 = cljs.core.uuid(new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(block_ref));
if(cljs.core.truth_(temp__5720__auto____$1)){
var uuid = temp__5720__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block_ref,new cljs.core.Keyword(null,"type","type",1174270348),"block-ref",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"link","link",-1769163468),uuid], 0));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.util.thingatpt.block_ref_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.block_ref_at_point.cljs$lang$applyTo = (function (seq50657){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50657));
}));

frontend.util.thingatpt.page_ref_at_point = (function frontend$util$thingatpt$page_ref_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50762 = arguments.length;
var i__5767__auto___50763 = (0);
while(true){
if((i__5767__auto___50763 < len__5766__auto___50762)){
args__5772__auto__.push((arguments[i__5767__auto___50763]));

var G__50764 = (i__5767__auto___50763 + (1));
i__5767__auto___50763 = G__50764;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50665){
var vec__50666 = p__50665;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50666,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[[","]]"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var page_ref = temp__5720__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(page_ref,new cljs.core.Keyword(null,"type","type",1174270348),"page-ref",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"link","link",-1769163468),logseq.graph_parser.text.get_page_name(new cljs.core.Keyword(null,"full-content","full-content",-817477443).cljs$core$IFn$_invoke$arity$1(page_ref))], 0));
} else {
return null;
}
}));

(frontend.util.thingatpt.page_ref_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.page_ref_at_point.cljs$lang$applyTo = (function (seq50662){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50662));
}));

frontend.util.thingatpt.embed_macro_at_point = (function frontend$util$thingatpt$embed_macro_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50766 = arguments.length;
var i__5767__auto___50767 = (0);
while(true){
if((i__5767__auto___50767 < len__5766__auto___50766)){
args__5772__auto__.push((arguments[i__5767__auto___50767]));

var G__50768 = (i__5767__auto___50767 + (1));
i__5767__auto___50767 = G__50768;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50674){
var vec__50675 = p__50674;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50675,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{{embed","}}"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var macro = temp__5720__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(macro,new cljs.core.Keyword(null,"type","type",1174270348),"macro");
} else {
return null;
}
}));

(frontend.util.thingatpt.embed_macro_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.embed_macro_at_point.cljs$lang$applyTo = (function (seq50673){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50673));
}));

frontend.util.thingatpt.properties_at_point = (function frontend$util$thingatpt$properties_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50769 = arguments.length;
var i__5767__auto___50770 = (0);
while(true){
if((i__5767__auto___50770 < len__5766__auto___50769)){
args__5772__auto__.push((arguments[i__5767__auto___50770]));

var G__50771 = (i__5767__auto___50770 + (1));
i__5767__auto___50770 = G__50771;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50692){
var vec__50693 = p__50692;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50693,(0),null);
var temp__5720__auto__ = (function (){var G__50696 = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var G__50696__$1 = (((G__50696 instanceof cljs.core.Keyword))?G__50696.fqn:null);
switch (G__50696__$1) {
case "org":
return frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.property.properties_start,logseq.graph_parser.property.properties_end], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));

break;
default:
var temp__5720__auto__ = frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var line = temp__5720__auto__;
if(cljs.core.truth_(cljs.core.re_matches(/^[^\s.]+:: .*$/,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(line)))){
return line;
} else {
return null;
}
} else {
return null;
}

}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var properties = temp__5720__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties,new cljs.core.Keyword(null,"type","type",1174270348),"properties-drawer");
} else {
return null;
}
}));

(frontend.util.thingatpt.properties_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.properties_at_point.cljs$lang$applyTo = (function (seq50678){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50678));
}));

frontend.util.thingatpt.property_key_at_point = (function frontend$util$thingatpt$property_key_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50774 = arguments.length;
var i__5767__auto___50775 = (0);
while(true){
if((i__5767__auto___50775 < len__5766__auto___50774)){
args__5772__auto__.push((arguments[i__5767__auto___50775]));

var G__50776 = (i__5767__auto___50775 + (1));
i__5767__auto___50775 = G__50776;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.property_key_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.property_key_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50701){
var vec__50702 = p__50701;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50702,(0),null);
if(cljs.core.truth_(frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)))){
var property = (function (){var G__50707 = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var G__50707__$1 = (((G__50707 instanceof cljs.core.Keyword))?G__50707.fqn:null);
switch (G__50707__$1) {
case "org":
return frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(":",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input,"\n"], 0));

break;
default:
var temp__5720__auto__ = new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)));
if(cljs.core.truth_(temp__5720__auto__)){
var line = temp__5720__auto__;
var key = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,"::"));
var line_beginning_pos = frontend.util.cursor.line_beginning_pos(input);
var pos_in_line = (frontend.util.cursor.pos(input) - line_beginning_pos);
if(((((0) <= pos_in_line)) && ((pos_in_line <= (cljs.core.count(key) + (("::").length)))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-content","full-content",-817477443),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"::"].join(''),new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159),key,new cljs.core.Keyword(null,"start","start",-355208981),line_beginning_pos,new cljs.core.Keyword(null,"end","end",-268185958),(line_beginning_pos + (([cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"::"].join('')).length))], null);
} else {
return null;
}
} else {
return null;
}

}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(property,new cljs.core.Keyword(null,"type","type",1174270348),"property-key");
} else {
return null;
}
}));

(frontend.util.thingatpt.property_key_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.property_key_at_point.cljs$lang$applyTo = (function (seq50700){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50700));
}));

frontend.util.thingatpt.get_list_item_indent_AMPERSAND_bullet = (function frontend$util$thingatpt$get_list_item_indent_AMPERSAND_bullet(line){
if(clojure.string.blank_QMARK_(line)){
return null;
} else {
var or__5043__auto__ = cljs.core.re_matches(/^([ \t\r]*)(\+|\*|-){1} (\[[X ]\])?.*$/,line);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.re_matches(/^([\s]*)(\d+){1}\. (\[[X ]\])?.*$/,line);
}
}
});
frontend.util.thingatpt.list_item_at_point = (function frontend$util$thingatpt$list_item_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50778 = arguments.length;
var i__5767__auto___50779 = (0);
while(true){
if((i__5767__auto___50779 < len__5766__auto___50778)){
args__5772__auto__.push((arguments[i__5767__auto___50779]));

var G__50784 = (i__5767__auto___50779 + (1));
i__5767__auto___50779 = G__50784;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50712){
var vec__50713 = p__50712;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50713,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var line = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.util.thingatpt.get_list_item_indent_AMPERSAND_bullet(new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(line));
if(cljs.core.truth_(temp__5720__auto____$1)){
var vec__50716 = temp__5720__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50716,(0),null);
var indent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50716,(1),null);
var bullet = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50716,(2),null);
var checkbox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50716,(3),null);
var bullet__$1 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(bullet);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(line,new cljs.core.Keyword(null,"type","type",1174270348),"list-item",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"indent","indent",-148200125),indent,new cljs.core.Keyword(null,"bullet","bullet",726988937),bullet__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),checkbox,new cljs.core.Keyword(null,"ordered","ordered",1187041426),cljs.core.int_QMARK_(bullet__$1)], 0));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.util.thingatpt.list_item_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.list_item_at_point.cljs$lang$applyTo = (function (seq50711){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50711));
}));

frontend.util.thingatpt.get_markup_at_point = (function frontend$util$thingatpt$get_markup_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50870 = arguments.length;
var i__5767__auto___50871 = (0);
while(true){
if((i__5767__auto___50871 < len__5766__auto___50870)){
args__5772__auto__.push((arguments[i__5767__auto___50871]));

var G__50872 = (i__5767__auto___50871 + (1));
i__5767__auto___50871 = G__50872;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.get_markup_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.get_markup_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50720){
var vec__50721 = p__50720;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50721,(0),null);
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var or__5043__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_hr(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_bold(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_italic(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_underline(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_strike_through(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_highlight(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
return frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_code(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
}
}
}
}
}
}));

(frontend.util.thingatpt.get_markup_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.get_markup_at_point.cljs$lang$applyTo = (function (seq50719){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50719));
}));

frontend.util.thingatpt.markup_at_point = (function frontend$util$thingatpt$markup_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50875 = arguments.length;
var i__5767__auto___50876 = (0);
while(true){
if((i__5767__auto___50876 < len__5766__auto___50875)){
args__5772__auto__.push((arguments[i__5767__auto___50876]));

var G__50877 = (i__5767__auto___50876 + (1));
i__5767__auto___50876 = G__50877;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.markup_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.markup_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50726){
var vec__50727 = p__50726;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50727,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.get_markup_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var markup = temp__5720__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(markup,new cljs.core.Keyword(null,"type","type",1174270348),"markup");
} else {
return null;
}
}));

(frontend.util.thingatpt.markup_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.markup_at_point.cljs$lang$applyTo = (function (seq50725){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50725));
}));

frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point = (function frontend$util$thingatpt$org_admonition_AMPERSAND_src_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50878 = arguments.length;
var i__5767__auto___50879 = (0);
while(true){
if((i__5767__auto___50879 < len__5766__auto___50878)){
args__5772__auto__.push((arguments[i__5767__auto___50879]));

var G__50880 = (i__5767__auto___50879 + (1));
i__5767__auto___50879 = G__50880;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50731){
var vec__50732 = p__50731;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50732,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#+BEGIN_","#+END_"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var admonition_AMPERSAND_src = temp__5720__auto__;
var params = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clojure.string.split_lines(new cljs.core.Keyword(null,"full-content","full-content",-817477443).cljs$core$IFn$_invoke$arity$1(admonition_AMPERSAND_src))),/\s/);
if(cljs.core.coll_QMARK_(params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(admonition_AMPERSAND_src,new cljs.core.Keyword(null,"type","type",1174270348),"source-block",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"language","language",-1591107564),cljs.core.ffirst(params),new cljs.core.Keyword(null,"headers","headers",-835030129),(((cljs.core.count(params) > (2)))?cljs.core.last((params.cljs$core$IFn$_invoke$arity$0 ? params.cljs$core$IFn$_invoke$arity$0() : params.call(null))):null),new cljs.core.Keyword(null,"end","end",-268185958),(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(admonition_AMPERSAND_src) + (("src").length))], 0));
} else {
var temp__5720__auto____$1 = clojure.string.trim(clojure.string.replace(params,"#+BEGIN_",""));
if(cljs.core.truth_(temp__5720__auto____$1)){
var name = temp__5720__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(admonition_AMPERSAND_src,new cljs.core.Keyword(null,"type","type",1174270348),"admonition-block",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"end","end",-268185958),(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(admonition_AMPERSAND_src) + ((name).length))], 0));
} else {
return null;
}

}
} else {
return null;
}
}));

(frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$lang$applyTo = (function (seq50730){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50730));
}));

frontend.util.thingatpt.markdown_src_at_point = (function frontend$util$thingatpt$markdown_src_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50881 = arguments.length;
var i__5767__auto___50882 = (0);
while(true){
if((i__5767__auto___50882 < len__5766__auto___50881)){
args__5772__auto__.push((arguments[i__5767__auto___50882]));

var G__50883 = (i__5767__auto___50882 + (1));
i__5767__auto___50882 = G__50883;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50736){
var vec__50737 = p__50736;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50737,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["```","```"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var markdown_src = temp__5720__auto__;
var language = clojure.string.trim(clojure.string.replace(cljs.core.first(clojure.string.split_lines(new cljs.core.Keyword(null,"full-content","full-content",-817477443).cljs$core$IFn$_invoke$arity$1(markdown_src))),"```",""));
var raw_content = new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(markdown_src);
var blank_raw_content_QMARK_ = clojure.string.blank_QMARK_(raw_content);
var action = ((((blank_raw_content_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(raw_content),language))))?new cljs.core.Keyword(null,"into-code-editor","into-code-editor",-2140962343):new cljs.core.Keyword(null,"none","none",1333468478));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(markdown_src,new cljs.core.Keyword(null,"type","type",1174270348),"source-block",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"language","language",-1591107564),language,new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"headers","headers",-835030129),null], 0));
} else {
return null;
}
}));

(frontend.util.thingatpt.markdown_src_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.markdown_src_at_point.cljs$lang$applyTo = (function (seq50735){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50735));
}));

frontend.util.thingatpt.admonition_AMPERSAND_src_at_point = (function frontend$util$thingatpt$admonition_AMPERSAND_src_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50889 = arguments.length;
var i__5767__auto___50890 = (0);
while(true){
if((i__5767__auto___50890 < len__5766__auto___50889)){
args__5772__auto__.push((arguments[i__5767__auto___50890]));

var G__50891 = (i__5767__auto___50890 + (1));
i__5767__auto___50890 = G__50891;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__50741){
var vec__50742 = p__50741;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50742,(0),null);
var or__5043__auto__ = frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
}));

(frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$lang$applyTo = (function (seq50740){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50740));
}));

frontend.util.thingatpt.default_settings = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"admonition&src?","admonition&src?",1506556328),true,new cljs.core.Keyword(null,"markup?","markup?",-1222732996),false,new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853),true,new cljs.core.Keyword(null,"page-ref?","page-ref?",677685143),true,new cljs.core.Keyword(null,"properties?","properties?",3428414),true,new cljs.core.Keyword(null,"list?","list?",-1642026156),true], null);
frontend.util.thingatpt.get_setting = (function frontend$util$thingatpt$get_setting(setting){
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dwim","settings","dwim/settings",1559339906),setting], null));
if((!((value == null)))){
return value;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.util.thingatpt.default_settings,setting);
}
});

//# sourceMappingURL=frontend.util.thingatpt.js.map
