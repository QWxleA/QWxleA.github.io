goog.provide('lambdaisland.glogi.print');
goog.scope(function(){
  lambdaisland.glogi.print.goog$module$goog$object = goog.module.get('goog.object');
});
lambdaisland.glogi.print.colors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"gray1","gray1",23549221),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"gray3","gray3",-617553786),new cljs.core.Keyword(null,"gray4","gray4",460735815),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"turqoise","turqoise",1674869457),new cljs.core.Keyword(null,"gray2","gray2",-1424527469),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"gray6","gray6",-2106469670),new cljs.core.Keyword(null,"gray5","gray5",1481094938),new cljs.core.Keyword(null,"brown","brown",1414854429),new cljs.core.Keyword(null,"black","black",1294279647)],["#f5871f","#e0e0e0","#ffffff","#8e908c","#969896","#eab700","#718c00","#3e999f","#d6d6d6","#c82829","#4271ae","#8959a8","#282a2e","#4d4d4c","#a3685a","#1d1f21"]);
lambdaisland.glogi.print.level_color = (function lambdaisland$glogi$print$level_color(level){
var pred__96089 = cljs.core._LT__EQ_;
var expr__96090 = lambdaisland.glogi.level_value(level);
if(cljs.core.truth_((function (){var G__96092 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"severe","severe",-1364500238));
var G__96093 = expr__96090;
return (pred__96089.cljs$core$IFn$_invoke$arity$2 ? pred__96089.cljs$core$IFn$_invoke$arity$2(G__96092,G__96093) : pred__96089.call(null,G__96092,G__96093));
})())){
return new cljs.core.Keyword(null,"red","red",-969428204);
} else {
if(cljs.core.truth_((function (){var G__96094 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"warning","warning",-1685650671));
var G__96095 = expr__96090;
return (pred__96089.cljs$core$IFn$_invoke$arity$2 ? pred__96089.cljs$core$IFn$_invoke$arity$2(G__96094,G__96095) : pred__96089.call(null,G__96094,G__96095));
})())){
return new cljs.core.Keyword(null,"orange","orange",73816386);
} else {
if(cljs.core.truth_((function (){var G__96096 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"info","info",-317069002));
var G__96097 = expr__96090;
return (pred__96089.cljs$core$IFn$_invoke$arity$2 ? pred__96089.cljs$core$IFn$_invoke$arity$2(G__96096,G__96097) : pred__96089.call(null,G__96096,G__96097));
})())){
return new cljs.core.Keyword(null,"blue","blue",-622100620);
} else {
if(cljs.core.truth_((function (){var G__96098 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"config","config",994861415));
var G__96099 = expr__96090;
return (pred__96089.cljs$core$IFn$_invoke$arity$2 ? pred__96089.cljs$core$IFn$_invoke$arity$2(G__96098,G__96099) : pred__96089.call(null,G__96098,G__96099));
})())){
return new cljs.core.Keyword(null,"green","green",-945526839);
} else {
if(cljs.core.truth_((function (){var G__96100 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"fine","fine",-873037193));
var G__96101 = expr__96090;
return (pred__96089.cljs$core$IFn$_invoke$arity$2 ? pred__96089.cljs$core$IFn$_invoke$arity$2(G__96100,G__96101) : pred__96089.call(null,G__96100,G__96101));
})())){
return new cljs.core.Keyword(null,"yellow","yellow",-881035449);
} else {
if(cljs.core.truth_((function (){var G__96102 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"finer","finer",974902846));
var G__96103 = expr__96090;
return (pred__96089.cljs$core$IFn$_invoke$arity$2 ? pred__96089.cljs$core$IFn$_invoke$arity$2(G__96102,G__96103) : pred__96089.call(null,G__96102,G__96103));
})())){
return new cljs.core.Keyword(null,"gray3","gray3",-617553786);
} else {
if(cljs.core.truth_((function (){var G__96104 = lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"finest","finest",-1359568890));
var G__96105 = expr__96090;
return (pred__96089.cljs$core$IFn$_invoke$arity$2 ? pred__96089.cljs$core$IFn$_invoke$arity$2(G__96104,G__96105) : pred__96089.call(null,G__96104,G__96105));
})())){
return new cljs.core.Keyword(null,"gray4","gray4",460735815);
} else {
return new cljs.core.Keyword(null,"gray2","gray2",-1424527469);
}
}
}
}
}
}
}
});
lambdaisland.glogi.print.add = (function lambdaisland$glogi$print$add(var_args){
var G__96107 = arguments.length;
switch (G__96107) {
case 2:
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$2 = (function (p__96108,s){
var vec__96109 = p__96108;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96109,(0),null);
var res_css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96109,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),res_css], null);
}));

