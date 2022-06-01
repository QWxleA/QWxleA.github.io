goog.provide('frontend.util');
goog.scope(function(){
  frontend.util.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$capacitor$status_bar$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$status_bar$dist$plugin_cjs", {});
var module$node_modules$grapheme_splitter$index=shadow.js.require("module$node_modules$grapheme_splitter$index", {});
var module$node_modules$remove_accents$index=shadow.js.require("module$node_modules$remove_accents$index", {});
/**
 * @define {boolean}
 */
frontend.util.NODETEST = goog.define("frontend.util.NODETEST",false);
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.node_test_QMARK_ !== 'undefined')){
} else {
frontend.util.node_test_QMARK_ = frontend.util.NODETEST;
}
(Symbol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (sym,writer,_){
var sym__$1 = this;
return cljs.core._write(writer,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1.toString()),"\""].join(''));
}));
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.node_path !== 'undefined')){
} else {
frontend.util.node_path = module$frontend$utils.nodePath;
}
frontend.util.app_scroll_container_node = (function frontend$util$app_scroll_container_node(){
return goog.dom.getElement("main-content-container");
});
frontend.util.safe_re_find = (function frontend$util$safe_re_find(pattern,s){
if(typeof s === 'string'){
} else {
console.trace();
}

if(typeof s === 'string'){
return cljs.core.re_find(pattern,s);
} else {
return null;
}
});
frontend.util.uuid_pattern = "[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}";

if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.exactly_uuid_pattern !== 'undefined')){
} else {
frontend.util.exactly_uuid_pattern = cljs.core.re_pattern(["(?i)^",frontend.util.uuid_pattern,"$"].join(''));
}

frontend.util.uuid_string_QMARK_ = (function frontend$util$uuid_string_QMARK_(s){
return frontend.util.safe_re_find(frontend.util.exactly_uuid_pattern,s);
});
frontend.util.ios_QMARK_ = (function frontend$util$ios_QMARK_(){
return module$frontend$utils.ios();
});
frontend.util.safari_QMARK_ = (function frontend$util$safari_QMARK_(){
var ua = clojure.string.lower_case(navigator.userAgent);
return ((clojure.string.includes_QMARK_(ua,"webkit")) && ((!(clojure.string.includes_QMARK_(ua,"chrome")))));
});
frontend.util.mobile_QMARK_ = (function frontend$util$mobile_QMARK_(){
if(frontend.util.node_test_QMARK_){
return null;
} else {
return frontend.util.safe_re_find(/Mobi/,navigator.userAgent);
}
});
frontend.util.electron_QMARK_ = (function frontend$util$electron_QMARK_(){
if(cljs.core.truth_((function (){var and__5041__auto__ = window;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.goog$module$goog$object.get(window,"navigator");
} else {
return and__5041__auto__;
}
})())){
var ua = clojure.string.lower_case(navigator.userAgent);
return clojure.string.includes_QMARK_(ua," electron");
} else {
return null;
}
});
/**
 * Mocked open DIR path for by-passing open dir in electron during testing. Nil if not given
 */
frontend.util.mocked_open_dir_path = (function frontend$util$mocked_open_dir_path(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return window.__MOCKED_OPEN_DIR_PATH__;
} else {
return null;
}
});
frontend.util.nfs_QMARK_ = ((cljs.core.not(frontend.util.electron_QMARK_())) && (cljs.core.not(frontend.mobile.util.native_platform_QMARK_())));
frontend.util.file_protocol_QMARK_ = (function frontend$util$file_protocol_QMARK_(){
return clojure.string.starts_with_QMARK_(window.location.href,"file://");
});
frontend.util.format = (function frontend$util$format(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31408 = arguments.length;
var i__5767__auto___31409 = (0);
while(true){
if((i__5767__auto___31409 < len__5766__auto___31408)){
args__5772__auto__.push((arguments[i__5767__auto___31409]));

var G__31411 = (i__5767__auto___31409 + (1));
i__5767__auto___31409 = G__31411;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(frontend.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.util.format.cljs$lang$applyTo = (function (seq30430){
var G__30431 = cljs.core.first(seq30430);
var seq30430__$1 = cljs.core.next(seq30430);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30431,seq30430__$1);
}));

frontend.util.evalue = (function frontend$util$evalue(event){
return frontend.util.goog$module$goog$object.getValueByKeys(event,"target","value");
});
frontend.util.ekey = (function frontend$util$ekey(event){
return frontend.util.goog$module$goog$object.getValueByKeys(event,"key");
});
frontend.util.echecked_QMARK_ = (function frontend$util$echecked_QMARK_(event){
return frontend.util.goog$module$goog$object.getValueByKeys(event,"target","checked");
});
/**
 * compatible change event for React
 */
frontend.util.set_change_value = (function frontend$util$set_change_value(node,value){
return module$frontend$utils.triggerInputChange(node,value);
});
frontend.util.p_handle = (function frontend$util$p_handle(var_args){
var G__30447 = arguments.length;
switch (G__30447) {
case 2:
return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.p_handle.cljs$core$IFn$_invoke$arity$2 = (function (p,ok_handler){
return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(p,ok_handler,(function (error){
return console.error(error);
}));
}));

(frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3 = (function (p,ok_handler,error_handler){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(p,(function (result){
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(result) : ok_handler.call(null,result));
})),(function (error){
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(error) : error_handler.call(null,error));
}));
}));

(frontend.util.p_handle.cljs$lang$maxFixedArity = 3);

frontend.util.get_width = (function frontend$util$get_width(){
return frontend.util.goog$module$goog$object.get(window,"innerWidth");
});
frontend.util.set_theme_light = (function frontend$util$set_theme_light(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.protocols._promise(module$node_modules$$capacitor$status_bar$dist$plugin_cjs.StatusBar.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),module$node_modules$$capacitor$status_bar$dist$plugin_cjs.Style.Light], null))));
}));
});
frontend.util.set_theme_dark = (function frontend$util$set_theme_dark(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.protocols._promise(module$node_modules$$capacitor$status_bar$dist$plugin_cjs.StatusBar.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),module$node_modules$$capacitor$status_bar$dist$plugin_cjs.Style.Dark], null))));
}));
});
frontend.util.find_first = (function frontend$util$find_first(pred,coll){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,coll));
});
frontend.util.remove_nils_non_nested = (function frontend$util$remove_nils_non_nested(nm){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second)),nm);
});
frontend.util.ext_of_image_QMARK_ = (function frontend$util$ext_of_image_QMARK_(s){
return cljs.core.some((function (p1__30500_SHARP_){
return clojure.string.ends_with_QMARK_(clojure.string.lower_case(s),p1__30500_SHARP_);
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [".png",".jpg",".jpeg",".bmp",".gif",".webp",".svg"], null));
});
frontend.util.hiccup__GT_class = (function frontend$util$hiccup__GT_class(class$){
var G__30501 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(class$,/\./);
var G__30501__$1 = (((G__30501 == null))?null:clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",G__30501));
if((G__30501__$1 == null)){
return null;
} else {
return clojure.string.trim(G__30501__$1);
}
});
frontend.util.fetch = (function frontend$util$fetch(var_args){
var G__30507 = arguments.length;
switch (G__30507) {
case 3:
return frontend.util.fetch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.util.fetch.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.fetch.cljs$core$IFn$_invoke$arity$3 = (function (url,on_ok,on_failed){
return frontend.util.fetch.cljs$core$IFn$_invoke$arity$4(url,cljs.core.PersistentArrayMap.EMPTY,on_ok,on_failed);
}));

(frontend.util.fetch.cljs$core$IFn$_invoke$arity$4 = (function (url,opts,on_ok,on_failed){
return fetch(url,cljs_bean.core.__GT_js(opts)).then((function (resp){
if((resp.status >= (400))){
return (on_failed.cljs$core$IFn$_invoke$arity$1 ? on_failed.cljs$core$IFn$_invoke$arity$1(resp) : on_failed.call(null,resp));
} else {
if(cljs.core.truth_(resp.ok)){
return resp.json().then(cljs_bean.core.__GT_clj).then((function (p1__30502_SHARP_){
return (on_ok.cljs$core$IFn$_invoke$arity$1 ? on_ok.cljs$core$IFn$_invoke$arity$1(p1__30502_SHARP_) : on_ok.call(null,p1__30502_SHARP_));
}));
} else {
return (on_failed.cljs$core$IFn$_invoke$arity$1 ? on_failed.cljs$core$IFn$_invoke$arity$1(resp) : on_failed.call(null,resp));
}
}
}));
}));

(frontend.util.fetch.cljs$lang$maxFixedArity = 4);

frontend.util.upload = (function frontend$util$upload(url,file,on_ok,on_failed,on_progress){
var xhr = (new XMLHttpRequest());
xhr.open("put",url);

frontend.util.goog$module$goog$object.set(xhr,"onload",on_ok);

frontend.util.goog$module$goog$object.set(xhr,"onerror",on_failed);

if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.goog$module$goog$object.get(xhr,"upload");
if(cljs.core.truth_(and__5041__auto__)){
return on_progress;
} else {
return and__5041__auto__;
}
})())){
frontend.util.goog$module$goog$object.set(frontend.util.goog$module$goog$object.get(xhr,"upload"),"onprogress",on_progress);
} else {
}

return xhr.send(file);
});
frontend.util.post = (function frontend$util$post(url,body,on_ok,on_failed){
return frontend.util.fetch.cljs$core$IFn$_invoke$arity$4(url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"post",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(body))], null),on_ok,on_failed);
});
frontend.util.zero_pad = (function frontend$util$zero_pad(n){
if((n < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}
});
/**
 * Use if arg could be an int or string. If arg is only a string, use `parse-long`.
 */
frontend.util.safe_parse_int = (function frontend$util$safe_parse_int(x){
if(typeof x === 'string'){
return cljs.core.parse_long(x);
} else {
return x;
}
});
/**
 * Use if arg could be a float or string. If arg is only a string, use `parse-double`
 */
frontend.util.safe_parse_float = (function frontend$util$safe_parse_float(x){
if(typeof x === 'string'){
return cljs.core.parse_double(x);
} else {
return x;
}
});
/**
 * Returns a function that will call f only after threshold has passed without new calls
 *    to the function. Calls prep-fn on the args in a sync way, which can be used for things like
 *    calling .persist on the event object to be able to access the event attributes in f
 */
frontend.util.debounce = (function frontend$util$debounce(var_args){
var G__30523 = arguments.length;
switch (G__30523) {
case 2:
return frontend.util.debounce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.util.debounce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.debounce.cljs$core$IFn$_invoke$arity$2 = (function (threshold,f){
return frontend.util.debounce.cljs$core$IFn$_invoke$arity$3(threshold,f,cljs.core.constantly(null));
}));

(frontend.util.debounce.cljs$core$IFn$_invoke$arity$3 = (function (threshold,f,prep_fn){
var t = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__31443__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref(t))){
clearTimeout(cljs.core.deref(t));
} else {
}

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(prep_fn,args);

return cljs.core.reset_BANG_(t,setTimeout((function (){
cljs.core.reset_BANG_(t,null);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),threshold));
};
var G__31443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31444__i = 0, G__31444__a = new Array(arguments.length -  0);
while (G__31444__i < G__31444__a.length) {G__31444__a[G__31444__i] = arguments[G__31444__i + 0]; ++G__31444__i;}
  args = new cljs.core.IndexedSeq(G__31444__a,0,null);
} 
return G__31443__delegate.call(this,args);};
G__31443.cljs$lang$maxFixedArity = 0;
G__31443.cljs$lang$applyTo = (function (arglist__31445){
var args = cljs.core.seq(arglist__31445);
return G__31443__delegate(args);
});
G__31443.cljs$core$IFn$_invoke$arity$variadic = G__31443__delegate;
return G__31443;
})()
;
}));

