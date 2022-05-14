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
var or__4253__auto__ = elem.textContent;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var G__66013 = arguments.length;
switch (G__66013) {
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
var G__66020 = arguments.length;
switch (G__66020) {
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
var G__66027 = arguments.length;
switch (G__66027) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__66025_SHARP_){
return (!((p1__66025_SHARP_ === base)));
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
var args__4870__auto__ = [];
var len__4864__auto___66856 = arguments.length;
var i__4865__auto___66857 = (0);
while(true){
if((i__4865__auto___66857 < len__4864__auto___66856)){
args__4870__auto__.push((arguments[i__4865__auto___66857]));

var G__66862 = (i__4865__auto___66857 + (1));
i__4865__auto___66857 = G__66862;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__66039_66863 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__66040_66864 = null;
var count__66041_66865 = (0);
var i__66042_66866 = (0);
while(true){
if((i__66042_66866 < count__66041_66865)){
var vec__66054_66867 = chunk__66040_66864.cljs$core$IIndexed$_nth$arity$2(null,i__66042_66866);
var k_66868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66054_66867,(0),null);
var v_66869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66054_66867,(1),null);
style.setProperty(dommy.utils.as_str(k_66868),v_66869);


var G__66870 = seq__66039_66863;
var G__66871 = chunk__66040_66864;
var G__66872 = count__66041_66865;
var G__66873 = (i__66042_66866 + (1));
seq__66039_66863 = G__66870;
chunk__66040_66864 = G__66871;
count__66041_66865 = G__66872;
i__66042_66866 = G__66873;
continue;
} else {
var temp__5720__auto___66874 = cljs.core.seq(seq__66039_66863);
if(temp__5720__auto___66874){
var seq__66039_66875__$1 = temp__5720__auto___66874;
if(cljs.core.chunked_seq_QMARK_(seq__66039_66875__$1)){
var c__4679__auto___66876 = cljs.core.chunk_first(seq__66039_66875__$1);
var G__66877 = cljs.core.chunk_rest(seq__66039_66875__$1);
var G__66878 = c__4679__auto___66876;
var G__66879 = cljs.core.count(c__4679__auto___66876);
var G__66880 = (0);
seq__66039_66863 = G__66877;
chunk__66040_66864 = G__66878;
count__66041_66865 = G__66879;
i__66042_66866 = G__66880;
continue;
} else {
var vec__66059_66881 = cljs.core.first(seq__66039_66875__$1);
var k_66882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66059_66881,(0),null);
var v_66883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66059_66881,(1),null);
style.setProperty(dommy.utils.as_str(k_66882),v_66883);


var G__66886 = cljs.core.next(seq__66039_66875__$1);
var G__66887 = null;
var G__66888 = (0);
var G__66889 = (0);
seq__66039_66863 = G__66886;
chunk__66040_66864 = G__66887;
count__66041_66865 = G__66888;
i__66042_66866 = G__66889;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq66036){
var G__66037 = cljs.core.first(seq66036);
var seq66036__$1 = cljs.core.next(seq66036);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66037,seq66036__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66892 = arguments.length;
var i__4865__auto___66893 = (0);
while(true){
if((i__4865__auto___66893 < len__4864__auto___66892)){
args__4870__auto__.push((arguments[i__4865__auto___66893]));

var G__66894 = (i__4865__auto___66893 + (1));
i__4865__auto___66893 = G__66894;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__66069_66896 = cljs.core.seq(keywords);
var chunk__66070_66897 = null;
var count__66071_66898 = (0);
var i__66072_66899 = (0);
while(true){
if((i__66072_66899 < count__66071_66898)){
var kw_66902 = chunk__66070_66897.cljs$core$IIndexed$_nth$arity$2(null,i__66072_66899);
style.removeProperty(dommy.utils.as_str(kw_66902));


var G__66903 = seq__66069_66896;
var G__66904 = chunk__66070_66897;
var G__66905 = count__66071_66898;
var G__66906 = (i__66072_66899 + (1));
seq__66069_66896 = G__66903;
chunk__66070_66897 = G__66904;
count__66071_66898 = G__66905;
i__66072_66899 = G__66906;
continue;
} else {
var temp__5720__auto___66907 = cljs.core.seq(seq__66069_66896);
if(temp__5720__auto___66907){
var seq__66069_66908__$1 = temp__5720__auto___66907;
if(cljs.core.chunked_seq_QMARK_(seq__66069_66908__$1)){
var c__4679__auto___66909 = cljs.core.chunk_first(seq__66069_66908__$1);
var G__66910 = cljs.core.chunk_rest(seq__66069_66908__$1);
var G__66911 = c__4679__auto___66909;
var G__66912 = cljs.core.count(c__4679__auto___66909);
var G__66913 = (0);
seq__66069_66896 = G__66910;
chunk__66070_66897 = G__66911;
count__66071_66898 = G__66912;
i__66072_66899 = G__66913;
continue;
} else {
var kw_66914 = cljs.core.first(seq__66069_66908__$1);
style.removeProperty(dommy.utils.as_str(kw_66914));


var G__66915 = cljs.core.next(seq__66069_66908__$1);
var G__66916 = null;
var G__66917 = (0);
var G__66918 = (0);
seq__66069_66896 = G__66915;
chunk__66070_66897 = G__66916;
count__66071_66898 = G__66917;
i__66072_66899 = G__66918;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq66064){
var G__66065 = cljs.core.first(seq66064);
var seq66064__$1 = cljs.core.next(seq66064);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66065,seq66064__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66919 = arguments.length;
var i__4865__auto___66920 = (0);
while(true){
if((i__4865__auto___66920 < len__4864__auto___66919)){
args__4870__auto__.push((arguments[i__4865__auto___66920]));

var G__66921 = (i__4865__auto___66920 + (1));
i__4865__auto___66920 = G__66921;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__66086_66926 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__66087_66927 = null;
var count__66088_66928 = (0);
var i__66089_66929 = (0);
while(true){
if((i__66089_66929 < count__66088_66928)){
var vec__66101_66930 = chunk__66087_66927.cljs$core$IIndexed$_nth$arity$2(null,i__66089_66929);
var k_66931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66101_66930,(0),null);
var v_66932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66101_66930,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_66931,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_66932),"px"].join('')], 0));


var G__66933 = seq__66086_66926;
var G__66934 = chunk__66087_66927;
var G__66935 = count__66088_66928;
var G__66936 = (i__66089_66929 + (1));
seq__66086_66926 = G__66933;
chunk__66087_66927 = G__66934;
count__66088_66928 = G__66935;
i__66089_66929 = G__66936;
continue;
} else {
var temp__5720__auto___66937 = cljs.core.seq(seq__66086_66926);
if(temp__5720__auto___66937){
var seq__66086_66938__$1 = temp__5720__auto___66937;
if(cljs.core.chunked_seq_QMARK_(seq__66086_66938__$1)){
var c__4679__auto___66939 = cljs.core.chunk_first(seq__66086_66938__$1);
var G__66940 = cljs.core.chunk_rest(seq__66086_66938__$1);
var G__66941 = c__4679__auto___66939;
var G__66942 = cljs.core.count(c__4679__auto___66939);
var G__66943 = (0);
seq__66086_66926 = G__66940;
chunk__66087_66927 = G__66941;
count__66088_66928 = G__66942;
i__66089_66929 = G__66943;
continue;
} else {
var vec__66110_66944 = cljs.core.first(seq__66086_66938__$1);
var k_66945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66110_66944,(0),null);
var v_66946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66110_66944,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_66945,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_66946),"px"].join('')], 0));


var G__66947 = cljs.core.next(seq__66086_66938__$1);
var G__66948 = null;
var G__66949 = (0);
var G__66950 = (0);
seq__66086_66926 = G__66947;
chunk__66087_66927 = G__66948;
count__66088_66928 = G__66949;
i__66089_66929 = G__66950;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq66082){
var G__66083 = cljs.core.first(seq66082);
var seq66082__$1 = cljs.core.next(seq66082);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66083,seq66082__$1);
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
var G__66122 = arguments.length;
switch (G__66122) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___66952 = arguments.length;
var i__4865__auto___66953 = (0);
while(true){
if((i__4865__auto___66953 < len__4864__auto___66952)){
args_arr__4885__auto__.push((arguments[i__4865__auto___66953]));

var G__66954 = (i__4865__auto___66953 + (1));
i__4865__auto___66953 = G__66954;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4886__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__66126 = elem;
(G__66126[k__$1] = v);

return G__66126;
} else {
var G__66127 = elem;
G__66127.setAttribute(k__$1,v);

return G__66127;
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

var seq__66129_66960 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__66130_66961 = null;
var count__66131_66962 = (0);
var i__66132_66963 = (0);
while(true){
if((i__66132_66963 < count__66131_66962)){
var vec__66140_66964 = chunk__66130_66961.cljs$core$IIndexed$_nth$arity$2(null,i__66132_66963);
var k_66965__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66140_66964,(0),null);
var v_66966__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66140_66964,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_66965__$1,v_66966__$1);


var G__66967 = seq__66129_66960;
var G__66968 = chunk__66130_66961;
var G__66969 = count__66131_66962;
var G__66970 = (i__66132_66963 + (1));
seq__66129_66960 = G__66967;
chunk__66130_66961 = G__66968;
count__66131_66962 = G__66969;
i__66132_66963 = G__66970;
continue;
} else {
var temp__5720__auto___66971 = cljs.core.seq(seq__66129_66960);
if(temp__5720__auto___66971){
var seq__66129_66972__$1 = temp__5720__auto___66971;
if(cljs.core.chunked_seq_QMARK_(seq__66129_66972__$1)){
var c__4679__auto___66973 = cljs.core.chunk_first(seq__66129_66972__$1);
var G__66974 = cljs.core.chunk_rest(seq__66129_66972__$1);
var G__66975 = c__4679__auto___66973;
var G__66976 = cljs.core.count(c__4679__auto___66973);
var G__66977 = (0);
seq__66129_66960 = G__66974;
chunk__66130_66961 = G__66975;
count__66131_66962 = G__66976;
i__66132_66963 = G__66977;
continue;
} else {
var vec__66145_66978 = cljs.core.first(seq__66129_66972__$1);
var k_66979__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66145_66978,(0),null);
var v_66980__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66145_66978,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_66979__$1,v_66980__$1);


var G__66982 = cljs.core.next(seq__66129_66972__$1);
var G__66983 = null;
var G__66984 = (0);
var G__66985 = (0);
seq__66129_66960 = G__66982;
chunk__66130_66961 = G__66983;
count__66131_66962 = G__66984;
i__66132_66963 = G__66985;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq66118){
var G__66119 = cljs.core.first(seq66118);
var seq66118__$1 = cljs.core.next(seq66118);
var G__66120 = cljs.core.first(seq66118__$1);
var seq66118__$2 = cljs.core.next(seq66118__$1);
var G__66121 = cljs.core.first(seq66118__$2);
var seq66118__$3 = cljs.core.next(seq66118__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66119,G__66120,G__66121,seq66118__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__66155 = arguments.length;
switch (G__66155) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___66993 = arguments.length;
var i__4865__auto___66995 = (0);
while(true){
if((i__4865__auto___66995 < len__4864__auto___66993)){
args_arr__4885__auto__.push((arguments[i__4865__auto___66995]));

var G__66996 = (i__4865__auto___66995 + (1));
i__4865__auto___66995 = G__66996;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_67000__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__66158 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__66158.cljs$core$IFn$_invoke$arity$1 ? fexpr__66158.cljs$core$IFn$_invoke$arity$1(k_67000__$1) : fexpr__66158.call(null,k_67000__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_67000__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__66159_67006 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__66160_67007 = null;
var count__66161_67008 = (0);
var i__66162_67009 = (0);
while(true){
if((i__66162_67009 < count__66161_67008)){
var k_67010__$1 = chunk__66160_67007.cljs$core$IIndexed$_nth$arity$2(null,i__66162_67009);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_67010__$1);


var G__67011 = seq__66159_67006;
var G__67012 = chunk__66160_67007;
var G__67013 = count__66161_67008;
var G__67014 = (i__66162_67009 + (1));
seq__66159_67006 = G__67011;
chunk__66160_67007 = G__67012;
count__66161_67008 = G__67013;
i__66162_67009 = G__67014;
continue;
} else {
var temp__5720__auto___67015 = cljs.core.seq(seq__66159_67006);
if(temp__5720__auto___67015){
var seq__66159_67017__$1 = temp__5720__auto___67015;
if(cljs.core.chunked_seq_QMARK_(seq__66159_67017__$1)){
var c__4679__auto___67018 = cljs.core.chunk_first(seq__66159_67017__$1);
var G__67019 = cljs.core.chunk_rest(seq__66159_67017__$1);
var G__67020 = c__4679__auto___67018;
var G__67021 = cljs.core.count(c__4679__auto___67018);
var G__67022 = (0);
seq__66159_67006 = G__67019;
chunk__66160_67007 = G__67020;
count__66161_67008 = G__67021;
i__66162_67009 = G__67022;
continue;
} else {
var k_67026__$1 = cljs.core.first(seq__66159_67017__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_67026__$1);


var G__67027 = cljs.core.next(seq__66159_67017__$1);
var G__67028 = null;
var G__67029 = (0);
var G__67030 = (0);
seq__66159_67006 = G__67027;
chunk__66160_67007 = G__67028;
count__66161_67008 = G__67029;
i__66162_67009 = G__67030;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq66152){
var G__66153 = cljs.core.first(seq66152);
var seq66152__$1 = cljs.core.next(seq66152);
var G__66154 = cljs.core.first(seq66152__$1);
var seq66152__$2 = cljs.core.next(seq66152__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66153,G__66154,seq66152__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__66167 = arguments.length;
switch (G__66167) {
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
var G__66180 = arguments.length;
switch (G__66180) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___67036 = arguments.length;
var i__4865__auto___67037 = (0);
while(true){
if((i__4865__auto___67037 < len__4864__auto___67036)){
args_arr__4885__auto__.push((arguments[i__4865__auto___67037]));

var G__67039 = (i__4865__auto___67037 + (1));
i__4865__auto___67037 = G__67039;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5718__auto___67040 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___67040)){
var class_list_67041 = temp__5718__auto___67040;
var seq__66186_67042 = cljs.core.seq(classes__$1);
var chunk__66187_67043 = null;
var count__66188_67044 = (0);
var i__66189_67045 = (0);
while(true){
if((i__66189_67045 < count__66188_67044)){
var c_67047 = chunk__66187_67043.cljs$core$IIndexed$_nth$arity$2(null,i__66189_67045);
class_list_67041.add(c_67047);


var G__67048 = seq__66186_67042;
var G__67049 = chunk__66187_67043;
var G__67050 = count__66188_67044;
var G__67051 = (i__66189_67045 + (1));
seq__66186_67042 = G__67048;
chunk__66187_67043 = G__67049;
count__66188_67044 = G__67050;
i__66189_67045 = G__67051;
continue;
} else {
var temp__5720__auto___67052 = cljs.core.seq(seq__66186_67042);
if(temp__5720__auto___67052){
var seq__66186_67053__$1 = temp__5720__auto___67052;
if(cljs.core.chunked_seq_QMARK_(seq__66186_67053__$1)){
var c__4679__auto___67054 = cljs.core.chunk_first(seq__66186_67053__$1);
var G__67055 = cljs.core.chunk_rest(seq__66186_67053__$1);
var G__67056 = c__4679__auto___67054;
var G__67057 = cljs.core.count(c__4679__auto___67054);
var G__67058 = (0);
seq__66186_67042 = G__67055;
chunk__66187_67043 = G__67056;
count__66188_67044 = G__67057;
i__66189_67045 = G__67058;
continue;
} else {
var c_67059 = cljs.core.first(seq__66186_67053__$1);
class_list_67041.add(c_67059);


var G__67060 = cljs.core.next(seq__66186_67053__$1);
var G__67061 = null;
var G__67062 = (0);
var G__67063 = (0);
seq__66186_67042 = G__67060;
chunk__66187_67043 = G__67061;
count__66188_67044 = G__67062;
i__66189_67045 = G__67063;
continue;
}
} else {
}
}
break;
}
} else {
var seq__66204_67064 = cljs.core.seq(classes__$1);
var chunk__66205_67065 = null;
var count__66206_67066 = (0);
var i__66207_67067 = (0);
while(true){
if((i__66207_67067 < count__66206_67066)){
var c_67068 = chunk__66205_67065.cljs$core$IIndexed$_nth$arity$2(null,i__66207_67067);
var class_name_67069 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_67069,c_67068))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_67069 === ""))?c_67068:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_67069)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_67068)].join('')));
}


var G__67073 = seq__66204_67064;
var G__67074 = chunk__66205_67065;
var G__67075 = count__66206_67066;
var G__67076 = (i__66207_67067 + (1));
seq__66204_67064 = G__67073;
chunk__66205_67065 = G__67074;
count__66206_67066 = G__67075;
i__66207_67067 = G__67076;
continue;
} else {
var temp__5720__auto___67077 = cljs.core.seq(seq__66204_67064);
if(temp__5720__auto___67077){
var seq__66204_67086__$1 = temp__5720__auto___67077;
if(cljs.core.chunked_seq_QMARK_(seq__66204_67086__$1)){
var c__4679__auto___67087 = cljs.core.chunk_first(seq__66204_67086__$1);
var G__67088 = cljs.core.chunk_rest(seq__66204_67086__$1);
var G__67089 = c__4679__auto___67087;
var G__67090 = cljs.core.count(c__4679__auto___67087);
var G__67091 = (0);
seq__66204_67064 = G__67088;
chunk__66205_67065 = G__67089;
count__66206_67066 = G__67090;
i__66207_67067 = G__67091;
continue;
} else {
var c_67092 = cljs.core.first(seq__66204_67086__$1);
var class_name_67093 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_67093,c_67092))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_67093 === ""))?c_67092:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_67093)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_67092)].join('')));
}


