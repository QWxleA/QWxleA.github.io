goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var self_ref_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__63283 = (fixed_arity | (0));
switch (G__63283) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__63284){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__63284);

while(true){
var ret__61887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61887__auto__)){
continue;
} else {
return ret__61887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__63284 = null;
if (arguments.length > 0) {
var G__64185__i = 0, G__64185__a = new Array(arguments.length -  0);
while (G__64185__i < G__64185__a.length) {G__64185__a[G__64185__i] = arguments[G__64185__i + 0]; ++G__64185__i;}
  G__63284 = new cljs.core.IndexedSeq(G__64185__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__63284);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__64186){
var G__63284 = cljs.core.seq(arglist__64186);
return sci$impl$fns$fun_$_arity_0__delegate(G__63284);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__63287 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__63285,G__63286){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63285);

(invoc_array[vararg_idx] = G__63286);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__63285,var_args){
var G__63286 = null;
if (arguments.length > 1) {
var G__64187__i = 0, G__64187__a = new Array(arguments.length -  1);
while (G__64187__i < G__64187__a.length) {G__64187__a[G__64187__i] = arguments[G__64187__i + 1]; ++G__64187__i;}
  G__63286 = new cljs.core.IndexedSeq(G__64187__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__63285,G__63286);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__64188){
var G__63285 = cljs.core.first(arglist__64188);
var G__63286 = cljs.core.rest(arglist__64188);
return sci$impl$fns$fun_$_arity_1__delegate(G__63285,G__63286);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__63291 = cljs.core._nth(params,(0));
var G__63292 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__63288,G__63289,G__63290){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63288);

(invoc_array[(1)] = G__63289);

(invoc_array[vararg_idx] = G__63290);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__63288,G__63289,var_args){
var G__63290 = null;
if (arguments.length > 2) {
var G__64189__i = 0, G__64189__a = new Array(arguments.length -  2);
while (G__64189__i < G__64189__a.length) {G__64189__a[G__64189__i] = arguments[G__64189__i + 2]; ++G__64189__i;}
  G__63290 = new cljs.core.IndexedSeq(G__64189__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__63288,G__63289,G__63290);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__64190){
var G__63288 = cljs.core.first(arglist__64190);
arglist__64190 = cljs.core.next(arglist__64190);
var G__63289 = cljs.core.first(arglist__64190);
var G__63290 = cljs.core.rest(arglist__64190);
return sci$impl$fns$fun_$_arity_2__delegate(G__63288,G__63289,G__63290);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__63298 = cljs.core._nth(params,(0));
var G__63300 = cljs.core._nth(params,(1));
var G__63301 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__63294,G__63295,G__63296,G__63297){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63294);

(invoc_array[(1)] = G__63295);

(invoc_array[(2)] = G__63296);

(invoc_array[vararg_idx] = G__63297);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__63294,G__63295,G__63296,var_args){
var G__63297 = null;
if (arguments.length > 3) {
var G__64195__i = 0, G__64195__a = new Array(arguments.length -  3);
while (G__64195__i < G__64195__a.length) {G__64195__a[G__64195__i] = arguments[G__64195__i + 3]; ++G__64195__i;}
  G__63297 = new cljs.core.IndexedSeq(G__64195__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__63294,G__63295,G__63296,G__63297);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__64196){
var G__63294 = cljs.core.first(arglist__64196);
arglist__64196 = cljs.core.next(arglist__64196);
var G__63295 = cljs.core.first(arglist__64196);
arglist__64196 = cljs.core.next(arglist__64196);
var G__63296 = cljs.core.first(arglist__64196);
var G__63297 = cljs.core.rest(arglist__64196);
return sci$impl$fns$fun_$_arity_3__delegate(G__63294,G__63295,G__63296,G__63297);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__63308 = cljs.core._nth(params,(0));
var G__63309 = cljs.core._nth(params,(1));
var G__63310 = cljs.core._nth(params,(2));
var G__63311 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__63303,G__63304,G__63305,G__63306,G__63307){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63303);

(invoc_array[(1)] = G__63304);

(invoc_array[(2)] = G__63305);

(invoc_array[(3)] = G__63306);

(invoc_array[vararg_idx] = G__63307);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__63303,G__63304,G__63305,G__63306,var_args){
var G__63307 = null;
if (arguments.length > 4) {
var G__64200__i = 0, G__64200__a = new Array(arguments.length -  4);
while (G__64200__i < G__64200__a.length) {G__64200__a[G__64200__i] = arguments[G__64200__i + 4]; ++G__64200__i;}
  G__63307 = new cljs.core.IndexedSeq(G__64200__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__63303,G__63304,G__63305,G__63306,G__63307);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__64201){
var G__63303 = cljs.core.first(arglist__64201);
arglist__64201 = cljs.core.next(arglist__64201);
var G__63304 = cljs.core.first(arglist__64201);
arglist__64201 = cljs.core.next(arglist__64201);
var G__63305 = cljs.core.first(arglist__64201);
arglist__64201 = cljs.core.next(arglist__64201);
var G__63306 = cljs.core.first(arglist__64201);
var G__63307 = cljs.core.rest(arglist__64201);
return sci$impl$fns$fun_$_arity_4__delegate(G__63303,G__63304,G__63305,G__63306,G__63307);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__63322 = cljs.core._nth(params,(0));
var G__63323 = cljs.core._nth(params,(1));
var G__63324 = cljs.core._nth(params,(2));
var G__63325 = cljs.core._nth(params,(3));
var G__63326 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__63316,G__63317,G__63318,G__63319,G__63320,G__63321){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63316);

(invoc_array[(1)] = G__63317);

(invoc_array[(2)] = G__63318);

(invoc_array[(3)] = G__63319);

(invoc_array[(4)] = G__63320);

(invoc_array[vararg_idx] = G__63321);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__63316,G__63317,G__63318,G__63319,G__63320,var_args){
var G__63321 = null;
if (arguments.length > 5) {
var G__64202__i = 0, G__64202__a = new Array(arguments.length -  5);
while (G__64202__i < G__64202__a.length) {G__64202__a[G__64202__i] = arguments[G__64202__i + 5]; ++G__64202__i;}
  G__63321 = new cljs.core.IndexedSeq(G__64202__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__63316,G__63317,G__63318,G__63319,G__63320,G__63321);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__64204){
var G__63316 = cljs.core.first(arglist__64204);
arglist__64204 = cljs.core.next(arglist__64204);
var G__63317 = cljs.core.first(arglist__64204);
arglist__64204 = cljs.core.next(arglist__64204);
var G__63318 = cljs.core.first(arglist__64204);
arglist__64204 = cljs.core.next(arglist__64204);
var G__63319 = cljs.core.first(arglist__64204);
arglist__64204 = cljs.core.next(arglist__64204);
var G__63320 = cljs.core.first(arglist__64204);
var G__63321 = cljs.core.rest(arglist__64204);
return sci$impl$fns$fun_$_arity_5__delegate(G__63316,G__63317,G__63318,G__63319,G__63320,G__63321);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__63334 = cljs.core._nth(params,(0));
var G__63335 = cljs.core._nth(params,(1));
var G__63336 = cljs.core._nth(params,(2));
var G__63337 = cljs.core._nth(params,(3));
var G__63338 = cljs.core._nth(params,(4));
var G__63339 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__63327,G__63328,G__63329,G__63330,G__63331,G__63332,G__63333){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63327);

(invoc_array[(1)] = G__63328);

(invoc_array[(2)] = G__63329);

(invoc_array[(3)] = G__63330);

(invoc_array[(4)] = G__63331);

(invoc_array[(5)] = G__63332);

(invoc_array[vararg_idx] = G__63333);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__63327,G__63328,G__63329,G__63330,G__63331,G__63332,var_args){
var G__63333 = null;
if (arguments.length > 6) {
var G__64205__i = 0, G__64205__a = new Array(arguments.length -  6);
while (G__64205__i < G__64205__a.length) {G__64205__a[G__64205__i] = arguments[G__64205__i + 6]; ++G__64205__i;}
  G__63333 = new cljs.core.IndexedSeq(G__64205__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__63327,G__63328,G__63329,G__63330,G__63331,G__63332,G__63333);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__64206){
var G__63327 = cljs.core.first(arglist__64206);
arglist__64206 = cljs.core.next(arglist__64206);
var G__63328 = cljs.core.first(arglist__64206);
arglist__64206 = cljs.core.next(arglist__64206);
var G__63329 = cljs.core.first(arglist__64206);
arglist__64206 = cljs.core.next(arglist__64206);
var G__63330 = cljs.core.first(arglist__64206);
arglist__64206 = cljs.core.next(arglist__64206);
var G__63331 = cljs.core.first(arglist__64206);
arglist__64206 = cljs.core.next(arglist__64206);
var G__63332 = cljs.core.first(arglist__64206);
var G__63333 = cljs.core.rest(arglist__64206);
return sci$impl$fns$fun_$_arity_6__delegate(G__63327,G__63328,G__63329,G__63330,G__63331,G__63332,G__63333);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__63348 = cljs.core._nth(params,(0));
var G__63349 = cljs.core._nth(params,(1));
var G__63350 = cljs.core._nth(params,(2));
var G__63351 = cljs.core._nth(params,(3));
var G__63352 = cljs.core._nth(params,(4));
var G__63353 = cljs.core._nth(params,(5));
var G__63354 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__63340,G__63341,G__63342,G__63343,G__63344,G__63345,G__63346,G__63347){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63340);

(invoc_array[(1)] = G__63341);

(invoc_array[(2)] = G__63342);

(invoc_array[(3)] = G__63343);

(invoc_array[(4)] = G__63344);

(invoc_array[(5)] = G__63345);

(invoc_array[(6)] = G__63346);

(invoc_array[vararg_idx] = G__63347);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__63340,G__63341,G__63342,G__63343,G__63344,G__63345,G__63346,var_args){
var G__63347 = null;
if (arguments.length > 7) {
var G__64207__i = 0, G__64207__a = new Array(arguments.length -  7);
while (G__64207__i < G__64207__a.length) {G__64207__a[G__64207__i] = arguments[G__64207__i + 7]; ++G__64207__i;}
  G__63347 = new cljs.core.IndexedSeq(G__64207__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__63340,G__63341,G__63342,G__63343,G__63344,G__63345,G__63346,G__63347);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__64208){
var G__63340 = cljs.core.first(arglist__64208);
arglist__64208 = cljs.core.next(arglist__64208);
var G__63341 = cljs.core.first(arglist__64208);
arglist__64208 = cljs.core.next(arglist__64208);
var G__63342 = cljs.core.first(arglist__64208);
arglist__64208 = cljs.core.next(arglist__64208);
var G__63343 = cljs.core.first(arglist__64208);
arglist__64208 = cljs.core.next(arglist__64208);
var G__63344 = cljs.core.first(arglist__64208);
arglist__64208 = cljs.core.next(arglist__64208);
var G__63345 = cljs.core.first(arglist__64208);
arglist__64208 = cljs.core.next(arglist__64208);
var G__63346 = cljs.core.first(arglist__64208);
var G__63347 = cljs.core.rest(arglist__64208);
return sci$impl$fns$fun_$_arity_7__delegate(G__63340,G__63341,G__63342,G__63343,G__63344,G__63345,G__63346,G__63347);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__63365 = cljs.core._nth(params,(0));
var G__63366 = cljs.core._nth(params,(1));
var G__63367 = cljs.core._nth(params,(2));
var G__63368 = cljs.core._nth(params,(3));
var G__63369 = cljs.core._nth(params,(4));
var G__63370 = cljs.core._nth(params,(5));
var G__63371 = cljs.core._nth(params,(6));
var G__63372 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__63356,G__63357,G__63358,G__63359,G__63360,G__63361,G__63362,G__63363,G__63364){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63356);

(invoc_array[(1)] = G__63357);

(invoc_array[(2)] = G__63358);

(invoc_array[(3)] = G__63359);

(invoc_array[(4)] = G__63360);

(invoc_array[(5)] = G__63361);

(invoc_array[(6)] = G__63362);

(invoc_array[(7)] = G__63363);

(invoc_array[vararg_idx] = G__63364);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__63356,G__63357,G__63358,G__63359,G__63360,G__63361,G__63362,G__63363,var_args){
var G__63364 = null;
if (arguments.length > 8) {
var G__64209__i = 0, G__64209__a = new Array(arguments.length -  8);
while (G__64209__i < G__64209__a.length) {G__64209__a[G__64209__i] = arguments[G__64209__i + 8]; ++G__64209__i;}
  G__63364 = new cljs.core.IndexedSeq(G__64209__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__63356,G__63357,G__63358,G__63359,G__63360,G__63361,G__63362,G__63363,G__63364);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__64210){
var G__63356 = cljs.core.first(arglist__64210);
arglist__64210 = cljs.core.next(arglist__64210);
var G__63357 = cljs.core.first(arglist__64210);
arglist__64210 = cljs.core.next(arglist__64210);
var G__63358 = cljs.core.first(arglist__64210);
arglist__64210 = cljs.core.next(arglist__64210);
var G__63359 = cljs.core.first(arglist__64210);
arglist__64210 = cljs.core.next(arglist__64210);
var G__63360 = cljs.core.first(arglist__64210);
arglist__64210 = cljs.core.next(arglist__64210);
var G__63361 = cljs.core.first(arglist__64210);
arglist__64210 = cljs.core.next(arglist__64210);
var G__63362 = cljs.core.first(arglist__64210);
arglist__64210 = cljs.core.next(arglist__64210);
var G__63363 = cljs.core.first(arglist__64210);
var G__63364 = cljs.core.rest(arglist__64210);
return sci$impl$fns$fun_$_arity_8__delegate(G__63356,G__63357,G__63358,G__63359,G__63360,G__63361,G__63362,G__63363,G__63364);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__63383 = cljs.core._nth(params,(0));
var G__63384 = cljs.core._nth(params,(1));
var G__63385 = cljs.core._nth(params,(2));
var G__63386 = cljs.core._nth(params,(3));
var G__63387 = cljs.core._nth(params,(4));
var G__63388 = cljs.core._nth(params,(5));
var G__63389 = cljs.core._nth(params,(6));
var G__63390 = cljs.core._nth(params,(7));
var G__63391 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__63373,G__63374,G__63375,G__63376,G__63377,G__63378,G__63379,G__63380,G__63381,G__63382){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63373);

(invoc_array[(1)] = G__63374);

(invoc_array[(2)] = G__63375);

(invoc_array[(3)] = G__63376);

(invoc_array[(4)] = G__63377);

(invoc_array[(5)] = G__63378);

(invoc_array[(6)] = G__63379);

(invoc_array[(7)] = G__63380);

(invoc_array[(8)] = G__63381);

(invoc_array[vararg_idx] = G__63382);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__63373,G__63374,G__63375,G__63376,G__63377,G__63378,G__63379,G__63380,G__63381,var_args){
var G__63382 = null;
if (arguments.length > 9) {
var G__64211__i = 0, G__64211__a = new Array(arguments.length -  9);
while (G__64211__i < G__64211__a.length) {G__64211__a[G__64211__i] = arguments[G__64211__i + 9]; ++G__64211__i;}
  G__63382 = new cljs.core.IndexedSeq(G__64211__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__63373,G__63374,G__63375,G__63376,G__63377,G__63378,G__63379,G__63380,G__63381,G__63382);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__64212){
var G__63373 = cljs.core.first(arglist__64212);
arglist__64212 = cljs.core.next(arglist__64212);
var G__63374 = cljs.core.first(arglist__64212);
arglist__64212 = cljs.core.next(arglist__64212);
var G__63375 = cljs.core.first(arglist__64212);
arglist__64212 = cljs.core.next(arglist__64212);
var G__63376 = cljs.core.first(arglist__64212);
arglist__64212 = cljs.core.next(arglist__64212);
var G__63377 = cljs.core.first(arglist__64212);
arglist__64212 = cljs.core.next(arglist__64212);
var G__63378 = cljs.core.first(arglist__64212);
arglist__64212 = cljs.core.next(arglist__64212);
var G__63379 = cljs.core.first(arglist__64212);
arglist__64212 = cljs.core.next(arglist__64212);
var G__63380 = cljs.core.first(arglist__64212);
arglist__64212 = cljs.core.next(arglist__64212);
var G__63381 = cljs.core.first(arglist__64212);
var G__63382 = cljs.core.rest(arglist__64212);
return sci$impl$fns$fun_$_arity_9__delegate(G__63373,G__63374,G__63375,G__63376,G__63377,G__63378,G__63379,G__63380,G__63381,G__63382);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__63403 = cljs.core._nth(params,(0));
var G__63404 = cljs.core._nth(params,(1));
var G__63405 = cljs.core._nth(params,(2));
var G__63406 = cljs.core._nth(params,(3));
var G__63407 = cljs.core._nth(params,(4));
var G__63408 = cljs.core._nth(params,(5));
var G__63409 = cljs.core._nth(params,(6));
var G__63410 = cljs.core._nth(params,(7));
var G__63411 = cljs.core._nth(params,(8));
var G__63412 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__63392,G__63393,G__63394,G__63395,G__63396,G__63397,G__63398,G__63399,G__63400,G__63401,G__63402){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63392);

(invoc_array[(1)] = G__63393);

(invoc_array[(2)] = G__63394);

(invoc_array[(3)] = G__63395);

(invoc_array[(4)] = G__63396);

(invoc_array[(5)] = G__63397);

(invoc_array[(6)] = G__63398);

(invoc_array[(7)] = G__63399);

(invoc_array[(8)] = G__63400);

(invoc_array[(9)] = G__63401);

(invoc_array[vararg_idx] = G__63402);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__63392,G__63393,G__63394,G__63395,G__63396,G__63397,G__63398,G__63399,G__63400,G__63401,var_args){
var G__63402 = null;
if (arguments.length > 10) {
var G__64215__i = 0, G__64215__a = new Array(arguments.length -  10);
while (G__64215__i < G__64215__a.length) {G__64215__a[G__64215__i] = arguments[G__64215__i + 10]; ++G__64215__i;}
  G__63402 = new cljs.core.IndexedSeq(G__64215__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__63392,G__63393,G__63394,G__63395,G__63396,G__63397,G__63398,G__63399,G__63400,G__63401,G__63402);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__64216){
var G__63392 = cljs.core.first(arglist__64216);
arglist__64216 = cljs.core.next(arglist__64216);
var G__63393 = cljs.core.first(arglist__64216);
arglist__64216 = cljs.core.next(arglist__64216);
var G__63394 = cljs.core.first(arglist__64216);
arglist__64216 = cljs.core.next(arglist__64216);
var G__63395 = cljs.core.first(arglist__64216);
arglist__64216 = cljs.core.next(arglist__64216);
var G__63396 = cljs.core.first(arglist__64216);
arglist__64216 = cljs.core.next(arglist__64216);
var G__63397 = cljs.core.first(arglist__64216);
arglist__64216 = cljs.core.next(arglist__64216);
var G__63398 = cljs.core.first(arglist__64216);
arglist__64216 = cljs.core.next(arglist__64216);
var G__63399 = cljs.core.first(arglist__64216);
arglist__64216 = cljs.core.next(arglist__64216);
var G__63400 = cljs.core.first(arglist__64216);
arglist__64216 = cljs.core.next(arglist__64216);
var G__63401 = cljs.core.first(arglist__64216);
var G__63402 = cljs.core.rest(arglist__64216);
return sci$impl$fns$fun_$_arity_10__delegate(G__63392,G__63393,G__63394,G__63395,G__63396,G__63397,G__63398,G__63399,G__63400,G__63401,G__63402);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__63425 = cljs.core._nth(params,(0));
var G__63426 = cljs.core._nth(params,(1));
var G__63427 = cljs.core._nth(params,(2));
var G__63428 = cljs.core._nth(params,(3));
var G__63429 = cljs.core._nth(params,(4));
var G__63430 = cljs.core._nth(params,(5));
var G__63431 = cljs.core._nth(params,(6));
var G__63432 = cljs.core._nth(params,(7));
var G__63433 = cljs.core._nth(params,(8));
var G__63434 = cljs.core._nth(params,(9));
var G__63435 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__63413,G__63414,G__63415,G__63416,G__63417,G__63418,G__63419,G__63420,G__63421,G__63422,G__63423,G__63424){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63413);

(invoc_array[(1)] = G__63414);

(invoc_array[(2)] = G__63415);

(invoc_array[(3)] = G__63416);

(invoc_array[(4)] = G__63417);

(invoc_array[(5)] = G__63418);

(invoc_array[(6)] = G__63419);

(invoc_array[(7)] = G__63420);

(invoc_array[(8)] = G__63421);

(invoc_array[(9)] = G__63422);

(invoc_array[(10)] = G__63423);

(invoc_array[vararg_idx] = G__63424);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__63413,G__63414,G__63415,G__63416,G__63417,G__63418,G__63419,G__63420,G__63421,G__63422,G__63423,var_args){
var G__63424 = null;
if (arguments.length > 11) {
var G__64219__i = 0, G__64219__a = new Array(arguments.length -  11);
while (G__64219__i < G__64219__a.length) {G__64219__a[G__64219__i] = arguments[G__64219__i + 11]; ++G__64219__i;}
  G__63424 = new cljs.core.IndexedSeq(G__64219__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__63413,G__63414,G__63415,G__63416,G__63417,G__63418,G__63419,G__63420,G__63421,G__63422,G__63423,G__63424);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__64220){
var G__63413 = cljs.core.first(arglist__64220);
arglist__64220 = cljs.core.next(arglist__64220);
var G__63414 = cljs.core.first(arglist__64220);
arglist__64220 = cljs.core.next(arglist__64220);
var G__63415 = cljs.core.first(arglist__64220);
arglist__64220 = cljs.core.next(arglist__64220);
var G__63416 = cljs.core.first(arglist__64220);
arglist__64220 = cljs.core.next(arglist__64220);
var G__63417 = cljs.core.first(arglist__64220);
arglist__64220 = cljs.core.next(arglist__64220);
var G__63418 = cljs.core.first(arglist__64220);
arglist__64220 = cljs.core.next(arglist__64220);
var G__63419 = cljs.core.first(arglist__64220);
arglist__64220 = cljs.core.next(arglist__64220);
var G__63420 = cljs.core.first(arglist__64220);
arglist__64220 = cljs.core.next(arglist__64220);
var G__63421 = cljs.core.first(arglist__64220);
arglist__64220 = cljs.core.next(arglist__64220);
var G__63422 = cljs.core.first(arglist__64220);
arglist__64220 = cljs.core.next(arglist__64220);
var G__63423 = cljs.core.first(arglist__64220);
var G__63424 = cljs.core.rest(arglist__64220);
return sci$impl$fns$fun_$_arity_11__delegate(G__63413,G__63414,G__63415,G__63416,G__63417,G__63418,G__63419,G__63420,G__63421,G__63422,G__63423,G__63424);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__63454 = cljs.core._nth(params,(0));
var G__63455 = cljs.core._nth(params,(1));
var G__63456 = cljs.core._nth(params,(2));
var G__63457 = cljs.core._nth(params,(3));
var G__63458 = cljs.core._nth(params,(4));
var G__63459 = cljs.core._nth(params,(5));
var G__63460 = cljs.core._nth(params,(6));
var G__63461 = cljs.core._nth(params,(7));
var G__63462 = cljs.core._nth(params,(8));
var G__63463 = cljs.core._nth(params,(9));
var G__63464 = cljs.core._nth(params,(10));
var G__63465 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__63441,G__63442,G__63443,G__63444,G__63445,G__63446,G__63447,G__63448,G__63449,G__63450,G__63451,G__63452,G__63453){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63441);

(invoc_array[(1)] = G__63442);

(invoc_array[(2)] = G__63443);

(invoc_array[(3)] = G__63444);

(invoc_array[(4)] = G__63445);

(invoc_array[(5)] = G__63446);

(invoc_array[(6)] = G__63447);

(invoc_array[(7)] = G__63448);

(invoc_array[(8)] = G__63449);

(invoc_array[(9)] = G__63450);

(invoc_array[(10)] = G__63451);

(invoc_array[(11)] = G__63452);

(invoc_array[vararg_idx] = G__63453);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__63441,G__63442,G__63443,G__63444,G__63445,G__63446,G__63447,G__63448,G__63449,G__63450,G__63451,G__63452,var_args){
var G__63453 = null;
if (arguments.length > 12) {
var G__64224__i = 0, G__64224__a = new Array(arguments.length -  12);
while (G__64224__i < G__64224__a.length) {G__64224__a[G__64224__i] = arguments[G__64224__i + 12]; ++G__64224__i;}
  G__63453 = new cljs.core.IndexedSeq(G__64224__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__63441,G__63442,G__63443,G__63444,G__63445,G__63446,G__63447,G__63448,G__63449,G__63450,G__63451,G__63452,G__63453);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__64225){
var G__63441 = cljs.core.first(arglist__64225);
arglist__64225 = cljs.core.next(arglist__64225);
var G__63442 = cljs.core.first(arglist__64225);
arglist__64225 = cljs.core.next(arglist__64225);
var G__63443 = cljs.core.first(arglist__64225);
arglist__64225 = cljs.core.next(arglist__64225);
var G__63444 = cljs.core.first(arglist__64225);
arglist__64225 = cljs.core.next(arglist__64225);
var G__63445 = cljs.core.first(arglist__64225);
arglist__64225 = cljs.core.next(arglist__64225);
var G__63446 = cljs.core.first(arglist__64225);
arglist__64225 = cljs.core.next(arglist__64225);
var G__63447 = cljs.core.first(arglist__64225);
arglist__64225 = cljs.core.next(arglist__64225);
var G__63448 = cljs.core.first(arglist__64225);
arglist__64225 = cljs.core.next(arglist__64225);
var G__63449 = cljs.core.first(arglist__64225);
arglist__64225 = cljs.core.next(arglist__64225);
var G__63450 = cljs.core.first(arglist__64225);
arglist__64225 = cljs.core.next(arglist__64225);
var G__63451 = cljs.core.first(arglist__64225);
arglist__64225 = cljs.core.next(arglist__64225);
var G__63452 = cljs.core.first(arglist__64225);
var G__63453 = cljs.core.rest(arglist__64225);
return sci$impl$fns$fun_$_arity_12__delegate(G__63441,G__63442,G__63443,G__63444,G__63445,G__63446,G__63447,G__63448,G__63449,G__63450,G__63451,G__63452,G__63453);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__63480 = cljs.core._nth(params,(0));
var G__63481 = cljs.core._nth(params,(1));
var G__63482 = cljs.core._nth(params,(2));
var G__63483 = cljs.core._nth(params,(3));
var G__63484 = cljs.core._nth(params,(4));
var G__63485 = cljs.core._nth(params,(5));
var G__63486 = cljs.core._nth(params,(6));
var G__63487 = cljs.core._nth(params,(7));
var G__63488 = cljs.core._nth(params,(8));
var G__63489 = cljs.core._nth(params,(9));
var G__63490 = cljs.core._nth(params,(10));
var G__63491 = cljs.core._nth(params,(11));
var G__63492 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__63466,G__63467,G__63468,G__63469,G__63470,G__63471,G__63472,G__63473,G__63474,G__63475,G__63476,G__63477,G__63478,G__63479){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63466);

(invoc_array[(1)] = G__63467);

(invoc_array[(2)] = G__63468);

(invoc_array[(3)] = G__63469);

(invoc_array[(4)] = G__63470);

(invoc_array[(5)] = G__63471);

(invoc_array[(6)] = G__63472);

(invoc_array[(7)] = G__63473);

(invoc_array[(8)] = G__63474);

(invoc_array[(9)] = G__63475);

(invoc_array[(10)] = G__63476);

(invoc_array[(11)] = G__63477);

(invoc_array[(12)] = G__63478);

(invoc_array[vararg_idx] = G__63479);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__63466,G__63467,G__63468,G__63469,G__63470,G__63471,G__63472,G__63473,G__63474,G__63475,G__63476,G__63477,G__63478,var_args){
var G__63479 = null;
if (arguments.length > 13) {
var G__64227__i = 0, G__64227__a = new Array(arguments.length -  13);
while (G__64227__i < G__64227__a.length) {G__64227__a[G__64227__i] = arguments[G__64227__i + 13]; ++G__64227__i;}
  G__63479 = new cljs.core.IndexedSeq(G__64227__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__63466,G__63467,G__63468,G__63469,G__63470,G__63471,G__63472,G__63473,G__63474,G__63475,G__63476,G__63477,G__63478,G__63479);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__64228){
var G__63466 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63467 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63468 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63469 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63470 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63471 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63472 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63473 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63474 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63475 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63476 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63477 = cljs.core.first(arglist__64228);
arglist__64228 = cljs.core.next(arglist__64228);
var G__63478 = cljs.core.first(arglist__64228);
var G__63479 = cljs.core.rest(arglist__64228);
return sci$impl$fns$fun_$_arity_13__delegate(G__63466,G__63467,G__63468,G__63469,G__63470,G__63471,G__63472,G__63473,G__63474,G__63475,G__63476,G__63477,G__63478,G__63479);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__63509 = cljs.core._nth(params,(0));
var G__63510 = cljs.core._nth(params,(1));
var G__63511 = cljs.core._nth(params,(2));
var G__63512 = cljs.core._nth(params,(3));
var G__63513 = cljs.core._nth(params,(4));
var G__63514 = cljs.core._nth(params,(5));
var G__63515 = cljs.core._nth(params,(6));
var G__63516 = cljs.core._nth(params,(7));
var G__63517 = cljs.core._nth(params,(8));
var G__63518 = cljs.core._nth(params,(9));
var G__63519 = cljs.core._nth(params,(10));
var G__63520 = cljs.core._nth(params,(11));
var G__63521 = cljs.core._nth(params,(12));
var G__63522 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__63494,G__63495,G__63496,G__63497,G__63498,G__63499,G__63500,G__63501,G__63502,G__63503,G__63504,G__63505,G__63506,G__63507,G__63508){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63494);

(invoc_array[(1)] = G__63495);

(invoc_array[(2)] = G__63496);

(invoc_array[(3)] = G__63497);

(invoc_array[(4)] = G__63498);

(invoc_array[(5)] = G__63499);

(invoc_array[(6)] = G__63500);

(invoc_array[(7)] = G__63501);

(invoc_array[(8)] = G__63502);

(invoc_array[(9)] = G__63503);

(invoc_array[(10)] = G__63504);

(invoc_array[(11)] = G__63505);

(invoc_array[(12)] = G__63506);

(invoc_array[(13)] = G__63507);

(invoc_array[vararg_idx] = G__63508);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__63494,G__63495,G__63496,G__63497,G__63498,G__63499,G__63500,G__63501,G__63502,G__63503,G__63504,G__63505,G__63506,G__63507,var_args){
var G__63508 = null;
if (arguments.length > 14) {
var G__64233__i = 0, G__64233__a = new Array(arguments.length -  14);
while (G__64233__i < G__64233__a.length) {G__64233__a[G__64233__i] = arguments[G__64233__i + 14]; ++G__64233__i;}
  G__63508 = new cljs.core.IndexedSeq(G__64233__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__63494,G__63495,G__63496,G__63497,G__63498,G__63499,G__63500,G__63501,G__63502,G__63503,G__63504,G__63505,G__63506,G__63507,G__63508);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__64234){
var G__63494 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63495 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63496 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63497 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63498 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63499 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63500 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63501 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63502 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63503 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63504 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63505 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63506 = cljs.core.first(arglist__64234);
arglist__64234 = cljs.core.next(arglist__64234);
var G__63507 = cljs.core.first(arglist__64234);
var G__63508 = cljs.core.rest(arglist__64234);
return sci$impl$fns$fun_$_arity_14__delegate(G__63494,G__63495,G__63496,G__63497,G__63498,G__63499,G__63500,G__63501,G__63502,G__63503,G__63504,G__63505,G__63506,G__63507,G__63508);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__63541 = cljs.core._nth(params,(0));
var G__63542 = cljs.core._nth(params,(1));
var G__63543 = cljs.core._nth(params,(2));
var G__63544 = cljs.core._nth(params,(3));
var G__63545 = cljs.core._nth(params,(4));
var G__63546 = cljs.core._nth(params,(5));
var G__63547 = cljs.core._nth(params,(6));
var G__63548 = cljs.core._nth(params,(7));
var G__63549 = cljs.core._nth(params,(8));
var G__63550 = cljs.core._nth(params,(9));
var G__63551 = cljs.core._nth(params,(10));
var G__63552 = cljs.core._nth(params,(11));
var G__63553 = cljs.core._nth(params,(12));
var G__63554 = cljs.core._nth(params,(13));
var G__63555 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__63525,G__63526,G__63527,G__63528,G__63529,G__63530,G__63531,G__63532,G__63533,G__63534,G__63535,G__63536,G__63537,G__63538,G__63539,G__63540){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63525);

(invoc_array[(1)] = G__63526);

(invoc_array[(2)] = G__63527);

(invoc_array[(3)] = G__63528);

(invoc_array[(4)] = G__63529);

(invoc_array[(5)] = G__63530);

(invoc_array[(6)] = G__63531);

(invoc_array[(7)] = G__63532);

(invoc_array[(8)] = G__63533);

(invoc_array[(9)] = G__63534);

(invoc_array[(10)] = G__63535);

(invoc_array[(11)] = G__63536);

(invoc_array[(12)] = G__63537);

(invoc_array[(13)] = G__63538);

(invoc_array[(14)] = G__63539);

(invoc_array[vararg_idx] = G__63540);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__63525,G__63526,G__63527,G__63528,G__63529,G__63530,G__63531,G__63532,G__63533,G__63534,G__63535,G__63536,G__63537,G__63538,G__63539,var_args){
var G__63540 = null;
if (arguments.length > 15) {
var G__64240__i = 0, G__64240__a = new Array(arguments.length -  15);
while (G__64240__i < G__64240__a.length) {G__64240__a[G__64240__i] = arguments[G__64240__i + 15]; ++G__64240__i;}
  G__63540 = new cljs.core.IndexedSeq(G__64240__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__63525,G__63526,G__63527,G__63528,G__63529,G__63530,G__63531,G__63532,G__63533,G__63534,G__63535,G__63536,G__63537,G__63538,G__63539,G__63540);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__64241){
var G__63525 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63526 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63527 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63528 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63529 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63530 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63531 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63532 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63533 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63534 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63535 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63536 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63537 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63538 = cljs.core.first(arglist__64241);
arglist__64241 = cljs.core.next(arglist__64241);
var G__63539 = cljs.core.first(arglist__64241);
var G__63540 = cljs.core.rest(arglist__64241);
return sci$impl$fns$fun_$_arity_15__delegate(G__63525,G__63526,G__63527,G__63528,G__63529,G__63530,G__63531,G__63532,G__63533,G__63534,G__63535,G__63536,G__63537,G__63538,G__63539,G__63540);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__63574 = cljs.core._nth(params,(0));
var G__63575 = cljs.core._nth(params,(1));
var G__63576 = cljs.core._nth(params,(2));
var G__63577 = cljs.core._nth(params,(3));
var G__63578 = cljs.core._nth(params,(4));
var G__63579 = cljs.core._nth(params,(5));
var G__63580 = cljs.core._nth(params,(6));
var G__63581 = cljs.core._nth(params,(7));
var G__63582 = cljs.core._nth(params,(8));
var G__63583 = cljs.core._nth(params,(9));
var G__63584 = cljs.core._nth(params,(10));
var G__63585 = cljs.core._nth(params,(11));
var G__63586 = cljs.core._nth(params,(12));
var G__63587 = cljs.core._nth(params,(13));
var G__63588 = cljs.core._nth(params,(14));
var G__63589 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__63557,G__63558,G__63559,G__63560,G__63561,G__63562,G__63563,G__63564,G__63565,G__63566,G__63567,G__63568,G__63569,G__63570,G__63571,G__63572,G__63573){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63557);

(invoc_array[(1)] = G__63558);

(invoc_array[(2)] = G__63559);

(invoc_array[(3)] = G__63560);

(invoc_array[(4)] = G__63561);

(invoc_array[(5)] = G__63562);

(invoc_array[(6)] = G__63563);

(invoc_array[(7)] = G__63564);

(invoc_array[(8)] = G__63565);

(invoc_array[(9)] = G__63566);

(invoc_array[(10)] = G__63567);

(invoc_array[(11)] = G__63568);

(invoc_array[(12)] = G__63569);

(invoc_array[(13)] = G__63570);

(invoc_array[(14)] = G__63571);

(invoc_array[(15)] = G__63572);

(invoc_array[vararg_idx] = G__63573);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__63557,G__63558,G__63559,G__63560,G__63561,G__63562,G__63563,G__63564,G__63565,G__63566,G__63567,G__63568,G__63569,G__63570,G__63571,G__63572,var_args){
var G__63573 = null;
if (arguments.length > 16) {
var G__64245__i = 0, G__64245__a = new Array(arguments.length -  16);
while (G__64245__i < G__64245__a.length) {G__64245__a[G__64245__i] = arguments[G__64245__i + 16]; ++G__64245__i;}
  G__63573 = new cljs.core.IndexedSeq(G__64245__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__63557,G__63558,G__63559,G__63560,G__63561,G__63562,G__63563,G__63564,G__63565,G__63566,G__63567,G__63568,G__63569,G__63570,G__63571,G__63572,G__63573);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__64246){
var G__63557 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63558 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63559 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63560 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63561 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63562 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63563 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63564 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63565 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63566 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63567 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63568 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63569 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63570 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63571 = cljs.core.first(arglist__64246);
arglist__64246 = cljs.core.next(arglist__64246);
var G__63572 = cljs.core.first(arglist__64246);
var G__63573 = cljs.core.rest(arglist__64246);
return sci$impl$fns$fun_$_arity_16__delegate(G__63557,G__63558,G__63559,G__63560,G__63561,G__63562,G__63563,G__63564,G__63565,G__63566,G__63567,G__63568,G__63569,G__63570,G__63571,G__63572,G__63573);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__63608 = cljs.core._nth(params,(0));
var G__63609 = cljs.core._nth(params,(1));
var G__63610 = cljs.core._nth(params,(2));
var G__63611 = cljs.core._nth(params,(3));
var G__63612 = cljs.core._nth(params,(4));
var G__63613 = cljs.core._nth(params,(5));
var G__63614 = cljs.core._nth(params,(6));
var G__63615 = cljs.core._nth(params,(7));
var G__63616 = cljs.core._nth(params,(8));
var G__63617 = cljs.core._nth(params,(9));
var G__63618 = cljs.core._nth(params,(10));
var G__63619 = cljs.core._nth(params,(11));
var G__63620 = cljs.core._nth(params,(12));
var G__63621 = cljs.core._nth(params,(13));
var G__63622 = cljs.core._nth(params,(14));
var G__63623 = cljs.core._nth(params,(15));
var G__63624 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__63590,G__63591,G__63592,G__63593,G__63594,G__63595,G__63596,G__63597,G__63598,G__63599,G__63600,G__63601,G__63602,G__63603,G__63604,G__63605,G__63606,G__63607){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63590);

(invoc_array[(1)] = G__63591);

(invoc_array[(2)] = G__63592);

(invoc_array[(3)] = G__63593);

(invoc_array[(4)] = G__63594);

(invoc_array[(5)] = G__63595);

(invoc_array[(6)] = G__63596);

(invoc_array[(7)] = G__63597);

(invoc_array[(8)] = G__63598);

(invoc_array[(9)] = G__63599);

(invoc_array[(10)] = G__63600);

(invoc_array[(11)] = G__63601);

(invoc_array[(12)] = G__63602);

(invoc_array[(13)] = G__63603);

(invoc_array[(14)] = G__63604);

(invoc_array[(15)] = G__63605);

(invoc_array[(16)] = G__63606);

(invoc_array[vararg_idx] = G__63607);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__63590,G__63591,G__63592,G__63593,G__63594,G__63595,G__63596,G__63597,G__63598,G__63599,G__63600,G__63601,G__63602,G__63603,G__63604,G__63605,G__63606,var_args){
var G__63607 = null;
if (arguments.length > 17) {
var G__64247__i = 0, G__64247__a = new Array(arguments.length -  17);
while (G__64247__i < G__64247__a.length) {G__64247__a[G__64247__i] = arguments[G__64247__i + 17]; ++G__64247__i;}
  G__63607 = new cljs.core.IndexedSeq(G__64247__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__63590,G__63591,G__63592,G__63593,G__63594,G__63595,G__63596,G__63597,G__63598,G__63599,G__63600,G__63601,G__63602,G__63603,G__63604,G__63605,G__63606,G__63607);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__64248){
var G__63590 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63591 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63592 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63593 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63594 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63595 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63596 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63597 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63598 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63599 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63600 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63601 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63602 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63603 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63604 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63605 = cljs.core.first(arglist__64248);
arglist__64248 = cljs.core.next(arglist__64248);
var G__63606 = cljs.core.first(arglist__64248);
var G__63607 = cljs.core.rest(arglist__64248);
return sci$impl$fns$fun_$_arity_17__delegate(G__63590,G__63591,G__63592,G__63593,G__63594,G__63595,G__63596,G__63597,G__63598,G__63599,G__63600,G__63601,G__63602,G__63603,G__63604,G__63605,G__63606,G__63607);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__63644 = cljs.core._nth(params,(0));
var G__63645 = cljs.core._nth(params,(1));
var G__63646 = cljs.core._nth(params,(2));
var G__63647 = cljs.core._nth(params,(3));
var G__63648 = cljs.core._nth(params,(4));
var G__63649 = cljs.core._nth(params,(5));
var G__63650 = cljs.core._nth(params,(6));
var G__63651 = cljs.core._nth(params,(7));
var G__63652 = cljs.core._nth(params,(8));
var G__63653 = cljs.core._nth(params,(9));
var G__63654 = cljs.core._nth(params,(10));
var G__63655 = cljs.core._nth(params,(11));
var G__63656 = cljs.core._nth(params,(12));
var G__63657 = cljs.core._nth(params,(13));
var G__63658 = cljs.core._nth(params,(14));
var G__63659 = cljs.core._nth(params,(15));
var G__63660 = cljs.core._nth(params,(16));
var G__63661 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__63625,G__63626,G__63627,G__63628,G__63629,G__63630,G__63631,G__63632,G__63633,G__63634,G__63635,G__63636,G__63637,G__63638,G__63639,G__63640,G__63641,G__63642,G__63643){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63625);

(invoc_array[(1)] = G__63626);

(invoc_array[(2)] = G__63627);

(invoc_array[(3)] = G__63628);

(invoc_array[(4)] = G__63629);

(invoc_array[(5)] = G__63630);

(invoc_array[(6)] = G__63631);

(invoc_array[(7)] = G__63632);

(invoc_array[(8)] = G__63633);

(invoc_array[(9)] = G__63634);

(invoc_array[(10)] = G__63635);

(invoc_array[(11)] = G__63636);

(invoc_array[(12)] = G__63637);

(invoc_array[(13)] = G__63638);

(invoc_array[(14)] = G__63639);

(invoc_array[(15)] = G__63640);

(invoc_array[(16)] = G__63641);

(invoc_array[(17)] = G__63642);

(invoc_array[vararg_idx] = G__63643);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__63625,G__63626,G__63627,G__63628,G__63629,G__63630,G__63631,G__63632,G__63633,G__63634,G__63635,G__63636,G__63637,G__63638,G__63639,G__63640,G__63641,G__63642,var_args){
var G__63643 = null;
if (arguments.length > 18) {
var G__64251__i = 0, G__64251__a = new Array(arguments.length -  18);
while (G__64251__i < G__64251__a.length) {G__64251__a[G__64251__i] = arguments[G__64251__i + 18]; ++G__64251__i;}
  G__63643 = new cljs.core.IndexedSeq(G__64251__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__63625,G__63626,G__63627,G__63628,G__63629,G__63630,G__63631,G__63632,G__63633,G__63634,G__63635,G__63636,G__63637,G__63638,G__63639,G__63640,G__63641,G__63642,G__63643);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__64252){
var G__63625 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63626 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63627 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63628 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63629 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63630 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63631 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63632 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63633 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63634 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63635 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63636 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63637 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63638 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63639 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63640 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63641 = cljs.core.first(arglist__64252);
arglist__64252 = cljs.core.next(arglist__64252);
var G__63642 = cljs.core.first(arglist__64252);
var G__63643 = cljs.core.rest(arglist__64252);
return sci$impl$fns$fun_$_arity_18__delegate(G__63625,G__63626,G__63627,G__63628,G__63629,G__63630,G__63631,G__63632,G__63633,G__63634,G__63635,G__63636,G__63637,G__63638,G__63639,G__63640,G__63641,G__63642,G__63643);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__63682 = cljs.core._nth(params,(0));
var G__63683 = cljs.core._nth(params,(1));
var G__63684 = cljs.core._nth(params,(2));
var G__63685 = cljs.core._nth(params,(3));
var G__63686 = cljs.core._nth(params,(4));
var G__63687 = cljs.core._nth(params,(5));
var G__63688 = cljs.core._nth(params,(6));
var G__63689 = cljs.core._nth(params,(7));
var G__63690 = cljs.core._nth(params,(8));
var G__63691 = cljs.core._nth(params,(9));
var G__63692 = cljs.core._nth(params,(10));
var G__63693 = cljs.core._nth(params,(11));
var G__63694 = cljs.core._nth(params,(12));
var G__63695 = cljs.core._nth(params,(13));
var G__63696 = cljs.core._nth(params,(14));
var G__63697 = cljs.core._nth(params,(15));
var G__63698 = cljs.core._nth(params,(16));
var G__63699 = cljs.core._nth(params,(17));
var G__63700 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__63662,G__63663,G__63664,G__63665,G__63666,G__63667,G__63668,G__63669,G__63670,G__63671,G__63672,G__63673,G__63674,G__63675,G__63676,G__63677,G__63678,G__63679,G__63680,G__63681){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63662);

(invoc_array[(1)] = G__63663);

(invoc_array[(2)] = G__63664);

(invoc_array[(3)] = G__63665);

(invoc_array[(4)] = G__63666);

(invoc_array[(5)] = G__63667);

(invoc_array[(6)] = G__63668);

(invoc_array[(7)] = G__63669);

(invoc_array[(8)] = G__63670);

(invoc_array[(9)] = G__63671);

(invoc_array[(10)] = G__63672);

(invoc_array[(11)] = G__63673);

(invoc_array[(12)] = G__63674);

(invoc_array[(13)] = G__63675);

(invoc_array[(14)] = G__63676);

(invoc_array[(15)] = G__63677);

(invoc_array[(16)] = G__63678);

(invoc_array[(17)] = G__63679);

(invoc_array[(18)] = G__63680);

(invoc_array[vararg_idx] = G__63681);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__63662,G__63663,G__63664,G__63665,G__63666,G__63667,G__63668,G__63669,G__63670,G__63671,G__63672,G__63673,G__63674,G__63675,G__63676,G__63677,G__63678,G__63679,G__63680,var_args){
var G__63681 = null;
if (arguments.length > 19) {
var G__64254__i = 0, G__64254__a = new Array(arguments.length -  19);
while (G__64254__i < G__64254__a.length) {G__64254__a[G__64254__i] = arguments[G__64254__i + 19]; ++G__64254__i;}
  G__63681 = new cljs.core.IndexedSeq(G__64254__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__63662,G__63663,G__63664,G__63665,G__63666,G__63667,G__63668,G__63669,G__63670,G__63671,G__63672,G__63673,G__63674,G__63675,G__63676,G__63677,G__63678,G__63679,G__63680,G__63681);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__64255){
var G__63662 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63663 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63664 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63665 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63666 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63667 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63668 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63669 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63670 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63671 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63672 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63673 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63674 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63675 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63676 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63677 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63678 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63679 = cljs.core.first(arglist__64255);
arglist__64255 = cljs.core.next(arglist__64255);
var G__63680 = cljs.core.first(arglist__64255);
var G__63681 = cljs.core.rest(arglist__64255);
return sci$impl$fns$fun_$_arity_19__delegate(G__63662,G__63663,G__63664,G__63665,G__63666,G__63667,G__63668,G__63669,G__63670,G__63671,G__63672,G__63673,G__63674,G__63675,G__63676,G__63677,G__63678,G__63679,G__63680,G__63681);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__63722 = cljs.core._nth(params,(0));
var G__63723 = cljs.core._nth(params,(1));
var G__63724 = cljs.core._nth(params,(2));
var G__63725 = cljs.core._nth(params,(3));
var G__63726 = cljs.core._nth(params,(4));
var G__63727 = cljs.core._nth(params,(5));
var G__63728 = cljs.core._nth(params,(6));
var G__63729 = cljs.core._nth(params,(7));
var G__63730 = cljs.core._nth(params,(8));
var G__63731 = cljs.core._nth(params,(9));
var G__63732 = cljs.core._nth(params,(10));
var G__63733 = cljs.core._nth(params,(11));
var G__63734 = cljs.core._nth(params,(12));
var G__63735 = cljs.core._nth(params,(13));
var G__63736 = cljs.core._nth(params,(14));
var G__63737 = cljs.core._nth(params,(15));
var G__63738 = cljs.core._nth(params,(16));
var G__63739 = cljs.core._nth(params,(17));
var G__63740 = cljs.core._nth(params,(18));
var G__63741 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__63701,G__63702,G__63703,G__63704,G__63705,G__63706,G__63707,G__63708,G__63709,G__63710,G__63711,G__63712,G__63713,G__63714,G__63715,G__63716,G__63717,G__63718,G__63719,G__63720,G__63721){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63701);

(invoc_array[(1)] = G__63702);

(invoc_array[(2)] = G__63703);

(invoc_array[(3)] = G__63704);

(invoc_array[(4)] = G__63705);

(invoc_array[(5)] = G__63706);

(invoc_array[(6)] = G__63707);

(invoc_array[(7)] = G__63708);

(invoc_array[(8)] = G__63709);

(invoc_array[(9)] = G__63710);

(invoc_array[(10)] = G__63711);

(invoc_array[(11)] = G__63712);

(invoc_array[(12)] = G__63713);

(invoc_array[(13)] = G__63714);

(invoc_array[(14)] = G__63715);

(invoc_array[(15)] = G__63716);

(invoc_array[(16)] = G__63717);

(invoc_array[(17)] = G__63718);

(invoc_array[(18)] = G__63719);

(invoc_array[(19)] = G__63720);

(invoc_array[vararg_idx] = G__63721);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__63701,G__63702,G__63703,G__63704,G__63705,G__63706,G__63707,G__63708,G__63709,G__63710,G__63711,G__63712,G__63713,G__63714,G__63715,G__63716,G__63717,G__63718,G__63719,G__63720,var_args){
var G__63721 = null;
if (arguments.length > 20) {
var G__64258__i = 0, G__64258__a = new Array(arguments.length -  20);
while (G__64258__i < G__64258__a.length) {G__64258__a[G__64258__i] = arguments[G__64258__i + 20]; ++G__64258__i;}
  G__63721 = new cljs.core.IndexedSeq(G__64258__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__63701,G__63702,G__63703,G__63704,G__63705,G__63706,G__63707,G__63708,G__63709,G__63710,G__63711,G__63712,G__63713,G__63714,G__63715,G__63716,G__63717,G__63718,G__63719,G__63720,G__63721);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__64261){
var G__63701 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63702 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63703 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63704 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63705 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63706 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63707 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63708 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63709 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63710 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63711 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63712 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63713 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63714 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63715 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63716 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63717 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63718 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63719 = cljs.core.first(arglist__64261);
arglist__64261 = cljs.core.next(arglist__64261);
var G__63720 = cljs.core.first(arglist__64261);
var G__63721 = cljs.core.rest(arglist__64261);
return sci$impl$fns$fun_$_arity_20__delegate(G__63701,G__63702,G__63703,G__63704,G__63705,G__63706,G__63707,G__63708,G__63709,G__63710,G__63711,G__63712,G__63713,G__63714,G__63715,G__63716,G__63717,G__63718,G__63719,G__63720,G__63721);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63283)].join('')));

}
})():(function (){var G__63742 = (fixed_arity | (0));
switch (G__63742) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__61887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61887__auto__)){
continue;
} else {
return ret__61887__auto__;
}
break;
}
});

