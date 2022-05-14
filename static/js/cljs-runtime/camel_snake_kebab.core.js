goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95911 = arguments.length;
var i__4865__auto___95912 = (0);
while(true){
if((i__4865__auto___95912 < len__4864__auto___95911)){
args__4870__auto__.push((arguments[i__4865__auto___95912]));

var G__95913 = (i__4865__auto___95912 + (1));
i__4865__auto___95912 = G__95913;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((4) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq95804){
var G__95805 = cljs.core.first(seq95804);
var seq95804__$1 = cljs.core.next(seq95804);
var G__95806 = cljs.core.first(seq95804__$1);
var seq95804__$2 = cljs.core.next(seq95804__$1);
var G__95807 = cljs.core.first(seq95804__$2);
var seq95804__$3 = cljs.core.next(seq95804__$2);
var G__95808 = cljs.core.first(seq95804__$3);
var seq95804__$4 = cljs.core.next(seq95804__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95805,G__95806,G__95807,G__95808,seq95804__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95914 = arguments.length;
var i__4865__auto___95915 = (0);
while(true){
if((i__4865__auto___95915 < len__4864__auto___95914)){
args__4870__auto__.push((arguments[i__4865__auto___95915]));

var G__95916 = (i__4865__auto___95915 + (1));
i__4865__auto___95915 = G__95916;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__95769__auto__,rest__95770__auto__){
var convert_case__95771__auto__ = (function (p1__95768__95772__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__95768__95772__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95770__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__95769__auto__,convert_case__95771__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq95816){
var G__95817 = cljs.core.first(seq95816);
var seq95816__$1 = cljs.core.next(seq95816);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95817,seq95816__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95917 = arguments.length;
var i__4865__auto___95918 = (0);
while(true){
if((i__4865__auto___95918 < len__4864__auto___95917)){
args__4870__auto__.push((arguments[i__4865__auto___95918]));

var G__95919 = (i__4865__auto___95918 + (1));
i__4865__auto___95918 = G__95919;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq95820){
var G__95821 = cljs.core.first(seq95820);
var seq95820__$1 = cljs.core.next(seq95820);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95821,seq95820__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95920 = arguments.length;
var i__4865__auto___95921 = (0);
while(true){
if((i__4865__auto___95921 < len__4864__auto___95920)){
args__4870__auto__.push((arguments[i__4865__auto___95921]));

var G__95922 = (i__4865__auto___95921 + (1));
i__4865__auto___95921 = G__95922;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq95823){
var G__95824 = cljs.core.first(seq95823);
var seq95823__$1 = cljs.core.next(seq95823);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95824,seq95823__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95923 = arguments.length;
var i__4865__auto___95924 = (0);
while(true){
if((i__4865__auto___95924 < len__4864__auto___95923)){
args__4870__auto__.push((arguments[i__4865__auto___95924]));

var G__95925 = (i__4865__auto___95924 + (1));
i__4865__auto___95924 = G__95925;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq95825){
var G__95826 = cljs.core.first(seq95825);
var seq95825__$1 = cljs.core.next(seq95825);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95826,seq95825__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95926 = arguments.length;
var i__4865__auto___95927 = (0);
while(true){
if((i__4865__auto___95927 < len__4864__auto___95926)){
args__4870__auto__.push((arguments[i__4865__auto___95927]));

var G__95928 = (i__4865__auto___95927 + (1));
i__4865__auto___95927 = G__95928;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__95769__auto__,rest__95770__auto__){
var convert_case__95771__auto__ = (function (p1__95768__95772__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__95768__95772__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95770__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__95769__auto__,convert_case__95771__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq95827){
var G__95828 = cljs.core.first(seq95827);
var seq95827__$1 = cljs.core.next(seq95827);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95828,seq95827__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95929 = arguments.length;
var i__4865__auto___95930 = (0);
while(true){
if((i__4865__auto___95930 < len__4864__auto___95929)){
args__4870__auto__.push((arguments[i__4865__auto___95930]));

var G__95931 = (i__4865__auto___95930 + (1));
i__4865__auto___95930 = G__95931;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq95836){
var G__95837 = cljs.core.first(seq95836);
var seq95836__$1 = cljs.core.next(seq95836);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95837,seq95836__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95932 = arguments.length;
var i__4865__auto___95933 = (0);
while(true){
if((i__4865__auto___95933 < len__4864__auto___95932)){
args__4870__auto__.push((arguments[i__4865__auto___95933]));

var G__95934 = (i__4865__auto___95933 + (1));
i__4865__auto___95933 = G__95934;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq95838){
var G__95839 = cljs.core.first(seq95838);
var seq95838__$1 = cljs.core.next(seq95838);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95839,seq95838__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95935 = arguments.length;
var i__4865__auto___95936 = (0);
while(true){
if((i__4865__auto___95936 < len__4864__auto___95935)){
args__4870__auto__.push((arguments[i__4865__auto___95936]));

var G__95937 = (i__4865__auto___95936 + (1));
i__4865__auto___95936 = G__95937;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq95840){
var G__95841 = cljs.core.first(seq95840);
var seq95840__$1 = cljs.core.next(seq95840);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95841,seq95840__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95938 = arguments.length;
var i__4865__auto___95939 = (0);
while(true){
if((i__4865__auto___95939 < len__4864__auto___95938)){
args__4870__auto__.push((arguments[i__4865__auto___95939]));

var G__95940 = (i__4865__auto___95939 + (1));
i__4865__auto___95939 = G__95940;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__95769__auto__,rest__95770__auto__){
var convert_case__95771__auto__ = (function (p1__95768__95772__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__95768__95772__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95770__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__95769__auto__,convert_case__95771__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq95844){
var G__95845 = cljs.core.first(seq95844);
var seq95844__$1 = cljs.core.next(seq95844);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95845,seq95844__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95941 = arguments.length;
var i__4865__auto___95942 = (0);
while(true){
if((i__4865__auto___95942 < len__4864__auto___95941)){
args__4870__auto__.push((arguments[i__4865__auto___95942]));

var G__95943 = (i__4865__auto___95942 + (1));
i__4865__auto___95942 = G__95943;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq95851){
var G__95852 = cljs.core.first(seq95851);
var seq95851__$1 = cljs.core.next(seq95851);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95852,seq95851__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95944 = arguments.length;
var i__4865__auto___95945 = (0);
while(true){
if((i__4865__auto___95945 < len__4864__auto___95944)){
args__4870__auto__.push((arguments[i__4865__auto___95945]));

var G__95946 = (i__4865__auto___95945 + (1));
i__4865__auto___95945 = G__95946;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq95853){
var G__95854 = cljs.core.first(seq95853);
var seq95853__$1 = cljs.core.next(seq95853);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95854,seq95853__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95947 = arguments.length;
var i__4865__auto___95948 = (0);
while(true){
if((i__4865__auto___95948 < len__4864__auto___95947)){
args__4870__auto__.push((arguments[i__4865__auto___95948]));

var G__95949 = (i__4865__auto___95948 + (1));
i__4865__auto___95948 = G__95949;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq95856){
var G__95857 = cljs.core.first(seq95856);
var seq95856__$1 = cljs.core.next(seq95856);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95857,seq95856__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95951 = arguments.length;
var i__4865__auto___95952 = (0);
while(true){
if((i__4865__auto___95952 < len__4864__auto___95951)){
args__4870__auto__.push((arguments[i__4865__auto___95952]));

var G__95954 = (i__4865__auto___95952 + (1));
i__4865__auto___95952 = G__95954;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__95769__auto__,rest__95770__auto__){
var convert_case__95771__auto__ = (function (p1__95768__95772__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__95768__95772__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95770__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__95769__auto__,convert_case__95771__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq95858){
var G__95859 = cljs.core.first(seq95858);
var seq95858__$1 = cljs.core.next(seq95858);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95859,seq95858__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95955 = arguments.length;
var i__4865__auto___95956 = (0);
while(true){
if((i__4865__auto___95956 < len__4864__auto___95955)){
args__4870__auto__.push((arguments[i__4865__auto___95956]));

var G__95957 = (i__4865__auto___95956 + (1));
i__4865__auto___95956 = G__95957;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq95860){
var G__95861 = cljs.core.first(seq95860);
var seq95860__$1 = cljs.core.next(seq95860);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95861,seq95860__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95961 = arguments.length;
var i__4865__auto___95962 = (0);
while(true){
if((i__4865__auto___95962 < len__4864__auto___95961)){
args__4870__auto__.push((arguments[i__4865__auto___95962]));

var G__95963 = (i__4865__auto___95962 + (1));
i__4865__auto___95962 = G__95963;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq95862){
var G__95863 = cljs.core.first(seq95862);
var seq95862__$1 = cljs.core.next(seq95862);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95863,seq95862__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95965 = arguments.length;
var i__4865__auto___95966 = (0);
while(true){
if((i__4865__auto___95966 < len__4864__auto___95965)){
args__4870__auto__.push((arguments[i__4865__auto___95966]));

var G__95967 = (i__4865__auto___95966 + (1));
i__4865__auto___95966 = G__95967;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq95864){
var G__95865 = cljs.core.first(seq95864);
var seq95864__$1 = cljs.core.next(seq95864);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95865,seq95864__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95968 = arguments.length;
var i__4865__auto___95969 = (0);
while(true){
if((i__4865__auto___95969 < len__4864__auto___95968)){
args__4870__auto__.push((arguments[i__4865__auto___95969]));

var G__95970 = (i__4865__auto___95969 + (1));
i__4865__auto___95969 = G__95970;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__95769__auto__,rest__95770__auto__){
var convert_case__95771__auto__ = (function (p1__95768__95772__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__95768__95772__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95770__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__95769__auto__,convert_case__95771__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq95882){
var G__95883 = cljs.core.first(seq95882);
var seq95882__$1 = cljs.core.next(seq95882);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95883,seq95882__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95973 = arguments.length;
var i__4865__auto___95974 = (0);
while(true){
if((i__4865__auto___95974 < len__4864__auto___95973)){
args__4870__auto__.push((arguments[i__4865__auto___95974]));

var G__95975 = (i__4865__auto___95974 + (1));
i__4865__auto___95974 = G__95975;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq95885){
var G__95886 = cljs.core.first(seq95885);
var seq95885__$1 = cljs.core.next(seq95885);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95886,seq95885__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95980 = arguments.length;
var i__4865__auto___95981 = (0);
while(true){
if((i__4865__auto___95981 < len__4864__auto___95980)){
args__4870__auto__.push((arguments[i__4865__auto___95981]));

var G__95982 = (i__4865__auto___95981 + (1));
i__4865__auto___95981 = G__95982;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq95888){
var G__95889 = cljs.core.first(seq95888);
var seq95888__$1 = cljs.core.next(seq95888);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95889,seq95888__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95983 = arguments.length;
var i__4865__auto___95984 = (0);
while(true){
if((i__4865__auto___95984 < len__4864__auto___95983)){
args__4870__auto__.push((arguments[i__4865__auto___95984]));

var G__95985 = (i__4865__auto___95984 + (1));
i__4865__auto___95984 = G__95985;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq95893){
var G__95894 = cljs.core.first(seq95893);
var seq95893__$1 = cljs.core.next(seq95893);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95894,seq95893__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___95987 = arguments.length;
var i__4865__auto___95988 = (0);
while(true){
if((i__4865__auto___95988 < len__4864__auto___95987)){
args__4870__auto__.push((arguments[i__4865__auto___95988]));

var G__95989 = (i__4865__auto___95988 + (1));
i__4865__auto___95988 = G__95989;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__95769__auto__,rest__95770__auto__){
var convert_case__95771__auto__ = (function (p1__95768__95772__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__95768__95772__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95770__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__95769__auto__,convert_case__95771__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq95895){
var G__95896 = cljs.core.first(seq95895);
var seq95895__$1 = cljs.core.next(seq95895);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95896,seq95895__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___96001 = arguments.length;
var i__4865__auto___96002 = (0);
while(true){
if((i__4865__auto___96002 < len__4864__auto___96001)){
args__4870__auto__.push((arguments[i__4865__auto___96002]));

var G__96003 = (i__4865__auto___96002 + (1));
i__4865__auto___96002 = G__96003;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq95897){
var G__95898 = cljs.core.first(seq95897);
var seq95897__$1 = cljs.core.next(seq95897);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95898,seq95897__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___96005 = arguments.length;
var i__4865__auto___96006 = (0);
while(true){
if((i__4865__auto___96006 < len__4864__auto___96005)){
args__4870__auto__.push((arguments[i__4865__auto___96006]));

var G__96007 = (i__4865__auto___96006 + (1));
i__4865__auto___96006 = G__96007;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq95899){
var G__95900 = cljs.core.first(seq95899);
var seq95899__$1 = cljs.core.next(seq95899);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95900,seq95899__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___96014 = arguments.length;
var i__4865__auto___96015 = (0);
while(true){
if((i__4865__auto___96015 < len__4864__auto___96014)){
args__4870__auto__.push((arguments[i__4865__auto___96015]));

var G__96016 = (i__4865__auto___96015 + (1));
i__4865__auto___96015 = G__96016;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq95901){
var G__95902 = cljs.core.first(seq95901);
var seq95901__$1 = cljs.core.next(seq95901);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95902,seq95901__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___96018 = arguments.length;
var i__4865__auto___96019 = (0);
while(true){
if((i__4865__auto___96019 < len__4864__auto___96018)){
args__4870__auto__.push((arguments[i__4865__auto___96019]));

var G__96020 = (i__4865__auto___96019 + (1));
i__4865__auto___96019 = G__96020;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__95769__auto__,rest__95770__auto__){
var convert_case__95771__auto__ = (function (p1__95768__95772__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__95768__95772__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95770__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__95769__auto__,convert_case__95771__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq95903){
var G__95904 = cljs.core.first(seq95903);
var seq95903__$1 = cljs.core.next(seq95903);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95904,seq95903__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4870__auto__ = [];
var len__4864__auto___96021 = arguments.length;
var i__4865__auto___96022 = (0);
while(true){
if((i__4865__auto___96022 < len__4864__auto___96021)){
args__4870__auto__.push((arguments[i__4865__auto___96022]));

var G__96023 = (i__4865__auto___96022 + (1));
i__4865__auto___96022 = G__96023;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq95905){
var G__95906 = cljs.core.first(seq95905);
var seq95905__$1 = cljs.core.next(seq95905);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95906,seq95905__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___96028 = arguments.length;
var i__4865__auto___96033 = (0);
while(true){
if((i__4865__auto___96033 < len__4864__auto___96028)){
args__4870__auto__.push((arguments[i__4865__auto___96033]));

var G__96034 = (i__4865__auto___96033 + (1));
i__4865__auto___96033 = G__96034;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq95907){
var G__95908 = cljs.core.first(seq95907);
var seq95907__$1 = cljs.core.next(seq95907);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95908,seq95907__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___96043 = arguments.length;
var i__4865__auto___96044 = (0);
while(true){
if((i__4865__auto___96044 < len__4864__auto___96043)){
args__4870__auto__.push((arguments[i__4865__auto___96044]));

var G__96045 = (i__4865__auto___96044 + (1));
i__4865__auto___96044 = G__96045;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__95774__auto__,rest__95775__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__95774__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__95775__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq95909){
var G__95910 = cljs.core.first(seq95909);
var seq95909__$1 = cljs.core.next(seq95909);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95910,seq95909__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