var G__67094 = cljs.core.next(seq__66204_67086__$1);
var G__67095 = null;
var G__67096 = (0);
var G__67097 = (0);
seq__66204_67064 = G__67094;
chunk__66205_67065 = G__67095;
count__66206_67066 = G__67096;
i__66207_67067 = G__67097;
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
var seq__66236_67099 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__66237_67100 = null;
var count__66238_67101 = (0);
var i__66239_67102 = (0);
while(true){
if((i__66239_67102 < count__66238_67101)){
var c_67103 = chunk__66237_67100.cljs$core$IIndexed$_nth$arity$2(null,i__66239_67102);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_67103);


var G__67104 = seq__66236_67099;
var G__67105 = chunk__66237_67100;
var G__67106 = count__66238_67101;
var G__67107 = (i__66239_67102 + (1));
seq__66236_67099 = G__67104;
chunk__66237_67100 = G__67105;
count__66238_67101 = G__67106;
i__66239_67102 = G__67107;
continue;
} else {
var temp__5720__auto___67108 = cljs.core.seq(seq__66236_67099);
if(temp__5720__auto___67108){
var seq__66236_67109__$1 = temp__5720__auto___67108;
if(cljs.core.chunked_seq_QMARK_(seq__66236_67109__$1)){
var c__4679__auto___67110 = cljs.core.chunk_first(seq__66236_67109__$1);
var G__67111 = cljs.core.chunk_rest(seq__66236_67109__$1);
var G__67112 = c__4679__auto___67110;
var G__67113 = cljs.core.count(c__4679__auto___67110);
var G__67114 = (0);
seq__66236_67099 = G__67111;
chunk__66237_67100 = G__67112;
count__66238_67101 = G__67113;
i__66239_67102 = G__67114;
continue;
} else {
var c_67115 = cljs.core.first(seq__66236_67109__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_67115);


var G__67116 = cljs.core.next(seq__66236_67109__$1);
var G__67117 = null;
var G__67118 = (0);
var G__67119 = (0);
seq__66236_67099 = G__67116;
chunk__66237_67100 = G__67117;
count__66238_67101 = G__67118;
i__66239_67102 = G__67119;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq66177){
var G__66178 = cljs.core.first(seq66177);
var seq66177__$1 = cljs.core.next(seq66177);
var G__66179 = cljs.core.first(seq66177__$1);
var seq66177__$2 = cljs.core.next(seq66177__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66178,G__66179,seq66177__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__66260 = arguments.length;
switch (G__66260) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___67121 = arguments.length;
var i__4865__auto___67122 = (0);
while(true){
if((i__4865__auto___67122 < len__4864__auto___67121)){
args_arr__4885__auto__.push((arguments[i__4865__auto___67122]));

var G__67123 = (i__4865__auto___67122 + (1));
i__4865__auto___67122 = G__67123;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5718__auto___67124 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___67124)){
var class_list_67125 = temp__5718__auto___67124;
class_list_67125.remove(c__$1);
} else {
var class_name_67127 = dommy.core.class$(elem);
var new_class_name_67128 = dommy.utils.remove_class_str(class_name_67127,c__$1);
if((class_name_67127 === new_class_name_67128)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_67128);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__66295 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__66296 = null;
var count__66297 = (0);
var i__66298 = (0);
while(true){
if((i__66298 < count__66297)){
var c = chunk__66296.cljs$core$IIndexed$_nth$arity$2(null,i__66298);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__67130 = seq__66295;
var G__67131 = chunk__66296;
var G__67132 = count__66297;
var G__67133 = (i__66298 + (1));
seq__66295 = G__67130;
chunk__66296 = G__67131;
count__66297 = G__67132;
i__66298 = G__67133;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__66295);
if(temp__5720__auto__){
var seq__66295__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66295__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__66295__$1);
var G__67134 = cljs.core.chunk_rest(seq__66295__$1);
var G__67135 = c__4679__auto__;
var G__67136 = cljs.core.count(c__4679__auto__);
var G__67137 = (0);
seq__66295 = G__67134;
chunk__66296 = G__67135;
count__66297 = G__67136;
i__66298 = G__67137;
continue;
} else {
var c = cljs.core.first(seq__66295__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__67138 = cljs.core.next(seq__66295__$1);
var G__67139 = null;
var G__67140 = (0);
var G__67141 = (0);
seq__66295 = G__67138;
chunk__66296 = G__67139;
count__66297 = G__67140;
i__66298 = G__67141;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq66255){
var G__66256 = cljs.core.first(seq66255);
var seq66255__$1 = cljs.core.next(seq66255);
var G__66257 = cljs.core.first(seq66255__$1);
var seq66255__$2 = cljs.core.next(seq66255__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66256,G__66257,seq66255__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__66352 = arguments.length;
switch (G__66352) {
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
var temp__5718__auto___67143 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___67143)){
var class_list_67144 = temp__5718__auto___67143;
class_list_67144.toggle(c__$1);
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
var G__66354 = arguments.length;
switch (G__66354) {
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
var G__66381 = arguments.length;
switch (G__66381) {
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
var G__66424 = arguments.length;
switch (G__66424) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___67148 = arguments.length;
var i__4865__auto___67149 = (0);
while(true){
if((i__4865__auto___67149 < len__4864__auto___67148)){
args_arr__4885__auto__.push((arguments[i__4865__auto___67149]));

var G__67150 = (i__4865__auto___67149 + (1));
i__4865__auto___67149 = G__67150;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__66429 = parent;
G__66429.appendChild(child);

return G__66429;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__66430_67151 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__66431_67152 = null;
var count__66432_67153 = (0);
var i__66433_67154 = (0);
while(true){
if((i__66433_67154 < count__66432_67153)){
var c_67155 = chunk__66431_67152.cljs$core$IIndexed$_nth$arity$2(null,i__66433_67154);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_67155);


var G__67156 = seq__66430_67151;
var G__67157 = chunk__66431_67152;
var G__67158 = count__66432_67153;
var G__67159 = (i__66433_67154 + (1));
seq__66430_67151 = G__67156;
chunk__66431_67152 = G__67157;
count__66432_67153 = G__67158;
i__66433_67154 = G__67159;
continue;
} else {
var temp__5720__auto___67160 = cljs.core.seq(seq__66430_67151);
if(temp__5720__auto___67160){
var seq__66430_67161__$1 = temp__5720__auto___67160;
if(cljs.core.chunked_seq_QMARK_(seq__66430_67161__$1)){
var c__4679__auto___67162 = cljs.core.chunk_first(seq__66430_67161__$1);
var G__67163 = cljs.core.chunk_rest(seq__66430_67161__$1);
var G__67164 = c__4679__auto___67162;
var G__67165 = cljs.core.count(c__4679__auto___67162);
var G__67166 = (0);
seq__66430_67151 = G__67163;
chunk__66431_67152 = G__67164;
count__66432_67153 = G__67165;
i__66433_67154 = G__67166;
continue;
} else {
var c_67167 = cljs.core.first(seq__66430_67161__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_67167);


var G__67168 = cljs.core.next(seq__66430_67161__$1);
var G__67169 = null;
var G__67170 = (0);
var G__67171 = (0);
seq__66430_67151 = G__67168;
chunk__66431_67152 = G__67169;
count__66432_67153 = G__67170;
i__66433_67154 = G__67171;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq66413){
var G__66414 = cljs.core.first(seq66413);
var seq66413__$1 = cljs.core.next(seq66413);
var G__66415 = cljs.core.first(seq66413__$1);
var seq66413__$2 = cljs.core.next(seq66413__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66414,G__66415,seq66413__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__66444 = arguments.length;
switch (G__66444) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___67174 = arguments.length;
var i__4865__auto___67175 = (0);
while(true){
if((i__4865__auto___67175 < len__4864__auto___67174)){
args_arr__4885__auto__.push((arguments[i__4865__auto___67175]));

var G__67176 = (i__4865__auto___67175 + (1));
i__4865__auto___67175 = G__67176;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__66450 = parent;
G__66450.insertBefore(child,parent.firstChild);

return G__66450;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__66451_67177 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__66452_67178 = null;
var count__66453_67179 = (0);
var i__66454_67180 = (0);
while(true){
if((i__66454_67180 < count__66453_67179)){
var c_67181 = chunk__66452_67178.cljs$core$IIndexed$_nth$arity$2(null,i__66454_67180);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_67181);


var G__67182 = seq__66451_67177;
var G__67183 = chunk__66452_67178;
var G__67184 = count__66453_67179;
var G__67185 = (i__66454_67180 + (1));
seq__66451_67177 = G__67182;
chunk__66452_67178 = G__67183;
count__66453_67179 = G__67184;
i__66454_67180 = G__67185;
continue;
} else {
var temp__5720__auto___67186 = cljs.core.seq(seq__66451_67177);
if(temp__5720__auto___67186){
var seq__66451_67188__$1 = temp__5720__auto___67186;
if(cljs.core.chunked_seq_QMARK_(seq__66451_67188__$1)){
var c__4679__auto___67189 = cljs.core.chunk_first(seq__66451_67188__$1);
var G__67190 = cljs.core.chunk_rest(seq__66451_67188__$1);
var G__67191 = c__4679__auto___67189;
var G__67192 = cljs.core.count(c__4679__auto___67189);
var G__67193 = (0);
seq__66451_67177 = G__67190;
chunk__66452_67178 = G__67191;
count__66453_67179 = G__67192;
i__66454_67180 = G__67193;
continue;
} else {
var c_67194 = cljs.core.first(seq__66451_67188__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_67194);


var G__67196 = cljs.core.next(seq__66451_67188__$1);
var G__67197 = null;
var G__67198 = (0);
var G__67199 = (0);
seq__66451_67177 = G__67196;
chunk__66452_67178 = G__67197;
count__66453_67179 = G__67198;
i__66454_67180 = G__67199;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq66438){
var G__66442 = cljs.core.first(seq66438);
var seq66438__$1 = cljs.core.next(seq66438);
var G__66443 = cljs.core.first(seq66438__$1);
var seq66438__$2 = cljs.core.next(seq66438__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66442,G__66443,seq66438__$2);
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
var temp__5718__auto___67204 = other.nextSibling;
if(cljs.core.truth_(temp__5718__auto___67204)){
var next_67205 = temp__5718__auto___67204;
dommy.core.insert_before_BANG_(elem,next_67205);
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
var G__66462 = arguments.length;
switch (G__66462) {
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
var G__66463 = p;
G__66463.removeChild(elem);

return G__66463;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66466){
var vec__66467 = p__66466;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66467,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66467,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4253__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = related_target;
if(cljs.core.truth_(and__4251__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4251__auto__;
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
if(cljs.core.truth_((function (){var and__4251__auto__ = selected_target;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4251__auto__;
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
var or__4253__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___67231 = arguments.length;
var i__4865__auto___67232 = (0);
while(true){
if((i__4865__auto___67232 < len__4864__auto___67231)){
args__4870__auto__.push((arguments[i__4865__auto___67232]));

var G__67233 = (i__4865__auto___67232 + (1));
i__4865__auto___67232 = G__67233;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq66477){
var G__66478 = cljs.core.first(seq66477);
var seq66477__$1 = cljs.core.next(seq66477);
var G__66479 = cljs.core.first(seq66477__$1);
var seq66477__$2 = cljs.core.next(seq66477__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66478,G__66479,seq66477__$2);
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
var args__4870__auto__ = [];
var len__4864__auto___67234 = arguments.length;
var i__4865__auto___67235 = (0);
while(true){
if((i__4865__auto___67235 < len__4864__auto___67234)){
args__4870__auto__.push((arguments[i__4865__auto___67235]));

var G__67236 = (i__4865__auto___67235 + (1));
i__4865__auto___67235 = G__67236;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__66531_67237 = dommy.core.elem_and_selector(elem_sel);
var elem_67238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66531_67237,(0),null);
var selector_67239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66531_67237,(1),null);
var seq__66536_67240 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__66543_67241 = null;
var count__66544_67242 = (0);
var i__66545_67243 = (0);
while(true){
if((i__66545_67243 < count__66544_67242)){
var vec__66627_67244 = chunk__66543_67241.cljs$core$IIndexed$_nth$arity$2(null,i__66545_67243);
var orig_type_67245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66627_67244,(0),null);
var f_67246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66627_67244,(1),null);
var seq__66546_67247 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_67245,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_67245,cljs.core.identity])));
var chunk__66548_67248 = null;
var count__66549_67249 = (0);
var i__66550_67250 = (0);
while(true){
if((i__66550_67250 < count__66549_67249)){
var vec__66649_67251 = chunk__66548_67248.cljs$core$IIndexed$_nth$arity$2(null,i__66550_67250);
var actual_type_67252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66649_67251,(0),null);
var factory_67253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66649_67251,(1),null);
var canonical_f_67254 = (function (){var G__66653 = (factory_67253.cljs$core$IFn$_invoke$arity$1 ? factory_67253.cljs$core$IFn$_invoke$arity$1(f_67246) : factory_67253.call(null,f_67246));
var fexpr__66652 = (cljs.core.truth_(selector_67239)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_67238,selector_67239):cljs.core.identity);
return (fexpr__66652.cljs$core$IFn$_invoke$arity$1 ? fexpr__66652.cljs$core$IFn$_invoke$arity$1(G__66653) : fexpr__66652.call(null,G__66653));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_67238,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_67239,actual_type_67252,f_67246], null),canonical_f_67254], 0));

if(cljs.core.truth_(elem_67238.addEventListener)){
elem_67238.addEventListener(cljs.core.name(actual_type_67252),canonical_f_67254);
} else {
elem_67238.attachEvent(cljs.core.name(actual_type_67252),canonical_f_67254);
}


var G__67255 = seq__66546_67247;
var G__67256 = chunk__66548_67248;
var G__67257 = count__66549_67249;
var G__67258 = (i__66550_67250 + (1));
seq__66546_67247 = G__67255;
chunk__66548_67248 = G__67256;
count__66549_67249 = G__67257;
i__66550_67250 = G__67258;
continue;
} else {
var temp__5720__auto___67259 = cljs.core.seq(seq__66546_67247);
if(temp__5720__auto___67259){
var seq__66546_67260__$1 = temp__5720__auto___67259;
if(cljs.core.chunked_seq_QMARK_(seq__66546_67260__$1)){
var c__4679__auto___67261 = cljs.core.chunk_first(seq__66546_67260__$1);
var G__67262 = cljs.core.chunk_rest(seq__66546_67260__$1);
var G__67263 = c__4679__auto___67261;
var G__67264 = cljs.core.count(c__4679__auto___67261);
var G__67265 = (0);
seq__66546_67247 = G__67262;
chunk__66548_67248 = G__67263;
count__66549_67249 = G__67264;
i__66550_67250 = G__67265;
continue;
} else {
var vec__66659_67266 = cljs.core.first(seq__66546_67260__$1);
var actual_type_67267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66659_67266,(0),null);
var factory_67268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66659_67266,(1),null);
var canonical_f_67269 = (function (){var G__66663 = (factory_67268.cljs$core$IFn$_invoke$arity$1 ? factory_67268.cljs$core$IFn$_invoke$arity$1(f_67246) : factory_67268.call(null,f_67246));
var fexpr__66662 = (cljs.core.truth_(selector_67239)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_67238,selector_67239):cljs.core.identity);
return (fexpr__66662.cljs$core$IFn$_invoke$arity$1 ? fexpr__66662.cljs$core$IFn$_invoke$arity$1(G__66663) : fexpr__66662.call(null,G__66663));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_67238,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_67239,actual_type_67267,f_67246], null),canonical_f_67269], 0));

if(cljs.core.truth_(elem_67238.addEventListener)){
elem_67238.addEventListener(cljs.core.name(actual_type_67267),canonical_f_67269);
} else {
elem_67238.attachEvent(cljs.core.name(actual_type_67267),canonical_f_67269);
}


var G__67270 = cljs.core.next(seq__66546_67260__$1);
var G__67271 = null;
var G__67272 = (0);
var G__67273 = (0);
seq__66546_67247 = G__67270;
chunk__66548_67248 = G__67271;
count__66549_67249 = G__67272;
i__66550_67250 = G__67273;
continue;
}
} else {
}
}
break;
}

var G__67274 = seq__66536_67240;
var G__67275 = chunk__66543_67241;
var G__67276 = count__66544_67242;
var G__67277 = (i__66545_67243 + (1));
seq__66536_67240 = G__67274;
chunk__66543_67241 = G__67275;
count__66544_67242 = G__67276;
i__66545_67243 = G__67277;
continue;
} else {
var temp__5720__auto___67278 = cljs.core.seq(seq__66536_67240);
if(temp__5720__auto___67278){
var seq__66536_67279__$1 = temp__5720__auto___67278;
if(cljs.core.chunked_seq_QMARK_(seq__66536_67279__$1)){
var c__4679__auto___67280 = cljs.core.chunk_first(seq__66536_67279__$1);
var G__67281 = cljs.core.chunk_rest(seq__66536_67279__$1);
var G__67282 = c__4679__auto___67280;
var G__67283 = cljs.core.count(c__4679__auto___67280);
var G__67284 = (0);
seq__66536_67240 = G__67281;
chunk__66543_67241 = G__67282;
count__66544_67242 = G__67283;
i__66545_67243 = G__67284;
continue;
} else {
var vec__66666_67285 = cljs.core.first(seq__66536_67279__$1);
var orig_type_67286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66666_67285,(0),null);
var f_67287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66666_67285,(1),null);
var seq__66537_67289 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_67286,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_67286,cljs.core.identity])));
var chunk__66539_67290 = null;
var count__66540_67291 = (0);
var i__66541_67292 = (0);
while(true){
if((i__66541_67292 < count__66540_67291)){
var vec__66683_67294 = chunk__66539_67290.cljs$core$IIndexed$_nth$arity$2(null,i__66541_67292);
var actual_type_67295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66683_67294,(0),null);
var factory_67296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66683_67294,(1),null);
var canonical_f_67297 = (function (){var G__66688 = (factory_67296.cljs$core$IFn$_invoke$arity$1 ? factory_67296.cljs$core$IFn$_invoke$arity$1(f_67287) : factory_67296.call(null,f_67287));
var fexpr__66687 = (cljs.core.truth_(selector_67239)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_67238,selector_67239):cljs.core.identity);
return (fexpr__66687.cljs$core$IFn$_invoke$arity$1 ? fexpr__66687.cljs$core$IFn$_invoke$arity$1(G__66688) : fexpr__66687.call(null,G__66688));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_67238,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_67239,actual_type_67295,f_67287], null),canonical_f_67297], 0));

if(cljs.core.truth_(elem_67238.addEventListener)){
elem_67238.addEventListener(cljs.core.name(actual_type_67295),canonical_f_67297);
} else {
elem_67238.attachEvent(cljs.core.name(actual_type_67295),canonical_f_67297);
}


var G__67298 = seq__66537_67289;
var G__67299 = chunk__66539_67290;
var G__67300 = count__66540_67291;
var G__67301 = (i__66541_67292 + (1));
seq__66537_67289 = G__67298;
chunk__66539_67290 = G__67299;
count__66540_67291 = G__67300;
i__66541_67292 = G__67301;
continue;
} else {
var temp__5720__auto___67302__$1 = cljs.core.seq(seq__66537_67289);
if(temp__5720__auto___67302__$1){
var seq__66537_67303__$1 = temp__5720__auto___67302__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66537_67303__$1)){
var c__4679__auto___67304 = cljs.core.chunk_first(seq__66537_67303__$1);
var G__67305 = cljs.core.chunk_rest(seq__66537_67303__$1);
var G__67306 = c__4679__auto___67304;
var G__67307 = cljs.core.count(c__4679__auto___67304);
var G__67308 = (0);
seq__66537_67289 = G__67305;
chunk__66539_67290 = G__67306;
count__66540_67291 = G__67307;
i__66541_67292 = G__67308;
continue;
} else {
var vec__66692_67309 = cljs.core.first(seq__66537_67303__$1);
var actual_type_67310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66692_67309,(0),null);
var factory_67311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66692_67309,(1),null);
var canonical_f_67312 = (function (){var G__66696 = (factory_67311.cljs$core$IFn$_invoke$arity$1 ? factory_67311.cljs$core$IFn$_invoke$arity$1(f_67287) : factory_67311.call(null,f_67287));
var fexpr__66695 = (cljs.core.truth_(selector_67239)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_67238,selector_67239):cljs.core.identity);
return (fexpr__66695.cljs$core$IFn$_invoke$arity$1 ? fexpr__66695.cljs$core$IFn$_invoke$arity$1(G__66696) : fexpr__66695.call(null,G__66696));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_67238,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_67239,actual_type_67310,f_67287], null),canonical_f_67312], 0));

if(cljs.core.truth_(elem_67238.addEventListener)){
elem_67238.addEventListener(cljs.core.name(actual_type_67310),canonical_f_67312);
} else {
elem_67238.attachEvent(cljs.core.name(actual_type_67310),canonical_f_67312);
}


var G__67313 = cljs.core.next(seq__66537_67303__$1);
var G__67314 = null;
var G__67315 = (0);
var G__67316 = (0);
seq__66537_67289 = G__67313;
chunk__66539_67290 = G__67314;
count__66540_67291 = G__67315;
i__66541_67292 = G__67316;
continue;
}
} else {
}
}
break;
}

