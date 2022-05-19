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
var vec__69877 = x;
var seq__69878 = cljs.core.seq(vec__69877);
var first__69879 = cljs.core.first(seq__69878);
var seq__69878__$1 = cljs.core.next(seq__69878);
var tag = first__69879;
var first__69879__$1 = cljs.core.first(seq__69878__$1);
var seq__69878__$2 = cljs.core.next(seq__69878__$1);
var attrs = first__69879__$1;
var children = seq__69878__$2;
var result = (function (){try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"head","head",-771383919))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e69933){if((e69933 instanceof Error)){
var e__57908__auto__ = e69933;
if((e__57908__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h1","h1",-1896887462))){
return block_transform((1),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69934){if((e69934 instanceof Error)){
var e__57908__auto____$1 = e69934;
if((e__57908__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h2","h2",-372662728))){
return block_transform((2),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69935){if((e69935 instanceof Error)){
var e__57908__auto____$2 = e69935;
if((e__57908__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h3","h3",2067611163))){
return block_transform((3),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69937){if((e69937 instanceof Error)){
var e__57908__auto____$3 = e69937;
if((e__57908__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h4","h4",2004862993))){
return block_transform((4),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69939){if((e69939 instanceof Error)){
var e__57908__auto____$4 = e69939;
if((e__57908__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h5","h5",-1829156625))){
return block_transform((5),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69941){if((e69941 instanceof Error)){
var e__57908__auto____$5 = e69941;
if((e__57908__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h6","h6",557293780))){
return block_transform((6),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69942){if((e69942 instanceof Error)){
var e__57908__auto____$6 = e69942;
if((e__57908__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"a","a",-2123407586))){
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(attrs);
var label = map_join(children);
var has_img_tag_QMARK_ = frontend.util.safe_re_find(/\[:img/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(has_img_tag_QMARK_)){
return frontend.extensions.html_parser.export_hiccup(x);
} else {
var G__69998 = format;
var G__69998__$1 = (((G__69998 instanceof cljs.core.Keyword))?G__69998.fqn:null);
switch (G__69998__$1) {
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
}catch (e69943){if((e69943 instanceof Error)){
var e__57908__auto____$7 = e69943;
if((e__57908__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"img","img",1442687358))){
var src = new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(attrs);
var alt = new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(attrs);
var G__69994 = format;
var G__69994__$1 = (((G__69994 instanceof cljs.core.Keyword))?G__69994.fqn:null);
switch (G__69994__$1) {
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
}catch (e69944){if((e69944 instanceof Error)){
var e__57908__auto____$8 = e69944;
if((e__57908__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"p","p",151049309))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map_join(children)], 0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e69945){if((e69945 instanceof Error)){
var e__57908__auto____$9 = e69945;
if((e__57908__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"hr","hr",1377740067))){
return frontend.config.get_hr(format);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69946){if((e69946 instanceof Error)){
var e__57908__auto____$10 = e69946;
if((e__57908__auto____$10 === cljs.core.match.backtrack)){
try{if((function (p1__69867_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"del","del",574975584),null,new cljs.core.Keyword(null,"mark","mark",-373816345),null,new cljs.core.Keyword(null,"strong","strong",269529000),null,new cljs.core.Keyword(null,"em","em",707813035),null,new cljs.core.Keyword(null,"ins","ins",-1021983570),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"i","i",-1386841315),null], null), null),p1__69867_SHARP_);
})(tag)){
return emphasis_transform(tag,attrs,children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69947){if((e69947 instanceof Error)){
var e__57908__auto____$11 = e69947;
if((e__57908__auto____$11 === cljs.core.match.backtrack)){
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
}catch (e69948){if((e69948 instanceof Error)){
var e__57908__auto____$12 = e69948;
if((e__57908__auto____$12 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"pre","pre",2118456869))){
cljs.core.reset_BANG_(frontend.extensions.html_parser._STAR_inside_pre_QMARK_,true);

var content = clojure.string.trim(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(map_join(children)));
cljs.core.reset_BANG_(frontend.extensions.html_parser._STAR_inside_pre_QMARK_,false);

var G__69986 = format;
var G__69986__$1 = (((G__69986 instanceof cljs.core.Keyword))?G__69986.fqn:null);
switch (G__69986__$1) {
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
}catch (e69949){if((e69949 instanceof Error)){
var e__57908__auto____$13 = e69949;
if((e__57908__auto____$13 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"blockquote","blockquote",372264190))){
var G__69982 = format;
var G__69982__$1 = (((G__69982 instanceof cljs.core.Keyword))?G__69982.fqn:null);
switch (G__69982__$1) {
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
}catch (e69950){if((e69950 instanceof Error)){
var e__57908__auto____$14 = e69950;
if((e__57908__auto____$14 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"li","li",723558921))){
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e69951){if((e69951 instanceof Error)){
var e__57908__auto____$15 = e69951;
if((e__57908__auto____$15 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"dt","dt",-368444759))){
var G__69977 = format;
var G__69977__$1 = (((G__69977 instanceof cljs.core.Keyword))?G__69977.fqn:null);
switch (G__69977__$1) {
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
}catch (e69953){if((e69953 instanceof Error)){
var e__57908__auto____$16 = e69953;
if((e__57908__auto____$16 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"dd","dd",-1340437629))){
var G__69976 = format;
var G__69976__$1 = (((G__69976 instanceof cljs.core.Keyword))?G__69976.fqn:null);
switch (G__69976__$1) {
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
}catch (e69955){if((e69955 instanceof Error)){
var e__57908__auto____$17 = e69955;
if((e__57908__auto____$17 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"thead","thead",-291875296))){
var G__69968 = format;
var G__69968__$1 = (((G__69968 instanceof cljs.core.Keyword))?G__69968.fqn:null);
switch (G__69968__$1) {
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
}catch (e69957){if((e69957 instanceof Error)){
var e__57908__auto____$18 = e69957;
if((e__57908__auto____$18 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"tr","tr",-1424774646))){
return ["| ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(transform_fn,children))," |"].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e69958){if((e69958 instanceof Error)){
var e__57908__auto____$19 = e69958;
if((e__57908__auto____$19 === cljs.core.match.backtrack)){
try{if((function (p1__69868_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),null,new cljs.core.Keyword(null,"figure","figure",-561394079),null,new cljs.core.Keyword(null,"aside","aside",1414397537),null,new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),null,new cljs.core.Keyword(null,"footer","footer",1606445390),null,new cljs.core.Keyword(null,"header","header",119441134),null,new cljs.core.Keyword(null,"center","center",-748944368),null], null), null),p1__69868_SHARP_);
})(tag)){
return frontend.extensions.html_parser.export_hiccup(x);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69960){if((e69960 instanceof Error)){
var e__57908__auto____$20 = e69960;
if((e__57908__auto____$20 === cljs.core.match.backtrack)){
return map_join(children);
} else {
throw e__57908__auto____$20;
}
} else {
throw e69960;

}
}} else {
throw e__57908__auto____$19;
}
} else {
throw e69958;

}
}} else {
throw e__57908__auto____$18;
}
} else {
throw e69957;

}
}} else {
throw e__57908__auto____$17;
}
} else {
throw e69955;

}
}} else {
throw e__57908__auto____$16;
}
} else {
throw e69953;

}
}} else {
throw e__57908__auto____$15;
}
} else {
throw e69951;

}
}} else {
throw e__57908__auto____$14;
}
} else {
throw e69950;

}
}} else {
throw e__57908__auto____$13;
}
} else {
throw e69949;

}
}} else {
throw e__57908__auto____$12;
}
} else {
throw e69948;

}
}} else {
throw e__57908__auto____$11;
}
} else {
throw e69947;

}
}} else {
throw e__57908__auto____$10;
}
} else {
throw e69946;

}
}} else {
throw e__57908__auto____$9;
}
} else {
throw e69945;

}
}} else {
throw e__57908__auto____$8;
}
} else {
throw e69944;

}
}} else {
throw e__57908__auto____$7;
}
} else {
throw e69943;

}
}} else {
throw e__57908__auto____$6;
}
} else {
throw e69942;

}
}} else {
throw e__57908__auto____$5;
}
} else {
throw e69941;

}
}} else {
throw e__57908__auto____$4;
}
} else {
throw e69939;

}
}} else {
throw e__57908__auto____$3;
}
} else {
throw e69937;

}
}} else {
throw e__57908__auto____$2;
}
} else {
throw e69935;

}
}} else {
throw e__57908__auto____$1;
}
} else {
throw e69934;

}
}} else {
throw e__57908__auto__;
}
} else {
throw e69933;

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
var result = ((cljs.core.vector_QMARK_(cljs.core.first(hiccup)))?(function (){var iter__4652__auto__ = (function frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__70000(s__70001){
return (new cljs.core.LazySeq(null,(function (){
var s__70001__$1 = s__70001;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70001__$1);
if(temp__5720__auto__){
var s__70001__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70001__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70001__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70003 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70002 = (0);
while(true){
if((i__70002 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__70002);
cljs.core.chunk_append(b__70003,single_hiccup_transform(x));

var G__70017 = (i__70002 + (1));
i__70002 = G__70017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70003),frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__70000(cljs.core.chunk_rest(s__70001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70003),null);
}
} else {
var x = cljs.core.first(s__70001__$2);
return cljs.core.cons(single_hiccup_transform(x),frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__70000(cljs.core.rest(s__70001__$2)));
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
