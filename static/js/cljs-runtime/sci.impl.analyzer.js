goog.provide('sci.impl.analyzer');
goog.scope(function(){
  sci.impl.analyzer.goog$module$goog$object = goog.module.get('goog.object');
});
sci.impl.analyzer.recur_target = (function sci$impl$analyzer$recur_target(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.with_recur_target = (function sci$impl$analyzer$with_recur_target(ctx,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),v);
});
sci.impl.analyzer.without_recur_target = (function sci$impl$analyzer$without_recur_target(ctx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),false);
});
sci.impl.analyzer.recur_target_QMARK_ = (function sci$impl$analyzer$recur_target_QMARK_(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});




sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,expr) : sci.impl.analyzer.analyze.call(null,ctx__$1,expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","defrecord","clojure.core/defrecord",581689476,null),op)){
return expr;
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx__$1,op,true);
}catch (e79887){var _ = e79887;
return new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858);
}})();
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f)){
return expr;
} else {
var macro_var_QMARK_ = (function (){var and__4251__auto__ = sci.impl.vars.var_QMARK_(f);
if(and__4251__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__4251__auto__;
}
})();
var needs_ctx_QMARK_ = cljs.core.keyword_identical_QMARK_(sci.impl.utils.needs_ctx,(function (){var G__79889 = f;
var G__79889__$1 = (((G__79889 == null))?null:cljs.core.meta(G__79889));
if((G__79889__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__79889__$1);
}
})());
var f__$1 = (cljs.core.truth_(macro_var_QMARK_)?cljs.core.deref(f):f);
if(cljs.core.truth_((function (){var or__4253__auto__ = macro_var_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.utils.macro_QMARK_(f__$1);
}
})())){
if(needs_ctx_QMARK_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),ctx__$1,cljs.core.rest(expr));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),cljs.core.rest(expr));
}
} else {
return expr;
}
}

}
}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.analyze_children_tail = (function sci$impl$analyzer$analyze_children_tail(ctx,children){
var rt = sci.impl.analyzer.recur_target(ctx);
var non_tail_ctx = sci.impl.analyzer.without_recur_target(ctx);
var analyzed_children_non_tail = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__79892_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(non_tail_ctx,p1__79892_SHARP_) : sci.impl.analyzer.analyze.call(null,non_tail_ctx,p1__79892_SHARP_));
}),cljs.core.butlast(children));
var ret_child = (function (){var G__79893 = sci.impl.analyzer.with_recur_target(ctx,rt);
var G__79894 = cljs.core.last(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__79893,G__79894) : sci.impl.analyzer.analyze.call(null,G__79893,G__79894));
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(analyzed_children_non_tail,ret_child);
});
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__79898 = cljs.core.count(children);
switch (G__79898) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(arg0,ctx__$1,bindings);

return sci.impl.types.eval(arg1,ctx__$1,bindings);
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(arg0,ctx__$1,bindings);

sci.impl.types.eval(arg1,ctx__$1,bindings);

return sci.impl.types.eval(arg2,ctx__$1,bindings);
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_do(ctx__$1,bindings,analyzed_children__$1);
}),null);

}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__79899 = cljs.core.count(children);
switch (G__79899) {
case (0):
return null;

break;
case (1):
var G__79900 = ctx;
var G__79901 = cljs.core.first(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__79900,G__79901) : sci.impl.analyzer.analyze.call(null,G__79900,G__79901));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.types.eval(arg1,ctx__$1,bindings);
}
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return sci.impl.types.eval(arg2,ctx__$1,bindings);
}
}
}),null);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return sci.impl.types.eval(arg3,ctx__$1,bindings);
}
}
}
}),null);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
return sci.impl.types.eval(arg4,ctx__$1,bindings);
}
}
}
}
}),null);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
return sci.impl.types.eval(arg5,ctx__$1,bindings);
}
}
}
}
}
}),null);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
return sci.impl.types.eval(arg6,ctx__$1,bindings);
}
}
}
}
}
}
}),null);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
return sci.impl.types.eval(arg7,ctx__$1,bindings);
}
}
}
}
}
}
}
}),null);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
return sci.impl.types.eval(arg8,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}),null);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
return sci.impl.types.eval(arg9,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}),null);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
return sci.impl.types.eval(arg10,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
return sci.impl.types.eval(arg11,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
return sci.impl.types.eval(arg12,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
return sci.impl.types.eval(arg13,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
return sci.impl.types.eval(arg14,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
return sci.impl.types.eval(arg15,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
var or__4253__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$15)){
return or__4253__auto____$15;
} else {
return sci.impl.types.eval(arg16,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
var or__4253__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$15)){
return or__4253__auto____$15;
} else {
var or__4253__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$16)){
return or__4253__auto____$16;
} else {
return sci.impl.types.eval(arg17,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__4253__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
var or__4253__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$9)){
return or__4253__auto____$9;
} else {
var or__4253__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$10)){
return or__4253__auto____$10;
} else {
var or__4253__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$11)){
return or__4253__auto____$11;
} else {
var or__4253__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$12)){
return or__4253__auto____$12;
} else {
var or__4253__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$13)){
return or__4253__auto____$13;
} else {
var or__4253__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$14)){
return or__4253__auto____$14;
} else {
var or__4253__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$15)){
return or__4253__auto____$15;
} else {
var or__4253__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$16)){
return or__4253__auto____$16;
} else {
var or__4253__auto____$17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
if(cljs.core.truth_(or__4253__auto____$17)){
return or__4253__auto____$17;
} else {
return sci.impl.types.eval(arg18,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_or(analyzed_children__$1,ctx__$1,bindings);
}),null);

}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__79919 = cljs.core.count(children);
switch (G__79919) {
case (0):
return null;

break;
case (1):
var G__79920 = ctx;
var G__79921 = cljs.core.first(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__79920,G__79921) : sci.impl.analyzer.analyze.call(null,G__79920,G__79921));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
return sci.impl.types.eval(arg1,ctx__$1,bindings);
} else {
return and__4251__auto__;
}
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
return sci.impl.types.eval(arg2,ctx__$1,bindings);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
return sci.impl.types.eval(arg3,ctx__$1,bindings);
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
return sci.impl.types.eval(arg4,ctx__$1,bindings);
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
return sci.impl.types.eval(arg5,ctx__$1,bindings);
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
return sci.impl.types.eval(arg6,ctx__$1,bindings);
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
return sci.impl.types.eval(arg7,ctx__$1,bindings);
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
return sci.impl.types.eval(arg8,ctx__$1,bindings);
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
return sci.impl.types.eval(arg9,ctx__$1,bindings);
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
return sci.impl.types.eval(arg10,ctx__$1,bindings);
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
return sci.impl.types.eval(arg11,ctx__$1,bindings);
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
return sci.impl.types.eval(arg12,ctx__$1,bindings);
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
return sci.impl.types.eval(arg13,ctx__$1,bindings);
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$13)){
return sci.impl.types.eval(arg14,ctx__$1,bindings);
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$14)){
return sci.impl.types.eval(arg15,ctx__$1,bindings);
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$14)){
var and__4251__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$15)){
return sci.impl.types.eval(arg16,ctx__$1,bindings);
} else {
return and__4251__auto____$15;
}
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$14)){
var and__4251__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$15)){
var and__4251__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$16)){
return sci.impl.types.eval(arg17,ctx__$1,bindings);
} else {
return and__4251__auto____$16;
}
} else {
return and__4251__auto____$15;
}
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__4251__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$4)){
var and__4251__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$5)){
var and__4251__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$6)){
var and__4251__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$7)){
var and__4251__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$8)){
var and__4251__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$9)){
var and__4251__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$10)){
var and__4251__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$11)){
var and__4251__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$12)){
var and__4251__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$13)){
var and__4251__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$14)){
var and__4251__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$15)){
var and__4251__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$16)){
var and__4251__auto____$17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
if(cljs.core.truth_(and__4251__auto____$17)){
return sci.impl.types.eval(arg18,ctx__$1,bindings);
} else {
return and__4251__auto____$17;
}
} else {
return and__4251__auto____$16;
}
} else {
return and__4251__auto____$15;
}
} else {
return and__4251__auto____$14;
}
} else {
return and__4251__auto____$13;
}
} else {
return and__4251__auto____$12;
}
} else {
return and__4251__auto____$11;
}
} else {
return and__4251__auto____$10;
}
} else {
return and__4251__auto____$9;
}
} else {
return and__4251__auto____$8;
}
} else {
return and__4251__auto____$7;
}
} else {
return and__4251__auto____$6;
}
} else {
return and__4251__auto____$5;
}
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_and(ctx__$1,bindings,analyzed_children__$1);
}),null);

}
});
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(ctx,expr,analyzed_children){
if(cljs.core.truth_(sci.impl.analyzer.recur_target_QMARK_(ctx))){
} else {
sci.impl.analyzer.throw_error_with_location("Can only recur from tail position",expr);
}

var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctx);
var G__79973 = cljs.core.count(analyzed_children);
switch (G__79973) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
(bindings[(0)] = eval_0);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var param17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
var eval_17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

(bindings[(17)] = eval_17);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var param17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
var param18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
var eval_17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
var eval_18 = sci.impl.types.eval(arg18,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

(bindings[(17)] = eval_17);

(bindings[(18)] = eval_18);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79973)].join('')));

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__80047_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__80047_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__80047_SHARP_));
}),children);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.analyzer.FnBody = (function (params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,__meta,__extmap,__hash){
this.params = params;
this.body = body;
this.fixed_arity = fixed_arity;
this.var_arg_name = var_arg_name;
this.self_ref_idx = self_ref_idx;
this.iden__GT_invoke_idx = iden__GT_invoke_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k80056,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__80077 = k80056;
var G__80077__$1 = (((G__80077 instanceof cljs.core.Keyword))?G__80077.fqn:null);
switch (G__80077__$1) {
case "params":
return self__.params;

break;
case "body":
return self__.body;

break;
case "fixed-arity":
return self__.fixed_arity;

break;
case "var-arg-name":
return self__.var_arg_name;

break;
case "self-ref-idx":
return self__.self_ref_idx;

break;
case "iden->invoke-idx":
return self__.iden__GT_invoke_idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k80056,else__4505__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__80086){
var vec__80088 = p__80086;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80088,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80088,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__80055){
var self__ = this;
var G__80055__$1 = this;
return (new cljs.core.RecordIter((0),G__80055__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this80057,other80058){
var self__ = this;
var this80057__$1 = this;
return (((!((other80058 == null)))) && ((((this80057__$1.constructor === other80058.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80057__$1.params,other80058.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80057__$1.body,other80058.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80057__$1.fixed_arity,other80058.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80057__$1.var_arg_name,other80058.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80057__$1.self_ref_idx,other80058.self_ref_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80057__$1.iden__GT_invoke_idx,other80058.iden__GT_invoke_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80057__$1.__extmap,other80058.__extmap)))))))))))))))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k80056){
var self__ = this;
var this__4509__auto____$1 = this;
var G__80102 = k80056;
var G__80102__$1 = (((G__80102 instanceof cljs.core.Keyword))?G__80102.fqn:null);
switch (G__80102__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "self-ref-idx":
case "iden->invoke-idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k80056);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__80055){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__80103 = cljs.core.keyword_identical_QMARK_;
var expr__80104 = k__4511__auto__;
if(cljs.core.truth_((pred__80103.cljs$core$IFn$_invoke$arity$2 ? pred__80103.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__80104) : pred__80103.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__80104)))){
return (new sci.impl.analyzer.FnBody(G__80055,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__80103.cljs$core$IFn$_invoke$arity$2 ? pred__80103.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__80104) : pred__80103.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__80104)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__80055,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__80103.cljs$core$IFn$_invoke$arity$2 ? pred__80103.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__80104) : pred__80103.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__80104)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__80055,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__80103.cljs$core$IFn$_invoke$arity$2 ? pred__80103.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__80104) : pred__80103.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__80104)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__80055,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__80103.cljs$core$IFn$_invoke$arity$2 ? pred__80103.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__80104) : pred__80103.call(null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__80104)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__80055,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__80103.cljs$core$IFn$_invoke$arity$2 ? pred__80103.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__80104) : pred__80103.call(null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__80104)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,G__80055,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__80055),null));
}
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__80055){
var self__ = this;
var this__4501__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,G__80055,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"fixed-arity","fixed-arity",-1067989900,null),new cljs.core.Symbol(null,"var-arg-name","var-arg-name",540506640,null),new cljs.core.Symbol(null,"self-ref-idx","self-ref-idx",255993715,null),new cljs.core.Symbol(null,"iden->invoke-idx","iden->invoke-idx",-157095499,null)], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"sci.impl.analyzer/FnBody");
}));

/**
 * Positional factory function for sci.impl.analyzer/FnBody.
 */
sci.impl.analyzer.__GT_FnBody = (function sci$impl$analyzer$__GT_FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx){
return (new sci.impl.analyzer.FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,null,null,null));
});