(frontend.util.debounce.cljs$lang$maxFixedArity = 3);

frontend.util.nth_safe = (function frontend$util$nth_safe(c,i){
if((((i < (0))) || ((i >= cljs.core.count(c))))){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}
});
if(frontend.util.node_test_QMARK_){
} else {
(NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$2(array__$1,(0));
}));
}
frontend.util.caret_range = (function frontend$util$caret_range(node){
var temp__5720__auto__ = (function (){var or__5043__auto__ = frontend.util.goog$module$goog$object.get(node,"ownerDocument");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.goog$module$goog$object.get(node,"document");
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var doc = temp__5720__auto__;
var win = (function (){var or__5043__auto__ = frontend.util.goog$module$goog$object.get(doc,"defaultView");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.goog$module$goog$object.get(doc,"parentWindow");
}
})();
var selection = win.getSelection();
if(cljs.core.truth_(selection)){
var range_count = frontend.util.goog$module$goog$object.get(selection,"rangeCount");
if((range_count > (0))){
var range = win.getSelection().getRangeAt((0));
var pre_caret_range = range.cloneRange();
pre_caret_range.selectNodeContents(node);

pre_caret_range.setEnd(frontend.util.goog$module$goog$object.get(range,"endContainer"),frontend.util.goog$module$goog$object.get(range,"endOffset"));

var contents = pre_caret_range.cloneContents();
var html = (function (){var G__30540 = cljs.core.first(contents.childNodes);
var G__30540__$1 = (((G__30540 == null))?null:frontend.util.goog$module$goog$object.get(G__30540,"innerHTML"));
if((G__30540__$1 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30540__$1);
}
})();
var br_ended_QMARK_ = (function (){var and__5041__auto__ = html;
if(cljs.core.truth_(and__5041__auto__)){
return ((clojure.string.ends_with_QMARK_(html,"<div class=\"is-paragraph\"></div></div></span></div></div></div>")) || (clojure.string.ends_with_QMARK_(html,"<br></div></div></span></div></div></div>")));
} else {
return and__5041__auto__;
}
})();
var value = pre_caret_range.toString();
if(cljs.core.truth_(br_ended_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\n"].join('');
} else {
return value;
}
} else {
return null;
}
} else {
var temp__5720__auto____$1 = frontend.util.goog$module$goog$object.get(doc,"selection");
if(cljs.core.truth_(temp__5720__auto____$1)){
var selection__$1 = temp__5720__auto____$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("Control",frontend.util.goog$module$goog$object.get(selection__$1,"type"))){
var text_range = selection__$1.createRange();
var pre_caret_text_range = frontend.util.goog$module$goog$object.get(doc,"body").createTextRange();
pre_caret_text_range.moveToElementText(node);

pre_caret_text_range.setEndPoint("EndToEnd",text_range);

return frontend.util.goog$module$goog$object.get(pre_caret_text_range,"text");
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
});
frontend.util.get_selection_start = (function frontend$util$get_selection_start(input){
if(cljs.core.truth_(input)){
return input.selectionStart;
} else {
return null;
}
});
frontend.util.get_selection_end = (function frontend$util$get_selection_end(input){
if(cljs.core.truth_(input)){
return input.selectionEnd;
} else {
return null;
}
});
frontend.util.get_selection_direction = (function frontend$util$get_selection_direction(input){
if(cljs.core.truth_(input)){
return input.selectionDirection;
} else {
return null;
}
});
frontend.util.get_first_or_last_line_pos = (function frontend$util$get_first_or_last_line_pos(input){
var pos = frontend.util.get_selection_start(input);
var value = input.value;
var last_newline_pos = (function (){var or__5043__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(value,"\n",(pos - (1)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (-1);
}
})();
return ((pos - last_newline_pos) - (1));
});
frontend.util.stop = (function frontend$util$stop(e){
if(cljs.core.truth_(e)){
var G__30564 = e;
G__30564.preventDefault();

G__30564.stopPropagation();

return G__30564;
} else {
return null;
}
});
frontend.util.stop_propagation = (function frontend$util$stop_propagation(e){
if(cljs.core.truth_(e)){
return e.stopPropagation();
} else {
return null;
}
});
frontend.util.cur_doc_top = (function frontend$util$cur_doc_top(){
return document.documentElement.scrollTop;
});
frontend.util.element_top = (function frontend$util$element_top(elem,top){
if(cljs.core.truth_(elem)){
if(cljs.core.truth_(elem.offsetParent)){
var client_top = (function (){var or__5043__auto__ = elem.clientTop;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var offset_top = elem.offsetTop;
return (((top + client_top) + offset_top) + (function (){var G__30576 = elem.offsetParent;
var G__30577 = top;
return (frontend.util.element_top.cljs$core$IFn$_invoke$arity$2 ? frontend.util.element_top.cljs$core$IFn$_invoke$arity$2(G__30576,G__30577) : frontend.util.element_top.call(null,G__30576,G__30577));
})());
} else {
return top;
}
} else {
return null;
}
});
frontend.util.scroll_to_element = (function frontend$util$scroll_to_element(elem_id){
if(cljs.core.truth_(frontend.util.safe_re_find(/^\/\d+$/,elem_id))){
return null;
} else {
if(cljs.core.truth_(elem_id)){
var temp__5720__auto__ = goog.dom.getElement(elem_id);
if(cljs.core.truth_(temp__5720__auto__)){
var elem = temp__5720__auto__;
return frontend.util.app_scroll_container_node().scroll(({"top": (function (){var top = frontend.util.element_top(elem,(0));
if((top < (256))){
return (0);
} else {
return (top - (80));
}
})(), "behavior": "smooth"}));
} else {
return null;
}
} else {
return null;
}
}
});
frontend.util.scroll_to = (function frontend$util$scroll_to(var_args){
var G__30588 = arguments.length;
switch (G__30588) {
case 1:
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$1 = (function (pos){
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$2(frontend.util.app_scroll_container_node(),pos);
}));

(frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$2 = (function (node,pos){
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3(node,pos,true);
}));

(frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3 = (function (node,pos,animate_QMARK_){
if(cljs.core.truth_(node)){
return node.scroll(({"top": pos, "behavior": (cljs.core.truth_(animate_QMARK_)?"smooth":"auto")}));
} else {
return null;
}
}));

(frontend.util.scroll_to.cljs$lang$maxFixedArity = 3);

/**
 * Returns the scroll top position of the `node`. If `node` is not specified,
 *   returns the scroll top position of the `app-scroll-container-node`.
 */
frontend.util.scroll_top = (function frontend$util$scroll_top(var_args){
var G__30602 = arguments.length;
switch (G__30602) {
case 0:
return frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$1(frontend.util.app_scroll_container_node());
}));

(frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
return node.scrollTop;
} else {
return null;
}
}));

(frontend.util.scroll_top.cljs$lang$maxFixedArity = 1);

frontend.util.scroll_to_top = (function frontend$util$scroll_to_top(var_args){
var G__30610 = arguments.length;
switch (G__30610) {
case 0:
return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3(frontend.util.app_scroll_container_node(),(0),false);
}));

(frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$1 = (function (animate_QMARK_){
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3(frontend.util.app_scroll_container_node(),(0),animate_QMARK_);
}));

(frontend.util.scroll_to_top.cljs$lang$maxFixedArity = 1);

frontend.util.link_QMARK_ = (function frontend$util$link_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["A",null,"BUTTON",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
});
frontend.util.time_QMARK_ = (function frontend$util$time_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["TIME",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
});
frontend.util.audio_QMARK_ = (function frontend$util$audio_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["AUDIO",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
});
frontend.util.video_QMARK_ = (function frontend$util$video_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["VIDEO",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
});
frontend.util.sup_QMARK_ = (function frontend$util$sup_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["SUP",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
});
frontend.util.input_QMARK_ = (function frontend$util$input_QMARK_(node){
if(cljs.core.truth_(node)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["INPUT",null,"TEXTAREA",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
} else {
return null;
}
});
frontend.util.select_QMARK_ = (function frontend$util$select_QMARK_(node){
if(cljs.core.truth_(node)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("SELECT",frontend.util.goog$module$goog$object.get(node,"tagName"));
} else {
return null;
}
});
frontend.util.details_or_summary_QMARK_ = (function frontend$util$details_or_summary_QMARK_(node){
if(cljs.core.truth_(node)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["DETAILS",null,"SUMMARY",null], null), null),frontend.util.goog$module$goog$object.get(node,"tagName"));
} else {
return null;
}
});
frontend.util.starts_with_QMARK_ = (function frontend$util$starts_with_QMARK_(s,substr){
return clojure.string.starts_with_QMARK_(s,substr);
});
frontend.util.distinct_by = (function frontend$util$distinct_by(f,col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.truth_(cljs.core.some((function (p1__30678_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__30678_SHARP_) : f.call(null,p1__30678_SHARP_)));
}),acc))){
return acc;
} else {
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
}
}),cljs.core.PersistentVector.EMPTY,col);
});
frontend.util.distinct_by_last_wins = (function frontend$util$distinct_by_last_wins(f,col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.truth_(cljs.core.some((function (p1__30681_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__30681_SHARP_) : f.call(null,p1__30681_SHARP_)));
}),acc))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)))){
return x;
} else {
return v;
}
}),acc);
} else {
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
}
}),cljs.core.PersistentVector.EMPTY,col);
});
frontend.util.get_git_owner_and_repo = (function frontend$util$get_git_owner_and_repo(repo_url){
return cljs.core.take_last((2),clojure.string.split.cljs$core$IFn$_invoke$arity$2(repo_url,/\//));
});
frontend.util.safe_lower_case = (function frontend$util$safe_lower_case(s){
if(typeof s === 'string'){
return clojure.string.lower_case(s);
} else {
return s;
}
});
frontend.util.trim_safe = (function frontend$util$trim_safe(s){
if(cljs.core.truth_(s)){
return clojure.string.trim(s);
} else {
return null;
}
});
frontend.util.trimr_without_newlines = (function frontend$util$trimr_without_newlines(s){
return s.replace(/[ \t\r]+$/,"");
});
frontend.util.triml_without_newlines = (function frontend$util$triml_without_newlines(s){
return s.replace(/^[ \t\r]+/,"");
});
frontend.util.concat_without_spaces = (function frontend$util$concat_without_spaces(left,right){
if(((typeof left === 'string') && (typeof right === 'string'))){
var left__$1 = frontend.util.trimr_without_newlines(left);
var not_space_QMARK_ = ((clojure.string.blank_QMARK_(left__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.last(left__$1))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(left__$1),((not_space_QMARK_)?null:" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.triml_without_newlines(right))].join('');
} else {
return null;
}
});
frontend.util.replace_first = (function frontend$util$replace_first(pattern,s,new_value){
var temp__5718__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,pattern);
if(cljs.core.truth_(temp__5718__auto__)){
var first_index = temp__5718__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(first_index + cljs.core.count(pattern)))].join('');
} else {
return s;
}
});
frontend.util.replace_last = (function frontend$util$replace_last(var_args){
var G__30699 = arguments.length;
switch (G__30699) {
case 3:
return frontend.util.replace_last.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.util.replace_last.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.replace_last.cljs$core$IFn$_invoke$arity$3 = (function (pattern,s,new_value){
return frontend.util.replace_last.cljs$core$IFn$_invoke$arity$4(pattern,s,new_value,true);
}));

(frontend.util.replace_last.cljs$core$IFn$_invoke$arity$4 = (function (pattern,s,new_value,space_QMARK_){
var temp__5718__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,pattern);
if(cljs.core.truth_(temp__5718__auto__)){
var last_index = temp__5718__auto__;
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_index);
if(cljs.core.truth_(space_QMARK_)){
return frontend.util.concat_without_spaces(prefix,new_value);
} else {
return [prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value)].join('');
}
} else {
return s;
}
}));

(frontend.util.replace_last.cljs$lang$maxFixedArity = 4);

if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.default_escape_chars !== 'undefined')){
} else {
frontend.util.default_escape_chars = "[]{}().+*?|";
}
frontend.util.replace_ignore_case = (function frontend$util$replace_ignore_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31481 = arguments.length;
var i__5767__auto___31482 = (0);
while(true){
if((i__5767__auto___31482 < len__5766__auto___31481)){
args__5772__auto__.push((arguments[i__5767__auto___31482]));

var G__31483 = (i__5767__auto___31482 + (1));
i__5767__auto___31482 = G__31483;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return frontend.util.replace_ignore_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(frontend.util.replace_ignore_case.cljs$core$IFn$_invoke$arity$variadic = (function (s,old_value,new_value,p__30710){
var vec__30712 = p__30710;
var escape_chars = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30712,(0),null);
var escape_chars__$1 = (function (){var or__5043__auto__ = escape_chars;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.default_escape_chars;
}
})();
var old_value__$1 = ((typeof escape_chars__$1 === 'string')?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,escape_char){
return clojure.string.replace(acc,escape_char,["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(escape_char)].join(''));
}),old_value,escape_chars__$1):old_value);
return clojure.string.replace(s,cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_value__$1)].join('')),new_value);
}));

