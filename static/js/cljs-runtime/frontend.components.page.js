goog.provide('frontend.components.page');
goog.scope(function(){
  frontend.components.page.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.page.get_page_name = (function frontend$components$page$get_page_name(state){
var route_match = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
frontend.components.page.get_blocks = (function frontend$components$page$get_blocks(repo,page_name,block_id){
if(cljs.core.truth_(page_name)){
var root = (cljs.core.truth_(block_id)?(function (){var G__47694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__47694) : frontend.db.pull.call(null,G__47694));
})():frontend.db.model.get_page(page_name));
var opts = (cljs.core.truth_(block_id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root)], null):cljs.core.PersistentArrayMap.EMPTY);
var G__47695 = repo;
var G__47696 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root);
var G__47697 = opts;
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(G__47695,G__47696,G__47697) : frontend.db.get_paginated_blocks.call(null,G__47695,G__47696,G__47697));
} else {
return null;
}
});
frontend.components.page.open_first_block_BANG_ = (function frontend$components$page$open_first_block_BANG_(state){
var vec__47698_47876 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var __47877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47698_47876,(0),null);
var blocks_47878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47698_47876,(1),null);
var __47879__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47698_47876,(2),null);
var sidebar_QMARK__47880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47698_47876,(3),null);
var preview_QMARK__47881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47698_47876,(4),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = preview_QMARK__47881;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"all-journals","all-journals",-347015095),null], null), null),frontend.state.get_current_route())));
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(sidebar_QMARK__47880);
} else {
return and__5041__auto__;
}
})())){
var block_47882 = cljs.core.first(blocks_47878);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks_47878),(1))) && (((clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_47882))) && (cljs.core.not(preview_QMARK__47881)))))){
frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block_47882,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_47882));
} else {
}
} else {
}

return state;
});
frontend.components.page.page_blocks_inner = rum.core.lazy_build(rum.core.build_defc,(function (page_name,_blocks,hiccup,sidebar_QMARK_,_block_uuid){
return daiquiri.core.create_element("div",{'style':{'marginLeft':(cljs.core.truth_(sidebar_QMARK_)?(0):(-20))},'className':"page-blocks-inner"},[rum.core.with_key(frontend.components.content.content(page_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),hiccup,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_], null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name),"-hiccup"].join(''))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),frontend.components.page.open_first_block_BANG_,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),frontend.components.page.open_first_block_BANG_], null)], null),"frontend.components.page/page-blocks-inner");
frontend.components.page.dummy_block = rum.core.lazy_build(rum.core.build_defc,(function (page_name){
var handler_fn = (function (){
var block = frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null));
return setTimeout((function (){
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
}),(0));
});
return daiquiri.core.create_element("div",{'style':{'width':"100%"},'className':"ls-block flex-1 flex-col rounded-sm"},[daiquiri.core.create_element("div",{'className':"flex flex-row"},[daiquiri.core.create_element("div",{'style':{'height':(24)},'className':"flex flex-row items-center mr-2 ml-1"},[daiquiri.core.create_element("span",{'className':"bullet-container cursor"},[daiquiri.core.create_element("span",{'className':"bullet"},null)])]),daiquiri.core.create_element("div",{'tabindex':(0),'onKeyPress':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return handler_fn();
} else {
return null;
}
}),'onClick':handler_fn,'className':"flex flex-1"},[daiquiri.core.create_element("span",{'className':"opacity-50"},["Click here to edit..."])])])]);
}),null,"frontend.components.page/dummy-block");
frontend.components.page.add_button = rum.core.lazy_build(rum.core.build_defc,(function (args){
return daiquiri.core.create_element("div",{'onClick':(function (){
return frontend.handler.editor.api_insert_new_block_BANG_("",args);
}),'className':"flex-1 flex-col rounded-sm add-button-link-wrap"},[daiquiri.core.create_element("div",{'className':"flex flex-row"},[daiquiri.core.create_element("div",{'style':{'height':(20),'width':(20),'marginLeft':(2)},'className':"block"},[(function (){var attrs47705 = frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("circle-plus");
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs47705))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-button-link","block"], null)], null),attrs47705], 0))):{'className':"add-button-link block"}),((cljs.core.map_QMARK_(attrs47705))?null:[daiquiri.interpreter.interpret(attrs47705)]));
})()])])]);
}),null,"frontend.components.page/add-button");
frontend.components.page.page_blocks_cp = rum.core.lazy_build(rum.core.build_defc,(function (repo,page_e,p__47706){
var map__47707 = p__47706;
var map__47707__$1 = cljs.core.__destructure_map(map__47707);
var config = map__47707__$1;
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47707__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
if(cljs.core.truth_(page_e)){
var page_name = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_e);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_e));
}
})();
var block_id = cljs.core.parse_uuid(page_name);
var block_QMARK_ = cljs.core.boolean$(block_id);
var page_blocks = frontend.components.page.get_blocks(repo,page_name,block_id);
if(cljs.core.empty_QMARK_(page_blocks)){
return frontend.components.page.dummy_block(page_name);
} else {
var document_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("document","mode?","document/mode?",-994203479));
var block_entity = (function (){var G__47708 = (cljs.core.truth_(block_id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__47708) : frontend.db.entity.call(null,G__47708));
})();
var hiccup_config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),((block_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id):page_name),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_entity),new cljs.core.Keyword(null,"block?","block?",1102479923),block_QMARK_,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword("document","mode?","document/mode?",-994203479),document_mode_QMARK_], null),config], 0));
var hiccup_config__$1 = frontend.handler.common.config_with_document_mode(hiccup_config);
var hiccup = frontend.components.block.__GT_hiccup(page_blocks,hiccup_config__$1,cljs.core.PersistentArrayMap.EMPTY);
return daiquiri.core.create_element("div",null,[frontend.components.page.page_blocks_inner(page_name,page_blocks,hiccup,sidebar_QMARK_,block_id),((frontend.config.publishing_QMARK_)?null:(function (){var args = (cljs.core.truth_(block_id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),block_id], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_name], null));
return frontend.components.page.add_button(args);
})())]);
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var page_e_47883 = cljs.core.second(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var page_name_47884 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_e_47883);
if(cljs.core.truth_((function (){var and__5041__auto__ = (frontend.db.journal_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.journal_page_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name_47884) : frontend.db.journal_page_QMARK_.call(null,page_name_47884));
if(cljs.core.truth_(and__5041__auto__)){
return (frontend.date.journal_title__GT_int(page_name_47884) >= frontend.date.journal_title__GT_int(frontend.date.today()));
} else {
return and__5041__auto__;
}
})())){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("journal","insert-template","journal/insert-template",-1273735332),page_name_47884], null));
} else {
}

