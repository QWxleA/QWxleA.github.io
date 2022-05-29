goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49712 = arguments.length;
var i__5767__auto___49713 = (0);
while(true){
if((i__5767__auto___49713 < len__5766__auto___49712)){
args__5772__auto__.push((arguments[i__5767__auto___49713]));

var G__49714 = (i__5767__auto___49713 + (1));
i__5767__auto___49713 = G__49714;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49174){
var G__49175 = cljs.core.first(seq49174);
var seq49174__$1 = cljs.core.next(seq49174);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49175,seq49174__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49176 = cljs.core.seq(sources);
var chunk__49177 = null;
var count__49178 = (0);
var i__49179 = (0);
while(true){
if((i__49179 < count__49178)){
var map__49184 = chunk__49177.cljs$core$IIndexed$_nth$arity$2(null,i__49179);
var map__49184__$1 = cljs.core.__destructure_map(map__49184);
var src = map__49184__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49184__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49184__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49184__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49184__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49185){var e_49731 = e49185;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49731);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49731.message)].join('')));
}

var G__49732 = seq__49176;
var G__49733 = chunk__49177;
var G__49734 = count__49178;
var G__49736 = (i__49179 + (1));
seq__49176 = G__49732;
chunk__49177 = G__49733;
count__49178 = G__49734;
i__49179 = G__49736;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49176);
if(temp__5720__auto__){
var seq__49176__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49176__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49176__$1);
var G__49739 = cljs.core.chunk_rest(seq__49176__$1);
var G__49740 = c__5565__auto__;
var G__49741 = cljs.core.count(c__5565__auto__);
var G__49742 = (0);
seq__49176 = G__49739;
chunk__49177 = G__49740;
count__49178 = G__49741;
i__49179 = G__49742;
continue;
} else {
var map__49186 = cljs.core.first(seq__49176__$1);
var map__49186__$1 = cljs.core.__destructure_map(map__49186);
var src = map__49186__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49187){var e_49743 = e49187;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49743);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49743.message)].join('')));
}

var G__49746 = cljs.core.next(seq__49176__$1);
var G__49747 = null;
var G__49748 = (0);
var G__49749 = (0);
seq__49176 = G__49746;
chunk__49177 = G__49747;
count__49178 = G__49748;
i__49179 = G__49749;
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
var seq__49188 = cljs.core.seq(js_requires);
var chunk__49189 = null;
var count__49190 = (0);
var i__49191 = (0);
while(true){
if((i__49191 < count__49190)){
var js_ns = chunk__49189.cljs$core$IIndexed$_nth$arity$2(null,i__49191);
var require_str_49754 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49754);


var G__49755 = seq__49188;
var G__49756 = chunk__49189;
var G__49757 = count__49190;
var G__49758 = (i__49191 + (1));
seq__49188 = G__49755;
chunk__49189 = G__49756;
count__49190 = G__49757;
i__49191 = G__49758;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49188);
if(temp__5720__auto__){
var seq__49188__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49188__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49188__$1);
var G__49760 = cljs.core.chunk_rest(seq__49188__$1);
var G__49761 = c__5565__auto__;
var G__49762 = cljs.core.count(c__5565__auto__);
var G__49763 = (0);
seq__49188 = G__49760;
chunk__49189 = G__49761;
count__49190 = G__49762;
i__49191 = G__49763;
continue;
} else {
var js_ns = cljs.core.first(seq__49188__$1);
var require_str_49765 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49765);


