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
var seq__49073_49135 = cljs.core.seq(x);
var chunk__49074_49136 = null;
var count__49075_49137 = (0);
var i__49076_49138 = (0);
while(true){
if((i__49076_49138 < count__49075_49137)){
var vec__49085_49139 = chunk__49074_49136.cljs$core$IIndexed$_nth$arity$2(null,i__49076_49138);
var k_49140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49085_49139,(0),null);
var v_49141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49085_49139,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_49140),v_49141);


var G__49142 = seq__49073_49135;
var G__49143 = chunk__49074_49136;
var G__49144 = count__49075_49137;
var G__49145 = (i__49076_49138 + (1));
seq__49073_49135 = G__49142;
chunk__49074_49136 = G__49143;
count__49075_49137 = G__49144;
i__49076_49138 = G__49145;
continue;
} else {
var temp__5720__auto___49146 = cljs.core.seq(seq__49073_49135);
if(temp__5720__auto___49146){
var seq__49073_49147__$1 = temp__5720__auto___49146;
if(cljs.core.chunked_seq_QMARK_(seq__49073_49147__$1)){
var c__5565__auto___49148 = cljs.core.chunk_first(seq__49073_49147__$1);
var G__49149 = cljs.core.chunk_rest(seq__49073_49147__$1);
var G__49150 = c__5565__auto___49148;
var G__49151 = cljs.core.count(c__5565__auto___49148);
var G__49152 = (0);
seq__49073_49135 = G__49149;
chunk__49074_49136 = G__49150;
count__49075_49137 = G__49151;
i__49076_49138 = G__49152;
continue;
} else {
var vec__49088_49153 = cljs.core.first(seq__49073_49147__$1);
var k_49154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49088_49153,(0),null);
var v_49155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49088_49153,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_49154),v_49155);


var G__49156 = cljs.core.next(seq__49073_49147__$1);
var G__49157 = null;
var G__49158 = (0);
var G__49159 = (0);
seq__49073_49135 = G__49156;
chunk__49074_49136 = G__49157;
count__49075_49137 = G__49158;
i__49076_49138 = G__49159;
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
var vec__49092 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49092,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49092,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49092,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__49097){
var vec__49098 = p__49097;
var seq__49099 = cljs.core.seq(vec__49098);
var first__49100 = cljs.core.first(seq__49099);
var seq__49099__$1 = cljs.core.next(seq__49099);
var _ = first__49100;
var first__49100__$1 = cljs.core.first(seq__49099__$1);
var seq__49099__$2 = cljs.core.next(seq__49099__$1);
var attrs = first__49100__$1;
var children = seq__49099__$2;
var vec__49101 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49101,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49101,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__49108){
var vec__49109 = p__49108;
var seq__49110 = cljs.core.seq(vec__49109);
var first__49111 = cljs.core.first(seq__49110);
var seq__49110__$1 = cljs.core.next(seq__49110);
var _ = first__49111;
var first__49111__$1 = cljs.core.first(seq__49110__$1);
var seq__49110__$2 = cljs.core.next(seq__49110__$1);
var component = first__49111__$1;
var first__49111__$2 = cljs.core.first(seq__49110__$2);
var seq__49110__$3 = cljs.core.next(seq__49110__$2);
var attrs = first__49111__$2;
var children = seq__49110__$3;
var vec__49113 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49113,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49113,(1),null);
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
