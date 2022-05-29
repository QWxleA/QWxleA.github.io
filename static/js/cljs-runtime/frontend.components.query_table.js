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
})},[daiquiri.core.create_element("div",{'className':"flex items-center"},[(function (){var attrs49485 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs49485))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-1"], null)], null),attrs49485], 0))):{'className':"mr-1"}),((cljs.core.map_QMARK_(attrs49485))?null:[daiquiri.interpreter.interpret(attrs49485)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(by_item),key))?(function (){var attrs49486 = (cljs.core.truth_(cljs.core.deref(desc_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_up());
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs49486))?daiquiri.interpreter.element_attributes(attrs49486):null),((cljs.core.map_QMARK_(attrs49486))?null:[daiquiri.interpreter.interpret(attrs49486)]));
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
if(cljs.core.every_QMARK_((function (p1__49493_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__49493_SHARP_,ks) === (0));
}),result__$1)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49495_SHARP_){
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(p1__49495_SHARP_,ks);
}),result__$1);
} else {
return result__$1;
}
});
frontend.components.query_table.sort_by_fn = (function frontend$components$query_table$sort_by_fn(sort_by_item,item){
var G__49500 = sort_by_item;
var G__49500__$1 = (((G__49500 instanceof cljs.core.Keyword))?G__49500.fqn:null);
switch (G__49500__$1) {
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
frontend.components.query_table.result_table = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,current_block,result,p__49516,map_inline,page_cp,__GT_elem,inline_text){
var map__49517 = p__49516;
var map__49517__$1 = cljs.core.__destructure_map(map__49517);
var page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49517__$1,new cljs.core.Keyword(null,"page?","page?",644039860));
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
var or__5043__auto____$1 = (function (){var G__49520 = p_sort_by;
if((G__49520 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__49520);
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
var clock_time_total = (cljs.core.truth_(page_QMARK_)?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49511_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(p1__49511_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"clock-time","clock-time",1696313975)], null),(0));
}),result__$2)));
var query_properties = (function (){var G__49524 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null),"");
if((G__49524 == null)){
return null;
} else {
return frontend.handler.common.safe_read_string(G__49524,"Parsing query properties failed");
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
}),'style':{'width':"100%"},'className':"overflow-x-auto"},[daiquiri.core.create_element("table",{'className':"table-auto"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$query_table$iter__49530(s__49531){
return (new cljs.core.LazySeq(null,(function (){
var s__49531__$1 = s__49531;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__49531__$1);
if(temp__5720__auto__){
var s__49531__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49531__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49531__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49533 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49532 = (0);
while(true){
if((i__49532 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__49532);
cljs.core.chunk_append(b__49533,(function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})());

var G__49680 = (i__49532 + (1));
i__49532 = G__49680;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49533),frontend$components$query_table$iter__49530(cljs.core.chunk_rest(s__49531__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49533),null);
}
} else {
var key = cljs.core.first(s__49531__$2);
return cljs.core.cons((function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})(),frontend$components$query_table$iter__49530(cljs.core.rest(s__49531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(keys__$1);
})())])]),daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$query_table$iter__49538(s__49539){
return (new cljs.core.LazySeq(null,(function (){
var s__49539__$1 = s__49539;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__49539__$1);
if(temp__5720__auto__){
var s__49539__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49539__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49539__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49541 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49540 = (0);
while(true){
if((i__49540 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__49540);
cljs.core.chunk_append(b__49541,(function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__49540,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function frontend$components$query_table$iter__49538_$_iter__49545(s__49546){
return (new cljs.core.LazySeq(null,((function (i__49540,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
var s__49546__$1 = s__49546;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__49546__$1);
if(temp__5720__auto____$1){
var s__49546__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49546__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__49546__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__49548 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__49547 = (0);
while(true){
if((i__49547 < size__5519__auto____$1)){
var key = cljs.core._nth(c__5518__auto____$1,i__49547);
cljs.core.chunk_append(b__49548,(function (){var value = (function (){var G__49550 = key;
var G__49550__$1 = (((G__49550 instanceof cljs.core.Keyword))?G__49550.fqn:null);
switch (G__49550__$1) {
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
var map__49552 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__49552__$1 = cljs.core.__destructure_map(map__49552);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__49553 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__49554 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__49553,G__49554) : __GT_elem.call(null,G__49553,G__49554));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__49547,i__49540,value,key,c__5518__auto____$1,size__5519__auto____$1,b__49548,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__49547,i__49540,value,key,c__5518__auto____$1,size__5519__auto____$1,b__49548,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'onMouseMove':((function (i__49547,i__49540,value,key,c__5518__auto____$1,size__5519__auto____$1,b__49548,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__49547,i__49540,value,key,c__5518__auto____$1,size__5519__auto____$1,b__49548,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'onMouseUp':((function (i__49547,i__49540,value,key,c__5518__auto____$1,size__5519__auto____$1,b__49548,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__49547,i__49540,value,key,c__5518__auto____$1,size__5519__auto____$1,b__49548,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__49547,i__49540,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__49548,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function frontend$components$query_table$iter__49538_$_iter__49545_$_iter__49557(s__49558){
return (new cljs.core.LazySeq(null,((function (i__49547,i__49540,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__49548,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
var s__49558__$1 = s__49558;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__49558__$1);
if(temp__5720__auto____$2){
var s__49558__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__49558__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__49558__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__49560 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__49559 = (0);
while(true){
if((i__49559 < size__5519__auto____$2)){
var item__$1 = cljs.core._nth(c__5518__auto____$2,i__49559);
cljs.core.chunk_append(b__49560,(function (){var G__49562 = cljs.core.PersistentArrayMap.EMPTY;
var G__49563 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49562,G__49563) : page_cp.call(null,G__49562,G__49563));
})());

var G__49685 = (i__49559 + (1));
i__49559 = G__49685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49560),frontend$components$query_table$iter__49538_$_iter__49545_$_iter__49557(cljs.core.chunk_rest(s__49558__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49560),null);
}
} else {
var item__$1 = cljs.core.first(s__49558__$2);
return cljs.core.cons((function (){var G__49564 = cljs.core.PersistentArrayMap.EMPTY;
var G__49565 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49564,G__49565) : page_cp.call(null,G__49564,G__49565));
})(),frontend$components$query_table$iter__49538_$_iter__49545_$_iter__49557(cljs.core.rest(s__49558__$2)));
}
} else {
return null;
}
break;
}
});})(i__49547,i__49540,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__49548,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,null,null));
});})(i__49547,i__49540,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__49548,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__49569 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__49569) : frontend.db.entity.call(null,G__49569));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__49571 = cljs.core.PersistentArrayMap.EMPTY;
var G__49572 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49571,G__49572) : page_cp.call(null,G__49571,G__49572));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__49686 = (i__49547 + (1));
i__49547 = G__49686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49548),frontend$components$query_table$iter__49538_$_iter__49545(cljs.core.chunk_rest(s__49546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49548),null);
}
} else {
var key = cljs.core.first(s__49546__$2);
return cljs.core.cons((function (){var value = (function (){var G__49574 = key;
var G__49574__$1 = (((G__49574 instanceof cljs.core.Keyword))?G__49574.fqn:null);
switch (G__49574__$1) {
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
var map__49575 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__49575__$1 = cljs.core.__destructure_map(map__49575);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49575__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__49576 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__49577 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__49576,G__49577) : __GT_elem.call(null,G__49576,G__49577));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__49540,value,key,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__49540,value,key,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'onMouseMove':((function (i__49540,value,key,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__49540,value,key,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'onMouseUp':((function (i__49540,value,key,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__49540,value,key,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__49540,value__$1,value,key,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function frontend$components$query_table$iter__49538_$_iter__49545_$_iter__49578(s__49579){
return (new cljs.core.LazySeq(null,((function (i__49540,value__$1,value,key,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
var s__49579__$1 = s__49579;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__49579__$1);
if(temp__5720__auto____$2){
var s__49579__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__49579__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__49579__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__49581 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__49580 = (0);
while(true){
if((i__49580 < size__5519__auto____$1)){
var item__$1 = cljs.core._nth(c__5518__auto____$1,i__49580);
cljs.core.chunk_append(b__49581,(function (){var G__49582 = cljs.core.PersistentArrayMap.EMPTY;
var G__49583 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49582,G__49583) : page_cp.call(null,G__49582,G__49583));
})());

var G__49692 = (i__49580 + (1));
i__49580 = G__49692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49581),frontend$components$query_table$iter__49538_$_iter__49545_$_iter__49578(cljs.core.chunk_rest(s__49579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49581),null);
}
} else {
var item__$1 = cljs.core.first(s__49579__$2);
return cljs.core.cons((function (){var G__49584 = cljs.core.PersistentArrayMap.EMPTY;
var G__49585 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49584,G__49585) : page_cp.call(null,G__49584,G__49585));
})(),frontend$components$query_table$iter__49538_$_iter__49545_$_iter__49578(cljs.core.rest(s__49579__$2)));
}
} else {
return null;
}
break;
}
});})(i__49540,value__$1,value,key,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,null,null));
});})(i__49540,value__$1,value,key,s__49546__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__49591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__49591) : frontend.db.entity.call(null,G__49591));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__49592 = cljs.core.PersistentArrayMap.EMPTY;
var G__49593 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49592,G__49593) : page_cp.call(null,G__49592,G__49593));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__49538_$_iter__49545(cljs.core.rest(s__49546__$2)));
}
} else {
return null;
}
break;
}
});})(i__49540,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,null,null));
});})(i__49540,format,item,c__5518__auto__,size__5519__auto__,b__49541,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
;
return iter__5520__auto__(keys__$1);
})())]);
})());

