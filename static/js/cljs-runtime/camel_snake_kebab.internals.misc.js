goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81143 = arguments.length;
var i__5767__auto___81144 = (0);
while(true){
if((i__5767__auto___81144 < len__5766__auto___81143)){
args__5772__auto__.push((arguments[i__5767__auto___81144]));

var G__81145 = (i__5767__auto___81144 + (1));
i__5767__auto___81144 = G__81145;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__81137){
var map__81138 = p__81137;
var map__81138__$1 = cljs.core.__destructure_map(map__81138);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81138__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5718__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5718__auto__){
var vec__81139 = temp__5718__auto__;
var seq__81140 = cljs.core.seq(vec__81139);
var first__81141 = cljs.core.first(seq__81140);
var seq__81140__$1 = cljs.core.next(seq__81140);
var first = first__81141;
var rest = seq__81140__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq81132){
var G__81133 = cljs.core.first(seq81132);
var seq81132__$1 = cljs.core.next(seq81132);
var G__81134 = cljs.core.first(seq81132__$1);
var seq81132__$2 = cljs.core.next(seq81132__$1);
var G__81135 = cljs.core.first(seq81132__$2);
var seq81132__$3 = cljs.core.next(seq81132__$2);
var G__81136 = cljs.core.first(seq81132__$3);
var seq81132__$4 = cljs.core.next(seq81132__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81133,G__81134,G__81135,G__81136,seq81132__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5043__auto__ = (function (){var G__81142 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__81142) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__81142));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