break;
case (1):
var G__63744 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__63743){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63743);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (2):
var G__63747 = cljs.core._nth(params,(0));
var G__63748 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__63745,G__63746){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63745);

(invoc_array[(1)] = G__63746);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (3):
var G__63752 = cljs.core._nth(params,(0));
var G__63753 = cljs.core._nth(params,(1));
var G__63754 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__63749,G__63750,G__63751){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63749);

(invoc_array[(1)] = G__63750);

(invoc_array[(2)] = G__63751);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (4):
var G__63759 = cljs.core._nth(params,(0));
var G__63760 = cljs.core._nth(params,(1));
var G__63761 = cljs.core._nth(params,(2));
var G__63762 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__63755,G__63756,G__63757,G__63758){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63755);

(invoc_array[(1)] = G__63756);

(invoc_array[(2)] = G__63757);

(invoc_array[(3)] = G__63758);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (5):
var G__63768 = cljs.core._nth(params,(0));
var G__63769 = cljs.core._nth(params,(1));
var G__63770 = cljs.core._nth(params,(2));
var G__63771 = cljs.core._nth(params,(3));
var G__63772 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__63763,G__63764,G__63765,G__63766,G__63767){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63763);

(invoc_array[(1)] = G__63764);

(invoc_array[(2)] = G__63765);

