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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__77080 = (fixed_arity | (0));
switch (G__77080) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__77081){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__77081);

while(true){
var ret__76047__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76047__auto__)){
continue;
} else {
return ret__76047__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__77081 = null;
if (arguments.length > 0) {
var G__78157__i = 0, G__78157__a = new Array(arguments.length -  0);
while (G__78157__i < G__78157__a.length) {G__78157__a[G__78157__i] = arguments[G__78157__i + 0]; ++G__78157__i;}
  G__77081 = new cljs.core.IndexedSeq(G__78157__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__77081);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__78158){
var G__77081 = cljs.core.seq(arglist__78158);
return sci$impl$fns$fun_$_arity_0__delegate(G__77081);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__77084 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__77082,G__77083){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77082);

(invoc_array[vararg_idx] = G__77083);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__77082,var_args){
var G__77083 = null;
if (arguments.length > 1) {
var G__78159__i = 0, G__78159__a = new Array(arguments.length -  1);
while (G__78159__i < G__78159__a.length) {G__78159__a[G__78159__i] = arguments[G__78159__i + 1]; ++G__78159__i;}
  G__77083 = new cljs.core.IndexedSeq(G__78159__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__77082,G__77083);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__78160){
var G__77082 = cljs.core.first(arglist__78160);
var G__77083 = cljs.core.rest(arglist__78160);
return sci$impl$fns$fun_$_arity_1__delegate(G__77082,G__77083);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__77094 = cljs.core._nth(params,(0));
var G__77095 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__77091,G__77092,G__77093){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77091);

(invoc_array[(1)] = G__77092);

(invoc_array[vararg_idx] = G__77093);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__77091,G__77092,var_args){
var G__77093 = null;
if (arguments.length > 2) {
var G__78165__i = 0, G__78165__a = new Array(arguments.length -  2);
while (G__78165__i < G__78165__a.length) {G__78165__a[G__78165__i] = arguments[G__78165__i + 2]; ++G__78165__i;}
  G__77093 = new cljs.core.IndexedSeq(G__78165__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__77091,G__77092,G__77093);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__78166){
var G__77091 = cljs.core.first(arglist__78166);
arglist__78166 = cljs.core.next(arglist__78166);
var G__77092 = cljs.core.first(arglist__78166);
var G__77093 = cljs.core.rest(arglist__78166);
return sci$impl$fns$fun_$_arity_2__delegate(G__77091,G__77092,G__77093);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__77100 = cljs.core._nth(params,(0));
var G__77101 = cljs.core._nth(params,(1));
var G__77102 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__77096,G__77097,G__77098,G__77099){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77096);

(invoc_array[(1)] = G__77097);

(invoc_array[(2)] = G__77098);

(invoc_array[vararg_idx] = G__77099);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__77096,G__77097,G__77098,var_args){
var G__77099 = null;
if (arguments.length > 3) {
var G__78170__i = 0, G__78170__a = new Array(arguments.length -  3);
while (G__78170__i < G__78170__a.length) {G__78170__a[G__78170__i] = arguments[G__78170__i + 3]; ++G__78170__i;}
  G__77099 = new cljs.core.IndexedSeq(G__78170__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__77096,G__77097,G__77098,G__77099);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__78171){
var G__77096 = cljs.core.first(arglist__78171);
arglist__78171 = cljs.core.next(arglist__78171);
var G__77097 = cljs.core.first(arglist__78171);
arglist__78171 = cljs.core.next(arglist__78171);
var G__77098 = cljs.core.first(arglist__78171);
var G__77099 = cljs.core.rest(arglist__78171);
return sci$impl$fns$fun_$_arity_3__delegate(G__77096,G__77097,G__77098,G__77099);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__77108 = cljs.core._nth(params,(0));
var G__77109 = cljs.core._nth(params,(1));
var G__77110 = cljs.core._nth(params,(2));
var G__77111 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__77103,G__77104,G__77105,G__77106,G__77107){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77103);

(invoc_array[(1)] = G__77104);

(invoc_array[(2)] = G__77105);

(invoc_array[(3)] = G__77106);

(invoc_array[vararg_idx] = G__77107);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__77103,G__77104,G__77105,G__77106,var_args){
var G__77107 = null;
if (arguments.length > 4) {
var G__78173__i = 0, G__78173__a = new Array(arguments.length -  4);
while (G__78173__i < G__78173__a.length) {G__78173__a[G__78173__i] = arguments[G__78173__i + 4]; ++G__78173__i;}
  G__77107 = new cljs.core.IndexedSeq(G__78173__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__77103,G__77104,G__77105,G__77106,G__77107);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__78174){
var G__77103 = cljs.core.first(arglist__78174);
arglist__78174 = cljs.core.next(arglist__78174);
var G__77104 = cljs.core.first(arglist__78174);
arglist__78174 = cljs.core.next(arglist__78174);
var G__77105 = cljs.core.first(arglist__78174);
arglist__78174 = cljs.core.next(arglist__78174);
var G__77106 = cljs.core.first(arglist__78174);
var G__77107 = cljs.core.rest(arglist__78174);
return sci$impl$fns$fun_$_arity_4__delegate(G__77103,G__77104,G__77105,G__77106,G__77107);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__77122 = cljs.core._nth(params,(0));
var G__77123 = cljs.core._nth(params,(1));
var G__77124 = cljs.core._nth(params,(2));
var G__77125 = cljs.core._nth(params,(3));
var G__77126 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__77116,G__77117,G__77118,G__77119,G__77120,G__77121){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77116);

(invoc_array[(1)] = G__77117);

(invoc_array[(2)] = G__77118);

(invoc_array[(3)] = G__77119);

(invoc_array[(4)] = G__77120);

(invoc_array[vararg_idx] = G__77121);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__77116,G__77117,G__77118,G__77119,G__77120,var_args){
var G__77121 = null;
if (arguments.length > 5) {
var G__78175__i = 0, G__78175__a = new Array(arguments.length -  5);
while (G__78175__i < G__78175__a.length) {G__78175__a[G__78175__i] = arguments[G__78175__i + 5]; ++G__78175__i;}
  G__77121 = new cljs.core.IndexedSeq(G__78175__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__77116,G__77117,G__77118,G__77119,G__77120,G__77121);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__78176){
var G__77116 = cljs.core.first(arglist__78176);
arglist__78176 = cljs.core.next(arglist__78176);
var G__77117 = cljs.core.first(arglist__78176);
arglist__78176 = cljs.core.next(arglist__78176);
var G__77118 = cljs.core.first(arglist__78176);
arglist__78176 = cljs.core.next(arglist__78176);
var G__77119 = cljs.core.first(arglist__78176);
arglist__78176 = cljs.core.next(arglist__78176);
var G__77120 = cljs.core.first(arglist__78176);
var G__77121 = cljs.core.rest(arglist__78176);
return sci$impl$fns$fun_$_arity_5__delegate(G__77116,G__77117,G__77118,G__77119,G__77120,G__77121);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__77136 = cljs.core._nth(params,(0));
var G__77137 = cljs.core._nth(params,(1));
var G__77138 = cljs.core._nth(params,(2));
var G__77139 = cljs.core._nth(params,(3));
var G__77140 = cljs.core._nth(params,(4));
var G__77141 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__77129,G__77130,G__77131,G__77132,G__77133,G__77134,G__77135){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77129);

(invoc_array[(1)] = G__77130);

(invoc_array[(2)] = G__77131);

(invoc_array[(3)] = G__77132);

(invoc_array[(4)] = G__77133);

(invoc_array[(5)] = G__77134);

(invoc_array[vararg_idx] = G__77135);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__77129,G__77130,G__77131,G__77132,G__77133,G__77134,var_args){
var G__77135 = null;
if (arguments.length > 6) {
var G__78177__i = 0, G__78177__a = new Array(arguments.length -  6);
while (G__78177__i < G__78177__a.length) {G__78177__a[G__78177__i] = arguments[G__78177__i + 6]; ++G__78177__i;}
  G__77135 = new cljs.core.IndexedSeq(G__78177__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__77129,G__77130,G__77131,G__77132,G__77133,G__77134,G__77135);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__78178){
var G__77129 = cljs.core.first(arglist__78178);
arglist__78178 = cljs.core.next(arglist__78178);
var G__77130 = cljs.core.first(arglist__78178);
arglist__78178 = cljs.core.next(arglist__78178);
var G__77131 = cljs.core.first(arglist__78178);
arglist__78178 = cljs.core.next(arglist__78178);
var G__77132 = cljs.core.first(arglist__78178);
arglist__78178 = cljs.core.next(arglist__78178);
var G__77133 = cljs.core.first(arglist__78178);
arglist__78178 = cljs.core.next(arglist__78178);
var G__77134 = cljs.core.first(arglist__78178);
var G__77135 = cljs.core.rest(arglist__78178);
return sci$impl$fns$fun_$_arity_6__delegate(G__77129,G__77130,G__77131,G__77132,G__77133,G__77134,G__77135);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__77150 = cljs.core._nth(params,(0));
var G__77151 = cljs.core._nth(params,(1));
var G__77152 = cljs.core._nth(params,(2));
var G__77153 = cljs.core._nth(params,(3));
var G__77154 = cljs.core._nth(params,(4));
var G__77155 = cljs.core._nth(params,(5));
var G__77156 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__77142,G__77143,G__77144,G__77145,G__77146,G__77147,G__77148,G__77149){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77142);

(invoc_array[(1)] = G__77143);

(invoc_array[(2)] = G__77144);

(invoc_array[(3)] = G__77145);

(invoc_array[(4)] = G__77146);

(invoc_array[(5)] = G__77147);

(invoc_array[(6)] = G__77148);

(invoc_array[vararg_idx] = G__77149);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__77142,G__77143,G__77144,G__77145,G__77146,G__77147,G__77148,var_args){
var G__77149 = null;
if (arguments.length > 7) {
var G__78179__i = 0, G__78179__a = new Array(arguments.length -  7);
while (G__78179__i < G__78179__a.length) {G__78179__a[G__78179__i] = arguments[G__78179__i + 7]; ++G__78179__i;}
  G__77149 = new cljs.core.IndexedSeq(G__78179__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__77142,G__77143,G__77144,G__77145,G__77146,G__77147,G__77148,G__77149);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__78180){
var G__77142 = cljs.core.first(arglist__78180);
arglist__78180 = cljs.core.next(arglist__78180);
var G__77143 = cljs.core.first(arglist__78180);
arglist__78180 = cljs.core.next(arglist__78180);
var G__77144 = cljs.core.first(arglist__78180);
arglist__78180 = cljs.core.next(arglist__78180);
var G__77145 = cljs.core.first(arglist__78180);
arglist__78180 = cljs.core.next(arglist__78180);
var G__77146 = cljs.core.first(arglist__78180);
arglist__78180 = cljs.core.next(arglist__78180);
var G__77147 = cljs.core.first(arglist__78180);
arglist__78180 = cljs.core.next(arglist__78180);
var G__77148 = cljs.core.first(arglist__78180);
var G__77149 = cljs.core.rest(arglist__78180);
return sci$impl$fns$fun_$_arity_7__delegate(G__77142,G__77143,G__77144,G__77145,G__77146,G__77147,G__77148,G__77149);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__77167 = cljs.core._nth(params,(0));
var G__77168 = cljs.core._nth(params,(1));
var G__77169 = cljs.core._nth(params,(2));
var G__77170 = cljs.core._nth(params,(3));
var G__77171 = cljs.core._nth(params,(4));
var G__77172 = cljs.core._nth(params,(5));
var G__77173 = cljs.core._nth(params,(6));
var G__77174 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__77158,G__77159,G__77160,G__77161,G__77162,G__77163,G__77164,G__77165,G__77166){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77158);

(invoc_array[(1)] = G__77159);

(invoc_array[(2)] = G__77160);

(invoc_array[(3)] = G__77161);

(invoc_array[(4)] = G__77162);

(invoc_array[(5)] = G__77163);

(invoc_array[(6)] = G__77164);

(invoc_array[(7)] = G__77165);

(invoc_array[vararg_idx] = G__77166);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__77158,G__77159,G__77160,G__77161,G__77162,G__77163,G__77164,G__77165,var_args){
var G__77166 = null;
if (arguments.length > 8) {
var G__78182__i = 0, G__78182__a = new Array(arguments.length -  8);
while (G__78182__i < G__78182__a.length) {G__78182__a[G__78182__i] = arguments[G__78182__i + 8]; ++G__78182__i;}
  G__77166 = new cljs.core.IndexedSeq(G__78182__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__77158,G__77159,G__77160,G__77161,G__77162,G__77163,G__77164,G__77165,G__77166);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__78183){
var G__77158 = cljs.core.first(arglist__78183);
arglist__78183 = cljs.core.next(arglist__78183);
var G__77159 = cljs.core.first(arglist__78183);
arglist__78183 = cljs.core.next(arglist__78183);
var G__77160 = cljs.core.first(arglist__78183);
arglist__78183 = cljs.core.next(arglist__78183);
var G__77161 = cljs.core.first(arglist__78183);
arglist__78183 = cljs.core.next(arglist__78183);
var G__77162 = cljs.core.first(arglist__78183);
arglist__78183 = cljs.core.next(arglist__78183);
var G__77163 = cljs.core.first(arglist__78183);
arglist__78183 = cljs.core.next(arglist__78183);
var G__77164 = cljs.core.first(arglist__78183);
arglist__78183 = cljs.core.next(arglist__78183);
var G__77165 = cljs.core.first(arglist__78183);
var G__77166 = cljs.core.rest(arglist__78183);
return sci$impl$fns$fun_$_arity_8__delegate(G__77158,G__77159,G__77160,G__77161,G__77162,G__77163,G__77164,G__77165,G__77166);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__77185 = cljs.core._nth(params,(0));
var G__77186 = cljs.core._nth(params,(1));
var G__77187 = cljs.core._nth(params,(2));
var G__77188 = cljs.core._nth(params,(3));
var G__77189 = cljs.core._nth(params,(4));
var G__77190 = cljs.core._nth(params,(5));
var G__77191 = cljs.core._nth(params,(6));
var G__77192 = cljs.core._nth(params,(7));
var G__77193 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__77175,G__77176,G__77177,G__77178,G__77179,G__77180,G__77181,G__77182,G__77183,G__77184){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77175);

(invoc_array[(1)] = G__77176);

(invoc_array[(2)] = G__77177);

(invoc_array[(3)] = G__77178);

(invoc_array[(4)] = G__77179);

(invoc_array[(5)] = G__77180);

(invoc_array[(6)] = G__77181);

(invoc_array[(7)] = G__77182);

(invoc_array[(8)] = G__77183);

(invoc_array[vararg_idx] = G__77184);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__77175,G__77176,G__77177,G__77178,G__77179,G__77180,G__77181,G__77182,G__77183,var_args){
var G__77184 = null;
if (arguments.length > 9) {
var G__78187__i = 0, G__78187__a = new Array(arguments.length -  9);
while (G__78187__i < G__78187__a.length) {G__78187__a[G__78187__i] = arguments[G__78187__i + 9]; ++G__78187__i;}
  G__77184 = new cljs.core.IndexedSeq(G__78187__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__77175,G__77176,G__77177,G__77178,G__77179,G__77180,G__77181,G__77182,G__77183,G__77184);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__78188){
var G__77175 = cljs.core.first(arglist__78188);
arglist__78188 = cljs.core.next(arglist__78188);
var G__77176 = cljs.core.first(arglist__78188);
arglist__78188 = cljs.core.next(arglist__78188);
var G__77177 = cljs.core.first(arglist__78188);
arglist__78188 = cljs.core.next(arglist__78188);
var G__77178 = cljs.core.first(arglist__78188);
arglist__78188 = cljs.core.next(arglist__78188);
var G__77179 = cljs.core.first(arglist__78188);
arglist__78188 = cljs.core.next(arglist__78188);
var G__77180 = cljs.core.first(arglist__78188);
arglist__78188 = cljs.core.next(arglist__78188);
var G__77181 = cljs.core.first(arglist__78188);
arglist__78188 = cljs.core.next(arglist__78188);
var G__77182 = cljs.core.first(arglist__78188);
arglist__78188 = cljs.core.next(arglist__78188);
var G__77183 = cljs.core.first(arglist__78188);
var G__77184 = cljs.core.rest(arglist__78188);
return sci$impl$fns$fun_$_arity_9__delegate(G__77175,G__77176,G__77177,G__77178,G__77179,G__77180,G__77181,G__77182,G__77183,G__77184);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__77206 = cljs.core._nth(params,(0));
var G__77207 = cljs.core._nth(params,(1));
var G__77208 = cljs.core._nth(params,(2));
var G__77209 = cljs.core._nth(params,(3));
var G__77210 = cljs.core._nth(params,(4));
var G__77211 = cljs.core._nth(params,(5));
var G__77212 = cljs.core._nth(params,(6));
var G__77213 = cljs.core._nth(params,(7));
var G__77214 = cljs.core._nth(params,(8));
var G__77215 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__77195,G__77196,G__77197,G__77198,G__77199,G__77200,G__77201,G__77202,G__77203,G__77204,G__77205){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77195);

(invoc_array[(1)] = G__77196);

(invoc_array[(2)] = G__77197);

(invoc_array[(3)] = G__77198);

(invoc_array[(4)] = G__77199);

(invoc_array[(5)] = G__77200);

(invoc_array[(6)] = G__77201);

(invoc_array[(7)] = G__77202);

(invoc_array[(8)] = G__77203);

(invoc_array[(9)] = G__77204);

(invoc_array[vararg_idx] = G__77205);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__77195,G__77196,G__77197,G__77198,G__77199,G__77200,G__77201,G__77202,G__77203,G__77204,var_args){
var G__77205 = null;
if (arguments.length > 10) {
var G__78192__i = 0, G__78192__a = new Array(arguments.length -  10);
while (G__78192__i < G__78192__a.length) {G__78192__a[G__78192__i] = arguments[G__78192__i + 10]; ++G__78192__i;}
  G__77205 = new cljs.core.IndexedSeq(G__78192__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__77195,G__77196,G__77197,G__77198,G__77199,G__77200,G__77201,G__77202,G__77203,G__77204,G__77205);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__78193){
var G__77195 = cljs.core.first(arglist__78193);
arglist__78193 = cljs.core.next(arglist__78193);
var G__77196 = cljs.core.first(arglist__78193);
arglist__78193 = cljs.core.next(arglist__78193);
var G__77197 = cljs.core.first(arglist__78193);
arglist__78193 = cljs.core.next(arglist__78193);
var G__77198 = cljs.core.first(arglist__78193);
arglist__78193 = cljs.core.next(arglist__78193);
var G__77199 = cljs.core.first(arglist__78193);
arglist__78193 = cljs.core.next(arglist__78193);
var G__77200 = cljs.core.first(arglist__78193);
arglist__78193 = cljs.core.next(arglist__78193);
var G__77201 = cljs.core.first(arglist__78193);
arglist__78193 = cljs.core.next(arglist__78193);
var G__77202 = cljs.core.first(arglist__78193);
arglist__78193 = cljs.core.next(arglist__78193);
var G__77203 = cljs.core.first(arglist__78193);
arglist__78193 = cljs.core.next(arglist__78193);
var G__77204 = cljs.core.first(arglist__78193);
var G__77205 = cljs.core.rest(arglist__78193);
return sci$impl$fns$fun_$_arity_10__delegate(G__77195,G__77196,G__77197,G__77198,G__77199,G__77200,G__77201,G__77202,G__77203,G__77204,G__77205);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__77231 = cljs.core._nth(params,(0));
var G__77232 = cljs.core._nth(params,(1));
var G__77233 = cljs.core._nth(params,(2));
var G__77234 = cljs.core._nth(params,(3));
var G__77235 = cljs.core._nth(params,(4));
var G__77236 = cljs.core._nth(params,(5));
var G__77237 = cljs.core._nth(params,(6));
var G__77238 = cljs.core._nth(params,(7));
var G__77239 = cljs.core._nth(params,(8));
var G__77240 = cljs.core._nth(params,(9));
var G__77241 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__77219,G__77220,G__77221,G__77222,G__77223,G__77224,G__77225,G__77226,G__77227,G__77228,G__77229,G__77230){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77219);

(invoc_array[(1)] = G__77220);

(invoc_array[(2)] = G__77221);

(invoc_array[(3)] = G__77222);

(invoc_array[(4)] = G__77223);

(invoc_array[(5)] = G__77224);

(invoc_array[(6)] = G__77225);

(invoc_array[(7)] = G__77226);

(invoc_array[(8)] = G__77227);

(invoc_array[(9)] = G__77228);

(invoc_array[(10)] = G__77229);

(invoc_array[vararg_idx] = G__77230);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__77219,G__77220,G__77221,G__77222,G__77223,G__77224,G__77225,G__77226,G__77227,G__77228,G__77229,var_args){
var G__77230 = null;
if (arguments.length > 11) {
var G__78195__i = 0, G__78195__a = new Array(arguments.length -  11);
while (G__78195__i < G__78195__a.length) {G__78195__a[G__78195__i] = arguments[G__78195__i + 11]; ++G__78195__i;}
  G__77230 = new cljs.core.IndexedSeq(G__78195__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__77219,G__77220,G__77221,G__77222,G__77223,G__77224,G__77225,G__77226,G__77227,G__77228,G__77229,G__77230);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__78196){
var G__77219 = cljs.core.first(arglist__78196);
arglist__78196 = cljs.core.next(arglist__78196);
var G__77220 = cljs.core.first(arglist__78196);
arglist__78196 = cljs.core.next(arglist__78196);
var G__77221 = cljs.core.first(arglist__78196);
arglist__78196 = cljs.core.next(arglist__78196);
var G__77222 = cljs.core.first(arglist__78196);
arglist__78196 = cljs.core.next(arglist__78196);
var G__77223 = cljs.core.first(arglist__78196);
arglist__78196 = cljs.core.next(arglist__78196);
var G__77224 = cljs.core.first(arglist__78196);
arglist__78196 = cljs.core.next(arglist__78196);
var G__77225 = cljs.core.first(arglist__78196);
arglist__78196 = cljs.core.next(arglist__78196);
var G__77226 = cljs.core.first(arglist__78196);
arglist__78196 = cljs.core.next(arglist__78196);
var G__77227 = cljs.core.first(arglist__78196);
arglist__78196 = cljs.core.next(arglist__78196);
var G__77228 = cljs.core.first(arglist__78196);
arglist__78196 = cljs.core.next(arglist__78196);
var G__77229 = cljs.core.first(arglist__78196);
var G__77230 = cljs.core.rest(arglist__78196);
return sci$impl$fns$fun_$_arity_11__delegate(G__77219,G__77220,G__77221,G__77222,G__77223,G__77224,G__77225,G__77226,G__77227,G__77228,G__77229,G__77230);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__77264 = cljs.core._nth(params,(0));
var G__77265 = cljs.core._nth(params,(1));
var G__77266 = cljs.core._nth(params,(2));
var G__77267 = cljs.core._nth(params,(3));
var G__77268 = cljs.core._nth(params,(4));
var G__77269 = cljs.core._nth(params,(5));
var G__77270 = cljs.core._nth(params,(6));
var G__77271 = cljs.core._nth(params,(7));
var G__77272 = cljs.core._nth(params,(8));
var G__77273 = cljs.core._nth(params,(9));
var G__77274 = cljs.core._nth(params,(10));
var G__77275 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__77251,G__77252,G__77253,G__77254,G__77255,G__77256,G__77257,G__77258,G__77259,G__77260,G__77261,G__77262,G__77263){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77251);

(invoc_array[(1)] = G__77252);

(invoc_array[(2)] = G__77253);

(invoc_array[(3)] = G__77254);

(invoc_array[(4)] = G__77255);

(invoc_array[(5)] = G__77256);

(invoc_array[(6)] = G__77257);

(invoc_array[(7)] = G__77258);

(invoc_array[(8)] = G__77259);

(invoc_array[(9)] = G__77260);

(invoc_array[(10)] = G__77261);

(invoc_array[(11)] = G__77262);

(invoc_array[vararg_idx] = G__77263);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__77251,G__77252,G__77253,G__77254,G__77255,G__77256,G__77257,G__77258,G__77259,G__77260,G__77261,G__77262,var_args){
var G__77263 = null;
if (arguments.length > 12) {
var G__78203__i = 0, G__78203__a = new Array(arguments.length -  12);
while (G__78203__i < G__78203__a.length) {G__78203__a[G__78203__i] = arguments[G__78203__i + 12]; ++G__78203__i;}
  G__77263 = new cljs.core.IndexedSeq(G__78203__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__77251,G__77252,G__77253,G__77254,G__77255,G__77256,G__77257,G__77258,G__77259,G__77260,G__77261,G__77262,G__77263);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__78205){
var G__77251 = cljs.core.first(arglist__78205);
arglist__78205 = cljs.core.next(arglist__78205);
var G__77252 = cljs.core.first(arglist__78205);
arglist__78205 = cljs.core.next(arglist__78205);
var G__77253 = cljs.core.first(arglist__78205);
arglist__78205 = cljs.core.next(arglist__78205);
var G__77254 = cljs.core.first(arglist__78205);
arglist__78205 = cljs.core.next(arglist__78205);
var G__77255 = cljs.core.first(arglist__78205);
arglist__78205 = cljs.core.next(arglist__78205);
var G__77256 = cljs.core.first(arglist__78205);
arglist__78205 = cljs.core.next(arglist__78205);
var G__77257 = cljs.core.first(arglist__78205);
arglist__78205 = cljs.core.next(arglist__78205);
var G__77258 = cljs.core.first(arglist__78205);
arglist__78205 = cljs.core.next(arglist__78205);
var G__77259 = cljs.core.first(arglist__78205);
arglist__78205 = cljs.core.next(arglist__78205);
var G__77260 = cljs.core.first(arglist__78205);
arglist__78205 = cljs.core.next(arglist__78205);
var G__77261 = cljs.core.first(arglist__78205);
arglist__78205 = cljs.core.next(arglist__78205);
var G__77262 = cljs.core.first(arglist__78205);
var G__77263 = cljs.core.rest(arglist__78205);
return sci$impl$fns$fun_$_arity_12__delegate(G__77251,G__77252,G__77253,G__77254,G__77255,G__77256,G__77257,G__77258,G__77259,G__77260,G__77261,G__77262,G__77263);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__77301 = cljs.core._nth(params,(0));
var G__77302 = cljs.core._nth(params,(1));
var G__77303 = cljs.core._nth(params,(2));
var G__77304 = cljs.core._nth(params,(3));
var G__77305 = cljs.core._nth(params,(4));
var G__77306 = cljs.core._nth(params,(5));
var G__77307 = cljs.core._nth(params,(6));
var G__77308 = cljs.core._nth(params,(7));
var G__77309 = cljs.core._nth(params,(8));
var G__77310 = cljs.core._nth(params,(9));
var G__77311 = cljs.core._nth(params,(10));
var G__77312 = cljs.core._nth(params,(11));
var G__77313 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__77287,G__77288,G__77289,G__77290,G__77291,G__77292,G__77293,G__77294,G__77295,G__77296,G__77297,G__77298,G__77299,G__77300){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77287);

(invoc_array[(1)] = G__77288);

(invoc_array[(2)] = G__77289);

(invoc_array[(3)] = G__77290);

(invoc_array[(4)] = G__77291);

(invoc_array[(5)] = G__77292);

(invoc_array[(6)] = G__77293);

(invoc_array[(7)] = G__77294);

(invoc_array[(8)] = G__77295);

(invoc_array[(9)] = G__77296);

(invoc_array[(10)] = G__77297);

(invoc_array[(11)] = G__77298);

(invoc_array[(12)] = G__77299);

(invoc_array[vararg_idx] = G__77300);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__77287,G__77288,G__77289,G__77290,G__77291,G__77292,G__77293,G__77294,G__77295,G__77296,G__77297,G__77298,G__77299,var_args){
var G__77300 = null;
if (arguments.length > 13) {
var G__78206__i = 0, G__78206__a = new Array(arguments.length -  13);
while (G__78206__i < G__78206__a.length) {G__78206__a[G__78206__i] = arguments[G__78206__i + 13]; ++G__78206__i;}
  G__77300 = new cljs.core.IndexedSeq(G__78206__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__77287,G__77288,G__77289,G__77290,G__77291,G__77292,G__77293,G__77294,G__77295,G__77296,G__77297,G__77298,G__77299,G__77300);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__78207){
var G__77287 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77288 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77289 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77290 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77291 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77292 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77293 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77294 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77295 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77296 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77297 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77298 = cljs.core.first(arglist__78207);
arglist__78207 = cljs.core.next(arglist__78207);
var G__77299 = cljs.core.first(arglist__78207);
var G__77300 = cljs.core.rest(arglist__78207);
return sci$impl$fns$fun_$_arity_13__delegate(G__77287,G__77288,G__77289,G__77290,G__77291,G__77292,G__77293,G__77294,G__77295,G__77296,G__77297,G__77298,G__77299,G__77300);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__77332 = cljs.core._nth(params,(0));
var G__77333 = cljs.core._nth(params,(1));
var G__77334 = cljs.core._nth(params,(2));
var G__77335 = cljs.core._nth(params,(3));
var G__77336 = cljs.core._nth(params,(4));
var G__77337 = cljs.core._nth(params,(5));
var G__77338 = cljs.core._nth(params,(6));
var G__77339 = cljs.core._nth(params,(7));
var G__77340 = cljs.core._nth(params,(8));
var G__77341 = cljs.core._nth(params,(9));
var G__77342 = cljs.core._nth(params,(10));
var G__77343 = cljs.core._nth(params,(11));
var G__77344 = cljs.core._nth(params,(12));
var G__77345 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__77317,G__77318,G__77319,G__77320,G__77321,G__77322,G__77323,G__77324,G__77325,G__77326,G__77327,G__77328,G__77329,G__77330,G__77331){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77317);

(invoc_array[(1)] = G__77318);

(invoc_array[(2)] = G__77319);

(invoc_array[(3)] = G__77320);

(invoc_array[(4)] = G__77321);

(invoc_array[(5)] = G__77322);

(invoc_array[(6)] = G__77323);

(invoc_array[(7)] = G__77324);

(invoc_array[(8)] = G__77325);

(invoc_array[(9)] = G__77326);

(invoc_array[(10)] = G__77327);

(invoc_array[(11)] = G__77328);

(invoc_array[(12)] = G__77329);

(invoc_array[(13)] = G__77330);

(invoc_array[vararg_idx] = G__77331);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__77317,G__77318,G__77319,G__77320,G__77321,G__77322,G__77323,G__77324,G__77325,G__77326,G__77327,G__77328,G__77329,G__77330,var_args){
var G__77331 = null;
if (arguments.length > 14) {
var G__78216__i = 0, G__78216__a = new Array(arguments.length -  14);
while (G__78216__i < G__78216__a.length) {G__78216__a[G__78216__i] = arguments[G__78216__i + 14]; ++G__78216__i;}
  G__77331 = new cljs.core.IndexedSeq(G__78216__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__77317,G__77318,G__77319,G__77320,G__77321,G__77322,G__77323,G__77324,G__77325,G__77326,G__77327,G__77328,G__77329,G__77330,G__77331);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__78218){
var G__77317 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77318 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77319 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77320 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77321 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77322 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77323 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77324 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77325 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77326 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77327 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77328 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77329 = cljs.core.first(arglist__78218);
arglist__78218 = cljs.core.next(arglist__78218);
var G__77330 = cljs.core.first(arglist__78218);
var G__77331 = cljs.core.rest(arglist__78218);
return sci$impl$fns$fun_$_arity_14__delegate(G__77317,G__77318,G__77319,G__77320,G__77321,G__77322,G__77323,G__77324,G__77325,G__77326,G__77327,G__77328,G__77329,G__77330,G__77331);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__77365 = cljs.core._nth(params,(0));
var G__77366 = cljs.core._nth(params,(1));
var G__77367 = cljs.core._nth(params,(2));
var G__77368 = cljs.core._nth(params,(3));
var G__77369 = cljs.core._nth(params,(4));
var G__77370 = cljs.core._nth(params,(5));
var G__77371 = cljs.core._nth(params,(6));
var G__77372 = cljs.core._nth(params,(7));
var G__77373 = cljs.core._nth(params,(8));
var G__77374 = cljs.core._nth(params,(9));
var G__77375 = cljs.core._nth(params,(10));
var G__77376 = cljs.core._nth(params,(11));
var G__77377 = cljs.core._nth(params,(12));
var G__77378 = cljs.core._nth(params,(13));
var G__77379 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__77349,G__77350,G__77351,G__77352,G__77353,G__77354,G__77355,G__77356,G__77357,G__77358,G__77359,G__77360,G__77361,G__77362,G__77363,G__77364){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77349);

(invoc_array[(1)] = G__77350);

(invoc_array[(2)] = G__77351);

(invoc_array[(3)] = G__77352);

(invoc_array[(4)] = G__77353);

(invoc_array[(5)] = G__77354);

(invoc_array[(6)] = G__77355);

(invoc_array[(7)] = G__77356);

(invoc_array[(8)] = G__77357);

(invoc_array[(9)] = G__77358);

(invoc_array[(10)] = G__77359);

(invoc_array[(11)] = G__77360);

(invoc_array[(12)] = G__77361);

(invoc_array[(13)] = G__77362);

(invoc_array[(14)] = G__77363);

(invoc_array[vararg_idx] = G__77364);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__77349,G__77350,G__77351,G__77352,G__77353,G__77354,G__77355,G__77356,G__77357,G__77358,G__77359,G__77360,G__77361,G__77362,G__77363,var_args){
var G__77364 = null;
if (arguments.length > 15) {
var G__78221__i = 0, G__78221__a = new Array(arguments.length -  15);
while (G__78221__i < G__78221__a.length) {G__78221__a[G__78221__i] = arguments[G__78221__i + 15]; ++G__78221__i;}
  G__77364 = new cljs.core.IndexedSeq(G__78221__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__77349,G__77350,G__77351,G__77352,G__77353,G__77354,G__77355,G__77356,G__77357,G__77358,G__77359,G__77360,G__77361,G__77362,G__77363,G__77364);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__78222){
var G__77349 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77350 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77351 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77352 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77353 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77354 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77355 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77356 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77357 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77358 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77359 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77360 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77361 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77362 = cljs.core.first(arglist__78222);
arglist__78222 = cljs.core.next(arglist__78222);
var G__77363 = cljs.core.first(arglist__78222);
var G__77364 = cljs.core.rest(arglist__78222);
return sci$impl$fns$fun_$_arity_15__delegate(G__77349,G__77350,G__77351,G__77352,G__77353,G__77354,G__77355,G__77356,G__77357,G__77358,G__77359,G__77360,G__77361,G__77362,G__77363,G__77364);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__77400 = cljs.core._nth(params,(0));
var G__77401 = cljs.core._nth(params,(1));
var G__77402 = cljs.core._nth(params,(2));
var G__77403 = cljs.core._nth(params,(3));
var G__77404 = cljs.core._nth(params,(4));
var G__77405 = cljs.core._nth(params,(5));
var G__77406 = cljs.core._nth(params,(6));
var G__77407 = cljs.core._nth(params,(7));
var G__77408 = cljs.core._nth(params,(8));
var G__77409 = cljs.core._nth(params,(9));
var G__77410 = cljs.core._nth(params,(10));
var G__77411 = cljs.core._nth(params,(11));
var G__77412 = cljs.core._nth(params,(12));
var G__77413 = cljs.core._nth(params,(13));
var G__77414 = cljs.core._nth(params,(14));
var G__77415 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__77383,G__77384,G__77385,G__77386,G__77387,G__77388,G__77389,G__77390,G__77391,G__77392,G__77393,G__77394,G__77395,G__77396,G__77397,G__77398,G__77399){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77383);

(invoc_array[(1)] = G__77384);

(invoc_array[(2)] = G__77385);

(invoc_array[(3)] = G__77386);

(invoc_array[(4)] = G__77387);

(invoc_array[(5)] = G__77388);

(invoc_array[(6)] = G__77389);

(invoc_array[(7)] = G__77390);

(invoc_array[(8)] = G__77391);

(invoc_array[(9)] = G__77392);

(invoc_array[(10)] = G__77393);

(invoc_array[(11)] = G__77394);

(invoc_array[(12)] = G__77395);

(invoc_array[(13)] = G__77396);

(invoc_array[(14)] = G__77397);

(invoc_array[(15)] = G__77398);

(invoc_array[vararg_idx] = G__77399);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__77383,G__77384,G__77385,G__77386,G__77387,G__77388,G__77389,G__77390,G__77391,G__77392,G__77393,G__77394,G__77395,G__77396,G__77397,G__77398,var_args){
var G__77399 = null;
if (arguments.length > 16) {
var G__78236__i = 0, G__78236__a = new Array(arguments.length -  16);
while (G__78236__i < G__78236__a.length) {G__78236__a[G__78236__i] = arguments[G__78236__i + 16]; ++G__78236__i;}
  G__77399 = new cljs.core.IndexedSeq(G__78236__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__77383,G__77384,G__77385,G__77386,G__77387,G__77388,G__77389,G__77390,G__77391,G__77392,G__77393,G__77394,G__77395,G__77396,G__77397,G__77398,G__77399);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__78237){
var G__77383 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77384 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77385 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77386 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77387 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77388 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77389 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77390 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77391 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77392 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77393 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77394 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77395 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77396 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77397 = cljs.core.first(arglist__78237);
arglist__78237 = cljs.core.next(arglist__78237);
var G__77398 = cljs.core.first(arglist__78237);
var G__77399 = cljs.core.rest(arglist__78237);
return sci$impl$fns$fun_$_arity_16__delegate(G__77383,G__77384,G__77385,G__77386,G__77387,G__77388,G__77389,G__77390,G__77391,G__77392,G__77393,G__77394,G__77395,G__77396,G__77397,G__77398,G__77399);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__77444 = cljs.core._nth(params,(0));
var G__77445 = cljs.core._nth(params,(1));
var G__77446 = cljs.core._nth(params,(2));
var G__77447 = cljs.core._nth(params,(3));
var G__77448 = cljs.core._nth(params,(4));
var G__77449 = cljs.core._nth(params,(5));
var G__77450 = cljs.core._nth(params,(6));
var G__77451 = cljs.core._nth(params,(7));
var G__77452 = cljs.core._nth(params,(8));
var G__77453 = cljs.core._nth(params,(9));
var G__77454 = cljs.core._nth(params,(10));
var G__77455 = cljs.core._nth(params,(11));
var G__77456 = cljs.core._nth(params,(12));
var G__77457 = cljs.core._nth(params,(13));
var G__77458 = cljs.core._nth(params,(14));
var G__77459 = cljs.core._nth(params,(15));
var G__77460 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__77426,G__77427,G__77428,G__77429,G__77430,G__77431,G__77432,G__77433,G__77434,G__77435,G__77436,G__77437,G__77438,G__77439,G__77440,G__77441,G__77442,G__77443){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77426);

(invoc_array[(1)] = G__77427);

(invoc_array[(2)] = G__77428);

(invoc_array[(3)] = G__77429);

(invoc_array[(4)] = G__77430);

(invoc_array[(5)] = G__77431);

(invoc_array[(6)] = G__77432);

(invoc_array[(7)] = G__77433);

(invoc_array[(8)] = G__77434);

(invoc_array[(9)] = G__77435);

(invoc_array[(10)] = G__77436);

(invoc_array[(11)] = G__77437);

(invoc_array[(12)] = G__77438);

(invoc_array[(13)] = G__77439);

(invoc_array[(14)] = G__77440);

(invoc_array[(15)] = G__77441);

(invoc_array[(16)] = G__77442);

(invoc_array[vararg_idx] = G__77443);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__77426,G__77427,G__77428,G__77429,G__77430,G__77431,G__77432,G__77433,G__77434,G__77435,G__77436,G__77437,G__77438,G__77439,G__77440,G__77441,G__77442,var_args){
var G__77443 = null;
if (arguments.length > 17) {
var G__78265__i = 0, G__78265__a = new Array(arguments.length -  17);
while (G__78265__i < G__78265__a.length) {G__78265__a[G__78265__i] = arguments[G__78265__i + 17]; ++G__78265__i;}
  G__77443 = new cljs.core.IndexedSeq(G__78265__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__77426,G__77427,G__77428,G__77429,G__77430,G__77431,G__77432,G__77433,G__77434,G__77435,G__77436,G__77437,G__77438,G__77439,G__77440,G__77441,G__77442,G__77443);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__78266){
var G__77426 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77427 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77428 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77429 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77430 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77431 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77432 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77433 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77434 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77435 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77436 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77437 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77438 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77439 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77440 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77441 = cljs.core.first(arglist__78266);
arglist__78266 = cljs.core.next(arglist__78266);
var G__77442 = cljs.core.first(arglist__78266);
var G__77443 = cljs.core.rest(arglist__78266);
return sci$impl$fns$fun_$_arity_17__delegate(G__77426,G__77427,G__77428,G__77429,G__77430,G__77431,G__77432,G__77433,G__77434,G__77435,G__77436,G__77437,G__77438,G__77439,G__77440,G__77441,G__77442,G__77443);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__77483 = cljs.core._nth(params,(0));
var G__77484 = cljs.core._nth(params,(1));
var G__77485 = cljs.core._nth(params,(2));
var G__77486 = cljs.core._nth(params,(3));
var G__77487 = cljs.core._nth(params,(4));
var G__77488 = cljs.core._nth(params,(5));
var G__77489 = cljs.core._nth(params,(6));
var G__77490 = cljs.core._nth(params,(7));
var G__77491 = cljs.core._nth(params,(8));
var G__77492 = cljs.core._nth(params,(9));
var G__77493 = cljs.core._nth(params,(10));
var G__77494 = cljs.core._nth(params,(11));
var G__77495 = cljs.core._nth(params,(12));
var G__77496 = cljs.core._nth(params,(13));
var G__77497 = cljs.core._nth(params,(14));
var G__77498 = cljs.core._nth(params,(15));
var G__77499 = cljs.core._nth(params,(16));
var G__77500 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__77464,G__77465,G__77466,G__77467,G__77468,G__77469,G__77470,G__77471,G__77472,G__77473,G__77474,G__77475,G__77476,G__77477,G__77478,G__77479,G__77480,G__77481,G__77482){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77464);

(invoc_array[(1)] = G__77465);

(invoc_array[(2)] = G__77466);

(invoc_array[(3)] = G__77467);

(invoc_array[(4)] = G__77468);

(invoc_array[(5)] = G__77469);

(invoc_array[(6)] = G__77470);

(invoc_array[(7)] = G__77471);

(invoc_array[(8)] = G__77472);

(invoc_array[(9)] = G__77473);

(invoc_array[(10)] = G__77474);

(invoc_array[(11)] = G__77475);

(invoc_array[(12)] = G__77476);

(invoc_array[(13)] = G__77477);

(invoc_array[(14)] = G__77478);

(invoc_array[(15)] = G__77479);

(invoc_array[(16)] = G__77480);

(invoc_array[(17)] = G__77481);

(invoc_array[vararg_idx] = G__77482);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__77464,G__77465,G__77466,G__77467,G__77468,G__77469,G__77470,G__77471,G__77472,G__77473,G__77474,G__77475,G__77476,G__77477,G__77478,G__77479,G__77480,G__77481,var_args){
var G__77482 = null;
if (arguments.length > 18) {
var G__78303__i = 0, G__78303__a = new Array(arguments.length -  18);
while (G__78303__i < G__78303__a.length) {G__78303__a[G__78303__i] = arguments[G__78303__i + 18]; ++G__78303__i;}
  G__77482 = new cljs.core.IndexedSeq(G__78303__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__77464,G__77465,G__77466,G__77467,G__77468,G__77469,G__77470,G__77471,G__77472,G__77473,G__77474,G__77475,G__77476,G__77477,G__77478,G__77479,G__77480,G__77481,G__77482);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__78316){
var G__77464 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77465 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77466 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77467 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77468 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77469 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77470 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77471 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77472 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77473 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77474 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77475 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77476 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77477 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77478 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77479 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77480 = cljs.core.first(arglist__78316);
arglist__78316 = cljs.core.next(arglist__78316);
var G__77481 = cljs.core.first(arglist__78316);
var G__77482 = cljs.core.rest(arglist__78316);
return sci$impl$fns$fun_$_arity_18__delegate(G__77464,G__77465,G__77466,G__77467,G__77468,G__77469,G__77470,G__77471,G__77472,G__77473,G__77474,G__77475,G__77476,G__77477,G__77478,G__77479,G__77480,G__77481,G__77482);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__77524 = cljs.core._nth(params,(0));
var G__77525 = cljs.core._nth(params,(1));
var G__77526 = cljs.core._nth(params,(2));
var G__77527 = cljs.core._nth(params,(3));
var G__77528 = cljs.core._nth(params,(4));
var G__77529 = cljs.core._nth(params,(5));
var G__77530 = cljs.core._nth(params,(6));
var G__77531 = cljs.core._nth(params,(7));
var G__77532 = cljs.core._nth(params,(8));
var G__77533 = cljs.core._nth(params,(9));
var G__77534 = cljs.core._nth(params,(10));
var G__77535 = cljs.core._nth(params,(11));
var G__77536 = cljs.core._nth(params,(12));
var G__77537 = cljs.core._nth(params,(13));
var G__77538 = cljs.core._nth(params,(14));
var G__77539 = cljs.core._nth(params,(15));
var G__77540 = cljs.core._nth(params,(16));
var G__77541 = cljs.core._nth(params,(17));
var G__77542 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__77504,G__77505,G__77506,G__77507,G__77508,G__77509,G__77510,G__77511,G__77512,G__77513,G__77514,G__77515,G__77516,G__77517,G__77518,G__77519,G__77520,G__77521,G__77522,G__77523){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77504);

(invoc_array[(1)] = G__77505);

(invoc_array[(2)] = G__77506);

(invoc_array[(3)] = G__77507);

(invoc_array[(4)] = G__77508);

(invoc_array[(5)] = G__77509);

(invoc_array[(6)] = G__77510);

(invoc_array[(7)] = G__77511);

(invoc_array[(8)] = G__77512);

(invoc_array[(9)] = G__77513);

(invoc_array[(10)] = G__77514);

(invoc_array[(11)] = G__77515);

(invoc_array[(12)] = G__77516);

(invoc_array[(13)] = G__77517);

(invoc_array[(14)] = G__77518);

(invoc_array[(15)] = G__77519);

(invoc_array[(16)] = G__77520);

(invoc_array[(17)] = G__77521);

(invoc_array[(18)] = G__77522);

(invoc_array[vararg_idx] = G__77523);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__77504,G__77505,G__77506,G__77507,G__77508,G__77509,G__77510,G__77511,G__77512,G__77513,G__77514,G__77515,G__77516,G__77517,G__77518,G__77519,G__77520,G__77521,G__77522,var_args){
var G__77523 = null;
if (arguments.length > 19) {
var G__78363__i = 0, G__78363__a = new Array(arguments.length -  19);
while (G__78363__i < G__78363__a.length) {G__78363__a[G__78363__i] = arguments[G__78363__i + 19]; ++G__78363__i;}
  G__77523 = new cljs.core.IndexedSeq(G__78363__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__77504,G__77505,G__77506,G__77507,G__77508,G__77509,G__77510,G__77511,G__77512,G__77513,G__77514,G__77515,G__77516,G__77517,G__77518,G__77519,G__77520,G__77521,G__77522,G__77523);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__78369){
var G__77504 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77505 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77506 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77507 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77508 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77509 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77510 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77511 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77512 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77513 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77514 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77515 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77516 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77517 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77518 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77519 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77520 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77521 = cljs.core.first(arglist__78369);
arglist__78369 = cljs.core.next(arglist__78369);
var G__77522 = cljs.core.first(arglist__78369);
var G__77523 = cljs.core.rest(arglist__78369);
return sci$impl$fns$fun_$_arity_19__delegate(G__77504,G__77505,G__77506,G__77507,G__77508,G__77509,G__77510,G__77511,G__77512,G__77513,G__77514,G__77515,G__77516,G__77517,G__77518,G__77519,G__77520,G__77521,G__77522,G__77523);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__77584 = cljs.core._nth(params,(0));
var G__77585 = cljs.core._nth(params,(1));
var G__77586 = cljs.core._nth(params,(2));
var G__77587 = cljs.core._nth(params,(3));
var G__77588 = cljs.core._nth(params,(4));
var G__77589 = cljs.core._nth(params,(5));
var G__77590 = cljs.core._nth(params,(6));
var G__77591 = cljs.core._nth(params,(7));
var G__77592 = cljs.core._nth(params,(8));
var G__77593 = cljs.core._nth(params,(9));
var G__77594 = cljs.core._nth(params,(10));
var G__77595 = cljs.core._nth(params,(11));
var G__77596 = cljs.core._nth(params,(12));
var G__77597 = cljs.core._nth(params,(13));
var G__77598 = cljs.core._nth(params,(14));
var G__77599 = cljs.core._nth(params,(15));
var G__77600 = cljs.core._nth(params,(16));
var G__77601 = cljs.core._nth(params,(17));
var G__77602 = cljs.core._nth(params,(18));
var G__77603 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__77563,G__77564,G__77565,G__77566,G__77567,G__77568,G__77569,G__77570,G__77571,G__77572,G__77573,G__77574,G__77575,G__77576,G__77577,G__77578,G__77579,G__77580,G__77581,G__77582,G__77583){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77563);

(invoc_array[(1)] = G__77564);

(invoc_array[(2)] = G__77565);

(invoc_array[(3)] = G__77566);

(invoc_array[(4)] = G__77567);

(invoc_array[(5)] = G__77568);

(invoc_array[(6)] = G__77569);

(invoc_array[(7)] = G__77570);

(invoc_array[(8)] = G__77571);

(invoc_array[(9)] = G__77572);

(invoc_array[(10)] = G__77573);

(invoc_array[(11)] = G__77574);

(invoc_array[(12)] = G__77575);

(invoc_array[(13)] = G__77576);

(invoc_array[(14)] = G__77577);

(invoc_array[(15)] = G__77578);

(invoc_array[(16)] = G__77579);

(invoc_array[(17)] = G__77580);

(invoc_array[(18)] = G__77581);

(invoc_array[(19)] = G__77582);

(invoc_array[vararg_idx] = G__77583);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__77563,G__77564,G__77565,G__77566,G__77567,G__77568,G__77569,G__77570,G__77571,G__77572,G__77573,G__77574,G__77575,G__77576,G__77577,G__77578,G__77579,G__77580,G__77581,G__77582,var_args){
var G__77583 = null;
if (arguments.length > 20) {
var G__78393__i = 0, G__78393__a = new Array(arguments.length -  20);
while (G__78393__i < G__78393__a.length) {G__78393__a[G__78393__i] = arguments[G__78393__i + 20]; ++G__78393__i;}
  G__77583 = new cljs.core.IndexedSeq(G__78393__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__77563,G__77564,G__77565,G__77566,G__77567,G__77568,G__77569,G__77570,G__77571,G__77572,G__77573,G__77574,G__77575,G__77576,G__77577,G__77578,G__77579,G__77580,G__77581,G__77582,G__77583);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__78399){
var G__77563 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77564 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77565 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77566 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77567 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77568 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77569 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77570 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77571 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77572 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77573 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77574 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77575 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77576 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77577 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77578 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77579 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77580 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77581 = cljs.core.first(arglist__78399);
arglist__78399 = cljs.core.next(arglist__78399);
var G__77582 = cljs.core.first(arglist__78399);
var G__77583 = cljs.core.rest(arglist__78399);
return sci$impl$fns$fun_$_arity_20__delegate(G__77563,G__77564,G__77565,G__77566,G__77567,G__77568,G__77569,G__77570,G__77571,G__77572,G__77573,G__77574,G__77575,G__77576,G__77577,G__77578,G__77579,G__77580,G__77581,G__77582,G__77583);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77080)].join('')));

}
})():(function (){var G__77607 = (fixed_arity | (0));
switch (G__77607) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__76047__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76047__auto__)){
continue;
} else {
return ret__76047__auto__;
}
break;
}
});