var G__67317 = cljs.core.next(seq__66536_67279__$1);
var G__67318 = null;
var G__67319 = (0);
var G__67320 = (0);
seq__66536_67240 = G__67317;
chunk__66543_67241 = G__67318;
count__66544_67242 = G__67319;
i__66545_67243 = G__67320;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq66506){
var G__66507 = cljs.core.first(seq66506);
var seq66506__$1 = cljs.core.next(seq66506);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66507,seq66506__$1);
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
var args__4870__auto__ = [];
var len__4864__auto___67323 = arguments.length;
var i__4865__auto___67324 = (0);
while(true){
if((i__4865__auto___67324 < len__4864__auto___67323)){
args__4870__auto__.push((arguments[i__4865__auto___67324]));

var G__67326 = (i__4865__auto___67324 + (1));
i__4865__auto___67324 = G__67326;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__66703_67331 = dommy.core.elem_and_selector(elem_sel);
var elem_67332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66703_67331,(0),null);
var selector_67333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66703_67331,(1),null);
var seq__66706_67339 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__66713_67340 = null;
var count__66714_67341 = (0);
var i__66715_67342 = (0);
while(true){
if((i__66715_67342 < count__66714_67341)){
var vec__66767_67345 = chunk__66713_67340.cljs$core$IIndexed$_nth$arity$2(null,i__66715_67342);
var orig_type_67346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66767_67345,(0),null);
var f_67347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66767_67345,(1),null);
var seq__66716_67353 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_67346,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_67346,cljs.core.identity])));
var chunk__66718_67354 = null;
var count__66719_67355 = (0);
var i__66720_67356 = (0);
while(true){
if((i__66720_67356 < count__66719_67355)){
var vec__66779_67362 = chunk__66718_67354.cljs$core$IIndexed$_nth$arity$2(null,i__66720_67356);
var actual_type_67363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66779_67362,(0),null);
var __67364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66779_67362,(1),null);
var keys_67369 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_67333,actual_type_67363,f_67347], null);
var canonical_f_67370 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_67332),keys_67369);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_67332,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_67369], 0));

