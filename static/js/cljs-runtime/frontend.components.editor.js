goog.provide('frontend.components.editor');
frontend.components.editor.commands = rum.core.lazy_build(rum.core.build_defc,(function (id,format){
var matched = frontend.util.react(frontend.commands._STAR_matched_commands);
if(cljs.core.truth_(frontend.util.react(frontend.commands._STAR_show_commands))){
return frontend.ui.auto_complete(matched,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-group-name","get-group-name",-160379696),(function (item){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.commands._STAR_first_command_group,cljs.core.first(item));
}),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (item){
var command_name = cljs.core.first(item);
var command_doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,(2));
var doc = (cljs.core.truth_(frontend.state.show_command_doc_QMARK_())?command_doc:null);
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),doc], null),command_name], null);
} else {
if(cljs.core.vector_QMARK_(doc)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.has-help","div.has-help",152274947),command_name,frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),doc,new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"fixed-position?","fixed-position?",-918460562),true,new cljs.core.Keyword(null,"position","position",-2011731912),"right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.components.svg.help_circle.cljs$core$IFn$_invoke$arity$0()], null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),command_name], null);

}
}
}),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (chosen_item){
var command = cljs.core.first(chosen_item);
cljs.core.reset_BANG_(frontend.commands._STAR_current_command,command);

var command_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,matched),command);
var restore_slash_QMARK_ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Yesterday",null,"Tomorrow",null,"Today",null,"Current time",null], null), null),command)) || ((((!(cljs.core.fn_QMARK_(command_steps)))) && ((((!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,command_steps)),new cljs.core.Keyword("editor","input","editor/input",-288966104))))) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["Deadline",null,"Template",null,"Scheduled",null,"Date picker",null,"Upload an image",null], null), null),command)))))))));
frontend.handler.editor.insert_command_BANG_(id,command_steps,format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"restore?","restore?",1172240305),restore_slash_QMARK_], null));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("editor","command-triggered","editor/command-triggered",32338257),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),command], null)], null)], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/commands");
frontend.components.editor.block_commands = rum.core.lazy_build(rum.core.build_defc,(function (id,format){
if(cljs.core.truth_(frontend.util.react(frontend.commands._STAR_show_block_commands))){
var matched = frontend.util.react(frontend.commands._STAR_matched_block_commands);
return frontend.ui.auto_complete(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,matched),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (chosen){
return frontend.handler.editor.insert_command_BANG_(id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,matched),chosen),format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.angle_bracket], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/block-commands");
frontend.components.editor.in_sidebar_QMARK_ = (function frontend$components$editor$in_sidebar_QMARK_(el){
return cljs.core.not(document.getElementById("left-container").contains(el));
});
/**
 * Embedded page searching popup
 */
frontend.components.editor.page_search = rum.core.lazy_build(rum.core.build_defc,(function (id,format){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-page-search?","editor/show-page-search?",653141106)))){
var pos = frontend.state.get_editor_last_pos();
var input = goog.dom.getElement(id);
if(cljs.core.truth_(input)){
var current_pos = frontend.util.cursor.pos(input);
var edit_content = (function (){var or__4253__auto__ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
var sidebar_QMARK_ = frontend.components.editor.in_sidebar_QMARK_(input);
var q = (function (){var or__4253__auto__ = cljs.core.deref(frontend.handler.editor._STAR_selected_text);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-page-search-hashtag?","editor/show-page-search-hashtag?",1934478614)))?logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (((cljs.core.count(edit_content) > current_pos))?logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return "";
}
}
}
})();
var matched_pages = ((clojure.string.blank_QMARK_(q))?null:frontend.handler.editor.get_matched_pages(q));
var matched_pages__$1 = ((cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc,matched_pages)),frontend.util.page_name_sanity_lc(clojure.string.trim(q))))?matched_pages:((clojure.string.blank_QMARK_(q))?null:((cljs.core.empty_QMARK_(matched_pages))?cljs.core.cons(["New page: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join(''),matched_pages):(function (){var matched_pages__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,matched_pages);
var matched_pages__$2 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not(goog.string.caseInsensitiveStartsWith(m,q)),cljs.core.count(m)], null);
}),matched_pages__$1);
if(cljs.core.truth_(goog.string.caseInsensitiveStartsWith(cljs.core.first(matched_pages__$2),q))){
return cljs.core.cons(cljs.core.first(matched_pages__$2),cljs.core.cons(["New page: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join(''),cljs.core.rest(matched_pages__$2)));
} else {
return cljs.core.cons(["New page: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join(''),matched_pages__$2);
}
})()
)));
return frontend.ui.auto_complete(matched_pages__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),frontend.handler.page.on_chosen_handler(input,id,q,pos,format),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (){
return frontend.handler.page.page_not_exists_handler(input,id,q,current_pos);
}),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (page_name,chosen_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.preview-trigger-wrapper","div.preview-trigger-wrapper",-738625017),frontend.components.block.page_preview_trigger(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.search.highlight_exact_query(page_name,q)], null),new cljs.core.Keyword(null,"open?","open?",1238443125),chosen_QMARK_,new cljs.core.Keyword(null,"manual?","manual?",1839586876),true,new cljs.core.Keyword(null,"fixed-position?","fixed-position?",-918460562),true,new cljs.core.Keyword(null,"tippy-distance","tippy-distance",1779929100),(24),new cljs.core.Keyword(null,"tippy-position","tippy-position",765440303),((sidebar_QMARK_)?"left":"right")], null),page_name)], null);
}),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500.text-sm.px-4.py-2","div.text-gray-500.text-sm.px-4.py-2",1407624634),"Search for a page"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.handler.editor._STAR_selected_text,null);

return state;
})], null)], null),"frontend.components.editor/page-search");
frontend.components.editor.block_search_auto_complete = rum.core.lazy_build(rum.core.build_defcs,(function (state,_edit_block,input,id,q,format){
var result = rum.core.react(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.editor","result","frontend.components.editor/result",-1063532914)));
var chosen_handler = frontend.handler.editor.block_on_chosen_handler(input,id,q,format);
var non_exist_block_handler = frontend.handler.editor.block_non_exist_handler(input);
if(cljs.core.truth_(result)){
return frontend.ui.auto_complete(result,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),chosen_handler,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),non_exist_block_handler,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500.pl-4.pr-4","div.text-gray-500.pl-4.pr-4",10934189),"Search for a block"], null),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (p__70216){
var map__70217 = p__70216;
var map__70217__$1 = cljs.core.__destructure_map(map__70217);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70217__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70217__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var page__$1 = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
})();
var repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var format__$1 = (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(page__$1) : frontend.db.get_page_format.call(null,page__$1));
var block = frontend.db.model.query_block_by_uuid(uuid);
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".py-2",".py-2",-1026433155),frontend.components.search.block_search_result_item(repo,uuid,format__$1,content,q,new cljs.core.Keyword(null,"block","block",664686210))], null);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.editor","result","frontend.components.editor/result",-1063532914),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
var result_70341 = new cljs.core.Keyword("frontend.components.editor","result","frontend.components.editor/result",-1063532914).cljs$core$IFn$_invoke$arity$1(state);
var vec__70219_70342 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var edit_block_70343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70219_70342,(0),null);
var __70344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70219_70342,(1),null);
var __70345__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70219_70342,(2),null);
var q_70346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70219_70342,(3),null);
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((clojure.string.blank_QMARK_(q_70346))?null:frontend.handler.editor.get_matched_blocks(q_70346,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block_70343))),(function (matched_blocks){
return promesa.protocols._promise(cljs.core.reset_BANG_(result_70341,matched_blocks));
}));
}));

