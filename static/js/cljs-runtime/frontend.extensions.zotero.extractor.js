goog.provide('frontend.extensions.zotero.extractor');
frontend.extensions.zotero.extractor.item_type = (function frontend$extensions$zotero$extractor$item_type(item){
return new cljs.core.Keyword(null,"item-type","item-type",-73995695).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item));
});
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.zotero !== 'undefined') && (typeof frontend.extensions.zotero.extractor !== 'undefined') && (typeof frontend.extensions.zotero.extractor.extract !== 'undefined')){
} else {
frontend.extensions.zotero.extractor.extract = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67278 = cljs.core.get_global_hierarchy;
return (fexpr__67278.cljs$core$IFn$_invoke$arity$0 ? fexpr__67278.cljs$core$IFn$_invoke$arity$0() : fexpr__67278.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.extensions.zotero.extractor","extract"),frontend.extensions.zotero.extractor.item_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
frontend.extensions.zotero.extractor.citation_key = (function frontend$extensions$zotero$extractor$citation_key(item){
var extra = new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item));
var citation = cljs.core.first(cljs.core.filterv((function (s){
return clojure.string.includes_QMARK_(s,"Citation Key: ");
}),clojure.string.split_lines(extra)));
if(cljs.core.truth_(citation)){
return clojure.string.trim(clojure.string.replace(citation,"Citation Key: ",""));
} else {
return null;
}
});
frontend.extensions.zotero.extractor.title = (function frontend$extensions$zotero$extractor$title(item){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item));
});
frontend.extensions.zotero.extractor.item_key = (function frontend$extensions$zotero$extractor$item_key(item){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
});
frontend.extensions.zotero.extractor.page_name = (function frontend$extensions$zotero$extractor$page_name(item){
var page_title = (function (){var G__67304 = frontend.extensions.zotero.extractor.item_type(item);
switch (G__67304) {
case "case":
return new cljs.core.Keyword(null,"case-name","case-name",668298969).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item));

break;
case "email":
return new cljs.core.Keyword(null,"subject","subject",-1411880451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item));

break;
case "statute":
return new cljs.core.Keyword(null,"name-of-act","name-of-act",1508897193).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item));

break;
default:
return frontend.extensions.zotero.extractor.title(item);

}
})();
var citekey = frontend.extensions.zotero.extractor.citation_key(item);
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291));
if(cljs.core.truth_(and__4251__auto__)){
return (!(clojure.string.blank_QMARK_(citekey)));
} else {
return and__4251__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"page-insert-prefix","page-insert-prefix",1646035089))),citekey].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"page-insert-prefix","page-insert-prefix",1646035089))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_title)].join('');
}
});
frontend.extensions.zotero.extractor.authors = (function frontend$extensions$zotero$extractor$authors(item){
var creators = new cljs.core.Keyword(null,"creators","creators",-1519765535).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item));
var authors = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("author",new cljs.core.Keyword(null,"creator-type","creator-type",-817347270).cljs$core$IFn$_invoke$arity$1(m));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__67313){
var map__67315 = p__67313;
var map__67315__$1 = cljs.core.__destructure_map(map__67315);
var first_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67315__$1,new cljs.core.Keyword(null,"first-name","first-name",-1559982131));
var last_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67315__$1,new cljs.core.Keyword(null,"last-name","last-name",-1695738974));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67315__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return clojure.string.trim((cljs.core.truth_(name)?name:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name)].join('')));
}))),creators);
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(authors);
});
frontend.extensions.zotero.extractor.tags = (function frontend$extensions$zotero$extractor$tags(item){
var tags = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__67320_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__67320_SHARP_,/,\s?/);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__67324){
var map__67325 = p__67324;
var map__67325__$1 = cljs.core.__destructure_map(map__67325);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67325__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return clojure.string.trim(tag);
}),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item)))], 0));
var extra_tags = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"extra-tags","extra-tags",-1152617311)),/,/)));
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tags,extra_tags));
});
frontend.extensions.zotero.extractor.date__GT_journal = (function frontend$extensions$zotero$extractor$date__GT_journal(item){
var temp__5718__auto__ = frontend.date.journal_name_s(new cljs.core.Keyword(null,"parsed-date","parsed-date",-341270717).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(item)));
if(cljs.core.truth_(temp__5718__auto__)){
var date = temp__5718__auto__;
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([date], 0));
} else {
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item));
}
});
frontend.extensions.zotero.extractor.wrap_in_doublequotes = (function frontend$extensions$zotero$extractor$wrap_in_doublequotes(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67369){
var vec__67372 = p__67369;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67372,(1),null);
if(clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),",")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
}),m));
});
frontend.extensions.zotero.extractor.skip_newline_properties = (function frontend$extensions$zotero$extractor$skip_newline_properties(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__67396){
var vec__67397 = p__67396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67397,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67397,(1),null);
return clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"\n");
}),m));
});
frontend.extensions.zotero.extractor.markdown_link = (function frontend$extensions$zotero$extractor$markdown_link(var_args){
var G__67401 = arguments.length;
switch (G__67401) {
case 2:
return frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$2 = (function (label,link){
return frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$3(label,link,false);
}));

(frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$3 = (function (label,link,display_QMARK_){
if(cljs.core.truth_(display_QMARK_)){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("![%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,link], 0));
} else {
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,link], 0));
}
}));

