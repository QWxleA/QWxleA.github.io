goog.provide('cljs_time.local');
/**
 * Map of local formatters for parsing and printing.
 */
cljs_time.local._STAR_local_formatters_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58724){
var vec__58726 = p__58724;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58726,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58726,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f)),new cljs.core.Keyword("fmt","formatter","fmt/formatter",-483947944)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),(function (p1__58723_SHARP_){
return cljs_time.core.to_default_time_zone(p1__58723_SHARP_);
})):f)], null);
}),cljs_time.format.formatters));
/**
 * Returns a DateTime for the current instant in the default time zone.
 */
cljs_time.local.local_now = (function cljs_time$local$local_now(){
return cljs_time.core.time_now();
});

/**
 * @interface
 */
cljs_time.local.ILocalCoerce = function(){};

var cljs_time$local$ILocalCoerce$to_local_date_time$dyn_58744 = (function (obj){
var x__5390__auto__ = (((obj == null))?null:obj);
var m__5391__auto__ = (cljs_time.local.to_local_date_time[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5391__auto__.call(null,obj));
} else {
var m__5389__auto__ = (cljs_time.local.to_local_date_time["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5389__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ILocalCoerce.to-local-date-time",obj);
}
}
});
/**
 * convert `obj` to a local goog.date
 *                           DateTime instance retaining time fields.
 */
cljs_time.local.to_local_date_time = (function cljs_time$local$to_local_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 == null)))))){
return obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1(obj);
} else {
return cljs_time$local$ILocalCoerce$to_local_date_time$dyn_58744(obj);
}
});

/**
 * Coerce to date-time in the default time zone retaining time fields.
 */
cljs_time.local.as_local_date_time_from_time_zone = (function cljs_time$local$as_local_date_time_from_time_zone(obj){
return cljs_time.coerce.to_local_date_time(cljs_time.coerce.to_date_time(obj));
});
/**
 * Coerce to date-time in the default time zone.
 */
cljs_time.local.as_local_date_time_to_time_zone = (function cljs_time$local$as_local_date_time_to_time_zone(obj){
return cljs_time.core.to_default_time_zone(cljs_time.coerce.to_date_time(obj));
});
/**
 * Return local DateTime instance from string using
 *   formatters in *local-formatters*, returning first
 *   which parses.
 */
cljs_time.local.from_local_string = (function cljs_time$local$from_local_string(s){
return cljs.core.first((function (){var iter__5520__auto__ = (function cljs_time$local$from_local_string_$_iter__58736(s__58737){
return (new cljs.core.LazySeq(null,(function (){
var s__58737__$1 = s__58737;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58737__$1);
if(temp__5720__auto__){
var s__58737__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58737__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58737__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58739 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58738 = (0);
while(true){
if((i__58738 < size__5519__auto__)){
var f = cljs.core._nth(c__5518__auto__,i__58738);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e58740){if((e58740 instanceof Error)){
var _ = e58740;
return null;
} else {
throw e58740;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__58739,d);

var G__58746 = (i__58738 + (1));
i__58738 = G__58746;
continue;
} else {
var G__58747 = (i__58738 + (1));
i__58738 = G__58747;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58739),cljs_time$local$from_local_string_$_iter__58736(cljs.core.chunk_rest(s__58737__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58739),null);
}
} else {
var f = cljs.core.first(s__58737__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e58741){if((e58741 instanceof Error)){
var _ = e58741;
return null;
} else {
throw e58741;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$local$from_local_string_$_iter__58736(cljs.core.rest(s__58737__$2)));
} else {
var G__58748 = cljs.core.rest(s__58737__$2);
s__58737__$1 = G__58748;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.vals(cljs_time.local._STAR_local_formatters_STAR_));
})());
});
(cljs_time.local.ILocalCoerce["null"] = true);

(cljs_time.local.to_local_date_time["null"] = (function (_){
return null;
}));

(Date.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone(cljs_time.coerce.to_date_time(date__$1));
}));

(goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone(date_time__$1);
}));

(cljs_time.local.ILocalCoerce["number"] = true);

(cljs_time.local.to_local_date_time["number"] = (function (long$){
return cljs_time.local.as_local_date_time_from_time_zone(long$);
}));

(cljs_time.local.ILocalCoerce["string"] = true);

(cljs_time.local.to_local_date_time["string"] = (function (string){
return cljs_time.local.from_local_string(string);
}));
/**
 * Format obj as local time using the local formatter corresponding
 *   to format-key.
 */
cljs_time.local.format_local_time = (function cljs_time$local$format_local_time(obj,format_key){
var temp__5720__auto__ = cljs_time.local.to_local_date_time(obj);
if(cljs.core.truth_(temp__5720__auto__)){
var dt = temp__5720__auto__;
var temp__5720__auto____$1 = (format_key.cljs$core$IFn$_invoke$arity$1 ? format_key.cljs$core$IFn$_invoke$arity$1(cljs_time.local._STAR_local_formatters_STAR_) : format_key.call(null,cljs_time.local._STAR_local_formatters_STAR_));
if(cljs.core.truth_(temp__5720__auto____$1)){
var fmt = temp__5720__auto____$1;
return cljs_time.format.unparse(fmt,dt);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=cljs_time.local.js.map
