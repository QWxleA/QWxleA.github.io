goog.provide('cljs_http.client');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4251__auto__ = v;
if(cljs.core.truth_(and__4251__auto__)){
return (v > (0));
} else {
return and__4251__auto__;
}
})())){
return v;
} else {
return null;
}
});
cljs_http.client.acc_param = (function cljs_http$client$acc_param(o,v){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(o,v);
} else {
if((!((o == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if((!(clojure.string.blank_QMARK_(s)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__98899_SHARP_,p2__98897_SHARP_){
var vec__98921 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__98897_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98921,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98921,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__98899_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),cljs_http.client.acc_param,no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if((!(clojure.string.blank_QMARK_(url)))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params(cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [no.en.core.url_encode(cljs.core.name(k)),"=",no.en.core.url_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__98960_SHARP_){
return cljs_http.client.encode_val(k,p1__98960_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__98961){
var vec__98962 = p__98961;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98962,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98962,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__98967_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__98967_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__4251__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type","")));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__98970 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__98970) : client.call(null,G__98970));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__98973_SHARP_){
return cljs_http.client.decode_body(p1__98973_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99371 = arguments.length;
var i__4865__auto___99372 = (0);
while(true){
if((i__4865__auto___99372 < len__4864__auto___99371)){
args__4870__auto__.push((arguments[i__4865__auto___99372]));

var G__99374 = (i__4865__auto___99372 + (1));
i__4865__auto___99372 = G__99374;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__98976){
var vec__98977 = p__98976;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98977,(0),null);
return (function (request){
var temp__5718__auto__ = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var default_headers__$1 = temp__5718__auto__;
var G__98980 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__98980) : client.call(null,G__98980));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq98974){
var G__98975 = cljs.core.first(seq98974);
var seq98974__$1 = cljs.core.next(seq98974);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__98975,seq98974__$1);
}));

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99377 = arguments.length;
var i__4865__auto___99378 = (0);
while(true){
if((i__4865__auto___99378 < len__4864__auto___99377)){
args__4870__auto__.push((arguments[i__4865__auto___99378]));

var G__99379 = (i__4865__auto___99378 + (1));
i__4865__auto___99378 = G__99379;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__98987){
var vec__98988 = p__98987;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98988,(0),null);
return (function (request){
var temp__5718__auto__ = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var accept__$1 = temp__5718__auto__;
var G__98995 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__98995) : client.call(null,G__98995));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq98981){
var G__98982 = cljs.core.first(seq98981);
var seq98981__$1 = cljs.core.next(seq98981);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__98982,seq98981__$1);
}));

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99382 = arguments.length;
var i__4865__auto___99383 = (0);
while(true){
if((i__4865__auto___99383 < len__4864__auto___99382)){
args__4870__auto__.push((arguments[i__4865__auto___99383]));

var G__99384 = (i__4865__auto___99383 + (1));
i__4865__auto___99383 = G__99384;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__99007){
var vec__99009 = p__99007;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99009,(0),null);
return (function (request){
var temp__5718__auto__ = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var content_type__$1 = temp__5718__auto__;
var G__99013 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__99013) : client.call(null,G__99013));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq99000){
var G__99001 = cljs.core.first(seq99000);
var seq99000__$1 = cljs.core.next(seq99000);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99001,seq99000__$1);
}));

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
var map__99014 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__99014__$1 = cljs.core.__destructure_map(map__99014);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99014__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99014__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__99015 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__99015) : client.call(null,G__99015));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__99018 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__99018__$1 = cljs.core.__destructure_map(map__99018);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99018__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99018__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = (function (p1__99016_SHARP_){
return cljs_http.util.transit_decode(p1__99016_SHARP_,decoding,decoding_opts);
});
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__99017_SHARP_){
return cljs_http.client.decode_body(p1__99017_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__99019 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode(params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__99019) : client.call(null,G__99019));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__99020_SHARP_){
return cljs_http.client.decode_body(p1__99020_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__99021){
var map__99022 = p__99021;
var map__99022__$1 = cljs.core.__destructure_map(map__99022);
var req = map__99022__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99022__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
var G__99023 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__99023) : client.call(null,G__99023));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__99028){
var map__99029 = p__99028;
var map__99029__$1 = cljs.core.__destructure_map(map__99029);
var request = map__99029__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99029__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99029__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99029__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__4251__auto__ = form_params;
if(cljs.core.truth_(and__4251__auto__)){
var fexpr__99038 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null);
return (fexpr__99038.cljs$core$IFn$_invoke$arity$1 ? fexpr__99038.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__99038.call(null,request_method));
} else {
return and__4251__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__99046 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string(form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__99046) : client.call(null,G__99046));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__99061_99455 = cljs.core.seq(params);
var chunk__99062_99456 = null;
var count__99063_99457 = (0);
var i__99064_99458 = (0);
while(true){
if((i__99064_99458 < count__99063_99457)){
var vec__99166_99460 = chunk__99062_99456.cljs$core$IIndexed$_nth$arity$2(null,i__99064_99458);
var k_99461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99166_99460,(0),null);
var v_99462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99166_99460,(1),null);
if(cljs.core.coll_QMARK_(v_99462)){
form_data.append(cljs.core.name(k_99461),cljs.core.first(v_99462),cljs.core.second(v_99462));
} else {
form_data.append(cljs.core.name(k_99461),v_99462);
}


