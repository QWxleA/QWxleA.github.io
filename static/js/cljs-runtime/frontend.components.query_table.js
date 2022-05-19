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
})},[daiquiri.core.create_element("div",{'className':"flex items-center"},[(function (){var attrs79784 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs79784))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-1"], null)], null),attrs79784], 0))):{'className':"mr-1"}),((cljs.core.map_QMARK_(attrs79784))?null:[daiquiri.interpreter.interpret(attrs79784)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(by_item),key))?(function (){var attrs79792 = (cljs.core.truth_(cljs.core.deref(desc_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_up());
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs79792))?daiquiri.interpreter.element_attributes(attrs79792):null),((cljs.core.map_QMARK_(attrs79792))?null:[daiquiri.interpreter.interpret(attrs79792)]));
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
if(cljs.core.every_QMARK_((function (p1__79813_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__79813_SHARP_,ks) === (0));
}),result__$1)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79814_SHARP_){
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(p1__79814_SHARP_,ks);
}),result__$1);
} else {
return result__$1;
}
});
frontend.components.query_table.sort_by_fn = (function frontend$components$query_table$sort_by_fn(sort_by_item,item){
var G__79817 = sort_by_item;
var G__79817__$1 = (((G__79817 instanceof cljs.core.Keyword))?G__79817.fqn:null);
switch (G__79817__$1) {
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
frontend.components.query_table.result_table = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,current_block,result,p__79826,map_inline,page_cp,__GT_elem,inline_text){
var map__79827 = p__79826;
var map__79827__$1 = cljs.core.__destructure_map(map__79827);
var page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79827__$1,new cljs.core.Keyword(null,"page?","page?",644039860));
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
var or__4253__auto____$1 = (function (){var G__79828 = p_sort_by;
if((G__79828 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__79828);
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
var clock_time_total = (cljs.core.truth_(page_QMARK_)?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79822_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(p1__79822_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"clock-time","clock-time",1696313975)], null),(0));
}),result__$2)));
var query_properties = (function (){var G__79830 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null),"");
if((G__79830 == null)){
return null;
} else {
return frontend.handler.common.safe_read_string(G__79830,"Parsing query properties failed");
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
}),'style':{'width':"100%"},'className':"overflow-x-auto"},[daiquiri.core.create_element("table",{'className':"table-auto"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$query_table$iter__79835(s__79836){
return (new cljs.core.LazySeq(null,(function (){
var s__79836__$1 = s__79836;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__79836__$1);
if(temp__5720__auto__){
var s__79836__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79836__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__79836__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__79838 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__79837 = (0);
while(true){
if((i__79837 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__79837);
cljs.core.chunk_append(b__79838,(function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})());

var G__80014 = (i__79837 + (1));
i__79837 = G__80014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79838),frontend$components$query_table$iter__79835(cljs.core.chunk_rest(s__79836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79838),null);
}
} else {
var key = cljs.core.first(s__79836__$2);
return cljs.core.cons((function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})(),frontend$components$query_table$iter__79835(cljs.core.rest(s__79836__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(keys__$1);
})())])]),daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$query_table$iter__79841(s__79842){
return (new cljs.core.LazySeq(null,(function (){
var s__79842__$1 = s__79842;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__79842__$1);
if(temp__5720__auto__){
var s__79842__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79842__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__79842__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__79844 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__79843 = (0);
while(true){
if((i__79843 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__79843);
cljs.core.chunk_append(b__79844,(function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (i__79843,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function frontend$components$query_table$iter__79841_$_iter__79847(s__79848){
return (new cljs.core.LazySeq(null,((function (i__79843,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
var s__79848__$1 = s__79848;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__79848__$1);
if(temp__5720__auto____$1){
var s__79848__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79848__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__79848__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__79850 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__79849 = (0);
while(true){
if((i__79849 < size__4651__auto____$1)){
var key = cljs.core._nth(c__4650__auto____$1,i__79849);
cljs.core.chunk_append(b__79850,(function (){var value = (function (){var G__79854 = key;
var G__79854__$1 = (((G__79854 instanceof cljs.core.Keyword))?G__79854.fqn:null);
switch (G__79854__$1) {
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
var map__79856 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__79856__$1 = cljs.core.__destructure_map(map__79856);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79856__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__79857 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__79858 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__79857,G__79858) : __GT_elem.call(null,G__79857,G__79858));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__79849,i__79843,value,key,c__4650__auto____$1,size__4651__auto____$1,b__79850,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__79849,i__79843,value,key,c__4650__auto____$1,size__4651__auto____$1,b__79850,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'onMouseMove':((function (i__79849,i__79843,value,key,c__4650__auto____$1,size__4651__auto____$1,b__79850,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__79849,i__79843,value,key,c__4650__auto____$1,size__4651__auto____$1,b__79850,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'onMouseUp':((function (i__79849,i__79843,value,key,c__4650__auto____$1,size__4651__auto____$1,b__79850,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__79849,i__79843,value,key,c__4650__auto____$1,size__4651__auto____$1,b__79850,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__4652__auto__ = ((function (i__79849,i__79843,value__$1,value,key,c__4650__auto____$1,size__4651__auto____$1,b__79850,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function frontend$components$query_table$iter__79841_$_iter__79847_$_iter__79863(s__79864){
return (new cljs.core.LazySeq(null,((function (i__79849,i__79843,value__$1,value,key,c__4650__auto____$1,size__4651__auto____$1,b__79850,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
var s__79864__$1 = s__79864;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__79864__$1);
if(temp__5720__auto____$2){
var s__79864__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__79864__$2)){
var c__4650__auto____$2 = cljs.core.chunk_first(s__79864__$2);
var size__4651__auto____$2 = cljs.core.count(c__4650__auto____$2);
var b__79866 = cljs.core.chunk_buffer(size__4651__auto____$2);
if((function (){var i__79865 = (0);
while(true){
if((i__79865 < size__4651__auto____$2)){
var item__$1 = cljs.core._nth(c__4650__auto____$2,i__79865);
cljs.core.chunk_append(b__79866,(function (){var G__79870 = cljs.core.PersistentArrayMap.EMPTY;
var G__79871 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79870,G__79871) : page_cp.call(null,G__79870,G__79871));
})());

var G__80056 = (i__79865 + (1));
i__79865 = G__80056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79866),frontend$components$query_table$iter__79841_$_iter__79847_$_iter__79863(cljs.core.chunk_rest(s__79864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79866),null);
}
} else {
var item__$1 = cljs.core.first(s__79864__$2);
return cljs.core.cons((function (){var G__79872 = cljs.core.PersistentArrayMap.EMPTY;
var G__79873 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79872,G__79873) : page_cp.call(null,G__79872,G__79873));
})(),frontend$components$query_table$iter__79841_$_iter__79847_$_iter__79863(cljs.core.rest(s__79864__$2)));
}
} else {
return null;
}
break;
}
});})(i__79849,i__79843,value__$1,value,key,c__4650__auto____$1,size__4651__auto____$1,b__79850,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,null,null));
});})(i__79849,i__79843,value__$1,value,key,c__4650__auto____$1,size__4651__auto____$1,b__79850,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
;
return iter__4652__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__79877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__79877) : frontend.db.entity.call(null,G__79877));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__79882 = cljs.core.PersistentArrayMap.EMPTY;
var G__79883 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79882,G__79883) : page_cp.call(null,G__79882,G__79883));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__80061 = (i__79849 + (1));
i__79849 = G__80061;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79850),frontend$components$query_table$iter__79841_$_iter__79847(cljs.core.chunk_rest(s__79848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79850),null);
}
} else {
var key = cljs.core.first(s__79848__$2);
return cljs.core.cons((function (){var value = (function (){var G__79884 = key;
var G__79884__$1 = (((G__79884 instanceof cljs.core.Keyword))?G__79884.fqn:null);
switch (G__79884__$1) {
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
var map__79887 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__79887__$1 = cljs.core.__destructure_map(map__79887);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79887__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__79888 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__79889 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__79888,G__79889) : __GT_elem.call(null,G__79888,G__79889));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__79843,value,key,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__79843,value,key,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'onMouseMove':((function (i__79843,value,key,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__79843,value,key,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'onMouseUp':((function (i__79843,value,key,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__79843,value,key,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__4652__auto__ = ((function (i__79843,value__$1,value,key,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function frontend$components$query_table$iter__79841_$_iter__79847_$_iter__79892(s__79893){
return (new cljs.core.LazySeq(null,((function (i__79843,value__$1,value,key,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
var s__79893__$1 = s__79893;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__79893__$1);
if(temp__5720__auto____$2){
var s__79893__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__79893__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__79893__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__79895 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__79894 = (0);
while(true){
if((i__79894 < size__4651__auto____$1)){
var item__$1 = cljs.core._nth(c__4650__auto____$1,i__79894);
cljs.core.chunk_append(b__79895,(function (){var G__79896 = cljs.core.PersistentArrayMap.EMPTY;
var G__79897 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79896,G__79897) : page_cp.call(null,G__79896,G__79897));
})());

var G__80109 = (i__79894 + (1));
i__79894 = G__80109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79895),frontend$components$query_table$iter__79841_$_iter__79847_$_iter__79892(cljs.core.chunk_rest(s__79893__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79895),null);
}
} else {
var item__$1 = cljs.core.first(s__79893__$2);
return cljs.core.cons((function (){var G__79899 = cljs.core.PersistentArrayMap.EMPTY;
var G__79900 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79899,G__79900) : page_cp.call(null,G__79899,G__79900));
})(),frontend$components$query_table$iter__79841_$_iter__79847_$_iter__79892(cljs.core.rest(s__79893__$2)));
}
} else {
return null;
}
break;
}
});})(i__79843,value__$1,value,key,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,null,null));
});})(i__79843,value__$1,value,key,s__79848__$2,temp__5720__auto____$1,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
;
return iter__4652__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__79906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__79906) : frontend.db.entity.call(null,G__79906));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__79907 = cljs.core.PersistentArrayMap.EMPTY;
var G__79908 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79907,G__79908) : page_cp.call(null,G__79907,G__79908));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__79841_$_iter__79847(cljs.core.rest(s__79848__$2)));
}
} else {
return null;
}
break;
}
});})(i__79843,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,null,null));
});})(i__79843,format,item,c__4650__auto__,size__4651__auto__,b__79844,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
;
return iter__4652__auto__(keys__$1);
})())]);
})());

