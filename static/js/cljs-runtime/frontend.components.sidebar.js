goog.provide('frontend.components.sidebar');
goog.scope(function(){
  frontend.components.sidebar.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.sidebar.nav_content_item = rum.core.lazy_build(rum.core.build_defc,(function (name,p__72382,child){
var map__72383 = p__72382;
var map__72383__$1 = cljs.core.__destructure_map(map__72383);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72383__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-content-item","is-expand",class$], null))},[daiquiri.core.create_element("div",{'onClick':(function (e){
var target = e.target;
var parent = target.closest(".nav-content-item");
return parent.classList.toggle("is-expand");
}),'className':"header items-center mb-1"},[(function (){var attrs72385 = name;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs72385))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-medium","fade-link"], null)], null),attrs72385], 0))):{'className':"font-medium fade-link"}),((cljs.core.map_QMARK_(attrs72385))?null:[daiquiri.interpreter.interpret(attrs72385)]));
})(),daiquiri.core.create_element("span",null,[(function (){var attrs72386 = frontend.components.svg.arrow_down_v2;
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs72386))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["more"], null)], null),attrs72386], 0))):{'className':"more"}),((cljs.core.map_QMARK_(attrs72386))?null:[daiquiri.interpreter.interpret(attrs72386)]));
})()])]),(function (){var attrs72384 = child;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs72384))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bd"], null)], null),attrs72384], 0))):{'className':"bd"}),((cljs.core.map_QMARK_(attrs72384))?null:[daiquiri.interpreter.interpret(attrs72384)]));
})()]);
}),null,"frontend.components.sidebar/nav-content-item");
frontend.components.sidebar.delta_y = (function frontend$components$sidebar$delta_y(e){
var temp__5720__auto__ = e.target;
if(cljs.core.truth_(temp__5720__auto__)){
var target = temp__5720__auto__;
var rect = target.getBoundingClientRect();
return (e.pageY - rect.top);
} else {
return null;
}
});
frontend.components.sidebar.move_up_QMARK_ = (function frontend$components$sidebar$move_up_QMARK_(e){
var delta = frontend.components.sidebar.delta_y(e);
return (delta < (14));
});
frontend.components.sidebar.page_name = rum.core.lazy_build(rum.core.build_defc,(function (name,icon){
var original_name = frontend.db.model.get_page_original_name(name);
return daiquiri.core.create_element("a",{'onClick':(function (e){
var name__$1 = frontend.util.safe_page_name_sanity_lc(name);
if(cljs.core.truth_(frontend.components.sidebar.goog$module$goog$object.get(e,"shiftKey"))){
var temp__5720__auto__ = (function (){var G__72387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__72387) : frontend.db.entity.call(null,G__72387));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page_entity = temp__5720__auto__;
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(name__$1);
}
})},[(function (){var attrs72388 = icon;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs72388))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page-icon"], null)], null),attrs72388], 0))):{'className':"page-icon"}),((cljs.core.map_QMARK_(attrs72388))?null:[daiquiri.interpreter.interpret(attrs72388)]));
})(),frontend.extensions.pdf.assets.fix_local_asset_filename(original_name)]);
}),null,"frontend.components.sidebar/page-name");
frontend.components.sidebar.get_page_icon = (function frontend$components$sidebar$get_page_icon(page_entity){
var default_icon = "\u25E6";
var from_properties = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,page_entity),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
var or__4253__auto__ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_properties,""))?from_properties:null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default_icon;
}
});
frontend.components.sidebar.favorite_item = rum.core.lazy_build(rum.core.build_defcs,(function (state,_t,name,icon){
var up_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.sidebar","up?","frontend.components.sidebar/up?",208041052));
var dragging_over = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.sidebar","dragging-over","frontend.components.sidebar/dragging-over",1940507328));
var target = frontend.state.sub(new cljs.core.Keyword("favorites","dragging","favorites/dragging",-470167178));
return daiquiri.core.create_element("li",{'key':name,'data-ref':name,'draggable':true,'onDragStart':(function (_event){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("favorites","dragging","favorites/dragging",-470167178),name);
}),'onDragOver':(function (e){
frontend.util.stop(e);

cljs.core.reset_BANG_(dragging_over,name);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("favorites","dragging","favorites/dragging",-470167178)))){
return null;
} else {
return cljs.core.reset_BANG_(up_QMARK_,frontend.components.sidebar.move_up_QMARK_(e));
}
}),'onDragLeave':(function (_e){
return cljs.core.reset_BANG_(dragging_over,null);
}),'onDrop':(function (e){
frontend.handler.page.reorder_favorites_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),name,new cljs.core.Keyword(null,"up?","up?",77854972),frontend.components.sidebar.move_up_QMARK_(e)], null));

cljs.core.reset_BANG_(up_QMARK_,null);