(invoc_array[(3)] = G__63766);

(invoc_array[(4)] = G__63767);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (6):
var G__63779 = cljs.core._nth(params,(0));
var G__63780 = cljs.core._nth(params,(1));
var G__63781 = cljs.core._nth(params,(2));
var G__63782 = cljs.core._nth(params,(3));
var G__63783 = cljs.core._nth(params,(4));
var G__63784 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__63773,G__63774,G__63775,G__63776,G__63777,G__63778){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63773);

(invoc_array[(1)] = G__63774);

(invoc_array[(2)] = G__63775);

(invoc_array[(3)] = G__63776);

(invoc_array[(4)] = G__63777);

(invoc_array[(5)] = G__63778);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (7):
var G__63792 = cljs.core._nth(params,(0));
var G__63793 = cljs.core._nth(params,(1));
var G__63794 = cljs.core._nth(params,(2));
var G__63795 = cljs.core._nth(params,(3));
var G__63796 = cljs.core._nth(params,(4));
var G__63797 = cljs.core._nth(params,(5));
var G__63798 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__63785,G__63786,G__63787,G__63788,G__63789,G__63790,G__63791){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63785);

(invoc_array[(1)] = G__63786);

(invoc_array[(2)] = G__63787);

(invoc_array[(3)] = G__63788);

