goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__60563){
var vec__60564 = p__60563;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60564,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60564,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = (k instanceof cljs.core.Symbol);
if(and__5041__auto__){
var and__5041__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__5041__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__60571){
var map__60572 = p__60571;
var map__60572__$1 = cljs.core.__destructure_map(map__60572);
var _parsed_libspec = map__60572__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60572__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60572__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60572__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60572__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60572__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60572__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5043__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5718__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__60579 = temp__5718__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60579,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60579,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5720__auto___60689 = (function (){var G__60583 = the_loaded_ns;
var G__60583__$1 = (((G__60583 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__60583));
var G__60583__$2 = (((G__60583__$1 == null))?null:cljs.core.meta(G__60583__$1));
if((G__60583__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__60583__$2);
}
})();
if(cljs.core.truth_(temp__5720__auto___60689)){
var on_loaded_60690 = temp__5720__auto___60689;
var G__60584_60691 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_60690.cljs$core$IFn$_invoke$arity$1 ? on_loaded_60690.cljs$core$IFn$_invoke$arity$1(G__60584_60691) : on_loaded_60690.call(null,G__60584_60691));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var temp__5718__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var as_alias = temp__5718__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__60590 = opts;
var map__60590__$1 = cljs.core.__destructure_map(map__60590);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60590__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60590__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__5043__auto__ = reload;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = reload_all;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5718__auto___60694__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5718__auto___60694__$1)){
var the_loaded_ns_60695 = temp__5718__auto___60694__$1;
var loading_60696 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5041__auto__ = loading_60696;
if(cljs.core.truth_(and__5041__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib)))) && (cljs.core.nat_int_QMARK_(loading_60696.indexOf(lib))));
} else {
return and__5041__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_60696,lib);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_60695,lib,opts));
}
} else {
var temp__5718__auto___60697__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5718__auto___60697__$2)){
var load_fn_60698 = temp__5718__auto___60697__$2;
var temp__5718__auto___60700__$3 = (function (){var G__60592 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5043__auto__ = reload;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_60698.cljs$core$IFn$_invoke$arity$1 ? load_fn_60698.cljs$core$IFn$_invoke$arity$1(G__60592) : load_fn_60698.call(null,G__60592));
})();
if(cljs.core.truth_(temp__5718__auto___60700__$3)){
var map__60593_60701 = temp__5718__auto___60700__$3;
var map__60593_60702__$1 = cljs.core.__destructure_map(map__60593_60701);
var file_60703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60593_60702__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_60704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60593_60702__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var ctx_60706__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib);
}
}));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file_60703]));

try{var fexpr__60614_60707 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__60614_60707.cljs$core$IFn$_invoke$arity$2 ? fexpr__60614_60707.cljs$core$IFn$_invoke$arity$2(ctx_60706__$1,source_60704) : fexpr__60614_60707.call(null,ctx_60706__$1,source_60704));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e60613){if((e60613 instanceof Error)){
var e_60708 = e60613;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_60708;
} else {
throw e60613;

}
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__5043__auto___60710 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5720__auto__)){
var the_loaded_ns = temp__5720__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5043__auto___60710)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib);

