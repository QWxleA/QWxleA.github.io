goog.provide('lambdaisland.glogi');
goog.scope(function(){
  lambdaisland.glogi.goog$module$goog$array = goog.module.get('goog.array');
  lambdaisland.glogi.goog$module$goog$object = goog.module.get('goog.object');
});
lambdaisland.glogi.Level = (((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.Level !== 'undefined'))?goog.log.Level:goog.debug.logger.Level);
lambdaisland.glogi.goog_setLevel = (function lambdaisland$glogi$goog_setLevel(logger,level){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.setLevel !== 'undefined')){
return goog.log.setLevel(logger,level);
} else {
return logger.setLevel(level);
}
});
lambdaisland.glogi.goog_logRecord = (function lambdaisland$glogi$goog_logRecord(logger,record){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.publishLogRecord !== 'undefined')){
return goog.log.publishLogRecord(logger,record);
} else {
return logger.logRecord(record);
}
});
lambdaisland.glogi.goog_addHandler = (function lambdaisland$glogi$goog_addHandler(logger,handler){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.addHandler !== 'undefined')){
return goog.log.addHandler(logger,handler);
} else {
return logger.addHandler(handler);
}
});
lambdaisland.glogi.goog_removeHandler = (function lambdaisland$glogi$goog_removeHandler(logger,handler){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.removeHandler !== 'undefined')){
return goog.log.removeHandler(logger,handler);
} else {
return logger.removeHandler(handler);
}
});
lambdaisland.glogi.logger_handlers_prop = "__glogi_handlers__";
lambdaisland.glogi.name_str = (function lambdaisland$glogi$name_str(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("glogi","root","glogi/root",-77414841),x)){
return "";
} else {
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.simple_ident_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.qualified_ident_QMARK_(x)){
return [cljs.core.namespace(x),"/",cljs.core.name(x)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
});
/**
 * Get a logger by name, and optionally set its level. Name can be a string
 *   keyword, or symbol. The special keyword :glogi/root returns the root logger.
 */
lambdaisland.glogi.logger = (function lambdaisland$glogi$logger(var_args){
var G__58849 = arguments.length;
switch (G__58849) {
case 1:
return lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1 = (function (n){
return goog.log.getLogger(lambdaisland.glogi.name_str(n),undefined);
}));

(lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$2 = (function (n,level){
return goog.log.getLogger(lambdaisland.glogi.name_str(n),level);
}));

(lambdaisland.glogi.logger.cljs$lang$maxFixedArity = 2);

lambdaisland.glogi.root_logger = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1("");
lambdaisland.glogi.predefined_level = (function lambdaisland$glogi$predefined_level(name){
if((typeof goog !== 'undefined') && (typeof goog.log !== 'undefined') && (typeof goog.log.Level !== 'undefined')){
return goog.log.Level.getPredefinedLevel(name);
} else {
return null;
}
});
lambdaisland.glogi.levels = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shout","shout",186018337),new cljs.core.Keyword(null,"finest","finest",-1359568890),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"severe","severe",-1364500238),new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"fine","fine",-873037193),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"finer","finer",974902846)],[(function (){var or__5043__auto__ = lambdaisland.glogi.Level.SHOUT;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("SHOUT");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.FINEST;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("FINEST");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.CONFIG;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("CONFIG");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.WARNING;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("WARNING");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.FINER;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("FINER");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.FINE;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("FINE");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.ALL;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("ALL");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.WARNING;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("WARNING");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.SEVERE;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("SEVERE");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.OFF;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("OFF");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.INFO;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("INFO");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.FINE;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("FINE");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.SEVERE;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("SEVERE");
}
})(),(function (){var or__5043__auto__ = lambdaisland.glogi.Level.FINER;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lambdaisland.glogi.predefined_level("FINER");
}
})()]);
lambdaisland.glogi.level = (function lambdaisland$glogi$level(lvl){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.levels,lvl);
});
/**
 * Get the numeric value of a log level (keyword).
 */
lambdaisland.glogi.level_value = (function lambdaisland$glogi$level_value(lvl){
return lambdaisland.glogi.level(lvl).value;
});
lambdaisland.glogi.make_log_record = (function lambdaisland$glogi$make_log_record(level,message,name,exception){
var LogRecord = (((typeof goog !== 'undefined') && (typeof goog.debug !== 'undefined') && (typeof goog.debug.LogRecord !== 'undefined'))?goog.debug.LogRecord:goog.log.LogRecord);
var record = (new LogRecord(level,message,name));
if(cljs.core.truth_(exception)){
record.setException(exception);
} else {
}

return record;
});
/**
 * Output a log message to the given logger, optionally with an exception to be
 *   logged.
 */