/**
 * Factory function for sci.impl.analyzer/FnBody, taking a map of keywords to field values.
 */
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__80062){
var extmap__4542__auto__ = (function (){var G__80114 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__80062,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], 0));
if(cljs.core.record_QMARK_(G__80062)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__80114);
} else {
return G__80114;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__80062),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__80062),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__80062),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__80062),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(G__80062),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(G__80062),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__80121,p__80122,macro_QMARK_,fn_name,fn_id){
var map__80123 = p__80121;
var map__80123__$1 = cljs.core.__destructure_map(map__80123);
var ctx = map__80123__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80123__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__80124 = p__80122;
var seq__80125 = cljs.core.seq(vec__80124);
var first__80126 = cljs.core.first(seq__80125);
var seq__80125__$1 = cljs.core.next(seq__80125);
var binding_vector = first__80126;
var body_exprs = seq__80125__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__4253__auto__ = conds;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__80130 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__80130__$1 = cljs.core.__destructure_map(map__80130);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80130__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80130__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var vec__80131 = cljs.core.split_with((function (p1__80119_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__80119_SHARP_);
}),params);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80131,(0),null);
var vec__80134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80131,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80134,(0),null);
var var_arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80134,(1),null);
var fixed_args__$1 = cljs.core.vec(fixed_args);
var fixed_arity = cljs.core.count(fixed_args__$1);
var param_names = (function (){var G__80142 = fixed_args__$1;
if(cljs.core.truth_(var_arg_name)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__80142,var_arg_name);
} else {
return G__80142;
}
})();
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"params","params",710516235),param_names);
var param_count = cljs.core.count(param_names);
var param_idens = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(param_count,cljs.core.gensym);
var param_bindings = cljs.core.zipmap(param_names,param_idens);
var iden__GT_invoke_idx = cljs.core.zipmap(param_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings,param_bindings], 0)));
var ctx__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx);
var ctx__$4 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$3,new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.conj,fixed_arity);
var ___$1 = cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4),cljs.core.assoc_in(cljs.core._deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)),cljs.core.zipmap(param_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
var self_ref_idx = (cljs.core.truth_(fn_name)?(function (){var G__80144 = ctx__$4;
var G__80145 = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var G__80146 = fn_id;
return (sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3(G__80144,G__80145,G__80146) : sci.impl.analyzer.update_parents.call(null,G__80144,G__80145,G__80146));
})():null);
var body__$1 = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$4,true),fn_expr,body);
var iden__GT_invoke_idx__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var G__80147 = sci.impl.analyzer.__GT_FnBody(params,body__$1,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx__$1);
if(cljs.core.truth_(var_arg_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80147,new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228),cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx__$1,cljs.core.last(param_idens)));
} else {
return G__80147;
}
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__80149 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__80150 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__80149,G__80150) : sci.impl.analyzer.analyze.call(null,G__80149,G__80150));
})(),cljs.core.assoc,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)):m);
return m__$1;
});
sci.impl.analyzer.analyze_fn_STAR_ = (function sci$impl$analyzer$analyze_fn_STAR_(ctx,p__80159,macro_QMARK_){
var vec__80160 = p__80159;
var seq__80161 = cljs.core.seq(vec__80160);
var first__80162 = cljs.core.first(seq__80161);
var seq__80161__$1 = cljs.core.next(seq__80161);
var _fn = first__80162;
var first__80162__$1 = cljs.core.first(seq__80161__$1);
var seq__80161__$2 = cljs.core.next(seq__80161__$1);
var name_QMARK_ = first__80162__$1;
var body = seq__80161__$2;
var fn_expr = vec__80160;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var fn_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var parents = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY)(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$1),fn_id);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891),parents);
var ctx__$3 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),fn_id):ctx__$2);
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$3);
var bound_idens = cljs.core.set(cljs.core.vals(bindings));
var ctx__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$3,new cljs.core.Keyword(null,"outer-idens","outer-idens",1197381241),bound_idens);
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__80168,body__$2){
var map__80170 = p__80168;
var map__80170__$1 = cljs.core.__destructure_map(map__80170);
var acc = map__80170__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80170__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80170__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var orig_body = body__$2;
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$4,body__$2,macro_QMARK_,fn_name,fn_id);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(body__$3);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(body__$3);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__4251__auto__ = var_arg_name;
if(cljs.core.truth_(and__4251__auto__)){
return min_varargs;
} else {
return and__4251__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(var_arg_name);
if(and__4251__auto__){
var and__4251__auto____$1 = min_varargs;
if(cljs.core.truth_(and__4251__auto____$1)){
return (fixed_arity > min_varargs);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__4336__auto__ = fixed_arity;
var y__4337__auto__ = max_fixed;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(body__$3,new cljs.core.Keyword(null,"orig","orig",-1678309870),orig_body)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var cb_idens_by_arity = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(closure_bindings),parents);
var cb_idens = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.vals(cb_idens_by_arity)));
var self_ref_QMARK_ = (cljs.core.truth_(fn_name)?cljs.core.contains_QMARK_(cb_idens,fn_id):null);
var closed_over_idens = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(bound_idens,cljs.core.keys(cb_idens));
var iden__GT_invoke_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(closure_bindings),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(parents),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var closed_over_iden__GT_binding_idx = (cljs.core.truth_(iden__GT_invoke_idx)?cljs.core.zipmap(closed_over_idens,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,closed_over_idens)):null);
var closed_over_cnt = cljs.core.count(closed_over_idens);
var iden__GT_enclosed_idx = cljs.core.zipmap(closed_over_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$1(closed_over_cnt));
var iden__GT_enclosed_idx__$1 = (cljs.core.truth_(fn_name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_enclosed_idx,fn_id,closed_over_cnt):iden__GT_enclosed_idx);
var enclosed_array_fn = (((function (){var or__4253__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.seq(closed_over_iden__GT_binding_idx);
}
})())?(function (){var enclosed_array_cnt = (function (){var G__80183 = closed_over_cnt;
if(cljs.core.truth_(fn_name)){
return (G__80183 + (1));
} else {
return G__80183;
}
})();
var binding__GT_enclosed = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,iden);
if(cljs.core.truth_(temp__5720__auto__)){
var binding_idx = temp__5720__auto__;
var enclosed_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_enclosed_idx__$1,iden);
var G__80185 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__80185[(0)] = binding_idx);

(G__80185[(1)] = enclosed_idx);

return G__80185;
} else {
return null;
}
}),closed_over_idens));
return (function (bindings__$1){
var a__4738__auto__ = binding__GT_enclosed;
var l__4739__auto__ = a__4738__auto__.length;
var idx = (0);
var ret = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(enclosed_array_cnt);
while(true){
if((idx < l__4739__auto__)){
var G__82060 = (idx + (1));
var G__82061 = (function (){var idxs = (binding__GT_enclosed[idx]);
var binding_idx = (idxs[(0)]);
var binding_val = (bindings__$1[binding_idx]);
var enclosed_idx = (idxs[(1)]);
(ret[enclosed_idx] = binding_val);

return ret;
})();
idx = G__82060;
ret = G__82061;
continue;
} else {
return ret;
}
break;
}
});
})():cljs.core.constantly(null));
var bodies__$1 = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (body__$2){
var iden__GT_invocation_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(body__$2);
var invocation_self_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(body__$2);
var enclosed__GT_invocation = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5720__auto__ = (iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1 ? iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_invocation_idx.call(null,iden));
if(cljs.core.truth_(temp__5720__auto__)){
var invocation_idx = temp__5720__auto__;
var G__80192 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__80192[(0)] = (iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1 ? iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_enclosed_idx__$1.call(null,iden)));

(G__80192[(1)] = invocation_idx);

return G__80192;
} else {
return null;
}
}),closed_over_idens));
var invoc_size = cljs.core.count(iden__GT_invocation_idx);
var copy_enclosed__GT_invocation = (((enclosed__GT_invocation.length > (0)))?(function (enclosed_array,invoc_array){
var a__4738__auto__ = enclosed__GT_invocation;
var l__4739__auto__ = a__4738__auto__.length;
var idx = (0);
var ret = invoc_array;
while(true){
if((idx < l__4739__auto__)){
var G__82063 = (idx + (1));
var G__82064 = (function (){var idxs = (enclosed__GT_invocation[idx]);
var enclosed_idx = (idxs[(0)]);
var enclosed_val = (enclosed_array[enclosed_idx]);
var invoc_idx = (idxs[(1)]);
(ret[invoc_idx] = enclosed_val);

return ret;
})();
idx = G__82063;
ret = G__82064;
continue;
} else {
return ret;
}
break;
}
}):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(body__$2,new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058),invoc_size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"invocation-self-idx","invocation-self-idx",-1258983407),invocation_self_idx,new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729),copy_enclosed__GT_invocation], 0));
}),bodies__$1);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(fn_expr),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"column","column",2078222095)], 0));
var ana_fn_meta = ((cljs.core.seq(fn_meta))?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$4,fn_meta) : sci.impl.analyzer.analyze.call(null,ctx__$4,fn_meta)):null);
var struct = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),bodies__$2,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","self-ref?","sci.impl/self-ref?",-276538273),self_ref_QMARK_,new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true,new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639),ana_fn_meta,new cljs.core.Keyword("sci.impl","bindings-fn","sci.impl/bindings-fn",-992456394),enclosed_array_fn], null);
return struct;
});
sci.impl.analyzer.fn_ctx_fn = (function sci$impl$analyzer$fn_ctx_fn(_ctx,struct,fn_meta){
var fn_name = new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569).cljs$core$IFn$_invoke$arity$1(struct);
var fn_bodies = new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661).cljs$core$IFn$_invoke$arity$1(struct);
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(struct);
var single_arity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies)))?cljs.core.first(fn_bodies):null);
var bindings_fn = new cljs.core.Keyword("sci.impl","bindings-fn","sci.impl/bindings-fn",-992456394).cljs$core$IFn$_invoke$arity$1(struct);
var self_ref_QMARK_ = new cljs.core.Keyword("sci.impl","self-ref?","sci.impl/self-ref?",-276538273).cljs$core$IFn$_invoke$arity$1(struct);
if(cljs.core.truth_(fn_meta)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var fn_meta__$1 = sci.impl.types.eval(fn_meta,ctx,bindings);
var f = sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$1);
}),null);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn);
}),null);
}
});
sci.impl.analyzer.analyze_fn = (function sci$impl$analyzer$analyze_fn(ctx,fn_expr,macro_QMARK_){
var struct = sci.impl.analyzer.analyze_fn_STAR_(ctx,fn_expr,macro_QMARK_);
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(struct);
return sci.impl.analyzer.fn_ctx_fn(ctx,struct,fn_meta);
});
/**
 * :syms = closed over values
 */
sci.impl.analyzer.update_parents = (function sci$impl$analyzer$update_parents(ctx,closure_bindings,ob){
var parents = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx);
var new_cb = cljs.core._vreset_BANG_(closure_bindings,(function (cb){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword(null,"syms","syms",-1575891762)),(function (iden__GT_invoke_idx){
if(cljs.core.contains_QMARK_(iden__GT_invoke_idx,ob)){
return iden__GT_invoke_idx;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_invoke_idx,ob,(cljs.core.count(iden__GT_invoke_idx)));
}
}));
})(cljs.core._deref(closure_bindings)));
var closure_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parents,new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ob], 0)));
return closure_idx;
});
sci.impl.analyzer.analyze_let_STAR_ = (function sci$impl$analyzer$analyze_let_STAR_(ctx,expr,destructured_let_bindings,exprs){
var rt = sci.impl.analyzer.recur_target(ctx);
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__80205 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__80210,p__80211){
var vec__80213 = p__80210;
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80213,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80213,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80213,(2),null);
var vec__80216 = p__80211;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80216,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80216,(1),null);
var m = cljs.core.meta(binding_value);
var t = (cljs.core.truth_(m)?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m):null);
var binding_name__$1 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(binding_name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):binding_name);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$2,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$2,binding_value));
var new_iden = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cb = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idx = sci.impl.analyzer.update_parents(ctx__$2,cb,new_iden);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var iden__GT_invoke_idx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_invoke_idx,new_iden,idx);
var ctx__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$3,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name__$1,new_iden),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(idens,new_iden)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80205,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80205,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80205,(2),null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$2,rt),expr,exprs);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idxs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,idens);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$3,bindings){
return sci.impl.evaluator.eval_let(ctx__$3,bindings,new_let_bindings,body,idxs);
}),null);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.analyze_let = (function sci$impl$analyzer$analyze_let(ctx,p__80224){
var vec__80225 = p__80224;
var seq__80226 = cljs.core.seq(vec__80225);
var first__80227 = cljs.core.first(seq__80226);
var seq__80226__$1 = cljs.core.next(seq__80226);
var _let = first__80227;
var first__80227__$1 = cljs.core.first(seq__80226__$1);
var seq__80226__$2 = cljs.core.next(seq__80226__$1);
var let_bindings = first__80227__$1;
var exprs = seq__80226__$2;
var expr = vec__80225;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.init_var_BANG_ = (function sci$impl$analyzer$init_var_BANG_(ctx,name,expr){
var cnn_82084 = sci.impl.vars.current_ns_name();
var env_82085 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_82086 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_82085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_82084], null));
var refers_82087 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_82086);
var the_current_ns_82088__$1 = (function (){var temp__5718__auto__ = (function (){var and__4251__auto__ = refers_82087;
if(cljs.core.truth_(and__4251__auto__)){
return refers_82087.get(name);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var x = temp__5718__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_82084)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_82086,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns_82086,name,(function (){var G__80233 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_82084),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)),false);
G__80233.sci$impl$vars$IVar$unbind$arity$1(null);

return G__80233;
})());
} else {
return the_current_ns_82086;
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_82085,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_82084,the_current_ns_82088__$1);
}));

