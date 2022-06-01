goog.provide('frontend.components.search');
frontend.components.search.highlight_exact_query = (function frontend$components$search$highlight_exact_query(content,q){
if(((clojure.string.blank_QMARK_(content)) || (clojure.string.blank_QMARK_(q)))){
return content;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = content;
if(cljs.core.truth_(and__5041__auto__)){
return q;
} else {
return and__5041__auto__;
}
})())){
var q_words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(q,/ /);
var lc_content = frontend.util.search_normalize(content);
var lc_q = frontend.util.search_normalize(q);
if(((clojure.string.includes_QMARK_(lc_content,lc_q)) && (cljs.core.not(frontend.util.safe_re_find(/ /,q))))){
var i = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(lc_content,lc_q);
var vec__60187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,(i + cljs.core.count(q)))], null);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60187,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60187,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((clojure.string.blank_QMARK_(before))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),before], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark.p-0.rounded-none","mark.p-0.rounded-none",-1487431150),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,i,(i + cljs.core.count(q)))], null),((clojure.string.blank_QMARK_(after))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),after], null))], null);
} else {
var elements = (function (){var words = q_words;
var content__$1 = content;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.seq(words);
if(and__5041__auto__){
return content__$1;
} else {
return and__5041__auto__;
}
})())){
var word = cljs.core.first(words);
var lc_word = frontend.util.search_normalize(word);
var lc_content__$1 = frontend.util.search_normalize(content__$1);
var temp__5718__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(lc_content__$1,lc_word);
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
var G__60344 = cljs.core.rest(words);
var G__60345 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content__$1,(i + cljs.core.count(word)));
var G__60346 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content__$1,(0),i)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark.p-0.rounded-none","mark.p-0.rounded-none",-1487431150),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content__$1,i,(i + cljs.core.count(word)))], null)], null)));
words = G__60344;
content__$1 = G__60345;
result = G__60346;
continue;
} else {
var G__60347 = null;
var G__60348 = content__$1;
var G__60349 = result;
words = G__60347;
content__$1 = G__60348;
result = G__60349;
continue;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),content__$1], null));
}
break;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"m-0"], null),elements], null);
}
} else {
return null;
}
}
});
frontend.components.search.search_result_item = rum.core.lazy_build(rum.core.build_defc,(function (type,content){
return daiquiri.core.create_element("div",{'className':"text-sm font-medium flex items-baseline"},[daiquiri.core.create_element("div",{'title':type,'className':"text-xs rounded border mr-2 px-1"},[daiquiri.interpreter.interpret(cljs.core.get.cljs$core$IFn$_invoke$arity$2(type,(0)))]),daiquiri.interpreter.interpret(content)]);
}),null,"frontend.components.search/search-result-item");
frontend.components.search.block_search_result_item = rum.core.lazy_build(rum.core.build_defc,(function (repo,uuid,format,content,q,search_mode){
var content__$1 = frontend.handler.search.sanity_search_content(format,content);
var attrs60210 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(search_mode,new cljs.core.Keyword(null,"page","page",849072397)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-1",new cljs.core.Keyword(null,"key","key",-1516042587),"parents"], null),frontend.components.block.breadcrumb(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"block-search-block-parent",new cljs.core.Keyword(null,"block?","block?",1102479923),true,new cljs.core.Keyword(null,"search?","search?",785472524),true], null),repo,cljs.core.uuid(uuid),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),false], null))], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs60210))?daiquiri.interpreter.element_attributes(attrs60210):null),((cljs.core.map_QMARK_(attrs60210))?[daiquiri.core.create_element("div",{'key':"content",'className':"font-medium"},[daiquiri.interpreter.interpret(frontend.components.search.highlight_exact_query(content__$1,q))])]:[daiquiri.interpreter.interpret(attrs60210),daiquiri.core.create_element("div",{'key':"content",'className':"font-medium"},[daiquiri.interpreter.interpret(frontend.components.search.highlight_exact_query(content__$1,q))])]));
}),null,"frontend.components.search/block-search-result-item");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.search !== 'undefined') && (typeof frontend.components.search.search_timeout !== 'undefined')){
} else {
frontend.components.search.search_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.search.search_on_chosen_open_link = (function frontend$components$search$search_on_chosen_open_link(repo,search_q,p__60223){
var map__60224 = p__60223;
var map__60224__$1 = cljs.core.__destructure_map(map__60224);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60224__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60224__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60224__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
frontend.handler.search.add_search_to_recent_BANG_(repo,search_q);

frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$0();

var G__60225_60350 = type;
var G__60225_60351__$1 = (((G__60225_60350 instanceof cljs.core.Keyword))?G__60225_60350.fqn:null);
switch (G__60225_60351__$1) {
case "block":
var block_uuid_60353 = cljs.core.uuid(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(data));
var block_60354 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1((function (){var G__60226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid_60353], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__60226) : frontend.db.entity.call(null,G__60226));
})());
var link_60355 = cljs.core.re_find(frontend.handler.editor.url_regex,block_60354);
if(cljs.core.truth_(link_60355)){
window.open(link_60355);
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("No link found on this block.",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}

break;
case "page":
var data_60356__$1 = (function (){var or__5043__auto__ = alias;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return data;
}
})();
var page_60357 = (cljs.core.truth_(data_60356__$1)?(function (){var G__60231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(data_60356__$1) : frontend.util.page_name_sanity_lc.call(null,data_60356__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__60231) : frontend.db.entity.call(null,G__60231));
})():null);
var link_60358 = cljs.core.some((function (p1__60219_SHARP_){
return cljs.core.re_find(frontend.handler.editor.url_regex,cljs.core.val(p1__60219_SHARP_));
}),new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page_60357));
if(cljs.core.truth_(link_60358)){
window.open(link_60358);
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("No link found on this page's properties.",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}

break;
default:

}