lambdaisland.glogi.log = (function lambdaisland$glogi$log(var_args){
var G__58855 = arguments.length;
switch (G__58855) {
case 3:
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$3 = (function (name,lvl,message){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(name,lvl,message,null);
}));

(lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4 = (function (name,lvl,message,exception){
if(cljs.core.truth_(goog.log.ENABLED)){
var temp__5720__auto__ = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.truth_(temp__5720__auto__)){
var l = temp__5720__auto__;
return lambdaisland.glogi.goog_logRecord(l,lambdaisland.glogi.make_log_record(lambdaisland.glogi.level(lvl),message,name,exception));
} else {
return null;
}
} else {
return null;
}
}));

(lambdaisland.glogi.log.cljs$lang$maxFixedArity = 4);

/**
 * Set the level (a keyword) of the given logger, identified by name, or :root for
 *   the root logger.
 */
lambdaisland.glogi.set_level = (function lambdaisland$glogi$set_level(name,lvl){
if(cljs.core.contains_QMARK_(lambdaisland.glogi.levels,lvl)){
} else {
throw (new Error("Assert failed: (contains? levels lvl)"));
}

var G__58856 = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
if((G__58856 == null)){
return null;
} else {
return lambdaisland.glogi.goog_setLevel(G__58856,lambdaisland.glogi.level(lvl));
}
});
/**
 * Convenience function for setting several levels at one.
 * 
 *   Takes a map of logger name => level keyword. The logger name can be a string,
 *   keyword, or symbol. The keyword :glogi/root refers to the root logger and is
 *   equivalent to using an empty string.
 * 
 *   This function is exported so it is still available in optimized builds to set
 *   levels from the javascript console. In this case use nested arrays and
 *   strings. Use `:root` for the root logger.
 * 
 *   ``` javascript
 *   lambdaisland.glogi.set_levels([["" "debug"] ["lambdaisland" "trace"]])
 *   ```
 *   
 */
lambdaisland.glogi.set_levels = (function lambdaisland$glogi$set_levels(lvls){
var seq__58857 = cljs.core.seq(lvls);
var chunk__58859 = null;
var count__58860 = (0);
var i__58861 = (0);
while(true){
if((i__58861 < count__58860)){
var vec__58874 = chunk__58859.cljs$core$IIndexed$_nth$arity$2(null,i__58861);
var logger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58874,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58874,(1),null);
var level_58923__$1 = ((typeof level === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(level):level);
lambdaisland.glogi.set_level(logger,level_58923__$1);


var G__58925 = seq__58857;
var G__58926 = chunk__58859;
var G__58927 = count__58860;
var G__58928 = (i__58861 + (1));
seq__58857 = G__58925;
chunk__58859 = G__58926;
count__58860 = G__58927;
i__58861 = G__58928;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58857);
if(temp__5720__auto__){
var seq__58857__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58857__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__58857__$1);
var G__58929 = cljs.core.chunk_rest(seq__58857__$1);
var G__58930 = c__5565__auto__;
var G__58931 = cljs.core.count(c__5565__auto__);
var G__58932 = (0);
seq__58857 = G__58929;
chunk__58859 = G__58930;
count__58860 = G__58931;
i__58861 = G__58932;
continue;
} else {
var vec__58879 = cljs.core.first(seq__58857__$1);
var logger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58879,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58879,(1),null);
var level_58933__$1 = ((typeof level === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(level):level);
lambdaisland.glogi.set_level(logger,level_58933__$1);


var G__58934 = cljs.core.next(seq__58857__$1);
var G__58935 = null;
var G__58936 = (0);
var G__58937 = (0);
seq__58857 = G__58934;
chunk__58859 = G__58935;
count__58860 = G__58936;
i__58861 = G__58937;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('lambdaisland.glogi.set_levels', lambdaisland.glogi.set_levels);
/**
 * Log to the browser console. This uses goog.debug.Console directly,
 *   use [lambdaisland.glogi.console/install!] for a version that plays nicely with
 *   cljs-devtools.
 */
lambdaisland.glogi.enable_console_logging_BANG_ = (function lambdaisland$glogi$enable_console_logging_BANG_(){
var temp__5720__auto___58938 = goog.debug.Console.instance;
if(cljs.core.truth_(temp__5720__auto___58938)){
var instance_58939 = temp__5720__auto___58938;
instance_58939.setCapturing(true);

var instance_58942__$1 = (new goog.debug.Console());
(goog.debug.Console.instance = instance_58942__$1);

instance_58942__$1.setCapturing();
} else {
}

return null;
});
/**
 * Log to the browser console if the browser location contains Debug=true.
 */
lambdaisland.glogi.console_autoinstall_BANG_ = (function lambdaisland$glogi$console_autoinstall_BANG_(){
goog.debug.Console.autoInstall();

return null;
});
/**
 * Pop up a browser window which will display log messages. Returns the FancyWindow instance.
 */
lambdaisland.glogi.popup_logger_window_BANG_ = (function lambdaisland$glogi$popup_logger_window_BANG_(){
var G__58886 = (new goog.debug.FancyWindow());
G__58886.setEnabled(true);

return G__58886;
});
/**
 * Log messages to an element on the page. Returns the DivConsole instance.
 */
lambdaisland.glogi.log_to_div_BANG_ = (function lambdaisland$glogi$log_to_div_BANG_(element){
var G__58887 = (new goog.debug.DivConsole(element));
G__58887.setCapturing(true);

return G__58887;
});
lambdaisland.glogi.logger_glogi_handlers = (function lambdaisland$glogi$logger_glogi_handlers(logger){
return lambdaisland.glogi.goog$module$goog$object.get(logger,lambdaisland.glogi.logger_handlers_prop);
});
lambdaisland.glogi.swap_handlers_BANG_ = (function lambdaisland$glogi$swap_handlers_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___58943 = arguments.length;
var i__5767__auto___58944 = (0);
while(true){
if((i__5767__auto___58944 < len__5766__auto___58943)){
args__5772__auto__.push((arguments[i__5767__auto___58944]));

var G__58945 = (i__5767__auto___58944 + (1));
i__5767__auto___58944 = G__58945;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (logger,f,args){
return lambdaisland.glogi.goog$module$goog$object.set(logger,lambdaisland.glogi.logger_handlers_prop,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,lambdaisland.glogi.logger_glogi_handlers(logger),args));
}));

(lambdaisland.glogi.swap_handlers_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lambdaisland.glogi.swap_handlers_BANG_.cljs$lang$applyTo = (function (seq58888){
var G__58889 = cljs.core.first(seq58888);
var seq58888__$1 = cljs.core.next(seq58888);
var G__58890 = cljs.core.first(seq58888__$1);
var seq58888__$2 = cljs.core.next(seq58888__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58889,G__58890,seq58888__$2);
}));

/**
 * Add a log handler to the given logger, or to the root logger if no logger is
 *   specified. The handler is a function which receives a map as its argument.
 * 
 *   A given handler-fn is only added to a given logger once, even when called
 *   repeatedly.
 */
lambdaisland.glogi.add_handler = (function lambdaisland$glogi$add_handler(var_args){
var G__58892 = arguments.length;
switch (G__58892) {
case 1:
return lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler_fn){
return lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$2("",handler_fn);
}));

(lambdaisland.glogi.add_handler.cljs$core$IFn$_invoke$arity$2 = (function (name,handler_fn){
var logger = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
var log_record_handler = (function (record){
var G__58910 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sequenceNumber","sequenceNumber",-543983615),record.sequenceNumber_,new cljs.core.Keyword(null,"time","time",1385887882),record.time_,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(record.level_.name)),new cljs.core.Keyword(null,"message","message",-406056002),record.msg_,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927),record.loggerName_,new cljs.core.Keyword(null,"exception","exception",-335277064),record.exception_], null);
return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(G__58910) : handler_fn.call(null,G__58910));
});
if(cljs.core.truth_(logger)){
var temp__5720__auto___58952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.logger_glogi_handlers(logger),handler_fn);
if(cljs.core.truth_(temp__5720__auto___58952)){
var handler_58953 = temp__5720__auto___58952;
lambdaisland.glogi.goog_removeHandler(logger,handler_58953);
} else {
}

lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(logger,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler_fn,log_record_handler], 0));

var G__58911 = logger;
if((G__58911 == null)){
return null;
} else {
return lambdaisland.glogi.goog_addHandler(G__58911,log_record_handler);
}
} else {
return null;
}
}));

(lambdaisland.glogi.add_handler.cljs$lang$maxFixedArity = 2);

lambdaisland.glogi.remove_handler = (function lambdaisland$glogi$remove_handler(var_args){
var G__58913 = arguments.length;
switch (G__58913) {
case 1:
return lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler_fn){
return lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$2("",handler_fn);
}));

(lambdaisland.glogi.remove_handler.cljs$core$IFn$_invoke$arity$2 = (function (name,handler_fn){
var logger = lambdaisland.glogi.logger.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.truth_(logger)){
var temp__5720__auto___58959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.glogi.logger_glogi_handlers(logger),handler_fn);
if(cljs.core.truth_(temp__5720__auto___58959)){
var handler_58963 = temp__5720__auto___58959;
lambdaisland.glogi.goog_removeHandler(logger,handler_58963);
} else {
}

return lambdaisland.glogi.swap_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(logger,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler_fn], 0));
} else {
return null;
}
}));

(lambdaisland.glogi.remove_handler.cljs$lang$maxFixedArity = 2);

lambdaisland.glogi.add_handler_once = lambdaisland.glogi.add_handler;
lambdaisland.glogi.set_level(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"info","info",-317069002));

//# sourceMappingURL=lambdaisland.glogi.js.map
