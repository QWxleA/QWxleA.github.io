goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__61266 = arguments.length;
switch (G__61266) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__61275 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__61276 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__61276);

try{var G__61277 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__61277);

return G__61277;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__61275);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__61282 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__61283 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__61283);

try{var G__61285 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__61285);

return G__61285;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__61282);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__61303 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__61304 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__61304);

try{var G__61305 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__61305);

return G__61305;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__61303);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__61307 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__61308 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__61308);

try{var G__61309 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__61309);

return G__61309;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__61307);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__61346 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__61348 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61348);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61346);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61498 = arguments.length;
var i__5767__auto___61499 = (0);
while(true){
if((i__5767__auto___61499 < len__5766__auto___61498)){
args__5772__auto__.push((arguments[i__5767__auto___61499]));

var G__61500 = (i__5767__auto___61499 + (1));
i__5767__auto___61499 = G__61500;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__61366 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__61367 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__61368 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__61369 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__61370 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__61371 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__61372 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__61373 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__61374 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__61375 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__61376 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__61377 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__61378 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__61379 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61373);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__61374);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__61375);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__61376);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__61377);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__61378);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61379);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61372);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__61371);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__61370);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__61369);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__61368);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__61367);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61366);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq61352){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61352));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__61384 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__61385 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61385);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61384);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61501 = arguments.length;
var i__5767__auto___61502 = (0);
while(true){
if((i__5767__auto___61502 < len__5766__auto___61501)){
args__5772__auto__.push((arguments[i__5767__auto___61502]));

var G__61504 = (i__5767__auto___61502 + (1));
i__5767__auto___61502 = G__61504;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__61391 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__61392 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__61393 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__61394 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__61395 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__61396 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__61397 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__61398 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__61399 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__61400 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__61401 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__61402 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__61397);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__61398);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__61399);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__61400);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__61401);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61402);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61396);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__61395);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__61394);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__61393);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__61392);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__61391);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq61386){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61386));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61507 = arguments.length;
var i__5767__auto___61508 = (0);
while(true){
if((i__5767__auto___61508 < len__5766__auto___61507)){
args__5772__auto__.push((arguments[i__5767__auto___61508]));

var G__61509 = (i__5767__auto___61508 + (1));
i__5767__auto___61508 = G__61509;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__61405 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__61406 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__61407 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__61408 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__61409 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__61410 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__61411 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__61412 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__61413 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__61414 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__61415 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__61416 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__61417 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__61418 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61412);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__61413);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__61414);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__61415);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__61416);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__61417);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61418);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61411);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__61410);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__61409);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__61408);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__61407);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__61406);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61405);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq61403){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61403));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61511 = arguments.length;
var i__5767__auto___61512 = (0);
while(true){
if((i__5767__auto___61512 < len__5766__auto___61511)){
args__5772__auto__.push((arguments[i__5767__auto___61512]));

var G__61513 = (i__5767__auto___61512 + (1));
i__5767__auto___61512 = G__61513;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__61425 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__61426 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__61427 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__61428 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__61429 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__61430 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__61431 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__61432 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__61433 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__61434 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__61435 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__61436 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__61431);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__61432);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__61433);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__61434);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__61435);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61436);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61430);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__61429);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__61428);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__61427);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__61426);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__61425);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq61419){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61419));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61516 = arguments.length;
var i__5767__auto___61517 = (0);
while(true){
if((i__5767__auto___61517 < len__5766__auto___61516)){
args__5772__auto__.push((arguments[i__5767__auto___61517]));

var G__61518 = (i__5767__auto___61517 + (1));
i__5767__auto___61517 = G__61518;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__61443 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__61444 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__61445 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__61446 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__61447 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__61448 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__61449 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__61450 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__61451 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__61452 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__61453 = null;
var _STAR_print_newline_STAR__temp_val__61454 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61449);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__61450);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__61451);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__61452);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__61453);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61454);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61448);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__61447);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__61446);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__61445);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__61444);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61443);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq61441){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61441));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61529 = arguments.length;
var i__5767__auto___61530 = (0);
while(true){
if((i__5767__auto___61530 < len__5766__auto___61529)){
args__5772__auto__.push((arguments[i__5767__auto___61530]));

var G__61532 = (i__5767__auto___61530 + (1));
i__5767__auto___61530 = G__61532;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__61457 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__61458 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__61459 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__61460 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__61461 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__61462 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__61463 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__61464 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__61465 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__61466 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__61467 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__61468 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__61463);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__61464);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__61465);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__61466);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__61467);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61468);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61462);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__61461);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__61460);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__61459);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__61458);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__61457);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq61455){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61455));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61533 = arguments.length;
var i__5767__auto___61535 = (0);
while(true){
if((i__5767__auto___61535 < len__5766__auto___61533)){
args__5772__auto__.push((arguments[i__5767__auto___61535]));

var G__61537 = (i__5767__auto___61535 + (1));
i__5767__auto___61535 = G__61537;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__61473 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__61474 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__61475 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__61476 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__61477 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__61478 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__61479 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__61480 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__61481 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__61482 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__61483 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__61484 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__61485 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__61486 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61480);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__61481);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__61482);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__61483);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__61484);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__61485);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61486);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61479);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__61478);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__61477);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__61476);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__61475);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__61474);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61473);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq61472){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61472));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61538 = arguments.length;
var i__5767__auto___61539 = (0);
while(true){
if((i__5767__auto___61539 < len__5766__auto___61538)){
args__5772__auto__.push((arguments[i__5767__auto___61539]));

var G__61540 = (i__5767__auto___61539 + (1));
i__5767__auto___61539 = G__61540;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__61487__auto__","s__61487__auto__",1493882079,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__61488__auto__","x__61488__auto__",524284022,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__61487__auto__","s__61487__auto__",1493882079,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__61488__auto__","x__61488__auto__",524284022,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__61487__auto__","s__61487__auto__",1493882079,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq61489){
var G__61490 = cljs.core.first(seq61489);
var seq61489__$1 = cljs.core.next(seq61489);
var G__61491 = cljs.core.first(seq61489__$1);
var seq61489__$2 = cljs.core.next(seq61489__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61490,G__61491,seq61489__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
