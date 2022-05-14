goog.provide('frontend.format.block');
frontend.format.block.heading_block_QMARK_ = (function frontend$format$block$heading_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Heading",cljs.core.first(block))));
});
frontend.format.block.get_tag = (function frontend$format$block$get_tag(block){
var temp__5720__auto__ = (function (){var and__4251__auto__ = cljs.core.vector_QMARK_(block);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tag",cljs.core.first(block));
if(and__4251__auto____$1){
return cljs.core.second(block);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var tag_value = temp__5720__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
try{if(((cljs.core.vector_QMARK_(e)) && ((cljs.core.count(e) === 2)))){
try{var e_0__94136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0));
if((e_0__94136 === "Plain")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(1));
return s;
} else {
throw cljs.core.match.backtrack;

}
}catch (e94152){if((e94152 instanceof Error)){
var e__57917__auto__ = e94152;
if((e__57917__auto__ === cljs.core.match.backtrack)){
try{var e_0__94136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0));
if((e_0__94136 === "Link")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(1));
var map__94157 = t;
var map__94157__$1 = cljs.core.__destructure_map(map__94157);
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94157__$1,new cljs.core.Keyword(null,"full_text","full_text",1634289075));
return full_text;
} else {
throw cljs.core.match.backtrack;

}
}catch (e94153){if((e94153 instanceof Error)){
var e__57917__auto____$1 = e94153;
if((e__57917__auto____$1 === cljs.core.match.backtrack)){
try{var e_0__94136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0));
if((e_0__94136 === "Nested_link")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(1));
var map__94155 = t;
var map__94155__$1 = cljs.core.__destructure_map(map__94155);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94155__$1,new cljs.core.Keyword(null,"content","content",15833224));
return content;
} else {
throw cljs.core.match.backtrack;

}
}catch (e94154){if((e94154 instanceof Error)){
var e__57917__auto____$2 = e94154;
if((e__57917__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57917__auto____$2;
}
} else {
throw e94154;

}
}} else {
throw e__57917__auto____$1;
}
} else {
throw e94153;

}
}} else {
throw e__57917__auto__;
}
} else {
throw e94152;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94139){if((e94139 instanceof Error)){
var e__57917__auto__ = e94139;
if((e__57917__auto__ === cljs.core.match.backtrack)){
return "";
} else {
throw e__57917__auto__;
}
} else {
throw e94139;

}
}}),tag_value));
} else {
return null;
}
});
frontend.format.block.get_page_reference = (function frontend$format$block$get_page_reference(block){
var page = ((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block)))))?(function (){var typ = cljs.core.first(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
var value = cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Page_ref");
if(and__4251__auto__){
var and__4251__auto____$1 = ((typeof value === 'string') && (cljs.core.not((function (){var or__4253__auto__ = logseq.graph_parser.config.local_asset_QMARK_(value);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return logseq.graph_parser.config.draw_QMARK_(value);
}
})())));
if(and__4251__auto____$1){
return value;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Search");
if(and__4251__auto__){
var and__4251__auto____$1 = logseq.graph_parser.text.page_ref_QMARK_(value);
if(and__4251__auto____$1){
return logseq.graph_parser.text.page_ref_un_brackets_BANG_(value);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Search");
if(and__4251__auto__){
var and__4251__auto____$1 = (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["#",null,"*",null,"/",null,"[",null], null), null),cljs.core.first(value))));
if(and__4251__auto____$1){
var ext = (function (){var G__94158 = frontend.util.get_file_ext(value);
if((G__94158 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__94158);
}
})();
if((((!(frontend.util.starts_with_QMARK_(value,"http:")))) && ((((!(frontend.util.starts_with_QMARK_(value,"https:")))) && ((((!(frontend.util.starts_with_QMARK_(value,"file:")))) && (((cljs.core.not(logseq.graph_parser.config.local_asset_QMARK_(value))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext,new cljs.core.Keyword(null,"excalidraw","excalidraw",-397772502))) || ((!(cljs.core.contains_QMARK_(frontend.config.supported_formats(),ext)))))))))))))){
return value;
} else {
return null;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Complex");
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(value),"file");
if(and__4251__auto____$1){
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"File");
if(and__4251__auto__){
return cljs.core.second(cljs.core.first(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block))));
} else {
return and__4251__auto__;
}
}
}
}
}
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Nested_link",cljs.core.first(block)))))?(function (){var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.last(block));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(block)))))?(function (){var map__94160 = cljs.core.second(block);
var map__94160__$1 = cljs.core.__destructure_map(map__94160);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94160__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94160__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var argument = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"embed")){
return logseq.graph_parser.text.page_ref_un_brackets_BANG_(argument);
} else {
return null;
}
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tag",cljs.core.first(block)))))?(function (){var text = frontend.format.block.get_tag(block);
return logseq.graph_parser.text.page_ref_un_brackets_BANG_(text);
})():null
))));
return logseq.graph_parser.text.block_ref_un_brackets_BANG_(page);
});
frontend.format.block.get_block_reference = (function frontend$format$block$get_block_reference(block){
var temp__5720__auto__ = ((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_reference",cljs.core.first(block)))))?cljs.core.last(block):((((cljs.core.vector_QMARK_(block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block))) && (((cljs.core.map_QMARK_(cljs.core.second(block))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_ref",cljs.core.first(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)))))))))))?cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block))):((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(block)))))?(function (){var map__94163 = cljs.core.second(block);
var map__94163__$1 = cljs.core.__destructure_map(map__94163);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94163__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94163__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"embed")) && (((typeof cljs.core.first(arguments$) === 'string') && (((clojure.string.starts_with_QMARK_(cljs.core.first(arguments$),"((")) && (clojure.string.ends_with_QMARK_(cljs.core.first(arguments$),"))")))))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.first(arguments$),(2),(cljs.core.count(cljs.core.first(arguments$)) - (2)));
} else {
return null;
}
})():((((cljs.core.vector_QMARK_(block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block))) && (cljs.core.map_QMARK_(cljs.core.second(block)))))))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("id",new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block))))))?new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)))):(function (){var id = cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
return logseq.graph_parser.text.block_ref_un_brackets_BANG_(id);
})()):null
))));
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
if(cljs.core.truth_((function (){var and__4251__auto__ = block_id;
if(cljs.core.truth_(and__4251__auto__)){
return logseq.graph_parser.util.uuid_string_QMARK_(block_id);
} else {
return and__4251__auto__;
}
})())){
return block_id;
} else {
return null;
}
} else {
return null;
}
});
frontend.format.block.paragraph_block_QMARK_ = (function frontend$format$block$paragraph_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Paragraph",cljs.core.first(block))));
});
frontend.format.block.timestamp_block_QMARK_ = (function frontend$format$block$timestamp_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Timestamp",cljs.core.first(block))));
});
frontend.format.block.extract_properties = (function frontend$format$block$extract_properties(format,properties){
if(cljs.core.seq(properties)){
var properties__$1 = cljs.core.seq(properties);
var page_refs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
if(((typeof v === 'string') && (cljs.core.not(logseq.graph_parser.mldoc.link_QMARK_(format,v))))){
var v__$1 = clojure.string.trim(v);
var result = logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$2(v__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"un-brackets?","un-brackets?",518613875),false], null));
if(cljs.core.coll_QMARK_(result)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.text.page_ref_un_brackets_BANG_,result);
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__94165){
var vec__94166 = p__94165;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94166,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94166,(1),null);
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background_color","background_color",-1953390743),null,new cljs.core.Keyword(null,"background-color","background-color",570434026),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k));
}),properties__$1)))));
var properties__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__94164_SHARP_){
return (cljs.core.second(p1__94164_SHARP_) == null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__94169){
var vec__94170 = p__94169;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94170,(1),null);
var k__$1 = clojure.string.replace(clojure.string.replace(clojure.string.lower_case(cljs.core.name(k))," ","-"),"_","-");
var k__$2 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["custom-id",null,"custom_id",null], null), null),k__$1))?"id":k__$1);
var v__$1 = ((cljs.core.coll_QMARK_(v))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,v):((clojure.string.blank_QMARK_(v))?null:logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$4(format,k__$2,v,frontend.state.get_config.cljs$core$IFn$_invoke$arity$0())));
var k__$3 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k__$2);
var v__$2 = ((((typeof v__$1 === 'string') && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,new cljs.core.Keyword(null,"aliases","aliases",1346874714),null], null), null),k__$3))))?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1], null)):v__$1);
var v__$3 = ((cljs.core.coll_QMARK_(v__$2))?cljs.core.set(v__$2):v__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$3,v__$3], null);
}),properties__$1));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,properties__$2),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,properties__$2),new cljs.core.Keyword(null,"page-refs","page-refs",1204379971),page_refs], null);
} else {
return null;
}
});
frontend.format.block.paragraph_timestamp_block_QMARK_ = (function frontend$format$block$paragraph_timestamp_block_QMARK_(block){
return ((frontend.format.block.paragraph_block_QMARK_(block)) && (((frontend.format.block.timestamp_block_QMARK_(cljs.core.first(cljs.core.second(block)))) || (frontend.format.block.timestamp_block_QMARK_(cljs.core.second(cljs.core.second(block)))))));
});
frontend.format.block.extract_timestamps = (function frontend$format$block$extract_timestamps(block){
var G__94175 = cljs.core.second(block);
var G__94175__$1 = (((G__94175 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.format.block.timestamp_block_QMARK_,G__94175));
var G__94175__$2 = (((G__94175__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,G__94175__$1));
if((G__94175__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__94175__$2);
}
});
frontend.format.block.timestamps__GT_scheduled_and_deadline = (function frontend$format$block$timestamps__GT_scheduled_and_deadline(timestamps){
var timestamps__$1 = medley.core.map_keys(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.lower_case),timestamps);
var m = (function (){var G__94176 = cljs.core.select_keys(timestamps__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"deadline","deadline",628964572)], null));
if((G__94176 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__94177){
var vec__94178 = p__94177;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94178,(1),null);
var map__94181 = v;
var map__94181__$1 = cljs.core.__destructure_map(map__94181);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94181__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94181__$1,new cljs.core.Keyword(null,"repetition","repetition",1938392115));
var map__94182 = date;
var map__94182__$1 = cljs.core.__destructure_map(map__94182);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94182__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94182__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94182__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var day__$1 = parseInt([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),frontend.util.zero_pad(month),frontend.util.zero_pad(day)].join(''));
var G__94183 = (function (){var G__94184 = k;
var G__94184__$1 = (((G__94184 instanceof cljs.core.Keyword))?G__94184.fqn:null);
switch (G__94184__$1) {
case "scheduled":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),day__$1], null);

break;
case "deadline":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deadline","deadline",628964572),day__$1], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__94184__$1)].join('')));

}
})();
if(cljs.core.truth_(repetition)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94183,new cljs.core.Keyword(null,"repeated?","repeated?",-1169980868),true);
} else {
return G__94183;
}
}),G__94176);
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,m);
});
/**
 * Convert journal file name to user' custom date format
 */