var G__49766 = cljs.core.next(seq__49188__$1);
var G__49767 = null;
var G__49768 = (0);
var G__49769 = (0);
seq__49188 = G__49766;
chunk__49189 = G__49767;
count__49190 = G__49768;
i__49191 = G__49769;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__49193){
var map__49194 = p__49193;
var map__49194__$1 = cljs.core.__destructure_map(map__49194);
var msg = map__49194__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49194__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49194__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49195(s__49196){
return (new cljs.core.LazySeq(null,(function (){
var s__49196__$1 = s__49196;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__49196__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__49203 = cljs.core.first(xs__6277__auto__);
var map__49203__$1 = cljs.core.__destructure_map(map__49203);
var src = map__49203__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49203__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49203__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__49196__$1,map__49203,map__49203__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__49194,map__49194__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49195_$_iter__49197(s__49198){
return (new cljs.core.LazySeq(null,((function (s__49196__$1,map__49203,map__49203__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__49194,map__49194__$1,msg,info,reload_info){
return (function (){
var s__49198__$1 = s__49198;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__49198__$1);
if(temp__5720__auto____$1){
var s__49198__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49198__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49198__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49200 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49199 = (0);
while(true){
if((i__49199 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__49199);
cljs.core.chunk_append(b__49200,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49783 = (i__49199 + (1));
i__49199 = G__49783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49200),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49195_$_iter__49197(cljs.core.chunk_rest(s__49198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49200),null);
}
} else {
var warning = cljs.core.first(s__49198__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49195_$_iter__49197(cljs.core.rest(s__49198__$2)));
}
} else {
return null;
}
break;
}
});})(s__49196__$1,map__49203,map__49203__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__49194,map__49194__$1,msg,info,reload_info))
,null,null));
});})(s__49196__$1,map__49203,map__49203__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__49194,map__49194__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49195(cljs.core.rest(s__49196__$1)));
} else {
var G__49788 = cljs.core.rest(s__49196__$1);
s__49196__$1 = G__49788;
continue;
}
} else {
var G__49789 = cljs.core.rest(s__49196__$1);
s__49196__$1 = G__49789;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__49204_49790 = cljs.core.seq(warnings);
var chunk__49205_49791 = null;
var count__49206_49792 = (0);
var i__49207_49793 = (0);
while(true){
if((i__49207_49793 < count__49206_49792)){
var map__49212_49795 = chunk__49205_49791.cljs$core$IIndexed$_nth$arity$2(null,i__49207_49793);
var map__49212_49796__$1 = cljs.core.__destructure_map(map__49212_49795);
var w_49797 = map__49212_49796__$1;
var msg_49798__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49212_49796__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49212_49796__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49212_49796__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49212_49796__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49801)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49799),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49800),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49798__$1)].join(''));


var G__49805 = seq__49204_49790;
var G__49806 = chunk__49205_49791;
var G__49807 = count__49206_49792;
var G__49808 = (i__49207_49793 + (1));
seq__49204_49790 = G__49805;
chunk__49205_49791 = G__49806;
count__49206_49792 = G__49807;
i__49207_49793 = G__49808;
continue;
} else {
var temp__5720__auto___49810 = cljs.core.seq(seq__49204_49790);
if(temp__5720__auto___49810){
var seq__49204_49811__$1 = temp__5720__auto___49810;
if(cljs.core.chunked_seq_QMARK_(seq__49204_49811__$1)){
var c__5565__auto___49812 = cljs.core.chunk_first(seq__49204_49811__$1);
var G__49813 = cljs.core.chunk_rest(seq__49204_49811__$1);
var G__49814 = c__5565__auto___49812;
var G__49815 = cljs.core.count(c__5565__auto___49812);
var G__49816 = (0);
seq__49204_49790 = G__49813;
chunk__49205_49791 = G__49814;
count__49206_49792 = G__49815;
i__49207_49793 = G__49816;
continue;
} else {
var map__49214_49817 = cljs.core.first(seq__49204_49811__$1);
var map__49214_49818__$1 = cljs.core.__destructure_map(map__49214_49817);
var w_49819 = map__49214_49818__$1;
var msg_49820__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49214_49818__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49214_49818__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49214_49818__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49214_49818__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49823)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49821),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49822),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49820__$1)].join(''));


