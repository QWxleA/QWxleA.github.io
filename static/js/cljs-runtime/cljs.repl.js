goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47962){
var map__47963 = p__47962;
var map__47963__$1 = cljs.core.__destructure_map(map__47963);
var m = map__47963__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47963__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47964_48308 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47965_48309 = null;
var count__47966_48310 = (0);
var i__47967_48311 = (0);
while(true){
if((i__47967_48311 < count__47966_48310)){
var f_48312 = chunk__47965_48309.cljs$core$IIndexed$_nth$arity$2(null,i__47967_48311);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48312], 0));


var G__48313 = seq__47964_48308;
var G__48314 = chunk__47965_48309;
var G__48315 = count__47966_48310;
var G__48316 = (i__47967_48311 + (1));
seq__47964_48308 = G__48313;
chunk__47965_48309 = G__48314;
count__47966_48310 = G__48315;
i__47967_48311 = G__48316;
continue;
} else {
var temp__5720__auto___48317 = cljs.core.seq(seq__47964_48308);
if(temp__5720__auto___48317){
var seq__47964_48318__$1 = temp__5720__auto___48317;
if(cljs.core.chunked_seq_QMARK_(seq__47964_48318__$1)){
var c__5565__auto___48319 = cljs.core.chunk_first(seq__47964_48318__$1);
var G__48320 = cljs.core.chunk_rest(seq__47964_48318__$1);
var G__48321 = c__5565__auto___48319;
var G__48322 = cljs.core.count(c__5565__auto___48319);
var G__48323 = (0);
seq__47964_48308 = G__48320;
chunk__47965_48309 = G__48321;
count__47966_48310 = G__48322;
i__47967_48311 = G__48323;
continue;
} else {
var f_48324 = cljs.core.first(seq__47964_48318__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48324], 0));


var G__48325 = cljs.core.next(seq__47964_48318__$1);
var G__48326 = null;
var G__48327 = (0);
var G__48328 = (0);
seq__47964_48308 = G__48325;
chunk__47965_48309 = G__48326;
count__47966_48310 = G__48327;
i__47967_48311 = G__48328;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48329 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_48329], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_48329)))?cljs.core.second(arglists_48329):arglists_48329)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47968_48366 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47969_48367 = null;
var count__47970_48368 = (0);
var i__47971_48369 = (0);
while(true){
if((i__47971_48369 < count__47970_48368)){
var vec__47984_48374 = chunk__47969_48367.cljs$core$IIndexed$_nth$arity$2(null,i__47971_48369);
var name_48375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47984_48374,(0),null);
var map__47987_48376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47984_48374,(1),null);
var map__47987_48377__$1 = cljs.core.__destructure_map(map__47987_48376);
var doc_48378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47987_48377__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47987_48377__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48375], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48379], 0));

if(cljs.core.truth_(doc_48378)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48378], 0));
} else {
}


var G__48384 = seq__47968_48366;
var G__48385 = chunk__47969_48367;
var G__48386 = count__47970_48368;
var G__48387 = (i__47971_48369 + (1));
seq__47968_48366 = G__48384;
chunk__47969_48367 = G__48385;
count__47970_48368 = G__48386;
i__47971_48369 = G__48387;
continue;
} else {
var temp__5720__auto___48388 = cljs.core.seq(seq__47968_48366);
if(temp__5720__auto___48388){
var seq__47968_48389__$1 = temp__5720__auto___48388;
if(cljs.core.chunked_seq_QMARK_(seq__47968_48389__$1)){
var c__5565__auto___48390 = cljs.core.chunk_first(seq__47968_48389__$1);
var G__48391 = cljs.core.chunk_rest(seq__47968_48389__$1);
var G__48392 = c__5565__auto___48390;
var G__48393 = cljs.core.count(c__5565__auto___48390);
var G__48394 = (0);
seq__47968_48366 = G__48391;
chunk__47969_48367 = G__48392;
count__47970_48368 = G__48393;
i__47971_48369 = G__48394;
continue;
} else {
var vec__47992_48395 = cljs.core.first(seq__47968_48389__$1);
var name_48396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47992_48395,(0),null);
var map__47995_48397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47992_48395,(1),null);
var map__47995_48398__$1 = cljs.core.__destructure_map(map__47995_48397);
var doc_48399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47995_48398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47995_48398__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48396], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48400], 0));

if(cljs.core.truth_(doc_48399)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48399], 0));
} else {
}


var G__48401 = cljs.core.next(seq__47968_48389__$1);
var G__48402 = null;
var G__48403 = (0);
var G__48404 = (0);
seq__47968_48366 = G__48401;
chunk__47969_48367 = G__48402;
count__47970_48368 = G__48403;
i__47971_48369 = G__48404;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__48003 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48004 = null;
var count__48005 = (0);
var i__48006 = (0);
while(true){
if((i__48006 < count__48005)){
var role = chunk__48004.cljs$core$IIndexed$_nth$arity$2(null,i__48006);
var temp__5720__auto___48406__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___48406__$1)){
var spec_48408 = temp__5720__auto___48406__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48408)], 0));
} else {
}


