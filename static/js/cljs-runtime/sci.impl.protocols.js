goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78197 = arguments.length;
var i__4865__auto___78198 = (0);
while(true){
if((i__4865__auto___78198 < len__4864__auto___78197)){
args__4870__auto__.push((arguments[i__4865__auto___78198]));

var G__78201 = (i__4865__auto___78198 + (1));
i__4865__auto___78198 = G__78201;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__77085 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77085,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77085,(1),null);
var vec__77088 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77088,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77088,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77112){
var vec__77113 = p__77112;
var seq__77114 = cljs.core.seq(vec__77113);
var first__77115 = cljs.core.first(seq__77114);
var seq__77114__$1 = cljs.core.next(seq__77114);
var method_name = first__77115;
var ___$2 = seq__77114__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__77066__auto__","x__77066__auto__",-338672922,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__77067__auto__","args__77067__auto__",-1447912458,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__77068__auto__","methods__77068__auto__",-895902661,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__77066__auto__","x__77066__auto__",-338672922,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__77068__auto__","methods__77068__auto__",-895902661,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__77066__auto__","x__77066__auto__",-338672922,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__77067__auto__","args__77067__auto__",-1447912458,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__77070__auto__","x__77070__auto__",736655207,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__77071__auto__","args__77071__auto__",740405567,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__77072__auto__","meta__77072__auto__",-615472793,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__77070__auto__","x__77070__auto__",736655207,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__77073__auto__","method__77073__auto__",-1336634751,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__77072__auto__","meta__77072__auto__",-615472793,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__77073__auto__","method__77073__auto__",-1336634751,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__77073__auto__","method__77073__auto__",-1336634751,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__77070__auto__","x__77070__auto__",736655207,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__77071__auto__","args__77071__auto__",740405567,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__77070__auto__","x__77070__auto__",736655207,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq77075){
var G__77076 = cljs.core.first(seq77075);
var seq77075__$1 = cljs.core.next(seq77075);
var G__77077 = cljs.core.first(seq77075__$1);
var seq77075__$2 = cljs.core.next(seq77075__$1);
var G__77078 = cljs.core.first(seq77075__$2);
var seq77075__$3 = cljs.core.next(seq77075__$2);
var G__77079 = cljs.core.first(seq77075__$3);
var seq77075__$4 = cljs.core.next(seq77075__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77076,G__77077,G__77078,G__77079,seq77075__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78243 = arguments.length;
var i__4865__auto___78244 = (0);
while(true){
if((i__4865__auto___78244 < len__4864__auto___78243)){
args__4870__auto__.push((arguments[i__4865__auto___78244]));

var G__78245 = (i__4865__auto___78244 + (1));
i__4865__auto___78244 = G__78245;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__77242 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__77244 = null;
var count__77245 = (0);
var i__77246 = (0);
while(true){
if((i__77246 < count__77245)){
var vec__77546 = chunk__77244.cljs$core$IIndexed$_nth$arity$2(null,i__77246);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77546,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77546,(1),null);
var extend_via_metadata_78248 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_78249 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_78250 = sci.impl.vars.getName(proto_ns_78249);
var pns_str_78251 = (cljs.core.truth_(extend_via_metadata_78248)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_78250):null);
var seq__77549_78252 = cljs.core.seq(mmap);
var chunk__77550_78253 = null;
var count__77551_78254 = (0);
var i__77552_78255 = (0);
while(true){
if((i__77552_78255 < count__77551_78254)){
var vec__77604_78256 = chunk__77550_78253.cljs$core$IIndexed$_nth$arity$2(null,i__77552_78255);
var meth_name_78257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77604_78256,(0),null);
var f_78258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77604_78256,(1),null);
var meth_str_78260 = cljs.core.name(meth_name_78257);
var meth_sym_78261 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_78260);
var env_78262 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_78263 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_78262,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_78250,meth_sym_78261], null));
var multi_method_78264 = cljs.core.deref(multi_method_var_78263);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_78264,atype,(cljs.core.truth_(extend_via_metadata_78248)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_78251,meth_str_78260);
return ((function (seq__77549_78252,chunk__77550_78253,count__77551_78254,i__77552_78255,seq__77242,chunk__77244,count__77245,i__77246,fq,meth_str_78260,meth_sym_78261,env_78262,multi_method_var_78263,multi_method_78264,vec__77604_78256,meth_name_78257,f_78258,extend_via_metadata_78248,proto_ns_78249,pns_78250,pns_str_78251,vec__77546,proto,mmap){
return (function() { 
var G__78267__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_78258,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_78258,this$,args);
}
};
var G__78267 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__78269__i = 0, G__78269__a = new Array(arguments.length -  1);
while (G__78269__i < G__78269__a.length) {G__78269__a[G__78269__i] = arguments[G__78269__i + 1]; ++G__78269__i;}
  args = new cljs.core.IndexedSeq(G__78269__a,0,null);
} 
return G__78267__delegate.call(this,this$,args);};
G__78267.cljs$lang$maxFixedArity = 1;
G__78267.cljs$lang$applyTo = (function (arglist__78270){
var this$ = cljs.core.first(arglist__78270);
var args = cljs.core.rest(arglist__78270);
return G__78267__delegate(this$,args);
});
G__78267.cljs$core$IFn$_invoke$arity$variadic = G__78267__delegate;
return G__78267;
})()
;
;})(seq__77549_78252,chunk__77550_78253,count__77551_78254,i__77552_78255,seq__77242,chunk__77244,count__77245,i__77246,fq,meth_str_78260,meth_sym_78261,env_78262,multi_method_var_78263,multi_method_78264,vec__77604_78256,meth_name_78257,f_78258,extend_via_metadata_78248,proto_ns_78249,pns_78250,pns_str_78251,vec__77546,proto,mmap))
})():f_78258));