return state;
})], null)], null),"frontend.components.page/page-blocks-cp");
frontend.components.page.contents_page = (function frontend$components$page$contents_page(page){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return frontend.components.page.page_blocks_cp(repo,page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),true], null));
} else {
return null;
}
});
frontend.components.page.today_queries = rum.core.lazy_build(rum.core.build_defc,(function (repo,today_QMARK_,sidebar_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = today_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(sidebar_QMARK_);
} else {
return and__5041__auto__;
}
})())){
var queries = frontend.state.sub(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo,new cljs.core.Keyword(null,"default-queries","default-queries",1508774260),new cljs.core.Keyword(null,"journals","journals",-1915761091)], null));
if(cljs.core.seq(queries)){
return daiquiri.core.create_element("div",{'id':"today-queries",'className':"mt-10"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$page$iter__47709(s__47710){
return (new cljs.core.LazySeq(null,(function (){
var s__47710__$1 = s__47710;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47710__$1);
if(temp__5720__auto__){
var s__47710__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47710__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47710__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47712 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47711 = (0);
while(true){
if((i__47711 < size__5519__auto__)){
var query = cljs.core._nth(c__5518__auto__,i__47711);
cljs.core.chunk_append(b__47712,rum.core.with_key(frontend.ui.catch_error(frontend.ui.component_error("Failed default query:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query], 0))], null)),frontend.components.block.custom_query(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-10"], null),new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword(null,"page","page",849072397),frontend.components.page.page], null),query)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"-custom-query-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query))].join('')));

var G__47885 = (i__47711 + (1));
i__47711 = G__47885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47712),frontend$components$page$iter__47709(cljs.core.chunk_rest(s__47710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47712),null);
}
} else {
var query = cljs.core.first(s__47710__$2);
return cljs.core.cons(rum.core.with_key(frontend.ui.catch_error(frontend.ui.component_error("Failed default query:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query], 0))], null)),frontend.components.block.custom_query(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-10"], null),new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword(null,"page","page",849072397),frontend.components.page.page], null),query)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"-custom-query-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query))].join('')),frontend$components$page$iter__47709(cljs.core.rest(s__47710__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(queries);
})())]);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.page/today-queries");
frontend.components.page.tagged_pages = (function frontend$components$page$tagged_pages(repo,tag){
var pages = (frontend.db.get_tag_pages.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_tag_pages.cljs$core$IFn$_invoke$arity$2(repo,tag) : frontend.db.get_tag_pages.call(null,repo,tag));
if(cljs.core.seq(pages)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.references.mt-6.flex-1.flex-row","div.references.mt-6.flex-1.flex-row",-390362534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-bold.opacity-50","h2.font-bold.opacity-50",1276193375),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Pages tagged with \"%s\"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-2","ul.mt-2",-237871742),(function (){var iter__5520__auto__ = (function frontend$components$page$tagged_pages_$_iter__47713(s__47714){
return (new cljs.core.LazySeq(null,(function (){
var s__47714__$1 = s__47714;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47714__$1);
if(temp__5720__auto__){
var s__47714__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47714__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47714__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47716 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47715 = (0);
while(true){
if((i__47715 < size__5519__auto__)){
var vec__47717 = cljs.core._nth(c__5518__auto__,i__47715);
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47717,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47717,(1),null);
cljs.core.chunk_append(b__47716,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["tagged-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null))], null),original_name], null)], null));

var G__47886 = (i__47715 + (1));
i__47715 = G__47886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47716),frontend$components$page$tagged_pages_$_iter__47713(cljs.core.chunk_rest(s__47714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47716),null);
}
} else {
var vec__47720 = cljs.core.first(s__47714__$2);
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47720,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47720,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["tagged-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null))], null),original_name], null)], null),frontend$components$page$tagged_pages_$_iter__47713(cljs.core.rest(s__47714__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pages));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),false], null))], null)], null);
} else {
return null;
}
});
frontend.components.page.page_title = rum.core.lazy_build(rum.core.build_defcs,(function (state,page_name,icon,title,_format,fmt_journal_QMARK_){
if(cljs.core.truth_(title)){
var _STAR_title_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.page","title-value","frontend.components.page/title-value",2110227395));
var _STAR_edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.page","edit?","frontend.components.page/edit?",258127371));
var input_ref = rum.core.create_ref();
var repo = frontend.state.get_current_repo();
var hls_file_QMARK_ = frontend.extensions.pdf.assets.hls_file_QMARK_(title);
var title__$1 = (cljs.core.truth_(hls_file_QMARK_)?frontend.extensions.pdf.assets.human_hls_filename_display(title):(cljs.core.truth_(fmt_journal_QMARK_)?frontend.date.journal_title__GT_custom_format(title):title));
var old_name = (function (){var or__5043__auto__ = title__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name;
}
})();
var confirm_fn = (function (){
var new_page_name = clojure.string.trim(cljs.core.deref(_STAR_title_value));
var merge_QMARK_ = (function (){var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name)),(function (){var G__47723 = cljs.core.deref(_STAR_title_value);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__47723) : frontend.util.page_name_sanity_lc.call(null,G__47723));
})());
if(and__5041__auto__){
var and__5041__auto____$1 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.page_exists_QMARK_.call(null,page_name));
if(cljs.core.truth_(and__5041__auto____$1)){
var G__47724 = cljs.core.deref(_STAR_title_value);
return (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(G__47724) : frontend.db.page_exists_QMARK_.call(null,G__47724));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
return frontend.ui.make_confirm_modal(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(merge_QMARK_)?["Page \u201C",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_title_value)),"\u201D already exists, merge to it?"].join(''):["Do you really want to change the page name to \u201C",new_page_name,"\u201D?"].join('')),new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),(function (_e,p__47725){
var map__47726 = p__47725;
var map__47726__$1 = cljs.core.__destructure_map(map__47726);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47726__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

frontend.handler.page.rename_BANG_((function (){var or__5043__auto__ = title__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name;
}
})(),cljs.core.deref(_STAR_title_value));

return cljs.core.reset_BANG_(_STAR_edit_QMARK_,false);
}),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),(function (){
cljs.core.reset_BANG_(_STAR_title_value,old_name);

frontend.components.page.goog$module$goog$object.set(rum.core.deref(input_ref),"value",old_name);

return cljs.core.reset_BANG_(_STAR_edit_QMARK_,true);
})], null));
});
var rollback_fn = (function (){
cljs.core.reset_BANG_(_STAR_title_value,old_name);

frontend.components.page.goog$module$goog$object.set(rum.core.deref(input_ref),"value",old_name);

cljs.core.reset_BANG_(_STAR_edit_QMARK_,false);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Illegal page name, can not rename!",new cljs.core.Keyword(null,"warning","warning",-1685650671));
});
var blur_fn = (function (e){
if(logseq.graph_parser.util.wrapped_by_quotes_QMARK_(cljs.core.deref(_STAR_title_value))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_title_value,logseq.graph_parser.util.unquote_string);

frontend.components.page.goog$module$goog$object.set(rum.core.deref(input_ref),"value",cljs.core.deref(_STAR_title_value));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_name,cljs.core.deref(_STAR_title_value))){
cljs.core.reset_BANG_(_STAR_edit_QMARK_,false);
} else {
if(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_title_value))){
rollback_fn();
} else {
frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(confirm_fn());

}
}

return frontend.util.stop(e);
});
if(cljs.core.truth_(cljs.core.deref(_STAR_edit_QMARK_))){
return daiquiri.core.create_element("h1",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title","ls-page-title",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),cljs.core.deref(_STAR_edit_QMARK_)], null)], null))], null))},[daiquiri.core.create_element("input",{'ref':input_ref,'autoFocus':true,'autoComplete':(cljs.core.truth_(frontend.util.chrome_QMARK_())?"chrome-off":"off"),'type':"text",'onBlur':blur_fn,'className':"edit-input",'style':{'outline':"none",'fontWeight':(600)},'onKeyUp':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
cljs.core.reset_BANG_(_STAR_title_value,old_name);

return cljs.core.reset_BANG_(_STAR_edit_QMARK_,false);
} else {
return null;
}
}),'defaultValue':old_name,'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.page.goog$module$goog$object.get(e,"key"),"Enter")){
return blur_fn(e);
} else {
return null;
}
}),'onChange':rum.core.mark_sync_update((function (e){
var value = frontend.util.evalue(e);
return cljs.core.reset_BANG_(_STAR_title_value,clojure.string.trim(value));
}))},[])]);
} else {
return daiquiri.core.create_element("a",{'onMouseDown':(function (e){
if(frontend.util.right_click_QMARK_(e)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("page-title","context","page-title/context",1788836745),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_name], null));
} else {
return null;
}
}),'onClick':(function (e){
e.preventDefault();

if(cljs.core.truth_(frontend.components.page.goog$module$goog$object.get(e,"shiftKey"))){
var temp__5720__auto__ = (function (){var G__47727 = repo;
var G__47728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__47729 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__47727,G__47728,G__47729) : frontend.db.pull.call(null,G__47727,G__47728,G__47729));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
return frontend.state.sidebar_add_block_BANG_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
} else {
if(((cljs.core.not(hls_file_QMARK_)) && (cljs.core.not(fmt_journal_QMARK_)))){
return cljs.core.reset_BANG_(_STAR_edit_QMARK_,true);
} else {
return null;
}
}
}),'className':"page-title"},[daiquiri.core.create_element("h1",{'data-ref':page_name,'className':"title ls-page-title"},[((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(icon,""))?(function (){var attrs47730 = icon;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs47730))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page-icon"], null)], null),attrs47730], 0))):{'className':"page-icon"}),((cljs.core.map_QMARK_(attrs47730))?null:[daiquiri.interpreter.interpret(attrs47730)]));
})():null),daiquiri.interpreter.interpret(title__$1)])]);
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.page","edit?","frontend.components.page/edit?",258127371)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.page","title-value","frontend.components.page/title-value",2110227395),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2))));
})], null)], null),"frontend.components.page/page-title");
frontend.components.page.page_mouse_over = (function frontend$components$page$page_mouse_over(e,_STAR_control_show_QMARK_,_STAR_all_collapsed_QMARK_){
frontend.util.stop(e);

cljs.core.reset_BANG_(_STAR_control_show_QMARK_,true);

var all_collapsed_QMARK_ = cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
}),frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null))));
return cljs.core.reset_BANG_(_STAR_all_collapsed_QMARK_,all_collapsed_QMARK_);
});
frontend.components.page.page_mouse_leave = (function frontend$components$page$page_mouse_leave(e,_STAR_control_show_QMARK_){
frontend.util.stop(e);

return cljs.core.reset_BANG_(_STAR_control_show_QMARK_,false);
});
frontend.components.page.page_blocks_collapse_control = rum.core.lazy_build(rum.core.build_defcs,(function (state,title,_STAR_control_show_QMARK_,_STAR_all_collapsed_QMARK_){
return daiquiri.core.create_element("a",{'id':["control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''),'onClick':(function (event){
frontend.util.stop(event);

if(cljs.core.truth_(cljs.core.deref(_STAR_all_collapsed_QMARK_))){
frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$0();
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_all_collapsed_QMARK_,cljs.core.not);
}),'className':"page-blocks-collapse-control"},[daiquiri.core.create_element("span",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-6",(cljs.core.truth_(cljs.core.deref(_STAR_control_show_QMARK_))?"control-show cursor-pointer":"control-hide")], null))},[frontend.ui.rotating_arrow(cljs.core.deref(_STAR_all_collapsed_QMARK_))])]);
}),null,"frontend.components.page/page-blocks-collapse-control");
frontend.components.page.page = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__47731){
var map__47732 = p__47731;
var map__47732__$1 = cljs.core.__destructure_map(map__47732);
var option = map__47732__$1;
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47732__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var page_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47732__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = (function (){var or__5043__auto__ = page_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.components.page.get_page_name(state);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return frontend.state.get_current_page();
}
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var path_page_name = temp__5720__auto__;
var current_repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var repo__$1 = (function (){var or__5043__auto__ = repo;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return current_repo;
}
})();
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(path_page_name) : frontend.util.page_name_sanity_lc.call(null,path_page_name));
var block_id = cljs.core.parse_uuid(page_name__$1);
var block_QMARK_ = cljs.core.boolean$(block_id);
var format = (function (){var page = (cljs.core.truth_(block_id)?new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__47748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__47748) : frontend.db.entity.call(null,G__47748));
})())):page_name__$1);
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(page) : frontend.db.get_page_format.call(null,page));
})();
var journal_QMARK_ = (frontend.db.journal_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.journal_page_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name__$1) : frontend.db.journal_page_QMARK_.call(null,page_name__$1));
var fmt_journal_QMARK_ = cljs.core.boolean$(frontend.date.journal_title__GT_int(page_name__$1));
var sidebar_QMARK_ = new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(option);
var route_page_name = path_page_name;
var page = ((block_QMARK_)?(function (){var G__47749 = repo__$1;
var G__47750 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__47751 = repo__$1;
var G__47752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__47751,G__47752) : frontend.db.entity.call(null,G__47751,G__47752));
})()));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__47749,G__47750) : frontend.db.entity.call(null,G__47749,G__47750));
})():(function (){
if(cljs.core.truth_((function (){var G__47753 = repo__$1;
var G__47754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__47753,G__47754) : frontend.db.entity.call(null,G__47753,G__47754));
})())){
} else {
var m_47887 = frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2(path_page_name,true);
var G__47755_47888 = repo__$1;
var G__47756_47889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_47887], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__47755_47888,G__47756_47889) : frontend.db.transact_BANG_.call(null,G__47755_47888,G__47756_47889));
}

