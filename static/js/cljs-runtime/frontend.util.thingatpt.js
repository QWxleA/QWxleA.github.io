goog.provide('frontend.util.thingatpt');
goog.scope(function(){
  frontend.util.thingatpt.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.util.thingatpt.thing_at_point = (function frontend$util$thingatpt$thing_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95076 = arguments.length;
var i__4865__auto___95077 = (0);
while(true){
if((i__4865__auto___95077 < len__4864__auto___95076)){
args__4870__auto__.push((arguments[i__4865__auto___95077]));

var G__95078 = (i__4865__auto___95077 + (1));
i__4865__auto___95077 = G__95078;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (bounds,p__94932){
var vec__94936 = p__94932;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94936,(0),null);
var ignore = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94936,(1),null);
var input__$1 = (function (){var or__4253__auto__ = input;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_input();
}
})();
var content = frontend.util.thingatpt.goog$module$goog$object.get(input__$1,"value");
var pos = frontend.util.cursor.pos(input__$1);
var vec__94939 = ((cljs.core.coll_QMARK_(bounds))?bounds:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds,bounds], null));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94939,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94939,(1),null);
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var start = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(content,left,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,right))?(pos - cljs.core.count(left)):(pos - (1))));
var end = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(content,right,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,right))?pos:((pos - cljs.core.count(right)) + (1))));
var end_STAR_ = (cljs.core.count(right) + end);
if(cljs.core.truth_((function (){var and__4251__auto__ = start;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = end;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,pos);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var thing = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(start + cljs.core.count(left)),end);
if(cljs.core.every_QMARK_(cljs.core.false_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__94929_SHARP_){
return clojure.string.includes_QMARK_(thing,p1__94929_SHARP_);
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
(frontend.util.thingatpt.thing_at_point.cljs$lang$applyTo = (function (seq94930){
var G__94931 = cljs.core.first(seq94930);
var seq94930__$1 = cljs.core.next(seq94930);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94931,seq94930__$1);
}));

frontend.util.thingatpt.line_at_point = (function frontend$util$thingatpt$line_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95085 = arguments.length;
var i__4865__auto___95086 = (0);
while(true){
if((i__4865__auto___95086 < len__4864__auto___95085)){
args__4870__auto__.push((arguments[i__4865__auto___95086]));

var G__95092 = (i__4865__auto___95086 + (1));
i__4865__auto___95086 = G__95092;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__94952){
var vec__94953 = p__94952;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94953,(0),null);
var input__$1 = (function (){var or__4253__auto__ = input;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
(frontend.util.thingatpt.line_at_point.cljs$lang$applyTo = (function (seq94947){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94947));
}));

frontend.util.thingatpt.block_ref_at_point = (function frontend$util$thingatpt$block_ref_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95093 = arguments.length;
var i__4865__auto___95094 = (0);
while(true){
if((i__4865__auto___95094 < len__4864__auto___95093)){
args__4870__auto__.push((arguments[i__4865__auto___95094]));

var G__95095 = (i__4865__auto___95094 + (1));
i__4865__auto___95094 = G__95095;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__94964){
var vec__94965 = p__94964;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94965,(0),null);
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
(frontend.util.thingatpt.block_ref_at_point.cljs$lang$applyTo = (function (seq94957){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94957));
}));

frontend.util.thingatpt.page_ref_at_point = (function frontend$util$thingatpt$page_ref_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95096 = arguments.length;
var i__4865__auto___95097 = (0);
while(true){
if((i__4865__auto___95097 < len__4864__auto___95096)){
args__4870__auto__.push((arguments[i__4865__auto___95097]));

var G__95098 = (i__4865__auto___95097 + (1));
i__4865__auto___95097 = G__95098;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__94970){
var vec__94971 = p__94970;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94971,(0),null);
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
(frontend.util.thingatpt.page_ref_at_point.cljs$lang$applyTo = (function (seq94969){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94969));
}));

frontend.util.thingatpt.embed_macro_at_point = (function frontend$util$thingatpt$embed_macro_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95099 = arguments.length;
var i__4865__auto___95100 = (0);
while(true){
if((i__4865__auto___95100 < len__4864__auto___95099)){
args__4870__auto__.push((arguments[i__4865__auto___95100]));

var G__95101 = (i__4865__auto___95100 + (1));
i__4865__auto___95100 = G__95101;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__94975){
var vec__94976 = p__94975;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94976,(0),null);
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
(frontend.util.thingatpt.embed_macro_at_point.cljs$lang$applyTo = (function (seq94974){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94974));
}));

frontend.util.thingatpt.properties_at_point = (function frontend$util$thingatpt$properties_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95102 = arguments.length;
var i__4865__auto___95103 = (0);
while(true){
if((i__4865__auto___95103 < len__4864__auto___95102)){
args__4870__auto__.push((arguments[i__4865__auto___95103]));

var G__95104 = (i__4865__auto___95103 + (1));
i__4865__auto___95103 = G__95104;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__94980){
var vec__94981 = p__94980;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94981,(0),null);
var temp__5720__auto__ = (function (){var G__94984 = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var G__94984__$1 = (((G__94984 instanceof cljs.core.Keyword))?G__94984.fqn:null);
switch (G__94984__$1) {
case "org":
return frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.property.properties_start,frontend.util.property.properties_end], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));

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
(frontend.util.thingatpt.properties_at_point.cljs$lang$applyTo = (function (seq94979){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94979));
}));

frontend.util.thingatpt.property_key_at_point = (function frontend$util$thingatpt$property_key_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95106 = arguments.length;
var i__4865__auto___95107 = (0);
while(true){
if((i__4865__auto___95107 < len__4864__auto___95106)){
args__4870__auto__.push((arguments[i__4865__auto___95107]));

var G__95108 = (i__4865__auto___95107 + (1));
i__4865__auto___95107 = G__95108;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.property_key_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.property_key_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__94986){
var vec__94987 = p__94986;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94987,(0),null);
if(cljs.core.truth_(frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)))){
var property = (function (){var G__94990 = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var G__94990__$1 = (((G__94990 instanceof cljs.core.Keyword))?G__94990.fqn:null);
switch (G__94990__$1) {
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
(frontend.util.thingatpt.property_key_at_point.cljs$lang$applyTo = (function (seq94985){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94985));
}));

frontend.util.thingatpt.get_list_item_indent_AMPERSAND_bullet = (function frontend$util$thingatpt$get_list_item_indent_AMPERSAND_bullet(line){
if(clojure.string.blank_QMARK_(line)){
return null;
} else {
var or__4253__auto__ = cljs.core.re_matches(/^([ \t\r]*)(\+|\*|-){1} (\[[X ]\])?.*$/,line);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.re_matches(/^([\s]*)(\d+){1}\. (\[[X ]\])?.*$/,line);
}
}
});
frontend.util.thingatpt.list_item_at_point = (function frontend$util$thingatpt$list_item_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95110 = arguments.length;
var i__4865__auto___95111 = (0);
while(true){
if((i__4865__auto___95111 < len__4864__auto___95110)){
args__4870__auto__.push((arguments[i__4865__auto___95111]));

var G__95112 = (i__4865__auto___95111 + (1));
i__4865__auto___95111 = G__95112;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__94996){
var vec__94997 = p__94996;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94997,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var line = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.util.thingatpt.get_list_item_indent_AMPERSAND_bullet(new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(line));
if(cljs.core.truth_(temp__5720__auto____$1)){
var vec__95000 = temp__5720__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95000,(0),null);
var indent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95000,(1),null);
var bullet = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95000,(2),null);
var checkbox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95000,(3),null);
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
(frontend.util.thingatpt.list_item_at_point.cljs$lang$applyTo = (function (seq94995){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94995));
}));

frontend.util.thingatpt.get_markup_at_point = (function frontend$util$thingatpt$get_markup_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95113 = arguments.length;
var i__4865__auto___95114 = (0);
while(true){
if((i__4865__auto___95114 < len__4864__auto___95113)){
args__4870__auto__.push((arguments[i__4865__auto___95114]));

var G__95115 = (i__4865__auto___95114 + (1));
i__4865__auto___95114 = G__95115;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.get_markup_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.get_markup_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__95044){
var vec__95049 = p__95044;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95049,(0),null);
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var or__4253__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_hr(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_bold(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_italic(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_underline(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_strike_through(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_highlight(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
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
(frontend.util.thingatpt.get_markup_at_point.cljs$lang$applyTo = (function (seq95035){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq95035));
}));

frontend.util.thingatpt.markup_at_point = (function frontend$util$thingatpt$markup_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95116 = arguments.length;
var i__4865__auto___95117 = (0);
while(true){
if((i__4865__auto___95117 < len__4864__auto___95116)){
args__4870__auto__.push((arguments[i__4865__auto___95117]));

var G__95118 = (i__4865__auto___95117 + (1));
i__4865__auto___95117 = G__95118;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.markup_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.markup_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__95057){
var vec__95058 = p__95057;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95058,(0),null);
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
(frontend.util.thingatpt.markup_at_point.cljs$lang$applyTo = (function (seq95055){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq95055));
}));

frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point = (function frontend$util$thingatpt$org_admonition_AMPERSAND_src_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95119 = arguments.length;
var i__4865__auto___95120 = (0);
while(true){
if((i__4865__auto___95120 < len__4864__auto___95119)){
args__4870__auto__.push((arguments[i__4865__auto___95120]));

var G__95121 = (i__4865__auto___95120 + (1));
i__4865__auto___95120 = G__95121;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__95062){
var vec__95063 = p__95062;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95063,(0),null);
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
(frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$lang$applyTo = (function (seq95061){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq95061));
}));

frontend.util.thingatpt.markdown_src_at_point = (function frontend$util$thingatpt$markdown_src_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95122 = arguments.length;
var i__4865__auto___95123 = (0);
while(true){
if((i__4865__auto___95123 < len__4864__auto___95122)){
args__4870__auto__.push((arguments[i__4865__auto___95123]));

var G__95124 = (i__4865__auto___95123 + (1));
i__4865__auto___95123 = G__95124;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__95067){
var vec__95068 = p__95067;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95068,(0),null);
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
(frontend.util.thingatpt.markdown_src_at_point.cljs$lang$applyTo = (function (seq95066){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq95066));
}));

frontend.util.thingatpt.admonition_AMPERSAND_src_at_point = (function frontend$util$thingatpt$admonition_AMPERSAND_src_at_point(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95125 = arguments.length;
var i__4865__auto___95126 = (0);
while(true){
if((i__4865__auto___95126 < len__4864__auto___95125)){
args__4870__auto__.push((arguments[i__4865__auto___95126]));

var G__95127 = (i__4865__auto___95126 + (1));
i__4865__auto___95126 = G__95127;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__95072){
var vec__95073 = p__95072;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95073,(0),null);
var or__4253__auto__ = frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
}));

(frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$lang$applyTo = (function (seq95071){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq95071));
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