var G__78272 = seq__77549_78252;
var G__78273 = chunk__77550_78253;
var G__78274 = count__77551_78254;
var G__78275 = (i__77552_78255 + (1));
seq__77549_78252 = G__78272;
chunk__77550_78253 = G__78273;
count__77551_78254 = G__78274;
i__77552_78255 = G__78275;
continue;
} else {
var temp__5720__auto___78277 = cljs.core.seq(seq__77549_78252);
if(temp__5720__auto___78277){
var seq__77549_78278__$1 = temp__5720__auto___78277;
if(cljs.core.chunked_seq_QMARK_(seq__77549_78278__$1)){
var c__4679__auto___78279 = cljs.core.chunk_first(seq__77549_78278__$1);
var G__78280 = cljs.core.chunk_rest(seq__77549_78278__$1);
var G__78281 = c__4679__auto___78279;
var G__78282 = cljs.core.count(c__4679__auto___78279);
var G__78283 = (0);
seq__77549_78252 = G__78280;
chunk__77550_78253 = G__78281;
count__77551_78254 = G__78282;
i__77552_78255 = G__78283;
continue;
} else {
var vec__77685_78284 = cljs.core.first(seq__77549_78278__$1);
var meth_name_78285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77685_78284,(0),null);
var f_78286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77685_78284,(1),null);
var meth_str_78288 = cljs.core.name(meth_name_78285);
var meth_sym_78289 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_78288);
var env_78290 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_78291 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_78290,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_78250,meth_sym_78289], null));
var multi_method_78292 = cljs.core.deref(multi_method_var_78291);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_78292,atype,(cljs.core.truth_(extend_via_metadata_78248)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_78251,meth_str_78288);
return ((function (seq__77549_78252,chunk__77550_78253,count__77551_78254,i__77552_78255,seq__77242,chunk__77244,count__77245,i__77246,fq,meth_str_78288,meth_sym_78289,env_78290,multi_method_var_78291,multi_method_78292,vec__77685_78284,meth_name_78285,f_78286,seq__77549_78278__$1,temp__5720__auto___78277,extend_via_metadata_78248,proto_ns_78249,pns_78250,pns_str_78251,vec__77546,proto,mmap){
return (function() { 
var G__78299__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_78286,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_78286,this$,args);
}
};
var G__78299 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__78301__i = 0, G__78301__a = new Array(arguments.length -  1);
while (G__78301__i < G__78301__a.length) {G__78301__a[G__78301__i] = arguments[G__78301__i + 1]; ++G__78301__i;}
  args = new cljs.core.IndexedSeq(G__78301__a,0,null);
} 
return G__78299__delegate.call(this,this$,args);};
G__78299.cljs$lang$maxFixedArity = 1;
G__78299.cljs$lang$applyTo = (function (arglist__78302){
var this$ = cljs.core.first(arglist__78302);
var args = cljs.core.rest(arglist__78302);
return G__78299__delegate(this$,args);
});
G__78299.cljs$core$IFn$_invoke$arity$variadic = G__78299__delegate;
return G__78299;
})()
;
;})(seq__77549_78252,chunk__77550_78253,count__77551_78254,i__77552_78255,seq__77242,chunk__77244,count__77245,i__77246,fq,meth_str_78288,meth_sym_78289,env_78290,multi_method_var_78291,multi_method_78292,vec__77685_78284,meth_name_78285,f_78286,seq__77549_78278__$1,temp__5720__auto___78277,extend_via_metadata_78248,proto_ns_78249,pns_78250,pns_str_78251,vec__77546,proto,mmap))
})():f_78286));