var G__47757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__47757) : frontend.db.pull.call(null,G__47757));
})()
);
var map__47747 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page);
var map__47747__$1 = cljs.core.__destructure_map(map__47747);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47747__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var page_name__$2 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
var page_original_name = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
var title = (function (){var or__5043__auto__ = page_original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name__$2;
}
})();
var icon__$1 = (function (){var or__5043__auto__ = icon;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var today_QMARK_ = (function (){var and__5041__auto__ = journal_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name__$2,(function (){var G__47758 = frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__47758) : frontend.util.page_name_sanity_lc.call(null,G__47758));
})());
} else {
return and__5041__auto__;
}
})();
var _STAR_control_show_QMARK_ = new cljs.core.Keyword("frontend.components.page","control-show?","frontend.components.page/control-show?",-964317787).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_all_collapsed_QMARK_ = new cljs.core.Keyword("frontend.components.page","all-collapsed?","frontend.components.page/all-collapsed?",-1574936479).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.page.relative","div.flex-1.page.relative",2041847252),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page)))?(function (){var page_names = frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-page-tags","data-page-tags",347588105),logseq.graph_parser.text.build_data_value(page_names)], null);
})():cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),path_page_name,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-journals","is-journals",-1555155588),(function (){var or__5043__auto__ = journal_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return fmt_journal_QMARK_;
}
})()], null)], null))], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),((((cljs.core.not(sidebar_QMARK_)) && ((!(block_QMARK_)))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.space-between","div.flex.flex-row.space-between",1433228948),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.mobile_QMARK_();
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.pr-2","div.flex.flex-row.pr-2",1648161181),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-15)], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (e){
return frontend.components.page.page_mouse_over(e,_STAR_control_show_QMARK_,_STAR_all_collapsed_QMARK_);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (e){
return frontend.components.page.page_mouse_leave(e,_STAR_control_show_QMARK_);
})], null),frontend.components.page.page_blocks_collapse_control(title,_STAR_control_show_QMARK_,_STAR_all_collapsed_QMARK_)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.flex-row","div.flex-1.flex-row",1459656606),frontend.components.page.page_title(page_name__$2,icon__$1,title,format,fmt_journal_QMARK_)], null),(((!(frontend.config.publishing_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),(cljs.core.truth_(frontend.handler.plugin.lsp_enabled_QMARK_)?(function (){
frontend.components.plugins.hook_ui_slot(new cljs.core.Keyword(null,"page-head-actions-slotted","page-head-actions-slotted",1227457137),null);

return frontend.components.plugins.hook_ui_items(new cljs.core.Keyword(null,"pagebar","pagebar",-1992158385));
})()
:null)], null):null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((((block_QMARK_) && (cljs.core.not(sidebar_QMARK_))))?(function (){var config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"block-parent",new cljs.core.Keyword(null,"block?","block?",1102479923),true], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),frontend.components.block.breadcrumb(config,repo__$1,block_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level-limit","level-limit",-1660435238),(3)], null))], null);
})():null),(function (){var page__$1 = ((block_QMARK_)?(function (){var G__47759 = repo__$1;
var G__47760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__47759,G__47760) : frontend.db.entity.call(null,G__47759,G__47760));
})():page);
return frontend.components.page.page_blocks_cp(repo__$1,page__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_], null));
})()], null)], null),((block_QMARK_)?null:frontend.components.page.today_queries(repo__$1,today_QMARK_,sidebar_QMARK_)),((block_QMARK_)?null:frontend.components.page.tagged_pages(repo__$1,page_name__$2)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"page-references"], null),rum.core.with_key(frontend.components.reference.references(route_page_name),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route_page_name),"-refs"].join(''))], null),((block_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.not(journal_QMARK_))?frontend.components.hierarchy.structures(route_page_name):null),(cljs.core.truth_(sidebar_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"page-unlinked-references"], null),frontend.components.reference.unlinked_references(route_page_name)], null))], null))], null);
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.page","all-collapsed?","frontend.components.page/all-collapsed?",-1574936479)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.page","control-show?","frontend.components.page/control-show?",-964317787))], null),"frontend.components.page/page");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page.layout !== 'undefined')){
} else {
frontend.components.page.layout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
}
frontend.components.page.graph_filter_section = rum.core.lazy_build(rum.core.build_defcs,(function (state,title,content,p__47761){
var map__47762 = p__47761;
var map__47762__$1 = cljs.core.__destructure_map(map__47762);
var search_filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47762__$1,new cljs.core.Keyword(null,"search-filters","search-filters",-2121899355));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.page","open?","frontend.components.page/open?",1985200624));
if(((cljs.core.seq(search_filters)) && (cljs.core.not(cljs.core.deref(open_QMARK_))))){
cljs.core.reset_BANG_(open_QMARK_,true);
} else {
}

return daiquiri.core.create_element("li",{'className':"relative"},[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
}),'className':"w-full px-4 py-2 text-left focus:outline-none"},[(function (){var attrs47763 = title;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs47763))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","justify-between"], null)], null),attrs47763], 0))):{'className':"flex items-center justify-between"}),((cljs.core.map_QMARK_(attrs47763))?[(cljs.core.truth_(cljs.core.deref(open_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_right())]:[daiquiri.interpreter.interpret(attrs47763),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_right())]));
})()]),daiquiri.interpreter.interpret((content.cljs$core$IFn$_invoke$arity$1 ? content.cljs$core$IFn$_invoke$arity$1(open_QMARK_) : content.call(null,open_QMARK_)))])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.page","open?","frontend.components.page/open?",1985200624))], null),"frontend.components.page/graph-filter-section");
frontend.components.page.filter_expand_area = rum.core.lazy_build(rum.core.build_defc,(function (open_QMARK_,content){
return daiquiri.core.create_element("div",{'style':{'maxHeight':(cljs.core.truth_(cljs.core.deref(open_QMARK_))?(400):(0))},'className':"relative overflow-hidden transition-all max-h-0 duration-700"},[daiquiri.interpreter.interpret(content)]);
}),null,"frontend.components.page/filter-expand-area");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_n_hops !== 'undefined')){
} else {
frontend.components.page._STAR_n_hops = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_focus_nodes !== 'undefined')){
} else {
frontend.components.page._STAR_focus_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_graph_reset_QMARK_ !== 'undefined')){
} else {
frontend.components.page._STAR_graph_reset_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_journal_QMARK_ !== 'undefined')){
} else {
frontend.components.page._STAR_journal_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_orphan_pages_QMARK_ !== 'undefined')){
} else {
frontend.components.page._STAR_orphan_pages_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page._STAR_builtin_pages_QMARK_ !== 'undefined')){
} else {
frontend.components.page._STAR_builtin_pages_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.page.graph_filters = rum.core.lazy_build(rum.core.build_defc,(function (graph,settings,n_hops){
var map__47765 = settings;
var map__47765__$1 = cljs.core.__destructure_map(map__47765);
var journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47765__$1,new cljs.core.Keyword(null,"journal?","journal?",-897756522));
var orphan_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47765__$1,new cljs.core.Keyword(null,"orphan-pages?","orphan-pages?",-824819206),true);
var builtin_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47765__$1,new cljs.core.Keyword(null,"builtin-pages?","builtin-pages?",1299611390));
var journal_QMARK__SINGLEQUOTE_ = rum.core.react(frontend.components.page._STAR_journal_QMARK_);
var orphan_pages_QMARK__SINGLEQUOTE_ = rum.core.react(frontend.components.page._STAR_orphan_pages_QMARK_);
var builtin_pages_QMARK__SINGLEQUOTE_ = rum.core.react(frontend.components.page._STAR_builtin_pages_QMARK_);
var journal_QMARK___$1 = (((journal_QMARK__SINGLEQUOTE_ == null))?journal_QMARK_:journal_QMARK__SINGLEQUOTE_);
var orphan_pages_QMARK___$1 = (((orphan_pages_QMARK__SINGLEQUOTE_ == null))?orphan_pages_QMARK_:orphan_pages_QMARK__SINGLEQUOTE_);
var builtin_pages_QMARK___$1 = (((builtin_pages_QMARK__SINGLEQUOTE_ == null))?builtin_pages_QMARK_:builtin_pages_QMARK__SINGLEQUOTE_);
var set_setting_BANG_ = (function (key,value){
var new_settings = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings,key,value);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("graph","settings","graph/settings",1067459097),new_settings);
});
var search_graph_filters = frontend.state.sub(new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152));
var focus_nodes = rum.core.react(frontend.components.page._STAR_focus_nodes);
return daiquiri.core.create_element("div",{'className':"absolute top-4 right-4 graph-filters"},[daiquiri.core.create_element("div",{'className':"flex flex-col"},[daiquiri.core.create_element("div",{'className':"shadow-xl rounded-sm"},[daiquiri.core.create_element("ul",null,[frontend.components.page.graph_filter_section(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),"Nodes"], null),(function (open_QMARK_){
return frontend.components.page.filter_expand_area(open_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-70.px-4","p.text-sm.opacity-70.px-4",-1579335593),(function (){var c1 = cljs.core.count(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph));
var s1 = (((c1 > (1)))?"s":"");
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%d page%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1,s1], 0));
})()], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6","div.p-6",1412057822),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.mb-2","div.flex.items-center.justify-between.mb-2",1514079906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","enable-journals","settings-page/enable-journals",-1792981415)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(journal_QMARK___$1,(function (){
var value = cljs.core.not(journal_QMARK___$1);
cljs.core.reset_BANG_(frontend.components.page._STAR_journal_QMARK_,value);

return set_setting_BANG_(new cljs.core.Keyword(null,"journal?","journal?",-897756522),value);
}),true)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.mb-2","div.flex.items-center.justify-between.mb-2",1514079906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Orphan pages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(orphan_pages_QMARK___$1,(function (){
var value = cljs.core.not(orphan_pages_QMARK___$1);
cljs.core.reset_BANG_(frontend.components.page._STAR_orphan_pages_QMARK_,value);

