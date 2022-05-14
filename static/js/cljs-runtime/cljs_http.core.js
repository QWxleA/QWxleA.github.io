goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = (function (){var fexpr__98638 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__98638.cljs$core$IFn$_invoke$arity$1 ? fexpr__98638.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__98638.call(null,channel));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__98656){
var vec__98657 = p__98656;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98657,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98657,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__98665 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__98665)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__98665)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__98665)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__98665)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__98665)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__98665)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__98665)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__98692){
var map__98697 = p__98692;
var map__98697__$1 = cljs.core.__destructure_map(map__98697);
var request = map__98697__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98697__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98697__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98697__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__98705 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__98705,default_headers);

cljs_http.core.apply_response_type_BANG_(G__98705,response_type);

G__98705.setTimeoutInterval(timeout);

G__98705.setWithCredentials(send_credentials);

return G__98705;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__98710){
var map__98711 = p__98710;
var map__98711__$1 = cljs.core.__destructure_map(map__98711);
var request = map__98711__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98711__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98711__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98711__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98711__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98711__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98711__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4253__auto__ = request_method;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__98712 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__98712) : cljs_http.core.error_kw.call(null,G__98712));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_98873 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__98715_98875 = xhr;
G__98715_98875.setProgressEventsEnabled(true);

G__98715_98875.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_98873,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__98715_98875.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_98873,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__48598__auto___98876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_98727){
var state_val_98728 = (state_98727[(1)]);
if((state_val_98728 === (1))){
var state_98727__$1 = state_98727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_98727__$1,(2),cancel);
} else {
if((state_val_98728 === (2))){
var inst_98718 = (state_98727[(2)]);
var inst_98719 = xhr.isComplete();
var inst_98720 = cljs.core.not(inst_98719);
var state_98727__$1 = (function (){var statearr_98798 = state_98727;
(statearr_98798[(7)] = inst_98718);

return statearr_98798;
})();
if(inst_98720){
var statearr_98799_98877 = state_98727__$1;
(statearr_98799_98877[(1)] = (3));

} else {
var statearr_98800_98878 = state_98727__$1;
(statearr_98800_98878[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98728 === (3))){
var inst_98722 = xhr.abort();
var state_98727__$1 = state_98727;
var statearr_98801_98879 = state_98727__$1;
(statearr_98801_98879[(2)] = inst_98722);

(statearr_98801_98879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98728 === (4))){
var state_98727__$1 = state_98727;
var statearr_98803_98880 = state_98727__$1;
(statearr_98803_98880[(2)] = null);

(statearr_98803_98880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98728 === (5))){
var inst_98725 = (state_98727[(2)]);
var state_98727__$1 = state_98727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_98727__$1,inst_98725);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__48470__auto__ = null;
var cljs_http$core$xhr_$_state_machine__48470__auto____0 = (function (){
var statearr_98808 = [null,null,null,null,null,null,null,null];
(statearr_98808[(0)] = cljs_http$core$xhr_$_state_machine__48470__auto__);

(statearr_98808[(1)] = (1));

return statearr_98808;
});
var cljs_http$core$xhr_$_state_machine__48470__auto____1 = (function (state_98727){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_98727);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e98813){var ex__48473__auto__ = e98813;
var statearr_98817_98881 = state_98727;
(statearr_98817_98881[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_98727[(4)]))){
var statearr_98818_98882 = state_98727;
(statearr_98818_98882[(1)] = cljs.core.first((state_98727[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98883 = state_98727;
state_98727 = G__98883;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__48470__auto__ = function(state_98727){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__48470__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__48470__auto____1.call(this,state_98727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__48470__auto____0;
cljs_http$core$xhr_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__48470__auto____1;
return cljs_http$core$xhr_$_state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_98822 = f__48599__auto__();
(statearr_98822[(6)] = c__48598__auto___98876);

return statearr_98822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__98831){
var map__98832 = p__98831;
var map__98832__$1 = cljs.core.__destructure_map(map__98832);
var request = map__98832__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98832__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98832__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98832__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__98832__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_98884 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_98884], null));

if(cljs.core.truth_(cancel)){
var c__48598__auto___98888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_98839){
var state_val_98840 = (state_98839[(1)]);
if((state_val_98840 === (1))){
var state_98839__$1 = state_98839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_98839__$1,(2),cancel);
} else {
if((state_val_98840 === (2))){
var inst_98836 = (state_98839[(2)]);
var inst_98837 = jsonp.cancel(req_98884);
var state_98839__$1 = (function (){var statearr_98841 = state_98839;
(statearr_98841[(7)] = inst_98836);

return statearr_98841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_98839__$1,inst_98837);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__48470__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__48470__auto____0 = (function (){
var statearr_98842 = [null,null,null,null,null,null,null,null];
(statearr_98842[(0)] = cljs_http$core$jsonp_$_state_machine__48470__auto__);

(statearr_98842[(1)] = (1));

return statearr_98842;
});
var cljs_http$core$jsonp_$_state_machine__48470__auto____1 = (function (state_98839){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_98839);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e98843){var ex__48473__auto__ = e98843;
var statearr_98844_98889 = state_98839;
(statearr_98844_98889[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_98839[(4)]))){
var statearr_98845_98890 = state_98839;
(statearr_98845_98890[(1)] = cljs.core.first((state_98839[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98891 = state_98839;
state_98839 = G__98891;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__48470__auto__ = function(state_98839){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__48470__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__48470__auto____1.call(this,state_98839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__48470__auto____0;
cljs_http$core$jsonp_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__48470__auto____1;
return cljs_http$core$jsonp_$_state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_98846 = f__48599__auto__();
(statearr_98846[(6)] = c__48598__auto___98888);

return statearr_98846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__98848){
var map__98852 = p__98848;
var map__98852__$1 = cljs.core.__destructure_map(map__98852);
var request = map__98852__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98852__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
