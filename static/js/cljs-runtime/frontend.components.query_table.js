goog.provide('frontend.components.query_table');
frontend.components.query_table.sort_result_by = (function frontend$components$query_table$sort_result_by(by_item,desc_QMARK_,result){
var comp = (cljs.core.truth_(desc_QMARK_)?cljs.core._GT_:cljs.core._LT_);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(by_item,comp,result);
});
frontend.components.query_table.sortable_title = rum.core.lazy_build(rum.core.build_defc,(function (title,key,by_item,desc_QMARK_,block_id){
return daiquiri.core.create_element("th",{'className':"whitespace-nowrap"},[daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(by_item,key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(desc_QMARK_,cljs.core.not);

if(cljs.core.truth_(block_id)){
if(cljs.core.truth_(key)){
frontend.handler.editor.set_block_property_BANG_(block_id,new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033),cljs.core.name(key));
} else {
}

return frontend.handler.editor.set_block_property_BANG_(block_id,new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008),cljs.core.deref(desc_QMARK_));
} else {
return null;
}
})},[daiquiri.core.create_element("div",{'className':"flex items-center"},[(function (){var attrs68350 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs68350))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-1"], null)], null),attrs68350], 0))):{'className':"mr-1"}),((cljs.core.map_QMARK_(attrs68350))?null:[daiquiri.interpreter.interpret(attrs68350)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(by_item),key))?(function (){var attrs68352 = (cljs.core.truth_(cljs.core.deref(desc_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_up());
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs68352))?daiquiri.interpreter.element_attributes(attrs68352):null),((cljs.core.map_QMARK_(attrs68352))?null:[daiquiri.interpreter.interpret(attrs68352)]));
})():null)])])]);
}),null,"frontend.components.query-table/sortable-title");
frontend.components.query_table.get_keys = (function frontend$components$query_table$get_keys(result,page_QMARK_){
var keys = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"template","template",-702405684),null], null), null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.util.property.built_in_properties(),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties","block/properties",708347145),result)], 0)))));
var keys__$1 = (cljs.core.truth_(page_QMARK_)?cljs.core.cons(new cljs.core.Keyword(null,"page","page",849072397),keys):cljs.core.cons(new cljs.core.Keyword(null,"block","block",664686210),keys));
var keys__$2 = (cljs.core.truth_(page_QMARK_)?cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keys__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336)], null))):keys__$1);
return keys__$2;
});
frontend.components.query_table.attach_clock_property = (function frontend$components$query_table$attach_clock_property(result){
var ks = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"clock-time","clock-time",1696313975)], null);
var result__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
var b__$1 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1(b);
return cljs.core.assoc_in(b__$1,ks,(function (){var or__4253__auto__ = frontend.util.clock.clock_summary(new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(b__$1),false);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})());
}),result);
if(cljs.core.every_QMARK_((function (p1__68363_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68363_SHARP_,ks) === (0));
}),result__$1)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68364_SHARP_){
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(p1__68364_SHARP_,ks);
}),result__$1);
} else {
return result__$1;
}
});
frontend.components.query_table.sort_by_fn = (function frontend$components$query_table$sort_by_fn(sort_by_item,item){
var G__68369 = sort_by_item;
var G__68369__$1 = (((G__68369 instanceof cljs.core.Keyword))?G__68369.fqn:null);
switch (G__68369__$1) {
case "created-at":
return new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(item);

break;
case "updated-at":
return new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(item);

break;
case "block":
return new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);

break;
case "page":
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);

break;
default:
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),sort_by_item], null));

}
});
frontend.components.query_table.desc_QMARK_ = (function frontend$components$query_table$desc_QMARK_(_STAR_desc_QMARK_,p_desc_QMARK_){
if((!((cljs.core.deref(_STAR_desc_QMARK_) == null)))){
return cljs.core.deref(_STAR_desc_QMARK_);
} else {
if((!((p_desc_QMARK_ == null)))){
return p_desc_QMARK_;
} else {
return true;

}
}
});
frontend.components.query_table.result_table = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,current_block,result,p__68382,map_inline,page_cp,__GT_elem,inline_text){
var map__68383 = p__68382;
var map__68383__$1 = cljs.core.__destructure_map(map__68383);
var page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68383__$1,new cljs.core.Keyword(null,"page?","page?",644039860));
if(cljs.core.truth_(current_block)){
var p_sort_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033)], null)));
var p_desc_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008)], null));
var select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.query-table","select?","frontend.components.query-table/select?",257289424));
var _STAR_sort_by_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.query-table","sort-by-item","frontend.components.query-table/sort-by-item",1756589087));
var _STAR_desc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.query-table","desc?","frontend.components.query-table/desc?",-2115901141));
var sort_by_item = (function (){var or__4253__auto__ = cljs.core.deref(_STAR_sort_by_item);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var G__68389 = p_sort_by;
if((G__68389 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__68389);
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336);
}
}
})();
var result__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"template","template",-702405684)], null)) == null)));
}),result);
var result__$2 = (cljs.core.truth_(page_QMARK_)?result__$1:frontend.components.query_table.attach_clock_property(result__$1));
var clock_time_total = (cljs.core.truth_(page_QMARK_)?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68377_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(p1__68377_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"clock-time","clock-time",1696313975)], null),(0));
}),result__$2)));
var query_properties = (function (){var G__68392 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null),"");
if((G__68392 == null)){
return null;
} else {
return frontend.handler.common.safe_read_string(G__68392,"Parsing query properties failed");
}
})();
var keys = ((cljs.core.seq(query_properties))?query_properties:frontend.components.query_table.get_keys(result__$2,page_QMARK_));
var included_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),null,new cljs.core.Keyword(null,"created-at","created-at",-89248644),null], null), null);
var keys__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.some(included_keys,keys))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(included_keys,keys),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(included_keys,keys),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([included_keys], 0)):keys));
var desc_QMARK_ = frontend.components.query_table.desc_QMARK_(_STAR_desc_QMARK_,p_desc_QMARK_);
var result__$3 = frontend.components.query_table.sort_result_by((function (item){
return frontend.components.query_table.sort_by_fn(sort_by_item,item);
}),desc_QMARK_,result__$2);
return daiquiri.core.create_element("div",{'onMouseDown':(function (e){
return e.stopPropagation();
}),'style':{'width':"100%"},'className':"overflow-x-auto"},[daiquiri.core.create_element("table",{'className':"table-auto"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$query_table$iter__68404(s__68405){
return (new cljs.core.LazySeq(null,(function (){
var s__68405__$1 = s__68405;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__68405__$1);
if(temp__5720__auto__){
var s__68405__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68405__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__68405__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__68407 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__68406 = (0);
while(true){
if((i__68406 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__68406);
cljs.core.chunk_append(b__68407,(function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})());

var G__68555 = (i__68406 + (1));
i__68406 = G__68555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68407),frontend$components$query_table$iter__68404(cljs.core.chunk_rest(s__68405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68407),null);
}
} else {
var key = cljs.core.first(s__68405__$2);
return cljs.core.cons((function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})(),frontend$components$query_table$iter__68404(cljs.core.rest(s__68405__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(keys__$1);
})())])]),daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$query_table$iter__68413(s__68414){
return (new cljs.core.LazySeq(null,(function (){
var s__68414__$1 = s__68414;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__68414__$1);
if(temp__5720__auto__){
var s__68414__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68414__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__68414__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__68416 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__68415 = (0);
while(true){
if((i__68415 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__68415);
cljs.core.chunk_append(b__68416,(function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (i__68415,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function frontend$components$query_table$iter__68413_$_iter__68419(s__68420){
return (new cljs.core.LazySeq(null,((function (i__68415,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
var s__68420__$1 = s__68420;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__68420__$1);
if(temp__5720__auto____$1){
var s__68420__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68420__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__68420__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__68422 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__68421 = (0);
while(true){
if((i__68421 < size__4651__auto____$1)){
var key = cljs.core._nth(c__4650__auto____$1,i__68421);
cljs.core.chunk_append(b__68422,(function (){var value = (function (){var G__68429 = key;
var G__68429__$1 = (((G__68429 instanceof cljs.core.Keyword))?G__68429.fqn:null);
switch (G__68429__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__68430 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__68430__$1 = cljs.core.__destructure_map(map__68430);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68430__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__68431 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__68432 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__68431,G__68432) : __GT_elem.call(null,G__68431,G__68432));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),content], null);
}

break;
case "created-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var created_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(created_at);
} else {
return null;
}
})()], null);

break;
case "updated-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var updated_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(updated_at);
} else {
return null;
}
})()], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),key], null))], null);

}
})();
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__68421,i__68415,value,key,c__4650__auto____$1,size__4651__auto____$1,b__68422,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__68421,i__68415,value,key,c__4650__auto____$1,size__4651__auto____$1,b__68422,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'onMouseMove':((function (i__68421,i__68415,value,key,c__4650__auto____$1,size__4651__auto____$1,b__68422,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__68421,i__68415,value,key,c__4650__auto____$1,size__4651__auto____$1,b__68422,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'onMouseUp':((function (i__68421,i__68415,value,key,c__4650__auto____$1,size__4651__auto____$1,b__68422,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__68421,i__68415,value,key,c__4650__auto____$1,size__4651__auto____$1,b__68422,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__4652__auto__ = ((function (i__68421,i__68415,value__$1,value,key,c__4650__auto____$1,size__4651__auto____$1,b__68422,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function frontend$components$query_table$iter__68413_$_iter__68419_$_iter__68436(s__68437){
return (new cljs.core.LazySeq(null,((function (i__68421,i__68415,value__$1,value,key,c__4650__auto____$1,size__4651__auto____$1,b__68422,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
var s__68437__$1 = s__68437;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__68437__$1);
if(temp__5720__auto____$2){
var s__68437__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68437__$2)){
var c__4650__auto____$2 = cljs.core.chunk_first(s__68437__$2);
var size__4651__auto____$2 = cljs.core.count(c__4650__auto____$2);
var b__68439 = cljs.core.chunk_buffer(size__4651__auto____$2);
if((function (){var i__68438 = (0);
while(true){
if((i__68438 < size__4651__auto____$2)){
var item__$1 = cljs.core._nth(c__4650__auto____$2,i__68438);
cljs.core.chunk_append(b__68439,(function (){var G__68442 = cljs.core.PersistentArrayMap.EMPTY;
var G__68443 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68442,G__68443) : page_cp.call(null,G__68442,G__68443));
})());

var G__68560 = (i__68438 + (1));
i__68438 = G__68560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68439),frontend$components$query_table$iter__68413_$_iter__68419_$_iter__68436(cljs.core.chunk_rest(s__68437__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68439),null);
}
} else {
var item__$1 = cljs.core.first(s__68437__$2);
return cljs.core.cons((function (){var G__68445 = cljs.core.PersistentArrayMap.EMPTY;
var G__68446 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68445,G__68446) : page_cp.call(null,G__68445,G__68446));
})(),frontend$components$query_table$iter__68413_$_iter__68419_$_iter__68436(cljs.core.rest(s__68437__$2)));
}
} else {
return null;
}
break;
}
});})(i__68421,i__68415,value__$1,value,key,c__4650__auto____$1,size__4651__auto____$1,b__68422,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,null,null));
});})(i__68421,i__68415,value__$1,value,key,c__4650__auto____$1,size__4651__auto____$1,b__68422,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
;
return iter__4652__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__68452 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(value__$1)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__68452) : frontend.db.entity.call(null,G__68452));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__68453 = cljs.core.PersistentArrayMap.EMPTY;
var G__68454 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68453,G__68454) : page_cp.call(null,G__68453,G__68454));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__68561 = (i__68421 + (1));
i__68421 = G__68561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68422),frontend$components$query_table$iter__68413_$_iter__68419(cljs.core.chunk_rest(s__68420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68422),null);
}
} else {
var key = cljs.core.first(s__68420__$2);
return cljs.core.cons((function (){var value = (function (){var G__68457 = key;
var G__68457__$1 = (((G__68457 instanceof cljs.core.Keyword))?G__68457.fqn:null);
switch (G__68457__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__68459 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__68459__$1 = cljs.core.__destructure_map(map__68459);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68459__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__68460 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__68461 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__68460,G__68461) : __GT_elem.call(null,G__68460,G__68461));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),content], null);
}

break;
case "created-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var created_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(created_at);
} else {
return null;
}
})()], null);