frontend.format.block.convert_page_if_journal = (function frontend$format$block$convert_page_if_journal(original_page_name){
if(cljs.core.truth_(original_page_name)){
var page_name = frontend.util.page_name_sanity_lc(original_page_name);
var day = frontend.date.journal_title__GT_int(page_name);
if(cljs.core.truth_(day)){
var original_page_name__$1 = frontend.date.int__GT_journal_title(day);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_page_name__$1,frontend.util.page_name_sanity_lc(original_page_name__$1),day], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_page_name,page_name,day], null);
}
} else {
return null;
}
});
/**
 * Create a page's map structure given a original page name (string).
 * map as input is supported for legacy compatibility.
 * with-timestamp?: assign timestampes to the map structure.
 *  Useful when creating new pages from references or namespaces,
 *  as there's no chance to introduce timestamps via editing in page
 */
frontend.format.block.page_name__GT_map = (function frontend$format$block$page_name__GT_map(var_args){
var G__94186 = arguments.length;
switch (G__94186) {
case 2:
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2 = (function (original_page_name,with_id_QMARK_){
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$3(original_page_name,with_id_QMARK_,true);
}));

(frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$3 = (function (original_page_name,with_id_QMARK_,with_timestamp_QMARK_){
if(cljs.core.truth_((function (){var and__4251__auto__ = original_page_name;
if(cljs.core.truth_(and__4251__auto__)){
return typeof original_page_name === 'string';
} else {
return and__4251__auto__;
}
})())){
var original_page_name__$1 = frontend.util.remove_boundary_slashes(original_page_name);
var vec__94187 = frontend.format.block.convert_page_if_journal(original_page_name__$1);
var original_page_name__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94187,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94187,(1),null);
var journal_day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94187,(2),null);
var namespace_QMARK_ = (((!(cljs.core.boolean$(logseq.graph_parser.text.get_nested_page_name(original_page_name__$2))))) && (logseq.graph_parser.text.namespace_page_QMARK_(original_page_name__$2)));
var page_entity = (function (){var G__94190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__94190) : frontend.db.entity.call(null,G__94190));
})();
var original_page_name__$3 = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_entity);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return original_page_name__$2;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),original_page_name__$3], null),(cljs.core.truth_(with_id_QMARK_)?(cljs.core.truth_(page_entity)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.db.new_block_id()], null)):null),((namespace_QMARK_)?(function (){var namespace = cljs.core.first(logseq.graph_parser.util.split_last("/",original_page_name__$3));
if(clojure.string.blank_QMARK_(namespace)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(namespace)], null)], null);
}
})():null),(cljs.core.truth_((function (){var and__4251__auto__ = with_timestamp_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(page_entity);
} else {
return and__4251__auto__;
}
})())?(function (){var current_ms = frontend.util.time_ms();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),current_ms,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),current_ms], null);
})():null),(cljs.core.truth_(journal_day)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","journal?","block/journal?",-970683127),true,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),journal_day], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","journal?","block/journal?",-970683127),false], null))], 0));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_(original_page_name);
if(and__4251__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(original_page_name);
} else {
return and__4251__auto__;
}
})())){
return original_page_name;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_(original_page_name);
if(and__4251__auto__){
return with_id_QMARK_;
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original_page_name,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.db.new_block_id());
} else {
return null;

}
}
}
}));

