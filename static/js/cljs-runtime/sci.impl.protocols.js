goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___62314 = arguments.length;
var i__5767__auto___62315 = (0);
while(true){
if((i__5767__auto___62315 < len__5766__auto___62314)){
args__5772__auto__.push((arguments[i__5767__auto___62315]));

var G__62316 = (i__5767__auto___62315 + (1));
i__5767__auto___62315 = G__62316;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__61789 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61789,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61789,(1),null);
var vec__61792 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61792,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61792,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61797){
var vec__61798 = p__61797;
var seq__61799 = cljs.core.seq(vec__61798);
var first__61800 = cljs.core.first(seq__61799);
var seq__61799__$1 = cljs.core.next(seq__61799);
var method_name = first__61800;
var ___$2 = seq__61799__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__61777__auto__","x__61777__auto__",1330572029,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__61778__auto__","args__61778__auto__",-2036447789,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__61779__auto__","methods__61779__auto__",-1927320202,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__61777__auto__","x__61777__auto__",1330572029,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__61779__auto__","methods__61779__auto__",-1927320202,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__61777__auto__","x__61777__auto__",1330572029,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__61778__auto__","args__61778__auto__",-2036447789,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__61780__auto__","x__61780__auto__",1438858435,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__61781__auto__","args__61781__auto__",2053938890,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__61782__auto__","meta__61782__auto__",17102910,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__61780__auto__","x__61780__auto__",1438858435,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__61783__auto__","method__61783__auto__",1535271623,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__61782__auto__","meta__61782__auto__",17102910,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__61783__auto__","method__61783__auto__",1535271623,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__61783__auto__","method__61783__auto__",1535271623,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__61780__auto__","x__61780__auto__",1438858435,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__61781__auto__","args__61781__auto__",2053938890,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__61780__auto__","x__61780__auto__",1438858435,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq61784){
var G__61785 = cljs.core.first(seq61784);
var seq61784__$1 = cljs.core.next(seq61784);
var G__61786 = cljs.core.first(seq61784__$1);
var seq61784__$2 = cljs.core.next(seq61784__$1);
var G__61787 = cljs.core.first(seq61784__$2);
var seq61784__$3 = cljs.core.next(seq61784__$2);
var G__61788 = cljs.core.first(seq61784__$3);
var seq61784__$4 = cljs.core.next(seq61784__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61785,G__61786,G__61787,G__61788,seq61784__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5772__auto__ = [];
var len__5766__auto___62428 = arguments.length;
var i__5767__auto___62429 = (0);
while(true){
if((i__5767__auto___62429 < len__5766__auto___62428)){
args__5772__auto__.push((arguments[i__5767__auto___62429]));

var G__62430 = (i__5767__auto___62429 + (1));
i__5767__auto___62429 = G__62430;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__61817 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__61819 = null;
var count__61820 = (0);
var i__61821 = (0);
while(true){
if((i__61821 < count__61820)){
var vec__61909 = chunk__61819.cljs$core$IIndexed$_nth$arity$2(null,i__61821);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61909,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61909,(1),null);
var extend_via_metadata_62431 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_62432 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_62433 = sci.impl.vars.getName(proto_ns_62432);
var pns_str_62434 = (cljs.core.truth_(extend_via_metadata_62431)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_62433):null);
var seq__61912_62435 = cljs.core.seq(mmap);
var chunk__61913_62436 = null;
var count__61914_62437 = (0);
var i__61915_62438 = (0);
while(true){
if((i__61915_62438 < count__61914_62437)){
var vec__61929_62439 = chunk__61913_62436.cljs$core$IIndexed$_nth$arity$2(null,i__61915_62438);
var meth_name_62440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61929_62439,(0),null);
var f_62441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61929_62439,(1),null);
var meth_str_62442 = cljs.core.name(meth_name_62440);
var meth_sym_62443 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_62442);
var env_62444 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_62445 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_62444,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_62433,meth_sym_62443], null));
var multi_method_62446 = cljs.core.deref(multi_method_var_62445);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_62446,atype,(cljs.core.truth_(extend_via_metadata_62431)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_62434,meth_str_62442);
return ((function (seq__61912_62435,chunk__61913_62436,count__61914_62437,i__61915_62438,seq__61817,chunk__61819,count__61820,i__61821,fq,meth_str_62442,meth_sym_62443,env_62444,multi_method_var_62445,multi_method_62446,vec__61929_62439,meth_name_62440,f_62441,extend_via_metadata_62431,proto_ns_62432,pns_62433,pns_str_62434,vec__61909,proto,mmap){
return (function() { 
var G__62447__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_62441,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_62441,this$,args);
}
};
var G__62447 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__62449__i = 0, G__62449__a = new Array(arguments.length -  1);
while (G__62449__i < G__62449__a.length) {G__62449__a[G__62449__i] = arguments[G__62449__i + 1]; ++G__62449__i;}
  args = new cljs.core.IndexedSeq(G__62449__a,0,null);
} 
return G__62447__delegate.call(this,this$,args);};
G__62447.cljs$lang$maxFixedArity = 1;
G__62447.cljs$lang$applyTo = (function (arglist__62450){
var this$ = cljs.core.first(arglist__62450);
var args = cljs.core.rest(arglist__62450);
return G__62447__delegate(this$,args);
});
G__62447.cljs$core$IFn$_invoke$arity$variadic = G__62447__delegate;
return G__62447;
})()
;
;})(seq__61912_62435,chunk__61913_62436,count__61914_62437,i__61915_62438,seq__61817,chunk__61819,count__61820,i__61821,fq,meth_str_62442,meth_sym_62443,env_62444,multi_method_var_62445,multi_method_62446,vec__61929_62439,meth_name_62440,f_62441,extend_via_metadata_62431,proto_ns_62432,pns_62433,pns_str_62434,vec__61909,proto,mmap))
})():f_62441));