var G__78306 = cljs.core.next(seq__77549_78278__$1);
var G__78307 = null;
var G__78308 = (0);
var G__78309 = (0);
seq__77549_78252 = G__78306;
chunk__77550_78253 = G__78307;
count__77551_78254 = G__78308;
i__77552_78255 = G__78309;
continue;
}
} else {
}
}
break;
}


var G__78311 = seq__77242;
var G__78312 = chunk__77244;
var G__78313 = count__77245;
var G__78314 = (i__77246 + (1));
seq__77242 = G__78311;
chunk__77244 = G__78312;
count__77245 = G__78313;
i__77246 = G__78314;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__77242);
if(temp__5720__auto__){
var seq__77242__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77242__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77242__$1);
var G__78317 = cljs.core.chunk_rest(seq__77242__$1);
var G__78318 = c__4679__auto__;
var G__78319 = cljs.core.count(c__4679__auto__);
var G__78320 = (0);
seq__77242 = G__78317;
chunk__77244 = G__78318;
count__77245 = G__78319;
i__77246 = G__78320;
continue;
} else {
var vec__77824 = cljs.core.first(seq__77242__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77824,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77824,(1),null);
var extend_via_metadata_78321 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_78322 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_78323 = sci.impl.vars.getName(proto_ns_78322);
var pns_str_78324 = (cljs.core.truth_(extend_via_metadata_78321)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_78323):null);
var seq__77827_78327 = cljs.core.seq(mmap);
var chunk__77828_78328 = null;
var count__77829_78329 = (0);
var i__77830_78330 = (0);
while(true){
if((i__77830_78330 < count__77829_78329)){
var vec__77896_78331 = chunk__77828_78328.cljs$core$IIndexed$_nth$arity$2(null,i__77830_78330);
var meth_name_78332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77896_78331,(0),null);
var f_78333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77896_78331,(1),null);
var meth_str_78334 = cljs.core.name(meth_name_78332);
var meth_sym_78335 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_78334);
var env_78336 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_78337 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_78336,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_78323,meth_sym_78335], null));
var multi_method_78338 = cljs.core.deref(multi_method_var_78337);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_78338,atype,(cljs.core.truth_(extend_via_metadata_78321)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_78324,meth_str_78334);
return ((function (seq__77827_78327,chunk__77828_78328,count__77829_78329,i__77830_78330,seq__77242,chunk__77244,count__77245,i__77246,fq,meth_str_78334,meth_sym_78335,env_78336,multi_method_var_78337,multi_method_78338,vec__77896_78331,meth_name_78332,f_78333,extend_via_metadata_78321,proto_ns_78322,pns_78323,pns_str_78324,vec__77824,proto,mmap,seq__77242__$1,temp__5720__auto__){
return (function() { 
var G__78340__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_78333,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_78333,this$,args);
}
};
var G__78340 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__78345__i = 0, G__78345__a = new Array(arguments.length -  1);
while (G__78345__i < G__78345__a.length) {G__78345__a[G__78345__i] = arguments[G__78345__i + 1]; ++G__78345__i;}
  args = new cljs.core.IndexedSeq(G__78345__a,0,null);
} 
return G__78340__delegate.call(this,this$,args);};
G__78340.cljs$lang$maxFixedArity = 1;
G__78340.cljs$lang$applyTo = (function (arglist__78346){
var this$ = cljs.core.first(arglist__78346);
var args = cljs.core.rest(arglist__78346);
return G__78340__delegate(this$,args);
});
G__78340.cljs$core$IFn$_invoke$arity$variadic = G__78340__delegate;
return G__78340;
})()
;
;})(seq__77827_78327,chunk__77828_78328,count__77829_78329,i__77830_78330,seq__77242,chunk__77244,count__77245,i__77246,fq,meth_str_78334,meth_sym_78335,env_78336,multi_method_var_78337,multi_method_78338,vec__77896_78331,meth_name_78332,f_78333,extend_via_metadata_78321,proto_ns_78322,pns_78323,pns_str_78324,vec__77824,proto,mmap,seq__77242__$1,temp__5720__auto__))
})():f_78333));


