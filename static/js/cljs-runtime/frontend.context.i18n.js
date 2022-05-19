goog.provide('frontend.context.i18n');
frontend.context.i18n.dicts = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.dicts.dicts,frontend.modules.shortcut.dicts.dicts], 0));
frontend.context.i18n.translate = tongue.core.build_translate(frontend.context.i18n.dicts);
frontend.context.i18n.t = (function frontend$context$i18n$t(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63381 = arguments.length;
var i__4865__auto___63382 = (0);
while(true){
if((i__4865__auto___63382 < len__4864__auto___63381)){
args__4870__auto__.push((arguments[i__4865__auto___63382]));

var G__63383 = (i__4865__auto___63382 + (1));
i__4865__auto___63382 = G__63383;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var preferred_language = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.sub(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.translate,preferred_language,args);
}));

(frontend.context.i18n.t.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.context.i18n.t.cljs$lang$applyTo = (function (seq63372){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63372));
}));

frontend.context.i18n.fetch_local_language = (function frontend$context$i18n$fetch_local_language(){
return window.navigator.language;
});
frontend.context.i18n.start = (function frontend$context$i18n$start(){
var preferred_language = frontend.state.sub(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017));
if((preferred_language == null)){
return frontend.state.set_preferred_language_BANG_(frontend.context.i18n.fetch_local_language());
} else {
return null;
}
});

//# sourceMappingURL=frontend.context.i18n.js.map