return cljs.core.reset_BANG_(dragging_over,null);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["favorite-item",(cljs.core.truth_((function (){var and__4251__auto__ = target;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = cljs.core.deref(dragging_over);
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target,cljs.core.deref(dragging_over));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?"dragging-target":"")], null))},[frontend.components.sidebar.page_name(name,icon)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.sidebar","up?","frontend.components.sidebar/up?",208041052)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.sidebar","dragging-over","frontend.components.sidebar/dragging-over",1940507328))], null),"frontend.components.sidebar/favorite-item");
frontend.components.sidebar.favorites = rum.core.lazy_build(rum.core.build_defc,(function (t){
return frontend.components.sidebar.nav_content_item(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.text-sm.font-medium.rounded-md","a.flex.items-center.text-sm.font-medium.rounded-md",-833577947),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("star mr-1",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-1.ml-1","span.flex-1.ml-1",784039715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(2)], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("left-side-bar","nav-favorites","left-side-bar/nav-favorites",-1723503312)) : t.call(null,new cljs.core.Keyword("left-side-bar","nav-favorites","left-side-bar/nav-favorites",-1723503312)))], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"favorites",new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620),(function (e){
reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Favorites"], null));

return frontend.util.stop(e);
})], null),(function (){var favorites = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_graph_config())));
if(cljs.core.seq(favorites)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.favorites.text-sm","ul.favorites.text-sm",800189534),(function (){var iter__4652__auto__ = (function frontend$components$sidebar$iter__72395(s__72396){
return (new cljs.core.LazySeq(null,(function (){
var s__72396__$1 = s__72396;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72396__$1);
if(temp__5720__auto__){
var s__72396__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72396__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72396__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72398 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72397 = (0);
while(true){
if((i__72397 < size__4651__auto__)){
var name = cljs.core._nth(c__4650__auto__,i__72397);
cljs.core.chunk_append(b__72398,((clojure.string.blank_QMARK_(name))?null:(function (){var temp__5720__auto____$1 = (function (){var G__72399 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(name)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__72399) : frontend.db.entity.call(null,G__72399));
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var entity = temp__5720__auto____$1;
var icon = frontend.components.sidebar.get_page_icon(entity);
return frontend.components.sidebar.favorite_item(t,name,icon);
} else {
return null;
}
})()));

var G__72451 = (i__72397 + (1));
i__72397 = G__72451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72398),frontend$components$sidebar$iter__72395(cljs.core.chunk_rest(s__72396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72398),null);
}
} else {
var name = cljs.core.first(s__72396__$2);
return cljs.core.cons(((clojure.string.blank_QMARK_(name))?null:(function (){var temp__5720__auto____$1 = (function (){var G__72400 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(name)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__72400) : frontend.db.entity.call(null,G__72400));
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var entity = temp__5720__auto____$1;
var icon = frontend.components.sidebar.get_page_icon(entity);
return frontend.components.sidebar.favorite_item(t,name,icon);
} else {
return null;
}
})()),frontend$components$sidebar$iter__72395(cljs.core.rest(s__72396__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(favorites);
})()], null);
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.sidebar/favorites");
frontend.components.sidebar.recent_pages = rum.core.lazy_build(rum.core.build_defc,(function (t){
return frontend.components.sidebar.nav_content_item(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center.text-sm.font-medium.rounded-md","a.flex.items-center.text-sm.font-medium.rounded-md",-833577947),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("history mr-2",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-1","span.flex-1",1756749525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(2)], null)], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("left-side-bar","nav-recent-pages","left-side-bar/nav-recent-pages",-554223849)) : t.call(null,new cljs.core.Keyword("left-side-bar","nav-recent-pages","left-side-bar/nav-recent-pages",-554223849)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"recent"], null),(function (){var pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),frontend.util.distinct_by(new cljs.core.Keyword(null,"lowercase","lowercase",41029539),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lowercase","lowercase",41029539),frontend.util.safe_page_name_sanity_lc(page),new cljs.core.Keyword(null,"page","page",849072397),page], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,(frontend.db.sub_key_value.cljs$core$IFn$_invoke$arity$1 ? frontend.db.sub_key_value.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)) : frontend.db.sub_key_value.call(null,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842))))))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-sm","ul.text-sm",423832983),(function (){var iter__4652__auto__ = (function frontend$components$sidebar$iter__72407(s__72408){
return (new cljs.core.LazySeq(null,(function (){
var s__72408__$1 = s__72408;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72408__$1);
if(temp__5720__auto__){
var s__72408__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72408__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72408__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72410 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72409 = (0);
while(true){
if((i__72409 < size__4651__auto__)){
var name = cljs.core._nth(c__4650__auto__,i__72409);
cljs.core.chunk_append(b__72410,(function (){var temp__5720__auto____$1 = (function (){var G__72411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(name)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__72411) : frontend.db.entity.call(null,G__72411));
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var entity = temp__5720__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.recent-item.select-none","li.recent-item.select-none",1025549059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),name], null),frontend.components.sidebar.page_name(name,frontend.components.sidebar.get_page_icon(entity))], null);
} else {
return null;
}
})());

var G__72452 = (i__72409 + (1));
i__72409 = G__72452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72410),frontend$components$sidebar$iter__72407(cljs.core.chunk_rest(s__72408__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72410),null);
}
} else {
var name = cljs.core.first(s__72408__$2);
return cljs.core.cons((function (){var temp__5720__auto____$1 = (function (){var G__72412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(name)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__72412) : frontend.db.entity.call(null,G__72412));
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var entity = temp__5720__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.recent-item.select-none","li.recent-item.select-none",1025549059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),name], null),frontend.components.sidebar.page_name(name,frontend.components.sidebar.get_page_icon(entity))], null);
} else {
return null;
}
})(),frontend$components$sidebar$iter__72407(cljs.core.rest(s__72408__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(pages);
})()], null);
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.sidebar/recent-pages");
frontend.components.sidebar.flashcards = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var num = frontend.state.sub(new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746));
return daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-cards","modal/show-cards",1918730906)], null));
}),'className':"item group flex items-center px-2 py-2 text-sm font-medium rounded-md"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("infinity mr-3",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null))),(function (){var attrs72413 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","flashcards","right-side-bar/flashcards",-1920196000)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs72413))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs72413], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs72413))?null:[daiquiri.interpreter.interpret(attrs72413)]));
})(),(cljs.core.truth_((function (){var and__4251__auto__ = num;
if(cljs.core.truth_(and__4251__auto__)){
return (!((num === (0))));
} else {
return and__4251__auto__;
}
})())?(function (){var attrs72414 = num;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs72414))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-3","inline-block","py-0","5","px-3","text-xs","font-medium","rounded-full","fade-in"], null)], null),attrs72414], 0))):{'className':"ml-3 inline-block py-0 5 px-3 text-xs font-medium rounded-full fade-in"}),((cljs.core.map_QMARK_(attrs72414))?null:[daiquiri.interpreter.interpret(attrs72414)]));
})():null)]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.db_mixins.query,rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.extensions.srs.update_cards_due_count_BANG_();

