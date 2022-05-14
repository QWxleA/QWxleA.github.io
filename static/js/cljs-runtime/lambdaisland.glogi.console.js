goog.provide('lambdaisland.glogi.console');
goog.scope(function(){
  lambdaisland.glogi.console.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * @define {string}
 */
lambdaisland.glogi.console.colorize = goog.define("lambdaisland.glogi.console.colorize","auto");
lambdaisland.glogi.console.log_method = (function lambdaisland$glogi$console$log_method(level){
var pred__109566 = (function (p1__109565_SHARP_,p2__109564_SHARP_){
return (p2__109564_SHARP_ >= p1__109565_SHARP_);
});
var expr__109567 = lambdaisland.glogi.level_value(level);
if(pred__109566(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"severe","severe",-1364500238)),expr__109567)){
return "error";
} else {
if(pred__109566(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"warning","warning",-1685650671)),expr__109567)){
return "warn";
} else {
if(pred__109566(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"info","info",-317069002)),expr__109567)){
return "info";
} else {
if(pred__109566(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"config","config",994861415)),expr__109567)){
return "log";
} else {
return "log";
}
}
}
}
});
lambdaisland.glogi.console.format_raw = (function lambdaisland$glogi$console$format_raw(p__109569){
var map__109570 = p__109569;
var map__109570__$1 = cljs.core.__destructure_map(map__109570);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109570__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109570__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109570__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109570__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger_name),"]"].join(''),message], null);
});
lambdaisland.glogi.console.format_css = (function lambdaisland$glogi$console$format_css(p__109571){
var map__109572 = p__109571;
var map__109572__$1 = cljs.core.__destructure_map(map__109572);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109572__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109572__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109572__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109572__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
return lambdaisland.glogi.print.format(level,logger_name,message);
});
lambdaisland.glogi.console.format_plain = (function lambdaisland$glogi$console$format_plain(p__109573){
var map__109574 = p__109573;
var map__109574__$1 = cljs.core.__destructure_map(map__109574);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109574__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109574__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109574__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109574__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger_name),"]"].join(''),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message], 0))], null);
});
lambdaisland.glogi.console.make_console_log = (function lambdaisland$glogi$console$make_console_log(format){
return (function (p__109575){
var map__109576 = p__109575;
var map__109576__$1 = cljs.core.__destructure_map(map__109576);
var record = map__109576__$1;
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109576__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109576__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109576__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var method_name = lambdaisland.glogi.console.log_method(level);
var method = (function (){var or__4253__auto__ = lambdaisland.glogi.console.goog$module$goog$object.get(console,method_name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return console.log;
}
})();
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(method,(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(record) : format.call(null,record)));

if(cljs.core.truth_(exception)){
var G__109577 = ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger_name),"]"].join('');
var G__109578 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception);
var G__109579 = "\n";
var G__109580 = exception.stack;
return (method.cljs$core$IFn$_invoke$arity$4 ? method.cljs$core$IFn$_invoke$arity$4(G__109577,G__109578,G__109579,G__109580) : method.call(null,G__109577,G__109578,G__109579,G__109580));
} else {
return null;
}
});
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log_raw !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log_raw = lambdaisland.glogi.console.make_console_log(lambdaisland.glogi.console.format_raw);
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log_css !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log_css = lambdaisland.glogi.console.make_console_log(lambdaisland.glogi.console.format_css);
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log_plain !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log_plain = lambdaisland.glogi.console.make_console_log(lambdaisland.glogi.console.format_plain);
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.format !== 'undefined')){
} else {
lambdaisland.glogi.console.format = lambdaisland.glogi.console.format_plain;
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log = lambdaisland.glogi.console.console_log_plain;
}
lambdaisland.glogi.console.devtools_installed_QMARK_ = (function lambdaisland$glogi$console$devtools_installed_QMARK_(){
var and__4251__auto__ = (typeof devtools !== 'undefined') && (typeof devtools.core !== 'undefined') && (typeof devtools.core.installed_QMARK_ !== 'undefined');
if(and__4251__auto__){
return devtools.core.installed_QMARK_();
} else {
return and__4251__auto__;
}
});
lambdaisland.glogi.console.browser_QMARK_ = (function lambdaisland$glogi$console$browser_QMARK_(){
return (typeof window !== 'undefined');
});
lambdaisland.glogi.console.ie_QMARK_ = (function lambdaisland$glogi$console$ie_QMARK_(){
return ((lambdaisland.glogi.console.browser_QMARK_()) && ((((typeof window !== 'undefined') && (typeof window.navigator !== 'undefined')) && ((((typeof window !== 'undefined') && (typeof window.navigator !== 'undefined') && (typeof window.navigator.userAgent !== 'undefined')) && ((((window.navigator.userAgent.indexOf("MSIE") > (-1))) || ((window.navigator.userAgent.indexOf("Trident") > (-1))))))))));
});
lambdaisland.glogi.console.select_handler = (function lambdaisland$glogi$console$select_handler(){
var G__109581 = lambdaisland.glogi.console.colorize;
switch (G__109581) {
case "auto":
if(cljs.core.truth_(lambdaisland.glogi.console.devtools_installed_QMARK_())){
return lambdaisland.glogi.console.console_log_raw;
} else {
if(((lambdaisland.glogi.console.browser_QMARK_()) && ((!(lambdaisland.glogi.console.ie_QMARK_()))))){
return lambdaisland.glogi.console.console_log_css;
} else {
return lambdaisland.glogi.console.console_log_plain;

}
}

break;
case "raw":
return lambdaisland.glogi.console.console_log_raw;

break;
case "true":
return lambdaisland.glogi.console.console_log_css;

break;
case "false":
return lambdaisland.glogi.console.console_log_plain;

break;
default:
throw (new Error(["No matching clause: ",G__109581].join('')));

}
});
lambdaisland.glogi.console.install_BANG_ = (function lambdaisland$glogi$console$install_BANG_(){
var temp__5720__auto___109590 = goog.debug.Console.instance;
if(cljs.core.truth_(temp__5720__auto___109590)){
var instance_109591 = temp__5720__auto___109590;
instance_109591.setCapturing(false);
} else {
}

var G__109586 = lambdaisland.glogi.console.select_handler();
return (lambdaisland.glogi.add_handler_once.cljs$core$IFn$_invoke$arity$1 ? lambdaisland.glogi.add_handler_once.cljs$core$IFn$_invoke$arity$1(G__109586) : lambdaisland.glogi.add_handler_once.call(null,G__109586));
});

//# sourceMappingURL=lambdaisland.glogi.console.js.map
