goog.provide('frontend.rum');
/**
 * Converts from kebab case to camel case, eg: on-click to onClick
 */
frontend.rum.kebab_case__GT_camel_case = (function frontend$rum$kebab_case__GT_camel_case(input){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(input,/-/);
var capitalize = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__101088_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.upper_case(cljs.core.first(p1__101088_SHARP_)),cljs.core.rest(p1__101088_SHARP_));
}),cljs.core.rest(words));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,cljs.core.first(words),capitalize);
});
/**
 * Stringifys all the keys of a cljs hashmap and converts them
 * from kebab case to camel case. If :html-props option is specified,
 * then rename the html properties values to their dom equivalent
 * before conversion
 */
frontend.rum.map_keys__GT_camel_case = (function frontend$rum$map_keys__GT_camel_case(var_args){
var args__4870__auto__ = [];
var len__4864__auto___101122 = arguments.length;
var i__4865__auto___101123 = (0);
while(true){
if((i__4865__auto___101123 < len__4864__auto___101122)){
args__4870__auto__.push((arguments[i__4865__auto___101123]));

var G__101124 = (i__4865__auto___101123 + (1));
i__4865__auto___101123 = G__101124;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return frontend.rum.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(frontend.rum.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__101091){
var map__101092 = p__101091;
var map__101092__$1 = cljs.core.__destructure_map(map__101092);
var html_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101092__$1,new cljs.core.Keyword(null,"html-props","html-props",-455448229));
var convert_to_camel = (function (p__101093){
var vec__101094 = p__101093;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101094,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101094,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.rum.kebab_case__GT_camel_case(cljs.core.name(key)),value], null);
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
var new_map = (cljs.core.truth_(html_props)?clojure.set.rename_keys(x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null)):x);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(convert_to_camel,new_map));
} else {
return x;
}
}),data);
}));

(frontend.rum.map_keys__GT_camel_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.rum.map_keys__GT_camel_case.cljs$lang$applyTo = (function (seq101089){
var G__101090 = cljs.core.first(seq101089);
var seq101089__$1 = cljs.core.next(seq101089);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101090,seq101089__$1);
}));

frontend.rum.adapt_class = (function frontend$rum$adapt_class(var_args){
var G__101099 = arguments.length;
switch (G__101099) {
case 1:
return frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1 = (function (react_class){
return frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$2(react_class,false);
}));

(frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$2 = (function (react_class,skip_opts_transform_QMARK_){
return (function() { 
var G__101126__delegate = function (args){
var vec__101101 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101101,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101101,(1),null);
var type_SHARP_ = cljs.core.first(children);
var new_children = ((cljs.core.sequential_QMARK_(type_SHARP_))?(function (){var result = daiquiri.interpreter.interpret(children);
if(cljs.core.sequential_QMARK_(result)){
return result;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
}
})():children);
var vector__GT_react_elems = (function (p__101105){
var vec__101106 = p__101105;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101106,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101106,(1),null);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,daiquiri.interpreter.interpret(val)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val], null);
}
});
var new_options = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(skip_opts_transform_QMARK_)?opts:cljs.core.map.cljs$core$IFn$_invoke$arity$2(vector__GT_react_elems,opts)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,react_class,cljs_bean.core.__GT_js(frontend.rum.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic(new_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"html-props","html-props",-455448229),true], 0))),new_children);
};
var G__101126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__101127__i = 0, G__101127__a = new Array(arguments.length -  0);
while (G__101127__i < G__101127__a.length) {G__101127__a[G__101127__i] = arguments[G__101127__i + 0]; ++G__101127__i;}
  args = new cljs.core.IndexedSeq(G__101127__a,0,null);
} 
return G__101126__delegate.call(this,args);};
G__101126.cljs$lang$maxFixedArity = 0;
G__101126.cljs$lang$applyTo = (function (arglist__101128){
var args = cljs.core.seq(arglist__101128);
return G__101126__delegate(args);
});
G__101126.cljs$core$IFn$_invoke$arity$variadic = G__101126__delegate;
return G__101126;
})()
;
}));

(frontend.rum.adapt_class.cljs$lang$maxFixedArity = 2);

frontend.rum.use_atom_fn = (function frontend$rum$use_atom_fn(a,getter_fn,setter_fn){
var vec__101117 = rum.core.use_state((function (){var G__101120 = cljs.core.deref(a);
return (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(G__101120) : getter_fn.call(null,G__101120));
})());
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101117,(0),null);
var set_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101117,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
cljs.core.add_watch(a,id,(function (_,___$1,prev_state,next_state){
var prev_value = (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(prev_state) : getter_fn.call(null,prev_state));
var next_value = (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(next_state) : getter_fn.call(null,next_state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_value,next_value)){
return null;
} else {
return (set_val.cljs$core$IFn$_invoke$arity$1 ? set_val.cljs$core$IFn$_invoke$arity$1(next_value) : set_val.call(null,next_value));
}
}));

return (function (){
return cljs.core.remove_watch(a,id);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,(function (p1__101112_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,setter_fn,p1__101112_SHARP_);
})], null);
});
/**
 * (use-atom my-atom)
 */
frontend.rum.use_atom = (function frontend$rum$use_atom(a){
return frontend.rum.use_atom_fn(a,cljs.core.identity,(function (_,v){
return v;
}));
});
frontend.rum.use_mounted = (function frontend$rum$use_mounted(){
var _STAR_mounted = rum.core.use_ref(false);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
rum.core.set_ref_BANG_(_STAR_mounted,true);

return (function (){
return rum.core.set_ref_BANG_(_STAR_mounted,false);
});
}),cljs.core.PersistentVector.EMPTY);

return (function (){
return rum.core.deref(_STAR_mounted);
});
});

//# sourceMappingURL=frontend.rum.js.map
