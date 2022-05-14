goog.provide('frontend.date');
goog.scope(function(){
  frontend.date.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$chrono_node$dist$index=shadow.js.require("module$node_modules$chrono_node$dist$index", {});
frontend.date.nld_parse = (function frontend$date$nld_parse(s){
if(typeof s === 'string'){
var fexpr__73111 = frontend.date.goog$module$goog$object.get(module$node_modules$chrono_node$dist$index,"parseDate");
return (fexpr__73111.cljs$core$IFn$_invoke$arity$1 ? fexpr__73111.cljs$core$IFn$_invoke$arity$1(s) : fexpr__73111.call(null,s));
} else {
return null;
}
});
frontend.date.format = (function frontend$date$format(date){
var temp__5720__auto__ = frontend.state.get_date_formatter();
if(cljs.core.truth_(temp__5720__auto__)){
var formatter_string = temp__5720__auto__;
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(formatter_string),date);
} else {
return null;
}
});
frontend.date.custom_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ");
frontend.date.journal_title_formatters = (function frontend$date$journal_title_formatters(){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 27, ["MM_dd_yyyy",null,"EEE, yyyy/MM/dd",null,"MM-dd-yyyy",null,"yyyy-MM-dd",null,"MM/dd/yyyy",null,"MMM do, yyyy",null,"EEEE, dd.MM.yyyy",null,"do MMM yyyy",null,"EEE, dd-MM-yyyy",null,"yyyyMMdd",null,"EEEE, dd-MM-yyyy",null,"dd-MM-yyyy",null,"dd.MM.yyyy",null,"EEE, MM/dd/yyyy",null,"do MMMM yyyy",null,"E, dd.MM.yyyy",null,"E, MM/dd/yyyy",null,"EEE, dd.MM.yyyy",null,"yyyy\u5E74MM\u6708dd\u65E5",null,"yyyy_MM_dd",null,"EEEE, MM/dd/yyyy",null,"yyyy-MM-dd EEEE",null,"EEEE, yyyy/MM/dd",null,"E, dd-MM-yyyy",null,"E, yyyy/MM/dd",null,"MMMM do, yyyy",null,"yyyy/MM/dd",null], null), null),frontend.state.get_date_formatter());
});
frontend.date.safe_journal_title_formatters = (function frontend$date$safe_journal_title_formatters(){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_date_formatter(),"yyyy-MM-dd","yyyy_MM_dd"], null)));
});
frontend.date.get_date_time_string = (function frontend$date$get_date_time_string(var_args){
var G__73117 = arguments.length;
switch (G__73117) {
case 0:
return frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
}));

(frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1 = (function (date_time){
return cljs_time.format.unparse(frontend.date.custom_formatter,date_time);
}));

(frontend.date.get_date_time_string.cljs$lang$maxFixedArity = 1);

frontend.date.get_locale_string = (function frontend$date$get_locale_string(s){
try{return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMM do, yyyy"),cljs_time.core.to_default_time_zone(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",1655953671)) : cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",1655953671))),s)));
}catch (e73128){if((e73128 instanceof Error)){
var _e = e73128;
return null;
} else {
throw e73128;

}
}});
frontend.date.custom_formatter_2 = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd-HH-mm-ss");
frontend.date.get_date_time_string_2 = (function frontend$date$get_date_time_string_2(){
return cljs_time.format.unparse(frontend.date.custom_formatter_2,cljs_time.local.local_now());
});
frontend.date.custom_formatter_3 = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd E HH:mm");
frontend.date.get_date_time_string_3 = (function frontend$date$get_date_time_string_3(){
return cljs_time.format.unparse(frontend.date.custom_formatter_3,cljs_time.local.local_now());
});
frontend.date.custom_formatter_4 = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd E HH:mm:ss");
frontend.date.get_date_time_string_4 = (function frontend$date$get_date_time_string_4(){
return cljs_time.format.unparse(frontend.date.custom_formatter_4,cljs_time.local.local_now());
});
frontend.date.get_weekday = (function frontend$date$get_weekday(date){
return date.toLocaleString("en-us",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weekday","weekday",-1413046442),"long"], null)));
});
frontend.date.get_date = (function frontend$date$get_date(var_args){
var G__73146 = arguments.length;
switch (G__73146) {
case 0:
return frontend.date.get_date.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.get_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.get_date.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.get_date.cljs$core$IFn$_invoke$arity$1((new Date()));
}));

(frontend.date.get_date.cljs$core$IFn$_invoke$arity$1 = (function (date){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"year","year",335913393),date.getFullYear(),new cljs.core.Keyword(null,"month","month",-1960248533),(date.getMonth() + (1)),new cljs.core.Keyword(null,"day","day",-274800446),date.getDate(),new cljs.core.Keyword(null,"weekday","weekday",-1413046442),frontend.date.get_weekday(date)], null);
}));

