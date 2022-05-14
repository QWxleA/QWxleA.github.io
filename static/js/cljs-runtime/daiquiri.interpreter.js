goog.provide('daiquiri.interpreter');
goog.scope(function(){
  daiquiri.interpreter.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
daiquiri.interpreter.create_element = (function daiquiri$interpreter$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
daiquiri.interpreter.component_attributes = (function daiquiri$interpreter$component_attributes(attrs){
var x = daiquiri.util.camel_case_keys_STAR_(attrs);
var m = ({});
var seq__63343_63444 = cljs.core.seq(x);
var chunk__63344_63445 = null;
var count__63345_63446 = (0);
var i__63346_63447 = (0);
while(true){
if((i__63346_63447 < count__63345_63446)){
var vec__63374_63448 = chunk__63344_63445.cljs$core$IIndexed$_nth$arity$2(null,i__63346_63447);
var k_63449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63374_63448,(0),null);
var v_63450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63374_63448,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_63449),v_63450);


var G__63451 = seq__63343_63444;
var G__63452 = chunk__63344_63445;
var G__63454 = count__63345_63446;
var G__63455 = (i__63346_63447 + (1));
seq__63343_63444 = G__63451;
chunk__63344_63445 = G__63452;
count__63345_63446 = G__63454;
i__63346_63447 = G__63455;
continue;
} else {
var temp__5720__auto___63456 = cljs.core.seq(seq__63343_63444);
if(temp__5720__auto___63456){
var seq__63343_63457__$1 = temp__5720__auto___63456;
if(cljs.core.chunked_seq_QMARK_(seq__63343_63457__$1)){
var c__4679__auto___63458 = cljs.core.chunk_first(seq__63343_63457__$1);
var G__63459 = cljs.core.chunk_rest(seq__63343_63457__$1);
var G__63460 = c__4679__auto___63458;
var G__63461 = cljs.core.count(c__4679__auto___63458);
var G__63462 = (0);
seq__63343_63444 = G__63459;
chunk__63344_63445 = G__63460;
count__63345_63446 = G__63461;
i__63346_63447 = G__63462;
continue;
} else {
var vec__63378_63463 = cljs.core.first(seq__63343_63457__$1);
var k_63464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63378_63463,(0),null);
var v_63465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63378_63463,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_63464),v_63465);


var G__63466 = cljs.core.next(seq__63343_63457__$1);
var G__63467 = null;
var G__63468 = (0);
var G__63469 = (0);
seq__63343_63444 = G__63466;
chunk__63344_63445 = G__63467;
count__63345_63446 = G__63468;
i__63346_63447 = G__63469;
continue;
}
} else {
}
}
break;
}

return m;
});
daiquiri.interpreter.element_attributes = (function daiquiri$interpreter$element_attributes(attrs){
var temp__5720__auto__ = cljs.core.clj__GT_js(daiquiri.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5720__auto__)){
var js_attrs = temp__5720__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(js_attrs.onChange)){
(js_attrs.onChange = rum.core.mark_sync_update(js_attrs.onChange));
} else {
}

if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
daiquiri.interpreter.interpret_seq = (function daiquiri$interpreter$interpret_seq(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x__$1){
ret.push((daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1 ? daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1(x__$1) : daiquiri.interpreter.interpret.call(null,x__$1)));

return ret;
}),[],x);
});
/**
 * Render an element vector as a HTML element.
 */
daiquiri.interpreter.element = (function daiquiri$interpreter$element(element){
var vec__63401 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63401,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63401,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63401,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__63411){
var vec__63412 = p__63411;
var seq__63413 = cljs.core.seq(vec__63412);
var first__63414 = cljs.core.first(seq__63413);
var seq__63413__$1 = cljs.core.next(seq__63413);
var _ = first__63414;
var first__63414__$1 = cljs.core.first(seq__63413__$1);
var seq__63413__$2 = cljs.core.next(seq__63413__$1);
var attrs = first__63414__$1;
var children = seq__63413__$2;
var vec__63422 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63422,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63422,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__63428){
var vec__63429 = p__63428;
var seq__63430 = cljs.core.seq(vec__63429);
var first__63431 = cljs.core.first(seq__63430);
var seq__63430__$1 = cljs.core.next(seq__63430);
var _ = first__63431;
var first__63431__$1 = cljs.core.first(seq__63430__$1);
var seq__63430__$2 = cljs.core.next(seq__63430__$1);
var component = first__63431__$1;
var first__63431__$2 = cljs.core.first(seq__63430__$2);
var seq__63430__$3 = cljs.core.next(seq__63430__$2);
var attrs = first__63431__$2;
var children = seq__63430__$3;
var vec__63432 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63432,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63432,(1),null);
return daiquiri.interpreter.create_element(component,attrs__$1,children__$1);
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
daiquiri.interpreter.interpret_vec = (function daiquiri$interpreter$interpret_vec(x){
if(daiquiri.util.fragment_QMARK_(x)){
return daiquiri.interpreter.fragment(x);
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return daiquiri.interpreter.interop(x);
} else {
if(daiquiri.util.element_QMARK_(x)){
return daiquiri.interpreter.element(x);
} else {
return daiquiri.interpreter.interpret_seq(x);

}
}
}
});
daiquiri.interpreter.interpret = (function daiquiri$interpreter$interpret(v){
if(cljs.core.vector_QMARK_(v)){
return daiquiri.interpreter.interpret_vec(v);
} else {
if(cljs.core.seq_QMARK_(v)){
return daiquiri.interpreter.interpret_seq(v);
} else {
return v;

}
}
});

//# sourceMappingURL=daiquiri.interpreter.js.map