return state;
})], null)], null),"frontend.components.editor/block-search-auto-complete");
frontend.components.editor.block_search = rum.core.lazy_build(rum.core.build_defcs,(function (state,id,_format){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-block-search?","editor/show-block-search?",706500659)))){
var pos = frontend.state.get_editor_last_pos();
var input = goog.dom.getElement(id);
var vec__70222 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70222,(0),null);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70222,(1),null);
var current_pos = frontend.util.cursor.pos(input);
var edit_content = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id__$1], null));
var edit_block = frontend.state.get_edit_block();
var q = (function (){var or__4253__auto__ = cljs.core.deref(frontend.handler.editor._STAR_selected_text);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if((cljs.core.count(edit_content) > current_pos)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos);
} else {
return null;
}
}
})();
if(cljs.core.truth_(input)){
return frontend.components.editor.block_search_auto_complete(edit_block,input,id__$1,q,format);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.handler.editor._STAR_selected_text,null);

frontend.state.clear_search_result_BANG_();

return state;
})], null)], null),"frontend.components.editor/block-search");
frontend.components.editor.template_search = rum.core.lazy_build(rum.core.build_defc,(function (id,_format){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-template-search?","editor/show-template-search?",1482009583)))){
var pos = frontend.state.get_editor_last_pos();
var input = goog.dom.getElement(id);
if(cljs.core.truth_(input)){
var current_pos = frontend.util.cursor.pos(input);
var edit_content = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id], null));
var q = (function (){var or__4253__auto__ = (((cljs.core.count(edit_content) >= current_pos))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
var matched_templates = frontend.handler.editor.get_matched_templates(q);
var non_exist_handler = (function (_state){
return frontend.state.set_editor_show_template_search_BANG_(false);
});
return frontend.ui.auto_complete(matched_templates,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),frontend.handler.editor.template_on_chosen_handler(id),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),non_exist_handler,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500.px-4.py-2.text-sm","div.text-gray-500.px-4.py-2.text-sm",1030522825),"Search for a template"], null),new cljs.core.Keyword(null,"item-render","item-render",253627868),(function (p__70233){
var vec__70234 = p__70233;
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70234,(0),null);
var _block_db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70234,(1),null);
return template;
}),new cljs.core.Keyword(null,"class","class",-2030961996),"black"], null));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.handler.editor._STAR_selected_text,null);

return state;
})], null)], null),"frontend.components.editor/template-search");
frontend.components.editor.mobile_bar_indent_outdent = rum.core.lazy_build(rum.core.build_defc,(function (indent_QMARK_,icon){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onMouseDown':(function (e){
frontend.util.stop(e);

return frontend.handler.editor.indent_outdent(indent_QMARK_);
}),'className':"bottom-action"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$2(icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null)))])]);
}),null,"frontend.components.editor/mobile-bar-indent-outdent");
frontend.components.editor.mobile_bar_icons_keywords = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.Keyword(null,"parentheses","parentheses",17909609),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a-b","a-b",-1660985764),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"brand-youtube","brand-youtube",-14943036),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"rotate-clockwise","rotate-clockwise",-1414020258),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"italic","italic",32599196),new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804),new cljs.core.Keyword(null,"paint","paint",1531901299)], null);
frontend.components.editor.mobile_bar_commands_stats = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),(0)], null)], null);
}),frontend.components.editor.mobile_bar_icons_keywords)));
frontend.components.editor.set_command_stats = (function frontend$components$editor$set_command_stats(icon){
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(icon);
var counts = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.editor.mobile_bar_commands_stats),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"counts","counts",234305892)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.editor.mobile_bar_commands_stats,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"counts","counts",234305892)], null),(counts + (1)));

