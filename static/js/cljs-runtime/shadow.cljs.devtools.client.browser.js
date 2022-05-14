goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63788 = arguments.length;
var i__4865__auto___63789 = (0);
while(true){
if((i__4865__auto___63789 < len__4864__auto___63788)){
args__4870__auto__.push((arguments[i__4865__auto___63789]));

var G__63790 = (i__4865__auto___63789 + (1));
i__4865__auto___63789 = G__63790;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63271){
var G__63272 = cljs.core.first(seq63271);
var seq63271__$1 = cljs.core.next(seq63271);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63272,seq63271__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63284 = cljs.core.seq(sources);
var chunk__63285 = null;
var count__63286 = (0);
var i__63287 = (0);
while(true){
if((i__63287 < count__63286)){
var map__63300 = chunk__63285.cljs$core$IIndexed$_nth$arity$2(null,i__63287);
var map__63300__$1 = cljs.core.__destructure_map(map__63300);
var src = map__63300__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63302){var e_63791 = e63302;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63791);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63791.message)].join('')));
}

var G__63792 = seq__63284;
var G__63793 = chunk__63285;
var G__63794 = count__63286;
var G__63795 = (i__63287 + (1));
seq__63284 = G__63792;
chunk__63285 = G__63793;
count__63286 = G__63794;
i__63287 = G__63795;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__63284);
if(temp__5720__auto__){
var seq__63284__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63284__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63284__$1);
var G__63796 = cljs.core.chunk_rest(seq__63284__$1);
var G__63797 = c__4679__auto__;
var G__63798 = cljs.core.count(c__4679__auto__);
var G__63799 = (0);
seq__63284 = G__63796;
chunk__63285 = G__63797;
count__63286 = G__63798;
i__63287 = G__63799;
continue;
} else {
var map__63303 = cljs.core.first(seq__63284__$1);
var map__63303__$1 = cljs.core.__destructure_map(map__63303);
var src = map__63303__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63303__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63303__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63303__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63303__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63304){var e_63800 = e63304;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63800);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63800.message)].join('')));
}

var G__63801 = cljs.core.next(seq__63284__$1);
var G__63802 = null;
var G__63803 = (0);
var G__63804 = (0);
seq__63284 = G__63801;
chunk__63285 = G__63802;
count__63286 = G__63803;
i__63287 = G__63804;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__63313 = cljs.core.seq(js_requires);
var chunk__63314 = null;
var count__63315 = (0);
var i__63316 = (0);
while(true){
if((i__63316 < count__63315)){
var js_ns = chunk__63314.cljs$core$IIndexed$_nth$arity$2(null,i__63316);
var require_str_63805 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63805);


var G__63806 = seq__63313;
var G__63807 = chunk__63314;
var G__63808 = count__63315;
var G__63809 = (i__63316 + (1));
seq__63313 = G__63806;
chunk__63314 = G__63807;
count__63315 = G__63808;
i__63316 = G__63809;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__63313);
if(temp__5720__auto__){
var seq__63313__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63313__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63313__$1);
var G__63810 = cljs.core.chunk_rest(seq__63313__$1);
var G__63811 = c__4679__auto__;
var G__63812 = cljs.core.count(c__4679__auto__);
var G__63813 = (0);
seq__63313 = G__63810;
chunk__63314 = G__63811;
count__63315 = G__63812;
i__63316 = G__63813;
continue;
} else {
var js_ns = cljs.core.first(seq__63313__$1);
var require_str_63814 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63814);