var G__49829 = cljs.core.next(seq__49204_49811__$1);
var G__49830 = null;
var G__49831 = (0);
var G__49832 = (0);
seq__49204_49790 = G__49829;
chunk__49205_49791 = G__49830;
count__49206_49792 = G__49831;
i__49207_49793 = G__49832;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__49192_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49192_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__49225){
var map__49226 = p__49225;
var map__49226__$1 = cljs.core.__destructure_map(map__49226);
var msg = map__49226__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49226__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49226__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__49227 = cljs.core.seq(updates);
var chunk__49229 = null;
var count__49230 = (0);
var i__49231 = (0);
while(true){
if((i__49231 < count__49230)){
var path = chunk__49229.cljs$core$IIndexed$_nth$arity$2(null,i__49231);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49433_49846 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49437_49847 = null;
var count__49438_49848 = (0);
var i__49439_49849 = (0);
while(true){
if((i__49439_49849 < count__49438_49848)){
var node_49851 = chunk__49437_49847.cljs$core$IIndexed$_nth$arity$2(null,i__49439_49849);
if(cljs.core.not(node_49851.shadow$old)){
var path_match_49852 = shadow.cljs.devtools.client.browser.match_paths(node_49851.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49852)){
var new_link_49853 = (function (){var G__49481 = node_49851.cloneNode(true);
G__49481.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49852),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49481;
})();
(node_49851.shadow$old = true);

(new_link_49853.onload = ((function (seq__49433_49846,chunk__49437_49847,count__49438_49848,i__49439_49849,seq__49227,chunk__49229,count__49230,i__49231,new_link_49853,path_match_49852,node_49851,path,map__49226,map__49226__$1,msg,updates,reload_info){
return (function (e){
var seq__49482_49855 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49484_49856 = null;
var count__49485_49857 = (0);
var i__49486_49858 = (0);
while(true){
if((i__49486_49858 < count__49485_49857)){
var map__49492_49860 = chunk__49484_49856.cljs$core$IIndexed$_nth$arity$2(null,i__49486_49858);
var map__49492_49861__$1 = cljs.core.__destructure_map(map__49492_49860);
var task_49862 = map__49492_49861__$1;
var fn_str_49863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49492_49861__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49492_49861__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49865 = goog.getObjectByName(fn_str_49863,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49864)].join(''));

(fn_obj_49865.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49865.cljs$core$IFn$_invoke$arity$2(path,new_link_49853) : fn_obj_49865.call(null,path,new_link_49853));


var G__49866 = seq__49482_49855;
var G__49867 = chunk__49484_49856;
var G__49868 = count__49485_49857;
var G__49869 = (i__49486_49858 + (1));
seq__49482_49855 = G__49866;
chunk__49484_49856 = G__49867;
count__49485_49857 = G__49868;
i__49486_49858 = G__49869;
continue;
} else {
var temp__5720__auto___49870 = cljs.core.seq(seq__49482_49855);
if(temp__5720__auto___49870){
var seq__49482_49871__$1 = temp__5720__auto___49870;
if(cljs.core.chunked_seq_QMARK_(seq__49482_49871__$1)){
var c__5565__auto___49872 = cljs.core.chunk_first(seq__49482_49871__$1);
var G__49873 = cljs.core.chunk_rest(seq__49482_49871__$1);
var G__49874 = c__5565__auto___49872;
var G__49875 = cljs.core.count(c__5565__auto___49872);
var G__49876 = (0);
seq__49482_49855 = G__49873;
chunk__49484_49856 = G__49874;
count__49485_49857 = G__49875;
i__49486_49858 = G__49876;
continue;
} else {
var map__49493_49877 = cljs.core.first(seq__49482_49871__$1);
var map__49493_49878__$1 = cljs.core.__destructure_map(map__49493_49877);
var task_49879 = map__49493_49878__$1;
var fn_str_49880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49493_49878__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49493_49878__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49882 = goog.getObjectByName(fn_str_49880,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49881)].join(''));

(fn_obj_49882.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49882.cljs$core$IFn$_invoke$arity$2(path,new_link_49853) : fn_obj_49882.call(null,path,new_link_49853));


var G__49884 = cljs.core.next(seq__49482_49871__$1);
var G__49885 = null;
var G__49886 = (0);
var G__49887 = (0);
seq__49482_49855 = G__49884;
chunk__49484_49856 = G__49885;
count__49485_49857 = G__49886;
i__49486_49858 = G__49887;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49851);
});})(seq__49433_49846,chunk__49437_49847,count__49438_49848,i__49439_49849,seq__49227,chunk__49229,count__49230,i__49231,new_link_49853,path_match_49852,node_49851,path,map__49226,map__49226__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49852], 0));

goog.dom.insertSiblingAfter(new_link_49853,node_49851);


var G__49888 = seq__49433_49846;
var G__49889 = chunk__49437_49847;
var G__49890 = count__49438_49848;
var G__49891 = (i__49439_49849 + (1));
seq__49433_49846 = G__49888;
chunk__49437_49847 = G__49889;
count__49438_49848 = G__49890;
i__49439_49849 = G__49891;
continue;
} else {
var G__49892 = seq__49433_49846;
var G__49893 = chunk__49437_49847;
var G__49894 = count__49438_49848;
var G__49895 = (i__49439_49849 + (1));
seq__49433_49846 = G__49892;
chunk__49437_49847 = G__49893;
count__49438_49848 = G__49894;
i__49439_49849 = G__49895;
continue;
}
} else {
var G__49896 = seq__49433_49846;
var G__49897 = chunk__49437_49847;
var G__49898 = count__49438_49848;
var G__49899 = (i__49439_49849 + (1));
seq__49433_49846 = G__49896;
chunk__49437_49847 = G__49897;
count__49438_49848 = G__49898;
i__49439_49849 = G__49899;
continue;
}
} else {
var temp__5720__auto___49900 = cljs.core.seq(seq__49433_49846);
if(temp__5720__auto___49900){
var seq__49433_49901__$1 = temp__5720__auto___49900;
if(cljs.core.chunked_seq_QMARK_(seq__49433_49901__$1)){
var c__5565__auto___49902 = cljs.core.chunk_first(seq__49433_49901__$1);
var G__49903 = cljs.core.chunk_rest(seq__49433_49901__$1);
var G__49904 = c__5565__auto___49902;
var G__49905 = cljs.core.count(c__5565__auto___49902);
var G__49906 = (0);
seq__49433_49846 = G__49903;
chunk__49437_49847 = G__49904;
count__49438_49848 = G__49905;
i__49439_49849 = G__49906;
continue;
} else {
var node_49907 = cljs.core.first(seq__49433_49901__$1);
if(cljs.core.not(node_49907.shadow$old)){
var path_match_49908 = shadow.cljs.devtools.client.browser.match_paths(node_49907.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49908)){
var new_link_49909 = (function (){var G__49494 = node_49907.cloneNode(true);
G__49494.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49908),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49494;
})();
(node_49907.shadow$old = true);

(new_link_49909.onload = ((function (seq__49433_49846,chunk__49437_49847,count__49438_49848,i__49439_49849,seq__49227,chunk__49229,count__49230,i__49231,new_link_49909,path_match_49908,node_49907,seq__49433_49901__$1,temp__5720__auto___49900,path,map__49226,map__49226__$1,msg,updates,reload_info){
return (function (e){
var seq__49495_49910 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49497_49911 = null;
var count__49498_49912 = (0);
var i__49499_49913 = (0);
while(true){
if((i__49499_49913 < count__49498_49912)){
var map__49503_49914 = chunk__49497_49911.cljs$core$IIndexed$_nth$arity$2(null,i__49499_49913);
var map__49503_49915__$1 = cljs.core.__destructure_map(map__49503_49914);
var task_49916 = map__49503_49915__$1;
var fn_str_49917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49503_49915__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49503_49915__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49919 = goog.getObjectByName(fn_str_49917,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49918)].join(''));

(fn_obj_49919.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49919.cljs$core$IFn$_invoke$arity$2(path,new_link_49909) : fn_obj_49919.call(null,path,new_link_49909));


var G__49920 = seq__49495_49910;
var G__49921 = chunk__49497_49911;
var G__49922 = count__49498_49912;
var G__49923 = (i__49499_49913 + (1));
seq__49495_49910 = G__49920;
chunk__49497_49911 = G__49921;
count__49498_49912 = G__49922;
i__49499_49913 = G__49923;
continue;
} else {
var temp__5720__auto___49924__$1 = cljs.core.seq(seq__49495_49910);
if(temp__5720__auto___49924__$1){
var seq__49495_49925__$1 = temp__5720__auto___49924__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49495_49925__$1)){
var c__5565__auto___49926 = cljs.core.chunk_first(seq__49495_49925__$1);
var G__49927 = cljs.core.chunk_rest(seq__49495_49925__$1);
var G__49928 = c__5565__auto___49926;
var G__49929 = cljs.core.count(c__5565__auto___49926);
var G__49930 = (0);
seq__49495_49910 = G__49927;
chunk__49497_49911 = G__49928;
count__49498_49912 = G__49929;
i__49499_49913 = G__49930;
continue;
} else {
var map__49504_49931 = cljs.core.first(seq__49495_49925__$1);
var map__49504_49932__$1 = cljs.core.__destructure_map(map__49504_49931);
var task_49933 = map__49504_49932__$1;
var fn_str_49934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49504_49932__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49504_49932__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49937 = goog.getObjectByName(fn_str_49934,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49935)].join(''));

(fn_obj_49937.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49937.cljs$core$IFn$_invoke$arity$2(path,new_link_49909) : fn_obj_49937.call(null,path,new_link_49909));


var G__49938 = cljs.core.next(seq__49495_49925__$1);
var G__49939 = null;
var G__49940 = (0);
var G__49941 = (0);
seq__49495_49910 = G__49938;
chunk__49497_49911 = G__49939;
count__49498_49912 = G__49940;
i__49499_49913 = G__49941;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49907);
});})(seq__49433_49846,chunk__49437_49847,count__49438_49848,i__49439_49849,seq__49227,chunk__49229,count__49230,i__49231,new_link_49909,path_match_49908,node_49907,seq__49433_49901__$1,temp__5720__auto___49900,path,map__49226,map__49226__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49908], 0));

goog.dom.insertSiblingAfter(new_link_49909,node_49907);


var G__49942 = cljs.core.next(seq__49433_49901__$1);
var G__49943 = null;
var G__49944 = (0);
var G__49945 = (0);
seq__49433_49846 = G__49942;
chunk__49437_49847 = G__49943;
count__49438_49848 = G__49944;
i__49439_49849 = G__49945;
continue;
} else {
var G__49947 = cljs.core.next(seq__49433_49901__$1);
var G__49948 = null;
var G__49950 = (0);
var G__49951 = (0);
seq__49433_49846 = G__49947;
chunk__49437_49847 = G__49948;
count__49438_49848 = G__49950;
i__49439_49849 = G__49951;
continue;
}
} else {
var G__49952 = cljs.core.next(seq__49433_49901__$1);
var G__49953 = null;
var G__49954 = (0);
var G__49955 = (0);
seq__49433_49846 = G__49952;
chunk__49437_49847 = G__49953;
count__49438_49848 = G__49954;
i__49439_49849 = G__49955;
continue;
}
}
} else {
}
}
break;
}


