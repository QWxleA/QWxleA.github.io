goog.provide('linked.core');
linked.core.map = (function linked$core$map(var_args){
var G__73275 = arguments.length;
switch (G__73275) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___73280 = arguments.length;
var i__4865__auto___73281 = (0);
while(true){
if((i__4865__auto___73281 < len__4864__auto___73280)){
args_arr__4885__auto__.push((arguments[i__4865__auto___73281]));

var G__73282 = (i__4865__auto___73281 + (1));
i__4865__auto___73281 = G__73282;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((0)),(0),null));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4886__auto__);

}
});

(linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
}));

(linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,linked.map.empty_linked_map,keyvals);
}));

/** @this {Function} */
(linked.core.map.cljs$lang$applyTo = (function (seq73274){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73274));
}));

(linked.core.map.cljs$lang$maxFixedArity = (0));

linked.core.set = (function linked$core$set(var_args){
var G__73278 = arguments.length;
switch (G__73278) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___73284 = arguments.length;
var i__4865__auto___73285 = (0);
while(true){
if((i__4865__auto___73285 < len__4864__auto___73284)){
args_arr__4885__auto__.push((arguments[i__4865__auto___73285]));

var G__73286 = (i__4865__auto___73285 + (1));
i__4865__auto___73285 = G__73286;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((0)),(0),null));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4886__auto__);

}
});

(linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
}));

(linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,linked.set.empty_linked_set,keys);
}));

/** @this {Function} */
(linked.core.set.cljs$lang$applyTo = (function (seq73277){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73277));
}));

(linked.core.set.cljs$lang$maxFixedArity = (0));


//# sourceMappingURL=linked.core.js.map