var G__49693 = (i__49540 + (1));
i__49540 = G__49693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49541),frontend$components$query_table$iter__49538(cljs.core.chunk_rest(s__49539__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49541),null);
}
} else {
var item = cljs.core.first(s__49539__$2);
return cljs.core.cons((function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function frontend$components$query_table$iter__49538_$_iter__49598(s__49599){
return (new cljs.core.LazySeq(null,(function (){
var s__49599__$1 = s__49599;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__49599__$1);
if(temp__5720__auto____$1){
var s__49599__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49599__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49599__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49601 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49600 = (0);
while(true){
if((i__49600 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__49600);
cljs.core.chunk_append(b__49601,(function (){var value = (function (){var G__49604 = key;
var G__49604__$1 = (((G__49604 instanceof cljs.core.Keyword))?G__49604.fqn:null);
switch (G__49604__$1) {
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
var map__49605 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__49605__$1 = cljs.core.__destructure_map(map__49605);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49605__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__49606 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__49607 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__49606,G__49607) : __GT_elem.call(null,G__49606,G__49607));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__49600,value,key,c__5518__auto__,size__5519__auto__,b__49601,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__49600,value,key,c__5518__auto__,size__5519__auto__,b__49601,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'onMouseMove':((function (i__49600,value,key,c__5518__auto__,size__5519__auto__,b__49601,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__49600,value,key,c__5518__auto__,size__5519__auto__,b__49601,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'onMouseUp':((function (i__49600,value,key,c__5518__auto__,size__5519__auto__,b__49601,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__49600,value,key,c__5518__auto__,size__5519__auto__,b__49601,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__49600,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__49601,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function frontend$components$query_table$iter__49538_$_iter__49598_$_iter__49610(s__49611){
return (new cljs.core.LazySeq(null,((function (i__49600,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__49601,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
var s__49611__$1 = s__49611;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__49611__$1);
if(temp__5720__auto____$2){
var s__49611__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__49611__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__49611__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__49613 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__49612 = (0);
while(true){
if((i__49612 < size__5519__auto____$1)){
var item__$1 = cljs.core._nth(c__5518__auto____$1,i__49612);
cljs.core.chunk_append(b__49613,(function (){var G__49614 = cljs.core.PersistentArrayMap.EMPTY;
var G__49615 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49614,G__49615) : page_cp.call(null,G__49614,G__49615));
})());

var G__49701 = (i__49612 + (1));
i__49612 = G__49701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49613),frontend$components$query_table$iter__49538_$_iter__49598_$_iter__49610(cljs.core.chunk_rest(s__49611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49613),null);
}
} else {
var item__$1 = cljs.core.first(s__49611__$2);
return cljs.core.cons((function (){var G__49618 = cljs.core.PersistentArrayMap.EMPTY;
var G__49619 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49618,G__49619) : page_cp.call(null,G__49618,G__49619));
})(),frontend$components$query_table$iter__49538_$_iter__49598_$_iter__49610(cljs.core.rest(s__49611__$2)));
}
} else {
return null;
}
break;
}
});})(i__49600,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__49601,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,null,null));
});})(i__49600,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__49601,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__49623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__49623) : frontend.db.entity.call(null,G__49623));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__49624 = cljs.core.PersistentArrayMap.EMPTY;
var G__49625 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49624,G__49625) : page_cp.call(null,G__49624,G__49625));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__49703 = (i__49600 + (1));
i__49600 = G__49703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49601),frontend$components$query_table$iter__49538_$_iter__49598(cljs.core.chunk_rest(s__49599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49601),null);
}
} else {
var key = cljs.core.first(s__49599__$2);
return cljs.core.cons((function (){var value = (function (){var G__49626 = key;
var G__49626__$1 = (((G__49626 instanceof cljs.core.Keyword))?G__49626.fqn:null);
switch (G__49626__$1) {
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
var map__49627 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__49627__$1 = cljs.core.__destructure_map(map__49627);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49627__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__49628 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__49629 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__49628,G__49629) : __GT_elem.call(null,G__49628,G__49629));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (value,key,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(value,key,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'onMouseMove':((function (value,key,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(value,key,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'onMouseUp':((function (value,key,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(value,key,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (value__$1,value,key,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_){
return (function frontend$components$query_table$iter__49538_$_iter__49598_$_iter__49632(s__49633){
return (new cljs.core.LazySeq(null,(function (){
var s__49633__$1 = s__49633;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__49633__$1);
if(temp__5720__auto____$2){
var s__49633__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__49633__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49633__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49635 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49634 = (0);
while(true){
if((i__49634 < size__5519__auto__)){
var item__$1 = cljs.core._nth(c__5518__auto__,i__49634);
cljs.core.chunk_append(b__49635,(function (){var G__49636 = cljs.core.PersistentArrayMap.EMPTY;
var G__49637 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49636,G__49637) : page_cp.call(null,G__49636,G__49637));
})());

var G__49709 = (i__49634 + (1));
i__49634 = G__49709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49635),frontend$components$query_table$iter__49538_$_iter__49598_$_iter__49632(cljs.core.chunk_rest(s__49633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49635),null);
}
} else {
var item__$1 = cljs.core.first(s__49633__$2);
return cljs.core.cons((function (){var G__49638 = cljs.core.PersistentArrayMap.EMPTY;
var G__49639 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49638,G__49639) : page_cp.call(null,G__49638,G__49639));
})(),frontend$components$query_table$iter__49538_$_iter__49598_$_iter__49632(cljs.core.rest(s__49633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(value__$1,value,key,s__49599__$2,temp__5720__auto____$1,format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__49645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__49645) : frontend.db.entity.call(null,G__49645));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__49646 = cljs.core.PersistentArrayMap.EMPTY;
var G__49647 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__49646,G__49647) : page_cp.call(null,G__49646,G__49647));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__49538_$_iter__49598(cljs.core.rest(s__49599__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(format,item,s__49539__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__49517,map__49517__$1,page_QMARK_))
;
return iter__5520__auto__(keys__$1);
})())]);
})(),frontend$components$query_table$iter__49538(cljs.core.rest(s__49539__$2)));
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
