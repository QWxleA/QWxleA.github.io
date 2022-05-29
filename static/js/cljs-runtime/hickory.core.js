goog.provide('hickory.core');

/**
 * Objects that can be represented as Hiccup nodes implement this protocol in
 * order to make the conversion.
 * @interface
 */
hickory.core.HiccupRepresentable = function(){};

var hickory$core$HiccupRepresentable$as_hiccup$dyn_90199 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (hickory.core.as_hiccup[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (hickory.core.as_hiccup["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("HiccupRepresentable.as-hiccup",this$);
}
}
});
/**
 * Converts the node given into a hiccup-format data structure. The
 *   node must have an implementation of the HiccupRepresentable
 *   protocol; nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hiccup = (function hickory$core$as_hiccup(this$){
if((((!((this$ == null)))) && ((!((this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1 == null)))))){
return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1(this$);
} else {
return hickory$core$HiccupRepresentable$as_hiccup$dyn_90199(this$);
}
});


/**
 * Objects that can be represented as HTML DOM node maps, similar to
 * clojure.xml, implement this protocol to make the conversion.
 * 
 * Each DOM node will be a map or string (for Text/CDATASections). Nodes that
 * are maps have the appropriate subset of the keys
 * 
 *   :type     - [:comment, :document, :document-type, :element]
 *   :tag      - node's tag, check :type to see if applicable
 *   :attrs    - node's attributes as a map, check :type to see if applicable
 *   :content  - node's child nodes, in a vector, check :type to see if
 *               applicable
 * @interface
 */
hickory.core.HickoryRepresentable = function(){};