return null;
});
sci.impl.analyzer.analyze_def = (function sci$impl$analyzer$analyze_def(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__80235 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80235,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80235,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80235,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80235,(3),null);
sci.impl.analyzer.init_var_BANG_(ctx__$1,var_name,expr);

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?sci.impl.utils.var_unbound:(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,init) : sci.impl.analyzer.analyze.call(null,ctx__$1,init)));
var m = cljs.core.meta(var_name);
var m_needs_eval_QMARK_ = m;
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$2 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$1);
var m__$3 = (cljs.core.truth_(m_needs_eval_QMARK_)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m__$2) : sci.impl.analyzer.analyze.call(null,ctx__$1,m__$2)):sci.impl.types.__GT_constant(m__$2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_def(ctx__$2,bindings,var_name,init__$1,m__$3);
}),null);
});
sci.impl.analyzer.analyze_defn = (function sci$impl$analyzer$analyze_defn(ctx,p__80244){
var vec__80246 = p__80244;
var seq__80247 = cljs.core.seq(vec__80246);
var first__80248 = cljs.core.first(seq__80247);
var seq__80247__$1 = cljs.core.next(seq__80247);
var op = first__80248;
var first__80248__$1 = cljs.core.first(seq__80247__$1);
var seq__80247__$2 = cljs.core.next(seq__80247__$1);
var fn_name = first__80248__$1;
var body = seq__80247__$2;
var expr = vec__80246;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

sci.impl.analyzer.init_var_BANG_(ctx,fn_name,expr);

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__80250 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80250,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80250,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5720__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5720__auto__)){
var ds = temp__5720__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5720__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var vec__80253 = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?(function (){var lb = cljs.core.last(body__$1);
if(cljs.core.map_QMARK_(lb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lb,cljs.core.butlast(body__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null));
var meta_map2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80253,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80253,(1),null);
var meta_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
var meta_map__$2 = (cljs.core.truth_(meta_map2)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_map__$1,meta_map2], 0)):meta_map__$1);
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$2),cljs.core.meta(expr));
var f = sci.impl.analyzer.analyze_fn_STAR_(ctx,fn_body,macro_QMARK_);
var arglists = (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f)),null,(1),null)),(2),null));
var meta_map__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$2,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var meta_map__$4 = (function (){var G__80260 = meta_map__$3;
var G__80260__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80260,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__80260);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80260__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__80260__$1;
}
})();
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","defn","sci.impl/defn",1087257818),true], 0));
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(f__$1);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,f__$1,fn_meta);
var f__$2 = ctxfn;
var meta_map__$5 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,meta_map__$4) : sci.impl.analyzer.analyze.call(null,ctx,meta_map__$4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,fn_name,f__$2,meta_map__$5);
}),null);
});
sci.impl.analyzer.analyze_loop = (function sci$impl$analyzer$analyze_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__80267 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),cljs.core.gensym);
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80267,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80267,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.analyze_lazy_seq = (function sci$impl$analyzer$analyze_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
var ctx__$1 = sci.impl.analyzer.with_recur_target(ctx,true);
var ana = sci.impl.analyzer.return_do(ctx__$1,expr,body);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return (new cljs.core.LazySeq(null,(function (){
return sci.impl.types.eval(ana,ctx__$2,bindings);
}),null,null));
}),null);
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0));
var G__80276 = cljs.core.count(children);
switch (G__80276) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
if(cljs.core.not(condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.types.eval(condition,ctx__$1,bindings))){
return sci.impl.types.eval(then,ctx__$1,bindings);
} else {
return null;
}
}),stack);

}
}

break;
case (3):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(2));
if(cljs.core.not(condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.types.eval(condition,ctx__$1,bindings))){
return sci.impl.types.eval(then,ctx__$1,bindings);
} else {
return sci.impl.types.eval(else$,ctx__$1,bindings);
}
}),stack);

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.analyze_case = (function sci$impl$analyzer$analyze_case(ctx,expr){
var ctx_wo_rt = sci.impl.analyzer.without_recur_target(ctx);
var case_val = (function (){var G__80284 = ctx_wo_rt;
var G__80285 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__80284,G__80285) : sci.impl.analyzer.analyze.call(null,G__80284,G__80285));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__80281 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__80286 = ctx;
var G__80287 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__80286,G__80287) : sci.impl.analyzer.analyze.call(null,G__80286,G__80287));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80281,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80281,(1),null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__80293 = cases__$1;
var seq__80294 = cljs.core.seq(vec__80293);
var first__80295 = cljs.core.first(seq__80294);
var seq__80294__$1 = cljs.core.next(seq__80294);
var k = first__80295;
var first__80295__$1 = cljs.core.first(seq__80294__$1);
var seq__80294__$2 = cljs.core.next(seq__80294__$1);
var v = first__80295__$1;
var cases__$2 = seq__80294__$2;
if(cljs.core.seq_QMARK_(k)){
var G__82117 = cases__$2;
var G__82118 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__80293,seq__80294,first__80295,seq__80294__$1,k,first__80295__$1,seq__80294__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__80281,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__80293,seq__80294,first__80295,seq__80294__$1,k,first__80295__$1,seq__80294__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__80281,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__82117;
ret_map = G__82118;
continue;
} else {
var G__82119 = cases__$2;
var G__82120 = assoc_new(ret_map,k,v);
cases__$1 = G__82119;
ret_map = G__82120;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var f = (cljs.core.truth_(default_QMARK_)?sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5(ctx__$1,bindings,case_map,case_val,case_default);
}),null):sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,case_map,case_val);
}),null));
return f;
});
sci.impl.analyzer.analyze_try = (function sci$impl$analyzer$analyze_try(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var body = cljs.core.next(expr);
var vec__80301 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__82122 = exprs__$1;
var G__82123 = body_exprs;
var G__82124 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__82125 = finally_expr;
exprs = G__82122;
body_exprs = G__82123;
catch_exprs = G__82124;
finally_expr = G__82125;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__82127 = exprs__$1;
var G__82128 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__82129 = catch_exprs;
var G__82130 = finally_expr;
exprs = G__82127;
body_exprs = G__82128;
catch_exprs = G__82129;
finally_expr = G__82130;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80301,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80301,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80301,(2),null);
var body__$1 = (function (){var G__80305 = ctx__$1;
var G__80306 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__80305,G__80306) : sci.impl.analyzer.analyze.call(null,G__80305,G__80306));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__80307 = c;
var seq__80308 = cljs.core.seq(vec__80307);
var first__80309 = cljs.core.first(seq__80308);
var seq__80308__$1 = cljs.core.next(seq__80308);
var _ = first__80309;
var first__80309__$1 = cljs.core.first(seq__80308__$1);
var seq__80308__$2 = cljs.core.next(seq__80308__$1);
var ex = first__80309__$1;
var first__80309__$2 = cljs.core.first(seq__80308__$2);
var seq__80308__$3 = cljs.core.next(seq__80308__$2);
var binding = first__80309__$2;
var body__$2 = seq__80308__$3;
var temp__5718__auto__ = (function (){var G__80310 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__80310)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__80310)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__80310)){
return new cljs.core.Keyword(null,"default","default",-1987822328);
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,ex) : sci.impl.analyzer.analyze.call(null,ctx__$1,ex));

}
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var clazz = temp__5718__auto__;
var ex_iden = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var ex_idx = sci.impl.analyzer.update_parents(ctx__$1,closure_bindings,ex_iden);
var ctx__$2 = cljs.core.assoc_in(cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),ex_iden),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),ex_iden], null),ex_idx);
var analyzed_body = (function (){var G__80315 = ctx__$2;
var G__80316 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__80315,G__80316) : sci.impl.analyzer.analyze.call(null,G__80315,G__80316));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805),ex_idx,new cljs.core.Keyword(null,"body","body",-2049205669),analyzed_body], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__80319 = ctx__$1;
var G__80320 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__80319,G__80320) : sci.impl.analyzer.analyze.call(null,G__80319,G__80320));
})():null);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_try(ctx__$2,bindings,body__$1,catches__$1,finally$__$1);
}),null);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__80321){
var vec__80322 = p__80321;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80322,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80322,(1),null);
var expr = vec__80322;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Too many arguments to throw",expr);
}