return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("mobile","toolbar-stats","mobile/toolbar-stats",1960694079),cljs.core.deref(frontend.components.editor.mobile_bar_commands_stats));
});
frontend.components.editor.mobile_bar_command = rum.core.lazy_build(rum.core.build_defc,(function() { 
var G__70350__delegate = function (command_handler,icon,p__70237){
var vec__70238 = p__70237;
var count_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70238,(0),null);
var event_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70238,(1),null);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onMouseDown':(function (e){
frontend.util.stop(e);

if(cljs.core.truth_(count_QMARK_)){
frontend.components.editor.set_command_stats(icon);
} else {
}

if(cljs.core.truth_(event_QMARK_)){
return (command_handler.cljs$core$IFn$_invoke$arity$1 ? command_handler.cljs$core$IFn$_invoke$arity$1(e) : command_handler.call(null,e));
} else {
return (command_handler.cljs$core$IFn$_invoke$arity$0 ? command_handler.cljs$core$IFn$_invoke$arity$0() : command_handler.call(null));
}
}),'className':"bottom-action"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$2(icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null)))])]);
};
var G__70350 = function (command_handler,icon,var_args){
var p__70237 = null;
if (arguments.length > 2) {
var G__70351__i = 0, G__70351__a = new Array(arguments.length -  2);
while (G__70351__i < G__70351__a.length) {G__70351__a[G__70351__i] = arguments[G__70351__i + 2]; ++G__70351__i;}
  p__70237 = new cljs.core.IndexedSeq(G__70351__a,0,null);
} 
return G__70350__delegate.call(this,command_handler,icon,p__70237);};
G__70350.cljs$lang$maxFixedArity = 2;
G__70350.cljs$lang$applyTo = (function (arglist__70352){
var command_handler = cljs.core.first(arglist__70352);
arglist__70352 = cljs.core.next(arglist__70352);
var icon = cljs.core.first(arglist__70352);
var p__70237 = cljs.core.rest(arglist__70352);
return G__70350__delegate(command_handler,icon,p__70237);
});
G__70350.cljs$core$IFn$_invoke$arity$variadic = G__70350__delegate;
return G__70350;
})()
,null,"frontend.components.editor/mobile-bar-command");
frontend.components.editor.mobile_bar_commands = (function frontend$components$editor$mobile_bar_commands(_parent_state,parent_id){
var viewport_fn = (function (){
var temp__5720__auto__ = goog.dom.getElement(parent_id);
if(cljs.core.truth_(temp__5720__auto__)){
var input = temp__5720__auto__;
frontend.util.make_el_cursor_position_into_center_viewport(input);

return input.focus();
} else {
return null;
}
});
return cljs.core.zipmap(frontend.components.editor.mobile_bar_icons_keywords,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.editor.mobile_bar_command(frontend.handler.editor.cycle_todo_BANG_,"checkbox",true),frontend.components.editor.mobile_bar_command((function (){
return frontend.handler.editor.toggle_page_reference_embed(parent_id);
}),"brackets",true),frontend.components.editor.mobile_bar_command((function (){
return frontend.handler.editor.toggle_block_reference_embed(parent_id);
}),"parentheses",true),frontend.components.editor.mobile_bar_command((function (){
viewport_fn();

return frontend.commands.simple_insert_BANG_(parent_id,"/",cljs.core.PersistentArrayMap.EMPTY);
}),"command",true),frontend.components.editor.mobile_bar_command((function (){
viewport_fn();

return frontend.commands.simple_insert_BANG_(parent_id,"#",cljs.core.PersistentArrayMap.EMPTY);
}),"tag",true),frontend.components.editor.mobile_bar_command(frontend.handler.editor.cycle_priority_BANG_,"a-b",true),frontend.components.editor.mobile_bar_command(frontend.handler.editor.toggle_list_BANG_,"list",true),frontend.components.editor.mobile_bar_command((function (){
return frontend.mobile.camera.embed_photo(parent_id);
}),"camera",true),frontend.components.editor.mobile_bar_command(frontend.commands.insert_youtube_timestamp,"brand-youtube",true),frontend.components.editor.mobile_bar_command(frontend.handler.editor.html_link_format_BANG_,"link",true),frontend.components.editor.mobile_bar_command(frontend.handler.history.undo_BANG_,"rotate",true,true),frontend.components.editor.mobile_bar_command(frontend.handler.history.redo_BANG_,"rotate-clockwise",true,true),frontend.components.editor.mobile_bar_command((function (){
viewport_fn();

return frontend.commands.simple_insert_BANG_(parent_id,"<",cljs.core.PersistentArrayMap.EMPTY);
}),"code",true),frontend.components.editor.mobile_bar_command(frontend.handler.editor.bold_format_BANG_,"bold",true),frontend.components.editor.mobile_bar_command(frontend.handler.editor.italics_format_BANG_,"italic",true),frontend.components.editor.mobile_bar_command(frontend.handler.editor.strike_through_format_BANG_,"strikethrough",true),frontend.components.editor.mobile_bar_command(frontend.handler.editor.highlight_format_BANG_,"paint",true)], null));
});
frontend.components.editor.mobile_bar = rum.core.lazy_build(rum.core.build_defc,(function (parent_state,parent_id){
var temp__5720__auto___70353 = new cljs.core.Keyword("mobile","toolbar-stats","mobile/toolbar-stats",1960694079).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5720__auto___70353)){
var config_toolbar_stats_70354 = temp__5720__auto___70353;
cljs.core.reset_BANG_(frontend.components.editor.mobile_bar_commands_stats,config_toolbar_stats_70354);
} else {
}

var commands = frontend.components.editor.mobile_bar_commands(parent_state,parent_id);
var sorted_commands = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counts","counts",234305892),cljs.core.second),cljs.core._GT_,cljs.core.deref(frontend.components.editor.mobile_bar_commands_stats));
return daiquiri.core.create_element("div",{'id':"mobile-editor-toolbar",'className':"bg-base-2"},[daiquiri.core.create_element("div",{'className':"toolbar-commands"},[frontend.components.editor.mobile_bar_indent_outdent(false,"arrow-bar-left"),frontend.components.editor.mobile_bar_indent_outdent(true,"arrow-bar-right"),frontend.components.editor.mobile_bar_command(frontend.handler.editor.move_up_down(true),"arrow-bar-to-up"),frontend.components.editor.mobile_bar_command(frontend.handler.editor.move_up_down(false),"arrow-bar-to-down"),frontend.components.editor.mobile_bar_command((function (){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("document","mode?","document/mode?",-994203479)))){
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(null);
} else {
return frontend.commands.simple_insert_BANG_(parent_id,"\n",cljs.core.PersistentArrayMap.EMPTY);
}
}),"arrow-back"),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$editor$iter__70241(s__70242){
return (new cljs.core.LazySeq(null,(function (){
var s__70242__$1 = s__70242;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70242__$1);
if(temp__5720__auto__){
var s__70242__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70242__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70242__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70244 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70243 = (0);
while(true){
if((i__70243 < size__4651__auto__)){
var command = cljs.core._nth(c__4650__auto__,i__70243);
cljs.core.chunk_append(b__70244,daiquiri.interpreter.interpret((function (){var fexpr__70247 = cljs.core.first(command);
return (fexpr__70247.cljs$core$IFn$_invoke$arity$1 ? fexpr__70247.cljs$core$IFn$_invoke$arity$1(commands) : fexpr__70247.call(null,commands));
})()));

var G__70355 = (i__70243 + (1));
i__70243 = G__70355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70244),frontend$components$editor$iter__70241(cljs.core.chunk_rest(s__70242__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70244),null);
}
} else {
var command = cljs.core.first(s__70242__$2);
return cljs.core.cons(daiquiri.interpreter.interpret((function (){var fexpr__70249 = cljs.core.first(command);
return (fexpr__70249.cljs$core$IFn$_invoke$arity$1 ? fexpr__70249.cljs$core$IFn$_invoke$arity$1(commands) : fexpr__70249.call(null,commands));
})()),frontend$components$editor$iter__70241(cljs.core.rest(s__70242__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(sorted_commands);
})())]),daiquiri.core.create_element("div",{'className':"toolbar-hide-keyboard"},[frontend.components.editor.mobile_bar_command((function (){
return frontend.state.clear_edit_BANG_();
}),"keyboard-show")])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/mobile-bar");
frontend.components.editor.input = rum.core.lazy_build(rum.core.build_defcs,(function (state,_id,on_submit){
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.state.sub(new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241));
if(cljs.core.truth_(temp__5720__auto__)){
var input_option = temp__5720__auto__;
var map__70272 = frontend.util.react(frontend.commands._STAR_slash_caret_pos);
var map__70272__$1 = cljs.core.__destructure_map(map__70272);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70272__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var input_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.editor","input-value","frontend.components.editor/input-value",231817688));
if(cljs.core.seq(input_option)){
var command = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cljs.core.first(input_option));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2.rounded-md.shadow-lg","div.p-2.rounded-md.shadow-lg",1724375875),(function (){var iter__4652__auto__ = (function frontend$components$editor$iter__70274(s__70275){
return (new cljs.core.LazySeq(null,(function (){
var s__70275__$1 = s__70275;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__70275__$1);
if(temp__5720__auto____$1){
var s__70275__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70275__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70275__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70277 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70276 = (0);
while(true){
if((i__70276 < size__4651__auto__)){
var map__70278 = cljs.core._nth(c__4650__auto__,i__70276);
var map__70278__$1 = cljs.core.__destructure_map(map__70278);
var input_item = map__70278__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70278__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70278__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70278__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var autoFocus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70278__$1,new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425));
cljs.core.chunk_append(b__70277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-3","div.my-3",913998799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.block.w-full.pl-2.sm:text-sm.sm:leading-5","input.form-input.block.w-full.pl-2.sm:text-sm.sm:leading-5",-218906293),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__70279 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),["modal-input-",cljs.core.name(id)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),["modal-input-",cljs.core.name(id)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__70276,map__70278,map__70278__$1,input_item,id,placeholder,type,autoFocus,c__4650__auto__,size__4651__auto__,b__70277,s__70275__$2,temp__5720__auto____$1,command,map__70272,map__70272__$1,pos,input_value,input_option,temp__5720__auto__){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(input_value,cljs.core.assoc,id,frontend.util.evalue(e));
});})(i__70276,map__70278,map__70278__$1,input_item,id,placeholder,type,autoFocus,c__4650__auto__,size__4651__auto__,b__70277,s__70275__$2,temp__5720__auto____$1,command,map__70272,map__70272__$1,pos,input_value,input_option,temp__5720__auto__))
,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),(cljs.core.truth_(frontend.util.chrome_QMARK_())?"chrome-off":"off")], null);
var G__70279__$1 = (cljs.core.truth_(placeholder)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70279,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder):G__70279);
if(cljs.core.truth_(autoFocus)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70279__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true);
} else {
return G__70279__$1;
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_item,new cljs.core.Keyword(null,"id","id",-1388402092))], 0))], null)], null));

