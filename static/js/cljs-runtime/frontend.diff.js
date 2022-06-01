goog.provide('frontend.diff');
goog.scope(function(){
  frontend.diff.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$diff$dist$diff=shadow.js.require("module$node_modules$diff$dist$diff", {});
frontend.diff.diff = (function frontend$diff$diff(s1,s2){
return cljs_bean.core.__GT_clj((function (){var G__49221 = s1;
var G__49222 = s2;
var G__49223 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["newlineIsToken",true], null));
var fexpr__49220 = frontend.diff.goog$module$goog$object.get(module$node_modules$diff$dist$diff,"diffLines");
return (fexpr__49220.cljs$core$IFn$_invoke$arity$3 ? fexpr__49220.cljs$core$IFn$_invoke$arity$3(G__49221,G__49222,G__49223) : fexpr__49220.call(null,G__49221,G__49222,G__49223));
})());
});
frontend.diff.inline_special_chars = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["`",null,"$",null,"*",null,"+",null,"/",null,"^",null,"~",null,"_",null], null), null);
frontend.diff.markdown_link_QMARK_ = (function frontend$diff$markdown_link_QMARK_(markup,current_line,pos){
var and__5041__auto__ = current_line;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(markup,pos),"]")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(markup,(pos + (1))),"(")) && (((clojure.string.includes_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(current_line,(0),pos),"[")) && (clojure.string.includes_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(current_line,pos),")")))))));
} else {
return and__5041__auto__;
}
});
frontend.diff.find_position = (function frontend$diff$find_position(markup,text){
if(((typeof markup === 'string') && (typeof text === 'string'))){
try{var pos = (function (){var t1 = cljs.core.seq(clojure.string.lower_case(markup));
var t2 = cljs.core.seq(clojure.string.lower_case(text));
var i1 = (0);
var i2 = (0);
while(true){
var vec__49244 = t1;
var seq__49245 = cljs.core.seq(vec__49244);
var first__49246 = cljs.core.first(seq__49245);
var seq__49245__$1 = cljs.core.next(seq__49245);
var h1 = first__49246;
var r1 = seq__49245__$1;
var vec__49247 = t2;
var seq__49248 = cljs.core.seq(vec__49247);
var first__49249 = cljs.core.first(seq__49248);
var seq__49248__$1 = cljs.core.next(seq__49248);
var h2 = first__49249;
var r2 = seq__49248__$1;
if(((cljs.core.empty_QMARK_(t1)) || (cljs.core.empty_QMARK_(t2)))){
return i1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h1,h2)){
var G__49265 = r1;
var G__49266 = r2;
var G__49267 = (i1 + (1));
var G__49268 = (i2 + (1));
t1 = G__49265;
t2 = G__49266;
i1 = G__49267;
i2 = G__49268;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__49253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [" ",null,"[",null,"]",null], null), null);
return (fexpr__49253.cljs$core$IFn$_invoke$arity$1 ? fexpr__49253.cljs$core$IFn$_invoke$arity$1(h2) : fexpr__49253.call(null,h2));
})())){
var G__49273 = t1;
var G__49274 = r2;
var G__49275 = i1;
var G__49276 = (i2 + (1));
t1 = G__49273;
t2 = G__49274;
i1 = G__49275;
i2 = G__49276;
continue;
} else {
var G__49277 = r1;
var G__49278 = t2;
var G__49279 = (i1 + (1));
var G__49280 = i2;
t1 = G__49277;
t2 = G__49278;
i1 = G__49279;
i2 = G__49280;
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
var matched_QMARK_ = (function (){var and__5041__auto__ = current_line;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(current_line,clojure.string.reverse(matched));
} else {
return and__5041__auto__;
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
}catch (e49228){if((e49228 instanceof Error)){
var e = e49228;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.diff",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("diff","find-position","diff/find-position",-780421417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.Keyword(null,"line","line",212345235),72], null)),null);

return cljs.core.count(markup);
} else {
throw e49228;

}
}} else {
return null;
}
});

//# sourceMappingURL=frontend.diff.js.map