break;
case (1):
var G__77609 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__77608){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77608);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (2):
var G__77617 = cljs.core._nth(params,(0));
var G__77618 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__77615,G__77616){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77615);

(invoc_array[(1)] = G__77616);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (3):
var G__77623 = cljs.core._nth(params,(0));
var G__77624 = cljs.core._nth(params,(1));
var G__77625 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__77620,G__77621,G__77622){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77620);

(invoc_array[(1)] = G__77621);

(invoc_array[(2)] = G__77622);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (4):
var G__77632 = cljs.core._nth(params,(0));
var G__77633 = cljs.core._nth(params,(1));
var G__77634 = cljs.core._nth(params,(2));
var G__77635 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__77628,G__77629,G__77630,G__77631){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77628);

(invoc_array[(1)] = G__77629);

(invoc_array[(2)] = G__77630);

(invoc_array[(3)] = G__77631);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (5):
var G__77644 = cljs.core._nth(params,(0));
var G__77645 = cljs.core._nth(params,(1));
var G__77646 = cljs.core._nth(params,(2));
var G__77647 = cljs.core._nth(params,(3));
var G__77648 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__77639,G__77640,G__77641,G__77642,G__77643){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77639);

(invoc_array[(1)] = G__77640);

(invoc_array[(2)] = G__77641);

