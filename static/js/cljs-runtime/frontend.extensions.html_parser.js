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
var vec__57585 = x;
var seq__57586 = cljs.core.seq(vec__57585);
var first__57587 = cljs.core.first(seq__57586);
var seq__57586__$1 = cljs.core.next(seq__57586);
var tag = first__57587;
var first__57587__$1 = cljs.core.first(seq__57586__$1);
var seq__57586__$2 = cljs.core.next(seq__57586__$1);
var attrs = first__57587__$1;
var children = seq__57586__$2;
var result = (function (){try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"head","head",-771383919))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e57591){if((e57591 instanceof Error)){
var e__45417__auto__ = e57591;
if((e__45417__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h1","h1",-1896887462))){
return block_transform((1),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e57592){if((e57592 instanceof Error)){
var e__45417__auto____$1 = e57592;
if((e__45417__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h2","h2",-372662728))){
return block_transform((2),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e57593){if((e57593 instanceof Error)){
var e__45417__auto____$2 = e57593;
if((e__45417__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h3","h3",2067611163))){
return block_transform((3),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e57594){if((e57594 instanceof Error)){
var e__45417__auto____$3 = e57594;
if((e__45417__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h4","h4",2004862993))){
return block_transform((4),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e57595){if((e57595 instanceof Error)){
var e__45417__auto____$4 = e57595;
if((e__45417__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h5","h5",-1829156625))){
return block_transform((5),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e57596){if((e57596 instanceof Error)){
var e__45417__auto____$5 = e57596;
if((e__45417__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h6","h6",557293780))){
return block_transform((6),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e57597){if((e57597 instanceof Error)){
var e__45417__auto____$6 = e57597;
if((e__45417__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"a","a",-2123407586))){
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(attrs);
var label = map_join(children);
var has_img_tag_QMARK_ = frontend.util.safe_re_find(/\[:img/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(has_img_tag_QMARK_)){
return frontend.extensions.html_parser.export_hiccup(x);
} else {
var G__57618 = format;
var G__57618__$1 = (((G__57618 instanceof cljs.core.Keyword))?G__57618.fqn:null);
switch (G__57618__$1) {
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
}catch (e57598){if((e57598 instanceof Error)){
var e__45417__auto____$7 = e57598;
if((e__45417__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"img","img",1442687358))){
var src = new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(attrs);
var alt = new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(attrs);
var G__57617 = format;
var G__57617__$1 = (((G__57617 instanceof cljs.core.Keyword))?G__57617.fqn:null);
switch (G__57617__$1) {
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
}catch (e57599){if((e57599 instanceof Error)){
var e__45417__auto____$8 = e57599;
if((e__45417__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"p","p",151049309))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map_join(children)], 0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e57600){if((e57600 instanceof Error)){
var e__45417__auto____$9 = e57600;
if((e__45417__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"hr","hr",1377740067))){
return frontend.config.get_hr(format);
} else {
throw cljs.core.match.backtrack;

}
}catch (e57601){if((e57601 instanceof Error)){
var e__45417__auto____$10 = e57601;
if((e__45417__auto____$10 === cljs.core.match.backtrack)){
try{if((function (p1__57552_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"del","del",574975584),null,new cljs.core.Keyword(null,"mark","mark",-373816345),null,new cljs.core.Keyword(null,"strong","strong",269529000),null,new cljs.core.Keyword(null,"em","em",707813035),null,new cljs.core.Keyword(null,"ins","ins",-1021983570),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"i","i",-1386841315),null], null), null),p1__57552_SHARP_);
})(tag)){
return emphasis_transform(tag,attrs,children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e57602){if((e57602 instanceof Error)){
var e__45417__auto____$11 = e57602;
if((e__45417__auto____$11 === cljs.core.match.backtrack)){
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
}catch (e57603){if((e57603 instanceof Error)){
var e__45417__auto____$12 = e57603;
if((e__45417__auto____$12 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"pre","pre",2118456869))){
cljs.core.reset_BANG_(frontend.extensions.html_parser._STAR_inside_pre_QMARK_,true);

var content = clojure.string.trim(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(map_join(children)));
cljs.core.reset_BANG_(frontend.extensions.html_parser._STAR_inside_pre_QMARK_,false);

var G__57616 = format;
var G__57616__$1 = (((G__57616 instanceof cljs.core.Keyword))?G__57616.fqn:null);
switch (G__57616__$1) {
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
}catch (e57604){if((e57604 instanceof Error)){
var e__45417__auto____$13 = e57604;
if((e__45417__auto____$13 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"blockquote","blockquote",372264190))){
var G__57615 = format;
var G__57615__$1 = (((G__57615 instanceof cljs.core.Keyword))?G__57615.fqn:null);
switch (G__57615__$1) {
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
}catch (e57605){if((e57605 instanceof Error)){
var e__45417__auto____$14 = e57605;
if((e__45417__auto____$14 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"li","li",723558921))){
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e57606){if((e57606 instanceof Error)){
var e__45417__auto____$15 = e57606;
if((e__45417__auto____$15 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"dt","dt",-368444759))){
var G__57614 = format;
var G__57614__$1 = (((G__57614 instanceof cljs.core.Keyword))?G__57614.fqn:null);
switch (G__57614__$1) {
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
}catch (e57607){if((e57607 instanceof Error)){
var e__45417__auto____$16 = e57607;
if((e__45417__auto____$16 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"dd","dd",-1340437629))){
var G__57613 = format;
var G__57613__$1 = (((G__57613 instanceof cljs.core.Keyword))?G__57613.fqn:null);
switch (G__57613__$1) {
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
}catch (e57608){if((e57608 instanceof Error)){
var e__45417__auto____$17 = e57608;
if((e__45417__auto____$17 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"thead","thead",-291875296))){
var G__57612 = format;
var G__57612__$1 = (((G__57612 instanceof cljs.core.Keyword))?G__57612.fqn:null);
switch (G__57612__$1) {
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
}catch (e57609){if((e57609 instanceof Error)){
var e__45417__auto____$18 = e57609;
if((e__45417__auto____$18 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"tr","tr",-1424774646))){
return ["| ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(transform_fn,children))," |"].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e57610){if((e57610 instanceof Error)){
var e__45417__auto____$19 = e57610;
if((e__45417__auto____$19 === cljs.core.match.backtrack)){
try{if((function (p1__57558_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),null,new cljs.core.Keyword(null,"figure","figure",-561394079),null,new cljs.core.Keyword(null,"aside","aside",1414397537),null,new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),null,new cljs.core.Keyword(null,"footer","footer",1606445390),null,new cljs.core.Keyword(null,"header","header",119441134),null,new cljs.core.Keyword(null,"center","center",-748944368),null], null), null),p1__57558_SHARP_);
})(tag)){
return frontend.extensions.html_parser.export_hiccup(x);
} else {
throw cljs.core.match.backtrack;

}
}catch (e57611){if((e57611 instanceof Error)){
var e__45417__auto____$20 = e57611;
if((e__45417__auto____$20 === cljs.core.match.backtrack)){
return map_join(children);
} else {
throw e__45417__auto____$20;
}
} else {
throw e57611;

}
}} else {
throw e__45417__auto____$19;
}
} else {
throw e57610;

}
}} else {
throw e__45417__auto____$18;
}
} else {
throw e57609;

}
}} else {
throw e__45417__auto____$17;
}
} else {
throw e57608;

}
}} else {
throw e__45417__auto____$16;
}
} else {
throw e57607;

}
}} else {
throw e__45417__auto____$15;
}
} else {
throw e57606;

}
}} else {
throw e__45417__auto____$14;
}
} else {
throw e57605;

}
}} else {
throw e__45417__auto____$13;
}
} else {
throw e57604;

}
}} else {
throw e__45417__auto____$12;
}
} else {
throw e57603;

}
}} else {
throw e__45417__auto____$11;
}
} else {
throw e57602;

}
}} else {
throw e__45417__auto____$10;
}
} else {
throw e57601;

}
}} else {
throw e__45417__auto____$9;
}
} else {
throw e57600;

}
}} else {
throw e__45417__auto____$8;
}
} else {
throw e57599;

}
}} else {
throw e__45417__auto____$7;
}
} else {
throw e57598;

}
}} else {
throw e__45417__auto____$6;
}
} else {
throw e57597;

}
}} else {
throw e__45417__auto____$5;
}
} else {
throw e57596;

}
}} else {
throw e__45417__auto____$4;
}
} else {
throw e57595;

}
}} else {
throw e__45417__auto____$3;
}
} else {
throw e57594;

}
}} else {
throw e__45417__auto____$2;
}
} else {
throw e57593;

}
}} else {
throw e__45417__auto____$1;
}
} else {
throw e57592;

}
}} else {
throw e__45417__auto__;
}
} else {
throw e57591;

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
var result = ((cljs.core.vector_QMARK_(cljs.core.first(hiccup)))?(function (){var iter__5520__auto__ = (function frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__57619(s__57620){
return (new cljs.core.LazySeq(null,(function (){
var s__57620__$1 = s__57620;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57620__$1);
if(temp__5720__auto__){
var s__57620__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57620__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__57620__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__57622 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__57621 = (0);
while(true){
if((i__57621 < size__5519__auto__)){
var x = cljs.core._nth(c__5518__auto__,i__57621);
cljs.core.chunk_append(b__57622,single_hiccup_transform(x));

var G__57637 = (i__57621 + (1));
i__57621 = G__57637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57622),frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__57619(cljs.core.chunk_rest(s__57620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57622),null);
}
} else {
var x = cljs.core.first(s__57620__$2);
return cljs.core.cons(single_hiccup_transform(x),frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__57619(cljs.core.rest(s__57620__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(hiccup);
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