(frontend.date.get_date.cljs$lang$maxFixedArity = 1);

frontend.date.year_month_day_padded = (function frontend$date$year_month_day_padded(var_args){
var G__73156 = arguments.length;
switch (G__73156) {
case 0:
return frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$1(frontend.date.get_date.cljs$core$IFn$_invoke$arity$0());
}));

(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$1 = (function (date){
var map__73158 = date;
var map__73158__$1 = cljs.core.__destructure_map(map__73158);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73158__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73158__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73158__$1,new cljs.core.Keyword(null,"day","day",-274800446));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),frontend.util.zero_pad(month),new cljs.core.Keyword(null,"day","day",-274800446),frontend.util.zero_pad(day)], null);
}));

(frontend.date.year_month_day_padded.cljs$lang$maxFixedArity = 1);

frontend.date.journal_name = (function frontend$date$journal_name(var_args){
var G__73164 = arguments.length;
switch (G__73164) {
case 0:
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.local.local_now());
}));

(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1 = (function (date){
return frontend.date.format(date);
}));

(frontend.date.journal_name.cljs$lang$maxFixedArity = 1);

frontend.date.journal_name_s = (function frontend$date$journal_name_s(s){
try{return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),s));
}catch (e73166){if((e73166 instanceof Error)){
var _e = e73166;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.date",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parse-journal-date","parse-journal-date",-1090640805),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Unable to parse date to journal name, skipping.",new cljs.core.Keyword(null,"date-str","date-str",1641747607),s], null),new cljs.core.Keyword(null,"line","line",212345235),124], null)),null);

return null;
} else {
throw e73166;

}
}});
frontend.date.today = (function frontend$date$today(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();
});
frontend.date.tomorrow = (function frontend$date$tomorrow(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
});
frontend.date.yesterday = (function frontend$date$yesterday(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
});
frontend.date.ymd = (function frontend$date$ymd(var_args){
var G__73178 = arguments.length;
switch (G__73178) {
case 0:
return frontend.date.ymd.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.ymd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.date.ymd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.ymd.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.ymd.cljs$core$IFn$_invoke$arity$1((new Date()));
}));

(frontend.date.ymd.cljs$core$IFn$_invoke$arity$1 = (function (date){
return frontend.date.ymd.cljs$core$IFn$_invoke$arity$2(date,"/");
}));

(frontend.date.ymd.cljs$core$IFn$_invoke$arity$2 = (function (date,sep){
var map__73196 = frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$1(frontend.date.get_date.cljs$core$IFn$_invoke$arity$1(date));
var map__73196__$1 = cljs.core.__destructure_map(map__73196);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73196__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73196__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73196__$1,new cljs.core.Keyword(null,"day","day",-274800446));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('');
}));

(frontend.date.ymd.cljs$lang$maxFixedArity = 2);

