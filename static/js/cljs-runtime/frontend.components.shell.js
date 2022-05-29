goog.provide('frontend.components.shell');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shell !== 'undefined') && (typeof frontend.components.shell._STAR_command !== 'undefined')){
} else {
frontend.components.shell._STAR_command = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.shell !== 'undefined') && (typeof frontend.components.shell._STAR_loading_QMARK_ !== 'undefined')){
} else {
frontend.components.shell._STAR_loading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.shell.run_command = (function frontend$components$shell$run_command(){
cljs.core.reset_BANG_(frontend.components.shell._STAR_loading_QMARK_,true);

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((clojure.string.blank_QMARK_(cljs.core.deref(frontend.components.shell._STAR_command)))?null:frontend.handler.shell.run_command_BANG_(cljs.core.deref(frontend.components.shell._STAR_command))),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(frontend.components.shell._STAR_loading_QMARK_,false));
}));
})),(function (){
return cljs.core.reset_BANG_(frontend.components.shell._STAR_loading_QMARK_,false);
}));
});
frontend.components.shell.shell = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var loading_QMARK_ = rum.core.react(frontend.components.shell._STAR_loading_QMARK_);
return daiquiri.core.create_element("div",{'className':"flex flex-col"},[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("h1",{'className':"title"},["Input command"]),daiquiri.core.create_element("div",{'className':"mt-4 mb-4 relative rounded-md shadow-sm max-w-xs"},[daiquiri.core.create_element("input",{'id':"run-command",'autoFocus':true,'onKeyDown':frontend.util.stop_propagation,'placeholder':"git commit -m ...",'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(frontend.components.shell._STAR_command,frontend.util.evalue(e));
})),'className':"form-input font-mono block w-full sm:text-sm sm:leading-5"},[])])])]),(function (){var attrs60820 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Run",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.components.shell.run_command], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs60820))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center"], null)], null),attrs60820], 0))):{'className':"flex flex-row items-center"}),((cljs.core.map_QMARK_(attrs60820))?[(function (){var attrs60825 = (cljs.core.truth_(loading_QMARK_)?frontend.ui.loading(""):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs60825))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-4"], null)], null),attrs60825], 0))):{'className':"ml-4"}),((cljs.core.map_QMARK_(attrs60825))?null:[daiquiri.interpreter.interpret(attrs60825)]));
})()]:[daiquiri.interpreter.interpret(attrs60820),(function (){var attrs60827 = (cljs.core.truth_(loading_QMARK_)?frontend.ui.loading(""):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs60827))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-4"], null)], null),attrs60827], 0))):{'className':"ml-4"}),((cljs.core.map_QMARK_(attrs60827))?null:[daiquiri.interpreter.interpret(attrs60827)]));
})()]));
})()])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
return frontend.mixins.on_enter.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (_state){
return frontend.components.shell.run_command();
})], 0));
}))], null),"frontend.components.shell/shell");

//# sourceMappingURL=frontend.components.shell.js.map