break;
case "updated-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var updated_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(updated_at);
} else {
return null;
}
})()], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),key], null))], null);

}
})();
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__68415,value,key,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__68415,value,key,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'onMouseMove':((function (i__68415,value,key,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__68415,value,key,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'onMouseUp':((function (i__68415,value,key,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__68415,value,key,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__4652__auto__ = ((function (i__68415,value__$1,value,key,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function frontend$components$query_table$iter__68413_$_iter__68419_$_iter__68466(s__68467){
return (new cljs.core.LazySeq(null,((function (i__68415,value__$1,value,key,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
var s__68467__$1 = s__68467;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__68467__$1);
if(temp__5720__auto____$2){
var s__68467__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68467__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__68467__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__68469 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__68468 = (0);
while(true){
if((i__68468 < size__4651__auto____$1)){
var item__$1 = cljs.core._nth(c__4650__auto____$1,i__68468);
cljs.core.chunk_append(b__68469,(function (){var G__68471 = cljs.core.PersistentArrayMap.EMPTY;
var G__68472 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68471,G__68472) : page_cp.call(null,G__68471,G__68472));
})());

var G__68605 = (i__68468 + (1));
i__68468 = G__68605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68469),frontend$components$query_table$iter__68413_$_iter__68419_$_iter__68466(cljs.core.chunk_rest(s__68467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68469),null);
}
} else {
var item__$1 = cljs.core.first(s__68467__$2);
return cljs.core.cons((function (){var G__68473 = cljs.core.PersistentArrayMap.EMPTY;
var G__68474 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68473,G__68474) : page_cp.call(null,G__68473,G__68474));
})(),frontend$components$query_table$iter__68413_$_iter__68419_$_iter__68466(cljs.core.rest(s__68467__$2)));
}
} else {
return null;
}
break;
}
});})(i__68415,value__$1,value,key,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,null,null));
});})(i__68415,value__$1,value,key,s__68420__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
;
return iter__4652__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__68478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(value__$1)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__68478) : frontend.db.entity.call(null,G__68478));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__68479 = cljs.core.PersistentArrayMap.EMPTY;
var G__68480 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68479,G__68480) : page_cp.call(null,G__68479,G__68480));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__68413_$_iter__68419(cljs.core.rest(s__68420__$2)));
}
} else {
return null;
}
break;
}
});})(i__68415,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,null,null));
});})(i__68415,format,item,c__4650__auto__,size__4651__auto__,b__68416,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
;
return iter__4652__auto__(keys__$1);
})())]);
})());