if(cljs.core.truth_(elem_67332.removeEventListener)){
elem_67332.removeEventListener(cljs.core.name(actual_type_67363),canonical_f_67370);
} else {
elem_67332.detachEvent(cljs.core.name(actual_type_67363),canonical_f_67370);
}


var G__67379 = seq__66716_67353;
var G__67380 = chunk__66718_67354;
var G__67381 = count__66719_67355;
var G__67382 = (i__66720_67356 + (1));
seq__66716_67353 = G__67379;
chunk__66718_67354 = G__67380;
count__66719_67355 = G__67381;
i__66720_67356 = G__67382;
continue;
} else {
var temp__5720__auto___67384 = cljs.core.seq(seq__66716_67353);
if(temp__5720__auto___67384){
var seq__66716_67387__$1 = temp__5720__auto___67384;
if(cljs.core.chunked_seq_QMARK_(seq__66716_67387__$1)){
var c__4679__auto___67391 = cljs.core.chunk_first(seq__66716_67387__$1);
var G__67395 = cljs.core.chunk_rest(seq__66716_67387__$1);
var G__67396 = c__4679__auto___67391;
var G__67397 = cljs.core.count(c__4679__auto___67391);
var G__67398 = (0);
seq__66716_67353 = G__67395;
chunk__66718_67354 = G__67396;
count__66719_67355 = G__67397;
i__66720_67356 = G__67398;
continue;
} else {
var vec__66785_67399 = cljs.core.first(seq__66716_67387__$1);
var actual_type_67400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66785_67399,(0),null);
var __67401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66785_67399,(1),null);
var keys_67406 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_67333,actual_type_67400,f_67347], null);
var canonical_f_67407 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_67332),keys_67406);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_67332,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_67406], 0));