(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3 = (function (p__96112,s,color){
var vec__96113 = p__96112;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96113,(0),null);
var res_css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96113,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res),"%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"%c"].join(''),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res_css,["color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.print.colors,color))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["color:black"], 0))], null);
}));

(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$4 = (function (p__96116,s,fg,bg){
var vec__96117 = p__96116;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96117,(0),null);
var res_css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96117,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res),"%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"%c"].join(''),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res_css,["color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.print.colors,fg)),";background-color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.print.colors,bg))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["color:black;background-color:inherit"], 0))], null);
}));

(lambdaisland.glogi.print.add.cljs$lang$maxFixedArity = 4);

lambdaisland.glogi.print.print_console_log_css = (function lambdaisland$glogi$print$print_console_log_css(res,value){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","comma","lambdaisland.glogi.print/comma",-725182078),value)){
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,", ",new cljs.core.Keyword(null,"gray2","gray2",-1424527469));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","space","lambdaisland.glogi.print/space",1682088588),value)){
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$2(res," ");
} else {
if((value instanceof cljs.core.Keyword)){
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,value,new cljs.core.Keyword(null,"blue","blue",-622100620));
} else {
if((value instanceof cljs.core.Symbol)){
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,value,new cljs.core.Keyword(null,"green","green",-945526839));
} else {
if(typeof value === 'string'){
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),new cljs.core.Keyword(null,"turqoise","turqoise",1674869457));
} else {
if(cljs.core.map_entry_QMARK_(value)){
var G__96122 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$2((function (){var G__96124 = res;
var G__96125 = cljs.core.key(value);
return (lambdaisland.glogi.print.print_console_log_css.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.glogi.print.print_console_log_css.cljs$core$IFn$_invoke$arity$2(G__96124,G__96125) : lambdaisland.glogi.print.print_console_log_css.call(null,G__96124,G__96125));
})()," ");
var G__96123 = cljs.core.val(value);
return (lambdaisland.glogi.print.print_console_log_css.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.glogi.print.print_console_log_css.cljs$core$IFn$_invoke$arity$2(G__96122,G__96123) : lambdaisland.glogi.print.print_console_log_css.call(null,G__96122,G__96123));
} else {
if((((value instanceof cljs.core.PersistentArrayMap)) || ((value instanceof cljs.core.PersistentHashMap)))){
var _PERCENT_ = res;
var _PERCENT___$1 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT_,"{",new cljs.core.Keyword(null,"purple","purple",-876021126));
var _PERCENT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(lambdaisland.glogi.print.print_console_log_css,_PERCENT___$1,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","comma","lambdaisland.glogi.print/comma",-725182078),value));
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$2,"}",new cljs.core.Keyword(null,"purple","purple",-876021126));
} else {
if(cljs.core.map_QMARK_(value)){
var _PERCENT_ = res;
var _PERCENT___$1 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT_,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var t = cljs.core.type(value);
var n = t.name;
if(cljs.core.empty_QMARK_(n)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0));
} else {
return n;
}
})())," "].join(''),new cljs.core.Keyword(null,"brown","brown",1414854429));
var _PERCENT___$2 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$1,"{",new cljs.core.Keyword(null,"purple","purple",-876021126));
var _PERCENT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(lambdaisland.glogi.print.print_console_log_css,_PERCENT___$2,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","comma","lambdaisland.glogi.print/comma",-725182078),value));
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$3,"}",new cljs.core.Keyword(null,"purple","purple",-876021126));
} else {
if(cljs.core.set_QMARK_(value)){
var _PERCENT_ = res;
var _PERCENT___$1 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT_,"#{",new cljs.core.Keyword(null,"purple","purple",-876021126));
var _PERCENT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(lambdaisland.glogi.print.print_console_log_css,_PERCENT___$1,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","space","lambdaisland.glogi.print/space",1682088588),value));
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$2,"}",new cljs.core.Keyword(null,"purple","purple",-876021126));
} else {
if(cljs.core.vector_QMARK_(value)){
var _PERCENT_ = res;
var _PERCENT___$1 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT_,"[",new cljs.core.Keyword(null,"purple","purple",-876021126));
var _PERCENT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(lambdaisland.glogi.print.print_console_log_css,_PERCENT___$1,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","space","lambdaisland.glogi.print/space",1682088588),value));
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$2,"]",new cljs.core.Keyword(null,"purple","purple",-876021126));
} else {
if((value instanceof cljs.core.PersistentQueue)){
var G__96131 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,"#queue ",new cljs.core.Keyword(null,"brown","brown",1414854429));
var G__96132 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,value);
res = G__96131;
value = G__96132;
continue;
} else {
if(cljs.core.seq_QMARK_(value)){
var _PERCENT_ = res;
var _PERCENT___$1 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT_,"(",new cljs.core.Keyword(null,"brown","brown",1414854429));
var _PERCENT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(lambdaisland.glogi.print.print_console_log_css,_PERCENT___$1,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lambdaisland.glogi.print","space","lambdaisland.glogi.print/space",1682088588),value));
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(_PERCENT___$2,")",new cljs.core.Keyword(null,"brown","brown",1414854429));
} else {
if((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IAtom$))))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value))){
var G__96133 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,"#atom ",new cljs.core.Keyword(null,"brown","brown",1414854429));
var G__96134 = cljs.core.deref(value);
res = G__96133;
value = G__96134;
continue;
} else {
if(cljs.core.uuid_QMARK_(value)){
var G__96135 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,"#uuid ",new cljs.core.Keyword(null,"brown","brown",1414854429));
var G__96136 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
res = G__96135;
value = G__96136;
continue;
} else {
if(cljs.core.object_QMARK_(value)){
var G__96137 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,"#js ",new cljs.core.Keyword(null,"brown","brown",1414854429));
var G__96138 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (res,value){
return (function (p1__96120_SHARP_,p2__96121_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__96120_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p2__96121_SHARP_),lambdaisland.glogi.print.goog$module$goog$object.get(value,p2__96121_SHARP_));
});})(res,value))
,cljs.core.PersistentArrayMap.EMPTY,Object.keys(value));
res = G__96137;
value = G__96138;
continue;
} else {
if(cljs.core.array_QMARK_(value)){
var G__96139 = lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,"#js ",new cljs.core.Keyword(null,"brown","brown",1414854429));
var G__96140 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,value);
res = G__96139;
value = G__96140;
continue;
} else {
return lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$3(res,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),new cljs.core.Keyword(null,"gray5","gray5",1481094938));

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
break;
}
});
lambdaisland.glogi.print.format = (function lambdaisland$glogi$print$format(level,logger_name,value){
var color = lambdaisland.glogi.print.level_color(level);
var vec__96127 = lambdaisland.glogi.print.print_console_log_css(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$4(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$4(lambdaisland.glogi.print.add.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentVector.EMPTY], null),"[",new cljs.core.Keyword(null,"white","white",-483998618),color),logger_name,new cljs.core.Keyword(null,"white","white",-483998618),color),"]",new cljs.core.Keyword(null,"white","white",-483998618),color)," "),value);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96127,(0),null);
var res_css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96127,(1),null);
return cljs.core.cons(res,res_css);
});

//# sourceMappingURL=lambdaisland.glogi.print.js.map