var G__63815 = cljs.core.next(seq__63313__$1);
var G__63816 = null;
var G__63817 = (0);
var G__63818 = (0);
seq__63313 = G__63815;
chunk__63314 = G__63816;
count__63315 = G__63817;
i__63316 = G__63818;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__63321){
var map__63322 = p__63321;
var map__63322__$1 = cljs.core.__destructure_map(map__63322);
var msg = map__63322__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63322__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63322__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63323(s__63324){
return (new cljs.core.LazySeq(null,(function (){
var s__63324__$1 = s__63324;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__63324__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__63329 = cljs.core.first(xs__6277__auto__);
var map__63329__$1 = cljs.core.__destructure_map(map__63329);
var src = map__63329__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63329__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63329__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__63324__$1,map__63329,map__63329__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__63322,map__63322__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63323_$_iter__63325(s__63326){
return (new cljs.core.LazySeq(null,((function (s__63324__$1,map__63329,map__63329__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__63322,map__63322__$1,msg,info,reload_info){
return (function (){
var s__63326__$1 = s__63326;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__63326__$1);
if(temp__5720__auto____$1){
var s__63326__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63326__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__63326__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__63328 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__63327 = (0);
while(true){
if((i__63327 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__63327);
cljs.core.chunk_append(b__63328,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__63819 = (i__63327 + (1));
i__63327 = G__63819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63328),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63323_$_iter__63325(cljs.core.chunk_rest(s__63326__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63328),null);
}
} else {
var warning = cljs.core.first(s__63326__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63323_$_iter__63325(cljs.core.rest(s__63326__$2)));
}
} else {
return null;
}
break;
}
});})(s__63324__$1,map__63329,map__63329__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__63322,map__63322__$1,msg,info,reload_info))
,null,null));
});})(s__63324__$1,map__63329,map__63329__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__63322,map__63322__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63323(cljs.core.rest(s__63324__$1)));
} else {
var G__63820 = cljs.core.rest(s__63324__$1);
s__63324__$1 = G__63820;
continue;
}
} else {
var G__63821 = cljs.core.rest(s__63324__$1);
s__63324__$1 = G__63821;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__63330_63822 = cljs.core.seq(warnings);
var chunk__63331_63823 = null;
var count__63332_63824 = (0);
var i__63333_63825 = (0);
while(true){
if((i__63333_63825 < count__63332_63824)){
var map__63336_63826 = chunk__63331_63823.cljs$core$IIndexed$_nth$arity$2(null,i__63333_63825);
var map__63336_63827__$1 = cljs.core.__destructure_map(map__63336_63826);
var w_63828 = map__63336_63827__$1;
var msg_63829__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63336_63827__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63336_63827__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63336_63827__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63336_63827__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63832)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63830),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63831),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63829__$1)].join(''));


var G__63833 = seq__63330_63822;
var G__63834 = chunk__63331_63823;
var G__63835 = count__63332_63824;
var G__63836 = (i__63333_63825 + (1));
seq__63330_63822 = G__63833;
chunk__63331_63823 = G__63834;
count__63332_63824 = G__63835;
i__63333_63825 = G__63836;
continue;
} else {
var temp__5720__auto___63837 = cljs.core.seq(seq__63330_63822);
if(temp__5720__auto___63837){
var seq__63330_63838__$1 = temp__5720__auto___63837;
if(cljs.core.chunked_seq_QMARK_(seq__63330_63838__$1)){
var c__4679__auto___63839 = cljs.core.chunk_first(seq__63330_63838__$1);
var G__63840 = cljs.core.chunk_rest(seq__63330_63838__$1);
var G__63841 = c__4679__auto___63839;
var G__63842 = cljs.core.count(c__4679__auto___63839);
var G__63843 = (0);
seq__63330_63822 = G__63840;
chunk__63331_63823 = G__63841;
count__63332_63824 = G__63842;
i__63333_63825 = G__63843;
continue;
} else {
var map__63337_63844 = cljs.core.first(seq__63330_63838__$1);
var map__63337_63845__$1 = cljs.core.__destructure_map(map__63337_63844);
var w_63846 = map__63337_63845__$1;
var msg_63847__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63337_63845__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63337_63845__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63337_63845__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63337_63845__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63850)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63848),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63849),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63847__$1)].join(''));