var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var ana = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,ex) : sci.impl.analyzer.analyze.call(null,ctx__$1,ex));
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx__$2,bindings,sci.impl.types.eval(ana,ctx__$2,bindings),this$);
}),stack);
});
sci.impl.analyzer.analyze_dot = (function sci$impl$analyzer$analyze_dot(ctx,p__80327){
var vec__80328 = p__80327;
var seq__80329 = cljs.core.seq(vec__80328);
var first__80330 = cljs.core.first(seq__80329);
var seq__80329__$1 = cljs.core.next(seq__80329);
var _dot = first__80330;
var first__80330__$1 = cljs.core.first(seq__80329__$1);
var seq__80329__$2 = cljs.core.next(seq__80329__$1);
var instance_expr = first__80330__$1;
var first__80330__$2 = cljs.core.first(seq__80329__$2);
var seq__80329__$3 = cljs.core.next(seq__80329__$2);
var method_expr = first__80330__$2;
var args = seq__80329__$3;
var expr = vec__80328;
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__80333 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__80334 = cljs.core.seq(vec__80333);
var first__80335 = cljs.core.first(seq__80334);
var seq__80334__$1 = cljs.core.next(seq__80334);
var method_expr__$1 = first__80335;
var args__$1 = seq__80334__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx__$1,instance_expr));
var method_name = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx__$1,args__$1):null);
var res = (function (){var field_access = clojure.string.starts_with_QMARK_(method_name,"-");
var meth_name = ((field_access)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1)):method_name);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var allowed_QMARK_ = (method_expr__$1 === sci.impl.utils.allowed_append);
return cljs.core.with_meta(sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_instance_method_invocation(ctx__$2,bindings,instance_expr__$1,meth_name,field_access,args__$2,allowed_QMARK_);
}),stack),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719),instance_expr__$1,new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667),method_name], null));
})();
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__80340){
var vec__80341 = p__80340;
var seq__80342 = cljs.core.seq(vec__80341);
var first__80343 = cljs.core.first(seq__80342);
var seq__80342__$1 = cljs.core.next(seq__80342);
var method_name = first__80343;
var first__80343__$1 = cljs.core.first(seq__80342__$1);
var seq__80342__$2 = cljs.core.next(seq__80342__$1);
var obj = first__80343__$1;
var args = seq__80342__$2;
var expr = vec__80341;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__80351){
var vec__80352 = p__80351;
var seq__80353 = cljs.core.seq(vec__80352);
var first__80354 = cljs.core.first(seq__80353);
var seq__80353__$1 = cljs.core.next(seq__80353);
var _new = first__80354;
var first__80354__$1 = cljs.core.first(seq__80353__$1);
var seq__80353__$2 = cljs.core.next(seq__80353__$1);
var class_sym = first__80354__$1;
var args = seq__80353__$2;
var expr = vec__80352;
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
if((class_sym instanceof cljs.core.Symbol)){
var temp__5718__auto__ = (function (){var or__4253__auto__ = (function (){var temp__5720__auto__ = (function (){var temp__5720__auto__ = sci.impl.interop.resolve_class_opts(ctx__$1,class_sym);
if(cljs.core.truth_(temp__5720__auto__)){
var opts = temp__5720__auto__;
var or__4253__auto__ = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var clazz = temp__5720__auto__;
return clazz;
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx__$1,class_sym,false);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var class$ = temp__5718__auto__;
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
var var_QMARK_ = sci.impl.vars.var_QMARK_(class$);
var maybe_var = ((var_QMARK_)?class$:null);
var maybe_record = ((var_QMARK_)?cljs.core.deref(maybe_var):(((class$ instanceof cljs.core.Symbol))?class$:null));
var maybe_record_constructor = (cljs.core.truth_(maybe_record)?new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(maybe_record)):null);
if(cljs.core.truth_(maybe_record_constructor)){
var G__80361 = ctx__$1;
var G__80362 = expr;
var G__80363 = maybe_record_constructor;
var G__80364 = args__$1;
var G__80365 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__80366 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__80361,G__80362,G__80363,G__80364,G__80365,G__80366) : sci.impl.analyzer.return_call.call(null,G__80361,G__80362,G__80363,G__80364,G__80365,G__80366));
} else {
if(var_QMARK_){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(cljs.core.deref(maybe_var),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__80345_SHARP_){
return sci.impl.types.eval(p1__80345_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
} else {
if((class$ instanceof sci.impl.types.NodeR)){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.types.eval(class$,ctx__$2,bindings),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__80346_SHARP_){
return sci.impl.types.eval(p1__80346_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(class$,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__80347_SHARP_){
return sci.impl.types.eval(p1__80347_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);

}
}
}
} else {
var temp__5718__auto____$1 = sci.impl.records.resolve_record_class(ctx__$1,class_sym);
if(cljs.core.truth_(temp__5718__auto____$1)){
var record = temp__5718__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
var G__80371 = ctx__$1;
var G__80372 = expr;
var G__80373 = new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__80374 = args__$1;
var G__80375 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__80376 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__80371,G__80372,G__80373,G__80374,G__80375,G__80376) : sci.impl.analyzer.return_call.call(null,G__80371,G__80372,G__80373,G__80374,G__80375,G__80376));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
} else {
var class$ = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,class_sym) : sci.impl.analyzer.analyze.call(null,ctx__$1,class_sym));
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.types.eval(class$,ctx__$2,bindings),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__80350_SHARP_){
return sci.impl.types.eval(p1__80350_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__80380){
var vec__80381 = p__80380;
var seq__80382 = cljs.core.seq(vec__80381);
var first__80383 = cljs.core.first(seq__80382);
var seq__80382__$1 = cljs.core.next(seq__80382);
var constructor_sym = first__80383;
var args = seq__80382__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}catch (e80386){if((e80386 instanceof Error)){
var e = e80386;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e80386;

}
}}),stack);
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__80393){
var vec__80395 = p__80393;
var seq__80396 = cljs.core.seq(vec__80395);
var first__80397 = cljs.core.first(seq__80396);
var seq__80396__$1 = cljs.core.next(seq__80396);
var _ns = first__80397;
var first__80397__$1 = cljs.core.first(seq__80396__$1);
var seq__80396__$2 = cljs.core.next(seq__80396__$1);
var ns_name = first__80397__$1;
var exprs = seq__80396__$2;
var expr = vec__80395;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__80398 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80398,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80398,(1),null);
var vec__80401 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80401,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80401,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__80412 = cljs.core.first(exprs__$3);
var seq__80413 = cljs.core.seq(vec__80412);
var first__80414 = cljs.core.first(seq__80413);
var seq__80413__$1 = cljs.core.next(seq__80413);
var k = first__80414;
var args = seq__80413__$1;
var expr__$1 = vec__80412;
var G__80415 = k;
var G__80415__$1 = (((G__80415 instanceof cljs.core.Keyword))?G__80415.fqn:null);
switch (G__80415__$1) {
case "require":
case "use":
case "import":
case "refer-clojure":
var G__82173 = cljs.core.next(exprs__$3);
var G__82174 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__80416 = k;
var G__80416__$1 = (((G__80416 instanceof cljs.core.Keyword))?G__80416.fqn:null);
switch (G__80416__$1) {
case "require":
return sci.impl.load.eval_require;

break;
case "use":
return sci.impl.load.eval_use;

break;
case "import":
return sci.impl.evaluator.eval_import;

break;
case "refer-clojure":
return ((function (exprs__$3,ret,G__80416,G__80416__$1,G__80415,G__80415__$1,vec__80412,seq__80413,first__80414,seq__80413__$1,k,args,expr__$1,vec__80398,docstring,exprs__$1,vec__80401,attr_map,exprs__$2,attr_map__$1,vec__80395,seq__80396,first__80397,seq__80396__$1,_ns,first__80397__$1,seq__80396__$2,ns_name,exprs,expr){
return (function() { 
var G__82176__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__82176 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__82177__i = 0, G__82177__a = new Array(arguments.length -  1);
while (G__82177__i < G__82177__a.length) {G__82177__a[G__82177__i] = arguments[G__82177__i + 1]; ++G__82177__i;}
  args__$1 = new cljs.core.IndexedSeq(G__82177__a,0,null);
} 
return G__82176__delegate.call(this,ctx__$1,args__$1);};
G__82176.cljs$lang$maxFixedArity = 1;
G__82176.cljs$lang$applyTo = (function (arglist__82178){
var ctx__$1 = cljs.core.first(arglist__82178);
var args__$1 = cljs.core.rest(arglist__82178);
return G__82176__delegate(ctx__$1,args__$1);
});
G__82176.cljs$core$IFn$_invoke$arity$variadic = G__82176__delegate;
return G__82176;
})()
;
;})(exprs__$3,ret,G__80416,G__80416__$1,G__80415,G__80415__$1,vec__80412,seq__80413,first__80414,seq__80413__$1,k,args,expr__$1,vec__80398,docstring,exprs__$1,vec__80401,attr_map,exprs__$2,attr_map__$1,vec__80395,seq__80396,first__80397,seq__80396__$1,_ns,first__80397__$1,seq__80396__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80416__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__82173;
ret = G__82174;
continue;

break;
case "gen-class":
var G__82180 = cljs.core.next(exprs__$3);
var G__82181 = ret;
exprs__$3 = G__82180;
ret = G__82181;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80415__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.types.__GT_NodeR(((function (exprs__$3,ret,vec__80398,docstring,exprs__$1,vec__80401,attr_map,exprs__$2,attr_map__$1,vec__80395,seq__80396,first__80397,seq__80396__$1,_ns,first__80397__$1,seq__80396__$2,ns_name,exprs,expr){
return (function (this$,ctx__$1,bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__80398,docstring,exprs__$1,vec__80401,attr_map,exprs__$2,attr_map__$1,vec__80395,seq__80396,first__80397,seq__80396__$1,_ns,first__80397__$1,seq__80396__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__80421){
var vec__80422 = p__80421;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80422,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80422,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__80429){
var vec__80430 = p__80429;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80430,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80430,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80430,(2),null);
var expr = vec__80430;
if((obj instanceof cljs.core.Symbol)){
var obj__$1 = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,obj);
var ___$1 = ((sci.impl.vars.var_QMARK_(obj__$1))?null:sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var v__$2 = sci.impl.types.eval(v__$1,ctx__$1,bindings);
return sci.impl.types.setVal(obj__$1,v__$2);
}),null);
} else {
if(cljs.core.seq_QMARK_(obj)){
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var info = cljs.core.meta(obj__$1);
var k = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667).cljs$core$IFn$_invoke$arity$1(info),(1));
var obj__$2 = new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719).cljs$core$IFn$_invoke$arity$1(info);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var obj__$3 = sci.impl.types.eval(obj__$2,ctx__$1,bindings);
var v__$2 = sci.impl.types.eval(v__$1,ctx__$1,bindings);
return sci.impl.analyzer.goog$module$goog$object.set(obj__$3,k,v__$2);
}),null);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,idx,f,analyzed_children,stack){
var G__80442 = cljs.core.count(analyzed_children);
switch (G__80442) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__80444 = (bindings[idx]);
return (fexpr__80444.cljs$core$IFn$_invoke$arity$0 ? fexpr__80444.cljs$core$IFn$_invoke$arity$0() : fexpr__80444.call(null));
}catch (e80443){if((e80443 instanceof Error)){
var e__79604__auto__ = e80443;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80443;

}
}}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80448 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__80447 = (bindings[idx]);
return (fexpr__80447.cljs$core$IFn$_invoke$arity$1 ? fexpr__80447.cljs$core$IFn$_invoke$arity$1(G__80448) : fexpr__80447.call(null,G__80448));
}catch (e80446){if((e80446 instanceof Error)){
var e__79604__auto__ = e80446;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80446;

}
}}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80452 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80453 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__80451 = (bindings[idx]);
return (fexpr__80451.cljs$core$IFn$_invoke$arity$2 ? fexpr__80451.cljs$core$IFn$_invoke$arity$2(G__80452,G__80453) : fexpr__80451.call(null,G__80452,G__80453));
}catch (e80449){if((e80449 instanceof Error)){
var e__79604__auto__ = e80449;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80449;

}
}}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80456 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80457 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80458 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__80455 = (bindings[idx]);
return (fexpr__80455.cljs$core$IFn$_invoke$arity$3 ? fexpr__80455.cljs$core$IFn$_invoke$arity$3(G__80456,G__80457,G__80458) : fexpr__80455.call(null,G__80456,G__80457,G__80458));
}catch (e80454){if((e80454 instanceof Error)){
var e__79604__auto__ = e80454;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80454;

}
}}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80463 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80464 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80465 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80466 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__80462 = (bindings[idx]);
return (fexpr__80462.cljs$core$IFn$_invoke$arity$4 ? fexpr__80462.cljs$core$IFn$_invoke$arity$4(G__80463,G__80464,G__80465,G__80466) : fexpr__80462.call(null,G__80463,G__80464,G__80465,G__80466));
}catch (e80460){if((e80460 instanceof Error)){
var e__79604__auto__ = e80460;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80460;

}
}}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80471 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80472 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80473 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80474 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80475 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__80470 = (bindings[idx]);
return (fexpr__80470.cljs$core$IFn$_invoke$arity$5 ? fexpr__80470.cljs$core$IFn$_invoke$arity$5(G__80471,G__80472,G__80473,G__80474,G__80475) : fexpr__80470.call(null,G__80471,G__80472,G__80473,G__80474,G__80475));
}catch (e80467){if((e80467 instanceof Error)){
var e__79604__auto__ = e80467;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80467;

}
}}),stack);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80478 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80479 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80480 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80481 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80482 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80483 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__80477 = (bindings[idx]);
return (fexpr__80477.cljs$core$IFn$_invoke$arity$6 ? fexpr__80477.cljs$core$IFn$_invoke$arity$6(G__80478,G__80479,G__80480,G__80481,G__80482,G__80483) : fexpr__80477.call(null,G__80478,G__80479,G__80480,G__80481,G__80482,G__80483));
}catch (e80476){if((e80476 instanceof Error)){
var e__79604__auto__ = e80476;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80476;

}
}}),stack);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80487 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80488 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80489 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80490 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80491 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80492 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80493 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__80486 = (bindings[idx]);
return (fexpr__80486.cljs$core$IFn$_invoke$arity$7 ? fexpr__80486.cljs$core$IFn$_invoke$arity$7(G__80487,G__80488,G__80489,G__80490,G__80491,G__80492,G__80493) : fexpr__80486.call(null,G__80487,G__80488,G__80489,G__80490,G__80491,G__80492,G__80493));
}catch (e80484){if((e80484 instanceof Error)){
var e__79604__auto__ = e80484;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80484;

}
}}),stack);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80505 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80506 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80507 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80508 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80509 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80510 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80511 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80512 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__80504 = (bindings[idx]);
return (fexpr__80504.cljs$core$IFn$_invoke$arity$8 ? fexpr__80504.cljs$core$IFn$_invoke$arity$8(G__80505,G__80506,G__80507,G__80508,G__80509,G__80510,G__80511,G__80512) : fexpr__80504.call(null,G__80505,G__80506,G__80507,G__80508,G__80509,G__80510,G__80511,G__80512));
}catch (e80503){if((e80503 instanceof Error)){
var e__79604__auto__ = e80503;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80503;

}
}}),stack);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80515 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80516 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80517 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80518 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80519 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80520 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80521 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80522 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80523 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__80514 = (bindings[idx]);
return (fexpr__80514.cljs$core$IFn$_invoke$arity$9 ? fexpr__80514.cljs$core$IFn$_invoke$arity$9(G__80515,G__80516,G__80517,G__80518,G__80519,G__80520,G__80521,G__80522,G__80523) : fexpr__80514.call(null,G__80515,G__80516,G__80517,G__80518,G__80519,G__80520,G__80521,G__80522,G__80523));
}catch (e80513){if((e80513 instanceof Error)){
var e__79604__auto__ = e80513;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80513;

}
}}),stack);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80529 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80530 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80531 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80532 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80533 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80534 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80535 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80536 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80537 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80538 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__80528 = (bindings[idx]);
return (fexpr__80528.cljs$core$IFn$_invoke$arity$10 ? fexpr__80528.cljs$core$IFn$_invoke$arity$10(G__80529,G__80530,G__80531,G__80532,G__80533,G__80534,G__80535,G__80536,G__80537,G__80538) : fexpr__80528.call(null,G__80529,G__80530,G__80531,G__80532,G__80533,G__80534,G__80535,G__80536,G__80537,G__80538));
}catch (e80527){if((e80527 instanceof Error)){
var e__79604__auto__ = e80527;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80527;

}
}}),stack);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80545 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80546 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80547 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80548 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80549 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80550 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80551 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80552 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80553 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80554 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80555 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__80544 = (bindings[idx]);
return (fexpr__80544.cljs$core$IFn$_invoke$arity$11 ? fexpr__80544.cljs$core$IFn$_invoke$arity$11(G__80545,G__80546,G__80547,G__80548,G__80549,G__80550,G__80551,G__80552,G__80553,G__80554,G__80555) : fexpr__80544.call(null,G__80545,G__80546,G__80547,G__80548,G__80549,G__80550,G__80551,G__80552,G__80553,G__80554,G__80555));
}catch (e80543){if((e80543 instanceof Error)){
var e__79604__auto__ = e80543;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80543;

}
}}),stack);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80561 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80562 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80563 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80564 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80565 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80566 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80567 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80568 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80569 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80570 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80571 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80572 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__80560 = (bindings[idx]);
return (fexpr__80560.cljs$core$IFn$_invoke$arity$12 ? fexpr__80560.cljs$core$IFn$_invoke$arity$12(G__80561,G__80562,G__80563,G__80564,G__80565,G__80566,G__80567,G__80568,G__80569,G__80570,G__80571,G__80572) : fexpr__80560.call(null,G__80561,G__80562,G__80563,G__80564,G__80565,G__80566,G__80567,G__80568,G__80569,G__80570,G__80571,G__80572));
}catch (e80558){if((e80558 instanceof Error)){
var e__79604__auto__ = e80558;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80558;

}
}}),stack);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80577 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80578 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80579 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80580 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80581 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80582 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80583 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80584 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80585 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80586 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80587 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80588 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80589 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__80576 = (bindings[idx]);
return (fexpr__80576.cljs$core$IFn$_invoke$arity$13 ? fexpr__80576.cljs$core$IFn$_invoke$arity$13(G__80577,G__80578,G__80579,G__80580,G__80581,G__80582,G__80583,G__80584,G__80585,G__80586,G__80587,G__80588,G__80589) : fexpr__80576.call(null,G__80577,G__80578,G__80579,G__80580,G__80581,G__80582,G__80583,G__80584,G__80585,G__80586,G__80587,G__80588,G__80589));
}catch (e80574){if((e80574 instanceof Error)){
var e__79604__auto__ = e80574;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80574;

}
}}),stack);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80596 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80597 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80598 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80599 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80600 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80601 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80602 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80603 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80604 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80605 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80606 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80607 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80608 = sci.impl.types.eval(arg12,ctx,bindings);
var G__80609 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__80595 = (bindings[idx]);
return (fexpr__80595.cljs$core$IFn$_invoke$arity$14 ? fexpr__80595.cljs$core$IFn$_invoke$arity$14(G__80596,G__80597,G__80598,G__80599,G__80600,G__80601,G__80602,G__80603,G__80604,G__80605,G__80606,G__80607,G__80608,G__80609) : fexpr__80595.call(null,G__80596,G__80597,G__80598,G__80599,G__80600,G__80601,G__80602,G__80603,G__80604,G__80605,G__80606,G__80607,G__80608,G__80609));
}catch (e80593){if((e80593 instanceof Error)){
var e__79604__auto__ = e80593;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80593;

}
}}),stack);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80616 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80617 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80618 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80619 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80620 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80621 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80622 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80623 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80624 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80625 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80626 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80627 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80628 = sci.impl.types.eval(arg12,ctx,bindings);
var G__80629 = sci.impl.types.eval(arg13,ctx,bindings);
var G__80630 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__80615 = (bindings[idx]);
return (fexpr__80615.cljs$core$IFn$_invoke$arity$15 ? fexpr__80615.cljs$core$IFn$_invoke$arity$15(G__80616,G__80617,G__80618,G__80619,G__80620,G__80621,G__80622,G__80623,G__80624,G__80625,G__80626,G__80627,G__80628,G__80629,G__80630) : fexpr__80615.call(null,G__80616,G__80617,G__80618,G__80619,G__80620,G__80621,G__80622,G__80623,G__80624,G__80625,G__80626,G__80627,G__80628,G__80629,G__80630));
}catch (e80614){if((e80614 instanceof Error)){
var e__79604__auto__ = e80614;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80614;

}
}}),stack);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80639 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80640 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80641 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80642 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80643 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80644 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80645 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80646 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80647 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80648 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80649 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80650 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80651 = sci.impl.types.eval(arg12,ctx,bindings);
var G__80652 = sci.impl.types.eval(arg13,ctx,bindings);
var G__80653 = sci.impl.types.eval(arg14,ctx,bindings);
var G__80654 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__80638 = (bindings[idx]);
return (fexpr__80638.cljs$core$IFn$_invoke$arity$16 ? fexpr__80638.cljs$core$IFn$_invoke$arity$16(G__80639,G__80640,G__80641,G__80642,G__80643,G__80644,G__80645,G__80646,G__80647,G__80648,G__80649,G__80650,G__80651,G__80652,G__80653,G__80654) : fexpr__80638.call(null,G__80639,G__80640,G__80641,G__80642,G__80643,G__80644,G__80645,G__80646,G__80647,G__80648,G__80649,G__80650,G__80651,G__80652,G__80653,G__80654));
}catch (e80637){if((e80637 instanceof Error)){
var e__79604__auto__ = e80637;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80637;

}
}}),stack);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80665 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80666 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80667 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80668 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80669 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80670 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80671 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80672 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80673 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80674 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80675 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80676 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80677 = sci.impl.types.eval(arg12,ctx,bindings);
var G__80678 = sci.impl.types.eval(arg13,ctx,bindings);
var G__80679 = sci.impl.types.eval(arg14,ctx,bindings);
var G__80680 = sci.impl.types.eval(arg15,ctx,bindings);
var G__80681 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__80664 = (bindings[idx]);
return (fexpr__80664.cljs$core$IFn$_invoke$arity$17 ? fexpr__80664.cljs$core$IFn$_invoke$arity$17(G__80665,G__80666,G__80667,G__80668,G__80669,G__80670,G__80671,G__80672,G__80673,G__80674,G__80675,G__80676,G__80677,G__80678,G__80679,G__80680,G__80681) : fexpr__80664.call(null,G__80665,G__80666,G__80667,G__80668,G__80669,G__80670,G__80671,G__80672,G__80673,G__80674,G__80675,G__80676,G__80677,G__80678,G__80679,G__80680,G__80681));
}catch (e80663){if((e80663 instanceof Error)){
var e__79604__auto__ = e80663;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80663;

}
}}),stack);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80690 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80691 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80692 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80693 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80694 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80695 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80696 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80697 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80698 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80699 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80700 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80701 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80702 = sci.impl.types.eval(arg12,ctx,bindings);
var G__80703 = sci.impl.types.eval(arg13,ctx,bindings);
var G__80704 = sci.impl.types.eval(arg14,ctx,bindings);
var G__80705 = sci.impl.types.eval(arg15,ctx,bindings);
var G__80706 = sci.impl.types.eval(arg16,ctx,bindings);
var G__80707 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__80689 = (bindings[idx]);
return (fexpr__80689.cljs$core$IFn$_invoke$arity$18 ? fexpr__80689.cljs$core$IFn$_invoke$arity$18(G__80690,G__80691,G__80692,G__80693,G__80694,G__80695,G__80696,G__80697,G__80698,G__80699,G__80700,G__80701,G__80702,G__80703,G__80704,G__80705,G__80706,G__80707) : fexpr__80689.call(null,G__80690,G__80691,G__80692,G__80693,G__80694,G__80695,G__80696,G__80697,G__80698,G__80699,G__80700,G__80701,G__80702,G__80703,G__80704,G__80705,G__80706,G__80707));
}catch (e80688){if((e80688 instanceof Error)){
var e__79604__auto__ = e80688;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80688;

}
}}),stack);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__80712 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80713 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80714 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80715 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80716 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80717 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80718 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80719 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80720 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80721 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80722 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80723 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80724 = sci.impl.types.eval(arg12,ctx,bindings);
var G__80725 = sci.impl.types.eval(arg13,ctx,bindings);
var G__80726 = sci.impl.types.eval(arg14,ctx,bindings);
var G__80727 = sci.impl.types.eval(arg15,ctx,bindings);
var G__80728 = sci.impl.types.eval(arg16,ctx,bindings);
var G__80729 = sci.impl.types.eval(arg17,ctx,bindings);
var G__80730 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__80711 = (bindings[idx]);
return (fexpr__80711.cljs$core$IFn$_invoke$arity$19 ? fexpr__80711.cljs$core$IFn$_invoke$arity$19(G__80712,G__80713,G__80714,G__80715,G__80716,G__80717,G__80718,G__80719,G__80720,G__80721,G__80722,G__80723,G__80724,G__80725,G__80726,G__80727,G__80728,G__80729,G__80730) : fexpr__80711.call(null,G__80712,G__80713,G__80714,G__80715,G__80716,G__80717,G__80718,G__80719,G__80720,G__80721,G__80722,G__80723,G__80724,G__80725,G__80726,G__80727,G__80728,G__80729,G__80730));
}catch (e80710){if((e80710 instanceof Error)){
var e__79604__auto__ = e80710;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79604__auto__,this$);
} else {
throw e80710;

}
}}),stack);

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(bindings[idx]),analyzed_children);
});

}
});
sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)], 0));
var G__80746 = cljs.core.count(analyzed_children);
switch (G__80746) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80747 = ctx;
var G__80748 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__80747,G__80748) : f.call(null,G__80747,G__80748));
}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80750 = ctx;
var G__80751 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80752 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__80750,G__80751,G__80752) : f.call(null,G__80750,G__80751,G__80752));
}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80755 = ctx;
var G__80756 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80757 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80758 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__80755,G__80756,G__80757,G__80758) : f.call(null,G__80755,G__80756,G__80757,G__80758));
}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80760 = ctx;
var G__80761 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80762 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80763 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80764 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__80760,G__80761,G__80762,G__80763,G__80764) : f.call(null,G__80760,G__80761,G__80762,G__80763,G__80764));
}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80766 = ctx;
var G__80767 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80768 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80769 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80770 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80771 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__80766,G__80767,G__80768,G__80769,G__80770,G__80771) : f.call(null,G__80766,G__80767,G__80768,G__80769,G__80770,G__80771));
}),stack);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80773 = ctx;
var G__80774 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80775 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80776 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80777 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80778 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80779 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__80773,G__80774,G__80775,G__80776,G__80777,G__80778,G__80779) : f.call(null,G__80773,G__80774,G__80775,G__80776,G__80777,G__80778,G__80779));
}),stack);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80782 = ctx;
var G__80783 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80784 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80785 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80786 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80787 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80788 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80789 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__80782,G__80783,G__80784,G__80785,G__80786,G__80787,G__80788,G__80789) : f.call(null,G__80782,G__80783,G__80784,G__80785,G__80786,G__80787,G__80788,G__80789));
}),stack);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80794 = ctx;
var G__80795 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80796 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80797 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80798 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80799 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80800 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80801 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80802 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__80794,G__80795,G__80796,G__80797,G__80798,G__80799,G__80800,G__80801,G__80802) : f.call(null,G__80794,G__80795,G__80796,G__80797,G__80798,G__80799,G__80800,G__80801,G__80802));
}),stack);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80805 = ctx;
var G__80806 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80807 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80808 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80809 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80810 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80811 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80812 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80813 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80814 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__80805,G__80806,G__80807,G__80808,G__80809,G__80810,G__80811,G__80812,G__80813,G__80814) : f.call(null,G__80805,G__80806,G__80807,G__80808,G__80809,G__80810,G__80811,G__80812,G__80813,G__80814));
}),stack);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80816 = ctx;
var G__80817 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80818 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80819 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80820 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80821 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80822 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80823 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80824 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80825 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80826 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__80816,G__80817,G__80818,G__80819,G__80820,G__80821,G__80822,G__80823,G__80824,G__80825,G__80826) : f.call(null,G__80816,G__80817,G__80818,G__80819,G__80820,G__80821,G__80822,G__80823,G__80824,G__80825,G__80826));
}),stack);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80831 = ctx;
var G__80832 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80833 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80834 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80835 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80836 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80837 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80838 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80839 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80840 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80841 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80842 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__80831,G__80832,G__80833,G__80834,G__80835,G__80836,G__80837,G__80838,G__80839,G__80840,G__80841,G__80842) : f.call(null,G__80831,G__80832,G__80833,G__80834,G__80835,G__80836,G__80837,G__80838,G__80839,G__80840,G__80841,G__80842));
}),stack);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80846 = ctx;
var G__80847 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80848 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80849 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80850 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80851 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80852 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80853 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80854 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80855 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80856 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80857 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80858 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__80846,G__80847,G__80848,G__80849,G__80850,G__80851,G__80852,G__80853,G__80854,G__80855,G__80856,G__80857,G__80858) : f.call(null,G__80846,G__80847,G__80848,G__80849,G__80850,G__80851,G__80852,G__80853,G__80854,G__80855,G__80856,G__80857,G__80858));
}),stack);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80860 = ctx;
var G__80861 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80862 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80863 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80864 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80865 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80866 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80867 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80868 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80869 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80870 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80871 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80872 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80873 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__80860,G__80861,G__80862,G__80863,G__80864,G__80865,G__80866,G__80867,G__80868,G__80869,G__80870,G__80871,G__80872,G__80873) : f.call(null,G__80860,G__80861,G__80862,G__80863,G__80864,G__80865,G__80866,G__80867,G__80868,G__80869,G__80870,G__80871,G__80872,G__80873));
}),stack);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80876 = ctx;
var G__80877 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80878 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80879 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80880 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80881 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80882 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80883 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80884 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80885 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80886 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80887 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80888 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80889 = sci.impl.types.eval(arg12,ctx,bindings);
var G__80890 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__80876,G__80877,G__80878,G__80879,G__80880,G__80881,G__80882,G__80883,G__80884,G__80885,G__80886,G__80887,G__80888,G__80889,G__80890) : f.call(null,G__80876,G__80877,G__80878,G__80879,G__80880,G__80881,G__80882,G__80883,G__80884,G__80885,G__80886,G__80887,G__80888,G__80889,G__80890));
}),stack);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80905 = ctx;
var G__80906 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80907 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80908 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80909 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80910 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80911 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80912 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80913 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80914 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80915 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80916 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80917 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80918 = sci.impl.types.eval(arg12,ctx,bindings);
var G__80919 = sci.impl.types.eval(arg13,ctx,bindings);
var G__80920 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__80905,G__80906,G__80907,G__80908,G__80909,G__80910,G__80911,G__80912,G__80913,G__80914,G__80915,G__80916,G__80917,G__80918,G__80919,G__80920) : f.call(null,G__80905,G__80906,G__80907,G__80908,G__80909,G__80910,G__80911,G__80912,G__80913,G__80914,G__80915,G__80916,G__80917,G__80918,G__80919,G__80920));
}),stack);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80930 = ctx;
var G__80931 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80932 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80933 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80934 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80935 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80936 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80937 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80938 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80939 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80940 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80941 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80942 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80943 = sci.impl.types.eval(arg12,ctx,bindings);
var G__80944 = sci.impl.types.eval(arg13,ctx,bindings);
var G__80945 = sci.impl.types.eval(arg14,ctx,bindings);
var G__80946 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__80930,G__80931,G__80932,G__80933,G__80934,G__80935,G__80936,G__80937,G__80938,G__80939,G__80940,G__80941,G__80942,G__80943,G__80944,G__80945,G__80946) : f.call(null,G__80930,G__80931,G__80932,G__80933,G__80934,G__80935,G__80936,G__80937,G__80938,G__80939,G__80940,G__80941,G__80942,G__80943,G__80944,G__80945,G__80946));
}),stack);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80948 = ctx;
var G__80949 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80950 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80951 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80952 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80953 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80954 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80955 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80956 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80957 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80958 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80959 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80960 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80961 = sci.impl.types.eval(arg12,ctx,bindings);
var G__80962 = sci.impl.types.eval(arg13,ctx,bindings);
var G__80963 = sci.impl.types.eval(arg14,ctx,bindings);
var G__80964 = sci.impl.types.eval(arg15,ctx,bindings);
var G__80965 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__80948,G__80949,G__80950,G__80951,G__80952,G__80953,G__80954,G__80955,G__80956,G__80957,G__80958,G__80959,G__80960,G__80961,G__80962,G__80963,G__80964,G__80965) : f.call(null,G__80948,G__80949,G__80950,G__80951,G__80952,G__80953,G__80954,G__80955,G__80956,G__80957,G__80958,G__80959,G__80960,G__80961,G__80962,G__80963,G__80964,G__80965));
}),stack);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80970 = ctx;
var G__80971 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80972 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80973 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80974 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80975 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80976 = sci.impl.types.eval(arg5,ctx,bindings);
var G__80977 = sci.impl.types.eval(arg6,ctx,bindings);
var G__80978 = sci.impl.types.eval(arg7,ctx,bindings);
var G__80979 = sci.impl.types.eval(arg8,ctx,bindings);
var G__80980 = sci.impl.types.eval(arg9,ctx,bindings);
var G__80981 = sci.impl.types.eval(arg10,ctx,bindings);
var G__80982 = sci.impl.types.eval(arg11,ctx,bindings);
var G__80983 = sci.impl.types.eval(arg12,ctx,bindings);
var G__80984 = sci.impl.types.eval(arg13,ctx,bindings);
var G__80985 = sci.impl.types.eval(arg14,ctx,bindings);
var G__80986 = sci.impl.types.eval(arg15,ctx,bindings);
var G__80987 = sci.impl.types.eval(arg16,ctx,bindings);
var G__80988 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__80970,G__80971,G__80972,G__80973,G__80974,G__80975,G__80976,G__80977,G__80978,G__80979,G__80980,G__80981,G__80982,G__80983,G__80984,G__80985,G__80986,G__80987,G__80988) : f.call(null,G__80970,G__80971,G__80972,G__80973,G__80974,G__80975,G__80976,G__80977,G__80978,G__80979,G__80980,G__80981,G__80982,G__80983,G__80984,G__80985,G__80986,G__80987,G__80988));
}),stack);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__80993 = ctx;
var G__80994 = sci.impl.types.eval(arg0,ctx,bindings);
var G__80995 = sci.impl.types.eval(arg1,ctx,bindings);
var G__80996 = sci.impl.types.eval(arg2,ctx,bindings);
var G__80997 = sci.impl.types.eval(arg3,ctx,bindings);
var G__80998 = sci.impl.types.eval(arg4,ctx,bindings);
var G__80999 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81000 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81001 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81002 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81003 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81004 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81005 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81006 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81007 = sci.impl.types.eval(arg13,ctx,bindings);
var G__81008 = sci.impl.types.eval(arg14,ctx,bindings);
var G__81009 = sci.impl.types.eval(arg15,ctx,bindings);
var G__81010 = sci.impl.types.eval(arg16,ctx,bindings);
var G__81011 = sci.impl.types.eval(arg17,ctx,bindings);
var G__81012 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__80993,G__80994,G__80995,G__80996,G__80997,G__80998,G__80999,G__81000,G__81001,G__81002,G__81003,G__81004,G__81005,G__81006,G__81007,G__81008,G__81009,G__81010,G__81011,G__81012) : f.call(null,G__80993,G__80994,G__80995,G__80996,G__80997,G__80998,G__80999,G__81000,G__81001,G__81002,G__81003,G__81004,G__81005,G__81006,G__81007,G__81008,G__81009,G__81010,G__81011,G__81012));
}),stack);

