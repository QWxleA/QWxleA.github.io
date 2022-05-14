goog.provide('frontend.extensions.html_parser');
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.html_parser !== 'undefined') && (typeof frontend.extensions.html_parser._STAR_inside_pre_QMARK_ !== 'undefined')){
} else {
frontend.extensions.html_parser._STAR_inside_pre_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.extensions.html_parser.hiccup_without_style = (function frontend$extensions$html_parser$hiccup_without_style(hiccup){
return clojure.walk.postwalk((function (f){
if(cljs.core.map_QMARK_(f)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"style","style",-496642736));
} else {
return f;
}
}),hiccup);
});
frontend.extensions.html_parser.export_hiccup = (function frontend$extensions$html_parser$export_hiccup(hiccup){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("#+BEGIN_EXPORT hiccup\n%s\n#+END_EXPORT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.html_parser.hiccup_without_style(hiccup))], 0));
});
frontend.extensions.html_parser.hiccup__GT_doc_inner = (function frontend$extensions$html_parser$hiccup__GT_doc_inner(format,hiccup){
var transform_fn = (function (hiccup__$1){
return (frontend.extensions.html_parser.hiccup__GT_doc_inner.cljs$core$IFn$_invoke$arity$2 ? frontend.extensions.html_parser.hiccup__GT_doc_inner.cljs$core$IFn$_invoke$arity$2(format,hiccup__$1) : frontend.extensions.html_parser.hiccup__GT_doc_inner.call(null,format,hiccup__$1));
});
var block_pattern = frontend.config.get_block_pattern(format);
var map_join = (function (children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(transform_fn,children));
});
var block_transform = (function (level,children){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,block_pattern)))," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(transform_fn,children)),"\n"].join('');
});
var emphasis_transform = (function (tag,_attrs,children){
var pattern = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strong","strong",269529000),null,new cljs.core.Keyword(null,"b","b",1482224470),null], null), null),tag))?frontend.config.get_bold(format):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"em","em",707813035),null,new cljs.core.Keyword(null,"i","i",-1386841315),null], null), null),tag))?frontend.config.get_italic(format):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ins","ins",-1021983570),null], null), null),tag))?frontend.config.get_underline(format):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"del","del",574975584),null], null), null),tag))?frontend.config.get_strike_through(format):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mark","mark",-373816345),null], null), null),tag))?frontend.config.get_highlight(format):null
)))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)].join('');
});
var wrapper = (function (tag,content){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),null,new cljs.core.Keyword(null,"figure","figure",-561394079),null,new cljs.core.Keyword(null,"aside","aside",1414397537),null,new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),null,new cljs.core.Keyword(null,"hr","hr",1377740067),null,new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"ul","ul",-1349521403),null,new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"footer","footer",1606445390),null,new cljs.core.Keyword(null,"header","header",119441134),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"ol","ol",932524051),null,new cljs.core.Keyword(null,"p","p",151049309),null,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),null,new cljs.core.Keyword(null,"dl","dl",-2140151713),null], null), null),tag)){
return ["\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"\n\n"].join('');
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"thead","thead",-291875296),null,new cljs.core.Keyword(null,"li","li",723558921),null,new cljs.core.Keyword(null,"tr","tr",-1424774646),null], null), null),tag)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"\n"].join('');
} else {
return content;

}
}
});
var single_hiccup_transform = (function (x){
if(cljs.core.vector_QMARK_(x)){
var vec__96263 = x;
var seq__96264 = cljs.core.seq(vec__96263);
var first__96265 = cljs.core.first(seq__96264);
var seq__96264__$1 = cljs.core.next(seq__96264);
var tag = first__96265;
var first__96265__$1 = cljs.core.first(seq__96264__$1);
var seq__96264__$2 = cljs.core.next(seq__96264__$1);
var attrs = first__96265__$1;
var children = seq__96264__$2;
var result = (function (){try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"head","head",-771383919))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e96272){if((e96272 instanceof Error)){
var e__57917__auto__ = e96272;
if((e__57917__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h1","h1",-1896887462))){
return block_transform((1),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e96273){if((e96273 instanceof Error)){
var e__57917__auto____$1 = e96273;
if((e__57917__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h2","h2",-372662728))){
return block_transform((2),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e96274){if((e96274 instanceof Error)){
var e__57917__auto____$2 = e96274;
if((e__57917__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h3","h3",2067611163))){
return block_transform((3),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e96275){if((e96275 instanceof Error)){
var e__57917__auto____$3 = e96275;
if((e__57917__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h4","h4",2004862993))){
return block_transform((4),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e96276){if((e96276 instanceof Error)){
var e__57917__auto____$4 = e96276;
if((e__57917__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h5","h5",-1829156625))){
return block_transform((5),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e96277){if((e96277 instanceof Error)){
var e__57917__auto____$5 = e96277;
if((e__57917__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h6","h6",557293780))){
return block_transform((6),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e96278){if((e96278 instanceof Error)){
var e__57917__auto____$6 = e96278;
if((e__57917__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"a","a",-2123407586))){
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(attrs);
var label = map_join(children);
var has_img_tag_QMARK_ = logseq.graph_parser.util.safe_re_find(/\[:img/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(has_img_tag_QMARK_)){
return frontend.extensions.html_parser.export_hiccup(x);
} else {
var G__96316 = format;
var G__96316__$1 = (((G__96316 instanceof cljs.core.Keyword))?G__96316.fqn:null);
switch (G__96316__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,href], 0));

break;
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([href,label], 0));

break;
default:
return null;

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96279){if((e96279 instanceof Error)){
var e__57917__auto____$7 = e96279;
if((e__57917__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"img","img",1442687358))){
var src = new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(attrs);
var alt = new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(attrs);
var G__96314 = format;
var G__96314__$1 = (((G__96314 instanceof cljs.core.Keyword))?G__96314.fqn:null);
switch (G__96314__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("![%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alt,src], 0));

break;
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src,alt], 0));

break;
default:
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96280){if((e96280 instanceof Error)){
var e__57917__auto____$8 = e96280;
if((e__57917__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"p","p",151049309))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map_join(children)], 0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e96281){if((e96281 instanceof Error)){
var e__57917__auto____$9 = e96281;
if((e__57917__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"hr","hr",1377740067))){
return frontend.config.get_hr(format);
} else {
throw cljs.core.match.backtrack;

}
}catch (e96282){if((e96282 instanceof Error)){
var e__57917__auto____$10 = e96282;
if((e__57917__auto____$10 === cljs.core.match.backtrack)){
try{if((function (p1__96252_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"del","del",574975584),null,new cljs.core.Keyword(null,"mark","mark",-373816345),null,new cljs.core.Keyword(null,"strong","strong",269529000),null,new cljs.core.Keyword(null,"em","em",707813035),null,new cljs.core.Keyword(null,"ins","ins",-1021983570),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"i","i",-1386841315),null], null), null),p1__96252_SHARP_);
})(tag)){
return emphasis_transform(tag,attrs,children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e96283){if((e96283 instanceof Error)){
var e__57917__auto____$11 = e96283;
if((e__57917__auto____$11 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"code","code",1586293142))){
if(cljs.core.truth_(cljs.core.deref(frontend.extensions.html_parser._STAR_inside_pre_QMARK_))){
return map_join(children);
} else {
var pattern = frontend.config.get_code(format);
return [" ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)].join('')," "].join('');
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96284){if((e96284 instanceof Error)){
var e__57917__auto____$12 = e96284;
if((e__57917__auto____$12 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"pre","pre",2118456869))){
cljs.core.reset_BANG_(frontend.extensions.html_parser._STAR_inside_pre_QMARK_,true);

var content = clojure.string.trim(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(map_join(children)));
cljs.core.reset_BANG_(frontend.extensions.html_parser._STAR_inside_pre_QMARK_,false);

var G__96307 = format;
var G__96307__$1 = (((G__96307 instanceof cljs.core.Keyword))?G__96307.fqn:null);
switch (G__96307__$1) {
case "markdown":
if(frontend.util.starts_with_QMARK_(content,"```")){
return content;
} else {
return ["```\n",content,"\n```"].join('');
}

break;
case "org":
if(frontend.util.starts_with_QMARK_(content,"#+BEGIN_SRC")){
return content;
} else {
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("#+BEGIN_SRC\n%s\n#+END_SRC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0));
}

break;
default:
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96285){if((e96285 instanceof Error)){
var e__57917__auto____$13 = e96285;
if((e__57917__auto____$13 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"blockquote","blockquote",372264190))){
var G__96306 = format;
var G__96306__$1 = (((G__96306 instanceof cljs.core.Keyword))?G__96306.fqn:null);
switch (G__96306__$1) {
case "markdown":
return ["> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children))].join('');

break;
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("#+BEGIN_QUOTE\n%s\n#+END_QUOTE",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map_join(children)], 0));

break;
default:
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96286){if((e96286 instanceof Error)){
var e__57917__auto____$14 = e96286;
if((e__57917__auto____$14 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"li","li",723558921))){
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e96287){if((e96287 instanceof Error)){
var e__57917__auto____$15 = e96287;
if((e__57917__auto____$15 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"dt","dt",-368444759))){
var G__96305 = format;
var G__96305__$1 = (((G__96305 instanceof cljs.core.Keyword))?G__96305.fqn:null);
switch (G__96305__$1) {
case "org":
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children))," "].join('');

break;
case "markdown":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),"\n"].join('');

break;
default:
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96288){if((e96288 instanceof Error)){
var e__57917__auto____$16 = e96288;
if((e__57917__auto____$16 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"dd","dd",-1340437629))){
var G__96303 = format;
var G__96303__$1 = (((G__96303 instanceof cljs.core.Keyword))?G__96303.fqn:null);
switch (G__96303__$1) {
case "markdown":
return [": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),"\n"].join('');

break;
case "org":
return [":: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),"\n"].join('');

break;
default:
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96294){if((e96294 instanceof Error)){
var e__57917__auto____$17 = e96294;
if((e__57917__auto____$17 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"thead","thead",-291875296))){
var G__96300 = format;
var G__96300__$1 = (((G__96300 instanceof cljs.core.Keyword))?G__96300.fqn:null);
switch (G__96300__$1) {
case "markdown":
var columns = cljs.core.count(cljs.core.last(cljs.core.first(children)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),["| ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(columns,"----"))," |"].join('')].join('');

break;
case "org":
var columns = cljs.core.count(cljs.core.last(cljs.core.first(children)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),["|",clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(columns,"----")),"|"].join('')].join('');

break;
default:
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e96295){if((e96295 instanceof Error)){
var e__57917__auto____$18 = e96295;
if((e__57917__auto____$18 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"tr","tr",-1424774646))){
return ["| ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(transform_fn,children))," |"].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e96296){if((e96296 instanceof Error)){
var e__57917__auto____$19 = e96296;
if((e__57917__auto____$19 === cljs.core.match.backtrack)){
try{if((function (p1__96255_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),null,new cljs.core.Keyword(null,"figure","figure",-561394079),null,new cljs.core.Keyword(null,"aside","aside",1414397537),null,new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),null,new cljs.core.Keyword(null,"footer","footer",1606445390),null,new cljs.core.Keyword(null,"header","header",119441134),null,new cljs.core.Keyword(null,"center","center",-748944368),null], null), null),p1__96255_SHARP_);
})(tag)){
return frontend.extensions.html_parser.export_hiccup(x);
} else {
throw cljs.core.match.backtrack;

}
}catch (e96297){if((e96297 instanceof Error)){
var e__57917__auto____$20 = e96297;
if((e__57917__auto____$20 === cljs.core.match.backtrack)){
return map_join(children);
} else {
throw e__57917__auto____$20;
}
} else {
throw e96297;

}
}} else {
throw e__57917__auto____$19;
}
} else {
throw e96296;

}
}} else {
throw e__57917__auto____$18;
}
} else {
throw e96295;

}
}} else {
throw e__57917__auto____$17;
}
} else {
throw e96294;

}
}} else {
throw e__57917__auto____$16;
}
} else {
throw e96288;

}
}} else {
throw e__57917__auto____$15;
}
} else {
throw e96287;

}
}} else {
throw e__57917__auto____$14;
}
} else {
throw e96286;

}
}} else {
throw e__57917__auto____$13;
}
} else {
throw e96285;

}
}} else {
throw e__57917__auto____$12;
}
} else {
throw e96284;

}
}} else {
throw e__57917__auto____$11;
}
} else {
throw e96283;

}
}} else {
throw e__57917__auto____$10;
}
} else {
throw e96282;

}
}} else {
throw e__57917__auto____$9;
}
} else {
throw e96281;

}
}} else {
throw e__57917__auto____$8;
}
} else {
throw e96280;

}
}} else {
throw e__57917__auto____$7;
}
} else {
throw e96279;

}
}} else {
throw e__57917__auto____$6;
}
} else {
throw e96278;

}
}} else {
throw e__57917__auto____$5;
}
} else {
throw e96277;

}
}} else {
throw e__57917__auto____$4;
}
} else {
throw e96276;

}
}} else {
throw e__57917__auto____$3;
}
} else {
throw e96275;

}
}} else {
throw e__57917__auto____$2;
}
} else {
throw e96274;

}
}} else {
throw e__57917__auto____$1;
}
} else {
throw e96273;

}
}} else {
throw e__57917__auto__;
}
} else {
throw e96272;

}
}})();
return wrapper(tag,result);
} else {
if(typeof x === 'string'){
return x;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hiccup->doc error: ",x], 0));

}
}
});
var result = ((cljs.core.vector_QMARK_(cljs.core.first(hiccup)))?(function (){var iter__4652__auto__ = (function frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__96323(s__96324){
return (new cljs.core.LazySeq(null,(function (){
var s__96324__$1 = s__96324;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__96324__$1);
if(temp__5720__auto__){
var s__96324__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__96324__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__96324__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__96326 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__96325 = (0);
while(true){
if((i__96325 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__96325);
cljs.core.chunk_append(b__96326,single_hiccup_transform(x));

var G__96363 = (i__96325 + (1));
i__96325 = G__96363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__96326),frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__96323(cljs.core.chunk_rest(s__96324__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__96326),null);
}
} else {
var x = cljs.core.first(s__96324__$2);
return cljs.core.cons(single_hiccup_transform(x),frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__96323(cljs.core.rest(s__96324__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(hiccup);
})():single_hiccup_transform(hiccup));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,result);
});
frontend.extensions.html_parser.hiccup__GT_doc = (function frontend$extensions$html_parser$hiccup__GT_doc(format,hiccup){
var s = frontend.extensions.html_parser.hiccup__GT_doc_inner(format,hiccup);
if(clojure.string.blank_QMARK_(s)){
return "";
} else {
return clojure.string.replace(clojure.string.replace(clojure.string.trim(s),"\n\n\n\n","\n\n"),"\n\n\n","\n\n");
}
});
frontend.extensions.html_parser.html_decode_hiccup = (function frontend$extensions$html_parser$html_decode_hiccup(hiccup){
return clojure.walk.postwalk((function (f){
if(typeof f === 'string'){
return goog.string.unescapeEntities(f);
} else {
return f;
}
}),hiccup);
});
frontend.extensions.html_parser.parse = (function frontend$extensions$html_parser$parse(format,html){
if(clojure.string.blank_QMARK_(html)){
return null;
} else {
var hiccup = hickory.core.as_hiccup(hickory.core.parse(html));
var decoded_hiccup = frontend.extensions.html_parser.html_decode_hiccup(hiccup);
return frontend.extensions.html_parser.hiccup__GT_doc(format,decoded_hiccup);
}
});

//# sourceMappingURL=frontend.extensions.html_parser.js.map