(frontend.util.replace_ignore_case.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(frontend.util.replace_ignore_case.cljs$lang$applyTo = (function (seq30705){
var G__30706 = cljs.core.first(seq30705);
var seq30705__$1 = cljs.core.next(seq30705);
var G__30707 = cljs.core.first(seq30705__$1);
var seq30705__$2 = cljs.core.next(seq30705__$1);
var G__30708 = cljs.core.first(seq30705__$2);
var seq30705__$3 = cljs.core.next(seq30705__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30706,G__30707,G__30708,seq30705__$3);
}));

frontend.util.re_pos = (function frontend$util$re_pos(re,s){
var re__$1 = (new RegExp(re.source,"g"));
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = re__$1.exec(s);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var G__31484 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.index,cljs.core.first(m)], null));
res = G__31484;
continue;
} else {
return res;
}
break;
}
});
frontend.util.safe_set_range_text_BANG_ = (function frontend$util$safe_set_range_text_BANG_(var_args){
var G__30727 = arguments.length;
switch (G__30727) {
case 4:
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (input,text,start,end){
try{return input.setRangeText(text,start,end);
}catch (e30730){if((e30730 instanceof Error)){
var _e = e30730;
return null;
} else {
throw e30730;

}
}}));

(frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (input,text,start,end,select_mode){
try{return input.setRangeText(text,start,end,select_mode);
}catch (e30735){if((e30735 instanceof Error)){
var _e = e30735;
return null;
} else {
throw e30735;

}
}}));

(frontend.util.safe_set_range_text_BANG_.cljs$lang$maxFixedArity = 5);