break;
default:
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
}),stack);

}
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
var G__81020 = cljs.core.count(analyzed_children);
switch (G__81020) {
case (0):
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__81023 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81023.cljs$core$IFn$_invoke$arity$0 ? fexpr__81023.cljs$core$IFn$_invoke$arity$0() : fexpr__81023.call(null));
}catch (e81021){if((e81021 instanceof Error)){
var e__79727__auto__ = e81021;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81021;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e81025){if((e81025 instanceof Error)){
var e__79727__auto__ = e81025;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81025;

}
}}),stack);
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81031 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__81030 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81030.cljs$core$IFn$_invoke$arity$1 ? fexpr__81030.cljs$core$IFn$_invoke$arity$1(G__81031) : fexpr__81030.call(null,G__81031));
}catch (e81029){if((e81029 instanceof Error)){
var e__79727__auto__ = e81029;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81029;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81033 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81033) : f.call(null,G__81033));
}catch (e81032){if((e81032 instanceof Error)){
var e__79727__auto__ = e81032;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81032;

}
}}),stack);
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81037 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81038 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__81036 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81036.cljs$core$IFn$_invoke$arity$2 ? fexpr__81036.cljs$core$IFn$_invoke$arity$2(G__81037,G__81038) : fexpr__81036.call(null,G__81037,G__81038));
}catch (e81034){if((e81034 instanceof Error)){
var e__79727__auto__ = e81034;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81034;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81040 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81041 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__81040,G__81041) : f.call(null,G__81040,G__81041));
}catch (e81039){if((e81039 instanceof Error)){
var e__79727__auto__ = e81039;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81039;

}
}}),stack);
}

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81044 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81045 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81047 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__81043 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81043.cljs$core$IFn$_invoke$arity$3 ? fexpr__81043.cljs$core$IFn$_invoke$arity$3(G__81044,G__81045,G__81047) : fexpr__81043.call(null,G__81044,G__81045,G__81047));
}catch (e81042){if((e81042 instanceof Error)){
var e__79727__auto__ = e81042;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81042;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81049 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81050 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81051 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__81049,G__81050,G__81051) : f.call(null,G__81049,G__81050,G__81051));
}catch (e81048){if((e81048 instanceof Error)){
var e__79727__auto__ = e81048;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81048;

}
}}),stack);
}

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81054 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81055 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81056 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81057 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__81053 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81053.cljs$core$IFn$_invoke$arity$4 ? fexpr__81053.cljs$core$IFn$_invoke$arity$4(G__81054,G__81055,G__81056,G__81057) : fexpr__81053.call(null,G__81054,G__81055,G__81056,G__81057));
}catch (e81052){if((e81052 instanceof Error)){
var e__79727__auto__ = e81052;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81052;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81064 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81065 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81066 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81067 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__81064,G__81065,G__81066,G__81067) : f.call(null,G__81064,G__81065,G__81066,G__81067));
}catch (e81059){if((e81059 instanceof Error)){
var e__79727__auto__ = e81059;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81059;

}
}}),stack);
}

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81072 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81073 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81074 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81075 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81076 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__81071 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81071.cljs$core$IFn$_invoke$arity$5 ? fexpr__81071.cljs$core$IFn$_invoke$arity$5(G__81072,G__81073,G__81074,G__81075,G__81076) : fexpr__81071.call(null,G__81072,G__81073,G__81074,G__81075,G__81076));
}catch (e81070){if((e81070 instanceof Error)){
var e__79727__auto__ = e81070;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81070;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81078 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81079 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81080 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81081 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81082 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__81078,G__81079,G__81080,G__81081,G__81082) : f.call(null,G__81078,G__81079,G__81080,G__81081,G__81082));
}catch (e81077){if((e81077 instanceof Error)){
var e__79727__auto__ = e81077;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81077;

}
}}),stack);
}

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81086 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81087 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81088 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81089 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81090 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81091 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__81085 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81085.cljs$core$IFn$_invoke$arity$6 ? fexpr__81085.cljs$core$IFn$_invoke$arity$6(G__81086,G__81087,G__81088,G__81089,G__81090,G__81091) : fexpr__81085.call(null,G__81086,G__81087,G__81088,G__81089,G__81090,G__81091));
}catch (e81084){if((e81084 instanceof Error)){
var e__79727__auto__ = e81084;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81084;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81094 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81095 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81096 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81097 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81098 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81099 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__81094,G__81095,G__81096,G__81097,G__81098,G__81099) : f.call(null,G__81094,G__81095,G__81096,G__81097,G__81098,G__81099));
}catch (e81093){if((e81093 instanceof Error)){
var e__79727__auto__ = e81093;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81093;

}
}}),stack);
}

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81102 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81103 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81104 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81105 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81106 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81107 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81108 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__81101 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81101.cljs$core$IFn$_invoke$arity$7 ? fexpr__81101.cljs$core$IFn$_invoke$arity$7(G__81102,G__81103,G__81104,G__81105,G__81106,G__81107,G__81108) : fexpr__81101.call(null,G__81102,G__81103,G__81104,G__81105,G__81106,G__81107,G__81108));
}catch (e81100){if((e81100 instanceof Error)){
var e__79727__auto__ = e81100;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81100;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81116 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81117 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81118 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81119 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81120 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81121 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81122 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__81116,G__81117,G__81118,G__81119,G__81120,G__81121,G__81122) : f.call(null,G__81116,G__81117,G__81118,G__81119,G__81120,G__81121,G__81122));
}catch (e81115){if((e81115 instanceof Error)){
var e__79727__auto__ = e81115;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81115;

}
}}),stack);
}

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81126 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81127 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81128 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81129 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81130 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81131 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81132 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81133 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__81125 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81125.cljs$core$IFn$_invoke$arity$8 ? fexpr__81125.cljs$core$IFn$_invoke$arity$8(G__81126,G__81127,G__81128,G__81129,G__81130,G__81131,G__81132,G__81133) : fexpr__81125.call(null,G__81126,G__81127,G__81128,G__81129,G__81130,G__81131,G__81132,G__81133));
}catch (e81123){if((e81123 instanceof Error)){
var e__79727__auto__ = e81123;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81123;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81135 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81136 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81137 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81138 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81139 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81140 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81141 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81142 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__81135,G__81136,G__81137,G__81138,G__81139,G__81140,G__81141,G__81142) : f.call(null,G__81135,G__81136,G__81137,G__81138,G__81139,G__81140,G__81141,G__81142));
}catch (e81134){if((e81134 instanceof Error)){
var e__79727__auto__ = e81134;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81134;

}
}}),stack);
}

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81146 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81147 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81148 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81149 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81150 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81151 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81152 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81153 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81154 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__81145 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81145.cljs$core$IFn$_invoke$arity$9 ? fexpr__81145.cljs$core$IFn$_invoke$arity$9(G__81146,G__81147,G__81148,G__81149,G__81150,G__81151,G__81152,G__81153,G__81154) : fexpr__81145.call(null,G__81146,G__81147,G__81148,G__81149,G__81150,G__81151,G__81152,G__81153,G__81154));
}catch (e81144){if((e81144 instanceof Error)){
var e__79727__auto__ = e81144;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81144;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81158 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81159 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81160 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81161 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81162 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81163 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81164 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81165 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81166 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__81158,G__81159,G__81160,G__81161,G__81162,G__81163,G__81164,G__81165,G__81166) : f.call(null,G__81158,G__81159,G__81160,G__81161,G__81162,G__81163,G__81164,G__81165,G__81166));
}catch (e81157){if((e81157 instanceof Error)){
var e__79727__auto__ = e81157;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81157;

}
}}),stack);
}

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81171 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81172 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81173 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81174 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81175 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81176 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81177 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81178 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81179 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81180 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__81170 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81170.cljs$core$IFn$_invoke$arity$10 ? fexpr__81170.cljs$core$IFn$_invoke$arity$10(G__81171,G__81172,G__81173,G__81174,G__81175,G__81176,G__81177,G__81178,G__81179,G__81180) : fexpr__81170.call(null,G__81171,G__81172,G__81173,G__81174,G__81175,G__81176,G__81177,G__81178,G__81179,G__81180));
}catch (e81169){if((e81169 instanceof Error)){
var e__79727__auto__ = e81169;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81169;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81184 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81185 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81186 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81187 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81188 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81189 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81190 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81191 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81192 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81193 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__81184,G__81185,G__81186,G__81187,G__81188,G__81189,G__81190,G__81191,G__81192,G__81193) : f.call(null,G__81184,G__81185,G__81186,G__81187,G__81188,G__81189,G__81190,G__81191,G__81192,G__81193));
}catch (e81183){if((e81183 instanceof Error)){
var e__79727__auto__ = e81183;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81183;

}
}}),stack);
}

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81201 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81202 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81203 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81204 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81205 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81206 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81207 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81208 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81209 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81210 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81211 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__81200 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81200.cljs$core$IFn$_invoke$arity$11 ? fexpr__81200.cljs$core$IFn$_invoke$arity$11(G__81201,G__81202,G__81203,G__81204,G__81205,G__81206,G__81207,G__81208,G__81209,G__81210,G__81211) : fexpr__81200.call(null,G__81201,G__81202,G__81203,G__81204,G__81205,G__81206,G__81207,G__81208,G__81209,G__81210,G__81211));
}catch (e81196){if((e81196 instanceof Error)){
var e__79727__auto__ = e81196;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81196;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81221 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81222 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81223 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81224 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81225 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81226 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81227 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81228 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81229 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81230 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81231 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__81221,G__81222,G__81223,G__81224,G__81225,G__81226,G__81227,G__81228,G__81229,G__81230,G__81231) : f.call(null,G__81221,G__81222,G__81223,G__81224,G__81225,G__81226,G__81227,G__81228,G__81229,G__81230,G__81231));
}catch (e81220){if((e81220 instanceof Error)){
var e__79727__auto__ = e81220;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81220;

}
}}),stack);
}

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81234 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81235 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81236 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81237 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81238 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81239 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81240 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81241 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81242 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81243 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81244 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81245 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__81233 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81233.cljs$core$IFn$_invoke$arity$12 ? fexpr__81233.cljs$core$IFn$_invoke$arity$12(G__81234,G__81235,G__81236,G__81237,G__81238,G__81239,G__81240,G__81241,G__81242,G__81243,G__81244,G__81245) : fexpr__81233.call(null,G__81234,G__81235,G__81236,G__81237,G__81238,G__81239,G__81240,G__81241,G__81242,G__81243,G__81244,G__81245));
}catch (e81232){if((e81232 instanceof Error)){
var e__79727__auto__ = e81232;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81232;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81250 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81251 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81252 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81253 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81254 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81255 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81256 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81257 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81258 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81259 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81260 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81261 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__81250,G__81251,G__81252,G__81253,G__81254,G__81255,G__81256,G__81257,G__81258,G__81259,G__81260,G__81261) : f.call(null,G__81250,G__81251,G__81252,G__81253,G__81254,G__81255,G__81256,G__81257,G__81258,G__81259,G__81260,G__81261));
}catch (e81246){if((e81246 instanceof Error)){
var e__79727__auto__ = e81246;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81246;

}
}}),stack);
}

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81268 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81269 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81270 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81271 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81272 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81273 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81274 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81275 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81276 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81277 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81278 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81279 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81280 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__81267 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81267.cljs$core$IFn$_invoke$arity$13 ? fexpr__81267.cljs$core$IFn$_invoke$arity$13(G__81268,G__81269,G__81270,G__81271,G__81272,G__81273,G__81274,G__81275,G__81276,G__81277,G__81278,G__81279,G__81280) : fexpr__81267.call(null,G__81268,G__81269,G__81270,G__81271,G__81272,G__81273,G__81274,G__81275,G__81276,G__81277,G__81278,G__81279,G__81280));
}catch (e81266){if((e81266 instanceof Error)){
var e__79727__auto__ = e81266;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81266;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81287 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81288 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81289 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81290 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81291 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81292 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81293 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81294 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81295 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81296 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81297 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81298 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81299 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__81287,G__81288,G__81289,G__81290,G__81291,G__81292,G__81293,G__81294,G__81295,G__81296,G__81297,G__81298,G__81299) : f.call(null,G__81287,G__81288,G__81289,G__81290,G__81291,G__81292,G__81293,G__81294,G__81295,G__81296,G__81297,G__81298,G__81299));
}catch (e81286){if((e81286 instanceof Error)){
var e__79727__auto__ = e81286;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81286;

}
}}),stack);
}

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81315 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81316 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81317 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81318 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81319 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81320 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81321 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81322 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81323 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81324 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81325 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81326 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81327 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81328 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__81314 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81314.cljs$core$IFn$_invoke$arity$14 ? fexpr__81314.cljs$core$IFn$_invoke$arity$14(G__81315,G__81316,G__81317,G__81318,G__81319,G__81320,G__81321,G__81322,G__81323,G__81324,G__81325,G__81326,G__81327,G__81328) : fexpr__81314.call(null,G__81315,G__81316,G__81317,G__81318,G__81319,G__81320,G__81321,G__81322,G__81323,G__81324,G__81325,G__81326,G__81327,G__81328));
}catch (e81313){if((e81313 instanceof Error)){
var e__79727__auto__ = e81313;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81313;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81331 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81332 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81333 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81334 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81335 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81336 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81337 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81338 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81339 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81340 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81341 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81342 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81343 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81344 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__81331,G__81332,G__81333,G__81334,G__81335,G__81336,G__81337,G__81338,G__81339,G__81340,G__81341,G__81342,G__81343,G__81344) : f.call(null,G__81331,G__81332,G__81333,G__81334,G__81335,G__81336,G__81337,G__81338,G__81339,G__81340,G__81341,G__81342,G__81343,G__81344));
}catch (e81330){if((e81330 instanceof Error)){
var e__79727__auto__ = e81330;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81330;

}
}}),stack);
}

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81349 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81350 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81351 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81352 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81353 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81354 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81355 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81356 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81357 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81358 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81359 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81360 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81361 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81362 = sci.impl.types.eval(arg13,ctx,bindings);
var G__81363 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__81348 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81348.cljs$core$IFn$_invoke$arity$15 ? fexpr__81348.cljs$core$IFn$_invoke$arity$15(G__81349,G__81350,G__81351,G__81352,G__81353,G__81354,G__81355,G__81356,G__81357,G__81358,G__81359,G__81360,G__81361,G__81362,G__81363) : fexpr__81348.call(null,G__81349,G__81350,G__81351,G__81352,G__81353,G__81354,G__81355,G__81356,G__81357,G__81358,G__81359,G__81360,G__81361,G__81362,G__81363));
}catch (e81347){if((e81347 instanceof Error)){
var e__79727__auto__ = e81347;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81347;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81367 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81368 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81369 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81370 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81371 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81372 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81373 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81374 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81375 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81376 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81377 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81378 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81379 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81380 = sci.impl.types.eval(arg13,ctx,bindings);
var G__81381 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__81367,G__81368,G__81369,G__81370,G__81371,G__81372,G__81373,G__81374,G__81375,G__81376,G__81377,G__81378,G__81379,G__81380,G__81381) : f.call(null,G__81367,G__81368,G__81369,G__81370,G__81371,G__81372,G__81373,G__81374,G__81375,G__81376,G__81377,G__81378,G__81379,G__81380,G__81381));
}catch (e81364){if((e81364 instanceof Error)){
var e__79727__auto__ = e81364;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81364;

}
}}),stack);
}

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81384 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81385 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81386 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81387 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81388 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81389 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81390 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81391 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81392 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81393 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81394 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81395 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81396 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81397 = sci.impl.types.eval(arg13,ctx,bindings);
var G__81398 = sci.impl.types.eval(arg14,ctx,bindings);
var G__81399 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__81383 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81383.cljs$core$IFn$_invoke$arity$16 ? fexpr__81383.cljs$core$IFn$_invoke$arity$16(G__81384,G__81385,G__81386,G__81387,G__81388,G__81389,G__81390,G__81391,G__81392,G__81393,G__81394,G__81395,G__81396,G__81397,G__81398,G__81399) : fexpr__81383.call(null,G__81384,G__81385,G__81386,G__81387,G__81388,G__81389,G__81390,G__81391,G__81392,G__81393,G__81394,G__81395,G__81396,G__81397,G__81398,G__81399));
}catch (e81382){if((e81382 instanceof Error)){
var e__79727__auto__ = e81382;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81382;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81401 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81402 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81403 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81404 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81405 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81406 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81407 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81408 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81409 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81410 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81411 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81412 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81413 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81414 = sci.impl.types.eval(arg13,ctx,bindings);
var G__81415 = sci.impl.types.eval(arg14,ctx,bindings);
var G__81416 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__81401,G__81402,G__81403,G__81404,G__81405,G__81406,G__81407,G__81408,G__81409,G__81410,G__81411,G__81412,G__81413,G__81414,G__81415,G__81416) : f.call(null,G__81401,G__81402,G__81403,G__81404,G__81405,G__81406,G__81407,G__81408,G__81409,G__81410,G__81411,G__81412,G__81413,G__81414,G__81415,G__81416));
}catch (e81400){if((e81400 instanceof Error)){
var e__79727__auto__ = e81400;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81400;

}
}}),stack);
}

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81420 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81421 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81422 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81423 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81424 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81425 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81426 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81427 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81428 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81429 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81430 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81431 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81432 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81433 = sci.impl.types.eval(arg13,ctx,bindings);
var G__81434 = sci.impl.types.eval(arg14,ctx,bindings);
var G__81435 = sci.impl.types.eval(arg15,ctx,bindings);
var G__81436 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__81419 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81419.cljs$core$IFn$_invoke$arity$17 ? fexpr__81419.cljs$core$IFn$_invoke$arity$17(G__81420,G__81421,G__81422,G__81423,G__81424,G__81425,G__81426,G__81427,G__81428,G__81429,G__81430,G__81431,G__81432,G__81433,G__81434,G__81435,G__81436) : fexpr__81419.call(null,G__81420,G__81421,G__81422,G__81423,G__81424,G__81425,G__81426,G__81427,G__81428,G__81429,G__81430,G__81431,G__81432,G__81433,G__81434,G__81435,G__81436));
}catch (e81417){if((e81417 instanceof Error)){
var e__79727__auto__ = e81417;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81417;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81441 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81442 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81443 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81444 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81445 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81446 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81447 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81448 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81449 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81450 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81451 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81452 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81453 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81454 = sci.impl.types.eval(arg13,ctx,bindings);
var G__81455 = sci.impl.types.eval(arg14,ctx,bindings);
var G__81456 = sci.impl.types.eval(arg15,ctx,bindings);
var G__81457 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__81441,G__81442,G__81443,G__81444,G__81445,G__81446,G__81447,G__81448,G__81449,G__81450,G__81451,G__81452,G__81453,G__81454,G__81455,G__81456,G__81457) : f.call(null,G__81441,G__81442,G__81443,G__81444,G__81445,G__81446,G__81447,G__81448,G__81449,G__81450,G__81451,G__81452,G__81453,G__81454,G__81455,G__81456,G__81457));
}catch (e81439){if((e81439 instanceof Error)){
var e__79727__auto__ = e81439;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81439;

}
}}),stack);
}

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81480 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81481 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81482 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81483 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81484 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81485 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81486 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81487 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81488 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81489 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81490 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81491 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81492 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81493 = sci.impl.types.eval(arg13,ctx,bindings);
var G__81494 = sci.impl.types.eval(arg14,ctx,bindings);
var G__81495 = sci.impl.types.eval(arg15,ctx,bindings);
var G__81496 = sci.impl.types.eval(arg16,ctx,bindings);
var G__81497 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__81479 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81479.cljs$core$IFn$_invoke$arity$18 ? fexpr__81479.cljs$core$IFn$_invoke$arity$18(G__81480,G__81481,G__81482,G__81483,G__81484,G__81485,G__81486,G__81487,G__81488,G__81489,G__81490,G__81491,G__81492,G__81493,G__81494,G__81495,G__81496,G__81497) : fexpr__81479.call(null,G__81480,G__81481,G__81482,G__81483,G__81484,G__81485,G__81486,G__81487,G__81488,G__81489,G__81490,G__81491,G__81492,G__81493,G__81494,G__81495,G__81496,G__81497));
}catch (e81476){if((e81476 instanceof Error)){
var e__79727__auto__ = e81476;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81476;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81512 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81513 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81514 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81515 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81516 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81517 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81518 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81519 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81520 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81521 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81522 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81523 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81524 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81525 = sci.impl.types.eval(arg13,ctx,bindings);
var G__81526 = sci.impl.types.eval(arg14,ctx,bindings);
var G__81527 = sci.impl.types.eval(arg15,ctx,bindings);
var G__81528 = sci.impl.types.eval(arg16,ctx,bindings);
var G__81529 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__81512,G__81513,G__81514,G__81515,G__81516,G__81517,G__81518,G__81519,G__81520,G__81521,G__81522,G__81523,G__81524,G__81525,G__81526,G__81527,G__81528,G__81529) : f.call(null,G__81512,G__81513,G__81514,G__81515,G__81516,G__81517,G__81518,G__81519,G__81520,G__81521,G__81522,G__81523,G__81524,G__81525,G__81526,G__81527,G__81528,G__81529));
}catch (e81509){if((e81509 instanceof Error)){
var e__79727__auto__ = e81509;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81509;

}
}}),stack);
}

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81540 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81541 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81542 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81543 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81544 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81545 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81546 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81547 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81548 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81549 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81550 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81551 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81552 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81553 = sci.impl.types.eval(arg13,ctx,bindings);
var G__81554 = sci.impl.types.eval(arg14,ctx,bindings);
var G__81555 = sci.impl.types.eval(arg15,ctx,bindings);
var G__81556 = sci.impl.types.eval(arg16,ctx,bindings);
var G__81557 = sci.impl.types.eval(arg17,ctx,bindings);
var G__81558 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__81539 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__81539.cljs$core$IFn$_invoke$arity$19 ? fexpr__81539.cljs$core$IFn$_invoke$arity$19(G__81540,G__81541,G__81542,G__81543,G__81544,G__81545,G__81546,G__81547,G__81548,G__81549,G__81550,G__81551,G__81552,G__81553,G__81554,G__81555,G__81556,G__81557,G__81558) : fexpr__81539.call(null,G__81540,G__81541,G__81542,G__81543,G__81544,G__81545,G__81546,G__81547,G__81548,G__81549,G__81550,G__81551,G__81552,G__81553,G__81554,G__81555,G__81556,G__81557,G__81558));
}catch (e81538){if((e81538 instanceof Error)){
var e__79727__auto__ = e81538;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81538;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__81581 = sci.impl.types.eval(arg0,ctx,bindings);
var G__81582 = sci.impl.types.eval(arg1,ctx,bindings);
var G__81583 = sci.impl.types.eval(arg2,ctx,bindings);
var G__81584 = sci.impl.types.eval(arg3,ctx,bindings);
var G__81585 = sci.impl.types.eval(arg4,ctx,bindings);
var G__81586 = sci.impl.types.eval(arg5,ctx,bindings);
var G__81587 = sci.impl.types.eval(arg6,ctx,bindings);
var G__81588 = sci.impl.types.eval(arg7,ctx,bindings);
var G__81589 = sci.impl.types.eval(arg8,ctx,bindings);
var G__81590 = sci.impl.types.eval(arg9,ctx,bindings);
var G__81591 = sci.impl.types.eval(arg10,ctx,bindings);
var G__81592 = sci.impl.types.eval(arg11,ctx,bindings);
var G__81593 = sci.impl.types.eval(arg12,ctx,bindings);
var G__81594 = sci.impl.types.eval(arg13,ctx,bindings);
var G__81595 = sci.impl.types.eval(arg14,ctx,bindings);
var G__81596 = sci.impl.types.eval(arg15,ctx,bindings);
var G__81597 = sci.impl.types.eval(arg16,ctx,bindings);
var G__81598 = sci.impl.types.eval(arg17,ctx,bindings);
var G__81599 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__81581,G__81582,G__81583,G__81584,G__81585,G__81586,G__81587,G__81588,G__81589,G__81590,G__81591,G__81592,G__81593,G__81594,G__81595,G__81596,G__81597,G__81598,G__81599) : f.call(null,G__81581,G__81582,G__81583,G__81584,G__81585,G__81586,G__81587,G__81588,G__81589,G__81590,G__81591,G__81592,G__81593,G__81594,G__81595,G__81596,G__81597,G__81598,G__81599));
}catch (e81580){if((e81580 instanceof Error)){
var e__79727__auto__ = e81580;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__79727__auto__,this$);
} else {
throw e81580;

}
}}),stack);
}