(invoc_array[(4)] = G__63789);

(invoc_array[(5)] = G__63790);

(invoc_array[(6)] = G__63791);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (8):
var G__63808 = cljs.core._nth(params,(0));
var G__63809 = cljs.core._nth(params,(1));
var G__63810 = cljs.core._nth(params,(2));
var G__63811 = cljs.core._nth(params,(3));
var G__63812 = cljs.core._nth(params,(4));
var G__63813 = cljs.core._nth(params,(5));
var G__63814 = cljs.core._nth(params,(6));
var G__63815 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__63800,G__63801,G__63802,G__63803,G__63804,G__63805,G__63806,G__63807){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63800);

(invoc_array[(1)] = G__63801);

(invoc_array[(2)] = G__63802);

(invoc_array[(3)] = G__63803);

(invoc_array[(4)] = G__63804);

(invoc_array[(5)] = G__63805);

(invoc_array[(6)] = G__63806);

(invoc_array[(7)] = G__63807);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (9):
var G__63825 = cljs.core._nth(params,(0));
var G__63826 = cljs.core._nth(params,(1));
var G__63827 = cljs.core._nth(params,(2));
var G__63828 = cljs.core._nth(params,(3));
var G__63829 = cljs.core._nth(params,(4));
var G__63830 = cljs.core._nth(params,(5));
var G__63831 = cljs.core._nth(params,(6));
var G__63832 = cljs.core._nth(params,(7));
var G__63833 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__63816,G__63817,G__63818,G__63819,G__63820,G__63821,G__63822,G__63823,G__63824){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63816);