frontend.util.safe_dec_current_pos_from_end = (function frontend$util$safe_dec_current_pos_from_end(input,current_pos){
var temp__5718__auto__ = (function (){var and__5041__auto__ = typeof input === 'string';
if(and__5041__auto__){
return input.length;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var len = temp__5718__auto__;
var temp__5720__auto__ = (function (){var and__5041__auto__ = (len >= (2));
if(and__5041__auto__){
var and__5041__auto____$1 = (current_pos <= len);
if(and__5041__auto____$1){
return input.substring((function (){var x__5128__auto__ = (current_pos - (20));
var y__5129__auto__ = (0);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})(),current_pos);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var input__$1 = temp__5720__auto__;
try{var splitter = (new module$node_modules$grapheme_splitter$index());
var input__$2 = splitter.splitGraphemes(input__$1);
return (current_pos - input__$2.pop().length);
}catch (e30740){if((e30740 instanceof Error)){
var e = e30740;
console.error(e);

return (current_pos - (1));
} else {
throw e30740;

}
}} else {
return null;
}
} else {
return (current_pos - (1));
}
});
frontend.util.safe_inc_current_pos_from_start = (function frontend$util$safe_inc_current_pos_from_start(input,current_pos){
var temp__5718__auto__ = (function (){var and__5041__auto__ = typeof input === 'string';
if(and__5041__auto__){
return input.length;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var len = temp__5718__auto__;
var temp__5720__auto__ = (function (){var and__5041__auto__ = (len >= (2));
if(and__5041__auto__){
var and__5041__auto____$1 = (current_pos <= len);
if(and__5041__auto____$1){
return input.substr(current_pos,(20));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var input__$1 = temp__5720__auto__;
try{var splitter = (new module$node_modules$grapheme_splitter$index());
var input__$2 = splitter.splitGraphemes(input__$1);
return (current_pos + input__$2.shift().length);
}catch (e30747){if((e30747 instanceof Error)){
var e = e30747;
console.error(e);

return (current_pos + (1));
} else {
throw e30747;

}
}} else {
return null;
}
} else {
return (current_pos + (1));
}
});
frontend.util.kill_line_before_BANG_ = (function frontend$util$kill_line_before_BANG_(input){
var val = input.value;
var end = frontend.util.get_selection_start(input);
var n_pos = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",(end - (1)));
var start = (cljs.core.truth_(n_pos)?(n_pos + (1)):(0));
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4(input,"",start,end);
});
frontend.util.kill_line_after_BANG_ = (function frontend$util$kill_line_after_BANG_(input){
var val = input.value;
var start = frontend.util.get_selection_start(input);
var end = (function (){var or__5043__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",start);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.count(val);
}
})();
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4(input,"",start,end);
});
frontend.util.insert_at_current_position_BANG_ = (function frontend$util$insert_at_current_position_BANG_(input,text){
var start = frontend.util.get_selection_start(input);
var end = frontend.util.get_selection_end(input);
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$5(input,text,start,end,"end");
});
/**
 * Takes a value or an atom
 *    If it's a value, returns it
 *    If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *    
 */
frontend.util.deref_or_value = (function frontend$util$deref_or_value(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
return cljs.core.deref(val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Return a goog.date.UtcDateTime based on local date/time.
 */
frontend.util.now__GT_utc = (function frontend$util$now__GT_utc(){
var local_date_time = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date_time.getYear(),local_date_time.getMonth(),local_date_time.getDate(),(0),(0),(0),(0)));
});
frontend.util.safe_subvec = (function frontend$util$safe_subvec(xs,start,end){
if((((start < (0))) || ((end > cljs.core.count(xs))))){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(xs,start,end);
}
});
frontend.util.get_nodes_between_two_nodes = (function frontend$util$get_nodes_between_two_nodes(id1,id2,class$){
var temp__5720__auto__ = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName(class$));
if(cljs.core.truth_(temp__5720__auto__)){
var nodes = temp__5720__auto__;
var node_1 = goog.dom.getElement(id1);
var node_2 = goog.dom.getElement(id2);
var idx_1 = nodes.indexOf(node_1);
var idx_2 = nodes.indexOf(node_2);
var start = (function (){var x__5131__auto__ = idx_1;
var y__5132__auto__ = idx_2;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var end = ((function (){var x__5128__auto__ = idx_1;
var y__5129__auto__ = idx_2;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})() + (1));
return frontend.util.safe_subvec(cljs.core.vec(nodes),start,end);
} else {
return null;
}
});
frontend.util.get_direction_between_two_nodes = (function frontend$util$get_direction_between_two_nodes(id1,id2,class$){
var temp__5720__auto__ = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName(class$));
if(cljs.core.truth_(temp__5720__auto__)){
var nodes = temp__5720__auto__;
var node_1 = goog.dom.getElement(id1);
var node_2 = goog.dom.getElement(id2);
var idx_1 = nodes.indexOf(node_1);
var idx_2 = nodes.indexOf(node_2);
if((idx_1 >= idx_2)){
return new cljs.core.Keyword(null,"up","up",-269712113);
} else {
return new cljs.core.Keyword(null,"down","down",1565245570);
}
} else {
return null;
}
});
frontend.util.rec_get_tippy_container = (function frontend$util$rec_get_tippy_container(node){
if(cljs.core.truth_((function (){var and__5041__auto__ = node;
if(cljs.core.truth_(and__5041__auto__)){
return dommy.core.has_class_QMARK_(node,"tippy-tooltip-content");
} else {
return and__5041__auto__;
}
})())){
return node;
} else {
var and__5041__auto__ = node;
if(cljs.core.truth_(and__5041__auto__)){
var G__30806 = frontend.util.goog$module$goog$object.get(node,"parentNode");
return (frontend.util.rec_get_tippy_container.cljs$core$IFn$_invoke$arity$1 ? frontend.util.rec_get_tippy_container.cljs$core$IFn$_invoke$arity$1(G__30806) : frontend.util.rec_get_tippy_container.call(null,G__30806));
} else {
return and__5041__auto__;
}
}
});
frontend.util.rec_get_blocks_container = (function frontend$util$rec_get_blocks_container(node){
if(cljs.core.truth_((function (){var and__5041__auto__ = node;
if(cljs.core.truth_(and__5041__auto__)){
return dommy.core.has_class_QMARK_(node,"blocks-container");
} else {
return and__5041__auto__;
}
})())){
return node;
} else {
var and__5041__auto__ = node;
if(cljs.core.truth_(and__5041__auto__)){
var G__30809 = frontend.util.goog$module$goog$object.get(node,"parentNode");
return (frontend.util.rec_get_blocks_container.cljs$core$IFn$_invoke$arity$1 ? frontend.util.rec_get_blocks_container.cljs$core$IFn$_invoke$arity$1(G__30809) : frontend.util.rec_get_blocks_container.call(null,G__30809));
} else {
return and__5041__auto__;
}
}
});
frontend.util.rec_get_blocks_content_section = (function frontend$util$rec_get_blocks_content_section(node){
if(cljs.core.truth_((function (){var and__5041__auto__ = node;
if(cljs.core.truth_(and__5041__auto__)){
return dommy.core.has_class_QMARK_(node,"content");
} else {
return and__5041__auto__;
}
})())){
return node;
} else {
var and__5041__auto__ = node;
if(cljs.core.truth_(and__5041__auto__)){
var G__30810 = frontend.util.goog$module$goog$object.get(node,"parentNode");
return (frontend.util.rec_get_blocks_content_section.cljs$core$IFn$_invoke$arity$1 ? frontend.util.rec_get_blocks_content_section.cljs$core$IFn$_invoke$arity$1(G__30810) : frontend.util.rec_get_blocks_content_section.call(null,G__30810));
} else {
return and__5041__auto__;
}
}
});
frontend.util.get_blocks_noncollapse = (function frontend$util$get_blocks_noncollapse(){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return (!((frontend.util.goog$module$goog$object.get(b,"offsetParent") == null)));
}),dommy.utils.__GT_Array(document.getElementsByClassName("ls-block")));
});
frontend.util.remove_embeded_blocks = (function frontend$util$remove_embeded_blocks(blocks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(b,"data-embed"));
}),blocks);
});
frontend.util.get_selected_text = (function frontend$util$get_selected_text(){
return module$frontend$utils.getSelectionText();
});
frontend.util.clear_selection_BANG_ = module$frontend$selection.clearSelection;
frontend.util.copy_to_clipboard_BANG_ = (function frontend$util$copy_to_clipboard_BANG_(var_args){
var G__30831 = arguments.length;
switch (G__30831) {
case 1:
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (s){
return module$frontend$utils.writeClipboard(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),s], null)));
}));

(frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,html){
return module$frontend$utils.writeClipboard(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),s,new cljs.core.Keyword(null,"html","html",-998796897),html], null)));
}));

(frontend.util.copy_to_clipboard_BANG_.cljs$lang$maxFixedArity = 2);

frontend.util.drop_nth = (function frontend$util$drop_nth(n,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__30857_SHARP_,p2__30858_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__30857_SHARP_,n)){
return p2__30858_SHARP_;
} else {
return null;
}
}),coll);
});
frontend.util.react = (function frontend$util$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
return rum.core.react(ref);
} else {
return cljs.core.deref(ref);
}
});
frontend.util.time_ms = (function frontend$util$time_ms(){
return cljs_time.coerce.to_long(cljs_time.core.now());
});
frontend.util.today_at_local_ms = (function frontend$util$today_at_local_ms(hours,mins,secs,millisecs){
return (new Date(Date.now())).setHours(hours,mins,secs,millisecs);
});
frontend.util.d = (function frontend$util$d(k,f){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Debug ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], 0));

var start__5646__auto___31521 = cljs.core.system_time();
var ret__5647__auto___31522 = cljs.core.reset_BANG_(result,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__5646__auto___31521).toFixed((6)))," msecs"].join('')], 0));


return cljs.core.deref(result);
});
frontend.util.concat_without_nil = (function frontend$util$concat_without_nil(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31523 = arguments.length;
var i__5767__auto___31524 = (0);
while(true){
if((i__5767__auto___31524 < len__5766__auto___31523)){
args__5772__auto__.push((arguments[i__5767__auto___31524]));

var G__31525 = (i__5767__auto___31524 + (1));
i__5767__auto___31524 = G__31525;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.concat_without_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.concat_without_nil.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cols));
}));