var G__49956 = seq__49227;
var G__49957 = chunk__49229;
var G__49958 = count__49230;
var G__49959 = (i__49231 + (1));
seq__49227 = G__49956;
chunk__49229 = G__49957;
count__49230 = G__49958;
i__49231 = G__49959;
continue;
} else {
var G__49960 = seq__49227;
var G__49961 = chunk__49229;
var G__49962 = count__49230;
var G__49963 = (i__49231 + (1));
seq__49227 = G__49960;
chunk__49229 = G__49961;
count__49230 = G__49962;
i__49231 = G__49963;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49227);
if(temp__5720__auto__){
var seq__49227__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49227__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49227__$1);
var G__49965 = cljs.core.chunk_rest(seq__49227__$1);
var G__49966 = c__5565__auto__;
var G__49967 = cljs.core.count(c__5565__auto__);
var G__49968 = (0);
seq__49227 = G__49965;
chunk__49229 = G__49966;
count__49230 = G__49967;
i__49231 = G__49968;
continue;
} else {
var path = cljs.core.first(seq__49227__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49505_49969 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49509_49970 = null;
var count__49510_49971 = (0);
var i__49511_49972 = (0);
while(true){
if((i__49511_49972 < count__49510_49971)){
var node_49973 = chunk__49509_49970.cljs$core$IIndexed$_nth$arity$2(null,i__49511_49972);
if(cljs.core.not(node_49973.shadow$old)){
var path_match_49974 = shadow.cljs.devtools.client.browser.match_paths(node_49973.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49974)){
var new_link_49975 = (function (){var G__49562 = node_49973.cloneNode(true);
G__49562.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49974),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49562;
})();
(node_49973.shadow$old = true);

(new_link_49975.onload = ((function (seq__49505_49969,chunk__49509_49970,count__49510_49971,i__49511_49972,seq__49227,chunk__49229,count__49230,i__49231,new_link_49975,path_match_49974,node_49973,path,seq__49227__$1,temp__5720__auto__,map__49226,map__49226__$1,msg,updates,reload_info){
return (function (e){
var seq__49566_49976 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49569_49977 = null;
var count__49570_49978 = (0);
var i__49571_49979 = (0);
while(true){
if((i__49571_49979 < count__49570_49978)){
var map__49593_49980 = chunk__49569_49977.cljs$core$IIndexed$_nth$arity$2(null,i__49571_49979);
var map__49593_49981__$1 = cljs.core.__destructure_map(map__49593_49980);
var task_49982 = map__49593_49981__$1;
var fn_str_49983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49593_49981__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49593_49981__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49985 = goog.getObjectByName(fn_str_49983,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49984)].join(''));

(fn_obj_49985.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49985.cljs$core$IFn$_invoke$arity$2(path,new_link_49975) : fn_obj_49985.call(null,path,new_link_49975));


var G__49986 = seq__49566_49976;
var G__49987 = chunk__49569_49977;
var G__49988 = count__49570_49978;
var G__49989 = (i__49571_49979 + (1));
seq__49566_49976 = G__49986;
chunk__49569_49977 = G__49987;
count__49570_49978 = G__49988;
i__49571_49979 = G__49989;
continue;
} else {
var temp__5720__auto___49990__$1 = cljs.core.seq(seq__49566_49976);
if(temp__5720__auto___49990__$1){
var seq__49566_49991__$1 = temp__5720__auto___49990__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49566_49991__$1)){
var c__5565__auto___49992 = cljs.core.chunk_first(seq__49566_49991__$1);
var G__49993 = cljs.core.chunk_rest(seq__49566_49991__$1);
var G__49994 = c__5565__auto___49992;
var G__49995 = cljs.core.count(c__5565__auto___49992);
var G__49996 = (0);
seq__49566_49976 = G__49993;
chunk__49569_49977 = G__49994;
count__49570_49978 = G__49995;
i__49571_49979 = G__49996;
continue;
} else {
var map__49596_49997 = cljs.core.first(seq__49566_49991__$1);
var map__49596_49998__$1 = cljs.core.__destructure_map(map__49596_49997);
var task_49999 = map__49596_49998__$1;
var fn_str_50000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49596_49998__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49596_49998__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50002 = goog.getObjectByName(fn_str_50000,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50001)].join(''));

(fn_obj_50002.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50002.cljs$core$IFn$_invoke$arity$2(path,new_link_49975) : fn_obj_50002.call(null,path,new_link_49975));


var G__50003 = cljs.core.next(seq__49566_49991__$1);
var G__50004 = null;
var G__50005 = (0);
var G__50006 = (0);
seq__49566_49976 = G__50003;
chunk__49569_49977 = G__50004;
count__49570_49978 = G__50005;
i__49571_49979 = G__50006;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49973);
});})(seq__49505_49969,chunk__49509_49970,count__49510_49971,i__49511_49972,seq__49227,chunk__49229,count__49230,i__49231,new_link_49975,path_match_49974,node_49973,path,seq__49227__$1,temp__5720__auto__,map__49226,map__49226__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49974], 0));

goog.dom.insertSiblingAfter(new_link_49975,node_49973);


var G__50007 = seq__49505_49969;
var G__50008 = chunk__49509_49970;
var G__50009 = count__49510_49971;
var G__50010 = (i__49511_49972 + (1));
seq__49505_49969 = G__50007;
chunk__49509_49970 = G__50008;
count__49510_49971 = G__50009;
i__49511_49972 = G__50010;
continue;
} else {
var G__50011 = seq__49505_49969;
var G__50012 = chunk__49509_49970;
var G__50013 = count__49510_49971;
var G__50014 = (i__49511_49972 + (1));
seq__49505_49969 = G__50011;
chunk__49509_49970 = G__50012;
count__49510_49971 = G__50013;
i__49511_49972 = G__50014;
continue;
}
} else {
var G__50015 = seq__49505_49969;
var G__50016 = chunk__49509_49970;
var G__50017 = count__49510_49971;
var G__50018 = (i__49511_49972 + (1));
seq__49505_49969 = G__50015;
chunk__49509_49970 = G__50016;
count__49510_49971 = G__50017;
i__49511_49972 = G__50018;
continue;
}
} else {
var temp__5720__auto___50020__$1 = cljs.core.seq(seq__49505_49969);
if(temp__5720__auto___50020__$1){
var seq__49505_50021__$1 = temp__5720__auto___50020__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49505_50021__$1)){
var c__5565__auto___50022 = cljs.core.chunk_first(seq__49505_50021__$1);
var G__50023 = cljs.core.chunk_rest(seq__49505_50021__$1);
var G__50024 = c__5565__auto___50022;
var G__50025 = cljs.core.count(c__5565__auto___50022);
var G__50026 = (0);
seq__49505_49969 = G__50023;
chunk__49509_49970 = G__50024;
count__49510_49971 = G__50025;
i__49511_49972 = G__50026;
continue;
} else {
var node_50027 = cljs.core.first(seq__49505_50021__$1);
if(cljs.core.not(node_50027.shadow$old)){
var path_match_50028 = shadow.cljs.devtools.client.browser.match_paths(node_50027.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50028)){
var new_link_50029 = (function (){var G__49601 = node_50027.cloneNode(true);
G__49601.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50028),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49601;
})();
(node_50027.shadow$old = true);

(new_link_50029.onload = ((function (seq__49505_49969,chunk__49509_49970,count__49510_49971,i__49511_49972,seq__49227,chunk__49229,count__49230,i__49231,new_link_50029,path_match_50028,node_50027,seq__49505_50021__$1,temp__5720__auto___50020__$1,path,seq__49227__$1,temp__5720__auto__,map__49226,map__49226__$1,msg,updates,reload_info){
return (function (e){
var seq__49605_50030 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49607_50031 = null;
var count__49608_50032 = (0);
var i__49609_50033 = (0);
while(true){
if((i__49609_50033 < count__49608_50032)){
var map__49617_50034 = chunk__49607_50031.cljs$core$IIndexed$_nth$arity$2(null,i__49609_50033);
var map__49617_50035__$1 = cljs.core.__destructure_map(map__49617_50034);
var task_50036 = map__49617_50035__$1;
var fn_str_50037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49617_50035__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49617_50035__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50039 = goog.getObjectByName(fn_str_50037,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50038)].join(''));

(fn_obj_50039.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50039.cljs$core$IFn$_invoke$arity$2(path,new_link_50029) : fn_obj_50039.call(null,path,new_link_50029));


var G__50040 = seq__49605_50030;
var G__50041 = chunk__49607_50031;
var G__50042 = count__49608_50032;
var G__50043 = (i__49609_50033 + (1));
seq__49605_50030 = G__50040;
chunk__49607_50031 = G__50041;
count__49608_50032 = G__50042;
i__49609_50033 = G__50043;
continue;
} else {
var temp__5720__auto___50044__$2 = cljs.core.seq(seq__49605_50030);
if(temp__5720__auto___50044__$2){
var seq__49605_50045__$1 = temp__5720__auto___50044__$2;
if(cljs.core.chunked_seq_QMARK_(seq__49605_50045__$1)){
var c__5565__auto___50046 = cljs.core.chunk_first(seq__49605_50045__$1);
var G__50047 = cljs.core.chunk_rest(seq__49605_50045__$1);
var G__50048 = c__5565__auto___50046;
var G__50049 = cljs.core.count(c__5565__auto___50046);
var G__50050 = (0);
seq__49605_50030 = G__50047;
chunk__49607_50031 = G__50048;
count__49608_50032 = G__50049;
i__49609_50033 = G__50050;
continue;
} else {
var map__49622_50051 = cljs.core.first(seq__49605_50045__$1);
var map__49622_50052__$1 = cljs.core.__destructure_map(map__49622_50051);
var task_50053 = map__49622_50052__$1;
var fn_str_50054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49622_50052__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49622_50052__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50056 = goog.getObjectByName(fn_str_50054,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50055)].join(''));

(fn_obj_50056.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50056.cljs$core$IFn$_invoke$arity$2(path,new_link_50029) : fn_obj_50056.call(null,path,new_link_50029));


var G__50057 = cljs.core.next(seq__49605_50045__$1);
var G__50058 = null;
var G__50059 = (0);
var G__50060 = (0);
seq__49605_50030 = G__50057;
chunk__49607_50031 = G__50058;
count__49608_50032 = G__50059;
i__49609_50033 = G__50060;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50027);
});})(seq__49505_49969,chunk__49509_49970,count__49510_49971,i__49511_49972,seq__49227,chunk__49229,count__49230,i__49231,new_link_50029,path_match_50028,node_50027,seq__49505_50021__$1,temp__5720__auto___50020__$1,path,seq__49227__$1,temp__5720__auto__,map__49226,map__49226__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50028], 0));