(invoc_array[(1)] = G__63817);

(invoc_array[(2)] = G__63818);

(invoc_array[(3)] = G__63819);

(invoc_array[(4)] = G__63820);

(invoc_array[(5)] = G__63821);

(invoc_array[(6)] = G__63822);

(invoc_array[(7)] = G__63823);

(invoc_array[(8)] = G__63824);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (10):
var G__63844 = cljs.core._nth(params,(0));
var G__63845 = cljs.core._nth(params,(1));
var G__63846 = cljs.core._nth(params,(2));
var G__63847 = cljs.core._nth(params,(3));
var G__63848 = cljs.core._nth(params,(4));
var G__63849 = cljs.core._nth(params,(5));
var G__63850 = cljs.core._nth(params,(6));
var G__63851 = cljs.core._nth(params,(7));
var G__63852 = cljs.core._nth(params,(8));
var G__63853 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__63834,G__63835,G__63836,G__63837,G__63838,G__63839,G__63840,G__63841,G__63842,G__63843){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63834);

(invoc_array[(1)] = G__63835);

(invoc_array[(2)] = G__63836);

(invoc_array[(3)] = G__63837);

(invoc_array[(4)] = G__63838);

(invoc_array[(5)] = G__63839);

(invoc_array[(6)] = G__63840);