return null;
}
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5772__auto__ = [];
var len__5766__auto___60711 = arguments.length;
var i__5767__auto___60712 = (0);
while(true){
if((i__5767__auto___60712 < len__5766__auto___60711)){
args__5772__auto__.push((arguments[i__5767__auto___60712]));

var G__60713 = (i__5767__auto___60712 + (1));
i__5767__auto___60712 = G__60713;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5041__auto__ = prefix;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5041__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq60623){
var G__60624 = cljs.core.first(seq60623);
var seq60623__$1 = cljs.core.next(seq60623);
var G__60625 = cljs.core.first(seq60623__$1);
var seq60623__$2 = cljs.core.next(seq60623__$1);
var G__60626 = cljs.core.first(seq60623__$2);
var seq60623__$3 = cljs.core.next(seq60623__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60624,G__60625,G__60626,seq60623__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_60715 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_60716 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_60715,flags));
if(unsupported_60716){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_60716)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__60631 = cljs.core.seq(args_STAR___$1);
var chunk__60632 = null;
var count__60633 = (0);
var i__60634 = (0);
while(true){
if((i__60634 < count__60633)){
var arg = chunk__60632.cljs$core$IIndexed$_nth$arity$2(null,i__60634);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__60649_60719 = arg;
var seq__60650_60720 = cljs.core.seq(vec__60649_60719);
var first__60651_60721 = cljs.core.first(seq__60650_60720);
var seq__60650_60722__$1 = cljs.core.next(seq__60650_60720);
var prefix_60723 = first__60651_60721;
var args_STAR__60724__$2 = seq__60650_60722__$1;
if((prefix_60723 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__60652_60725 = cljs.core.seq(args_STAR__60724__$2);
var chunk__60653_60726 = null;
var count__60654_60727 = (0);
var i__60655_60728 = (0);
while(true){
if((i__60655_60728 < count__60654_60727)){
var arg_60729__$1 = chunk__60653_60726.cljs$core$IIndexed$_nth$arity$2(null,i__60655_60728);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_60723,sci.impl.load.prependss(arg_60729__$1,opts));


var G__60730 = seq__60652_60725;
var G__60731 = chunk__60653_60726;
var G__60732 = count__60654_60727;
var G__60733 = (i__60655_60728 + (1));
seq__60652_60725 = G__60730;
chunk__60653_60726 = G__60731;
count__60654_60727 = G__60732;
i__60655_60728 = G__60733;
continue;
} else {
var temp__5720__auto___60734 = cljs.core.seq(seq__60652_60725);
if(temp__5720__auto___60734){
var seq__60652_60735__$1 = temp__5720__auto___60734;
if(cljs.core.chunked_seq_QMARK_(seq__60652_60735__$1)){
var c__5565__auto___60736 = cljs.core.chunk_first(seq__60652_60735__$1);
var G__60737 = cljs.core.chunk_rest(seq__60652_60735__$1);
var G__60738 = c__5565__auto___60736;
var G__60739 = cljs.core.count(c__5565__auto___60736);
var G__60740 = (0);
seq__60652_60725 = G__60737;
chunk__60653_60726 = G__60738;
count__60654_60727 = G__60739;
i__60655_60728 = G__60740;
continue;
} else {
var arg_60741__$1 = cljs.core.first(seq__60652_60735__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_60723,sci.impl.load.prependss(arg_60741__$1,opts));


var G__60742 = cljs.core.next(seq__60652_60735__$1);
var G__60743 = null;
var G__60744 = (0);
var G__60745 = (0);
seq__60652_60725 = G__60742;
chunk__60653_60726 = G__60743;
count__60654_60727 = G__60744;
i__60655_60728 = G__60745;
continue;
}
} else {
}
}
break;
}
}


var G__60746 = seq__60631;
var G__60747 = chunk__60632;
var G__60748 = count__60633;
var G__60749 = (i__60634 + (1));
seq__60631 = G__60746;
chunk__60632 = G__60747;
count__60633 = G__60748;
i__60634 = G__60749;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60631);
if(temp__5720__auto__){
var seq__60631__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60631__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__60631__$1);
var G__60750 = cljs.core.chunk_rest(seq__60631__$1);
var G__60751 = c__5565__auto__;
var G__60752 = cljs.core.count(c__5565__auto__);
var G__60753 = (0);
seq__60631 = G__60750;
chunk__60632 = G__60751;
count__60633 = G__60752;
i__60634 = G__60753;
continue;
} else {
var arg = cljs.core.first(seq__60631__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__60656_60754 = arg;
var seq__60657_60755 = cljs.core.seq(vec__60656_60754);
var first__60658_60756 = cljs.core.first(seq__60657_60755);
var seq__60657_60757__$1 = cljs.core.next(seq__60657_60755);
var prefix_60758 = first__60658_60756;
var args_STAR__60759__$2 = seq__60657_60757__$1;
if((prefix_60758 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__60659_60760 = cljs.core.seq(args_STAR__60759__$2);
var chunk__60660_60761 = null;
var count__60661_60762 = (0);
var i__60662_60763 = (0);
while(true){
if((i__60662_60763 < count__60661_60762)){
var arg_60764__$1 = chunk__60660_60761.cljs$core$IIndexed$_nth$arity$2(null,i__60662_60763);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_60758,sci.impl.load.prependss(arg_60764__$1,opts));


var G__60765 = seq__60659_60760;
var G__60766 = chunk__60660_60761;
var G__60767 = count__60661_60762;
var G__60768 = (i__60662_60763 + (1));
seq__60659_60760 = G__60765;
chunk__60660_60761 = G__60766;
count__60661_60762 = G__60767;
i__60662_60763 = G__60768;
continue;
} else {
var temp__5720__auto___60769__$1 = cljs.core.seq(seq__60659_60760);
if(temp__5720__auto___60769__$1){
var seq__60659_60770__$1 = temp__5720__auto___60769__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60659_60770__$1)){
var c__5565__auto___60771 = cljs.core.chunk_first(seq__60659_60770__$1);
var G__60772 = cljs.core.chunk_rest(seq__60659_60770__$1);
var G__60773 = c__5565__auto___60771;
var G__60774 = cljs.core.count(c__5565__auto___60771);
var G__60775 = (0);
seq__60659_60760 = G__60772;
chunk__60660_60761 = G__60773;
count__60661_60762 = G__60774;
i__60662_60763 = G__60775;
continue;
} else {
var arg_60776__$1 = cljs.core.first(seq__60659_60770__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_60758,sci.impl.load.prependss(arg_60776__$1,opts));


var G__60777 = cljs.core.next(seq__60659_60770__$1);
var G__60778 = null;
var G__60779 = (0);
var G__60780 = (0);
seq__60659_60760 = G__60777;
chunk__60660_60761 = G__60778;
count__60661_60762 = G__60779;
i__60662_60763 = G__60780;
continue;
}
} else {
}
}
break;
}
}


var G__60781 = cljs.core.next(seq__60631__$1);
var G__60782 = null;
var G__60783 = (0);
var G__60784 = (0);
seq__60631 = G__60781;
chunk__60632 = G__60782;
count__60633 = G__60783;
i__60634 = G__60784;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5772__auto__ = [];
var len__5766__auto___60786 = arguments.length;
var i__5767__auto___60790 = (0);
while(true){
if((i__5767__auto___60790 < len__5766__auto___60786)){
args__5772__auto__.push((arguments[i__5767__auto___60790]));

var G__60791 = (i__5767__auto___60790 + (1));
i__5767__auto___60790 = G__60791;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq60663){
var G__60664 = cljs.core.first(seq60663);
var seq60663__$1 = cljs.core.next(seq60663);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60664,seq60663__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5772__auto__ = [];
var len__5766__auto___60792 = arguments.length;
var i__5767__auto___60793 = (0);
while(true){
if((i__5767__auto___60793 < len__5766__auto___60792)){
args__5772__auto__.push((arguments[i__5767__auto___60793]));

var G__60794 = (i__5767__auto___60793 + (1));
i__5767__auto___60793 = G__60794;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq60666){
var G__60668 = cljs.core.first(seq60666);
var seq60666__$1 = cljs.core.next(seq60666);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60668,seq60666__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__60670 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60670,(1),null);
var G__60673_60796 = k;
var G__60673_60797__$1 = (((G__60673_60796 instanceof cljs.core.Keyword))?G__60673_60796.fqn:null);
switch (G__60673_60797__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__60673_60796,G__60673_60797__$1,vec__60670,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__60673_60796,G__60673_60797__$1,vec__60670,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__60673_60796,G__60673_60797__$1,vec__60670,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__60673_60796,G__60673_60797__$1,vec__60670,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__60673_60796,G__60673_60797__$1,vec__60670,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__60673_60796,G__60673_60797__$1,vec__60670,k,v,ns_sym){
return (function (acc,p__60674){
var vec__60675 = p__60674;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60675,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60675,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__60673_60796,G__60673_60797__$1,vec__60670,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__60673_60796,G__60673_60797__$1,vec__60670,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60673_60797__$1)].join('')));

}

var G__60802 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__60802;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5041__auto__ = to_do;
if(cljs.core.truth_(and__5041__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5041__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5043__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5772__auto__ = [];
var len__5766__auto___60807 = arguments.length;
var i__5767__auto___60808 = (0);
while(true){
if((i__5767__auto___60808 < len__5766__auto___60807)){
args__5772__auto__.push((arguments[i__5767__auto___60808]));

var G__60810 = (i__5767__auto___60808 + (1));
i__5767__auto___60808 = G__60810;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq60682){
var G__60683 = cljs.core.first(seq60682);
var seq60682__$1 = cljs.core.next(seq60682);
var G__60684 = cljs.core.first(seq60682__$1);
var seq60682__$2 = cljs.core.next(seq60682__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60683,G__60684,seq60682__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
