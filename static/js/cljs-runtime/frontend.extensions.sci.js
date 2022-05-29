goog.provide('frontend.extensions.sci');
frontend.extensions.sci.sum = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core._PLUS_);
frontend.extensions.sci.average = (function frontend$extensions$sci$average(coll){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,coll) / cljs.core.count(coll));
});
frontend.extensions.sci.eval_string = (function frontend$extensions$sci$eval_string(s){
try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"sum","sum",1777518341,null),frontend.extensions.sci.sum,new cljs.core.Symbol(null,"average","average",1148175359,null),frontend.extensions.sci.average,new cljs.core.Symbol(null,"parseFloat","parseFloat",1048011182,null),parseFloat,new cljs.core.Symbol(null,"isNaN","isNaN",74904266,null),isNaN], null)], null));
}catch (e73854){if((e73854 instanceof Error)){
var e = e73854;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Query: sci eval failed:"], 0));

return console.error(e);
} else {
throw e73854;

}
}});
frontend.extensions.sci.call_fn = (function frontend$extensions$sci$call_fn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___73857 = arguments.length;
var i__5767__auto___73858 = (0);
while(true){
if((i__5767__auto___73858 < len__5766__auto___73857)){
args__5772__auto__.push((arguments[i__5767__auto___73858]));

var G__73859 = (i__5767__auto___73858 + (1));
i__5767__auto___73858 = G__73859;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.extensions.sci.call_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.extensions.sci.call_fn.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));

(frontend.extensions.sci.call_fn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.extensions.sci.call_fn.cljs$lang$applyTo = (function (seq73855){
var G__73856 = cljs.core.first(seq73855);
var seq73855__$1 = cljs.core.next(seq73855);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73856,seq73855__$1);
}));

frontend.extensions.sci.eval_result = (function frontend$extensions$sci$eval_result(code){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Results:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.results.mt-1","div.results.mt-1",-1175435307),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),(function (){var result = frontend.extensions.sci.eval_string(code);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(result);
})()], null)], null)], null);
});

//# sourceMappingURL=frontend.extensions.sci.js.map
