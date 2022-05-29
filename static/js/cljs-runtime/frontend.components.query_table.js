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
})},[daiquiri.core.create_element("div",{'className':"flex items-center"},[(function (){var attrs58308 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58308))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-1"], null)], null),attrs58308], 0))):{'className':"mr-1"}),((cljs.core.map_QMARK_(attrs58308))?null:[daiquiri.interpreter.interpret(attrs58308)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(by_item),key))?(function (){var attrs58309 = (cljs.core.truth_(cljs.core.deref(desc_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_up());
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58309))?daiquiri.interpreter.element_attributes(attrs58309):null),((cljs.core.map_QMARK_(attrs58309))?null:[daiquiri.interpreter.interpret(attrs58309)]));
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
return cljs.core.assoc_in(b__$1,ks,(function (){var or__5043__auto__ = frontend.util.clock.clock_summary(new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(b__$1),false);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})());
}),result);
if(cljs.core.every_QMARK_((function (p1__58310_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__58310_SHARP_,ks) === (0));
}),result__$1)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58311_SHARP_){
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(p1__58311_SHARP_,ks);
}),result__$1);
} else {
return result__$1;
}
});
frontend.components.query_table.sort_by_fn = (function frontend$components$query_table$sort_by_fn(sort_by_item,item){
var G__58316 = sort_by_item;
var G__58316__$1 = (((G__58316 instanceof cljs.core.Keyword))?G__58316.fqn:null);
switch (G__58316__$1) {
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
frontend.components.query_table.result_table = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,current_block,result,p__58323,map_inline,page_cp,__GT_elem,inline_text){
var map__58324 = p__58323;
var map__58324__$1 = cljs.core.__destructure_map(map__58324);
var page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58324__$1,new cljs.core.Keyword(null,"page?","page?",644039860));
if(cljs.core.truth_(current_block)){
var p_sort_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033)], null)));
var p_desc_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008)], null));
var select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.query-table","select?","frontend.components.query-table/select?",257289424));
var _STAR_sort_by_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.query-table","sort-by-item","frontend.components.query-table/sort-by-item",1756589087));
var _STAR_desc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.query-table","desc?","frontend.components.query-table/desc?",-2115901141));
var sort_by_item = (function (){var or__5043__auto__ = cljs.core.deref(_STAR_sort_by_item);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var G__58326 = p_sort_by;
if((G__58326 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__58326);
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336);
}
}
})();
var result__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"template","template",-702405684)], null)) == null)));
}),result);
var result__$2 = (cljs.core.truth_(page_QMARK_)?result__$1:frontend.components.query_table.attach_clock_property(result__$1));
var clock_time_total = (cljs.core.truth_(page_QMARK_)?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58322_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(p1__58322_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"clock-time","clock-time",1696313975)], null),(0));
}),result__$2)));
var query_properties = (function (){var G__58333 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null),"");
if((G__58333 == null)){
return null;
} else {
return frontend.handler.common.safe_read_string(G__58333,"Parsing query properties failed");
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
}),'style':{'width':"100%"},'className':"overflow-x-auto"},[daiquiri.core.create_element("table",{'className':"table-auto"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$query_table$iter__58349(s__58350){
return (new cljs.core.LazySeq(null,(function (){
var s__58350__$1 = s__58350;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58350__$1);
if(temp__5720__auto__){
var s__58350__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58350__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58350__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58352 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58351 = (0);
while(true){
if((i__58351 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__58351);
cljs.core.chunk_append(b__58352,(function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})());

var G__58502 = (i__58351 + (1));
i__58351 = G__58502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58352),frontend$components$query_table$iter__58349(cljs.core.chunk_rest(s__58350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58352),null);
}
} else {
var key = cljs.core.first(s__58350__$2);
return cljs.core.cons((function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})(),frontend$components$query_table$iter__58349(cljs.core.rest(s__58350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(keys__$1);
})())])]),daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$query_table$iter__58371(s__58372){
return (new cljs.core.LazySeq(null,(function (){
var s__58372__$1 = s__58372;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58372__$1);
if(temp__5720__auto__){
var s__58372__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58372__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58372__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58374 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58373 = (0);
while(true){
if((i__58373 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__58373);
cljs.core.chunk_append(b__58374,(function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__58373,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function frontend$components$query_table$iter__58371_$_iter__58377(s__58378){
return (new cljs.core.LazySeq(null,((function (i__58373,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
var s__58378__$1 = s__58378;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__58378__$1);
if(temp__5720__auto____$1){
var s__58378__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58378__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__58378__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__58380 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__58379 = (0);
while(true){
if((i__58379 < size__5519__auto____$1)){
var key = cljs.core._nth(c__5518__auto____$1,i__58379);
cljs.core.chunk_append(b__58380,(function (){var value = (function (){var G__58383 = key;
var G__58383__$1 = (((G__58383 instanceof cljs.core.Keyword))?G__58383.fqn:null);
switch (G__58383__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__58384 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__58384__$1 = cljs.core.__destructure_map(map__58384);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58384__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__58385 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__58386 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__58385,G__58386) : __GT_elem.call(null,G__58385,G__58386));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__58379,i__58373,value,key,c__5518__auto____$1,size__5519__auto____$1,b__58380,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__58379,i__58373,value,key,c__5518__auto____$1,size__5519__auto____$1,b__58380,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'onMouseMove':((function (i__58379,i__58373,value,key,c__5518__auto____$1,size__5519__auto____$1,b__58380,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__58379,i__58373,value,key,c__5518__auto____$1,size__5519__auto____$1,b__58380,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'onMouseUp':((function (i__58379,i__58373,value,key,c__5518__auto____$1,size__5519__auto____$1,b__58380,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__58379,i__58373,value,key,c__5518__auto____$1,size__5519__auto____$1,b__58380,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__58379,i__58373,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__58380,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function frontend$components$query_table$iter__58371_$_iter__58377_$_iter__58390(s__58391){
return (new cljs.core.LazySeq(null,((function (i__58379,i__58373,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__58380,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
var s__58391__$1 = s__58391;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__58391__$1);
if(temp__5720__auto____$2){
var s__58391__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58391__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__58391__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__58393 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__58392 = (0);
while(true){
if((i__58392 < size__5519__auto____$2)){
var item__$1 = cljs.core._nth(c__5518__auto____$2,i__58392);
cljs.core.chunk_append(b__58393,(function (){var G__58394 = cljs.core.PersistentArrayMap.EMPTY;
var G__58395 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58394,G__58395) : page_cp.call(null,G__58394,G__58395));
})());

var G__58509 = (i__58392 + (1));
i__58392 = G__58509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58393),frontend$components$query_table$iter__58371_$_iter__58377_$_iter__58390(cljs.core.chunk_rest(s__58391__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58393),null);
}
} else {
var item__$1 = cljs.core.first(s__58391__$2);
return cljs.core.cons((function (){var G__58400 = cljs.core.PersistentArrayMap.EMPTY;
var G__58401 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58400,G__58401) : page_cp.call(null,G__58400,G__58401));
})(),frontend$components$query_table$iter__58371_$_iter__58377_$_iter__58390(cljs.core.rest(s__58391__$2)));
}
} else {
return null;
}
break;
}
});})(i__58379,i__58373,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__58380,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,null,null));
});})(i__58379,i__58373,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__58380,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__58407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__58407) : frontend.db.entity.call(null,G__58407));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__58410 = cljs.core.PersistentArrayMap.EMPTY;
var G__58411 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58410,G__58411) : page_cp.call(null,G__58410,G__58411));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__58511 = (i__58379 + (1));
i__58379 = G__58511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58380),frontend$components$query_table$iter__58371_$_iter__58377(cljs.core.chunk_rest(s__58378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58380),null);
}
} else {
var key = cljs.core.first(s__58378__$2);
return cljs.core.cons((function (){var value = (function (){var G__58413 = key;
var G__58413__$1 = (((G__58413 instanceof cljs.core.Keyword))?G__58413.fqn:null);
switch (G__58413__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__58416 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__58416__$1 = cljs.core.__destructure_map(map__58416);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58416__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__58418 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__58419 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__58418,G__58419) : __GT_elem.call(null,G__58418,G__58419));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__58373,value,key,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__58373,value,key,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'onMouseMove':((function (i__58373,value,key,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__58373,value,key,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'onMouseUp':((function (i__58373,value,key,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__58373,value,key,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__58373,value__$1,value,key,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function frontend$components$query_table$iter__58371_$_iter__58377_$_iter__58424(s__58425){
return (new cljs.core.LazySeq(null,((function (i__58373,value__$1,value,key,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
var s__58425__$1 = s__58425;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__58425__$1);
if(temp__5720__auto____$2){
var s__58425__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58425__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__58425__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__58427 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__58426 = (0);
while(true){
if((i__58426 < size__5519__auto____$1)){
var item__$1 = cljs.core._nth(c__5518__auto____$1,i__58426);
cljs.core.chunk_append(b__58427,(function (){var G__58428 = cljs.core.PersistentArrayMap.EMPTY;
var G__58429 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58428,G__58429) : page_cp.call(null,G__58428,G__58429));
})());

var G__58513 = (i__58426 + (1));
i__58426 = G__58513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58427),frontend$components$query_table$iter__58371_$_iter__58377_$_iter__58424(cljs.core.chunk_rest(s__58425__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58427),null);
}
} else {
var item__$1 = cljs.core.first(s__58425__$2);
return cljs.core.cons((function (){var G__58432 = cljs.core.PersistentArrayMap.EMPTY;
var G__58433 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58432,G__58433) : page_cp.call(null,G__58432,G__58433));
})(),frontend$components$query_table$iter__58371_$_iter__58377_$_iter__58424(cljs.core.rest(s__58425__$2)));
}
} else {
return null;
}
break;
}
});})(i__58373,value__$1,value,key,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,null,null));
});})(i__58373,value__$1,value,key,s__58378__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__58442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__58442) : frontend.db.entity.call(null,G__58442));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__58444 = cljs.core.PersistentArrayMap.EMPTY;
var G__58445 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58444,G__58445) : page_cp.call(null,G__58444,G__58445));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__58371_$_iter__58377(cljs.core.rest(s__58378__$2)));
}
} else {
return null;
}
break;
}
});})(i__58373,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,null,null));
});})(i__58373,format,item,c__5518__auto__,size__5519__auto__,b__58374,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
;
return iter__5520__auto__(keys__$1);
})())]);
})());