(invoc_array[(7)] = G__63841);

(invoc_array[(8)] = G__63842);

(invoc_array[(9)] = G__63843);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (11):
var G__63867 = cljs.core._nth(params,(0));
var G__63868 = cljs.core._nth(params,(1));
var G__63869 = cljs.core._nth(params,(2));
var G__63870 = cljs.core._nth(params,(3));
var G__63871 = cljs.core._nth(params,(4));
var G__63872 = cljs.core._nth(params,(5));
var G__63873 = cljs.core._nth(params,(6));
var G__63874 = cljs.core._nth(params,(7));
var G__63875 = cljs.core._nth(params,(8));
var G__63876 = cljs.core._nth(params,(9));
var G__63877 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__63856,G__63857,G__63858,G__63859,G__63860,G__63861,G__63862,G__63863,G__63864,G__63865,G__63866){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63856);

(invoc_array[(1)] = G__63857);

(invoc_array[(2)] = G__63858);

(invoc_array[(3)] = G__63859);

(invoc_array[(4)] = G__63860);

(invoc_array[(5)] = G__63861);

(invoc_array[(6)] = G__63862);

(invoc_array[(7)] = G__63863);

(invoc_array[(8)] = G__63864);

(invoc_array[(9)] = G__63865);

(invoc_array[(10)] = G__63866);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (12):
var G__63892 = cljs.core._nth(params,(0));
var G__63893 = cljs.core._nth(params,(1));
var G__63894 = cljs.core._nth(params,(2));
var G__63895 = cljs.core._nth(params,(3));
var G__63896 = cljs.core._nth(params,(4));
var G__63897 = cljs.core._nth(params,(5));
var G__63898 = cljs.core._nth(params,(6));
var G__63899 = cljs.core._nth(params,(7));
var G__63900 = cljs.core._nth(params,(8));
var G__63901 = cljs.core._nth(params,(9));
var G__63902 = cljs.core._nth(params,(10));
var G__63903 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__63880,G__63881,G__63882,G__63883,G__63884,G__63885,G__63886,G__63887,G__63888,G__63889,G__63890,G__63891){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63880);

