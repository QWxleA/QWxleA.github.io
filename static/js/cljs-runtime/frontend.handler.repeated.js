goog.provide('frontend.handler.repeated');
frontend.handler.repeated.custom_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd EEE");
frontend.handler.repeated.repeated_QMARK_ = (function frontend$handler$repeated$repeated_QMARK_(timestamp){
return (!((new cljs.core.Keyword(null,"repetition","repetition",1938392115).cljs$core$IFn$_invoke$arity$1(timestamp) == null)));
});
frontend.handler.repeated.get_duration_f_and_text = (function frontend$handler$repeated$get_duration_f_and_text(duration){
var G__64591 = duration;
switch (G__64591) {
case "Hour":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.hours,"h"], null);

break;
case "Day":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.days,"d"], null);

break;
case "Week":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.weeks,"w"], null);

break;
case "Month":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.months,"m"], null);

break;
case "Year":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.years,"y"], null);

break;
default:
return null;

}
});
frontend.handler.repeated.get_repeater_symbol = (function frontend$handler$repeated$get_repeater_symbol(kind){
var G__64599 = kind;
switch (G__64599) {
case "Plus":
return "+";

break;
case "Dotted":
return ".+";

break;
default:
return "++";

}
});
frontend.handler.repeated.timestamp__GT_text = (function frontend$handler$repeated$timestamp__GT_text(var_args){
var G__64612 = arguments.length;
switch (G__64612) {
case 1:
return frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$1 = (function (timestamp){
return frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$2(timestamp,null);
}));

(frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$2 = (function (p__64615,start_time){
var map__64616 = p__64615;
var map__64616__$1 = cljs.core.__destructure_map(map__64616);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64616__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64616__$1,new cljs.core.Keyword(null,"repetition","repetition",1938392115));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64616__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var map__64619 = date;
var map__64619__$1 = cljs.core.__destructure_map(map__64619);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64619__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64619__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64619__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var map__64620 = time;
var map__64620__$1 = cljs.core.__destructure_map(map__64620);
var hour = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64620__$1,new cljs.core.Keyword(null,"hour","hour",-555989214),(0));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64620__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var vec__64621 = (cljs.core.truth_(start_time)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.hour(start_time),cljs_time.core.minute(start_time)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hour,min], null));
var hour__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64621,(0),null);
var min__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64621,(1),null);
var vec__64624 = repetition;
var vec__64627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64624,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64627,(0),null);
var vec__64630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64624,(1),null);
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64630,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64624,(2),null);
var start_time__$1 = (function (){var or__4253__auto__ = start_time;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5(year,month,day,hour__$1,min__$1);
}
})();
var vec__64633 = frontend.handler.repeated.get_duration_f_and_text(duration);
var _duration_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64633,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64633,(1),null);
var kind__$1 = frontend.handler.repeated.get_repeater_symbol(kind);
var repeater = (cljs.core.truth_((function (){var and__4251__auto__ = kind__$1;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = num;
if(cljs.core.truth_(and__4251__auto____$1)){
return d;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join(''):null);
var time_repeater = (cljs.core.truth_(time)?[frontend.util.zero_pad(hour__$1),":",frontend.util.zero_pad(min__$1),((clojure.string.blank_QMARK_(repeater))?"":[" ",repeater].join(''))].join(''):repeater);
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.format.unparse(frontend.handler.repeated.custom_formatter,start_time__$1),((clojure.string.blank_QMARK_(time_repeater))?"":[" ",time_repeater].join(''))], 0));
}));

(frontend.handler.repeated.timestamp__GT_text.cljs$lang$maxFixedArity = 2);