if(cljs.core.truth_(elem_67332.removeEventListener)){
elem_67332.removeEventListener(cljs.core.name(actual_type_67400),canonical_f_67407);
} else {
elem_67332.detachEvent(cljs.core.name(actual_type_67400),canonical_f_67407);
}


var G__67408 = cljs.core.next(seq__66716_67387__$1);
var G__67409 = null;
var G__67410 = (0);
var G__67411 = (0);
seq__66716_67353 = G__67408;
chunk__66718_67354 = G__67409;
count__66719_67355 = G__67410;
i__66720_67356 = G__67411;
continue;
}
} else {
}
}
break;
}

var G__67412 = seq__66706_67339;
var G__67413 = chunk__66713_67340;
var G__67414 = count__66714_67341;
var G__67415 = (i__66715_67342 + (1));
seq__66706_67339 = G__67412;
chunk__66713_67340 = G__67413;
count__66714_67341 = G__67414;
i__66715_67342 = G__67415;
continue;
} else {
var temp__5720__auto___67416 = cljs.core.seq(seq__66706_67339);
if(temp__5720__auto___67416){
var seq__66706_67417__$1 = temp__5720__auto___67416;
if(cljs.core.chunked_seq_QMARK_(seq__66706_67417__$1)){
var c__4679__auto___67418 = cljs.core.chunk_first(seq__66706_67417__$1);
var G__67419 = cljs.core.chunk_rest(seq__66706_67417__$1);
var G__67420 = c__4679__auto___67418;
var G__67421 = cljs.core.count(c__4679__auto___67418);
var G__67422 = (0);
seq__66706_67339 = G__67419;
chunk__66713_67340 = G__67420;
count__66714_67341 = G__67421;
i__66715_67342 = G__67422;
continue;
} else {
var vec__66791_67423 = cljs.core.first(seq__66706_67417__$1);
var orig_type_67424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66791_67423,(0),null);
var f_67425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66791_67423,(1),null);
var seq__66707_67427 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_67424,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_67424,cljs.core.identity])));
var chunk__66709_67428 = null;
var count__66710_67429 = (0);
var i__66711_67430 = (0);
while(true){
if((i__66711_67430 < count__66710_67429)){
var vec__66808_67432 = chunk__66709_67428.cljs$core$IIndexed$_nth$arity$2(null,i__66711_67430);
var actual_type_67433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66808_67432,(0),null);
var __67434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66808_67432,(1),null);
var keys_67435 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_67333,actual_type_67433,f_67425], null);
var canonical_f_67436 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_67332),keys_67435);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_67332,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_67435], 0));

