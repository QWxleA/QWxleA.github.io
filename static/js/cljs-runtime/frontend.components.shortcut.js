goog.provide('frontend.components.shortcut');
frontend.components.shortcut.customize_shortcut_dialog_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,k,action_name,current_binding){
var keypress = new cljs.core.Keyword("rum","local","rum/local",-1497916586).cljs$core$IFn$_invoke$arity$1(state);
var keyboard_shortcut = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.deref(keypress)))?current_binding:cljs.core.deref(keypress));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",{'className':"mb-4"},["Press any sequence of keys to set the shortcut for the ",(function (){var attrs62513 = action_name;
return daiquiri.core.create_element("b",((cljs.core.map_QMARK_(attrs62513))?daiquiri.interpreter.element_attributes(attrs62513):null),((cljs.core.map_QMARK_(attrs62513))?null:[daiquiri.interpreter.interpret(attrs62513)]));
})()," action."]),(function (){var attrs62505 = frontend.ui.render_keyboard_shortcut(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(clojure.string.trim(keyboard_shortcut)),/ |\+/));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs62505))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mb-4","mt-4"], null)], null),attrs62505], 0))):{'className':"mb-4 mt-4"}),((cljs.core.map_QMARK_(attrs62505))?[" ",daiquiri.core.create_element("a",{'style':{'marginLeft':"12px"},'onClick':(function (){
frontend.modules.shortcut.data_helper.remove_shortcut(k);

