goog.provide('frontend.extensions.video.youtube');
goog.scope(function(){
  frontend.extensions.video.youtube.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.extensions.video.youtube.load_yt_script = (function frontend$extensions$video$youtube$load_yt_script(){
console.log("load yt script");

var tag = document.createElement("script");
var first_script_tag = cljs.core.first(document.getElementsByTagName("script"));
var parent_node = first_script_tag.parentNode;
(tag.src = "https://www.youtube.com/iframe_api");

return parent_node.insertBefore(tag,first_script_tag);
});
frontend.extensions.video.youtube.load_youtube_api = (function frontend$extensions$video$youtube$load_youtube_api(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(window.YT)){
cljs.core.async.close_BANG_(c);
} else {
(window.onYouTubeIframeAPIReady = (function (){
return cljs.core.async.close_BANG_(c);
}));

frontend.extensions.video.youtube.load_yt_script();
}

return c;
});
frontend.extensions.video.youtube.register_player = (function frontend$extensions$video$youtube$register_player(state){
try{var id = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var node = rum.core.dom_node(state);
if(cljs.core.truth_(node)){
var player = (new window.YT.Player(node,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, ["onReady",(function (_e){
return console.log(id," ready");
})], null)], null))));
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("youtube","players","youtube/players",1844913740)], null),(function (players){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(players,id,player);
}));
} else {
return null;
}
}catch (e95812){var _e = e95812;
return null;
}});
frontend.extensions.video.youtube.youtube_video = rum.core.lazy_build(rum.core.build_defcs,(function (state,id){
var width = (function (){var x__4339__auto__ = (frontend.util.get_width() - (96));
var y__4340__auto__ = (560);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var height = ((width * ((315) / (560))) | (0));
return daiquiri.core.create_element("iframe",{'id':["youtube-player-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),'allowFullScreen':"allowfullscreen",'allow':"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope",'frameBorder':"0",'src':["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"?enablejsapi=1"].join(''),'height':height,'width':width},[]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.extensions.video.youtube","player","frontend.extensions.video.youtube/player",-814163162)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var c__48598__auto___95887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_95834){
var state_val_95835 = (state_95834[(1)]);
if((state_val_95835 === (1))){
var inst_95829 = frontend.extensions.video.youtube.load_youtube_api();
var state_95834__$1 = state_95834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95834__$1,(2),inst_95829);
} else {
if((state_val_95835 === (2))){
var inst_95831 = (state_95834[(2)]);
var inst_95832 = frontend.extensions.video.youtube.register_player(state);
var state_95834__$1 = (function (){var statearr_95842 = state_95834;
(statearr_95842[(7)] = inst_95831);

return statearr_95842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_95834__$1,inst_95832);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$video$youtube$state_machine__48470__auto__ = null;
var frontend$extensions$video$youtube$state_machine__48470__auto____0 = (function (){
var statearr_95846 = [null,null,null,null,null,null,null,null];
(statearr_95846[(0)] = frontend$extensions$video$youtube$state_machine__48470__auto__);

(statearr_95846[(1)] = (1));

return statearr_95846;
});
var frontend$extensions$video$youtube$state_machine__48470__auto____1 = (function (state_95834){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_95834);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e95847){var ex__48473__auto__ = e95847;
var statearr_95848_95890 = state_95834;
(statearr_95848_95890[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_95834[(4)]))){
var statearr_95849_95891 = state_95834;
(statearr_95849_95891[(1)] = cljs.core.first((state_95834[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95892 = state_95834;
state_95834 = G__95892;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
frontend$extensions$video$youtube$state_machine__48470__auto__ = function(state_95834){
switch(arguments.length){
case 0:
return frontend$extensions$video$youtube$state_machine__48470__auto____0.call(this);
case 1:
return frontend$extensions$video$youtube$state_machine__48470__auto____1.call(this,state_95834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$video$youtube$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$video$youtube$state_machine__48470__auto____0;
frontend$extensions$video$youtube$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$video$youtube$state_machine__48470__auto____1;
return frontend$extensions$video$youtube$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_95850 = f__48599__auto__();
(statearr_95850[(6)] = c__48598__auto___95887);

return statearr_95850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));


return state;
})], null)], null),"frontend.extensions.video.youtube/youtube-video");
frontend.extensions.video.youtube.seconds__GT_display = (function frontend$extensions$video$youtube$seconds__GT_display(seconds){
var seconds__$1 = (seconds | (0));
var hours = cljs.core.quot(seconds__$1,(3600));
var minutes = cljs.core.mod(cljs.core.quot(seconds__$1,(60)),(60));
var seconds__$2 = cljs.core.mod(seconds__$1,(60));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,v){
if((((idx > (0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"00")))){
return v;
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
if((v < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hours,minutes,seconds__$2], null))));
});
frontend.extensions.video.youtube.dom_after_video_node_QMARK_ = (function frontend$extensions$video$youtube$dom_after_video_node_QMARK_(video_node,target){
return (!(((video_node.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING) === (0))));
});
frontend.extensions.video.youtube.get_player = (function frontend$extensions$video$youtube$get_player(target){
var temp__5720__auto__ = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__95855_SHARP_){
return frontend.extensions.video.youtube.dom_after_video_node_QMARK_(p1__95855_SHARP_,target);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (node){
var src = frontend.extensions.video.youtube.goog$module$goog$object.get(node,"src","");
return clojure.string.includes_QMARK_(src,"youtube.com");
}),document.getElementsByTagName("iframe"))));
if(cljs.core.truth_(temp__5720__auto__)){
var iframe = temp__5720__auto__;
var id = frontend.extensions.video.youtube.goog$module$goog$object.get(iframe,"id","");
var id__$1 = clojure.string.replace_first(id,/youtube-player-/,"");
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("youtube","players","youtube/players",1844913740)),id__$1);
} else {
return null;
}
});
frontend.extensions.video.youtube.timestamp = rum.core.lazy_build(rum.core.build_defc,(function (seconds){
return daiquiri.core.create_element("a",{'onClick':(function (e){
frontend.util.stop(e);

var temp__5720__auto__ = frontend.extensions.video.youtube.get_player(e.target);
if(cljs.core.truth_(temp__5720__auto__)){
var player = temp__5720__auto__;
return player.seekTo(seconds,true);
} else {
return null;
}
}),'className':"svg-small youtube-timestamp"},[daiquiri.interpreter.interpret(frontend.components.svg.clock),frontend.extensions.video.youtube.seconds__GT_display(seconds)]);
}),null,"frontend.extensions.video.youtube/timestamp");
frontend.extensions.video.youtube.gen_youtube_ts_macro = (function frontend$extensions$video$youtube$gen_youtube_ts_macro(){
var temp__5718__auto__ = frontend.extensions.video.youtube.get_player(frontend.state.get_input());
if(cljs.core.truth_(temp__5718__auto__)){
var player = temp__5718__auto__;
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{youtube-timestamp %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Math.floor(player.getCurrentTime())], 0));
} else {
if(cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Please embed a YouTube video at first, then use this icon.\nRemember: You can paste a raw YouTube url as embedded video on mobile.",new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return null;
} else {
return null;
}
}
});
frontend.extensions.video.youtube.parse_timestamp = (function frontend$extensions$video$youtube$parse_timestamp(timestamp){
var reg = /^(?:(\d+):)?([0-5]\d):([0-5]\d)$/;
var reg_number = /^\d+$/;
var timestamp__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(timestamp);
var total_seconds = frontend.util.safe_parse_int(cljs.core.re_matches(reg_number,timestamp__$1));
var vec__95870 = cljs.core.re_matches(reg,timestamp__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95870,(0),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95870,(1),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95870,(2),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95870,(3),null);
var vec__95873 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_parse_int,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hours,minutes,seconds], null));
var hours__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95873,(0),null);
var minutes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95873,(1),null);
var seconds__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95873,(2),null);
if(cljs.core.truth_(total_seconds)){
return total_seconds;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = minutes__$1;
if(cljs.core.truth_(and__4251__auto__)){
return seconds__$1;
} else {
return and__4251__auto__;
}
})())){
return ((((3600) * hours__$1) + ((60) * minutes__$1)) + seconds__$1);
} else {
return null;

}
}
});

//# sourceMappingURL=frontend.extensions.video.youtube.js.map
