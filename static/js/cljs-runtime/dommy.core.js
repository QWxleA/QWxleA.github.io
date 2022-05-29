goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__5043__auto__ = elem.textContent;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__51804 = arguments.length;
switch (G__51804) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5718__auto__ = elem.classList;
if(cljs.core.truth_(temp__5718__auto__)){
var class_list = temp__5718__auto__;
return class_list.contains(c__$1);
} else {
var temp__5720__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5720__auto__)){
var class_name = temp__5720__auto__;
var temp__5720__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5720__auto____$1)){
var i = temp__5720__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__51813 = arguments.length;
switch (G__51813) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__51868 = arguments.length;
switch (G__51868) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__51859_SHARP_){
return (!((p1__51859_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52608 = arguments.length;
var i__5767__auto___52610 = (0);
while(true){
if((i__5767__auto___52610 < len__5766__auto___52608)){
args__5772__auto__.push((arguments[i__5767__auto___52610]));

var G__52611 = (i__5767__auto___52610 + (1));
i__5767__auto___52610 = G__52611;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__51893_52612 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__51894_52613 = null;
var count__51895_52614 = (0);
var i__51896_52615 = (0);
while(true){
if((i__51896_52615 < count__51895_52614)){
var vec__51903_52618 = chunk__51894_52613.cljs$core$IIndexed$_nth$arity$2(null,i__51896_52615);
var k_52619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51903_52618,(0),null);
var v_52620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51903_52618,(1),null);
style.setProperty(dommy.utils.as_str(k_52619),v_52620);


var G__52623 = seq__51893_52612;
var G__52624 = chunk__51894_52613;
var G__52625 = count__51895_52614;
var G__52626 = (i__51896_52615 + (1));
seq__51893_52612 = G__52623;
chunk__51894_52613 = G__52624;
count__51895_52614 = G__52625;
i__51896_52615 = G__52626;
continue;
} else {
var temp__5720__auto___52627 = cljs.core.seq(seq__51893_52612);
if(temp__5720__auto___52627){
var seq__51893_52628__$1 = temp__5720__auto___52627;
if(cljs.core.chunked_seq_QMARK_(seq__51893_52628__$1)){
var c__5565__auto___52629 = cljs.core.chunk_first(seq__51893_52628__$1);
var G__52631 = cljs.core.chunk_rest(seq__51893_52628__$1);
var G__52632 = c__5565__auto___52629;
var G__52633 = cljs.core.count(c__5565__auto___52629);
var G__52634 = (0);
seq__51893_52612 = G__52631;
chunk__51894_52613 = G__52632;
count__51895_52614 = G__52633;
i__51896_52615 = G__52634;
continue;
} else {
var vec__51909_52637 = cljs.core.first(seq__51893_52628__$1);
var k_52638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51909_52637,(0),null);
var v_52639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51909_52637,(1),null);
style.setProperty(dommy.utils.as_str(k_52638),v_52639);


var G__52640 = cljs.core.next(seq__51893_52628__$1);
var G__52641 = null;
var G__52642 = (0);
var G__52643 = (0);
seq__51893_52612 = G__52640;
chunk__51894_52613 = G__52641;
count__51895_52614 = G__52642;
i__51896_52615 = G__52643;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq51890){
var G__51891 = cljs.core.first(seq51890);
var seq51890__$1 = cljs.core.next(seq51890);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51891,seq51890__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52661 = arguments.length;
var i__5767__auto___52662 = (0);
while(true){
if((i__5767__auto___52662 < len__5766__auto___52661)){
args__5772__auto__.push((arguments[i__5767__auto___52662]));

var G__52663 = (i__5767__auto___52662 + (1));
i__5767__auto___52662 = G__52663;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__51916_52664 = cljs.core.seq(keywords);
var chunk__51917_52665 = null;
var count__51918_52666 = (0);
var i__51919_52667 = (0);
while(true){
if((i__51919_52667 < count__51918_52666)){
var kw_52668 = chunk__51917_52665.cljs$core$IIndexed$_nth$arity$2(null,i__51919_52667);
style.removeProperty(dommy.utils.as_str(kw_52668));


var G__52670 = seq__51916_52664;
var G__52671 = chunk__51917_52665;
var G__52672 = count__51918_52666;
var G__52673 = (i__51919_52667 + (1));
seq__51916_52664 = G__52670;
chunk__51917_52665 = G__52671;
count__51918_52666 = G__52672;
i__51919_52667 = G__52673;
continue;
} else {
var temp__5720__auto___52674 = cljs.core.seq(seq__51916_52664);
if(temp__5720__auto___52674){
var seq__51916_52675__$1 = temp__5720__auto___52674;
if(cljs.core.chunked_seq_QMARK_(seq__51916_52675__$1)){
var c__5565__auto___52677 = cljs.core.chunk_first(seq__51916_52675__$1);
var G__52678 = cljs.core.chunk_rest(seq__51916_52675__$1);
var G__52679 = c__5565__auto___52677;
var G__52680 = cljs.core.count(c__5565__auto___52677);
var G__52681 = (0);
seq__51916_52664 = G__52678;
chunk__51917_52665 = G__52679;
count__51918_52666 = G__52680;
i__51919_52667 = G__52681;
continue;
} else {
var kw_52682 = cljs.core.first(seq__51916_52675__$1);
style.removeProperty(dommy.utils.as_str(kw_52682));


var G__52684 = cljs.core.next(seq__51916_52675__$1);
var G__52685 = null;
var G__52686 = (0);
var G__52687 = (0);
seq__51916_52664 = G__52684;
chunk__51917_52665 = G__52685;
count__51918_52666 = G__52686;
i__51919_52667 = G__52687;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq51913){
var G__51914 = cljs.core.first(seq51913);
var seq51913__$1 = cljs.core.next(seq51913);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51914,seq51913__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52689 = arguments.length;
var i__5767__auto___52690 = (0);
while(true){
if((i__5767__auto___52690 < len__5766__auto___52689)){
args__5772__auto__.push((arguments[i__5767__auto___52690]));

var G__52691 = (i__5767__auto___52690 + (1));
i__5767__auto___52690 = G__52691;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__51939_52692 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__51940_52693 = null;
var count__51941_52694 = (0);
var i__51942_52695 = (0);
while(true){
if((i__51942_52695 < count__51941_52694)){
var vec__51963_52698 = chunk__51940_52693.cljs$core$IIndexed$_nth$arity$2(null,i__51942_52695);
var k_52699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51963_52698,(0),null);
var v_52700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51963_52698,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_52699,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_52700),"px"].join('')], 0));


var G__52701 = seq__51939_52692;
var G__52702 = chunk__51940_52693;
var G__52703 = count__51941_52694;
var G__52704 = (i__51942_52695 + (1));
seq__51939_52692 = G__52701;
chunk__51940_52693 = G__52702;
count__51941_52694 = G__52703;
i__51942_52695 = G__52704;
continue;
} else {
var temp__5720__auto___52705 = cljs.core.seq(seq__51939_52692);
if(temp__5720__auto___52705){
var seq__51939_52706__$1 = temp__5720__auto___52705;
if(cljs.core.chunked_seq_QMARK_(seq__51939_52706__$1)){
var c__5565__auto___52707 = cljs.core.chunk_first(seq__51939_52706__$1);
var G__52708 = cljs.core.chunk_rest(seq__51939_52706__$1);
var G__52709 = c__5565__auto___52707;
var G__52710 = cljs.core.count(c__5565__auto___52707);
var G__52711 = (0);
seq__51939_52692 = G__52708;
chunk__51940_52693 = G__52709;
count__51941_52694 = G__52710;
i__51942_52695 = G__52711;
continue;
} else {
var vec__51968_52712 = cljs.core.first(seq__51939_52706__$1);
var k_52713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51968_52712,(0),null);
var v_52714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51968_52712,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_52713,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_52714),"px"].join('')], 0));


var G__52717 = cljs.core.next(seq__51939_52706__$1);
var G__52718 = null;
var G__52719 = (0);
var G__52720 = (0);
seq__51939_52692 = G__52717;
chunk__51940_52693 = G__52718;
count__51941_52694 = G__52719;
i__51942_52695 = G__52720;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq51932){
var G__51933 = cljs.core.first(seq51932);
var seq51932__$1 = cljs.core.next(seq51932);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51933,seq51932__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__51986 = arguments.length;
switch (G__51986) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52728 = arguments.length;
var i__5767__auto___52729 = (0);
while(true){
if((i__5767__auto___52729 < len__5766__auto___52728)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52729]));

var G__52730 = (i__5767__auto___52729 + (1));
i__5767__auto___52729 = G__52730;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5792__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__51997 = elem;
(G__51997[k__$1] = v);

return G__51997;
} else {
var G__51999 = elem;
G__51999.setAttribute(k__$1,v);

return G__51999;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__52000_52736 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__52001_52737 = null;
var count__52002_52738 = (0);
var i__52003_52739 = (0);
while(true){
if((i__52003_52739 < count__52002_52738)){
var vec__52017_52741 = chunk__52001_52737.cljs$core$IIndexed$_nth$arity$2(null,i__52003_52739);
var k_52742__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52017_52741,(0),null);
var v_52743__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52017_52741,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_52742__$1,v_52743__$1);


var G__52744 = seq__52000_52736;
var G__52745 = chunk__52001_52737;
var G__52746 = count__52002_52738;
var G__52747 = (i__52003_52739 + (1));
seq__52000_52736 = G__52744;
chunk__52001_52737 = G__52745;
count__52002_52738 = G__52746;
i__52003_52739 = G__52747;
continue;
} else {
var temp__5720__auto___52748 = cljs.core.seq(seq__52000_52736);
if(temp__5720__auto___52748){
var seq__52000_52749__$1 = temp__5720__auto___52748;
if(cljs.core.chunked_seq_QMARK_(seq__52000_52749__$1)){
var c__5565__auto___52750 = cljs.core.chunk_first(seq__52000_52749__$1);
var G__52752 = cljs.core.chunk_rest(seq__52000_52749__$1);
var G__52753 = c__5565__auto___52750;
var G__52754 = cljs.core.count(c__5565__auto___52750);
var G__52755 = (0);
seq__52000_52736 = G__52752;
chunk__52001_52737 = G__52753;
count__52002_52738 = G__52754;
i__52003_52739 = G__52755;
continue;
} else {
var vec__52024_52756 = cljs.core.first(seq__52000_52749__$1);
var k_52757__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52024_52756,(0),null);
var v_52758__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52024_52756,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_52757__$1,v_52758__$1);


var G__52759 = cljs.core.next(seq__52000_52749__$1);
var G__52760 = null;
var G__52761 = (0);
var G__52762 = (0);
seq__52000_52736 = G__52759;
chunk__52001_52737 = G__52760;
count__52002_52738 = G__52761;
i__52003_52739 = G__52762;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq51978){
var G__51979 = cljs.core.first(seq51978);
var seq51978__$1 = cljs.core.next(seq51978);
var G__51980 = cljs.core.first(seq51978__$1);
var seq51978__$2 = cljs.core.next(seq51978__$1);
var G__51981 = cljs.core.first(seq51978__$2);
var seq51978__$3 = cljs.core.next(seq51978__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51979,G__51980,G__51981,seq51978__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__52039 = arguments.length;
switch (G__52039) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52768 = arguments.length;
var i__5767__auto___52769 = (0);
while(true){
if((i__5767__auto___52769 < len__5766__auto___52768)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52769]));

var G__52770 = (i__5767__auto___52769 + (1));
i__5767__auto___52769 = G__52770;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_52771__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__52044 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__52044.cljs$core$IFn$_invoke$arity$1 ? fexpr__52044.cljs$core$IFn$_invoke$arity$1(k_52771__$1) : fexpr__52044.call(null,k_52771__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_52771__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__52045_52776 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__52046_52777 = null;
var count__52047_52778 = (0);
var i__52048_52779 = (0);
while(true){
if((i__52048_52779 < count__52047_52778)){
var k_52781__$1 = chunk__52046_52777.cljs$core$IIndexed$_nth$arity$2(null,i__52048_52779);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_52781__$1);


var G__52782 = seq__52045_52776;
var G__52783 = chunk__52046_52777;
var G__52784 = count__52047_52778;
var G__52785 = (i__52048_52779 + (1));
seq__52045_52776 = G__52782;
chunk__52046_52777 = G__52783;
count__52047_52778 = G__52784;
i__52048_52779 = G__52785;
continue;
} else {
var temp__5720__auto___52786 = cljs.core.seq(seq__52045_52776);
if(temp__5720__auto___52786){
var seq__52045_52787__$1 = temp__5720__auto___52786;
if(cljs.core.chunked_seq_QMARK_(seq__52045_52787__$1)){
var c__5565__auto___52788 = cljs.core.chunk_first(seq__52045_52787__$1);
var G__52790 = cljs.core.chunk_rest(seq__52045_52787__$1);
var G__52791 = c__5565__auto___52788;
var G__52792 = cljs.core.count(c__5565__auto___52788);
var G__52793 = (0);
seq__52045_52776 = G__52790;
chunk__52046_52777 = G__52791;
count__52047_52778 = G__52792;
i__52048_52779 = G__52793;
continue;
} else {
var k_52796__$1 = cljs.core.first(seq__52045_52787__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_52796__$1);


var G__52797 = cljs.core.next(seq__52045_52787__$1);
var G__52798 = null;
var G__52799 = (0);
var G__52800 = (0);
seq__52045_52776 = G__52797;
chunk__52046_52777 = G__52798;
count__52047_52778 = G__52799;
i__52048_52779 = G__52800;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq52036){
var G__52037 = cljs.core.first(seq52036);
var seq52036__$1 = cljs.core.next(seq52036);
var G__52038 = cljs.core.first(seq52036__$1);
var seq52036__$2 = cljs.core.next(seq52036__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52037,G__52038,seq52036__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__52051 = arguments.length;
switch (G__52051) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__52060 = arguments.length;
switch (G__52060) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52812 = arguments.length;
var i__5767__auto___52814 = (0);
while(true){
if((i__5767__auto___52814 < len__5766__auto___52812)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52814]));

var G__52816 = (i__5767__auto___52814 + (1));
i__5767__auto___52814 = G__52816;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5718__auto___52819 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___52819)){
var class_list_52820 = temp__5718__auto___52819;
var seq__52065_52821 = cljs.core.seq(classes__$1);
var chunk__52066_52822 = null;
var count__52067_52823 = (0);
var i__52068_52824 = (0);
while(true){
if((i__52068_52824 < count__52067_52823)){
var c_52825 = chunk__52066_52822.cljs$core$IIndexed$_nth$arity$2(null,i__52068_52824);
class_list_52820.add(c_52825);


var G__52826 = seq__52065_52821;
var G__52827 = chunk__52066_52822;
var G__52828 = count__52067_52823;
var G__52829 = (i__52068_52824 + (1));
seq__52065_52821 = G__52826;
chunk__52066_52822 = G__52827;
count__52067_52823 = G__52828;
i__52068_52824 = G__52829;
continue;
} else {
var temp__5720__auto___52831 = cljs.core.seq(seq__52065_52821);
if(temp__5720__auto___52831){
var seq__52065_52832__$1 = temp__5720__auto___52831;
if(cljs.core.chunked_seq_QMARK_(seq__52065_52832__$1)){
var c__5565__auto___52833 = cljs.core.chunk_first(seq__52065_52832__$1);
var G__52834 = cljs.core.chunk_rest(seq__52065_52832__$1);
var G__52835 = c__5565__auto___52833;
var G__52836 = cljs.core.count(c__5565__auto___52833);
var G__52837 = (0);
seq__52065_52821 = G__52834;
chunk__52066_52822 = G__52835;
count__52067_52823 = G__52836;
i__52068_52824 = G__52837;
continue;
} else {
var c_52838 = cljs.core.first(seq__52065_52832__$1);
class_list_52820.add(c_52838);


var G__52839 = cljs.core.next(seq__52065_52832__$1);
var G__52840 = null;
var G__52841 = (0);
var G__52842 = (0);
seq__52065_52821 = G__52839;
chunk__52066_52822 = G__52840;
count__52067_52823 = G__52841;
i__52068_52824 = G__52842;
continue;
}
} else {
}
}
break;
}
} else {
var seq__52069_52843 = cljs.core.seq(classes__$1);
var chunk__52070_52844 = null;
var count__52071_52845 = (0);
var i__52072_52846 = (0);
while(true){
if((i__52072_52846 < count__52071_52845)){
var c_52848 = chunk__52070_52844.cljs$core$IIndexed$_nth$arity$2(null,i__52072_52846);
var class_name_52849 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_52849,c_52848))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_52849 === ""))?c_52848:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_52849)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_52848)].join('')));
}


