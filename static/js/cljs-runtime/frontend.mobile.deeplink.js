goog.provide('frontend.mobile.deeplink');
frontend.mobile.deeplink._STAR_link_to_another_graph = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.mobile.deeplink.deeplink = (function frontend$mobile$deeplink$deeplink(url){
var parsed_url = (new URL(url));
var hostname = parsed_url.hostname;
var pathname = parsed_url.pathname;
var search_params = parsed_url.searchParams;
var current_repo_url = frontend.state.get_current_repo();
var get_graph_name_fn = (function (p1__60742_SHARP_){
return clojure.string.lower_case(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.text.get_graph_name_from_path(p1__60742_SHARP_),"/")));
});
var current_graph_name = get_graph_name_fn(current_repo_url);
var repos = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60743_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__60743_SHARP_),frontend.config.local_repo);
}),frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null))));
var repo_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60744_SHARP_){
return get_graph_name_fn(p1__60744_SHARP_);
}),repos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hostname,"auth-callback")){
var temp__5720__auto__ = search_params.get("code");
if(cljs.core.truth_(temp__5720__auto__)){
var code = temp__5720__auto__;
return frontend.handler.user.login_callback(code);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hostname,"graph")){
var graph_name = (function (){var G__60752 = pathname;
var G__60752__$1 = (((G__60752 == null))?null:clojure.string.replace(G__60752,"/",""));
if((G__60752__$1 == null)){
return null;
} else {
return clojure.string.lower_case(G__60752__$1);
}
})();
var vec__60749 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60745_SHARP_){
return search_params.get(p1__60745_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page","block-id"], null));
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60749,(0),null);
var block_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60749,(1),null);
if(clojure.string.blank_QMARK_(graph_name)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_name,current_graph_name)){
} else {
var graph_idx_60762 = repo_names.indexOf(graph_name);
var graph_url_60763 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(graph_idx_60762,(-1)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(repos,graph_idx_60762):null);
if(cljs.core.truth_(graph_url_60763)){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),graph_url_60763], null));

cljs.core.reset_BANG_(frontend.mobile.deeplink._STAR_link_to_another_graph,true);
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(["Open graph failed. Graph `",graph_name,"` doesn't exist."].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);
}
}

if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_name,current_graph_name);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.deref(frontend.mobile.deeplink._STAR_link_to_another_graph);
}
})())){
return setTimeout((function (){
if(cljs.core.truth_(page_name)){
var db_page_name_60768 = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page_name);
frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$1(db_page_name_60768);
} else {
if(cljs.core.truth_(block_uuid)){
if(cljs.core.truth_(frontend.db.model.get_block_by_uuid(block_uuid))){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(block_uuid);
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(["Open link failed. Block-id `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid),"` doesn't exist in the graph."].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);
}
} else {

}
}

return cljs.core.reset_BANG_(frontend.mobile.deeplink._STAR_link_to_another_graph,false);
}),(cljs.core.truth_(cljs.core.deref(frontend.mobile.deeplink._STAR_link_to_another_graph))?(1000):(0)));
} else {
return null;
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hostname,"shared")){
var result = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),search_params.get(key)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title","url","type"], null)));
return frontend.mobile.intent.handle_result(result);
} else {
return null;

}
}
}
});

//# sourceMappingURL=frontend.mobile.deeplink.js.map