var G__70356 = (i__70276 + (1));
i__70276 = G__70356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70277),frontend$components$editor$iter__70274(cljs.core.chunk_rest(s__70275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70277),null);
}
} else {
var map__70280 = cljs.core.first(s__70275__$2);
var map__70280__$1 = cljs.core.__destructure_map(map__70280);
var input_item = map__70280__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70280__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70280__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70280__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var autoFocus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70280__$1,new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-3","div.my-3",913998799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input.block.w-full.pl-2.sm:text-sm.sm:leading-5","input.form-input.block.w-full.pl-2.sm:text-sm.sm:leading-5",-218906293),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__70281 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),["modal-input-",cljs.core.name(id)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),["modal-input-",cljs.core.name(id)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__70280,map__70280__$1,input_item,id,placeholder,type,autoFocus,s__70275__$2,temp__5720__auto____$1,command,map__70272,map__70272__$1,pos,input_value,input_option,temp__5720__auto__){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(input_value,cljs.core.assoc,id,frontend.util.evalue(e));
});})(map__70280,map__70280__$1,input_item,id,placeholder,type,autoFocus,s__70275__$2,temp__5720__auto____$1,command,map__70272,map__70272__$1,pos,input_value,input_option,temp__5720__auto__))
,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),(cljs.core.truth_(frontend.util.chrome_QMARK_())?"chrome-off":"off")], null);
var G__70281__$1 = (cljs.core.truth_(placeholder)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70281,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder):G__70281);
if(cljs.core.truth_(autoFocus)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70281__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true);
} else {
return G__70281__$1;
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(input_item,new cljs.core.Keyword(null,"id","id",-1388402092))], 0))], null)], null),frontend$components$editor$iter__70274(cljs.core.rest(s__70275__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(input_option);
})(),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Submit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