var G__62451 = seq__61912_62435;
var G__62452 = chunk__61913_62436;
var G__62453 = count__61914_62437;
var G__62454 = (i__61915_62438 + (1));
seq__61912_62435 = G__62451;
chunk__61913_62436 = G__62452;
count__61914_62437 = G__62453;
i__61915_62438 = G__62454;
continue;
} else {
var temp__5720__auto___62455 = cljs.core.seq(seq__61912_62435);
if(temp__5720__auto___62455){
var seq__61912_62456__$1 = temp__5720__auto___62455;
if(cljs.core.chunked_seq_QMARK_(seq__61912_62456__$1)){
var c__5565__auto___62457 = cljs.core.chunk_first(seq__61912_62456__$1);
var G__62458 = cljs.core.chunk_rest(seq__61912_62456__$1);
var G__62459 = c__5565__auto___62457;
var G__62460 = cljs.core.count(c__5565__auto___62457);
var G__62461 = (0);
seq__61912_62435 = G__62458;
chunk__61913_62436 = G__62459;
count__61914_62437 = G__62460;
i__61915_62438 = G__62461;
continue;
} else {
var vec__61932_62462 = cljs.core.first(seq__61912_62456__$1);
var meth_name_62463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61932_62462,(0),null);
var f_62464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61932_62462,(1),null);
var meth_str_62465 = cljs.core.name(meth_name_62463);
var meth_sym_62466 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_62465);
var env_62467 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_62468 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_62467,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_62433,meth_sym_62466], null));
var multi_method_62469 = cljs.core.deref(multi_method_var_62468);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_62469,atype,(cljs.core.truth_(extend_via_metadata_62431)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_62434,meth_str_62465);
return ((function (seq__61912_62435,chunk__61913_62436,count__61914_62437,i__61915_62438,seq__61817,chunk__61819,count__61820,i__61821,fq,meth_str_62465,meth_sym_62466,env_62467,multi_method_var_62468,multi_method_62469,vec__61932_62462,meth_name_62463,f_62464,seq__61912_62456__$1,temp__5720__auto___62455,extend_via_metadata_62431,proto_ns_62432,pns_62433,pns_str_62434,vec__61909,proto,mmap){
return (function() { 
var G__62473__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_62464,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_62464,this$,args);
}
};
var G__62473 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__62475__i = 0, G__62475__a = new Array(arguments.length -  1);
while (G__62475__i < G__62475__a.length) {G__62475__a[G__62475__i] = arguments[G__62475__i + 1]; ++G__62475__i;}
  args = new cljs.core.IndexedSeq(G__62475__a,0,null);
} 
return G__62473__delegate.call(this,this$,args);};
G__62473.cljs$lang$maxFixedArity = 1;
G__62473.cljs$lang$applyTo = (function (arglist__62476){
var this$ = cljs.core.first(arglist__62476);
var args = cljs.core.rest(arglist__62476);
return G__62473__delegate(this$,args);
});
G__62473.cljs$core$IFn$_invoke$arity$variadic = G__62473__delegate;
return G__62473;
})()
;
;})(seq__61912_62435,chunk__61913_62436,count__61914_62437,i__61915_62438,seq__61817,chunk__61819,count__61820,i__61821,fq,meth_str_62465,meth_sym_62466,env_62467,multi_method_var_62468,multi_method_62469,vec__61932_62462,meth_name_62463,f_62464,seq__61912_62456__$1,temp__5720__auto___62455,extend_via_metadata_62431,proto_ns_62432,pns_62433,pns_str_62434,vec__61909,proto,mmap))
})():f_62464));