return frontend.state.close_modal_BANG_();
});
frontend.components.search.search_on_chosen = (function frontend$components$search$search_on_chosen(repo,search_q,p__60235){
var map__60239 = p__60235;
var map__60239__$1 = cljs.core.__destructure_map(map__60239);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60239__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60239__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60239__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
frontend.handler.search.add_search_to_recent_BANG_(repo,search_q);

frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$0();

var G__60240_60360 = type;
var G__60240_60361__$1 = (((G__60240_60360 instanceof cljs.core.Keyword))?G__60240_60360.fqn:null);
switch (G__60240_60361__$1) {
case "graph-add-filter":
frontend.state.add_graph_search_filter_BANG_(search_q);

break;
case "new-page":
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$1(search_q);

break;
case "page":
var data_60363__$1 = (function (){var or__5043__auto__ = alias;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return data;
}
})();
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(data_60363__$1);

break;
case "file":
frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),data], null)], null));

break;
case "block":
var block_uuid_60364 = cljs.core.uuid(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(data));
var collapsed_QMARK__60365 = (frontend.db.parents_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.parents_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$2(repo,block_uuid_60364) : frontend.db.parents_collapsed_QMARK_.call(null,repo,block_uuid_60364));
var page_60366 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__60241 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid_60364], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__60241) : frontend.db.entity.call(null,G__60241));
})());
var long_page_QMARK__60367 = frontend.handler.block.long_page_QMARK_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_60366));
if(cljs.core.truth_(page_60366)){
if(cljs.core.truth_((function (){var or__5043__auto__ = collapsed_QMARK__60365;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return long_page_QMARK__60367;
}
})())){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(block_uuid_60364);
} else {
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_60366),["ls-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(data))].join(''));
}
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[Error] Block page missing: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_uuid_60364,new cljs.core.Keyword(null,"block","block",664686210),(function (){var G__60246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid_60364], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__60246) : frontend.db.pull.call(null,G__60246));
})()], null)], 0));
}

break;
default:

}