(invoc_array[(1)] = G__63881);

(invoc_array[(2)] = G__63882);

(invoc_array[(3)] = G__63883);

(invoc_array[(4)] = G__63884);

(invoc_array[(5)] = G__63885);

(invoc_array[(6)] = G__63886);

(invoc_array[(7)] = G__63887);

(invoc_array[(8)] = G__63888);

(invoc_array[(9)] = G__63889);

(invoc_array[(10)] = G__63890);

(invoc_array[(11)] = G__63891);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (13):
var G__63923 = cljs.core._nth(params,(0));
var G__63924 = cljs.core._nth(params,(1));
var G__63925 = cljs.core._nth(params,(2));
var G__63926 = cljs.core._nth(params,(3));
var G__63927 = cljs.core._nth(params,(4));
var G__63928 = cljs.core._nth(params,(5));
var G__63929 = cljs.core._nth(params,(6));
var G__63930 = cljs.core._nth(params,(7));
var G__63931 = cljs.core._nth(params,(8));
var G__63932 = cljs.core._nth(params,(9));
var G__63933 = cljs.core._nth(params,(10));
var G__63934 = cljs.core._nth(params,(11));
var G__63935 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__63910,G__63911,G__63912,G__63913,G__63914,G__63915,G__63916,G__63917,G__63918,G__63919,G__63920,G__63921,G__63922){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63910);

(invoc_array[(1)] = G__63911);

(invoc_array[(2)] = G__63912);

(invoc_array[(3)] = G__63913);

(invoc_array[(4)] = G__63914);

(invoc_array[(5)] = G__63915);

(invoc_array[(6)] = G__63916);

(invoc_array[(7)] = G__63917);

(invoc_array[(8)] = G__63918);

(invoc_array[(9)] = G__63919);

(invoc_array[(10)] = G__63920);

(invoc_array[(11)] = G__63921);

(invoc_array[(12)] = G__63922);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (14):
var G__63951 = cljs.core._nth(params,(0));
var G__63952 = cljs.core._nth(params,(1));
var G__63953 = cljs.core._nth(params,(2));
var G__63954 = cljs.core._nth(params,(3));
var G__63955 = cljs.core._nth(params,(4));
var G__63956 = cljs.core._nth(params,(5));
var G__63957 = cljs.core._nth(params,(6));
var G__63958 = cljs.core._nth(params,(7));
var G__63959 = cljs.core._nth(params,(8));
var G__63960 = cljs.core._nth(params,(9));
var G__63961 = cljs.core._nth(params,(10));
var G__63962 = cljs.core._nth(params,(11));
var G__63963 = cljs.core._nth(params,(12));
var G__63964 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__63937,G__63938,G__63939,G__63940,G__63941,G__63942,G__63943,G__63944,G__63945,G__63946,G__63947,G__63948,G__63949,G__63950){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63937);

(invoc_array[(1)] = G__63938);

(invoc_array[(2)] = G__63939);

(invoc_array[(3)] = G__63940);

(invoc_array[(4)] = G__63941);

(invoc_array[(5)] = G__63942);

(invoc_array[(6)] = G__63943);

(invoc_array[(7)] = G__63944);

(invoc_array[(8)] = G__63945);

(invoc_array[(9)] = G__63946);

(invoc_array[(10)] = G__63947);

(invoc_array[(11)] = G__63948);

(invoc_array[(12)] = G__63949);

(invoc_array[(13)] = G__63950);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (15):
var G__63980 = cljs.core._nth(params,(0));
var G__63981 = cljs.core._nth(params,(1));
var G__63982 = cljs.core._nth(params,(2));
var G__63983 = cljs.core._nth(params,(3));
var G__63984 = cljs.core._nth(params,(4));
var G__63985 = cljs.core._nth(params,(5));
var G__63986 = cljs.core._nth(params,(6));
var G__63987 = cljs.core._nth(params,(7));
var G__63988 = cljs.core._nth(params,(8));
var G__63989 = cljs.core._nth(params,(9));
var G__63990 = cljs.core._nth(params,(10));
var G__63991 = cljs.core._nth(params,(11));
var G__63992 = cljs.core._nth(params,(12));
var G__63993 = cljs.core._nth(params,(13));
var G__63994 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__63965,G__63966,G__63967,G__63968,G__63969,G__63970,G__63971,G__63972,G__63973,G__63974,G__63975,G__63976,G__63977,G__63978,G__63979){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63965);

(invoc_array[(1)] = G__63966);

(invoc_array[(2)] = G__63967);

(invoc_array[(3)] = G__63968);

(invoc_array[(4)] = G__63969);

(invoc_array[(5)] = G__63970);

(invoc_array[(6)] = G__63971);

(invoc_array[(7)] = G__63972);

(invoc_array[(8)] = G__63973);

(invoc_array[(9)] = G__63974);

(invoc_array[(10)] = G__63975);

(invoc_array[(11)] = G__63976);

(invoc_array[(12)] = G__63977);

(invoc_array[(13)] = G__63978);

(invoc_array[(14)] = G__63979);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (16):
var G__64011 = cljs.core._nth(params,(0));
var G__64012 = cljs.core._nth(params,(1));
var G__64013 = cljs.core._nth(params,(2));
var G__64014 = cljs.core._nth(params,(3));
var G__64015 = cljs.core._nth(params,(4));
var G__64016 = cljs.core._nth(params,(5));
var G__64017 = cljs.core._nth(params,(6));
var G__64018 = cljs.core._nth(params,(7));
var G__64019 = cljs.core._nth(params,(8));
var G__64020 = cljs.core._nth(params,(9));
var G__64021 = cljs.core._nth(params,(10));
var G__64022 = cljs.core._nth(params,(11));
var G__64023 = cljs.core._nth(params,(12));
var G__64024 = cljs.core._nth(params,(13));
var G__64025 = cljs.core._nth(params,(14));
var G__64026 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__63995,G__63996,G__63997,G__63998,G__63999,G__64000,G__64001,G__64002,G__64003,G__64004,G__64005,G__64006,G__64007,G__64008,G__64009,G__64010){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63995);