var G__52850 = seq__52069_52843;
var G__52851 = chunk__52070_52844;
var G__52852 = count__52071_52845;
var G__52853 = (i__52072_52846 + (1));
seq__52069_52843 = G__52850;
chunk__52070_52844 = G__52851;
count__52071_52845 = G__52852;
i__52072_52846 = G__52853;
continue;
} else {
var temp__5720__auto___52854 = cljs.core.seq(seq__52069_52843);
if(temp__5720__auto___52854){
var seq__52069_52855__$1 = temp__5720__auto___52854;
if(cljs.core.chunked_seq_QMARK_(seq__52069_52855__$1)){
var c__5565__auto___52856 = cljs.core.chunk_first(seq__52069_52855__$1);
var G__52858 = cljs.core.chunk_rest(seq__52069_52855__$1);
var G__52859 = c__5565__auto___52856;
var G__52860 = cljs.core.count(c__5565__auto___52856);
var G__52861 = (0);
seq__52069_52843 = G__52858;
chunk__52070_52844 = G__52859;
count__52071_52845 = G__52860;
i__52072_52846 = G__52861;
continue;
} else {
var c_52862 = cljs.core.first(seq__52069_52855__$1);
var class_name_52863 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_52863,c_52862))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_52863 === ""))?c_52862:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_52863)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_52862)].join('')));
}