return frontend.state.close_modal_BANG_();
});
frontend.components.search.search_on_shift_chosen = (function frontend$components$search$search_on_shift_chosen(repo,search_q,p__60252){
var map__60253 = p__60252;
var map__60253__$1 = cljs.core.__destructure_map(map__60253);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60253__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60253__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60253__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
frontend.handler.search.add_search_to_recent_BANG_(repo,search_q);

var G__60254_60368 = type;
var G__60254_60369__$1 = (((G__60254_60368 instanceof cljs.core.Keyword))?G__60254_60368.fqn:null);
switch (G__60254_60369__$1) {
case "page":
var data_60371__$1 = (function (){var or__5043__auto__ = alias;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return data;
}
})();
var page_60372 = (cljs.core.truth_(data_60371__$1)?(function (){var G__60255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(data_60371__$1) : frontend.util.page_name_sanity_lc.call(null,data_60371__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__60255) : frontend.db.entity.call(null,G__60255));
})():null);
if(cljs.core.truth_(page_60372)){
frontend.state.sidebar_add_block_BANG_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_60372),new cljs.core.Keyword(null,"page","page",849072397));
} else {
}

break;
case "block":
var block_uuid_60373 = cljs.core.uuid(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(data));
var block_60374 = (function (){var G__60256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid_60373], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__60256) : frontend.db.entity.call(null,G__60256));
})();
frontend.state.sidebar_add_block_BANG_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_60374),new cljs.core.Keyword(null,"block","block",664686210));

break;
case "new-page":
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$1(search_q);

break;
case "file":
frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),data], null)], null));

break;
default:

}

return frontend.state.close_modal_BANG_();
});
frontend.components.search.search_item_render = (function frontend$components$search$search_item_render(search_q,p__60263){
var map__60264 = p__60263;
var map__60264__$1 = cljs.core.__destructure_map(map__60264);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60264__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60264__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60264__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var search_mode = frontend.state.get_search_mode();
var data__$1 = ((typeof data === 'string')?frontend.extensions.pdf.assets.fix_local_asset_filename(data):data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-2"], null),(function (){var G__60265 = type;
var G__60265__$1 = (((G__60265 instanceof cljs.core.Keyword))?G__60265.fqn:null);
switch (G__60265__$1) {
case "graph-add-filter":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),search_q], null);

break;
case "new-page":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text.font-bold","div.text.font-bold",-338791373),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-page","new-page",1691458376)], 0))),": "].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_q),"\""].join('')], null)], null);

break;
case "page":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-page-ref","data-page-ref",-257554824),data__$1], null),(cljs.core.truth_(alias)?(function (){var target_original_name = frontend.db.model.get_page_original_name(alias);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-2.text-sm.font-medium.mb-2","span.mr-2.text-sm.font-medium.mb-2",666354509),["Alias -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_original_name)].join('')], null);
})():null),frontend.components.search.search_result_item("Page",frontend.components.search.highlight_exact_query(data__$1,search_q))], null);

break;
case "file":
return frontend.components.search.search_result_item("File",frontend.components.search.highlight_exact_query(data__$1,search_q));

break;
case "block":
var map__60270 = data__$1;
var map__60270__$1 = cljs.core.__destructure_map(map__60270);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60270__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60270__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var page__$1 = frontend.util.get_page_original_name(page);
var repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var format = (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(page__$1) : frontend.db.get_page_format.call(null,page__$1));
var block = frontend.db.model.query_block_by_uuid(uuid);
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-block-ref","data-block-ref",1617648051),uuid], null),frontend.components.search.search_result_item("Block",(cljs.core.truth_(block)?frontend.components.search.block_search_result_item(repo,uuid,format,content,search_q,search_mode):(function (){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.search",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, ["search result with non-existing uuid: ",data__$1,new cljs.core.Keyword(null,"line","line",212345235),213], null)),null);

return "Cache is outdated. Please click the 'Re-index' button in the graph's dropdown menu.";
})()
))], null);