(frontend.extensions.zotero.extractor.markdown_link.cljs$lang$maxFixedArity = 3);

frontend.extensions.zotero.extractor.local_link = (function frontend$extensions$zotero$extractor$local_link(item){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"library","library",467978288).cljs$core$IFn$_invoke$arity$1(item));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"library","library",467978288).cljs$core$IFn$_invoke$arity$1(item));
var library = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"user"))?"library":["groups/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var item_key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("zotero://select/%s/items/%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([library,item_key], 0));
});
frontend.extensions.zotero.extractor.web_link = (function frontend$extensions$zotero$extractor$web_link(item){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"library","library",467978288).cljs$core$IFn$_invoke$arity$1(item));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"library","library",467978288).cljs$core$IFn$_invoke$arity$1(item));
var library = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"user"))?["users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''):["groups/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var item_key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("https://www.zotero.org/%s/items/%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([library,item_key], 0));
});
frontend.extensions.zotero.extractor.zotero_links = (function frontend$extensions$zotero$extractor$zotero_links(item){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$2("Local library",frontend.extensions.zotero.extractor.local_link(item))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$2("Web library",frontend.extensions.zotero.extractor.web_link(item)))].join('');
});
frontend.extensions.zotero.extractor.properties = (function frontend$extensions$zotero$extractor$properties(item){
var type = frontend.extensions.zotero.extractor.item_type(item);
var fields = frontend.extensions.zotero.schema.fields(type);
var authors = frontend.extensions.zotero.extractor.authors(item);
var tags = frontend.extensions.zotero.extractor.tags(item);
var links = frontend.extensions.zotero.extractor.zotero_links(item);
var date = frontend.extensions.zotero.extractor.date__GT_journal(item);
var data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.set.rename_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frontend.extensions.zotero.extractor.wrap_in_doublequotes(frontend.extensions.zotero.extractor.skip_newline_properties(cljs.core.select_keys(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item),fields))),new cljs.core.Keyword(null,"links","links",-654507394),links,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"authors","authors",2063018172),authors,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"item-type","item-type",-73995695),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))], 0)),new cljs.core.Keyword(null,"creators","creators",-1519765535),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"original-title","original-title",1909208979)], null)),new cljs.core.Keyword(null,"title","title",636505583),frontend.extensions.zotero.extractor.page_name(item));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (v){
return ((clojure.string.blank_QMARK_(v)) || (cljs.core.empty_QMARK_(v)));
}),cljs.core.second),data));
});
frontend.extensions.zotero.extractor.extract.cljs$core$IMultiFn$_add_method$arity$3(null,"note",(function (item){
var note_html = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item));
return frontend.extensions.html_parser.parse(new cljs.core.Keyword(null,"markdown","markdown",1227225089),note_html);
}));
frontend.extensions.zotero.extractor.zotero_imported_file_macro = (function frontend$extensions$zotero$extractor$zotero_imported_file_macro(item_key,filename){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{zotero-imported-file %s, %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([filename], 0))], 0));
});
frontend.extensions.zotero.extractor.zotero_linked_file_macro = (function frontend$extensions$zotero$extractor$zotero_linked_file_macro(path){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{zotero-linked-file %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))], 0));
});
frontend.extensions.zotero.extractor.extract.cljs$core$IMultiFn$_add_method$arity$3(null,"attachment",(function (item){
var map__67429 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item);
var map__67429__$1 = cljs.core.__destructure_map(map__67429);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67429__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67429__$1,new cljs.core.Keyword(null,"url","url",276297046));
var link_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67429__$1,new cljs.core.Keyword(null,"link-mode","link-mode",-960686913));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67429__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67429__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67429__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var G__67433 = link_mode;
switch (G__67433) {
case "imported_file":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$2(title,frontend.extensions.zotero.extractor.local_link(item)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.extractor.zotero_imported_file_macro(frontend.extensions.zotero.extractor.item_key(item),filename))].join('');

break;
case "linked_file":
if(clojure.string.starts_with_QMARK_(path,"attachments:")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$2(title,frontend.extensions.zotero.extractor.local_link(item)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.extractor.zotero_linked_file_macro(path))].join('');
} else {
var path__$1 = clojure.string.replace(path," ","%20");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(content_type,"application/pdf")){
return frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$3(title,["file://",path__$1].join(''),true);
} else {
return frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$2(title,["file://",path__$1].join(''));
}
}

break;
case "imported_url":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$2(title,url))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.extractor.zotero_imported_file_macro(frontend.extensions.zotero.extractor.item_key(item),filename))].join('');

break;
case "linked_url":
return frontend.extensions.zotero.extractor.markdown_link.cljs$core$IFn$_invoke$arity$2(title,url);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67433)].join('')));

}
}));
frontend.extensions.zotero.extractor.extract.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (item){
var page_name = frontend.extensions.zotero.extractor.page_name(item);
var properties = frontend.extensions.zotero.extractor.properties(item);
var abstract_note = new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(item));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name,new cljs.core.Keyword(null,"properties","properties",685819552),properties,new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968),abstract_note], null);
}));

//# sourceMappingURL=frontend.extensions.zotero.extractor.js.map
