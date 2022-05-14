goog.provide('frontend.handler.editor');
goog.scope(function(){
  frontend.handler.editor.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_asset_uploading_QMARK_ !== 'undefined')){
} else {
frontend.handler.editor._STAR_asset_uploading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_asset_uploading_process !== 'undefined')){
} else {
frontend.handler.editor._STAR_asset_uploading_process = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_selected_text !== 'undefined')){
} else {
frontend.handler.editor._STAR_selected_text = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.editor.get_selection_and_format = (function frontend$handler$editor$get_selection_and_format(){
var temp__5720__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
var temp__5720__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto____$1)){
var edit_id = temp__5720__auto____$1;
var temp__5720__auto____$2 = goog.dom.getElement(edit_id);
if(cljs.core.truth_(temp__5720__auto____$2)){
var input = temp__5720__auto____$2;
var selection_start = frontend.util.get_selection_start(input);
var selection_end = frontend.util.get_selection_end(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var selection = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,selection_start,selection_end):null);
var selection_start__$1 = (selection_start + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__109719_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__109719_SHARP_);
}),selection)));
var selection_end__$1 = (selection_end - cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__109720_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__109720_SHARP_);
}),cljs.core.reverse(selection))));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"selection-start","selection-start",-888859581),selection_start__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835),selection_end__$1,new cljs.core.Keyword(null,"selection","selection",975998651),(function (){var G__109729 = selection;
if((G__109729 == null)){
return null;
} else {
return clojure.string.trim(G__109729);
}
})(),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554),edit_id,new cljs.core.Keyword(null,"input","input",556931961),input], null);
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
frontend.handler.editor.format_text_BANG_ = (function frontend$handler$editor$format_text_BANG_(pattern_fn){
var temp__5720__auto__ = frontend.handler.editor.get_selection_and_format();
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
var map__109732 = m;
var map__109732__$1 = cljs.core.__destructure_map(map__109732);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"input","input",556931961));
var pattern = (pattern_fn.cljs$core$IFn$_invoke$arity$1 ? pattern_fn.cljs$core$IFn$_invoke$arity$1(format) : pattern_fn.call(null,format));
var pattern_count = cljs.core.count(pattern);
var pattern_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (selection_start - pattern_count);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),selection_start);
var pattern_suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,selection_end,(function (){var x__4339__auto__ = cljs.core.count(value);
var y__4340__auto__ = (selection_end + pattern_count);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})());
var already_wrapped_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pattern,pattern_prefix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern_suffix], 0));
var prefix = ((already_wrapped_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(selection_start - pattern_count)):cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selection_start));
var postfix = ((already_wrapped_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(selection_end + pattern_count)):cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selection_end));
var inner_value = (function (){var G__109743 = selection;
if((!(already_wrapped_QMARK_))){
return (function (p1__109730_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__109730_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)].join('');
})(G__109743);
} else {
return G__109743;
}
})();
var new_value = [prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner_value),postfix].join('');
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_id,new_value);

if(already_wrapped_QMARK_){
return frontend.util.cursor.set_selection_to(input,(selection_start - pattern_count),(selection_end - pattern_count));
} else {
if(cljs.core.truth_(selection)){
return frontend.util.cursor.move_cursor_to(input,(selection_end + pattern_count));
} else {
return frontend.util.cursor.set_selection_to(input,(selection_start + pattern_count),(selection_end + pattern_count));

}
}
} else {
return null;
}
});
frontend.handler.editor.bold_format_BANG_ = (function frontend$handler$editor$bold_format_BANG_(){
return frontend.handler.editor.format_text_BANG_(frontend.config.get_bold);
});
frontend.handler.editor.italics_format_BANG_ = (function frontend$handler$editor$italics_format_BANG_(){
return frontend.handler.editor.format_text_BANG_(frontend.config.get_italic);
});
frontend.handler.editor.highlight_format_BANG_ = (function frontend$handler$editor$highlight_format_BANG_(){
var temp__5720__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
return frontend.handler.editor.format_text_BANG_((function (){
return frontend.config.get_highlight(format);
}));
} else {
return null;
}
});
frontend.handler.editor.strike_through_format_BANG_ = (function frontend$handler$editor$strike_through_format_BANG_(){
return frontend.handler.editor.format_text_BANG_(frontend.config.get_strike_through);
});
frontend.handler.editor.html_link_format_BANG_ = (function frontend$handler$editor$html_link_format_BANG_(var_args){
var G__109749 = arguments.length;
switch (G__109749) {
case 0:
return frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (link){
var temp__5720__auto__ = frontend.handler.editor.get_selection_and_format();
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
var map__109751 = m;
var map__109751__$1 = cljs.core.__destructure_map(map__109751);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109751__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109751__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109751__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109751__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109751__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109751__$1,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109751__$1,new cljs.core.Keyword(null,"input","input",556931961));
var cur_pos = frontend.util.cursor.pos(input);
var empty_selection_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end);
var selection_link_QMARK_ = (function (){var and__4251__auto__ = selection;
if(cljs.core.truth_(and__4251__auto__)){
return ((frontend.util.starts_with_QMARK_(selection,"http://")) || (frontend.util.starts_with_QMARK_(selection,"https://")));
} else {
return and__4251__auto__;
}
})();
var vec__109752 = ((empty_selection_QMARK_)?frontend.config.get_empty_link_and_forward_pos(format):(cljs.core.truth_(link)?frontend.config.with_label_link(format,selection,link):(cljs.core.truth_(selection_link_QMARK_)?frontend.config.with_default_link(format,selection):frontend.config.with_default_label(format,selection)
)));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109752,(0),null);
var forward_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109752,(1),null);
var new_value = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selection_start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selection_end)].join('');
var cur_pos__$1 = (function (){var or__4253__auto__ = selection_start;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cur_pos;
}
})();
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_id,new_value);

return frontend.util.cursor.move_cursor_to(input,(cur_pos__$1 + forward_pos));
} else {
return null;
}
}));

(frontend.handler.editor.html_link_format_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.open_block_in_sidebar_BANG_ = (function frontend$handler$editor$open_block_in_sidebar_BANG_(block_id){
if(cljs.core.truth_(block_id)){
var temp__5720__auto__ = (function (){var G__109756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109756) : frontend.db.entity.call(null,G__109756));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var page_QMARK_ = (new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block) == null);
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),((page_QMARK_)?new cljs.core.Keyword(null,"page","page",849072397):new cljs.core.Keyword(null,"block","block",664686210)));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.reset_cursor_range_BANG_ = (function frontend$handler$editor$reset_cursor_range_BANG_(node){
if(cljs.core.truth_(node)){
return frontend.state.set_cursor_range_BANG_(frontend.util.caret_range(node));
} else {
return null;
}
});
frontend.handler.editor.restore_cursor_pos_BANG_ = (function frontend$handler$editor$restore_cursor_pos_BANG_(id,markup){
var temp__5720__auto__ = goog.dom.getElement(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
var cursor_range = frontend.state.get_cursor_range();
var pos = (function (){var or__4253__auto__ = frontend.state.get_editor_last_pos();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = cursor_range;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.diff.find_position(markup,cursor_range);
} else {
return and__4251__auto__;
}
}
})();
frontend.util.cursor.move_cursor_to(node,pos);

return frontend.state.clear_editor_last_pos_BANG_();
} else {
return null;
}
});
frontend.handler.editor.highlight_block_BANG_ = (function frontend$handler$editor$highlight_block_BANG_(block_uuid){
var blocks = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName(cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid)));
var seq__109758 = cljs.core.seq(blocks);
var chunk__109759 = null;
var count__109760 = (0);
var i__109761 = (0);
while(true){
if((i__109761 < count__109760)){
var block = chunk__109759.cljs$core$IIndexed$_nth$arity$2(null,i__109761);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"block-highlight");


var G__110273 = seq__109758;
var G__110274 = chunk__109759;
var G__110275 = count__109760;
var G__110276 = (i__109761 + (1));
seq__109758 = G__110273;
chunk__109759 = G__110274;
count__109760 = G__110275;
i__109761 = G__110276;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__109758);
if(temp__5720__auto__){
var seq__109758__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__109758__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__109758__$1);
var G__110277 = cljs.core.chunk_rest(seq__109758__$1);
var G__110278 = c__4679__auto__;
var G__110279 = cljs.core.count(c__4679__auto__);
var G__110280 = (0);
seq__109758 = G__110277;
chunk__109759 = G__110278;
count__109760 = G__110279;
i__109761 = G__110280;
continue;
} else {
var block = cljs.core.first(seq__109758__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"block-highlight");


var G__110281 = cljs.core.next(seq__109758__$1);
var G__110282 = null;
var G__110283 = (0);
var G__110284 = (0);
seq__109758 = G__110281;
chunk__109759 = G__110282;
count__109760 = G__110283;
i__109761 = G__110284;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.editor.unhighlight_blocks_BANG_ = (function frontend$handler$editor$unhighlight_blocks_BANG_(){
var blocks = (function (){var G__109763 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName("block-highlight"));
var G__109763__$1 = (((G__109763 == null))?null:cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),G__109763));
if((G__109763__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,G__109763__$1);
}
})();
var seq__109764 = cljs.core.seq(blocks);
var chunk__109765 = null;
var count__109766 = (0);
var i__109767 = (0);
while(true){
if((i__109767 < count__109766)){
var block = chunk__109765.cljs$core$IIndexed$_nth$arity$2(null,i__109767);
goog.dom.classes.remove(block,"block-highlight");


var G__110285 = seq__109764;
var G__110286 = chunk__109765;
var G__110287 = count__109766;
var G__110288 = (i__109767 + (1));
seq__109764 = G__110285;
chunk__109765 = G__110286;
count__109766 = G__110287;
i__109767 = G__110288;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__109764);
if(temp__5720__auto__){
var seq__109764__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__109764__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__109764__$1);
var G__110289 = cljs.core.chunk_rest(seq__109764__$1);
var G__110290 = c__4679__auto__;
var G__110291 = cljs.core.count(c__4679__auto__);
var G__110292 = (0);
seq__109764 = G__110289;
chunk__109765 = G__110290;
count__109766 = G__110291;
i__109767 = G__110292;
continue;
} else {
var block = cljs.core.first(seq__109764__$1);
goog.dom.classes.remove(block,"block-highlight");


var G__110293 = cljs.core.next(seq__109764__$1);
var G__110294 = null;
var G__110295 = (0);
var G__110296 = (0);
seq__109764 = G__110293;
chunk__109765 = G__110294;
count__109766 = G__110295;
i__109767 = G__110296;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.editor.get_edit_input_id_with_block_id = (function frontend$handler$editor$get_edit_input_id_with_block_id(block_id){
var temp__5720__auto__ = frontend.util.get_first_block_by_id(block_id);
if(cljs.core.truth_(temp__5720__auto__)){
var first_block = temp__5720__auto__;
return clojure.string.replace(frontend.handler.editor.goog$module$goog$object.get(first_block,"id"),"ls-block","edit-block");
} else {
return null;
}
});
frontend.handler.editor.clear_selection_BANG_ = (function frontend$handler$editor$clear_selection_BANG_(){
frontend.util.select_unhighlight_BANG_(dommy.utils.__GT_Array(document.getElementsByClassName("selected")));

return frontend.state.clear_selection_BANG_();
});
frontend.handler.editor.text_range_by_lst_fst_line = (function frontend$handler$editor$text_range_by_lst_fst_line(content,p__109771){
var vec__109772 = p__109771;
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109772,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109772,(1),null);
var G__109775 = direction;
var G__109775__$1 = (((G__109775 instanceof cljs.core.Keyword))?G__109775.fqn:null);
switch (G__109775__$1) {
case "up":
var last_new_line = (function (){var or__4253__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(content,"\n");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (-1);
}
})();
var end = ((last_new_line + pos) + (1));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),end);

break;
case "down":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3((function (){var or__4253__auto__ = cljs.core.first(clojure.string.split_lines(content));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),(0),pos);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109775__$1)].join('')));

}
});
frontend.handler.editor.edit_block_BANG_ = (function frontend$handler$editor$edit_block_BANG_(var_args){
var G__109777 = arguments.length;
switch (G__109777) {
case 3:
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (block,pos,id){
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4(block,pos,id,null);
}));

(frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (block,pos,id,p__109778){
var map__109779 = p__109778;
var map__109779__$1 = cljs.core.__destructure_map(map__109779);
var custom_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109779__$1,new cljs.core.Keyword(null,"custom-content","custom-content",-8240001));
var tail_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109779__$1,new cljs.core.Keyword(null,"tail-len","tail-len",699304522),(0));
var move_cursor_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109779__$1,new cljs.core.Keyword(null,"move-cursor?","move-cursor?",-229137728),true);
if(frontend.config.publishing_QMARK_){
return null;
} else {
var temp__5720__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
var block__$1 = (function (){var or__4253__auto__ = (function (){var G__109780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109780) : frontend.db.pull.call(null,G__109780));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return block;
}
})();
var edit_input_id = ((cljs.core.uuid_QMARK_(id))?frontend.handler.editor.get_edit_input_id_with_block_id(id):clojure.string.replace([cljs.core.subs.cljs$core$IFn$_invoke$arity$3(id,(0),(cljs.core.count(id) - (36))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)].join(''),"ls-block","edit-block"));
var content = (function (){var or__4253__auto__ = custom_content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return "";
}
}
})();
var content_length = cljs.core.count(content);
var text_range = ((cljs.core.vector_QMARK_(pos))?frontend.handler.editor.text_range_by_lst_fst_line(content,pos):(((((tail_len > (0))) && ((cljs.core.count(content) >= tail_len))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),(cljs.core.count(content) - tail_len)):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max","max",61366548),pos)) || ((content_length <= pos))))?content:cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),pos)
)));
var content__$1 = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block__$1),content));
frontend.handler.editor.clear_selection_BANG_();

return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$5(edit_input_id,content__$1,block__$1,text_range,move_cursor_QMARK_);
} else {
return null;
}
}
}));

(frontend.handler.editor.edit_block_BANG_.cljs$lang$maxFixedArity = 4);

frontend.handler.editor.another_block_with_same_id_exists_QMARK_ = (function frontend$handler$editor$another_block_with_same_id_exists_QMARK_(current_id,block_id){
var and__4251__auto__ = typeof block_id === 'string';
if(and__4251__auto__){
var and__4251__auto____$1 = logseq.graph_parser.util.uuid_string_QMARK_(block_id);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_id,cljs.core.uuid(block_id));
if(and__4251__auto____$2){
var G__109781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(block_id)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109781) : frontend.db.entity.call(null,G__109781));
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
frontend.handler.editor.attach_page_properties_if_exists_BANG_ = (function frontend$handler$editor$attach_page_properties_if_exists_BANG_(block){
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__4251__auto__;
}
})())){
var page_properties = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block);
var str__GT_page = (function (n){
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2(n,true);
});
var refs = frontend.util.distinct_by(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block),cljs.core.map.cljs$core$IFn$_invoke$arity$2(str__GT_page,cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__109783){
var vec__109784 = p__109783;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109784,(1),null);
return cljs.core.coll_QMARK_(v);
}),page_properties)))))));
var map__109782 = page_properties;
var map__109782__$1 = cljs.core.__destructure_map(map__109782);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109782__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109782__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var page_tx = (function (){var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
var retract_attributes = (cljs.core.truth_(id)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (attribute){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,attribute], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("block","alias","block/alias",-2112644699)], null)):null);
var tags__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(str__GT_page,tags));
var alias__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(str__GT_page,alias));
var tx = (function (){var G__109787 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","properties","block/properties",708347145),page_properties], null);
var G__109787__$1 = ((cljs.core.seq(tags__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109787,new cljs.core.Keyword("block","tags","block/tags",1814948340),tags__$1):G__109787);
if(cljs.core.seq(alias__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109787__$1,new cljs.core.Keyword("block","alias","block/alias",-2112644699),alias__$1);
} else {
return G__109787__$1;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(retract_attributes,tx);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","refs","block/refs",-1214495349),refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("db","other-tx","db/other-tx",337296620),page_tx], 0));
} else {
return block;
}
});
frontend.handler.editor.remove_non_existed_refs_BANG_ = (function frontend$handler$editor$remove_non_existed_refs_BANG_(refs){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (x){
return ((((cljs.core.vector_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(x))) && (((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(x) : frontend.db.entity.call(null,x)) == null)))))) || ((x == null)));
}),refs);
});
frontend.handler.editor.with_marker_time = (function frontend$handler$editor$with_marker_time(content,block,format,new_marker,old_marker){
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.state.enable_timetracking_QMARK_();
if(and__4251__auto__){
return new_marker;
} else {
return and__4251__auto__;
}
})())){
try{var logbook_exists_QMARK_ = (function (){var and__4251__auto__ = new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__4251__auto__)){
return frontend.util.drawer.get_logbook(new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__4251__auto__;
}
})();
var new_marker__$1 = clojure.string.trim(clojure.string.lower_case(cljs.core.name(new_marker)));
var old_marker__$1 = (cljs.core.truth_(old_marker)?clojure.string.trim(clojure.string.lower_case(cljs.core.name(old_marker))):null);
var new_content = (((((((old_marker__$1 == null)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"doing")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"now")))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"todo")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"doing")))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"later")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"now")))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(old_marker__$1,new_marker__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["now"], 0))) && (cljs.core.not(logbook_exists_QMARK_)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(old_marker__$1,new_marker__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["doing"], 0))) && (cljs.core.not(logbook_exists_QMARK_))))))))))))?frontend.util.clock.clock_in(format,content):((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"doing")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"todo")))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"now")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"later")))) || (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["doing",null,"now",null], null), null),old_marker__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"done"))))))))?frontend.util.clock.clock_out(format,content):content
));
return new_content;
}catch (e109788){if((e109788 instanceof Error)){
var _e = e109788;
return content;
} else {
throw e109788;

}
}} else {
return content;
}
});
frontend.handler.editor.with_timetracking = (function frontend$handler$editor$with_timetracking(block,value){
if(((frontend.state.enable_timetracking_QMARK_()) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),value)))){
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
var new_marker = cljs.core.last(logseq.graph_parser.util.safe_re_find(frontend.util.marker.marker_pattern(format),(function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()));
var new_value = frontend.handler.editor.with_marker_time(value,block,format,new_marker,new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block));
return new_value;
} else {
return value;
}
});
frontend.handler.editor.wrap_parse_block = (function frontend$handler$editor$wrap_parse_block(p__109789){
var map__109790 = p__109789;
var map__109790__$1 = cljs.core.__destructure_map(map__109790);
var block = map__109790__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109790__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109790__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109790__$1,new cljs.core.Keyword("block","left","block/left",-443712566));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109790__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109790__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109790__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109790__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var block__$1 = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__4251__auto__)){
var G__109794 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109794) : frontend.db.pull.call(null,G__109794));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return block;
}
})();
var block__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(uuid,format,pre_block_QMARK_,new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$1))], 0));
var properties = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block__$2);
var real_content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$2);
var content__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.seq(properties);
if(and__4251__auto__){
var and__4251__auto____$1 = real_content;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(real_content,content);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?frontend.util.property.with_built_in_properties(properties,content,format):content);
var content__$2 = frontend.util.drawer.with_logbook(block__$2,content__$1);
var content__$3 = frontend.handler.editor.with_timetracking(block__$2,content__$2);
var first_block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,page);
var ast = frontend.format.mldoc.__GT_edn(clojure.string.trim(content__$3),logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var first_elem_type = cljs.core.first(cljs.core.ffirst(ast));
var first_elem_meta = cljs.core.second(cljs.core.ffirst(ast));
var properties_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Property_Drawer",null,"Properties",null], null), null),first_elem_type);
var markdown_heading_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"markdown","markdown",1227225089))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Heading",first_elem_type)) && ((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(first_elem_meta) == null)))));
var block_with_title_QMARK_ = frontend.format.mldoc.block_with_title_QMARK_(first_elem_type);
var content__$4 = clojure.string.triml(content__$3);
var content__$5 = clojure.string.replace(content__$4,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("((%s))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)], 0)),"");
var vec__109791 = ((((first_block_QMARK_) && (properties_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content__$5], null):((markdown_heading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content__$5], null):(function (){var content_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_block_pattern(format)),((block_with_title_QMARK_)?" ":"\n"),content__$5].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content_SINGLEQUOTE_], null);
})()
));
var content__$6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109791,(0),null);
var content_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109791,(1),null);
var block__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block__$2,new cljs.core.Keyword("block","content","block/content",-161885195),content_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","format","block/format",-1212045901),format], 0));
var block__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,block__$3,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),null], null), null),frontend.db_schema.retract_attributes));
var block__$5 = frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$1(block__$4);
var block__$6 = (cljs.core.truth_((function (){var and__4251__auto__ = first_block_QMARK_;
if(and__4251__auto__){
return new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block__$5);
} else {
return and__4251__auto__;
}
})())?block__$5:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block__$5,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521)));
var block__$7 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(block__$6,new cljs.core.Keyword("block","refs","block/refs",-1214495349),frontend.handler.editor.remove_non_existed_refs_BANG_);
var block__$8 = frontend.handler.editor.attach_page_properties_if_exists_BANG_(block__$7);
var new_properties = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(properties,frontend.util.property.built_in_properties()),new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block__$8)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$8,new cljs.core.Keyword("block","top?","block/top?",-1838733025),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","bottom?","block/bottom?",-1886197289)], 0)),new cljs.core.Keyword("block","content","block/content",-161885195),content__$6,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","properties","block/properties",708347145),new_properties], 0)),(cljs.core.truth_(level)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","level","block/level",1182509971),level], null):cljs.core.PersistentArrayMap.EMPTY)], 0));
});
frontend.handler.editor.save_block_inner_BANG_ = (function frontend$handler$editor$save_block_inner_BANG_(block,value,p__109795){
var map__109796 = p__109795;
var map__109796__$1 = cljs.core.__destructure_map(map__109796);
var block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","content","block/content",-161885195),value);
var block__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,block__$1,frontend.db_schema.retract_attributes);
if(cljs.core.truth_(goog.DEBUG)){
var k__44398__auto__ = "Save block: ";
console.time(k__44398__auto__);

var res__44399__auto__ = (function (){var block__$3 = frontend.handler.editor.wrap_parse_block(block__$2);
var transact_data__61870__auto___110299 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto___110300 = (cljs.core.truth_(transact_data__61870__auto___110299)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
if(cljs.core.truth_(transact_data__61870__auto___110299)){
frontend.modules.outliner.core.save_block_BANG_(block__$3);
} else {
var _STAR_transaction_data_STAR__orig_val__109797_110301 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__109798_110302 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__109798_110302);

try{frontend.modules.outliner.core.save_block_BANG_(block__$3);

var r__61872__auto___110303 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto___110304 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto___110303], 0));
var tx_meta__61874__auto___110305 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto___110303));
var all_tx__61875__auto___110306 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto___110304,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110300));
var opts_SHARP___61876__auto___110307 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto___110300,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto___110305], 0));
if(cljs.core.seq(all_tx__61875__auto___110306)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110300))){
} else {
var result__61877__auto___110308 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto___110306,opts_SHARP___61876__auto___110307);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto___110306,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto___110305,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto___110308], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__109797_110301);
}}

var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var title = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__109799 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block__$3));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109799) : frontend.db.entity.call(null,G__109799));
})());
if(cljs.core.truth_(temp__5720__auto____$1)){
var old_page_name = temp__5720__auto____$1;
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block__$3);
if(cljs.core.truth_(and__4251__auto__)){
return (((!(clojure.string.blank_QMARK_(title)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc(title),old_page_name)));
} else {
return and__4251__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","title-property-changed","page/title-property-changed",-1938781817),old_page_name,title], null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();
console.timeEnd(k__44398__auto__);

return res__44399__auto__;
} else {
var block__$3 = frontend.handler.editor.wrap_parse_block(block__$2);
var transact_data__61870__auto___110309 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto___110310 = (cljs.core.truth_(transact_data__61870__auto___110309)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
if(cljs.core.truth_(transact_data__61870__auto___110309)){
frontend.modules.outliner.core.save_block_BANG_(block__$3);
} else {
var _STAR_transaction_data_STAR__orig_val__109800_110311 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__109801_110312 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__109801_110312);

try{frontend.modules.outliner.core.save_block_BANG_(block__$3);

var r__61872__auto___110313 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto___110314 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto___110313], 0));
var tx_meta__61874__auto___110315 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto___110313));
var all_tx__61875__auto___110316 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto___110314,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110310));
var opts_SHARP___61876__auto___110317 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto___110310,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto___110315], 0));
if(cljs.core.seq(all_tx__61875__auto___110316)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110310))){
} else {
var result__61877__auto___110318 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto___110316,opts_SHARP___61876__auto___110317);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto___110316,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto___110315,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto___110318], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__109800_110311);
}}

var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var title = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__109802 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block__$3));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109802) : frontend.db.entity.call(null,G__109802));
})());
if(cljs.core.truth_(temp__5720__auto____$1)){
var old_page_name = temp__5720__auto____$1;
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block__$3);
if(cljs.core.truth_(and__4251__auto__)){
return (((!(clojure.string.blank_QMARK_(title)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc(title),old_page_name)));
} else {
return and__4251__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","title-property-changed","page/title-property-changed",-1938781817),old_page_name,title], null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
});
frontend.handler.editor.save_block_if_changed_BANG_ = (function frontend$handler$editor$save_block_if_changed_BANG_(var_args){
var G__109804 = arguments.length;
switch (G__109804) {
case 2:
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block,value){
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3(block,value,null);
}));

(frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (block,value,p__109805){
var map__109806 = p__109805;
var map__109806__$1 = cljs.core.__destructure_map(map__109806);
var opts = map__109806__$1;
var force_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109806__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));
var map__109807 = block;
var map__109807__$1 = cljs.core.__destructure_map(map__109807);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109807__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109807__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109807__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109807__$1,new cljs.core.Keyword("block","repo","block/repo",2119209932));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109807__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109807__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var repo__$1 = (function (){var or__4253__auto__ = repo;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
var format__$1 = (function (){var or__4253__auto__ = format;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var page__$1 = (function (){var G__109808 = repo__$1;
var G__109809 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__109808,G__109809) : frontend.db.entity.call(null,G__109808,G__109809));
})();
var block_id = ((cljs.core.map_QMARK_(properties))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.Keyword(null,"id","id",-1388402092)):null);
var content__$1 = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(format__$1,content));
if(cljs.core.truth_(frontend.handler.editor.another_block_with_same_id_exists_QMARK_(uuid,block_id))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.content","p.content",-1435376888),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Block with the id %s already exists!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_id], 0))], null),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
if(cljs.core.truth_(force_QMARK_)){
return frontend.handler.editor.save_block_inner_BANG_(block,value,opts);
} else {
var content_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content__$1),clojure.string.trim(value));
if(cljs.core.truth_((function (){var and__4251__auto__ = content_changed_QMARK_;
if(and__4251__auto__){
return page__$1;
} else {
return and__4251__auto__;
}
})())){
return frontend.handler.editor.save_block_inner_BANG_(block,value,opts);
} else {
return null;
}

}
}
}));