return set_setting_BANG_(new cljs.core.Keyword(null,"orphan-pages?","orphan-pages?",-824819206),value);
}),true)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.mb-2","div.flex.items-center.justify-between.mb-2",1514079906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Built-in pages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(builtin_pages_QMARK___$1,(function (){
var value = cljs.core.not(builtin_pages_QMARK___$1);
cljs.core.reset_BANG_(frontend.components.page._STAR_builtin_pages_QMARK_,value);

return set_setting_BANG_(new cljs.core.Keyword(null,"builtin-pages?","builtin-pages?",1299611390),value);
}),true)], null)], null),((cljs.core.seq(focus_nodes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.mb-2","div.flex.flex-col.mb-2",760540690),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"N hops from selected nodes"], null),"N hops from selected nodes"], null),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pr-3","div.pr-3",1377924057),n_hops], null)], null),frontend.ui.slider((function (){var or__5043__auto__ = n_hops;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (10);
}
})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(10),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47764_SHARP_){
return cljs.core.reset_BANG_(frontend.components.page._STAR_n_hops,(p1__47764_SHARP_ | (0)));
})], null)))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.opacity-100","a.opacity-70.opacity-100",1562554182),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.page._STAR_graph_reset_QMARK_,cljs.core.not);

cljs.core.reset_BANG_(frontend.components.page._STAR_focus_nodes,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_(frontend.components.page._STAR_n_hops,null);

return frontend.state.clear_search_filters_BANG_();
})], null),"Reset Graph"], null)], null)], null));
}),cljs.core.PersistentArrayMap.EMPTY),frontend.components.page.graph_filter_section(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),"Search"], null),(function (open_QMARK_){
return frontend.components.page.filter_expand_area(open_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6","div.p-6",1412057822),((cljs.core.seq(search_graph_filters))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5520__auto__ = (function frontend$components$page$iter__47770(s__47771){
return (new cljs.core.LazySeq(null,(function (){
var s__47771__$1 = s__47771;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47771__$1);
if(temp__5720__auto__){
var s__47771__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47771__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47771__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47773 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47772 = (0);
while(true){
if((i__47772 < size__5519__auto__)){
var q = cljs.core._nth(c__5518__auto__,i__47772);
cljs.core.chunk_append(b__47773,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between.items-center.mb-2","div.flex.flex-row.justify-between.items-center.mb-2",14359473),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),q], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.search-filter-close.opacity-70.opacity-100","a.search-filter-close.opacity-70.opacity-100",820760152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__47772,q,c__5518__auto__,size__5519__auto__,b__47773,s__47771__$2,temp__5720__auto__,map__47765,map__47765__$1,journal_QMARK_,orphan_pages_QMARK_,builtin_pages_QMARK_,journal_QMARK__SINGLEQUOTE_,orphan_pages_QMARK__SINGLEQUOTE_,builtin_pages_QMARK__SINGLEQUOTE_,journal_QMARK___$1,orphan_pages_QMARK___$1,builtin_pages_QMARK___$1,set_setting_BANG_,search_graph_filters,focus_nodes){
return (function (){
return frontend.state.remove_search_filter_BANG_(q);
});})(i__47772,q,c__5518__auto__,size__5519__auto__,b__47773,s__47771__$2,temp__5720__auto__,map__47765,map__47765__$1,journal_QMARK_,orphan_pages_QMARK_,builtin_pages_QMARK_,journal_QMARK__SINGLEQUOTE_,orphan_pages_QMARK__SINGLEQUOTE_,builtin_pages_QMARK__SINGLEQUOTE_,journal_QMARK___$1,orphan_pages_QMARK___$1,builtin_pages_QMARK___$1,set_setting_BANG_,search_graph_filters,focus_nodes))
], null),frontend.components.svg.close], null)], null));

var G__47900 = (i__47772 + (1));
i__47772 = G__47900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47773),frontend$components$page$iter__47770(cljs.core.chunk_rest(s__47771__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47773),null);
}
} else {
var q = cljs.core.first(s__47771__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between.items-center.mb-2","div.flex.flex-row.justify-between.items-center.mb-2",14359473),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),q], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.search-filter-close.opacity-70.opacity-100","a.search-filter-close.opacity-70.opacity-100",820760152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (q,s__47771__$2,temp__5720__auto__,map__47765,map__47765__$1,journal_QMARK_,orphan_pages_QMARK_,builtin_pages_QMARK_,journal_QMARK__SINGLEQUOTE_,orphan_pages_QMARK__SINGLEQUOTE_,builtin_pages_QMARK__SINGLEQUOTE_,journal_QMARK___$1,orphan_pages_QMARK___$1,builtin_pages_QMARK___$1,set_setting_BANG_,search_graph_filters,focus_nodes){
return (function (){
return frontend.state.remove_search_filter_BANG_(q);
});})(q,s__47771__$2,temp__5720__auto__,map__47765,map__47765__$1,journal_QMARK_,orphan_pages_QMARK_,builtin_pages_QMARK_,journal_QMARK__SINGLEQUOTE_,orphan_pages_QMARK__SINGLEQUOTE_,builtin_pages_QMARK__SINGLEQUOTE_,journal_QMARK___$1,orphan_pages_QMARK___$1,builtin_pages_QMARK___$1,set_setting_BANG_,search_graph_filters,focus_nodes))
], null),frontend.components.svg.close], null)], null),frontend$components$page$iter__47770(cljs.core.rest(s__47771__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(search_graph_filters);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.opacity-100","a.opacity-70.opacity-100",1562554182),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.state.clear_search_filters_BANG_], null),"Clear All"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-70.opacity-100","a.opacity-70.opacity-100",1562554182),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.go_to_search_BANG_(new cljs.core.Keyword(null,"graph","graph",1558099509));
})], null),"Click to search"], null))], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-filters","search-filters",-2121899355),search_graph_filters], null))])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.page/graph-filters");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.page !== 'undefined') && (typeof frontend.components.page.last_node_position !== 'undefined')){
} else {
frontend.components.page.last_node_position = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.page.graph_register_handlers = (function frontend$components$page$graph_register_handlers(graph,focus_nodes,n_hops,dark_QMARK_){
graph.on("nodeClick",(function (event,node){
var x = event.x;
var y = event.y;
var drag_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,x,y], null),cljs.core.deref(frontend.components.page.last_node_position));
return frontend.extensions.graph.on_click_handler(graph,node,event,focus_nodes,n_hops,drag_QMARK_,dark_QMARK_);
}));

