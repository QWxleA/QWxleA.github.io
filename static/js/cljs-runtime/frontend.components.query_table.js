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
})},[daiquiri.core.create_element("div",{'className':"flex items-center"},[(function (){var attrs55959 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs55959))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-1"], null)], null),attrs55959], 0))):{'className':"mr-1"}),((cljs.core.map_QMARK_(attrs55959))?null:[daiquiri.interpreter.interpret(attrs55959)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(by_item),key))?(function (){var attrs55961 = (cljs.core.truth_(cljs.core.deref(desc_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_up());
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs55961))?daiquiri.interpreter.element_attributes(attrs55961):null),((cljs.core.map_QMARK_(attrs55961))?null:[daiquiri.interpreter.interpret(attrs55961)]));
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
if(cljs.core.every_QMARK_((function (p1__55967_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__55967_SHARP_,ks) === (0));
}),result__$1)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55968_SHARP_){
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(p1__55968_SHARP_,ks);
}),result__$1);
} else {
return result__$1;
}
});
frontend.components.query_table.sort_by_fn = (function frontend$components$query_table$sort_by_fn(sort_by_item,item){
var G__55972 = sort_by_item;
var G__55972__$1 = (((G__55972 instanceof cljs.core.Keyword))?G__55972.fqn:null);
switch (G__55972__$1) {
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
frontend.components.query_table.result_table = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,current_block,result,p__55982,map_inline,page_cp,__GT_elem,inline_text){
var map__55984 = p__55982;
var map__55984__$1 = cljs.core.__destructure_map(map__55984);
var page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55984__$1,new cljs.core.Keyword(null,"page?","page?",644039860));
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
var or__5043__auto____$1 = (function (){var G__55987 = p_sort_by;
if((G__55987 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__55987);
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
var clock_time_total = (cljs.core.truth_(page_QMARK_)?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55975_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(p1__55975_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"clock-time","clock-time",1696313975)], null),(0));
}),result__$2)));
var query_properties = (function (){var G__55991 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null),"");
if((G__55991 == null)){
return null;
} else {
return frontend.handler.common.safe_read_string(G__55991,"Parsing query properties failed");
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
}),'style':{'width':"100%"},'className':"overflow-x-auto"},[daiquiri.core.create_element("table",{'className':"table-auto"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$query_table$iter__55996(s__55997){
return (new cljs.core.LazySeq(null,(function (){
var s__55997__$1 = s__55997;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55997__$1);
if(temp__5720__auto__){
var s__55997__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55997__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__55997__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__55999 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__55998 = (0);
while(true){
if((i__55998 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__55998);
cljs.core.chunk_append(b__55999,(function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})());

var G__56285 = (i__55998 + (1));
i__55998 = G__56285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55999),frontend$components$query_table$iter__55996(cljs.core.chunk_rest(s__55997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55999),null);
}
} else {
var key = cljs.core.first(s__55997__$2);
return cljs.core.cons((function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})(),frontend$components$query_table$iter__55996(cljs.core.rest(s__55997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(keys__$1);
})())])]),daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$query_table$iter__56020(s__56021){
return (new cljs.core.LazySeq(null,(function (){
var s__56021__$1 = s__56021;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__56021__$1);
if(temp__5720__auto__){
var s__56021__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56021__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__56021__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__56023 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__56022 = (0);
while(true){
if((i__56022 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__56022);
cljs.core.chunk_append(b__56023,(function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__56022,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function frontend$components$query_table$iter__56020_$_iter__56030(s__56031){
return (new cljs.core.LazySeq(null,((function (i__56022,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
var s__56031__$1 = s__56031;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__56031__$1);
if(temp__5720__auto____$1){
var s__56031__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56031__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__56031__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__56033 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__56032 = (0);
while(true){
if((i__56032 < size__5519__auto____$1)){
var key = cljs.core._nth(c__5518__auto____$1,i__56032);
cljs.core.chunk_append(b__56033,(function (){var value = (function (){var G__56038 = key;
var G__56038__$1 = (((G__56038 instanceof cljs.core.Keyword))?G__56038.fqn:null);
switch (G__56038__$1) {
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
var map__56042 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__56042__$1 = cljs.core.__destructure_map(map__56042);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56042__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__56056 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__56057 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__56056,G__56057) : __GT_elem.call(null,G__56056,G__56057));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__56032,i__56022,value,key,c__5518__auto____$1,size__5519__auto____$1,b__56033,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__56032,i__56022,value,key,c__5518__auto____$1,size__5519__auto____$1,b__56033,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'onMouseMove':((function (i__56032,i__56022,value,key,c__5518__auto____$1,size__5519__auto____$1,b__56033,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__56032,i__56022,value,key,c__5518__auto____$1,size__5519__auto____$1,b__56033,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'onMouseUp':((function (i__56032,i__56022,value,key,c__5518__auto____$1,size__5519__auto____$1,b__56033,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__56032,i__56022,value,key,c__5518__auto____$1,size__5519__auto____$1,b__56033,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__56032,i__56022,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__56033,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function frontend$components$query_table$iter__56020_$_iter__56030_$_iter__56059(s__56060){
return (new cljs.core.LazySeq(null,((function (i__56032,i__56022,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__56033,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
var s__56060__$1 = s__56060;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__56060__$1);
if(temp__5720__auto____$2){
var s__56060__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__56060__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__56060__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__56062 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__56061 = (0);
while(true){
if((i__56061 < size__5519__auto____$2)){
var item__$1 = cljs.core._nth(c__5518__auto____$2,i__56061);
cljs.core.chunk_append(b__56062,(function (){var G__56068 = cljs.core.PersistentArrayMap.EMPTY;
var G__56069 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56068,G__56069) : page_cp.call(null,G__56068,G__56069));
})());

var G__56302 = (i__56061 + (1));
i__56061 = G__56302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56062),frontend$components$query_table$iter__56020_$_iter__56030_$_iter__56059(cljs.core.chunk_rest(s__56060__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56062),null);
}
} else {
var item__$1 = cljs.core.first(s__56060__$2);
return cljs.core.cons((function (){var G__56070 = cljs.core.PersistentArrayMap.EMPTY;
var G__56071 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56070,G__56071) : page_cp.call(null,G__56070,G__56071));
})(),frontend$components$query_table$iter__56020_$_iter__56030_$_iter__56059(cljs.core.rest(s__56060__$2)));
}
} else {
return null;
}
break;
}
});})(i__56032,i__56022,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__56033,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,null,null));
});})(i__56032,i__56022,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__56033,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__56078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__56078) : frontend.db.entity.call(null,G__56078));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__56079 = cljs.core.PersistentArrayMap.EMPTY;
var G__56080 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56079,G__56080) : page_cp.call(null,G__56079,G__56080));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__56307 = (i__56032 + (1));
i__56032 = G__56307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56033),frontend$components$query_table$iter__56020_$_iter__56030(cljs.core.chunk_rest(s__56031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56033),null);
}
} else {
var key = cljs.core.first(s__56031__$2);
return cljs.core.cons((function (){var value = (function (){var G__56109 = key;
var G__56109__$1 = (((G__56109 instanceof cljs.core.Keyword))?G__56109.fqn:null);
switch (G__56109__$1) {
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
var map__56114 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__56114__$1 = cljs.core.__destructure_map(map__56114);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56114__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__56119 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__56120 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__56119,G__56120) : __GT_elem.call(null,G__56119,G__56120));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__56022,value,key,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__56022,value,key,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'onMouseMove':((function (i__56022,value,key,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__56022,value,key,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'onMouseUp':((function (i__56022,value,key,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__56022,value,key,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__56022,value__$1,value,key,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function frontend$components$query_table$iter__56020_$_iter__56030_$_iter__56152(s__56153){
return (new cljs.core.LazySeq(null,((function (i__56022,value__$1,value,key,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
var s__56153__$1 = s__56153;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__56153__$1);
if(temp__5720__auto____$2){
var s__56153__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__56153__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__56153__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__56155 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__56154 = (0);
while(true){
if((i__56154 < size__5519__auto____$1)){
var item__$1 = cljs.core._nth(c__5518__auto____$1,i__56154);
cljs.core.chunk_append(b__56155,(function (){var G__56157 = cljs.core.PersistentArrayMap.EMPTY;
var G__56158 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56157,G__56158) : page_cp.call(null,G__56157,G__56158));
})());

var G__56337 = (i__56154 + (1));
i__56154 = G__56337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56155),frontend$components$query_table$iter__56020_$_iter__56030_$_iter__56152(cljs.core.chunk_rest(s__56153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56155),null);
}
} else {
var item__$1 = cljs.core.first(s__56153__$2);
return cljs.core.cons((function (){var G__56159 = cljs.core.PersistentArrayMap.EMPTY;
var G__56160 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56159,G__56160) : page_cp.call(null,G__56159,G__56160));
})(),frontend$components$query_table$iter__56020_$_iter__56030_$_iter__56152(cljs.core.rest(s__56153__$2)));
}
} else {
return null;
}
break;
}
});})(i__56022,value__$1,value,key,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,null,null));
});})(i__56022,value__$1,value,key,s__56031__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__56167 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__56167) : frontend.db.entity.call(null,G__56167));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__56168 = cljs.core.PersistentArrayMap.EMPTY;
var G__56169 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56168,G__56169) : page_cp.call(null,G__56168,G__56169));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__56020_$_iter__56030(cljs.core.rest(s__56031__$2)));
}
} else {
return null;
}
break;
}
});})(i__56022,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,null,null));
});})(i__56022,format,item,c__5518__auto__,size__5519__auto__,b__56023,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
;
return iter__5520__auto__(keys__$1);
})())]);
})());