var G__52867 = cljs.core.next(seq__52069_52855__$1);
var G__52868 = null;
var G__52869 = (0);
var G__52870 = (0);
seq__52069_52843 = G__52867;
chunk__52070_52844 = G__52868;
count__52071_52845 = G__52869;
i__52072_52846 = G__52870;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__52089_52872 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__52090_52873 = null;
var count__52091_52874 = (0);
var i__52092_52876 = (0);
while(true){
if((i__52092_52876 < count__52091_52874)){
var c_52877 = chunk__52090_52873.cljs$core$IIndexed$_nth$arity$2(null,i__52092_52876);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_52877);


var G__52878 = seq__52089_52872;
var G__52879 = chunk__52090_52873;
var G__52880 = count__52091_52874;
var G__52881 = (i__52092_52876 + (1));
seq__52089_52872 = G__52878;
chunk__52090_52873 = G__52879;
count__52091_52874 = G__52880;
i__52092_52876 = G__52881;
continue;
} else {
var temp__5720__auto___52882 = cljs.core.seq(seq__52089_52872);
if(temp__5720__auto___52882){
var seq__52089_52883__$1 = temp__5720__auto___52882;
if(cljs.core.chunked_seq_QMARK_(seq__52089_52883__$1)){
var c__5565__auto___52884 = cljs.core.chunk_first(seq__52089_52883__$1);
var G__52885 = cljs.core.chunk_rest(seq__52089_52883__$1);
var G__52886 = c__5565__auto___52884;
var G__52887 = cljs.core.count(c__5565__auto___52884);
var G__52889 = (0);
seq__52089_52872 = G__52885;
chunk__52090_52873 = G__52886;
count__52091_52874 = G__52887;
i__52092_52876 = G__52889;
continue;
} else {
var c_52890 = cljs.core.first(seq__52089_52883__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_52890);


var G__52892 = cljs.core.next(seq__52089_52883__$1);
var G__52893 = null;
var G__52894 = (0);
var G__52895 = (0);
seq__52089_52872 = G__52892;
chunk__52090_52873 = G__52893;
count__52091_52874 = G__52894;
i__52092_52876 = G__52895;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq52057){
var G__52058 = cljs.core.first(seq52057);
var seq52057__$1 = cljs.core.next(seq52057);
var G__52059 = cljs.core.first(seq52057__$1);
var seq52057__$2 = cljs.core.next(seq52057__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52058,G__52059,seq52057__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__52118 = arguments.length;
switch (G__52118) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52897 = arguments.length;
var i__5767__auto___52898 = (0);
while(true){
if((i__5767__auto___52898 < len__5766__auto___52897)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52898]));

var G__52902 = (i__5767__auto___52898 + (1));
i__5767__auto___52898 = G__52902;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5718__auto___52903 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___52903)){
var class_list_52904 = temp__5718__auto___52903;
class_list_52904.remove(c__$1);
} else {
var class_name_52905 = dommy.core.class$(elem);
var new_class_name_52906 = dommy.utils.remove_class_str(class_name_52905,c__$1);
if((class_name_52905 === new_class_name_52906)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_52906);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__52126 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__52127 = null;
var count__52128 = (0);
var i__52129 = (0);
while(true){
if((i__52129 < count__52128)){
var c = chunk__52127.cljs$core$IIndexed$_nth$arity$2(null,i__52129);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__52907 = seq__52126;
var G__52908 = chunk__52127;
var G__52909 = count__52128;
var G__52910 = (i__52129 + (1));
seq__52126 = G__52907;
chunk__52127 = G__52908;
count__52128 = G__52909;
i__52129 = G__52910;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52126);
if(temp__5720__auto__){
var seq__52126__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52126__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__52126__$1);
var G__52913 = cljs.core.chunk_rest(seq__52126__$1);
var G__52914 = c__5565__auto__;
var G__52915 = cljs.core.count(c__5565__auto__);
var G__52916 = (0);
seq__52126 = G__52913;
chunk__52127 = G__52914;
count__52128 = G__52915;
i__52129 = G__52916;
continue;
} else {
var c = cljs.core.first(seq__52126__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__52917 = cljs.core.next(seq__52126__$1);
var G__52918 = null;
var G__52919 = (0);
var G__52920 = (0);
seq__52126 = G__52917;
chunk__52127 = G__52918;
count__52128 = G__52919;
i__52129 = G__52920;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq52115){
var G__52116 = cljs.core.first(seq52115);
var seq52115__$1 = cljs.core.next(seq52115);
var G__52117 = cljs.core.first(seq52115__$1);
var seq52115__$2 = cljs.core.next(seq52115__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52116,G__52117,seq52115__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__52165 = arguments.length;
switch (G__52165) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5718__auto___52924 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___52924)){
var class_list_52925 = temp__5718__auto___52924;
class_list_52925.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__52195 = arguments.length;
switch (G__52195) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__52213 = arguments.length;
switch (G__52213) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__52241 = arguments.length;
switch (G__52241) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52953 = arguments.length;
var i__5767__auto___52954 = (0);
while(true){
if((i__5767__auto___52954 < len__5766__auto___52953)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52954]));

var G__52955 = (i__5767__auto___52954 + (1));
i__5767__auto___52954 = G__52955;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__52250 = parent;
G__52250.appendChild(child);

return G__52250;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__52255_52957 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__52256_52958 = null;
var count__52257_52959 = (0);
var i__52258_52960 = (0);
while(true){
if((i__52258_52960 < count__52257_52959)){
var c_52961 = chunk__52256_52958.cljs$core$IIndexed$_nth$arity$2(null,i__52258_52960);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_52961);


var G__52962 = seq__52255_52957;
var G__52963 = chunk__52256_52958;
var G__52964 = count__52257_52959;
var G__52965 = (i__52258_52960 + (1));
seq__52255_52957 = G__52962;
chunk__52256_52958 = G__52963;
count__52257_52959 = G__52964;
i__52258_52960 = G__52965;
continue;
} else {
var temp__5720__auto___52966 = cljs.core.seq(seq__52255_52957);
if(temp__5720__auto___52966){
var seq__52255_52967__$1 = temp__5720__auto___52966;
if(cljs.core.chunked_seq_QMARK_(seq__52255_52967__$1)){
var c__5565__auto___52969 = cljs.core.chunk_first(seq__52255_52967__$1);
var G__52970 = cljs.core.chunk_rest(seq__52255_52967__$1);
var G__52971 = c__5565__auto___52969;
var G__52972 = cljs.core.count(c__5565__auto___52969);
var G__52973 = (0);
seq__52255_52957 = G__52970;
chunk__52256_52958 = G__52971;
count__52257_52959 = G__52972;
i__52258_52960 = G__52973;
continue;
} else {
var c_52974 = cljs.core.first(seq__52255_52967__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_52974);


var G__52977 = cljs.core.next(seq__52255_52967__$1);
var G__52978 = null;
var G__52979 = (0);
var G__52980 = (0);
seq__52255_52957 = G__52977;
chunk__52256_52958 = G__52978;
count__52257_52959 = G__52979;
i__52258_52960 = G__52980;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq52238){
var G__52239 = cljs.core.first(seq52238);
var seq52238__$1 = cljs.core.next(seq52238);
var G__52240 = cljs.core.first(seq52238__$1);
var seq52238__$2 = cljs.core.next(seq52238__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52239,G__52240,seq52238__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__52266 = arguments.length;
switch (G__52266) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52982 = arguments.length;
var i__5767__auto___52983 = (0);
while(true){
if((i__5767__auto___52983 < len__5766__auto___52982)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52983]));

var G__52984 = (i__5767__auto___52983 + (1));
i__5767__auto___52983 = G__52984;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__52267 = parent;
G__52267.insertBefore(child,parent.firstChild);

return G__52267;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__52268_52986 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__52269_52987 = null;
var count__52270_52988 = (0);
var i__52271_52989 = (0);
while(true){
if((i__52271_52989 < count__52270_52988)){
var c_52990 = chunk__52269_52987.cljs$core$IIndexed$_nth$arity$2(null,i__52271_52989);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_52990);


var G__52991 = seq__52268_52986;
var G__52992 = chunk__52269_52987;
var G__52993 = count__52270_52988;
var G__52994 = (i__52271_52989 + (1));
seq__52268_52986 = G__52991;
chunk__52269_52987 = G__52992;
count__52270_52988 = G__52993;
i__52271_52989 = G__52994;
continue;
} else {
var temp__5720__auto___52995 = cljs.core.seq(seq__52268_52986);
if(temp__5720__auto___52995){
var seq__52268_52996__$1 = temp__5720__auto___52995;
if(cljs.core.chunked_seq_QMARK_(seq__52268_52996__$1)){
var c__5565__auto___52997 = cljs.core.chunk_first(seq__52268_52996__$1);
var G__52998 = cljs.core.chunk_rest(seq__52268_52996__$1);
var G__52999 = c__5565__auto___52997;
var G__53000 = cljs.core.count(c__5565__auto___52997);
var G__53001 = (0);
seq__52268_52986 = G__52998;
chunk__52269_52987 = G__52999;
count__52270_52988 = G__53000;
i__52271_52989 = G__53001;
continue;
} else {
var c_53003 = cljs.core.first(seq__52268_52996__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_53003);


var G__53005 = cljs.core.next(seq__52268_52996__$1);
var G__53006 = null;
var G__53007 = (0);
var G__53008 = (0);
seq__52268_52986 = G__53005;
chunk__52269_52987 = G__53006;
count__52270_52988 = G__53007;
i__52271_52989 = G__53008;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq52263){
var G__52264 = cljs.core.first(seq52263);
var seq52263__$1 = cljs.core.next(seq52263);
var G__52265 = cljs.core.first(seq52263__$1);
var seq52263__$2 = cljs.core.next(seq52263__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52264,G__52265,seq52263__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5718__auto___53011 = other.nextSibling;
if(cljs.core.truth_(temp__5718__auto___53011)){
var next_53012 = temp__5718__auto___53011;
dommy.core.insert_before_BANG_(elem,next_53012);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__52274 = arguments.length;
switch (G__52274) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__52275 = p;
G__52275.removeChild(elem);

return G__52275;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52276){
var vec__52277 = p__52276;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52277,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52277,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__5043__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = related_target;
if(cljs.core.truth_(and__5041__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__5041__auto__ = selected_target;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__5041__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__5043__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53033 = arguments.length;
var i__5767__auto___53034 = (0);
while(true){
if((i__5767__auto___53034 < len__5766__auto___53033)){
args__5772__auto__.push((arguments[i__5767__auto___53034]));

var G__53037 = (i__5767__auto___53034 + (1));
i__5767__auto___53034 = G__53037;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq52280){
var G__52281 = cljs.core.first(seq52280);
var seq52280__$1 = cljs.core.next(seq52280);
var G__52282 = cljs.core.first(seq52280__$1);
var seq52280__$2 = cljs.core.next(seq52280__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52281,G__52282,seq52280__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53039 = arguments.length;
var i__5767__auto___53040 = (0);
while(true){
if((i__5767__auto___53040 < len__5766__auto___53039)){
args__5772__auto__.push((arguments[i__5767__auto___53040]));

var G__53042 = (i__5767__auto___53040 + (1));
i__5767__auto___53040 = G__53042;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__52286_53052 = dommy.core.elem_and_selector(elem_sel);
var elem_53053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52286_53052,(0),null);
var selector_53054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52286_53052,(1),null);
var seq__52289_53058 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__52296_53059 = null;
var count__52297_53060 = (0);
var i__52298_53061 = (0);
while(true){
if((i__52298_53061 < count__52297_53060)){
var vec__52366_53067 = chunk__52296_53059.cljs$core$IIndexed$_nth$arity$2(null,i__52298_53061);
var orig_type_53068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52366_53067,(0),null);
var f_53069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52366_53067,(1),null);
var seq__52299_53074 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53068,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53068,cljs.core.identity])));
var chunk__52301_53075 = null;
var count__52302_53076 = (0);
var i__52303_53077 = (0);
while(true){
if((i__52303_53077 < count__52302_53076)){
var vec__52381_53085 = chunk__52301_53075.cljs$core$IIndexed$_nth$arity$2(null,i__52303_53077);
var actual_type_53086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52381_53085,(0),null);
var factory_53087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52381_53085,(1),null);
var canonical_f_53092 = (function (){var G__52385 = (factory_53087.cljs$core$IFn$_invoke$arity$1 ? factory_53087.cljs$core$IFn$_invoke$arity$1(f_53069) : factory_53087.call(null,f_53069));
var fexpr__52384 = (cljs.core.truth_(selector_53054)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53053,selector_53054):cljs.core.identity);
return (fexpr__52384.cljs$core$IFn$_invoke$arity$1 ? fexpr__52384.cljs$core$IFn$_invoke$arity$1(G__52385) : fexpr__52384.call(null,G__52385));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53053,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53054,actual_type_53086,f_53069], null),canonical_f_53092], 0));

if(cljs.core.truth_(elem_53053.addEventListener)){
elem_53053.addEventListener(cljs.core.name(actual_type_53086),canonical_f_53092);
} else {
elem_53053.attachEvent(cljs.core.name(actual_type_53086),canonical_f_53092);
}


var G__53103 = seq__52299_53074;
var G__53104 = chunk__52301_53075;
var G__53105 = count__52302_53076;
var G__53106 = (i__52303_53077 + (1));
seq__52299_53074 = G__53103;
chunk__52301_53075 = G__53104;
count__52302_53076 = G__53105;
i__52303_53077 = G__53106;
continue;
} else {
var temp__5720__auto___53111 = cljs.core.seq(seq__52299_53074);
if(temp__5720__auto___53111){
var seq__52299_53112__$1 = temp__5720__auto___53111;
if(cljs.core.chunked_seq_QMARK_(seq__52299_53112__$1)){
var c__5565__auto___53113 = cljs.core.chunk_first(seq__52299_53112__$1);
var G__53114 = cljs.core.chunk_rest(seq__52299_53112__$1);
var G__53115 = c__5565__auto___53113;
var G__53116 = cljs.core.count(c__5565__auto___53113);
var G__53117 = (0);
seq__52299_53074 = G__53114;
chunk__52301_53075 = G__53115;
count__52302_53076 = G__53116;
i__52303_53077 = G__53117;
continue;
} else {
var vec__52387_53118 = cljs.core.first(seq__52299_53112__$1);
var actual_type_53119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52387_53118,(0),null);
var factory_53120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52387_53118,(1),null);
var canonical_f_53121 = (function (){var G__52391 = (factory_53120.cljs$core$IFn$_invoke$arity$1 ? factory_53120.cljs$core$IFn$_invoke$arity$1(f_53069) : factory_53120.call(null,f_53069));
var fexpr__52390 = (cljs.core.truth_(selector_53054)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53053,selector_53054):cljs.core.identity);
return (fexpr__52390.cljs$core$IFn$_invoke$arity$1 ? fexpr__52390.cljs$core$IFn$_invoke$arity$1(G__52391) : fexpr__52390.call(null,G__52391));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53053,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53054,actual_type_53119,f_53069], null),canonical_f_53121], 0));

if(cljs.core.truth_(elem_53053.addEventListener)){
elem_53053.addEventListener(cljs.core.name(actual_type_53119),canonical_f_53121);
} else {
elem_53053.attachEvent(cljs.core.name(actual_type_53119),canonical_f_53121);
}


var G__53124 = cljs.core.next(seq__52299_53112__$1);
var G__53125 = null;
var G__53126 = (0);
var G__53127 = (0);
seq__52299_53074 = G__53124;
chunk__52301_53075 = G__53125;
count__52302_53076 = G__53126;
i__52303_53077 = G__53127;
continue;
}
} else {
}
}
break;
}