(frontend.handler.editor.save_block_if_changed_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.editor.compute_fst_snd_block_text = (function frontend$handler$editor$compute_fst_snd_block_text(value,pos){
if(typeof value === 'string'){
var fst_block_text = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),pos);
var snd_block_text = clojure.string.triml(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,pos));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fst_block_text,snd_block_text], null);
} else {
return null;
}
});
frontend.handler.editor.outliner_insert_block_BANG_ = (function frontend$handler$editor$outliner_insert_block_BANG_(config,current_block,new_block,p__109810){
var map__109811 = p__109810;
var map__109811__$1 = cljs.core.__destructure_map(map__109811);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109811__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109811__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109811__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var ref_query_top_block_QMARK_ = (function (){var and__4251__auto__ = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__4251__auto__;
}
})();
var has_children_QMARK_ = (function (){var G__109812 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__109812) : frontend.db.has_children_QMARK_.call(null,G__109812));
})();
var sibling_QMARK___$1 = (cljs.core.truth_(ref_query_top_block_QMARK_)?false:((cljs.core.boolean_QMARK_(sibling_QMARK_))?sibling_QMARK_:(cljs.core.truth_(frontend.util.collapsed_QMARK_(current_block))?true:cljs.core.not(has_children_QMARK_)
)));
var transact_data__61870__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto__ = (cljs.core.truth_(transact_data__61870__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
if(cljs.core.truth_(transact_data__61870__auto__)){
var G__109813_110324 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block], null);
(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(G__109813_110324) : frontend.handler.editor.save_current_block_BANG_.call(null,G__109813_110324));

return frontend.modules.outliner.core.insert_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),current_block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_], null));
} else {
var _STAR_transaction_data_STAR__orig_val__109814 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__109815 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__109815);

try{var G__109816_110325 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block], null);
(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(G__109816_110325) : frontend.handler.editor.save_current_block_BANG_.call(null,G__109816_110325));

frontend.modules.outliner.core.insert_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),current_block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_], null));

var r__61872__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto__], 0));
var tx_meta__61874__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto__));
var all_tx__61875__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__));
var opts_SHARP___61876__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto__], 0));
if(cljs.core.seq(all_tx__61875__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__))){
return null;
} else {
var result__61877__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto__,opts_SHARP___61876__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__109814);
}}
});
frontend.handler.editor.block_self_alone_when_insert_QMARK_ = (function frontend$handler$editor$block_self_alone_when_insert_QMARK_(config,uuid){
var current_page = frontend.state.get_current_page();
var block_id = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = logseq.graph_parser.util.uuid_string_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(and__4251__auto____$1)){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = current_page;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = logseq.graph_parser.util.uuid_string_QMARK_(current_page);
if(cljs.core.truth_(and__4251__auto____$1)){
return current_page;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uuid,(function (){var and__4251__auto__ = block_id;
if(cljs.core.truth_(and__4251__auto__)){
return medley.core.uuid(block_id);
} else {
return and__4251__auto__;
}
})());
});
frontend.handler.editor.insert_new_block_before_block_aux_BANG_ = (function frontend$handler$editor$insert_new_block_before_block_aux_BANG_(config,block,_value,p__109817){
var map__109818 = p__109817;
var map__109818__$1 = cljs.core.__destructure_map(map__109818);
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109818__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var new_m = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.db.new_block_id(),new cljs.core.Keyword("block","content","block/content",-161885195),""], null);
var prev_block = frontend.handler.editor.wrap_parse_block(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","journal?","block/journal?",-970683127)], null)),new_m], 0)));
var left_block = (function (){var G__109819 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109819) : frontend.db.pull.call(null,G__109819));
})();
if(cljs.core.truth_(goog.DEBUG)){
var k__44398__auto___110333 = "outliner insert block";
console.time(k__44398__auto___110333);

var res__44399__auto___110334 = (function (){var sibling_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)));
return frontend.handler.editor.outliner_insert_block_BANG_(config,left_block,prev_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
})();
console.timeEnd(k__44398__auto___110333);

} else {
var sibling_QMARK__110335 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)));
frontend.handler.editor.outliner_insert_block_BANG_(config,left_block,prev_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__110335,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
}

return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(prev_block) : ok_handler.call(null,prev_block));
});
frontend.handler.editor.insert_new_block_aux_BANG_ = (function frontend$handler$editor$insert_new_block_aux_BANG_(config,p__109820,value,p__109821){
var map__109822 = p__109820;
var map__109822__$1 = cljs.core.__destructure_map(map__109822);
var block = map__109822__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109822__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var map__109823 = p__109821;
var map__109823__$1 = cljs.core.__destructure_map(map__109823);
var _opts = map__109823__$1;
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109823__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var block_self_QMARK_ = frontend.handler.editor.block_self_alone_when_insert_QMARK_(config,uuid);
var input = goog.dom.getElement(frontend.state.get_edit_input_id());
var pos = frontend.util.cursor.pos(input);
var vec__109824 = frontend.handler.editor.compute_fst_snd_block_text(value,pos);
var fst_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109824,(0),null);
var snd_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109824,(1),null);
var current_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","content","block/content",-161885195),fst_block_text);
var current_block__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,current_block,frontend.db_schema.retract_attributes);
var current_block__$2 = frontend.handler.editor.wrap_parse_block(current_block__$1);
var new_m = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.db.new_block_id(),new cljs.core.Keyword("block","content","block/content",-161885195),snd_block_text], null);
var next_block = frontend.handler.editor.wrap_parse_block(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","journal?","block/journal?",-970683127)], null)),new_m], 0)));
var sibling_QMARK_ = ((block_self_QMARK_)?false:null);
frontend.handler.editor.outliner_insert_block_BANG_(config,current_block__$2,next_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));

frontend.util.set_change_value(input,fst_block_text);

return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(next_block) : ok_handler.call(null,next_block));
});
frontend.handler.editor.clear_when_saved_BANG_ = (function frontend$handler$editor$clear_when_saved_BANG_(){
frontend.state.clear_editor_show_state_BANG_();

return frontend.commands.restore_state(true);
});
frontend.handler.editor.get_state = (function frontend$handler$editor$get_state(){
var vec__109827 = frontend.state.get_editor_args();
var map__109830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109827,(0),null);
var map__109830__$1 = cljs.core.__destructure_map(map__109830);
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109830__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109830__$1,new cljs.core.Keyword(null,"block","block",664686210));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109830__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var block_parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109830__$1,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109830__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109830__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109827,(1),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109827,(2),null);
var node = goog.dom.getElement(id);
if(cljs.core.truth_(node)){
var value = frontend.handler.editor.goog$module$goog$object.get(node,"value");
var pos = frontend.util.get_selection_start(node);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550)],[format,(function (){var or__4253__auto__ = (function (){var G__109831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109831) : frontend.db.pull.call(null,G__109831));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return block;
}
})(),config,sidebar_QMARK_,value,pos,on_hide,node,block_id,id,block_parent_id]);
} else {
return null;
}
});
/**
 * Won't save previous block content - remember to save!
 */
frontend.handler.editor.insert_new_block_BANG_ = (function frontend$handler$editor$insert_new_block_BANG_(var_args){
var G__109833 = arguments.length;
switch (G__109833) {
case 1:
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
}));

(frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_state,block_value){
if((((!(frontend.config.publishing_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"insert","insert",1286475395),frontend.state.get_editor_op())))){
frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"insert","insert",1286475395));

var temp__5720__auto___110341 = frontend.handler.editor.get_state();
if(cljs.core.truth_(temp__5720__auto___110341)){
var state_110342 = temp__5720__auto___110341;
var map__109834_110343 = state_110342;
var map__109834_110344__$1 = cljs.core.__destructure_map(map__109834_110343);
var block_110345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109834_110344__$1,new cljs.core.Keyword(null,"block","block",664686210));
var value_110346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109834_110344__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id_110347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109834_110344__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var config_110348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109834_110344__$1,new cljs.core.Keyword(null,"config","config",994861415));
var value_110349__$1 = ((typeof block_value === 'string')?block_value:value_110346);
var block_id_110350 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_110345);
var block_110351__$1 = (function (){var or__4253__auto__ = (function (){var G__109838 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110350], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109838) : frontend.db.pull.call(null,G__109838));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return block_110345;
}
})();
var block_self_QMARK__110352 = frontend.handler.editor.block_self_alone_when_insert_QMARK_(config_110348,block_id_110350);
var input_110353 = goog.dom.getElement(frontend.state.get_edit_input_id());
var pos_110354 = frontend.util.cursor.pos(input_110353);
var vec__109835_110355 = frontend.handler.editor.compute_fst_snd_block_text(value_110349__$1,pos_110354);
var fst_block_text_110356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109835_110355,(0),null);
var snd_block_text_110357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109835_110355,(1),null);
var insert_fn_110358 = ((block_self_QMARK__110352)?frontend.handler.editor.insert_new_block_aux_BANG_:((((clojure.string.blank_QMARK_(fst_block_text_110356)) && ((!(clojure.string.blank_QMARK_(snd_block_text_110357))))))?frontend.handler.editor.insert_new_block_before_block_aux_BANG_:frontend.handler.editor.insert_new_block_aux_BANG_
));
var G__109839_110359 = config_110348;
var G__109840_110360 = block_110351__$1;
var G__109841_110361 = value_110349__$1;
var G__109842_110362 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089),(function (last_block){
frontend.handler.editor.clear_when_saved_BANG_();

return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(last_block,(0),id_110347);
})], null);
(insert_fn_110358.cljs$core$IFn$_invoke$arity$4 ? insert_fn_110358.cljs$core$IFn$_invoke$arity$4(G__109839_110359,G__109840_110360,G__109841_110361,G__109842_110362) : insert_fn_110358.call(null,G__109839_110359,G__109840_110360,G__109841_110361,G__109842_110362));
} else {
}
} else {
}

return frontend.state.set_editor_op_BANG_(null);
}));

(frontend.handler.editor.insert_new_block_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.api_insert_new_block_BANG_ = (function frontend$handler$editor$api_insert_new_block_BANG_(content,p__109844){
var map__109845 = p__109844;
var map__109845__$1 = cljs.core.__destructure_map(map__109845);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109845__$1,new cljs.core.Keyword(null,"page","page",849072397));
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109845__$1,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109845__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false);
var before_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109845__$1,new cljs.core.Keyword(null,"before?","before?",765621039),false);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109845__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var custom_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109845__$1,new cljs.core.Keyword(null,"custom-uuid","custom-uuid",-1095135430));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109845__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var edit_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109845__$1,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),true);
if(cljs.core.truth_((function (){var or__4253__auto__ = page;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return block_uuid;
}
})())){
var before_QMARK___$1 = (cljs.core.truth_(page)?false:before_QMARK_);
var sibling_QMARK___$1 = (cljs.core.truth_(before_QMARK___$1)?true:(cljs.core.truth_(page)?false:sibling_QMARK_));
var block = (cljs.core.truth_(page)?(function (){var G__109846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(page)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109846) : frontend.db.entity.call(null,G__109846));
})():(function (){var G__109847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109847) : frontend.db.entity.call(null,G__109847));
})());
if(cljs.core.truth_(block)){
var last_block = ((cljs.core.not(sibling_QMARK___$1))?(function (){var children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
var blocks = (frontend.db.sort_by_left.cljs$core$IFn$_invoke$arity$2 ? frontend.db.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,block) : frontend.db.sort_by_left.call(null,children,block));
var last_block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(blocks));
if(cljs.core.truth_(last_block_id)){
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(last_block_id) : frontend.db.pull.call(null,last_block_id));
} else {
return null;
}
})():null);
var format = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var G__109851 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__109851) : frontend.db.get_page_format.call(null,G__109851));
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
}
})();
var content__$1 = ((cljs.core.seq(properties))?frontend.util.property.insert_properties(format,content,properties):content);
var new_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366)], null)),new cljs.core.Keyword("block","content","block/content",-161885195),content__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","format","block/format",-1212045901),format], 0));
var new_block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_block,new cljs.core.Keyword("block","page","block/page",822314108),(cljs.core.truth_(page)?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block):new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(new_block))));
var new_block__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.editor.wrap_parse_block(new_block__$1),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__4253__auto__ = custom_uuid;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.db.new_block_id();
}
})());
var vec__109848 = (cljs.core.truth_(before_QMARK___$1)?(function (){var first_child_QMARK_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109843_SHARP_){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,p1__109843_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566)], null)));
var block__$1 = (function (){var G__109852 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109852) : frontend.db.pull.call(null,G__109852));
})();
var sibling_QMARK___$2 = (cljs.core.truth_((function (){var or__4253__auto__ = first_child_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())?false:sibling_QMARK___$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1,sibling_QMARK___$2], null);
})():(cljs.core.truth_(sibling_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__109853 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109853) : frontend.db.pull.call(null,G__109853));
})(),sibling_QMARK___$1], null):(cljs.core.truth_(last_block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_block,true], null):(cljs.core.truth_(block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__109854 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109854) : frontend.db.pull.call(null,G__109854));
})(),sibling_QMARK___$1], null):null
))));
var block_m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109848,(0),null);
var sibling_QMARK___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109848,(1),null);
if(cljs.core.truth_(block_m)){
frontend.handler.editor.outliner_insert_block_BANG_(cljs.core.PersistentArrayMap.EMPTY,block_m,new_block__$2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$2,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_], null));

if(cljs.core.truth_(edit_block_QMARK_)){
if(cljs.core.truth_((function (){var and__4251__auto__ = replace_empty_target_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(last_block));
} else {
return and__4251__auto__;
}
})())){
setTimeout((function (){
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(last_block,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_block));
}),(10));
} else {
setTimeout((function (){
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(new_block__$2,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new_block__$2));
}),(10));
}
} else {
}

return new_block__$2;
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
frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_ = (function frontend$handler$editor$insert_first_page_block_if_not_exists_BANG_(var_args){
var G__109856 = arguments.length;
switch (G__109856) {
case 1:
return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (page_title){
return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2(page_title,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (page_title,opts){
if(((typeof page_title === 'string') && ((!(clojure.string.blank_QMARK_(page_title)))))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),page_title,opts], null));
} else {
return null;
}
}));

(frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.properties_block = (function frontend$handler$editor$properties_block(properties,format,page){
var content = frontend.util.property.insert_properties(format,"",properties);
var refs = frontend.format.block.get_page_refs_from_properties(properties);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","page","block/page",822314108)],[true,frontend.db.new_block_id(),properties,page,refs,cljs.core.keys(properties),format,content,page,page]);
});
frontend.handler.editor.update_timestamps_content_BANG_ = (function frontend$handler$editor$update_timestamps_content_BANG_(p__109857,content){
var map__109858 = p__109857;
var map__109858__$1 = cljs.core.__destructure_map(map__109858);
var block = map__109858__$1;
var repeated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109858__$1,new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109858__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109858__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
if(cljs.core.truth_(repeated_QMARK_)){
var scheduled_ast = frontend.handler.block.get_scheduled_ast(block);
var deadline_ast = frontend.handler.block.get_deadline_ast(block);
var content__$1 = (function (){var G__109859 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.handler.repeated.repeated_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheduled_ast,deadline_ast], null));
var G__109859__$1 = (((G__109859 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$1(ts),frontend.handler.repeated.next_timestamp_text(ts)], null);
}),G__109859));
if((G__109859__$1 == null)){
return null;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,p__109860){
var vec__109861 = p__109860;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109861,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109861,(1),null);
return clojure.string.replace(content__$1,old,new$);
}),content,G__109859__$1);
}
})();
var content__$2 = clojure.string.replace_first(content__$1,marker,(function (){var G__109864 = marker;
switch (G__109864) {
case "DOING":
return "TODO";

break;
case "NOW":
return "LATER";

break;
default:
return marker;

}
})());
var content__$3 = frontend.util.clock.clock_out(format,content__$2);
var content__$4 = frontend.util.drawer.insert_drawer(format,content__$3,"logbook",frontend.util.format.cljs$core$IFn$_invoke$arity$variadic([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),format))?"-":"*")," State \"DONE\" from \"%s\" [%s]"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([marker,frontend.date.get_date_time_string_3()], 0)));
return content__$4;
} else {
return content;
}
});
frontend.handler.editor.check = (function frontend$handler$editor$check(p__109865){
var map__109866 = p__109865;
var map__109866__$1 = cljs.core.__destructure_map(map__109866);
var block = map__109866__$1;
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109866__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109866__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var repeated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109866__$1,new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109866__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var new_content = clojure.string.replace_first(content,marker,"DONE");
var new_content__$1 = (cljs.core.truth_(repeated_QMARK_)?frontend.handler.editor.update_timestamps_content_BANG_(block,content):new_content);
var input_id = frontend.state.get_edit_input_id();
if(cljs.core.truth_((function (){var and__4251__auto__ = input_id;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.ends_with_QMARK_(input_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid));
} else {
return and__4251__auto__;
}
})())){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_content__$1);
} else {
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content__$1);
}
});
frontend.handler.editor.uncheck = (function frontend$handler$editor$uncheck(p__109867){
var map__109868 = p__109867;
var map__109868__$1 = cljs.core.__destructure_map(map__109868);
var block = map__109868__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109868__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109868__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var marker = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"now","now",-1650525531),frontend.state.get_preferred_workflow()))?"LATER":"TODO");
var new_content = clojure.string.replace_first(content,"DONE",marker);
var input_id = frontend.state.get_edit_input_id();
if(cljs.core.truth_((function (){var and__4251__auto__ = input_id;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.ends_with_QMARK_(input_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid));
} else {
return and__4251__auto__;
}
})())){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_content);
} else {
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
}
});
frontend.handler.editor.get_selected_blocks = (function frontend$handler$editor$get_selected_blocks(){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(frontend.state.get_selection_blocks()));
});
/**
 * The set-marker will set a new marker on the selected block.
 *   if the `new-marker` is nil, it will generate it automatically.
 */
frontend.handler.editor.set_marker = (function frontend$handler$editor$set_marker(var_args){
var G__109870 = arguments.length;
switch (G__109870) {
case 1:
return frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1 = (function (block){
return frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$2(block,null);
}));

(frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$2 = (function (p__109871,new_marker){
var map__109872 = p__109871;
var map__109872__$1 = cljs.core.__destructure_map(map__109872);
var block = map__109872__$1;
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109872__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109872__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109872__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var vec__109873 = frontend.util.marker.cycle_marker(content,marker,new_marker,format,frontend.state.get_preferred_workflow());
var new_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109873,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109873,(1),null);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
}));

(frontend.handler.editor.set_marker.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.cycle_todos_BANG_ = (function frontend$handler$editor$cycle_todos_BANG_(){
var temp__5720__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5720__auto__){
var blocks = temp__5720__auto__;
var ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109876_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__109876_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks)));
var seq__109877 = cljs.core.seq(ids);
var chunk__109878 = null;
var count__109879 = (0);
var i__109880 = (0);
while(true){
if((i__109880 < count__109879)){
var id = chunk__109878.cljs$core$IIndexed$_nth$arity$2(null,i__109880);
var block_110369 = (function (){var G__109883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109883) : frontend.db.pull.call(null,G__109883));
})();
frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1(block_110369);


var G__110370 = seq__109877;
var G__110371 = chunk__109878;
var G__110372 = count__109879;
var G__110373 = (i__109880 + (1));
seq__109877 = G__110370;
chunk__109878 = G__110371;
count__109879 = G__110372;
i__109880 = G__110373;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__109877);
if(temp__5720__auto____$1){
var seq__109877__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__109877__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__109877__$1);
var G__110374 = cljs.core.chunk_rest(seq__109877__$1);
var G__110375 = c__4679__auto__;
var G__110376 = cljs.core.count(c__4679__auto__);
var G__110377 = (0);
seq__109877 = G__110374;
chunk__109878 = G__110375;
count__109879 = G__110376;
i__109880 = G__110377;
continue;
} else {
var id = cljs.core.first(seq__109877__$1);
var block_110378 = (function (){var G__109884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109884) : frontend.db.pull.call(null,G__109884));
})();
frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1(block_110378);


var G__110379 = cljs.core.next(seq__109877__$1);
var G__110380 = null;
var G__110381 = (0);
var G__110382 = (0);
seq__109877 = G__110379;
chunk__109878 = G__110380;
count__109879 = G__110381;
i__109880 = G__110382;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
frontend.handler.editor.cycle_todo_BANG_ = (function frontend$handler$editor$cycle_todo_BANG_(){
var temp__5718__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5718__auto__){
var blocks = temp__5718__auto__;
return frontend.handler.editor.cycle_todos_BANG_();
} else {
if(cljs.core.truth_(frontend.state.get_edit_block())){
var edit_input_id = frontend.state.get_edit_input_id();
var current_input = goog.dom.getElement(edit_input_id);
var content = frontend.state.get_edit_content();
var format = (function (){var or__4253__auto__ = (function (){var G__109888 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__109888) : frontend.db.get_page_format.call(null,G__109888));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var vec__109885 = frontend.util.marker.cycle_marker(content,null,null,format,frontend.state.get_preferred_workflow());
var new_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109885,(0),null);
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109885,(1),null);
var new_pos = frontend.commands.compute_pos_delta_when_change_marker(content,marker,frontend.util.cursor.pos(current_input));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_input_id,new_content);

return frontend.util.cursor.move_cursor_to(current_input,new_pos);
} else {
return null;
}
}
});
frontend.handler.editor.set_priority = (function frontend$handler$editor$set_priority(p__109889,new_priority){
var map__109890 = p__109889;
var map__109890__$1 = cljs.core.__destructure_map(map__109890);
var block = map__109890__$1;
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109890__$1,new cljs.core.Keyword("block","priority","block/priority",1491369544));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109890__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var new_content = clojure.string.replace_first(content,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_priority], 0)));
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
});
frontend.handler.editor.cycle_priority_BANG_ = (function frontend$handler$editor$cycle_priority_BANG_(){
if(cljs.core.truth_(frontend.state.get_edit_block())){
var format = (function (){var or__4253__auto__ = (function (){var G__109891 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__109891) : frontend.db.get_page_format.call(null,G__109891));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var input_id = frontend.state.get_edit_input_id();
var content = frontend.state.get_edit_content();
var new_priority = frontend.util.priority.cycle_priority_state(content);
var new_value = frontend.util.priority.add_or_update_priority(content,format,new_priority);
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_value);
} else {
return null;
}
});
frontend.handler.editor.delete_block_aux_BANG_ = (function frontend$handler$editor$delete_block_aux_BANG_(p__109892,children_QMARK_){
var map__109893 = p__109892;
var map__109893__$1 = cljs.core.__destructure_map(map__109893);
var _block = map__109893__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109893__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109893__$1,new cljs.core.Keyword("block","repo","block/repo",2119209932));
var repo__$1 = (function (){var or__4253__auto__ = repo;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
var block = (function (){var G__109894 = repo__$1;
var G__109895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__109896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__109894,G__109895,G__109896) : frontend.db.pull.call(null,G__109894,G__109895,G__109896));
})();
if(cljs.core.truth_(block)){
var transact_data__61870__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto__ = (cljs.core.truth_(transact_data__61870__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null));
if(cljs.core.truth_(transact_data__61870__auto__)){
return frontend.modules.outliner.core.delete_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),children_QMARK_], null));
} else {
var _STAR_transaction_data_STAR__orig_val__109897 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__109898 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__109898);

try{frontend.modules.outliner.core.delete_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),children_QMARK_], null));

var r__61872__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto__], 0));
var tx_meta__61874__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto__));
var all_tx__61875__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__));
var opts_SHARP___61876__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto__], 0));
if(cljs.core.seq(all_tx__61875__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__))){
return null;
} else {
var result__61877__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto__,opts_SHARP___61876__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__109897);
}}
} else {
return null;
}
});
frontend.handler.editor.move_to_prev_block = (function frontend$handler$editor$move_to_prev_block(repo,sibling_block,format,id,value){
if(cljs.core.truth_((function (){var and__4251__auto__ = repo;
if(cljs.core.truth_(and__4251__auto__)){
return sibling_block;
} else {
return and__4251__auto__;
}
})())){
var temp__5720__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5720__auto__)){
var sibling_block_id = temp__5720__auto__;
var temp__5720__auto____$1 = (function (){var G__109899 = repo;
var G__109900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__109901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(sibling_block_id)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__109899,G__109900,G__109901) : frontend.db.pull.call(null,G__109899,G__109900,G__109901));
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var block = temp__5720__auto____$1;
var original_content = frontend.util.trim_safe(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block));
var value_SINGLEQUOTE_ = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(format,original_content));
var new_value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
var tail_len = cljs.core.count(value);
var pos = (function (){var x__4336__auto__ = (cljs.core.truth_(original_content)?logseq.graph_parser.utf8.length(logseq.graph_parser.utf8.encode(original_content)):(0));
var y__4337__auto__ = (0);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4(block,pos,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"custom-content","custom-content",-8240001),new_value,new cljs.core.Keyword(null,"tail-len","tail-len",699304522),tail_len,new cljs.core.Keyword(null,"move-cursor?","move-cursor?",-229137728),false], null));
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
frontend.handler.editor.delete_block_BANG_ = (function frontend$handler$editor$delete_block_BANG_(var_args){
var G__109903 = arguments.length;
switch (G__109903) {
case 1:
return frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$2(repo,true);
}));

(frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,delete_children_QMARK_){
frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"delete","delete",-1768633620));

var map__109904_110388 = frontend.handler.editor.get_state();
var map__109904_110389__$1 = cljs.core.__destructure_map(map__109904_110388);
var id_110390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109904_110389__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_id_110391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109904_110389__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var block_parent_id_110392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109904_110389__$1,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550));
var value_110393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109904_110389__$1,new cljs.core.Keyword(null,"value","value",305978217));
var format_110394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109904_110389__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
if(cljs.core.truth_(block_id_110391)){
var page_id_110396 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__109905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110391], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109905) : frontend.db.entity.call(null,G__109905));
})()));
var page_blocks_count_110397 = (function (){var and__4251__auto__ = page_id_110396;
if(cljs.core.truth_(and__4251__auto__)){
return (frontend.db.get_page_blocks_count.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_blocks_count.cljs$core$IFn$_invoke$arity$2(repo,page_id_110396) : frontend.db.get_page_blocks_count.call(null,repo,page_id_110396));
} else {
return and__4251__auto__;
}
})();
if((page_blocks_count_110397 > (1))){
var block_110398 = (function (){var G__109906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110391], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109906) : frontend.db.entity.call(null,G__109906));
})();
var has_children_QMARK__110399 = cljs.core.seq(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block_110398));
var block_110400__$1 = (function (){var G__109907 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_110398);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109907) : frontend.db.pull.call(null,G__109907));
})();
var left_110401 = frontend.modules.outliner.tree._get_left(frontend.modules.outliner.core.block(block_110400__$1));
var left_has_children_QMARK__110402 = (function (){var and__4251__auto__ = left_110401;
if(cljs.core.truth_(and__4251__auto__)){
var temp__5720__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(left_110401));
if(cljs.core.truth_(temp__5720__auto__)){
var block_id__$1 = temp__5720__auto__;
var block__$2 = (function (){var G__109908 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109908) : frontend.db.entity.call(null,G__109908));
})();
return cljs.core.seq(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block__$2));
} else {
return null;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = has_children_QMARK__110399;
if(and__4251__auto__){
return left_has_children_QMARK__110402;
} else {
return and__4251__auto__;
}
})())){
} else {
if(cljs.core.truth_(block_parent_id_110392)){
var block_parent_110404 = goog.dom.getElement(block_parent_id_110392);
var sibling_block_110405 = frontend.util.get_prev_block_non_collapsed_non_embed(block_parent_110404);
frontend.handler.editor.delete_block_aux_BANG_(block_110400__$1,delete_children_QMARK_);

frontend.handler.editor.move_to_prev_block(repo,sibling_block_110405,format_110394,id_110390,value_110393);
} else {
}
}
} else {
}
} else {
}

return frontend.state.set_editor_op_BANG_(null);
}));