return graph.on("nodeMousedown",(function (event,node){
return cljs.core.reset_BANG_(frontend.components.page.last_node_position,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,event.x,event.y], null));
}));
});
frontend.components.page.global_graph_inner = rum.core.lazy_build(rum.core.build_defc,(function (graph,settings,theme){
var vec__47774 = rum.core.react(frontend.components.page.layout);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47774,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47774,(1),null);
var dark_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"dark");
var n_hops = rum.core.react(frontend.components.page._STAR_n_hops);
var reset_QMARK_ = rum.core.react(frontend.components.page._STAR_graph_reset_QMARK_);
var focus_nodes = (cljs.core.truth_(n_hops)?rum.core.react(frontend.components.page._STAR_focus_nodes):null);
var graph__$1 = ((((cljs.core.integer_QMARK_(n_hops)) && (((cljs.core.seq(focus_nodes)) && (cljs.core.not(new cljs.core.Keyword(null,"orphan-pages?","orphan-pages?",-824819206).cljs$core$IFn$_invoke$arity$1(settings)))))))?frontend.handler.graph.n_hops(graph,focus_nodes,n_hops):graph);
var graph__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(graph__$1,new cljs.core.Keyword(null,"links","links",-654507394),(function (links){
var nodes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph__$1)));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (link){
return ((cljs.core.not((function (){var G__47777 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(link);
return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__47777) : nodes.call(null,G__47777));
})())) && (cljs.core.not((function (){var G__47778 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link);
return (nodes.cljs$core$IFn$_invoke$arity$1 ? nodes.cljs$core$IFn$_invoke$arity$1(G__47778) : nodes.call(null,G__47778));
})())));
}),links);
}));
return daiquiri.core.create_element("div",{'id':"global-graph",'className':"relative"},[frontend.extensions.graph.graph_2d(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph__$2),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph__$2),new cljs.core.Keyword(null,"width","width",-384071477),(width - (24)),new cljs.core.Keyword(null,"height","height",1025178622),(height - (48)),new cljs.core.Keyword(null,"dark?","dark?",622933231),dark_QMARK_,new cljs.core.Keyword(null,"register-handlers-fn","register-handlers-fn",2000178094),(function (graph__$3){
return frontend.components.page.graph_register_handlers(graph__$3,frontend.components.page._STAR_focus_nodes,frontend.components.page._STAR_n_hops,dark_QMARK_);
}),new cljs.core.Keyword(null,"reset?","reset?",-1051875415),reset_QMARK_], null)),frontend.components.page.graph_filters(graph__$2,settings,n_hops)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.page/global-graph-inner");
frontend.components.page.filter_graph_nodes = (function frontend$components$page$filter_graph_nodes(nodes,filters){
if(cljs.core.seq(filters)){
var filter_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47779_SHARP_){
return cljs.core.re_pattern(["(?i)",frontend.util.regex_escape(p1__47779_SHARP_)].join(''));
}),filters);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.some((function (p1__47780_SHARP_){
return cljs.core.re_find(p1__47780_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
}),filter_patterns);
}),nodes);
} else {
return nodes;
}
});
frontend.components.page.global_graph = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var settings = frontend.state.sub_graph_config_settings();
var theme = frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
var graph = frontend.handler.graph.build_global_graph(theme,settings);
var search_graph_filters = frontend.state.sub(new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152));
var graph__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(graph,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(function (p1__47781_SHARP_){
return frontend.components.page.filter_graph_nodes(p1__47781_SHARP_,search_graph_filters);
}));
return frontend.components.page.global_graph_inner(graph__$1,settings,theme);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
return frontend.mixins.listen(state,window,"resize",(function (_e){
return cljs.core.reset_BANG_(frontend.components.page.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
}));
})),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
frontend.state.set_search_mode_BANG_(new cljs.core.Keyword(null,"graph","graph",1558099509));

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.components.page._STAR_n_hops,null);

cljs.core.reset_BANG_(frontend.components.page._STAR_focus_nodes,cljs.core.PersistentVector.EMPTY);

frontend.state.set_search_mode_BANG_(new cljs.core.Keyword(null,"global","global",93595047));

return state;
})], null)], null),"frontend.components.page/global-graph");
frontend.components.page.page_graph_inner = rum.core.lazy_build(rum.core.build_defc,(function (_page,graph,dark_QMARK_){
return daiquiri.core.create_element("div",{'className':"sidebar-item flex-col"},[frontend.extensions.graph.graph_2d(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"dark?","dark?",622933231),dark_QMARK_,new cljs.core.Keyword(null,"register-handlers-fn","register-handlers-fn",2000178094),(function (graph__$1){
return frontend.components.page.graph_register_handlers(graph__$1,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),dark_QMARK_);
})], null))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.page/page-graph-inner");
frontend.components.page.page_graph = rum.core.lazy_build(rum.core.build_defc,(function (){
var page = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),frontend.state.sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
if(and__5041__auto__){
return frontend.state.sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.date.today();
}
})();
var theme = new cljs.core.Keyword("ui","theme","ui/theme",-1247877132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var dark_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"dark");
var graph = (cljs.core.truth_(frontend.util.uuid_string_QMARK_(page))?frontend.handler.graph.build_block_graph(cljs.core.uuid(page),theme):frontend.handler.graph.build_page_graph(page,theme));
if(cljs.core.seq(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph))){
return frontend.components.page.page_graph_inner(page,graph,dark_QMARK_);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.db_mixins.query,rum.core.reactive], null),"frontend.components.page/page-graph");
frontend.components.page.sort_pages_by = (function frontend$components$page$sort_pages_by(by_item,desc_QMARK_,pages){
var comp = (cljs.core.truth_(desc_QMARK_)?cljs.core._GT_:cljs.core._LT_);
var by_item__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(by_item,new cljs.core.Keyword("block","name","block/name",1619760316)))?(function (x){
return clojure.string.lower_case(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(x));
}):by_item);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(by_item__$1,comp,pages);
});
frontend.components.page.checkbox_opt = rum.core.lazy_build(rum.core.build_defc,(function (key,checked,opts){
var _STAR_input = rum.core.create_ref();
var indeterminate_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"indeterminate","indeterminate",-513040976).cljs$core$IFn$_invoke$arity$1(opts));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return (rum.core.deref(_STAR_input).indeterminate = indeterminate_QMARK_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [indeterminate_QMARK_], null));

return daiquiri.core.create_element("label",{'htmlFor':key},[(function (){var attrs47782 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(checked),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_input,new cljs.core.Keyword(null,"id","id",-1388402092),key], null),opts], 0));
return daiquiri.core.create_element("input",((cljs.core.map_QMARK_(attrs47782))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-checkbox"], null)], null),attrs47782], 0))):{'className':"form-checkbox"}),((cljs.core.map_QMARK_(attrs47782))?null:[daiquiri.interpreter.interpret(attrs47782)]));
})()]);
}),null,"frontend.components.page/checkbox-opt");
frontend.components.page.sortable_title = rum.core.lazy_build(rum.core.build_defc,(function (title,key,by_item,desc_QMARK_){
return daiquiri.core.create_element("th",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(key)], null))},[daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(by_item,key);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(desc_QMARK_,cljs.core.not);
})},[daiquiri.core.create_element("span",{'className':"flex items-center"},[(function (){var attrs47783 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs47783))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-1"], null)], null),attrs47783], 0))):{'className':"mr-1"}),((cljs.core.map_QMARK_(attrs47783))?null:[daiquiri.interpreter.interpret(attrs47783)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(by_item),key))?(function (){var attrs47784 = (cljs.core.truth_(cljs.core.deref(desc_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_up());
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs47784))?daiquiri.interpreter.element_attributes(attrs47784):null),((cljs.core.map_QMARK_(attrs47784))?null:[daiquiri.interpreter.interpret(attrs47784)]));
})():null)])])]);
}),null,"frontend.components.page/sortable-title");
frontend.components.page.batch_delete_dialog = (function frontend$components$page$batch_delete_dialog(pages,orphaned_pages_QMARK_,refresh_fn){
return (function (close_fn){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:flex.items-center","div.sm:flex.items-center",1228718030),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100.sm:mx-0.sm:h-10.sm:w-10","div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100.sm:mx-0.sm:h-10.sm:w-10",-669226852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-red-600.text-xl","span.text-red-600.text-xl",812982760),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("alert-triangle")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left","div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left",-1344715931),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#modal-headline.text-lg.leading-6.font-medium","h3#modal-headline.text-lg.leading-6.font-medium",365314317),(cljs.core.truth_(orphaned_pages_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remove-orphaned-pages","remove-orphaned-pages",-1101045668)], 0))),"?"].join(''):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","delete-confirmation","page/delete-confirmation",-1967752819)], 0)))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-auto.cp__all_pages_table.mt-4","table.table-auto.cp__all_pages_table.mt-4",-950590708),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.opacity-70","tr.opacity-70",-1367042518),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"#"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","name","block/name",1619760316)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","backlinks","page/backlinks",1645776383)], 0))], null)], null),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","created-at","page/created-at",-84781299)], 0))], null)], null)),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","updated-at","page/updated-at",-1598282641)], 0))], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5520__auto__ = (function frontend$components$page$batch_delete_dialog_$_iter__47785(s__47786){
return (new cljs.core.LazySeq(null,(function (){
var s__47786__$1 = s__47786;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47786__$1);
if(temp__5720__auto__){
var s__47786__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47786__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47786__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47788 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47787 = (0);
while(true){
if((i__47787 < size__5519__auto__)){
var vec__47789 = cljs.core._nth(c__5518__auto__,i__47787);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47789,(0),null);
var map__47792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47789,(1),null);
var map__47792__$1 = cljs.core.__destructure_map(map__47792);
var page = map__47792__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47792__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47792__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47792__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var backlinks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47792__$1,new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441));
cljs.core.chunk_append(b__47788,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.n.w-12","td.n.w-12",-2045477331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70","span.opacity-70",1907592405),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((n + (1))),"."].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.name","td.name",-643029721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)], null))], null),frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,page)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.backlinks","td.backlinks",1215238996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__5043__auto__ = backlinks;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "0";
}
})()], null)], null),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.created-at","td.created-at",694689899),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(created_at)?frontend.date.int__GT_local_time_2(created_at):"Unknown")], null)], null)),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.updated-at","td.updated-at",1830087514),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(updated_at)?frontend.date.int__GT_local_time_2(updated_at):"Unknown")], null)], null))], null));