var G__62514 = cljs.core.next(seq__61912_62456__$1);
var G__62515 = null;
var G__62516 = (0);
var G__62517 = (0);
seq__61912_62435 = G__62514;
chunk__61913_62436 = G__62515;
count__61914_62437 = G__62516;
i__61915_62438 = G__62517;
continue;
}
} else {
}
}
break;
}


var G__62519 = seq__61817;
var G__62520 = chunk__61819;
var G__62521 = count__61820;
var G__62522 = (i__61821 + (1));
seq__61817 = G__62519;
chunk__61819 = G__62520;
count__61820 = G__62521;
i__61821 = G__62522;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__61817);
if(temp__5720__auto__){
var seq__61817__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61817__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__61817__$1);
var G__62523 = cljs.core.chunk_rest(seq__61817__$1);
var G__62524 = c__5565__auto__;
var G__62525 = cljs.core.count(c__5565__auto__);
var G__62526 = (0);
seq__61817 = G__62523;
chunk__61819 = G__62524;
count__61820 = G__62525;
i__61821 = G__62526;
continue;
} else {
var vec__61942 = cljs.core.first(seq__61817__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61942,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61942,(1),null);
var extend_via_metadata_62528 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_62529 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_62530 = sci.impl.vars.getName(proto_ns_62529);
var pns_str_62531 = (cljs.core.truth_(extend_via_metadata_62528)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_62530):null);
var seq__61948_62532 = cljs.core.seq(mmap);
var chunk__61949_62533 = null;
var count__61950_62535 = (0);
var i__61951_62536 = (0);
while(true){
if((i__61951_62536 < count__61950_62535)){
var vec__61972_62537 = chunk__61949_62533.cljs$core$IIndexed$_nth$arity$2(null,i__61951_62536);
var meth_name_62538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61972_62537,(0),null);
var f_62539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61972_62537,(1),null);
var meth_str_62540 = cljs.core.name(meth_name_62538);
var meth_sym_62541 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_62540);
var env_62542 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_62543 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_62542,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_62530,meth_sym_62541], null));
var multi_method_62544 = cljs.core.deref(multi_method_var_62543);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_62544,atype,(cljs.core.truth_(extend_via_metadata_62528)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_62531,meth_str_62540);
return ((function (seq__61948_62532,chunk__61949_62533,count__61950_62535,i__61951_62536,seq__61817,chunk__61819,count__61820,i__61821,fq,meth_str_62540,meth_sym_62541,env_62542,multi_method_var_62543,multi_method_62544,vec__61972_62537,meth_name_62538,f_62539,extend_via_metadata_62528,proto_ns_62529,pns_62530,pns_str_62531,vec__61942,proto,mmap,seq__61817__$1,temp__5720__auto__){
return (function() { 
var G__62548__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_62539,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_62539,this$,args);
}
};
var G__62548 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__62549__i = 0, G__62549__a = new Array(arguments.length -  1);
while (G__62549__i < G__62549__a.length) {G__62549__a[G__62549__i] = arguments[G__62549__i + 1]; ++G__62549__i;}
  args = new cljs.core.IndexedSeq(G__62549__a,0,null);
} 
return G__62548__delegate.call(this,this$,args);};
G__62548.cljs$lang$maxFixedArity = 1;
G__62548.cljs$lang$applyTo = (function (arglist__62550){
var this$ = cljs.core.first(arglist__62550);
var args = cljs.core.rest(arglist__62550);
return G__62548__delegate(this$,args);
});
G__62548.cljs$core$IFn$_invoke$arity$variadic = G__62548__delegate;
return G__62548;
})()
;
;})(seq__61948_62532,chunk__61949_62533,count__61950_62535,i__61951_62536,seq__61817,chunk__61819,count__61820,i__61821,fq,meth_str_62540,meth_sym_62541,env_62542,multi_method_var_62543,multi_method_62544,vec__61972_62537,meth_name_62538,f_62539,extend_via_metadata_62528,proto_ns_62529,pns_62530,pns_str_62531,vec__61942,proto,mmap,seq__61817__$1,temp__5720__auto__))
})():f_62539));


