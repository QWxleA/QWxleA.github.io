goog.provide('frontend.rum');
/**
 * Converts from kebab case to camel case, eg: on-click to onClick
 */
frontend.rum.kebab_case__GT_camel_case = (function frontend$rum$kebab_case__GT_camel_case(input){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(input,/-/);
var capitalize = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__86862_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.upper_case(cljs.core.first(p1__86862_SHARP_)),cljs.core.rest(p1__86862_SHARP_));
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
var args__5772__auto__ = [];
var len__5766__auto___86902 = arguments.length;
var i__5767__auto___86903 = (0);
while(true){
if((i__5767__auto___86903 < len__5766__auto___86902)){
args__5772__auto__.push((arguments[i__5767__auto___86903]));

var G__86904 = (i__5767__auto___86903 + (1));
i__5767__auto___86903 = G__86904;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.rum.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.rum.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__86866){
var map__86867 = p__86866;
var map__86867__$1 = cljs.core.__destructure_map(map__86867);
var html_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86867__$1,new cljs.core.Keyword(null,"html-props","html-props",-455448229));
var convert_to_camel = (function (p__86868){
var vec__86869 = p__86868;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86869,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86869,(1),null);
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
(frontend.rum.map_keys__GT_camel_case.cljs$lang$applyTo = (function (seq86864){
var G__86865 = cljs.core.first(seq86864);
var seq86864__$1 = cljs.core.next(seq86864);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86865,seq86864__$1);
}));

frontend.rum.adapt_class = (function frontend$rum$adapt_class(var_args){
var G__86873 = arguments.length;
switch (G__86873) {
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
var G__86943__delegate = function (args){
var vec__86875 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86875,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86875,(1),null);
var type_SHARP_ = cljs.core.first(children);
var new_children = ((cljs.core.sequential_QMARK_(type_SHARP_))?(function (){var result = daiquiri.interpreter.interpret(children);
if(cljs.core.sequential_QMARK_(result)){
return result;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
}
})():children);
var vector__GT_react_elems = (function (p__86878){
var vec__86879 = p__86878;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86879,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86879,(1),null);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,daiquiri.interpreter.interpret(val)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val], null);
}
});
var new_options = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(skip_opts_transform_QMARK_)?opts:cljs.core.map.cljs$core$IFn$_invoke$arity$2(vector__GT_react_elems,opts)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,react_class,cljs_bean.core.__GT_js(frontend.rum.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic(new_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"html-props","html-props",-455448229),true], 0))),new_children);
};
var G__86943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86945__i = 0, G__86945__a = new Array(arguments.length -  0);
while (G__86945__i < G__86945__a.length) {G__86945__a[G__86945__i] = arguments[G__86945__i + 0]; ++G__86945__i;}
  args = new cljs.core.IndexedSeq(G__86945__a,0,null);
} 
return G__86943__delegate.call(this,args);};
G__86943.cljs$lang$maxFixedArity = 0;
G__86943.cljs$lang$applyTo = (function (arglist__86947){
var args = cljs.core.seq(arglist__86947);
return G__86943__delegate(args);
});
G__86943.cljs$core$IFn$_invoke$arity$variadic = G__86943__delegate;
return G__86943;
})()
;
}));

(frontend.rum.adapt_class.cljs$lang$maxFixedArity = 2);

frontend.rum.use_atom_fn = (function frontend$rum$use_atom_fn(a,getter_fn,setter_fn){
var vec__86892 = rum.core.use_state((function (){var G__86895 = cljs.core.deref(a);
return (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(G__86895) : getter_fn.call(null,G__86895));
})());
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86892,(0),null);
var set_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86892,(1),null);
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,(function (p1__86882_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,setter_fn,p1__86882_SHARP_);
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
