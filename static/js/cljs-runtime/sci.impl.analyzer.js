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
}catch (e72060){var _ = e72060;
return new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858);
}})();
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f)){
return expr;
} else {
var macro_var_QMARK_ = (function (){var and__5041__auto__ = sci.impl.vars.var_QMARK_(f);
if(and__5041__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__5041__auto__;
}
})();
var needs_ctx_QMARK_ = cljs.core.keyword_identical_QMARK_(sci.impl.utils.needs_ctx,(function (){var G__72061 = f;
var G__72061__$1 = (((G__72061 == null))?null:cljs.core.meta(G__72061));
if((G__72061__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__72061__$1);
}
})());
var f__$1 = (cljs.core.truth_(macro_var_QMARK_)?cljs.core.deref(f):f);
if(cljs.core.truth_((function (){var or__5043__auto__ = macro_var_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var analyzed_children_non_tail = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72064_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(non_tail_ctx,p1__72064_SHARP_) : sci.impl.analyzer.analyze.call(null,non_tail_ctx,p1__72064_SHARP_));
}),cljs.core.butlast(children));
var ret_child = (function (){var G__72066 = sci.impl.analyzer.with_recur_target(ctx,rt);
var G__72067 = cljs.core.last(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__72066,G__72067) : sci.impl.analyzer.analyze.call(null,G__72066,G__72067));
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(analyzed_children_non_tail,ret_child);
});
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__72069 = cljs.core.count(children);
switch (G__72069) {
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
var G__72073 = cljs.core.count(children);
switch (G__72073) {
case (0):
return null;

break;
case (1):
var G__72075 = ctx;
var G__72076 = cljs.core.first(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__72075,G__72076) : sci.impl.analyzer.analyze.call(null,G__72075,G__72076));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
} else {
var or__5043__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$13)){
return or__5043__auto____$13;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
} else {
var or__5043__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$13)){
return or__5043__auto____$13;
} else {
var or__5043__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$14)){
return or__5043__auto____$14;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
} else {
var or__5043__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$13)){
return or__5043__auto____$13;
} else {
var or__5043__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$14)){
return or__5043__auto____$14;
} else {
var or__5043__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$15)){
return or__5043__auto____$15;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
} else {
var or__5043__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$13)){
return or__5043__auto____$13;
} else {
var or__5043__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$14)){
return or__5043__auto____$14;
} else {
var or__5043__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$15)){
return or__5043__auto____$15;
} else {
var or__5043__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$16)){
return or__5043__auto____$16;
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
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
} else {
var or__5043__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$13)){
return or__5043__auto____$13;
} else {
var or__5043__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$14)){
return or__5043__auto____$14;
} else {
var or__5043__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$15)){
return or__5043__auto____$15;
} else {
var or__5043__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$16)){
return or__5043__auto____$16;
} else {
var or__5043__auto____$17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$17)){
return or__5043__auto____$17;
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
var G__72107 = cljs.core.count(children);
switch (G__72107) {
case (0):
return null;

break;
case (1):
var G__72108 = ctx;
var G__72109 = cljs.core.first(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__72108,G__72109) : sci.impl.analyzer.analyze.call(null,G__72108,G__72109));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
return sci.impl.types.eval(arg1,ctx__$1,bindings);
} else {
return and__5041__auto__;
}
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
return sci.impl.types.eval(arg2,ctx__$1,bindings);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
return sci.impl.types.eval(arg3,ctx__$1,bindings);
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
return sci.impl.types.eval(arg4,ctx__$1,bindings);
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
return sci.impl.types.eval(arg5,ctx__$1,bindings);
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
return sci.impl.types.eval(arg6,ctx__$1,bindings);
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
return sci.impl.types.eval(arg7,ctx__$1,bindings);
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
return sci.impl.types.eval(arg8,ctx__$1,bindings);
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
return sci.impl.types.eval(arg9,ctx__$1,bindings);
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
return sci.impl.types.eval(arg10,ctx__$1,bindings);
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
return sci.impl.types.eval(arg11,ctx__$1,bindings);
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
return sci.impl.types.eval(arg12,ctx__$1,bindings);
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
return sci.impl.types.eval(arg13,ctx__$1,bindings);
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
var and__5041__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$13)){
return sci.impl.types.eval(arg14,ctx__$1,bindings);
} else {
return and__5041__auto____$13;
}
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
var and__5041__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$13)){
var and__5041__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$14)){
return sci.impl.types.eval(arg15,ctx__$1,bindings);
} else {
return and__5041__auto____$14;
}
} else {
return and__5041__auto____$13;
}
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
var and__5041__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$13)){
var and__5041__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$14)){
var and__5041__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$15)){
return sci.impl.types.eval(arg16,ctx__$1,bindings);
} else {
return and__5041__auto____$15;
}
} else {
return and__5041__auto____$14;
}
} else {
return and__5041__auto____$13;
}
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
var and__5041__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$13)){
var and__5041__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$14)){
var and__5041__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$15)){
var and__5041__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$16)){
return sci.impl.types.eval(arg17,ctx__$1,bindings);
} else {
return and__5041__auto____$16;
}
} else {
return and__5041__auto____$15;
}
} else {
return and__5041__auto____$14;
}
} else {
return and__5041__auto____$13;
}
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
var and__5041__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$13)){
var and__5041__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$14)){
var and__5041__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$15)){
var and__5041__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$16)){
var and__5041__auto____$17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$17)){
return sci.impl.types.eval(arg18,ctx__$1,bindings);
} else {
return and__5041__auto____$17;
}
} else {
return and__5041__auto____$16;
}
} else {
return and__5041__auto____$15;
}
} else {
return and__5041__auto____$14;
}
} else {
return and__5041__auto____$13;
}
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var G__72201 = cljs.core.count(analyzed_children);
switch (G__72201) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72201)].join('')));

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72276_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__72276_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__72276_SHARP_));
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
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k72278,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__72286 = k72278;
var G__72286__$1 = (((G__72286 instanceof cljs.core.Keyword))?G__72286.fqn:null);
switch (G__72286__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72278,else__5343__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__72287){
var vec__72288 = p__72287;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72288,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72288,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72277){
var self__ = this;
var G__72277__$1 = this;
return (new cljs.core.RecordIter((0),G__72277__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72279,other72280){
var self__ = this;
var this72279__$1 = this;
return (((!((other72280 == null)))) && ((((this72279__$1.constructor === other72280.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72279__$1.params,other72280.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72279__$1.body,other72280.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72279__$1.fixed_arity,other72280.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72279__$1.var_arg_name,other72280.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72279__$1.self_ref_idx,other72280.self_ref_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72279__$1.iden__GT_invoke_idx,other72280.iden__GT_invoke_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72279__$1.__extmap,other72280.__extmap)))))))))))))))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k72278){
var self__ = this;
var this__5347__auto____$1 = this;
var G__72297 = k72278;
var G__72297__$1 = (((G__72297 instanceof cljs.core.Keyword))?G__72297.fqn:null);
switch (G__72297__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "self-ref-idx":
case "iden->invoke-idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72278);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__72277){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__72298 = cljs.core.keyword_identical_QMARK_;
var expr__72299 = k__5349__auto__;
if(cljs.core.truth_((pred__72298.cljs$core$IFn$_invoke$arity$2 ? pred__72298.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__72299) : pred__72298.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__72299)))){
return (new sci.impl.analyzer.FnBody(G__72277,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72298.cljs$core$IFn$_invoke$arity$2 ? pred__72298.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__72299) : pred__72298.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__72299)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__72277,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72298.cljs$core$IFn$_invoke$arity$2 ? pred__72298.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__72299) : pred__72298.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__72299)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__72277,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72298.cljs$core$IFn$_invoke$arity$2 ? pred__72298.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__72299) : pred__72298.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__72299)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__72277,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72298.cljs$core$IFn$_invoke$arity$2 ? pred__72298.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__72299) : pred__72298.call(null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__72299)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__72277,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72298.cljs$core$IFn$_invoke$arity$2 ? pred__72298.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__72299) : pred__72298.call(null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__72299)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,G__72277,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__72277),null));
}
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__72277){
var self__ = this;
var this__5339__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,G__72277,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"fixed-arity","fixed-arity",-1067989900,null),new cljs.core.Symbol(null,"var-arg-name","var-arg-name",540506640,null),new cljs.core.Symbol(null,"self-ref-idx","self-ref-idx",255993715,null),new cljs.core.Symbol(null,"iden->invoke-idx","iden->invoke-idx",-157095499,null)], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"sci.impl.analyzer/FnBody");
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
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__72281){
var extmap__5382__auto__ = (function (){var G__72301 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72281,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], 0));
if(cljs.core.record_QMARK_(G__72281)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72301);
} else {
return G__72301;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__72281),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__72281),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__72281),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__72281),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(G__72281),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(G__72281),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__72303,p__72304,macro_QMARK_,fn_name,fn_id){
var map__72305 = p__72303;
var map__72305__$1 = cljs.core.__destructure_map(map__72305);
var ctx = map__72305__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72305__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__72306 = p__72304;
var seq__72307 = cljs.core.seq(vec__72306);
var first__72308 = cljs.core.first(seq__72307);
var seq__72307__$1 = cljs.core.next(seq__72307);
var binding_vector = first__72308;
var body_exprs = seq__72307__$1;
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
var conds__$1 = (function (){var or__5043__auto__ = conds;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var map__72309 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__72309__$1 = cljs.core.__destructure_map(map__72309);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72309__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72309__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var vec__72310 = cljs.core.split_with((function (p1__72302_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__72302_SHARP_);
}),params);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72310,(0),null);
var vec__72313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72310,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72313,(0),null);
var var_arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72313,(1),null);
var fixed_args__$1 = cljs.core.vec(fixed_args);
var fixed_arity = cljs.core.count(fixed_args__$1);
var param_names = (function (){var G__72316 = fixed_args__$1;
if(cljs.core.truth_(var_arg_name)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__72316,var_arg_name);
} else {
return G__72316;
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
var self_ref_idx = (cljs.core.truth_(fn_name)?(function (){var G__72317 = ctx__$4;
var G__72318 = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var G__72319 = fn_id;
return (sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3(G__72317,G__72318,G__72319) : sci.impl.analyzer.update_parents.call(null,G__72317,G__72318,G__72319));
})():null);
var body__$1 = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$4,true),fn_expr,body);
var iden__GT_invoke_idx__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var G__72320 = sci.impl.analyzer.__GT_FnBody(params,body__$1,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx__$1);
if(cljs.core.truth_(var_arg_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72320,new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228),cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx__$1,cljs.core.last(param_idens)));
} else {
return G__72320;
}
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__72321 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__72322 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__72321,G__72322) : sci.impl.analyzer.analyze.call(null,G__72321,G__72322));
})(),cljs.core.assoc,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)):m);
return m__$1;
});
sci.impl.analyzer.analyze_fn_STAR_ = (function sci$impl$analyzer$analyze_fn_STAR_(ctx,p__72323,macro_QMARK_){
var vec__72324 = p__72323;
var seq__72325 = cljs.core.seq(vec__72324);
var first__72326 = cljs.core.first(seq__72325);
var seq__72325__$1 = cljs.core.next(seq__72325);
var _fn = first__72326;
var first__72326__$1 = cljs.core.first(seq__72325__$1);
var seq__72325__$2 = cljs.core.next(seq__72325__$1);
var name_QMARK_ = first__72326__$1;
var body = seq__72325__$2;
var fn_expr = vec__72324;
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
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__72327,body__$2){
var map__72328 = p__72327;
var map__72328__$1 = cljs.core.__destructure_map(map__72328);
var acc = map__72328__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72328__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72328__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var orig_body = body__$2;
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$4,body__$2,macro_QMARK_,fn_name,fn_id);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(body__$3);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(body__$3);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__5041__auto__ = var_arg_name;
if(cljs.core.truth_(and__5041__auto__)){
return min_varargs;
} else {
return and__5041__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(var_arg_name);
if(and__5041__auto__){
var and__5041__auto____$1 = min_varargs;
if(cljs.core.truth_(and__5041__auto____$1)){
return (fixed_arity > min_varargs);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__5128__auto__ = fixed_arity;
var y__5129__auto__ = max_fixed;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
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
var enclosed_array_fn = (((function (){var or__5043__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.seq(closed_over_iden__GT_binding_idx);
}
})())?(function (){var enclosed_array_cnt = (function (){var G__72329 = closed_over_cnt;
if(cljs.core.truth_(fn_name)){
return (G__72329 + (1));
} else {
return G__72329;
}
})();
var binding__GT_enclosed = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,iden);
if(cljs.core.truth_(temp__5720__auto__)){
var binding_idx = temp__5720__auto__;
var enclosed_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_enclosed_idx__$1,iden);
var G__72330 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__72330[(0)] = binding_idx);

(G__72330[(1)] = enclosed_idx);

return G__72330;
} else {
return null;
}
}),closed_over_idens));
return (function (bindings__$1){
var a__5630__auto__ = binding__GT_enclosed;
var l__5631__auto__ = a__5630__auto__.length;
var idx = (0);
var ret = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(enclosed_array_cnt);
while(true){
if((idx < l__5631__auto__)){
var G__73440 = (idx + (1));
var G__73441 = (function (){var idxs = (binding__GT_enclosed[idx]);
var binding_idx = (idxs[(0)]);
var binding_val = (bindings__$1[binding_idx]);
var enclosed_idx = (idxs[(1)]);
(ret[enclosed_idx] = binding_val);

return ret;
})();
idx = G__73440;
ret = G__73441;
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
var G__72331 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__72331[(0)] = (iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1 ? iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_enclosed_idx__$1.call(null,iden)));

(G__72331[(1)] = invocation_idx);

return G__72331;
} else {
return null;
}
}),closed_over_idens));
var invoc_size = cljs.core.count(iden__GT_invocation_idx);
var copy_enclosed__GT_invocation = (((enclosed__GT_invocation.length > (0)))?(function (enclosed_array,invoc_array){
var a__5630__auto__ = enclosed__GT_invocation;
var l__5631__auto__ = a__5630__auto__.length;
var idx = (0);
var ret = invoc_array;
while(true){
if((idx < l__5631__auto__)){
var G__73442 = (idx + (1));
var G__73443 = (function (){var idxs = (enclosed__GT_invocation[idx]);
var enclosed_idx = (idxs[(0)]);
var enclosed_val = (enclosed_array[enclosed_idx]);
var invoc_idx = (idxs[(1)]);
(ret[invoc_idx] = enclosed_val);

return ret;
})();
idx = G__73442;
ret = G__73443;
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
var vec__72332 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__72335,p__72336){
var vec__72337 = p__72335;
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72337,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72337,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72337,(2),null);
var vec__72340 = p__72336;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72340,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72340,(1),null);
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
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72332,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72332,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72332,(2),null);
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
sci.impl.analyzer.analyze_let = (function sci$impl$analyzer$analyze_let(ctx,p__72343){
var vec__72344 = p__72343;
var seq__72345 = cljs.core.seq(vec__72344);
var first__72346 = cljs.core.first(seq__72345);
var seq__72345__$1 = cljs.core.next(seq__72345);
var _let = first__72346;
var first__72346__$1 = cljs.core.first(seq__72345__$1);
var seq__72345__$2 = cljs.core.next(seq__72345__$1);
var let_bindings = first__72346__$1;
var exprs = seq__72345__$2;
var expr = vec__72344;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.init_var_BANG_ = (function sci$impl$analyzer$init_var_BANG_(ctx,name,expr){
var cnn_73452 = sci.impl.vars.current_ns_name();
var env_73453 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_73454 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_73453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_73452], null));
var refers_73455 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_73454);
var the_current_ns_73456__$1 = (function (){var temp__5718__auto__ = (function (){var and__5041__auto__ = refers_73455;
if(cljs.core.truth_(and__5041__auto__)){
return refers_73455.get(name);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var x = temp__5718__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_73452)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_73454,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns_73454,name,(function (){var G__72347 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_73452),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)),false);
G__72347.sci$impl$vars$IVar$unbind$arity$1(null);

return G__72347;
})());
} else {
return the_current_ns_73454;
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_73453,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_73452,the_current_ns_73456__$1);
}));