break;
default:
return null;

}
})()], null);
});
frontend.components.search.search_auto_complete = rum.core.lazy_build(rum.core.build_defc,(function (p__60285,search_q,all_QMARK_){
var map__60286 = p__60285;
var map__60286__$1 = cljs.core.__destructure_map(map__60286);
var result = map__60286__$1;
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60286__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60286__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60286__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var has_more_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60286__$1,new cljs.core.Keyword(null,"has-more?","has-more?",-1528440566));
var pages__$1 = (cljs.core.truth_(all_QMARK_)?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
var alias = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page);
var G__60291 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"data","data",-232669377),page], null);
if(cljs.core.truth_((function (){var and__5041__auto__ = alias;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page)),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(alias) : frontend.util.page_name_sanity_lc.call(null,alias)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60291,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias);
} else {
return G__60291;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,pages)));
var files__$1 = (cljs.core.truth_(all_QMARK_)?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"data","data",-232669377),file], null);
}),files));
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"data","data",-232669377),block], null);
}),blocks);
var search_mode = frontend.state.sub(new cljs.core.Keyword("search","mode","search/mode",1628111395));
var new_page = (cljs.core.truth_((function (){var or__5043__auto__ = ((cljs.core.seq(pages__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc(search_q),frontend.util.safe_page_name_sanity_lc(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(pages__$1))))));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (result == null);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
return all_QMARK_;
}
}
})())?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"new-page","new-page",1691458376)], null)], null));
var result__$1 = ((frontend.config.publishing_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(pages__$1,files__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks__$1], 0)):cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new_page,pages__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([files__$1,blocks__$1], 0)));
var result__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(search_mode,new cljs.core.Keyword(null,"graph","graph",1558099509)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"graph-add-filter","graph-add-filter",1996453213)], null)], null):result__$1);
var repo = frontend.state.get_current_repo();
return daiquiri.core.create_element("div",null,[frontend.ui.auto_complete(result__$2,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results",new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (p1__60274_SHARP_){
return frontend.components.search.search_on_chosen(repo,search_q,p1__60274_SHARP_);
}),new cljs.core.Keyword(null,"on-shift-chosen","on-shift-chosen",-310778328),(function (p1__60275_SHARP_){
return frontend.components.search.search_on_shift_chosen(repo,search_q,p1__60275_SHARP_);
}),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (p1__60276_SHARP_){
return frontend.components.search.search_item_render(search_q,p1__60276_SHARP_);
}),new cljs.core.Keyword(null,"on-chosen-open-link","on-chosen-open-link",1593951460),(function (p1__60277_SHARP_){
return frontend.components.search.search_on_chosen_open_link(repo,search_q,p1__60277_SHARP_);
})], null)),(cljs.core.truth_((function (){var and__5041__auto__ = has_more_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not(all_QMARK_);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("div",{'className':"px-2 py-4 search-more"},[daiquiri.core.create_element("a",{'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"q","q",689001697),search_q], null)),'onClick':(function (){
if(clojure.string.blank_QMARK_(search_q)){
return null;
} else {
frontend.handler.search.search.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),search_q,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(1000),new cljs.core.Keyword(null,"more?","more?",519437444),true], null));

return frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$0();
}
}),'className':"text-sm font-medium"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"more","more",-2058821800)], 0)))])]):null)]);
}),null,"frontend.components.search/search-auto-complete");
frontend.components.search.recent_search_and_pages = rum.core.lazy_build(rum.core.build_defc,(function (in_page_search_QMARK_){
return daiquiri.core.create_element("div",{'className':"recent-search"},[daiquiri.core.create_element("div",{'className':"px-4 py-2 text-sm opacity-70 flex flex-row justify-between align-items"},[daiquiri.core.create_element("div",null,["Recent search:"]),frontend.ui.with_shortcut(new cljs.core.Keyword("go","search-in-page","go/search-in-page",-1768249820),"bottom",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-row.flex.align-items","div.flex-row.flex.align-items",1704519413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-2","div.mr-2",234425641),"Search in page:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(3)], null)], null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(in_page_search_QMARK_,(function (_value){
return frontend.state.set_search_mode_BANG_((cljs.core.truth_(in_page_search_QMARK_)?new cljs.core.Keyword(null,"global","global",93595047):new cljs.core.Keyword(null,"page","page",849072397)));
}),true)], null),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Tip: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),frontend.util.__GT_platform_shortcut("Ctrl + Shift + p")], null)," to open the commands palette"], null),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"arrow","arrow",1071351425),true,new cljs.core.Keyword(null,"theme","theme",-1247880880),"monospace"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.inline-block.fade-link","a.inline-block.fade-link",215145939),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(12)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","command-palette-open?","ui/command-palette-open?",2033128967));
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("command",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null))], null))], null))]),(function (){var recent_search = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (q){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"data","data",-232669377),q], null);
}),(frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recent","search","recent/search",360685449)) : frontend.db.get_key_value.call(null,new cljs.core.Keyword("recent","search","recent/search",360685449))));
var pages = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"data","data",-232669377),page], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60305_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(p1__60305_SHARP_),"contents");
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)) : frontend.db.get_key_value.call(null,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)))))));
var result = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),recent_search),pages);
return frontend.ui.auto_complete(result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (p__60323){
var map__60324 = p__60323;
var map__60324__$1 = cljs.core.__destructure_map(map__60324);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60324__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60324__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__60325 = type;
var G__60325__$1 = (((G__60325 instanceof cljs.core.Keyword))?G__60325.fqn:null);
switch (G__60325__$1) {
case "page":
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(data);

return frontend.state.close_modal_BANG_();

break;
case "search":
var q = data;
frontend.state.set_q_BANG_(q);

var search_mode = frontend.state.get_search_mode();
var opts = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),search_mode))?(function (){var current_page = (function (){var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.date.today();
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-db-id","page-db-id",-761574235),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__60326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(current_page) : frontend.util.page_name_sanity_lc.call(null,current_page))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__60326) : frontend.db.entity.call(null,G__60326));
})())], null);
})():cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),search_mode)){
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),q,opts);
} else {
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),q);
}