(invoc_array[(3)] = G__77642);

(invoc_array[(4)] = G__77643);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (6):
var G__77658 = cljs.core._nth(params,(0));
var G__77659 = cljs.core._nth(params,(1));
var G__77660 = cljs.core._nth(params,(2));
var G__77661 = cljs.core._nth(params,(3));
var G__77662 = cljs.core._nth(params,(4));
var G__77663 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__77652,G__77653,G__77654,G__77655,G__77656,G__77657){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77652);

(invoc_array[(1)] = G__77653);

(invoc_array[(2)] = G__77654);

(invoc_array[(3)] = G__77655);

(invoc_array[(4)] = G__77656);

(invoc_array[(5)] = G__77657);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (7):
var G__77676 = cljs.core._nth(params,(0));
var G__77677 = cljs.core._nth(params,(1));
var G__77678 = cljs.core._nth(params,(2));
var G__77679 = cljs.core._nth(params,(3));
var G__77680 = cljs.core._nth(params,(4));
var G__77681 = cljs.core._nth(params,(5));
var G__77682 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__77669,G__77670,G__77671,G__77672,G__77673,G__77674,G__77675){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77669);

(invoc_array[(1)] = G__77670);

(invoc_array[(2)] = G__77671);

(invoc_array[(3)] = G__77672);