(frontend.handler.editor.delete_block_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.delete_blocks_BANG_ = (function frontend$handler$editor$delete_blocks_BANG_(repo,block_uuids,blocks,dom_blocks){
if(cljs.core.seq(block_uuids)){
var uuid__GT_dom_block = cljs.core.zipmap(block_uuids,dom_blocks);
var block = cljs.core.first(blocks);
var block_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuid__GT_dom_block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var sibling_block = (cljs.core.truth_(block_parent)?frontend.util.get_prev_block_non_collapsed_non_embed(block_parent):null);
var transact_data__61870__auto___110406 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto___110407 = (cljs.core.truth_(transact_data__61870__auto___110406)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null));
if(cljs.core.truth_(transact_data__61870__auto___110406)){
frontend.modules.outliner.core.delete_blocks_BANG_(blocks,cljs.core.PersistentArrayMap.EMPTY);
} else {
var _STAR_transaction_data_STAR__orig_val__109909_110409 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__109910_110410 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__109910_110410);

try{frontend.modules.outliner.core.delete_blocks_BANG_(blocks,cljs.core.PersistentArrayMap.EMPTY);

var r__61872__auto___110411 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto___110412 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto___110411], 0));
var tx_meta__61874__auto___110413 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto___110411));
var all_tx__61875__auto___110414 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto___110412,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110407));
var opts_SHARP___61876__auto___110415 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto___110407,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto___110413], 0));
if(cljs.core.seq(all_tx__61875__auto___110414)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110407))){
} else {
var result__61877__auto___110416 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto___110414,opts_SHARP___61876__auto___110415);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto___110414,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto___110413,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto___110416], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__109909_110409);
}}

if(cljs.core.truth_(sibling_block)){
return frontend.handler.editor.move_to_prev_block(repo,sibling_block,new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),dommy.core.attr(sibling_block,"id"),"");
} else {
return null;
}
} else {
return null;
}
});
/**
 * col: a collection of [block-id property-key property-value].
 */
frontend.handler.editor.batch_set_block_property_BANG_ = (function frontend$handler$editor$batch_set_block_property_BANG_(col){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var transact_data__61870__auto___110418 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto___110419 = (cljs.core.truth_(transact_data__61870__auto___110418)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
if(cljs.core.truth_(transact_data__61870__auto___110418)){
var seq__109911_110420 = cljs.core.seq(col);
var chunk__109912_110421 = null;
var count__109913_110422 = (0);
var i__109914_110423 = (0);
while(true){
if((i__109914_110423 < count__109913_110422)){
var vec__109923_110424 = chunk__109912_110421.cljs$core$IIndexed$_nth$arity$2(null,i__109914_110423);
var block_id_110425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109923_110424,(0),null);
var key_110426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109923_110424,(1),null);
var value_110427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109923_110424,(2),null);
var block_id_110428__$1 = ((typeof block_id_110425 === 'string')?cljs.core.uuid(block_id_110425):block_id_110425);
var temp__5720__auto___110429__$1 = (function (){var G__109926 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110428__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109926) : frontend.db.entity.call(null,G__109926));
})();
if(cljs.core.truth_(temp__5720__auto___110429__$1)){
var block_110430 = temp__5720__auto___110429__$1;
var format_110431 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_110430);
var content_110432 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_110430);
var properties_110433 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_110430);
var properties_110434__$1 = (((value_110427 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_110433,key_110426):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_110433,key_110426,value_110427));
var content_110435__$1 = (((value_110427 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_110431,key_110426,content_110432):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_110431,content_110432,key_110426,value_110427));
var content_110436__$2 = frontend.util.property.remove_empty_properties(content_110435__$1);
var block_110437__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110428__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_110434__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_110436__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_110437__$1);
} else {
}


var G__110439 = seq__109911_110420;
var G__110440 = chunk__109912_110421;
var G__110441 = count__109913_110422;
var G__110442 = (i__109914_110423 + (1));
seq__109911_110420 = G__110439;
chunk__109912_110421 = G__110440;
count__109913_110422 = G__110441;
i__109914_110423 = G__110442;
continue;
} else {
var temp__5720__auto___110443__$1 = cljs.core.seq(seq__109911_110420);
if(temp__5720__auto___110443__$1){
var seq__109911_110444__$1 = temp__5720__auto___110443__$1;
if(cljs.core.chunked_seq_QMARK_(seq__109911_110444__$1)){
var c__4679__auto___110445 = cljs.core.chunk_first(seq__109911_110444__$1);
var G__110446 = cljs.core.chunk_rest(seq__109911_110444__$1);
var G__110447 = c__4679__auto___110445;
var G__110448 = cljs.core.count(c__4679__auto___110445);
var G__110449 = (0);
seq__109911_110420 = G__110446;
chunk__109912_110421 = G__110447;
count__109913_110422 = G__110448;
i__109914_110423 = G__110449;
continue;
} else {
var vec__109927_110450 = cljs.core.first(seq__109911_110444__$1);
var block_id_110451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109927_110450,(0),null);
var key_110452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109927_110450,(1),null);
var value_110453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109927_110450,(2),null);
var block_id_110454__$1 = ((typeof block_id_110451 === 'string')?cljs.core.uuid(block_id_110451):block_id_110451);
var temp__5720__auto___110455__$2 = (function (){var G__109930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110454__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109930) : frontend.db.entity.call(null,G__109930));
})();
if(cljs.core.truth_(temp__5720__auto___110455__$2)){
var block_110456 = temp__5720__auto___110455__$2;
var format_110457 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_110456);
var content_110458 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_110456);
var properties_110459 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_110456);
var properties_110460__$1 = (((value_110453 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_110459,key_110452):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_110459,key_110452,value_110453));
var content_110461__$1 = (((value_110453 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_110457,key_110452,content_110458):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_110457,content_110458,key_110452,value_110453));
var content_110462__$2 = frontend.util.property.remove_empty_properties(content_110461__$1);
var block_110463__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110454__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_110460__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_110462__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_110463__$1);
} else {
}


var G__110464 = cljs.core.next(seq__109911_110444__$1);
var G__110465 = null;
var G__110466 = (0);
var G__110467 = (0);
seq__109911_110420 = G__110464;
chunk__109912_110421 = G__110465;
count__109913_110422 = G__110466;
i__109914_110423 = G__110467;
continue;
}
} else {
}
}
break;
}
} else {
var _STAR_transaction_data_STAR__orig_val__109931_110468 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__109932_110469 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__109932_110469);

try{var seq__109933_110470 = cljs.core.seq(col);
var chunk__109934_110471 = null;
var count__109935_110472 = (0);
var i__109936_110473 = (0);
while(true){
if((i__109936_110473 < count__109935_110472)){
var vec__109945_110474 = chunk__109934_110471.cljs$core$IIndexed$_nth$arity$2(null,i__109936_110473);
var block_id_110475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109945_110474,(0),null);
var key_110476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109945_110474,(1),null);
var value_110477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109945_110474,(2),null);
var block_id_110478__$1 = ((typeof block_id_110475 === 'string')?cljs.core.uuid(block_id_110475):block_id_110475);
var temp__5720__auto___110479__$1 = (function (){var G__109948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110478__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109948) : frontend.db.entity.call(null,G__109948));
})();
if(cljs.core.truth_(temp__5720__auto___110479__$1)){
var block_110480 = temp__5720__auto___110479__$1;
var format_110481 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_110480);
var content_110482 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_110480);
var properties_110483 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_110480);
var properties_110484__$1 = (((value_110477 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_110483,key_110476):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_110483,key_110476,value_110477));
var content_110485__$1 = (((value_110477 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_110481,key_110476,content_110482):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_110481,content_110482,key_110476,value_110477));
var content_110486__$2 = frontend.util.property.remove_empty_properties(content_110485__$1);
var block_110487__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110478__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_110484__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_110486__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_110487__$1);
} else {
}


var G__110488 = seq__109933_110470;
var G__110489 = chunk__109934_110471;
var G__110490 = count__109935_110472;
var G__110491 = (i__109936_110473 + (1));
seq__109933_110470 = G__110488;
chunk__109934_110471 = G__110489;
count__109935_110472 = G__110490;
i__109936_110473 = G__110491;
continue;
} else {
var temp__5720__auto___110492__$1 = cljs.core.seq(seq__109933_110470);
if(temp__5720__auto___110492__$1){
var seq__109933_110493__$1 = temp__5720__auto___110492__$1;
if(cljs.core.chunked_seq_QMARK_(seq__109933_110493__$1)){
var c__4679__auto___110494 = cljs.core.chunk_first(seq__109933_110493__$1);
var G__110495 = cljs.core.chunk_rest(seq__109933_110493__$1);
var G__110496 = c__4679__auto___110494;
var G__110497 = cljs.core.count(c__4679__auto___110494);
var G__110498 = (0);
seq__109933_110470 = G__110495;
chunk__109934_110471 = G__110496;
count__109935_110472 = G__110497;
i__109936_110473 = G__110498;
continue;
} else {
var vec__109949_110499 = cljs.core.first(seq__109933_110493__$1);
var block_id_110500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109949_110499,(0),null);
var key_110501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109949_110499,(1),null);
var value_110502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109949_110499,(2),null);
var block_id_110503__$1 = ((typeof block_id_110500 === 'string')?cljs.core.uuid(block_id_110500):block_id_110500);
var temp__5720__auto___110504__$2 = (function (){var G__109952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110503__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109952) : frontend.db.entity.call(null,G__109952));
})();
if(cljs.core.truth_(temp__5720__auto___110504__$2)){
var block_110505 = temp__5720__auto___110504__$2;
var format_110506 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_110505);
var content_110507 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_110505);
var properties_110508 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_110505);
var properties_110509__$1 = (((value_110502 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_110508,key_110501):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_110508,key_110501,value_110502));
var content_110510__$1 = (((value_110502 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_110506,key_110501,content_110507):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_110506,content_110507,key_110501,value_110502));
var content_110511__$2 = frontend.util.property.remove_empty_properties(content_110510__$1);
var block_110512__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110503__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_110509__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_110511__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_110512__$1);
} else {
}


var G__110513 = cljs.core.next(seq__109933_110493__$1);
var G__110514 = null;
var G__110515 = (0);
var G__110516 = (0);
seq__109933_110470 = G__110513;
chunk__109934_110471 = G__110514;
count__109935_110472 = G__110515;
i__109936_110473 = G__110516;
continue;
}
} else {
}
}
break;
}

var r__61872__auto___110517 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto___110518 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto___110517], 0));
var tx_meta__61874__auto___110519 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto___110517));
var all_tx__61875__auto___110520 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto___110518,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110419));
var opts_SHARP___61876__auto___110521 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto___110419,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto___110519], 0));
if(cljs.core.seq(all_tx__61875__auto___110520)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110419))){
} else {
var result__61877__auto___110522 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto___110520,opts_SHARP___61876__auto___110521);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto___110520,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto___110519,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto___110522], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__109931_110468);
}}

var block_id = cljs.core.ffirst(col);
var block_id__$1 = ((typeof block_id === 'string')?cljs.core.uuid(block_id):block_id);
var input_pos = (function (){var or__4253__auto__ = frontend.state.get_edit_pos();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"max","max",61366548);
}
})();
var temp__5720__auto____$1 = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto____$1)){
var editing_block = temp__5720__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editing_block),block_id__$1)){
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(editing_block,input_pos,frontend.state.get_edit_input_id());
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
frontend.handler.editor.remove_block_property_BANG_ = (function frontend$handler$editor$remove_block_property_BANG_(block_id,key){
var key__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key);
return frontend.handler.editor.batch_set_block_property_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id,key__$1,null], null)], null));
});
frontend.handler.editor.set_block_property_BANG_ = (function frontend$handler$editor$set_block_property_BANG_(block_id,key,value){
var key__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key);
return frontend.handler.editor.batch_set_block_property_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id,key__$1,value], null)], null));
});
frontend.handler.editor.set_block_query_properties_BANG_ = (function frontend$handler$editor$set_block_query_properties_BANG_(block_id,all_properties,key,add_QMARK_){
var temp__5720__auto__ = (function (){var G__109953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109953) : frontend.db.entity.call(null,G__109953));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var query_properties = frontend.handler.common.safe_read_string(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null),""),"Failed to parse query properties");
var query_properties__$1 = ((cljs.core.seq(query_properties))?query_properties:all_properties);
var query_properties__$2 = (cljs.core.truth_(add_QMARK_)?cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(query_properties__$1,key)):cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),query_properties__$1));
var query_properties__$3 = cljs.core.vec(query_properties__$2);
if(cljs.core.seq(query_properties__$3)){
return frontend.handler.editor.set_block_property_BANG_(block_id,new cljs.core.Keyword(null,"query-properties","query-properties",-953532199),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_properties__$3));
} else {
return frontend.handler.editor.remove_block_property_BANG_(block_id,new cljs.core.Keyword(null,"query-properties","query-properties",-953532199));
}
} else {
return null;
}
});
frontend.handler.editor.set_block_timestamp_BANG_ = (function frontend$handler$editor$set_block_timestamp_BANG_(block_id,key,value){
var key__$1 = clojure.string.lower_case(key);
var block_id__$1 = ((typeof block_id === 'string')?cljs.core.uuid(block_id):block_id);
var key__$2 = clojure.string.lower_case(key__$1);
var value__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
var temp__5720__auto__ = (function (){var G__109954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109954) : frontend.db.pull.call(null,G__109954));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var map__109955 = block;
var map__109955__$1 = cljs.core.__destructure_map(map__109955);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109955__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var content__$1 = (function (){var or__4253__auto__ = content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_edit_content();
}
})();
var new_content = logseq.graph_parser.text.add_timestamp(logseq.graph_parser.text.remove_timestamp(content__$1,key__$2),key__$2,value__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content__$1,new_content)){
var input_id = frontend.state.get_edit_input_id();
if(cljs.core.truth_((function (){var and__4251__auto__ = input_id;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.ends_with_QMARK_(input_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id__$1));
} else {
return and__4251__auto__;
}
})())){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_content);
} else {
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.set_blocks_id_BANG_ = (function frontend$handler$editor$set_blocks_id_BANG_(block_ids){
var block_ids__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,block_ids);
var col = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block_id){
var block = (function (){var G__109956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109956) : frontend.db.entity.call(null,G__109956));
})();
if(cljs.core.truth_(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block))){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)], null);
}
}),block_ids__$1);
return frontend.handler.editor.batch_set_block_property_BANG_(col);
});
frontend.handler.editor.copy_block_ref_BANG_ = (function frontend$handler$editor$copy_block_ref_BANG_(var_args){
var G__109959 = arguments.length;
switch (G__109959) {
case 1:
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__109957_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__109957_SHARP_);
}));
}));

(frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,tap_clipboard){
frontend.handler.editor.set_blocks_id_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null));

return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1((tap_clipboard.cljs$core$IFn$_invoke$arity$1 ? tap_clipboard.cljs$core$IFn$_invoke$arity$1(block_id) : tap_clipboard.call(null,block_id)));
}));

(frontend.handler.editor.copy_block_ref_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.select_block_BANG_ = (function frontend$handler$editor$select_block_BANG_(block_uuid){
var blocks = document.getElementsByClassName(cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid));
if(cljs.core.seq(blocks)){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(blocks);
} else {
return null;
}
});
frontend.handler.editor.compose_copied_blocks_contents = (function frontend$handler$editor$compose_copied_blocks_contents(repo,block_ids){
var blocks = frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_ids));
var top_level_block_uuids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.modules.outliner.core.get_top_level_blocks(blocks));
return frontend.handler.export$.export_blocks_as_markdown(repo,top_level_block_uuids,frontend.state.get_export_block_text_indent_style(),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,frontend.state.get_export_block_text_remove_options()));
});
frontend.handler.editor.copy_selection_blocks = (function frontend$handler$editor$copy_selection_blocks(){
var temp__5720__auto__ = cljs.core.seq(frontend.state.get_selection_blocks());
if(temp__5720__auto__){
var blocks = temp__5720__auto__;
var repo = frontend.state.get_current_repo();
var ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__109960_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__109960_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks));
var content = frontend.handler.editor.compose_copied_blocks_contents(repo,ids);
var block = (function (){var G__109961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ids)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109961) : frontend.db.entity.call(null,G__109961));
})();
if(cljs.core.truth_(block)){
frontend.handler.common.copy_to_clipboard_without_id_property_BANG_(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),content);

frontend.state.set_copied_blocks(content,ids);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Copied!",new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.copy_block_refs = (function frontend$handler$editor$copy_block_refs(){
var temp__5720__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5720__auto__){
var selected_blocks = temp__5720__auto__;
var blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109962_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__109962_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
var level = dommy.core.attr(p1__109962_SHARP_,"level");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.uuid(id),new cljs.core.Keyword(null,"level","level",1290497552),(level | (0))], null);
} else {
return null;
}
}),selected_blocks)));
var first_block = cljs.core.first(blocks);
var first_root_level_index = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__109963){
var vec__109964 = p__109963;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109964,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109964,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block),(1));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,blocks)));
var root_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(first_block));
var adjusted_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,p__109967){
var map__109968 = p__109967;
var map__109968__$1 = cljs.core.__destructure_map(map__109968);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109968__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109968__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"level","level",1290497552),(((index < first_root_level_index))?(((level < cljs.core.deref(root_level)))?(function (){
cljs.core.reset_BANG_(root_level,level);

return (1);
})()
:((level - cljs.core.deref(root_level)) + (1))):level)], null);
}),blocks);
var block = (function (){var G__109969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(first_block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109969) : frontend.db.pull.call(null,G__109969));
})();
var copy_str = (function (){var G__109970 = adjusted_blocks;
var G__109970__$1 = (((G__109970 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__109971){
var map__109972 = p__109971;
var map__109972__$1 = cljs.core.__destructure_map(map__109972);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109972__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109972__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var pred__109973 = cljs.core._EQ_;
var expr__109974 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_((pred__109973.cljs$core$IFn$_invoke$arity$2 ? pred__109973.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),expr__109974) : pred__109973.call(null,new cljs.core.Keyword(null,"org","org",1495985),expr__109974)))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic([clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"*"))," ((%s))"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
if(cljs.core.truth_((pred__109973.cljs$core$IFn$_invoke$arity$2 ? pred__109973.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),expr__109974) : pred__109973.call(null,new cljs.core.Keyword(null,"markdown","markdown",1227225089),expr__109974)))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic([clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((level - (1)),"\t")),"- ((%s))"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__109974)].join('')));
}
}
}),G__109970));
if((G__109970__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",G__109970__$1);
}
})();
frontend.handler.editor.set_blocks_id_BANG_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),blocks));

return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1(copy_str);
} else {
return null;
}
});
frontend.handler.editor.copy_block_embeds = (function frontend$handler$editor$copy_block_embeds(){
var temp__5720__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5720__auto__){
var blocks = temp__5720__auto__;
var ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109976_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__109976_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks)));
var ids_str = (function (){var G__109977 = ids;
var G__109977__$1 = (((G__109977 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed ((%s))}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}),G__109977));
if((G__109977__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",G__109977__$1);
}
})();
frontend.handler.editor.set_blocks_id_BANG_(ids);

return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1(ids_str);
} else {
return null;
}
});
frontend.handler.editor.get_selected_toplevel_block_uuids = (function frontend$handler$editor$get_selected_toplevel_block_uuids(){
var temp__5720__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5720__auto__){
var blocks = temp__5720__auto__;
var repo = frontend.state.get_current_repo();
var block_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109978_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__109978_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks)));
var blocks__$1 = frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_ids));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$1)));
var blocks_STAR_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
var G__109979 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
if((G__109979 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__109979,page_id);
}
}),blocks__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.modules.outliner.core.get_top_level_blocks(blocks_STAR_));
} else {
return null;
}
});
frontend.handler.editor.cut_selection_blocks = (function frontend$handler$editor$cut_selection_blocks(copy_QMARK_){
if(cljs.core.truth_(copy_QMARK_)){
frontend.handler.editor.copy_selection_blocks();
} else {
}

var temp__5720__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5720__auto__){
var blocks = temp__5720__auto__;
var dom_blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(block,"data-transclude"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(block,"data-query"))));
}),blocks);
if(cljs.core.seq(dom_blocks)){
var repo = frontend.state.get_current_repo();
var block_uuids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109980_SHARP_){
return cljs.core.uuid(dommy.core.attr(p1__109980_SHARP_,"blockid"));
}),dom_blocks));
var lookup_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_uuids);
var blocks__$1 = (function (){var G__109981 = repo;
var G__109982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__109983 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__109981,G__109982,G__109983) : frontend.db.pull_many.call(null,G__109981,G__109982,G__109983));
})();
frontend.state.set_copied_full_blocks(null,blocks__$1);

return frontend.handler.editor.delete_blocks_BANG_(repo,block_uuids,blocks__$1,dom_blocks);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Didn't use link/plain-link as it is incorrectly detects words as urls.
 */
frontend.handler.editor.url_regex = /[^\s\(\[]+:\/\/[^\s\)\]]+/;
frontend.handler.editor.extract_nearest_link_from_text = (function frontend$handler$editor$extract_nearest_link_from_text(var_args){
var args__4870__auto__ = [];
var len__4864__auto___110527 = arguments.length;
var i__4865__auto___110528 = (0);
while(true){
if((i__4865__auto___110528 < len__4864__auto___110527)){
args__4870__auto__.push((arguments[i__4865__auto___110528]));

var G__110529 = (i__4865__auto___110528 + (1));
i__4865__auto___110528 = G__110529;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return frontend.handler.editor.extract_nearest_link_from_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(frontend.handler.editor.extract_nearest_link_from_text.cljs$core$IFn$_invoke$arity$variadic = (function (text,pos,additional_patterns){
var page_pattern = /\[\[([^\]]+)]]/;
var block_pattern = /\(\(([^\)]+)\)\)/;
var tag_pattern = /#\S+/;
var page_matches = frontend.util.re_pos(page_pattern,text);
var block_matches = frontend.util.re_pos(block_pattern,text);
var tag_matches = frontend.util.re_pos(tag_pattern,text);
var additional_matches = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__109984_SHARP_){
return frontend.util.re_pos(p1__109984_SHARP_,text);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([additional_patterns], 0));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(page_matches,block_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_matches,additional_matches], 0)));
var vec__109989 = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p__109992){
var vec__109993 = p__109992;
var start_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109993,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109993,(1),null);
var end_pos = (start_pos + cljs.core.count(content));
if((pos < start_pos)){
return (pos - start_pos);
} else {
if((pos > end_pos)){
return (end_pos - pos);
} else {
return (0);

}
}
}),cljs.core._GT_,matches));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109989,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109989,(1),null);
if(cljs.core.truth_(match)){
if(cljs.core.truth_(cljs.core.some((function (p1__109985_SHARP_){
return cljs.core.re_find(p1__109985_SHARP_,match);
}),additional_patterns))){
return match;
} else {
if(clojure.string.starts_with_QMARK_(match,"#")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(1),cljs.core.count(match));
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(2),(cljs.core.count(match) - (2)));

}
}
} else {
return null;
}
}));

(frontend.handler.editor.extract_nearest_link_from_text.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.editor.extract_nearest_link_from_text.cljs$lang$applyTo = (function (seq109986){
var G__109987 = cljs.core.first(seq109986);
var seq109986__$1 = cljs.core.next(seq109986);
var G__109988 = cljs.core.first(seq109986__$1);
var seq109986__$2 = cljs.core.next(seq109986__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109987,G__109988,seq109986__$2);
}));

/**
 * Return the nearest page-name (not dereferenced, may be an alias), block, tag or url
 */
frontend.handler.editor.get_nearest_page_or_url = (function frontend$handler$editor$get_nearest_page_or_url(){
var temp__5720__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
var temp__5720__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto____$1)){
var edit_id = temp__5720__auto____$1;
var temp__5720__auto____$2 = goog.dom.getElement(edit_id);
if(cljs.core.truth_(temp__5720__auto____$2)){
var input = temp__5720__auto____$2;
var temp__5720__auto____$3 = frontend.util.cursor.pos(input);
if(cljs.core.truth_(temp__5720__auto____$3)){
var pos = temp__5720__auto____$3;
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
return frontend.handler.editor.extract_nearest_link_from_text.cljs$core$IFn$_invoke$arity$variadic(value,pos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.editor.url_regex], 0));
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
} else {
return null;
}
});
/**
 * Return the nearest page-name (not dereferenced, may be an alias), block or tag
 */
frontend.handler.editor.get_nearest_page = (function frontend$handler$editor$get_nearest_page(){
var temp__5720__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
var temp__5720__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto____$1)){
var edit_id = temp__5720__auto____$1;
var temp__5720__auto____$2 = goog.dom.getElement(edit_id);
if(cljs.core.truth_(temp__5720__auto____$2)){
var input = temp__5720__auto____$2;
var temp__5720__auto____$3 = frontend.util.cursor.pos(input);
if(cljs.core.truth_(temp__5720__auto____$3)){
var pos = temp__5720__auto____$3;
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
return frontend.handler.editor.extract_nearest_link_from_text(value,pos);
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
} else {
return null;
}
});
frontend.handler.editor.follow_link_under_cursor_BANG_ = (function frontend$handler$editor$follow_link_under_cursor_BANG_(){
var temp__5720__auto__ = frontend.handler.editor.get_nearest_page_or_url();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
if(clojure.string.blank_QMARK_(page)){
return null;
} else {
if(cljs.core.truth_(cljs.core.re_find(frontend.handler.editor.url_regex,page))){
return window.open(page);
} else {
var page_name = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page);
frontend.state.clear_edit_BANG_();

return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);
}
}
} else {
return null;
}
});
frontend.handler.editor.open_link_in_sidebar_BANG_ = (function frontend$handler$editor$open_link_in_sidebar_BANG_(){
var temp__5720__auto__ = frontend.handler.editor.get_nearest_page();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
var page_name = clojure.string.lower_case(page);
var block_QMARK_ = logseq.graph_parser.util.uuid_string_QMARK_(page_name);
var temp__5720__auto____$1 = (frontend.db.get_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page.call(null,page_name));
if(cljs.core.truth_(temp__5720__auto____$1)){
var page__$1 = temp__5720__auto____$1;
if(cljs.core.truth_(block_QMARK_)){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1),new cljs.core.Keyword(null,"block","block",664686210));
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1),new cljs.core.Keyword(null,"page","page",849072397));
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.zoom_in_BANG_ = (function frontend$handler$editor$zoom_in_BANG_(){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var temp__5720__auto__ = (function (){var G__109996 = frontend.state.get_edit_block();
var G__109996__$1 = (((G__109996 == null))?null:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__109996));
var G__109996__$2 = (((G__109996__$1 == null))?null:(function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
})(G__109996__$1));
var G__109996__$3 = (((G__109996__$2 == null))?null:(frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109996__$2) : frontend.db.entity.call(null,G__109996__$2)));
if((G__109996__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__109996__$3);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var id = temp__5720__auto__;
var pos = frontend.state.get_edit_pos();
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(id);

return setTimeout((function (){
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null),pos,id);
}),(0));
} else {
return null;
}
} else {
return window.history.forward();
}
});
frontend.handler.editor.zoom_out_BANG_ = (function frontend$handler$editor$zoom_out_BANG_(){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var page = frontend.state.get_current_page();
var block_id = (function (){var and__4251__auto__ = typeof page === 'string';
if(and__4251__auto__){
var and__4251__auto____$1 = logseq.graph_parser.util.uuid_string_QMARK_(page);
if(cljs.core.truth_(and__4251__auto____$1)){
return medley.core.uuid(page);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(block_id)){
var block_parent = (frontend.db.get_block_parent.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_parent.cljs$core$IFn$_invoke$arity$1(block_id) : frontend.db.get_block_parent.call(null,block_id));
var temp__5718__auto__ = (function (){var and__4251__auto__ = (new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block_parent) == null);
if(and__4251__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_parent);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(id);

return setTimeout((function (){
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null),new cljs.core.Keyword(null,"max","max",61366548),block_id);
}),(0));
} else {
var page_id = (function (){var G__109997 = (function (){var G__109998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109998) : frontend.db.entity.call(null,G__109998));
})();
var G__109997__$1 = (((G__109997 == null))?null:new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(G__109997));
if((G__109997__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__109997__$1);
}
})();
var temp__5720__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(page_id) : frontend.db.entity.call(null,page_id)));
if(cljs.core.truth_(temp__5720__auto__)){
var page_name = temp__5720__auto__;
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);

return setTimeout((function (){
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null),new cljs.core.Keyword(null,"max","max",61366548),block_id);
}),(0));
} else {
return null;
}
}
} else {
return null;
}
} else {
return window.history.back();
}
});
frontend.handler.editor.cut_block_BANG_ = (function frontend$handler$editor$cut_block_BANG_(block_id){
var temp__5720__auto__ = (function (){var G__109999 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109999) : frontend.db.pull.call(null,G__109999));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var repo = frontend.state.get_current_repo();
var md_content = frontend.handler.editor.compose_copied_blocks_contents(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null));
frontend.state.set_copied_full_blocks(md_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null));