var G__70282 = command;
var G__70283 = cljs.core.deref(input_value);
var G__70284 = pos;
return (on_submit.cljs$core$IFn$_invoke$arity$3 ? on_submit.cljs$core$IFn$_invoke$arity$3(G__70282,G__70283,G__70284) : on_submit.call(null,G__70282,G__70283,G__70284));
})], 0))], null);
} else {
return null;
}
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("frontend.components.editor","input-value","frontend.components.editor/input-value",231817688)),frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 1, [(13),(function (state__$1,e){
var input_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword("frontend.components.editor","input-value","frontend.components.editor/input-value",231817688));
var input_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241));
if(cljs.core.seq(cljs.core.deref(input_value))){
frontend.util.stop(e);

var vec__70285_70362 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state__$1);
var _id_70363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70285_70362,(0),null);
var on_submit_70364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70285_70362,(1),null);
var map__70288_70365 = cljs.core.deref(frontend.commands._STAR_slash_caret_pos);
var map__70288_70366__$1 = cljs.core.__destructure_map(map__70288_70365);
var pos_70367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70288_70366__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var command_70368 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cljs.core.first(input_option));
var G__70289_70369 = command_70368;
var G__70290_70370 = cljs.core.deref(input_value);
var G__70291_70371 = pos_70367;
(on_submit_70364.cljs$core$IFn$_invoke$arity$3 ? on_submit_70364.cljs$core$IFn$_invoke$arity$3(G__70289_70369,G__70290_70370,G__70291_70371) : on_submit_70364.call(null,G__70289_70369,G__70290_70370,G__70291_70371));