(invoc_array[(4)] = G__77673);

(invoc_array[(5)] = G__77674);

(invoc_array[(6)] = G__77675);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (8):
var G__77698 = cljs.core._nth(params,(0));
var G__77699 = cljs.core._nth(params,(1));
var G__77700 = cljs.core._nth(params,(2));
var G__77701 = cljs.core._nth(params,(3));
var G__77702 = cljs.core._nth(params,(4));
var G__77703 = cljs.core._nth(params,(5));
var G__77704 = cljs.core._nth(params,(6));
var G__77705 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__77690,G__77691,G__77692,G__77693,G__77694,G__77695,G__77696,G__77697){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77690);

(invoc_array[(1)] = G__77691);

(invoc_array[(2)] = G__77692);

(invoc_array[(3)] = G__77693);

(invoc_array[(4)] = G__77694);

(invoc_array[(5)] = G__77695);

(invoc_array[(6)] = G__77696);

(invoc_array[(7)] = G__77697);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (9):
var G__77719 = cljs.core._nth(params,(0));
var G__77720 = cljs.core._nth(params,(1));
var G__77721 = cljs.core._nth(params,(2));
var G__77722 = cljs.core._nth(params,(3));
var G__77723 = cljs.core._nth(params,(4));
var G__77724 = cljs.core._nth(params,(5));
var G__77725 = cljs.core._nth(params,(6));
var G__77726 = cljs.core._nth(params,(7));
var G__77727 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__77710,G__77711,G__77712,G__77713,G__77714,G__77715,G__77716,G__77717,G__77718){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77710);