var G__53128 = seq__52289_53058;
var G__53129 = chunk__52296_53059;
var G__53130 = count__52297_53060;
var G__53131 = (i__52298_53061 + (1));
seq__52289_53058 = G__53128;
chunk__52296_53059 = G__53129;
count__52297_53060 = G__53130;
i__52298_53061 = G__53131;
continue;
} else {
var temp__5720__auto___53132 = cljs.core.seq(seq__52289_53058);
if(temp__5720__auto___53132){
var seq__52289_53134__$1 = temp__5720__auto___53132;
if(cljs.core.chunked_seq_QMARK_(seq__52289_53134__$1)){
var c__5565__auto___53135 = cljs.core.chunk_first(seq__52289_53134__$1);
var G__53136 = cljs.core.chunk_rest(seq__52289_53134__$1);
var G__53137 = c__5565__auto___53135;
var G__53138 = cljs.core.count(c__5565__auto___53135);
var G__53139 = (0);
seq__52289_53058 = G__53136;
chunk__52296_53059 = G__53137;
count__52297_53060 = G__53138;
i__52298_53061 = G__53139;
continue;
} else {
var vec__52392_53140 = cljs.core.first(seq__52289_53134__$1);
var orig_type_53141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52392_53140,(0),null);
var f_53142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52392_53140,(1),null);
var seq__52290_53143 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53141,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53141,cljs.core.identity])));
var chunk__52292_53144 = null;
var count__52293_53145 = (0);
var i__52294_53146 = (0);
while(true){
if((i__52294_53146 < count__52293_53145)){
var vec__52411_53148 = chunk__52292_53144.cljs$core$IIndexed$_nth$arity$2(null,i__52294_53146);
var actual_type_53149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52411_53148,(0),null);
var factory_53150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52411_53148,(1),null);
var canonical_f_53152 = (function (){var G__52415 = (factory_53150.cljs$core$IFn$_invoke$arity$1 ? factory_53150.cljs$core$IFn$_invoke$arity$1(f_53142) : factory_53150.call(null,f_53142));
var fexpr__52414 = (cljs.core.truth_(selector_53054)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53053,selector_53054):cljs.core.identity);
return (fexpr__52414.cljs$core$IFn$_invoke$arity$1 ? fexpr__52414.cljs$core$IFn$_invoke$arity$1(G__52415) : fexpr__52414.call(null,G__52415));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53053,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53054,actual_type_53149,f_53142], null),canonical_f_53152], 0));