return cljs.core.reset_BANG_(input_value,null);
} else {
return null;
}
})], null));
}))], null),"frontend.components.editor/input");
frontend.components.editor.absolute_modal = rum.core.lazy_build(rum.core.build_defc,(function (cp,set_default_width_QMARK_,p__70292){
var map__70293 = p__70292;
var map__70293__$1 = cljs.core.__destructure_map(map__70293);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70293__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70293__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70293__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var max_height = (370);
var max_width = (300);
var offset_top = (24);
var vw_height = window.innerHeight;
var vw_width = window.innerWidth;
var to_max_height = ((((cljs.core.seq(rect)) && ((vw_height > max_height))))?(function (){var delta_height = (vw_height - ((new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(rect) + top) + offset_top));
if((delta_height < max_height)){
return ((function (){var x__4336__auto__ = ((2) * offset_top);
var y__4337__auto__ = delta_height;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() - (16));
} else {
return max_height;
}
})():max_height);
var right_sidebar_QMARK_ = new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var editing_key = cljs.core.first(cljs.core.keys(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
var _STAR_el = rum.core.use_ref(null);
var _ = rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto__ = (function (){var and__4251__auto__ = right_sidebar_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = editing_key;
if(cljs.core.truth_(and__4251__auto____$1)){
return document.querySelector("#main-content-container");
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var cnt = temp__5720__auto__;
if(cljs.core.truth_(cnt.contains(document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(editing_key)].join(''))))){
var el = rum.core.deref(_STAR_el);
var ofx = (cnt.scrollWidth - cnt.clientWidth);
if((ofx > (0))){
return (el.style.transform = ["translateX(-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((ofx + (20))),"px)"].join(''));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_sidebar_QMARK_,editing_key], null));
var x_overflow_vw_QMARK_ = ((((cljs.core.seq(rect)) && ((vw_width > max_width))))?(function (){var delta_width = (vw_width - (new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(rect) + left));
return (delta_width < (max_width * 0.5));
})():null);
var pos_rect = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.seq(rect);
if(and__4251__auto__){
return editing_key;
} else {
return and__4251__auto__;
}
})())?new cljs.core.Keyword(null,"rect","rect",-108902628).cljs$core$IFn$_invoke$arity$1(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(frontend.state.get_input())):null);
var y_diff = (cljs.core.truth_(pos_rect)?(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(pos_rect) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect)):null);
return daiquiri.core.create_element("div",{'ref':_STAR_el,'onMouseDown':(function (e){
return e.stopPropagation();
}),'style':daiquiri.interpreter.element_attributes(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"top","top",-1856271961),((top + offset_top) + ((cljs.core.int_QMARK_(y_diff))?y_diff:(0))),new cljs.core.Keyword(null,"max-height","max-height",-612563804),to_max_height,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(700),new cljs.core.Keyword(null,"width","width",-384071477),"fit-content",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(11)], null),(cljs.core.truth_(set_default_width_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),max_width], null):null),(function (){var editor = document.querySelector(".editor-wrapper");
if((editor.clientWidth <= (left + (cljs.core.truth_(set_default_width_QMARK_)?max_width:(500))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),(0)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),(cljs.core.truth_((function (){var and__4251__auto__ = y_diff;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y_diff,(0));
} else {
return and__4251__auto__;
}
})())?left:(0))], null);
}
})()], 0))),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["absolute","rounded-md","shadow-lg","absolute-modal",(cljs.core.truth_(x_overflow_vw_QMARK_)?"is-overflow-vw-x":"")], null))},[daiquiri.interpreter.interpret(cp)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.editor/absolute-modal");
frontend.components.editor.transition_cp = rum.core.lazy_build(rum.core.build_defc,(function (cp,set_default_width_QMARK_,pos){
if(cljs.core.truth_(pos)){
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = rum.core.react(pos);
if(cljs.core.truth_(temp__5720__auto__)){
var pos__$1 = temp__5720__auto__;
var G__70302 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-names","class-names",1257115065),"fade",new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),(500),new cljs.core.Keyword(null,"exit","exit",351849638),(300)], null)], null);
var G__70303 = frontend.components.editor.absolute_modal(cp,set_default_width_QMARK_,pos__$1);
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__70302,G__70303) : frontend.ui.css_transition.call(null,G__70302,G__70303));
} else {
return null;
}
})());
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/transition-cp");
frontend.components.editor.image_uploader = rum.core.lazy_build(rum.core.build_defc,(function (id,format){
return daiquiri.core.create_element("div",{'className':"image-uploader"},[daiquiri.core.create_element("input",{'id':"upload-file",'type':"file",'onChange':rum.core.mark_sync_update((function (e){
var files = e.target.files;
return frontend.handler.editor.upload_asset(id,files,format,frontend.handler.editor._STAR_asset_uploading_QMARK_,false);
})),'hidden':true},[]),daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.util.react(frontend.handler.editor._STAR_asset_uploading_QMARK_);
if(cljs.core.truth_(temp__5720__auto__)){
var uploading_QMARK_ = temp__5720__auto__;
var processing = frontend.util.react(frontend.handler.editor._STAR_asset_uploading_process);
return frontend.components.editor.transition_cp(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.align-center.rounded-md.shadow-sm.bg-base-2.px-1.py-1","div.flex.flex-row.align-center.rounded-md.shadow-sm.bg-base-2.px-1.py-1",909846216),frontend.ui.loading(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Uploading %s%",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%2d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([processing], 0))], 0)))], null),false,frontend.commands._STAR_slash_caret_pos);
} else {
return null;
}
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/image-uploader");
frontend.components.editor.set_up_key_down_BANG_ = (function frontend$components$editor$set_up_key_down_BANG_(state,format){
return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$3(state,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"not-matched-handler","not-matched-handler",1162926887),frontend.handler.editor.keydown_not_matched_handler(format)], null));
});
frontend.components.editor.set_up_key_up_BANG_ = (function frontend$components$editor$set_up_key_up_BANG_(state,input,input_id,search_timeout){
return frontend.mixins.on_key_up(state,cljs.core.PersistentArrayMap.EMPTY,frontend.handler.editor.keyup_handler(state,input,input_id,search_timeout));
});
frontend.components.editor.search_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.components.editor.setup_key_listener_BANG_ = (function frontend$components$editor$setup_key_listener_BANG_(state){
var map__70305 = frontend.handler.editor.get_state();
var map__70305__$1 = cljs.core.__destructure_map(map__70305);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70305__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70305__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var input_id = id;
var input = goog.dom.getElement(input_id);
frontend.components.editor.set_up_key_down_BANG_(state,format);

return frontend.components.editor.set_up_key_up_BANG_(state,input,input_id,frontend.components.editor.search_timeout);
});
frontend.components.editor.starts_with_QMARK_ = clojure.string.starts_with_QMARK_;
/**
 * Get textarea css class according to it's content
 */