var G__78347 = seq__77827_78327;
var G__78348 = chunk__77828_78328;
var G__78349 = count__77829_78329;
var G__78350 = (i__77830_78330 + (1));
seq__77827_78327 = G__78347;
chunk__77828_78328 = G__78348;
count__77829_78329 = G__78349;
i__77830_78330 = G__78350;
continue;
} else {
var temp__5720__auto___78353__$1 = cljs.core.seq(seq__77827_78327);
if(temp__5720__auto___78353__$1){
var seq__77827_78354__$1 = temp__5720__auto___78353__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77827_78354__$1)){
var c__4679__auto___78355 = cljs.core.chunk_first(seq__77827_78354__$1);
var G__78356 = cljs.core.chunk_rest(seq__77827_78354__$1);
var G__78357 = c__4679__auto___78355;
var G__78358 = cljs.core.count(c__4679__auto___78355);
var G__78359 = (0);
seq__77827_78327 = G__78356;
chunk__77828_78328 = G__78357;
count__77829_78329 = G__78358;
i__77830_78330 = G__78359;
continue;
} else {
var vec__77931_78360 = cljs.core.first(seq__77827_78354__$1);
var meth_name_78361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77931_78360,(0),null);
var f_78362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77931_78360,(1),null);
var meth_str_78364 = cljs.core.name(meth_name_78361);
var meth_sym_78365 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_78364);
var env_78366 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_78367 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_78366,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_78323,meth_sym_78365], null));
var multi_method_78368 = cljs.core.deref(multi_method_var_78367);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_78368,atype,(cljs.core.truth_(extend_via_metadata_78321)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_78324,meth_str_78364);
return ((function (seq__77827_78327,chunk__77828_78328,count__77829_78329,i__77830_78330,seq__77242,chunk__77244,count__77245,i__77246,fq,meth_str_78364,meth_sym_78365,env_78366,multi_method_var_78367,multi_method_78368,vec__77931_78360,meth_name_78361,f_78362,seq__77827_78354__$1,temp__5720__auto___78353__$1,extend_via_metadata_78321,proto_ns_78322,pns_78323,pns_str_78324,vec__77824,proto,mmap,seq__77242__$1,temp__5720__auto__){
return (function() { 
var G__78371__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_78362,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_78362,this$,args);
}
};
var G__78371 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__78372__i = 0, G__78372__a = new Array(arguments.length -  1);
while (G__78372__i < G__78372__a.length) {G__78372__a[G__78372__i] = arguments[G__78372__i + 1]; ++G__78372__i;}
  args = new cljs.core.IndexedSeq(G__78372__a,0,null);
} 
return G__78371__delegate.call(this,this$,args);};
G__78371.cljs$lang$maxFixedArity = 1;
G__78371.cljs$lang$applyTo = (function (arglist__78373){
var this$ = cljs.core.first(arglist__78373);
var args = cljs.core.rest(arglist__78373);
return G__78371__delegate(this$,args);
});
G__78371.cljs$core$IFn$_invoke$arity$variadic = G__78371__delegate;
return G__78371;
})()
;
;})(seq__77827_78327,chunk__77828_78328,count__77829_78329,i__77830_78330,seq__77242,chunk__77244,count__77245,i__77246,fq,meth_str_78364,meth_sym_78365,env_78366,multi_method_var_78367,multi_method_78368,vec__77931_78360,meth_name_78361,f_78362,seq__77827_78354__$1,temp__5720__auto___78353__$1,extend_via_metadata_78321,proto_ns_78322,pns_78323,pns_str_78324,vec__77824,proto,mmap,seq__77242__$1,temp__5720__auto__))
})():f_78362));