(invoc_array[(1)] = G__77711);

(invoc_array[(2)] = G__77712);

(invoc_array[(3)] = G__77713);

(invoc_array[(4)] = G__77714);

(invoc_array[(5)] = G__77715);

(invoc_array[(6)] = G__77716);

(invoc_array[(7)] = G__77717);

(invoc_array[(8)] = G__77718);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (10):
var G__77738 = cljs.core._nth(params,(0));
var G__77739 = cljs.core._nth(params,(1));
var G__77740 = cljs.core._nth(params,(2));
var G__77741 = cljs.core._nth(params,(3));
var G__77742 = cljs.core._nth(params,(4));
var G__77743 = cljs.core._nth(params,(5));
var G__77744 = cljs.core._nth(params,(6));
var G__77745 = cljs.core._nth(params,(7));
var G__77746 = cljs.core._nth(params,(8));
var G__77747 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__77728,G__77729,G__77730,G__77731,G__77732,G__77733,G__77734,G__77735,G__77736,G__77737){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77728);

(invoc_array[(1)] = G__77729);

(invoc_array[(2)] = G__77730);

(invoc_array[(3)] = G__77731);

(invoc_array[(4)] = G__77732);

(invoc_array[(5)] = G__77733);

(invoc_array[(6)] = G__77734);

