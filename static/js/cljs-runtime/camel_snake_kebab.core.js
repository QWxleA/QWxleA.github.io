goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81628 = arguments.length;
var i__5767__auto___81629 = (0);
while(true){
if((i__5767__auto___81629 < len__5766__auto___81628)){
args__5772__auto__.push((arguments[i__5767__auto___81629]));

var G__81630 = (i__5767__auto___81629 + (1));
i__5767__auto___81629 = G__81630;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq81350){
var G__81351 = cljs.core.first(seq81350);
var seq81350__$1 = cljs.core.next(seq81350);
var G__81352 = cljs.core.first(seq81350__$1);
var seq81350__$2 = cljs.core.next(seq81350__$1);
var G__81353 = cljs.core.first(seq81350__$2);
var seq81350__$3 = cljs.core.next(seq81350__$2);
var G__81354 = cljs.core.first(seq81350__$3);
var seq81350__$4 = cljs.core.next(seq81350__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81351,G__81352,G__81353,G__81354,seq81350__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81631 = arguments.length;
var i__5767__auto___81632 = (0);
while(true){
if((i__5767__auto___81632 < len__5766__auto___81631)){
args__5772__auto__.push((arguments[i__5767__auto___81632]));

var G__81633 = (i__5767__auto___81632 + (1));
i__5767__auto___81632 = G__81633;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__81310__auto__,rest__81311__auto__){
var convert_case__81312__auto__ = (function (p1__81309__81313__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__81309__81313__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81311__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81310__auto__,convert_case__81312__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq81365){
var G__81366 = cljs.core.first(seq81365);
var seq81365__$1 = cljs.core.next(seq81365);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81366,seq81365__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81634 = arguments.length;
var i__5767__auto___81635 = (0);
while(true){
if((i__5767__auto___81635 < len__5766__auto___81634)){
args__5772__auto__.push((arguments[i__5767__auto___81635]));

var G__81636 = (i__5767__auto___81635 + (1));
i__5767__auto___81635 = G__81636;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq81378){
var G__81380 = cljs.core.first(seq81378);
var seq81378__$1 = cljs.core.next(seq81378);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81380,seq81378__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81637 = arguments.length;
var i__5767__auto___81638 = (0);
while(true){
if((i__5767__auto___81638 < len__5766__auto___81637)){
args__5772__auto__.push((arguments[i__5767__auto___81638]));

var G__81639 = (i__5767__auto___81638 + (1));
i__5767__auto___81638 = G__81639;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq81388){
var G__81389 = cljs.core.first(seq81388);
var seq81388__$1 = cljs.core.next(seq81388);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81389,seq81388__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81640 = arguments.length;
var i__5767__auto___81641 = (0);
while(true){
if((i__5767__auto___81641 < len__5766__auto___81640)){
args__5772__auto__.push((arguments[i__5767__auto___81641]));

var G__81642 = (i__5767__auto___81641 + (1));
i__5767__auto___81641 = G__81642;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq81391){
var G__81392 = cljs.core.first(seq81391);
var seq81391__$1 = cljs.core.next(seq81391);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81392,seq81391__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81643 = arguments.length;
var i__5767__auto___81644 = (0);
while(true){
if((i__5767__auto___81644 < len__5766__auto___81643)){
args__5772__auto__.push((arguments[i__5767__auto___81644]));

var G__81645 = (i__5767__auto___81644 + (1));
i__5767__auto___81644 = G__81645;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__81310__auto__,rest__81311__auto__){
var convert_case__81312__auto__ = (function (p1__81309__81313__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__81309__81313__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81311__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81310__auto__,convert_case__81312__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq81400){
var G__81401 = cljs.core.first(seq81400);
var seq81400__$1 = cljs.core.next(seq81400);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81401,seq81400__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81646 = arguments.length;
var i__5767__auto___81647 = (0);
while(true){
if((i__5767__auto___81647 < len__5766__auto___81646)){
args__5772__auto__.push((arguments[i__5767__auto___81647]));

var G__81648 = (i__5767__auto___81647 + (1));
i__5767__auto___81647 = G__81648;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq81425){
var G__81426 = cljs.core.first(seq81425);
var seq81425__$1 = cljs.core.next(seq81425);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81426,seq81425__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81649 = arguments.length;
var i__5767__auto___81650 = (0);
while(true){
if((i__5767__auto___81650 < len__5766__auto___81649)){
args__5772__auto__.push((arguments[i__5767__auto___81650]));

var G__81651 = (i__5767__auto___81650 + (1));
i__5767__auto___81650 = G__81651;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq81442){
var G__81443 = cljs.core.first(seq81442);
var seq81442__$1 = cljs.core.next(seq81442);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81443,seq81442__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81652 = arguments.length;
var i__5767__auto___81653 = (0);
while(true){
if((i__5767__auto___81653 < len__5766__auto___81652)){
args__5772__auto__.push((arguments[i__5767__auto___81653]));

var G__81654 = (i__5767__auto___81653 + (1));
i__5767__auto___81653 = G__81654;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq81452){
var G__81453 = cljs.core.first(seq81452);
var seq81452__$1 = cljs.core.next(seq81452);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81453,seq81452__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81655 = arguments.length;
var i__5767__auto___81656 = (0);
while(true){
if((i__5767__auto___81656 < len__5766__auto___81655)){
args__5772__auto__.push((arguments[i__5767__auto___81656]));

var G__81658 = (i__5767__auto___81656 + (1));
i__5767__auto___81656 = G__81658;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__81310__auto__,rest__81311__auto__){
var convert_case__81312__auto__ = (function (p1__81309__81313__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__81309__81313__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81311__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81310__auto__,convert_case__81312__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq81459){
var G__81460 = cljs.core.first(seq81459);
var seq81459__$1 = cljs.core.next(seq81459);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81460,seq81459__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81659 = arguments.length;
var i__5767__auto___81660 = (0);
while(true){
if((i__5767__auto___81660 < len__5766__auto___81659)){
args__5772__auto__.push((arguments[i__5767__auto___81660]));

var G__81661 = (i__5767__auto___81660 + (1));
i__5767__auto___81660 = G__81661;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq81468){
var G__81469 = cljs.core.first(seq81468);
var seq81468__$1 = cljs.core.next(seq81468);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81469,seq81468__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81662 = arguments.length;
var i__5767__auto___81663 = (0);
while(true){
if((i__5767__auto___81663 < len__5766__auto___81662)){
args__5772__auto__.push((arguments[i__5767__auto___81663]));

var G__81664 = (i__5767__auto___81663 + (1));
i__5767__auto___81663 = G__81664;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq81472){
var G__81473 = cljs.core.first(seq81472);
var seq81472__$1 = cljs.core.next(seq81472);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81473,seq81472__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81665 = arguments.length;
var i__5767__auto___81666 = (0);
while(true){
if((i__5767__auto___81666 < len__5766__auto___81665)){
args__5772__auto__.push((arguments[i__5767__auto___81666]));

var G__81667 = (i__5767__auto___81666 + (1));
i__5767__auto___81666 = G__81667;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq81492){
var G__81493 = cljs.core.first(seq81492);
var seq81492__$1 = cljs.core.next(seq81492);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81493,seq81492__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81668 = arguments.length;
var i__5767__auto___81669 = (0);
while(true){
if((i__5767__auto___81669 < len__5766__auto___81668)){
args__5772__auto__.push((arguments[i__5767__auto___81669]));

var G__81670 = (i__5767__auto___81669 + (1));
i__5767__auto___81669 = G__81670;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__81310__auto__,rest__81311__auto__){
var convert_case__81312__auto__ = (function (p1__81309__81313__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__81309__81313__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81311__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81310__auto__,convert_case__81312__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq81524){
var G__81525 = cljs.core.first(seq81524);
var seq81524__$1 = cljs.core.next(seq81524);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81525,seq81524__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81671 = arguments.length;
var i__5767__auto___81672 = (0);
while(true){
if((i__5767__auto___81672 < len__5766__auto___81671)){
args__5772__auto__.push((arguments[i__5767__auto___81672]));

var G__81673 = (i__5767__auto___81672 + (1));
i__5767__auto___81672 = G__81673;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq81539){
var G__81540 = cljs.core.first(seq81539);
var seq81539__$1 = cljs.core.next(seq81539);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81540,seq81539__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81674 = arguments.length;
var i__5767__auto___81675 = (0);
while(true){
if((i__5767__auto___81675 < len__5766__auto___81674)){
args__5772__auto__.push((arguments[i__5767__auto___81675]));

var G__81676 = (i__5767__auto___81675 + (1));
i__5767__auto___81675 = G__81676;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq81549){
var G__81550 = cljs.core.first(seq81549);
var seq81549__$1 = cljs.core.next(seq81549);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81550,seq81549__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81677 = arguments.length;
var i__5767__auto___81678 = (0);
while(true){
if((i__5767__auto___81678 < len__5766__auto___81677)){
args__5772__auto__.push((arguments[i__5767__auto___81678]));

var G__81679 = (i__5767__auto___81678 + (1));
i__5767__auto___81678 = G__81679;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq81554){
var G__81555 = cljs.core.first(seq81554);
var seq81554__$1 = cljs.core.next(seq81554);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81555,seq81554__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81680 = arguments.length;
var i__5767__auto___81681 = (0);
while(true){
if((i__5767__auto___81681 < len__5766__auto___81680)){
args__5772__auto__.push((arguments[i__5767__auto___81681]));

var G__81682 = (i__5767__auto___81681 + (1));
i__5767__auto___81681 = G__81682;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__81310__auto__,rest__81311__auto__){
var convert_case__81312__auto__ = (function (p1__81309__81313__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__81309__81313__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81311__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81310__auto__,convert_case__81312__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq81559){
var G__81560 = cljs.core.first(seq81559);
var seq81559__$1 = cljs.core.next(seq81559);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81560,seq81559__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81683 = arguments.length;
var i__5767__auto___81684 = (0);
while(true){
if((i__5767__auto___81684 < len__5766__auto___81683)){
args__5772__auto__.push((arguments[i__5767__auto___81684]));

var G__81685 = (i__5767__auto___81684 + (1));
i__5767__auto___81684 = G__81685;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq81564){
var G__81565 = cljs.core.first(seq81564);
var seq81564__$1 = cljs.core.next(seq81564);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81565,seq81564__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81686 = arguments.length;
var i__5767__auto___81688 = (0);
while(true){
if((i__5767__auto___81688 < len__5766__auto___81686)){
args__5772__auto__.push((arguments[i__5767__auto___81688]));

var G__81689 = (i__5767__auto___81688 + (1));
i__5767__auto___81688 = G__81689;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq81570){
var G__81571 = cljs.core.first(seq81570);
var seq81570__$1 = cljs.core.next(seq81570);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81571,seq81570__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81690 = arguments.length;
var i__5767__auto___81691 = (0);
while(true){
if((i__5767__auto___81691 < len__5766__auto___81690)){
args__5772__auto__.push((arguments[i__5767__auto___81691]));

var G__81692 = (i__5767__auto___81691 + (1));
i__5767__auto___81691 = G__81692;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq81576){
var G__81577 = cljs.core.first(seq81576);
var seq81576__$1 = cljs.core.next(seq81576);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81577,seq81576__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81693 = arguments.length;
var i__5767__auto___81694 = (0);
while(true){
if((i__5767__auto___81694 < len__5766__auto___81693)){
args__5772__auto__.push((arguments[i__5767__auto___81694]));

var G__81695 = (i__5767__auto___81694 + (1));
i__5767__auto___81694 = G__81695;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__81310__auto__,rest__81311__auto__){
var convert_case__81312__auto__ = (function (p1__81309__81313__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__81309__81313__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81311__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81310__auto__,convert_case__81312__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq81581){
var G__81582 = cljs.core.first(seq81581);
var seq81581__$1 = cljs.core.next(seq81581);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81582,seq81581__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81696 = arguments.length;
var i__5767__auto___81697 = (0);
while(true){
if((i__5767__auto___81697 < len__5766__auto___81696)){
args__5772__auto__.push((arguments[i__5767__auto___81697]));

var G__81698 = (i__5767__auto___81697 + (1));
i__5767__auto___81697 = G__81698;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq81586){
var G__81587 = cljs.core.first(seq81586);
var seq81586__$1 = cljs.core.next(seq81586);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81587,seq81586__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81699 = arguments.length;
var i__5767__auto___81700 = (0);
while(true){
if((i__5767__auto___81700 < len__5766__auto___81699)){
args__5772__auto__.push((arguments[i__5767__auto___81700]));

var G__81701 = (i__5767__auto___81700 + (1));
i__5767__auto___81700 = G__81701;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq81592){
var G__81593 = cljs.core.first(seq81592);
var seq81592__$1 = cljs.core.next(seq81592);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81593,seq81592__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81702 = arguments.length;
var i__5767__auto___81703 = (0);
while(true){
if((i__5767__auto___81703 < len__5766__auto___81702)){
args__5772__auto__.push((arguments[i__5767__auto___81703]));

var G__81704 = (i__5767__auto___81703 + (1));
i__5767__auto___81703 = G__81704;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq81598){
var G__81599 = cljs.core.first(seq81598);
var seq81598__$1 = cljs.core.next(seq81598);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81599,seq81598__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81705 = arguments.length;
var i__5767__auto___81706 = (0);
while(true){
if((i__5767__auto___81706 < len__5766__auto___81705)){
args__5772__auto__.push((arguments[i__5767__auto___81706]));

var G__81707 = (i__5767__auto___81706 + (1));
i__5767__auto___81706 = G__81707;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__81310__auto__,rest__81311__auto__){
var convert_case__81312__auto__ = (function (p1__81309__81313__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__81309__81313__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81311__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81310__auto__,convert_case__81312__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq81615){
var G__81616 = cljs.core.first(seq81615);
var seq81615__$1 = cljs.core.next(seq81615);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81616,seq81615__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81708 = arguments.length;
var i__5767__auto___81709 = (0);
while(true){
if((i__5767__auto___81709 < len__5766__auto___81708)){
args__5772__auto__.push((arguments[i__5767__auto___81709]));

var G__81710 = (i__5767__auto___81709 + (1));
i__5767__auto___81709 = G__81710;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq81619){
var G__81620 = cljs.core.first(seq81619);
var seq81619__$1 = cljs.core.next(seq81619);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81620,seq81619__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81711 = arguments.length;
var i__5767__auto___81712 = (0);
while(true){
if((i__5767__auto___81712 < len__5766__auto___81711)){
args__5772__auto__.push((arguments[i__5767__auto___81712]));

var G__81713 = (i__5767__auto___81712 + (1));
i__5767__auto___81712 = G__81713;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq81621){
var G__81622 = cljs.core.first(seq81621);
var seq81621__$1 = cljs.core.next(seq81621);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81622,seq81621__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81714 = arguments.length;
var i__5767__auto___81715 = (0);
while(true){
if((i__5767__auto___81715 < len__5766__auto___81714)){
args__5772__auto__.push((arguments[i__5767__auto___81715]));

var G__81716 = (i__5767__auto___81715 + (1));
i__5767__auto___81715 = G__81716;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81315__auto__,rest__81316__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__81315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81316__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq81624){
var G__81625 = cljs.core.first(seq81624);
var seq81624__$1 = cljs.core.next(seq81624);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81625,seq81624__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