var G__68611 = (i__68415 + (1));
i__68415 = G__68611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68416),frontend$components$query_table$iter__68413(cljs.core.chunk_rest(s__68414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68416),null);
}
} else {
var item = cljs.core.first(s__68414__$2);
return cljs.core.cons((function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function frontend$components$query_table$iter__68413_$_iter__68484(s__68485){
return (new cljs.core.LazySeq(null,(function (){
var s__68485__$1 = s__68485;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__68485__$1);
if(temp__5720__auto____$1){
var s__68485__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68485__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__68485__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__68487 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__68486 = (0);
while(true){
if((i__68486 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__68486);
cljs.core.chunk_append(b__68487,(function (){var value = (function (){var G__68489 = key;
var G__68489__$1 = (((G__68489 instanceof cljs.core.Keyword))?G__68489.fqn:null);
switch (G__68489__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__68493 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__68493__$1 = cljs.core.__destructure_map(map__68493);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68493__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__68494 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__68495 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__68494,G__68495) : __GT_elem.call(null,G__68494,G__68495));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),content], null);
}

break;
case "created-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var created_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(created_at);
} else {
return null;
}
})()], null);

break;
case "updated-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var updated_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(updated_at);
} else {
return null;
}
})()], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),key], null))], null);

}
})();
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__68486,value,key,c__4650__auto__,size__4651__auto__,b__68487,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__68486,value,key,c__4650__auto__,size__4651__auto__,b__68487,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'onMouseMove':((function (i__68486,value,key,c__4650__auto__,size__4651__auto__,b__68487,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__68486,value,key,c__4650__auto__,size__4651__auto__,b__68487,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'onMouseUp':((function (i__68486,value,key,c__4650__auto__,size__4651__auto__,b__68487,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__68486,value,key,c__4650__auto__,size__4651__auto__,b__68487,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__4652__auto__ = ((function (i__68486,value__$1,value,key,c__4650__auto__,size__4651__auto__,b__68487,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function frontend$components$query_table$iter__68413_$_iter__68484_$_iter__68498(s__68499){
return (new cljs.core.LazySeq(null,((function (i__68486,value__$1,value,key,c__4650__auto__,size__4651__auto__,b__68487,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
var s__68499__$1 = s__68499;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__68499__$1);
if(temp__5720__auto____$2){
var s__68499__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68499__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__68499__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__68501 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__68500 = (0);
while(true){
if((i__68500 < size__4651__auto____$1)){
var item__$1 = cljs.core._nth(c__4650__auto____$1,i__68500);
cljs.core.chunk_append(b__68501,(function (){var G__68504 = cljs.core.PersistentArrayMap.EMPTY;
var G__68505 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68504,G__68505) : page_cp.call(null,G__68504,G__68505));
})());

var G__68649 = (i__68500 + (1));
i__68500 = G__68649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68501),frontend$components$query_table$iter__68413_$_iter__68484_$_iter__68498(cljs.core.chunk_rest(s__68499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68501),null);
}
} else {
var item__$1 = cljs.core.first(s__68499__$2);
return cljs.core.cons((function (){var G__68508 = cljs.core.PersistentArrayMap.EMPTY;
var G__68509 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68508,G__68509) : page_cp.call(null,G__68508,G__68509));
})(),frontend$components$query_table$iter__68413_$_iter__68484_$_iter__68498(cljs.core.rest(s__68499__$2)));
}
} else {
return null;
}
break;
}
});})(i__68486,value__$1,value,key,c__4650__auto__,size__4651__auto__,b__68487,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,null,null));
});})(i__68486,value__$1,value,key,c__4650__auto__,size__4651__auto__,b__68487,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
;
return iter__4652__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__68514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(value__$1)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__68514) : frontend.db.entity.call(null,G__68514));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__68515 = cljs.core.PersistentArrayMap.EMPTY;
var G__68516 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68515,G__68516) : page_cp.call(null,G__68515,G__68516));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__68657 = (i__68486 + (1));
i__68486 = G__68657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68487),frontend$components$query_table$iter__68413_$_iter__68484(cljs.core.chunk_rest(s__68485__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68487),null);
}
} else {
var key = cljs.core.first(s__68485__$2);
return cljs.core.cons((function (){var value = (function (){var G__68518 = key;
var G__68518__$1 = (((G__68518 instanceof cljs.core.Keyword))?G__68518.fqn:null);
switch (G__68518__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__68519 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__68519__$1 = cljs.core.__destructure_map(map__68519);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68519__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__68522 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__68523 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__68522,G__68523) : __GT_elem.call(null,G__68522,G__68523));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),content], null);
}

break;
case "created-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var created_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(created_at);
} else {
return null;
}
})()], null);