(invoc_array[(7)] = G__77735);

(invoc_array[(8)] = G__77736);

(invoc_array[(9)] = G__77737);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (11):
var G__77759 = cljs.core._nth(params,(0));
var G__77760 = cljs.core._nth(params,(1));
var G__77761 = cljs.core._nth(params,(2));
var G__77762 = cljs.core._nth(params,(3));
var G__77763 = cljs.core._nth(params,(4));
var G__77764 = cljs.core._nth(params,(5));
var G__77765 = cljs.core._nth(params,(6));
var G__77766 = cljs.core._nth(params,(7));
var G__77767 = cljs.core._nth(params,(8));
var G__77768 = cljs.core._nth(params,(9));
var G__77769 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__77748,G__77749,G__77750,G__77751,G__77752,G__77753,G__77754,G__77755,G__77756,G__77757,G__77758){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77748);

(invoc_array[(1)] = G__77749);

(invoc_array[(2)] = G__77750);

(invoc_array[(3)] = G__77751);

(invoc_array[(4)] = G__77752);

(invoc_array[(5)] = G__77753);

(invoc_array[(6)] = G__77754);

(invoc_array[(7)] = G__77755);

(invoc_array[(8)] = G__77756);

(invoc_array[(9)] = G__77757);

(invoc_array[(10)] = G__77758);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (12):
var G__77783 = cljs.core._nth(params,(0));
var G__77784 = cljs.core._nth(params,(1));
var G__77785 = cljs.core._nth(params,(2));
var G__77786 = cljs.core._nth(params,(3));
var G__77787 = cljs.core._nth(params,(4));
var G__77788 = cljs.core._nth(params,(5));
var G__77789 = cljs.core._nth(params,(6));
var G__77790 = cljs.core._nth(params,(7));
var G__77791 = cljs.core._nth(params,(8));
var G__77792 = cljs.core._nth(params,(9));
var G__77793 = cljs.core._nth(params,(10));
var G__77794 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__77771,G__77772,G__77773,G__77774,G__77775,G__77776,G__77777,G__77778,G__77779,G__77780,G__77781,G__77782){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77771);