if(cljs.core.truth_(elem_53053.addEventListener)){
elem_53053.addEventListener(cljs.core.name(actual_type_53149),canonical_f_53152);
} else {
elem_53053.attachEvent(cljs.core.name(actual_type_53149),canonical_f_53152);
}


var G__53157 = seq__52290_53143;
var G__53158 = chunk__52292_53144;
var G__53159 = count__52293_53145;
var G__53160 = (i__52294_53146 + (1));
seq__52290_53143 = G__53157;
chunk__52292_53144 = G__53158;
count__52293_53145 = G__53159;
i__52294_53146 = G__53160;
continue;
} else {
var temp__5720__auto___53161__$1 = cljs.core.seq(seq__52290_53143);
if(temp__5720__auto___53161__$1){
var seq__52290_53163__$1 = temp__5720__auto___53161__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52290_53163__$1)){
var c__5565__auto___53164 = cljs.core.chunk_first(seq__52290_53163__$1);
var G__53165 = cljs.core.chunk_rest(seq__52290_53163__$1);
var G__53166 = c__5565__auto___53164;
var G__53167 = cljs.core.count(c__5565__auto___53164);
var G__53168 = (0);
seq__52290_53143 = G__53165;
chunk__52292_53144 = G__53166;
count__52293_53145 = G__53167;
i__52294_53146 = G__53168;
continue;
} else {
var vec__52416_53169 = cljs.core.first(seq__52290_53163__$1);
var actual_type_53170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52416_53169,(0),null);
var factory_53171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52416_53169,(1),null);
var canonical_f_53172 = (function (){var G__52420 = (factory_53171.cljs$core$IFn$_invoke$arity$1 ? factory_53171.cljs$core$IFn$_invoke$arity$1(f_53142) : factory_53171.call(null,f_53142));
var fexpr__52419 = (cljs.core.truth_(selector_53054)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53053,selector_53054):cljs.core.identity);
return (fexpr__52419.cljs$core$IFn$_invoke$arity$1 ? fexpr__52419.cljs$core$IFn$_invoke$arity$1(G__52420) : fexpr__52419.call(null,G__52420));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53053,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53054,actual_type_53170,f_53142], null),canonical_f_53172], 0));