(frontend.util.concat_without_nil.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.concat_without_nil.cljs$lang$applyTo = (function (seq30901){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30901));
}));

frontend.util.set_title_BANG_ = (function frontend$util$set_title_BANG_(title){
return (document.title = title);
});
frontend.util.get_block_container = (function frontend$util$get_block_container(block_element){
if(cljs.core.truth_(block_element)){
var temp__5720__auto__ = (function (){var G__30916 = frontend.util.rec_get_blocks_content_section(block_element);
if((G__30916 == null)){
return null;
} else {
return dommy.core.parent(G__30916);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var section = temp__5720__auto__;
if(cljs.core.truth_(section)){
return goog.dom.getElement(section,"id");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.util.get_prev_block_non_collapsed = (function frontend$util$get_prev_block_non_collapsed(block){
var temp__5720__auto__ = frontend.util.get_blocks_noncollapse();
if(cljs.core.truth_(temp__5720__auto__)){
var blocks = temp__5720__auto__;
var temp__5720__auto____$1 = blocks.indexOf(block);
if(cljs.core.truth_(temp__5720__auto____$1)){
var index = temp__5720__auto____$1;
var idx = (index - (1));
if((idx >= (0))){
return frontend.util.nth_safe(blocks,idx);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.util.get_prev_block_non_collapsed_non_embed = (function frontend$util$get_prev_block_non_collapsed_non_embed(block){
var temp__5720__auto__ = frontend.util.remove_embeded_blocks(frontend.util.get_blocks_noncollapse());
if(cljs.core.truth_(temp__5720__auto__)){
var blocks = temp__5720__auto__;
var temp__5720__auto____$1 = blocks.indexOf(block);
if(cljs.core.truth_(temp__5720__auto____$1)){
var index = temp__5720__auto____$1;
var idx = (index - (1));
if((idx >= (0))){
return frontend.util.nth_safe(blocks,idx);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.util.get_next_block_non_collapsed = (function frontend$util$get_next_block_non_collapsed(block){
var temp__5720__auto__ = frontend.util.get_blocks_noncollapse();
if(cljs.core.truth_(temp__5720__auto__)){
var blocks = temp__5720__auto__;
var temp__5720__auto____$1 = blocks.indexOf(block);
if(cljs.core.truth_(temp__5720__auto____$1)){
var index = temp__5720__auto____$1;
var idx = (index + (1));
if((cljs.core.count(blocks) >= idx)){
return frontend.util.nth_safe(blocks,idx);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.util.get_next_block_non_collapsed_skip = (function frontend$util$get_next_block_non_collapsed_skip(block){
var temp__5720__auto__ = frontend.util.get_blocks_noncollapse();
if(cljs.core.truth_(temp__5720__auto__)){
var blocks = temp__5720__auto__;
var temp__5720__auto____$1 = blocks.indexOf(block);
if(cljs.core.truth_(temp__5720__auto____$1)){
var index = temp__5720__auto____$1;
var idx = (index + (1));
while(true){
if((cljs.core.count(blocks) >= idx)){
var block__$1 = frontend.util.nth_safe(blocks,idx);
var nested_QMARK_ = cljs.core.some(((function (idx,block__$1,index,temp__5720__auto____$1,blocks,temp__5720__auto__){
return (function (dom){
return dom.contains(block__$1);
});})(idx,block__$1,index,temp__5720__auto____$1,blocks,temp__5720__auto__))
,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass("selected")));
if(cljs.core.truth_(nested_QMARK_)){
var G__31534 = (idx + (1));
idx = G__31534;
continue;
} else {
return block__$1;
}
} else {
return null;
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.util.rand_str = (function frontend$util$rand_str(n){
return Math.random().toString((36)).substr((2),n);
});
frontend.util.unique_id = (function frontend$util$unique_id(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.rand_str((6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.rand_str((3)))].join('');
});
frontend.util.pp_str = (function frontend$util$pp_str(x){
var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30950_31536 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30951_31537 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30952_31538 = true;
var _STAR_print_fn_STAR__temp_val__30953_31539 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30952_31538);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30953_31539);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30951_31537);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30950_31536);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
});
frontend.util.hiccup_keywordize = (function frontend$util$hiccup_keywordize(hiccup){
return clojure.walk.postwalk((function (f){
if(((cljs.core.vector_QMARK_(f)) && (typeof cljs.core.first(f) === 'string'))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(f,(0),cljs.core.keyword);
} else {
return f;
}
}),hiccup);
});
frontend.util.chrome_QMARK_ = (function frontend$util$chrome_QMARK_(){
var user_agent = navigator.userAgent;
var vendor = navigator.vendor;
var and__5041__auto__ = frontend.util.safe_re_find(/Chrome/,user_agent);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.safe_re_find(/Google Inc/,vendor);
} else {
return and__5041__auto__;
}
});
frontend.util.indexeddb_check_QMARK_ = (function frontend$util$indexeddb_check_QMARK_(error_handler){
var test_db = "logseq-test-db-foo-bar-baz";
var db = (function (){var and__5041__auto__ = window.indexedDB;
if(cljs.core.truth_(and__5041__auto__)){
return window.indexedDB.open(test_db);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = db;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.util.chrome_QMARK_());
} else {
return and__5041__auto__;
}
})())){
frontend.util.goog$module$goog$object.set(db,"onerror",error_handler);

return frontend.util.goog$module$goog$object.set(db,"onsuccess",(function (){
return window.indexedDB.deleteDatabase(test_db);
}));
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.mac_QMARK_ !== 'undefined')){
} else {
frontend.util.mac_QMARK_ = goog.userAgent.MAC;
}
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.win32_QMARK_ !== 'undefined')){
} else {
frontend.util.win32_QMARK_ = goog.userAgent.WINDOWS;
}
frontend.util.absolute_path_QMARK_ = (function frontend$util$absolute_path_QMARK_(path){
try{return window.apis.isAbsolutePath(path);
}catch (e30982){if((e30982 instanceof Error)){
var _ = e30982;
return module$frontend$utils.win32(path);
} else {
throw e30982;

}
}});
frontend.util.default_content_with_title = (function frontend$util$default_content_with_title(text_format){
var G__30987 = cljs.core.name(text_format);
switch (G__30987) {
case "org":
return "* ";

break;
default:
return "- ";

}
});
frontend.util.get_first_block_by_id = (function frontend$util$get_first_block_by_id(block_id){
if(cljs.core.truth_(block_id)){
var block_id__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id);
if(cljs.core.truth_(frontend.util.uuid_string_QMARK_(block_id__$1))){
return cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName(block_id__$1)));
} else {
return null;
}
} else {
return null;
}
});
frontend.util.url_encode = (function frontend$util$url_encode(string){
var G__30997 = string;
var G__30997__$1 = (((G__30997 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30997));
var G__30997__$2 = (((G__30997__$1 == null))?null:encodeURIComponent(G__30997__$1));
if((G__30997__$2 == null)){
return null;
} else {
return G__30997__$2.replace("+","%20");
}
});
frontend.util.url_decode = (function frontend$util$url_decode(string){
var G__31004 = string;
var G__31004__$1 = (((G__31004 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31004));
if((G__31004__$1 == null)){
return null;
} else {
return decodeURIComponent(G__31004__$1);
}
});
frontend.util.windows_reserved_chars = /[:\\*\\?\"<>|]+/;
frontend.util.include_windows_reserved_chars_QMARK_ = (function frontend$util$include_windows_reserved_chars_QMARK_(s){
return frontend.util.safe_re_find(frontend.util.windows_reserved_chars,s);
});

frontend.util.create_title_property_QMARK_ = (function frontend$util$create_title_property_QMARK_(s){
var and__5041__auto__ = typeof s === 'string';
if(and__5041__auto__){
var or__5043__auto__ = frontend.util.include_windows_reserved_chars_QMARK_(s);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((clojure.string.includes_QMARK_(s,"_")) || (((clojure.string.includes_QMARK_(s,"/")) || (((clojure.string.includes_QMARK_(s,".")) || (((clojure.string.includes_QMARK_(s,"%")) || (clojure.string.includes_QMARK_(s,"#")))))))));
}
} else {
return and__5041__auto__;
}
});
/**
 * Normalize string for searching (loose)
 */
frontend.util.search_normalize = (function frontend$util$search_normalize(s){
return module$node_modules$remove_accents$index(clojure.string.lower_case(s).normalize("NFKC"));
});
/**
 * Sanitize page-name for file name (strict), for file writing.
 */
frontend.util.file_name_sanity = (function frontend$util$file_name_sanity(page_name){
var G__31012 = page_name;
var G__31012__$1 = (((G__31012 == null))?null:logseq.graph_parser.util.page_name_sanity.cljs$core$IFn$_invoke$arity$1(G__31012));
var G__31012__$2 = (((G__31012__$1 == null))?null:clojure.string.replace(G__31012__$1,/[\\#|%]+/,frontend.util.url_encode));
var G__31012__$3 = (((G__31012__$2 == null))?null:clojure.string.replace(G__31012__$2,frontend.util.windows_reserved_chars,frontend.util.url_encode));
var G__31012__$4 = (((G__31012__$3 == null))?null:clojure.string.replace(G__31012__$3,/\//,frontend.util.url_encode));
if((G__31012__$4 == null)){
return null;
} else {
return clojure.string.replace(G__31012__$4,"*","%2A");
}
});
/**
 * Delegate to gp-util to loosely couple app usages to graph-parser
 */
frontend.util.page_name_sanity_lc = logseq.graph_parser.util.page_name_sanity_lc;
frontend.util.safe_page_name_sanity_lc = (function frontend$util$safe_page_name_sanity_lc(s){
if(typeof s === 'string'){
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(s) : frontend.util.page_name_sanity_lc.call(null,s));
} else {
return s;
}
});
frontend.util.get_page_original_name = (function frontend$util$get_page_original_name(page){
var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
});
frontend.util.add_style_BANG_ = (function frontend$util$add_style_BANG_(style){
if((!((style == null)))){
var parent_node = document.head;
var id = "logseq-custom-theme-id";
var old_link_element = document.querySelector(dommy.core.selector(["#",id].join('')));
var style__$1 = ((clojure.string.starts_with_QMARK_(style,"http"))?style:["data:text/css;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(style))].join(''));
if(cljs.core.truth_(old_link_element)){
dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1(old_link_element);
} else {
}

var link = dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link","link",-1769163468)),new cljs.core.Keyword(null,"id","id",-1388402092),id),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"),new cljs.core.Keyword(null,"type","type",1174270348),"text/css"),new cljs.core.Keyword(null,"href","href",-793805698),style__$1),new cljs.core.Keyword(null,"media","media",-1066138403),"all");
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent_node,link);
} else {
return null;
}
});
frontend.util.__GT_platform_shortcut = (function frontend$util$__GT_platform_shortcut(keyboard_shortcut){
var result = (function (){var or__5043__auto__ = keyboard_shortcut;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var result__$1 = clojure.string.replace(result,"left","\u2190");
var result__$2 = clojure.string.replace(result__$1,"right","\u2192");
if(cljs.core.truth_(frontend.util.mac_QMARK_)){
return clojure.string.replace(clojure.string.replace(result__$2,"Ctrl","Cmd"),"Alt","Opt");
} else {
return result__$2;
}
});
frontend.util.remove_common_preceding = (function frontend$util$remove_common_preceding(col1,col2){
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(col1),cljs.core.first(col2))) && (cljs.core.seq(col1)))){
var G__31557 = cljs.core.rest(col1);
var G__31558 = cljs.core.rest(col2);
col1 = G__31557;
col2 = G__31558;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col1,col2], null);
}
break;
}
});
frontend.util.get_file_ext = (function frontend$util$get_file_ext(file){
var and__5041__auto__ = typeof file === 'string';
if(and__5041__auto__){
var and__5041__auto____$1 = clojure.string.includes_QMARK_(file,".");
if(and__5041__auto____$1){
var G__31024 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,/\./));
if((G__31024 == null)){
return null;
} else {
return clojure.string.lower_case(G__31024);
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
frontend.util.get_dir_and_basename = (function frontend$util$get_dir_and_basename(path){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,"/");
var basename = cljs.core.last(parts);
var dir = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.butlast(parts));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,basename], null);
});
frontend.util.get_relative_path = (function frontend$util$get_relative_path(current_file_path,another_file_path){
var directories_f = (function (p1__31026_SHARP_){
return cljs.core.butlast(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__31026_SHARP_,"/"));
});
var parts_1 = directories_f(current_file_path);
var parts_2 = directories_f(another_file_path);
var vec__31027 = frontend.util.remove_common_preceding(parts_1,parts_2);
var parts_1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31027,(0),null);
var parts_2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31027,(1),null);
var another_file_name = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(another_file_path,"/"));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(((cljs.core.seq(parts_1__$1))?cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(parts_1__$1),".."):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["."], null)),parts_2__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [another_file_name], null)], 0)));
});
/**
 * Change special characters into HTML character entities.
 */
frontend.util.escape_html = (function frontend$util$escape_html(text){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;"),"'","&apos;");
});
frontend.util.unescape_html = (function frontend$util$unescape_html(text){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,"&amp;","&"),"&lt;","<"),"&gt;",">"),"&quot;","\""),"&apos;","'");
});
frontend.util.select_highlight_BANG_ = (function frontend$util$select_highlight_BANG_(blocks){
var seq__31042 = cljs.core.seq(blocks);
var chunk__31043 = null;
var count__31044 = (0);
var i__31045 = (0);
while(true){
if((i__31045 < count__31044)){
var block = chunk__31043.cljs$core$IIndexed$_nth$arity$2(null,i__31045);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"selected noselect");


var G__31566 = seq__31042;
var G__31567 = chunk__31043;
var G__31568 = count__31044;
var G__31569 = (i__31045 + (1));
seq__31042 = G__31566;
chunk__31043 = G__31567;
count__31044 = G__31568;
i__31045 = G__31569;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__31042);
if(temp__5720__auto__){
var seq__31042__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31042__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31042__$1);
var G__31573 = cljs.core.chunk_rest(seq__31042__$1);
var G__31574 = c__5565__auto__;
var G__31575 = cljs.core.count(c__5565__auto__);
var G__31576 = (0);
seq__31042 = G__31573;
chunk__31043 = G__31574;
count__31044 = G__31575;
i__31045 = G__31576;
continue;
} else {
var block = cljs.core.first(seq__31042__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"selected noselect");


var G__31577 = cljs.core.next(seq__31042__$1);
var G__31578 = null;
var G__31579 = (0);
var G__31580 = (0);
seq__31042 = G__31577;
chunk__31043 = G__31578;
count__31044 = G__31579;
i__31045 = G__31580;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.util.select_unhighlight_BANG_ = (function frontend$util$select_unhighlight_BANG_(blocks){
var seq__31060 = cljs.core.seq(blocks);
var chunk__31061 = null;
var count__31062 = (0);
var i__31063 = (0);
while(true){
if((i__31063 < count__31062)){
var block = chunk__31061.cljs$core$IIndexed$_nth$arity$2(null,i__31063);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(block,"selected",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["noselect"], 0));


var G__31581 = seq__31060;
var G__31582 = chunk__31061;
var G__31583 = count__31062;
var G__31584 = (i__31063 + (1));
seq__31060 = G__31581;
chunk__31061 = G__31582;
count__31062 = G__31583;
i__31063 = G__31584;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__31060);
if(temp__5720__auto__){
var seq__31060__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31060__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31060__$1);
var G__31587 = cljs.core.chunk_rest(seq__31060__$1);
var G__31588 = c__5565__auto__;
var G__31589 = cljs.core.count(c__5565__auto__);
var G__31590 = (0);
seq__31060 = G__31587;
chunk__31061 = G__31588;
count__31062 = G__31589;
i__31063 = G__31590;
continue;
} else {
var block = cljs.core.first(seq__31060__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(block,"selected",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["noselect"], 0));


var G__31592 = cljs.core.next(seq__31060__$1);
var G__31593 = null;
var G__31594 = (0);
var G__31595 = (0);
seq__31060 = G__31592;
chunk__31061 = G__31593;
count__31062 = G__31594;
i__31063 = G__31595;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.util.keyname = (function frontend$util$keyname(key){
return [cljs.core.namespace(key),"/",cljs.core.name(key)].join('');
});
frontend.util.batch = (function frontend$util$batch(in$,max_time,handler,buf_atom){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_31133){
var state_val_31134 = (state_31133[(1)]);
if((state_val_31134 === (7))){
var inst_31113 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
if(cljs.core.truth_(inst_31113)){
var statearr_31137_31596 = state_31133__$1;
(statearr_31137_31596[(1)] = (8));

} else {
var statearr_31138_31598 = state_31133__$1;
(statearr_31138_31598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (1))){
var inst_31089 = buf_atom;
var inst_31092 = cljs.core.async.timeout(max_time);
var inst_31095 = inst_31089;
var inst_31096 = inst_31092;
var state_31133__$1 = (function (){var statearr_31141 = state_31133;
(statearr_31141[(7)] = inst_31096);

(statearr_31141[(8)] = inst_31095);

return statearr_31141;
})();
var statearr_31142_31599 = state_31133__$1;
(statearr_31142_31599[(2)] = null);

(statearr_31142_31599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (4))){
var inst_31096 = (state_31133[(7)]);
var inst_31108 = (state_31133[(9)]);
var inst_31105 = (state_31133[(2)]);
var inst_31106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31105,(0),null);
var inst_31107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31105,(1),null);
var inst_31108__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31107,inst_31096);
var state_31133__$1 = (function (){var statearr_31143 = state_31133;
(statearr_31143[(10)] = inst_31106);

(statearr_31143[(9)] = inst_31108__$1);

return statearr_31143;
})();
if(inst_31108__$1){
var statearr_31144_31601 = state_31133__$1;
(statearr_31144_31601[(1)] = (5));

} else {
var statearr_31146_31602 = state_31133__$1;
(statearr_31146_31602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (13))){
var inst_31127 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31149_31603 = state_31133__$1;
(statearr_31149_31603[(2)] = inst_31127);

(statearr_31149_31603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (6))){
var inst_31106 = (state_31133[(10)]);
var inst_31111 = (inst_31106 == null);
var state_31133__$1 = state_31133;
var statearr_31150_31604 = state_31133__$1;
(statearr_31150_31604[(2)] = inst_31111);

(statearr_31150_31604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (3))){
var inst_31131 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31133__$1,inst_31131);
} else {
if((state_val_31134 === (12))){
var state_31133__$1 = state_31133;
var statearr_31157_31605 = state_31133__$1;
(statearr_31157_31605[(2)] = null);

(statearr_31157_31605[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (2))){
var inst_31096 = (state_31133[(7)]);
var inst_31101 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31102 = [in$,inst_31096];
var inst_31103 = (new cljs.core.PersistentVector(null,2,(5),inst_31101,inst_31102,null));
var state_31133__$1 = state_31133;
return cljs.core.async.ioc_alts_BANG_(state_31133__$1,(4),inst_31103);
} else {
if((state_val_31134 === (11))){
var inst_31096 = (state_31133[(7)]);
var inst_31095 = (state_31133[(8)]);
var inst_31106 = (state_31133[(10)]);
var inst_31123 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31095,cljs.core.conj,inst_31106);
var tmp31155 = inst_31096;
var tmp31156 = inst_31095;
var inst_31095__$1 = tmp31156;
var inst_31096__$1 = tmp31155;
var state_31133__$1 = (function (){var statearr_31163 = state_31133;
(statearr_31163[(11)] = inst_31123);

(statearr_31163[(7)] = inst_31096__$1);

(statearr_31163[(8)] = inst_31095__$1);

return statearr_31163;
})();
var statearr_31164_31607 = state_31133__$1;
(statearr_31164_31607[(2)] = null);

(statearr_31164_31607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (9))){
var state_31133__$1 = state_31133;
var statearr_31169_31608 = state_31133__$1;
(statearr_31169_31608[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (5))){
var inst_31108 = (state_31133[(9)]);
var state_31133__$1 = state_31133;
var statearr_31172_31612 = state_31133__$1;
(statearr_31172_31612[(2)] = inst_31108);

(statearr_31172_31612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (10))){
var inst_31129 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31174_31614 = state_31133__$1;
(statearr_31174_31614[(2)] = inst_31129);

(statearr_31174_31614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (8))){
var inst_31095 = (state_31133[(8)]);
var inst_31115 = cljs.core.async.timeout(max_time);
var inst_31116 = cljs.core.deref(inst_31095);
var inst_31117 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_31116) : handler.call(null,inst_31116));
var inst_31118 = cljs.core.PersistentVector.EMPTY;
var inst_31119 = cljs.core.reset_BANG_(inst_31095,inst_31118);
var tmp31171 = inst_31095;
var inst_31095__$1 = tmp31171;
var inst_31096 = inst_31115;
var state_31133__$1 = (function (){var statearr_31180 = state_31133;
(statearr_31180[(12)] = inst_31119);

(statearr_31180[(7)] = inst_31096);

(statearr_31180[(8)] = inst_31095__$1);

(statearr_31180[(13)] = inst_31117);

return statearr_31180;
})();
var statearr_31184_31618 = state_31133__$1;
(statearr_31184_31618[(2)] = null);

(statearr_31184_31618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$util$batch_$_state_machine__27573__auto__ = null;
var frontend$util$batch_$_state_machine__27573__auto____0 = (function (){
var statearr_31189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31189[(0)] = frontend$util$batch_$_state_machine__27573__auto__);

(statearr_31189[(1)] = (1));

return statearr_31189;
});
var frontend$util$batch_$_state_machine__27573__auto____1 = (function (state_31133){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_31133);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e31191){var ex__27576__auto__ = e31191;
var statearr_31193_31620 = state_31133;
(statearr_31193_31620[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_31133[(4)]))){
var statearr_31194_31621 = state_31133;
(statearr_31194_31621[(1)] = cljs.core.first((state_31133[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31622 = state_31133;
state_31133 = G__31622;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$util$batch_$_state_machine__27573__auto__ = function(state_31133){
switch(arguments.length){
case 0:
return frontend$util$batch_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$util$batch_$_state_machine__27573__auto____1.call(this,state_31133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$util$batch_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$util$batch_$_state_machine__27573__auto____0;
frontend$util$batch_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$util$batch_$_state_machine__27573__auto____1;
return frontend$util$batch_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_31202 = f__27596__auto__();
(statearr_31202[(6)] = c__27595__auto__);

return statearr_31202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.util.trace_BANG_ = (function frontend$util$trace_BANG_(){
return console.trace();
});
frontend.util.remove_first = (function frontend$util$remove_first(pred,coll){
return (function frontend$util$remove_first_$_inner(coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__5720__auto__ = cljs.core.seq(coll__$1);
if(temp__5720__auto__){
var vec__31203 = temp__5720__auto__;
var seq__31204 = cljs.core.seq(vec__31203);
var first__31205 = cljs.core.first(seq__31204);
var seq__31204__$1 = cljs.core.next(seq__31204);
var x = first__31205;
var xs = seq__31204__$1;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return xs;
} else {
return cljs.core.cons(x,frontend$util$remove_first_$_inner(xs));
}
} else {
return null;
}
}),null,null));
})(coll);
});
frontend.util.pprint = cljs.pprint.pprint;
frontend.util.backward_kill_word = (function frontend$util$backward_kill_word(input){
var val = input.value;
var current = frontend.util.get_selection_start(input);
var prev = (function (){var or__5043__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(val," ",(current - (1))),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",(current - (1)))], null)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var idx = (((prev === (0)))?(0):((function (){var idx = prev;
while(true){
if(cljs.core.truth_((function (){var G__31219 = frontend.util.nth_safe(val,idx);
var fexpr__31218 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"\n",null], null), null);
return (fexpr__31218.cljs$core$IFn$_invoke$arity$1 ? fexpr__31218.cljs$core$IFn$_invoke$arity$1(G__31219) : fexpr__31218.call(null,G__31219));
})())){
var G__31626 = (idx - (1));
idx = G__31626;
continue;
} else {
return idx;
}
break;
}
})() + (1)));
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4(input,"",idx,current);
});
frontend.util.forward_kill_word = (function frontend$util$forward_kill_word(input){
var val = input.value;
var current = frontend.util.get_selection_start(input);
var current__$1 = (function (){var idx = current;
while(true){
if(cljs.core.truth_((function (){var G__31225 = frontend.util.nth_safe(val,idx);
var fexpr__31224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"\n",null], null), null);
return (fexpr__31224.cljs$core$IFn$_invoke$arity$1 ? fexpr__31224.cljs$core$IFn$_invoke$arity$1(G__31225) : fexpr__31224.call(null,G__31225));
})())){
var G__31629 = (idx + (1));
idx = G__31629;
continue;
} else {
return idx;
}
break;
}
})();
var idx = (function (){var or__5043__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(val," ",current__$1),clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",current__$1)], null)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.count(val);
}
})();
return frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4(input,"",current__$1,(idx + (1)));
});
frontend.util.fix_open_external_with_shift_BANG_ = (function frontend$util$fix_open_external_with_shift_BANG_(e){
if(cljs.core.truth_((function (){var and__5041__auto__ = e.shiftKey;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = frontend.util.win32_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto____$2)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(e.target.nodeName),"a")) && (clojure.string.starts_with_QMARK_(e.target.href,"file:")));
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return e.preventDefault();
} else {
return null;
}
});
/**
 * Like react classnames utility:
 * 
 *   ```
 *    [:div {:class (classnames [:a :b {:c true}])}
 *   ```
 *   
 */