frontend.modules.shortcut.core.refresh_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keypress,(function (){
return "";
}));
}),'className':"text-sm"},["Reset"])]:[daiquiri.interpreter.interpret(attrs62505)," ",daiquiri.core.create_element("a",{'style':{'marginLeft':"12px"},'onClick':(function (){
frontend.modules.shortcut.data_helper.remove_shortcut(k);

frontend.modules.shortcut.core.refresh_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keypress,(function (){
return "";
}));
}),'className':"text-sm"},["Reset"])]));
})()]),(function (){var attrs62498 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Save",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.state.close_modal_BANG_], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs62498))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cancel-save-buttons","text-right","mt-4"], null)], null),attrs62498], 0))):{'className':"cancel-save-buttons text-right mt-4"}),((cljs.core.map_QMARK_(attrs62498))?[daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(keypress,frontend.modules.shortcut.data_helper.binding_for_storage(current_binding));

return frontend.state.close_modal_BANG_();
}),'className':"ml-4"},["Cancel"])]:[daiquiri.interpreter.interpret(attrs62498),daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(keypress,frontend.modules.shortcut.data_helper.binding_for_storage(current_binding));

return frontend.state.close_modal_BANG_();
}),'className':"ml-4"},["Cancel"])]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$1(""),frontend.modules.shortcut.core.record_BANG_()], null),"frontend.components.shortcut/customize-shortcut-dialog-inner");
frontend.components.shortcut.customize_shortcut_dialog = (function frontend$components$shortcut$customize_shortcut_dialog(k,action_name,displayed_binding){
return (function (_){
return frontend.components.shortcut.customize_shortcut_dialog_inner(k,action_name,displayed_binding);
});
});
frontend.components.shortcut.shortcut_col = rum.core.lazy_build(rum.core.build_defc,(function (k,binding,configurable_QMARK_,action_name){
var conflict_QMARK_ = frontend.modules.shortcut.data_helper.potential_conflict_QMARK_(k);
var displayed_binding = frontend.modules.shortcut.data_helper.binding_for_display(k,binding);
var disabled_QMARK_ = clojure.string.includes_QMARK_(displayed_binding,"system default");
if(cljs.core.not(configurable_QMARK_)){
var attrs62515 = displayed_binding;
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs62515))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-right"], null)], null),attrs62515], 0))):{'className':"text-right"}),((cljs.core.map_QMARK_(attrs62515))?null:[attrs62515]));
} else {
var attrs62516 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(displayed_binding,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm p-1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),((disabled_QMARK_)?"not-allowed":"pointer")], null),new cljs.core.Keyword(null,"title","title",636505583),((conflict_QMARK_)?"Shortcut conflict!":((disabled_QMARK_)?"Cannot override system default":"Click to modify")),new cljs.core.Keyword(null,"background","background",-863952629),((conflict_QMARK_)?"pink":((disabled_QMARK_)?"gray":null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((disabled_QMARK_)?null:(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.shortcut.customize_shortcut_dialog(k,action_name,displayed_binding));
}))], 0));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs62516))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-right"], null)], null),attrs62516], 0))):{'className':"text-right"}),((cljs.core.map_QMARK_(attrs62516))?null:[daiquiri.interpreter.interpret(attrs62516)]));
}
}),null,"frontend.components.shortcut/shortcut-col");
frontend.components.shortcut.shortcut_table = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__62642 = null;
var G__62642__1 = (function (name){
return daiquiri.interpreter.interpret((frontend.components.shortcut.shortcut_table.cljs$core$IFn$_invoke$arity$2 ? frontend.components.shortcut.shortcut_table.cljs$core$IFn$_invoke$arity$2(name,false) : frontend.components.shortcut.shortcut_table.call(null,name,false)));
});
var G__62642__2 = (function (name,configurable_QMARK_){
var shortcut_config = rum.core.cursor_in(frontend.state.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),frontend.state.get_current_repo(),new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810)], null));
var _ = rum.core.react(shortcut_config);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("table",null,[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",null,[daiquiri.core.create_element("th",{'className':"text-left"},[(function (){var attrs62530 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
return daiquiri.core.create_element("b",((cljs.core.map_QMARK_(attrs62530))?daiquiri.interpreter.element_attributes(attrs62530):null),((cljs.core.map_QMARK_(attrs62530))?null:[daiquiri.interpreter.interpret(attrs62530)]));
})()]),daiquiri.core.create_element("th",{'className':"text-right"},null)])]),(function (){var attrs62527 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62531){
var vec__62532 = p__62531;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62532,(0),null);
var map__62535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62532,(1),null);
var map__62535__$1 = cljs.core.__destructure_map(map__62535);
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62535__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-left","td.text-left",511611147),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.modules.shortcut.data_helper.decorate_namespace(k)], 0))], null),frontend.components.shortcut.shortcut_col(k,binding,configurable_QMARK_,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.modules.shortcut.data_helper.decorate_namespace(k)], 0)))], null);
}),frontend.modules.shortcut.data_helper.binding_by_category(name));
return daiquiri.core.create_element("tbody",((cljs.core.map_QMARK_(attrs62527))?daiquiri.interpreter.element_attributes(attrs62527):null),((cljs.core.map_QMARK_(attrs62527))?null:[daiquiri.interpreter.interpret(attrs62527)]));
})()])]);
});
G__62642 = function(name,configurable_QMARK_){
switch(arguments.length){
case 1:
return G__62642__1.call(this,name);
case 2:
return G__62642__2.call(this,name,configurable_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62642.cljs$core$IFn$_invoke$arity$1 = G__62642__1;
G__62642.cljs$core$IFn$_invoke$arity$2 = G__62642__2;
return G__62642;
})()
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.shortcut/shortcut-table");
frontend.components.shortcut.trigger_table = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("table",null,[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",null,[daiquiri.core.create_element("th",{'className':"text-left"},[(function (){var attrs62536 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","shortcuts-triggers","help/shortcuts-triggers",199917649)], 0));
return daiquiri.core.create_element("b",((cljs.core.map_QMARK_(attrs62536))?daiquiri.interpreter.element_attributes(attrs62536):null),((cljs.core.map_QMARK_(attrs62536))?null:[daiquiri.interpreter.interpret(attrs62536)]));
})()]),daiquiri.core.create_element("th",{'className':"text-right"},[(function (){var attrs62537 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","shortcut","help/shortcut",-428457104)], 0));
return daiquiri.core.create_element("b",((cljs.core.map_QMARK_(attrs62537))?daiquiri.interpreter.element_attributes(attrs62537):null),((cljs.core.map_QMARK_(attrs62537))?null:[daiquiri.interpreter.interpret(attrs62537)]));
})()])])]),daiquiri.core.create_element("tbody",null,[daiquiri.core.create_element("tr",null,[(function (){var attrs62538 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","slash-autocomplete","help/slash-autocomplete",-2068260592)], 0));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs62538))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-left"], null)], null),attrs62538], 0))):{'className':"text-left"}),((cljs.core.map_QMARK_(attrs62538))?null:[daiquiri.interpreter.interpret(attrs62538)]));
})(),daiquiri.core.create_element("td",{'className':"text-right"},[daiquiri.core.create_element("code",null,["/"])])]),daiquiri.core.create_element("tr",null,[(function (){var attrs62548 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","block-content-autocomplete","help/block-content-autocomplete",908208756)], 0));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs62548))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-left"], null)], null),attrs62548], 0))):{'className':"text-left"}),((cljs.core.map_QMARK_(attrs62548))?null:[daiquiri.interpreter.interpret(attrs62548)]));
})(),daiquiri.core.create_element("td",{'className':"text-right"},[daiquiri.core.create_element("code",null,["<"])])]),daiquiri.core.create_element("tr",null,[(function (){var attrs62554 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","reference-autocomplete","help/reference-autocomplete",1106720492)], 0));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs62554))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-left"], null)], null),attrs62554], 0))):{'className':"text-left"}),((cljs.core.map_QMARK_(attrs62554))?null:[daiquiri.interpreter.interpret(attrs62554)]));
})(),daiquiri.core.create_element("td",{'className':"text-right"},[daiquiri.core.create_element("code",null,["[[]]"])])]),daiquiri.core.create_element("tr",null,[(function (){var attrs62570 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","block-reference","help/block-reference",249625077)], 0));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs62570))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-left"], null)], null),attrs62570], 0))):{'className':"text-left"}),((cljs.core.map_QMARK_(attrs62570))?null:[daiquiri.interpreter.interpret(attrs62570)]));
})(),daiquiri.core.create_element("td",{'className':"text-right"},[daiquiri.core.create_element("code",null,["(())"])])]),daiquiri.core.create_element("tr",null,[(function (){var attrs62577 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("command.editor","open-link-in-sidebar","command.editor/open-link-in-sidebar",205625165)], 0));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs62577))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-left"], null)], null),attrs62577], 0))):{'className':"text-left"}),((cljs.core.map_QMARK_(attrs62577))?null:[daiquiri.interpreter.interpret(attrs62577)]));
})(),(function (){var attrs62578 = frontend.ui.render_keyboard_shortcut(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shift","click"], null));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs62578))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-right"], null)], null),attrs62578], 0))):{'className':"text-right"}),((cljs.core.map_QMARK_(attrs62578))?null:[daiquiri.interpreter.interpret(attrs62578)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs62583 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","context-menu","help/context-menu",-995197236)], 0));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs62583))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-left"], null)], null),attrs62583], 0))):{'className':"text-left"}),((cljs.core.map_QMARK_(attrs62583))?null:[daiquiri.interpreter.interpret(attrs62583)]));
})(),(function (){var attrs62586 = frontend.ui.render_keyboard_shortcut(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right","click"], null));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs62586))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-right"], null)], null),attrs62586], 0))):{'className':"text-right"}),((cljs.core.map_QMARK_(attrs62586))?null:[daiquiri.interpreter.interpret(attrs62586)]));
})()])])]);
}),null,"frontend.components.shortcut/trigger-table");
frontend.components.shortcut.markdown_and_orgmode_syntax = (function frontend$components$shortcut$markdown_and_orgmode_syntax(){
var list = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"italics","italics",1203296858),new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"latex","latex",-1820161144),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"img","img",1442687358)], null);
var preferred_format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var title = (function (){var G__62599 = preferred_format;
var G__62599__$1 = (((G__62599 instanceof cljs.core.Keyword))?G__62599.fqn:null);
switch (G__62599__$1) {
case "markdown":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","markdown-syntax","help/markdown-syntax",1027419613)], 0));

break;
case "org":
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","org-mode-syntax","help/org-mode-syntax",-1779651032)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62599__$1)].join('')));

}
})();
var learn_more = (function (){var G__62608 = preferred_format;
var G__62608__$1 = (((G__62608 instanceof cljs.core.Keyword))?G__62608.fqn:null);
switch (G__62608__$1) {
case "markdown":
return "https://www.markdownguide.org/basic-syntax";

break;
case "org":
return "https://orgmode.org/worg/dev/org-syntax.html";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62608__$1)].join('')));

}
})();
var raw = (function (){var G__62616 = preferred_format;
var G__62616__$1 = (((G__62616 instanceof cljs.core.Keyword))?G__62616.fqn:null);
switch (G__62616__$1) {
case "markdown":
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"latex","latex",-1820161144),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"italics","italics",1203296858),new cljs.core.Keyword(null,"img","img",1442687358)],[["~~",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804)], 0))),"~~"].join(''),["**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bold","bold",-116809535)], 0))),"**"].join(''),"```clojure\n  (println \"Hello world!\")\n```",["^^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"highlight","highlight",-800930873)], 0))),"^^"].join(''),"$$E = mc^2$$","[Link](https://www.example.com)",["`",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142)], 0))),"`"].join(''),["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"italics","italics",1203296858)], 0))),"_"].join(''),"![image](https://asset.logseq.com/static/img/logo.png)"]);

break;
case "org":
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"latex","latex",-1820161144),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"italics","italics",1203296858),new cljs.core.Keyword(null,"img","img",1442687358)],[["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804)], 0))),"+"].join(''),["*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bold","bold",-116809535)], 0))),"*"].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),"#+BEGIN_SRC clojure\n  (println \"Hello world!\")\n#+END_SRC"], null),["^^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"highlight","highlight",-800930873)], 0))),"^^"].join(''),"$$E = mc^2$$","[[https://www.example.com][Link]]","~Code~",["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"italics","italics",1203296858)], 0))),"/"].join(''),"[[https://asset.logseq.com/static/img/logo.png][image]]"]);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62616__$1)].join('')));

}
})();
var rendered = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"latex","latex",-1820161144),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"italics","italics",1203296858),new cljs.core.Keyword(null,"img","img",1442687358)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"del","del",574975584),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bold","bold",-116809535)], 0))], null),frontend.extensions.highlight.highlight("help-highlight",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lang","data-lang",969460304),"clojure"], null),"(println \"Hello world!\")"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"highlight","highlight",-800930873)], 0))], null),frontend.extensions.latex.latex("help-latex","E = mc^2",true,false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.example.com"], null),"Link"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"italics","italics",1203296858)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"width","width",-384071477),(32),new cljs.core.Keyword(null,"height","height",1025178622),(32)], null),new cljs.core.Keyword(null,"src","src",-1651076051),"https://asset.logseq.com/static/img/logo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"image"], null)], null)]);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-left","th.text-left",1598641396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-right","th.text-right",-1959745342),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),learn_more], null),"Learn more \u2192"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-left","td.text-left",511611147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pre","pre",2118456869),name))?new cljs.core.Keyword(null,"pre","pre",2118456869):new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(raw,name)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right","td.text-right",185725742),cljs.core.get.cljs$core$IFn$_invoke$arity$2(rendered,name)], null)], null);
}),list)], null)], null);
});
frontend.components.shortcut.shortcut = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[(function (){var attrs62630 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("help","shortcut-page-title","help/shortcut-page-title",-1549774481)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs62630))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs62630], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs62630))?null:[daiquiri.interpreter.interpret(attrs62630)]));
})(),frontend.components.shortcut.trigger_table(),daiquiri.interpreter.interpret(frontend.components.shortcut.markdown_and_orgmode_syntax()),frontend.components.shortcut.shortcut_table(new cljs.core.Keyword("shortcut.category","basics","shortcut.category/basics",-1775874746),true),frontend.components.shortcut.shortcut_table(new cljs.core.Keyword("shortcut.category","navigating","shortcut.category/navigating",-2030317791),true),frontend.components.shortcut.shortcut_table(new cljs.core.Keyword("shortcut.category","block-editing","shortcut.category/block-editing",-1150211354),true),frontend.components.shortcut.shortcut_table(new cljs.core.Keyword("shortcut.category","block-command-editing","shortcut.category/block-command-editing",1958480544),true),frontend.components.shortcut.shortcut_table(new cljs.core.Keyword("shortcut.category","block-selection","shortcut.category/block-selection",1439375136),true),frontend.components.shortcut.shortcut_table(new cljs.core.Keyword("shortcut.category","formatting","shortcut.category/formatting",-723875074),true),frontend.components.shortcut.shortcut_table(new cljs.core.Keyword("shortcut.category","toggle","shortcut.category/toggle",677164372),true),frontend.components.shortcut.shortcut_table(new cljs.core.Keyword("shortcut.category","others","shortcut.category/others",1492019197),true)]);
}),null,"frontend.components.shortcut/shortcut");

//# sourceMappingURL=frontend.components.shortcut.js.map