var G__63851 = cljs.core.next(seq__63330_63838__$1);
var G__63852 = null;
var G__63853 = (0);
var G__63854 = (0);
seq__63330_63822 = G__63851;
chunk__63331_63823 = G__63852;
count__63332_63824 = G__63853;
i__63333_63825 = G__63854;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__63320_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63320_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__63353){
var map__63354 = p__63353;
var map__63354__$1 = cljs.core.__destructure_map(map__63354);
var msg = map__63354__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63354__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63354__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__63355 = cljs.core.seq(updates);
var chunk__63357 = null;
var count__63358 = (0);
var i__63359 = (0);
while(true){
if((i__63359 < count__63358)){
var path = chunk__63357.cljs$core$IIndexed$_nth$arity$2(null,i__63359);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63579_63855 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63583_63856 = null;
var count__63584_63857 = (0);
var i__63585_63858 = (0);
while(true){
if((i__63585_63858 < count__63584_63857)){
var node_63859 = chunk__63583_63856.cljs$core$IIndexed$_nth$arity$2(null,i__63585_63858);
if(cljs.core.not(node_63859.shadow$old)){
var path_match_63860 = shadow.cljs.devtools.client.browser.match_paths(node_63859.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63860)){
var new_link_63861 = (function (){var G__63629 = node_63859.cloneNode(true);
G__63629.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63860),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63629;
})();
(node_63859.shadow$old = true);

(new_link_63861.onload = ((function (seq__63579_63855,chunk__63583_63856,count__63584_63857,i__63585_63858,seq__63355,chunk__63357,count__63358,i__63359,new_link_63861,path_match_63860,node_63859,path,map__63354,map__63354__$1,msg,updates,reload_info){
return (function (e){
var seq__63630_63862 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__63632_63863 = null;
var count__63633_63864 = (0);
var i__63634_63865 = (0);
while(true){
if((i__63634_63865 < count__63633_63864)){
var map__63638_63866 = chunk__63632_63863.cljs$core$IIndexed$_nth$arity$2(null,i__63634_63865);
var map__63638_63867__$1 = cljs.core.__destructure_map(map__63638_63866);
var task_63868 = map__63638_63867__$1;
var fn_str_63869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638_63867__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_63870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638_63867__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_63871 = goog.getObjectByName(fn_str_63869,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_63870)].join(''));

(fn_obj_63871.cljs$core$IFn$_invoke$arity$2 ? fn_obj_63871.cljs$core$IFn$_invoke$arity$2(path,new_link_63861) : fn_obj_63871.call(null,path,new_link_63861));


var G__63872 = seq__63630_63862;
var G__63873 = chunk__63632_63863;
var G__63874 = count__63633_63864;
var G__63875 = (i__63634_63865 + (1));
seq__63630_63862 = G__63872;
chunk__63632_63863 = G__63873;
count__63633_63864 = G__63874;
i__63634_63865 = G__63875;
continue;
} else {
var temp__5720__auto___63876 = cljs.core.seq(seq__63630_63862);
if(temp__5720__auto___63876){
var seq__63630_63877__$1 = temp__5720__auto___63876;
if(cljs.core.chunked_seq_QMARK_(seq__63630_63877__$1)){
var c__4679__auto___63878 = cljs.core.chunk_first(seq__63630_63877__$1);
var G__63879 = cljs.core.chunk_rest(seq__63630_63877__$1);
var G__63880 = c__4679__auto___63878;
var G__63881 = cljs.core.count(c__4679__auto___63878);
var G__63882 = (0);
seq__63630_63862 = G__63879;
chunk__63632_63863 = G__63880;
count__63633_63864 = G__63881;
i__63634_63865 = G__63882;
continue;
} else {
var map__63639_63883 = cljs.core.first(seq__63630_63877__$1);
var map__63639_63884__$1 = cljs.core.__destructure_map(map__63639_63883);
var task_63885 = map__63639_63884__$1;
var fn_str_63886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63639_63884__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_63887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63639_63884__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_63888 = goog.getObjectByName(fn_str_63886,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_63887)].join(''));

(fn_obj_63888.cljs$core$IFn$_invoke$arity$2 ? fn_obj_63888.cljs$core$IFn$_invoke$arity$2(path,new_link_63861) : fn_obj_63888.call(null,path,new_link_63861));


var G__63889 = cljs.core.next(seq__63630_63877__$1);
var G__63890 = null;
var G__63891 = (0);
var G__63892 = (0);
seq__63630_63862 = G__63889;
chunk__63632_63863 = G__63890;
count__63633_63864 = G__63891;
i__63634_63865 = G__63892;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_63859);
});})(seq__63579_63855,chunk__63583_63856,count__63584_63857,i__63585_63858,seq__63355,chunk__63357,count__63358,i__63359,new_link_63861,path_match_63860,node_63859,path,map__63354,map__63354__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63860], 0));

goog.dom.insertSiblingAfter(new_link_63861,node_63859);


var G__63893 = seq__63579_63855;
var G__63894 = chunk__63583_63856;
var G__63895 = count__63584_63857;
var G__63896 = (i__63585_63858 + (1));
seq__63579_63855 = G__63893;
chunk__63583_63856 = G__63894;
count__63584_63857 = G__63895;
i__63585_63858 = G__63896;
continue;
} else {
var G__63897 = seq__63579_63855;
var G__63898 = chunk__63583_63856;
var G__63899 = count__63584_63857;
var G__63900 = (i__63585_63858 + (1));
seq__63579_63855 = G__63897;
chunk__63583_63856 = G__63898;
count__63584_63857 = G__63899;
i__63585_63858 = G__63900;
continue;
}
} else {
var G__63901 = seq__63579_63855;
var G__63902 = chunk__63583_63856;
var G__63903 = count__63584_63857;
var G__63904 = (i__63585_63858 + (1));
seq__63579_63855 = G__63901;
chunk__63583_63856 = G__63902;
count__63584_63857 = G__63903;
i__63585_63858 = G__63904;
continue;
}
} else {
var temp__5720__auto___63905 = cljs.core.seq(seq__63579_63855);
if(temp__5720__auto___63905){
var seq__63579_63906__$1 = temp__5720__auto___63905;
if(cljs.core.chunked_seq_QMARK_(seq__63579_63906__$1)){
var c__4679__auto___63907 = cljs.core.chunk_first(seq__63579_63906__$1);
var G__63908 = cljs.core.chunk_rest(seq__63579_63906__$1);
var G__63909 = c__4679__auto___63907;
var G__63910 = cljs.core.count(c__4679__auto___63907);
var G__63911 = (0);
seq__63579_63855 = G__63908;
chunk__63583_63856 = G__63909;
count__63584_63857 = G__63910;
i__63585_63858 = G__63911;
continue;
} else {
var node_63912 = cljs.core.first(seq__63579_63906__$1);
if(cljs.core.not(node_63912.shadow$old)){
var path_match_63913 = shadow.cljs.devtools.client.browser.match_paths(node_63912.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63913)){
var new_link_63914 = (function (){var G__63640 = node_63912.cloneNode(true);
G__63640.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63913),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63640;
})();
(node_63912.shadow$old = true);

(new_link_63914.onload = ((function (seq__63579_63855,chunk__63583_63856,count__63584_63857,i__63585_63858,seq__63355,chunk__63357,count__63358,i__63359,new_link_63914,path_match_63913,node_63912,seq__63579_63906__$1,temp__5720__auto___63905,path,map__63354,map__63354__$1,msg,updates,reload_info){
return (function (e){
var seq__63641_63915 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__63643_63916 = null;
var count__63644_63917 = (0);
var i__63645_63918 = (0);
while(true){
if((i__63645_63918 < count__63644_63917)){
var map__63649_63919 = chunk__63643_63916.cljs$core$IIndexed$_nth$arity$2(null,i__63645_63918);
var map__63649_63920__$1 = cljs.core.__destructure_map(map__63649_63919);
var task_63921 = map__63649_63920__$1;
var fn_str_63922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63649_63920__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_63923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63649_63920__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_63924 = goog.getObjectByName(fn_str_63922,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_63923)].join(''));

(fn_obj_63924.cljs$core$IFn$_invoke$arity$2 ? fn_obj_63924.cljs$core$IFn$_invoke$arity$2(path,new_link_63914) : fn_obj_63924.call(null,path,new_link_63914));


var G__63925 = seq__63641_63915;
var G__63926 = chunk__63643_63916;
var G__63927 = count__63644_63917;
var G__63928 = (i__63645_63918 + (1));
seq__63641_63915 = G__63925;
chunk__63643_63916 = G__63926;
count__63644_63917 = G__63927;
i__63645_63918 = G__63928;
continue;
} else {
var temp__5720__auto___63929__$1 = cljs.core.seq(seq__63641_63915);
if(temp__5720__auto___63929__$1){
var seq__63641_63930__$1 = temp__5720__auto___63929__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63641_63930__$1)){
var c__4679__auto___63931 = cljs.core.chunk_first(seq__63641_63930__$1);
var G__63932 = cljs.core.chunk_rest(seq__63641_63930__$1);
var G__63933 = c__4679__auto___63931;
var G__63934 = cljs.core.count(c__4679__auto___63931);
var G__63935 = (0);
seq__63641_63915 = G__63932;
chunk__63643_63916 = G__63933;
count__63644_63917 = G__63934;
i__63645_63918 = G__63935;
continue;
} else {
var map__63650_63936 = cljs.core.first(seq__63641_63930__$1);
var map__63650_63937__$1 = cljs.core.__destructure_map(map__63650_63936);
var task_63938 = map__63650_63937__$1;
var fn_str_63939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63650_63937__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_63940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63650_63937__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_63941 = goog.getObjectByName(fn_str_63939,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_63940)].join(''));

(fn_obj_63941.cljs$core$IFn$_invoke$arity$2 ? fn_obj_63941.cljs$core$IFn$_invoke$arity$2(path,new_link_63914) : fn_obj_63941.call(null,path,new_link_63914));


var G__63942 = cljs.core.next(seq__63641_63930__$1);
var G__63943 = null;
var G__63944 = (0);
var G__63945 = (0);
seq__63641_63915 = G__63942;
chunk__63643_63916 = G__63943;
count__63644_63917 = G__63944;
i__63645_63918 = G__63945;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_63912);
});})(seq__63579_63855,chunk__63583_63856,count__63584_63857,i__63585_63858,seq__63355,chunk__63357,count__63358,i__63359,new_link_63914,path_match_63913,node_63912,seq__63579_63906__$1,temp__5720__auto___63905,path,map__63354,map__63354__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63913], 0));

goog.dom.insertSiblingAfter(new_link_63914,node_63912);


var G__63946 = cljs.core.next(seq__63579_63906__$1);
var G__63947 = null;
var G__63948 = (0);
var G__63949 = (0);
seq__63579_63855 = G__63946;
chunk__63583_63856 = G__63947;
count__63584_63857 = G__63948;
i__63585_63858 = G__63949;
continue;
} else {
var G__63950 = cljs.core.next(seq__63579_63906__$1);
var G__63951 = null;
var G__63952 = (0);
var G__63953 = (0);
seq__63579_63855 = G__63950;
chunk__63583_63856 = G__63951;
count__63584_63857 = G__63952;
i__63585_63858 = G__63953;
continue;
}
} else {
var G__63954 = cljs.core.next(seq__63579_63906__$1);
var G__63955 = null;
var G__63956 = (0);
var G__63957 = (0);
seq__63579_63855 = G__63954;
chunk__63583_63856 = G__63955;
count__63584_63857 = G__63956;
i__63585_63858 = G__63957;
continue;
}
}
} else {
}
}
break;
}


