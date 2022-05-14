goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__75544 = arguments.length;
switch (G__75544) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__75556 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__75557 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__75557);

try{var G__75558 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__75558);

return G__75558;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__75556);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__75559 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__75560 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__75560);

try{var G__75563 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__75563);

return G__75563;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__75559);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__75565 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__75566 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__75566);

try{var G__75567 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__75567);

return G__75567;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__75565);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__75568 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__75569 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__75569);

try{var G__75571 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__75571);

return G__75571;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__75568);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__75580 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__75582 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75582);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75580);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75774 = arguments.length;
var i__4865__auto___75775 = (0);
while(true){
if((i__4865__auto___75775 < len__4864__auto___75774)){
args__4870__auto__.push((arguments[i__4865__auto___75775]));

var G__75776 = (i__4865__auto___75775 + (1));
i__4865__auto___75775 = G__75776;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__75618 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__75619 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75620 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75621 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75622 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75623 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75624 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__75625 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__75626 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75627 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75628 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75629 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75630 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75631 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75625);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75626);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75627);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75628);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75629);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75630);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75631);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75624);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75623);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75622);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75621);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75620);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75619);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75618);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq75598){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75598));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__75633 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__75634 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75634);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75633);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75778 = arguments.length;
var i__4865__auto___75779 = (0);
while(true){
if((i__4865__auto___75779 < len__4864__auto___75778)){
args__4870__auto__.push((arguments[i__4865__auto___75779]));

var G__75781 = (i__4865__auto___75779 + (1));
i__4865__auto___75779 = G__75781;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75640 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75641 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75642 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75643 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75644 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75645 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__75646 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75647 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75648 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75649 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75650 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75651 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75646);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75647);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75648);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75649);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75650);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75651);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75645);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75644);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75643);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75642);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75641);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75640);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq75637){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75637));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75975 = arguments.length;
var i__4865__auto___75976 = (0);
while(true){
if((i__4865__auto___75976 < len__4864__auto___75975)){
args__4870__auto__.push((arguments[i__4865__auto___75976]));

var G__75977 = (i__4865__auto___75976 + (1));
i__4865__auto___75976 = G__75977;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__75654 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__75655 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75656 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75657 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75658 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75659 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75660 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__75661 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__75662 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75663 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75664 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75665 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75666 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75667 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75661);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75662);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75663);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75664);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75665);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75666);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75667);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75660);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75659);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75658);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75657);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75656);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75655);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75654);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq75653){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75653));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75978 = arguments.length;
var i__4865__auto___75979 = (0);
while(true){
if((i__4865__auto___75979 < len__4864__auto___75978)){
args__4870__auto__.push((arguments[i__4865__auto___75979]));

var G__75980 = (i__4865__auto___75979 + (1));
i__4865__auto___75979 = G__75980;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75677 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75678 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75679 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75680 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75681 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75682 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__75683 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75684 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75685 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75686 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75687 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75688 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75683);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75684);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75685);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75686);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75687);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75688);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75682);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75681);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75680);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75679);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75678);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75677);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq75675){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75675));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75993 = arguments.length;
var i__4865__auto___75994 = (0);
while(true){
if((i__4865__auto___75994 < len__4864__auto___75993)){
args__4870__auto__.push((arguments[i__4865__auto___75994]));

var G__75995 = (i__4865__auto___75994 + (1));
i__4865__auto___75994 = G__75995;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__75695 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__75696 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75697 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75698 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75699 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75700 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__75701 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__75702 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75703 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__75704 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75705 = null;
var _STAR_print_newline_STAR__temp_val__75706 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75701);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75702);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75703);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75704);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75705);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75706);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75700);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75699);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75698);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75697);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75696);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75695);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq75691){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75691));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75997 = arguments.length;
var i__4865__auto___75998 = (0);
while(true){
if((i__4865__auto___75998 < len__4864__auto___75997)){
args__4870__auto__.push((arguments[i__4865__auto___75998]));

var G__75999 = (i__4865__auto___75998 + (1));
i__4865__auto___75998 = G__75999;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__75709 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75710 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75711 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75712 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75713 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75714 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__75715 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75716 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75717 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75718 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75719 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75720 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75715);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75716);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75717);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75718);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75719);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75720);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75714);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75713);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75712);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75711);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75710);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75709);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq75707){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75707));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76005 = arguments.length;
var i__4865__auto___76006 = (0);
while(true){
if((i__4865__auto___76006 < len__4864__auto___76005)){
args__4870__auto__.push((arguments[i__4865__auto___76006]));

var G__76007 = (i__4865__auto___76006 + (1));
i__4865__auto___76006 = G__76007;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__75729 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__75730 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__75731 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__75732 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__75733 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__75734 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__75735 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__75736 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__75737 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__75738 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__75739 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__75740 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__75741 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__75742 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75736);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__75737);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__75738);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75739);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__75740);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__75741);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75742);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75735);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__75734);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__75733);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75732);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__75731);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__75730);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75729);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq75726){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75726));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___76014 = arguments.length;
var i__4865__auto___76015 = (0);
while(true){
if((i__4865__auto___76015 < len__4864__auto___76014)){
args__4870__auto__.push((arguments[i__4865__auto___76015]));

var G__76016 = (i__4865__auto___76015 + (1));
i__4865__auto___76015 = G__76016;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__75745__auto__","s__75745__auto__",-435176321,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__75746__auto__","x__75746__auto__",-1202755935,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__75745__auto__","s__75745__auto__",-435176321,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__75746__auto__","x__75746__auto__",-1202755935,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__75745__auto__","s__75745__auto__",-435176321,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq75748){
var G__75749 = cljs.core.first(seq75748);
var seq75748__$1 = cljs.core.next(seq75748);
var G__75750 = cljs.core.first(seq75748__$1);
var seq75748__$2 = cljs.core.next(seq75748__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75749,G__75750,seq75748__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