frontend.util.classnames = (function frontend$util$classnames(args){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__31233_SHARP_){
if(cljs.core.map_QMARK_(p1__31233_SHARP_)){
var iter__5520__auto__ = (function frontend$util$classnames_$_iter__31253(s__31254){
return (new cljs.core.LazySeq(null,(function (){
var s__31254__$1 = s__31254;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__31254__$1);
if(temp__5720__auto__){
var s__31254__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31254__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__31254__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__31257 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__31256 = (0);
while(true){
if((i__31256 < size__5519__auto__)){
var vec__31262 = cljs.core._nth(c__5518__auto__,i__31256);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31262,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31262,(1),null);
cljs.core.chunk_append(b__31257,(cljs.core.truth_(v)?cljs.core.name(k):null));

var G__31633 = (i__31256 + (1));
i__31256 = G__31633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31257),frontend$util$classnames_$_iter__31253(cljs.core.chunk_rest(s__31254__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31257),null);
}
} else {
var vec__31267 = cljs.core.first(s__31254__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31267,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31267,(1),null);
return cljs.core.cons((cljs.core.truth_(v)?cljs.core.name(k):null),frontend$util$classnames_$_iter__31253(cljs.core.rest(s__31254__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(p1__31233_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(p1__31233_SHARP_)], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)));
});
frontend.util.get_dom_top = (function frontend$util$get_dom_top(node){
return frontend.util.goog$module$goog$object.get(node.getBoundingClientRect(),"top");
});
frontend.util.sort_by_height = (function frontend$util$sort_by_height(elements){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){
return (frontend.util.get_dom_top(x) < frontend.util.get_dom_top(y));
}),elements);
});
frontend.util.calc_delta_rect_offset = (function frontend$util$calc_delta_rect_offset(target,container){
var target_rect = cljs_bean.core.__GT_clj(target.getBoundingClientRect().toJSON());
var viewport_rect = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),container.clientWidth,new cljs.core.Keyword(null,"height","height",1025178622),container.clientHeight], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(viewport_rect) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(target_rect)),new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(viewport_rect) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(target_rect))], null);
});
frontend.util.regex_char_esc_smap = (function (){var esc_chars = "{}[]()&^%$#!?*.+|\\";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31280_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31280_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Escape all regex meta chars in text.
 */
frontend.util.regex_escape = (function frontend$util$regex_escape(text){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.replace.cljs$core$IFn$_invoke$arity$2(frontend.util.regex_char_esc_smap,text));
});
frontend.util.meta_key_name = (function frontend$util$meta_key_name(){
if(cljs.core.truth_(frontend.util.mac_QMARK_)){
return "Cmd";
} else {
return "Ctrl";
}
});
frontend.util.meta_key_QMARK_ = (function frontend$util$meta_key_QMARK_(e){
if(cljs.core.truth_(frontend.util.mac_QMARK_)){
return frontend.util.goog$module$goog$object.get(e,"metaKey");
} else {
return frontend.util.goog$module$goog$object.get(e,"ctrlKey");
}
});
frontend.util.right_click_QMARK_ = (function frontend$util$right_click_QMARK_(e){
var which = frontend.util.goog$module$goog$object.get(e,"which");
var button = frontend.util.goog$module$goog$object.get(e,"button");
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(which,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(2))));
});
frontend.util.keyboard_height = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.util.scroll_editor_cursor = (function frontend$util$scroll_editor_cursor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31640 = arguments.length;
var i__5767__auto___31641 = (0);
while(true){
if((i__5767__auto___31641 < len__5766__auto___31640)){
args__5772__auto__.push((arguments[i__5767__auto___31641]));

var G__31642 = (i__5767__auto___31641 + (1));
i__5767__auto___31641 = G__31642;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$variadic = (function (el,p__31298){
var map__31299 = p__31298;
var map__31299__$1 = cljs.core.__destructure_map(map__31299);
var to_vw_one_quarter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31299__$1,new cljs.core.Keyword(null,"to-vw-one-quarter?","to-vw-one-quarter?",1745595255));
if(cljs.core.truth_((function (){var and__5041__auto__ = el;
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.mobile_QMARK_;
}
} else {
return and__5041__auto__;
}
})())){
var box_rect = el.getBoundingClientRect();
var box_top = box_rect.top;
var box_bottom = box_rect.bottom;
var header_height = goog.dom.getElementByClass("cp__header").clientHeight;
var main_node = frontend.util.app_scroll_container_node();
var scroll_top = main_node.scrollTop;
var current_pos = frontend.util.get_selection_start(el);
var mock_text = (function (){var G__31308 = goog.dom.getElement("mock-text");
var G__31308__$1 = (((G__31308 == null))?null:goog.dom.getChildren(G__31308));
var G__31308__$2 = (((G__31308__$1 == null))?null:cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(G__31308__$1));
if((G__31308__$2 == null)){
return null;
} else {
return frontend.util.nth_safe(G__31308__$2,current_pos);
}
})();
var offset_top = (function (){var and__5041__auto__ = mock_text;
if(cljs.core.truth_(and__5041__auto__)){
return mock_text.offsetTop;
} else {
return and__5041__auto__;
}
})();
var offset_height = (function (){var and__5041__auto__ = mock_text;
if(cljs.core.truth_(and__5041__auto__)){
return mock_text.offsetHeight;
} else {
return and__5041__auto__;
}
})();
var cursor_y = (cljs.core.truth_(offset_top)?(((offset_top + box_top) + offset_height) + (2)):box_bottom);
var vw_height = (function (){var or__5043__auto__ = window.visualViewport.height;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return document.documentElement.clientHeight;
}
})();
var scroll = (cursor_y - (vw_height - (cljs.core.deref(frontend.util.keyboard_height) + (40))));
if(cljs.core.truth_((function (){var and__5041__auto__ = to_vw_one_quarter_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (cursor_y > (vw_height * 0.4));
} else {
return and__5041__auto__;
}
})())){
return (main_node.scrollTop = (scroll_top + (cursor_y - (vw_height / (4)))));
} else {
if((((cursor_y < ((header_height + offset_height) + (4)))) && ((cursor_y >= header_height)))){
return main_node.scrollBy(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),(- (offset_height + (4)))], null)));
} else {
if((cursor_y < header_height)){
var _ = el.scrollIntoView(true);
var main_node__$1 = frontend.util.app_scroll_container_node();
var scroll_top__$1 = main_node__$1.scrollTop;
return (main_node__$1.scrollTop = (scroll_top__$1 - (vw_height / (4))));
} else {
if((scroll > (0))){
return (main_node.scrollTop = (scroll_top + scroll));
} else {
return null;

}
}
}
}
} else {
return null;
}
}));