(frontend.format.block.page_name__GT_map.cljs$lang$maxFixedArity = 3);

frontend.format.block.with_page_refs = (function frontend$format$block$with_page_refs(p__94193,with_id_QMARK_){
var map__94194 = p__94193;
var map__94194__$1 = cljs.core.__destructure_map(map__94194);
var block = map__94194__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94194__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94194__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94194__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94194__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94194__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94194__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var refs__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(tags,refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker,priority], null)], 0))));
var refs__$2 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(refs__$1);
clojure.walk.prewalk((function (form){
if(((cljs.core.vector_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),"Custom")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),"query")))))){
return null;
} else {
var temp__5720__auto___94299 = frontend.format.block.get_page_reference(form);
if(cljs.core.truth_(temp__5720__auto___94299)){
var page_94300 = temp__5720__auto___94299;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(refs__$2,cljs.core.conj,page_94300);
} else {
}

var temp__5720__auto___94301 = frontend.format.block.get_tag(form);
if(cljs.core.truth_(temp__5720__auto___94301)){
var tag_94302 = temp__5720__auto___94301;
var tag_94303__$1 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(tag_94302);
if(cljs.core.truth_(logseq.graph_parser.util.tag_valid_QMARK_(tag_94303__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(refs__$2,cljs.core.conj,tag_94303__$1);
} else {
}
} else {
}

return form;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(title,body));

var refs__$3 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.deref(refs__$2));
var children_pages = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p){
var p__$1 = ((cljs.core.map_QMARK_(p))?new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(p):p);
if(typeof p__$1 === 'string'){
var p__$2 = (function (){var or__4253__auto__ = logseq.graph_parser.text.get_nested_page_name(p__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return p__$1;
}
})();
if(logseq.graph_parser.text.namespace_page_QMARK_(p__$2)){
return frontend.util.split_namespace_pages(p__$2);
} else {
return null;
}
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([refs__$3], 0))));
var refs__$4 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(refs__$3,children_pages)));
var refs__$5 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2(ref,with_id_QMARK_);
}),refs__$4);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"refs","refs",-1560051448),refs__$5);
});
frontend.format.block.with_block_refs = (function frontend$format$block$with_block_refs(p__94199){
var map__94200 = p__94199;
var map__94200__$1 = cljs.core.__destructure_map(map__94200);
var block = map__94200__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94200__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94200__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ref_blocks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.walk.postwalk((function (form){
var temp__5720__auto___94304 = frontend.format.block.get_block_reference(form);
if(cljs.core.truth_(temp__5720__auto___94304)){
var block_94305__$1 = temp__5720__auto___94304;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ref_blocks,cljs.core.conj,block_94305__$1);
} else {
}

return form;
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(title,body));

var ref_blocks__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.util.uuid_string_QMARK_,cljs.core.deref(ref_blocks));
var ref_blocks__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),medley.core.uuid(id)], null);
}),ref_blocks__$1);
var refs = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(block),ref_blocks__$2));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"refs","refs",-1560051448),refs);
});
frontend.format.block.block_keywordize = (function frontend$format$block$block_keywordize(block){
return medley.core.map_keys((function (k){
if(cljs.core.truth_(cljs.core.namespace(k))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("block",k);
}
}),block);
});
frontend.format.block.sanity_blocks_data = (function frontend$format$block$sanity_blocks_data(blocks){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
if(cljs.core.map_QMARK_(block)){
return frontend.format.block.block_keywordize(logseq.graph_parser.util.remove_nils(block));
} else {
return block;
}
}),blocks);
});
frontend.format.block.with_path_refs = (function frontend$format$block$with_path_refs(blocks){
var blocks__$1 = blocks;
var acc = cljs.core.PersistentVector.EMPTY;
var parents = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(blocks__$1)){
return acc;
} else {
var block = cljs.core.first(blocks__$1);
var cur_level = new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block);
var level_diff = (cur_level - cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.last(parents),new cljs.core.Keyword("block","level","block/level",1182509971),(0)));
var vec__94214 = (((level_diff === (0)))?(function (){var path_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parents)], 0));
var parents__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(parents)),block);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_refs,parents__$1], null);
})():(((level_diff > (0)))?(function (){var path_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_refs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,block)], null);
})():(((level_diff < (0)))?(function (){var parents__$1 = cljs.core.vec(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,acc,parents,block,cur_level,level_diff){
return (function (p){
return (new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(p) < cur_level);
});})(blocks__$1,acc,parents,block,cur_level,level_diff))
,parents));
var path_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents__$1], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_refs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents__$1,block)], null);
})():null)));
var path_refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94214,(0),null);
var parents__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94214,(1),null);
var path_ref_pages = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,acc,parents,block,cur_level,level_diff,vec__94214,path_refs,parents__$1){
return (function (ref){
if(typeof ref === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(ref)], null);
} else {
return ref;
}
});})(blocks__$1,acc,parents,block,cur_level,level_diff,vec__94214,path_refs,parents__$1))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,acc,parents,block,cur_level,level_diff,vec__94214,path_refs,parents__$1){
return (function (ref){
if(cljs.core.map_QMARK_(ref)){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref);
} else {
return ref;

}
});})(blocks__$1,acc,parents,block,cur_level,level_diff,vec__94214,path_refs,parents__$1))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block),path_refs)))))));
var G__94306 = cljs.core.rest(blocks__$1);
var G__94307 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),path_ref_pages));
var G__94308 = parents__$1;
blocks__$1 = G__94306;
acc = G__94307;
parents = G__94308;
continue;
}
break;
}
});
frontend.format.block.block_tags__GT_pages = (function frontend$format$block$block_tags__GT_pages(p__94217){
var map__94218 = p__94217;
var map__94218__$1 = cljs.core.__destructure_map(map__94218);
var block = map__94218__$1;
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94218__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
if(cljs.core.seq(tags)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
var tag__$1 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(tag);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(tag__$1)], null);
}),tags));
} else {
return block;
}
});
frontend.format.block.get_block_content = (function frontend$format$block$get_block_content(utf8_content,block,format,meta){
var content = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"end_pos","end_pos",-1418940).cljs$core$IFn$_invoke$arity$1(meta);
if(cljs.core.truth_(temp__5718__auto__)){
var end_pos = temp__5718__auto__;
return logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(utf8_content,new cljs.core.Keyword(null,"start_pos","start_pos",272375959).cljs$core$IFn$_invoke$arity$1(meta),end_pos);
} else {
return logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$2(utf8_content,new cljs.core.Keyword(null,"start_pos","start_pos",272375959).cljs$core$IFn$_invoke$arity$1(meta));
}
})();
var content__$1 = (cljs.core.truth_(content)?(function (){var content__$1 = logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3(content,format,frontend.config.get_block_pattern(format));
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"pre-block?","pre-block?",-1762448460).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"org","org",1495985));
}
})())){
return content__$1;
} else {
return logseq.graph_parser.mldoc.remove_indentation_spaces(content__$1,(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block) + (1)),false);
}
})():null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985))){
return content__$1;
} else {
return frontend.util.property.__GT_new_properties(content__$1);
}
});
frontend.format.block.get_custom_id_or_new_id = (function frontend$format$block$get_custom_id_or_new_id(properties){
var or__4253__auto__ = (function (){var temp__5720__auto__ = (function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"custom-id","custom-id",-615733336)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"custom_id","custom_id",834948303)], null));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var custom_id = temp__5720__auto__;
var custom_id__$1 = (function (){var and__4251__auto__ = typeof custom_id === 'string';
if(and__4251__auto__){
return clojure.string.trim(custom_id);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = custom_id__$1;
if(cljs.core.truth_(and__4251__auto__)){
return logseq.graph_parser.util.uuid_string_QMARK_(custom_id__$1);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.uuid(custom_id__$1);
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.db.new_block_id();
}
});
frontend.format.block.get_page_refs_from_properties = (function frontend$format$block$get_page_refs_from_properties(properties){
var page_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (v){
if(cljs.core.coll_QMARK_(v)){
return v;
} else {
if(logseq.graph_parser.text.page_ref_QMARK_(v)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.text.page_ref_un_brackets_BANG_(v)], null);
} else {
return null;

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(properties)], 0));
var page_refs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,page_refs);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2(page,true);
}),page_refs__$1);
});
frontend.format.block.with_page_block_refs = (function frontend$format$block$with_page_block_refs(block,with_id_QMARK_){
var G__94219 = block;
var G__94219__$1 = (((G__94219 == null))?null:frontend.format.block.with_page_refs(G__94219,with_id_QMARK_));
var G__94219__$2 = (((G__94219__$1 == null))?null:frontend.format.block.with_block_refs(G__94219__$1));
var G__94219__$3 = (((G__94219__$2 == null))?null:frontend.format.block.block_tags__GT_pages(G__94219__$2));
if((G__94219__$3 == null)){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__94219__$3,new cljs.core.Keyword(null,"refs","refs",-1560051448),(function (col){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,col);
}));
}
});
frontend.format.block.with_pre_block_if_exists = (function frontend$format$block$with_pre_block_if_exists(blocks,body,pre_block_properties,encoded_content){
var first_block = cljs.core.first(blocks);
var first_block_start_pos = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(first_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","meta","block/meta",1064819153),new cljs.core.Keyword(null,"start_pos","start_pos",272375959)], null));
var blocks__$1 = (((((first_block_start_pos > (0))) || (cljs.core.empty_QMARK_(blocks))))?cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var content = logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(encoded_content,(0),first_block_start_pos);
var map__94220 = pre_block_properties;
var map__94220__$1 = cljs.core.__destructure_map(map__94220);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94220__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var properties_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94220__$1,new cljs.core.Keyword(null,"properties-order","properties-order",-768725444));
var id = frontend.format.block.get_custom_id_or_new_id(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),properties], null));
var property_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),frontend.format.block.get_page_refs_from_properties(properties));
var block = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"unordered","unordered",-731655096),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"refs","refs",-1560051448),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"pre-block?","pre-block?",-1762448460),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444)],[properties,true,content,property_refs,(1),true,id,body,properties_order]);
var block__$1 = frontend.format.block.with_page_block_refs(block,false);
return frontend.format.block.block_keywordize(block__$1);
})(),cljs.core.select_keys(first_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108)], null))], 0)),blocks):blocks);
return frontend.format.block.with_path_refs(blocks__$1);
});
frontend.format.block.construct_block = (function frontend$format$block$construct_block(block,properties,timestamps,body,encoded_content,format,pos_meta,with_id_QMARK_){
var id = frontend.format.block.get_custom_id_or_new_id(properties);
var ref_pages_in_properties = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.Keyword(null,"page-refs","page-refs",1204379971).cljs$core$IFn$_invoke$arity$1(properties));
var block__$1 = cljs.core.second(block);
var unordered_QMARK_ = new cljs.core.Keyword(null,"unordered","unordered",-731655096).cljs$core$IFn$_invoke$arity$1(block__$1);
var markdown_heading_QMARK_ = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),format);
} else {
return and__4251__auto__;
}
})();
var block__$2 = (cljs.core.truth_(markdown_heading_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"level","level",1290497552),(cljs.core.truth_(unordered_QMARK_)?new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block__$1):(1)),new cljs.core.Keyword(null,"heading-level","heading-level",563433452),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (6);
}
})()], 0)):block__$1);
var block__$3 = (function (){var G__94222 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block__$2,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"refs","refs",-1560051448),ref_pages_in_properties,new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"meta","meta",1499536964),pos_meta], 0));
var G__94222__$1 = ((cljs.core.seq(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94222,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties)):G__94222);
if(cljs.core.seq(new cljs.core.Keyword(null,"properties-order","properties-order",-768725444).cljs$core$IFn$_invoke$arity$1(properties))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94222__$1,new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444).cljs$core$IFn$_invoke$arity$1(properties));
} else {
return G__94222__$1;
}
})();
var block__$4 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)], null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$3,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true):block__$3);
var block__$5 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$4,new cljs.core.Keyword(null,"content","content",15833224),frontend.format.block.get_block_content(encoded_content,block__$4,format,pos_meta));
var block__$6 = ((cljs.core.seq(timestamps))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$5,frontend.format.block.timestamps__GT_scheduled_and_deadline(timestamps)], 0)):block__$5);
var block__$7 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$6,new cljs.core.Keyword(null,"body","body",-2049205669),body);
var block__$8 = frontend.format.block.with_page_block_refs(block__$7,with_id_QMARK_);
var map__94221 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties);
var map__94221__$1 = cljs.core.__destructure_map(map__94221);
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94221__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94221__$1,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336));
var block__$9 = (function (){var G__94223 = block__$8;
var G__94223__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = created_at;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.integer_QMARK_(created_at);
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94223,new cljs.core.Keyword("block","created-at","block/created-at",1440015),created_at):G__94223);
if(cljs.core.truth_((function (){var and__4251__auto__ = updated_at;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.integer_QMARK_(updated_at);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94223__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),updated_at);
} else {
return G__94223__$1;
}
})();
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$9,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], 0));
});
/**
 * Extract headings from mldoc ast.
 *   Args:
 *  `blocks`: mldoc ast.
 *  `content`: markdown or org-mode text.
 *  `with-id?`: If `with-id?` equals to true, all the referenced pages will have new db ids.
 *  `format`: content's format, it could be either :markdown or :org-mode.
 */
