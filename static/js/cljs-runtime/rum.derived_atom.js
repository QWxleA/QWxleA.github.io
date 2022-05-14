goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__63473 = arguments.length;
switch (G__63473) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__63493 = opts;
var map__63493__$1 = cljs.core.__destructure_map(map__63493);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63493__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63493__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__63495 = cljs.core.count(refs);
switch (G__63495) {
case (1):
var vec__63496 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63496,(0),null);
return (function (){
var G__63500 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63500) : f.call(null,G__63500));
});

break;
case (2):
var vec__63501 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63501,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63501,(1),null);
return (function (){
var G__63504 = cljs.core.deref(a);
var G__63505 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__63504,G__63505) : f.call(null,G__63504,G__63505));
});

break;
case (3):
var vec__63514 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63514,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63514,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63514,(2),null);
return (function (){
var G__63517 = cljs.core.deref(a);
var G__63518 = cljs.core.deref(b);
var G__63519 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__63517,G__63518,G__63519) : f.call(null,G__63517,G__63518,G__63519));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__63522 = ref;
cljs.core.reset_BANG_(G__63522,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__63522;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__63526_63558 = cljs.core.seq(refs);
var chunk__63527_63559 = null;
var count__63528_63560 = (0);
var i__63529_63561 = (0);
while(true){
if((i__63529_63561 < count__63528_63560)){
var ref_63562__$1 = chunk__63527_63559.cljs$core$IIndexed$_nth$arity$2(null,i__63529_63561);
cljs.core.add_watch(ref_63562__$1,key,watch);


var G__63563 = seq__63526_63558;
var G__63564 = chunk__63527_63559;
var G__63565 = count__63528_63560;
var G__63566 = (i__63529_63561 + (1));
seq__63526_63558 = G__63563;
chunk__63527_63559 = G__63564;
count__63528_63560 = G__63565;
i__63529_63561 = G__63566;
continue;
} else {
var temp__5720__auto___63567 = cljs.core.seq(seq__63526_63558);
if(temp__5720__auto___63567){
var seq__63526_63568__$1 = temp__5720__auto___63567;
if(cljs.core.chunked_seq_QMARK_(seq__63526_63568__$1)){
var c__4679__auto___63569 = cljs.core.chunk_first(seq__63526_63568__$1);
var G__63570 = cljs.core.chunk_rest(seq__63526_63568__$1);
var G__63571 = c__4679__auto___63569;
var G__63572 = cljs.core.count(c__4679__auto___63569);
var G__63573 = (0);
seq__63526_63558 = G__63570;
chunk__63527_63559 = G__63571;
count__63528_63560 = G__63572;
i__63529_63561 = G__63573;
continue;
} else {
var ref_63574__$1 = cljs.core.first(seq__63526_63568__$1);
cljs.core.add_watch(ref_63574__$1,key,watch);


var G__63575 = cljs.core.next(seq__63526_63568__$1);
var G__63576 = null;
var G__63577 = (0);
var G__63578 = (0);
seq__63526_63558 = G__63575;
chunk__63527_63559 = G__63576;
count__63528_63560 = G__63577;
i__63529_63561 = G__63578;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map