return null;
});
sci.impl.analyzer.analyze_def = (function sci$impl$analyzer$analyze_def(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__72348 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72348,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72348,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72348,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72348,(3),null);
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
sci.impl.analyzer.analyze_defn = (function sci$impl$analyzer$analyze_defn(ctx,p__72351){
var vec__72352 = p__72351;
var seq__72353 = cljs.core.seq(vec__72352);
var first__72354 = cljs.core.first(seq__72353);
var seq__72353__$1 = cljs.core.next(seq__72353);
var op = first__72354;
var first__72354__$1 = cljs.core.first(seq__72353__$1);
var seq__72353__$2 = cljs.core.next(seq__72353__$1);
var fn_name = first__72354__$1;
var body = seq__72353__$2;
var expr = vec__72352;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

sci.impl.analyzer.init_var_BANG_(ctx,fn_name,expr);

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__72355 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72355,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72355,(1),null);
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
var vec__72358 = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?(function (){var lb = cljs.core.last(body__$1);
if(cljs.core.map_QMARK_(lb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lb,cljs.core.butlast(body__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null));
var meta_map2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72358,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72358,(1),null);
var meta_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
var meta_map__$2 = (cljs.core.truth_(meta_map2)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_map__$1,meta_map2], 0)):meta_map__$1);
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$2),cljs.core.meta(expr));
var f = sci.impl.analyzer.analyze_fn_STAR_(ctx,fn_body,macro_QMARK_);
var arglists = (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f)),null,(1),null)),(2),null));
var meta_map__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$2,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var meta_map__$4 = (function (){var G__72361 = meta_map__$3;
var G__72361__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72361,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__72361);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72361__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__72361__$1;
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
var vec__72362 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),cljs.core.gensym);
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72362,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72362,(1),null);
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
var G__72365 = cljs.core.count(children);
switch (G__72365) {
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
var case_val = (function (){var G__72369 = ctx_wo_rt;
var G__72370 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__72369,G__72370) : sci.impl.analyzer.analyze.call(null,G__72369,G__72370));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__72366 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__72371 = ctx;
var G__72372 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__72371,G__72372) : sci.impl.analyzer.analyze.call(null,G__72371,G__72372));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72366,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72366,(1),null);
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
var vec__72376 = cases__$1;
var seq__72377 = cljs.core.seq(vec__72376);
var first__72378 = cljs.core.first(seq__72377);
var seq__72377__$1 = cljs.core.next(seq__72377);
var k = first__72378;
var first__72378__$1 = cljs.core.first(seq__72377__$1);
var seq__72377__$2 = cljs.core.next(seq__72377__$1);
var v = first__72378__$1;
var cases__$2 = seq__72377__$2;
if(cljs.core.seq_QMARK_(k)){
var G__73486 = cases__$2;
var G__73488 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__72376,seq__72377,first__72378,seq__72377__$1,k,first__72378__$1,seq__72377__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__72366,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__72376,seq__72377,first__72378,seq__72377__$1,k,first__72378__$1,seq__72377__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__72366,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__73486;
ret_map = G__73488;
continue;
} else {
var G__73491 = cases__$2;
var G__73492 = assoc_new(ret_map,k,v);
cases__$1 = G__73491;
ret_map = G__73492;
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
var vec__72379 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__73493 = exprs__$1;
var G__73494 = body_exprs;
var G__73495 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__73496 = finally_expr;
exprs = G__73493;
body_exprs = G__73494;
catch_exprs = G__73495;
finally_expr = G__73496;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__73497 = exprs__$1;
var G__73498 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__73499 = catch_exprs;
var G__73500 = finally_expr;
exprs = G__73497;
body_exprs = G__73498;
catch_exprs = G__73499;
finally_expr = G__73500;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72379,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72379,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72379,(2),null);
var body__$1 = (function (){var G__72382 = ctx__$1;
var G__72383 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__72382,G__72383) : sci.impl.analyzer.analyze.call(null,G__72382,G__72383));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__72384 = c;
var seq__72385 = cljs.core.seq(vec__72384);
var first__72386 = cljs.core.first(seq__72385);
var seq__72385__$1 = cljs.core.next(seq__72385);
var _ = first__72386;
var first__72386__$1 = cljs.core.first(seq__72385__$1);
var seq__72385__$2 = cljs.core.next(seq__72385__$1);
var ex = first__72386__$1;
var first__72386__$2 = cljs.core.first(seq__72385__$2);
var seq__72385__$3 = cljs.core.next(seq__72385__$2);
var binding = first__72386__$2;
var body__$2 = seq__72385__$3;
var temp__5718__auto__ = (function (){var G__72387 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__72387)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__72387)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__72387)){
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
var analyzed_body = (function (){var G__72388 = ctx__$2;
var G__72389 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__72388,G__72389) : sci.impl.analyzer.analyze.call(null,G__72388,G__72389));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805),ex_idx,new cljs.core.Keyword(null,"body","body",-2049205669),analyzed_body], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__72390 = ctx__$1;
var G__72391 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__72390,G__72391) : sci.impl.analyzer.analyze.call(null,G__72390,G__72391));
})():null);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_try(ctx__$2,bindings,body__$1,catches__$1,finally$__$1);
}),null);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__72392){
var vec__72393 = p__72392;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72393,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72393,(1),null);
var expr = vec__72393;
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
sci.impl.analyzer.analyze_dot = (function sci$impl$analyzer$analyze_dot(ctx,p__72396){
var vec__72397 = p__72396;
var seq__72398 = cljs.core.seq(vec__72397);
var first__72399 = cljs.core.first(seq__72398);
var seq__72398__$1 = cljs.core.next(seq__72398);
var _dot = first__72399;
var first__72399__$1 = cljs.core.first(seq__72398__$1);
var seq__72398__$2 = cljs.core.next(seq__72398__$1);
var instance_expr = first__72399__$1;
var first__72399__$2 = cljs.core.first(seq__72398__$2);
var seq__72398__$3 = cljs.core.next(seq__72398__$2);
var method_expr = first__72399__$2;
var args = seq__72398__$3;
var expr = vec__72397;
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__72400 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__72401 = cljs.core.seq(vec__72400);
var first__72402 = cljs.core.first(seq__72401);
var seq__72401__$1 = cljs.core.next(seq__72401);
var method_expr__$1 = first__72402;
var args__$1 = seq__72401__$1;
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
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__72403){
var vec__72404 = p__72403;
var seq__72405 = cljs.core.seq(vec__72404);
var first__72406 = cljs.core.first(seq__72405);
var seq__72405__$1 = cljs.core.next(seq__72405);
var method_name = first__72406;
var first__72406__$1 = cljs.core.first(seq__72405__$1);
var seq__72405__$2 = cljs.core.next(seq__72405__$1);
var obj = first__72406__$1;
var args = seq__72405__$2;
var expr = vec__72404;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__72412){
var vec__72413 = p__72412;
var seq__72414 = cljs.core.seq(vec__72413);
var first__72415 = cljs.core.first(seq__72414);
var seq__72414__$1 = cljs.core.next(seq__72414);
var _new = first__72415;
var first__72415__$1 = cljs.core.first(seq__72414__$1);
var seq__72414__$2 = cljs.core.next(seq__72414__$1);
var class_sym = first__72415__$1;
var args = seq__72414__$2;
var expr = vec__72413;
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
if((class_sym instanceof cljs.core.Symbol)){
var temp__5718__auto__ = (function (){var or__5043__auto__ = (function (){var temp__5720__auto__ = (function (){var temp__5720__auto__ = sci.impl.interop.resolve_class_opts(ctx__$1,class_sym);
if(cljs.core.truth_(temp__5720__auto__)){
var opts = temp__5720__auto__;
var or__5043__auto__ = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var G__72416 = ctx__$1;
var G__72417 = expr;
var G__72418 = maybe_record_constructor;
var G__72419 = args__$1;
var G__72420 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__72421 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__72416,G__72417,G__72418,G__72419,G__72420,G__72421) : sci.impl.analyzer.return_call.call(null,G__72416,G__72417,G__72418,G__72419,G__72420,G__72421));
} else {
if(var_QMARK_){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(cljs.core.deref(maybe_var),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72408_SHARP_){
return sci.impl.types.eval(p1__72408_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
} else {
if((class$ instanceof sci.impl.types.NodeR)){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.types.eval(class$,ctx__$2,bindings),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72409_SHARP_){
return sci.impl.types.eval(p1__72409_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(class$,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72410_SHARP_){
return sci.impl.types.eval(p1__72410_SHARP_,ctx__$2,bindings);
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
var G__72422 = ctx__$1;
var G__72423 = expr;
var G__72424 = new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__72425 = args__$1;
var G__72426 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__72427 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__72422,G__72423,G__72424,G__72425,G__72426,G__72427) : sci.impl.analyzer.return_call.call(null,G__72422,G__72423,G__72424,G__72425,G__72426,G__72427));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
} else {
var class$ = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,class_sym) : sci.impl.analyzer.analyze.call(null,ctx__$1,class_sym));
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.types.eval(class$,ctx__$2,bindings),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72411_SHARP_){
return sci.impl.types.eval(p1__72411_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__72428){
var vec__72429 = p__72428;
var seq__72430 = cljs.core.seq(vec__72429);
var first__72431 = cljs.core.first(seq__72430);
var seq__72430__$1 = cljs.core.next(seq__72430);
var constructor_sym = first__72431;
var args = seq__72430__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}catch (e72432){if((e72432 instanceof Error)){
var e = e72432;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e72432;

}
}}),stack);
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__72433){
var vec__72434 = p__72433;
var seq__72435 = cljs.core.seq(vec__72434);
var first__72436 = cljs.core.first(seq__72435);
var seq__72435__$1 = cljs.core.next(seq__72435);
var _ns = first__72436;
var first__72436__$1 = cljs.core.first(seq__72435__$1);
var seq__72435__$2 = cljs.core.next(seq__72435__$1);
var ns_name = first__72436__$1;
var exprs = seq__72435__$2;
var expr = vec__72434;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__72437 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72437,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72437,(1),null);
var vec__72440 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72440,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72440,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__72448 = cljs.core.first(exprs__$3);
var seq__72449 = cljs.core.seq(vec__72448);
var first__72450 = cljs.core.first(seq__72449);
var seq__72449__$1 = cljs.core.next(seq__72449);
var k = first__72450;
var args = seq__72449__$1;
var expr__$1 = vec__72448;
var G__72451 = k;
var G__72451__$1 = (((G__72451 instanceof cljs.core.Keyword))?G__72451.fqn:null);
switch (G__72451__$1) {
case "require":
case "use":
case "import":
case "refer-clojure":
var G__73533 = cljs.core.next(exprs__$3);
var G__73534 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__72452 = k;
var G__72452__$1 = (((G__72452 instanceof cljs.core.Keyword))?G__72452.fqn:null);
switch (G__72452__$1) {
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
return ((function (exprs__$3,ret,G__72452,G__72452__$1,G__72451,G__72451__$1,vec__72448,seq__72449,first__72450,seq__72449__$1,k,args,expr__$1,vec__72437,docstring,exprs__$1,vec__72440,attr_map,exprs__$2,attr_map__$1,vec__72434,seq__72435,first__72436,seq__72435__$1,_ns,first__72436__$1,seq__72435__$2,ns_name,exprs,expr){
return (function() { 
var G__73541__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__73541 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__73542__i = 0, G__73542__a = new Array(arguments.length -  1);
while (G__73542__i < G__73542__a.length) {G__73542__a[G__73542__i] = arguments[G__73542__i + 1]; ++G__73542__i;}
  args__$1 = new cljs.core.IndexedSeq(G__73542__a,0,null);
} 
return G__73541__delegate.call(this,ctx__$1,args__$1);};
G__73541.cljs$lang$maxFixedArity = 1;
G__73541.cljs$lang$applyTo = (function (arglist__73543){
var ctx__$1 = cljs.core.first(arglist__73543);
var args__$1 = cljs.core.rest(arglist__73543);
return G__73541__delegate(ctx__$1,args__$1);
});
G__73541.cljs$core$IFn$_invoke$arity$variadic = G__73541__delegate;
return G__73541;
})()
;
;})(exprs__$3,ret,G__72452,G__72452__$1,G__72451,G__72451__$1,vec__72448,seq__72449,first__72450,seq__72449__$1,k,args,expr__$1,vec__72437,docstring,exprs__$1,vec__72440,attr_map,exprs__$2,attr_map__$1,vec__72434,seq__72435,first__72436,seq__72435__$1,_ns,first__72436__$1,seq__72435__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72452__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__73533;
ret = G__73534;
continue;

break;
case "gen-class":
var G__73544 = cljs.core.next(exprs__$3);
var G__73545 = ret;
exprs__$3 = G__73544;
ret = G__73545;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72451__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.types.__GT_NodeR(((function (exprs__$3,ret,vec__72437,docstring,exprs__$1,vec__72440,attr_map,exprs__$2,attr_map__$1,vec__72434,seq__72435,first__72436,seq__72435__$1,_ns,first__72436__$1,seq__72435__$2,ns_name,exprs,expr){
return (function (this$,ctx__$1,bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__72437,docstring,exprs__$1,vec__72440,attr_map,exprs__$2,attr_map__$1,vec__72434,seq__72435,first__72436,seq__72435__$1,_ns,first__72436__$1,seq__72435__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__72453){
var vec__72454 = p__72453;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72454,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72454,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__72457){
var vec__72458 = p__72457;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72458,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72458,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72458,(2),null);
var expr = vec__72458;
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
var G__72462 = cljs.core.count(analyzed_children);
switch (G__72462) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__72464 = (bindings[idx]);
return (fexpr__72464.cljs$core$IFn$_invoke$arity$0 ? fexpr__72464.cljs$core$IFn$_invoke$arity$0() : fexpr__72464.call(null));
}catch (e72463){if((e72463 instanceof Error)){
var e__71569__auto__ = e72463;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72463;

}
}}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72467 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__72466 = (bindings[idx]);
return (fexpr__72466.cljs$core$IFn$_invoke$arity$1 ? fexpr__72466.cljs$core$IFn$_invoke$arity$1(G__72467) : fexpr__72466.call(null,G__72467));
}catch (e72465){if((e72465 instanceof Error)){
var e__71569__auto__ = e72465;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72465;

}
}}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72470 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72471 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__72469 = (bindings[idx]);
return (fexpr__72469.cljs$core$IFn$_invoke$arity$2 ? fexpr__72469.cljs$core$IFn$_invoke$arity$2(G__72470,G__72471) : fexpr__72469.call(null,G__72470,G__72471));
}catch (e72468){if((e72468 instanceof Error)){
var e__71569__auto__ = e72468;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72468;

}
}}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72474 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72475 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72476 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__72473 = (bindings[idx]);
return (fexpr__72473.cljs$core$IFn$_invoke$arity$3 ? fexpr__72473.cljs$core$IFn$_invoke$arity$3(G__72474,G__72475,G__72476) : fexpr__72473.call(null,G__72474,G__72475,G__72476));
}catch (e72472){if((e72472 instanceof Error)){
var e__71569__auto__ = e72472;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72472;

}
}}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72479 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72480 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72481 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72482 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__72478 = (bindings[idx]);
return (fexpr__72478.cljs$core$IFn$_invoke$arity$4 ? fexpr__72478.cljs$core$IFn$_invoke$arity$4(G__72479,G__72480,G__72481,G__72482) : fexpr__72478.call(null,G__72479,G__72480,G__72481,G__72482));
}catch (e72477){if((e72477 instanceof Error)){
var e__71569__auto__ = e72477;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72477;

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
try{var G__72485 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72486 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72487 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72488 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72489 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__72484 = (bindings[idx]);
return (fexpr__72484.cljs$core$IFn$_invoke$arity$5 ? fexpr__72484.cljs$core$IFn$_invoke$arity$5(G__72485,G__72486,G__72487,G__72488,G__72489) : fexpr__72484.call(null,G__72485,G__72486,G__72487,G__72488,G__72489));
}catch (e72483){if((e72483 instanceof Error)){
var e__71569__auto__ = e72483;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72483;

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
try{var G__72492 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72493 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72494 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72495 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72496 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72497 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__72491 = (bindings[idx]);
return (fexpr__72491.cljs$core$IFn$_invoke$arity$6 ? fexpr__72491.cljs$core$IFn$_invoke$arity$6(G__72492,G__72493,G__72494,G__72495,G__72496,G__72497) : fexpr__72491.call(null,G__72492,G__72493,G__72494,G__72495,G__72496,G__72497));
}catch (e72490){if((e72490 instanceof Error)){
var e__71569__auto__ = e72490;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72490;

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
try{var G__72500 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72501 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72502 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72503 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72504 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72505 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72506 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__72499 = (bindings[idx]);
return (fexpr__72499.cljs$core$IFn$_invoke$arity$7 ? fexpr__72499.cljs$core$IFn$_invoke$arity$7(G__72500,G__72501,G__72502,G__72503,G__72504,G__72505,G__72506) : fexpr__72499.call(null,G__72500,G__72501,G__72502,G__72503,G__72504,G__72505,G__72506));
}catch (e72498){if((e72498 instanceof Error)){
var e__71569__auto__ = e72498;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72498;

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
try{var G__72509 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72510 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72511 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72512 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72513 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72514 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72515 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72516 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__72508 = (bindings[idx]);
return (fexpr__72508.cljs$core$IFn$_invoke$arity$8 ? fexpr__72508.cljs$core$IFn$_invoke$arity$8(G__72509,G__72510,G__72511,G__72512,G__72513,G__72514,G__72515,G__72516) : fexpr__72508.call(null,G__72509,G__72510,G__72511,G__72512,G__72513,G__72514,G__72515,G__72516));
}catch (e72507){if((e72507 instanceof Error)){
var e__71569__auto__ = e72507;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72507;

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
try{var G__72519 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72520 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72521 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72522 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72523 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72524 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72525 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72526 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72527 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__72518 = (bindings[idx]);
return (fexpr__72518.cljs$core$IFn$_invoke$arity$9 ? fexpr__72518.cljs$core$IFn$_invoke$arity$9(G__72519,G__72520,G__72521,G__72522,G__72523,G__72524,G__72525,G__72526,G__72527) : fexpr__72518.call(null,G__72519,G__72520,G__72521,G__72522,G__72523,G__72524,G__72525,G__72526,G__72527));
}catch (e72517){if((e72517 instanceof Error)){
var e__71569__auto__ = e72517;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72517;

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
try{var G__72530 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72531 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72532 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72533 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72534 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72535 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72536 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72537 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72538 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72539 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__72529 = (bindings[idx]);
return (fexpr__72529.cljs$core$IFn$_invoke$arity$10 ? fexpr__72529.cljs$core$IFn$_invoke$arity$10(G__72530,G__72531,G__72532,G__72533,G__72534,G__72535,G__72536,G__72537,G__72538,G__72539) : fexpr__72529.call(null,G__72530,G__72531,G__72532,G__72533,G__72534,G__72535,G__72536,G__72537,G__72538,G__72539));
}catch (e72528){if((e72528 instanceof Error)){
var e__71569__auto__ = e72528;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72528;

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
try{var G__72542 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72543 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72544 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72545 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72546 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72547 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72548 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72549 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72550 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72551 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72552 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__72541 = (bindings[idx]);
return (fexpr__72541.cljs$core$IFn$_invoke$arity$11 ? fexpr__72541.cljs$core$IFn$_invoke$arity$11(G__72542,G__72543,G__72544,G__72545,G__72546,G__72547,G__72548,G__72549,G__72550,G__72551,G__72552) : fexpr__72541.call(null,G__72542,G__72543,G__72544,G__72545,G__72546,G__72547,G__72548,G__72549,G__72550,G__72551,G__72552));
}catch (e72540){if((e72540 instanceof Error)){
var e__71569__auto__ = e72540;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72540;

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
try{var G__72555 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72556 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72557 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72558 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72559 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72560 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72561 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72562 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72563 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72564 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72565 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72566 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__72554 = (bindings[idx]);
return (fexpr__72554.cljs$core$IFn$_invoke$arity$12 ? fexpr__72554.cljs$core$IFn$_invoke$arity$12(G__72555,G__72556,G__72557,G__72558,G__72559,G__72560,G__72561,G__72562,G__72563,G__72564,G__72565,G__72566) : fexpr__72554.call(null,G__72555,G__72556,G__72557,G__72558,G__72559,G__72560,G__72561,G__72562,G__72563,G__72564,G__72565,G__72566));
}catch (e72553){if((e72553 instanceof Error)){
var e__71569__auto__ = e72553;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72553;

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
try{var G__72569 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72570 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72571 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72572 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72573 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72574 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72575 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72576 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72577 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72578 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72579 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72580 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72581 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__72568 = (bindings[idx]);
return (fexpr__72568.cljs$core$IFn$_invoke$arity$13 ? fexpr__72568.cljs$core$IFn$_invoke$arity$13(G__72569,G__72570,G__72571,G__72572,G__72573,G__72574,G__72575,G__72576,G__72577,G__72578,G__72579,G__72580,G__72581) : fexpr__72568.call(null,G__72569,G__72570,G__72571,G__72572,G__72573,G__72574,G__72575,G__72576,G__72577,G__72578,G__72579,G__72580,G__72581));
}catch (e72567){if((e72567 instanceof Error)){
var e__71569__auto__ = e72567;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72567;

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
try{var G__72584 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72585 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72586 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72587 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72588 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72589 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72590 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72591 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72592 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72593 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72594 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72595 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72596 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72597 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__72583 = (bindings[idx]);
return (fexpr__72583.cljs$core$IFn$_invoke$arity$14 ? fexpr__72583.cljs$core$IFn$_invoke$arity$14(G__72584,G__72585,G__72586,G__72587,G__72588,G__72589,G__72590,G__72591,G__72592,G__72593,G__72594,G__72595,G__72596,G__72597) : fexpr__72583.call(null,G__72584,G__72585,G__72586,G__72587,G__72588,G__72589,G__72590,G__72591,G__72592,G__72593,G__72594,G__72595,G__72596,G__72597));
}catch (e72582){if((e72582 instanceof Error)){
var e__71569__auto__ = e72582;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72582;

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
try{var G__72600 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72601 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72602 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72603 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72604 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72605 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72606 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72607 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72608 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72609 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72610 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72611 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72612 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72613 = sci.impl.types.eval(arg13,ctx,bindings);
var G__72614 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__72599 = (bindings[idx]);
return (fexpr__72599.cljs$core$IFn$_invoke$arity$15 ? fexpr__72599.cljs$core$IFn$_invoke$arity$15(G__72600,G__72601,G__72602,G__72603,G__72604,G__72605,G__72606,G__72607,G__72608,G__72609,G__72610,G__72611,G__72612,G__72613,G__72614) : fexpr__72599.call(null,G__72600,G__72601,G__72602,G__72603,G__72604,G__72605,G__72606,G__72607,G__72608,G__72609,G__72610,G__72611,G__72612,G__72613,G__72614));
}catch (e72598){if((e72598 instanceof Error)){
var e__71569__auto__ = e72598;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72598;

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
try{var G__72617 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72618 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72619 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72620 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72621 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72622 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72623 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72624 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72625 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72626 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72627 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72628 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72629 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72630 = sci.impl.types.eval(arg13,ctx,bindings);
var G__72631 = sci.impl.types.eval(arg14,ctx,bindings);
var G__72632 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__72616 = (bindings[idx]);
return (fexpr__72616.cljs$core$IFn$_invoke$arity$16 ? fexpr__72616.cljs$core$IFn$_invoke$arity$16(G__72617,G__72618,G__72619,G__72620,G__72621,G__72622,G__72623,G__72624,G__72625,G__72626,G__72627,G__72628,G__72629,G__72630,G__72631,G__72632) : fexpr__72616.call(null,G__72617,G__72618,G__72619,G__72620,G__72621,G__72622,G__72623,G__72624,G__72625,G__72626,G__72627,G__72628,G__72629,G__72630,G__72631,G__72632));
}catch (e72615){if((e72615 instanceof Error)){
var e__71569__auto__ = e72615;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72615;

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
try{var G__72635 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72636 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72637 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72638 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72639 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72640 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72641 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72642 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72643 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72644 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72645 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72646 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72647 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72648 = sci.impl.types.eval(arg13,ctx,bindings);
var G__72649 = sci.impl.types.eval(arg14,ctx,bindings);
var G__72650 = sci.impl.types.eval(arg15,ctx,bindings);
var G__72651 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__72634 = (bindings[idx]);
return (fexpr__72634.cljs$core$IFn$_invoke$arity$17 ? fexpr__72634.cljs$core$IFn$_invoke$arity$17(G__72635,G__72636,G__72637,G__72638,G__72639,G__72640,G__72641,G__72642,G__72643,G__72644,G__72645,G__72646,G__72647,G__72648,G__72649,G__72650,G__72651) : fexpr__72634.call(null,G__72635,G__72636,G__72637,G__72638,G__72639,G__72640,G__72641,G__72642,G__72643,G__72644,G__72645,G__72646,G__72647,G__72648,G__72649,G__72650,G__72651));
}catch (e72633){if((e72633 instanceof Error)){
var e__71569__auto__ = e72633;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72633;

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
try{var G__72654 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72655 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72656 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72657 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72658 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72659 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72660 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72661 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72662 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72663 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72664 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72665 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72666 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72667 = sci.impl.types.eval(arg13,ctx,bindings);
var G__72668 = sci.impl.types.eval(arg14,ctx,bindings);
var G__72669 = sci.impl.types.eval(arg15,ctx,bindings);
var G__72670 = sci.impl.types.eval(arg16,ctx,bindings);
var G__72671 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__72653 = (bindings[idx]);
return (fexpr__72653.cljs$core$IFn$_invoke$arity$18 ? fexpr__72653.cljs$core$IFn$_invoke$arity$18(G__72654,G__72655,G__72656,G__72657,G__72658,G__72659,G__72660,G__72661,G__72662,G__72663,G__72664,G__72665,G__72666,G__72667,G__72668,G__72669,G__72670,G__72671) : fexpr__72653.call(null,G__72654,G__72655,G__72656,G__72657,G__72658,G__72659,G__72660,G__72661,G__72662,G__72663,G__72664,G__72665,G__72666,G__72667,G__72668,G__72669,G__72670,G__72671));
}catch (e72652){if((e72652 instanceof Error)){
var e__71569__auto__ = e72652;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72652;

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
try{var G__72674 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72675 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72676 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72677 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72678 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72679 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72680 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72681 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72682 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72683 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72684 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72685 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72686 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72687 = sci.impl.types.eval(arg13,ctx,bindings);
var G__72688 = sci.impl.types.eval(arg14,ctx,bindings);
var G__72689 = sci.impl.types.eval(arg15,ctx,bindings);
var G__72690 = sci.impl.types.eval(arg16,ctx,bindings);
var G__72691 = sci.impl.types.eval(arg17,ctx,bindings);
var G__72692 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__72673 = (bindings[idx]);
return (fexpr__72673.cljs$core$IFn$_invoke$arity$19 ? fexpr__72673.cljs$core$IFn$_invoke$arity$19(G__72674,G__72675,G__72676,G__72677,G__72678,G__72679,G__72680,G__72681,G__72682,G__72683,G__72684,G__72685,G__72686,G__72687,G__72688,G__72689,G__72690,G__72691,G__72692) : fexpr__72673.call(null,G__72674,G__72675,G__72676,G__72677,G__72678,G__72679,G__72680,G__72681,G__72682,G__72683,G__72684,G__72685,G__72686,G__72687,G__72688,G__72689,G__72690,G__72691,G__72692));
}catch (e72672){if((e72672 instanceof Error)){
var e__71569__auto__ = e72672;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71569__auto__,this$);
} else {
throw e72672;

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
var G__72693 = cljs.core.count(analyzed_children);
switch (G__72693) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__72694 = ctx;
var G__72695 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__72694,G__72695) : f.call(null,G__72694,G__72695));
}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__72696 = ctx;
var G__72697 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72698 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__72696,G__72697,G__72698) : f.call(null,G__72696,G__72697,G__72698));
}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__72699 = ctx;
var G__72700 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72701 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72702 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__72699,G__72700,G__72701,G__72702) : f.call(null,G__72699,G__72700,G__72701,G__72702));
}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__72703 = ctx;
var G__72704 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72705 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72706 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72707 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__72703,G__72704,G__72705,G__72706,G__72707) : f.call(null,G__72703,G__72704,G__72705,G__72706,G__72707));
}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__72708 = ctx;
var G__72709 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72710 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72711 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72712 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72713 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__72708,G__72709,G__72710,G__72711,G__72712,G__72713) : f.call(null,G__72708,G__72709,G__72710,G__72711,G__72712,G__72713));
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
var G__72714 = ctx;
var G__72715 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72716 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72717 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72718 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72719 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72720 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__72714,G__72715,G__72716,G__72717,G__72718,G__72719,G__72720) : f.call(null,G__72714,G__72715,G__72716,G__72717,G__72718,G__72719,G__72720));
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
var G__72721 = ctx;
var G__72722 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72723 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72724 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72725 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72726 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72727 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72728 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__72721,G__72722,G__72723,G__72724,G__72725,G__72726,G__72727,G__72728) : f.call(null,G__72721,G__72722,G__72723,G__72724,G__72725,G__72726,G__72727,G__72728));
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
var G__72729 = ctx;
var G__72730 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72731 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72732 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72733 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72734 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72735 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72736 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72737 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__72729,G__72730,G__72731,G__72732,G__72733,G__72734,G__72735,G__72736,G__72737) : f.call(null,G__72729,G__72730,G__72731,G__72732,G__72733,G__72734,G__72735,G__72736,G__72737));
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
var G__72738 = ctx;
var G__72739 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72740 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72741 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72742 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72743 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72744 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72745 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72746 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72747 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__72738,G__72739,G__72740,G__72741,G__72742,G__72743,G__72744,G__72745,G__72746,G__72747) : f.call(null,G__72738,G__72739,G__72740,G__72741,G__72742,G__72743,G__72744,G__72745,G__72746,G__72747));
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
var G__72748 = ctx;
var G__72749 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72750 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72751 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72752 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72753 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72754 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72755 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72756 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72757 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72758 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__72748,G__72749,G__72750,G__72751,G__72752,G__72753,G__72754,G__72755,G__72756,G__72757,G__72758) : f.call(null,G__72748,G__72749,G__72750,G__72751,G__72752,G__72753,G__72754,G__72755,G__72756,G__72757,G__72758));
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
var G__72759 = ctx;
var G__72760 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72761 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72762 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72763 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72764 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72765 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72766 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72767 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72768 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72769 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72770 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__72759,G__72760,G__72761,G__72762,G__72763,G__72764,G__72765,G__72766,G__72767,G__72768,G__72769,G__72770) : f.call(null,G__72759,G__72760,G__72761,G__72762,G__72763,G__72764,G__72765,G__72766,G__72767,G__72768,G__72769,G__72770));
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
var G__72771 = ctx;
var G__72772 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72773 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72774 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72775 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72776 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72777 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72778 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72779 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72780 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72781 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72782 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72783 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__72771,G__72772,G__72773,G__72774,G__72775,G__72776,G__72777,G__72778,G__72779,G__72780,G__72781,G__72782,G__72783) : f.call(null,G__72771,G__72772,G__72773,G__72774,G__72775,G__72776,G__72777,G__72778,G__72779,G__72780,G__72781,G__72782,G__72783));
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
var G__72784 = ctx;
var G__72785 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72786 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72787 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72788 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72789 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72790 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72791 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72792 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72793 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72794 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72795 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72796 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72797 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__72784,G__72785,G__72786,G__72787,G__72788,G__72789,G__72790,G__72791,G__72792,G__72793,G__72794,G__72795,G__72796,G__72797) : f.call(null,G__72784,G__72785,G__72786,G__72787,G__72788,G__72789,G__72790,G__72791,G__72792,G__72793,G__72794,G__72795,G__72796,G__72797));
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
var G__72798 = ctx;
var G__72799 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72800 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72801 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72802 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72803 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72804 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72805 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72806 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72807 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72808 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72809 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72810 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72811 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72812 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__72798,G__72799,G__72800,G__72801,G__72802,G__72803,G__72804,G__72805,G__72806,G__72807,G__72808,G__72809,G__72810,G__72811,G__72812) : f.call(null,G__72798,G__72799,G__72800,G__72801,G__72802,G__72803,G__72804,G__72805,G__72806,G__72807,G__72808,G__72809,G__72810,G__72811,G__72812));
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
var G__72813 = ctx;
var G__72814 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72815 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72816 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72817 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72818 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72819 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72820 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72821 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72822 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72823 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72824 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72825 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72826 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72827 = sci.impl.types.eval(arg13,ctx,bindings);
var G__72828 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__72813,G__72814,G__72815,G__72816,G__72817,G__72818,G__72819,G__72820,G__72821,G__72822,G__72823,G__72824,G__72825,G__72826,G__72827,G__72828) : f.call(null,G__72813,G__72814,G__72815,G__72816,G__72817,G__72818,G__72819,G__72820,G__72821,G__72822,G__72823,G__72824,G__72825,G__72826,G__72827,G__72828));
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
var G__72829 = ctx;
var G__72830 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72831 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72832 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72833 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72834 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72835 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72836 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72837 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72838 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72839 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72840 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72841 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72842 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72843 = sci.impl.types.eval(arg13,ctx,bindings);
var G__72844 = sci.impl.types.eval(arg14,ctx,bindings);
var G__72845 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__72829,G__72830,G__72831,G__72832,G__72833,G__72834,G__72835,G__72836,G__72837,G__72838,G__72839,G__72840,G__72841,G__72842,G__72843,G__72844,G__72845) : f.call(null,G__72829,G__72830,G__72831,G__72832,G__72833,G__72834,G__72835,G__72836,G__72837,G__72838,G__72839,G__72840,G__72841,G__72842,G__72843,G__72844,G__72845));
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
var G__72846 = ctx;
var G__72847 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72848 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72849 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72850 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72851 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72852 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72853 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72854 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72855 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72856 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72857 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72858 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72859 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72860 = sci.impl.types.eval(arg13,ctx,bindings);
var G__72861 = sci.impl.types.eval(arg14,ctx,bindings);
var G__72862 = sci.impl.types.eval(arg15,ctx,bindings);
var G__72863 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__72846,G__72847,G__72848,G__72849,G__72850,G__72851,G__72852,G__72853,G__72854,G__72855,G__72856,G__72857,G__72858,G__72859,G__72860,G__72861,G__72862,G__72863) : f.call(null,G__72846,G__72847,G__72848,G__72849,G__72850,G__72851,G__72852,G__72853,G__72854,G__72855,G__72856,G__72857,G__72858,G__72859,G__72860,G__72861,G__72862,G__72863));
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
var G__72864 = ctx;
var G__72865 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72866 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72867 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72868 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72869 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72870 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72871 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72872 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72873 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72874 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72875 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72876 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72877 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72878 = sci.impl.types.eval(arg13,ctx,bindings);
var G__72879 = sci.impl.types.eval(arg14,ctx,bindings);
var G__72880 = sci.impl.types.eval(arg15,ctx,bindings);
var G__72881 = sci.impl.types.eval(arg16,ctx,bindings);
var G__72882 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__72864,G__72865,G__72866,G__72867,G__72868,G__72869,G__72870,G__72871,G__72872,G__72873,G__72874,G__72875,G__72876,G__72877,G__72878,G__72879,G__72880,G__72881,G__72882) : f.call(null,G__72864,G__72865,G__72866,G__72867,G__72868,G__72869,G__72870,G__72871,G__72872,G__72873,G__72874,G__72875,G__72876,G__72877,G__72878,G__72879,G__72880,G__72881,G__72882));
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
var G__72883 = ctx;
var G__72884 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72885 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72886 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72887 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72888 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72889 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72890 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72891 = sci.impl.types.eval(arg7,ctx,bindings);
var G__72892 = sci.impl.types.eval(arg8,ctx,bindings);
var G__72893 = sci.impl.types.eval(arg9,ctx,bindings);
var G__72894 = sci.impl.types.eval(arg10,ctx,bindings);
var G__72895 = sci.impl.types.eval(arg11,ctx,bindings);
var G__72896 = sci.impl.types.eval(arg12,ctx,bindings);
var G__72897 = sci.impl.types.eval(arg13,ctx,bindings);
var G__72898 = sci.impl.types.eval(arg14,ctx,bindings);
var G__72899 = sci.impl.types.eval(arg15,ctx,bindings);
var G__72900 = sci.impl.types.eval(arg16,ctx,bindings);
var G__72901 = sci.impl.types.eval(arg17,ctx,bindings);
var G__72902 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__72883,G__72884,G__72885,G__72886,G__72887,G__72888,G__72889,G__72890,G__72891,G__72892,G__72893,G__72894,G__72895,G__72896,G__72897,G__72898,G__72899,G__72900,G__72901,G__72902) : f.call(null,G__72883,G__72884,G__72885,G__72886,G__72887,G__72888,G__72889,G__72890,G__72891,G__72892,G__72893,G__72894,G__72895,G__72896,G__72897,G__72898,G__72899,G__72900,G__72901,G__72902));
}),stack);

