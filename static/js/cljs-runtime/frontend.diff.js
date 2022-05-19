goog.provide('frontend.diff');
goog.scope(function(){
  frontend.diff.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$diff$dist$diff=shadow.js.require("module$node_modules$diff$dist$diff", {});
frontend.diff.diff = (function frontend$diff$diff(s1,s2){
return cljs_bean.core.__GT_clj((function (){var fexpr__63758 = frontend.diff.goog$module$goog$object.get(module$node_modules$diff$dist$diff,"diffLines");
return (fexpr__63758.cljs$core$IFn$_invoke$arity$2 ? fexpr__63758.cljs$core$IFn$_invoke$arity$2(s1,s2) : fexpr__63758.call(null,s1,s2));
})());
});
frontend.diff.inline_special_chars = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["`",null,"$",null,"*",null,"+",null,"/",null,"^",null,"~",null,"_",null], null), null);
frontend.diff.markdown_link_QMARK_ = (function frontend$diff$markdown_link_QMARK_(markup,current_line,pos){
var and__4251__auto__ = current_line;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(markup,pos),"]")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(markup,(pos + (1))),"(")) && (((clojure.string.includes_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(current_line,(0),pos),"[")) && (clojure.string.includes_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(current_line,pos),")")))))));
} else {
return and__4251__auto__;
}
});
frontend.diff.find_position = (function frontend$diff$find_position(markup,text){
if(((typeof markup === 'string') && (typeof text === 'string'))){
try{var pos = (function (){var t1 = cljs.core.seq(clojure.string.lower_case(markup));
var t2 = cljs.core.seq(clojure.string.lower_case(text));
var i1 = (0);
var i2 = (0);
while(true){
var vec__63791 = t1;
var seq__63792 = cljs.core.seq(vec__63791);
var first__63793 = cljs.core.first(seq__63792);
var seq__63792__$1 = cljs.core.next(seq__63792);
var h1 = first__63793;
var r1 = seq__63792__$1;
var vec__63794 = t2;
var seq__63795 = cljs.core.seq(vec__63794);
var first__63796 = cljs.core.first(seq__63795);
var seq__63795__$1 = cljs.core.next(seq__63795);
var h2 = first__63796;
var r2 = seq__63795__$1;
if(((cljs.core.empty_QMARK_(t1)) || (cljs.core.empty_QMARK_(t2)))){
return i1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h1,h2)){
var G__63799 = r1;
var G__63800 = r2;
var G__63801 = (i1 + (1));
var G__63802 = (i2 + (1));
t1 = G__63799;
t2 = G__63800;
i1 = G__63801;
i2 = G__63802;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__63797 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [" ",null,"[",null,"]",null], null), null);
return (fexpr__63797.cljs$core$IFn$_invoke$arity$1 ? fexpr__63797.cljs$core$IFn$_invoke$arity$1(h2) : fexpr__63797.call(null,h2));
})())){
var G__63803 = t1;
var G__63804 = r2;
var G__63805 = i1;
var G__63806 = (i2 + (1));
t1 = G__63803;
t2 = G__63804;
i1 = G__63805;
i2 = G__63806;
continue;
} else {
var G__63807 = r1;
var G__63808 = t2;
var G__63809 = (i1 + (1));
var G__63810 = i2;
t1 = G__63807;
t2 = G__63808;
i1 = G__63809;
i2 = G__63810;
continue;

}
}
}
break;
}
})();
var current_line = logseq.graph_parser.text.get_current_line_by_pos(markup,pos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(frontend.util.nth_safe(markup,pos),frontend.util.nth_safe(markup,(pos + (1))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["]"], 0))){
return (pos + (2));
} else {
if(cljs.core.contains_QMARK_(frontend.diff.inline_special_chars,frontend.util.nth_safe(markup,pos))){
var matched = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(frontend.diff.inline_special_chars,logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$2(markup,pos)));
var matched_QMARK_ = (function (){var and__4251__auto__ = current_line;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(current_line,clojure.string.reverse(matched));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(matched_QMARK_)){
return (pos + cljs.core.count(matched));
} else {
return pos;
}
} else {
if(cljs.core.truth_(frontend.diff.markdown_link_QMARK_(markup,current_line,pos))){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(current_line,pos),")");
return (pos + (idx + (1)));
} else {
return pos;

}
}
}
}catch (e63772){if((e63772 instanceof Error)){
var e = e63772;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.diff",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("diff","find-position","diff/find-position",-780421417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.Keyword(null,"line","line",212345235),72], null)),null);

return cljs.core.count(markup);
} else {
throw e63772;

}
}} else {
return null;
}
});

//# sourceMappingURL=frontend.diff.js.map