if(cljs.core.truth_(elem_67332.removeEventListener)){
elem_67332.removeEventListener(cljs.core.name(actual_type_67433),canonical_f_67436);
} else {
elem_67332.detachEvent(cljs.core.name(actual_type_67433),canonical_f_67436);
}


var G__67440 = seq__66707_67427;
var G__67441 = chunk__66709_67428;
var G__67442 = count__66710_67429;
var G__67443 = (i__66711_67430 + (1));
seq__66707_67427 = G__67440;
chunk__66709_67428 = G__67441;
count__66710_67429 = G__67442;
i__66711_67430 = G__67443;
continue;
} else {
var temp__5720__auto___67444__$1 = cljs.core.seq(seq__66707_67427);
if(temp__5720__auto___67444__$1){
var seq__66707_67445__$1 = temp__5720__auto___67444__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66707_67445__$1)){
var c__4679__auto___67446 = cljs.core.chunk_first(seq__66707_67445__$1);
var G__67447 = cljs.core.chunk_rest(seq__66707_67445__$1);
var G__67448 = c__4679__auto___67446;
var G__67449 = cljs.core.count(c__4679__auto___67446);
var G__67450 = (0);
seq__66707_67427 = G__67447;
chunk__66709_67428 = G__67448;
count__66710_67429 = G__67449;
i__66711_67430 = G__67450;
continue;
} else {
var vec__66811_67451 = cljs.core.first(seq__66707_67445__$1);
var actual_type_67452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66811_67451,(0),null);
var __67453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66811_67451,(1),null);
var keys_67454 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_67333,actual_type_67452,f_67425], null);
var canonical_f_67455 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_67332),keys_67454);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_67332,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_67454], 0));