frontend.components.editor.get_editor_style_class = (function frontend$components$editor$get_editor_style_class(content,format){
var content__$1 = (cljs.core.truth_(content)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(content):"");
return [(((((content__$1.length > (1000))) || (clojure.string.includes_QMARK_(content__$1,"\n"))))?"multiline-block":"uniline-block")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__70307 = format;
var G__70307__$1 = (((G__70307 instanceof cljs.core.Keyword))?G__70307.fqn:null);
switch (G__70307__$1) {
case "markdown":
if(cljs.core.truth_((frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2(content__$1,"# ") : frontend.components.editor.starts_with_QMARK_.call(null,content__$1,"# ")))){
return "h1";
} else {
if(cljs.core.truth_((frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2(content__$1,"## ") : frontend.components.editor.starts_with_QMARK_.call(null,content__$1,"## ")))){
return "h2";
} else {
if(cljs.core.truth_((frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2(content__$1,"### ") : frontend.components.editor.starts_with_QMARK_.call(null,content__$1,"### ")))){
return "h3";
} else {
if(cljs.core.truth_((frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2(content__$1,"#### ") : frontend.components.editor.starts_with_QMARK_.call(null,content__$1,"#### ")))){
return "h4";
} else {
if(cljs.core.truth_((frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2(content__$1,"##### ") : frontend.components.editor.starts_with_QMARK_.call(null,content__$1,"##### ")))){
return "h5";
} else {
if(cljs.core.truth_((frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2(content__$1,"###### ") : frontend.components.editor.starts_with_QMARK_.call(null,content__$1,"###### ")))){
return "h6";
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = (frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2(content__$1,"---\n") : frontend.components.editor.starts_with_QMARK_.call(null,content__$1,"---\n"));
if(cljs.core.truth_(and__4251__auto__)){
return content__$1.endsWith("\n---");
} else {
return and__4251__auto__;
}
})())){
return "page-properties";
} else {
return "normal-block";

}
}
}
}
}
}
}

break;
default:
if(cljs.core.truth_((function (){var and__4251__auto__ = (frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.components.editor.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2(content__$1,"---\n") : frontend.components.editor.starts_with_QMARK_.call(null,content__$1,"---\n"));
if(cljs.core.truth_(and__4251__auto__)){
return content__$1.endsWith("\n---");
} else {
return and__4251__auto__;
}
})())){
return "page-properties";
} else {
return "normal-block";

}

}
})())].join('');
});
/**
 * Check if the row height of editor textarea is changed, which happens when font-size changed
 */
