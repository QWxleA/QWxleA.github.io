goog.provide('sci.impl.reify');
sci.impl.reify.reify = (function sci$impl$reify$reify(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63437 = arguments.length;
var i__5767__auto___63439 = (0);
while(true){
if((i__5767__auto___63439 < len__5766__auto___63437)){
args__5772__auto__.push((arguments[i__5767__auto___63439]));

var G__63440 = (i__5767__auto___63439 + (1));
i__5767__auto___63439 = G__63440;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,_ctx,args){
var map__63293 = cljs.core.group_by(cljs.core.symbol_QMARK_,args);
var map__63293__$1 = cljs.core.__destructure_map(map__63293);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63293__$1,true);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63293__$1,false);
var methods$__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63312){
var vec__63313 = p__63312;
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63313,(0),null);
var bodies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63313,(1),null);
var meth__$1 = ((cljs.core.simple_symbol_QMARK_(meth))?meth:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(meth)));
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,meth__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,bodies)))),null,(1),null))))));
}),cljs.core.group_by(cljs.core.first,methods$)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reify*","cljs.core/reify*",1256833160,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(classes),null,(1),null)),(new cljs.core.List(null,methods$__$1,null,(1),null))], 0))));
}));

(sci.impl.reify.reify.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.reify.reify.cljs$lang$applyTo = (function (seq63278){
var G__63279 = cljs.core.first(seq63278);
var seq63278__$1 = cljs.core.next(seq63278);
var G__63280 = cljs.core.first(seq63278__$1);
var seq63278__$2 = cljs.core.next(seq63278__$1);
var G__63281 = cljs.core.first(seq63278__$2);
var seq63278__$3 = cljs.core.next(seq63278__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63279,G__63280,G__63281,seq63278__$3);
}));

sci.impl.reify.reify_STAR_ = (function sci$impl$reify$reify_STAR_(_ctx,_form,classes,methods$){
return sci.impl.types.__GT_Reified(classes,methods$,cljs.core.set(classes));
});

//# sourceMappingURL=sci.impl.reify.js.map
