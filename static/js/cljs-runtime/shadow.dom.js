goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47194 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47194(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47196 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47196(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46371 = coll;
var G__46372 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46371,G__46372) : shadow.dom.lazy_native_coll_seq.call(null,G__46371,G__46372));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46430 = arguments.length;
switch (G__46430) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46454 = arguments.length;
switch (G__46454) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46469 = arguments.length;
switch (G__46469) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46482 = arguments.length;
switch (G__46482) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46505 = arguments.length;
switch (G__46505) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46519 = arguments.length;
switch (G__46519) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46530){if((e46530 instanceof Object)){
var e = e46530;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46530;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__46542 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46543 = null;
var count__46544 = (0);
var i__46545 = (0);
while(true){
if((i__46545 < count__46544)){
var el = chunk__46543.cljs$core$IIndexed$_nth$arity$2(null,i__46545);
var handler_47214__$1 = ((function (seq__46542,chunk__46543,count__46544,i__46545,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46542,chunk__46543,count__46544,i__46545,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47214__$1);


var G__47215 = seq__46542;
var G__47216 = chunk__46543;
var G__47217 = count__46544;
var G__47218 = (i__46545 + (1));
seq__46542 = G__47215;
chunk__46543 = G__47216;
count__46544 = G__47217;
i__46545 = G__47218;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46542);
if(temp__5720__auto__){
var seq__46542__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46542__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46542__$1);
var G__47219 = cljs.core.chunk_rest(seq__46542__$1);
var G__47220 = c__5565__auto__;
var G__47221 = cljs.core.count(c__5565__auto__);
var G__47222 = (0);
seq__46542 = G__47219;
chunk__46543 = G__47220;
count__46544 = G__47221;
i__46545 = G__47222;
continue;
} else {
var el = cljs.core.first(seq__46542__$1);
var handler_47223__$1 = ((function (seq__46542,chunk__46543,count__46544,i__46545,el,seq__46542__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46542,chunk__46543,count__46544,i__46545,el,seq__46542__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47223__$1);


var G__47224 = cljs.core.next(seq__46542__$1);
var G__47225 = null;
var G__47226 = (0);
var G__47227 = (0);
seq__46542 = G__47224;
chunk__46543 = G__47225;
count__46544 = G__47226;
i__46545 = G__47227;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__46560 = arguments.length;
switch (G__46560) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46569 = cljs.core.seq(events);
var chunk__46570 = null;
var count__46571 = (0);
var i__46572 = (0);
while(true){
if((i__46572 < count__46571)){
var vec__46582 = chunk__46570.cljs$core$IIndexed$_nth$arity$2(null,i__46572);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46582,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46582,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47229 = seq__46569;
var G__47230 = chunk__46570;
var G__47231 = count__46571;
var G__47232 = (i__46572 + (1));
seq__46569 = G__47229;
chunk__46570 = G__47230;
count__46571 = G__47231;
i__46572 = G__47232;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46569);
if(temp__5720__auto__){
var seq__46569__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46569__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46569__$1);
var G__47233 = cljs.core.chunk_rest(seq__46569__$1);
var G__47234 = c__5565__auto__;
var G__47235 = cljs.core.count(c__5565__auto__);
var G__47236 = (0);
seq__46569 = G__47233;
chunk__46570 = G__47234;
count__46571 = G__47235;
i__46572 = G__47236;
continue;
} else {
var vec__46589 = cljs.core.first(seq__46569__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46589,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46589,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47237 = cljs.core.next(seq__46569__$1);
var G__47238 = null;
var G__47239 = (0);
var G__47240 = (0);
seq__46569 = G__47237;
chunk__46570 = G__47238;
count__46571 = G__47239;
i__46572 = G__47240;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__46596 = cljs.core.seq(styles);
var chunk__46597 = null;
var count__46598 = (0);
var i__46599 = (0);
while(true){
if((i__46599 < count__46598)){
var vec__46610 = chunk__46597.cljs$core$IIndexed$_nth$arity$2(null,i__46599);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47241 = seq__46596;
var G__47242 = chunk__46597;
var G__47243 = count__46598;
var G__47244 = (i__46599 + (1));
seq__46596 = G__47241;
chunk__46597 = G__47242;
count__46598 = G__47243;
i__46599 = G__47244;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46596);
if(temp__5720__auto__){
var seq__46596__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46596__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46596__$1);
var G__47245 = cljs.core.chunk_rest(seq__46596__$1);
var G__47246 = c__5565__auto__;
var G__47247 = cljs.core.count(c__5565__auto__);
var G__47248 = (0);
seq__46596 = G__47245;
chunk__46597 = G__47246;
count__46598 = G__47247;
i__46599 = G__47248;
continue;
} else {
var vec__46617 = cljs.core.first(seq__46596__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46617,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46617,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47249 = cljs.core.next(seq__46596__$1);
var G__47250 = null;
var G__47251 = (0);
var G__47252 = (0);
seq__46596 = G__47249;
chunk__46597 = G__47250;
count__46598 = G__47251;
i__46599 = G__47252;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46622_47253 = key;
var G__46622_47254__$1 = (((G__46622_47253 instanceof cljs.core.Keyword))?G__46622_47253.fqn:null);
switch (G__46622_47254__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47256 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_47256,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_47256,"aria-");
}
})())){
el.setAttribute(ks_47256,value);
} else {
(el[ks_47256] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46635){
var map__46636 = p__46635;
var map__46636__$1 = cljs.core.__destructure_map(map__46636);
var props = map__46636__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46636__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46638 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46638,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46638,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46638,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46642 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46642,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46642;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46646 = arguments.length;
switch (G__46646) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46652){
var vec__46653 = p__46652;
var seq__46654 = cljs.core.seq(vec__46653);
var first__46655 = cljs.core.first(seq__46654);
var seq__46654__$1 = cljs.core.next(seq__46654);
var nn = first__46655;
var first__46655__$1 = cljs.core.first(seq__46654__$1);
var seq__46654__$2 = cljs.core.next(seq__46654__$1);
var np = first__46655__$1;
var nc = seq__46654__$2;
var node = vec__46653;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46657 = nn;
var G__46658 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46657,G__46658) : create_fn.call(null,G__46657,G__46658));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46659 = nn;
var G__46660 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46659,G__46660) : create_fn.call(null,G__46659,G__46660));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46662 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46662,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46662,(1),null);
var seq__46665_47270 = cljs.core.seq(node_children);
var chunk__46666_47271 = null;
var count__46667_47272 = (0);
var i__46668_47273 = (0);
while(true){
if((i__46668_47273 < count__46667_47272)){
var child_struct_47274 = chunk__46666_47271.cljs$core$IIndexed$_nth$arity$2(null,i__46668_47273);
var children_47275 = shadow.dom.dom_node(child_struct_47274);
if(cljs.core.seq_QMARK_(children_47275)){
var seq__46685_47276 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47275));
var chunk__46687_47277 = null;
var count__46688_47278 = (0);
var i__46689_47279 = (0);
while(true){
if((i__46689_47279 < count__46688_47278)){
var child_47280 = chunk__46687_47277.cljs$core$IIndexed$_nth$arity$2(null,i__46689_47279);
if(cljs.core.truth_(child_47280)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47280);


var G__47281 = seq__46685_47276;
var G__47282 = chunk__46687_47277;
var G__47283 = count__46688_47278;
var G__47284 = (i__46689_47279 + (1));
seq__46685_47276 = G__47281;
chunk__46687_47277 = G__47282;
count__46688_47278 = G__47283;
i__46689_47279 = G__47284;
continue;
} else {
var G__47285 = seq__46685_47276;
var G__47286 = chunk__46687_47277;
var G__47287 = count__46688_47278;
var G__47288 = (i__46689_47279 + (1));
seq__46685_47276 = G__47285;
chunk__46687_47277 = G__47286;
count__46688_47278 = G__47287;
i__46689_47279 = G__47288;
continue;
}
} else {
var temp__5720__auto___47289 = cljs.core.seq(seq__46685_47276);
if(temp__5720__auto___47289){
var seq__46685_47290__$1 = temp__5720__auto___47289;
if(cljs.core.chunked_seq_QMARK_(seq__46685_47290__$1)){
var c__5565__auto___47291 = cljs.core.chunk_first(seq__46685_47290__$1);
var G__47292 = cljs.core.chunk_rest(seq__46685_47290__$1);
var G__47293 = c__5565__auto___47291;
var G__47294 = cljs.core.count(c__5565__auto___47291);
var G__47295 = (0);
seq__46685_47276 = G__47292;
chunk__46687_47277 = G__47293;
count__46688_47278 = G__47294;
i__46689_47279 = G__47295;
continue;
} else {
var child_47296 = cljs.core.first(seq__46685_47290__$1);
if(cljs.core.truth_(child_47296)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47296);


var G__47297 = cljs.core.next(seq__46685_47290__$1);
var G__47298 = null;
var G__47299 = (0);
var G__47300 = (0);
seq__46685_47276 = G__47297;
chunk__46687_47277 = G__47298;
count__46688_47278 = G__47299;
i__46689_47279 = G__47300;
continue;
} else {
var G__47301 = cljs.core.next(seq__46685_47290__$1);
var G__47302 = null;
var G__47303 = (0);
var G__47304 = (0);
seq__46685_47276 = G__47301;
chunk__46687_47277 = G__47302;
count__46688_47278 = G__47303;
i__46689_47279 = G__47304;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47275);
}


var G__47305 = seq__46665_47270;
var G__47306 = chunk__46666_47271;
var G__47307 = count__46667_47272;
var G__47308 = (i__46668_47273 + (1));
seq__46665_47270 = G__47305;
chunk__46666_47271 = G__47306;
count__46667_47272 = G__47307;
i__46668_47273 = G__47308;
continue;
} else {
var temp__5720__auto___47309 = cljs.core.seq(seq__46665_47270);
if(temp__5720__auto___47309){
var seq__46665_47310__$1 = temp__5720__auto___47309;
if(cljs.core.chunked_seq_QMARK_(seq__46665_47310__$1)){
var c__5565__auto___47311 = cljs.core.chunk_first(seq__46665_47310__$1);
var G__47313 = cljs.core.chunk_rest(seq__46665_47310__$1);
var G__47314 = c__5565__auto___47311;
var G__47315 = cljs.core.count(c__5565__auto___47311);
var G__47316 = (0);
seq__46665_47270 = G__47313;
chunk__46666_47271 = G__47314;
count__46667_47272 = G__47315;
i__46668_47273 = G__47316;
continue;
} else {
var child_struct_47318 = cljs.core.first(seq__46665_47310__$1);
var children_47319 = shadow.dom.dom_node(child_struct_47318);
if(cljs.core.seq_QMARK_(children_47319)){
var seq__46699_47320 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47319));
var chunk__46701_47321 = null;
var count__46702_47322 = (0);
var i__46703_47323 = (0);
while(true){
if((i__46703_47323 < count__46702_47322)){
var child_47325 = chunk__46701_47321.cljs$core$IIndexed$_nth$arity$2(null,i__46703_47323);
if(cljs.core.truth_(child_47325)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47325);


var G__47327 = seq__46699_47320;
var G__47328 = chunk__46701_47321;
var G__47329 = count__46702_47322;
var G__47330 = (i__46703_47323 + (1));
seq__46699_47320 = G__47327;
chunk__46701_47321 = G__47328;
count__46702_47322 = G__47329;
i__46703_47323 = G__47330;
continue;
} else {
var G__47331 = seq__46699_47320;
var G__47332 = chunk__46701_47321;
var G__47333 = count__46702_47322;
var G__47334 = (i__46703_47323 + (1));
seq__46699_47320 = G__47331;
chunk__46701_47321 = G__47332;
count__46702_47322 = G__47333;
i__46703_47323 = G__47334;
continue;
}
} else {
var temp__5720__auto___47335__$1 = cljs.core.seq(seq__46699_47320);
if(temp__5720__auto___47335__$1){
var seq__46699_47336__$1 = temp__5720__auto___47335__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46699_47336__$1)){
var c__5565__auto___47337 = cljs.core.chunk_first(seq__46699_47336__$1);
var G__47338 = cljs.core.chunk_rest(seq__46699_47336__$1);
var G__47339 = c__5565__auto___47337;
var G__47340 = cljs.core.count(c__5565__auto___47337);
var G__47341 = (0);
seq__46699_47320 = G__47338;
chunk__46701_47321 = G__47339;
count__46702_47322 = G__47340;
i__46703_47323 = G__47341;
continue;
} else {
var child_47342 = cljs.core.first(seq__46699_47336__$1);
if(cljs.core.truth_(child_47342)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47342);


var G__47343 = cljs.core.next(seq__46699_47336__$1);
var G__47344 = null;
var G__47345 = (0);
var G__47346 = (0);
seq__46699_47320 = G__47343;
chunk__46701_47321 = G__47344;
count__46702_47322 = G__47345;
i__46703_47323 = G__47346;
continue;
} else {
var G__47347 = cljs.core.next(seq__46699_47336__$1);
var G__47348 = null;
var G__47349 = (0);
var G__47350 = (0);
seq__46699_47320 = G__47347;
chunk__46701_47321 = G__47348;
count__46702_47322 = G__47349;
i__46703_47323 = G__47350;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47319);
}


var G__47351 = cljs.core.next(seq__46665_47310__$1);
var G__47352 = null;
var G__47353 = (0);
var G__47354 = (0);
seq__46665_47270 = G__47351;
chunk__46666_47271 = G__47352;
count__46667_47272 = G__47353;
i__46668_47273 = G__47354;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46718 = cljs.core.seq(node);
var chunk__46719 = null;
var count__46720 = (0);
var i__46721 = (0);
while(true){
if((i__46721 < count__46720)){
var n = chunk__46719.cljs$core$IIndexed$_nth$arity$2(null,i__46721);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47356 = seq__46718;
var G__47357 = chunk__46719;
var G__47358 = count__46720;
var G__47359 = (i__46721 + (1));
seq__46718 = G__47356;
chunk__46719 = G__47357;
count__46720 = G__47358;
i__46721 = G__47359;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46718);
if(temp__5720__auto__){
var seq__46718__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46718__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46718__$1);
var G__47360 = cljs.core.chunk_rest(seq__46718__$1);
var G__47361 = c__5565__auto__;
var G__47362 = cljs.core.count(c__5565__auto__);
var G__47363 = (0);
seq__46718 = G__47360;
chunk__46719 = G__47361;
count__46720 = G__47362;
i__46721 = G__47363;
continue;
} else {
var n = cljs.core.first(seq__46718__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47365 = cljs.core.next(seq__46718__$1);
var G__47366 = null;
var G__47367 = (0);
var G__47368 = (0);
seq__46718 = G__47365;
chunk__46719 = G__47366;
count__46720 = G__47367;
i__46721 = G__47368;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46745 = arguments.length;
switch (G__46745) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46762 = arguments.length;
switch (G__46762) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46774 = arguments.length;
switch (G__46774) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___47378 = arguments.length;
var i__5767__auto___47379 = (0);
while(true){
if((i__5767__auto___47379 < len__5766__auto___47378)){
args__5772__auto__.push((arguments[i__5767__auto___47379]));

var G__47380 = (i__5767__auto___47379 + (1));
i__5767__auto___47379 = G__47380;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46779_47382 = cljs.core.seq(nodes);
var chunk__46780_47383 = null;
var count__46781_47384 = (0);
var i__46782_47385 = (0);
while(true){
if((i__46782_47385 < count__46781_47384)){
var node_47386 = chunk__46780_47383.cljs$core$IIndexed$_nth$arity$2(null,i__46782_47385);
fragment.appendChild(shadow.dom._to_dom(node_47386));


var G__47392 = seq__46779_47382;
var G__47393 = chunk__46780_47383;
var G__47394 = count__46781_47384;
var G__47395 = (i__46782_47385 + (1));
seq__46779_47382 = G__47392;
chunk__46780_47383 = G__47393;
count__46781_47384 = G__47394;
i__46782_47385 = G__47395;
continue;
} else {
var temp__5720__auto___47396 = cljs.core.seq(seq__46779_47382);
if(temp__5720__auto___47396){
var seq__46779_47397__$1 = temp__5720__auto___47396;
if(cljs.core.chunked_seq_QMARK_(seq__46779_47397__$1)){
var c__5565__auto___47398 = cljs.core.chunk_first(seq__46779_47397__$1);
var G__47399 = cljs.core.chunk_rest(seq__46779_47397__$1);
var G__47400 = c__5565__auto___47398;
var G__47401 = cljs.core.count(c__5565__auto___47398);
var G__47402 = (0);
seq__46779_47382 = G__47399;
chunk__46780_47383 = G__47400;
count__46781_47384 = G__47401;
i__46782_47385 = G__47402;
continue;
} else {
var node_47403 = cljs.core.first(seq__46779_47397__$1);
fragment.appendChild(shadow.dom._to_dom(node_47403));


var G__47411 = cljs.core.next(seq__46779_47397__$1);
var G__47412 = null;
var G__47413 = (0);
var G__47414 = (0);
seq__46779_47382 = G__47411;
chunk__46780_47383 = G__47412;
count__46781_47384 = G__47413;
i__46782_47385 = G__47414;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46778){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46778));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46783_47421 = cljs.core.seq(scripts);
var chunk__46784_47422 = null;
var count__46785_47423 = (0);
var i__46786_47424 = (0);
while(true){
if((i__46786_47424 < count__46785_47423)){
var vec__46793_47427 = chunk__46784_47422.cljs$core$IIndexed$_nth$arity$2(null,i__46786_47424);
var script_tag_47428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793_47427,(0),null);
var script_body_47429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793_47427,(1),null);
eval(script_body_47429);


var G__47434 = seq__46783_47421;
var G__47435 = chunk__46784_47422;
var G__47436 = count__46785_47423;
var G__47437 = (i__46786_47424 + (1));
seq__46783_47421 = G__47434;
chunk__46784_47422 = G__47435;
count__46785_47423 = G__47436;
i__46786_47424 = G__47437;
continue;
} else {
var temp__5720__auto___47439 = cljs.core.seq(seq__46783_47421);
if(temp__5720__auto___47439){
var seq__46783_47442__$1 = temp__5720__auto___47439;
if(cljs.core.chunked_seq_QMARK_(seq__46783_47442__$1)){
var c__5565__auto___47447 = cljs.core.chunk_first(seq__46783_47442__$1);
var G__47449 = cljs.core.chunk_rest(seq__46783_47442__$1);
var G__47450 = c__5565__auto___47447;
var G__47451 = cljs.core.count(c__5565__auto___47447);
var G__47452 = (0);
seq__46783_47421 = G__47449;
chunk__46784_47422 = G__47450;
count__46785_47423 = G__47451;
i__46786_47424 = G__47452;
continue;
} else {
var vec__46797_47453 = cljs.core.first(seq__46783_47442__$1);
var script_tag_47454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46797_47453,(0),null);
var script_body_47455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46797_47453,(1),null);
eval(script_body_47455);


var G__47459 = cljs.core.next(seq__46783_47442__$1);
var G__47460 = null;
var G__47461 = (0);
var G__47462 = (0);
seq__46783_47421 = G__47459;
chunk__46784_47422 = G__47460;
count__46785_47423 = G__47461;
i__46786_47424 = G__47462;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46801){
var vec__46802 = p__46801;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46802,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46802,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46819 = arguments.length;
switch (G__46819) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46832 = cljs.core.seq(style_keys);
var chunk__46833 = null;
var count__46834 = (0);
var i__46835 = (0);
while(true){
if((i__46835 < count__46834)){
var it = chunk__46833.cljs$core$IIndexed$_nth$arity$2(null,i__46835);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47501 = seq__46832;
var G__47502 = chunk__46833;
var G__47503 = count__46834;
var G__47504 = (i__46835 + (1));
seq__46832 = G__47501;
chunk__46833 = G__47502;
count__46834 = G__47503;
i__46835 = G__47504;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46832);
if(temp__5720__auto__){
var seq__46832__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46832__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46832__$1);
var G__47511 = cljs.core.chunk_rest(seq__46832__$1);
var G__47512 = c__5565__auto__;
var G__47513 = cljs.core.count(c__5565__auto__);
var G__47514 = (0);
seq__46832 = G__47511;
chunk__46833 = G__47512;
count__46834 = G__47513;
i__46835 = G__47514;
continue;
} else {
var it = cljs.core.first(seq__46832__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47517 = cljs.core.next(seq__46832__$1);
var G__47518 = null;
var G__47519 = (0);
var G__47520 = (0);
seq__46832 = G__47517;
chunk__46833 = G__47518;
count__46834 = G__47519;
i__46835 = G__47520;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k46848,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__46874 = k46848;
var G__46874__$1 = (((G__46874 instanceof cljs.core.Keyword))?G__46874.fqn:null);
switch (G__46874__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46848,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__46891){
var vec__46896 = p__46891;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46896,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46896,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46847){
var self__ = this;
var G__46847__$1 = this;
return (new cljs.core.RecordIter((0),G__46847__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46850,other46851){
var self__ = this;
var this46850__$1 = this;
return (((!((other46851 == null)))) && ((((this46850__$1.constructor === other46851.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46850__$1.x,other46851.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46850__$1.y,other46851.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46850__$1.__extmap,other46851.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k46848){
var self__ = this;
var this__5347__auto____$1 = this;
var G__46931 = k46848;
var G__46931__$1 = (((G__46931 instanceof cljs.core.Keyword))?G__46931.fqn:null);
switch (G__46931__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46848);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__46847){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__46934 = cljs.core.keyword_identical_QMARK_;
var expr__46935 = k__5349__auto__;
if(cljs.core.truth_((pred__46934.cljs$core$IFn$_invoke$arity$2 ? pred__46934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46935) : pred__46934.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46935)))){
return (new shadow.dom.Coordinate(G__46847,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46934.cljs$core$IFn$_invoke$arity$2 ? pred__46934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46935) : pred__46934.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46935)))){
return (new shadow.dom.Coordinate(self__.x,G__46847,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__46847),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__46847){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46847,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46855){
var extmap__5382__auto__ = (function (){var G__46940 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46855,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46855)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46940);
} else {
return G__46940;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46855),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46855),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k46947,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__46965 = k46947;
var G__46965__$1 = (((G__46965 instanceof cljs.core.Keyword))?G__46965.fqn:null);
switch (G__46965__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46947,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__46968){
var vec__46969 = p__46968;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46969,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46969,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46946){
var self__ = this;
var G__46946__$1 = this;
return (new cljs.core.RecordIter((0),G__46946__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46948,other46949){
var self__ = this;
var this46948__$1 = this;
return (((!((other46949 == null)))) && ((((this46948__$1.constructor === other46949.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46948__$1.w,other46949.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46948__$1.h,other46949.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46948__$1.__extmap,other46949.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k46947){
var self__ = this;
var this__5347__auto____$1 = this;
var G__46974 = k46947;
var G__46974__$1 = (((G__46974 instanceof cljs.core.Keyword))?G__46974.fqn:null);
switch (G__46974__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46947);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__46946){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__46977 = cljs.core.keyword_identical_QMARK_;
var expr__46978 = k__5349__auto__;
if(cljs.core.truth_((pred__46977.cljs$core$IFn$_invoke$arity$2 ? pred__46977.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46978) : pred__46977.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46978)))){
return (new shadow.dom.Size(G__46946,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46977.cljs$core$IFn$_invoke$arity$2 ? pred__46977.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46978) : pred__46977.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46978)))){
return (new shadow.dom.Size(self__.w,G__46946,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__46946),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__46946){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46946,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46962){
var extmap__5382__auto__ = (function (){var G__46990 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46962,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46962)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46990);
} else {
return G__46990;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46962),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46962),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__47580 = (i + (1));
var G__47581 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47580;
ret = G__47581;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46999){
var vec__47000 = p__46999;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47000,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47000,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47004 = arguments.length;
switch (G__47004) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__47584 = ps;
var G__47585 = (i + (1));
el__$1 = G__47584;
i = G__47585;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47015 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47015,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47015,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47015,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47018_47590 = cljs.core.seq(props);
var chunk__47019_47591 = null;
var count__47020_47592 = (0);
var i__47021_47593 = (0);
while(true){
if((i__47021_47593 < count__47020_47592)){
var vec__47028_47594 = chunk__47019_47591.cljs$core$IIndexed$_nth$arity$2(null,i__47021_47593);
var k_47595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47028_47594,(0),null);
var v_47596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47028_47594,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_47595);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47595),v_47596);


var G__47598 = seq__47018_47590;
var G__47599 = chunk__47019_47591;
var G__47600 = count__47020_47592;
var G__47601 = (i__47021_47593 + (1));
seq__47018_47590 = G__47598;
chunk__47019_47591 = G__47599;
count__47020_47592 = G__47600;
i__47021_47593 = G__47601;
continue;
} else {
var temp__5720__auto___47603 = cljs.core.seq(seq__47018_47590);
if(temp__5720__auto___47603){
var seq__47018_47604__$1 = temp__5720__auto___47603;
if(cljs.core.chunked_seq_QMARK_(seq__47018_47604__$1)){
var c__5565__auto___47605 = cljs.core.chunk_first(seq__47018_47604__$1);
var G__47606 = cljs.core.chunk_rest(seq__47018_47604__$1);
var G__47607 = c__5565__auto___47605;
var G__47608 = cljs.core.count(c__5565__auto___47605);
var G__47609 = (0);
seq__47018_47590 = G__47606;
chunk__47019_47591 = G__47607;
count__47020_47592 = G__47608;
i__47021_47593 = G__47609;
continue;
} else {
var vec__47031_47610 = cljs.core.first(seq__47018_47604__$1);
var k_47611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031_47610,(0),null);
var v_47612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031_47610,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_47611);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47611),v_47612);


var G__47613 = cljs.core.next(seq__47018_47604__$1);
var G__47614 = null;
var G__47615 = (0);
var G__47616 = (0);
seq__47018_47590 = G__47613;
chunk__47019_47591 = G__47614;
count__47020_47592 = G__47615;
i__47021_47593 = G__47616;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47035 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47035,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47035,(1),null);
var seq__47038_47618 = cljs.core.seq(node_children);
var chunk__47040_47619 = null;
var count__47041_47620 = (0);
var i__47042_47621 = (0);
while(true){
if((i__47042_47621 < count__47041_47620)){
var child_struct_47622 = chunk__47040_47619.cljs$core$IIndexed$_nth$arity$2(null,i__47042_47621);
if((!((child_struct_47622 == null)))){
if(typeof child_struct_47622 === 'string'){
var text_47623 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47623),child_struct_47622].join(''));
} else {
var children_47624 = shadow.dom.svg_node(child_struct_47622);
if(cljs.core.seq_QMARK_(children_47624)){
var seq__47064_47625 = cljs.core.seq(children_47624);
var chunk__47066_47626 = null;
var count__47067_47627 = (0);
var i__47068_47628 = (0);
while(true){
if((i__47068_47628 < count__47067_47627)){
var child_47630 = chunk__47066_47626.cljs$core$IIndexed$_nth$arity$2(null,i__47068_47628);
if(cljs.core.truth_(child_47630)){
node.appendChild(child_47630);


var G__47631 = seq__47064_47625;
var G__47632 = chunk__47066_47626;
var G__47633 = count__47067_47627;
var G__47634 = (i__47068_47628 + (1));
seq__47064_47625 = G__47631;
chunk__47066_47626 = G__47632;
count__47067_47627 = G__47633;
i__47068_47628 = G__47634;
continue;
} else {
var G__47635 = seq__47064_47625;
var G__47636 = chunk__47066_47626;
var G__47637 = count__47067_47627;
var G__47638 = (i__47068_47628 + (1));
seq__47064_47625 = G__47635;
chunk__47066_47626 = G__47636;
count__47067_47627 = G__47637;
i__47068_47628 = G__47638;
continue;
}
} else {
var temp__5720__auto___47639 = cljs.core.seq(seq__47064_47625);
if(temp__5720__auto___47639){
var seq__47064_47640__$1 = temp__5720__auto___47639;
if(cljs.core.chunked_seq_QMARK_(seq__47064_47640__$1)){
var c__5565__auto___47641 = cljs.core.chunk_first(seq__47064_47640__$1);
var G__47642 = cljs.core.chunk_rest(seq__47064_47640__$1);
var G__47643 = c__5565__auto___47641;
var G__47644 = cljs.core.count(c__5565__auto___47641);
var G__47645 = (0);
seq__47064_47625 = G__47642;
chunk__47066_47626 = G__47643;
count__47067_47627 = G__47644;
i__47068_47628 = G__47645;
continue;
} else {
var child_47646 = cljs.core.first(seq__47064_47640__$1);
if(cljs.core.truth_(child_47646)){
node.appendChild(child_47646);


var G__47647 = cljs.core.next(seq__47064_47640__$1);
var G__47648 = null;
var G__47649 = (0);
var G__47650 = (0);
seq__47064_47625 = G__47647;
chunk__47066_47626 = G__47648;
count__47067_47627 = G__47649;
i__47068_47628 = G__47650;
continue;
} else {
var G__47651 = cljs.core.next(seq__47064_47640__$1);
var G__47652 = null;
var G__47653 = (0);
var G__47654 = (0);
seq__47064_47625 = G__47651;
chunk__47066_47626 = G__47652;
count__47067_47627 = G__47653;
i__47068_47628 = G__47654;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47624);
}
}


var G__47655 = seq__47038_47618;
var G__47656 = chunk__47040_47619;
var G__47657 = count__47041_47620;
var G__47658 = (i__47042_47621 + (1));
seq__47038_47618 = G__47655;
chunk__47040_47619 = G__47656;
count__47041_47620 = G__47657;
i__47042_47621 = G__47658;
continue;
} else {
var G__47659 = seq__47038_47618;
var G__47660 = chunk__47040_47619;
var G__47661 = count__47041_47620;
var G__47662 = (i__47042_47621 + (1));
seq__47038_47618 = G__47659;
chunk__47040_47619 = G__47660;
count__47041_47620 = G__47661;
i__47042_47621 = G__47662;
continue;
}
} else {
var temp__5720__auto___47663 = cljs.core.seq(seq__47038_47618);
if(temp__5720__auto___47663){
var seq__47038_47664__$1 = temp__5720__auto___47663;
if(cljs.core.chunked_seq_QMARK_(seq__47038_47664__$1)){
var c__5565__auto___47665 = cljs.core.chunk_first(seq__47038_47664__$1);
var G__47668 = cljs.core.chunk_rest(seq__47038_47664__$1);
var G__47669 = c__5565__auto___47665;
var G__47670 = cljs.core.count(c__5565__auto___47665);
var G__47671 = (0);
seq__47038_47618 = G__47668;
chunk__47040_47619 = G__47669;
count__47041_47620 = G__47670;
i__47042_47621 = G__47671;
continue;
} else {
var child_struct_47672 = cljs.core.first(seq__47038_47664__$1);
if((!((child_struct_47672 == null)))){
if(typeof child_struct_47672 === 'string'){
var text_47673 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47673),child_struct_47672].join(''));
} else {
var children_47675 = shadow.dom.svg_node(child_struct_47672);
if(cljs.core.seq_QMARK_(children_47675)){
var seq__47090_47676 = cljs.core.seq(children_47675);
var chunk__47092_47677 = null;
var count__47093_47678 = (0);
var i__47094_47679 = (0);
while(true){
if((i__47094_47679 < count__47093_47678)){
var child_47681 = chunk__47092_47677.cljs$core$IIndexed$_nth$arity$2(null,i__47094_47679);
if(cljs.core.truth_(child_47681)){
node.appendChild(child_47681);


var G__47683 = seq__47090_47676;
var G__47684 = chunk__47092_47677;
var G__47685 = count__47093_47678;
var G__47686 = (i__47094_47679 + (1));
seq__47090_47676 = G__47683;
chunk__47092_47677 = G__47684;
count__47093_47678 = G__47685;
i__47094_47679 = G__47686;
continue;
} else {
var G__47687 = seq__47090_47676;
var G__47688 = chunk__47092_47677;
var G__47689 = count__47093_47678;
var G__47690 = (i__47094_47679 + (1));
seq__47090_47676 = G__47687;
chunk__47092_47677 = G__47688;
count__47093_47678 = G__47689;
i__47094_47679 = G__47690;
continue;
}
} else {
var temp__5720__auto___47692__$1 = cljs.core.seq(seq__47090_47676);
if(temp__5720__auto___47692__$1){
var seq__47090_47693__$1 = temp__5720__auto___47692__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47090_47693__$1)){
var c__5565__auto___47694 = cljs.core.chunk_first(seq__47090_47693__$1);
var G__47695 = cljs.core.chunk_rest(seq__47090_47693__$1);
var G__47696 = c__5565__auto___47694;
var G__47697 = cljs.core.count(c__5565__auto___47694);
var G__47698 = (0);
seq__47090_47676 = G__47695;
chunk__47092_47677 = G__47696;
count__47093_47678 = G__47697;
i__47094_47679 = G__47698;
continue;
} else {
var child_47699 = cljs.core.first(seq__47090_47693__$1);
if(cljs.core.truth_(child_47699)){
node.appendChild(child_47699);


var G__47700 = cljs.core.next(seq__47090_47693__$1);
var G__47701 = null;
var G__47702 = (0);
var G__47703 = (0);
seq__47090_47676 = G__47700;
chunk__47092_47677 = G__47701;
count__47093_47678 = G__47702;
i__47094_47679 = G__47703;
continue;
} else {
var G__47704 = cljs.core.next(seq__47090_47693__$1);
var G__47705 = null;
var G__47706 = (0);
var G__47707 = (0);
seq__47090_47676 = G__47704;
chunk__47092_47677 = G__47705;
count__47093_47678 = G__47706;
i__47094_47679 = G__47707;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47675);
}
}


var G__47708 = cljs.core.next(seq__47038_47664__$1);
var G__47709 = null;
var G__47710 = (0);
var G__47711 = (0);
seq__47038_47618 = G__47708;
chunk__47040_47619 = G__47709;
count__47041_47620 = G__47710;
i__47042_47621 = G__47711;
continue;
} else {
var G__47713 = cljs.core.next(seq__47038_47664__$1);
var G__47714 = null;
var G__47715 = (0);
var G__47716 = (0);
seq__47038_47618 = G__47713;
chunk__47040_47619 = G__47714;
count__47041_47620 = G__47715;
i__47042_47621 = G__47716;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___47718 = arguments.length;
var i__5767__auto___47719 = (0);
while(true){
if((i__5767__auto___47719 < len__5766__auto___47718)){
args__5772__auto__.push((arguments[i__5767__auto___47719]));

var G__47720 = (i__5767__auto___47719 + (1));
i__5767__auto___47719 = G__47720;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47109){
var G__47110 = cljs.core.first(seq47109);
var seq47109__$1 = cljs.core.next(seq47109);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47110,seq47109__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47123 = arguments.length;
switch (G__47123) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__34441__auto___47740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_47138){
var state_val_47139 = (state_47138[(1)]);
if((state_val_47139 === (1))){
var state_47138__$1 = state_47138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47138__$1,(2),once_or_cleanup);
} else {
if((state_val_47139 === (2))){
var inst_47134 = (state_47138[(2)]);
var inst_47135 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47138__$1 = (function (){var statearr_47142 = state_47138;
(statearr_47142[(7)] = inst_47134);

return statearr_47142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47138__$1,inst_47135);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34225__auto__ = null;
var shadow$dom$state_machine__34225__auto____0 = (function (){
var statearr_47144 = [null,null,null,null,null,null,null,null];
(statearr_47144[(0)] = shadow$dom$state_machine__34225__auto__);

(statearr_47144[(1)] = (1));

return statearr_47144;
});
var shadow$dom$state_machine__34225__auto____1 = (function (state_47138){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_47138);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e47145){var ex__34228__auto__ = e47145;
var statearr_47146_47744 = state_47138;
(statearr_47146_47744[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_47138[(4)]))){
var statearr_47148_47745 = state_47138;
(statearr_47148_47745[(1)] = cljs.core.first((state_47138[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47746 = state_47138;
state_47138 = G__47746;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
shadow$dom$state_machine__34225__auto__ = function(state_47138){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34225__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34225__auto____1.call(this,state_47138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34225__auto____0;
shadow$dom$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34225__auto____1;
return shadow$dom$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_47149 = f__34442__auto__();
(statearr_47149[(6)] = c__34441__auto___47740);

return statearr_47149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
