goog.provide('frontend.components.journal');
goog.scope(function(){
  frontend.components.journal.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.journal.blocks_cp = rum.core.lazy_build(rum.core.build_defc,(function (repo,page,_format){
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = (function (){var G__61504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__61504) : frontend.db.pull.call(null,G__61504));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page_e = temp__5720__auto__;
return frontend.components.page.page_blocks_cp(repo,page_e,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,cljs.core.PersistentArrayMap.EMPTY], null),"frontend.components.journal/blocks-cp");
frontend.components.journal.journal_cp = rum.core.lazy_build(rum.core.build_defc,(function (p__61508){
var vec__61509 = p__61508;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61509,(0),null);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61509,(1),null);
var page = clojure.string.lower_case(title);
var repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var today_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(title),clojure.string.lower_case(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0()));
var page_entity = (function (){var G__61512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title))], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__61512) : frontend.db.pull.call(null,G__61512));
})();
var data_page_tags = ((cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page_entity)))?(function (){var page_names = frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page)));
return logseq.graph_parser.text.build_data_value(page_names);
})():null);
var attrs61507 = (function (){var G__61513 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(data_page_tags)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61513,new cljs.core.Keyword(null,"data-page-tags","data-page-tags",347588105),data_page_tags);
} else {
return G__61513;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs61507))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1","journal","page"], null)], null),attrs61507], 0))):{'className':"flex-1 journal page"}),((cljs.core.map_QMARK_(attrs61507))?[frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.initial-color.title.journal-title","a.initial-color.title.journal-title",1631221905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),page], null)),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
if(frontend.util.right_click_QMARK_(e)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("page-title","context","page-title/context",1788836745),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(frontend.components.journal.goog$module$goog$object.get(e,"shiftKey"))){
var temp__5720__auto___61548 = page_entity;
if(cljs.core.truth_(temp__5720__auto___61548)){
var page_61549__$1 = temp__5720__auto___61548;
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_61549__$1),new cljs.core.Keyword(null,"page","page",849072397));
} else {
}

return e.preventDefault();
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),logseq.graph_parser.util.capitalize_all(title)], null)], null),((today_QMARK_)?frontend.components.journal.blocks_cp(repo,page,format):frontend.ui.lazy_visible((function (){
return frontend.components.journal.blocks_cp(repo,page,format);
}),null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.PersistentArrayMap.EMPTY),frontend.components.page.today_queries(repo,today_QMARK_,false),rum.core.with_key(frontend.components.reference.references(title),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"-refs"].join(''))]:[daiquiri.interpreter.interpret(attrs61507),frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.initial-color.title.journal-title","a.initial-color.title.journal-title",1631221905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),page], null)),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
if(frontend.util.right_click_QMARK_(e)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("page-title","context","page-title/context",1788836745),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(frontend.components.journal.goog$module$goog$object.get(e,"shiftKey"))){
var temp__5720__auto___61550 = page_entity;
if(cljs.core.truth_(temp__5720__auto___61550)){
var page_61551__$1 = temp__5720__auto___61550;
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_61551__$1),new cljs.core.Keyword(null,"page","page",849072397));
} else {
}

return e.preventDefault();
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),logseq.graph_parser.util.capitalize_all(title)], null)], null),((today_QMARK_)?frontend.components.journal.blocks_cp(repo,page,format):frontend.ui.lazy_visible((function (){
return frontend.components.journal.blocks_cp(repo,page,format);
}),null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.PersistentArrayMap.EMPTY),frontend.components.page.today_queries(repo,today_QMARK_,false),rum.core.with_key(frontend.components.reference.references(title),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"-refs"].join(''))]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.journal/journal-cp");
frontend.components.journal.journals = rum.core.lazy_build(rum.core.build_defc,(function (latest_journals){
return daiquiri.core.create_element("div",{'id':"journals"},[frontend.ui.infinite_list("main-content-container",(function (){var iter__5520__auto__ = (function frontend$components$journal$iter__61540(s__61541){
return (new cljs.core.LazySeq(null,(function (){
var s__61541__$1 = s__61541;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__61541__$1);
if(temp__5720__auto__){
var s__61541__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61541__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__61541__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__61543 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__61542 = (0);
while(true){
if((i__61542 < size__5519__auto__)){
var map__61544 = cljs.core._nth(c__5518__auto__,i__61542);
var map__61544__$1 = cljs.core.__destructure_map(map__61544);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61544__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61544__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
cljs.core.chunk_append(b__61543,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.journal-item.content","div.journal-item.content",1590520916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),frontend.components.journal.journal_cp(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,format], null))], null));

var G__61552 = (i__61542 + (1));
i__61542 = G__61552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61543),frontend$components$journal$iter__61540(cljs.core.chunk_rest(s__61541__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61543),null);
}
} else {
var map__61545 = cljs.core.first(s__61541__$2);
var map__61545__$1 = cljs.core.__destructure_map(map__61545);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61545__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61545__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.journal-item.content","div.journal-item.content",1590520916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),frontend.components.journal.journal_cp(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,format], null))], null),frontend$components$journal$iter__61540(cljs.core.rest(s__61541__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(latest_journals);
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"has-more","has-more",-320006781),frontend.handler.page.has_more_journals_QMARK_(),new cljs.core.Keyword(null,"more-class","more-class",-869337192),"text-4xl",new cljs.core.Keyword(null,"on-top-reached","on-top-reached",1295153037),frontend.handler.page.create_today_journal_BANG_,new cljs.core.Keyword(null,"on-load","on-load",1415151594),(function (){
return frontend.handler.page.load_more_journals_BANG_();
})], null))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.journal/journals");
frontend.components.journal.all_journals = rum.core.lazy_build(rum.core.build_defc,(function (){
var journals_length = frontend.state.sub(new cljs.core.Keyword(null,"journals-length","journals-length",1463764186));
var latest_journals = (function (){var G__61546 = frontend.state.get_current_repo();
var G__61547 = journals_length;
return (frontend.db.get_latest_journals.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_latest_journals.cljs$core$IFn$_invoke$arity$2(G__61546,G__61547) : frontend.db.get_latest_journals.call(null,G__61546,G__61547));
})();
return frontend.components.journal.journals(latest_journals);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.journal/all-journals");

//# sourceMappingURL=frontend.components.journal.js.map