var G__80119 = (i__79843 + (1));
i__79843 = G__80119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79844),frontend$components$query_table$iter__79841(cljs.core.chunk_rest(s__79842__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79844),null);
}
} else {
var item = cljs.core.first(s__79842__$2);
return cljs.core.cons((function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function frontend$components$query_table$iter__79841_$_iter__79910(s__79911){
return (new cljs.core.LazySeq(null,(function (){
var s__79911__$1 = s__79911;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__79911__$1);
if(temp__5720__auto____$1){
var s__79911__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79911__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__79911__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__79913 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__79912 = (0);
while(true){
if((i__79912 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__79912);
cljs.core.chunk_append(b__79913,(function (){var value = (function (){var G__79917 = key;
var G__79917__$1 = (((G__79917 instanceof cljs.core.Keyword))?G__79917.fqn:null);
switch (G__79917__$1) {
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
var map__79919 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__79919__$1 = cljs.core.__destructure_map(map__79919);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79919__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__79920 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__79921 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__79920,G__79921) : __GT_elem.call(null,G__79920,G__79921));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__79912,value,key,c__4650__auto__,size__4651__auto__,b__79913,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__79912,value,key,c__4650__auto__,size__4651__auto__,b__79913,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'onMouseMove':((function (i__79912,value,key,c__4650__auto__,size__4651__auto__,b__79913,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__79912,value,key,c__4650__auto__,size__4651__auto__,b__79913,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'onMouseUp':((function (i__79912,value,key,c__4650__auto__,size__4651__auto__,b__79913,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__79912,value,key,c__4650__auto__,size__4651__auto__,b__79913,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__4652__auto__ = ((function (i__79912,value__$1,value,key,c__4650__auto__,size__4651__auto__,b__79913,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function frontend$components$query_table$iter__79841_$_iter__79910_$_iter__79925(s__79926){
return (new cljs.core.LazySeq(null,((function (i__79912,value__$1,value,key,c__4650__auto__,size__4651__auto__,b__79913,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
var s__79926__$1 = s__79926;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__79926__$1);
if(temp__5720__auto____$2){
var s__79926__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__79926__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__79926__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__79928 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__79927 = (0);
while(true){
if((i__79927 < size__4651__auto____$1)){
var item__$1 = cljs.core._nth(c__4650__auto____$1,i__79927);
cljs.core.chunk_append(b__79928,(function (){var G__79929 = cljs.core.PersistentArrayMap.EMPTY;
var G__79930 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79929,G__79930) : page_cp.call(null,G__79929,G__79930));
})());

var G__80129 = (i__79927 + (1));
i__79927 = G__80129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79928),frontend$components$query_table$iter__79841_$_iter__79910_$_iter__79925(cljs.core.chunk_rest(s__79926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79928),null);
}
} else {
var item__$1 = cljs.core.first(s__79926__$2);
return cljs.core.cons((function (){var G__79931 = cljs.core.PersistentArrayMap.EMPTY;
var G__79932 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79931,G__79932) : page_cp.call(null,G__79931,G__79932));
})(),frontend$components$query_table$iter__79841_$_iter__79910_$_iter__79925(cljs.core.rest(s__79926__$2)));
}
} else {
return null;
}
break;
}
});})(i__79912,value__$1,value,key,c__4650__auto__,size__4651__auto__,b__79913,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,null,null));
});})(i__79912,value__$1,value,key,c__4650__auto__,size__4651__auto__,b__79913,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
;
return iter__4652__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__79940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__79940) : frontend.db.entity.call(null,G__79940));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__79941 = cljs.core.PersistentArrayMap.EMPTY;
var G__79942 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79941,G__79942) : page_cp.call(null,G__79941,G__79942));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__80131 = (i__79912 + (1));
i__79912 = G__80131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79913),frontend$components$query_table$iter__79841_$_iter__79910(cljs.core.chunk_rest(s__79911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79913),null);
}
} else {
var key = cljs.core.first(s__79911__$2);
return cljs.core.cons((function (){var value = (function (){var G__79945 = key;
var G__79945__$1 = (((G__79945 instanceof cljs.core.Keyword))?G__79945.fqn:null);
switch (G__79945__$1) {
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
var map__79949 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__79949__$1 = cljs.core.__destructure_map(map__79949);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79949__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__79950 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__79951 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__79950,G__79951) : __GT_elem.call(null,G__79950,G__79951));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (value,key,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(value,key,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'onMouseMove':((function (value,key,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(value,key,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'onMouseUp':((function (value,key,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(value,key,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__4652__auto__ = ((function (value__$1,value,key,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_){
return (function frontend$components$query_table$iter__79841_$_iter__79910_$_iter__79957(s__79958){
return (new cljs.core.LazySeq(null,(function (){
var s__79958__$1 = s__79958;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__79958__$1);
if(temp__5720__auto____$2){
var s__79958__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__79958__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__79958__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__79960 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__79959 = (0);
while(true){
if((i__79959 < size__4651__auto__)){
var item__$1 = cljs.core._nth(c__4650__auto__,i__79959);
cljs.core.chunk_append(b__79960,(function (){var G__79961 = cljs.core.PersistentArrayMap.EMPTY;
var G__79962 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79961,G__79962) : page_cp.call(null,G__79961,G__79962));
})());

var G__80151 = (i__79959 + (1));
i__79959 = G__80151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79960),frontend$components$query_table$iter__79841_$_iter__79910_$_iter__79957(cljs.core.chunk_rest(s__79958__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79960),null);
}
} else {
var item__$1 = cljs.core.first(s__79958__$2);
return cljs.core.cons((function (){var G__79963 = cljs.core.PersistentArrayMap.EMPTY;
var G__79964 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79963,G__79964) : page_cp.call(null,G__79963,G__79964));
})(),frontend$components$query_table$iter__79841_$_iter__79910_$_iter__79957(cljs.core.rest(s__79958__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(value__$1,value,key,s__79911__$2,temp__5720__auto____$1,format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
;
return iter__4652__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__79970 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__79970) : frontend.db.entity.call(null,G__79970));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__79971 = cljs.core.PersistentArrayMap.EMPTY;
var G__79972 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__79971,G__79972) : page_cp.call(null,G__79971,G__79972));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__79841_$_iter__79910(cljs.core.rest(s__79911__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(format,item,s__79842__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__79827,map__79827__$1,page_QMARK_))
;
return iter__4652__auto__(keys__$1);
})())]);
})(),frontend$components$query_table$iter__79841(cljs.core.rest(s__79842__$2)));
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