var G__63958 = seq__63355;
var G__63959 = chunk__63357;
var G__63960 = count__63358;
var G__63961 = (i__63359 + (1));
seq__63355 = G__63958;
chunk__63357 = G__63959;
count__63358 = G__63960;
i__63359 = G__63961;
continue;
} else {
var G__63962 = seq__63355;
var G__63963 = chunk__63357;
var G__63964 = count__63358;
var G__63965 = (i__63359 + (1));
seq__63355 = G__63962;
chunk__63357 = G__63963;
count__63358 = G__63964;
i__63359 = G__63965;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__63355);
if(temp__5720__auto__){
var seq__63355__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63355__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63355__$1);
var G__63966 = cljs.core.chunk_rest(seq__63355__$1);
var G__63967 = c__4679__auto__;
var G__63968 = cljs.core.count(c__4679__auto__);
var G__63969 = (0);
seq__63355 = G__63966;
chunk__63357 = G__63967;
count__63358 = G__63968;
i__63359 = G__63969;
continue;
} else {
var path = cljs.core.first(seq__63355__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63651_63970 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63655_63971 = null;
var count__63656_63972 = (0);
var i__63657_63973 = (0);
while(true){
if((i__63657_63973 < count__63656_63972)){
var node_63974 = chunk__63655_63971.cljs$core$IIndexed$_nth$arity$2(null,i__63657_63973);
if(cljs.core.not(node_63974.shadow$old)){
var path_match_63975 = shadow.cljs.devtools.client.browser.match_paths(node_63974.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63975)){
var new_link_63976 = (function (){var G__63714 = node_63974.cloneNode(true);
G__63714.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63975),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63714;
})();
(node_63974.shadow$old = true);

(new_link_63976.onload = ((function (seq__63651_63970,chunk__63655_63971,count__63656_63972,i__63657_63973,seq__63355,chunk__63357,count__63358,i__63359,new_link_63976,path_match_63975,node_63974,path,seq__63355__$1,temp__5720__auto__,map__63354,map__63354__$1,msg,updates,reload_info){
return (function (e){
var seq__63716_63977 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__63718_63978 = null;
var count__63719_63979 = (0);
var i__63720_63980 = (0);
while(true){
if((i__63720_63980 < count__63719_63979)){
var map__63727_63981 = chunk__63718_63978.cljs$core$IIndexed$_nth$arity$2(null,i__63720_63980);
var map__63727_63982__$1 = cljs.core.__destructure_map(map__63727_63981);
var task_63983 = map__63727_63982__$1;
var fn_str_63984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63727_63982__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_63985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63727_63982__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_63986 = goog.getObjectByName(fn_str_63984,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_63985)].join(''));

(fn_obj_63986.cljs$core$IFn$_invoke$arity$2 ? fn_obj_63986.cljs$core$IFn$_invoke$arity$2(path,new_link_63976) : fn_obj_63986.call(null,path,new_link_63976));


var G__63987 = seq__63716_63977;
var G__63988 = chunk__63718_63978;
var G__63989 = count__63719_63979;
var G__63990 = (i__63720_63980 + (1));
seq__63716_63977 = G__63987;
chunk__63718_63978 = G__63988;
count__63719_63979 = G__63989;
i__63720_63980 = G__63990;
continue;
} else {
var temp__5720__auto___63991__$1 = cljs.core.seq(seq__63716_63977);
if(temp__5720__auto___63991__$1){
var seq__63716_63992__$1 = temp__5720__auto___63991__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63716_63992__$1)){
var c__4679__auto___63993 = cljs.core.chunk_first(seq__63716_63992__$1);
var G__63994 = cljs.core.chunk_rest(seq__63716_63992__$1);
var G__63995 = c__4679__auto___63993;
var G__63996 = cljs.core.count(c__4679__auto___63993);
var G__63997 = (0);
seq__63716_63977 = G__63994;
chunk__63718_63978 = G__63995;
count__63719_63979 = G__63996;
i__63720_63980 = G__63997;
continue;
} else {
var map__63735_63998 = cljs.core.first(seq__63716_63992__$1);
var map__63735_63999__$1 = cljs.core.__destructure_map(map__63735_63998);
var task_64000 = map__63735_63999__$1;
var fn_str_64001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63735_63999__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63735_63999__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64003 = goog.getObjectByName(fn_str_64001,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64002)].join(''));

(fn_obj_64003.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64003.cljs$core$IFn$_invoke$arity$2(path,new_link_63976) : fn_obj_64003.call(null,path,new_link_63976));


var G__64004 = cljs.core.next(seq__63716_63992__$1);
var G__64005 = null;
var G__64006 = (0);
var G__64007 = (0);
seq__63716_63977 = G__64004;
chunk__63718_63978 = G__64005;
count__63719_63979 = G__64006;
i__63720_63980 = G__64007;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_63974);
});})(seq__63651_63970,chunk__63655_63971,count__63656_63972,i__63657_63973,seq__63355,chunk__63357,count__63358,i__63359,new_link_63976,path_match_63975,node_63974,path,seq__63355__$1,temp__5720__auto__,map__63354,map__63354__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63975], 0));

goog.dom.insertSiblingAfter(new_link_63976,node_63974);


var G__64008 = seq__63651_63970;
var G__64009 = chunk__63655_63971;
var G__64010 = count__63656_63972;
var G__64011 = (i__63657_63973 + (1));
seq__63651_63970 = G__64008;
chunk__63655_63971 = G__64009;
count__63656_63972 = G__64010;
i__63657_63973 = G__64011;
continue;
} else {
var G__64012 = seq__63651_63970;
var G__64013 = chunk__63655_63971;
var G__64014 = count__63656_63972;
var G__64015 = (i__63657_63973 + (1));
seq__63651_63970 = G__64012;
chunk__63655_63971 = G__64013;
count__63656_63972 = G__64014;
i__63657_63973 = G__64015;
continue;
}
} else {
var G__64016 = seq__63651_63970;
var G__64017 = chunk__63655_63971;
var G__64018 = count__63656_63972;
var G__64019 = (i__63657_63973 + (1));
seq__63651_63970 = G__64016;
chunk__63655_63971 = G__64017;
count__63656_63972 = G__64018;
i__63657_63973 = G__64019;
continue;
}
} else {
var temp__5720__auto___64020__$1 = cljs.core.seq(seq__63651_63970);
if(temp__5720__auto___64020__$1){
var seq__63651_64021__$1 = temp__5720__auto___64020__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63651_64021__$1)){
var c__4679__auto___64022 = cljs.core.chunk_first(seq__63651_64021__$1);
var G__64023 = cljs.core.chunk_rest(seq__63651_64021__$1);
var G__64024 = c__4679__auto___64022;
var G__64025 = cljs.core.count(c__4679__auto___64022);
var G__64026 = (0);
seq__63651_63970 = G__64023;
chunk__63655_63971 = G__64024;
count__63656_63972 = G__64025;
i__63657_63973 = G__64026;
continue;
} else {
var node_64027 = cljs.core.first(seq__63651_64021__$1);
if(cljs.core.not(node_64027.shadow$old)){
var path_match_64028 = shadow.cljs.devtools.client.browser.match_paths(node_64027.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64028)){
var new_link_64029 = (function (){var G__63751 = node_64027.cloneNode(true);
G__63751.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64028),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63751;
})();
(node_64027.shadow$old = true);

(new_link_64029.onload = ((function (seq__63651_63970,chunk__63655_63971,count__63656_63972,i__63657_63973,seq__63355,chunk__63357,count__63358,i__63359,new_link_64029,path_match_64028,node_64027,seq__63651_64021__$1,temp__5720__auto___64020__$1,path,seq__63355__$1,temp__5720__auto__,map__63354,map__63354__$1,msg,updates,reload_info){
return (function (e){
var seq__63754_64030 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__63756_64031 = null;
var count__63757_64032 = (0);
var i__63758_64033 = (0);
while(true){
if((i__63758_64033 < count__63757_64032)){
var map__63766_64034 = chunk__63756_64031.cljs$core$IIndexed$_nth$arity$2(null,i__63758_64033);
var map__63766_64035__$1 = cljs.core.__destructure_map(map__63766_64034);
var task_64036 = map__63766_64035__$1;
var fn_str_64037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63766_64035__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63766_64035__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64039 = goog.getObjectByName(fn_str_64037,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64038)].join(''));

(fn_obj_64039.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64039.cljs$core$IFn$_invoke$arity$2(path,new_link_64029) : fn_obj_64039.call(null,path,new_link_64029));


var G__64040 = seq__63754_64030;
var G__64041 = chunk__63756_64031;
var G__64042 = count__63757_64032;
var G__64043 = (i__63758_64033 + (1));
seq__63754_64030 = G__64040;
chunk__63756_64031 = G__64041;
count__63757_64032 = G__64042;
i__63758_64033 = G__64043;
continue;
} else {
var temp__5720__auto___64044__$2 = cljs.core.seq(seq__63754_64030);
if(temp__5720__auto___64044__$2){
var seq__63754_64045__$1 = temp__5720__auto___64044__$2;
if(cljs.core.chunked_seq_QMARK_(seq__63754_64045__$1)){
var c__4679__auto___64046 = cljs.core.chunk_first(seq__63754_64045__$1);
var G__64047 = cljs.core.chunk_rest(seq__63754_64045__$1);
var G__64048 = c__4679__auto___64046;
var G__64049 = cljs.core.count(c__4679__auto___64046);
var G__64050 = (0);
seq__63754_64030 = G__64047;
chunk__63756_64031 = G__64048;
count__63757_64032 = G__64049;
i__63758_64033 = G__64050;
continue;
} else {
var map__63767_64051 = cljs.core.first(seq__63754_64045__$1);
var map__63767_64052__$1 = cljs.core.__destructure_map(map__63767_64051);
var task_64053 = map__63767_64052__$1;
var fn_str_64054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63767_64052__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63767_64052__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64056 = goog.getObjectByName(fn_str_64054,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64055)].join(''));

(fn_obj_64056.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64056.cljs$core$IFn$_invoke$arity$2(path,new_link_64029) : fn_obj_64056.call(null,path,new_link_64029));


var G__64057 = cljs.core.next(seq__63754_64045__$1);
var G__64058 = null;
var G__64059 = (0);
var G__64060 = (0);
seq__63754_64030 = G__64057;
chunk__63756_64031 = G__64058;
count__63757_64032 = G__64059;
i__63758_64033 = G__64060;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64027);
});})(seq__63651_63970,chunk__63655_63971,count__63656_63972,i__63657_63973,seq__63355,chunk__63357,count__63358,i__63359,new_link_64029,path_match_64028,node_64027,seq__63651_64021__$1,temp__5720__auto___64020__$1,path,seq__63355__$1,temp__5720__auto__,map__63354,map__63354__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64028], 0));