if(cljs.core.truth_(elem_67332.removeEventListener)){
elem_67332.removeEventListener(cljs.core.name(actual_type_67452),canonical_f_67455);
} else {
elem_67332.detachEvent(cljs.core.name(actual_type_67452),canonical_f_67455);
}


var G__67458 = cljs.core.next(seq__66707_67445__$1);
var G__67459 = null;
var G__67460 = (0);
var G__67461 = (0);
seq__66707_67427 = G__67458;
chunk__66709_67428 = G__67459;
count__66710_67429 = G__67460;
i__66711_67430 = G__67461;
continue;
}
} else {
}
}
break;
}

var G__67462 = cljs.core.next(seq__66706_67417__$1);
var G__67463 = null;
var G__67464 = (0);
var G__67465 = (0);
seq__66706_67339 = G__67462;
chunk__66713_67340 = G__67463;
count__66714_67341 = G__67464;
i__66715_67342 = G__67465;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq66700){
var G__66701 = cljs.core.first(seq66700);
var seq66700__$1 = cljs.core.next(seq66700);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66701,seq66700__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___67467 = arguments.length;
var i__4865__auto___67468 = (0);
while(true){
if((i__4865__auto___67468 < len__4864__auto___67467)){
args__4870__auto__.push((arguments[i__4865__auto___67468]));

var G__67469 = (i__4865__auto___67468 + (1));
i__4865__auto___67468 = G__67469;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__66824_67471 = dommy.core.elem_and_selector(elem_sel);
var elem_67472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66824_67471,(0),null);
var selector_67473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66824_67471,(1),null);
var seq__66827_67475 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__66828_67476 = null;
var count__66829_67477 = (0);
var i__66830_67478 = (0);
while(true){
if((i__66830_67478 < count__66829_67477)){
var vec__66837_67479 = chunk__66828_67476.cljs$core$IIndexed$_nth$arity$2(null,i__66830_67478);
var type_67480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66837_67479,(0),null);
var f_67481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66837_67479,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_67480,((function (seq__66827_67475,chunk__66828_67476,count__66829_67477,i__66830_67478,vec__66837_67479,type_67480,f_67481,vec__66824_67471,elem_67472,selector_67473){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_67480,dommy$core$this_fn], 0));

return (f_67481.cljs$core$IFn$_invoke$arity$1 ? f_67481.cljs$core$IFn$_invoke$arity$1(e) : f_67481.call(null,e));
});})(seq__66827_67475,chunk__66828_67476,count__66829_67477,i__66830_67478,vec__66837_67479,type_67480,f_67481,vec__66824_67471,elem_67472,selector_67473))
], 0));