frontend.format.block.extract_blocks = (function frontend$format$block$extract_blocks(blocks,content,with_id_QMARK_,format){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(typeof content === 'string'){
} else {
throw (new Error("Assert failed: (string? content)"));
}

if(cljs.core.boolean_QMARK_(with_id_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? with-id?)"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"org","org",1495985),null], null), null),format)){
} else {
throw (new Error("Assert failed: (contains? #{:markdown :org} format)"));
}

try{var encoded_content = logseq.graph_parser.utf8.encode(content);
var vec__94226 = (function (){var headings = cljs.core.PersistentVector.EMPTY;
var blocks__$1 = cljs.core.reverse(blocks);
var timestamps = cljs.core.PersistentArrayMap.EMPTY;
var properties = cljs.core.PersistentArrayMap.EMPTY;
var body = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(blocks__$1)){
var vec__94232 = cljs.core.first(blocks__$1);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94232,(0),null);
var pos_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94232,(1),null);
var pos_meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pos_meta,new cljs.core.Keyword(null,"end_pos","end_pos",-1418940),((cljs.core.seq(headings))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.last(headings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"start_pos","start_pos",272375959)], null)):null));
if(frontend.format.block.paragraph_timestamp_block_QMARK_(block)){
var timestamps__$1 = frontend.format.block.extract_timestamps(block);
var timestamps_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timestamps__$1,timestamps__$1], 0));
var G__94323 = headings;
var G__94324 = cljs.core.rest(blocks__$1);
var G__94325 = timestamps_SINGLEQUOTE_;
var G__94326 = properties;
var G__94327 = body;
headings = G__94323;
blocks__$1 = G__94324;
timestamps = G__94325;
properties = G__94326;
body = G__94327;
continue;
} else {
if(frontend.util.property.properties_ast_QMARK_(block)){
var properties__$1 = frontend.format.block.extract_properties(format,cljs.core.second(block));
var G__94329 = headings;
var G__94330 = cljs.core.rest(blocks__$1);
var G__94331 = timestamps;
var G__94332 = properties__$1;
var G__94333 = body;
headings = G__94329;
blocks__$1 = G__94330;
timestamps = G__94331;
properties = G__94332;
body = G__94333;
continue;
} else {
if(frontend.format.block.heading_block_QMARK_(block)){
var block__$1 = frontend.format.block.construct_block(block,properties,timestamps,body,encoded_content,format,pos_meta__$1,with_id_QMARK_);
var G__94334 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(headings,block__$1);
var G__94335 = cljs.core.rest(blocks__$1);
var G__94336 = cljs.core.PersistentArrayMap.EMPTY;
var G__94337 = cljs.core.PersistentArrayMap.EMPTY;
var G__94338 = cljs.core.PersistentVector.EMPTY;
headings = G__94334;
blocks__$1 = G__94335;
timestamps = G__94336;
properties = G__94337;
body = G__94338;
continue;
} else {
var G__94339 = headings;
var G__94340 = cljs.core.rest(blocks__$1);
var G__94341 = timestamps;
var G__94342 = properties;
var G__94343 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body,block);
headings = G__94339;
blocks__$1 = G__94340;
timestamps = G__94341;
properties = G__94342;
body = G__94343;
continue;

}
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.format.block.sanity_blocks_data(cljs.core.reverse(headings)),body,properties], null);
}
break;
}
})();
var blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94226,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94226,(1),null);
var pre_block_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94226,(2),null);
var result = frontend.format.block.with_pre_block_if_exists(blocks__$1,body,pre_block_properties,encoded_content);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__94224_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__94224_SHARP_,new cljs.core.Keyword("block","meta","block/meta",1064819153));
}),result);
}catch (e94225){if((e94225 instanceof Error)){
var e = e94225;
console.error("extract-blocks-failed");

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.format.block",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),592], null)),e);
} else {
throw e94225;

}
}});
frontend.format.block.with_parent_and_left = (function frontend$format$block$with_parent_and_left(page_id,blocks){
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block));
}),blocks);
var parents = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("page","id","page/id",-1375529051),page_id,new cljs.core.Keyword("block","level","block/level",1182509971),(0),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765),(0)], null)], null);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(blocks__$1)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,parents,result){
return (function (p1__94235_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__94235_SHARP_,new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765));
});})(blocks__$1,parents,result))
,result);
} else {
var vec__94249 = blocks__$1;
var seq__94250 = cljs.core.seq(vec__94249);
var first__94251 = cljs.core.first(seq__94250);
var seq__94250__$1 = cljs.core.next(seq__94250);
var block = first__94251;
var others = seq__94250__$1;
var level_spaces = new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(block);
var map__94252 = cljs.core.last(parents);
var map__94252__$1 = cljs.core.__destructure_map(map__94252);
var last_parent = map__94252__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94252__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94252__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94252__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var parent_spaces = new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(last_parent);
var vec__94253 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_spaces,parent_spaces))?(function (){var block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null),new cljs.core.Keyword("block","level","block/level",1182509971),level], 0));
var parents_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(parents)),block__$1);
var result_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [others,parents_SINGLEQUOTE_,result_SINGLEQUOTE_], null);
})():(((level_spaces > parent_spaces))?(function (){var parent__$1 = (cljs.core.truth_(uuid)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null):new cljs.core.Keyword("page","id","page/id",-1375529051).cljs$core$IFn$_invoke$arity$1(last_parent));
var block__$1 = (function (){var G__94256 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),parent__$1], 0));
if(((level_spaces - parent_spaces) >= (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94256,new cljs.core.Keyword("block","level","block/level",1182509971),(level + (1)));
} else {
return G__94256;
}
})();
var parents_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,block__$1);
var result_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [others,parents_SINGLEQUOTE_,result_SINGLEQUOTE_], null);
})():(((level_spaces < parent_spaces))?(cljs.core.truth_(cljs.core.some(((function (blocks__$1,parents,result,vec__94249,seq__94250,first__94251,seq__94250__$1,block,others,level_spaces,map__94252,map__94252__$1,last_parent,uuid,level,parent,parent_spaces){
return (function (p1__94236_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(p1__94236_SHARP_),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(block));
});})(blocks__$1,parents,result,vec__94249,seq__94250,first__94251,seq__94250__$1,block,others,level_spaces,map__94252,map__94252__$1,last_parent,uuid,level,parent,parent_spaces))
,parents))?(function (){var parents_SINGLEQUOTE_ = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,parents,result,vec__94249,seq__94250,first__94251,seq__94250__$1,block,others,level_spaces,map__94252,map__94252__$1,last_parent,uuid,level,parent,parent_spaces){
return (function (p){
return (new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(p) <= level_spaces);
});})(blocks__$1,parents,result,vec__94249,seq__94250,first__94251,seq__94250__$1,block,others,level_spaces,map__94252,map__94252__$1,last_parent,uuid,level,parent,parent_spaces))
,parents));
var left = cljs.core.last(parents_SINGLEQUOTE_);
var blocks__$2 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(blocks__$1),new cljs.core.Keyword("block","level","block/level",1182509971),(level - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(left)], null)], 0)),cljs.core.rest(blocks__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks__$2,parents_SINGLEQUOTE_,result], null);
})():(function (){var vec__94257 = cljs.core.split_with(((function (blocks__$1,parents,result,vec__94249,seq__94250,first__94251,seq__94250__$1,block,others,level_spaces,map__94252,map__94252__$1,last_parent,uuid,level,parent,parent_spaces){
return (function (p){
return (new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(p) <= level_spaces);
});})(blocks__$1,parents,result,vec__94249,seq__94250,first__94251,seq__94250__$1,block,others,level_spaces,map__94252,map__94252__$1,last_parent,uuid,level,parent,parent_spaces))
,parents);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94257,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94257,(1),null);
var left = cljs.core.first(r);
var parent_id = (function (){var temp__5718__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.last(f));
if(cljs.core.truth_(temp__5718__auto__)){
var block_id = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
} else {
return page_id;
}
})();
var block__$1 = (function (){var G__94260 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(left)], null),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(left)], 0));
return G__94260;
})();
var parents_SINGLEQUOTE_ = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1], null)));
var result_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [others,parents_SINGLEQUOTE_,result_SINGLEQUOTE_], null);
})()
):null)));
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94253,(0),null);
var parents__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94253,(1),null);
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94253,(2),null);
var G__94352 = blocks__$2;
var G__94353 = parents__$1;
var G__94354 = result__$1;
blocks__$1 = G__94352;
parents = G__94353;
result = G__94354;
continue;
}
break;
}
});
frontend.format.block.parse_block = (function frontend$format$block$parse_block(var_args){
var G__94262 = arguments.length;
switch (G__94262) {
case 1:
return frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$1 = (function (block){
return frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$2(block,null);
}));

(frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$2 = (function (p__94263,p__94264){
var map__94265 = p__94263;
var map__94265__$1 = cljs.core.__destructure_map(map__94265);
var block = map__94265__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94265__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94265__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94265__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94265__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var map__94266 = p__94264;
var map__94266__$1 = cljs.core.__destructure_map(map__94266);
var with_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94266__$1,new cljs.core.Keyword(null,"with-id?","with-id?",1405069912),true);
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var block__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var ast = frontend.format.to_edn.cljs$core$IFn$_invoke$arity$3(content,format,null);
var blocks = frontend.format.block.extract_blocks(ast,content,with_id_QMARK_,format);
var new_block = cljs.core.first(blocks);
var parent_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352).cljs$core$IFn$_invoke$arity$1((function (){var G__94268 = frontend.state.get_current_repo();
var G__94269 = uuid;
return (frontend.db.get_block_parent.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_parent.cljs$core$IFn$_invoke$arity$2(G__94268,G__94269) : frontend.db.get_block_parent.call(null,G__94268,G__94269));
})()));
var map__94267 = new_block;
var map__94267__$1 = cljs.core.__destructure_map(map__94267);
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94267__$1,new cljs.core.Keyword("block","refs","block/refs",-1214495349));
var ref_pages = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),refs);
var path_ref_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ref_pages,parent_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], null)], 0)));
var block__$2 = (function (){var G__94270 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1,new_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),path_ref_pages], null)], 0));
if((cljs.core.count(blocks) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94270,new cljs.core.Keyword("block","warning","block/warning",2131709542),new cljs.core.Keyword(null,"multiple-blocks","multiple-blocks",1235340805));
} else {
return G__94270;
}
})();
var block__$3 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$2,new cljs.core.Keyword("block","title","block/title",710445684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","body","block/body",2004112880),new cljs.core.Keyword("block","level","block/level",1182509971)], 0));
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$3,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid);
} else {
return block__$3;
}
}
}));