goog.dom.insertSiblingAfter(new_link_50029,node_50027);


var G__50062 = cljs.core.next(seq__49505_50021__$1);
var G__50063 = null;
var G__50064 = (0);
var G__50065 = (0);
seq__49505_49969 = G__50062;
chunk__49509_49970 = G__50063;
count__49510_49971 = G__50064;
i__49511_49972 = G__50065;
continue;
} else {
var G__50066 = cljs.core.next(seq__49505_50021__$1);
var G__50067 = null;
var G__50068 = (0);
var G__50069 = (0);
seq__49505_49969 = G__50066;
chunk__49509_49970 = G__50067;
count__49510_49971 = G__50068;
i__49511_49972 = G__50069;
continue;
}
} else {
var G__50070 = cljs.core.next(seq__49505_50021__$1);
var G__50071 = null;
var G__50072 = (0);
var G__50073 = (0);
seq__49505_49969 = G__50070;
chunk__49509_49970 = G__50071;
count__49510_49971 = G__50072;
i__49511_49972 = G__50073;
continue;
}
}
} else {
}
}
break;
}


var G__50074 = cljs.core.next(seq__49227__$1);
var G__50075 = null;
var G__50076 = (0);
var G__50077 = (0);
seq__49227 = G__50074;
chunk__49229 = G__50075;
count__49230 = G__50076;
i__49231 = G__50077;
continue;
} else {
var G__50078 = cljs.core.next(seq__49227__$1);
var G__50079 = null;
var G__50080 = (0);
var G__50081 = (0);
seq__49227 = G__50078;
chunk__49229 = G__50079;
count__49230 = G__50080;
i__49231 = G__50081;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__49639){
var map__49640 = p__49639;
var map__49640__$1 = cljs.core.__destructure_map(map__49640);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49640__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__49667){
var map__49668 = p__49667;
var map__49668__$1 = cljs.core.__destructure_map(map__49668);
var _ = map__49668__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__49672,done,error){
var map__49673 = p__49672;
var map__49673__$1 = cljs.core.__destructure_map(map__49673);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49673__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__49674,done,error){
var map__49675 = p__49674;
var map__49675__$1 = cljs.core.__destructure_map(map__49675);
var msg = map__49675__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49675__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49675__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49675__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49677){
var map__49678 = p__49677;
var map__49678__$1 = cljs.core.__destructure_map(map__49678);
var src = map__49678__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49678__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__49679 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__49679) : done.call(null,G__49679));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__49681){
var map__49682 = p__49681;
var map__49682__$1 = cljs.core.__destructure_map(map__49682);
var msg__$1 = map__49682__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49682__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e49683){var ex = e49683;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__49685){
var map__49686 = p__49685;
var map__49686__$1 = cljs.core.__destructure_map(map__49686);
var env = map__49686__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49686__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__49695){
var map__49696 = p__49695;
var map__49696__$1 = cljs.core.__destructure_map(map__49696);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49696__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49696__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__49697){
var map__49698 = p__49697;
var map__49698__$1 = cljs.core.__destructure_map(map__49698);
var svc = map__49698__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49698__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