(frontend.util.scroll_editor_cursor.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.util.scroll_editor_cursor.cljs$lang$applyTo = (function (seq31291){
var G__31292 = cljs.core.first(seq31291);
var seq31291__$1 = cljs.core.next(seq31291);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31292,seq31291__$1);
}));

frontend.util.sm_breakpoint_QMARK_ = (function frontend$util$sm_breakpoint_QMARK_(){
return (document.documentElement.offsetWidth < (640));
});
/**
 * Check if keydown event is a composing (IME) event.
 *    Ignore the IME process by default.
 */
frontend.util.event_is_composing_QMARK_ = (function frontend$util$event_is_composing_QMARK_(var_args){
var G__31321 = arguments.length;
switch (G__31321) {
case 1:
return frontend.util.event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return frontend.util.event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2(e,false);
}));

(frontend.util.event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (e,include_process_QMARK_){
var event_composing_QMARK_ = frontend.util.goog$module$goog$object.getValueByKeys(e,"event_","isComposing");
if(cljs.core.truth_(include_process_QMARK_)){
var or__5043__auto__ = event_composing_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.goog$module$goog$object.get(e,"keyCode"),(229))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.goog$module$goog$object.get(e,"key"),"Process")));
}
} else {
return event_composing_QMARK_;
}
}));

