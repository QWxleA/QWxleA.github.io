goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_40813 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._header[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._header["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_40813(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_40815 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._has_body[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._has_body["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_40815(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_40816 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._body[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._body["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_40816(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40554 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40554["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40555 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40555["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40556 = temp__5718__auto____$2;
return (o40556["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40564 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40564["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40565 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40565["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40566 = temp__5718__auto____$2;
return (o40566["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40575 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40575["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40576 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40576["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40577 = temp__5718__auto____$2;
return (o40577["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40584 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40584["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40585 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40585["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40586 = temp__5718__auto____$2;
return (o40586["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40590 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40590["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40592 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40592["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40593 = temp__5718__auto____$2;
return (o40593["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40600 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40600["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40601 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40601["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40602 = temp__5718__auto____$2;
return (o40602["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40609 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40609["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40610 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40610["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40611 = temp__5718__auto____$2;
return (o40611["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40828 = arguments.length;
var i__5767__auto___40829 = (0);
while(true){
if((i__5767__auto___40829 < len__5766__auto___40828)){
args__5772__auto__.push((arguments[i__5767__auto___40829]));

var G__40830 = (i__5767__auto___40829 + (1));
i__5767__auto___40829 = G__40830;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq40625){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40625));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40831 = arguments.length;
var i__5767__auto___40832 = (0);
while(true){
if((i__5767__auto___40832 < len__5766__auto___40831)){
args__5772__auto__.push((arguments[i__5767__auto___40832]));

var G__40833 = (i__5767__auto___40832 + (1));
i__5767__auto___40832 = G__40833;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq40629){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40629));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40837 = arguments.length;
var i__5767__auto___40838 = (0);
while(true){
if((i__5767__auto___40838 < len__5766__auto___40837)){
args__5772__auto__.push((arguments[i__5767__auto___40838]));

var G__40839 = (i__5767__auto___40838 + (1));
i__5767__auto___40838 = G__40839;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq40637){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40637));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40843 = arguments.length;
var i__5767__auto___40844 = (0);
while(true){
if((i__5767__auto___40844 < len__5766__auto___40843)){
args__5772__auto__.push((arguments[i__5767__auto___40844]));

var G__40845 = (i__5767__auto___40844 + (1));
i__5767__auto___40844 = G__40845;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq40671){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40671));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40847 = arguments.length;
var i__5767__auto___40848 = (0);
while(true){
if((i__5767__auto___40848 < len__5766__auto___40847)){
args__5772__auto__.push((arguments[i__5767__auto___40848]));

var G__40850 = (i__5767__auto___40848 + (1));
i__5767__auto___40848 = G__40850;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq40684){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40684));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40851 = arguments.length;
var i__5767__auto___40852 = (0);
while(true){
if((i__5767__auto___40852 < len__5766__auto___40851)){
args__5772__auto__.push((arguments[i__5767__auto___40852]));

var G__40853 = (i__5767__auto___40852 + (1));
i__5767__auto___40852 = G__40853;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq40695){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40695));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40854 = arguments.length;
var i__5767__auto___40855 = (0);
while(true){
if((i__5767__auto___40855 < len__5766__auto___40854)){
args__5772__auto__.push((arguments[i__5767__auto___40855]));

var G__40856 = (i__5767__auto___40855 + (1));
i__5767__auto___40855 = G__40856;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq40701){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40701));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40860 = arguments.length;
var i__5767__auto___40861 = (0);
while(true){
if((i__5767__auto___40861 < len__5766__auto___40860)){
args__5772__auto__.push((arguments[i__5767__auto___40861]));

var G__40862 = (i__5767__auto___40861 + (1));
i__5767__auto___40861 = G__40862;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40723){
var vec__40724 = p__40723;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40724,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__40712_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__40712_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq40716){
var G__40717 = cljs.core.first(seq40716);
var seq40716__$1 = cljs.core.next(seq40716);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40717,seq40716__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__40733 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__40734 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__40735 = (function (){var G__40736 = new cljs.core.Keyword(null,"li","li",723558921);
var G__40737 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__40738 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__40736,G__40737,G__40738) : devtools.format.make_template_fn.call(null,G__40736,G__40737,G__40738));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__40733,G__40734,G__40735) : devtools.format.make_template_fn.call(null,G__40733,G__40734,G__40735));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40863 = arguments.length;
var i__5767__auto___40864 = (0);
while(true){
if((i__5767__auto___40864 < len__5766__auto___40863)){
args__5772__auto__.push((arguments[i__5767__auto___40864]));

var G__40865 = (i__5767__auto___40864 + (1));
i__5767__auto___40864 = G__40865;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq40741){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40741));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40866 = arguments.length;
var i__5767__auto___40867 = (0);
while(true){
if((i__5767__auto___40867 < len__5766__auto___40866)){
args__5772__auto__.push((arguments[i__5767__auto___40867]));

var G__40868 = (i__5767__auto___40867 + (1));
i__5767__auto___40867 = G__40868;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq40804){
var G__40805 = cljs.core.first(seq40804);
var seq40804__$1 = cljs.core.next(seq40804);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40805,seq40804__$1);
}));


//# sourceMappingURL=devtools.format.js.map