var G__99463 = seq__99061_99455;
var G__99464 = chunk__99062_99456;
var G__99465 = count__99063_99457;
var G__99466 = (i__99064_99458 + (1));
seq__99061_99455 = G__99463;
chunk__99062_99456 = G__99464;
count__99063_99457 = G__99465;
i__99064_99458 = G__99466;
continue;
} else {
var temp__5720__auto___99467 = cljs.core.seq(seq__99061_99455);
if(temp__5720__auto___99467){
var seq__99061_99468__$1 = temp__5720__auto___99467;
if(cljs.core.chunked_seq_QMARK_(seq__99061_99468__$1)){
var c__4679__auto___99470 = cljs.core.chunk_first(seq__99061_99468__$1);
var G__99471 = cljs.core.chunk_rest(seq__99061_99468__$1);
var G__99472 = c__4679__auto___99470;
var G__99473 = cljs.core.count(c__4679__auto___99470);
var G__99474 = (0);
seq__99061_99455 = G__99471;
chunk__99062_99456 = G__99472;
count__99063_99457 = G__99473;
i__99064_99458 = G__99474;
continue;
} else {
var vec__99181_99476 = cljs.core.first(seq__99061_99468__$1);
var k_99477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99181_99476,(0),null);
var v_99478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99181_99476,(1),null);
if(cljs.core.coll_QMARK_(v_99478)){
form_data.append(cljs.core.name(k_99477),cljs.core.first(v_99478),cljs.core.second(v_99478));
} else {
form_data.append(cljs.core.name(k_99477),v_99478);
}


var G__99481 = cljs.core.next(seq__99061_99468__$1);
var G__99482 = null;
var G__99483 = (0);
var G__99484 = (0);
seq__99061_99455 = G__99481;
chunk__99062_99456 = G__99482;
count__99063_99457 = G__99483;
i__99064_99458 = G__99484;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__99225){
var map__99226 = p__99225;
var map__99226__$1 = cljs.core.__destructure_map(map__99226);
var request = map__99226__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99226__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99226__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4251__auto__ = multipart_params;
if(cljs.core.truth_(and__4251__auto__)){
var fexpr__99228 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null);
return (fexpr__99228.cljs$core$IFn$_invoke$arity$1 ? fexpr__99228.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__99228.call(null,request_method));
} else {
return and__4251__auto__;
}
})())){
var G__99230 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__99230) : client.call(null,G__99230));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5718__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var G__99232 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__99232) : client.call(null,G__99232));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__99233_SHARP_){
var G__99234 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__99233_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__99234) : client.call(null,G__99234));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__99236){
var map__99237 = p__99236;
var map__99237__$1 = cljs.core.__destructure_map(map__99237);
var req = map__99237__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99237__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5718__auto__ = cljs_http.client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5718__auto__)){
var spec = temp__5718__auto__;
var G__99238 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),(function (p1__99235_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__99235_SHARP_,query_params], 0));
}));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__99238) : client.call(null,G__99238));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99498 = arguments.length;
var i__4865__auto___99499 = (0);
while(true){
if((i__4865__auto___99499 < len__4864__auto___99498)){
args__4870__auto__.push((arguments[i__4865__auto___99499]));

var G__99500 = (i__4865__auto___99499 + (1));
i__4865__auto___99499 = G__99500;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__99244){
var vec__99245 = p__99244;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99245,(0),null);
return (function (req){
var credentials__$1 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return credentials;
}
})();
if((!(cljs.core.empty_QMARK_(credentials__$1)))){
var G__99248 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__99248) : client.call(null,G__99248));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
}));

(cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq99240){
var G__99241 = cljs.core.first(seq99240);
var seq99240__$1 = cljs.core.next(seq99240);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99241,seq99240__$1);
}));

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5718__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5718__auto__)){
var oauth_token = temp__5718__auto__;
var G__99249 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__99249) : client.call(null,G__99249));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var custom_channel = temp__5718__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99508 = arguments.length;
var i__4865__auto___99509 = (0);
while(true){
if((i__4865__auto___99509 < len__4864__auto___99508)){
args__4870__auto__.push((arguments[i__4865__auto___99509]));

var G__99510 = (i__4865__auto___99509 + (1));
i__4865__auto___99509 = G__99510;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__99272){
var vec__99273 = p__99272;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99273,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.delete$.cljs$lang$applyTo = (function (seq99266){
var G__99267 = cljs.core.first(seq99266);
var seq99266__$1 = cljs.core.next(seq99266);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99267,seq99266__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99529 = arguments.length;
var i__4865__auto___99530 = (0);
while(true){
if((i__4865__auto___99530 < len__4864__auto___99529)){
args__4870__auto__.push((arguments[i__4865__auto___99530]));

var G__99531 = (i__4865__auto___99530 + (1));
i__4865__auto___99530 = G__99531;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__99281){
var vec__99282 = p__99281;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99282,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.get.cljs$lang$applyTo = (function (seq99278){
var G__99279 = cljs.core.first(seq99278);
var seq99278__$1 = cljs.core.next(seq99278);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99279,seq99278__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99535 = arguments.length;
var i__4865__auto___99536 = (0);
while(true){
if((i__4865__auto___99536 < len__4864__auto___99535)){
args__4870__auto__.push((arguments[i__4865__auto___99536]));

var G__99538 = (i__4865__auto___99536 + (1));
i__4865__auto___99536 = G__99538;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__99295){
var vec__99296 = p__99295;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99296,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.head.cljs$lang$applyTo = (function (seq99287){
var G__99288 = cljs.core.first(seq99287);
var seq99287__$1 = cljs.core.next(seq99287);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99288,seq99287__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99543 = arguments.length;
var i__4865__auto___99545 = (0);
while(true){
if((i__4865__auto___99545 < len__4864__auto___99543)){
args__4870__auto__.push((arguments[i__4865__auto___99545]));

var G__99549 = (i__4865__auto___99545 + (1));
i__4865__auto___99545 = G__99549;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__99308){
var vec__99314 = p__99308;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99314,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq99302){
var G__99303 = cljs.core.first(seq99302);
var seq99302__$1 = cljs.core.next(seq99302);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99303,seq99302__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99552 = arguments.length;
var i__4865__auto___99553 = (0);
while(true){
if((i__4865__auto___99553 < len__4864__auto___99552)){
args__4870__auto__.push((arguments[i__4865__auto___99553]));

var G__99556 = (i__4865__auto___99553 + (1));
i__4865__auto___99553 = G__99556;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__99324){
var vec__99325 = p__99324;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99325,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.move.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.move.cljs$lang$applyTo = (function (seq99320){
var G__99321 = cljs.core.first(seq99320);
var seq99320__$1 = cljs.core.next(seq99320);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99321,seq99320__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99560 = arguments.length;
var i__4865__auto___99562 = (0);
while(true){
if((i__4865__auto___99562 < len__4864__auto___99560)){
args__4870__auto__.push((arguments[i__4865__auto___99562]));

var G__99563 = (i__4865__auto___99562 + (1));
i__4865__auto___99562 = G__99563;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__99331){
var vec__99332 = p__99331;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99332,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.options.cljs$lang$applyTo = (function (seq99329){
var G__99330 = cljs.core.first(seq99329);
var seq99329__$1 = cljs.core.next(seq99329);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99330,seq99329__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99565 = arguments.length;
var i__4865__auto___99566 = (0);
while(true){
if((i__4865__auto___99566 < len__4864__auto___99565)){
args__4870__auto__.push((arguments[i__4865__auto___99566]));

var G__99567 = (i__4865__auto___99566 + (1));
i__4865__auto___99566 = G__99567;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__99337){
var vec__99338 = p__99337;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99338,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.patch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.patch.cljs$lang$applyTo = (function (seq99335){
var G__99336 = cljs.core.first(seq99335);
var seq99335__$1 = cljs.core.next(seq99335);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99336,seq99335__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99583 = arguments.length;
var i__4865__auto___99592 = (0);
while(true){
if((i__4865__auto___99592 < len__4864__auto___99583)){
args__4870__auto__.push((arguments[i__4865__auto___99592]));

var G__99602 = (i__4865__auto___99592 + (1));
i__4865__auto___99592 = G__99602;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__99343){
var vec__99344 = p__99343;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99344,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.post.cljs$lang$applyTo = (function (seq99341){
var G__99342 = cljs.core.first(seq99341);
var seq99341__$1 = cljs.core.next(seq99341);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99342,seq99341__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__4870__auto__ = [];
var len__4864__auto___99607 = arguments.length;
var i__4865__auto___99608 = (0);
while(true){
if((i__4865__auto___99608 < len__4864__auto___99607)){
args__4870__auto__.push((arguments[i__4865__auto___99608]));

var G__99611 = (i__4865__auto___99608 + (1));
i__4865__auto___99608 = G__99611;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__99349){
var vec__99350 = p__99349;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99350,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.put.cljs$lang$applyTo = (function (seq99347){
var G__99348 = cljs.core.first(seq99347);
var seq99347__$1 = cljs.core.next(seq99347);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99348,seq99347__$1);
}));


//# sourceMappingURL=cljs_http.client.js.map