frontend.date.get_local_date = (function frontend$date$get_local_date(){
var date = (new Date());
var year = date.getFullYear();
var month = (date.getMonth() + (1));
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"day","day",-274800446),day,new cljs.core.Keyword(null,"hour","hour",-555989214),hour,new cljs.core.Keyword(null,"minute","minute",-642875969),minute], null);
});
frontend.date.get_current_time = (function frontend$date$get_current_time(){
var d = (new Date());
return d.toLocaleTimeString(frontend.date.goog$module$goog$object.get(window.navigator,"language"),cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hour","hour",-555989214),"2-digit",new cljs.core.Keyword(null,"minute","minute",-642875969),"2-digit",new cljs.core.Keyword(null,"hourCycle","hourCycle",-1723448226),"h23"], null)));
});
frontend.date.valid_QMARK_ = (function frontend$date$valid_QMARK_(s){
return cljs.core.some((function (formatter){
try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(formatter),s);
}catch (e73207){if((e73207 instanceof Error)){
var _e = e73207;
return false;
} else {
throw e73207;

}
}}),frontend.date.journal_title_formatters());
});
frontend.date.valid_journal_title_QMARK_ = (function frontend$date$valid_journal_title_QMARK_(title){
var and__4251__auto__ = title;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.date.valid_QMARK_(frontend.util.capitalize_all(title));
} else {
return and__4251__auto__;
}
});
frontend.date.journal_title__GT_ = (function frontend$date$journal_title__GT_(var_args){
var G__73223 = arguments.length;
switch (G__73223) {
case 2:
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2 = (function (journal_title,then_fn){
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3(journal_title,then_fn,frontend.date.safe_journal_title_formatters());
}));

(frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3 = (function (journal_title,then_fn,formatters){
if(clojure.string.blank_QMARK_(journal_title)){
return null;
} else {
var temp__5720__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (formatter){
try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(formatter),frontend.util.capitalize_all(journal_title));
}catch (e73231){if((e73231 instanceof Error)){
var _e = e73231;
return null;
} else {
throw e73231;

}
}}),formatters)));
if(cljs.core.truth_(temp__5720__auto__)){
var time = temp__5720__auto__;
return (then_fn.cljs$core$IFn$_invoke$arity$1 ? then_fn.cljs$core$IFn$_invoke$arity$1(time) : then_fn.call(null,time));
} else {
return null;
}
}
}));

(frontend.date.journal_title__GT_.cljs$lang$maxFixedArity = 3);

frontend.date.journal_title__GT_int = (function frontend$date$journal_title__GT_int(journal_title){
if(cljs.core.truth_(journal_title)){
var journal_title__$1 = frontend.util.capitalize_all(journal_title);
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2(journal_title__$1,(function (p1__73234_SHARP_){
return frontend.util.parse_int(cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),p1__73234_SHARP_));
}));
} else {
return null;
}
});
frontend.date.int__GT_journal_title = (function frontend$date$int__GT_journal_title(day){
if(cljs.core.truth_(day)){
return frontend.date.format(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)));
} else {
return null;
}
});
frontend.date.journal_day__GT_ts = (function frontend$date$journal_day__GT_ts(day){
if(cljs.core.truth_(day)){
return cljs_time.coerce.to_long(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)));
} else {
return null;
}
});
frontend.date.journal_title__GT_long = (function frontend$date$journal_title__GT_long(journal_title){
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2(journal_title,(function (p1__73238_SHARP_){
return cljs_time.coerce.to_long(p1__73238_SHARP_);
}));
});
frontend.date.default_journal_title_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy_MM_dd");
frontend.date.journal_title__GT_default = (function frontend$date$journal_title__GT_default(journal_title){
var formatter = (function (){var temp__5718__auto__ = frontend.state.get_journal_file_name_format();
if(cljs.core.truth_(temp__5718__auto__)){
var format = temp__5718__auto__;
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format);
} else {
return frontend.date.default_journal_title_formatter;
}
})();
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2(journal_title,(function (p1__73239_SHARP_){
return cljs_time.format.unparse(formatter,p1__73239_SHARP_);
}));
});
frontend.date.date__GT_file_name = (function frontend$date$date__GT_file_name(date){
var formatter = (function (){var temp__5718__auto__ = frontend.state.get_journal_file_name_format();
if(cljs.core.truth_(temp__5718__auto__)){
var format = temp__5718__auto__;
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format);
} else {
return frontend.date.default_journal_title_formatter;
}
})();
return cljs_time.format.unparse(formatter,date);
});
frontend.date.journal_title__GT_custom_format = (function frontend$date$journal_title__GT_custom_format(journal_title){
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2(journal_title,frontend.date.format);
});
frontend.date.int__GT_local_time_2 = (function frontend$date$int__GT_local_time_2(n){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm"),cljs_time.core.to_default_time_zone(cljs_time.coerce.from_long(n)));
});

//# sourceMappingURL=frontend.date.js.map