var G__47911 = (i__47787 + (1));
i__47787 = G__47911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47788),frontend$components$page$batch_delete_dialog_$_iter__47785(cljs.core.chunk_rest(s__47786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47788),null);
}
} else {
var vec__47793 = cljs.core.first(s__47786__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47793,(0),null);
var map__47796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47793,(1),null);
var map__47796__$1 = cljs.core.__destructure_map(map__47796);
var page = map__47796__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47796__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47796__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47796__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var backlinks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47796__$1,new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441));
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.n.w-12","td.n.w-12",-2045477331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70","span.opacity-70",1907592405),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((n + (1))),"."].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.name","td.name",-643029721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)], null))], null),frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,page)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.backlinks","td.backlinks",1215238996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__5043__auto__ = backlinks;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "0";
}
})()], null)], null),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.created-at","td.created-at",694689899),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(created_at)?frontend.date.int__GT_local_time_2(created_at):"Unknown")], null)], null)),(cljs.core.truth_(orphaned_pages_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.updated-at","td.updated-at",1830087514),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(updated_at)?frontend.date.int__GT_local_time_2(updated_at):"Unknown")], null)], null))], null),frontend$components$page$batch_delete_dialog_$_iter__47785(cljs.core.rest(s__47786__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(pages));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pt-6.flex.justify-end","div.pt-6.flex.justify-end",-1838994577),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-2","span.pr-2",1899405119),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], 0))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yes","yes",182838819)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

var seq__47797_47918 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),pages));
var chunk__47798_47919 = null;
var count__47799_47920 = (0);
var i__47800_47921 = (0);
while(true){
if((i__47800_47921 < count__47799_47920)){
var page_name_47922 = chunk__47798_47919.cljs$core$IIndexed$_nth$arity$2(null,i__47800_47921);
frontend.handler.page.delete_BANG_(page_name_47922,((function (seq__47797_47918,chunk__47798_47919,count__47799_47920,i__47800_47921,page_name_47922){
return (function (){
return cljs.core.List.EMPTY;
});})(seq__47797_47918,chunk__47798_47919,count__47799_47920,i__47800_47921,page_name_47922))
);


var G__47929 = seq__47797_47918;
var G__47930 = chunk__47798_47919;
var G__47931 = count__47799_47920;
var G__47932 = (i__47800_47921 + (1));
seq__47797_47918 = G__47929;
chunk__47798_47919 = G__47930;
count__47799_47920 = G__47931;
i__47800_47921 = G__47932;
continue;
} else {
var temp__5720__auto___47933 = cljs.core.seq(seq__47797_47918);
if(temp__5720__auto___47933){
var seq__47797_47934__$1 = temp__5720__auto___47933;
if(cljs.core.chunked_seq_QMARK_(seq__47797_47934__$1)){
var c__5565__auto___47935 = cljs.core.chunk_first(seq__47797_47934__$1);
var G__47936 = cljs.core.chunk_rest(seq__47797_47934__$1);
var G__47937 = c__5565__auto___47935;
var G__47938 = cljs.core.count(c__5565__auto___47935);
var G__47939 = (0);
seq__47797_47918 = G__47936;
chunk__47798_47919 = G__47937;
count__47799_47920 = G__47938;
i__47800_47921 = G__47939;
continue;
} else {
var page_name_47940 = cljs.core.first(seq__47797_47934__$1);
frontend.handler.page.delete_BANG_(page_name_47940,((function (seq__47797_47918,chunk__47798_47919,count__47799_47920,i__47800_47921,page_name_47940,seq__47797_47934__$1,temp__5720__auto___47933){
return (function (){
return cljs.core.List.EMPTY;
});})(seq__47797_47918,chunk__47798_47919,count__47799_47920,i__47800_47921,page_name_47940,seq__47797_47934__$1,temp__5720__auto___47933))
);


var G__47941 = cljs.core.next(seq__47797_47934__$1);
var G__47942 = null;
var G__47943 = (0);
var G__47944 = (0);
seq__47797_47918 = G__47941;
chunk__47798_47919 = G__47942;
count__47799_47920 = G__47943;
i__47800_47921 = G__47944;
continue;
}
} else {
}
}
break;
}

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tips","all-done","tips/all-done",-433291957)], 0))),"!"].join(''),new cljs.core.Keyword(null,"success","success",1890645906));

return setTimeout((function (){
return (refresh_fn.cljs$core$IFn$_invoke$arity$0 ? refresh_fn.cljs$core$IFn$_invoke$arity$0() : refresh_fn.call(null));
}),(200));
})], 0))], null)], null);
});
});
frontend.components.page.all_pages = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var current_repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var per_page_num = (40);
var _STAR_sort_by_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.page","sort-by-item","frontend.components.page/sort-by-item",307335329));
var _STAR_desc_QMARK_ = new cljs.core.Keyword("frontend.components.page","desc?","frontend.components.page/desc?",-469547603).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_journal_QMARK_ = new cljs.core.Keyword("frontend.components.page","journals","frontend.components.page/journals",2069311928).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_results = new cljs.core.Keyword("frontend.components.page","results","frontend.components.page/results",198906230).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_results_all = new cljs.core.Keyword("frontend.components.page","results-all","frontend.components.page/results-all",-1149662250).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_checks = new cljs.core.Keyword("frontend.components.page","checks","frontend.components.page/checks",-236499980).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_pages = new cljs.core.Keyword("frontend.components.page","pages","frontend.components.page/pages",-1418153914).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_current_page = new cljs.core.Keyword("frontend.components.page","current-page","frontend.components.page/current-page",1280998925).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_filter_fn = new cljs.core.Keyword("frontend.components.page","filter-fn","frontend.components.page/filter-fn",-1892237326).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_search_key = new cljs.core.Keyword("frontend.components.page","search-key","frontend.components.page/search-key",308974929).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_search_input = rum.core.create_ref();
var _STAR_indeterminate = (function (){var G__47803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_STAR_checks], null);
var G__47804 = new cljs.core.Keyword("frontend.components.page","indeterminate","frontend.components.page/indeterminate",1341570075);
var G__47805 = (function (checks){
var temp__5720__auto__ = cljs.core.vals(checks);
if(cljs.core.truth_(temp__5720__auto__)){
var checks__$1 = temp__5720__auto__;
if(cljs.core.every_QMARK_(cljs.core.true_QMARK_,checks__$1)){
return (1);
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.true_QMARK_,checks__$1))){
return (-1);
} else {
return (0);
}
}
} else {
return null;
}
});
return (rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3 ? rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3(G__47803,G__47804,G__47805) : rum.core.derived_atom.call(null,G__47803,G__47804,G__47805));
})();
var mobile_QMARK_ = frontend.util.mobile_QMARK_();
var total_pages = ((cljs.core.not(cljs.core.deref(_STAR_results_all)))?(0):Math.ceil((cljs.core.count(cljs.core.deref(_STAR_results_all)) / per_page_num)));
var to_page = (function (page){
if((total_pages > (1))){
if((((page > (0))) && ((page <= total_pages)))){
cljs.core.reset_BANG_(_STAR_current_page,page);
} else {
cljs.core.reset_BANG_(_STAR_current_page,(1));
}

return setTimeout((function (){
return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0();
}));
} else {
return null;
}
});
var search_key = (function (key){
var temp__5720__auto__ = (function (){var and__5041__auto__ = key;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.trim(key);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var key__$1 = temp__5720__auto__;
if((((!(clojure.string.blank_QMARK_(key__$1)))) && (cljs.core.seq(cljs.core.deref(_STAR_results))))){
return cljs.core.reset_BANG_(_STAR_search_key,key__$1);
} else {
return cljs.core.reset_BANG_(_STAR_search_key,null);
}
} else {
return null;
}
});
var refresh_pages = (function (){
cljs.core.reset_BANG_(_STAR_pages,null);

return cljs.core.reset_BANG_(_STAR_current_page,(1));
});
return daiquiri.core.create_element("div",{'className':"flex-1 cp__all_pages"},[(function (){var attrs47806 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs47806))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs47806], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs47806))?null:[daiquiri.interpreter.interpret(attrs47806)]));
})(),(cljs.core.truth_(current_repo)?(function (){
if((cljs.core.deref(_STAR_pages) == null)){
var pages_47952 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,page){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(page,new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441),cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1((function (){var G__47807 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__47807) : frontend.db.entity.call(null,G__47807));
})())),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","idx","block/idx",1480967726),idx], 0));
}),frontend.handler.page.get_all_pages(current_repo));
cljs.core.reset_BANG_(_STAR_filter_fn,cljs.core.memoize((function (sort_by_item,desc_QMARK_,journal_QMARK_){
return frontend.components.page.sort_pages_by(sort_by_item,desc_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47801_SHARP_){
return ((cljs.core.boolean$(journal_QMARK_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,cljs.core.boolean$(new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(p1__47801_SHARP_)))));
}),pages_47952));
})));

daiquiri.interpreter.interpret(cljs.core.reset_BANG_(_STAR_pages,pages_47952));
} else {
}

if(cljs.core.truth_(cljs.core.deref(_STAR_filter_fn))){
var pages_47954 = (function (){var G__47809 = cljs.core.deref(_STAR_sort_by_item);
var G__47810 = cljs.core.deref(_STAR_desc_QMARK_);
var G__47811 = cljs.core.deref(_STAR_journal_QMARK_);
var fexpr__47808 = cljs.core.deref(_STAR_filter_fn);
return (fexpr__47808.cljs$core$IFn$_invoke$arity$3 ? fexpr__47808.cljs$core$IFn$_invoke$arity$3(G__47809,G__47810,G__47811) : fexpr__47808.call(null,G__47809,G__47810,G__47811));
})();
var pages_47955__$1 = (((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_search_key)))))?frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(pages_47954,(function (){var G__47812 = cljs.core.deref(_STAR_search_key);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__47812) : frontend.util.page_name_sanity_lc.call(null,G__47812));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),(20),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword("block","name","block/name",1619760316)], 0)):pages_47954);
var __47956 = cljs.core.reset_BANG_(_STAR_results_all,pages_47955__$1);
var pages_47957__$2 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(per_page_num,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((per_page_num * (cljs.core.deref(_STAR_current_page) - (1))),pages_47955__$1));
cljs.core.reset_BANG_(_STAR_checks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5520__auto__ = (function frontend$components$page$iter__47813(s__47814){
return (new cljs.core.LazySeq(null,(function (){
var s__47814__$1 = s__47814;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47814__$1);
if(temp__5720__auto__){
var s__47814__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47814__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47814__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47816 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47815 = (0);
while(true){
if((i__47815 < size__5519__auto__)){
var map__47817 = cljs.core._nth(c__5518__auto__,i__47815);
var map__47817__$1 = cljs.core.__destructure_map(map__47817);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47817__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
cljs.core.chunk_append(b__47816,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_checks),idx))], null));

var G__47961 = (i__47815 + (1));
i__47815 = G__47961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47816),frontend$components$page$iter__47813(cljs.core.chunk_rest(s__47814__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47816),null);
}
} else {
var map__47818 = cljs.core.first(s__47814__$2);
var map__47818__$1 = cljs.core.__destructure_map(map__47818);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47818__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_checks),idx))], null),frontend$components$page$iter__47813(cljs.core.rest(s__47814__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(pages_47957__$2);
})()));