break;
case "updated-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var updated_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(updated_at);
} else {
return null;
}
})()], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),key], null))], null);

}
})();
return daiquiri.core.create_element("td",{'onMouseDown':((function (value,key,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(value,key,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'onMouseMove':((function (value,key,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(value,key,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'onMouseUp':((function (value,key,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(value,key,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__4652__auto__ = ((function (value__$1,value,key,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_){
return (function frontend$components$query_table$iter__68413_$_iter__68484_$_iter__68524(s__68525){
return (new cljs.core.LazySeq(null,(function (){
var s__68525__$1 = s__68525;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__68525__$1);
if(temp__5720__auto____$2){
var s__68525__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__68525__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__68525__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__68527 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__68526 = (0);
while(true){
if((i__68526 < size__4651__auto__)){
var item__$1 = cljs.core._nth(c__4650__auto__,i__68526);
cljs.core.chunk_append(b__68527,(function (){var G__68529 = cljs.core.PersistentArrayMap.EMPTY;
var G__68530 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68529,G__68530) : page_cp.call(null,G__68529,G__68530));
})());

var G__68697 = (i__68526 + (1));
i__68526 = G__68697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68527),frontend$components$query_table$iter__68413_$_iter__68484_$_iter__68524(cljs.core.chunk_rest(s__68525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68527),null);
}
} else {
var item__$1 = cljs.core.first(s__68525__$2);
return cljs.core.cons((function (){var G__68532 = cljs.core.PersistentArrayMap.EMPTY;
var G__68533 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68532,G__68533) : page_cp.call(null,G__68532,G__68533));
})(),frontend$components$query_table$iter__68413_$_iter__68484_$_iter__68524(cljs.core.rest(s__68525__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(value__$1,value,key,s__68485__$2,temp__5720__auto____$1,format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
;
return iter__4652__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__68538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(value__$1)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__68538) : frontend.db.entity.call(null,G__68538));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__68539 = cljs.core.PersistentArrayMap.EMPTY;
var G__68540 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__68539,G__68540) : page_cp.call(null,G__68539,G__68540));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__68413_$_iter__68484(cljs.core.rest(s__68485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(format,item,s__68414__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__68383,map__68383__$1,page_QMARK_))
;
return iter__4652__auto__(keys__$1);
})())]);
})(),frontend$components$query_table$iter__68413(cljs.core.rest(s__68414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(result__$3);
})())])])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query-table","sort-by-item","frontend.components.query-table/sort-by-item",1756589087)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query-table","desc?","frontend.components.query-table/desc?",-2115901141)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.query-table","select?","frontend.components.query-table/select?",257289424))], null),"frontend.components.query-table/result-table");

//# sourceMappingURL=frontend.components.query_table.js.map