var G__56341 = (i__56022 + (1));
i__56022 = G__56341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56023),frontend$components$query_table$iter__56020(cljs.core.chunk_rest(s__56021__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56023),null);
}
} else {
var item = cljs.core.first(s__56021__$2);
return cljs.core.cons((function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function frontend$components$query_table$iter__56020_$_iter__56170(s__56171){
return (new cljs.core.LazySeq(null,(function (){
var s__56171__$1 = s__56171;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__56171__$1);
if(temp__5720__auto____$1){
var s__56171__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56171__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__56171__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__56173 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__56172 = (0);
while(true){
if((i__56172 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__56172);
cljs.core.chunk_append(b__56173,(function (){var value = (function (){var G__56176 = key;
var G__56176__$1 = (((G__56176 instanceof cljs.core.Keyword))?G__56176.fqn:null);
switch (G__56176__$1) {
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
var map__56177 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__56177__$1 = cljs.core.__destructure_map(map__56177);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56177__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__56179 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__56180 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__56179,G__56180) : __GT_elem.call(null,G__56179,G__56180));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__56172,value,key,c__5518__auto__,size__5519__auto__,b__56173,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__56172,value,key,c__5518__auto__,size__5519__auto__,b__56173,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'onMouseMove':((function (i__56172,value,key,c__5518__auto__,size__5519__auto__,b__56173,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__56172,value,key,c__5518__auto__,size__5519__auto__,b__56173,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'onMouseUp':((function (i__56172,value,key,c__5518__auto__,size__5519__auto__,b__56173,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__56172,value,key,c__5518__auto__,size__5519__auto__,b__56173,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__56172,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__56173,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function frontend$components$query_table$iter__56020_$_iter__56170_$_iter__56184(s__56185){
return (new cljs.core.LazySeq(null,((function (i__56172,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__56173,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
var s__56185__$1 = s__56185;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__56185__$1);
if(temp__5720__auto____$2){
var s__56185__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__56185__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__56185__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__56187 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__56186 = (0);
while(true){
if((i__56186 < size__5519__auto____$1)){
var item__$1 = cljs.core._nth(c__5518__auto____$1,i__56186);
cljs.core.chunk_append(b__56187,(function (){var G__56190 = cljs.core.PersistentArrayMap.EMPTY;
var G__56191 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56190,G__56191) : page_cp.call(null,G__56190,G__56191));
})());

var G__56370 = (i__56186 + (1));
i__56186 = G__56370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56187),frontend$components$query_table$iter__56020_$_iter__56170_$_iter__56184(cljs.core.chunk_rest(s__56185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56187),null);
}
} else {
var item__$1 = cljs.core.first(s__56185__$2);
return cljs.core.cons((function (){var G__56194 = cljs.core.PersistentArrayMap.EMPTY;
var G__56195 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56194,G__56195) : page_cp.call(null,G__56194,G__56195));
})(),frontend$components$query_table$iter__56020_$_iter__56170_$_iter__56184(cljs.core.rest(s__56185__$2)));
}
} else {
return null;
}
break;
}
});})(i__56172,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__56173,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,null,null));
});})(i__56172,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__56173,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__56199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__56199) : frontend.db.entity.call(null,G__56199));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__56200 = cljs.core.PersistentArrayMap.EMPTY;
var G__56201 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56200,G__56201) : page_cp.call(null,G__56200,G__56201));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__56374 = (i__56172 + (1));
i__56172 = G__56374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56173),frontend$components$query_table$iter__56020_$_iter__56170(cljs.core.chunk_rest(s__56171__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56173),null);
}
} else {
var key = cljs.core.first(s__56171__$2);
return cljs.core.cons((function (){var value = (function (){var G__56202 = key;
var G__56202__$1 = (((G__56202 instanceof cljs.core.Keyword))?G__56202.fqn:null);
switch (G__56202__$1) {
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
var map__56203 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__56203__$1 = cljs.core.__destructure_map(map__56203);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56203__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__56204 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__56205 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__56204,G__56205) : __GT_elem.call(null,G__56204,G__56205));
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
return daiquiri.core.create_element("td",{'onMouseDown':((function (value,key,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(value,key,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'onMouseMove':((function (value,key,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(value,key,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'onMouseUp':((function (value,key,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(value,key,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (value__$1,value,key,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_){
return (function frontend$components$query_table$iter__56020_$_iter__56170_$_iter__56226(s__56227){
return (new cljs.core.LazySeq(null,(function (){
var s__56227__$1 = s__56227;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__56227__$1);
if(temp__5720__auto____$2){
var s__56227__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__56227__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__56227__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__56229 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__56228 = (0);
while(true){
if((i__56228 < size__5519__auto__)){
var item__$1 = cljs.core._nth(c__5518__auto__,i__56228);
cljs.core.chunk_append(b__56229,(function (){var G__56257 = cljs.core.PersistentArrayMap.EMPTY;
var G__56258 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56257,G__56258) : page_cp.call(null,G__56257,G__56258));
})());

var G__56376 = (i__56228 + (1));
i__56228 = G__56376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56229),frontend$components$query_table$iter__56020_$_iter__56170_$_iter__56226(cljs.core.chunk_rest(s__56227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56229),null);
}
} else {
var item__$1 = cljs.core.first(s__56227__$2);
return cljs.core.cons((function (){var G__56264 = cljs.core.PersistentArrayMap.EMPTY;
var G__56265 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56264,G__56265) : page_cp.call(null,G__56264,G__56265));
})(),frontend$components$query_table$iter__56020_$_iter__56170_$_iter__56226(cljs.core.rest(s__56227__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(value__$1,value,key,s__56171__$2,temp__5720__auto____$1,format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__56269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__56269) : frontend.db.entity.call(null,G__56269));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__56270 = cljs.core.PersistentArrayMap.EMPTY;
var G__56271 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__56270,G__56271) : page_cp.call(null,G__56270,G__56271));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__56020_$_iter__56170(cljs.core.rest(s__56171__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(format,item,s__56021__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__55984,map__55984__$1,page_QMARK_))
;
return iter__5520__auto__(keys__$1);
})())]);
})(),frontend$components$query_table$iter__56020(cljs.core.rest(s__56021__$2)));
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