frontend.handler.common.copy_to_clipboard_without_id_property_BANG_(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),md_content);

return frontend.handler.editor.delete_block_aux_BANG_(block,true);
} else {
return null;
}
});
frontend.handler.editor.clear_last_selected_block_BANG_ = (function frontend$handler$editor$clear_last_selected_block_BANG_(){
var block = frontend.state.drop_last_selection_block_BANG_();
return frontend.util.select_unhighlight_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null));
});
frontend.handler.editor.highlight_selection_area_BANG_ = (function frontend$handler$editor$highlight_selection_area_BANG_(end_block){
var temp__5720__auto__ = frontend.state.get_selection_start_block();
if(cljs.core.truth_(temp__5720__auto__)){
var start_block = temp__5720__auto__;
var blocks = frontend.util.get_nodes_between_two_nodes(start_block,end_block,"ls-block");
var direction = frontend.util.get_direction_between_two_nodes(start_block,end_block,"ls-block");
var blocks__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?cljs.core.reverse(blocks):blocks);
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks__$1,direction);
} else {
return null;
}
});
frontend.handler.editor.select_block_up_down = (function frontend$handler$editor$select_block_up_down(direction){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.getElement(frontend.state.get_editing_block_dom_id())], null));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return ((1) === cljs.core.count(frontend.state.get_selection_blocks()));
} else {
return and__4251__auto__;
}
})())){
var f = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed_skip);
var element = (function (){var G__110000 = cljs.core.first(frontend.state.get_selection_blocks());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__110000) : f.call(null,G__110000));
})();
if(cljs.core.truth_(element)){
return frontend.state.conj_selection_block_BANG_(element,direction);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,frontend.state.get_selection_direction());
} else {
return and__4251__auto__;
}
})())){
var f = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed_skip);
var first_last = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?cljs.core.first:cljs.core.last);
var element = (function (){var G__110001 = (function (){var G__110002 = frontend.state.get_selection_blocks();
return (first_last.cljs$core$IFn$_invoke$arity$1 ? first_last.cljs$core$IFn$_invoke$arity$1(G__110002) : first_last.call(null,G__110002));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__110001) : f.call(null,G__110001));
})();
if(cljs.core.truth_(element)){
return frontend.state.conj_selection_block_BANG_(element,direction);
} else {
return null;
}
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
return frontend.handler.editor.clear_last_selected_block_BANG_();
} else {
return null;
}
}
}
}
});
frontend.handler.editor.on_select_block = (function frontend$handler$editor$on_select_block(direction){
return (function (_event){
return frontend.handler.editor.select_block_up_down(direction);
});
});
frontend.handler.editor.save_block_aux_BANG_ = (function frontend$handler$editor$save_block_aux_BANG_(block,value,opts){
var value__$1 = clojure.string.trim(value);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3(block,value__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-properties","init-properties",-888365705),new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block)], null),opts], 0)));
});
frontend.handler.editor.save_block_BANG_ = (function frontend$handler$editor$save_block_BANG_(var_args){
var G__110004 = arguments.length;
switch (G__110004) {
case 3:
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo,block_or_uuid,content){
var block = ((((cljs.core.uuid_QMARK_(block_or_uuid)) || (typeof block_or_uuid === 'string')))?frontend.db.model.query_block_by_uuid(block_or_uuid):block_or_uuid);
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"format","format",-1306924766),format], null),content);
}));

(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__110005,value){
var map__110006 = p__110005;
var map__110006__$1 = cljs.core.__destructure_map(map__110006);
var _state = map__110006__$1;
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110006__$1,new cljs.core.Keyword(null,"block","block",664686210));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110006__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__110007 = repo;
var G__110008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__110007,G__110008) : frontend.db.entity.call(null,G__110007,G__110008));
})()))){
return frontend.handler.editor.save_block_aux_BANG_(block,value,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
}));

(frontend.handler.editor.save_block_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * skip-properties? if set true, when editing block is likely be properties, skip saving
 */
frontend.handler.editor.save_current_block_BANG_ = (function frontend$handler$editor$save_current_block_BANG_(var_args){
var G__110010 = arguments.length;
switch (G__110010) {
case 0:
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__110011){
var map__110012 = p__110011;
var map__110012__$1 = cljs.core.__destructure_map(map__110012);
var opts = map__110012__$1;
var force_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110012__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));
var skip_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110012__$1,new cljs.core.Keyword(null,"skip-properties?","skip-properties?",329398686));
var current_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110012__$1,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
if(cljs.core.truth_(frontend.state.editor_in_composition_QMARK_())){
return null;
} else {
if(cljs.core.truth_(frontend.state.get_current_repo())){
if(((cljs.core.not(cljs.core.deref(frontend.commands._STAR_show_commands))) && (((cljs.core.not(cljs.core.deref(frontend.commands._STAR_show_block_commands))) && (((cljs.core.not(frontend.state.get_editor_show_page_search_QMARK_())) && (((cljs.core.not(frontend.state.get_editor_show_page_search_hashtag_QMARK_())) && (((cljs.core.not(frontend.state.get_editor_show_block_search_QMARK_())) && (((cljs.core.not(frontend.state.get_editor_show_date_picker_QMARK_())) && (((cljs.core.not(frontend.state.get_editor_show_template_search_QMARK_())) && (cljs.core.not(frontend.state.get_editor_show_input())))))))))))))))){
try{var input_id = frontend.state.get_edit_input_id();
var block = frontend.state.get_edit_block();
var db_block = (function (){var temp__5720__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
var G__110014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__110014) : frontend.db.pull.call(null,G__110014));
} else {
return null;
}
})();
var elem = (function (){var and__4251__auto__ = input_id;
if(cljs.core.truth_(and__4251__auto__)){
return goog.dom.getElement(input_id);
} else {
return and__4251__auto__;
}
})();
var db_content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(db_block);
var db_content_without_heading = (function (){var and__4251__auto__ = db_content;
if(cljs.core.truth_(and__4251__auto__)){
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$2(db_content,new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(db_block));
} else {
return and__4251__auto__;
}
})();
var value = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(current_block);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = elem;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.handler.editor.goog$module$goog$object.get(elem,"value");
} else {
return and__4251__auto__;
}
}
})();
if(cljs.core.truth_(force_QMARK_)){
return frontend.handler.editor.save_block_aux_BANG_(db_block,value,opts);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = skip_properties_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = frontend.db.model.top_block_QMARK_(block);
if(and__4251__auto____$1){
if(cljs.core.truth_(elem)){
return frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([elem], 0));
} else {
return null;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = block;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = value;
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = db_content_without_heading;
if(cljs.core.truth_(and__4251__auto____$2)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(db_content_without_heading),clojure.string.trim(value));
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return frontend.handler.editor.save_block_aux_BANG_(db_block,value,opts);
} else {
return null;
}
}
}
}catch (e110013){if((e110013 instanceof Error)){
var error = e110013;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.editor",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-block-failed","save-block-failed",610684026),error,new cljs.core.Keyword(null,"line","line",212345235),1315], null)),null);
} else {
throw e110013;

}
}} else {
return null;
}
} else {
return null;
}
}
}));

(frontend.handler.editor.save_current_block_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.clean_content_BANG_ = (function frontend$handler$editor$clean_content_BANG_(format,content){
return clojure.string.trim(frontend.util.property.remove_properties(format,frontend.util.drawer.remove_logbook(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3(content,format,frontend.config.get_block_pattern(format)))));
});
frontend.handler.editor.insert_command_BANG_ = (function frontend$handler$editor$insert_command_BANG_(id,command_output,format,p__110015){
var map__110016 = p__110015;
var map__110016__$1 = cljs.core.__destructure_map(map__110016);
var option = map__110016__$1;
var restore_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110016__$1,new cljs.core.Keyword(null,"restore?","restore?",1172240305),true);
if(typeof command_output === 'string'){
frontend.commands.insert_BANG_(id,command_output,option);
} else {
if(cljs.core.vector_QMARK_(command_output)){
frontend.commands.handle_steps(command_output,format);
} else {
if(cljs.core.fn_QMARK_(command_output)){
var s_110539 = (command_output.cljs$core$IFn$_invoke$arity$0 ? command_output.cljs$core$IFn$_invoke$arity$0() : command_output.call(null));
frontend.commands.insert_BANG_(id,s_110539,option);
} else {

}
}
}

if(cljs.core.truth_(restore_QMARK_)){
var restore_slash_caret_pos_QMARK_ = ((((cljs.core.seq_QMARK_(command_output)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editor","click-hidden-file-input","editor/click-hidden-file-input",1637282337),cljs.core.ffirst(command_output)))))?false:true);
return frontend.commands.restore_state(restore_slash_caret_pos_QMARK_);
} else {
return null;
}
});
frontend.handler.editor.get_asset_file_link = (function frontend$handler$editor$get_asset_file_link(format,url,file_name,image_QMARK_){
var pdf_QMARK_ = (function (){var and__4251__auto__ = url;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.ends_with_QMARK_(url,".pdf");
} else {
return and__4251__auto__;
}
})();
var G__110017 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__110017__$1 = (((G__110017 instanceof cljs.core.Keyword))?G__110017.fqn:null);
switch (G__110017__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic([(cljs.core.truth_((function (){var or__4253__auto__ = image_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pdf_QMARK_;
}
})())?"!":null),"[%s](%s)"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_name,url], 0));

break;
case "org":
if(cljs.core.truth_(image_QMARK_)){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0));
} else {
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url,file_name], 0));
}

break;
default:
return null;

}
});
frontend.handler.editor.ensure_assets_dir_BANG_ = (function frontend$handler$editor$ensure_assets_dir_BANG_(repo){
var repo_dir = frontend.config.get_repo_dir(repo);
var assets_dir = "assets";
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",assets_dir].join('')),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo_dir,assets_dir], null);
}));
});
frontend.handler.editor.get_asset_path = (function frontend$handler$editor$get_asset_path(filename){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.ensure_assets_dir_BANG_(frontend.state.get_current_repo()),(function (p__110018){
var vec__110019 = p__110018;
var repo_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110019,(0),null);
var assets_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110019,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$path$path.join(repo_dir,assets_dir,filename),(function (path){
return promesa.protocols._promise((cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?path:encodeURI(decodeURI(path))));
}));
}));
}));
});
frontend.handler.editor.save_assets_BANG_ = (function frontend$handler$editor$save_assets_BANG_(var_args){
var G__110024 = arguments.length;
switch (G__110024) {
case 3:
return frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,repo,files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.ensure_assets_dir_BANG_(repo),(function (p__110025){
var vec__110026 = p__110025;
var repo_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110026,(0),null);
var assets_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110026,(1),null);
return promesa.protocols._promise(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$5(repo,repo_dir,assets_dir,files,(function (index,file_base){
var file_base__$1 = clojure.string.replace(clojure.string.replace(clojure.string.replace(file_base," ","_"),"%","_"),"/","_");
var file_name = [file_base__$1,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now()),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('');
return clojure.string.replace(file_name,/_+/,"_");
})));
}));
}));
}));

(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (repo,dir,path,files,gen_filename){
return promesa.core.all((function (){var iter__4652__auto__ = (function frontend$handler$editor$iter__110029(s__110030){
return (new cljs.core.LazySeq(null,(function (){
var s__110030__$1 = s__110030;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__110030__$1);
if(temp__5720__auto__){
var s__110030__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110030__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__110030__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__110032 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__110031 = (0);
while(true){
if((i__110031 < size__4651__auto__)){
var vec__110033 = cljs.core._nth(c__4650__auto__,i__110031);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110033,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110033,(1),null);
cljs.core.chunk_append(b__110032,(function (){var file_name = (function (){var G__110039 = file.name;
return (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(G__110039) : frontend.util.node_path.basename.call(null,G__110039));
})();
var vec__110036 = (cljs.core.truth_(file_name)?(function (){var last_dot_index = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(file_name,".");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file_name,(0),last_dot_index),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(file_name,last_dot_index)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null));
var file_base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110036,(0),null);
var ext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110036,(1),null);
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((gen_filename.cljs$core$IFn$_invoke$arity$2 ? gen_filename.cljs$core$IFn$_invoke$arity$2(index,file_base) : gen_filename.call(null,index,file_base))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
var filename__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",filename].join('');
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var from = file.path;
var from__$1 = ((clojure.string.blank_QMARK_(from))?null:from);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.apis.copyFileToAssets(dir,filename__$1,from__$1),((function (i__110031,from,from__$1,file_name,vec__110036,file_base,ext,filename,filename__$1,vec__110033,index,file,c__4650__auto__,size__4651__auto__,b__110032,s__110030__$2,temp__5720__auto__){
return (function (p1__110022_SHARP_){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,((typeof p1__110022_SHARP_ === 'string')?(new File([],p1__110022_SHARP_)):file),frontend.util.node_path.join(dir,filename__$1)], null));
});})(i__110031,from,from__$1,file_name,vec__110036,file_base,ext,filename,filename__$1,vec__110033,index,file,c__4650__auto__,size__4651__auto__,b__110032,s__110030__$2,temp__5720__auto__))
);
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,dir,filename__$1,file.stream(),null),((function (i__110031,file_name,vec__110036,file_base,ext,filename,filename__$1,vec__110033,index,file,c__4650__auto__,size__4651__auto__,b__110032,s__110030__$2,temp__5720__auto__){
return (function (){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,file], null));
});})(i__110031,file_name,vec__110036,file_base,ext,filename,filename__$1,vec__110033,index,file,c__4650__auto__,size__4651__auto__,b__110032,s__110030__$2,temp__5720__auto__))
);
}
})());

var G__110548 = (i__110031 + (1));
i__110031 = G__110548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110032),frontend$handler$editor$iter__110029(cljs.core.chunk_rest(s__110030__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110032),null);
}
} else {
var vec__110040 = cljs.core.first(s__110030__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110040,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110040,(1),null);
return cljs.core.cons((function (){var file_name = (function (){var G__110046 = file.name;
return (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(G__110046) : frontend.util.node_path.basename.call(null,G__110046));
})();
var vec__110043 = (cljs.core.truth_(file_name)?(function (){var last_dot_index = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(file_name,".");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file_name,(0),last_dot_index),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(file_name,last_dot_index)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null));
var file_base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110043,(0),null);
var ext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110043,(1),null);
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((gen_filename.cljs$core$IFn$_invoke$arity$2 ? gen_filename.cljs$core$IFn$_invoke$arity$2(index,file_base) : gen_filename.call(null,index,file_base))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
var filename__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",filename].join('');
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var from = file.path;
var from__$1 = ((clojure.string.blank_QMARK_(from))?null:from);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.apis.copyFileToAssets(dir,filename__$1,from__$1),((function (from,from__$1,file_name,vec__110043,file_base,ext,filename,filename__$1,vec__110040,index,file,s__110030__$2,temp__5720__auto__){
return (function (p1__110022_SHARP_){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,((typeof p1__110022_SHARP_ === 'string')?(new File([],p1__110022_SHARP_)):file),frontend.util.node_path.join(dir,filename__$1)], null));
});})(from,from__$1,file_name,vec__110043,file_base,ext,filename,filename__$1,vec__110040,index,file,s__110030__$2,temp__5720__auto__))
);
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,dir,filename__$1,file.stream(),null),((function (file_name,vec__110043,file_base,ext,filename,filename__$1,vec__110040,index,file,s__110030__$2,temp__5720__auto__){
return (function (){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,file], null));
});})(file_name,vec__110043,file_base,ext,filename,filename__$1,vec__110040,index,file,s__110030__$2,temp__5720__auto__))
);
}
})(),frontend$handler$editor$iter__110029(cljs.core.rest(s__110030__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,files));
})());
}));

(frontend.handler.editor.save_assets_BANG_.cljs$lang$maxFixedArity = 5);

if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_assets_url_cache !== 'undefined')){
} else {
frontend.handler.editor._STAR_assets_url_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.handler.editor.make_asset_url = (function frontend$handler$editor$make_asset_url(path){
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var path__$1 = clojure.string.replace(path,"../","/");
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return ["assets://",repo_dir,path__$1].join('');
} else {
if(cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())){
return frontend.mobile.util.convert_file_src([repo_dir,path__$1].join(''));
} else {
var handle_path = ["handle",repo_dir,path__$1].join('');
var cached_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.handler.editor._STAR_assets_url_cache),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(handle_path));
if(cljs.core.truth_(cached_url)){
return promesa.core.resolved(cached_url);
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_item(handle_path),(function (handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__4251__auto__ = handle;
if(cljs.core.truth_(and__4251__auto__)){
return handle.getFile();
} else {
return and__4251__auto__;
}
})(),(function (file){
return promesa.protocols._promise((cljs.core.truth_(file)?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(URL.createObjectURL(file),(function (url){
return promesa.protocols._promise((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.editor._STAR_assets_url_cache,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(handle_path),url);

return url;
})()
);
}));
})):null));
}));
}));
}));
}

}
}
});
frontend.handler.editor.delete_asset_of_block_BANG_ = (function frontend$handler$editor$delete_asset_of_block_BANG_(p__110047){
var map__110048 = p__110047;
var map__110048__$1 = cljs.core.__destructure_map(map__110048);
var _opts = map__110048__$1;
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110048__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110048__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110048__$1,new cljs.core.Keyword(null,"full-text","full-text",1432444182));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110048__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110048__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var delete_local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110048__$1,new cljs.core.Keyword(null,"delete-local?","delete-local?",1716577572));
var block = frontend.db.model.query_block_by_uuid(block_id);
var _ = (function (){var or__4253__auto__ = block;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)," not exists"].join('');
}
})();
var text = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var content = clojure.string.replace(text,full_text,"");
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,block,content);

if(cljs.core.truth_((function (){var and__4251__auto__ = local_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return delete_local_QMARK_;
} else {
return and__4251__auto__;
}
})())){
var temp__5720__auto__ = (cljs.core.truth_(frontend.util.electron_QMARK_())?href:cljs.core.second(cljs.core.re_find(/\((.+)\)$/,full_text)));
if(cljs.core.truth_(temp__5720__auto__)){
var href__$1 = temp__5720__auto__;
return frontend.fs.unlink_BANG_(repo,frontend.config.get_repo_path(repo,clojure.string.replace(clojure.string.replace(href__$1,/^..\//,"/"),/^assets:\/\//,"")),null);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.resolve_relative_path = (function frontend$handler$editor$resolve_relative_path(file_path){
var temp__5718__auto__ = (function (){var or__4253__auto__ = frontend.db.model.get_block_file_path(frontend.state.get_edit_block());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
var G__110049 = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var G__110050 = frontend.config.get_pages_directory();
var G__110051 = "_.md";
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(G__110049,G__110050,G__110051) : frontend.util.node_path.join.call(null,G__110049,G__110050,G__110051));
} else {
return and__4251__auto__;
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var current_file = temp__5718__auto__;
return frontend.util.get_relative_path(current_file,file_path);
} else {
return file_path;
}
});
frontend.handler.editor.upload_asset = (function frontend$handler$editor$upload_asset(id,files,format,uploading_QMARK_,drop_or_paste_QMARK_){
var repo = frontend.state.get_current_repo();
var block = frontend.state.get_edit_block();
if(frontend.config.local_db_QMARK_(repo)){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$3(block,repo,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(files)),(function (res){
var temp__5720__auto__ = (function (){var and__4251__auto__ = cljs.core.seq(res);
if(and__4251__auto__){
return cljs.core.first(res);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var vec__110052 = temp__5720__auto__;
var asset_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110052,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110052,(1),null);
var full_file_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110052,(2),null);
var image_QMARK_ = frontend.util.ext_of_image_QMARK_(asset_file_name);
return frontend.handler.editor.insert_command_BANG_(id,frontend.handler.editor.get_asset_file_link(format,frontend.handler.editor.resolve_relative_path((function (){var or__4253__auto__ = full_file_path;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return asset_file_name;
}
})()),(cljs.core.truth_(file)?file.name:(cljs.core.truth_(image_QMARK_)?"image":"asset")),image_QMARK_),format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),(cljs.core.truth_(drop_or_paste_QMARK_)?"":frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"restore?","restore?",1172240305),true], null));
} else {
return null;
}
})),(function (){
cljs.core.reset_BANG_(uploading_QMARK_,false);

cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_QMARK_,false);

return cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_process,(0));
}));
} else {
return frontend.image.upload(files,(function (file,file_name,file_type){
return frontend.handler.image.request_presigned_url(file,file_name,file_type,uploading_QMARK_,(function (signed_url){
frontend.handler.editor.insert_command_BANG_(id,frontend.handler.editor.get_asset_file_link(format,signed_url,file_name,true),format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),(cljs.core.truth_(drop_or_paste_QMARK_)?"":frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"restore?","restore?",1172240305),true], null));

cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_QMARK_,false);

return cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_process,(0));
}),(function (e){
var process = ((frontend.handler.editor.goog$module$goog$object.get(e,"loaded") / frontend.handler.editor.goog$module$goog$object.get(e,"total")) * (100));
cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_QMARK_,false);

return cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_process,process);
}));
}));
}
});
frontend.handler.editor.autopair_map = cljs.core.PersistentHashMap.fromArrays(["=","`","*","~","/","(","_","{","[","^","+"],["=","`","*","~","/",")","_","}","]","^","+"]);
frontend.handler.editor.reversed_autopair_map = cljs.core.zipmap(cljs.core.vals(frontend.handler.editor.autopair_map),cljs.core.keys(frontend.handler.editor.autopair_map));
frontend.handler.editor.autopair_when_selected = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["=",null,"*",null,"/",null,"_",null,"^",null,"+",null], null), null);
frontend.handler.editor.delete_map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.editor.autopair_map,"$","$",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":",":"], 0));
frontend.handler.editor.autopair = (function frontend$handler$editor$autopair(input_id,prefix,_format,_option){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.autopair_map,prefix);
var selected = frontend.util.get_selected_text();
var postfix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
var value__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),postfix].join('');
var input = goog.dom.getElement(input_id);
if(cljs.core.truth_(value__$1)){
if(clojure.string.blank_QMARK_(selected)){
} else {
cljs.core.reset_BANG_(frontend.handler.editor._STAR_selected_text,selected);
}

var vec__110055 = frontend.commands.simple_replace_BANG_(input_id,value__$1,selected,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),((postfix).length),new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),(function (new_value,prefix_pos){
if((prefix_pos >= (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new_value,prefix_pos,(prefix_pos + (2))),(prefix_pos + (2))], null);
} else {
return null;
}
})], null));
var prefix__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110055,(0),null);
var _pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110055,(1),null);
var G__110058 = prefix__$1;
switch (G__110058) {
case "[[":
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812)], null));

return cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input));

break;
case "((":
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652),new cljs.core.Keyword(null,"reference","reference",-1711695023)], null));

return cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input));

break;
default:
return null;

}
} else {
return null;
}
});
frontend.handler.editor.surround_by_QMARK_ = (function frontend$handler$editor$surround_by_QMARK_(input,before,end){
if(cljs.core.truth_(input)){
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = frontend.util.cursor.pos(input);
return logseq.graph_parser.text.surround_by_QMARK_(value,pos,before,end);
} else {
return null;
}
});
frontend.handler.editor.wrapped_by_QMARK_ = (function frontend$handler$editor$wrapped_by_QMARK_(input,before,end){
if(cljs.core.truth_(input)){
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = (frontend.util.cursor.pos(input) - (1));
if((pos >= (0))){
return logseq.graph_parser.text.wrapped_by_QMARK_(value,pos,before,end);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Return matched page names
 */
frontend.handler.editor.get_matched_pages = (function frontend$handler$editor$get_matched_pages(q){
var block = frontend.state.get_edit_block();
var editing_page = (function (){var and__4251__auto__ = block;
if(cljs.core.truth_(and__4251__auto__)){
var temp__5720__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5720__auto__)){
var page_id = temp__5720__auto__;
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(page_id) : frontend.db.entity.call(null,page_id)));
} else {
return null;
}
} else {
return and__4251__auto__;
}
})();
var pages = frontend.search.page_search.cljs$core$IFn$_invoke$arity$2(q,(20));
if(cljs.core.truth_(editing_page)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc(p),editing_page);
}),pages);
} else {
return pages;
}
});
frontend.handler.editor.get_matched_blocks = (function frontend$handler$editor$get_matched_blocks(q,block_id){
var current_block = frontend.state.get_edit_block();
var block_parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),(function (){var G__110059 = frontend.state.get_current_repo();
var G__110060 = block_id;
var G__110061 = (99);
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3(G__110059,G__110060,G__110061) : frontend.db.get_block_parents.call(null,G__110059,G__110060,G__110061));
})()));
var current_and_parents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block))]),block_parents);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.block_search(frontend.state.get_current_repo(),q,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(20)], null)),(function (result){
return promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (h){
return cljs.core.contains_QMARK_(current_and_parents,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(h));
}),result));
}));
}));
});
frontend.handler.editor.get_matched_templates = (function frontend$handler$editor$get_matched_templates(q){
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$1(q);
});
frontend.handler.editor.get_matched_commands = (function frontend$handler$editor$get_matched_commands(input){
try{var edit_content = (function (){var or__4253__auto__ = frontend.handler.editor.goog$module$goog$object.get(input,"value");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
var pos = frontend.util.cursor.pos(input);
var last_slash_caret_pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.commands._STAR_slash_caret_pos));
var last_command = (function (){var and__4251__auto__ = last_slash_caret_pos;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,last_slash_caret_pos,pos);
} else {
return and__4251__auto__;
}
})();
if((pos > (0))){
var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),frontend.util.nth_safe(edit_content,(pos - (1))));
if(and__4251__auto__){
return cljs.core.deref(frontend.commands._STAR_initial_commands);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = last_command;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$1(last_command);
} else {
return and__4251__auto__;
}
}
} else {
return null;
}
}catch (e110062){if((e110062 instanceof Error)){
var e = e110062;
console.error(e);

return null;
} else {
throw e110062;

}
}});
frontend.handler.editor.get_matched_block_commands = (function frontend$handler$editor$get_matched_block_commands(input){
try{var edit_content = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = frontend.util.cursor.pos(input);
var last_command = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.commands._STAR_angle_bracket_caret_pos)),pos);
if((pos > (0))){
var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<",frontend.util.nth_safe(edit_content,(pos - (1))));
if(and__4251__auto__){
return frontend.commands.block_commands_map();
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = last_command;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$2(last_command,frontend.commands.block_commands_map());
} else {
return and__4251__auto__;
}
}
} else {
return null;
}
}catch (e110063){if((e110063 instanceof Error)){
var _error = e110063;
return null;
} else {
throw e110063;

}
}});
frontend.handler.editor.auto_complete_QMARK_ = (function frontend$handler$editor$auto_complete_QMARK_(){
var or__4253__auto__ = cljs.core.deref(frontend.commands._STAR_show_commands);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.deref(frontend.commands._STAR_show_block_commands);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = cljs.core.deref(frontend.handler.editor._STAR_asset_uploading_QMARK_);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = frontend.state.get_editor_show_input();
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = frontend.state.get_editor_show_page_search_QMARK_();
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = frontend.state.get_editor_show_block_search_QMARK_();
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = frontend.state.get_editor_show_template_search_QMARK_();
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
return frontend.state.get_editor_show_date_picker_QMARK_();
}
}
}
}
}
}
}
});
frontend.handler.editor.get_current_input_char = (function frontend$handler$editor$get_current_input_char(input){
var temp__5720__auto__ = frontend.util.cursor.pos(input);
if(cljs.core.truth_(temp__5720__auto__)){
var pos = temp__5720__auto__;
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
if((((cljs.core.count(value) >= (pos + (1)))) && ((pos >= (1))))){
return frontend.util.nth_safe(value,pos);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.move_up_down = (function frontend$handler$editor$move_up_down(up_QMARK_){
return (function (event){
frontend.util.stop(event);

var edit_block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
var move_nodes = (function (blocks){
var transact_data__61870__auto___110552 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto___110553 = (cljs.core.truth_(transact_data__61870__auto___110552)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null));
if(cljs.core.truth_(transact_data__61870__auto___110552)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.move_blocks_up_down_BANG_(blocks,up_QMARK_);
} else {
var _STAR_transaction_data_STAR__orig_val__110064_110554 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__110065_110555 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__110065_110555);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.move_blocks_up_down_BANG_(blocks,up_QMARK_);

var r__61872__auto___110556 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto___110557 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto___110556], 0));
var tx_meta__61874__auto___110558 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto___110556));
var all_tx__61875__auto___110559 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto___110557,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110553));
var opts_SHARP___61876__auto___110560 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto___110553,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto___110558], 0));
if(cljs.core.seq(all_tx__61875__auto___110559)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110553))){
} else {
var result__61877__auto___110561 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto___110559,opts_SHARP___61876__auto___110560);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto___110559,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto___110558,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto___110561], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__110064_110554);
}}