if(cljs.core.truth_(elem_53053.addEventListener)){
elem_53053.addEventListener(cljs.core.name(actual_type_53170),canonical_f_53172);
} else {
elem_53053.attachEvent(cljs.core.name(actual_type_53170),canonical_f_53172);
}


var G__53180 = cljs.core.next(seq__52290_53163__$1);
var G__53181 = null;
var G__53182 = (0);
var G__53183 = (0);
seq__52290_53143 = G__53180;
chunk__52292_53144 = G__53181;
count__52293_53145 = G__53182;
i__52294_53146 = G__53183;
continue;
}
} else {
}
}
break;
}

var G__53184 = cljs.core.next(seq__52289_53134__$1);
var G__53185 = null;
var G__53186 = (0);
var G__53187 = (0);
seq__52289_53058 = G__53184;
chunk__52296_53059 = G__53185;
count__52297_53060 = G__53186;
i__52298_53061 = G__53187;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq52283){
var G__52284 = cljs.core.first(seq52283);
var seq52283__$1 = cljs.core.next(seq52283);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52284,seq52283__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53188 = arguments.length;
var i__5767__auto___53189 = (0);
while(true){
if((i__5767__auto___53189 < len__5766__auto___53188)){
args__5772__auto__.push((arguments[i__5767__auto___53189]));

var G__53190 = (i__5767__auto___53189 + (1));
i__5767__auto___53189 = G__53190;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__52423_53194 = dommy.core.elem_and_selector(elem_sel);
var elem_53195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52423_53194,(0),null);
var selector_53196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52423_53194,(1),null);
var seq__52426_53199 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__52433_53200 = null;
var count__52434_53202 = (0);
var i__52435_53203 = (0);
while(true){
if((i__52435_53203 < count__52434_53202)){
var vec__52500_53204 = chunk__52433_53200.cljs$core$IIndexed$_nth$arity$2(null,i__52435_53203);
var orig_type_53205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52500_53204,(0),null);
var f_53206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52500_53204,(1),null);
var seq__52436_53207 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53205,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53205,cljs.core.identity])));
var chunk__52438_53208 = null;
var count__52439_53209 = (0);
var i__52440_53210 = (0);
while(true){
if((i__52440_53210 < count__52439_53209)){
var vec__52517_53211 = chunk__52438_53208.cljs$core$IIndexed$_nth$arity$2(null,i__52440_53210);
var actual_type_53212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52517_53211,(0),null);
var __53213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52517_53211,(1),null);
var keys_53214 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53196,actual_type_53212,f_53206], null);
var canonical_f_53215 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53195),keys_53214);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53195,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53214], 0));