daiquiri.interpreter.interpret(cljs.core.reset_BANG_(_STAR_results,pages_47957__$2));
} else {
}

return daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.actions","div.actions",1521484722),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-selected","has-selected",2005390583),(((cljs.core.deref(_STAR_indeterminate) == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(_STAR_indeterminate))))], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.l.flex.items-center","div.l.flex.items-center",143430372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.actions-wrap","div.actions-wrap",-1539885651),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("trash"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"delete","delete",-1768633620)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var selected = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__47819){
var vec__47820 = p__47819;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47820,(1),null);
return v;
}),cljs.core.deref(_STAR_checks));
var selected__$1 = (function (){var and__5041__auto__ = cljs.core.seq(selected);
if(and__5041__auto__){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__5520__auto__ = (function frontend$components$page$iter__47823(s__47824){
return (new cljs.core.LazySeq(null,(function (){
var s__47824__$1 = s__47824;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47824__$1);
if(temp__5720__auto__){
var s__47824__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47824__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47824__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47826 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47825 = (0);
while(true){
if((i__47825 < size__5519__auto__)){
var vec__47827 = cljs.core._nth(c__5518__auto__,i__47825);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47827,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47827,(1),null);
cljs.core.chunk_append(b__47826,k);

var G__47962 = (i__47825 + (1));
i__47825 = G__47962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47826),frontend$components$page$iter__47823(cljs.core.chunk_rest(s__47824__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47826),null);
}
} else {
var vec__47830 = cljs.core.first(s__47824__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47830,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47830,(1),null);
return cljs.core.cons(k,frontend$components$page$iter__47823(cljs.core.rest(s__47824__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(selected);
})());
} else {
return and__5041__auto__;
}
})();
var temp__5720__auto__ = (function (){var and__5041__auto__ = selected__$1;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47802_SHARP_){
return cljs.core.contains_QMARK_(selected__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726).cljs$core$IFn$_invoke$arity$1(p1__47802_SHARP_));
}),cljs.core.deref(_STAR_results));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var pages = temp__5720__auto__;
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.page.batch_delete_dialog(pages,false,(function (){
cljs.core.reset_BANG_(_STAR_checks,null);

return refresh_pages();
})));
} else {
return null;
}
}),new cljs.core.Keyword(null,"small?","small?",95242445),true], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-wrap.flex.items-center.pl-2","div.search-wrap.flex.items-center.pl-2",-1794619907),(function (){var search_fn = (function (){
var input = rum.core.deref(_STAR_search_input);
search_key(input.value);

return cljs.core.reset_BANG_(_STAR_current_page,(1));
});
var reset_fn = (function (){
var input = rum.core.deref(_STAR_search_input);
(input.value = "");

return cljs.core.reset_BANG_(_STAR_search_key,null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("search"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),search_fn,new cljs.core.Keyword(null,"small?","small?",95242445),true], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","page-names","search/page-names",-1441293352)], 0)),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (e){
var target = e.target;
if(clojure.string.blank_QMARK_(target.value)){
return cljs.core.reset_BANG_(_STAR_search_key,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),e.keyCode)){
return search_fn();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
return reset_fn();
} else {
return null;
}
}
}
}),new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_search_input,new cljs.core.Keyword(null,"default-value","default-value",232220170),""], null)], null),(((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_search_key)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.cancel","a.cancel",-604588983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_fn], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("x")], null):null)], null);
})()], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.r.flex.items-center.justify-between","div.r.flex.items-center.justify-between",-848152553),(function (){var orphaned_pages = frontend.db.model.get_orphaned_pages(cljs.core.PersistentArrayMap.EMPTY);
var orphaned_pages_QMARK_ = cljs.core.seq(orphaned_pages);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ml-1.pr-2.opacity-70.hover:opacity-100","a.ml-1.pr-2.opacity-70.hover:opacity-100",2085922396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(orphaned_pages_QMARK_){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.page.batch_delete_dialog(orphaned_pages,true,(function (){
cljs.core.reset_BANG_(_STAR_checks,null);

return refresh_pages();
})));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Congratulations, no orphaned pages in your graph!",new cljs.core.Keyword(null,"success","success",1890645906));
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("file-x"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remove-orphaned-pages","remove-orphaned-pages",-1101045668)], 0))], null)], null)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ml-1.pr-2.opacity-70.hover:opacity-100","a.ml-1.pr-2.opacity-70.hover:opacity-100",2085922396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all-files","all-files",1120339891))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("files"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-files","all-files",1120339891)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","show-journals","page/show-journals",-981574769)], 0)))," ?"].join('')], null),new cljs.core.Keyword(null,"arrow","arrow",1071351425),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.journal","a.button.journal",998619172),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.boolean$(cljs.core.deref(_STAR_journal_QMARK_))], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_journal_QMARK_,cljs.core.not(cljs.core.deref(_STAR_journal_QMARK_)));
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("calendar")], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.paginates","div.paginates",243412391),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.opacity-60.text-sm","span.flex.items-center.opacity-60.text-sm",-1453184050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-1","span.pr-1",-524129241),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("paginates","pages","paginates/pages",977255411),cljs.core.count(cljs.core.deref(_STAR_results_all))], 0))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-first","is-first",978437250),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(_STAR_current_page)),new cljs.core.Keyword(null,"is-last","is-last",-2060069857),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_current_page),total_pages)], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.py-4.pr-2","a.py-4.pr-2",-2105364555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return to_page((cljs.core.deref(_STAR_current_page) - (1)));
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-left"),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("paginates","prev","paginates/prev",-40373326)], 0)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-30","span.opacity-30",-1901092434),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_current_page)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_pages)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.py-4.pl-2","a.py-4.pl-2",-1402425910),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return to_page((cljs.core.deref(_STAR_current_page) + (1)));
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("paginates","next","paginates/next",-1127294609)], 0)))," "].join(''),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")], null)], null)], null)], null)], null),daiquiri.core.create_element("table",{'className':"table-auto cp__all_pages_table"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",null,[daiquiri.core.create_element("th",{'className':"selector"},[frontend.components.page.checkbox_opt("all-pages-select-all",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(_STAR_indeterminate)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var indeterminate_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),cljs.core.deref(_STAR_indeterminate));
var all_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(_STAR_indeterminate));
var seq__47857 = cljs.core.seq(cljs.core.deref(_STAR_results));
var chunk__47858 = null;
var count__47859 = (0);
var i__47860 = (0);
while(true){
if((i__47860 < count__47859)){
var map__47863 = chunk__47858.cljs$core$IIndexed$_nth$arity$2(null,i__47860);
var map__47863__$1 = cljs.core.__destructure_map(map__47863);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47863__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_checks,cljs.core.assoc,idx,((indeterminate_QMARK_) || ((!(all_QMARK_)))));


var G__47968 = seq__47857;
var G__47969 = chunk__47858;
var G__47970 = count__47859;
var G__47971 = (i__47860 + (1));
seq__47857 = G__47968;
chunk__47858 = G__47969;
count__47859 = G__47970;
i__47860 = G__47971;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__47857);
if(temp__5720__auto__){
var seq__47857__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47857__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47857__$1);
var G__47972 = cljs.core.chunk_rest(seq__47857__$1);
var G__47973 = c__5565__auto__;
var G__47974 = cljs.core.count(c__5565__auto__);
var G__47975 = (0);
seq__47857 = G__47972;
chunk__47858 = G__47973;
count__47859 = G__47974;
i__47860 = G__47975;
continue;
} else {
var map__47864 = cljs.core.first(seq__47857__$1);
var map__47864__$1 = cljs.core.__destructure_map(map__47864);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47864__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_checks,cljs.core.assoc,idx,((indeterminate_QMARK_) || ((!(all_QMARK_)))));