var temp__5720__auto__ = frontend.util.get_first_block_by_id(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
if(cljs.core.truth_(temp__5720__auto__)){
var block_node = temp__5720__auto__;
return block_node.scrollIntoView(({"behavior": "smooth", "block": "nearest"}));
} else {
return null;
}
});
if(cljs.core.truth_(edit_block_id)){
var temp__5720__auto__ = (function (){var G__110066 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),edit_block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__110066) : frontend.db.pull.call(null,G__110066));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var blocks_110562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null);
move_nodes(blocks_110562);

var temp__5720__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto____$1)){
var input_id = temp__5720__auto____$1;
var temp__5720__auto____$2 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$2)){
var input = temp__5720__auto____$2;
return input.focus();
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
var ids = frontend.state.get_selection_block_ids();
if(cljs.core.seq(ids)){
var lookup_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),ids);
var blocks = (function (){var G__110067 = frontend.state.get_current_repo();
var G__110068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__110069 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__110067,G__110068,G__110069) : frontend.db.pull_many.call(null,G__110067,G__110068,G__110069));
})();
return move_nodes(blocks);
} else {
return null;
}
}
});
});
frontend.handler.editor.get_selected_ordered_blocks = (function frontend$handler$editor$get_selected_ordered_blocks(){
var repo = frontend.state.get_current_repo();
var ids = frontend.state.get_selection_block_ids();
var lookup_refs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),ids));
var G__110070 = repo;
var G__110071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__110072 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__110070,G__110071,G__110072) : frontend.db.pull_many.call(null,G__110070,G__110071,G__110072));
});
/**
 * `direction` = :left | :right.
 */
frontend.handler.editor.on_tab = (function frontend$handler$editor$on_tab(direction){
var blocks = frontend.handler.editor.get_selected_ordered_blocks();
if(cljs.core.seq(blocks)){
var transact_data__61870__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto__ = (cljs.core.truth_(transact_data__61870__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null));
if(cljs.core.truth_(transact_data__61870__auto__)){
return frontend.modules.outliner.core.indent_outdent_blocks_BANG_(blocks,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
var _STAR_transaction_data_STAR__orig_val__110073 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__110074 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__110074);

try{frontend.modules.outliner.core.indent_outdent_blocks_BANG_(blocks,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));

var r__61872__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto__], 0));
var tx_meta__61874__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto__));
var all_tx__61875__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__));
var opts_SHARP___61876__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto__], 0));
if(cljs.core.seq(all_tx__61875__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__))){
return null;
} else {
var result__61877__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto__,opts_SHARP___61876__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__110073);
}}
} else {
return null;
}
});
frontend.handler.editor.get_link = (function frontend$handler$editor$get_link(format,link,label){
var link__$1 = (function (){var or__4253__auto__ = link;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
var label__$1 = (function (){var or__4253__auto__ = label;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
var G__110075 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__110075__$1 = (((G__110075 instanceof cljs.core.Keyword))?G__110075.fqn:null);
switch (G__110075__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label__$1,link__$1], 0));

break;
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link__$1,label__$1], 0));

break;
default:
return null;

}
});
frontend.handler.editor.get_image_link = (function frontend$handler$editor$get_image_link(format,link,label){
var link__$1 = (function (){var or__4253__auto__ = link;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
var label__$1 = (function (){var or__4253__auto__ = label;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
var G__110076 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__110076__$1 = (((G__110076 instanceof cljs.core.Keyword))?G__110076.fqn:null);
switch (G__110076__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("![%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label__$1,link__$1], 0));

break;
case "org":
return frontend.util.format("[[%s]]");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110076__$1)].join('')));

}
});
frontend.handler.editor.handle_command_input = (function frontend$handler$editor$handle_command_input(command,id,format,m){
var G__110077_110565 = command;
var G__110077_110566__$1 = (((G__110077_110565 instanceof cljs.core.Keyword))?G__110077_110565.fqn:null);
switch (G__110077_110566__$1) {
case "link":
var map__110078_110568 = m;
var map__110078_110569__$1 = cljs.core.__destructure_map(map__110078_110568);
var link_110570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110078_110569__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var label_110571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110078_110569__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(((clojure.string.blank_QMARK_(link_110570)) || (clojure.string.blank_QMARK_(label_110571)))){
} else {
frontend.handler.editor.insert_command_BANG_(id,frontend.handler.editor.get_link(format,link_110570,label_110571),format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0()),"link"].join('')], null));
}

break;
case "image-link":
var map__110079_110572 = m;
var map__110079_110573__$1 = cljs.core.__destructure_map(map__110079_110572);
var link_110574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110079_110573__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var label_110575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110079_110573__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if((!(clojure.string.blank_QMARK_(link_110574)))){
frontend.handler.editor.insert_command_BANG_(id,frontend.handler.editor.get_image_link(format,link_110574,label_110575),format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0()),"link"].join('')], null));
} else {
}

break;
default:

}

frontend.state.set_editor_show_input_BANG_(null);

var temp__5720__auto__ = frontend.state.get_editor_last_pos();
if(cljs.core.truth_(temp__5720__auto__)){
var saved_cursor = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var input = temp__5720__auto____$1;
input.focus();

return frontend.util.cursor.move_cursor_to(input,saved_cursor);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.get_search_q = (function frontend$handler$editor$get_search_q(){
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var input = temp__5720__auto____$1;
var current_pos = frontend.util.cursor.pos(input);
var pos = frontend.state.get_editor_last_pos();
var edit_content = (function (){var or__4253__auto__ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
var or__4253__auto__ = cljs.core.deref(frontend.handler.editor._STAR_selected_text);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.close_autocomplete_if_outside = (function frontend$handler$editor$close_autocomplete_if_outside(input){
if(cljs.core.truth_((function (){var and__4251__auto__ = input;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = (function (){var or__4253__auto__ = frontend.state.get_editor_show_page_search_QMARK_();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = frontend.state.get_editor_show_page_search_hashtag_QMARK_();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return frontend.state.get_editor_show_block_search_QMARK_();
}
}
})();
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not(frontend.handler.editor.wrapped_by_QMARK_(input,"[[","]]"));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
if(cljs.core.truth_(frontend.handler.editor.get_search_q())){
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = frontend.state.get_editor_last_pos();
var current_pos = frontend.util.cursor.pos(input);
var between = logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(value,(function (){var x__4339__auto__ = pos;
var y__4340__auto__ = current_pos;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})(),(function (){var x__4336__auto__ = pos;
var y__4337__auto__ = current_pos;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})());
if(cljs.core.truth_((function (){var and__4251__auto__ = between;
if(cljs.core.truth_(and__4251__auto__)){
return ((clojure.string.includes_QMARK_(between,"[")) || (((clojure.string.includes_QMARK_(between,"]")) || (((clojure.string.includes_QMARK_(between,"(")) || (clojure.string.includes_QMARK_(between,")")))))));
} else {
return and__4251__auto__;
}
})())){
frontend.state.set_editor_show_block_search_BANG_(false);

frontend.state.set_editor_show_page_search_BANG_(false);

return frontend.state.set_editor_show_page_search_hashtag_BANG_(false);
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
frontend.handler.editor.resize_image_BANG_ = (function frontend$handler$editor$resize_image_BANG_(block_id,metadata,full_text,size){
var new_meta = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata,size], 0));
var image_part = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(full_text,/\{/));
var new_full_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_part),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_meta], 0))].join('');
var block = (function (){var G__110080 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__110080) : frontend.db.pull.call(null,G__110080));
})();
var value = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var new_value = clojure.string.replace(value,full_text,new_full_text);
return frontend.handler.editor.save_block_aux_BANG_(block,new_value,cljs.core.PersistentArrayMap.EMPTY);
});
frontend.handler.editor.mark_last_input_time_BANG_ = (function frontend$handler$editor$mark_last_input_time_BANG_(repo){
if(cljs.core.truth_(repo)){
frontend.state.set_editor_last_input_time_BANG_(repo,frontend.util.time_ms());

return frontend.db.clear_repo_persistent_job_BANG_(repo);
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_auto_save_timeout !== 'undefined')){
} else {
frontend.handler.editor._STAR_auto_save_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.editor.edit_box_on_change_BANG_ = (function frontend$handler$editor$edit_box_on_change_BANG_(e,_block,id){
var value = frontend.util.evalue(e);
var repo = frontend.state.get_current_repo();
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3(id,value,false);

if(cljs.core.truth_(cljs.core.deref(frontend.handler.editor._STAR_auto_save_timeout))){
clearTimeout(cljs.core.deref(frontend.handler.editor._STAR_auto_save_timeout));
} else {
}

frontend.handler.editor.mark_last_input_time_BANG_(repo);

return cljs.core.reset_BANG_(frontend.handler.editor._STAR_auto_save_timeout,setTimeout((function (){
if(cljs.core.truth_(frontend.state.input_idle_QMARK_(repo))){
frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"auto-save","auto-save",1805740650));

frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-properties?","skip-properties?",329398686),true], null));

return frontend.state.set_editor_op_BANG_(null);
} else {
return null;
}
}),(500)));
});
frontend.handler.editor.handle_last_input = (function frontend$handler$editor$handle_last_input(){
var input = frontend.state.get_input();
var pos = frontend.util.cursor.pos(input);
var last_input_char = frontend.util.nth_safe(input.value,(pos - (1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_input_char,frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0())){
if(cljs.core.seq(frontend.handler.editor.get_matched_commands(input))){
cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input));

cljs.core.reset_BANG_(frontend.commands._STAR_show_commands,true);
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_input_char,frontend.commands.angle_bracket)){
if(cljs.core.seq(frontend.handler.editor.get_matched_block_commands(input))){
cljs.core.reset_BANG_(frontend.commands._STAR_angle_bracket_caret_pos,frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input));

return cljs.core.reset_BANG_(frontend.commands._STAR_show_block_commands,true);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.block_on_chosen_handler = (function frontend$handler$editor$block_on_chosen_handler(_input,id,q,format){
return (function (chosen,_click_QMARK_){
frontend.state.set_editor_show_block_search_BANG_(false);

var uuid_string = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(chosen));
frontend.handler.editor.insert_command_BANG_(id,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("((%s))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uuid_string], 0)),format,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(frontend.handler.editor._STAR_selected_text))?"":q))].join(''),new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078),"))",new cljs.core.Keyword(null,"postfix-fn","postfix-fn",-1393704144),(function (s){
return frontend.util.replace_first("))",s,"");
}),new cljs.core.Keyword(null,"forward-pos","forward-pos",-1445897715),(3)], null));

frontend.handler.editor.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(chosen),new cljs.core.Keyword(null,"id","id",-1388402092),uuid_string);

var temp__5720__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5720__auto__)){
var input = temp__5720__auto__;
return input.focus();
} else {
return null;
}
});
});
frontend.handler.editor.block_non_exist_handler = (function frontend$handler$editor$block_non_exist_handler(input){
return (function (){
frontend.state.set_editor_show_block_search_BANG_(false);

return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2(input,(2));
});
});
frontend.handler.editor.paste_block_cleanup = (function frontend$handler$editor$paste_block_cleanup(block,page,exclude_properties,format,content_update_fn){
var new_content = (cljs.core.truth_(content_update_fn)?(function (){var G__110081 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
return (content_update_fn.cljs$core$IFn$_invoke$arity$1 ? content_update_fn.cljs$core$IFn$_invoke$arity$1(G__110081) : content_update_fn.call(null,G__110081));
})():new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block));
var new_content__$1 = frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,"custom_id",frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,"id",new_content));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","meta","block/meta",1064819153)], 0)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], null),new cljs.core.Keyword("block","format","block/format",-1212045901),format,new cljs.core.Keyword("block","properties","block/properties",708347145),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"custom_id","custom_id",834948303),new cljs.core.Keyword(null,"custom-id","custom-id",-615733336)], null),exclude_properties)),new cljs.core.Keyword("block","content","block/content",-161885195),new_content__$1,new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.cons(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352).cljs$core$IFn$_invoke$arity$1(block)))], null)], 0));
});
frontend.handler.editor.edit_last_block_after_inserted_BANG_ = (function frontend$handler$editor$edit_last_block_after_inserted_BANG_(result){
return setTimeout((function (){
var temp__5720__auto__ = cljs.core.last(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(result));
if(cljs.core.truth_(temp__5720__auto__)){
var last_block = temp__5720__auto__;
frontend.handler.editor.clear_when_saved_BANG_();

var last_block_SINGLEQUOTE_ = (function (){var G__110082 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__110082) : frontend.db.pull.call(null,G__110082));
})();
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(last_block_SINGLEQUOTE_,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_block_SINGLEQUOTE_));
} else {
return null;
}
}),(0));
});
frontend.handler.editor.paste_blocks = (function frontend$handler$editor$paste_blocks(blocks,p__110083){
var map__110084 = p__110083;
var map__110084__$1 = cljs.core.__destructure_map(map__110084);
var content_update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110084__$1,new cljs.core.Keyword(null,"content-update-fn","content-update-fn",132456615));
var exclude_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110084__$1,new cljs.core.Keyword(null,"exclude-properties","exclude-properties",1449787201),cljs.core.PersistentVector.EMPTY);
var target_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110084__$1,new cljs.core.Keyword(null,"target-block","target-block",348392017));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110084__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var editing_block = (function (){var temp__5720__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto__)){
var editing_block = temp__5720__auto__;
var G__110085 = (function (){var G__110086 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(editing_block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__110086) : frontend.db.pull.call(null,G__110086));
})();
if((G__110085 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__110085,new cljs.core.Keyword("block","content","block/content",-161885195),frontend.state.get_edit_content());
}
} else {
return null;
}
})();
var target_block__$1 = (function (){var or__4253__auto__ = target_block;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return editing_block;
}
})();
var block = (function (){var G__110087 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__110087) : frontend.db.entity.call(null,G__110087));
})();
var page = (cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))?block:(cljs.core.truth_(target_block__$1)?new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__110088 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__110088) : frontend.db.entity.call(null,G__110088));
})()):null));
var target_block__$2 = (function (){var or__4253__auto__ = target_block__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return editing_block;
}
})();
var sibling_QMARK___$1 = (((!((sibling_QMARK_ == null))))?sibling_QMARK_:(cljs.core.truth_((function (){var G__110089 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block__$2);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__110089) : frontend.db.has_children_QMARK_.call(null,G__110089));
})())?false:true
));
var transact_data__61870__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto__ = (cljs.core.truth_(transact_data__61870__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
if(cljs.core.truth_(transact_data__61870__auto__)){
if(cljs.core.truth_(editing_block)){
frontend.modules.outliner.core.save_block_BANG_(editing_block);
} else {
}

if(cljs.core.truth_(target_block__$2)){
var format = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(target_block__$2);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(block__$1,page,exclude_properties,format,content_update_fn);
}),blocks);
var result = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE_,target_block__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1], null));
return frontend.handler.editor.edit_last_block_after_inserted_BANG_(result);
} else {
return null;
}
} else {
var _STAR_transaction_data_STAR__orig_val__110090 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__110091 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__110091);

try{if(cljs.core.truth_(editing_block)){
frontend.modules.outliner.core.save_block_BANG_(editing_block);
} else {
}

if(cljs.core.truth_(target_block__$2)){
var format_110590 = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(target_block__$2);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var blocks_SINGLEQUOTE__110591 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(block__$1,page,exclude_properties,format_110590,content_update_fn);
}),blocks);
var result_110592 = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE__110591,target_block__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1], null));
frontend.handler.editor.edit_last_block_after_inserted_BANG_(result_110592);
} else {
}

var r__61872__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto__], 0));
var tx_meta__61874__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto__));
var all_tx__61875__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__));
var opts_SHARP___61876__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto__], 0));
if(cljs.core.seq(all_tx__61875__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__))){
return null;
} else {
var result__61877__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto__,opts_SHARP___61876__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__110090);
}}
});
frontend.handler.editor.block_tree__GT_blocks = (function frontend$handler$editor$block_tree__GT_blocks(tree_vec,format){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block);
var props = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(block));
var content_STAR_ = [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),format))?"- ":"* "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.property.insert_properties(format,content,props))].join('');
var ast = frontend.format.mldoc.__GT_edn(content_STAR_,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var blocks = frontend.format.block.extract_blocks(ast,content_STAR_,true,format);
var fst_block = cljs.core.first(blocks);
if(cljs.core.truth_(fst_block)){
} else {
throw (new Error(["Assert failed: ","fst-block shouldn't be nil","\n","fst-block"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fst_block,new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block));
}),frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$1(tree_vec));
});
/**
 * `tree-vec`: a vector of blocks.
 * Block element: {:content :properties :children [block-1, block-2, ...]}
 */
frontend.handler.editor.insert_block_tree_after_target = (function frontend$handler$editor$insert_block_tree_after_target(target_block_id,sibling_QMARK_,tree_vec,format){
var blocks = frontend.handler.editor.block_tree__GT_blocks(tree_vec,format);
var target_block = (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(target_block_id) : frontend.db.pull.call(null,target_block_id));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(target_block));
var blocks__$1 = frontend.format.block.with_parent_and_left(page_id,blocks);
return frontend.handler.editor.paste_blocks(blocks__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target-block","target-block",348392017),target_block,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_], null));
});
frontend.handler.editor.insert_template_BANG_ = (function frontend$handler$editor$insert_template_BANG_(var_args){
var G__110093 = arguments.length;
switch (G__110093) {
case 2:
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (element_id,db_id){
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3(element_id,db_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (element_id,db_id,p__110094){
var map__110095 = p__110094;
var map__110095__$1 = cljs.core.__destructure_map(map__110095);
var opts = map__110095__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110095__$1,new cljs.core.Keyword(null,"target","target",253001721));
var temp__5720__auto__ = ((cljs.core.integer_QMARK_(db_id))?db_id:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_template_by_name(cljs.core.name(db_id))));
if(cljs.core.truth_(temp__5720__auto__)){
var db_id__$1 = temp__5720__auto__;
var repo = frontend.state.get_current_repo();
var target__$1 = (function (){var or__4253__auto__ = target;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_edit_block();
}
})();
var block = (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(db_id__$1) : frontend.db.entity.call(null,db_id__$1));
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var template_including_parent_QMARK_ = (!(new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block)) === false));
var blocks = (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(repo,block_uuid) : frontend.db.get_block_and_children.call(null,repo,block_uuid));
var root_block = (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(db_id__$1) : frontend.db.pull.call(null,db_id__$1));
var blocks_exclude_root = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b),db_id__$1);
}),blocks);
var sorted_blocks = frontend.modules.outliner.tree.sort_blocks(blocks_exclude_root,root_block);
var blocks__$1 = ((template_including_parent_QMARK_)?sorted_blocks:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),sorted_blocks));
if(cljs.core.truth_(element_id)){
frontend.handler.editor.insert_command_BANG_(element_id,"",format,cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var exclude_properties = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665)], null);
var content_update_fn = (function (content){
return frontend.template.resolve_dynamic_template_BANG_(frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,"template-including-parent",frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,"template",content)));
});
var page = (cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))?block:(cljs.core.truth_(target__$1)?new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__110096 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__110096) : frontend.db.entity.call(null,G__110096));
})()):null));
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(block__$1,page,exclude_properties,format,content_update_fn);
}),blocks__$1);
var sibling_QMARK_ = new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060).cljs$core$IFn$_invoke$arity$1(opts);
var sibling_QMARK__SINGLEQUOTE_ = (((!((sibling_QMARK_ == null))))?sibling_QMARK_:(cljs.core.truth_((function (){var G__110097 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target__$1);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__110097) : frontend.db.has_children_QMARK_.call(null,G__110097));
})())?false:true
));
var transact_data__61870__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto__ = (cljs.core.truth_(transact_data__61870__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
if(cljs.core.truth_(transact_data__61870__auto__)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var result = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE_,target__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__SINGLEQUOTE_));
return frontend.handler.editor.edit_last_block_after_inserted_BANG_(result);
} else {
var _STAR_transaction_data_STAR__orig_val__110098 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__110099 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__110099);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var result_110594 = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE_,target__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__SINGLEQUOTE_));
frontend.handler.editor.edit_last_block_after_inserted_BANG_(result_110594);

var r__61872__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto__], 0));
var tx_meta__61874__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto__));
var all_tx__61875__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__));
var opts_SHARP___61876__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto__], 0));
if(cljs.core.seq(all_tx__61875__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__))){
return null;
} else {
var result__61877__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto__,opts_SHARP___61876__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__110098);
}}
} else {
return null;
}
}));

(frontend.handler.editor.insert_template_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.editor.template_on_chosen_handler = (function frontend$handler$editor$template_on_chosen_handler(element_id){
return (function (p__110100,_click_QMARK_){
var vec__110101 = p__110100;
var _template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110101,(0),null);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110101,(1),null);
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3(element_id,db_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null));
});
});
frontend.handler.editor.parent_is_page_QMARK_ = (function frontend$handler$editor$parent_is_page_QMARK_(p__110104){
var map__110105 = p__110104;
var map__110105__$1 = cljs.core.__destructure_map(map__110105);
var node = map__110105__$1;
var map__110106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110105__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__110106__$1 = cljs.core.__destructure_map(map__110106);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110106__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110106__$1,new cljs.core.Keyword("block","page","block/page",822314108));
if(frontend.modules.outliner.tree.satisfied_inode_QMARK_(node)){
} else {
throw (new Error("Assert failed: (tree/satisfied-inode? node)"));
}

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,page);
});
frontend.handler.editor.outdent_on_enter = (function frontend$handler$editor$outdent_on_enter(node){
if(frontend.handler.editor.parent_is_page_QMARK_(node)){
return null;
} else {
var parent_node = frontend.modules.outliner.tree._get_parent(node);
var transact_data__61870__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto__ = (cljs.core.truth_(transact_data__61870__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null));
if(cljs.core.truth_(transact_data__61870__auto__)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.modules.outliner.core.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(parent_node),true);
} else {
var _STAR_transaction_data_STAR__orig_val__110107 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__110108 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__110108);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(parent_node),true);

var r__61872__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto__], 0));
var tx_meta__61874__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto__));
var all_tx__61875__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__));
var opts_SHARP___61876__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto__], 0));
if(cljs.core.seq(all_tx__61875__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto__))){
return null;
} else {
var result__61877__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto__,opts_SHARP___61876__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__110107);
}}
}
});
frontend.handler.editor.last_top_level_child_QMARK_ = (function frontend$handler$editor$last_top_level_child_QMARK_(p__110109,current_node){
var map__110110 = p__110109;
var map__110110__$1 = cljs.core.__destructure_map(map__110110);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110110__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
var temp__5720__auto__ = (cljs.core.truth_(logseq.graph_parser.util.uuid_string_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)))?(function (){var G__110111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(id)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__110111) : frontend.db.entity.call(null,G__110111));
})():(function (){var G__110112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(id)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__110112) : frontend.db.entity.call(null,G__110112));
})());
if(cljs.core.truth_(temp__5720__auto__)){
var entity = temp__5720__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity),frontend.modules.outliner.tree._get_parent_id(current_node));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.insert = (function frontend$handler$editor$insert(insertion){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var value = input.value;
var s1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selected_start);
var s2 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selected_end);
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),[s1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(insertion),s2].join(''));

return frontend.util.cursor.move_cursor_to(input,(selected_start + cljs.core.count(insertion)));
}
});
frontend.handler.editor.keydown_new_line = (function frontend$handler$editor$keydown_new_line(){
return frontend.handler.editor.insert("\n");
});
frontend.handler.editor.dwim_in_properties = (function frontend$handler$editor$dwim_in_properties(state){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var map__110113 = frontend.handler.editor.get_state();
var map__110113__$1 = cljs.core.__destructure_map(map__110113);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110113__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var content = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(frontend.handler.editor.get_state()));
var property_key = new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(frontend.util.thingatpt.property_key_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)));
var org_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985));
var move_to_pos = ((org_QMARK_)?(2):(3));
if(org_QMARK_){
if(cljs.core.truth_((function (){var and__4251__auto__ = property_key;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(property_key,"");
} else {
return and__4251__auto__;
}
})())){
var G__110114 = property_key;
switch (G__110114) {
case "PROPERTIES":
frontend.util.cursor.move_cursor_to_line_end(input);

frontend.handler.editor.insert("\n:: ");

return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2(input,move_to_pos);

break;
case "END":
frontend.util.cursor.move_cursor_to_end(input);

frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(state);

break;
default:
if(frontend.util.property.property_key_exist_QMARK_(format,content,property_key)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.content","p.content",-1435376888),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Property key \"%s\" already exists!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([property_key], 0))], null),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return frontend.util.cursor.move_cursor_to_line_end(input);
}

}
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = property_key;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_key,"");
} else {
return and__4251__auto__;
}
})())){
var G__110115_110596 = input;
var G__110116_110597 = frontend.util.cursor.line_beginning_pos(input);
var G__110117_110598 = (frontend.util.cursor.line_end_pos(input) + (1));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(G__110115_110596,G__110116_110597,G__110117_110598) : frontend.handler.editor.delete_and_update.call(null,G__110115_110596,G__110116_110597,G__110117_110598));

frontend.util.property.goto_properties_end(format,input);