(invoc_array[(1)] = G__77772);

(invoc_array[(2)] = G__77773);

(invoc_array[(3)] = G__77774);

(invoc_array[(4)] = G__77775);

(invoc_array[(5)] = G__77776);

(invoc_array[(6)] = G__77777);

(invoc_array[(7)] = G__77778);

(invoc_array[(8)] = G__77779);

(invoc_array[(9)] = G__77780);

(invoc_array[(10)] = G__77781);

(invoc_array[(11)] = G__77782);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (13):
var G__77811 = cljs.core._nth(params,(0));
var G__77812 = cljs.core._nth(params,(1));
var G__77813 = cljs.core._nth(params,(2));
var G__77814 = cljs.core._nth(params,(3));
var G__77815 = cljs.core._nth(params,(4));
var G__77816 = cljs.core._nth(params,(5));
var G__77817 = cljs.core._nth(params,(6));
var G__77818 = cljs.core._nth(params,(7));
var G__77819 = cljs.core._nth(params,(8));
var G__77820 = cljs.core._nth(params,(9));
var G__77821 = cljs.core._nth(params,(10));
var G__77822 = cljs.core._nth(params,(11));
var G__77823 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__77798,G__77799,G__77800,G__77801,G__77802,G__77803,G__77804,G__77805,G__77806,G__77807,G__77808,G__77809,G__77810){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77798);

(invoc_array[(1)] = G__77799);

(invoc_array[(2)] = G__77800);

(invoc_array[(3)] = G__77801);

(invoc_array[(4)] = G__77802);

(invoc_array[(5)] = G__77803);

(invoc_array[(6)] = G__77804);

(invoc_array[(7)] = G__77805);

(invoc_array[(8)] = G__77806);

(invoc_array[(9)] = G__77807);

(invoc_array[(10)] = G__77808);

(invoc_array[(11)] = G__77809);

(invoc_array[(12)] = G__77810);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (14):
var G__77849 = cljs.core._nth(params,(0));
var G__77850 = cljs.core._nth(params,(1));
var G__77851 = cljs.core._nth(params,(2));
var G__77852 = cljs.core._nth(params,(3));
var G__77853 = cljs.core._nth(params,(4));
var G__77854 = cljs.core._nth(params,(5));
var G__77855 = cljs.core._nth(params,(6));
var G__77856 = cljs.core._nth(params,(7));
var G__77857 = cljs.core._nth(params,(8));
var G__77858 = cljs.core._nth(params,(9));
var G__77859 = cljs.core._nth(params,(10));
var G__77860 = cljs.core._nth(params,(11));
var G__77861 = cljs.core._nth(params,(12));
var G__77862 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__77835,G__77836,G__77837,G__77838,G__77839,G__77840,G__77841,G__77842,G__77843,G__77844,G__77845,G__77846,G__77847,G__77848){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77835);

(invoc_array[(1)] = G__77836);

(invoc_array[(2)] = G__77837);

(invoc_array[(3)] = G__77838);

(invoc_array[(4)] = G__77839);

(invoc_array[(5)] = G__77840);

(invoc_array[(6)] = G__77841);

(invoc_array[(7)] = G__77842);

(invoc_array[(8)] = G__77843);

(invoc_array[(9)] = G__77844);

(invoc_array[(10)] = G__77845);

(invoc_array[(11)] = G__77846);

(invoc_array[(12)] = G__77847);

(invoc_array[(13)] = G__77848);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (15):
var G__77881 = cljs.core._nth(params,(0));
var G__77882 = cljs.core._nth(params,(1));
var G__77883 = cljs.core._nth(params,(2));
var G__77884 = cljs.core._nth(params,(3));
var G__77885 = cljs.core._nth(params,(4));
var G__77886 = cljs.core._nth(params,(5));
var G__77887 = cljs.core._nth(params,(6));
var G__77888 = cljs.core._nth(params,(7));
var G__77889 = cljs.core._nth(params,(8));
var G__77890 = cljs.core._nth(params,(9));
var G__77891 = cljs.core._nth(params,(10));
var G__77892 = cljs.core._nth(params,(11));
var G__77893 = cljs.core._nth(params,(12));
var G__77894 = cljs.core._nth(params,(13));
var G__77895 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__77866,G__77867,G__77868,G__77869,G__77870,G__77871,G__77872,G__77873,G__77874,G__77875,G__77876,G__77877,G__77878,G__77879,G__77880){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77866);

(invoc_array[(1)] = G__77867);

(invoc_array[(2)] = G__77868);

(invoc_array[(3)] = G__77869);

(invoc_array[(4)] = G__77870);

(invoc_array[(5)] = G__77871);

(invoc_array[(6)] = G__77872);

(invoc_array[(7)] = G__77873);

(invoc_array[(8)] = G__77874);

(invoc_array[(9)] = G__77875);

(invoc_array[(10)] = G__77876);

(invoc_array[(11)] = G__77877);

(invoc_array[(12)] = G__77878);

(invoc_array[(13)] = G__77879);

(invoc_array[(14)] = G__77880);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (16):
var G__77915 = cljs.core._nth(params,(0));
var G__77916 = cljs.core._nth(params,(1));
var G__77917 = cljs.core._nth(params,(2));
var G__77918 = cljs.core._nth(params,(3));
var G__77919 = cljs.core._nth(params,(4));
var G__77920 = cljs.core._nth(params,(5));
var G__77921 = cljs.core._nth(params,(6));
var G__77922 = cljs.core._nth(params,(7));
var G__77923 = cljs.core._nth(params,(8));
var G__77924 = cljs.core._nth(params,(9));
var G__77925 = cljs.core._nth(params,(10));
var G__77926 = cljs.core._nth(params,(11));
var G__77927 = cljs.core._nth(params,(12));
var G__77928 = cljs.core._nth(params,(13));
var G__77929 = cljs.core._nth(params,(14));
var G__77930 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__77899,G__77900,G__77901,G__77902,G__77903,G__77904,G__77905,G__77906,G__77907,G__77908,G__77909,G__77910,G__77911,G__77912,G__77913,G__77914){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77899);