(invoc_array[(1)] = G__63996);

(invoc_array[(2)] = G__63997);

(invoc_array[(3)] = G__63998);

(invoc_array[(4)] = G__63999);

(invoc_array[(5)] = G__64000);

(invoc_array[(6)] = G__64001);

(invoc_array[(7)] = G__64002);

(invoc_array[(8)] = G__64003);

(invoc_array[(9)] = G__64004);

(invoc_array[(10)] = G__64005);

(invoc_array[(11)] = G__64006);

(invoc_array[(12)] = G__64007);

(invoc_array[(13)] = G__64008);

(invoc_array[(14)] = G__64009);

(invoc_array[(15)] = G__64010);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (17):
var G__64052 = cljs.core._nth(params,(0));
var G__64053 = cljs.core._nth(params,(1));
var G__64054 = cljs.core._nth(params,(2));
var G__64055 = cljs.core._nth(params,(3));
var G__64056 = cljs.core._nth(params,(4));
var G__64057 = cljs.core._nth(params,(5));
var G__64058 = cljs.core._nth(params,(6));
var G__64059 = cljs.core._nth(params,(7));
var G__64060 = cljs.core._nth(params,(8));
var G__64061 = cljs.core._nth(params,(9));
var G__64062 = cljs.core._nth(params,(10));
var G__64063 = cljs.core._nth(params,(11));
var G__64064 = cljs.core._nth(params,(12));
var G__64065 = cljs.core._nth(params,(13));
var G__64066 = cljs.core._nth(params,(14));
var G__64067 = cljs.core._nth(params,(15));
var G__64068 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__64035,G__64036,G__64037,G__64038,G__64039,G__64040,G__64041,G__64042,G__64043,G__64044,G__64045,G__64046,G__64047,G__64048,G__64049,G__64050,G__64051){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64035);

(invoc_array[(1)] = G__64036);

(invoc_array[(2)] = G__64037);

(invoc_array[(3)] = G__64038);

(invoc_array[(4)] = G__64039);

(invoc_array[(5)] = G__64040);

(invoc_array[(6)] = G__64041);

(invoc_array[(7)] = G__64042);

(invoc_array[(8)] = G__64043);

(invoc_array[(9)] = G__64044);

(invoc_array[(10)] = G__64045);

(invoc_array[(11)] = G__64046);

(invoc_array[(12)] = G__64047);

(invoc_array[(13)] = G__64048);

(invoc_array[(14)] = G__64049);

(invoc_array[(15)] = G__64050);

(invoc_array[(16)] = G__64051);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (18):
var G__64087 = cljs.core._nth(params,(0));
var G__64088 = cljs.core._nth(params,(1));
var G__64089 = cljs.core._nth(params,(2));
var G__64090 = cljs.core._nth(params,(3));
var G__64091 = cljs.core._nth(params,(4));
var G__64092 = cljs.core._nth(params,(5));
var G__64093 = cljs.core._nth(params,(6));
var G__64094 = cljs.core._nth(params,(7));
var G__64095 = cljs.core._nth(params,(8));
var G__64096 = cljs.core._nth(params,(9));
var G__64097 = cljs.core._nth(params,(10));
var G__64098 = cljs.core._nth(params,(11));
var G__64099 = cljs.core._nth(params,(12));
var G__64100 = cljs.core._nth(params,(13));
var G__64101 = cljs.core._nth(params,(14));
var G__64102 = cljs.core._nth(params,(15));
var G__64103 = cljs.core._nth(params,(16));
var G__64104 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__64069,G__64070,G__64071,G__64072,G__64073,G__64074,G__64075,G__64076,G__64077,G__64078,G__64079,G__64080,G__64081,G__64082,G__64083,G__64084,G__64085,G__64086){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64069);

(invoc_array[(1)] = G__64070);

(invoc_array[(2)] = G__64071);

(invoc_array[(3)] = G__64072);

(invoc_array[(4)] = G__64073);

(invoc_array[(5)] = G__64074);

(invoc_array[(6)] = G__64075);

(invoc_array[(7)] = G__64076);

(invoc_array[(8)] = G__64077);

(invoc_array[(9)] = G__64078);

(invoc_array[(10)] = G__64079);

(invoc_array[(11)] = G__64080);

(invoc_array[(12)] = G__64081);

(invoc_array[(13)] = G__64082);

(invoc_array[(14)] = G__64083);

(invoc_array[(15)] = G__64084);

(invoc_array[(16)] = G__64085);

(invoc_array[(17)] = G__64086);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (19):
var G__64124 = cljs.core._nth(params,(0));
var G__64125 = cljs.core._nth(params,(1));
var G__64126 = cljs.core._nth(params,(2));
var G__64127 = cljs.core._nth(params,(3));
var G__64128 = cljs.core._nth(params,(4));
var G__64129 = cljs.core._nth(params,(5));
var G__64130 = cljs.core._nth(params,(6));
var G__64131 = cljs.core._nth(params,(7));
var G__64132 = cljs.core._nth(params,(8));
var G__64133 = cljs.core._nth(params,(9));
var G__64134 = cljs.core._nth(params,(10));
var G__64135 = cljs.core._nth(params,(11));
var G__64136 = cljs.core._nth(params,(12));
var G__64137 = cljs.core._nth(params,(13));
var G__64138 = cljs.core._nth(params,(14));
var G__64139 = cljs.core._nth(params,(15));
var G__64140 = cljs.core._nth(params,(16));
var G__64141 = cljs.core._nth(params,(17));
var G__64142 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__64105,G__64106,G__64107,G__64108,G__64109,G__64110,G__64111,G__64112,G__64113,G__64114,G__64115,G__64116,G__64117,G__64118,G__64119,G__64120,G__64121,G__64122,G__64123){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64105);

(invoc_array[(1)] = G__64106);

(invoc_array[(2)] = G__64107);

(invoc_array[(3)] = G__64108);

(invoc_array[(4)] = G__64109);

(invoc_array[(5)] = G__64110);

(invoc_array[(6)] = G__64111);

(invoc_array[(7)] = G__64112);

(invoc_array[(8)] = G__64113);

(invoc_array[(9)] = G__64114);

(invoc_array[(10)] = G__64115);

(invoc_array[(11)] = G__64116);

(invoc_array[(12)] = G__64117);

(invoc_array[(13)] = G__64118);

(invoc_array[(14)] = G__64119);

(invoc_array[(15)] = G__64120);

(invoc_array[(16)] = G__64121);

(invoc_array[(17)] = G__64122);

(invoc_array[(18)] = G__64123);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
case (20):
var G__64163 = cljs.core._nth(params,(0));
var G__64164 = cljs.core._nth(params,(1));
var G__64165 = cljs.core._nth(params,(2));
var G__64166 = cljs.core._nth(params,(3));
var G__64167 = cljs.core._nth(params,(4));
var G__64168 = cljs.core._nth(params,(5));
var G__64169 = cljs.core._nth(params,(6));
var G__64170 = cljs.core._nth(params,(7));
var G__64171 = cljs.core._nth(params,(8));
var G__64172 = cljs.core._nth(params,(9));
var G__64173 = cljs.core._nth(params,(10));
var G__64174 = cljs.core._nth(params,(11));
var G__64175 = cljs.core._nth(params,(12));
var G__64176 = cljs.core._nth(params,(13));
var G__64177 = cljs.core._nth(params,(14));
var G__64178 = cljs.core._nth(params,(15));
var G__64179 = cljs.core._nth(params,(16));
var G__64180 = cljs.core._nth(params,(17));
var G__64181 = cljs.core._nth(params,(18));
var G__64182 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__64143,G__64144,G__64145,G__64146,G__64147,G__64148,G__64149,G__64150,G__64151,G__64152,G__64153,G__64154,G__64155,G__64156,G__64157,G__64158,G__64159,G__64160,G__64161,G__64162){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64143);

(invoc_array[(1)] = G__64144);

(invoc_array[(2)] = G__64145);

(invoc_array[(3)] = G__64146);

(invoc_array[(4)] = G__64147);

(invoc_array[(5)] = G__64148);

(invoc_array[(6)] = G__64149);

(invoc_array[(7)] = G__64150);

(invoc_array[(8)] = G__64151);

(invoc_array[(9)] = G__64152);

(invoc_array[(10)] = G__64153);

(invoc_array[(11)] = G__64154);

(invoc_array[(12)] = G__64155);

(invoc_array[(13)] = G__64156);

(invoc_array[(14)] = G__64157);

(invoc_array[(15)] = G__64158);

(invoc_array[(16)] = G__64159);

(invoc_array[(17)] = G__64160);

(invoc_array[(18)] = G__64161);

(invoc_array[(19)] = G__64162);

while(true){
var ret__61888__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61888__auto__)){
continue;
} else {
return ret__61888__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63742)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,enclosed_array,bindings,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__64290__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5718__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__64290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64291__i = 0, G__64291__a = new Array(arguments.length -  0);
while (G__64291__i < G__64291__a.length) {G__64291__a[G__64291__i] = arguments[G__64291__i + 0]; ++G__64291__i;}
  args = new cljs.core.IndexedSeq(G__64291__a,0,null);
} 
return G__64290__delegate.call(this,args);};
G__64290.cljs$lang$maxFixedArity = 0;
G__64290.cljs$lang$applyTo = (function (arglist__64292){
var args = cljs.core.seq(arglist__64292);
return G__64290__delegate(args);
});
G__64290.cljs$core$IFn$_invoke$arity$variadic = G__64290__delegate;
return G__64290;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__64183_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__64183_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