break;
default:
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f)),analyzed_children);
}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,analyzed_children);
}),stack);
}

}
});
sci.impl.analyzer.analyze_quote = (function sci$impl$analyzer$analyze_quote(_ctx,expr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Wrong number of args (0) passed to quote",expr);
}

var snd = cljs.core.second(expr);
return sci.impl.types.__GT_constant(snd);
});
sci.impl.analyzer.analyze_in_ns = (function sci$impl$analyzer$analyze_in_ns(ctx,expr){
var ns_expr = (function (){var G__81601 = ctx;
var G__81602 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__81601,G__81602) : sci.impl.analyzer.analyze.call(null,G__81601,G__81602));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var ns_sym = sci.impl.types.eval(ns_expr,ctx__$1,bindings);
sci.impl.utils.set_namespace_BANG_(ctx__$1,ns_sym,null);

return null;
}),null);
});
sci.impl.analyzer.analyze_import = (function sci$impl$analyzer$analyze_import(_ctx,expr){
var args = cljs.core.rest(expr);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,args);
}catch (e81607){if((e81607 instanceof Error)){
var e = e81607;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e81607;

}
}}),stack);
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,m,top_level_QMARK_){
var eval_file = new cljs.core.Keyword("clojure.core","eval-file","clojure.core/eval-file",801420726).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(eval_file)){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_file,eval_file]));
} else {
}