break;
default:
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
}),stack);

}
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
var G__72904 = cljs.core.count(analyzed_children);
switch (G__72904) {
case (0):
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__72906 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__72906.cljs$core$IFn$_invoke$arity$0 ? fexpr__72906.cljs$core$IFn$_invoke$arity$0() : fexpr__72906.call(null));
}catch (e72905){if((e72905 instanceof Error)){
var e__71803__auto__ = e72905;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72905;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e72907){if((e72907 instanceof Error)){
var e__71803__auto__ = e72907;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72907;

}
}}),stack);
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72910 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__72909 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__72909.cljs$core$IFn$_invoke$arity$1 ? fexpr__72909.cljs$core$IFn$_invoke$arity$1(G__72910) : fexpr__72909.call(null,G__72910));
}catch (e72908){if((e72908 instanceof Error)){
var e__71803__auto__ = e72908;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72908;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72912 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72912) : f.call(null,G__72912));
}catch (e72911){if((e72911 instanceof Error)){
var e__71803__auto__ = e72911;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72911;

}
}}),stack);
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72915 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72916 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__72914 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__72914.cljs$core$IFn$_invoke$arity$2 ? fexpr__72914.cljs$core$IFn$_invoke$arity$2(G__72915,G__72916) : fexpr__72914.call(null,G__72915,G__72916));
}catch (e72913){if((e72913 instanceof Error)){
var e__71803__auto__ = e72913;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72913;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72918 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72919 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__72918,G__72919) : f.call(null,G__72918,G__72919));
}catch (e72917){if((e72917 instanceof Error)){
var e__71803__auto__ = e72917;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72917;

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
try{var G__72922 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72923 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72924 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__72921 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__72921.cljs$core$IFn$_invoke$arity$3 ? fexpr__72921.cljs$core$IFn$_invoke$arity$3(G__72922,G__72923,G__72924) : fexpr__72921.call(null,G__72922,G__72923,G__72924));
}catch (e72920){if((e72920 instanceof Error)){
var e__71803__auto__ = e72920;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72920;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72926 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72927 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72928 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__72926,G__72927,G__72928) : f.call(null,G__72926,G__72927,G__72928));
}catch (e72925){if((e72925 instanceof Error)){
var e__71803__auto__ = e72925;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72925;

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
try{var G__72931 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72932 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72933 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72934 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__72930 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__72930.cljs$core$IFn$_invoke$arity$4 ? fexpr__72930.cljs$core$IFn$_invoke$arity$4(G__72931,G__72932,G__72933,G__72934) : fexpr__72930.call(null,G__72931,G__72932,G__72933,G__72934));
}catch (e72929){if((e72929 instanceof Error)){
var e__71803__auto__ = e72929;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72929;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72936 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72937 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72938 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72939 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__72936,G__72937,G__72938,G__72939) : f.call(null,G__72936,G__72937,G__72938,G__72939));
}catch (e72935){if((e72935 instanceof Error)){
var e__71803__auto__ = e72935;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72935;

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
try{var G__72942 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72943 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72944 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72945 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72946 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__72941 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__72941.cljs$core$IFn$_invoke$arity$5 ? fexpr__72941.cljs$core$IFn$_invoke$arity$5(G__72942,G__72943,G__72944,G__72945,G__72946) : fexpr__72941.call(null,G__72942,G__72943,G__72944,G__72945,G__72946));
}catch (e72940){if((e72940 instanceof Error)){
var e__71803__auto__ = e72940;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72940;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72948 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72949 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72950 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72951 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72952 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__72948,G__72949,G__72950,G__72951,G__72952) : f.call(null,G__72948,G__72949,G__72950,G__72951,G__72952));
}catch (e72947){if((e72947 instanceof Error)){
var e__71803__auto__ = e72947;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72947;

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
try{var G__72955 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72956 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72957 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72958 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72959 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72960 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__72954 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__72954.cljs$core$IFn$_invoke$arity$6 ? fexpr__72954.cljs$core$IFn$_invoke$arity$6(G__72955,G__72956,G__72957,G__72958,G__72959,G__72960) : fexpr__72954.call(null,G__72955,G__72956,G__72957,G__72958,G__72959,G__72960));
}catch (e72953){if((e72953 instanceof Error)){
var e__71803__auto__ = e72953;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72953;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72962 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72963 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72964 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72965 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72966 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72967 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__72962,G__72963,G__72964,G__72965,G__72966,G__72967) : f.call(null,G__72962,G__72963,G__72964,G__72965,G__72966,G__72967));
}catch (e72961){if((e72961 instanceof Error)){
var e__71803__auto__ = e72961;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72961;

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
try{var G__72970 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72971 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72972 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72973 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72974 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72975 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72976 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__72969 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__72969.cljs$core$IFn$_invoke$arity$7 ? fexpr__72969.cljs$core$IFn$_invoke$arity$7(G__72970,G__72971,G__72972,G__72973,G__72974,G__72975,G__72976) : fexpr__72969.call(null,G__72970,G__72971,G__72972,G__72973,G__72974,G__72975,G__72976));
}catch (e72968){if((e72968 instanceof Error)){
var e__71803__auto__ = e72968;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72968;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72978 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72979 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72980 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72981 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72982 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72983 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72984 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__72978,G__72979,G__72980,G__72981,G__72982,G__72983,G__72984) : f.call(null,G__72978,G__72979,G__72980,G__72981,G__72982,G__72983,G__72984));
}catch (e72977){if((e72977 instanceof Error)){
var e__71803__auto__ = e72977;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72977;

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
try{var G__72987 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72988 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72989 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72990 = sci.impl.types.eval(arg3,ctx,bindings);
var G__72991 = sci.impl.types.eval(arg4,ctx,bindings);
var G__72992 = sci.impl.types.eval(arg5,ctx,bindings);
var G__72993 = sci.impl.types.eval(arg6,ctx,bindings);
var G__72994 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__72986 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__72986.cljs$core$IFn$_invoke$arity$8 ? fexpr__72986.cljs$core$IFn$_invoke$arity$8(G__72987,G__72988,G__72989,G__72990,G__72991,G__72992,G__72993,G__72994) : fexpr__72986.call(null,G__72987,G__72988,G__72989,G__72990,G__72991,G__72992,G__72993,G__72994));
}catch (e72985){if((e72985 instanceof Error)){
var e__71803__auto__ = e72985;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72985;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__72996 = sci.impl.types.eval(arg0,ctx,bindings);
var G__72997 = sci.impl.types.eval(arg1,ctx,bindings);
var G__72998 = sci.impl.types.eval(arg2,ctx,bindings);
var G__72999 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73000 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73001 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73002 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73003 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__72996,G__72997,G__72998,G__72999,G__73000,G__73001,G__73002,G__73003) : f.call(null,G__72996,G__72997,G__72998,G__72999,G__73000,G__73001,G__73002,G__73003));
}catch (e72995){if((e72995 instanceof Error)){
var e__71803__auto__ = e72995;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e72995;

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
try{var G__73006 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73007 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73008 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73009 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73010 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73011 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73012 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73013 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73014 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__73005 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__73005.cljs$core$IFn$_invoke$arity$9 ? fexpr__73005.cljs$core$IFn$_invoke$arity$9(G__73006,G__73007,G__73008,G__73009,G__73010,G__73011,G__73012,G__73013,G__73014) : fexpr__73005.call(null,G__73006,G__73007,G__73008,G__73009,G__73010,G__73011,G__73012,G__73013,G__73014));
}catch (e73004){if((e73004 instanceof Error)){
var e__71803__auto__ = e73004;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73004;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__73016 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73017 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73018 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73019 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73020 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73021 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73022 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73023 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73024 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__73016,G__73017,G__73018,G__73019,G__73020,G__73021,G__73022,G__73023,G__73024) : f.call(null,G__73016,G__73017,G__73018,G__73019,G__73020,G__73021,G__73022,G__73023,G__73024));
}catch (e73015){if((e73015 instanceof Error)){
var e__71803__auto__ = e73015;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73015;

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
try{var G__73027 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73028 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73029 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73030 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73031 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73032 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73033 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73034 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73035 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73036 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__73026 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__73026.cljs$core$IFn$_invoke$arity$10 ? fexpr__73026.cljs$core$IFn$_invoke$arity$10(G__73027,G__73028,G__73029,G__73030,G__73031,G__73032,G__73033,G__73034,G__73035,G__73036) : fexpr__73026.call(null,G__73027,G__73028,G__73029,G__73030,G__73031,G__73032,G__73033,G__73034,G__73035,G__73036));
}catch (e73025){if((e73025 instanceof Error)){
var e__71803__auto__ = e73025;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73025;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__73038 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73039 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73040 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73041 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73042 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73043 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73044 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73045 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73046 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73047 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__73038,G__73039,G__73040,G__73041,G__73042,G__73043,G__73044,G__73045,G__73046,G__73047) : f.call(null,G__73038,G__73039,G__73040,G__73041,G__73042,G__73043,G__73044,G__73045,G__73046,G__73047));
}catch (e73037){if((e73037 instanceof Error)){
var e__71803__auto__ = e73037;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73037;

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
try{var G__73050 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73051 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73052 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73053 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73054 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73055 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73056 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73057 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73058 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73059 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73060 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__73049 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__73049.cljs$core$IFn$_invoke$arity$11 ? fexpr__73049.cljs$core$IFn$_invoke$arity$11(G__73050,G__73051,G__73052,G__73053,G__73054,G__73055,G__73056,G__73057,G__73058,G__73059,G__73060) : fexpr__73049.call(null,G__73050,G__73051,G__73052,G__73053,G__73054,G__73055,G__73056,G__73057,G__73058,G__73059,G__73060));
}catch (e73048){if((e73048 instanceof Error)){
var e__71803__auto__ = e73048;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73048;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__73062 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73063 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73064 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73065 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73066 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73067 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73068 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73069 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73070 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73071 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73072 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__73062,G__73063,G__73064,G__73065,G__73066,G__73067,G__73068,G__73069,G__73070,G__73071,G__73072) : f.call(null,G__73062,G__73063,G__73064,G__73065,G__73066,G__73067,G__73068,G__73069,G__73070,G__73071,G__73072));
}catch (e73061){if((e73061 instanceof Error)){
var e__71803__auto__ = e73061;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73061;

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
try{var G__73075 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73076 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73077 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73078 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73079 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73080 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73081 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73082 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73083 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73084 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73085 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73086 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__73074 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__73074.cljs$core$IFn$_invoke$arity$12 ? fexpr__73074.cljs$core$IFn$_invoke$arity$12(G__73075,G__73076,G__73077,G__73078,G__73079,G__73080,G__73081,G__73082,G__73083,G__73084,G__73085,G__73086) : fexpr__73074.call(null,G__73075,G__73076,G__73077,G__73078,G__73079,G__73080,G__73081,G__73082,G__73083,G__73084,G__73085,G__73086));
}catch (e73073){if((e73073 instanceof Error)){
var e__71803__auto__ = e73073;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73073;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__73088 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73089 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73090 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73091 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73092 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73093 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73094 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73095 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73096 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73097 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73098 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73099 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__73088,G__73089,G__73090,G__73091,G__73092,G__73093,G__73094,G__73095,G__73096,G__73097,G__73098,G__73099) : f.call(null,G__73088,G__73089,G__73090,G__73091,G__73092,G__73093,G__73094,G__73095,G__73096,G__73097,G__73098,G__73099));
}catch (e73087){if((e73087 instanceof Error)){
var e__71803__auto__ = e73087;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73087;

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
try{var G__73102 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73103 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73104 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73105 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73106 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73107 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73108 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73109 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73110 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73111 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73112 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73113 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73114 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__73101 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__73101.cljs$core$IFn$_invoke$arity$13 ? fexpr__73101.cljs$core$IFn$_invoke$arity$13(G__73102,G__73103,G__73104,G__73105,G__73106,G__73107,G__73108,G__73109,G__73110,G__73111,G__73112,G__73113,G__73114) : fexpr__73101.call(null,G__73102,G__73103,G__73104,G__73105,G__73106,G__73107,G__73108,G__73109,G__73110,G__73111,G__73112,G__73113,G__73114));
}catch (e73100){if((e73100 instanceof Error)){
var e__71803__auto__ = e73100;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73100;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__73116 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73117 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73118 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73119 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73120 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73121 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73122 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73123 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73124 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73125 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73126 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73127 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73128 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__73116,G__73117,G__73118,G__73119,G__73120,G__73121,G__73122,G__73123,G__73124,G__73125,G__73126,G__73127,G__73128) : f.call(null,G__73116,G__73117,G__73118,G__73119,G__73120,G__73121,G__73122,G__73123,G__73124,G__73125,G__73126,G__73127,G__73128));
}catch (e73115){if((e73115 instanceof Error)){
var e__71803__auto__ = e73115;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73115;

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
try{var G__73131 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73132 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73133 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73134 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73135 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73136 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73137 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73138 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73139 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73140 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73141 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73142 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73143 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73144 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__73130 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__73130.cljs$core$IFn$_invoke$arity$14 ? fexpr__73130.cljs$core$IFn$_invoke$arity$14(G__73131,G__73132,G__73133,G__73134,G__73135,G__73136,G__73137,G__73138,G__73139,G__73140,G__73141,G__73142,G__73143,G__73144) : fexpr__73130.call(null,G__73131,G__73132,G__73133,G__73134,G__73135,G__73136,G__73137,G__73138,G__73139,G__73140,G__73141,G__73142,G__73143,G__73144));
}catch (e73129){if((e73129 instanceof Error)){
var e__71803__auto__ = e73129;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73129;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__73146 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73147 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73148 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73149 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73150 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73151 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73152 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73153 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73154 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73155 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73156 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73157 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73158 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73159 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__73146,G__73147,G__73148,G__73149,G__73150,G__73151,G__73152,G__73153,G__73154,G__73155,G__73156,G__73157,G__73158,G__73159) : f.call(null,G__73146,G__73147,G__73148,G__73149,G__73150,G__73151,G__73152,G__73153,G__73154,G__73155,G__73156,G__73157,G__73158,G__73159));
}catch (e73145){if((e73145 instanceof Error)){
var e__71803__auto__ = e73145;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73145;

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
try{var G__73162 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73163 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73164 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73165 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73166 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73167 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73168 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73169 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73170 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73171 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73172 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73173 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73174 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73175 = sci.impl.types.eval(arg13,ctx,bindings);
var G__73176 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__73161 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__73161.cljs$core$IFn$_invoke$arity$15 ? fexpr__73161.cljs$core$IFn$_invoke$arity$15(G__73162,G__73163,G__73164,G__73165,G__73166,G__73167,G__73168,G__73169,G__73170,G__73171,G__73172,G__73173,G__73174,G__73175,G__73176) : fexpr__73161.call(null,G__73162,G__73163,G__73164,G__73165,G__73166,G__73167,G__73168,G__73169,G__73170,G__73171,G__73172,G__73173,G__73174,G__73175,G__73176));
}catch (e73160){if((e73160 instanceof Error)){
var e__71803__auto__ = e73160;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73160;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__73178 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73179 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73180 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73181 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73182 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73183 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73184 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73185 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73186 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73187 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73188 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73189 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73190 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73191 = sci.impl.types.eval(arg13,ctx,bindings);
var G__73192 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__73178,G__73179,G__73180,G__73181,G__73182,G__73183,G__73184,G__73185,G__73186,G__73187,G__73188,G__73189,G__73190,G__73191,G__73192) : f.call(null,G__73178,G__73179,G__73180,G__73181,G__73182,G__73183,G__73184,G__73185,G__73186,G__73187,G__73188,G__73189,G__73190,G__73191,G__73192));
}catch (e73177){if((e73177 instanceof Error)){
var e__71803__auto__ = e73177;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73177;

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
try{var G__73195 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73196 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73197 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73198 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73199 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73200 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73201 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73202 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73203 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73204 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73205 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73206 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73207 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73208 = sci.impl.types.eval(arg13,ctx,bindings);
var G__73209 = sci.impl.types.eval(arg14,ctx,bindings);
var G__73210 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__73194 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__73194.cljs$core$IFn$_invoke$arity$16 ? fexpr__73194.cljs$core$IFn$_invoke$arity$16(G__73195,G__73196,G__73197,G__73198,G__73199,G__73200,G__73201,G__73202,G__73203,G__73204,G__73205,G__73206,G__73207,G__73208,G__73209,G__73210) : fexpr__73194.call(null,G__73195,G__73196,G__73197,G__73198,G__73199,G__73200,G__73201,G__73202,G__73203,G__73204,G__73205,G__73206,G__73207,G__73208,G__73209,G__73210));
}catch (e73193){if((e73193 instanceof Error)){
var e__71803__auto__ = e73193;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73193;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__73212 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73213 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73214 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73215 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73216 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73217 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73218 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73219 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73220 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73221 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73222 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73223 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73224 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73225 = sci.impl.types.eval(arg13,ctx,bindings);
var G__73226 = sci.impl.types.eval(arg14,ctx,bindings);
var G__73227 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__73212,G__73213,G__73214,G__73215,G__73216,G__73217,G__73218,G__73219,G__73220,G__73221,G__73222,G__73223,G__73224,G__73225,G__73226,G__73227) : f.call(null,G__73212,G__73213,G__73214,G__73215,G__73216,G__73217,G__73218,G__73219,G__73220,G__73221,G__73222,G__73223,G__73224,G__73225,G__73226,G__73227));
}catch (e73211){if((e73211 instanceof Error)){
var e__71803__auto__ = e73211;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73211;

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
try{var G__73230 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73231 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73232 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73233 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73234 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73235 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73236 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73237 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73238 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73239 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73240 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73241 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73242 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73243 = sci.impl.types.eval(arg13,ctx,bindings);
var G__73244 = sci.impl.types.eval(arg14,ctx,bindings);
var G__73245 = sci.impl.types.eval(arg15,ctx,bindings);
var G__73246 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__73229 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__73229.cljs$core$IFn$_invoke$arity$17 ? fexpr__73229.cljs$core$IFn$_invoke$arity$17(G__73230,G__73231,G__73232,G__73233,G__73234,G__73235,G__73236,G__73237,G__73238,G__73239,G__73240,G__73241,G__73242,G__73243,G__73244,G__73245,G__73246) : fexpr__73229.call(null,G__73230,G__73231,G__73232,G__73233,G__73234,G__73235,G__73236,G__73237,G__73238,G__73239,G__73240,G__73241,G__73242,G__73243,G__73244,G__73245,G__73246));
}catch (e73228){if((e73228 instanceof Error)){
var e__71803__auto__ = e73228;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73228;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__73248 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73249 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73250 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73251 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73252 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73253 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73254 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73255 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73256 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73257 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73258 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73259 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73260 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73261 = sci.impl.types.eval(arg13,ctx,bindings);
var G__73262 = sci.impl.types.eval(arg14,ctx,bindings);
var G__73263 = sci.impl.types.eval(arg15,ctx,bindings);
var G__73264 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__73248,G__73249,G__73250,G__73251,G__73252,G__73253,G__73254,G__73255,G__73256,G__73257,G__73258,G__73259,G__73260,G__73261,G__73262,G__73263,G__73264) : f.call(null,G__73248,G__73249,G__73250,G__73251,G__73252,G__73253,G__73254,G__73255,G__73256,G__73257,G__73258,G__73259,G__73260,G__73261,G__73262,G__73263,G__73264));
}catch (e73247){if((e73247 instanceof Error)){
var e__71803__auto__ = e73247;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73247;

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
try{var G__73267 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73268 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73269 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73270 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73271 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73272 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73273 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73274 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73275 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73276 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73277 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73278 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73279 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73280 = sci.impl.types.eval(arg13,ctx,bindings);
var G__73281 = sci.impl.types.eval(arg14,ctx,bindings);
var G__73282 = sci.impl.types.eval(arg15,ctx,bindings);
var G__73283 = sci.impl.types.eval(arg16,ctx,bindings);
var G__73284 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__73266 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__73266.cljs$core$IFn$_invoke$arity$18 ? fexpr__73266.cljs$core$IFn$_invoke$arity$18(G__73267,G__73268,G__73269,G__73270,G__73271,G__73272,G__73273,G__73274,G__73275,G__73276,G__73277,G__73278,G__73279,G__73280,G__73281,G__73282,G__73283,G__73284) : fexpr__73266.call(null,G__73267,G__73268,G__73269,G__73270,G__73271,G__73272,G__73273,G__73274,G__73275,G__73276,G__73277,G__73278,G__73279,G__73280,G__73281,G__73282,G__73283,G__73284));
}catch (e73265){if((e73265 instanceof Error)){
var e__71803__auto__ = e73265;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73265;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__73286 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73287 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73288 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73289 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73290 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73291 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73292 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73293 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73294 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73295 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73296 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73297 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73298 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73299 = sci.impl.types.eval(arg13,ctx,bindings);
var G__73300 = sci.impl.types.eval(arg14,ctx,bindings);
var G__73301 = sci.impl.types.eval(arg15,ctx,bindings);
var G__73302 = sci.impl.types.eval(arg16,ctx,bindings);
var G__73303 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__73286,G__73287,G__73288,G__73289,G__73290,G__73291,G__73292,G__73293,G__73294,G__73295,G__73296,G__73297,G__73298,G__73299,G__73300,G__73301,G__73302,G__73303) : f.call(null,G__73286,G__73287,G__73288,G__73289,G__73290,G__73291,G__73292,G__73293,G__73294,G__73295,G__73296,G__73297,G__73298,G__73299,G__73300,G__73301,G__73302,G__73303));
}catch (e73285){if((e73285 instanceof Error)){
var e__71803__auto__ = e73285;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73285;

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
try{var G__73306 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73307 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73308 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73309 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73310 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73311 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73312 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73313 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73314 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73315 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73316 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73317 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73318 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73319 = sci.impl.types.eval(arg13,ctx,bindings);
var G__73320 = sci.impl.types.eval(arg14,ctx,bindings);
var G__73321 = sci.impl.types.eval(arg15,ctx,bindings);
var G__73322 = sci.impl.types.eval(arg16,ctx,bindings);
var G__73323 = sci.impl.types.eval(arg17,ctx,bindings);
var G__73324 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__73305 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__73305.cljs$core$IFn$_invoke$arity$19 ? fexpr__73305.cljs$core$IFn$_invoke$arity$19(G__73306,G__73307,G__73308,G__73309,G__73310,G__73311,G__73312,G__73313,G__73314,G__73315,G__73316,G__73317,G__73318,G__73319,G__73320,G__73321,G__73322,G__73323,G__73324) : fexpr__73305.call(null,G__73306,G__73307,G__73308,G__73309,G__73310,G__73311,G__73312,G__73313,G__73314,G__73315,G__73316,G__73317,G__73318,G__73319,G__73320,G__73321,G__73322,G__73323,G__73324));
}catch (e73304){if((e73304 instanceof Error)){
var e__71803__auto__ = e73304;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73304;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__73326 = sci.impl.types.eval(arg0,ctx,bindings);
var G__73327 = sci.impl.types.eval(arg1,ctx,bindings);
var G__73328 = sci.impl.types.eval(arg2,ctx,bindings);
var G__73329 = sci.impl.types.eval(arg3,ctx,bindings);
var G__73330 = sci.impl.types.eval(arg4,ctx,bindings);
var G__73331 = sci.impl.types.eval(arg5,ctx,bindings);
var G__73332 = sci.impl.types.eval(arg6,ctx,bindings);
var G__73333 = sci.impl.types.eval(arg7,ctx,bindings);
var G__73334 = sci.impl.types.eval(arg8,ctx,bindings);
var G__73335 = sci.impl.types.eval(arg9,ctx,bindings);
var G__73336 = sci.impl.types.eval(arg10,ctx,bindings);
var G__73337 = sci.impl.types.eval(arg11,ctx,bindings);
var G__73338 = sci.impl.types.eval(arg12,ctx,bindings);
var G__73339 = sci.impl.types.eval(arg13,ctx,bindings);
var G__73340 = sci.impl.types.eval(arg14,ctx,bindings);
var G__73341 = sci.impl.types.eval(arg15,ctx,bindings);
var G__73342 = sci.impl.types.eval(arg16,ctx,bindings);
var G__73343 = sci.impl.types.eval(arg17,ctx,bindings);
var G__73344 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__73326,G__73327,G__73328,G__73329,G__73330,G__73331,G__73332,G__73333,G__73334,G__73335,G__73336,G__73337,G__73338,G__73339,G__73340,G__73341,G__73342,G__73343,G__73344) : f.call(null,G__73326,G__73327,G__73328,G__73329,G__73330,G__73331,G__73332,G__73333,G__73334,G__73335,G__73336,G__73337,G__73338,G__73339,G__73340,G__73341,G__73342,G__73343,G__73344));
}catch (e73325){if((e73325 instanceof Error)){
var e__71803__auto__ = e73325;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__71803__auto__,this$);
} else {
throw e73325;

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
var ns_expr = (function (){var G__73345 = ctx;
var G__73346 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__73345,G__73346) : sci.impl.analyzer.analyze.call(null,G__73345,G__73346));
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
}catch (e73347){if((e73347 instanceof Error)){
var e = e73347;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e73347;

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
var _ = (cljs.core.truth_((function (){var and__5041__auto__ = special_sym;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__5041__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_(ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__5043__auto__ = special_sym;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__5041__auto__ = f_meta;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = f_meta;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5041__auto__;
}
})())){
var vec__73348 = f__$1;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73348,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73348,(1),null);
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var len = method_name__$1.length;
var idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(method_name__$1,".");
var f__$2 = (cljs.core.truth_((function (){var and__5041__auto__ = idx;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((len - (1)),idx);
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.analyzer.goog$module$goog$object.getValueByKeys(class$,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(method_name__$1,(0),idx).split("."))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name__$1,(idx + (1)))], null):f__$1);
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_static_method_invocation(ctx__$1,bindings,cljs.core.cons(f__$2,children));
}),null);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(eval_QMARK_);
if(and__5041__auto__){
var and__5041__auto____$1 = (f__$1 instanceof cljs.core.Symbol);
if(and__5041__auto____$1){
var or__5043__auto__ = special_sym;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var G__73351 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__73351)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__73351)){
return sci.impl.analyzer.return_and(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__73351)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__73351)){
return sci.impl.analyzer.analyze_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__73351)){
return sci.impl.analyzer.analyze_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__73351)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__73351)){
var ret = sci.impl.analyzer.analyze_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__73351)){
var ret = sci.impl.analyzer.analyze_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__73351)){
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__73351)){
return sci.impl.analyzer.analyze_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__73351)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__73351)){
return sci.impl.analyzer.analyze_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__73351)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__73351)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__73351)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__73351)){
return sci.impl.analyzer.analyze_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__73351)){
return sci.impl.analyzer.analyze_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__73351)){
return sci.impl.analyzer.analyze_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__73351)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__73351)){
return sci.impl.analyzer.return_recur(ctx,expr,sci.impl.analyzer.analyze_children(sci.impl.analyzer.without_recur_target(ctx),cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__73351)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__73351)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__73351)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__73351)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__73351)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__73351)){
return sci.impl.analyzer.return_or(ctx,expr,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73351)].join('')));

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
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__5041__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__5041__auto__;
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
var G__73354 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__73354)){
if((sci.impl.utils.needs_ctx === op)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__73354)){
return sci.impl.analyzer.return_binding_call(ctx,expr,new cljs.core.Keyword("sci.impl","idx","sci.impl/idx",700902278).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)),f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);

}
}
} else {
var self_ref_QMARK_ = new cljs.core.Keyword(null,"self-ref?","self-ref?",412808630).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5041__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1(f__$1) : self_ref_QMARK_.call(null,f__$1));
} else {
return and__5041__auto__;
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
}catch (e73352){if((e73352 instanceof Error)){
var e = e73352;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,(function (){var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),stack);
})());
} else {
throw e73352;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__73355 = ccount;
switch (G__73355) {
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73356_SHARP_){
return sci.impl.types.eval(p1__73356_SHARP_,ctx__$1,bindings);
}),vs__$1)));
}),null);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var arr = [];
var seq__73357_73823 = cljs.core.seq(vs);
var chunk__73358_73824 = null;
var count__73359_73825 = (0);
var i__73360_73826 = (0);
while(true){
if((i__73360_73826 < count__73359_73825)){
var x_73827 = chunk__73358_73824.cljs$core$IIndexed$_nth$arity$2(null,i__73360_73826);
arr.push(sci.impl.types.eval(x_73827,ctx__$1,bindings));


var G__73828 = seq__73357_73823;
var G__73829 = chunk__73358_73824;
var G__73830 = count__73359_73825;
var G__73831 = (i__73360_73826 + (1));
seq__73357_73823 = G__73828;
chunk__73358_73824 = G__73829;
count__73359_73825 = G__73830;
i__73360_73826 = G__73831;
continue;
} else {
var temp__5720__auto___73832 = cljs.core.seq(seq__73357_73823);
if(temp__5720__auto___73832){
var seq__73357_73833__$1 = temp__5720__auto___73832;
if(cljs.core.chunked_seq_QMARK_(seq__73357_73833__$1)){
var c__5565__auto___73834 = cljs.core.chunk_first(seq__73357_73833__$1);
var G__73835 = cljs.core.chunk_rest(seq__73357_73833__$1);
var G__73836 = c__5565__auto___73834;
var G__73837 = cljs.core.count(c__5565__auto___73834);
var G__73838 = (0);
seq__73357_73823 = G__73835;
chunk__73358_73824 = G__73836;
count__73359_73825 = G__73837;
i__73360_73826 = G__73838;
continue;
} else {
var x_73839 = cljs.core.first(seq__73357_73833__$1);
arr.push(sci.impl.types.eval(x_73839,ctx__$1,bindings));


var G__73840 = cljs.core.next(seq__73357_73833__$1);
var G__73841 = null;
var G__73842 = (0);
var G__73843 = (0);
seq__73357_73823 = G__73840;
chunk__73358_73824 = G__73841;
count__73359_73825 = G__73842;
i__73360_73826 = G__73843;
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
var G__73362 = arguments.length;
switch (G__73362) {
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
