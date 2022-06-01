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
frontend.extensions.html_parser.allowed_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 71, [new cljs.core.Keyword(null,"thead","thead",-291875296),null,new cljs.core.Keyword(null,"q","q",689001697),null,new cljs.core.Keyword(null,"figure","figure",-561394079),null,new cljs.core.Keyword(null,"aside","aside",1414397537),null,new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),null,new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"caption","caption",-855383902),null,new cljs.core.Keyword(null,"bdi","bdi",-1323025886),null,new cljs.core.Keyword(null,"rp","rp",2006698083),null,new cljs.core.Keyword(null,"hr","hr",1377740067),null,new cljs.core.Keyword(null,"dd","dd",-1340437629),null,new cljs.core.Keyword(null,"tbody","tbody",-80678300),null,new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"ul","ul",-1349521403),null,new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"sup","sup",-2039492346),null,new cljs.core.Keyword(null,"dfn","dfn",241908167),null,new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"mark","mark",-373816345),null,new cljs.core.Keyword(null,"wbr","wbr",228661800),null,new cljs.core.Keyword(null,"strong","strong",269529000),null,new cljs.core.Keyword(null,"rtc","rtc",-229444279),null,new cljs.core.Keyword(null,"td","td",1479933353),null,new cljs.core.Keyword(null,"li","li",723558921),null,new cljs.core.Keyword(null,"dt","dt",-368444759),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"th","th",-545608566),null,new cljs.core.Keyword(null,"time","time",1385887882),null,new cljs.core.Keyword(null,"tr","tr",-1424774646),null,new cljs.core.Keyword(null,"article","article",-21685045),null,new cljs.core.Keyword(null,"em","em",707813035),null,new cljs.core.Keyword(null,"kbd","kbd",316156875),null,new cljs.core.Keyword(null,"abbr","abbr",2088591884),null,new cljs.core.Keyword(null,"footer","footer",1606445390),null,new cljs.core.Keyword(null,"header","header",119441134),null,new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"h5","h5",-1829156625),null,new cljs.core.Keyword(null,"small","small",2133478704),null,new cljs.core.Keyword(null,"rb","rb",1673817808),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"samp","samp",1506141136),null,new cljs.core.Keyword(null,"h4","h4",2004862993),null,new cljs.core.Keyword(null,"ol","ol",932524051),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"h6","h6",557293780),null,new cljs.core.Keyword(null,"col","col",-1959363084),null,new cljs.core.Keyword(null,"rt","rt",623480692),null,new cljs.core.Keyword(null,"colgroup","colgroup",651118645),null,new cljs.core.Keyword(null,"code","code",1586293142),null,new cljs.core.Keyword(null,"bdo","bdo",-2131148202),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"h2","h2",-372662728),null,new cljs.core.Keyword(null,"br","br",934104792),null,new cljs.core.Keyword(null,"hgroup","hgroup",1128850489),null,new cljs.core.Keyword(null,"h1","h1",-1896887462),null,new cljs.core.Keyword(null,"main","main",-2117802661),null,new cljs.core.Keyword(null,"h3","h3",2067611163),null,new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"cite","cite",1909439996),null,new cljs.core.Keyword(null,"p","p",151049309),null,new cljs.core.Keyword(null,"nav","nav",719540477),null,new cljs.core.Keyword(null,"ruby","ruby",2000737661),null,new cljs.core.Keyword(null,"i","i",-1386841315),null,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),null,new cljs.core.Keyword(null,"a","a",-2123407586),null,new cljs.core.Keyword(null,"dl","dl",-2140151713),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"span","span",1394872991),null,new cljs.core.Keyword(null,"data","data",-232669377),null,new cljs.core.Keyword(null,"u","u",-1156634785),null], null), null);
frontend.extensions.html_parser.hiccup__GT_doc_inner = (function frontend$extensions$html_parser$hiccup__GT_doc_inner(format,hiccup,opts){
var transform_fn = (function (hiccup__$1,opts__$1){
return (frontend.extensions.html_parser.hiccup__GT_doc_inner.cljs$core$IFn$_invoke$arity$3 ? frontend.extensions.html_parser.hiccup__GT_doc_inner.cljs$core$IFn$_invoke$arity$3(format,hiccup__$1,opts__$1) : frontend.extensions.html_parser.hiccup__GT_doc_inner.call(null,format,hiccup__$1,opts__$1));
});
var block_pattern = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"#":frontend.config.get_block_pattern(format));
var map_join = (function (children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50709_SHARP_){
return transform_fn(p1__50709_SHARP_,opts);
}),children));
});
var block_transform = (function (level,children){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,block_pattern)))," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50710_SHARP_){
return transform_fn(p1__50710_SHARP_,opts);
}),children)),"\n"].join('');
});
var emphasis_transform = (function (tag,attrs,children){
var style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
var vec__50735 = (cljs.core.truth_(style)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [((clojure.string.includes_QMARK_(style,"font-weight:700")) || (clojure.string.includes_QMARK_(style,"font-weight:600"))),clojure.string.includes_QMARK_(style,"font-style:italic"),clojure.string.includes_QMARK_(style,"text-decoration:underline"),clojure.string.includes_QMARK_(style,"text-decoration:line-through"),clojure.string.includes_QMARK_(style,"background-color:#")], null):null);
var bold_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50735,(0),null);
var italic_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50735,(1),null);
var underline_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50735,(2),null);
var strike_through_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50735,(3),null);
var mark_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50735,(4),null);
var pattern = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strong","strong",269529000),null,new cljs.core.Keyword(null,"b","b",1482224470),null], null), null),tag))?(cljs.core.truth_((function (){var and__5041__auto__ = style;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(style,"font-weight:normal");
} else {
return and__5041__auto__;
}
})())?null:frontend.config.get_bold(format)):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"em","em",707813035),null,new cljs.core.Keyword(null,"i","i",-1386841315),null], null), null),tag))?(cljs.core.truth_((function (){var and__5041__auto__ = style;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(style,"font-style:normal");
} else {
return and__5041__auto__;
}
})())?null:frontend.config.get_italic(format)):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ins","ins",-1021983570),null], null), null),tag))?(cljs.core.truth_((function (){var and__5041__auto__ = style;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(style,"text-decoration:normal");
} else {
return and__5041__auto__;
}
})())?null:frontend.config.get_underline(format)):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"del","del",574975584),null], null), null),tag))?(cljs.core.truth_((function (){var and__5041__auto__ = style;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(style,"text-decoration:normal");
} else {
return and__5041__auto__;
}
})())?null:frontend.config.get_strike_through(format)):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mark","mark",-373816345),null], null), null),tag))?(cljs.core.truth_((function (){var and__5041__auto__ = style;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(style,"background-color:transparent");
} else {
return and__5041__auto__;
}
})())?null:frontend.config.get_highlight(format)):((((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),null], null), null),tag)) && ((!(cljs.core.every_QMARK_(clojure.string.blank_QMARK_,children))))))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(bold_QMARK_)?frontend.config.get_bold(format):null),(cljs.core.truth_(italic_QMARK_)?frontend.config.get_italic(format):null),(cljs.core.truth_(underline_QMARK_)?frontend.config.get_underline(format):null),(cljs.core.truth_(strike_through_QMARK_)?frontend.config.get_strike_through(format):null),(cljs.core.truth_(mark_QMARK_)?frontend.config.get_highlight(format):null)], null)):null
))))));
var children_SINGLEQUOTE_ = map_join(children);
if(clojure.string.blank_QMARK_(children_SINGLEQUOTE_)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof pattern === 'string')?pattern:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,pattern))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(children_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof pattern === 'string')?pattern:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(pattern))))].join('');
}
});
var wrapper = (function (tag,content){
var content__$1 = (((!(cljs.core.contains_QMARK_(frontend.extensions.html_parser.allowed_tags,tag))))?null:((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"head","head",-771383919),null,new cljs.core.Keyword(null,"comment","comment",532206069),null,new cljs.core.Keyword(null,"xml","xml",-1170142052),null], null), null),tag))?null:(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"p","p",151049309));
if(and__5041__auto__){
return new cljs.core.Keyword(null,"in-table?","in-table?",-1975579419).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__5041__auto__;
}
})())?content:((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),null,new cljs.core.Keyword(null,"figure","figure",-561394079),null,new cljs.core.Keyword(null,"aside","aside",1414397537),null,new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),null,new cljs.core.Keyword(null,"hr","hr",1377740067),null,new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"ul","ul",-1349521403),null,new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"footer","footer",1606445390),null,new cljs.core.Keyword(null,"header","header",119441134),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"ol","ol",932524051),null,new cljs.core.Keyword(null,"p","p",151049309),null,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),null,new cljs.core.Keyword(null,"dl","dl",-2140151713),null], null), null),tag))?["\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"\n\n"].join(''):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"thead","thead",-291875296),null,new cljs.core.Keyword(null,"li","li",723558921),null,new cljs.core.Keyword(null,"tr","tr",-1424774646),null], null), null),tag))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"\n"].join(''):content
)))));
var G__50743 = content__$1;
var G__50743__$1 = (((G__50743 == null))?null:clojure.string.replace(G__50743,"<!--StartFragment-->",""));
if((G__50743__$1 == null)){
return null;
} else {
return clojure.string.replace(G__50743__$1,"<!--EndFragment-->","");
}
});
var single_hiccup_transform = (function (x){
if(cljs.core.vector_QMARK_(x)){
var vec__50747 = x;
var seq__50748 = cljs.core.seq(vec__50747);
var first__50749 = cljs.core.first(seq__50748);
var seq__50748__$1 = cljs.core.next(seq__50748);
var tag = first__50749;
var first__50749__$1 = cljs.core.first(seq__50748__$1);
var seq__50748__$2 = cljs.core.next(seq__50748__$1);
var attrs = first__50749__$1;
var children = seq__50748__$2;
var result = (function (){try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"head","head",-771383919))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e50885){if((e50885 instanceof Error)){
var e__45401__auto__ = e50885;
if((e__45401__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h1","h1",-1896887462))){
return block_transform((1),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50887){if((e50887 instanceof Error)){
var e__45401__auto____$1 = e50887;
if((e__45401__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h2","h2",-372662728))){
return block_transform((2),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50888){if((e50888 instanceof Error)){
var e__45401__auto____$2 = e50888;
if((e__45401__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h3","h3",2067611163))){
return block_transform((3),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50889){if((e50889 instanceof Error)){
var e__45401__auto____$3 = e50889;
if((e__45401__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h4","h4",2004862993))){
return block_transform((4),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50890){if((e50890 instanceof Error)){
var e__45401__auto____$4 = e50890;
if((e__45401__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h5","h5",-1829156625))){
return block_transform((5),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50891){if((e50891 instanceof Error)){
var e__45401__auto____$5 = e50891;
if((e__45401__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h6","h6",557293780))){
return block_transform((6),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50892){if((e50892 instanceof Error)){
var e__45401__auto____$6 = e50892;
if((e__45401__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"a","a",-2123407586))){
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(attrs);
var label = (function (){var or__5043__auto__ = map_join(children);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var has_img_tag_QMARK_ = frontend.util.safe_re_find(/\[:img/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(has_img_tag_QMARK_)){
return frontend.extensions.html_parser.export_hiccup(x);
} else {
var G__50983 = format;
var G__50983__$1 = (((G__50983 instanceof cljs.core.Keyword))?G__50983.fqn:null);
switch (G__50983__$1) {
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
}catch (e50893){if((e50893 instanceof Error)){
var e__45401__auto____$7 = e50893;
if((e__45401__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"img","img",1442687358))){
var src = new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(attrs);
var alt = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var G__50981 = format;
var G__50981__$1 = (((G__50981 instanceof cljs.core.Keyword))?G__50981.fqn:null);
switch (G__50981__$1) {
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
}catch (e50894){if((e50894 instanceof Error)){
var e__45401__auto____$8 = e50894;
if((e__45401__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"p","p",151049309))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map_join(children)], 0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50895){if((e50895 instanceof Error)){
var e__45401__auto____$9 = e50895;
if((e__45401__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"hr","hr",1377740067))){
return frontend.config.get_hr(format);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50896){if((e50896 instanceof Error)){
var e__45401__auto____$10 = e50896;
if((e__45401__auto____$10 === cljs.core.match.backtrack)){
try{if((function (p1__50726_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"del","del",574975584),null,new cljs.core.Keyword(null,"mark","mark",-373816345),null,new cljs.core.Keyword(null,"strong","strong",269529000),null,new cljs.core.Keyword(null,"em","em",707813035),null,new cljs.core.Keyword(null,"ins","ins",-1021983570),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"i","i",-1386841315),null,new cljs.core.Keyword(null,"span","span",1394872991),null], null), null),p1__50726_SHARP_);
})(tag)){
return emphasis_transform(tag,attrs,children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50900){if((e50900 instanceof Error)){
var e__45401__auto____$11 = e50900;
if((e__45401__auto____$11 === cljs.core.match.backtrack)){
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
}catch (e50901){if((e50901 instanceof Error)){
var e__45401__auto____$12 = e50901;
if((e__45401__auto____$12 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"pre","pre",2118456869))){
cljs.core.reset_BANG_(frontend.extensions.html_parser._STAR_inside_pre_QMARK_,true);

var content = clojure.string.trim(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(map_join(children)));
cljs.core.reset_BANG_(frontend.extensions.html_parser._STAR_inside_pre_QMARK_,false);

var G__50969 = format;
var G__50969__$1 = (((G__50969 instanceof cljs.core.Keyword))?G__50969.fqn:null);
switch (G__50969__$1) {
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
}catch (e50902){if((e50902 instanceof Error)){
var e__45401__auto____$13 = e50902;
if((e__45401__auto____$13 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"blockquote","blockquote",372264190))){
var G__50968 = format;
var G__50968__$1 = (((G__50968 instanceof cljs.core.Keyword))?G__50968.fqn:null);
switch (G__50968__$1) {
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
}catch (e50905){if((e50905 instanceof Error)){
var e__45401__auto____$14 = e50905;
if((e__45401__auto____$14 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"li","li",723558921))){
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e50907){if((e50907 instanceof Error)){
var e__45401__auto____$15 = e50907;
if((e__45401__auto____$15 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"dt","dt",-368444759))){
var G__50963 = format;
var G__50963__$1 = (((G__50963 instanceof cljs.core.Keyword))?G__50963.fqn:null);
switch (G__50963__$1) {
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
}catch (e50912){if((e50912 instanceof Error)){
var e__45401__auto____$16 = e50912;
if((e__45401__auto____$16 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"dd","dd",-1340437629))){
var G__50944 = format;
var G__50944__$1 = (((G__50944 instanceof cljs.core.Keyword))?G__50944.fqn:null);
switch (G__50944__$1) {
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
}catch (e50915){if((e50915 instanceof Error)){
var e__45401__auto____$17 = e50915;
if((e__45401__auto____$17 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"thead","thead",-291875296))){
var G__50931 = format;
var G__50931__$1 = (((G__50931 instanceof cljs.core.Keyword))?G__50931.fqn:null);
switch (G__50931__$1) {
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
}catch (e50927){if((e50927 instanceof Error)){
var e__45401__auto____$18 = e50927;
if((e__45401__auto____$18 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"tr","tr",-1424774646))){
return ["| ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50727_SHARP_){
return transform_fn(p1__50727_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"in-table?","in-table?",-1975579419),true));
}),children))," |"].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e50929){if((e50929 instanceof Error)){
var e__45401__auto____$19 = e50929;
if((e__45401__auto____$19 === cljs.core.match.backtrack)){
try{if((function (p1__50728_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),null,new cljs.core.Keyword(null,"figure","figure",-561394079),null,new cljs.core.Keyword(null,"aside","aside",1414397537),null,new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),null,new cljs.core.Keyword(null,"footer","footer",1606445390),null,new cljs.core.Keyword(null,"header","header",119441134),null,new cljs.core.Keyword(null,"center","center",-748944368),null], null), null),p1__50728_SHARP_);
})(tag)){
return frontend.extensions.html_parser.export_hiccup(x);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50930){if((e50930 instanceof Error)){
var e__45401__auto____$20 = e50930;
if((e__45401__auto____$20 === cljs.core.match.backtrack)){
return map_join(children);
} else {
throw e__45401__auto____$20;
}
} else {
throw e50930;

}
}} else {
throw e__45401__auto____$19;
}
} else {
throw e50929;

}
}} else {
throw e__45401__auto____$18;
}
} else {
throw e50927;

}
}} else {
throw e__45401__auto____$17;
}
} else {
throw e50915;

}
}} else {
throw e__45401__auto____$16;
}
} else {
throw e50912;

}
}} else {
throw e__45401__auto____$15;
}
} else {
throw e50907;

}
}} else {
throw e__45401__auto____$14;
}
} else {
throw e50905;

}
}} else {
throw e__45401__auto____$13;
}
} else {
throw e50902;

}
}} else {
throw e__45401__auto____$12;
}
} else {
throw e50901;

}
}} else {
throw e__45401__auto____$11;
}
} else {
throw e50900;

}
}} else {
throw e__45401__auto____$10;
}
} else {
throw e50896;

}
}} else {
throw e__45401__auto____$9;
}
} else {
throw e50895;

}
}} else {
throw e__45401__auto____$8;
}
} else {
throw e50894;

}
}} else {
throw e__45401__auto____$7;
}
} else {
throw e50893;

}
}} else {
throw e__45401__auto____$6;
}
} else {
throw e50892;

}
}} else {
throw e__45401__auto____$5;
}
} else {
throw e50891;

}
}} else {
throw e__45401__auto____$4;
}
} else {
throw e50890;

}
}} else {
throw e__45401__auto____$3;
}
} else {
throw e50889;

}
}} else {
throw e__45401__auto____$2;
}
} else {
throw e50888;

}
}} else {
throw e__45401__auto____$1;
}
} else {
throw e50887;

}
}} else {
throw e__45401__auto__;
}
} else {
throw e50885;

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
var result = ((cljs.core.vector_QMARK_(cljs.core.first(hiccup)))?(function (){var iter__5520__auto__ = (function frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__50990(s__50991){
return (new cljs.core.LazySeq(null,(function (){
var s__50991__$1 = s__50991;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__50991__$1);
if(temp__5720__auto__){
var s__50991__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50991__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__50991__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__50993 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__50992 = (0);
while(true){
if((i__50992 < size__5519__auto__)){
var x = cljs.core._nth(c__5518__auto__,i__50992);
cljs.core.chunk_append(b__50993,single_hiccup_transform(x));

var G__51005 = (i__50992 + (1));
i__50992 = G__51005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50993),frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__50990(cljs.core.chunk_rest(s__50991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50993),null);
}
} else {
var x = cljs.core.first(s__50991__$2);
return cljs.core.cons(single_hiccup_transform(x),frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__50990(cljs.core.rest(s__50991__$2)));
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
var s = frontend.extensions.html_parser.hiccup__GT_doc_inner(format,hiccup,cljs.core.PersistentArrayMap.EMPTY);
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
frontend.extensions.html_parser.convert = (function frontend$extensions$html_parser$convert(format,html){
if(clojure.string.blank_QMARK_(html)){
return null;
} else {
var hiccup = hickory.core.as_hiccup(hickory.core.parse(html));
var decoded_hiccup = frontend.extensions.html_parser.html_decode_hiccup(hiccup);
return frontend.extensions.html_parser.hiccup__GT_doc(format,decoded_hiccup);
}
});

//# sourceMappingURL=frontend.extensions.html_parser.js.map