try{var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var fsym = f;
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_((function (){var and__4251__auto__ = special_sym;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__4251__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_(ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__4253__auto__ = special_sym;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__4251__auto__ = f_meta;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = f_meta;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4251__auto__;
}
})())){
var vec__81622 = f__$1;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81622,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81622,(1),null);
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var len = method_name__$1.length;
var idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(method_name__$1,".");
var f__$2 = (cljs.core.truth_((function (){var and__4251__auto__ = idx;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((len - (1)),idx);
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.analyzer.goog$module$goog$object.getValueByKeys(class$,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(method_name__$1,(0),idx).split("."))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name__$1,(idx + (1)))], null):f__$1);
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_static_method_invocation(ctx__$1,bindings,cljs.core.cons(f__$2,children));
}),null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(eval_QMARK_);
if(and__4251__auto__){
var and__4251__auto____$1 = (f__$1 instanceof cljs.core.Symbol);
if(and__4251__auto____$1){
var or__4253__auto__ = special_sym;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var G__81626 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__81626)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__81626)){
return sci.impl.analyzer.return_and(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__81626)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__81626)){
return sci.impl.analyzer.analyze_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__81626)){
return sci.impl.analyzer.analyze_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__81626)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__81626)){
var ret = sci.impl.analyzer.analyze_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__81626)){
var ret = sci.impl.analyzer.analyze_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__81626)){
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__81626)){
return sci.impl.analyzer.analyze_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__81626)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__81626)){
return sci.impl.analyzer.analyze_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__81626)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__81626)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__81626)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__81626)){
return sci.impl.analyzer.analyze_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__81626)){
return sci.impl.analyzer.analyze_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__81626)){
return sci.impl.analyzer.analyze_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__81626)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__81626)){
return sci.impl.analyzer.return_recur(ctx,expr,sci.impl.analyzer.analyze_children(sci.impl.analyzer.without_recur_target(ctx),cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__81626)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__81626)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__81626)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__81626)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__81626)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__81626)){
return sci.impl.analyzer.return_or(ctx,expr,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81626)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)));
var f__$2 = ((sci.impl.vars.var_QMARK_(f__$1))?cljs.core.deref(f__$1):f__$1);
var v = ((needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__4251__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__4251__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(function (){var v__$1 = (cljs.core.truth_(m)?(((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.meta(v)], 0))):v):v);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,v__$1,top_level_QMARK_) : sci.impl.analyzer.analyze.call(null,ctx,v__$1,top_level_QMARK_));
})()
));
return expanded;
} else {
var temp__5718__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5718__auto__)){
var f__$2 = temp__5718__auto__;
return sci.impl.analyzer.return_call(ctx,expr,f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
} else {
var temp__5718__auto____$1 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
if(cljs.core.truth_(temp__5718__auto____$1)){
var op = temp__5718__auto____$1;
var G__81643 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__81643)){
if((sci.impl.utils.needs_ctx === op)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__81643)){
return sci.impl.analyzer.return_binding_call(ctx,expr,new cljs.core.Keyword("sci.impl","idx","sci.impl/idx",700902278).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)),f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);

}
}
} else {
var self_ref_QMARK_ = new cljs.core.Keyword(null,"self-ref?","self-ref?",412808630).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__4251__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1(f__$1) : self_ref_QMARK_.call(null,f__$1));
} else {
return and__4251__auto__;
}
})())){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),(function (bindings,___$1){
return cljs.core.deref(bindings.get(fsym));
}));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),((sci.impl.vars.var_QMARK_(f__$1))?(function (___$1,v){
return cljs.core.deref(v);
}):null));
}
}
}
}
}catch (e81636){if((e81636 instanceof Error)){
var e = e81636;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,(function (){var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),stack);
})());
} else {
throw e81636;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__81651 = ccount;
switch (G__81651) {
case (1):
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.types.eval(arg,ctx__$1,bindings));
}),null);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.types.eval(arg0,ctx__$1,bindings),sci.impl.types.eval(arg1,ctx__$1,bindings));
}),null);