if(cljs.core.truth_(elem_53195.removeEventListener)){
elem_53195.removeEventListener(cljs.core.name(actual_type_53212),canonical_f_53215);
} else {
elem_53195.detachEvent(cljs.core.name(actual_type_53212),canonical_f_53215);
}


var G__53216 = seq__52436_53207;
var G__53217 = chunk__52438_53208;
var G__53218 = count__52439_53209;
var G__53219 = (i__52440_53210 + (1));
seq__52436_53207 = G__53216;
chunk__52438_53208 = G__53217;
count__52439_53209 = G__53218;
i__52440_53210 = G__53219;
continue;
} else {
var temp__5720__auto___53220 = cljs.core.seq(seq__52436_53207);
if(temp__5720__auto___53220){
var seq__52436_53221__$1 = temp__5720__auto___53220;
if(cljs.core.chunked_seq_QMARK_(seq__52436_53221__$1)){
var c__5565__auto___53222 = cljs.core.chunk_first(seq__52436_53221__$1);
var G__53223 = cljs.core.chunk_rest(seq__52436_53221__$1);
var G__53224 = c__5565__auto___53222;
var G__53225 = cljs.core.count(c__5565__auto___53222);
var G__53226 = (0);
seq__52436_53207 = G__53223;
chunk__52438_53208 = G__53224;
count__52439_53209 = G__53225;
i__52440_53210 = G__53226;
continue;
} else {
var vec__52522_53227 = cljs.core.first(seq__52436_53221__$1);
var actual_type_53228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52522_53227,(0),null);
var __53229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52522_53227,(1),null);
var keys_53230 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53196,actual_type_53228,f_53206], null);
var canonical_f_53231 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53195),keys_53230);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53195,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53230], 0));

if(cljs.core.truth_(elem_53195.removeEventListener)){
elem_53195.removeEventListener(cljs.core.name(actual_type_53228),canonical_f_53231);
} else {
elem_53195.detachEvent(cljs.core.name(actual_type_53228),canonical_f_53231);
}


var G__53232 = cljs.core.next(seq__52436_53221__$1);
var G__53233 = null;
var G__53234 = (0);
var G__53235 = (0);
seq__52436_53207 = G__53232;
chunk__52438_53208 = G__53233;
count__52439_53209 = G__53234;
i__52440_53210 = G__53235;
continue;
}
} else {
}
}
break;
}

var G__53236 = seq__52426_53199;
var G__53237 = chunk__52433_53200;
var G__53238 = count__52434_53202;
var G__53239 = (i__52435_53203 + (1));
seq__52426_53199 = G__53236;
chunk__52433_53200 = G__53237;
count__52434_53202 = G__53238;
i__52435_53203 = G__53239;
continue;
} else {
var temp__5720__auto___53240 = cljs.core.seq(seq__52426_53199);
if(temp__5720__auto___53240){
var seq__52426_53241__$1 = temp__5720__auto___53240;
if(cljs.core.chunked_seq_QMARK_(seq__52426_53241__$1)){
var c__5565__auto___53242 = cljs.core.chunk_first(seq__52426_53241__$1);
var G__53243 = cljs.core.chunk_rest(seq__52426_53241__$1);
var G__53244 = c__5565__auto___53242;
var G__53245 = cljs.core.count(c__5565__auto___53242);
var G__53246 = (0);
seq__52426_53199 = G__53243;
chunk__52433_53200 = G__53244;
count__52434_53202 = G__53245;
i__52435_53203 = G__53246;
continue;
} else {
var vec__52525_53247 = cljs.core.first(seq__52426_53241__$1);
var orig_type_53248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52525_53247,(0),null);
var f_53249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52525_53247,(1),null);
var seq__52427_53250 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53248,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53248,cljs.core.identity])));
var chunk__52429_53251 = null;
var count__52430_53252 = (0);
var i__52431_53253 = (0);
while(true){
if((i__52431_53253 < count__52430_53252)){
var vec__52535_53258 = chunk__52429_53251.cljs$core$IIndexed$_nth$arity$2(null,i__52431_53253);
var actual_type_53259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52535_53258,(0),null);
var __53260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52535_53258,(1),null);
var keys_53261 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53196,actual_type_53259,f_53249], null);
var canonical_f_53262 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53195),keys_53261);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53195,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53261], 0));

if(cljs.core.truth_(elem_53195.removeEventListener)){
elem_53195.removeEventListener(cljs.core.name(actual_type_53259),canonical_f_53262);
} else {
elem_53195.detachEvent(cljs.core.name(actual_type_53259),canonical_f_53262);
}