var G__62551 = seq__61948_62532;
var G__62552 = chunk__61949_62533;
var G__62553 = count__61950_62535;
var G__62554 = (i__61951_62536 + (1));
seq__61948_62532 = G__62551;
chunk__61949_62533 = G__62552;
count__61950_62535 = G__62553;
i__61951_62536 = G__62554;
continue;
} else {
var temp__5720__auto___62555__$1 = cljs.core.seq(seq__61948_62532);
if(temp__5720__auto___62555__$1){
var seq__61948_62556__$1 = temp__5720__auto___62555__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61948_62556__$1)){
var c__5565__auto___62557 = cljs.core.chunk_first(seq__61948_62556__$1);
var G__62558 = cljs.core.chunk_rest(seq__61948_62556__$1);
var G__62559 = c__5565__auto___62557;
var G__62561 = cljs.core.count(c__5565__auto___62557);
var G__62562 = (0);
seq__61948_62532 = G__62558;
chunk__61949_62533 = G__62559;
count__61950_62535 = G__62561;
i__61951_62536 = G__62562;
continue;
} else {
var vec__61975_62563 = cljs.core.first(seq__61948_62556__$1);
var meth_name_62564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61975_62563,(0),null);
var f_62565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61975_62563,(1),null);
var meth_str_62566 = cljs.core.name(meth_name_62564);
var meth_sym_62567 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_62566);
var env_62568 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_62569 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_62568,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_62530,meth_sym_62567], null));
var multi_method_62570 = cljs.core.deref(multi_method_var_62569);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_62570,atype,(cljs.core.truth_(extend_via_metadata_62528)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_62531,meth_str_62566);
return ((function (seq__61948_62532,chunk__61949_62533,count__61950_62535,i__61951_62536,seq__61817,chunk__61819,count__61820,i__61821,fq,meth_str_62566,meth_sym_62567,env_62568,multi_method_var_62569,multi_method_62570,vec__61975_62563,meth_name_62564,f_62565,seq__61948_62556__$1,temp__5720__auto___62555__$1,extend_via_metadata_62528,proto_ns_62529,pns_62530,pns_str_62531,vec__61942,proto,mmap,seq__61817__$1,temp__5720__auto__){
return (function() { 
var G__62572__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_62565,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_62565,this$,args);
}
};
var G__62572 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__62575__i = 0, G__62575__a = new Array(arguments.length -  1);
while (G__62575__i < G__62575__a.length) {G__62575__a[G__62575__i] = arguments[G__62575__i + 1]; ++G__62575__i;}
  args = new cljs.core.IndexedSeq(G__62575__a,0,null);
} 
return G__62572__delegate.call(this,this$,args);};
G__62572.cljs$lang$maxFixedArity = 1;
G__62572.cljs$lang$applyTo = (function (arglist__62576){
var this$ = cljs.core.first(arglist__62576);
var args = cljs.core.rest(arglist__62576);
return G__62572__delegate(this$,args);
});
G__62572.cljs$core$IFn$_invoke$arity$variadic = G__62572__delegate;
return G__62572;
})()
;
;})(seq__61948_62532,chunk__61949_62533,count__61950_62535,i__61951_62536,seq__61817,chunk__61819,count__61820,i__61821,fq,meth_str_62566,meth_sym_62567,env_62568,multi_method_var_62569,multi_method_62570,vec__61975_62563,meth_name_62564,f_62565,seq__61948_62556__$1,temp__5720__auto___62555__$1,extend_via_metadata_62528,proto_ns_62529,pns_62530,pns_str_62531,vec__61942,proto,mmap,seq__61817__$1,temp__5720__auto__))
})():f_62565));