break;
default:
return sci.impl.analyzer.throw_error_with_location(["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ccount),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),expr);

}
} else {
var f__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.analyzer.analyze.call(null,ctx,f));
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var f__$2 = sci.impl.types.eval(f__$1,ctx__$1,bindings);
if(cljs.core.ifn_QMARK_(f__$2)){
return sci.impl.evaluator.fn_call(ctx__$1,bindings,f__$2,children);
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$2], 0))," as a function."].join('')));
}
}),stack);

}
}
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}});
sci.impl.analyzer.map_fn = (function sci$impl$analyzer$map_fn(children_count){
if((children_count <= (16))){
return cljs.core.array_map;
} else {
return cljs.core.hash_map;
}
});
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map,analyzed_children){
var mf = sci.impl.analyzer.map_fn(cljs.core.count(analyzed_children));
sci.impl.analyzer.return_call(ctx,the_map,mf,analyzed_children,null,null);

return sci.impl.analyzer.return_call(ctx,the_map,mf,analyzed_children,null,null);
});
sci.impl.analyzer.constant_node_QMARK_ = (function sci$impl$analyzer$constant_node_QMARK_(x){
return (!((x instanceof sci.impl.types.NodeR)));
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,expr);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx__$1,children);
var const_QMARK_ = cljs.core.every_QMARK_(sci.impl.analyzer.constant_node_QMARK_,analyzed_children);
var same_QMARK_ = ((const_QMARK_)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(children,analyzed_children):null);
var const_val = ((const_QMARK_)?(cljs.core.truth_(same_QMARK_)?expr:(function (){var mf = sci.impl.analyzer.map_fn(cljs.core.count(analyzed_children));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mf,analyzed_children);
})()):null);
var analyzed_map = ((const_QMARK_)?sci.impl.types.__GT_constant(const_val):sci.impl.analyzer.return_map(ctx__$1,expr,analyzed_children));
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m) : sci.impl.analyzer.analyze.call(null,ctx__$1,m)):null);
var ret = (cljs.core.truth_(analyzed_meta)?sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
var coll = sci.impl.types.eval(analyzed_map,ctx__$2,bindings);
var md = sci.impl.types.eval(analyzed_meta,ctx__$2,bindings);
return cljs.core.with_meta(coll,md);
}),null):analyzed_map);
return ret;
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,f1,f2,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m) : sci.impl.analyzer.analyze.call(null,ctx__$1,m)):null);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx__$1,expr);
var const_QMARK_ = cljs.core.every_QMARK_(sci.impl.analyzer.constant_node_QMARK_,analyzed_children);
var same_QMARK_ = ((const_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.set(expr))?cljs.core.seq(expr):expr),analyzed_children)));
var const_val = ((const_QMARK_)?((same_QMARK_)?expr:(f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(analyzed_children) : f1.call(null,analyzed_children))):null);
var analyzed_coll = ((const_QMARK_)?sci.impl.types.__GT_constant(const_val):sci.impl.analyzer.return_call(ctx__$1,expr,f2,analyzed_children,null,null));
var ret = (cljs.core.truth_(analyzed_meta)?sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
var coll = sci.impl.types.eval(analyzed_coll,ctx__$2,bindings);
var md = sci.impl.types.eval(analyzed_meta,ctx__$2,bindings);
return cljs.core.with_meta(coll,md);
}),null):analyzed_coll);
return ret;
});
sci.impl.analyzer.analyze_js_obj = (function sci$impl$analyzer$analyze_js_obj(ctx,js_val){
var v = js_val.val;
if(cljs.core.map_QMARK_(v)){
var ks = cljs.core.keys(v);
var ks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks);
var vs = cljs.core.vals(v);
var vs__$1 = sci.impl.analyzer.analyze_children(ctx,vs);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81675_SHARP_){
return sci.impl.types.eval(p1__81675_SHARP_,ctx__$1,bindings);
}),vs__$1)));
}),null);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var arr = [];
var seq__81679_83516 = cljs.core.seq(vs);
var chunk__81680_83517 = null;
var count__81681_83518 = (0);
var i__81682_83519 = (0);
while(true){
if((i__81682_83519 < count__81681_83518)){
var x_83520 = chunk__81680_83517.cljs$core$IIndexed$_nth$arity$2(null,i__81682_83519);
arr.push(sci.impl.types.eval(x_83520,ctx__$1,bindings));


var G__83523 = seq__81679_83516;
var G__83524 = chunk__81680_83517;
var G__83525 = count__81681_83518;
var G__83526 = (i__81682_83519 + (1));
seq__81679_83516 = G__83523;
chunk__81680_83517 = G__83524;
count__81681_83518 = G__83525;
i__81682_83519 = G__83526;
continue;
} else {
var temp__5720__auto___83527 = cljs.core.seq(seq__81679_83516);
if(temp__5720__auto___83527){
var seq__81679_83529__$1 = temp__5720__auto___83527;
if(cljs.core.chunked_seq_QMARK_(seq__81679_83529__$1)){
var c__4679__auto___83537 = cljs.core.chunk_first(seq__81679_83529__$1);
var G__83538 = cljs.core.chunk_rest(seq__81679_83529__$1);
var G__83539 = c__4679__auto___83537;
var G__83540 = cljs.core.count(c__4679__auto___83537);
var G__83541 = (0);
seq__81679_83516 = G__83538;
chunk__81680_83517 = G__83539;
count__81681_83518 = G__83540;
i__81682_83519 = G__83541;
continue;
} else {
var x_83542 = cljs.core.first(seq__81679_83529__$1);
arr.push(sci.impl.types.eval(x_83542,ctx__$1,bindings));


var G__83543 = cljs.core.next(seq__81679_83529__$1);
var G__83544 = null;
var G__83545 = (0);
var G__83546 = (0);
seq__81679_83516 = G__83543;
chunk__81680_83517 = G__83544;
count__81681_83518 = G__83545;
i__81682_83519 = G__83546;
continue;
}
} else {
}
}
break;
}

return arr;
}),null);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__81702 = arguments.length;
switch (G__81702) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
if(sci.impl.utils.constant_QMARK_(expr)){
return sci.impl.types.__GT_constant(expr);
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,expr,false,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m));
var mv = cljs.core.meta(v);
if(sci.impl.utils.constant_QMARK_(v)){
return sci.impl.types.__GT_constant(v);
} else {
if((sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,ctx);
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return cljs.core._deref(v);
}),null);
}
}
} else {
return v;

}
}
}
} else {
if(cljs.core.record_QMARK_(expr)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return sci.impl.analyzer.analyze_map(ctx,expr,m);
} else {
if((expr instanceof cljs.tagged_literals.JSValue)){
return sci.impl.analyzer.analyze_js_obj(ctx,expr);
} else {
if(cljs.core.vector_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_(expr)){
if(cljs.core.seq(expr)){
return sci.impl.analyzer.analyze_call(ctx,expr,m,top_level_QMARK_);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.analyzer.js.map