(invoc_array[(1)] = G__77900);

(invoc_array[(2)] = G__77901);

(invoc_array[(3)] = G__77902);

(invoc_array[(4)] = G__77903);

(invoc_array[(5)] = G__77904);

(invoc_array[(6)] = G__77905);

(invoc_array[(7)] = G__77906);

(invoc_array[(8)] = G__77907);

(invoc_array[(9)] = G__77908);

(invoc_array[(10)] = G__77909);

(invoc_array[(11)] = G__77910);

(invoc_array[(12)] = G__77911);

(invoc_array[(13)] = G__77912);

(invoc_array[(14)] = G__77913);

(invoc_array[(15)] = G__77914);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (17):
var G__77951 = cljs.core._nth(params,(0));
var G__77952 = cljs.core._nth(params,(1));
var G__77953 = cljs.core._nth(params,(2));
var G__77954 = cljs.core._nth(params,(3));
var G__77955 = cljs.core._nth(params,(4));
var G__77956 = cljs.core._nth(params,(5));
var G__77957 = cljs.core._nth(params,(6));
var G__77958 = cljs.core._nth(params,(7));
var G__77959 = cljs.core._nth(params,(8));
var G__77960 = cljs.core._nth(params,(9));
var G__77961 = cljs.core._nth(params,(10));
var G__77962 = cljs.core._nth(params,(11));
var G__77963 = cljs.core._nth(params,(12));
var G__77964 = cljs.core._nth(params,(13));
var G__77965 = cljs.core._nth(params,(14));
var G__77966 = cljs.core._nth(params,(15));
var G__77967 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__77934,G__77935,G__77936,G__77937,G__77938,G__77939,G__77940,G__77941,G__77942,G__77943,G__77944,G__77945,G__77946,G__77947,G__77948,G__77949,G__77950){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77934);

(invoc_array[(1)] = G__77935);

(invoc_array[(2)] = G__77936);

(invoc_array[(3)] = G__77937);

(invoc_array[(4)] = G__77938);

(invoc_array[(5)] = G__77939);

(invoc_array[(6)] = G__77940);

(invoc_array[(7)] = G__77941);

(invoc_array[(8)] = G__77942);

(invoc_array[(9)] = G__77943);

(invoc_array[(10)] = G__77944);

(invoc_array[(11)] = G__77945);

(invoc_array[(12)] = G__77946);

(invoc_array[(13)] = G__77947);

(invoc_array[(14)] = G__77948);

(invoc_array[(15)] = G__77949);

(invoc_array[(16)] = G__77950);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (18):
var G__77989 = cljs.core._nth(params,(0));
var G__77990 = cljs.core._nth(params,(1));
var G__77991 = cljs.core._nth(params,(2));
var G__77992 = cljs.core._nth(params,(3));
var G__77993 = cljs.core._nth(params,(4));
var G__77994 = cljs.core._nth(params,(5));
var G__77995 = cljs.core._nth(params,(6));
var G__77996 = cljs.core._nth(params,(7));
var G__77997 = cljs.core._nth(params,(8));
var G__77998 = cljs.core._nth(params,(9));
var G__77999 = cljs.core._nth(params,(10));
var G__78000 = cljs.core._nth(params,(11));
var G__78001 = cljs.core._nth(params,(12));
var G__78002 = cljs.core._nth(params,(13));
var G__78003 = cljs.core._nth(params,(14));
var G__78004 = cljs.core._nth(params,(15));
var G__78005 = cljs.core._nth(params,(16));
var G__78006 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__77971,G__77972,G__77973,G__77974,G__77975,G__77976,G__77977,G__77978,G__77979,G__77980,G__77981,G__77982,G__77983,G__77984,G__77985,G__77986,G__77987,G__77988){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__77971);

(invoc_array[(1)] = G__77972);

(invoc_array[(2)] = G__77973);

(invoc_array[(3)] = G__77974);

(invoc_array[(4)] = G__77975);

(invoc_array[(5)] = G__77976);

(invoc_array[(6)] = G__77977);

(invoc_array[(7)] = G__77978);

(invoc_array[(8)] = G__77979);

(invoc_array[(9)] = G__77980);

(invoc_array[(10)] = G__77981);

(invoc_array[(11)] = G__77982);

(invoc_array[(12)] = G__77983);

(invoc_array[(13)] = G__77984);

(invoc_array[(14)] = G__77985);

(invoc_array[(15)] = G__77986);

(invoc_array[(16)] = G__77987);

(invoc_array[(17)] = G__77988);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (19):
var G__78033 = cljs.core._nth(params,(0));
var G__78034 = cljs.core._nth(params,(1));
var G__78035 = cljs.core._nth(params,(2));
var G__78036 = cljs.core._nth(params,(3));
var G__78037 = cljs.core._nth(params,(4));
var G__78038 = cljs.core._nth(params,(5));
var G__78039 = cljs.core._nth(params,(6));
var G__78040 = cljs.core._nth(params,(7));
var G__78041 = cljs.core._nth(params,(8));
var G__78042 = cljs.core._nth(params,(9));
var G__78043 = cljs.core._nth(params,(10));
var G__78044 = cljs.core._nth(params,(11));
var G__78045 = cljs.core._nth(params,(12));
var G__78046 = cljs.core._nth(params,(13));
var G__78047 = cljs.core._nth(params,(14));
var G__78048 = cljs.core._nth(params,(15));
var G__78049 = cljs.core._nth(params,(16));
var G__78050 = cljs.core._nth(params,(17));
var G__78051 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__78014,G__78015,G__78016,G__78017,G__78018,G__78019,G__78020,G__78021,G__78022,G__78023,G__78024,G__78025,G__78026,G__78027,G__78028,G__78029,G__78030,G__78031,G__78032){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78014);

(invoc_array[(1)] = G__78015);

(invoc_array[(2)] = G__78016);

(invoc_array[(3)] = G__78017);

(invoc_array[(4)] = G__78018);

(invoc_array[(5)] = G__78019);

(invoc_array[(6)] = G__78020);

(invoc_array[(7)] = G__78021);

(invoc_array[(8)] = G__78022);

(invoc_array[(9)] = G__78023);

(invoc_array[(10)] = G__78024);

(invoc_array[(11)] = G__78025);

(invoc_array[(12)] = G__78026);

(invoc_array[(13)] = G__78027);

(invoc_array[(14)] = G__78028);

(invoc_array[(15)] = G__78029);

(invoc_array[(16)] = G__78030);

(invoc_array[(17)] = G__78031);

(invoc_array[(18)] = G__78032);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
case (20):
var G__78081 = cljs.core._nth(params,(0));
var G__78082 = cljs.core._nth(params,(1));
var G__78083 = cljs.core._nth(params,(2));
var G__78084 = cljs.core._nth(params,(3));
var G__78085 = cljs.core._nth(params,(4));
var G__78086 = cljs.core._nth(params,(5));
var G__78087 = cljs.core._nth(params,(6));
var G__78088 = cljs.core._nth(params,(7));
var G__78089 = cljs.core._nth(params,(8));
var G__78090 = cljs.core._nth(params,(9));
var G__78091 = cljs.core._nth(params,(10));
var G__78092 = cljs.core._nth(params,(11));
var G__78093 = cljs.core._nth(params,(12));
var G__78094 = cljs.core._nth(params,(13));
var G__78095 = cljs.core._nth(params,(14));
var G__78096 = cljs.core._nth(params,(15));
var G__78097 = cljs.core._nth(params,(16));
var G__78098 = cljs.core._nth(params,(17));
var G__78099 = cljs.core._nth(params,(18));
var G__78100 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__78061,G__78062,G__78063,G__78064,G__78065,G__78066,G__78067,G__78068,G__78069,G__78070,G__78071,G__78072,G__78073,G__78074,G__78075,G__78076,G__78077,G__78078,G__78079,G__78080){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__78061);

(invoc_array[(1)] = G__78062);

(invoc_array[(2)] = G__78063);

(invoc_array[(3)] = G__78064);

(invoc_array[(4)] = G__78065);

(invoc_array[(5)] = G__78066);

(invoc_array[(6)] = G__78067);

(invoc_array[(7)] = G__78068);

(invoc_array[(8)] = G__78069);

(invoc_array[(9)] = G__78070);

(invoc_array[(10)] = G__78071);

(invoc_array[(11)] = G__78072);

(invoc_array[(12)] = G__78073);

(invoc_array[(13)] = G__78074);

(invoc_array[(14)] = G__78075);

(invoc_array[(15)] = G__78076);

(invoc_array[(16)] = G__78077);

(invoc_array[(17)] = G__78078);

(invoc_array[(18)] = G__78079);

(invoc_array[(19)] = G__78080);

while(true){
var ret__76048__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__76048__auto__)){
continue;
} else {
return ret__76048__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77607)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var G__78493__delegate = function (args){
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
var G__78493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78494__i = 0, G__78494__a = new Array(arguments.length -  0);
while (G__78494__i < G__78494__a.length) {G__78494__a[G__78494__i] = arguments[G__78494__i + 0]; ++G__78494__i;}
  args = new cljs.core.IndexedSeq(G__78494__a,0,null);
} 
return G__78493__delegate.call(this,args);};
G__78493.cljs$lang$maxFixedArity = 0;
G__78493.cljs$lang$applyTo = (function (arglist__78495){
var args = cljs.core.seq(arglist__78495);
return G__78493__delegate(args);
});
G__78493.cljs$core$IFn$_invoke$arity$variadic = G__78493__delegate;
return G__78493;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__78121_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__78121_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