return state;
})], null)], null),"frontend.components.sidebar/flashcards");
frontend.components.sidebar.get_default_home_if_valid = (function frontend$components$sidebar$get_default_home_if_valid(){
var temp__5720__auto__ = frontend.state.get_default_home();
if(cljs.core.truth_(temp__5720__auto__)){
var default_home = temp__5720__auto__;
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home);
var page__$1 = ((((typeof page === 'string') && ((!(clojure.string.blank_QMARK_(page))))))?(function (){var G__72415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__72415) : frontend.db.entity.call(null,G__72415));
})():null);
if(cljs.core.truth_(page__$1)){
return default_home;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(default_home,new cljs.core.Keyword(null,"page","page",849072397));
}
} else {
return null;
}
});
frontend.components.sidebar.sidebar_item = (function frontend$components$sidebar$sidebar_item(p__72416){
var map__72417 = p__72416;
var map__72417__$1 = cljs.core.__destructure_map(map__72417);
var on_click_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72417__$1,new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72417__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72417__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72417__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72417__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item.group.flex.items-center.px-2.py-2.text-sm.font-medium.rounded-md","a.item.group.flex.items-center.px-2.py-2.text-sm.font-medium.rounded-md",-1773757540),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_handler,new cljs.core.Keyword(null,"href","href",-793805698),href], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)," mr-3"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-1","span.flex-1",1756749525),title], null)], null)], null);
});
frontend.components.sidebar.sidebar_nav = rum.core.lazy_build(rum.core.build_defc,(function (_route_match,close_modal_fn,left_sidebar_open_QMARK_){
var default_home = frontend.components.sidebar.get_default_home_if_valid();
return daiquiri.core.create_element("div",{'onClick':(function (p1__72418_SHARP_){
var temp__5720__auto__ = (function (){var and__4251__auto__ = frontend.util.sm_breakpoint_QMARK_();
if(and__4251__auto__){
return p1__72418_SHARP_.target;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var target = temp__5720__auto__;
if(cljs.core.truth_(cljs.core.some((function (sel){
return cljs.core.boolean$(target.closest(sel));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".favorites .bd",".recent .bd",".dropdown-wrapper",".nav-header"], null)))){
return (close_modal_fn.cljs$core$IFn$_invoke$arity$0 ? close_modal_fn.cljs$core$IFn$_invoke$arity$0() : close_modal_fn.call(null));
} else {
return null;
}
} else {
return null;
}
}),'className':"left-sidebar-inner flex-1 flex flex-col min-h-0"},[daiquiri.core.create_element("div",{'className':"flex flex-col pb-4 wrap"},[daiquiri.core.create_element("nav",{'aria-label':"Sidebar",'className':"px-2 space-y-1"},[frontend.components.repo.repos_dropdown(),(function (){var attrs72419 = (cljs.core.truth_(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home))?frontend.components.sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"home-nav",new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home),new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723),frontend.handler.route.redirect_to_home_BANG_,new cljs.core.Keyword(null,"icon","icon",1679606541),"home"], null)):frontend.components.sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"journals-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("left-side-bar","journals","left-side-bar/journals",1870239904)], 0)),new cljs.core.Keyword(null,"on-click-handler","on-click-handler",746440723),frontend.handler.route.go_to_journals_BANG_,new cljs.core.Keyword(null,"icon","icon",1679606541),"calendar"], null)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs72419))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-header"], null)], null),attrs72419], 0))):{'className':"nav-header"}),((cljs.core.map_QMARK_(attrs72419))?[daiquiri.core.create_element("div",{'className':"flashcards-nav"},[frontend.components.sidebar.flashcards()]),daiquiri.interpreter.interpret(frontend.components.sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"graph-view-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","graph-view","right-side-bar/graph-view",-1104966609)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509)),new cljs.core.Keyword(null,"icon","icon",1679606541),"hierarchy"], null))),daiquiri.interpreter.interpret(frontend.components.sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"all-pages-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","all-pages","right-side-bar/all-pages",-258695220)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)),new cljs.core.Keyword(null,"icon","icon",1679606541),"files"], null)))]:[daiquiri.interpreter.interpret(attrs72419),daiquiri.core.create_element("div",{'className':"flashcards-nav"},[frontend.components.sidebar.flashcards()]),daiquiri.interpreter.interpret(frontend.components.sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"graph-view-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","graph-view","right-side-bar/graph-view",-1104966609)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509)),new cljs.core.Keyword(null,"icon","icon",1679606541),"hierarchy"], null))),daiquiri.interpreter.interpret(frontend.components.sidebar.sidebar_item(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"all-pages-nav",new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","all-pages","right-side-bar/all-pages",-258695220)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)),new cljs.core.Keyword(null,"icon","icon",1679606541),"files"], null)))]));
})()]),frontend.components.sidebar.favorites(frontend.context.i18n.t),(cljs.core.truth_((function (){var and__4251__auto__ = left_sidebar_open_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (!(frontend.config.publishing_QMARK_));
} else {
return and__4251__auto__;
}
})())?frontend.components.sidebar.recent_pages(frontend.context.i18n.t):null),daiquiri.core.create_element("nav",{'aria-label':"Sidebar",'className':"px-2 new-page"},[((frontend.config.publishing_QMARK_)?null:daiquiri.core.create_element("a",{'onClick':(function (){
var and__4251__auto___72453 = frontend.util.sm_breakpoint_QMARK_();
if(and__4251__auto___72453){
frontend.state.toggle_left_sidebar_BANG_();
} else {
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","search","go/search",1564957958)], null));
}),'className':"item group flex items-center px-2 py-2 text-sm font-medium rounded-md"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("circle-plus mr-3",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null))),(function (){var attrs72420 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","new-page","right-side-bar/new-page",818114070)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs72420))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs72420], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs72420))?null:[daiquiri.interpreter.interpret(attrs72420)]));
})()]))])])]);
}),null,"frontend.components.sidebar/sidebar-nav");
frontend.components.sidebar.left_sidebar = rum.core.lazy_build(rum.core.build_defc,(function (p__72421){
var map__72422 = p__72421;
var map__72422__$1 = cljs.core.__destructure_map(map__72422);
var left_sidebar_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72422__$1,new cljs.core.Keyword(null,"left-sidebar-open?","left-sidebar-open?",899591356));
var route_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72422__$1,new cljs.core.Keyword(null,"route-match","route-match",-1450985937));
var close_fn = (function (){
return frontend.state.set_left_sidebar_open_BANG_(false);
});
return daiquiri.core.create_element("div",{'id':"left-sidebar",'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__sidebar-left-layout",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),left_sidebar_open_QMARK_], null)], null))], null))},[frontend.components.sidebar.sidebar_nav(route_match,close_fn,left_sidebar_open_QMARK_),daiquiri.core.create_element("span",{'onClick':close_fn,'className':"shade-mask"},[])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.sidebar/left-sidebar");
frontend.components.sidebar.main = rum.core.lazy_build(rum.core.build_defc,(function (p__72423){
var map__72424 = p__72423;
var map__72424__$1 = cljs.core.__destructure_map(map__72424);
var route_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72424__$1,new cljs.core.Keyword(null,"route-match","route-match",-1450985937));
var global_graph_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72424__$1,new cljs.core.Keyword(null,"global-graph-pages?","global-graph-pages?",1067510840));
var route_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72424__$1,new cljs.core.Keyword(null,"route-name","route-name",-932603717));
var indexeddb_support_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72424__$1,new cljs.core.Keyword(null,"indexeddb-support?","indexeddb-support?",-1571226476));
var db_restoring_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72424__$1,new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664));
var main_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72424__$1,new cljs.core.Keyword(null,"main-content","main-content",1386726798));
var left_sidebar_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728));
var onboarding_and_home_QMARK_ = (function (){var and__4251__auto__ = (function (){var or__4253__auto__ = (frontend.state.get_current_repo() == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return (((!(frontend.config.publishing_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),route_name)));
} else {
return and__4251__auto__;
}
})();
return daiquiri.core.create_element("div",{'id':"main-container",'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__sidebar-main-layout","flex-1","flex",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-left-sidebar-open","is-left-sidebar-open",-1193752939),left_sidebar_open_QMARK_], null)], null))], null))},[frontend.components.sidebar.left_sidebar(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-sidebar-open?","left-sidebar-open?",899591356),left_sidebar_open_QMARK_,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route_match], null)),daiquiri.core.create_element("div",{'id':"main-content-container",'className':"scrollbar-spacing w-full flex justify-center flex-row"},[daiquiri.core.create_element("div",{'data-is-global-graph-pages':global_graph_pages_QMARK_,'data-is-full-width':(function (){var or__4253__auto__ = global_graph_pages_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"my-publishing","my-publishing",227980452),null,new cljs.core.Keyword(null,"all-files","all-files",1120339891),null,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),null], null), null),route_name);
}
})(),'className':"cp__sidebar-main-content"},[((((cljs.core.not(frontend.mobile.util.is_native_platform_QMARK_())) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.Keyword(null,"page","page",849072397),null], null), null),route_name))))?frontend.components.widgets.demo_graph_alert():null),((cljs.core.not(indexeddb_support_QMARK_))?null:(cljs.core.truth_(db_restoring_QMARK_)?daiquiri.core.create_element("div",{'className':"mt-20"},[(function (){var attrs72425 = frontend.ui.loading(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189)], 0)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs72425))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ls-center"], null)], null),attrs72425], 0))):{'className':"ls-center"}),((cljs.core.map_QMARK_(attrs72425))?null:[daiquiri.interpreter.interpret(attrs72425)]));
})()]):daiquiri.core.create_element("div",{'style':{'marginBottom':(cljs.core.truth_(global_graph_pages_QMARK_)?(0):(cljs.core.truth_(onboarding_and_home_QMARK_)?(-48):(120)
)),'paddingBottom':(cljs.core.truth_(frontend.mobile.util.native_iphone_QMARK_())?"7rem":null)},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(global_graph_pages_QMARK_)?"":frontend.util.hiccup__GT_class("max-w-7xl.mx-auto.pb-24"))], null))},[daiquiri.interpreter.interpret(main_content)])
)),(cljs.core.truth_(onboarding_and_home_QMARK_)?daiquiri.core.create_element("div",{'style':{'paddingBottom':(200)}},[frontend.components.onboarding.intro()]):null)])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var temp__5720__auto___72463 = goog.dom.getElement("main-content-container");
if(cljs.core.truth_(temp__5720__auto___72463)){
var element_72464 = temp__5720__auto___72463;
cljs_drag_n_drop.core.subscribe_BANG_(element_72464,new cljs.core.Keyword(null,"upload-files","upload-files",-771877630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop","drop",364481611),(function (_e,files){
var temp__5720__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
return frontend.handler.editor.upload_asset(id,files,format,frontend.handler.editor._STAR_asset_uploading_QMARK_,true);
} else {
return null;
}
})], null));
} else {
}