return frontend.util.cursor.move_cursor_to_line_end(input);
} else {
frontend.handler.editor.insert("\n:: ");

return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2(input,move_to_pos);

}
}
} else {
return frontend.handler.editor.insert("\n");
}
} else {
return null;
}
}
});
frontend.handler.editor.toggle_list_checkbox = (function frontend$handler$editor$toggle_list_checkbox(p__110118,old_item_content,new_item_content){
var map__110119 = p__110118;
var map__110119__$1 = cljs.core.__destructure_map(map__110119);
var block = map__110119__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110119__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var new_content = clojure.string.replace_first(content,old_item_content,new_item_content);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
});
frontend.handler.editor.dwim_in_list = (function frontend$handler$editor$dwim_in_list(){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var map__110120 = frontend.handler.editor.get_state();
var map__110120__$1 = cljs.core.__destructure_map(map__110120);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110120__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var map__110121 = item;
var map__110121__$1 = cljs.core.__destructure_map(map__110121);
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110121__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110121__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var bullet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110121__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110121__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655));
var ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110121__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110121__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var next_bullet = (cljs.core.truth_(ordered)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((bullet + (1))),"."].join(''):bullet);
var checkbox__$1 = (cljs.core.truth_(checkbox)?"[ ] ":null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(full_content),((cljs.core.truth_(ordered)?(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(bullet)).length) + (2)):(2)) + (cljs.core.truth_(checkbox__$1)?((checkbox__$1).length):null)))) && (clojure.string.includes_QMARK_(input.value,"\n")))){
var G__110122 = input;
var G__110123 = frontend.util.cursor.line_beginning_pos(input);
var G__110124 = frontend.util.cursor.line_end_pos(input);
return (frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(G__110122,G__110123,G__110124) : frontend.handler.editor.delete_and_update.call(null,G__110122,G__110123,G__110124));
} else {
var start_pos = frontend.util.get_selection_start(input);
var value = input.value;
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start_pos);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,start_pos);
var cursor_in_item_content_QMARK_ = (function (){var and__4251__auto__ = cljs.core.re_find(/^(\d+){1}\./,cljs.core.last(clojure.string.split_lines(before)));
if(cljs.core.truth_(and__4251__auto__)){
return (!(clojure.string.blank_QMARK_(cljs.core.first(clojure.string.split_lines(after)))));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(cursor_in_item_content_QMARK_)){
} else {
frontend.util.cursor.move_cursor_to_line_end(input);

frontend.handler.editor.insert(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_bullet)," ",checkbox__$1].join(''));
}

if(cljs.core.truth_(ordered)){
var value__$1 = input.value;
var start_pos__$1 = frontend.util.get_selection_start(input);
var after_lists_str = clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value__$1,start_pos__$1));
var after_lists_str__$1 = (cljs.core.truth_(cursor_in_item_content_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_bullet)," ",after_lists_str].join(''):after_lists_str);
var lines = clojure.string.split_lines(after_lists_str__$1);
var after_lists_str_SINGLEQUOTE_ = frontend.util.list.re_order_items(lines,(cljs.core.truth_(cursor_in_item_content_QMARK_)?bullet:(bullet + (1))));
var value_SINGLEQUOTE_ = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value__$1,(0),start_pos__$1),"\n",after_lists_str_SINGLEQUOTE_].join('');
var cursor_SINGLEQUOTE_ = (cljs.core.truth_(cursor_in_item_content_QMARK_)?((([cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value__$1,(0),start_pos__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_bullet)," "].join('')).length) + (1)):((new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(item) + cljs.core.count(next_bullet)) + (2)));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),value_SINGLEQUOTE_);

return frontend.util.cursor.move_cursor_to(input,cursor_SINGLEQUOTE_);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}
});
frontend.handler.editor.toggle_list_BANG_ = (function frontend$handler$editor$toggle_list_BANG_(){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var map__110130 = frontend.handler.editor.get_state();
var map__110130__$1 = cljs.core.__destructure_map(map__110130);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110130__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var format = (function (){var or__4253__auto__ = (function (){var G__110131 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__110131) : frontend.db.get_page_format.call(null,G__110131));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var new_unordered_bullet = (function (){var G__110132 = format;
var G__110132__$1 = (((G__110132 instanceof cljs.core.Keyword))?G__110132.fqn:null);
switch (G__110132__$1) {
case "org":
return "-";

break;
default:
return "*";

}
})();
var current_pos = frontend.util.cursor.pos(input);
var content = frontend.state.get_edit_content();
var pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(current_pos);
var temp__5718__auto___110603 = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto___110603)){
var item_110604 = temp__5718__auto___110603;
var map__110133_110605 = item_110604;
var map__110133_110606__$1 = cljs.core.__destructure_map(map__110133_110605);
var ordered_110607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110133_110606__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var list_beginning_pos_110608 = frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
var list_end_pos_110609 = frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
var list_110610 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,list_beginning_pos_110608,list_end_pos_110609);
var items_110611 = clojure.string.split_lines(list_110610);
var splitter_reg_110612 = (cljs.core.truth_(ordered_110607)?/[\d]*\.\s*/:/[-\*]{1}\s*/);
var items_without_bullet_110613 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__110125_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$3(p1__110125_SHARP_,splitter_reg_110612,(2)));
}),items_110611));
var new_list_110614 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(cljs.core.truth_(ordered_110607)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__110126_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_unordered_bullet)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__110126_SHARP_)].join('');
}),items_without_bullet_110613):cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__110127_SHARP_,p2__110128_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__110127_SHARP_ + (1))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__110128_SHARP_)].join('');
}),items_without_bullet_110613)));
var index_of_current_item_110615 = (items_without_bullet_110613.indexOf(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(item_110604),splitter_reg_110612,(2)))) + (1));
var numbers_length_110616 = ((clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__110129_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__110129_SHARP_ + (1))),". "].join('');
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(items_without_bullet_110613,(0),index_of_current_item_110615)))).length);
var pos_diff_110617 = (numbers_length_110616 - ((2) * index_of_current_item_110615));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,list_beginning_pos_110608,list_end_pos_110609) : frontend.handler.editor.delete_and_update.call(null,input,list_beginning_pos_110608,list_end_pos_110609));

frontend.handler.editor.insert(new_list_110614);

cljs.core.reset_BANG_(pos,(cljs.core.truth_(ordered_110607)?(current_pos - pos_diff_110617):(current_pos + pos_diff_110617)));
} else {
var prev_item_110618 = frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
frontend.util.cursor.move_cursor_down(input);

frontend.util.cursor.move_cursor_to_line_beginning(input);

if(cljs.core.truth_(prev_item_110618)){
var map__110134_110619 = prev_item_110618;
var map__110134_110620__$1 = cljs.core.__destructure_map(map__110134_110619);
var bullet_110621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110134_110620__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var ordered_110622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110134_110620__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var current_bullet_110623 = (cljs.core.truth_(ordered_110622)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((bullet_110621 + (1))),"."].join(''):bullet_110621);
frontend.handler.editor.insert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_bullet_110623)," "].join(''));

cljs.core.reset_BANG_(pos,((current_pos + cljs.core.count(current_bullet_110623)) + (1)));
} else {
frontend.handler.editor.insert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_unordered_bullet)," "].join(''));

cljs.core.reset_BANG_(pos,(current_pos + (2)));
}
}

return frontend.util.cursor.move_cursor_to(input,cljs.core.deref(pos));
} else {
return null;
}
}
});
frontend.handler.editor.toggle_page_reference_embed = (function frontend$handler$editor$toggle_page_reference_embed(parent_id){
var map__110135 = frontend.handler.editor.get_state();
var map__110135__$1 = cljs.core.__destructure_map(map__110135);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110135__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var new_pos = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var page_ref_fn = (function (bounds,backward_pos){
return frontend.commands.simple_insert_BANG_(parent_id,bounds,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),backward_pos,new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),(function (_,___$1,___$2){
cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,new_pos);

return frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812)], null));
})], null));
});
frontend.state.set_editor_show_page_search_BANG_(false);

var selection = frontend.handler.editor.get_selection_and_format();
var map__110136 = selection;
var map__110136__$1 = cljs.core.__destructure_map(map__110136);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110136__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110136__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var selection__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110136__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core.truth_(selection__$1)){
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,selection_start,selection_end) : frontend.handler.editor.delete_and_update.call(null,input,selection_start,selection_end));

return frontend.handler.editor.insert(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selection__$1], 0)));
} else {
var temp__5718__auto__ = frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto__)){
var embed_ref = temp__5718__auto__;
var map__110137 = embed_ref;
var map__110137__$1 = cljs.core.__destructure_map(map__110137);
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110137__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110137__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110137__$1,new cljs.core.Keyword(null,"end","end",-268185958));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),cljs.core.count(raw_content))){
return page_ref_fn("[[]]",(2));
} else {
return frontend.handler.editor.insert(raw_content);
}
} else {
var temp__5718__auto____$1 = frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto____$1)){
var page_ref = temp__5718__auto____$1;
var map__110138 = page_ref;
var map__110138__$1 = cljs.core.__destructure_map(map__110138);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110138__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110138__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110138__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110138__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_content,"")){
return page_ref_fn("{{embed [[]]}}",(4));
} else {
return frontend.handler.editor.insert(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([full_content], 0)));
}
} else {
return page_ref_fn("[[]]",(2));
}
}
}
} else {
return null;
}
});
frontend.handler.editor.toggle_block_reference_embed = (function frontend$handler$editor$toggle_block_reference_embed(parent_id){
var map__110139 = frontend.handler.editor.get_state();
var map__110139__$1 = cljs.core.__destructure_map(map__110139);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110139__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var new_pos = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var block_ref_fn = (function (bounds,backward_pos){
return frontend.commands.simple_insert_BANG_(parent_id,bounds,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),backward_pos,new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),(function (_,___$1,___$2){
cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,new_pos);

return frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652)], null));
})], null));
});
frontend.state.set_editor_show_block_search_BANG_(false);

var temp__5718__auto__ = frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto__)){
var embed_ref = temp__5718__auto__;
var map__110140 = embed_ref;
var map__110140__$1 = cljs.core.__destructure_map(map__110140);
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110140__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110140__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110140__$1,new cljs.core.Keyword(null,"end","end",-268185958));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),cljs.core.count(raw_content))){
return block_ref_fn("(())",(2));
} else {
return frontend.handler.editor.insert(raw_content);
}
} else {
var temp__5718__auto____$1 = frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto____$1)){
var page_ref = temp__5718__auto____$1;
var map__110141 = page_ref;
var map__110141__$1 = cljs.core.__destructure_map(map__110141);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110141__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110141__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110141__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110141__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_content,"")){
return block_ref_fn("{{embed (())}}",(4));
} else {
return frontend.handler.editor.insert(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([full_content], 0)));
}
} else {
return block_ref_fn("(())",(2));
}
}
} else {
return null;
}
});
frontend.handler.editor.keydown_new_block = (function frontend$handler$editor$keydown_new_block(state){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var map__110142 = frontend.handler.editor.get_state();
var map__110142__$1 = cljs.core.__destructure_map(map__110142);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110142__$1,new cljs.core.Keyword(null,"block","block",664686210));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110142__$1,new cljs.core.Keyword(null,"config","config",994861415));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var content = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = frontend.util.cursor.pos(input);
var current_node = frontend.modules.outliner.core.block(block);
var has_right_QMARK_ = frontend.modules.outliner.tree.satisfied_inode_QMARK_(frontend.modules.outliner.tree._get_right(current_node));
var thing_at_point = (function (){var or__4253__auto__ = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"admonition&src?","admonition&src?",1506556328)))?frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"markup?","markup?",-1222732996)))?frontend.util.thingatpt.markup_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853)))?frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"page-ref?","page-ref?",677685143)))?frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"properties?","properties?",3428414)))?frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
if(cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"list?","list?",-1642026156)))){
var and__4251__auto__ = cljs.core.not(frontend.util.cursor.beginning_of_line_QMARK_(input));
if(and__4251__auto__){
return frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
} else {
return and__4251__auto__;
}
} else {
return null;
}
}
}
}
}
}
})();
if(cljs.core.truth_(thing_at_point)){
var G__110143 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(thing_at_point);
switch (G__110143) {
case "markup":
var right_bound = new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(thing_at_point);
return frontend.util.cursor.move_cursor_to(input,(clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(content,right_bound,pos) + cljs.core.count(right_bound)));

break;
case "admonition-block":
return frontend.handler.editor.keydown_new_line();

break;
case "source-block":
frontend.handler.editor.keydown_new_line();

var G__110144 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(thing_at_point);
var G__110144__$1 = (((G__110144 instanceof cljs.core.Keyword))?G__110144.fqn:null);
switch (G__110144__$1) {
case "into-code-editor":
return frontend.state.into_code_editor_mode_BANG_();

break;
default:
return null;

}

break;
case "block-ref":
return frontend.handler.editor.open_block_in_sidebar_BANG_(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(thing_at_point));

break;
case "page-ref":
if(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(thing_at_point))){
return null;
} else {
var page = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(thing_at_point);
var page_name = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page);
return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);
}

break;
case "list-item":
return frontend.handler.editor.dwim_in_list();

break;
case "properties-drawer":
return frontend.handler.editor.dwim_in_properties(state);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110143)].join('')));

}
} else {
if(((clojure.string.blank_QMARK_(content)) && ((((!(has_right_QMARK_))) && (cljs.core.not(frontend.handler.editor.last_top_level_child_QMARK_(config,current_node))))))){
return frontend.handler.editor.outdent_on_enter(current_node);
} else {
if(cljs.core.truth_(goog.DEBUG)){
var k__44398__auto__ = "Insert block";
console.time(k__44398__auto__);

var res__44399__auto__ = (function (){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(state);
})()
;
console.timeEnd(k__44398__auto__);

return res__44399__auto__;
} else {
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(state);
}

}
}
} else {
return null;
}
}
});
frontend.handler.editor.keydown_new_block_handler = (function frontend$handler$editor$keydown_new_block_handler(state,e){
if(cljs.core.truth_(frontend.state.doc_mode_enter_for_new_line_QMARK_())){
return frontend.handler.editor.keydown_new_line();
} else {
e.preventDefault();

return frontend.handler.editor.keydown_new_block(state);
}
});
frontend.handler.editor.keydown_new_line_handler = (function frontend$handler$editor$keydown_new_line_handler(state,e){
if(cljs.core.truth_(frontend.state.doc_mode_enter_for_new_line_QMARK_())){
return frontend.handler.editor.keydown_new_block(state);
} else {
e.preventDefault();

return frontend.handler.editor.keydown_new_line();
}
});
/**
 * Select first or last block in viewpoint
 */
frontend.handler.editor.select_first_last = (function frontend$handler$editor$select_first_last(direction){
var f = (function (){var G__110145 = direction;
var G__110145__$1 = (((G__110145 instanceof cljs.core.Keyword))?G__110145.fqn:null);
switch (G__110145__$1) {
case "up":
return cljs.core.last;

break;
case "down":
return cljs.core.first;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110145__$1)].join('')));

}
})();
var block = (function (){var G__110146 = frontend.util.get_blocks_noncollapse();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__110146) : f.call(null,G__110146));
})();
if(cljs.core.truth_(block)){
block.scrollIntoView(({"behavior": "smooth", "block": "center"}));

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null));
} else {
return null;
}
});
frontend.handler.editor.select_up_down = (function frontend$handler$editor$select_up_down(direction){
var selected = cljs.core.first(frontend.state.get_selection_blocks());
var f = (function (){var G__110147 = direction;
var G__110147__$1 = (((G__110147 instanceof cljs.core.Keyword))?G__110147.fqn:null);
switch (G__110147__$1) {
case "up":
return frontend.util.get_prev_block_non_collapsed;

break;
case "down":
return frontend.util.get_next_block_non_collapsed;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110147__$1)].join('')));

}
})();
var sibling_block = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(selected) : f.call(null,selected));
if(cljs.core.truth_((function (){var and__4251__auto__ = sibling_block;
if(cljs.core.truth_(and__4251__auto__)){
return dommy.core.attr(sibling_block,"blockid");
} else {
return and__4251__auto__;
}
})())){
sibling_block.scrollIntoView(({"behavior": "smooth", "block": "center"}));

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sibling_block], null));
} else {
return null;
}
});
frontend.handler.editor.move_cross_boundrary_up_down = (function frontend$handler$editor$move_cross_boundrary_up_down(direction){
var input = frontend.state.get_input();
var line_pos = frontend.util.get_first_or_last_line_pos(input);
var repo = frontend.state.get_current_repo();
var f = (function (){var G__110149 = direction;
var G__110149__$1 = (((G__110149 instanceof cljs.core.Keyword))?G__110149.fqn:null);
switch (G__110149__$1) {
case "up":
return frontend.util.get_prev_block_non_collapsed;

break;
case "down":
return frontend.util.get_next_block_non_collapsed;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110149__$1)].join('')));

}
})();
var sibling_block = (function (){var G__110150 = goog.dom.getElement(frontend.state.get_editing_block_dom_id());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__110150) : f.call(null,G__110150));
})();
var map__110148 = frontend.state.get_edit_block();
var map__110148__$1 = cljs.core.__destructure_map(map__110148);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110148__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110148__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110148__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
if(cljs.core.truth_(sibling_block)){
var temp__5720__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5720__auto__)){
var sibling_block_id = temp__5720__auto__;
var value_110652 = frontend.state.get_edit_content();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.clean_content_BANG_(format,content),clojure.string.trim(value_110652))){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,uuid,value_110652);
} else {
}

var new_id = clojure.string.replace(frontend.handler.editor.goog$module$goog$object.get(sibling_block,"id"),"ls-block","edit-block");
var new_uuid = cljs.core.uuid(sibling_block_id);
var block = (function (){var G__110151 = repo;
var G__110152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__110153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_uuid], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__110151,G__110152,G__110153) : frontend.db.pull.call(null,G__110151,G__110152,G__110153));
})();
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [direction,line_pos], null),new_id);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.keydown_up_down_handler = (function frontend$handler$editor$keydown_up_down_handler(direction){
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113));
var down_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"down","down",1565245570));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
if(up_QMARK_){
return frontend.util.cursor.move_cursor_to(input,selected_start);
} else {
return frontend.util.cursor.move_cursor_to(input,selected_end);
}
} else {
if(((((up_QMARK_) && (frontend.util.cursor.textarea_cursor_first_row_QMARK_(input)))) || (((down_QMARK_) && (frontend.util.cursor.textarea_cursor_last_row_QMARK_(input)))))){
return frontend.handler.editor.move_cross_boundrary_up_down(direction);
} else {
if(up_QMARK_){
return frontend.util.cursor.move_cursor_up(input);
} else {
return frontend.util.cursor.move_cursor_down(input);
}

}
}
});
frontend.handler.editor.move_to_block_when_cross_boundrary = (function frontend$handler$editor$move_to_block_when_cross_boundrary(direction){
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),direction);
var pos = ((up_QMARK_)?new cljs.core.Keyword(null,"max","max",61366548):(0));
var map__110154 = frontend.state.get_edit_block();
var map__110154__$1 = cljs.core.__destructure_map(map__110154);
var block = map__110154__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110154__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110154__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var id = frontend.state.get_edit_input_id();
var repo = frontend.state.get_current_repo();
var f = ((up_QMARK_)?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed);
var sibling_block = (function (){var G__110155 = goog.dom.getElement(frontend.state.get_editing_block_dom_id());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__110155) : f.call(null,G__110155));
})();
if(cljs.core.truth_(sibling_block)){
var temp__5720__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5720__auto__)){
var sibling_block_id = temp__5720__auto__;
var content_110653 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var value_110654 = frontend.state.get_edit_content();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.clean_content_BANG_(format,content_110653),clojure.string.trim(value_110654))){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,uuid,value_110654);
} else {
}

var block__$1 = (function (){var G__110156 = repo;
var G__110157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__110158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(sibling_block_id)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__110156,G__110157,G__110158) : frontend.db.pull.call(null,G__110156,G__110157,G__110158));
})();
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block__$1,pos,id);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.keydown_arrow_handler = (function frontend$handler$editor$keydown_arrow_handler(direction){
var input = frontend.state.get_input();
var element = document.activeElement;
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var left_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"left","left",-399115937));
var right_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,element)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
if(left_QMARK_){
return frontend.util.cursor.move_cursor_to(input,selected_start);
} else {
return frontend.util.cursor.move_cursor_to(input,selected_end);
}
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){var and__4251__auto__ = left_QMARK_;
if(and__4251__auto__){
return frontend.util.cursor.start_QMARK_(input);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = right_QMARK_;
if(and__4251__auto__){
return frontend.util.cursor.end_QMARK_(input);
} else {
return and__4251__auto__;
}
}
})())){
return frontend.handler.editor.move_to_block_when_cross_boundrary(direction);
} else {
if(left_QMARK_){
return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$1(input);
} else {
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1(input);
}

}
}
} else {
return null;
}
});
frontend.handler.editor.delete_and_update = (function frontend$handler$editor$delete_and_update(input,start,end){
frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4(input,"",start,end);

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),input.value);
});
frontend.handler.editor.delete_concat = (function frontend$handler$editor$delete_concat(current_block){
var input_id = frontend.state.get_edit_input_id();
var input = frontend.state.get_input();
var current_pos = frontend.util.cursor.pos(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var right = frontend.modules.outliner.core.get_right_node(frontend.modules.outliner.core.block(current_block));
var current_block_has_children_QMARK_ = (function (){var G__110159 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__110159) : frontend.db.has_children_QMARK_.call(null,G__110159));
})();
var collapsed_QMARK_ = frontend.util.collapsed_QMARK_(current_block);
var first_child = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.tree._get_down(frontend.modules.outliner.core.block(current_block)));
var next_block = (cljs.core.truth_((function (){var or__4253__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not(current_block_has_children_QMARK_);
}
})())?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(right):first_child);
if(cljs.core.truth_((function (){var and__4251__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = right;
if(cljs.core.truth_(and__4251__auto____$1)){
var G__110160 = frontend.modules.outliner.tree._get_id(right);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__110160) : frontend.db.has_children_QMARK_.call(null,G__110160));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(collapsed_QMARK_);
if(and__4251__auto__){
var and__4251__auto____$1 = first_child;
if(cljs.core.truth_(and__4251__auto____$1)){
var G__110161 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_child);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__110161) : frontend.db.has_children_QMARK_.call(null,G__110161));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
frontend.handler.editor.delete_block_aux_BANG_(next_block,false);

frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(next_block))].join(''));

return frontend.util.cursor.move_cursor_to(input,current_pos);

}
}
});
frontend.handler.editor.keydown_delete_handler = (function frontend$handler$editor$keydown_delete_handler(_e){
var input = frontend.state.get_input();
var current_pos = frontend.util.cursor.pos(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var end_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_pos,cljs.core.count(value));
var current_block = frontend.state.get_edit_block();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
if(cljs.core.truth_(current_block)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
return frontend.handler.editor.delete_and_update(input,selected_start,selected_end);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = end_QMARK_;
if(and__4251__auto__){
return current_block;
} else {
return and__4251__auto__;
}
})())){
return frontend.handler.editor.delete_concat(current_block);
} else {
return frontend.handler.editor.delete_and_update(input,current_pos,(current_pos + (1)));

}
}
} else {
return null;
}
});
frontend.handler.editor.keydown_backspace_handler = (function frontend$handler$editor$keydown_backspace_handler(cut_QMARK_,e){
var input = frontend.state.get_input();
var id = frontend.state.get_edit_input_id();
var current_pos = frontend.util.cursor.pos(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var deleted = (function (){var and__4251__auto__ = (current_pos > (0));
if(and__4251__auto__){
return frontend.util.nth_safe(value,(current_pos - (1)));
} else {
return and__4251__auto__;
}
})();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var block = frontend.state.get_edit_block();
var repo = frontend.state.get_current_repo();
var top_block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
var root_block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","container","block/container",510671002).cljs$core$IFn$_invoke$arity$1(block),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
frontend.handler.editor.mark_last_input_time_BANG_(repo);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
frontend.util.stop(e);

if(cljs.core.truth_(cut_QMARK_)){
document.execCommand("copy");
} else {
}

return frontend.handler.editor.delete_and_update(input,selected_start,selected_end);
} else {
if((current_pos === (0))){
frontend.util.stop(e);

if((function (){var and__4251__auto__ = ((top_block_QMARK_)?clojure.string.blank_QMARK_(value):true);
if(and__4251__auto__){
return (!(root_block_QMARK_));
} else {
return and__4251__auto__;
}
})()){
return frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$2(repo,false);
} else {
return null;
}
} else {
if((((current_pos > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,(current_pos - (1))),frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0())))){
frontend.util.stop(e);

cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,null);

cljs.core.reset_BANG_(frontend.commands._STAR_show_commands,false);

return frontend.handler.editor.delete_and_update(input,(current_pos - (1)),current_pos);
} else {
if((((current_pos > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,(current_pos - (1))),frontend.commands.angle_bracket)))){
frontend.util.stop(e);

cljs.core.reset_BANG_(frontend.commands._STAR_angle_bracket_caret_pos,null);

cljs.core.reset_BANG_(frontend.commands._STAR_show_block_commands,false);

return frontend.handler.editor.delete_and_update(input,(current_pos - (1)),current_pos);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = deleted;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.contains_QMARK_(cljs.core.set(cljs.core.keys(frontend.handler.editor.delete_map)),deleted)) && ((((cljs.core.count(value) >= (current_pos + (1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,current_pos),cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.delete_map,deleted))))));
} else {
return and__4251__auto__;
}
})())){
frontend.util.stop(e);

frontend.commands.delete_pair_BANG_(id);

if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"[");
if(and__4251__auto__){
return frontend.state.get_editor_show_page_search_QMARK_();
} else {
return and__4251__auto__;
}
})())){
return frontend.state.set_editor_show_page_search_BANG_(false);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"(");
if(and__4251__auto__){
return frontend.state.get_editor_show_block_search_QMARK_();
} else {
return and__4251__auto__;
}
})())){
return frontend.state.set_editor_show_block_search_BANG_(false);
} else {
return null;

}
}
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"#");
if(and__4251__auto__){
return frontend.state.get_editor_show_page_search_hashtag_QMARK_();
} else {
return and__4251__auto__;
}
})())){
frontend.state.set_editor_show_page_search_hashtag_BANG_(false);

return frontend.handler.editor.delete_and_update(input,(current_pos - (1)),current_pos);
} else {
frontend.util.stop(e);

return frontend.handler.editor.delete_and_update(input,frontend.util.safe_dec_current_pos_from_end(input.value,current_pos),current_pos);

}
}
}
}
}
}
});
frontend.handler.editor.indent_outdent = (function frontend$handler$editor$indent_outdent(indent_QMARK_){
frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747));

var pos = (function (){var G__110163 = frontend.state.get_input();
if((G__110163 == null)){
return null;
} else {
return frontend.util.cursor.pos(G__110163);
}
})();
var map__110162 = frontend.handler.editor.get_state();
var map__110162__$1 = cljs.core.__destructure_map(map__110162);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110162__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
frontend.state.set_editor_last_pos_BANG_(pos);

var transact_data__61870__auto___110655 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto___110656 = (cljs.core.truth_(transact_data__61870__auto___110655)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null));
if(cljs.core.truth_(transact_data__61870__auto___110655)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),indent_QMARK_);
} else {
var _STAR_transaction_data_STAR__orig_val__110164_110657 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__110165_110658 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__110165_110658);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),indent_QMARK_);

var r__61872__auto___110659 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto___110660 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto___110659], 0));
var tx_meta__61874__auto___110661 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto___110659));
var all_tx__61875__auto___110662 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto___110660,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110656));
var opts_SHARP___61876__auto___110663 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto___110656,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto___110661], 0));
if(cljs.core.seq(all_tx__61875__auto___110662)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110656))){
} else {
var result__61877__auto___110664 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto___110662,opts_SHARP___61876__auto___110663);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto___110662,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto___110661,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto___110664], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__110164_110657);
}}
} else {
}

return frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"nil","nil",99600501));
});
frontend.handler.editor.keydown_tab_handler = (function frontend$handler$editor$keydown_tab_handler(direction){
return (function (e){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
if(((cljs.core.not(frontend.state.get_editor_show_input())) && (((cljs.core.not(frontend.state.get_editor_show_date_picker_QMARK_())) && (cljs.core.not(frontend.state.get_editor_show_template_search_QMARK_())))))){
frontend.util.stop(e);

frontend.handler.editor.indent_outdent((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),direction))));
} else {
}
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
frontend.util.stop(e);

frontend.handler.editor.on_tab(direction);
} else {
}
}

