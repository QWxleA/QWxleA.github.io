goog.provide('tongue.core');
tongue.core.inst_formatter = tongue.inst.formatter;
tongue.core.format_inst_iso = (function (){var G__72123 = "{year}-{month-numeric-padded}-{day-padded}T{hour24-padded}:{minutes-padded}:{seconds-padded}";
var G__72124 = cljs.core.PersistentArrayMap.EMPTY;
return (tongue.core.inst_formatter.cljs$core$IFn$_invoke$arity$2 ? tongue.core.inst_formatter.cljs$core$IFn$_invoke$arity$2(G__72123,G__72124) : tongue.core.inst_formatter.call(null,G__72123,G__72124));
})();
tongue.core.number_formatter = tongue.number.formatter;
tongue.core.parse_long = (function tongue$core$parse_long(s){
return parseInt(s);
});
if((typeof tongue !== 'undefined') && (typeof tongue.core !== 'undefined') && (typeof tongue.core.tags_cache !== 'undefined')){
} else {
tongue.core.tags_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * :az-Arab-IR => (:az-Arab-IR :az-Arab :az), cached
 */
tongue.core.tags = (function tongue$core$tags(locale){
var or__4253__auto__ = (function (){var fexpr__72125 = cljs.core.deref(tongue.core.tags_cache);
return (fexpr__72125.cljs$core$IFn$_invoke$arity$1 ? fexpr__72125.cljs$core$IFn$_invoke$arity$1(locale) : fexpr__72125.call(null,locale));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var tags = (function (){var subtags = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(locale),/-/);
var last_tag = null;
var tags = cljs.core.List.EMPTY;
while(true){
var temp__5722__auto__ = cljs.core.first(subtags);
if((temp__5722__auto__ == null)){
return tags;
} else {
var subtag = temp__5722__auto__;
var tag = [last_tag,(cljs.core.truth_(last_tag)?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subtag)].join('');
var G__72163 = cljs.core.next(subtags);
var G__72164 = tag;
var G__72165 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tags,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag));
subtags = G__72163;
last_tag = G__72164;
tags = G__72165;
continue;
}
break;
}
})();
tongue.core.tags_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tongue.core.tags_cache.cljs$core$IDeref$_deref$arity$1(null),locale,tags));

return tags;
}
});
tongue.core.lookup_template_for_locale = (function tongue$core$lookup_template_for_locale(dicts,locale,key){
if(cljs.core.truth_(locale)){
var tags = tongue.core.tags(locale);
while(true){
var temp__5724__auto__ = cljs.core.first(tags);
if((temp__5724__auto__ == null)){
return null;
} else {
var tag = temp__5724__auto__;
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dicts,tag),key);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__72167 = cljs.core.next(tags);
tags = G__72167;
continue;
}
}
break;
}
} else {
return null;
}
});
tongue.core.lookup_template = (function tongue$core$lookup_template(dicts,locale,key){
var or__4253__auto__ = tongue.core.lookup_template_for_locale(dicts,locale,key);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = tongue.core.lookup_template_for_locale(dicts,new cljs.core.Keyword("tongue","fallback","tongue/fallback",1378320181).cljs$core$IFn$_invoke$arity$1(dicts),key);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return ["{Missing key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"}"].join('');
}
}
});
tongue.core.escape_re_subst = (function tongue$core$escape_re_subst(str){
return clojure.string.replace(str,/\$/,"$$$$");
});
tongue.core.format_argument = (function tongue$core$format_argument(dicts,locale,x){
if(typeof x === 'number'){
var formatter = (function (){var or__4253__auto__ = tongue.core.lookup_template_for_locale(dicts,locale,new cljs.core.Keyword("tongue","format-number","tongue/format-number",-1083453276));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.str;
}
})();
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(x) : formatter.call(null,x));
} else {
if(cljs.core.inst_QMARK_(x)){
var formatter = (function (){var or__4253__auto__ = tongue.core.lookup_template_for_locale(dicts,locale,new cljs.core.Keyword("tongue","format-inst","tongue/format-inst",1968776314));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return tongue.core.format_inst_iso;
}
})();
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(x) : formatter.call(null,x));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);

}
}
});
tongue.core.translate = (function tongue$core$translate(var_args){
var G__72132 = arguments.length;
switch (G__72132) {
case 3:
return tongue.core.translate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tongue.core.translate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___72170 = arguments.length;
var i__4865__auto___72171 = (0);
while(true){
if((i__4865__auto___72171 < len__4864__auto___72170)){
args_arr__4885__auto__.push((arguments[i__4865__auto___72171]));

var G__72172 = (i__4865__auto___72171 + (1));
i__4865__auto___72171 = G__72172;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((4)),(0),null));
return tongue.core.translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4886__auto__);

}
});