var G__62577 = cljs.core.next(seq__61948_62556__$1);
var G__62578 = null;
var G__62579 = (0);
var G__62580 = (0);
seq__61948_62532 = G__62577;
chunk__61949_62533 = G__62578;
count__61950_62535 = G__62579;
i__61951_62536 = G__62580;
continue;
}
} else {
}
}
break;
}


var G__62581 = cljs.core.next(seq__61817__$1);
var G__62582 = null;
var G__62583 = (0);
var G__62584 = (0);
seq__61817 = G__62581;
chunk__61819 = G__62582;
count__61820 = G__62583;
i__61821 = G__62584;
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
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq61814){
var G__61815 = cljs.core.first(seq61814);
var seq61814__$1 = cljs.core.next(seq61814);
var G__61816 = cljs.core.first(seq61814__$1);
var seq61814__$2 = cljs.core.next(seq61814__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61815,G__61816,seq61814__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__61985){
var vec__61987 = p__61985;
var seq__61988 = cljs.core.seq(vec__61987);
var first__61989 = cljs.core.first(seq__61988);
var seq__61988__$1 = cljs.core.next(seq__61988);
var args = first__61989;
var body = seq__61988__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__61981__auto__","farg__61981__auto__",-848081594,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__61982__auto__","m__61982__auto__",-491158847,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__61981__auto__","farg__61981__auto__",-848081594,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__61983__auto__","meth__61983__auto__",-566493496,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__61982__auto__","m__61982__auto__",-491158847,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__61983__auto__","meth__61983__auto__",-566493496,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62016){
var vec__62028 = p__62016;
var seq__62029 = cljs.core.seq(vec__62028);
var first__62030 = cljs.core.first(seq__62029);
var seq__62029__$1 = cljs.core.next(seq__62029);
var meth_name = first__62030;
var fn_body = seq__62029__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__62007_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__62007_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___62633 = arguments.length;
var i__5767__auto___62634 = (0);
while(true){
if((i__5767__auto___62634 < len__5766__auto___62633)){
args__5772__auto__.push((arguments[i__5767__auto___62634]));

var G__62635 = (i__5767__auto___62634 + (1));
i__5767__auto___62634 = G__62635;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__62069_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__62069_SHARP_)));
}),impls);
var protocol_var = (function (){var G__62140 = ctx;
var G__62141 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__62142 = protocol_name;
var fexpr__62139 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__62139.cljs$core$IFn$_invoke$arity$3 ? fexpr__62139.cljs$core$IFn$_invoke$arity$3(G__62140,G__62141,G__62142) : fexpr__62139.call(null,G__62140,G__62141,G__62142));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62166){
var vec__62191 = p__62166;
var seq__62192 = cljs.core.seq(vec__62191);
var first__62193 = cljs.core.first(seq__62192);
var seq__62192__$1 = cljs.core.next(seq__62192);
var type = first__62193;
var meths = seq__62192__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq62088){
var G__62089 = cljs.core.first(seq62088);
var seq62088__$1 = cljs.core.next(seq62088);
var G__62090 = cljs.core.first(seq62088__$1);
var seq62088__$2 = cljs.core.next(seq62088__$1);
var G__62091 = cljs.core.first(seq62088__$2);
var seq62088__$3 = cljs.core.next(seq62088__$2);
var G__62093 = cljs.core.first(seq62088__$3);
var seq62088__$4 = cljs.core.next(seq62088__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62089,G__62090,G__62091,G__62093,seq62088__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5772__auto__ = [];
var len__5766__auto___62637 = arguments.length;
var i__5767__auto___62638 = (0);
while(true){
if((i__5767__auto___62638 < len__5766__auto___62637)){
args__5772__auto__.push((arguments[i__5767__auto___62638]));

var G__62640 = (i__5767__auto___62638 + (1));
i__5767__auto___62638 = G__62640;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__62222_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__62222_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62294){
var vec__62295 = p__62294;
var seq__62296 = cljs.core.seq(vec__62295);
var first__62297 = cljs.core.first(seq__62296);
var seq__62296__$1 = cljs.core.next(seq__62296);
var proto = first__62297;
var meths = seq__62296__$1;
var protocol_var = (function (){var G__62301 = ctx;
var G__62302 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__62303 = proto;
var fexpr__62300 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__62300.cljs$core$IFn$_invoke$arity$3 ? fexpr__62300.cljs$core$IFn$_invoke$arity$3(G__62301,G__62302,G__62303) : fexpr__62300.call(null,G__62301,G__62302,G__62303));
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
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq62234){
var G__62255 = cljs.core.first(seq62234);
var seq62234__$1 = cljs.core.next(seq62234);
var G__62256 = cljs.core.first(seq62234__$1);
var seq62234__$2 = cljs.core.next(seq62234__$1);
var G__62257 = cljs.core.first(seq62234__$2);
var seq62234__$3 = cljs.core.next(seq62234__$2);
var G__62258 = cljs.core.first(seq62234__$3);
var seq62234__$4 = cljs.core.next(seq62234__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62255,G__62256,G__62257,G__62258,seq62234__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__62304_SHARP_){
var temp__5720__auto__ = cljs.core.get_method(p1__62304_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
var ms = cljs.core.methods$(p1__62304_SHARP_);
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
var or__5043__auto__ = (function (){var and__5041__auto__ = p;
if(cljs.core.truth_(and__5041__auto__)){
var pred__62306 = cljs.core._EQ_;
var expr__62307 = p;
if(cljs.core.truth_((pred__62306.cljs$core$IFn$_invoke$arity$2 ? pred__62306.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__62307) : pred__62306.call(null,cljs.core.IDeref,expr__62307)))){
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
if(cljs.core.truth_((pred__62306.cljs$core$IFn$_invoke$arity$2 ? pred__62306.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__62307) : pred__62306.call(null,cljs.core.ISwap,expr__62307)))){
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
if(cljs.core.truth_((pred__62306.cljs$core$IFn$_invoke$arity$2 ? pred__62306.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__62307) : pred__62306.call(null,cljs.core.IReset,expr__62307)))){
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__62307)].join('')));
}
}
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5041__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5041__auto__){
var G__62312 = clazz;
var G__62312__$1 = (((G__62312 == null))?null:cljs.core.meta(G__62312));
if((G__62312__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__62312__$1);
}
} else {
return and__5041__auto__;
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
return cljs.core.boolean$(cljs.core.some((function (p1__62313_SHARP_){
return cljs.core.get_method(p1__62313_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
