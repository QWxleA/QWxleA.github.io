goog.provide('frontend.handler.history');
frontend.handler.history.restore_cursor_BANG_ = (function frontend$handler$history$restore_cursor_BANG_(p__52809){
var map__52811 = p__52809;
var map__52811__$1 = cljs.core.__destructure_map(map__52811);
var last_edit_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52811__$1,new cljs.core.Keyword(null,"last-edit-block","last-edit-block",-940369316));
var container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52811__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52811__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_((function (){var and__5041__auto__ = container;
if(cljs.core.truth_(and__5041__auto__)){
return last_edit_block;
} else {
return and__5041__auto__;
}
})())){
var temp__5720__auto__ = goog.dom.getElement(container);
if(cljs.core.truth_(temp__5720__auto__)){
var container__$1 = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_edit_block);
if(cljs.core.truth_(temp__5720__auto____$1)){
var block_uuid = temp__5720__auto____$1;
var temp__5720__auto____$2 = (function (){var G__52816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__52816) : frontend.db.pull.call(null,G__52816));
})();
if(cljs.core.truth_(temp__5720__auto____$2)){
var block = temp__5720__auto____$2;
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4(block,pos,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"custom-content","custom-content",-8240001),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block)], null));
} else {
return null;
}
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
frontend.handler.history.undo_BANG_ = (function frontend$handler$history$undo_BANG_(e){
frontend.util.stop(e);

frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"undo","undo",-1818036302));

frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var map__52819_52858 = frontend.modules.editor.undo_redo.undo();
var map__52819_52859__$1 = cljs.core.__destructure_map(map__52819_52858);
var editor_cursor_52860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52819_52859__$1,new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800));
frontend.handler.history.restore_cursor_BANG_(editor_cursor_52860);

return frontend.state.set_editor_op_BANG_(null);
});
frontend.handler.history.redo_BANG_ = (function frontend$handler$history$redo_BANG_(e){
frontend.util.stop(e);

frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"redo","redo",501190664));

var map__52826_52862 = frontend.modules.editor.undo_redo.redo();
var map__52826_52863__$1 = cljs.core.__destructure_map(map__52826_52862);
var editor_cursor_52864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52826_52863__$1,new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800));
frontend.handler.history.restore_cursor_BANG_(editor_cursor_52864);

return frontend.state.set_editor_op_BANG_(null);
});

//# sourceMappingURL=frontend.handler.history.js.map