var G__67482 = seq__66827_67475;
var G__67483 = chunk__66828_67476;
var G__67484 = count__66829_67477;
var G__67485 = (i__66830_67478 + (1));
seq__66827_67475 = G__67482;
chunk__66828_67476 = G__67483;
count__66829_67477 = G__67484;
i__66830_67478 = G__67485;
continue;
} else {
var temp__5720__auto___67486 = cljs.core.seq(seq__66827_67475);
if(temp__5720__auto___67486){
var seq__66827_67487__$1 = temp__5720__auto___67486;
if(cljs.core.chunked_seq_QMARK_(seq__66827_67487__$1)){
var c__4679__auto___67488 = cljs.core.chunk_first(seq__66827_67487__$1);
var G__67489 = cljs.core.chunk_rest(seq__66827_67487__$1);
var G__67490 = c__4679__auto___67488;
var G__67491 = cljs.core.count(c__4679__auto___67488);
var G__67492 = (0);
seq__66827_67475 = G__67489;
chunk__66828_67476 = G__67490;
count__66829_67477 = G__67491;
i__66830_67478 = G__67492;
continue;
} else {
var vec__66840_67493 = cljs.core.first(seq__66827_67487__$1);
var type_67494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66840_67493,(0),null);
var f_67495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66840_67493,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_67494,((function (seq__66827_67475,chunk__66828_67476,count__66829_67477,i__66830_67478,vec__66840_67493,type_67494,f_67495,seq__66827_67487__$1,temp__5720__auto___67486,vec__66824_67471,elem_67472,selector_67473){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_67494,dommy$core$this_fn], 0));

return (f_67495.cljs$core$IFn$_invoke$arity$1 ? f_67495.cljs$core$IFn$_invoke$arity$1(e) : f_67495.call(null,e));
});})(seq__66827_67475,chunk__66828_67476,count__66829_67477,i__66830_67478,vec__66840_67493,type_67494,f_67495,seq__66827_67487__$1,temp__5720__auto___67486,vec__66824_67471,elem_67472,selector_67473))
], 0));


var G__67496 = cljs.core.next(seq__66827_67487__$1);
var G__67497 = null;
var G__67498 = (0);
var G__67499 = (0);
seq__66827_67475 = G__67496;
chunk__66828_67476 = G__67497;
count__66829_67477 = G__67498;
i__66830_67478 = G__67499;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq66821){
var G__66822 = cljs.core.first(seq66821);
var seq66821__$1 = cljs.core.next(seq66821);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66822,seq66821__$1);
}));


//# sourceMappingURL=dommy.core.js.map
