goog.provide('linked.core');
linked.core.map = (function linked$core$map(var_args){
var G__59015 = arguments.length;
switch (G__59015) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___59023 = arguments.length;
var i__5767__auto___59024 = (0);
while(true){
if((i__5767__auto___59024 < len__5766__auto___59023)){
args_arr__5791__auto__.push((arguments[i__5767__auto___59024]));

var G__59025 = (i__5767__auto___59024 + (1));
i__5767__auto___59024 = G__59025;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((0)),(0),null));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5792__auto__);

}
});

(linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
}));

(linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,linked.map.empty_linked_map,keyvals);
}));

/** @this {Function} */
(linked.core.map.cljs$lang$applyTo = (function (seq59014){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59014));
}));

(linked.core.map.cljs$lang$maxFixedArity = (0));

linked.core.set = (function linked$core$set(var_args){
var G__59019 = arguments.length;
switch (G__59019) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___59027 = arguments.length;
var i__5767__auto___59028 = (0);
while(true){
if((i__5767__auto___59028 < len__5766__auto___59027)){
args_arr__5791__auto__.push((arguments[i__5767__auto___59028]));

var G__59029 = (i__5767__auto___59028 + (1));
i__5767__auto___59028 = G__59029;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((0)),(0),null));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5792__auto__);

}
});

(linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
}));

(linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,linked.set.empty_linked_set,keys);
}));

/** @this {Function} */
(linked.core.set.cljs$lang$applyTo = (function (seq59018){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59018));
}));

(linked.core.set.cljs$lang$maxFixedArity = (0));


//# sourceMappingURL=linked.core.js.map
