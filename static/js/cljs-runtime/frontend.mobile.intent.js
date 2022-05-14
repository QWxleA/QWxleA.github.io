goog.provide('frontend.mobile.intent');
var module$node_modules$$capacitor$filesystem$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$filesystem$dist$plugin_cjs", {});
var module$node_modules$send_intent$dist$esm$index=shadow.js.require("module$node_modules$send_intent$dist$esm$index", {});
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
frontend.mobile.intent.handle_received_text = (function frontend$mobile$intent$handle_received_text(result){
var map__70911 = result;
var map__70911__$1 = cljs.core.__destructure_map(map__70911);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70911__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70911__$1,new cljs.core.Keyword(null,"url","url",276297046));
var page = (function (){var or__4253__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return clojure.string.lower_case(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0());
}
})();
var format = (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(page) : frontend.db.get_page_format.call(null,page));
var time = frontend.date.get_current_time();
var url__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = logseq.graph_parser.mldoc.link_QMARK_(format,title);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(url);
} else {
return and__4251__auto__;
}
})())?title:url);
var text = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url__$1,title))?null:title);
var vec__70912 = (((function (){var or__4253__auto__ = logseq.graph_parser.mldoc.link_QMARK_(format,url__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not(url__$1);
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,url__$1], null):clojure.string.split.cljs$core$IFn$_invoke$arity$2(url__$1,"\"\n"));
var text__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70912,(0),null);
var url__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70912,(1),null);
var text__$2 = (function (){var G__70919 = text__$1;
if((G__70919 == null)){
return null;
} else {
return clojure.string.replace(G__70919,/^\"/,"");
}
})();
var url__$3 = (function (){var and__4251__auto__ = url__$2;
if(cljs.core.truth_(and__4251__auto__)){
if(((clojure.string.includes_QMARK_(url__$2,"youtube.com")) || (clojure.string.includes_QMARK_(url__$2,"youtu.be")))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{youtube %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url__$2], 0));
} else {
if(((clojure.string.includes_QMARK_(url__$2,"twitter.com")) && (clojure.string.includes_QMARK_(url__$2,"status")))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{twitter %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url__$2], 0));
} else {
if(cljs.core.truth_(text__$2)){
return frontend.config.link_format(format,text__$2,url__$2);
} else {
return url__$2;
}

}
}
} else {
return and__4251__auto__;
}
})();
var template = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quick-capture-templates","quick-capture-templates",-1488741596),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"**{time}** [[quick capture]]: {text} {url}");
var values = clojure.string.replace(clojure.string.replace(clojure.string.replace(template,"{time}",time),"{text}",(function (){var or__4253__auto__ = text__$2;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()),"{url}",(function (){var or__4253__auto__ = url__$3;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
if(cljs.core.truth_(frontend.state.get_edit_block())){
return frontend.state.append_current_edit_content_BANG_(values);
} else {
return frontend.handler.editor.api_insert_new_block_BANG_(values,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null));
}
});
frontend.mobile.intent.embed_asset_file = (function frontend$mobile$intent$embed_asset_file(url,format){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$path$path.basename(url),(function (basename){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.name.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.name.cljs$core$IFn$_invoke$arity$1(basename) : frontend.util.node_path.name.call(null,basename)),(function (label){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.date.get_current_time(),(function (time){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_asset_path(basename),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.copy(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),url,new cljs.core.Keyword(null,"to","to",192099007),path], null))),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.intent",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"copy-file-error","copy-file-error",-264206453),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);
})),(function (_file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("../assets/%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([basename], 0)),(function (url__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_asset_file_link(format,url__$1,label,true),(function (url__$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quick-capture-templates","quick-capture-templates",-1488741596),new cljs.core.Keyword(null,"media","media",-1066138403)], null),"**{time}** [[quick capture]]: {url}"),(function (template){
return promesa.protocols._promise(clojure.string.replace(clojure.string.replace(template,"{time}",time),"{url}",(function (){var or__4253__auto__ = url__$2;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
frontend.mobile.intent.embed_text_file = (function frontend$mobile$intent$embed_text_file(url,title){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.date.get_current_time(),(function (time){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var G__70940 = (function (){var or__4253__auto__ = title;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return module$node_modules$path$path.basename(url);
}
})();
var G__70940__$1 = (((G__70940 == null))?null:decodeURIComponent(G__70940));
if((G__70940__$1 == null)){
return null;
} else {
return (frontend.util.node_path.name.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.name.cljs$core$IFn$_invoke$arity$1(G__70940__$1) : frontend.util.node_path.name.call(null,G__70940__$1));
}
})(),(function (title__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$path$path.join(frontend.config.get_repo_dir(frontend.state.get_current_repo()),frontend.config.get_pages_directory(),module$node_modules$path$path.basename(url)),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.copy(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),url,new cljs.core.Keyword(null,"to","to",192099007),path], null))),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.intent",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"copy-file-error","copy-file-error",-264206453),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),87], null)),null);
})),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title__$1], 0)),(function (url__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quick-capture-templates","quick-capture-templates",-1488741596),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"**{time}** [[quick capture]]: {url}"),(function (template){
return promesa.protocols._promise(clojure.string.replace(clojure.string.replace(template,"{time}",time),"{url}",(function (){var or__4253__auto__ = url__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()));
}));
}));
}));
}));
}));
}));
}));
});
frontend.mobile.intent.handle_received_media = (function frontend$mobile$intent$handle_received_media(result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(result,(function (p__70970){
var map__70971 = p__70970;
var map__70971__$1 = cljs.core.__destructure_map(map__70971);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70971__$1,new cljs.core.Keyword(null,"url","url",276297046));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return clojure.string.lower_case(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0());
}
})(),(function (page){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(page) : frontend.db.get_page_format.call(null,page)),(function (format){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.mobile.intent.embed_asset_file(url,format),(function (content){
return promesa.protocols._promise((cljs.core.truth_(frontend.state.get_edit_block())?frontend.state.append_current_edit_content_BANG_(content):frontend.handler.editor.api_insert_new_block_BANG_(content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null))));
}));
}));
}));
}));
}));
});
frontend.mobile.intent.handle_received_application = (function frontend$mobile$intent$handle_received_application(result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(result,(function (p__70982){
var map__70983 = p__70982;
var map__70983__$1 = cljs.core.__destructure_map(map__70983);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70983__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70983__$1,new cljs.core.Keyword(null,"url","url",276297046));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70983__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return clojure.string.lower_case(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0());
}
})(),(function (page){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(page) : frontend.db.get_page_format.call(null,page)),(function (format){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(type,"/")),(function (application_type){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((frontend.config.mldoc_support_QMARK_(application_type))?frontend.mobile.intent.embed_text_file(url,title):((cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(frontend.config.doc_formats(),frontend.config.media_formats),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(application_type)))?frontend.mobile.intent.embed_asset_file(url,format):frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(application_type)," file has not been supported. You can report it on "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/logseq/issues",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Github"], null),". We will look into it soon."], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false)
)),(function (content){
return promesa.protocols._promise((cljs.core.truth_(frontend.state.get_edit_block())?frontend.state.append_current_edit_content_BANG_(content):frontend.handler.editor.api_insert_new_block_BANG_(content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null))));
}));
}));
}));
}));
}));
}));
});
frontend.mobile.intent.decode_received_result = (function frontend$mobile$intent$decode_received_result(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function frontend$mobile$intent$decode_received_result_$_iter__71006(s__71007){
return (new cljs.core.LazySeq(null,(function (){
var s__71007__$1 = s__71007;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__71007__$1);
if(temp__5720__auto__){
var s__71007__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71007__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__71007__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__71009 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__71008 = (0);
while(true){
if((i__71008 < size__4651__auto__)){
var vec__71015 = cljs.core._nth(c__4650__auto__,i__71008);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71015,(1),null);
cljs.core.chunk_append(b__71009,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.vector_QMARK_(v))?cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.mobile.intent.decode_received_result,v)):((clojure.string.blank_QMARK_(v))?null:(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?decodeURIComponent(v):v)
))], null));

var G__71113 = (i__71008 + (1));
i__71008 = G__71113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71009),frontend$mobile$intent$decode_received_result_$_iter__71006(cljs.core.chunk_rest(s__71007__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71009),null);
}
} else {
var vec__71023 = cljs.core.first(s__71007__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71023,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71023,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.vector_QMARK_(v))?cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.mobile.intent.decode_received_result,v)):((clojure.string.blank_QMARK_(v))?null:(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?decodeURIComponent(v):v)
))], null),frontend$mobile$intent$decode_received_result_$_iter__71006(cljs.core.rest(s__71007__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(m);
})());
});
frontend.mobile.intent.handle_received = (function frontend$mobile$intent$handle_received(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(module$node_modules$send_intent$dist$esm$index.SendIntent.checkSendIntentReceived(),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.intent",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intent-received-error","intent-received-error",2097503730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),150], null)),null);
})),(function (received){
return promesa.protocols._promise((cljs.core.truth_(received)?(function (){var result = frontend.mobile.intent.decode_received_result(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(received,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
var temp__5720__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(temp__5720__auto__)){
var type = temp__5720__auto__;
if(clojure.string.starts_with_QMARK_(type,"text/")){
return frontend.mobile.intent.handle_received_text(result);
} else {
if(((clojure.string.starts_with_QMARK_(type,"image/")) || (((clojure.string.starts_with_QMARK_(type,"video/")) || (clojure.string.starts_with_QMARK_(type,"audio/")))))){
return frontend.mobile.intent.handle_received_media(result);
} else {
if(clojure.string.starts_with_QMARK_(type,"application/")){
return frontend.mobile.intent.handle_received_application(result);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Parsing current shared content are not supported. Please report the following codes on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/logseq/issues/new?labels=from:in-app&template=bug_report.yaml",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Github"], null),". We will look into it soon.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__71049_71114 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__71050_71115 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__71051_71116 = true;
var _STAR_print_fn_STAR__temp_val__71052_71117 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__71051_71116);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__71052_71117);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(result);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__71050_71115);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__71049_71114);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()], null)], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

}
}
}
} else {
return null;
}
})():null));
}));
}));
});

//# sourceMappingURL=frontend.mobile.intent.js.map