(tongue.core.translate.cljs$core$IFn$_invoke$arity$3 = (function (dicts,locale,key){

var t = tongue.core.lookup_template(dicts,locale,key);
if(cljs.core.ifn_QMARK_(t)){
return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
} else {
return t;
}
}));

(tongue.core.translate.cljs$core$IFn$_invoke$arity$4 = (function (dicts,locale,key,x){

var t = tongue.core.lookup_template(dicts,locale,key);
var s = ((cljs.core.ifn_QMARK_(t))?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x)):t);
if(cljs.core.map_QMARK_(x)){
return clojure.string.replace(s,/\{([\w*!_?$%&=<>'\-+.#0-9]+|[\w*!_?$%&=<>'\-+.#0-9]+\/[\w*!_?$%&=<>'\-+.#0-9:]+)\}/,(function (p__72139){
var vec__72140 = p__72139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72140,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72140,(1),null);
return tongue.core.format_argument(dicts,locale,cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k)));
}));
} else {
return clojure.string.replace(s,/\{1\}/,tongue.core.escape_re_subst(tongue.core.format_argument(dicts,locale,x)));
}
}));

(tongue.core.translate.cljs$core$IFn$_invoke$arity$variadic = (function (dicts,locale,key,x,rest){

var args = cljs.core.cons(x,rest);
var t = tongue.core.lookup_template(dicts,locale,key);
var s = ((cljs.core.ifn_QMARK_(t))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(t,x,rest):t);
return clojure.string.replace(s,/\{(\d+)\}/,(function (p__72147){
var vec__72148 = p__72147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72148,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72148,(1),null);
var idx = tongue.core.parse_long(n);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(idx - (1)),["{Missing index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"}"].join(''));
return tongue.core.format_argument(dicts,locale,arg);
}));
}));

/** @this {Function} */
(tongue.core.translate.cljs$lang$applyTo = (function (seq72127){
var G__72128 = cljs.core.first(seq72127);
var seq72127__$1 = cljs.core.next(seq72127);
var G__72129 = cljs.core.first(seq72127__$1);
var seq72127__$2 = cljs.core.next(seq72127__$1);
var G__72130 = cljs.core.first(seq72127__$2);
var seq72127__$3 = cljs.core.next(seq72127__$2);
var G__72131 = cljs.core.first(seq72127__$3);
var seq72127__$4 = cljs.core.next(seq72127__$3);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72128,G__72129,G__72130,G__72131,seq72127__$4);
}));

(tongue.core.translate.cljs$lang$maxFixedArity = (4));

tongue.core.append_ns = (function tongue$core$append_ns(ns,segment){
return [(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"."].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(segment)].join('');
});
/**
 * Collapses nested maps into namespaced keywords:
 * { :ns { :key 1 }} => { :ns/key 1 }
 * { :animal { :flying { :bird 420 }}} => { :animal.flying/bird 420 }
 */
