goog.provide('frontend.mobile.footer');
frontend.mobile.footer.mobile_bar_command = rum.core.lazy_build(rum.core.build_defc,(function (command_handler,icon){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onMouseDown':(function (e){
frontend.util.stop(e);

return (command_handler.cljs$core$IFn$_invoke$arity$0 ? command_handler.cljs$core$IFn$_invoke$arity$0() : command_handler.call(null));
}),'className':"bottom-action"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$2(icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null)))])]);
}),null,"frontend.mobile.footer/mobile-bar-command");
frontend.mobile.footer.seconds__GT_minutes_COLON_seconds = (function frontend$mobile$footer$seconds__GT_minutes_COLON_seconds(seconds){
var minutes = cljs.core.quot(seconds,(60));
var seconds__$1 = cljs.core.mod(seconds,(60));
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%02d:%02d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([minutes,seconds__$1], 0));
});
frontend.mobile.footer._STAR_record_start = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
frontend.mobile.footer.audio_record_cp = rum.core.lazy_build(rum.core.build_defcs,(function (state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.sub(new cljs.core.Keyword("editor","record-status","editor/record-status",-122164557)),"RECORDING")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.mobile.footer._STAR_record_start,cljs.core.inc);
} else {
}

var attrs69124 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.sub(new cljs.core.Keyword("editor","record-status","editor/record-status",-122164557)),"NONE"))?(function (){
cljs.core.reset_BANG_(frontend.mobile.footer._STAR_record_start,(-1));

return frontend.mobile.footer.mobile_bar_command((function (){
return frontend.mobile.record.start_recording();
}),"microphone");
})()
:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),frontend.mobile.footer.mobile_bar_command((function (){
return frontend.mobile.record.stop_recording();
}),"player-stop"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timer.pl-2","div.timer.pl-2",1649521312),frontend.mobile.footer.seconds__GT_minutes_COLON_seconds(cljs.core.deref(frontend.mobile.footer._STAR_record_start))], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs69124))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row"], null)], null),attrs69124], 0))):{'className':"flex flex-row"}),((cljs.core.map_QMARK_(attrs69124))?null:[daiquiri.interpreter.interpret(attrs69124)]));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var callback = (function (){
return rum.core.request_render(comp);
});
var interval = setInterval(callback,(1000));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.mobile.footer","interval","frontend.mobile.footer/interval",-960322604),interval);
}),new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
clearInterval(new cljs.core.Keyword("frontend.mobile.footer","interval","frontend.mobile.footer/interval",-960322604).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.mobile.footer","interval","frontend.mobile.footer/interval",-960322604));
})], null)], null),"frontend.mobile.footer/audio-record-cp");
frontend.mobile.footer.footer = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_((function (){var or__4253__auto__ = frontend.state.sub(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = frontend.state.sub(new cljs.core.Keyword("block","component-editing-mode?","block/component-editing-mode?",-1744931560));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return frontend.state.sub(new cljs.core.Keyword("editor","editing-page-title?","editor/editing-page-title?",-648130029));
}
}
})())){
return null;
} else {
return daiquiri.core.create_element("div",{'className':"cp__footer w-full bottom-0 justify-between"},[frontend.mobile.footer.audio_record_cp(),frontend.mobile.footer.mobile_bar_command((function (){
return frontend.state.toggle_document_mode_BANG_();
}),"notes"),frontend.mobile.footer.mobile_bar_command((function (){
var page = (function (){var or__4253__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return clojure.string.lower_case(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0());
}
})();
return frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),true,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null));
}),"edit")]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.mobile.footer/footer");

//# sourceMappingURL=frontend.mobile.footer.js.map