var hickory$core$HickoryRepresentable$as_hickory$dyn_90200 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (hickory.core.as_hickory[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (hickory.core.as_hickory["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("HickoryRepresentable.as-hickory",this$);
}
}
});
/**
 * Converts the node given into a hickory-format data structure. The
 *   node must have an implementation of the HickoryRepresentable protocol;
 *   nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hickory = (function hickory$core$as_hickory(this$){
if((((!((this$ == null)))) && ((!((this$.hickory$core$HickoryRepresentable$as_hickory$arity$1 == null)))))){
return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1(this$);
} else {
return hickory$core$HickoryRepresentable$as_hickory$dyn_90200(this$);
}
});

hickory.core.node_type = (function hickory$core$node_type(type){
return (goog.dom.NodeType[type]);
});
hickory.core.Attribute = hickory.core.node_type("ATTRIBUTE");
hickory.core.Comment = hickory.core.node_type("COMMENT");
hickory.core.Document = hickory.core.node_type("DOCUMENT");
hickory.core.DocumentType = hickory.core.node_type("DOCUMENT_TYPE");
hickory.core.Element = hickory.core.node_type("ELEMENT");
hickory.core.Text = hickory.core.node_type("TEXT");
hickory.core.as_seq = (function hickory$core$as_seq(nodelist){
if(cljs.core.seq_QMARK_(nodelist)){
return nodelist;
} else {
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(nodelist);
}
});
hickory.core.format_doctype = (function hickory$core$format_doctype(dt){
var name = (dt["name"]);
var publicId = (dt["publicId"]);
var systemId = (dt["systemId"]);
if((!(cljs.core.empty_QMARK_(publicId)))){
return goog.string.format("<!DOCTYPE %s PUBLIC \"%s\" \"%s\">",name,publicId,systemId);
} else {
return ["<!DOCTYPE ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),">"].join('');
}
});
(hickory.core.HiccupRepresentable["object"] = true);

(hickory.core.as_hiccup["object"] = (function (this$){
var pred__90050 = cljs.core._EQ_;
var expr__90051 = (this$["nodeType"]);
if(cljs.core.truth_((pred__90050.cljs$core$IFn$_invoke$arity$2 ? pred__90050.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__90051) : pred__90050.call(null,hickory.core.Attribute,expr__90051)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_((pred__90050.cljs$core$IFn$_invoke$arity$2 ? pred__90050.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__90051) : pred__90050.call(null,hickory.core.Comment,expr__90051)))){
return ["<!--",cljs.core.str.cljs$core$IFn$_invoke$arity$1((this$["data"])),"-->"].join('');
} else {
if(cljs.core.truth_((pred__90050.cljs$core$IFn$_invoke$arity$2 ? pred__90050.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__90051) : pred__90050.call(null,hickory.core.Document,expr__90051)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,hickory.core.as_seq((this$["childNodes"])));
} else {
if(cljs.core.truth_((pred__90050.cljs$core$IFn$_invoke$arity$2 ? pred__90050.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__90051) : pred__90050.call(null,hickory.core.DocumentType,expr__90051)))){
return hickory.core.format_doctype(this$);
} else {
if(cljs.core.truth_((pred__90050.cljs$core$IFn$_invoke$arity$2 ? pred__90050.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__90051) : pred__90050.call(null,hickory.core.Element,expr__90051)))){
var tag = hickory.utils.lower_case_keyword((this$["tagName"]));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,hickory.core.as_seq((this$["attributes"]))))], null),(cljs.core.truth_((hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1(tag) : hickory.utils.unescapable_content.call(null,tag)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.getRawTextContent,hickory.core.as_seq((this$["childNodes"]))):cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,hickory.core.as_seq((this$["childNodes"]))))));
} else {
if(cljs.core.truth_((pred__90050.cljs$core$IFn$_invoke$arity$2 ? pred__90050.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__90051) : pred__90050.call(null,hickory.core.Text,expr__90051)))){
return hickory.utils.html_escape(goog.dom.getRawTextContent(this$));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__90051)].join('')));
}
}
}
}
}
}
}));
(hickory.core.HickoryRepresentable["object"] = true);

(hickory.core.as_hickory["object"] = (function (this$){
var pred__90067 = cljs.core._EQ_;
var expr__90068 = (this$["nodeType"]);
if(cljs.core.truth_((pred__90067.cljs$core$IFn$_invoke$arity$2 ? pred__90067.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__90068) : pred__90067.call(null,hickory.core.Attribute,expr__90068)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_((pred__90067.cljs$core$IFn$_invoke$arity$2 ? pred__90067.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__90068) : pred__90067.call(null,hickory.core.Comment,expr__90068)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(this$["data"])], null)], null);
} else {
if(cljs.core.truth_((pred__90067.cljs$core$IFn$_invoke$arity$2 ? pred__90067.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__90068) : pred__90067.call(null,hickory.core.Document,expr__90068)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,hickory.core.as_seq((this$["childNodes"])))))], null);
} else {
if(cljs.core.truth_((pred__90067.cljs$core$IFn$_invoke$arity$2 ? pred__90067.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__90068) : pred__90067.call(null,hickory.core.DocumentType,expr__90068)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"document-type","document-type",-1309437776),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),(this$["name"]),new cljs.core.Keyword(null,"publicid","publicid",1557995850),(this$["publicId"]),new cljs.core.Keyword(null,"systemid","systemid",-2052878192),(this$["systemId"])], null)], null);
} else {
if(cljs.core.truth_((pred__90067.cljs$core$IFn$_invoke$arity$2 ? pred__90067.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__90068) : pred__90067.call(null,hickory.core.Element,expr__90068)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,hickory.core.as_seq((this$["attributes"]))))),new cljs.core.Keyword(null,"tag","tag",-1290361223),hickory.utils.lower_case_keyword((this$["tagName"])),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,hickory.core.as_seq((this$["childNodes"])))))], null);
} else {
if(cljs.core.truth_((pred__90067.cljs$core$IFn$_invoke$arity$2 ? pred__90067.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__90068) : pred__90067.call(null,hickory.core.Text,expr__90068)))){
return goog.dom.getRawTextContent(this$);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__90068)].join('')));
}
}
}
}
}
}
}));
hickory.core.extract_doctype = (function hickory$core$extract_doctype(s){
var temp__5720__auto__ = cljs.core.second((function (){var or__5043__auto__ = cljs.core.re_find(/<!DOCTYPE ([^>]*)>/,s);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.re_find(/<!doctype ([^>]*)>/,s);
}
})());
if(cljs.core.truth_(temp__5720__auto__)){
var doctype = temp__5720__auto__;
return cljs.core.re_find(/([^\s]*)(\s+PUBLIC\s+[\"]?([^\"]*)[\"]?\s+[\"]?([^\"]*)[\"]?)?/,doctype);
} else {
return null;
}
});
hickory.core.remove_el = (function hickory$core$remove_el(el){
return (el["parentNode"]).removeChild(el);
});
hickory.core.parse_dom_with_domparser = (function hickory$core$parse_dom_with_domparser(s){
if((typeof DOMParser !== 'undefined')){
return (new DOMParser()).parseFromString(s,"text/html");
} else {
return null;
}
});
/**
 * Parse an HTML document (or fragment) as a DOM using document.implementation.createHTMLDocument and document.write.
 */
hickory.core.parse_dom_with_write = (function hickory$core$parse_dom_with_write(s){
var doc = document.implementation.createHTMLDocument("");
var doctype_el = (doc["doctype"]);
if(cljs.core.truth_(hickory.core.extract_doctype(s))){
} else {
hickory.core.remove_el(doctype_el);
}

var temp__5720__auto___90260 = (doc["head"]["firstChild"]);
if(cljs.core.truth_(temp__5720__auto___90260)){
var title_el_90261 = temp__5720__auto___90260;
if(cljs.core.empty_QMARK_((title_el_90261["text"]))){
hickory.core.remove_el(title_el_90261);
} else {
}
} else {
}

doc.write(s);

return doc;
});
/**
 * Parse an entire HTML document into a DOM structure that can be
 * used as input to as-hiccup or as-hickory.
 */
hickory.core.parse = (function hickory$core$parse(s){
var or__5043__auto__ = hickory.core.parse_dom_with_domparser(s);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return hickory.core.parse_dom_with_write(s);
}
});
/**
 * Parse an HTML fragment (some group of tags that might be at home somewhere
 * in the tag hierarchy under <body>) into a list of DOM elements that can
 * each be passed as input to as-hiccup or as-hickory.
 */
hickory.core.parse_fragment = (function hickory$core$parse_fragment(s){
return hickory.core.as_seq((hickory.core.parse(s)["body"]["childNodes"]));
});

//# sourceMappingURL=hickory.core.js.map