(frontend.format.block.parse_block.cljs$lang$maxFixedArity = 2);

frontend.format.block.parse_title_and_body = (function frontend$format$block$parse_title_and_body(var_args){
var G__94272 = arguments.length;
switch (G__94272) {
case 1:
return frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1 = (function (block){
if(cljs.core.map_QMARK_(block)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block))], 0));
} else {
return null;
}
}));

(frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4 = (function (block_uuid,format,pre_block_QMARK_,content){
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var content__$1 = (cljs.core.truth_(pre_block_QMARK_)?content:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_block_pattern(format))," ",clojure.string.triml(content)].join(''));
var temp__5718__auto__ = frontend.state.get_block_ast(block_uuid,content__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var result = temp__5718__auto__;
return result;
} else {
var ast = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,frontend.format.to_edn.cljs$core$IFn$_invoke$arity$3(content__$1,format,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)));
var title = ((frontend.format.block.heading_block_QMARK_(cljs.core.first(ast)))?new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(ast))):null);
var body = cljs.core.vec((cljs.core.truth_(title)?cljs.core.rest(ast):ast));
var body__$1 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(frontend.util.property.properties_ast_QMARK_,body);
var result = (function (){var G__94273 = ((cljs.core.seq(body__$1))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","body","block/body",2004112880),body__$1], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94273,new cljs.core.Keyword("block","title","block/title",710445684),title);
} else {
return G__94273;
}
})();
frontend.state.add_block_ast_cache_BANG_(block_uuid,content__$1,result);