frontend.components.editor.editor_row_height_unchanged_QMARK_ = (function frontend$components$editor$editor_row_height_unchanged_QMARK_(){
var last_key = frontend.state.get_last_key_code();
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.keycode.enter,new cljs.core.Keyword(null,"key-code","key-code",-1732114304).cljs$core$IFn$_invoke$arity$1(last_key))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.keycode.enter_code,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(last_key))));
});
frontend.components.editor.mock_textarea = rum.core.lazy_build(rum.core.build_defc,(function (content){
return daiquiri.core.create_element("div",{'id':"mock-text",'style':{'width':"100%",'height':"100%",'position':"absolute",'visibility':"hidden",'top':(0),'left':(0)}},[(function (){var content__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"0"].join('');
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$editor$iter__70308(s__70309){
return (new cljs.core.LazySeq(null,(function (){
var s__70309__$1 = s__70309;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70309__$1);
if(temp__5720__auto__){
var s__70309__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70309__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70309__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70311 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70310 = (0);
while(true){
if((i__70310 < size__4651__auto__)){
var vec__70312 = cljs.core._nth(c__4650__auto__,i__70310);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70312,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70312,(1),null);
cljs.core.chunk_append(b__70311,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n"))?daiquiri.core.create_element("span",{'id':["mock-text_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'key':idx},["0",daiquiri.core.create_element("br",null,null)]):daiquiri.core.create_element("span",{'id':["mock-text_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'key':idx},[daiquiri.interpreter.interpret(c)])));

var G__70381 = (i__70310 + (1));
i__70310 = G__70381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70311),frontend$components$editor$iter__70308(cljs.core.chunk_rest(s__70309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70311),null);
}
} else {
var vec__70317 = cljs.core.first(s__70309__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70317,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70317,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n"))?daiquiri.core.create_element("span",{'id':["mock-text_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'key':idx},["0",daiquiri.core.create_element("br",null,null)]):daiquiri.core.create_element("span",{'id':["mock-text_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),'key':idx},[daiquiri.interpreter.interpret(c)])),frontend$components$editor$iter__70308(cljs.core.rest(s__70309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,clojure.string.split.cljs$core$IFn$_invoke$arity$2(content__$1,"")));
})());
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
if(cljs.core.truth_(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
} else {
try{frontend.handler.editor.handle_last_input();
}catch (e70320){if((e70320 instanceof Error)){
var _e_70383 = e70320;
} else {
throw e70320;

}
}}

frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),false);

return state;
})], null)], null),"frontend.components.editor/mock-textarea");
frontend.components.editor.mock_textarea_wrapper = rum.core.lazy_build(rum.core.build_defc,(function (){
var content = frontend.state.sub_edit_content();
return frontend.components.editor.mock_textarea(content);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/mock-textarea-wrapper");
frontend.components.editor.animated_modal = (function frontend$components$editor$animated_modal(key,component,set_default_width_QMARK_,_STAR_pos){
if(cljs.core.truth_(_STAR_pos)){
var G__70322 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"class-names","class-names",1257115065),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enter","enter",1792452624),"origin-top-left opacity-0 transform scale-95",new cljs.core.Keyword(null,"enter-done","enter-done",-576645951),"origin-top-left transition opacity-100 transform scale-100",new cljs.core.Keyword(null,"exit","exit",351849638),"origin-top-left transition opacity-0 transform scale-95"], null),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),(0),new cljs.core.Keyword(null,"exit","exit",351849638),(150)], null)], null);
var G__70323 = (function (_){
return frontend.components.editor.absolute_modal(component,set_default_width_QMARK_,_STAR_pos);
});
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__70322,G__70323) : frontend.ui.css_transition.call(null,G__70322,G__70323));
} else {
return null;
}
});
/**
 * React to atom changes, find and render the correct modal
 */
frontend.components.editor.modals = rum.core.lazy_build(rum.core.build_defc,(function (id,format){
return daiquiri.interpreter.interpret((function (){var G__70329 = (cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.react(frontend.commands._STAR_show_commands);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not(frontend.state.sub(new cljs.core.Keyword("editor","show-page-search?","editor/show-page-search?",653141106)))) && (((cljs.core.not(frontend.state.sub(new cljs.core.Keyword("editor","show-block-search?","editor/show-block-search?",706500659)))) && (((cljs.core.not(frontend.state.sub(new cljs.core.Keyword("editor","show-template-search?","editor/show-template-search?",1482009583)))) && (((cljs.core.not(frontend.state.sub(new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241)))) && (((cljs.core.not(frontend.state.sub(new cljs.core.Keyword("editor","show-zotero","editor/show-zotero",-1834250749)))) && (cljs.core.not(frontend.state.sub(new cljs.core.Keyword("editor","show-date-picker?","editor/show-date-picker?",216789264)))))))))))));
} else {
return and__4251__auto__;
}
})())?frontend.components.editor.animated_modal("commands",frontend.components.editor.commands(id,format),true,frontend.util.react(frontend.commands._STAR_slash_caret_pos)):(cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.react(frontend.commands._STAR_show_block_commands);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(frontend.commands._STAR_angle_bracket_caret_pos);
} else {
return and__4251__auto__;
}
})())?frontend.components.editor.animated_modal("block-commands",frontend.components.editor.block_commands(id,format),true,frontend.util.react(frontend.commands._STAR_angle_bracket_caret_pos)):(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-page-search?","editor/show-page-search?",653141106)))?frontend.components.editor.animated_modal("page-search",frontend.components.editor.page_search(id,format),true,frontend.util.react(frontend.commands._STAR_slash_caret_pos)):(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-block-search?","editor/show-block-search?",706500659)))?frontend.components.editor.animated_modal("block-search",frontend.components.editor.block_search(id,format),false,frontend.util.react(frontend.commands._STAR_slash_caret_pos)):(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-template-search?","editor/show-template-search?",1482009583)))?frontend.components.editor.animated_modal("template-search",frontend.components.editor.template_search(id,format),true,frontend.util.react(frontend.commands._STAR_slash_caret_pos)):(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-date-picker?","editor/show-date-picker?",216789264)))?frontend.components.editor.animated_modal("date-picker",frontend.components.datetime.date_picker(id,format,null),false,frontend.util.react(frontend.commands._STAR_slash_caret_pos)):(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241)))?frontend.components.editor.animated_modal("input",frontend.components.editor.input(id,(function (command,m,_pos){
return frontend.handler.editor.handle_command_input(command,id,format,m);
})),true,frontend.util.react(frontend.commands._STAR_slash_caret_pos)):(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-zotero","editor/show-zotero",-1834250749)))?frontend.components.editor.animated_modal("zotero-search",frontend.extensions.zotero.zotero_search(id),false,frontend.util.react(frontend.commands._STAR_slash_caret_pos)):null
))))))));
return (frontend.ui.transition_group.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.transition_group.cljs$core$IFn$_invoke$arity$1(G__70329) : frontend.ui.transition_group.call(null,G__70329));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.editor/modals");
frontend.components.editor.box = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__70334,id,config){
var map__70335 = p__70334;
var map__70335__$1 = cljs.core.__destructure_map(map__70335);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70335__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70335__$1,new cljs.core.Keyword(null,"block","block",664686210));
var content = frontend.state.sub_edit_content();
var heading_class = frontend.components.editor.get_editor_style_class(content,format);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["editor-inner",(cljs.core.truth_(block)?"block-editor":"non-block-editor")], null))},[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.sub(new cljs.core.Keyword("editor","record-status","editor/record-status",-122164557)),"RECORDING"))?daiquiri.core.create_element("div",{'id':"audio-record-toolbar"},[frontend.mobile.footer.audio_record_cp()]):null),(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = frontend.mobile.util.is_native_platform_QMARK_();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.config.mobile_QMARK_;
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"review-cards?","review-cards?",-1467055076).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__4251__auto__;
}
})())?frontend.components.editor.mobile_bar(state,id):null),frontend.ui.ls_textarea(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-height-change","on-height-change",28583744),new cljs.core.Keyword(null,"cacheMeasurements","cacheMeasurements",-1280071997),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-paste","on-paste",-50859856),new cljs.core.Keyword(null,"minRows","minRows",-1979722096),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[frontend.handler.editor.editor_on_height_change_BANG_(id),frontend.components.editor.editor_row_height_unchanged_QMARK_(),(function (){var or__4253__auto__ = content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),frontend.handler.editor.editor_on_click_BANG_(id),frontend.handler.editor.editor_on_paste_BANG_(id),((frontend.state.enable_grammarly_QMARK_())?(2):(1)),id,heading_class,false,frontend.handler.editor.editor_on_change_BANG_(block,id,frontend.components.editor.search_timeout)])),frontend.components.editor.mock_textarea_wrapper(),frontend.components.editor.modals(id,format),(cljs.core.truth_(format)?frontend.components.editor.image_uploader(id,format):null)]);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("frontend.components.editor","heading-level","frontend.components.editor/heading-level",-842409371),new cljs.core.Keyword(null,"heading-level","heading-level",563433452).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.components.editor","id","frontend.components.editor/id",1375337451),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], 0));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.state.set_editor_args_BANG_(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));

return state;
})], null),frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1(frontend.components.editor.setup_key_listener_BANG_),frontend.modules.shortcut.core.mixin(new cljs.core.Keyword("shortcut.handler","block-editing-only","shortcut.handler/block-editing-only",794342449)),frontend.handler.editor.lifecycle.lifecycle], null),"frontend.components.editor/box");

//# sourceMappingURL=frontend.components.editor.js.map