frontend.handler.repeated.repeat_until_future_timestamp = (function frontend$handler$repeated$repeat_until_future_timestamp(datetime,now,delta,keep_week_QMARK_){
var datetime__$1 = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(datetime,delta);
var result = (function (){var result = datetime__$1;
while(true){
if(cljs.core.truth_(cljs_time.core.after_QMARK_(result,now))){
return result;
} else {
var G__64727 = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(result,delta);
result = G__64727;
continue;
}
break;
}
})();
var w1 = cljs_time.core.day_of_week(datetime__$1);
var w2 = cljs_time.core.day_of_week(result);
if(cljs.core.truth_((function (){var and__4251__auto__ = keep_week_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(w1,w2);
} else {
return and__4251__auto__;
}
})())){
if((w2 > w1)){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(result,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(((7) - (w2 - w1))));
} else {
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(result,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((w1 - w2)));
}
} else {
return result;
}
});
frontend.handler.repeated.next_timestamp_text = (function frontend$handler$repeated$next_timestamp_text(p__64677){
var map__64678 = p__64677;
var map__64678__$1 = cljs.core.__destructure_map(map__64678);
var timestamp = map__64678__$1;
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64678__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64678__$1,new cljs.core.Keyword(null,"repetition","repetition",1938392115));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64678__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var map__64685 = date;
var map__64685__$1 = cljs.core.__destructure_map(map__64685);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64685__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64685__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64685__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var map__64686 = time;
var map__64686__$1 = cljs.core.__destructure_map(map__64686);
var hour = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64686__$1,new cljs.core.Keyword(null,"hour","hour",-555989214),(0));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64686__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var vec__64687 = repetition;
var vec__64690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64687,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64690,(0),null);
var vec__64693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64687,(1),null);
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64693,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64687,(2),null);
var week_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(duration,"Week")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(duration,"w")));
var vec__64696 = frontend.handler.repeated.get_duration_f_and_text(duration);
var duration_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64696,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64696,(1),null);
var delta = (duration_f.cljs$core$IFn$_invoke$arity$1 ? duration_f.cljs$core$IFn$_invoke$arity$1(num) : duration_f.call(null,num));
var start_time = cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5(year,month,day,hour,min);
var now = cljs_time.local.local_now();
var start_time_SINGLEQUOTE_ = (function (){var G__64699 = kind;
switch (G__64699) {
case "Dotted":
return frontend.handler.repeated.repeat_until_future_timestamp(start_time,now,delta,week_QMARK_);

break;
case "DoublePlus":
if(cljs.core.truth_(cljs_time.core.after_QMARK_(start_time,now))){
return start_time;
} else {
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start_time,delta);
}

break;
default:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start_time,delta);

}
})();
return frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$2(timestamp,start_time_SINGLEQUOTE_);
});
frontend.handler.repeated.timestamp_map__GT_text = (function frontend$handler$repeated$timestamp_map__GT_text(p__64701){
var map__64703 = p__64701;
var map__64703__$1 = cljs.core.__destructure_map(map__64703);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64703__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64703__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var repeater = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64703__$1,new cljs.core.Keyword(null,"repeater","repeater",-1071171146));
var map__64704 = repeater;
var map__64704__$1 = cljs.core.__destructure_map(map__64704);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64704__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64704__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64704__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var repeater__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = kind;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = num;
if(cljs.core.truth_(and__4251__auto____$1)){
return duration;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration)].join(''):null);
var time_repeater = (((!(clojure.string.blank_QMARK_(time))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(time),((clojure.string.blank_QMARK_(repeater__$1))?"":[" ",repeater__$1].join(''))].join(''):repeater__$1);
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("<%s%s>",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.format.unparse(frontend.handler.repeated.custom_formatter,date),((clojure.string.blank_QMARK_(time_repeater))?"":[" ",time_repeater].join(''))], 0));
});
frontend.handler.repeated.timestamp__GT_map = (function frontend$handler$repeated$timestamp__GT_map(p__64707){
var map__64708 = p__64707;
var map__64708__$1 = cljs.core.__destructure_map(map__64708);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64708__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64708__$1,new cljs.core.Keyword(null,"repetition","repetition",1938392115));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64708__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var map__64711 = date;
var map__64711__$1 = cljs.core.__destructure_map(map__64711);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64711__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64711__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64711__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var map__64712 = time;
var map__64712__$1 = cljs.core.__destructure_map(map__64712);
var hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64712__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64712__$1,new cljs.core.Keyword(null,"min","min",444991522));
var vec__64713 = repetition;
var vec__64716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64713,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64716,(0),null);
var vec__64719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64713,(1),null);
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64719,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64713,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),cljs_time.core.local_date(year,month,day),new cljs.core.Keyword(null,"time","time",1385887882),(cljs.core.truth_((function (){var and__4251__auto__ = hour;
if(cljs.core.truth_(and__4251__auto__)){
return min;
} else {
return and__4251__auto__;
}
})())?[frontend.util.zero_pad(hour),":",frontend.util.zero_pad(min)].join(''):null),new cljs.core.Keyword(null,"repeater","repeater",-1071171146),(cljs.core.truth_((function (){var and__4251__auto__ = kind;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = duration;
if(cljs.core.truth_(and__4251__auto____$1)){
return num;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),frontend.handler.repeated.get_repeater_symbol(kind),new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.last(frontend.handler.repeated.get_duration_f_and_text(duration)),new cljs.core.Keyword(null,"num","num",1985240673),num], null):null)], null);
});

//# sourceMappingURL=frontend.handler.repeated.js.map