var G__78374 = cljs.core.next(seq__77827_78354__$1);
var G__78375 = null;
var G__78376 = (0);
var G__78377 = (0);
seq__77827_78327 = G__78374;
chunk__77828_78328 = G__78375;
count__77829_78329 = G__78376;
i__77830_78330 = G__78377;
continue;
}
} else {
}
}
break;
}


var G__78378 = cljs.core.next(seq__77242__$1);
var G__78379 = null;
var G__78380 = (0);
var G__78381 = (0);
seq__77242 = G__78378;
chunk__77244 = G__78379;
count__77245 = G__78380;
i__77246 = G__78381;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq77216){
var G__77217 = cljs.core.first(seq77216);
var seq77216__$1 = cljs.core.next(seq77216);
var G__77218 = cljs.core.first(seq77216__$1);
var seq77216__$2 = cljs.core.next(seq77216__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77217,G__77218,seq77216__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__78008){
var vec__78010 = p__78008;
var seq__78011 = cljs.core.seq(vec__78010);
var first__78012 = cljs.core.first(seq__78011);
var seq__78011__$1 = cljs.core.next(seq__78011);
var args = first__78012;
var body = seq__78011__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__77968__auto__","farg__77968__auto__",1462594441,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__77969__auto__","m__77969__auto__",-728928049,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__77968__auto__","farg__77968__auto__",1462594441,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__77970__auto__","meth__77970__auto__",1988129150,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__77969__auto__","m__77969__auto__",-728928049,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__77970__auto__","meth__77970__auto__",1988129150,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__78057){
var vec__78058 = p__78057;
var seq__78059 = cljs.core.seq(vec__78058);
var first__78060 = cljs.core.first(seq__78059);
var seq__78059__$1 = cljs.core.next(seq__78059);
var meth_name = first__78060;
var fn_body = seq__78059__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__78056_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__78056_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78394 = arguments.length;
var i__4865__auto___78396 = (0);
while(true){
if((i__4865__auto___78396 < len__4864__auto___78394)){
args__4870__auto__.push((arguments[i__4865__auto___78396]));

var G__78397 = (i__4865__auto___78396 + (1));
i__4865__auto___78396 = G__78397;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__78101_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__78101_SHARP_)));
}),impls);
var protocol_var = (function (){var G__78113 = ctx;
var G__78114 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__78115 = protocol_name;
var fexpr__78112 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__78112.cljs$core$IFn$_invoke$arity$3 ? fexpr__78112.cljs$core$IFn$_invoke$arity$3(G__78113,G__78114,G__78115) : fexpr__78112.call(null,G__78113,G__78114,G__78115));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__78116){
var vec__78117 = p__78116;
var seq__78118 = cljs.core.seq(vec__78117);
var first__78119 = cljs.core.first(seq__78118);
var seq__78118__$1 = cljs.core.next(seq__78118);
var type = first__78119;
var meths = seq__78118__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq78103){
var G__78104 = cljs.core.first(seq78103);
var seq78103__$1 = cljs.core.next(seq78103);
var G__78105 = cljs.core.first(seq78103__$1);
var seq78103__$2 = cljs.core.next(seq78103__$1);
var G__78106 = cljs.core.first(seq78103__$2);
var seq78103__$3 = cljs.core.next(seq78103__$2);
var G__78107 = cljs.core.first(seq78103__$3);
var seq78103__$4 = cljs.core.next(seq78103__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78104,G__78105,G__78106,G__78107,seq78103__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78403 = arguments.length;
var i__4865__auto___78404 = (0);
while(true){
if((i__4865__auto___78404 < len__4864__auto___78403)){
args__4870__auto__.push((arguments[i__4865__auto___78404]));

var G__78405 = (i__4865__auto___78404 + (1));
i__4865__auto___78404 = G__78405;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__78120_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__78120_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__78131){
var vec__78132 = p__78131;
var seq__78133 = cljs.core.seq(vec__78132);
var first__78134 = cljs.core.first(seq__78133);
var seq__78133__$1 = cljs.core.next(seq__78133);
var proto = first__78134;
var meths = seq__78133__$1;
var protocol_var = (function (){var G__78136 = ctx;
var G__78137 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__78138 = proto;
var fexpr__78135 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__78135.cljs$core$IFn$_invoke$arity$3 ? fexpr__78135.cljs$core$IFn$_invoke$arity$3(G__78136,G__78137,G__78138) : fexpr__78135.call(null,G__78136,G__78137,G__78138));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq78122){
var G__78123 = cljs.core.first(seq78122);
var seq78122__$1 = cljs.core.next(seq78122);
var G__78124 = cljs.core.first(seq78122__$1);
var seq78122__$2 = cljs.core.next(seq78122__$1);
var G__78125 = cljs.core.first(seq78122__$2);
var seq78122__$3 = cljs.core.next(seq78122__$2);
var G__78126 = cljs.core.first(seq78122__$3);
var seq78122__$4 = cljs.core.next(seq78122__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78123,G__78124,G__78125,G__78126,seq78122__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__78145_SHARP_){
var temp__5720__auto__ = cljs.core.get_method(p1__78145_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
var ms = cljs.core.methods$(p1__78145_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__4253__auto__ = (function (){var and__4251__auto__ = p;
if(cljs.core.truth_(and__4251__auto__)){
var pred__78150 = cljs.core._EQ_;
var expr__78151 = p;
if(cljs.core.truth_((pred__78150.cljs$core$IFn$_invoke$arity$2 ? pred__78150.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__78151) : pred__78150.call(null,cljs.core.IDeref,expr__78151)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__78150.cljs$core$IFn$_invoke$arity$2 ? pred__78150.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__78151) : pred__78150.call(null,cljs.core.ISwap,expr__78151)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__78150.cljs$core$IFn$_invoke$arity$2 ? pred__78150.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__78151) : pred__78150.call(null,cljs.core.IReset,expr__78151)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__78151)].join('')));
}
}
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__4251__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__4251__auto__){
var G__78161 = clazz;
var G__78161__$1 = (((G__78161 == null))?null:cljs.core.meta(G__78161));
if((G__78161__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__78161__$1);
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__78172_SHARP_){
return cljs.core.get_method(p1__78172_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
