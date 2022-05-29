goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__49210 = arguments.length;
switch (G__49210) {
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
var map__49213 = opts;
var map__49213__$1 = cljs.core.__destructure_map(map__49213);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49213__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49213__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__49215 = cljs.core.count(refs);
switch (G__49215) {
case (1):
var vec__49216 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49216,(0),null);
return (function (){
var G__49219 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49219) : f.call(null,G__49219));
});

break;
case (2):
var vec__49220 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49220,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49220,(1),null);
return (function (){
var G__49223 = cljs.core.deref(a);
var G__49224 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__49223,G__49224) : f.call(null,G__49223,G__49224));
});

break;
case (3):
var vec__49233 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49233,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49233,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49233,(2),null);
return (function (){
var G__49246 = cljs.core.deref(a);
var G__49247 = cljs.core.deref(b);
var G__49248 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__49246,G__49247,G__49248) : f.call(null,G__49246,G__49247,G__49248));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__49258 = ref;
cljs.core.reset_BANG_(G__49258,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__49258;
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
var seq__49262_49278 = cljs.core.seq(refs);
var chunk__49264_49279 = null;
var count__49266_49280 = (0);
var i__49267_49281 = (0);
while(true){
if((i__49267_49281 < count__49266_49280)){
var ref_49282__$1 = chunk__49264_49279.cljs$core$IIndexed$_nth$arity$2(null,i__49267_49281);
cljs.core.add_watch(ref_49282__$1,key,watch);


var G__49283 = seq__49262_49278;
var G__49284 = chunk__49264_49279;
var G__49285 = count__49266_49280;
var G__49286 = (i__49267_49281 + (1));
seq__49262_49278 = G__49283;
chunk__49264_49279 = G__49284;
count__49266_49280 = G__49285;
i__49267_49281 = G__49286;
continue;
} else {
var temp__5720__auto___49287 = cljs.core.seq(seq__49262_49278);
if(temp__5720__auto___49287){
var seq__49262_49288__$1 = temp__5720__auto___49287;
if(cljs.core.chunked_seq_QMARK_(seq__49262_49288__$1)){
var c__5565__auto___49289 = cljs.core.chunk_first(seq__49262_49288__$1);
var G__49290 = cljs.core.chunk_rest(seq__49262_49288__$1);
var G__49291 = c__5565__auto___49289;
var G__49292 = cljs.core.count(c__5565__auto___49289);
var G__49293 = (0);
seq__49262_49278 = G__49290;
chunk__49264_49279 = G__49291;
count__49266_49280 = G__49292;
i__49267_49281 = G__49293;
continue;
} else {
var ref_49294__$1 = cljs.core.first(seq__49262_49288__$1);
cljs.core.add_watch(ref_49294__$1,key,watch);


var G__49295 = cljs.core.next(seq__49262_49288__$1);
var G__49296 = null;
var G__49297 = (0);
var G__49298 = (0);
seq__49262_49278 = G__49295;
chunk__49264_49279 = G__49296;
count__49266_49280 = G__49297;
i__49267_49281 = G__49298;
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