var G__48409 = seq__48003;
var G__48410 = chunk__48004;
var G__48411 = count__48005;
var G__48412 = (i__48006 + (1));
seq__48003 = G__48409;
chunk__48004 = G__48410;
count__48005 = G__48411;
i__48006 = G__48412;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__48003);
if(temp__5720__auto____$1){
var seq__48003__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__48003__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__48003__$1);
var G__48416 = cljs.core.chunk_rest(seq__48003__$1);
var G__48417 = c__5565__auto__;
var G__48418 = cljs.core.count(c__5565__auto__);
var G__48419 = (0);
seq__48003 = G__48416;
chunk__48004 = G__48417;
count__48005 = G__48418;
i__48006 = G__48419;
continue;
} else {
var role = cljs.core.first(seq__48003__$1);
var temp__5720__auto___48425__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___48425__$2)){
var spec_48426 = temp__5720__auto___48425__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48426)], 0));
} else {
}


var G__48427 = cljs.core.next(seq__48003__$1);
var G__48428 = null;
var G__48429 = (0);
var G__48430 = (0);
seq__48003 = G__48427;
chunk__48004 = G__48428;
count__48005 = G__48429;
i__48006 = G__48430;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__48460 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__48461 = cljs.core.ex_cause(t);
via = G__48460;
t = G__48461;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__48032 = datafied_throwable;
var map__48032__$1 = cljs.core.__destructure_map(map__48032);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48032__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48032__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48032__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__48038 = cljs.core.last(via);
var map__48038__$1 = cljs.core.__destructure_map(map__48038);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48038__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48038__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48038__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__48039 = data;
var map__48039__$1 = cljs.core.__destructure_map(map__48039);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48039__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48039__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48039__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__48040 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__48040__$1 = cljs.core.__destructure_map(map__48040);
var top_data = map__48040__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48040__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__48043 = phase;
var G__48043__$1 = (((G__48043 instanceof cljs.core.Keyword))?G__48043.fqn:null);
switch (G__48043__$1) {
case "read-source":
var map__48045 = data;
var map__48045__$1 = cljs.core.__destructure_map(map__48045);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48045__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48045__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__48048 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__48048__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48048,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48048);
var G__48048__$2 = (cljs.core.truth_((function (){var fexpr__48049 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48049.cljs$core$IFn$_invoke$arity$1 ? fexpr__48049.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48049.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48048__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48048__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48048__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48048__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__48052 = top_data;
var G__48052__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48052,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48052);
var G__48052__$2 = (cljs.core.truth_((function (){var fexpr__48072 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48072.cljs$core$IFn$_invoke$arity$1 ? fexpr__48072.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48072.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48052__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48052__$1);
var G__48052__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48052__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48052__$2);
var G__48052__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48052__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48052__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48052__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48052__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__48082 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48082,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48082,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48082,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48082,(3),null);
var G__48089 = top_data;
var G__48089__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48089,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__48089);
var G__48089__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48089__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__48089__$1);
var G__48089__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48089__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__48089__$2);
var G__48089__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48089__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48089__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48089__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48089__$4;
}

break;
case "execution":
var vec__48115 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48115,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48115,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48115,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48115,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48027_SHARP_){
var or__5043__auto__ = (p1__48027_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__48127 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48127.cljs$core$IFn$_invoke$arity$1 ? fexpr__48127.cljs$core$IFn$_invoke$arity$1(p1__48027_SHARP_) : fexpr__48127.call(null,p1__48027_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__48136 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__48136__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48136,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__48136);
var G__48136__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48136__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48136__$1);
var G__48136__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48136__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__48136__$2);
var G__48136__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48136__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__48136__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48136__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48136__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48043__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__48179){
var map__48181 = p__48179;
var map__48181__$1 = cljs.core.__destructure_map(map__48181);
var triage_data = map__48181__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48181__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48181__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48181__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48181__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48181__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48181__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48181__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48181__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__48201 = phase;
var G__48201__$1 = (((G__48201 instanceof cljs.core.Keyword))?G__48201.fqn:null);
switch (G__48201__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__48220 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__48221 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48222 = loc;
var G__48223 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48231_48502 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48232_48503 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48233_48504 = true;
var _STAR_print_fn_STAR__temp_val__48234_48505 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48233_48504);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48234_48505);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48167_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48167_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48232_48503);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48231_48502);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48220,G__48221,G__48222,G__48223) : format.call(null,G__48220,G__48221,G__48222,G__48223));

break;
case "macroexpansion":
var G__48247 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__48248 = cause_type;
var G__48249 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48250 = loc;
var G__48251 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48247,G__48248,G__48249,G__48250,G__48251) : format.call(null,G__48247,G__48248,G__48249,G__48250,G__48251));

break;
case "compile-syntax-check":
var G__48254 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__48255 = cause_type;
var G__48256 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48257 = loc;
var G__48258 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48254,G__48255,G__48256,G__48257,G__48258) : format.call(null,G__48254,G__48255,G__48256,G__48257,G__48258));

break;
case "compilation":
var G__48260 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__48261 = cause_type;
var G__48262 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48263 = loc;
var G__48264 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48260,G__48261,G__48262,G__48263,G__48264) : format.call(null,G__48260,G__48261,G__48262,G__48263,G__48264));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__48273 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__48274 = symbol;
var G__48275 = loc;
var G__48276 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48277_48531 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48278_48532 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48279_48533 = true;
var _STAR_print_fn_STAR__temp_val__48280_48534 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48279_48533);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48280_48534);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48169_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48169_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48278_48532);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48277_48531);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48273,G__48274,G__48275,G__48276) : format.call(null,G__48273,G__48274,G__48275,G__48276));
} else {
var G__48299 = "Execution error%s at %s(%s).\n%s\n";
var G__48300 = cause_type;
var G__48301 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48302 = loc;
var G__48303 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48299,G__48300,G__48301,G__48302,G__48303) : format.call(null,G__48299,G__48300,G__48301,G__48302,G__48303));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48201__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