(frontend.util.event_is_composing_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Check if onchange event of Input is a composing (IME) event.
 *     Always ignore the IME process.
 */
frontend.util.onchange_event_is_composing_QMARK_ = (function frontend$util$onchange_event_is_composing_QMARK_(e){
return frontend.util.goog$module$goog$object.getValueByKeys(e,"nativeEvent","isComposing");
});
frontend.util.open_url = (function frontend$util$open_url(url){
var route_QMARK_ = ((clojure.string.starts_with_QMARK_(url,clojure.string.replace(location.href,location.hash,""))) || (clojure.string.starts_with_QMARK_(url,"#")));
if(cljs.core.truth_((function (){var and__5041__auto__ = (!(route_QMARK_));
if(and__5041__auto__){
return frontend.util.electron_QMARK_();
} else {
return and__5041__auto__;
}
})())){
return window.apis.openExternal(url);
} else {
return (window.location.href = url);
}
});
frontend.util.collapsed_QMARK_ = (function frontend$util$collapsed_QMARK_(block){
return new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block);
});
frontend.util.atom_QMARK_ = (function frontend$util$atom_QMARK_(v){
return (v instanceof cljs.core.Atom);
});
frontend.util.time_ago = (function frontend$util$time_ago(time){
var units = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"second",new cljs.core.Keyword(null,"limit","limit",-1355822363),(60),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"minute",new cljs.core.Keyword(null,"limit","limit",-1355822363),(3600),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"hour",new cljs.core.Keyword(null,"limit","limit",-1355822363),(86400),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(3600)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"day",new cljs.core.Keyword(null,"limit","limit",-1355822363),(604800),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(86400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"week",new cljs.core.Keyword(null,"limit","limit",-1355822363),(2629743),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(604800)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"month",new cljs.core.Keyword(null,"limit","limit",-1355822363),(31556926),new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(2629743)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"year",new cljs.core.Keyword(null,"limit","limit",-1355822363),Number.MAX_SAFE_INTEGER,new cljs.core.Keyword(null,"in-second","in-second",-1351007453),(31556926)], null)], null);
var diff = cljs_time.core.in_seconds(cljs_time.core.interval(time,cljs_time.core.now()));
if((diff < (5))){
return "just now";
} else {
var unit = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__31330_SHARP_){
return (((diff >= new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__31330_SHARP_))) || (cljs.core.not(new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(p1__31330_SHARP_))));
}),units));
return (function (p1__31331_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31331_SHARP_)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(unit)),(((p1__31331_SHARP_ > (1)))?"s":null)," ago"].join('');
})((Math.floor((diff / new cljs.core.Keyword(null,"in-second","in-second",-1351007453).cljs$core$IFn$_invoke$arity$1(unit))) | (0)));
}
});

//# sourceMappingURL=frontend.util.js.map