tongue.core.build_dict = (function tongue$core$build_dict(var_args){
var G__72152 = arguments.length;
switch (G__72152) {
case 1:
return tongue.core.build_dict.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tongue.core.build_dict.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tongue.core.build_dict.cljs$core$IFn$_invoke$arity$1 = (function (dict){
return tongue.core.build_dict.cljs$core$IFn$_invoke$arity$2(null,dict);
}));

(tongue.core.build_dict.cljs$core$IFn$_invoke$arity$2 = (function (ns,dict){
return cljs.core.reduce_kv((function (aggr,key,value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tongue",cljs.core.namespace(key))){
if((ns == null)){
} else {
throw (new Error(["Assert failed: ",":tongue/... keys can only be specified at top level","\n","(nil? ns)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aggr,key,value);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aggr,tongue.core.build_dict.cljs$core$IFn$_invoke$arity$2(tongue.core.append_ns(ns,cljs.core.name(key)),value)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aggr,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = ns;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.namespace(key);
}
})(),cljs.core.name(key)),value);

}
}
}),cljs.core.PersistentArrayMap.EMPTY,dict);
}));

(tongue.core.build_dict.cljs$lang$maxFixedArity = 2);

tongue.core.build_dicts = (function tongue$core$build_dicts(dicts){
return cljs.core.reduce_kv((function (acc,lang,dict){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,lang,((cljs.core.map_QMARK_(dict))?tongue.core.build_dict.cljs$core$IFn$_invoke$arity$1(dict):dict));
}),cljs.core.PersistentArrayMap.EMPTY,dicts);
});
/**
 * Given dicts, builds translate function closed over these dicts:
 * 
 *     (build-translate dicts) => ( [locale key & args] => string )
 */
tongue.core.build_translate = (function tongue$core$build_translate(dicts){

var compiled_dicts = tongue.core.build_dicts(dicts);
return (function() {
var G__72182 = null;
var G__72182__2 = (function (locale,key){
return tongue.core.translate.cljs$core$IFn$_invoke$arity$3(compiled_dicts,locale,key);
});
var G__72182__3 = (function (locale,key,x){
return tongue.core.translate.cljs$core$IFn$_invoke$arity$4(compiled_dicts,locale,key,x);
});
var G__72182__4 = (function() { 
var G__72183__delegate = function (locale,key,x,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tongue.core.translate,compiled_dicts,locale,key,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__72183 = function (locale,key,x,var_args){
var args = null;
if (arguments.length > 3) {
var G__72184__i = 0, G__72184__a = new Array(arguments.length -  3);
while (G__72184__i < G__72184__a.length) {G__72184__a[G__72184__i] = arguments[G__72184__i + 3]; ++G__72184__i;}
  args = new cljs.core.IndexedSeq(G__72184__a,0,null);
} 
return G__72183__delegate.call(this,locale,key,x,args);};
G__72183.cljs$lang$maxFixedArity = 3;
G__72183.cljs$lang$applyTo = (function (arglist__72185){
var locale = cljs.core.first(arglist__72185);
arglist__72185 = cljs.core.next(arglist__72185);
var key = cljs.core.first(arglist__72185);
arglist__72185 = cljs.core.next(arglist__72185);
var x = cljs.core.first(arglist__72185);
var args = cljs.core.rest(arglist__72185);
return G__72183__delegate(locale,key,x,args);
});
G__72183.cljs$core$IFn$_invoke$arity$variadic = G__72183__delegate;
return G__72183;
})()
;
G__72182 = function(locale,key,x,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__72182__2.call(this,locale,key);
case 3:
return G__72182__3.call(this,locale,key,x);
default:
var G__72186 = null;
if (arguments.length > 3) {
var G__72187__i = 0, G__72187__a = new Array(arguments.length -  3);
while (G__72187__i < G__72187__a.length) {G__72187__a[G__72187__i] = arguments[G__72187__i + 3]; ++G__72187__i;}
G__72186 = new cljs.core.IndexedSeq(G__72187__a,0,null);
}
return G__72182__4.cljs$core$IFn$_invoke$arity$variadic(locale,key,x, G__72186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__72182.cljs$lang$maxFixedArity = 3;
G__72182.cljs$lang$applyTo = G__72182__4.cljs$lang$applyTo;
G__72182.cljs$core$IFn$_invoke$arity$2 = G__72182__2;
G__72182.cljs$core$IFn$_invoke$arity$3 = G__72182__3;
G__72182.cljs$core$IFn$_invoke$arity$variadic = G__72182__4.cljs$core$IFn$_invoke$arity$variadic;
return G__72182;
})()
});

//# sourceMappingURL=tongue.core.js.map