return state;
})], null)], null),"frontend.components.sidebar/main");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.sidebar !== 'undefined') && (typeof frontend.components.sidebar.sidebar_inited_QMARK_ !== 'undefined')){
} else {
frontend.components.sidebar.sidebar_inited_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.sidebar.parsing_progress = rum.core.lazy_build(rum.core.build_defc,(function (state){
var finished = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})();
var total = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(state);
var width = Math.round(((finished / total).toFixed((2)) * (100)));
var left_label = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.font-bold","div.flex.flex-row.font-bold",2116828028),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parsing-files","parsing-files",-565009782)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden.md:flex.flex-row","div.hidden.md:flex.flex-row",-212067351),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-1","span.mr-1",127520086),": "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-ellipsis-wrapper","div.text-ellipsis-wrapper",-595927398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(300)], null)], null),(function (){var G__72426 = new cljs.core.Keyword(null,"current-parsing-file","current-parsing-file",1063090327).cljs$core$IFn$_invoke$arity$1(state);
return (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(G__72426) : frontend.util.node_path.basename.call(null,G__72426));
})()], null)], null)], null);
return frontend.ui.progress_bar_with_label(width,left_label,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(finished),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)].join(''));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.sidebar/parsing-progress");
frontend.components.sidebar.main_content = rum.core.lazy_build(rum.core.build_defc,(function (){
var default_home = frontend.components.sidebar.get_default_home_if_valid();
var current_repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var loading_files_QMARK_ = (cljs.core.truth_(current_repo)?frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repo","loading-files?","repo/loading-files?",196666138),current_repo], null)):null);
var journals_length = frontend.state.sub(new cljs.core.Keyword(null,"journals-length","journals-length",1463764186));
var latest_journals = (function (){var G__72428 = frontend.state.get_current_repo();
var G__72429 = journals_length;
return (frontend.db.get_latest_journals.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_latest_journals.cljs$core$IFn$_invoke$arity$2(G__72428,G__72429) : frontend.db.get_latest_journals.call(null,G__72428,G__72429));
})();
var graph_parsing_state = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","parsing-state","graph/parsing-state",-1745487605),current_repo], null));
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"graph-loading?","graph-loading?",1136649541).cljs$core$IFn$_invoke$arity$1(graph_parsing_state);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(graph_parsing_state),new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(graph_parsing_state));
}
})())){
return daiquiri.core.create_element("div",{'className':"flex items-center justify-center full-height-without-header"},[daiquiri.core.create_element("div",{'className':"flex-1"},[frontend.components.sidebar.parsing_progress(graph_parsing_state)])]);
} else {
var attrs72427 = (cljs.core.truth_((function (){var and__4251__auto__ = default_home;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),frontend.state.get_current_route());
if(and__4251__auto____$1){
var and__4251__auto____$2 = cljs.core.not(frontend.state.route_has_p_QMARK_());
if(and__4251__auto____$2){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home);
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(default_home)):((((frontend.config.publishing_QMARK_) && (((cljs.core.not(default_home)) && (cljs.core.empty_QMARK_(latest_journals))))))?frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)], null)):(cljs.core.truth_(loading_files_QMARK_)?frontend.ui.loading(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading-files","loading-files",-611285064)], 0))):((cljs.core.seq(latest_journals))?frontend.components.journal.journals(latest_journals):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)
))));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs72427))?daiquiri.interpreter.element_attributes(attrs72427):null),((cljs.core.map_QMARK_(attrs72427))?null:[daiquiri.interpreter.interpret(attrs72427)]));

}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
if(cljs.core.truth_(cljs.core.deref(frontend.components.sidebar.sidebar_inited_QMARK_))){
} else {
var current_repo_72476 = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var default_home_72477 = frontend.components.sidebar.get_default_home_if_valid();
var sidebar_72478 = new cljs.core.Keyword(null,"sidebar","sidebar",35784458).cljs$core$IFn$_invoke$arity$1(default_home_72477);
var sidebar_72479__$1 = ((typeof sidebar_72478 === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sidebar_72478], null):sidebar_72478);
var temp__5720__auto___72480 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.seq(sidebar_72479__$1));
if(cljs.core.truth_(temp__5720__auto___72480)){
var pages_72481 = temp__5720__auto___72480;
var seq__72430_72482 = cljs.core.seq(pages_72481);
var chunk__72431_72483 = null;
var count__72432_72484 = (0);
var i__72433_72485 = (0);
while(true){
if((i__72433_72485 < count__72432_72484)){
var page_72486 = chunk__72431_72483.cljs$core$IIndexed$_nth$arity$2(null,i__72433_72485);
var page_72487__$1 = frontend.util.safe_page_name_sanity_lc(page_72486);
var vec__72440_72488 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_72487__$1,"contents"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents",new cljs.core.Keyword(null,"contents","contents",-1567174023)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_72487__$1,new cljs.core.Keyword(null,"page","page",849072397)], null));
var db_id_72489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72440_72488,(0),null);
var block_type_72490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72440_72488,(1),null);
frontend.state.sidebar_add_block_BANG_(current_repo_72476,db_id_72489,block_type_72490);


var G__72491 = seq__72430_72482;
var G__72492 = chunk__72431_72483;
var G__72493 = count__72432_72484;
var G__72494 = (i__72433_72485 + (1));
seq__72430_72482 = G__72491;
chunk__72431_72483 = G__72492;
count__72432_72484 = G__72493;
i__72433_72485 = G__72494;
continue;
} else {
var temp__5720__auto___72498__$1 = cljs.core.seq(seq__72430_72482);
if(temp__5720__auto___72498__$1){
var seq__72430_72499__$1 = temp__5720__auto___72498__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72430_72499__$1)){
var c__4679__auto___72500 = cljs.core.chunk_first(seq__72430_72499__$1);
var G__72501 = cljs.core.chunk_rest(seq__72430_72499__$1);
var G__72502 = c__4679__auto___72500;
var G__72503 = cljs.core.count(c__4679__auto___72500);
var G__72504 = (0);
seq__72430_72482 = G__72501;
chunk__72431_72483 = G__72502;
count__72432_72484 = G__72503;
i__72433_72485 = G__72504;
continue;
} else {
var page_72505 = cljs.core.first(seq__72430_72499__$1);
var page_72506__$1 = frontend.util.safe_page_name_sanity_lc(page_72505);
var vec__72443_72507 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_72506__$1,"contents"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents",new cljs.core.Keyword(null,"contents","contents",-1567174023)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_72506__$1,new cljs.core.Keyword(null,"page","page",849072397)], null));
var db_id_72508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72443_72507,(0),null);
var block_type_72509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72443_72507,(1),null);
frontend.state.sidebar_add_block_BANG_(current_repo_72476,db_id_72508,block_type_72509);