var G__47976 = cljs.core.next(seq__47857__$1);
var G__47977 = null;
var G__47978 = (0);
var G__47979 = (0);
seq__47857 = G__47976;
chunk__47858 = G__47977;
count__47859 = G__47978;
i__47860 = G__47979;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"indeterminate","indeterminate",-513040976),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),cljs.core.deref(_STAR_indeterminate))], null))]),frontend.components.page.sortable_title(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","name","block/name",1619760316)], 0)),new cljs.core.Keyword("block","name","block/name",1619760316),_STAR_sort_by_item,_STAR_desc_QMARK_),(cljs.core.truth_(mobile_QMARK_)?null:daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.page.sortable_title(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","backlinks","page/backlinks",1645776383)], 0)),new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441),_STAR_sort_by_item,_STAR_desc_QMARK_),frontend.components.page.sortable_title(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","created-at","page/created-at",-84781299)], 0)),new cljs.core.Keyword("block","created-at","block/created-at",1440015),_STAR_sort_by_item,_STAR_desc_QMARK_),frontend.components.page.sortable_title(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","updated-at","page/updated-at",-1598282641)], 0)),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),_STAR_sort_by_item,_STAR_desc_QMARK_)], null)))])]),daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$page$iter__47865(s__47866){
return (new cljs.core.LazySeq(null,(function (){
var s__47866__$1 = s__47866;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47866__$1);
if(temp__5720__auto__){
var s__47866__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47866__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47866__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47868 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47867 = (0);
while(true){
if((i__47867 < size__5519__auto__)){
var map__47869 = cljs.core._nth(c__5518__auto__,i__47867);
var map__47869__$1 = cljs.core.__destructure_map(map__47869);
var page = map__47869__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47869__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47869__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47869__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47869__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var backlinks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47869__$1,new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441));
cljs.core.chunk_append(b__47868,((clojure.string.blank_QMARK_(name))?null:daiquiri.core.create_element("tr",{'key':name},[daiquiri.core.create_element("td",{'className':"selector"},[frontend.components.page.checkbox_opt(["label-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_checks),idx),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__47867,map__47869,map__47869__$1,page,idx,name,created_at,updated_at,backlinks,c__5518__auto__,size__5519__auto__,b__47868,s__47866__$2,temp__5720__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_pages,to_page,search_key,refresh_pages){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_checks,cljs.core.update,idx,cljs.core.not);
});})(i__47867,map__47869,map__47869__$1,page,idx,name,created_at,updated_at,backlinks,c__5518__auto__,size__5519__auto__,b__47868,s__47866__$2,temp__5720__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_pages,to_page,search_key,refresh_pages))
], null))]),daiquiri.core.create_element("td",{'className':"name"},[daiquiri.core.create_element("a",{'onClick':((function (i__47867,map__47869,map__47869__$1,page,idx,name,created_at,updated_at,backlinks,c__5518__auto__,size__5519__auto__,b__47868,s__47866__$2,temp__5720__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_pages,to_page,search_key,refresh_pages){
return (function (e){
var repo = frontend.state.get_current_repo();
if(cljs.core.truth_(frontend.components.page.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.sidebar_add_block_BANG_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
});})(i__47867,map__47869,map__47869__$1,page,idx,name,created_at,updated_at,backlinks,c__5518__auto__,size__5519__auto__,b__47868,s__47866__$2,temp__5720__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_pages,to_page,search_key,refresh_pages))
,'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)], null))},[frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,page)])]),(cljs.core.truth_(mobile_QMARK_)?null:daiquiri.core.create_element("td",{'className':"backlinks"},[(function (){var attrs47870 = backlinks;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs47870))?daiquiri.interpreter.element_attributes(attrs47870):null),((cljs.core.map_QMARK_(attrs47870))?null:[daiquiri.interpreter.interpret(attrs47870)]));
})()])),(cljs.core.truth_(mobile_QMARK_)?null:daiquiri.core.create_element("td",{'className':"created-at"},[(function (){var attrs47871 = (cljs.core.truth_(created_at)?frontend.date.int__GT_local_time_2(created_at):"Unknown");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs47871))?daiquiri.interpreter.element_attributes(attrs47871):null),((cljs.core.map_QMARK_(attrs47871))?null:[daiquiri.interpreter.interpret(attrs47871)]));
})()])),(cljs.core.truth_(mobile_QMARK_)?null:daiquiri.core.create_element("td",{'className':"updated-at"},[(function (){var attrs47872 = (cljs.core.truth_(updated_at)?frontend.date.int__GT_local_time_2(updated_at):"Unknown");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs47872))?daiquiri.interpreter.element_attributes(attrs47872):null),((cljs.core.map_QMARK_(attrs47872))?null:[daiquiri.interpreter.interpret(attrs47872)]));
})()]))])));

var G__47981 = (i__47867 + (1));
i__47867 = G__47981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47868),frontend$components$page$iter__47865(cljs.core.chunk_rest(s__47866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47868),null);
}
} else {
var map__47873 = cljs.core.first(s__47866__$2);
var map__47873__$1 = cljs.core.__destructure_map(map__47873);
var page = map__47873__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47873__$1,new cljs.core.Keyword("block","idx","block/idx",1480967726));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47873__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47873__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47873__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var backlinks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47873__$1,new cljs.core.Keyword("block","backlinks","block/backlinks",1819963441));
return cljs.core.cons(((clojure.string.blank_QMARK_(name))?null:daiquiri.core.create_element("tr",{'key':name},[daiquiri.core.create_element("td",{'className':"selector"},[frontend.components.page.checkbox_opt(["label-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_checks),idx),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__47873,map__47873__$1,page,idx,name,created_at,updated_at,backlinks,s__47866__$2,temp__5720__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_pages,to_page,search_key,refresh_pages){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_checks,cljs.core.update,idx,cljs.core.not);
});})(map__47873,map__47873__$1,page,idx,name,created_at,updated_at,backlinks,s__47866__$2,temp__5720__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_pages,to_page,search_key,refresh_pages))
], null))]),daiquiri.core.create_element("td",{'className':"name"},[daiquiri.core.create_element("a",{'onClick':((function (map__47873,map__47873__$1,page,idx,name,created_at,updated_at,backlinks,s__47866__$2,temp__5720__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_pages,to_page,search_key,refresh_pages){
return (function (e){
var repo = frontend.state.get_current_repo();
if(cljs.core.truth_(frontend.components.page.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.sidebar_add_block_BANG_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
});})(map__47873,map__47873__$1,page,idx,name,created_at,updated_at,backlinks,s__47866__$2,temp__5720__auto__,current_repo,per_page_num,_STAR_sort_by_item,_STAR_desc_QMARK_,_STAR_journal_QMARK_,_STAR_results,_STAR_results_all,_STAR_checks,_STAR_pages,_STAR_current_page,_STAR_filter_fn,_STAR_search_key,_STAR_search_input,_STAR_indeterminate,mobile_QMARK_,total_pages,to_page,search_key,refresh_pages))
,'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)], null))},[frontend.components.block.page_cp(cljs.core.PersistentArrayMap.EMPTY,page)])]),(cljs.core.truth_(mobile_QMARK_)?null:daiquiri.core.create_element("td",{'className':"backlinks"},[(function (){var attrs47870 = backlinks;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs47870))?daiquiri.interpreter.element_attributes(attrs47870):null),((cljs.core.map_QMARK_(attrs47870))?null:[daiquiri.interpreter.interpret(attrs47870)]));
})()])),(cljs.core.truth_(mobile_QMARK_)?null:daiquiri.core.create_element("td",{'className':"created-at"},[(function (){var attrs47871 = (cljs.core.truth_(created_at)?frontend.date.int__GT_local_time_2(created_at):"Unknown");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs47871))?daiquiri.interpreter.element_attributes(attrs47871):null),((cljs.core.map_QMARK_(attrs47871))?null:[daiquiri.interpreter.interpret(attrs47871)]));
})()])),(cljs.core.truth_(mobile_QMARK_)?null:daiquiri.core.create_element("td",{'className':"updated-at"},[(function (){var attrs47872 = (cljs.core.truth_(updated_at)?frontend.date.int__GT_local_time_2(updated_at):"Unknown");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs47872))?daiquiri.interpreter.element_attributes(attrs47872):null),((cljs.core.map_QMARK_(attrs47872))?null:[daiquiri.interpreter.interpret(attrs47872)]));
})()]))])),frontend$components$page$iter__47865(cljs.core.rest(s__47866__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.deref(_STAR_results));
})())])]),daiquiri.core.create_element("div",{'className':"paginates"},[daiquiri.core.create_element("span",null,null),daiquiri.core.create_element("span",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-first","is-first",978437250),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(_STAR_current_page)),new cljs.core.Keyword(null,"is-last","is-last",-2060069857),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_current_page),total_pages)], null)], null))], null))},[daiquiri.core.create_element("a",{'onClick':(function (){
return to_page((cljs.core.deref(_STAR_current_page) - (1)));
}),'className':"py-4 text-sm"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-left")),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("paginates","prev","paginates/prev",-40373326)], 0)))].join('')]),daiquiri.core.create_element("a",{'onClick':(function (){
return to_page((cljs.core.deref(_STAR_current_page) + (1)));
}),'className':"py-4 pl-2 text-sm"},[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("paginates","next","paginates/next",-1127294609)], 0)))," "].join(''),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right"))])])])], null));
})()
:null)]);
}),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.page","pages","frontend.components.page/pages",-1418153914)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.page","search-key","frontend.components.page/search-key",308974929)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.page","results-all","frontend.components.page/results-all",-1149662250)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.page","results","frontend.components.page/results",198906230)),rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("frontend.components.page","checks","frontend.components.page/checks",-236499980)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword("frontend.components.page","sort-by-item","frontend.components.page/sort-by-item",307335329)),rum.core.local.cljs$core$IFn$_invoke$arity$2(true,new cljs.core.Keyword("frontend.components.page","desc?","frontend.components.page/desc?",-469547603)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.page","journals","frontend.components.page/journals",2069311928)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.page","filter-fn","frontend.components.page/filter-fn",-1892237326)),rum.core.local.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("frontend.components.page","current-page","frontend.components.page/current-page",1280998925))], null),"frontend.components.page/all-pages");

//# sourceMappingURL=frontend.components.page.js.map