break;
default:
return null;

}
}),new cljs.core.Keyword(null,"on-shift-chosen","on-shift-chosen",-310778328),(function (p__60327){
var map__60328 = p__60327;
var map__60328__$1 = cljs.core.__destructure_map(map__60328);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60328__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60328__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__60329 = type;
var G__60329__$1 = (((G__60329 instanceof cljs.core.Keyword))?G__60329.fqn:null);
switch (G__60329__$1) {
case "page":
var page = data;
if(typeof page === 'string'){
var temp__5720__auto__ = (function (){var G__60330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__60330) : frontend.db.pull.call(null,G__60330));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page__$1 = temp__5720__auto__;
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
} else {
return null;
}

break;
default:
return null;

}
}),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (p__60331){
var map__60332 = p__60331;
var map__60332__$1 = cljs.core.__destructure_map(map__60332);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60332__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60332__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__60333 = type;
var G__60333__$1 = (((G__60333 instanceof cljs.core.Keyword))?G__60333.fqn:null);
switch (G__60333__$1) {
case "search":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-row.flex.search-item.font-medium","div.flex-row.flex.search-item.font-medium",-1133151942),frontend.components.svg.search,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-2","span.ml-2",729972922),data], null)], null);

break;
case "page":
var temp__5720__auto__ = frontend.db.model.get_page_original_name(data);
if(cljs.core.truth_(temp__5720__auto__)){
var original_name = temp__5720__auto__;
return frontend.components.search.search_result_item("Page",original_name);
} else {
return null;
}