return null;
});
});
frontend.handler.editor.keydown_not_matched_handler = (function frontend$handler$editor$keydown_not_matched_handler(format){
return (function (e,_key_code){
var input_id = frontend.state.get_edit_input_id();
var input = frontend.state.get_input();
var key = frontend.handler.editor.goog$module$goog$object.get(e,"key");
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var ctrlKey = frontend.handler.editor.goog$module$goog$object.get(e,"ctrlKey");
var metaKey = frontend.handler.editor.goog$module$goog$object.get(e,"metaKey");
var pos = frontend.util.cursor.pos(input);
var hashtag_QMARK_ = (function (){var or__4253__auto__ = frontend.handler.editor.surround_by_QMARK_(input,"#"," ");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = frontend.handler.editor.surround_by_QMARK_(input,"#",new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"#");
}
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2(e,true);
if(cljs.core.truth_(and__4251__auto__)){
return (((!(hashtag_QMARK_))) && (cljs.core.not(frontend.state.get_editor_show_page_search_hashtag_QMARK_())));
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = ctrlKey;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return metaKey;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.mobile.util.is_native_platform_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Backspace")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"")));
} else {
return and__4251__auto__;
}
})())){
frontend.util.stop(e);

return frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),false);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"#")) && ((((pos > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",frontend.util.nth_safe(value,(pos - (1))))))))){
return frontend.state.set_editor_show_page_search_hashtag_BANG_(false);
} else {
if(((cljs.core.contains_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(frontend.handler.editor.reversed_autopair_map)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["`",null], null), null)),key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_current_input_char(input),key)))){
frontend.util.stop(e);

return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1(input);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = (frontend.handler.editor.autopair_when_selected.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.autopair_when_selected.cljs$core$IFn$_invoke$arity$1(key) : frontend.handler.editor.autopair_when_selected.call(null,key));
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.blank_QMARK_(frontend.util.get_selected_text());
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
if((((!(clojure.string.blank_QMARK_(frontend.util.get_selected_text())))) && (cljs.core.contains_QMARK_(frontend.util.keycode.left_square_brackets_keys,key)))){
frontend.handler.editor.autopair(input_id,"[",format,null);

return frontend.util.stop(e);
} else {
if((((!(clojure.string.blank_QMARK_(frontend.util.get_selected_text())))) && (cljs.core.contains_QMARK_(frontend.util.keycode.left_paren_keys,key)))){
frontend.util.stop(e);

return frontend.handler.editor.autopair(input_id,"(",format,null);
} else {
if(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.keys(frontend.handler.editor.autopair_map)),key)){
frontend.util.stop(e);

return frontend.handler.editor.autopair(input_id,key,format,null);
} else {
if(hashtag_QMARK_){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page-hashtag","editor/search-page-hashtag",2082188401)], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"#")){
frontend.state.set_editor_last_pos_BANG_((frontend.util.cursor.pos(input) + (1)));
} else {
frontend.state.set_editor_last_pos_BANG_(frontend.util.cursor.pos(input));
}

return cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input));
} else {
if((function (){var sym = "$";
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sym);
if(and__4251__auto__){
var and__4251__auto____$1 = (cljs.core.count(value) >= (1));
if(and__4251__auto____$1){
var and__4251__auto____$2 = (pos > (0));
if(and__4251__auto____$2){
var and__4251__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(pos - (1))),sym);
if(and__4251__auto____$3){
if((cljs.core.count(value) > pos)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,pos),sym);
} else {
return true;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})()){
return frontend.commands.simple_insert_BANG_(input_id,"$$",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null));
} else {
if((function (){var sym = "^";
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sym);
if(and__4251__auto__){
var and__4251__auto____$1 = (cljs.core.count(value) >= (1));
if(and__4251__auto____$1){
var and__4251__auto____$2 = (pos > (0));
if(and__4251__auto____$2){
var and__4251__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(pos - (1))),sym);
if(and__4251__auto____$3){
if((cljs.core.count(value) > pos)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,pos),sym);
} else {
return true;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})()){
return frontend.commands.simple_insert_BANG_(input_id,"^^",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null));
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
});
});
frontend.handler.editor.keyup_handler = (function frontend$handler$editor$keyup_handler(_state,input,input_id,search_timeout){
return (function (e,key_code){
if(cljs.core.truth_(frontend.util.event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$1(e))){
return null;
} else {
var k = frontend.handler.editor.goog$module$goog$object.get(e,"key");
var code = frontend.handler.editor.goog$module$goog$object.getValueByKeys(e,"event_","code");
var format = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(frontend.handler.editor.get_state());
var current_pos = frontend.util.cursor.pos(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var c = frontend.util.nth_safe(value,(current_pos - (1)));
var last_key_code = frontend.state.get_last_key_code();
var blank_selected_QMARK_ = clojure.string.blank_QMARK_(frontend.util.get_selected_text());
var is_processed_QMARK_ = frontend.util.event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2(e,true);
var non_enter_processed_QMARK_ = (function (){var and__4251__auto__ = is_processed_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(code,frontend.util.keycode.enter_code);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var or__4253__auto__ = frontend.state.get_editor_show_input();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return non_enter_processed_QMARK_;
}
})())){
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null], null), null),k)));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.not(new cljs.core.Keyword("editor","show-page-search?","editor/show-page-search?",653141106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
if(and__4251__auto____$1){
var and__4251__auto____$2 = cljs.core.not(new cljs.core.Keyword("editor","show-page-search-hashtag?","editor/show-page-search-hashtag?",1934478614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
if(and__4251__auto____$2){
return frontend.handler.editor.wrapped_by_QMARK_(input,"[[","]]");
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var orig_pos_110665 = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var value_110666__$1 = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var square_pos_110667 = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value_110666__$1,(0),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(orig_pos_110665)),"[[");
var pos_110668 = (square_pos_110667 + (2));
var __110669 = frontend.state.set_editor_last_pos_BANG_(pos_110668);
var pos_110670__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(orig_pos_110665,new cljs.core.Keyword(null,"pos","pos",-864607220),pos_110668);
var command_step_110671 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",frontend.util.nth_safe(value_110666__$1,(square_pos_110667 - (1)))))?new cljs.core.Keyword("editor","search-page-hashtag","editor/search-page-hashtag",2082188401):new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812));
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_step_110671], null));

cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,pos_110670__$1);
} else {
if(((blank_selected_QMARK_) && (((cljs.core.contains_QMARK_(frontend.util.keycode.left_square_brackets_keys,k)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(last_key_code),k)) && ((((current_pos > (0))) && (cljs.core.not(frontend.handler.editor.wrapped_by_QMARK_(input,"[[","]]"))))))))))){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"[[]]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-truncate-number","backward-truncate-number",-2044126744),(2),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null));

frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812)], null));

cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input));
} else {
if(((blank_selected_QMARK_) && (((cljs.core.contains_QMARK_(frontend.util.keycode.left_paren_keys,k)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(last_key_code),k)) && ((((current_pos > (0))) && (cljs.core.not(frontend.handler.editor.wrapped_by_QMARK_(input,"((","))"))))))))))){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"(())",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-truncate-number","backward-truncate-number",-2044126744),(2),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null));

frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652),new cljs.core.Keyword(null,"reference","reference",-1711695023)], null));

cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u3008",c)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u300A",frontend.util.nth_safe(value,((current_pos - (1)) - (1))))) && ((current_pos > (0))))))){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),frontend.commands.angle_bracket,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),"\u300A\u3008",new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(0)], null)], null));

cljs.core.reset_BANG_(frontend.commands._STAR_angle_bracket_caret_pos,frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input));

cljs.core.reset_BANG_(frontend.commands._STAR_show_block_commands,true);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c," ");
if(and__4251__auto__){
var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,((current_pos - (1)) - (1))),"#");
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.not(frontend.state.get_editor_show_page_search_QMARK_());
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto____$1 = frontend.state.get_editor_show_page_search_QMARK_();
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,current_pos),"]");
} else {
return and__4251__auto____$1;
}
}
}
} else {
return and__4251__auto__;
}
})())){
frontend.state.set_editor_show_page_search_hashtag_BANG_(false);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(frontend.commands._STAR_show_commands);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0());
} else {
return and__4251__auto__;
}
})())){
var matched_commands_110672 = frontend.handler.editor.get_matched_commands(input);
if(cljs.core.seq(matched_commands_110672)){
cljs.core.reset_BANG_(frontend.commands._STAR_show_commands,true);

cljs.core.reset_BANG_(frontend.commands._STAR_matched_commands,matched_commands_110672);
} else {
cljs.core.reset_BANG_(frontend.commands._STAR_show_commands,false);
}
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(frontend.commands._STAR_show_block_commands);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(188));
} else {
return and__4251__auto__;
}
})())){
var matched_block_commands_110673 = frontend.handler.editor.get_matched_block_commands(input);
if(cljs.core.seq(matched_block_commands_110673)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(9))){
if(cljs.core.truth_(cljs.core.deref(frontend.commands._STAR_show_block_commands))){
frontend.util.stop(e);

frontend.handler.editor.insert_command_BANG_(input_id,cljs.core.last(cljs.core.first(matched_block_commands_110673)),format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.angle_bracket], null));
} else {
}
} else {
cljs.core.reset_BANG_(frontend.commands._STAR_matched_block_commands,matched_block_commands_110673);

}
} else {
cljs.core.reset_BANG_(frontend.commands._STAR_show_block_commands,false);
}
} else {
if((cljs.core.deref(search_timeout) == null)){
frontend.handler.editor.close_autocomplete_if_outside(input);
} else {

}
}
}
}
}
}
}
}
}

if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"Shift");
if(or__4253__auto__){
return or__4253__auto__;
} else {
return is_processed_QMARK_;
}
})())){
return null;
} else {
return frontend.state.set_last_key_code_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key-code","key-code",-1732114304),key_code,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"shift?","shift?",-1034734696),e.shiftKey], null));
}
}
});
});
frontend.handler.editor.editor_on_click_BANG_ = (function frontend$handler$editor$editor_on_click_BANG_(id){
return (function (_e){
var input = goog.dom.getElement(id);
return frontend.handler.editor.close_autocomplete_if_outside(input);
});
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor.mobile_toolbar_height !== 'undefined')){
} else {
frontend.handler.editor.mobile_toolbar_height = (40);
}
frontend.handler.editor.editor_on_height_change_BANG_ = (function frontend$handler$editor$editor_on_height_change_BANG_(id){
return (function (box_height,row_height){
var row_height__$1 = new cljs.core.Keyword(null,"rowHeight","rowHeight",1730581244).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(row_height,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
var input = goog.dom.getElement(id);
var caret = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var cursor_bottom = (cljs.core.truth_(caret)?(row_height__$1 + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(caret)):box_height);
var box_top = frontend.handler.editor.goog$module$goog$object.get(input.getBoundingClientRect(),"top");
var cursor_y = (cursor_bottom + box_top);
var vw_height = window.visualViewport.height;
if((vw_height < (cursor_y + frontend.handler.editor.mobile_toolbar_height))){
var main_node = goog.dom.getElement("main-content-container");
var scroll_top = main_node.scrollTop;
return (main_node.scrollTop = (scroll_top + row_height__$1));
} else {
return null;
}
});
});
frontend.handler.editor.editor_on_change_BANG_ = (function frontend$handler$editor$editor_on_change_BANG_(block,id,search_timeout){
return (function (e){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-block-search?","editor/show-block-search?",706500659)))){
var timeout = (300);
if(cljs.core.truth_(cljs.core.deref(search_timeout))){
clearTimeout(cljs.core.deref(search_timeout));
} else {
}

return cljs.core.reset_BANG_(search_timeout,setTimeout((function (){
return frontend.handler.editor.edit_box_on_change_BANG_(e,block,id);
}),timeout));
} else {
return frontend.handler.editor.edit_box_on_change_BANG_(e,block,id);
}
});
});
frontend.handler.editor.paste_text_parseable = (function frontend$handler$editor$paste_text_parseable(format,text){
var temp__5720__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto__)){
var editing_block = temp__5720__auto__;
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(editing_block));
var blocks = frontend.format.block.extract_blocks(frontend.format.mldoc.__GT_edn(text,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)),text,true,format);
var blocks_SINGLEQUOTE_ = frontend.format.block.with_parent_and_left(page_id,blocks);
return frontend.handler.editor.paste_blocks(blocks_SINGLEQUOTE_,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
frontend.handler.editor.paste_segmented_text = (function frontend$handler$editor$paste_segmented_text(format,text){
var paragraphs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/(?:\r?\n){2,}/);
var updated_paragraphs = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return (function (p__$1){
if(cljs.core.truth_(logseq.graph_parser.util.safe_re_find(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985)))?/\s*\*+\s+/:/\s*-\s+/),p__$1))){
return p__$1;
} else {
return [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985)))?"* ":"- "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join('');
}
})(clojure.string.trim(p));
}),paragraphs));
return frontend.handler.editor.paste_text_parseable(format,updated_paragraphs);
});
frontend.handler.editor.get_all_blocks_by_ids = (function frontend$handler$editor$get_all_blocks_by_ids(repo,ids){
var ids__$1 = ids;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(ids__$1)){
var blocks = (function (){var G__110168 = repo;
var G__110169 = cljs.core.first(ids__$1);
return (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(G__110168,G__110169) : frontend.db.get_block_and_children.call(null,G__110168,G__110169));
})();
var result__$1 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,blocks));
var G__110674 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),result__$1)),cljs.core.rest(ids__$1));
var G__110675 = result__$1;
ids__$1 = G__110674;
result = G__110675;
continue;
} else {
return result;
}
break;
}
});
frontend.handler.editor.paste_copied_blocks_or_text = (function frontend$handler$editor$paste_copied_blocks_or_text(text,e){
var copied_blocks = frontend.state.get_copied_blocks();
var copied_block_ids = new cljs.core.Keyword("copy","block-ids","copy/block-ids",560775165).cljs$core$IFn$_invoke$arity$1(copied_blocks);
var copied_graph = new cljs.core.Keyword("copy","graph","copy/graph",1554769580).cljs$core$IFn$_invoke$arity$1(copied_blocks);
var input = frontend.state.get_input();
var _STAR_stop_event_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(copied_graph,frontend.state.get_current_repo());
if(and__4251__auto__){
var and__4251__auto____$1 = ((cljs.core.seq(copied_block_ids)) || (cljs.core.seq(new cljs.core.Keyword("copy","full-blocks","copy/full-blocks",-1316121892).cljs$core$IFn$_invoke$arity$1(copied_blocks))));
if(and__4251__auto____$1){
var and__4251__auto____$2 = text;
if(cljs.core.truth_(and__4251__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(clojure.string.trim(text),"\r",""),clojure.string.replace(clojure.string.trim((function (){var or__4253__auto__ = new cljs.core.Keyword("copy","content","copy/content",12765453).cljs$core$IFn$_invoke$arity$1(copied_blocks);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()),"\r",""));
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var blocks_110676 = (function (){var or__4253__auto__ = new cljs.core.Keyword("copy","full-blocks","copy/full-blocks",-1316121892).cljs$core$IFn$_invoke$arity$1(copied_blocks);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.handler.editor.get_all_blocks_by_ids(frontend.state.get_current_repo(),copied_block_ids);
}
})();
if(cljs.core.seq(blocks_110676)){
frontend.state.set_copied_full_blocks_BANG_(blocks_110676);

frontend.handler.editor.paste_blocks(blocks_110676,cljs.core.PersistentArrayMap.EMPTY);
} else {
}
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = logseq.graph_parser.util.url_QMARK_(text);
if(cljs.core.truth_(and__4251__auto__)){
return (!(clojure.string.blank_QMARK_(frontend.util.get_selected_text())));
} else {
return and__4251__auto__;
}
})())){
frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1(text);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = logseq.graph_parser.util.url_QMARK_(text);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = ((clojure.string.includes_QMARK_(text,"youtube.com")) || (clojure.string.includes_QMARK_(text,"youtu.be")));
if(and__4251__auto____$1){
return frontend.mobile.util.is_native_platform_QMARK_();
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
frontend.commands.simple_insert_BANG_(frontend.state.get_edit_input_id(),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{youtube %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0)),null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = logseq.graph_parser.util.url_QMARK_(text);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = clojure.string.includes_QMARK_(text,"twitter.com");
if(and__4251__auto____$1){
return frontend.mobile.util.is_native_platform_QMARK_();
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
frontend.commands.simple_insert_BANG_(frontend.state.get_edit_input_id(),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{twitter %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0)),null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = logseq.graph_parser.text.block_ref_QMARK_(text);
if(and__4251__auto__){
return frontend.handler.editor.wrapped_by_QMARK_(input,"((","))");
} else {
return and__4251__auto__;
}
})())){
frontend.commands.simple_insert_BANG_(frontend.state.get_edit_input_id(),logseq.graph_parser.text.get_block_ref(text),null);
} else {
var format_110677 = (function (){var or__4253__auto__ = (function (){var G__110170 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__110170) : frontend.db.get_page_format.call(null,G__110170));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})();
var format_110678__$1 = format_110677;
var ocr_110171_110679 = (logseq.graph_parser.util.safe_re_find(/^\s*(?:[-+*]|#+)\s+/m,text) == null);
var ocr_110172_110680 = (logseq.graph_parser.util.safe_re_find(/^\s*\*+\s+/m,text) == null);
var ocr_110173_110681 = (logseq.graph_parser.util.safe_re_find(/(?:\r?\n){2,}/,text) == null);
try{if(cljs.core.keyword_identical_QMARK_(format_110678__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089))){
try{if((ocr_110171_110679 === false)){
frontend.handler.editor.paste_text_parseable(format_110678__$1,text);
} else {
throw cljs.core.match.backtrack;

}
}catch (e110197){if((e110197 instanceof Error)){
var e__57917__auto___110682 = e110197;
if((e__57917__auto___110682 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57917__auto___110682;
}
} else {
throw e110197;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e110186){if((e110186 instanceof Error)){
var e__57917__auto___110683 = e110186;
if((e__57917__auto___110683 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(format_110678__$1,new cljs.core.Keyword(null,"org","org",1495985))){
try{if((ocr_110172_110680 === false)){
frontend.handler.editor.paste_text_parseable(format_110678__$1,text);
} else {
throw cljs.core.match.backtrack;

}
}catch (e110196){if((e110196 instanceof Error)){
var e__57917__auto___110684__$1 = e110196;
if((e__57917__auto___110684__$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57917__auto___110684__$1;
}
} else {
throw e110196;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e110187){if((e110187 instanceof Error)){
var e__57917__auto___110685__$1 = e110187;
if((e__57917__auto___110685__$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(format_110678__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089))){
try{if((ocr_110171_110679 === true)){
try{if((ocr_110173_110681 === false)){
frontend.handler.editor.paste_segmented_text(format_110678__$1,clojure.string.trim(text));
} else {
throw cljs.core.match.backtrack;

}
}catch (e110194){if((e110194 instanceof Error)){
var e__57917__auto___110686__$2 = e110194;
if((e__57917__auto___110686__$2 === cljs.core.match.backtrack)){
try{if((ocr_110173_110681 === true)){
cljs.core.reset_BANG_(_STAR_stop_event_QMARK_,false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e110195){if((e110195 instanceof Error)){
var e__57917__auto___110687__$3 = e110195;
if((e__57917__auto___110687__$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57917__auto___110687__$3;
}
} else {
throw e110195;

}
}} else {
throw e__57917__auto___110686__$2;
}
} else {
throw e110194;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e110193){if((e110193 instanceof Error)){
var e__57917__auto___110688__$2 = e110193;
if((e__57917__auto___110688__$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57917__auto___110688__$2;
}
} else {
throw e110193;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e110188){if((e110188 instanceof Error)){
var e__57917__auto___110689__$2 = e110188;
if((e__57917__auto___110689__$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(format_110678__$1,new cljs.core.Keyword(null,"org","org",1495985))){
try{if((ocr_110172_110680 === true)){
try{if((ocr_110173_110681 === false)){
frontend.handler.editor.paste_segmented_text(format_110678__$1,clojure.string.trim(text));
} else {
throw cljs.core.match.backtrack;

}
}catch (e110191){if((e110191 instanceof Error)){
var e__57917__auto___110690__$3 = e110191;
if((e__57917__auto___110690__$3 === cljs.core.match.backtrack)){
try{if((ocr_110173_110681 === true)){
cljs.core.reset_BANG_(_STAR_stop_event_QMARK_,false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e110192){if((e110192 instanceof Error)){
var e__57917__auto___110691__$4 = e110192;
if((e__57917__auto___110691__$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57917__auto___110691__$4;
}
} else {
throw e110192;

}
}} else {
throw e__57917__auto___110690__$3;
}
} else {
throw e110191;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e110190){if((e110190 instanceof Error)){
var e__57917__auto___110692__$3 = e110190;
if((e__57917__auto___110692__$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57917__auto___110692__$3;
}
} else {
throw e110190;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e110189){if((e110189 instanceof Error)){
var e__57917__auto___110693__$3 = e110189;
if((e__57917__auto___110693__$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(format_110678__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_110171_110679)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_110172_110680)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_110173_110681)].join('')));
} else {
throw e__57917__auto___110693__$3;
}
} else {
throw e110189;

}
}} else {
throw e__57917__auto___110689__$2;
}
} else {
throw e110188;

}
}} else {
throw e__57917__auto___110685__$1;
}
} else {
throw e110187;

}
}} else {
throw e__57917__auto___110683;
}
} else {
throw e110186;

}
}
}
}
}
}
}

if(cljs.core.truth_(cljs.core.deref(_STAR_stop_event_QMARK_))){
return frontend.util.stop(e);
} else {
return null;
}
});
frontend.handler.editor.paste_text_in_one_block_at_point = (function frontend$handler$editor$paste_text_in_one_block_at_point(){
return module$frontend$utils.getClipText((function (clipboard_data){
var temp__5720__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5720__auto__)){
var _ = temp__5720__auto__;
return frontend.state.append_current_edit_content_BANG_(clipboard_data);
} else {
return null;
}
}),(function (error){
return console.error(error);
}));
});
frontend.handler.editor.editor_on_paste_BANG_ = (function frontend$handler$editor$editor_on_paste_BANG_(id){
return (function (e){
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),true);

var text = frontend.handler.editor.goog$module$goog$object.get(e,"clipboardData").getData("text");
var input = frontend.state.get_input();
if((!(clojure.string.blank_QMARK_(text)))){
if(cljs.core.truth_(frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)))){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return frontend.handler.editor.paste_text_in_one_block_at_point();
}
} else {
return frontend.handler.editor.paste_copied_blocks_or_text(text,e);
}
} else {
var _handled = (function (){var clipboard_data = frontend.handler.editor.goog$module$goog$object.get(e,"clipboardData");
var files = clipboard_data.files;
var temp__5720__auto__ = cljs.core.first(files);
if(cljs.core.truth_(temp__5720__auto__)){
var file = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto____$1)){
var block = temp__5720__auto____$1;
return frontend.handler.editor.upload_asset(id,[file],new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),frontend.handler.editor._STAR_asset_uploading_QMARK_,true);
} else {
return null;
}
} else {
return null;
}
})();
return frontend.util.stop(e);
}
});
});
frontend.handler.editor.cut_blocks_and_clear_selections_BANG_ = (function frontend$handler$editor$cut_blocks_and_clear_selections_BANG_(copy_QMARK_){
frontend.handler.editor.cut_selection_blocks(copy_QMARK_);

return frontend.handler.editor.clear_selection_BANG_();
});
frontend.handler.editor.shortcut_copy_selection = (function frontend$handler$editor$shortcut_copy_selection(_e){
return frontend.handler.editor.copy_selection_blocks();
});
frontend.handler.editor.shortcut_cut_selection = (function frontend$handler$editor$shortcut_cut_selection(e){
frontend.util.stop(e);

return frontend.handler.editor.cut_blocks_and_clear_selections_BANG_(true);
});
frontend.handler.editor.shortcut_delete_selection = (function frontend$handler$editor$shortcut_delete_selection(e){
frontend.util.stop(e);

return frontend.handler.editor.cut_blocks_and_clear_selections_BANG_(false);
});
frontend.handler.editor.copy_current_block_ref = (function frontend$handler$editor$copy_current_block_ref(){
var temp__5720__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto__)){
var current_block = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
if(cljs.core.truth_(temp__5720__auto____$1)){
var block_id = temp__5720__auto____$1;
frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__110198_SHARP_){
return ["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__110198_SHARP_),"))"].join('');
}));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mb-1.5","span.mb-1.5",-1969995257),"Block ref copied!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.whitespace-nowrap","code.whitespace-nowrap",-1562386738),["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id),"))"].join('')], null)], null)], null),new cljs.core.Keyword(null,"success","success",1890645906),true,["copied-block-ref:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)].join(''));
} else {
return null;
}
} else {
return null;
}
});
/**
 * shortcut copy action:
 *   * when in selection mode, copy selected blocks
 *   * when in edit mode but no text selected, copy current block ref
 *   * when in edit mode with text selected, copy selected text as normal
 */
frontend.handler.editor.shortcut_copy = (function frontend$handler$editor$shortcut_copy(e){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
return frontend.handler.editor.shortcut_copy_selection(e);
} else {
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
return frontend.handler.editor.copy_current_block_ref();
} else {
return document.execCommand("copy");
}
} else {
return document.execCommand("copy");

}
}
}
});
/**
 * shortcut cut action:
 *   * when in selection mode, cut selected blocks
 *   * when in edit mode with text selected, cut selected text
 *   * otherwise same as delete shortcut
 */