var G__58516 = (i__58373 + (1));
i__58373 = G__58516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58374),frontend$components$query_table$iter__58371(cljs.core.chunk_rest(s__58372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58374),null);
}
} else {
var item = cljs.core.first(s__58372__$2);
return cljs.core.cons((function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function frontend$components$query_table$iter__58371_$_iter__58446(s__58447){
return (new cljs.core.LazySeq(null,(function (){
var s__58447__$1 = s__58447;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__58447__$1);
if(temp__5720__auto____$1){
var s__58447__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58447__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58447__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58449 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58448 = (0);
while(true){
if((i__58448 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__58448);
cljs.core.chunk_append(b__58449,(function (){var value = (function (){var G__58452 = key;
var G__58452__$1 = (((G__58452 instanceof cljs.core.Keyword))?G__58452.fqn:null);
switch (G__58452__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__58453 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__58453__$1 = cljs.core.__destructure_map(map__58453);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58453__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__58454 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__58455 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__58454,G__58455) : __GT_elem.call(null,G__58454,G__58455));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__58448,value,key,c__5518__auto__,size__5519__auto__,b__58449,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__58448,value,key,c__5518__auto__,size__5519__auto__,b__58449,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'onMouseMove':((function (i__58448,value,key,c__5518__auto__,size__5519__auto__,b__58449,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__58448,value,key,c__5518__auto__,size__5519__auto__,b__58449,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'onMouseUp':((function (i__58448,value,key,c__5518__auto__,size__5519__auto__,b__58449,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__58448,value,key,c__5518__auto__,size__5519__auto__,b__58449,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__58448,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__58449,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function frontend$components$query_table$iter__58371_$_iter__58446_$_iter__58457(s__58458){
return (new cljs.core.LazySeq(null,((function (i__58448,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__58449,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
var s__58458__$1 = s__58458;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__58458__$1);
if(temp__5720__auto____$2){
var s__58458__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58458__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__58458__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__58460 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__58459 = (0);
while(true){
if((i__58459 < size__5519__auto____$1)){
var item__$1 = cljs.core._nth(c__5518__auto____$1,i__58459);
cljs.core.chunk_append(b__58460,(function (){var G__58464 = cljs.core.PersistentArrayMap.EMPTY;
var G__58465 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58464,G__58465) : page_cp.call(null,G__58464,G__58465));
})());

var G__58518 = (i__58459 + (1));
i__58459 = G__58518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58460),frontend$components$query_table$iter__58371_$_iter__58446_$_iter__58457(cljs.core.chunk_rest(s__58458__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58460),null);
}
} else {
var item__$1 = cljs.core.first(s__58458__$2);
return cljs.core.cons((function (){var G__58466 = cljs.core.PersistentArrayMap.EMPTY;
var G__58467 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58466,G__58467) : page_cp.call(null,G__58466,G__58467));
})(),frontend$components$query_table$iter__58371_$_iter__58446_$_iter__58457(cljs.core.rest(s__58458__$2)));
}
} else {
return null;
}
break;
}
});})(i__58448,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__58449,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,null,null));
});})(i__58448,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__58449,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__58474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__58474) : frontend.db.entity.call(null,G__58474));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__58475 = cljs.core.PersistentArrayMap.EMPTY;
var G__58476 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58475,G__58476) : page_cp.call(null,G__58475,G__58476));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__58519 = (i__58448 + (1));
i__58448 = G__58519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58449),frontend$components$query_table$iter__58371_$_iter__58446(cljs.core.chunk_rest(s__58447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58449),null);
}
} else {
var key = cljs.core.first(s__58447__$2);
return cljs.core.cons((function (){var value = (function (){var G__58477 = key;
var G__58477__$1 = (((G__58477 instanceof cljs.core.Keyword))?G__58477.fqn:null);
switch (G__58477__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__58478 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__58478__$1 = cljs.core.__destructure_map(map__58478);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58478__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__58479 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__58480 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__58479,G__58480) : __GT_elem.call(null,G__58479,G__58480));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (value,key,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(value,key,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'onMouseMove':((function (value,key,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(value,key,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'onMouseUp':((function (value,key,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(value,key,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (value__$1,value,key,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_){
return (function frontend$components$query_table$iter__58371_$_iter__58446_$_iter__58481(s__58482){
return (new cljs.core.LazySeq(null,(function (){
var s__58482__$1 = s__58482;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__58482__$1);
if(temp__5720__auto____$2){
var s__58482__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58482__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58482__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58484 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58483 = (0);
while(true){
if((i__58483 < size__5519__auto__)){
var item__$1 = cljs.core._nth(c__5518__auto__,i__58483);
cljs.core.chunk_append(b__58484,(function (){var G__58485 = cljs.core.PersistentArrayMap.EMPTY;
var G__58486 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58485,G__58486) : page_cp.call(null,G__58485,G__58486));
})());

var G__58526 = (i__58483 + (1));
i__58483 = G__58526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58484),frontend$components$query_table$iter__58371_$_iter__58446_$_iter__58481(cljs.core.chunk_rest(s__58482__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58484),null);
}
} else {
var item__$1 = cljs.core.first(s__58482__$2);
return cljs.core.cons((function (){var G__58487 = cljs.core.PersistentArrayMap.EMPTY;
var G__58488 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58487,G__58488) : page_cp.call(null,G__58487,G__58488));
})(),frontend$components$query_table$iter__58371_$_iter__58446_$_iter__58481(cljs.core.rest(s__58482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(value__$1,value,key,s__58447__$2,temp__5720__auto____$1,format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__58492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__58492) : frontend.db.entity.call(null,G__58492));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__58493 = cljs.core.PersistentArrayMap.EMPTY;
var G__58494 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__58493,G__58494) : page_cp.call(null,G__58493,G__58494));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__58371_$_iter__58446(cljs.core.rest(s__58447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(format,item,s__58372__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__58324,map__58324__$1,page_QMARK_))
;
return iter__5520__auto__(keys__$1);
})())]);
})(),frontend$components$query_table$iter__58371(cljs.core.rest(s__58372__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(result__$3);
})())])])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query-table","sort-by-item","frontend.components.query-table/sort-by-item",1756589087)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query-table","desc?","frontend.components.query-table/desc?",-2115901141)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.query-table","select?","frontend.components.query-table/select?",257289424))], null),"frontend.components.query-table/result-table");

//# sourceMappingURL=frontend.components.query_table.js.map