var G__72510 = cljs.core.next(seq__72430_72499__$1);
var G__72511 = null;
var G__72512 = (0);
var G__72513 = (0);
seq__72430_72482 = G__72510;
chunk__72431_72483 = G__72511;
count__72432_72484 = G__72512;
i__72433_72485 = G__72513;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(frontend.components.sidebar.sidebar_inited_QMARK_,true);
} else {
}
}

return state;
})], null)], null),"frontend.components.sidebar/main-content");
frontend.components.sidebar.custom_context_menu = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("custom-context-menu","show?","custom-context-menu/show?",2074408902)))){
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.state.sub(new cljs.core.Keyword("custom-context-menu","links","custom-context-menu/links",-1197608677));
if(cljs.core.truth_(temp__5720__auto__)){
var links = temp__5720__auto__;
var G__72448 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-names","class-names",1257115065),"fade",new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),(500),new cljs.core.Keyword(null,"exit","exit",351849638),(300)], null)], null);
var G__72449 = links;
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__72448,G__72449) : frontend.ui.css_transition.call(null,G__72448,G__72449));
} else {
return null;
}
})());
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.sidebar/custom-context-menu");
frontend.components.sidebar.new_block_mode = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("document","mode?","document/mode?",-994203479)], null)))){
return frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2","div.p-2",-325121057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-2","p.mb-2",-1476899286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Document mode"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr-1","div.inline-block.mr-1",803362566),frontend.ui.render_keyboard_shortcut(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("editor","new-line","editor/new-line",363787014)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.inline-block","p.inline-block",-100331424),"to create new block"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.inline-block.mr-1","p.inline-block.mr-1",1865795813),"Click `D` or type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr-1","div.inline-block.mr-1",803362566),frontend.ui.render_keyboard_shortcut(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","toggle-document-mode","ui/toggle-document-mode",-1556999601)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.inline-block","p.inline-block",-100331424),"to toggle document mode"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.block.px-1.text-sm.font-medium.bg-base-2.rounded-md.mx-2","a.block.px-1.text-sm.font-medium.bg-base-2.rounded-md.mx-2",700721131),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.state.toggle_document_mode_BANG_], null),"D"], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.sidebar/new-block-mode");
frontend.components.sidebar.help_button = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887)))){
return null;
} else {
return daiquiri.core.create_element("div",{'title':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"help-shortcut-title","help-shortcut-title",-410057505)], 0)),'onClick':(function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),"help",new cljs.core.Keyword(null,"help","help",-439233446));
}),'className':"cp__sidebar-help-btn"},["?"]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.sidebar/help-button");
frontend.components.sidebar.hide_context_menu_and_clear_selection = (function frontend$components$sidebar$hide_context_menu_and_clear_selection(e){
frontend.state.hide_custom_context_menu_BANG_();

if(cljs.core.truth_(frontend.components.sidebar.goog$module$goog$object.get(e,"shiftKey"))){
return null;
} else {
return frontend.handler.editor.clear_selection_BANG_();
}
});
frontend.components.sidebar.sidebar = rum.core.lazy_build(rum.core.build_defcs,(function (state,route_match,main_content){
var map__72450 = state;
var map__72450__$1 = cljs.core.__destructure_map(map__72450);
var open_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72450__$1,new cljs.core.Keyword(null,"open-fn","open-fn",1265855718));
var current_repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var granted_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nfs","user-granted?","nfs/user-granted?",-1655101253),frontend.state.get_current_repo()], null));
var theme = frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
var system_theme_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822));
var light_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("light",frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)));
var sidebar_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887));
var settings_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343));
var left_sidebar_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728));
var wide_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061));
var right_sidebar_blocks = frontend.state.sub_right_sidebar_blocks();
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var global_graph_pages_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph","graph",1558099509),route_name);
var db_restoring_QMARK_ = frontend.state.sub(new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233));
var indexeddb_support_QMARK_ = frontend.state.sub(new cljs.core.Keyword("indexeddb","support?","indexeddb/support?",114020185));
var page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),route_name);
var home_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),route_name);
var edit_QMARK_ = new cljs.core.Keyword("editor","editing?","editor/editing?",807325417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var default_home = frontend.components.sidebar.get_default_home_if_valid();
var logged_QMARK_ = frontend.handler.user.logged_in_QMARK_();
return frontend.components.theme.container(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-repo","current-repo",134812359),new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664),new cljs.core.Keyword(null,"sidebar-blocks-len","sidebar-blocks-len",235708585),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"edit?","edit?",-842131310),new cljs.core.Keyword(null,"nfs-granted?","nfs-granted?",-649584328),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"system-theme?","system-theme?",1330394234),new cljs.core.Keyword(null,"settings-open?","settings-open?",1491874651),new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467)],[current_repo,db_restoring_QMARK_,cljs.core.count(right_sidebar_blocks),route_match,(function (e){
frontend.handler.editor.unhighlight_blocks_BANG_();

return frontend.util.fix_open_external_with_shift_BANG_(e);
}),theme,edit_QMARK_,granted_QMARK_,frontend.context.i18n.t,system_theme_QMARK_,settings_open_QMARK_,sidebar_open_QMARK_]),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.theme-inner","div.theme-inner",-1817350478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ls-left-sidebar-open","ls-left-sidebar-open",-1583098913),left_sidebar_open_QMARK_,new cljs.core.Keyword(null,"ls-right-sidebar-open","ls-right-sidebar-open",2065397740),sidebar_open_QMARK_,new cljs.core.Keyword(null,"ls-wide-mode","ls-wide-mode",1888272579),wide_mode_QMARK_], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.#app-container","div.#app-container",-2087174968),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#left-container","div#left-container",1782073488),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887)))?"overflow-hidden":"w-full")], null),frontend.components.header.header(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"open-fn","open-fn",1265855718),open_fn,new cljs.core.Keyword(null,"light?","light?",1454164744),light_QMARK_,new cljs.core.Keyword(null,"current-repo","current-repo",134812359),current_repo,new cljs.core.Keyword(null,"logged?","logged?",-814149905),logged_QMARK_,new cljs.core.Keyword(null,"page?","page?",644039860),page_QMARK_,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route_match,new cljs.core.Keyword(null,"default-home","default-home",171104159),default_home,new cljs.core.Keyword(null,"new-block-mode","new-block-mode",1189333509),frontend.components.sidebar.new_block_mode], null)),frontend.components.sidebar.main(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664),new cljs.core.Keyword(null,"light?","light?",1454164744),new cljs.core.Keyword(null,"main-content","main-content",1386726798),new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword(null,"logged?","logged?",-814149905),new cljs.core.Keyword(null,"indexeddb-support?","indexeddb-support?",-1571226476),new cljs.core.Keyword(null,"home?","home?",806196596),new cljs.core.Keyword(null,"global-graph-pages?","global-graph-pages?",1067510840),new cljs.core.Keyword(null,"route-name","route-name",-932603717)],[db_restoring_QMARK_,light_QMARK_,main_content,route_match,logged_QMARK_,indexeddb_support_QMARK_,home_QMARK_,global_graph_pages_QMARK_,route_name])),(cljs.core.truth_((function (){var and__4251__auto__ = frontend.mobile.util.is_native_platform_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = current_repo;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not(frontend.state.sub(new cljs.core.Keyword("modal","show?","modal/show?",1441869594)));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?frontend.mobile.footer.footer():null)], null),frontend.components.right_sidebar.sidebar(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-single-container","div#app-single-container",-126204141)], null)], null),frontend.ui.notification(),frontend.ui.modal(),frontend.ui.sub_modal(),frontend.components.command_palette.command_palette_modal(),frontend.components.select.select_modal(),frontend.components.sidebar.custom_context_menu(),frontend.components.plugins.custom_js_installer(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"t","t",-1397832519),frontend.context.i18n.t,new cljs.core.Keyword(null,"current-repo","current-repo",134812359),current_repo,new cljs.core.Keyword(null,"nfs-granted?","nfs-granted?",-649584328),granted_QMARK_,new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664),db_restoring_QMARK_], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#download.hidden","a#download.hidden",2057981313)], null),((((cljs.core.not(frontend.config.mobile_QMARK_)) && ((!(frontend.config.publishing_QMARK_)))))?frontend.components.sidebar.help_button():null)], null));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.mixins.modal(new cljs.core.Keyword("modal","show?","modal/show?",1441869594)),rum.core.reactive,frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
frontend.mixins.listen(state,window,"click",frontend.components.sidebar.hide_context_menu_and_clear_selection);

return frontend.mixins.listen(state,window,"keydown",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.state.modal_opened_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not((function (){var and__4251__auto____$1 = frontend.util.node_test_QMARK_;
if(and__4251__auto____$1){
return new cljs.core.Keyword("editor","editing?","editor/editing?",807325417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
} else {
return and__4251__auto____$1;
}
})());
} else {
return and__4251__auto__;
}
})())){
return frontend.state.close_modal_BANG_();
} else {
return frontend.components.sidebar.hide_context_menu_and_clear_selection(e);
}
} else {
return null;
}
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.handler.mobile.swipe.setup_listeners_BANG_();

return state;
})], null)], null),"frontend.components.sidebar/sidebar");

//# sourceMappingURL=frontend.components.sidebar.js.map