frontend.handler.editor.shortcut_cut = (function frontend$handler$editor$shortcut_cut(e){
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
return frontend.handler.editor.shortcut_cut_selection(e);
} else {
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
return frontend.handler.editor.keydown_backspace_handler(true,e);
} else {
return null;
}
}
});
frontend.handler.editor.delete_selection = (function frontend$handler$editor$delete_selection(e){
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
return frontend.handler.editor.shortcut_delete_selection(e);
} else {
return null;
}
});
frontend.handler.editor.editor_delete = (function frontend$handler$editor$editor_delete(_state,e){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
frontend.util.stop(e);

return frontend.handler.editor.keydown_delete_handler(e);
} else {
return null;
}
});
frontend.handler.editor.editor_backspace = (function frontend$handler$editor$editor_backspace(_state,e){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
return frontend.handler.editor.keydown_backspace_handler(false,e);
} else {
return null;
}
});
frontend.handler.editor.shortcut_up_down = (function frontend$handler$editor$shortcut_up_down(direction){
return (function (e){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
frontend.util.stop(e);

if(cljs.core.truth_(frontend.state.editing_QMARK_())){
return frontend.handler.editor.keydown_up_down_handler(direction);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return ((1) === cljs.core.count(frontend.state.get_selection_blocks()));
} else {
return and__4251__auto__;
}
})())){
return frontend.handler.editor.select_up_down(direction);
} else {
return frontend.handler.editor.select_first_last(direction);

}
}
}
});
});
frontend.handler.editor.shortcut_select_up_down = (function frontend$handler$editor$shortcut_select_up_down(direction){
return (function (e){
frontend.util.stop(e);

if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var vec__110199 = (function (){var G__110202 = frontend.util.get_selection_direction(input);
switch (G__110202) {
case "backward":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_end,selected_start], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_start,selected_end], null);

}
})();
var anchor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110199,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110199,(1),null);
var cursor_rect = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$2(input,cursor);
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113))) && (frontend.util.cursor.textarea_cursor_rect_first_row_QMARK_(cursor_rect)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"down","down",1565245570))) && (frontend.util.cursor.textarea_cursor_rect_last_row_QMARK_(cursor_rect)))))){
return frontend.handler.editor.select_block_up_down(direction);
} else {
return frontend.util.cursor.select_up_down(input,direction,anchor,cursor_rect);
}
} else {
return frontend.handler.editor.select_block_up_down(direction);
}
});
});
frontend.handler.editor.open_selected_block_BANG_ = (function frontend$handler$editor$open_selected_block_BANG_(direction,e){
var temp__5720__auto__ = (function (){var G__110203 = frontend.state.get_selection_blocks();
var G__110203__$1 = (((G__110203 == null))?null:cljs.core.first(G__110203));
var G__110203__$2 = (((G__110203__$1 == null))?null:dommy.core.attr(G__110203__$1,"blockid"));
if((G__110203__$2 == null)){
return null;
} else {
return medley.core.uuid(G__110203__$2);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
frontend.util.stop(e);

var block = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
var block_id__$1 = clojure.string.replace(frontend.handler.editor.goog$module$goog$object.get(cljs.core.first(frontend.state.get_selection_blocks()),"id"),"ls-block","edit-block");
var left_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"left","left",-399115937));
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block,((left_QMARK_)?(0):new cljs.core.Keyword(null,"max","max",61366548)),block_id__$1);
} else {
return null;
}
});
frontend.handler.editor.shortcut_left_right = (function frontend$handler$editor$shortcut_left_right(direction){
return (function (e){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
frontend.util.stop(e);

return frontend.handler.editor.keydown_arrow_handler(direction);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return ((1) === cljs.core.count(frontend.state.get_selection_blocks()));
} else {
return and__4251__auto__;
}
})())){
frontend.util.stop(e);

return frontend.handler.editor.open_selected_block_BANG_(direction,e);
} else {
return null;

}
}
}
});
});
frontend.handler.editor.clear_block_content_BANG_ = (function frontend$handler$editor$clear_block_content_BANG_(){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),"");
});
frontend.handler.editor.kill_line_before_BANG_ = (function frontend$handler$editor$kill_line_before_BANG_(){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

return frontend.util.kill_line_before_BANG_(frontend.state.get_input());
});
frontend.handler.editor.kill_line_after_BANG_ = (function frontend$handler$editor$kill_line_after_BANG_(){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

return frontend.util.kill_line_after_BANG_(frontend.state.get_input());
});
frontend.handler.editor.beginning_of_block = (function frontend$handler$editor$beginning_of_block(){
return frontend.util.cursor.move_cursor_to(frontend.state.get_input(),(0));
});
frontend.handler.editor.end_of_block = (function frontend$handler$editor$end_of_block(){
return frontend.util.cursor.move_cursor_to_end(frontend.state.get_input());
});
frontend.handler.editor.cursor_forward_word = (function frontend$handler$editor$cursor_forward_word(){
return frontend.util.cursor.move_cursor_forward_by_word(frontend.state.get_input());
});
frontend.handler.editor.cursor_backward_word = (function frontend$handler$editor$cursor_backward_word(){
return frontend.util.cursor.move_cursor_backward_by_word(frontend.state.get_input());
});
frontend.handler.editor.backward_kill_word = (function frontend$handler$editor$backward_kill_word(){
var input = frontend.state.get_input();
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

frontend.util.backward_kill_word(input);

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),input.value);
});
frontend.handler.editor.forward_kill_word = (function frontend$handler$editor$forward_kill_word(){
var input = frontend.state.get_input();
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

frontend.util.forward_kill_word(input);

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),input.value);
});
frontend.handler.editor.block_with_title_QMARK_ = (function frontend$handler$editor$block_with_title_QMARK_(format,content,semantic_QMARK_){
var and__4251__auto__ = clojure.string.includes_QMARK_(content,"\n");
if(and__4251__auto__){
if(cljs.core.truth_(semantic_QMARK_)){
var ast = frontend.format.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var first_elem_type = cljs.core.first(cljs.core.ffirst(ast));
return frontend.format.mldoc.block_with_title_QMARK_(first_elem_type);
} else {
return true;
}
} else {
return and__4251__auto__;
}
});
frontend.handler.editor.collapsable_QMARK_ = (function frontend$handler$editor$collapsable_QMARK_(var_args){
var G__110205 = arguments.length;
switch (G__110205) {
case 1:
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(block_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,p__110206){
var map__110207 = p__110206;
var map__110207__$1 = cljs.core.__destructure_map(map__110207);
var semantic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110207__$1,new cljs.core.Keyword(null,"semantic?","semantic?",-1258468577),false);
if(cljs.core.truth_(block_id)){
var temp__5718__auto__ = frontend.db.model.query_block_by_uuid(block_id);
if(cljs.core.truth_(temp__5718__auto__)){
var block = temp__5718__auto__;
var and__4251__auto__ = cljs.core.not(frontend.util.collapsed_QMARK_(block));
if(and__4251__auto__){
var or__4253__auto__ = frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(block_id);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto____$1 = new cljs.core.Keyword("outliner","block-title-collapse-enabled?","outliner/block-title-collapse-enabled?",1547538161).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(and__4251__auto____$1)){
return frontend.handler.editor.block_with_title_QMARK_(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),semantic_QMARK_);
} else {
return and__4251__auto____$1;
}
}
} else {
return and__4251__auto__;
}
} else {
return false;
}
} else {
return null;
}
}));

(frontend.handler.editor.collapsable_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Return all blocks associated with correct level
 * if :root-block is not nil, only return root block with its children
 * if :expanded? true, return expanded children
 * if :collapse? true, return without any collapsed children
 * if :incremental? true, collapse/expand will be step by step
 * for example:
 * - a
 *  - b (collapsed)
 *   - c
 *   - d
 *  - e
 * return:
 *  blocks
 *  [{:block a :level 1}
 *   {:block b :level 2}
 *   {:block e :level 2}]
 */
frontend.handler.editor.all_blocks_with_level = (function frontend$handler$editor$all_blocks_with_level(p__110208){
var map__110209 = p__110208;
var map__110209__$1 = cljs.core.__destructure_map(map__110209);
var collapse_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110209__$1,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),false);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110209__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),false);
var incremental_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110209__$1,new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),true);
var root_block = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__110209__$1,new cljs.core.Keyword(null,"root-block","root-block",-645043721),null);
var temp__5720__auto__ = (function (){var or__4253__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.date.today();
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
var block_QMARK_ = logseq.graph_parser.util.uuid_string_QMARK_(page);
var block_id = (function (){var or__4253__auto__ = root_block;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = block_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.uuid(page);
} else {
return and__4251__auto__;
}
}
})();
var blocks = (cljs.core.truth_(block_id)?(function (){var G__110210 = frontend.state.get_current_repo();
var G__110211 = block_id;
return (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(G__110210,G__110211) : frontend.db.get_block_and_children.call(null,G__110210,G__110211));
})():(frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page) : frontend.db.get_page_blocks_no_cache.call(null,page)));
var root_block__$1 = (function (){var or__4253__auto__ = block_id;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return root_block;
}
})();
if(cljs.core.truth_(incremental_QMARK_)){
var blocks__$1 = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks,(function (){var or__4253__auto__ = block_id;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return page;
}
})());
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var G__110212 = blocks__$1;
var G__110212__$1 = (cljs.core.truth_(root_block__$1)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function frontend$handler$editor$all_blocks_with_level_$_find(root){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root_block__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root))){
return root;
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend$handler$editor$all_blocks_with_level_$_find,new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$2(root,cljs.core.PersistentVector.EMPTY)));
}
}),G__110212):G__110212);
var G__110212__$2 = (cljs.core.truth_(collapse_QMARK_)?clojure.walk.postwalk((function (b){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_(b);
if(and__4251__auto__){
var and__4251__auto____$1 = frontend.util.collapsed_QMARK_(b);
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(root_block__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.PersistentVector.EMPTY);
} else {
return b;
}
}),G__110212__$1):G__110212__$1);
var G__110212__$3 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
return cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword("block","children","block/children",-1040716209),x);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__110212__$2], 0))
;
var G__110212__$4 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
}),G__110212__$3):G__110212__$3);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("block","children","block/children",-1040716209));
}),G__110212__$4);

})());
} else {
var G__110213 = blocks;
var G__110213__$1 = (cljs.core.truth_(collapse_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.util.collapsed_QMARK_,G__110213):G__110213);
var G__110213__$2 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
}),G__110213__$1):G__110213__$1);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__110213__$2);

}
} else {
return null;
}
});
frontend.handler.editor.skip_collapsing_in_db_QMARK_ = (function frontend$handler$editor$skip_collapsing_in_db_QMARK_(){
var config = cljs.core.last(frontend.state.get_editor_args());
return new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
});
frontend.handler.editor.set_blocks_collapsed_BANG_ = (function frontend$handler$editor$set_blocks_collapsed_BANG_(block_ids,value){
var block_ids__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block_id){
if(typeof block_id === 'string'){
return cljs.core.uuid(block_id);
} else {
return block_id;
}
}),block_ids);
var repo = frontend.state.get_current_repo();
var value__$1 = cljs.core.boolean$(value);
if(cljs.core.truth_(repo)){
var transact_data__61870__auto___110696 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61871__auto___110697 = (cljs.core.truth_(transact_data__61870__auto___110696)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367)], null));
if(cljs.core.truth_(transact_data__61870__auto___110696)){
var seq__110214_110698 = cljs.core.seq(block_ids__$1);
var chunk__110215_110699 = null;
var count__110216_110700 = (0);
var i__110217_110701 = (0);
while(true){
if((i__110217_110701 < count__110216_110700)){
var block_id_110702 = chunk__110215_110699.cljs$core$IIndexed$_nth$arity$2(null,i__110217_110701);
var temp__5720__auto___110703 = (function (){var G__110220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110702], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__110220) : frontend.db.entity.call(null,G__110220));
})();
if(cljs.core.truth_(temp__5720__auto___110703)){
var block_110704 = temp__5720__auto___110703;
var current_value_110705 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_110704);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_110705,value__$1)){
} else {
var block_110706__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110702,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_110706__$1);
}
} else {
}


var G__110707 = seq__110214_110698;
var G__110708 = chunk__110215_110699;
var G__110709 = count__110216_110700;
var G__110710 = (i__110217_110701 + (1));
seq__110214_110698 = G__110707;
chunk__110215_110699 = G__110708;
count__110216_110700 = G__110709;
i__110217_110701 = G__110710;
continue;
} else {
var temp__5720__auto___110711 = cljs.core.seq(seq__110214_110698);
if(temp__5720__auto___110711){
var seq__110214_110712__$1 = temp__5720__auto___110711;
if(cljs.core.chunked_seq_QMARK_(seq__110214_110712__$1)){
var c__4679__auto___110713 = cljs.core.chunk_first(seq__110214_110712__$1);
var G__110714 = cljs.core.chunk_rest(seq__110214_110712__$1);
var G__110715 = c__4679__auto___110713;
var G__110716 = cljs.core.count(c__4679__auto___110713);
var G__110717 = (0);
seq__110214_110698 = G__110714;
chunk__110215_110699 = G__110715;
count__110216_110700 = G__110716;
i__110217_110701 = G__110717;
continue;
} else {
var block_id_110718 = cljs.core.first(seq__110214_110712__$1);
var temp__5720__auto___110719__$1 = (function (){var G__110221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110718], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__110221) : frontend.db.entity.call(null,G__110221));
})();
if(cljs.core.truth_(temp__5720__auto___110719__$1)){
var block_110720 = temp__5720__auto___110719__$1;
var current_value_110721 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_110720);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_110721,value__$1)){
} else {
var block_110722__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110718,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_110722__$1);
}
} else {
}


var G__110723 = cljs.core.next(seq__110214_110712__$1);
var G__110724 = null;
var G__110725 = (0);
var G__110726 = (0);
seq__110214_110698 = G__110723;
chunk__110215_110699 = G__110724;
count__110216_110700 = G__110725;
i__110217_110701 = G__110726;
continue;
}
} else {
}
}
break;
}
} else {
var _STAR_transaction_data_STAR__orig_val__110222_110727 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__110223_110728 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__110223_110728);

try{var seq__110224_110729 = cljs.core.seq(block_ids__$1);
var chunk__110225_110730 = null;
var count__110226_110731 = (0);
var i__110227_110732 = (0);
while(true){
if((i__110227_110732 < count__110226_110731)){
var block_id_110733 = chunk__110225_110730.cljs$core$IIndexed$_nth$arity$2(null,i__110227_110732);
var temp__5720__auto___110734 = (function (){var G__110230 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110733], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__110230) : frontend.db.entity.call(null,G__110230));
})();
if(cljs.core.truth_(temp__5720__auto___110734)){
var block_110735 = temp__5720__auto___110734;
var current_value_110736 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_110735);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_110736,value__$1)){
} else {
var block_110737__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110733,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_110737__$1);
}
} else {
}


var G__110738 = seq__110224_110729;
var G__110739 = chunk__110225_110730;
var G__110740 = count__110226_110731;
var G__110741 = (i__110227_110732 + (1));
seq__110224_110729 = G__110738;
chunk__110225_110730 = G__110739;
count__110226_110731 = G__110740;
i__110227_110732 = G__110741;
continue;
} else {
var temp__5720__auto___110742 = cljs.core.seq(seq__110224_110729);
if(temp__5720__auto___110742){
var seq__110224_110743__$1 = temp__5720__auto___110742;
if(cljs.core.chunked_seq_QMARK_(seq__110224_110743__$1)){
var c__4679__auto___110744 = cljs.core.chunk_first(seq__110224_110743__$1);
var G__110745 = cljs.core.chunk_rest(seq__110224_110743__$1);
var G__110746 = c__4679__auto___110744;
var G__110747 = cljs.core.count(c__4679__auto___110744);
var G__110748 = (0);
seq__110224_110729 = G__110745;
chunk__110225_110730 = G__110746;
count__110226_110731 = G__110747;
i__110227_110732 = G__110748;
continue;
} else {
var block_id_110749 = cljs.core.first(seq__110224_110743__$1);
var temp__5720__auto___110750__$1 = (function (){var G__110231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110749], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__110231) : frontend.db.entity.call(null,G__110231));
})();
if(cljs.core.truth_(temp__5720__auto___110750__$1)){
var block_110751 = temp__5720__auto___110750__$1;
var current_value_110752 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_110751);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_110752,value__$1)){
} else {
var block_110753__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_110749,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_110753__$1);
}
} else {
}


var G__110754 = cljs.core.next(seq__110224_110743__$1);
var G__110755 = null;
var G__110756 = (0);
var G__110757 = (0);
seq__110224_110729 = G__110754;
chunk__110225_110730 = G__110755;
count__110226_110731 = G__110756;
i__110227_110732 = G__110757;
continue;
}
} else {
}
}
break;
}

var r__61872__auto___110758 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61873__auto___110759 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61872__auto___110758], 0));
var tx_meta__61874__auto___110760 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61872__auto___110758));
var all_tx__61875__auto___110761 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61873__auto___110759,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110697));
var opts_SHARP___61876__auto___110762 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61871__auto___110697,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61874__auto___110760], 0));
if(cljs.core.seq(all_tx__61875__auto___110761)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61871__auto___110697))){
} else {
var result__61877__auto___110763 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61875__auto___110761,opts_SHARP___61876__auto___110762);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61875__auto___110761,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61874__auto___110760,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61877__auto___110763], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__110222_110727);
}}

var block_id = cljs.core.first(block_ids__$1);
var input_pos = (function (){var or__4253__auto__ = frontend.state.get_edit_pos();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"max","max",61366548);
}
})();
var temp__5720__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto__)){
var editing_block = temp__5720__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editing_block),block_id)){
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(editing_block,input_pos,frontend.state.get_edit_input_id());
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
frontend.handler.editor.collapse_block_BANG_ = (function frontend$handler$editor$collapse_block_BANG_(block_id){
if(cljs.core.truth_(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(block_id))){
if(cljs.core.truth_(frontend.handler.editor.skip_collapsing_in_db_QMARK_())){
} else {
frontend.handler.editor.set_blocks_collapsed_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),true);
}
} else {
}

return frontend.state.set_collapsed_block_BANG_(block_id,true);
});
frontend.handler.editor.expand_block_BANG_ = (function frontend$handler$editor$expand_block_BANG_(block_id){
if(cljs.core.truth_(frontend.handler.editor.skip_collapsing_in_db_QMARK_())){
return null;
} else {
frontend.handler.editor.set_blocks_collapsed_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),false);

return frontend.state.set_collapsed_block_BANG_(block_id,false);
}
});
frontend.handler.editor.expand_BANG_ = (function frontend$handler$editor$expand_BANG_(var_args){
var G__110233 = arguments.length;
switch (G__110233) {
case 1:
return frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$2(e,false);
}));

(frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,clear_selection_QMARK_){
frontend.util.stop(e);

if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var temp__5720__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
return frontend.handler.editor.expand_block_BANG_(block_id);
} else {
return null;
}
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dom){
return frontend.handler.editor.expand_block_BANG_(medley.core.uuid(dommy.core.attr(dom,"blockid")));
}),frontend.handler.editor.get_selected_blocks()));

var and__4251__auto__ = clear_selection_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.handler.editor.clear_selection_BANG_();
} else {
return and__4251__auto__;
}
} else {
var blocks_with_level = frontend.handler.editor.all_blocks_with_level(cljs.core.PersistentArrayMap.EMPTY);
var max_level = (function (){var or__4253__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971),blocks_with_level));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (99);
}
})();
var level = (1);
while(true){
if((level > max_level)){
return null;
} else {
var blocks_to_expand = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.util.collapsed_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (level,blocks_with_level,max_level){
return (function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(b),level);
});})(level,blocks_with_level,max_level))
,blocks_with_level));
if(cljs.core.empty_QMARK_(blocks_to_expand)){
var G__110765 = (level + (1));
level = G__110765;
continue;
} else {
var seq__110234 = cljs.core.seq(blocks_to_expand);
var chunk__110235 = null;
var count__110236 = (0);
var i__110237 = (0);
while(true){
if((i__110237 < count__110236)){
var map__110240 = chunk__110235.cljs$core$IIndexed$_nth$arity$2(null,i__110237);
var map__110240__$1 = cljs.core.__destructure_map(map__110240);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110240__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.expand_block_BANG_(uuid);


var G__110766 = seq__110234;
var G__110767 = chunk__110235;
var G__110768 = count__110236;
var G__110769 = (i__110237 + (1));
seq__110234 = G__110766;
chunk__110235 = G__110767;
count__110236 = G__110768;
i__110237 = G__110769;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__110234);
if(temp__5720__auto__){
var seq__110234__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__110234__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__110234__$1);
var G__110770 = cljs.core.chunk_rest(seq__110234__$1);
var G__110771 = c__4679__auto__;
var G__110772 = cljs.core.count(c__4679__auto__);
var G__110773 = (0);
seq__110234 = G__110770;
chunk__110235 = G__110771;
count__110236 = G__110772;
i__110237 = G__110773;
continue;
} else {
var map__110241 = cljs.core.first(seq__110234__$1);
var map__110241__$1 = cljs.core.__destructure_map(map__110241);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110241__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.expand_block_BANG_(uuid);


var G__110774 = cljs.core.next(seq__110234__$1);
var G__110775 = null;
var G__110776 = (0);
var G__110777 = (0);
seq__110234 = G__110774;
chunk__110235 = G__110775;
count__110236 = G__110776;
i__110237 = G__110777;
continue;
}
} else {
return null;
}
}
break;
}
}
}
break;
}

}
}
}));

(frontend.handler.editor.expand_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.collapse_BANG_ = (function frontend$handler$editor$collapse_BANG_(var_args){
var G__110243 = arguments.length;
switch (G__110243) {
case 1:
return frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$2(e,false);
}));

(frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,clear_selection_QMARK_){
if(cljs.core.truth_(e)){
frontend.util.stop(e);
} else {
}

if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var temp__5720__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
return frontend.handler.editor.collapse_block_BANG_(block_id);
} else {
return null;
}
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dom){
return frontend.handler.editor.collapse_block_BANG_(medley.core.uuid(dommy.core.attr(dom,"blockid")));
}),frontend.handler.editor.get_selected_blocks()));

var and__4251__auto__ = clear_selection_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.handler.editor.clear_selection_BANG_();
} else {
return and__4251__auto__;
}
} else {
var blocks_with_level = frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null));
var max_level = (function (){var or__4253__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971),blocks_with_level));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (99);
}
})();
var level = max_level;
while(true){
if((level === (0))){
return null;
} else {
var blocks_to_collapse = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (level,blocks_with_level,max_level){
return (function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
});})(level,blocks_with_level,max_level))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (level,blocks_with_level,max_level){
return (function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(b),level);
});})(level,blocks_with_level,max_level))
,blocks_with_level));
if(cljs.core.empty_QMARK_(blocks_to_collapse)){
var G__110779 = (level - (1));
level = G__110779;
continue;
} else {
var seq__110252 = cljs.core.seq(blocks_to_collapse);
var chunk__110253 = null;
var count__110254 = (0);
var i__110255 = (0);
while(true){
if((i__110255 < count__110254)){
var map__110258 = chunk__110253.cljs$core$IIndexed$_nth$arity$2(null,i__110255);
var map__110258__$1 = cljs.core.__destructure_map(map__110258);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110258__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.collapse_block_BANG_(uuid);


var G__110780 = seq__110252;
var G__110781 = chunk__110253;
var G__110782 = count__110254;
var G__110783 = (i__110255 + (1));
seq__110252 = G__110780;
chunk__110253 = G__110781;
count__110254 = G__110782;
i__110255 = G__110783;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__110252);
if(temp__5720__auto__){
var seq__110252__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__110252__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__110252__$1);
var G__110784 = cljs.core.chunk_rest(seq__110252__$1);
var G__110785 = c__4679__auto__;
var G__110786 = cljs.core.count(c__4679__auto__);
var G__110787 = (0);
seq__110252 = G__110784;
chunk__110253 = G__110785;
count__110254 = G__110786;
i__110255 = G__110787;
continue;
} else {
var map__110259 = cljs.core.first(seq__110252__$1);
var map__110259__$1 = cljs.core.__destructure_map(map__110259);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110259__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.collapse_block_BANG_(uuid);


var G__110788 = cljs.core.next(seq__110252__$1);
var G__110789 = null;
var G__110790 = (0);
var G__110791 = (0);
seq__110252 = G__110788;
chunk__110253 = G__110789;
count__110254 = G__110790;
i__110255 = G__110791;
continue;
}
} else {
return null;
}
}
break;
}
}
}
break;
}

}
}
}));

(frontend.handler.editor.collapse_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.collapse_all_BANG_ = (function frontend$handler$editor$collapse_all_BANG_(var_args){
var G__110261 = arguments.length;
switch (G__110261) {
case 0:
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
var blocks = frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),block_id], null));
var block_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks);
return frontend.handler.editor.set_blocks_collapsed_BANG_(block_ids,true);
}));

(frontend.handler.editor.collapse_all_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.expand_all_BANG_ = (function frontend$handler$editor$expand_all_BANG_(var_args){
var G__110263 = arguments.length;
switch (G__110263) {
case 0:
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
var blocks = frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),block_id], null));
var block_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks);
return frontend.handler.editor.set_blocks_collapsed_BANG_(block_ids,false);
}));

(frontend.handler.editor.expand_all_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.toggle_open_BANG_ = (function frontend$handler$editor$toggle_open_BANG_(){
var all_expanded_QMARK_ = cljs.core.empty_QMARK_(frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null)));
if(all_expanded_QMARK_){
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$0();
}
});
frontend.handler.editor.select_all_blocks_BANG_ = (function frontend$handler$editor$select_all_blocks_BANG_(){
var temp__5718__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5718__auto__)){
var current_input_id = temp__5718__auto__;
var input = goog.dom.getElement(current_input_id);
var blocks_container = frontend.util.rec_get_blocks_container(input);
var blocks = dommy.utils.__GT_Array(blocks_container.getElementsByClassName("ls-block"));
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(blocks);
} else {
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(goog.dom.getElementByClass,cljs.core.str,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null))));
}
});
frontend.handler.editor.escape_editing = (function frontend$handler$editor$escape_editing(var_args){
var G__110265 = arguments.length;
switch (G__110265) {
case 0:
return frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1 = (function (select_QMARK_){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
if(cljs.core.truth_(select_QMARK_)){
return frontend.handler.editor.select_block_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()));
} else {
return frontend.state.clear_edit_BANG_();
}
} else {
return null;
}
}));

(frontend.handler.editor.escape_editing.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.replace_block_reference_with_content_at_point = (function frontend$handler$editor$replace_block_reference_with_content_at_point(){
var temp__5720__auto__ = frontend.util.thingatpt.block_ref_at_point();
if(cljs.core.truth_(temp__5720__auto__)){
var map__110266 = temp__5720__auto__;
var map__110266__$1 = cljs.core.__destructure_map(map__110266);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110266__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110266__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110266__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var temp__5720__auto____$1 = (function (){var G__110267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),link], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__110267) : frontend.db.pull.call(null,G__110267));
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var block = temp__5720__auto____$1;
var block_content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var format = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})();
var block_content_without_prop = frontend.util.drawer.remove_logbook(frontend.util.property.remove_properties(format,block_content));
var temp__5720__auto____$2 = frontend.state.get_input();
if(cljs.core.truth_(temp__5720__auto____$2)){
var input = temp__5720__auto____$2;
var temp__5720__auto____$3 = frontend.handler.editor.goog$module$goog$object.get(input,"value");
if(cljs.core.truth_(temp__5720__auto____$3)){
var current_block_content = temp__5720__auto____$3;
var block_content_STAR_ = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(current_block_content,(0),start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_content_without_prop),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(current_block_content,end)].join('');
return frontend.state.set_block_content_and_last_pos_BANG_(input,block_content_STAR_,(1));
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
frontend.handler.editor.copy_current_ref = (function frontend$handler$editor$copy_current_ref(block_id){
if(cljs.core.truth_(block_id)){
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("((%s))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)], 0)));
} else {
return null;
}
});
frontend.handler.editor.delete_current_ref_BANG_ = (function frontend$handler$editor$delete_current_ref_BANG_(block,ref_id){
if(cljs.core.truth_((function (){var and__4251__auto__ = block;
if(cljs.core.truth_(and__4251__auto__)){
return ref_id;
} else {
return and__4251__auto__;
}
})())){
var match = cljs.core.re_pattern(["\\s?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("\\(\\(%s\\)\\)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_id)], 0)))].join(''));
var content = clojure.string.replace_first(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),match,"");
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),content);
} else {
return null;
}
});
frontend.handler.editor.replace_ref_with_text_BANG_ = (function frontend$handler$editor$replace_ref_with_text_BANG_(block,ref_id){
if(cljs.core.truth_((function (){var and__4251__auto__ = block;
if(cljs.core.truth_(and__4251__auto__)){
return ref_id;
} else {
return and__4251__auto__;
}
})())){
var match = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("((%s))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_id)], 0));
var ref_block = (function (){var G__110268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),ref_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__110268) : frontend.db.entity.call(null,G__110268));
})();
var block_ref_content = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(ref_block),(function (){var or__4253__auto__ = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(ref_block);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()));
var content = clojure.string.replace_first(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),match,block_ref_content);
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),content);
} else {
return null;
}
});
frontend.handler.editor.replace_ref_with_embed_BANG_ = (function frontend$handler$editor$replace_ref_with_embed_BANG_(block,ref_id){
if(cljs.core.truth_((function (){var and__4251__auto__ = block;
if(cljs.core.truth_(and__4251__auto__)){
return ref_id;
} else {
return and__4251__auto__;
}
})())){
var match = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("((%s))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_id)], 0));
var content = clojure.string.replace_first(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),match,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed ((%s))}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_id)], 0)));
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),content);
} else {
return null;
}
});
/**
 * Whether a block should be collapsed by default.
 *   Currently, this handles several cases:
 *   1. References.
 *   2. Custom queries.
 */
frontend.handler.editor.block_default_collapsed_QMARK_ = (function frontend$handler$editor$block_default_collapsed_QMARK_(block,config){
var or__4253__auto__ = (function (){var and__4251__auto__ = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = ((new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block) + (1)) >= frontend.state.get_ref_open_blocks_level());
if(and__4251__auto____$1){
return cljs.core.first(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1((function (){var G__110269 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__110269) : frontend.db.entity.call(null,G__110269));
})()));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.util.collapsed_QMARK_(block);
}
});

//# sourceMappingURL=frontend.handler.editor.js.map
