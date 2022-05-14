goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_61633 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_61633(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_61637 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_61637(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__60618 = coll;
var G__60619 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__60618,G__60619) : shadow.dom.lazy_native_coll_seq.call(null,G__60618,G__60619));
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
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
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
var G__60637 = arguments.length;
switch (G__60637) {
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
var G__60660 = arguments.length;
switch (G__60660) {
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
var G__60670 = arguments.length;
switch (G__60670) {
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
var G__60680 = arguments.length;
switch (G__60680) {
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
var G__60692 = arguments.length;
switch (G__60692) {
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
var G__60706 = arguments.length;
switch (G__60706) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e60718){if((e60718 instanceof Object)){
var e = e60718;
return console.log("didnt support attachEvent",el,e);
} else {
throw e60718;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__60728 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__60729 = null;
var count__60730 = (0);
var i__60731 = (0);
while(true){
if((i__60731 < count__60730)){
var el = chunk__60729.cljs$core$IIndexed$_nth$arity$2(null,i__60731);
var handler_61648__$1 = ((function (seq__60728,chunk__60729,count__60730,i__60731,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60728,chunk__60729,count__60730,i__60731,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61648__$1);


var G__61650 = seq__60728;
var G__61651 = chunk__60729;
var G__61652 = count__60730;
var G__61653 = (i__60731 + (1));
seq__60728 = G__61650;
chunk__60729 = G__61651;
count__60730 = G__61652;
i__60731 = G__61653;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60728);
if(temp__5720__auto__){
var seq__60728__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60728__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60728__$1);
var G__61659 = cljs.core.chunk_rest(seq__60728__$1);
var G__61660 = c__4679__auto__;
var G__61661 = cljs.core.count(c__4679__auto__);
var G__61662 = (0);
seq__60728 = G__61659;
chunk__60729 = G__61660;
count__60730 = G__61661;
i__60731 = G__61662;
continue;
} else {
var el = cljs.core.first(seq__60728__$1);
var handler_61663__$1 = ((function (seq__60728,chunk__60729,count__60730,i__60731,el,seq__60728__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60728,chunk__60729,count__60730,i__60731,el,seq__60728__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61663__$1);


var G__61664 = cljs.core.next(seq__60728__$1);
var G__61665 = null;
var G__61666 = (0);
var G__61667 = (0);
seq__60728 = G__61664;
chunk__60729 = G__61665;
count__60730 = G__61666;
i__60731 = G__61667;
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
var G__60748 = arguments.length;
switch (G__60748) {
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
var seq__60760 = cljs.core.seq(events);
var chunk__60761 = null;
var count__60762 = (0);
var i__60763 = (0);
while(true){
if((i__60763 < count__60762)){
var vec__60777 = chunk__60761.cljs$core$IIndexed$_nth$arity$2(null,i__60763);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60777,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60777,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61673 = seq__60760;
var G__61674 = chunk__60761;
var G__61675 = count__60762;
var G__61676 = (i__60763 + (1));
seq__60760 = G__61673;
chunk__60761 = G__61674;
count__60762 = G__61675;
i__60763 = G__61676;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60760);
if(temp__5720__auto__){
var seq__60760__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60760__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60760__$1);
var G__61677 = cljs.core.chunk_rest(seq__60760__$1);
var G__61678 = c__4679__auto__;
var G__61679 = cljs.core.count(c__4679__auto__);
var G__61680 = (0);
seq__60760 = G__61677;
chunk__60761 = G__61678;
count__60762 = G__61679;
i__60763 = G__61680;
continue;
} else {
var vec__60787 = cljs.core.first(seq__60760__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60787,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60787,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61681 = cljs.core.next(seq__60760__$1);
var G__61682 = null;
var G__61683 = (0);
var G__61684 = (0);
seq__60760 = G__61681;
chunk__60761 = G__61682;
count__60762 = G__61683;
i__60763 = G__61684;
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
var seq__60796 = cljs.core.seq(styles);
var chunk__60797 = null;
var count__60798 = (0);
var i__60799 = (0);
while(true){
if((i__60799 < count__60798)){
var vec__60815 = chunk__60797.cljs$core$IIndexed$_nth$arity$2(null,i__60799);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60815,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61685 = seq__60796;
var G__61686 = chunk__60797;
var G__61687 = count__60798;
var G__61688 = (i__60799 + (1));
seq__60796 = G__61685;
chunk__60797 = G__61686;
count__60798 = G__61687;
i__60799 = G__61688;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60796);
if(temp__5720__auto__){
var seq__60796__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60796__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60796__$1);
var G__61689 = cljs.core.chunk_rest(seq__60796__$1);
var G__61690 = c__4679__auto__;
var G__61691 = cljs.core.count(c__4679__auto__);
var G__61692 = (0);
seq__60796 = G__61689;
chunk__60797 = G__61690;
count__60798 = G__61691;
i__60799 = G__61692;
continue;
} else {
var vec__60821 = cljs.core.first(seq__60796__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60821,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61694 = cljs.core.next(seq__60796__$1);
var G__61695 = null;
var G__61696 = (0);
var G__61697 = (0);
seq__60796 = G__61694;
chunk__60797 = G__61695;
count__60798 = G__61696;
i__60799 = G__61697;
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
var G__60828_61698 = key;
var G__60828_61699__$1 = (((G__60828_61698 instanceof cljs.core.Keyword))?G__60828_61698.fqn:null);
switch (G__60828_61699__$1) {
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
var ks_61704 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_61704,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_61704,"aria-");
}
})())){
el.setAttribute(ks_61704,value);
} else {
(el[ks_61704] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__60857){
var map__60859 = p__60857;
var map__60859__$1 = cljs.core.__destructure_map(map__60859);
var props = map__60859__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__60860 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60860,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60860,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60860,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__60864 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__60864,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__60864;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__60868 = arguments.length;
switch (G__60868) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__60875){
var vec__60877 = p__60875;
var seq__60878 = cljs.core.seq(vec__60877);
var first__60879 = cljs.core.first(seq__60878);
var seq__60878__$1 = cljs.core.next(seq__60878);
var nn = first__60879;
var first__60879__$1 = cljs.core.first(seq__60878__$1);
var seq__60878__$2 = cljs.core.next(seq__60878__$1);
var np = first__60879__$1;
var nc = seq__60878__$2;
var node = vec__60877;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60883 = nn;
var G__60884 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60883,G__60884) : create_fn.call(null,G__60883,G__60884));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60885 = nn;
var G__60886 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60885,G__60886) : create_fn.call(null,G__60885,G__60886));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__60891 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60891,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60891,(1),null);
var seq__60894_61710 = cljs.core.seq(node_children);
var chunk__60895_61711 = null;
var count__60896_61712 = (0);
var i__60897_61713 = (0);
while(true){
if((i__60897_61713 < count__60896_61712)){
var child_struct_61714 = chunk__60895_61711.cljs$core$IIndexed$_nth$arity$2(null,i__60897_61713);
var children_61715 = shadow.dom.dom_node(child_struct_61714);
if(cljs.core.seq_QMARK_(children_61715)){
var seq__60934_61716 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61715));
var chunk__60936_61717 = null;
var count__60937_61718 = (0);
var i__60938_61719 = (0);
while(true){
if((i__60938_61719 < count__60937_61718)){
var child_61721 = chunk__60936_61717.cljs$core$IIndexed$_nth$arity$2(null,i__60938_61719);
if(cljs.core.truth_(child_61721)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61721);


var G__61723 = seq__60934_61716;
var G__61724 = chunk__60936_61717;
var G__61725 = count__60937_61718;
var G__61726 = (i__60938_61719 + (1));
seq__60934_61716 = G__61723;
chunk__60936_61717 = G__61724;
count__60937_61718 = G__61725;
i__60938_61719 = G__61726;
continue;
} else {
var G__61727 = seq__60934_61716;
var G__61728 = chunk__60936_61717;
var G__61729 = count__60937_61718;
var G__61730 = (i__60938_61719 + (1));
seq__60934_61716 = G__61727;
chunk__60936_61717 = G__61728;
count__60937_61718 = G__61729;
i__60938_61719 = G__61730;
continue;
}
} else {
var temp__5720__auto___61734 = cljs.core.seq(seq__60934_61716);
if(temp__5720__auto___61734){
var seq__60934_61735__$1 = temp__5720__auto___61734;
if(cljs.core.chunked_seq_QMARK_(seq__60934_61735__$1)){
var c__4679__auto___61736 = cljs.core.chunk_first(seq__60934_61735__$1);
var G__61737 = cljs.core.chunk_rest(seq__60934_61735__$1);
var G__61738 = c__4679__auto___61736;
var G__61739 = cljs.core.count(c__4679__auto___61736);
var G__61740 = (0);
seq__60934_61716 = G__61737;
chunk__60936_61717 = G__61738;
count__60937_61718 = G__61739;
i__60938_61719 = G__61740;
continue;
} else {
var child_61741 = cljs.core.first(seq__60934_61735__$1);
if(cljs.core.truth_(child_61741)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61741);


var G__61742 = cljs.core.next(seq__60934_61735__$1);
var G__61743 = null;
var G__61744 = (0);
var G__61745 = (0);
seq__60934_61716 = G__61742;
chunk__60936_61717 = G__61743;
count__60937_61718 = G__61744;
i__60938_61719 = G__61745;
continue;
} else {
var G__61746 = cljs.core.next(seq__60934_61735__$1);
var G__61747 = null;
var G__61748 = (0);
var G__61749 = (0);
seq__60934_61716 = G__61746;
chunk__60936_61717 = G__61747;
count__60937_61718 = G__61748;
i__60938_61719 = G__61749;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61715);
}


var G__61750 = seq__60894_61710;
var G__61751 = chunk__60895_61711;
var G__61752 = count__60896_61712;
var G__61753 = (i__60897_61713 + (1));
seq__60894_61710 = G__61750;
chunk__60895_61711 = G__61751;
count__60896_61712 = G__61752;
i__60897_61713 = G__61753;
continue;
} else {
var temp__5720__auto___61754 = cljs.core.seq(seq__60894_61710);
if(temp__5720__auto___61754){
var seq__60894_61755__$1 = temp__5720__auto___61754;
if(cljs.core.chunked_seq_QMARK_(seq__60894_61755__$1)){
var c__4679__auto___61757 = cljs.core.chunk_first(seq__60894_61755__$1);
var G__61759 = cljs.core.chunk_rest(seq__60894_61755__$1);
var G__61760 = c__4679__auto___61757;
var G__61761 = cljs.core.count(c__4679__auto___61757);
var G__61762 = (0);
seq__60894_61710 = G__61759;
chunk__60895_61711 = G__61760;
count__60896_61712 = G__61761;
i__60897_61713 = G__61762;
continue;
} else {
var child_struct_61763 = cljs.core.first(seq__60894_61755__$1);
var children_61764 = shadow.dom.dom_node(child_struct_61763);
if(cljs.core.seq_QMARK_(children_61764)){
var seq__60954_61769 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61764));
var chunk__60956_61770 = null;
var count__60957_61771 = (0);
var i__60958_61773 = (0);
while(true){
if((i__60958_61773 < count__60957_61771)){
var child_61775 = chunk__60956_61770.cljs$core$IIndexed$_nth$arity$2(null,i__60958_61773);
if(cljs.core.truth_(child_61775)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61775);


var G__61776 = seq__60954_61769;
var G__61777 = chunk__60956_61770;
var G__61778 = count__60957_61771;
var G__61779 = (i__60958_61773 + (1));
seq__60954_61769 = G__61776;
chunk__60956_61770 = G__61777;
count__60957_61771 = G__61778;
i__60958_61773 = G__61779;
continue;
} else {
var G__61780 = seq__60954_61769;
var G__61781 = chunk__60956_61770;
var G__61782 = count__60957_61771;
var G__61783 = (i__60958_61773 + (1));
seq__60954_61769 = G__61780;
chunk__60956_61770 = G__61781;
count__60957_61771 = G__61782;
i__60958_61773 = G__61783;
continue;
}
} else {
var temp__5720__auto___61784__$1 = cljs.core.seq(seq__60954_61769);
if(temp__5720__auto___61784__$1){
var seq__60954_61785__$1 = temp__5720__auto___61784__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60954_61785__$1)){
var c__4679__auto___61786 = cljs.core.chunk_first(seq__60954_61785__$1);
var G__61787 = cljs.core.chunk_rest(seq__60954_61785__$1);
var G__61788 = c__4679__auto___61786;
var G__61789 = cljs.core.count(c__4679__auto___61786);
var G__61790 = (0);
seq__60954_61769 = G__61787;
chunk__60956_61770 = G__61788;
count__60957_61771 = G__61789;
i__60958_61773 = G__61790;
continue;
} else {
var child_61791 = cljs.core.first(seq__60954_61785__$1);
if(cljs.core.truth_(child_61791)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61791);


var G__61792 = cljs.core.next(seq__60954_61785__$1);
var G__61793 = null;
var G__61794 = (0);
var G__61795 = (0);
seq__60954_61769 = G__61792;
chunk__60956_61770 = G__61793;
count__60957_61771 = G__61794;
i__60958_61773 = G__61795;
continue;
} else {
var G__61797 = cljs.core.next(seq__60954_61785__$1);
var G__61798 = null;
var G__61799 = (0);
var G__61800 = (0);
seq__60954_61769 = G__61797;
chunk__60956_61770 = G__61798;
count__60957_61771 = G__61799;
i__60958_61773 = G__61800;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61764);
}


var G__61804 = cljs.core.next(seq__60894_61755__$1);
var G__61805 = null;
var G__61806 = (0);
var G__61807 = (0);
seq__60894_61710 = G__61804;
chunk__60895_61711 = G__61805;
count__60896_61712 = G__61806;
i__60897_61713 = G__61807;
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
var seq__60984 = cljs.core.seq(node);
var chunk__60985 = null;
var count__60986 = (0);
var i__60987 = (0);
while(true){
if((i__60987 < count__60986)){
var n = chunk__60985.cljs$core$IIndexed$_nth$arity$2(null,i__60987);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61819 = seq__60984;
var G__61820 = chunk__60985;
var G__61821 = count__60986;
var G__61822 = (i__60987 + (1));
seq__60984 = G__61819;
chunk__60985 = G__61820;
count__60986 = G__61821;
i__60987 = G__61822;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60984);
if(temp__5720__auto__){
var seq__60984__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60984__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60984__$1);
var G__61823 = cljs.core.chunk_rest(seq__60984__$1);
var G__61824 = c__4679__auto__;
var G__61825 = cljs.core.count(c__4679__auto__);
var G__61826 = (0);
seq__60984 = G__61823;
chunk__60985 = G__61824;
count__60986 = G__61825;
i__60987 = G__61826;
continue;
} else {
var n = cljs.core.first(seq__60984__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61830 = cljs.core.next(seq__60984__$1);
var G__61831 = null;
var G__61832 = (0);
var G__61833 = (0);
seq__60984 = G__61830;
chunk__60985 = G__61831;
count__60986 = G__61832;
i__60987 = G__61833;
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
var G__61015 = arguments.length;
switch (G__61015) {
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
var G__61025 = arguments.length;
switch (G__61025) {
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
var G__61047 = arguments.length;
switch (G__61047) {
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
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___61858 = arguments.length;
var i__4865__auto___61859 = (0);
while(true){
if((i__4865__auto___61859 < len__4864__auto___61858)){
args__4870__auto__.push((arguments[i__4865__auto___61859]));

var G__61860 = (i__4865__auto___61859 + (1));
i__4865__auto___61859 = G__61860;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__61073_61861 = cljs.core.seq(nodes);
var chunk__61074_61862 = null;
var count__61075_61863 = (0);
var i__61076_61864 = (0);
while(true){
if((i__61076_61864 < count__61075_61863)){
var node_61865 = chunk__61074_61862.cljs$core$IIndexed$_nth$arity$2(null,i__61076_61864);
fragment.appendChild(shadow.dom._to_dom(node_61865));


var G__61866 = seq__61073_61861;
var G__61867 = chunk__61074_61862;
var G__61868 = count__61075_61863;
var G__61869 = (i__61076_61864 + (1));
seq__61073_61861 = G__61866;
chunk__61074_61862 = G__61867;
count__61075_61863 = G__61868;
i__61076_61864 = G__61869;
continue;
} else {
var temp__5720__auto___61870 = cljs.core.seq(seq__61073_61861);
if(temp__5720__auto___61870){
var seq__61073_61871__$1 = temp__5720__auto___61870;
if(cljs.core.chunked_seq_QMARK_(seq__61073_61871__$1)){
var c__4679__auto___61872 = cljs.core.chunk_first(seq__61073_61871__$1);
var G__61873 = cljs.core.chunk_rest(seq__61073_61871__$1);
var G__61874 = c__4679__auto___61872;
var G__61875 = cljs.core.count(c__4679__auto___61872);
var G__61876 = (0);
seq__61073_61861 = G__61873;
chunk__61074_61862 = G__61874;
count__61075_61863 = G__61875;
i__61076_61864 = G__61876;
continue;
} else {
var node_61878 = cljs.core.first(seq__61073_61871__$1);
fragment.appendChild(shadow.dom._to_dom(node_61878));


var G__61882 = cljs.core.next(seq__61073_61871__$1);
var G__61883 = null;
var G__61884 = (0);
var G__61885 = (0);
seq__61073_61861 = G__61882;
chunk__61074_61862 = G__61883;
count__61075_61863 = G__61884;
i__61076_61864 = G__61885;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq61066){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61066));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__61086_61889 = cljs.core.seq(scripts);
var chunk__61087_61890 = null;
var count__61088_61891 = (0);
var i__61089_61892 = (0);
while(true){
if((i__61089_61892 < count__61088_61891)){
var vec__61097_61893 = chunk__61087_61890.cljs$core$IIndexed$_nth$arity$2(null,i__61089_61892);
var script_tag_61894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61097_61893,(0),null);
var script_body_61895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61097_61893,(1),null);
eval(script_body_61895);


var G__61896 = seq__61086_61889;
var G__61897 = chunk__61087_61890;
var G__61898 = count__61088_61891;
var G__61899 = (i__61089_61892 + (1));
seq__61086_61889 = G__61896;
chunk__61087_61890 = G__61897;
count__61088_61891 = G__61898;
i__61089_61892 = G__61899;
continue;
} else {
var temp__5720__auto___61900 = cljs.core.seq(seq__61086_61889);
if(temp__5720__auto___61900){
var seq__61086_61901__$1 = temp__5720__auto___61900;
if(cljs.core.chunked_seq_QMARK_(seq__61086_61901__$1)){
var c__4679__auto___61902 = cljs.core.chunk_first(seq__61086_61901__$1);
var G__61903 = cljs.core.chunk_rest(seq__61086_61901__$1);
var G__61904 = c__4679__auto___61902;
var G__61905 = cljs.core.count(c__4679__auto___61902);
var G__61906 = (0);
seq__61086_61889 = G__61903;
chunk__61087_61890 = G__61904;
count__61088_61891 = G__61905;
i__61089_61892 = G__61906;
continue;
} else {
var vec__61100_61907 = cljs.core.first(seq__61086_61901__$1);
var script_tag_61908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61100_61907,(0),null);
var script_body_61909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61100_61907,(1),null);
eval(script_body_61909);


var G__61910 = cljs.core.next(seq__61086_61901__$1);
var G__61911 = null;
var G__61912 = (0);
var G__61913 = (0);
seq__61086_61889 = G__61910;
chunk__61087_61890 = G__61911;
count__61088_61891 = G__61912;
i__61089_61892 = G__61913;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__61103){
var vec__61104 = p__61103;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61104,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61104,(1),null);
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
var G__61121 = arguments.length;
switch (G__61121) {
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
var seq__61124 = cljs.core.seq(style_keys);
var chunk__61125 = null;
var count__61126 = (0);
var i__61127 = (0);
while(true){
if((i__61127 < count__61126)){
var it = chunk__61125.cljs$core$IIndexed$_nth$arity$2(null,i__61127);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61921 = seq__61124;
var G__61922 = chunk__61125;
var G__61923 = count__61126;
var G__61924 = (i__61127 + (1));
seq__61124 = G__61921;
chunk__61125 = G__61922;
count__61126 = G__61923;
i__61127 = G__61924;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__61124);
if(temp__5720__auto__){
var seq__61124__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61124__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61124__$1);
var G__61925 = cljs.core.chunk_rest(seq__61124__$1);
var G__61926 = c__4679__auto__;
var G__61927 = cljs.core.count(c__4679__auto__);
var G__61928 = (0);
seq__61124 = G__61925;
chunk__61125 = G__61926;
count__61126 = G__61927;
i__61127 = G__61928;
continue;
} else {
var it = cljs.core.first(seq__61124__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61929 = cljs.core.next(seq__61124__$1);
var G__61930 = null;
var G__61931 = (0);
var G__61932 = (0);
seq__61124 = G__61929;
chunk__61125 = G__61930;
count__61126 = G__61931;
i__61127 = G__61932;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k61131,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__61138 = k61131;
var G__61138__$1 = (((G__61138 instanceof cljs.core.Keyword))?G__61138.fqn:null);
switch (G__61138__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61131,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__61140){
var vec__61141 = p__61140;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61141,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61141,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61130){
var self__ = this;
var G__61130__$1 = this;
return (new cljs.core.RecordIter((0),G__61130__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61132,other61133){
var self__ = this;
var this61132__$1 = this;
return (((!((other61133 == null)))) && ((((this61132__$1.constructor === other61133.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61132__$1.x,other61133.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61132__$1.y,other61133.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61132__$1.__extmap,other61133.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k61131){
var self__ = this;
var this__4509__auto____$1 = this;
var G__61147 = k61131;
var G__61147__$1 = (((G__61147 instanceof cljs.core.Keyword))?G__61147.fqn:null);
switch (G__61147__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61131);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__61130){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__61152 = cljs.core.keyword_identical_QMARK_;
var expr__61153 = k__4511__auto__;
if(cljs.core.truth_((pred__61152.cljs$core$IFn$_invoke$arity$2 ? pred__61152.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__61153) : pred__61152.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__61153)))){
return (new shadow.dom.Coordinate(G__61130,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61152.cljs$core$IFn$_invoke$arity$2 ? pred__61152.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__61153) : pred__61152.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__61153)))){
return (new shadow.dom.Coordinate(self__.x,G__61130,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__61130),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__61130){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__61130,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__61134){
var extmap__4542__auto__ = (function (){var G__61218 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61134,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__61134)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61218);
} else {
return G__61218;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__61134),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__61134),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k61251,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__61289 = k61251;
var G__61289__$1 = (((G__61289 instanceof cljs.core.Keyword))?G__61289.fqn:null);
switch (G__61289__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61251,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__61290){
var vec__61291 = p__61290;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61291,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61291,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61250){
var self__ = this;
var G__61250__$1 = this;
return (new cljs.core.RecordIter((0),G__61250__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61253,other61254){
var self__ = this;
var this61253__$1 = this;
return (((!((other61254 == null)))) && ((((this61253__$1.constructor === other61254.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61253__$1.w,other61254.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61253__$1.h,other61254.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61253__$1.__extmap,other61254.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k61251){
var self__ = this;
var this__4509__auto____$1 = this;
var G__61315 = k61251;
var G__61315__$1 = (((G__61315 instanceof cljs.core.Keyword))?G__61315.fqn:null);
switch (G__61315__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61251);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__61250){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__61318 = cljs.core.keyword_identical_QMARK_;
var expr__61319 = k__4511__auto__;
if(cljs.core.truth_((pred__61318.cljs$core$IFn$_invoke$arity$2 ? pred__61318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__61319) : pred__61318.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__61319)))){
return (new shadow.dom.Size(G__61250,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61318.cljs$core$IFn$_invoke$arity$2 ? pred__61318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__61319) : pred__61318.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__61319)))){
return (new shadow.dom.Size(self__.w,G__61250,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__61250),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__61250){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__61250,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__61270){
var extmap__4542__auto__ = (function (){var G__61326 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61270,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__61270)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61326);
} else {
return G__61326;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__61270),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__61270),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__62022 = (i + (1));
var G__62023 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__62022;
ret = G__62023;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61352){
var vec__61353 = p__61352;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61353,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__61365 = arguments.length;
switch (G__61365) {
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
var G__62027 = ps;
var G__62028 = (i + (1));
el__$1 = G__62027;
i = G__62028;
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
var vec__61417 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61417,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61417,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61417,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__61423_62038 = cljs.core.seq(props);
var chunk__61424_62039 = null;
var count__61425_62040 = (0);
var i__61426_62041 = (0);
while(true){
if((i__61426_62041 < count__61425_62040)){
var vec__61445_62042 = chunk__61424_62039.cljs$core$IIndexed$_nth$arity$2(null,i__61426_62041);
var k_62043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61445_62042,(0),null);
var v_62044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61445_62042,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_62043);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62043),v_62044);


var G__62045 = seq__61423_62038;
var G__62046 = chunk__61424_62039;
var G__62047 = count__61425_62040;
var G__62048 = (i__61426_62041 + (1));
seq__61423_62038 = G__62045;
chunk__61424_62039 = G__62046;
count__61425_62040 = G__62047;
i__61426_62041 = G__62048;
continue;
} else {
var temp__5720__auto___62050 = cljs.core.seq(seq__61423_62038);
if(temp__5720__auto___62050){
var seq__61423_62051__$1 = temp__5720__auto___62050;
if(cljs.core.chunked_seq_QMARK_(seq__61423_62051__$1)){
var c__4679__auto___62052 = cljs.core.chunk_first(seq__61423_62051__$1);
var G__62053 = cljs.core.chunk_rest(seq__61423_62051__$1);
var G__62054 = c__4679__auto___62052;
var G__62055 = cljs.core.count(c__4679__auto___62052);
var G__62056 = (0);
seq__61423_62038 = G__62053;
chunk__61424_62039 = G__62054;
count__61425_62040 = G__62055;
i__61426_62041 = G__62056;
continue;
} else {
var vec__61453_62061 = cljs.core.first(seq__61423_62051__$1);
var k_62062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61453_62061,(0),null);
var v_62063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61453_62061,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_62062);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62062),v_62063);


var G__62078 = cljs.core.next(seq__61423_62051__$1);
var G__62079 = null;
var G__62080 = (0);
var G__62081 = (0);
seq__61423_62038 = G__62078;
chunk__61424_62039 = G__62079;
count__61425_62040 = G__62080;
i__61426_62041 = G__62081;
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
var vec__61465 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61465,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61465,(1),null);
var seq__61470_62083 = cljs.core.seq(node_children);
var chunk__61472_62084 = null;
var count__61473_62085 = (0);
var i__61474_62086 = (0);
while(true){
if((i__61474_62086 < count__61473_62085)){
var child_struct_62087 = chunk__61472_62084.cljs$core$IIndexed$_nth$arity$2(null,i__61474_62086);
if((!((child_struct_62087 == null)))){
if(typeof child_struct_62087 === 'string'){
var text_62092 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62092),child_struct_62087].join(''));
} else {
var children_62093 = shadow.dom.svg_node(child_struct_62087);
if(cljs.core.seq_QMARK_(children_62093)){
var seq__61535_62097 = cljs.core.seq(children_62093);
var chunk__61537_62098 = null;
var count__61538_62099 = (0);
var i__61539_62100 = (0);
while(true){
if((i__61539_62100 < count__61538_62099)){
var child_62105 = chunk__61537_62098.cljs$core$IIndexed$_nth$arity$2(null,i__61539_62100);
if(cljs.core.truth_(child_62105)){
node.appendChild(child_62105);


var G__62107 = seq__61535_62097;
var G__62108 = chunk__61537_62098;
var G__62109 = count__61538_62099;
var G__62110 = (i__61539_62100 + (1));
seq__61535_62097 = G__62107;
chunk__61537_62098 = G__62108;
count__61538_62099 = G__62109;
i__61539_62100 = G__62110;
continue;
} else {
var G__62111 = seq__61535_62097;
var G__62112 = chunk__61537_62098;
var G__62113 = count__61538_62099;
var G__62114 = (i__61539_62100 + (1));
seq__61535_62097 = G__62111;
chunk__61537_62098 = G__62112;
count__61538_62099 = G__62113;
i__61539_62100 = G__62114;
continue;
}
} else {
var temp__5720__auto___62115 = cljs.core.seq(seq__61535_62097);
if(temp__5720__auto___62115){
var seq__61535_62116__$1 = temp__5720__auto___62115;
if(cljs.core.chunked_seq_QMARK_(seq__61535_62116__$1)){
var c__4679__auto___62117 = cljs.core.chunk_first(seq__61535_62116__$1);
var G__62118 = cljs.core.chunk_rest(seq__61535_62116__$1);
var G__62119 = c__4679__auto___62117;
var G__62120 = cljs.core.count(c__4679__auto___62117);
var G__62121 = (0);
seq__61535_62097 = G__62118;
chunk__61537_62098 = G__62119;
count__61538_62099 = G__62120;
i__61539_62100 = G__62121;
continue;
} else {
var child_62122 = cljs.core.first(seq__61535_62116__$1);
if(cljs.core.truth_(child_62122)){
node.appendChild(child_62122);


var G__62123 = cljs.core.next(seq__61535_62116__$1);
var G__62124 = null;
var G__62125 = (0);
var G__62127 = (0);
seq__61535_62097 = G__62123;
chunk__61537_62098 = G__62124;
count__61538_62099 = G__62125;
i__61539_62100 = G__62127;
continue;
} else {
var G__62131 = cljs.core.next(seq__61535_62116__$1);
var G__62132 = null;
var G__62133 = (0);
var G__62134 = (0);
seq__61535_62097 = G__62131;
chunk__61537_62098 = G__62132;
count__61538_62099 = G__62133;
i__61539_62100 = G__62134;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62093);
}
}


var G__62137 = seq__61470_62083;
var G__62138 = chunk__61472_62084;
var G__62139 = count__61473_62085;
var G__62140 = (i__61474_62086 + (1));
seq__61470_62083 = G__62137;
chunk__61472_62084 = G__62138;
count__61473_62085 = G__62139;
i__61474_62086 = G__62140;
continue;
} else {
var G__62146 = seq__61470_62083;
var G__62147 = chunk__61472_62084;
var G__62148 = count__61473_62085;
var G__62149 = (i__61474_62086 + (1));
seq__61470_62083 = G__62146;
chunk__61472_62084 = G__62147;
count__61473_62085 = G__62148;
i__61474_62086 = G__62149;
continue;
}
} else {
var temp__5720__auto___62153 = cljs.core.seq(seq__61470_62083);
if(temp__5720__auto___62153){
var seq__61470_62154__$1 = temp__5720__auto___62153;
if(cljs.core.chunked_seq_QMARK_(seq__61470_62154__$1)){
var c__4679__auto___62155 = cljs.core.chunk_first(seq__61470_62154__$1);
var G__62156 = cljs.core.chunk_rest(seq__61470_62154__$1);
var G__62157 = c__4679__auto___62155;
var G__62158 = cljs.core.count(c__4679__auto___62155);
var G__62159 = (0);
seq__61470_62083 = G__62156;
chunk__61472_62084 = G__62157;
count__61473_62085 = G__62158;
i__61474_62086 = G__62159;
continue;
} else {
var child_struct_62160 = cljs.core.first(seq__61470_62154__$1);
if((!((child_struct_62160 == null)))){
if(typeof child_struct_62160 === 'string'){
var text_62161 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62161),child_struct_62160].join(''));
} else {
var children_62166 = shadow.dom.svg_node(child_struct_62160);
if(cljs.core.seq_QMARK_(children_62166)){
var seq__61559_62171 = cljs.core.seq(children_62166);
var chunk__61561_62172 = null;
var count__61562_62173 = (0);
var i__61563_62174 = (0);
while(true){
if((i__61563_62174 < count__61562_62173)){
var child_62177 = chunk__61561_62172.cljs$core$IIndexed$_nth$arity$2(null,i__61563_62174);
if(cljs.core.truth_(child_62177)){
node.appendChild(child_62177);


var G__62183 = seq__61559_62171;
var G__62184 = chunk__61561_62172;
var G__62185 = count__61562_62173;
var G__62186 = (i__61563_62174 + (1));
seq__61559_62171 = G__62183;
chunk__61561_62172 = G__62184;
count__61562_62173 = G__62185;
i__61563_62174 = G__62186;
continue;
} else {
var G__62196 = seq__61559_62171;
var G__62197 = chunk__61561_62172;
var G__62198 = count__61562_62173;
var G__62199 = (i__61563_62174 + (1));
seq__61559_62171 = G__62196;
chunk__61561_62172 = G__62197;
count__61562_62173 = G__62198;
i__61563_62174 = G__62199;
continue;
}
} else {
var temp__5720__auto___62200__$1 = cljs.core.seq(seq__61559_62171);
if(temp__5720__auto___62200__$1){
var seq__61559_62201__$1 = temp__5720__auto___62200__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61559_62201__$1)){
var c__4679__auto___62202 = cljs.core.chunk_first(seq__61559_62201__$1);
var G__62203 = cljs.core.chunk_rest(seq__61559_62201__$1);
var G__62204 = c__4679__auto___62202;
var G__62205 = cljs.core.count(c__4679__auto___62202);
var G__62206 = (0);
seq__61559_62171 = G__62203;
chunk__61561_62172 = G__62204;
count__61562_62173 = G__62205;
i__61563_62174 = G__62206;
continue;
} else {
var child_62207 = cljs.core.first(seq__61559_62201__$1);
if(cljs.core.truth_(child_62207)){
node.appendChild(child_62207);


var G__62208 = cljs.core.next(seq__61559_62201__$1);
var G__62209 = null;
var G__62210 = (0);
var G__62211 = (0);
seq__61559_62171 = G__62208;
chunk__61561_62172 = G__62209;
count__61562_62173 = G__62210;
i__61563_62174 = G__62211;
continue;
} else {
var G__62212 = cljs.core.next(seq__61559_62201__$1);
var G__62213 = null;
var G__62214 = (0);
var G__62215 = (0);
seq__61559_62171 = G__62212;
chunk__61561_62172 = G__62213;
count__61562_62173 = G__62214;
i__61563_62174 = G__62215;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62166);
}
}


var G__62216 = cljs.core.next(seq__61470_62154__$1);
var G__62217 = null;
var G__62218 = (0);
var G__62219 = (0);
seq__61470_62083 = G__62216;
chunk__61472_62084 = G__62217;
count__61473_62085 = G__62218;
i__61474_62086 = G__62219;
continue;
} else {
var G__62220 = cljs.core.next(seq__61470_62154__$1);
var G__62221 = null;
var G__62222 = (0);
var G__62223 = (0);
seq__61470_62083 = G__62220;
chunk__61472_62084 = G__62221;
count__61473_62085 = G__62222;
i__61474_62086 = G__62223;
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
var args__4870__auto__ = [];
var len__4864__auto___62236 = arguments.length;
var i__4865__auto___62238 = (0);
while(true){
if((i__4865__auto___62238 < len__4864__auto___62236)){
args__4870__auto__.push((arguments[i__4865__auto___62238]));

var G__62240 = (i__4865__auto___62238 + (1));
i__4865__auto___62238 = G__62240;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq61594){
var G__61595 = cljs.core.first(seq61594);
var seq61594__$1 = cljs.core.next(seq61594);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61595,seq61594__$1);
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
var G__61602 = arguments.length;
switch (G__61602) {
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

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__48598__auto___62263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_61621){
var state_val_61622 = (state_61621[(1)]);
if((state_val_61622 === (1))){
var state_61621__$1 = state_61621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61621__$1,(2),once_or_cleanup);
} else {
if((state_val_61622 === (2))){
var inst_61615 = (state_61621[(2)]);
var inst_61616 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_61621__$1 = (function (){var statearr_61623 = state_61621;
(statearr_61623[(7)] = inst_61615);

return statearr_61623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61621__$1,inst_61616);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48470__auto__ = null;
var shadow$dom$state_machine__48470__auto____0 = (function (){
var statearr_61624 = [null,null,null,null,null,null,null,null];
(statearr_61624[(0)] = shadow$dom$state_machine__48470__auto__);

(statearr_61624[(1)] = (1));

return statearr_61624;
});
var shadow$dom$state_machine__48470__auto____1 = (function (state_61621){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_61621);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e61625){var ex__48473__auto__ = e61625;
var statearr_61626_62274 = state_61621;
(statearr_61626_62274[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_61621[(4)]))){
var statearr_61627_62279 = state_61621;
(statearr_61627_62279[(1)] = cljs.core.first((state_61621[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62285 = state_61621;
state_61621 = G__62285;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
shadow$dom$state_machine__48470__auto__ = function(state_61621){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48470__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48470__auto____1.call(this,state_61621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48470__auto____0;
shadow$dom$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48470__auto____1;
return shadow$dom$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_61631 = f__48599__auto__();
(statearr_61631[(6)] = c__48598__auto___62263);

return statearr_61631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