break;
default:
return null;

}
})], null));
})()]);
}),null,"frontend.components.search/recent-search-and-pages");
frontend.components.search.default_placeholder = ((frontend.config.publishing_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","publishing","search/publishing",192154576)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"search","search",1564939822)], 0)));
frontend.components.search.search_modal = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var search_result = frontend.state.sub(new cljs.core.Keyword("search","result","search/result",443756363));
var search_q = frontend.state.sub(new cljs.core.Keyword("search","q","search/q",-553992135));
var search_mode = frontend.state.sub(new cljs.core.Keyword("search","mode","search/mode",1628111395));
var timeout = (300);
var in_page_search_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(search_mode,new cljs.core.Keyword(null,"page","page",849072397));
return daiquiri.core.create_element("div",{'className':"cp__palette cp__palette-main"},[daiquiri.core.create_element("div",{'className':"input-wrap"},[daiquiri.core.create_element("input",{'type':"text",'autoFocus':true,'placeholder':(function (){var G__60337 = search_mode;
var G__60337__$1 = (((G__60337 instanceof cljs.core.Keyword))?G__60337.fqn:null);
switch (G__60337__$1) {
case "graph":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-search","graph-search",1699607356)], 0));

break;
case "page":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-search","page-search",1842925280)], 0));

break;
default:
return frontend.components.search.default_placeholder;

}
})(),'autoComplete':(cljs.core.truth_(frontend.util.chrome_QMARK_())?"chrome-off":"off"),'value':search_q,'onChange':rum.core.mark_sync_update((function (e){
if(cljs.core.truth_(cljs.core.deref(frontend.components.search.search_timeout))){
clearTimeout(cljs.core.deref(frontend.components.search.search_timeout));
} else {
}

var value = frontend.util.evalue(e);
var is_composing_QMARK_ = frontend.util.onchange_event_is_composing_QMARK_(e);
if(((clojure.string.blank_QMARK_(value)) && (cljs.core.not(is_composing_QMARK_)))){
return frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$1(false);
} else {
var search_mode__$1 = frontend.state.get_search_mode();
var opts = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),search_mode__$1))?(function (){var temp__5720__auto__ = (function (){var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.date.today();
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var current_page = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-db-id","page-db-id",-761574235),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__60339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(current_page) : frontend.util.page_name_sanity_lc.call(null,current_page))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__60339) : frontend.db.entity.call(null,G__60339));
})())], null);
} else {
return null;
}
})():cljs.core.PersistentArrayMap.EMPTY);
frontend.state.set_q_BANG_(value);

return cljs.core.reset_BANG_(frontend.components.search.search_timeout,setTimeout((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),search_mode__$1)){
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),value,opts);
} else {
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),value);
}
}),timeout));
}
})),'className':"cp__palette-input w-full"},[])]),(function (){var attrs60336 = ((cljs.core.seq(search_result))?frontend.components.search.search_auto_complete(search_result,search_q,false):frontend.components.search.recent_search_and_pages(in_page_search_QMARK_));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs60336))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-results-wrap"], null)], null),attrs60336], 0))):{'className':"search-results-wrap"}),((cljs.core.map_QMARK_(attrs60336))?null:[daiquiri.interpreter.interpret(attrs60336)]));
})()]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.modules.shortcut.core.disable_all_shortcuts(),frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
return frontend.mixins.hide_when_esc_or_outside.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
return frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$0();
})], 0));
}))], null),"frontend.components.search/search-modal");
frontend.components.search.more = rum.core.lazy_build(rum.core.build_defc,(function (route){
var search_q = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"q","q",689001697)], null));
var search_result = frontend.state.sub(new cljs.core.Keyword("search","more-result","search/more-result",1439170242));
return daiquiri.core.create_element("div",{'id':"search",'className':"flex-1 flex"},[daiquiri.core.create_element("div",{'className':"inner"},[(function (){var attrs60340 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","result-for","search/result-for",1488709074)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs60340))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs60340], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs60340))?[(function (){var attrs60341 = search_q;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs60341))?daiquiri.interpreter.element_attributes(attrs60341):null),((cljs.core.map_QMARK_(attrs60341))?null:[daiquiri.interpreter.interpret(attrs60341)]));
})()]:[daiquiri.interpreter.interpret(attrs60340),(function (){var attrs60342 = search_q;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs60342))?daiquiri.interpreter.element_attributes(attrs60342):null),((cljs.core.map_QMARK_(attrs60342))?null:[daiquiri.interpreter.interpret(attrs60342)]));
})()]));
})(),daiquiri.core.create_element("p",{'className':"font-medium tx-sm"},[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(search_result)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","items","search/items",-479739982)], 0)))].join('')]),(function (){var attrs60343 = ((clojure.string.blank_QMARK_(search_q))?null:frontend.components.search.search_auto_complete(search_result,search_q,true));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs60343))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"search-wrapper",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["relative","w-full","text-gray-400","focus-within:text-gray-600"], null)], null),attrs60343], 0))):{'id':"search-wrapper",'className':"relative w-full text-gray-400 focus-within:text-gray-600"}),((cljs.core.map_QMARK_(attrs60343))?null:[daiquiri.interpreter.interpret(attrs60343)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.search/more");

//# sourceMappingURL=frontend.components.search.js.map