goog.dom.insertSiblingAfter(new_link_64029,node_64027);


var G__64061 = cljs.core.next(seq__63651_64021__$1);
var G__64062 = null;
var G__64063 = (0);
var G__64064 = (0);
seq__63651_63970 = G__64061;
chunk__63655_63971 = G__64062;
count__63656_63972 = G__64063;
i__63657_63973 = G__64064;
continue;
} else {
var G__64065 = cljs.core.next(seq__63651_64021__$1);
var G__64066 = null;
var G__64067 = (0);
var G__64068 = (0);
seq__63651_63970 = G__64065;
chunk__63655_63971 = G__64066;
count__63656_63972 = G__64067;
i__63657_63973 = G__64068;
continue;
}
} else {
var G__64069 = cljs.core.next(seq__63651_64021__$1);
var G__64070 = null;
var G__64071 = (0);
var G__64072 = (0);
seq__63651_63970 = G__64069;
chunk__63655_63971 = G__64070;
count__63656_63972 = G__64071;
i__63657_63973 = G__64072;
continue;
}
}
} else {
}
}
break;
}


var G__64073 = cljs.core.next(seq__63355__$1);
var G__64074 = null;
var G__64075 = (0);
var G__64076 = (0);
seq__63355 = G__64073;
chunk__63357 = G__64074;
count__63358 = G__64075;
i__63359 = G__64076;
continue;
} else {
var G__64077 = cljs.core.next(seq__63355__$1);
var G__64078 = null;
var G__64079 = (0);
var G__64080 = (0);
seq__63355 = G__64077;
chunk__63357 = G__64078;
count__63358 = G__64079;
i__63359 = G__64080;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__63768){
var map__63769 = p__63768;
var map__63769__$1 = cljs.core.__destructure_map(map__63769);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63769__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__63770){
var map__63771 = p__63770;
var map__63771__$1 = cljs.core.__destructure_map(map__63771);
var _ = map__63771__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63771__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__63772,done,error){
var map__63773 = p__63772;
var map__63773__$1 = cljs.core.__destructure_map(map__63773);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63773__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__63774,done,error){
var map__63775 = p__63774;
var map__63775__$1 = cljs.core.__destructure_map(map__63775);
var msg = map__63775__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63775__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63775__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63775__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__63776){
var map__63777 = p__63776;
var map__63777__$1 = cljs.core.__destructure_map(map__63777);
var src = map__63777__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63777__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__63778 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__63778) : done.call(null,G__63778));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__63779){
var map__63780 = p__63779;
var map__63780__$1 = cljs.core.__destructure_map(map__63780);
var msg__$1 = map__63780__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63780__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e63781){var ex = e63781;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__63782){
var map__63783 = p__63782;
var map__63783__$1 = cljs.core.__destructure_map(map__63783);
var env = map__63783__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63783__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__63784){
var map__63785 = p__63784;
var map__63785__$1 = cljs.core.__destructure_map(map__63785);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63785__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63785__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__63786){
var map__63787 = p__63786;
var map__63787__$1 = cljs.core.__destructure_map(map__63787);
var svc = map__63787__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63787__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