return result;
}
}
}));

(frontend.format.block.parse_title_and_body.cljs$lang$maxFixedArity = 4);

frontend.format.block.macro_subs = (function frontend$format$block$macro_subs(macro_content,arguments$){
var s = macro_content;
var args = arguments$;
var n = (1);
while(true){
if(cljs.core.seq(args)){
var G__94361 = clojure.string.replace(s,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),cljs.core.first(args));
var G__94362 = cljs.core.rest(args);
var G__94363 = (n + (1));
s = G__94361;
args = G__94362;
n = G__94363;
continue;
} else {
return s;
}
break;
}
});
frontend.format.block.break_line_paragraph_QMARK_ = (function frontend$format$block$break_line_paragraph_QMARK_(p__94275){
var vec__94276 = p__94275;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94276,(0),null);
var break_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94276,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Paragraph")) && (cljs.core.every_QMARK_((function (p1__94274_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__94274_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Break_Line"], null));
}),break_lines)));
});
frontend.format.block.trim_paragraph_special_break_lines = (function frontend$format$block$trim_paragraph_special_break_lines(ast){
var vec__94281 = ast;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94281,(0),null);
var paras = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94281,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Paragraph")){
var indexed_paras = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,paras);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [typ,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__94280_SHARP_){
return cljs.core.last(p1__94280_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__94279_SHARP_){
var vec__94284 = p1__94279_SHARP_;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94284,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94284,(1),null);
return (!((((index > (0))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Break_Line"], null))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Timestamp",null,"Macro",null], null), null),cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(paras,(index - (1)))))))))));
}),indexed_paras))], null);
} else {
return ast;
}
});
frontend.format.block.trim_break_lines_BANG_ = (function frontend$format$block$trim_break_lines_BANG_(ast){
return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(frontend.format.block.break_line_paragraph_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.format.block.trim_paragraph_special_break_lines,ast));
});

//# sourceMappingURL=frontend.format.block.js.map