var G__53264 = seq__52427_53250;
var G__53265 = chunk__52429_53251;
var G__53266 = count__52430_53252;
var G__53267 = (i__52431_53253 + (1));
seq__52427_53250 = G__53264;
chunk__52429_53251 = G__53265;
count__52430_53252 = G__53266;
i__52431_53253 = G__53267;
continue;
} else {
var temp__5720__auto___53268__$1 = cljs.core.seq(seq__52427_53250);
if(temp__5720__auto___53268__$1){
var seq__52427_53269__$1 = temp__5720__auto___53268__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52427_53269__$1)){
var c__5565__auto___53270 = cljs.core.chunk_first(seq__52427_53269__$1);
var G__53271 = cljs.core.chunk_rest(seq__52427_53269__$1);
var G__53272 = c__5565__auto___53270;
var G__53273 = cljs.core.count(c__5565__auto___53270);
var G__53274 = (0);
seq__52427_53250 = G__53271;
chunk__52429_53251 = G__53272;
count__52430_53252 = G__53273;
i__52431_53253 = G__53274;
continue;
} else {
var vec__52540_53275 = cljs.core.first(seq__52427_53269__$1);
var actual_type_53276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52540_53275,(0),null);
var __53277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52540_53275,(1),null);
var keys_53278 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53196,actual_type_53276,f_53249], null);
var canonical_f_53279 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53195),keys_53278);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53195,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53278], 0));

if(cljs.core.truth_(elem_53195.removeEventListener)){
elem_53195.removeEventListener(cljs.core.name(actual_type_53276),canonical_f_53279);
} else {
elem_53195.detachEvent(cljs.core.name(actual_type_53276),canonical_f_53279);
}


var G__53280 = cljs.core.next(seq__52427_53269__$1);
var G__53281 = null;
var G__53282 = (0);
var G__53283 = (0);
seq__52427_53250 = G__53280;
chunk__52429_53251 = G__53281;
count__52430_53252 = G__53282;
i__52431_53253 = G__53283;
continue;
}
} else {
}
}
break;
}

var G__53284 = cljs.core.next(seq__52426_53241__$1);
var G__53285 = null;
var G__53286 = (0);
var G__53287 = (0);
seq__52426_53199 = G__53284;
chunk__52433_53200 = G__53285;
count__52434_53202 = G__53286;
i__52435_53203 = G__53287;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq52421){
var G__52422 = cljs.core.first(seq52421);
var seq52421__$1 = cljs.core.next(seq52421);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52422,seq52421__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53288 = arguments.length;
var i__5767__auto___53289 = (0);
while(true){
if((i__5767__auto___53289 < len__5766__auto___53288)){
args__5772__auto__.push((arguments[i__5767__auto___53289]));

var G__53290 = (i__5767__auto___53289 + (1));
i__5767__auto___53289 = G__53290;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__52553_53291 = dommy.core.elem_and_selector(elem_sel);
var elem_53292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52553_53291,(0),null);
var selector_53293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52553_53291,(1),null);
var seq__52556_53295 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__52557_53296 = null;
var count__52558_53297 = (0);
var i__52559_53298 = (0);
while(true){
if((i__52559_53298 < count__52558_53297)){
var vec__52568_53299 = chunk__52557_53296.cljs$core$IIndexed$_nth$arity$2(null,i__52559_53298);
var type_53300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52568_53299,(0),null);
var f_53301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52568_53299,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53300,((function (seq__52556_53295,chunk__52557_53296,count__52558_53297,i__52559_53298,vec__52568_53299,type_53300,f_53301,vec__52553_53291,elem_53292,selector_53293){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53300,dommy$core$this_fn], 0));

return (f_53301.cljs$core$IFn$_invoke$arity$1 ? f_53301.cljs$core$IFn$_invoke$arity$1(e) : f_53301.call(null,e));
});})(seq__52556_53295,chunk__52557_53296,count__52558_53297,i__52559_53298,vec__52568_53299,type_53300,f_53301,vec__52553_53291,elem_53292,selector_53293))
], 0));


var G__53307 = seq__52556_53295;
var G__53308 = chunk__52557_53296;
var G__53309 = count__52558_53297;
var G__53310 = (i__52559_53298 + (1));
seq__52556_53295 = G__53307;
chunk__52557_53296 = G__53308;
count__52558_53297 = G__53309;
i__52559_53298 = G__53310;
continue;
} else {
var temp__5720__auto___53311 = cljs.core.seq(seq__52556_53295);
if(temp__5720__auto___53311){
var seq__52556_53314__$1 = temp__5720__auto___53311;
if(cljs.core.chunked_seq_QMARK_(seq__52556_53314__$1)){
var c__5565__auto___53315 = cljs.core.chunk_first(seq__52556_53314__$1);
var G__53316 = cljs.core.chunk_rest(seq__52556_53314__$1);
var G__53317 = c__5565__auto___53315;
var G__53318 = cljs.core.count(c__5565__auto___53315);
var G__53319 = (0);
seq__52556_53295 = G__53316;
chunk__52557_53296 = G__53317;
count__52558_53297 = G__53318;
i__52559_53298 = G__53319;
continue;
} else {
var vec__52573_53320 = cljs.core.first(seq__52556_53314__$1);
var type_53321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52573_53320,(0),null);
var f_53322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52573_53320,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53321,((function (seq__52556_53295,chunk__52557_53296,count__52558_53297,i__52559_53298,vec__52573_53320,type_53321,f_53322,seq__52556_53314__$1,temp__5720__auto___53311,vec__52553_53291,elem_53292,selector_53293){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53321,dommy$core$this_fn], 0));

return (f_53322.cljs$core$IFn$_invoke$arity$1 ? f_53322.cljs$core$IFn$_invoke$arity$1(e) : f_53322.call(null,e));
});})(seq__52556_53295,chunk__52557_53296,count__52558_53297,i__52559_53298,vec__52573_53320,type_53321,f_53322,seq__52556_53314__$1,temp__5720__auto___53311,vec__52553_53291,elem_53292,selector_53293))
], 0));


var G__53323 = cljs.core.next(seq__52556_53314__$1);
var G__53324 = null;
var G__53325 = (0);
var G__53326 = (0);
seq__52556_53295 = G__53323;
chunk__52557_53296 = G__53324;
count__52558_53297 = G__53325;
i__52559_53298 = G__53326;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq52549){
var G__52552 = cljs.core.first(seq52549);
var seq52549__$1 = cljs.core.next(seq52549);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52552,seq52549__$1);
}));


//# sourceMappingURL=dommy.core.js.map
