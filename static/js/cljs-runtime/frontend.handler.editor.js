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
var selection_start__$1 = (selection_start + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__51017_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__51017_SHARP_);
}),selection)));
var selection_end__$1 = (selection_end - cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__51018_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__51018_SHARP_);
}),cljs.core.reverse(selection))));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"selection-start","selection-start",-888859581),selection_start__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835),selection_end__$1,new cljs.core.Keyword(null,"selection","selection",975998651),(function (){var G__51019 = selection;
if((G__51019 == null)){
return null;
} else {
return clojure.string.trim(G__51019);
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
var map__51021 = m;
var map__51021__$1 = cljs.core.__destructure_map(map__51021);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"input","input",556931961));
var pattern = (pattern_fn.cljs$core$IFn$_invoke$arity$1 ? pattern_fn.cljs$core$IFn$_invoke$arity$1(format) : pattern_fn.call(null,format));
var pattern_count = cljs.core.count(pattern);
var pattern_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(function (){var x__5128__auto__ = (0);
var y__5129__auto__ = (selection_start - pattern_count);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})(),selection_start);
var pattern_suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,selection_end,(function (){var x__5131__auto__ = cljs.core.count(value);
var y__5132__auto__ = (selection_end + pattern_count);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
var already_wrapped_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pattern,pattern_prefix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern_suffix], 0));
var prefix = ((already_wrapped_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(selection_start - pattern_count)):cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selection_start));
var postfix = ((already_wrapped_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(selection_end + pattern_count)):cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selection_end));
var inner_value = (function (){var G__51022 = selection;
if((!(already_wrapped_QMARK_))){
return (function (p1__51020_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51020_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)].join('');
})(G__51022);
} else {
return G__51022;
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
var G__51024 = arguments.length;
switch (G__51024) {
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
var map__51025 = m;
var map__51025__$1 = cljs.core.__destructure_map(map__51025);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"input","input",556931961));
var cur_pos = frontend.util.cursor.pos(input);
var empty_selection_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end);
var selection_link_QMARK_ = (function (){var and__5041__auto__ = selection;
if(cljs.core.truth_(and__5041__auto__)){
return ((frontend.util.starts_with_QMARK_(selection,"http://")) || (frontend.util.starts_with_QMARK_(selection,"https://")));
} else {
return and__5041__auto__;
}
})();
var vec__51026 = ((empty_selection_QMARK_)?frontend.config.get_empty_link_and_forward_pos(format):(cljs.core.truth_(link)?frontend.config.with_label_link(format,selection,link):(cljs.core.truth_(selection_link_QMARK_)?frontend.config.with_default_link(format,selection):frontend.config.with_default_label(format,selection)
)));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(0),null);
var forward_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51026,(1),null);
var new_value = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selection_start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selection_end)].join('');
var cur_pos__$1 = (function (){var or__5043__auto__ = selection_start;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var temp__5720__auto__ = (function (){var G__51029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51029) : frontend.db.entity.call(null,G__51029));
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
var pos = (function (){var or__5043__auto__ = frontend.state.get_editor_last_pos();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = cursor_range;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.diff.find_position(markup,cursor_range);
} else {
return and__5041__auto__;
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
var seq__51030 = cljs.core.seq(blocks);
var chunk__51031 = null;
var count__51032 = (0);
var i__51033 = (0);
while(true){
if((i__51033 < count__51032)){
var block = chunk__51031.cljs$core$IIndexed$_nth$arity$2(null,i__51033);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"block-highlight");


var G__52613 = seq__51030;
var G__52614 = chunk__51031;
var G__52615 = count__51032;
var G__52616 = (i__51033 + (1));
seq__51030 = G__52613;
chunk__51031 = G__52614;
count__51032 = G__52615;
i__51033 = G__52616;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51030);
if(temp__5720__auto__){
var seq__51030__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51030__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__51030__$1);
var G__52617 = cljs.core.chunk_rest(seq__51030__$1);
var G__52618 = c__5565__auto__;
var G__52619 = cljs.core.count(c__5565__auto__);
var G__52620 = (0);
seq__51030 = G__52617;
chunk__51031 = G__52618;
count__51032 = G__52619;
i__51033 = G__52620;
continue;
} else {
var block = cljs.core.first(seq__51030__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"block-highlight");


var G__52621 = cljs.core.next(seq__51030__$1);
var G__52622 = null;
var G__52623 = (0);
var G__52624 = (0);
seq__51030 = G__52621;
chunk__51031 = G__52622;
count__51032 = G__52623;
i__51033 = G__52624;
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
var blocks = (function (){var G__51034 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName("block-highlight"));
var G__51034__$1 = (((G__51034 == null))?null:cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),G__51034));
if((G__51034__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,G__51034__$1);
}
})();
var seq__51035 = cljs.core.seq(blocks);
var chunk__51036 = null;
var count__51037 = (0);
var i__51038 = (0);
while(true){
if((i__51038 < count__51037)){
var block = chunk__51036.cljs$core$IIndexed$_nth$arity$2(null,i__51038);
goog.dom.classes.remove(block,"block-highlight");


var G__52625 = seq__51035;
var G__52626 = chunk__51036;
var G__52627 = count__51037;
var G__52628 = (i__51038 + (1));
seq__51035 = G__52625;
chunk__51036 = G__52626;
count__51037 = G__52627;
i__51038 = G__52628;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51035);
if(temp__5720__auto__){
var seq__51035__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51035__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__51035__$1);
var G__52630 = cljs.core.chunk_rest(seq__51035__$1);
var G__52631 = c__5565__auto__;
var G__52632 = cljs.core.count(c__5565__auto__);
var G__52633 = (0);
seq__51035 = G__52630;
chunk__51036 = G__52631;
count__51037 = G__52632;
i__51038 = G__52633;
continue;
} else {
var block = cljs.core.first(seq__51035__$1);
goog.dom.classes.remove(block,"block-highlight");


var G__52635 = cljs.core.next(seq__51035__$1);
var G__52636 = null;
var G__52637 = (0);
var G__52638 = (0);
seq__51035 = G__52635;
chunk__51036 = G__52636;
count__51037 = G__52637;
i__51038 = G__52638;
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
frontend.handler.editor.text_range_by_lst_fst_line = (function frontend$handler$editor$text_range_by_lst_fst_line(content,p__51039){
var vec__51040 = p__51039;
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51040,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51040,(1),null);
var G__51043 = direction;
var G__51043__$1 = (((G__51043 instanceof cljs.core.Keyword))?G__51043.fqn:null);
switch (G__51043__$1) {
case "up":
var last_new_line = (function (){var or__5043__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(content,"\n");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (-1);
}
})();
var end = ((last_new_line + pos) + (1));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),end);

break;
case "down":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3((function (){var or__5043__auto__ = cljs.core.first(clojure.string.split_lines(content));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})(),(0),pos);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51043__$1)].join('')));

}
});
frontend.handler.editor.edit_block_BANG_ = (function frontend$handler$editor$edit_block_BANG_(var_args){
var G__51045 = arguments.length;
switch (G__51045) {
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

(frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (block,pos,id,p__51046){
var map__51047 = p__51046;
var map__51047__$1 = cljs.core.__destructure_map(map__51047);
var custom_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51047__$1,new cljs.core.Keyword(null,"custom-content","custom-content",-8240001));
var tail_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51047__$1,new cljs.core.Keyword(null,"tail-len","tail-len",699304522),(0));
var move_cursor_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51047__$1,new cljs.core.Keyword(null,"move-cursor?","move-cursor?",-229137728),true);
if(frontend.config.publishing_QMARK_){
return null;
} else {
var temp__5720__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
var block__$1 = (function (){var or__5043__auto__ = (function (){var G__51048 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51048) : frontend.db.pull.call(null,G__51048));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return block;
}
})();
var edit_input_id = ((cljs.core.uuid_QMARK_(id))?frontend.handler.editor.get_edit_input_id_with_block_id(id):clojure.string.replace([cljs.core.subs.cljs$core$IFn$_invoke$arity$3(id,(0),(cljs.core.count(id) - (36))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)].join(''),"ls-block","edit-block"));
var content = (function (){var or__5043__auto__ = custom_content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
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
var temp__5720__auto__ = (function (){var and__5041__auto__ = typeof block_id === 'string';
if(and__5041__auto__){
return cljs.core.parse_uuid(block_id);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var id = temp__5720__auto__;
var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_id,id);
if(and__5041__auto__){
var G__51049 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51049) : frontend.db.entity.call(null,G__51049));
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
frontend.handler.editor.attach_page_properties_if_exists_BANG_ = (function frontend$handler$editor$attach_page_properties_if_exists_BANG_(block){
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5041__auto__;
}
})())){
var page_properties = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block);
var str__GT_page = (function (n){
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2(n,true);
});
var refs = frontend.util.distinct_by(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block),cljs.core.map.cljs$core$IFn$_invoke$arity$2(str__GT_page,cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51051){
var vec__51052 = p__51051;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51052,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51052,(1),null);
return cljs.core.coll_QMARK_(v);
}),page_properties)))))));
var map__51050 = page_properties;
var map__51050__$1 = cljs.core.__destructure_map(map__51050);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51050__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51050__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var page_tx = (function (){var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
var retract_attributes = (cljs.core.truth_(id)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (attribute){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,attribute], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("block","alias","block/alias",-2112644699)], null)):null);
var tags__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(str__GT_page,tags));
var alias__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(str__GT_page,alias));
var tx = (function (){var G__51055 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","properties","block/properties",708347145),page_properties], null);
var G__51055__$1 = ((cljs.core.seq(tags__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51055,new cljs.core.Keyword("block","tags","block/tags",1814948340),tags__$1):G__51055);
if(cljs.core.seq(alias__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51055__$1,new cljs.core.Keyword("block","alias","block/alias",-2112644699),alias__$1);
} else {
return G__51055__$1;
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
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.enable_timetracking_QMARK_();
if(and__5041__auto__){
return new_marker;
} else {
return and__5041__auto__;
}
})())){
try{var logbook_exists_QMARK_ = (function (){var and__5041__auto__ = new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.drawer.get_logbook(new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5041__auto__;
}
})();
var new_marker__$1 = clojure.string.trim(clojure.string.lower_case(cljs.core.name(new_marker)));
var old_marker__$1 = (cljs.core.truth_(old_marker)?clojure.string.trim(clojure.string.lower_case(cljs.core.name(old_marker))):null);
var new_content = (((((((old_marker__$1 == null)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"doing")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"now")))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"todo")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"doing")))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"later")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"now")))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(old_marker__$1,new_marker__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["now"], 0))) && (cljs.core.not(logbook_exists_QMARK_)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(old_marker__$1,new_marker__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["doing"], 0))) && (cljs.core.not(logbook_exists_QMARK_))))))))))))?frontend.util.clock.clock_in(format,content):((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"doing")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"todo")))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"now")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"later")))) || (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["doing",null,"now",null], null), null),old_marker__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"done"))))))))?frontend.util.clock.clock_out(format,content):content
));
return new_content;
}catch (e51056){if((e51056 instanceof Error)){
var _e = e51056;
return content;
} else {
throw e51056;

}
}} else {
return content;
}
});
frontend.handler.editor.with_timetracking = (function frontend$handler$editor$with_timetracking(block,value){
if(((frontend.state.enable_timetracking_QMARK_()) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),value)))){
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
var new_marker = cljs.core.last(frontend.util.safe_re_find(frontend.util.marker.marker_pattern(format),(function (){var or__5043__auto__ = value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
frontend.handler.editor.wrap_parse_block = (function frontend$handler$editor$wrap_parse_block(p__51064){
var map__51065 = p__51064;
var map__51065__$1 = cljs.core.__destructure_map(map__51065);
var block = map__51065__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51065__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51065__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51065__$1,new cljs.core.Keyword("block","left","block/left",-443712566));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51065__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51065__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51065__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51065__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var block__$1 = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5041__auto__)){
var G__51069 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51069) : frontend.db.pull.call(null,G__51069));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return block;
}
})();
var block__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(uuid,format,pre_block_QMARK_,new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$1))], 0));
var properties = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block__$2);
var real_content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$2);
var content__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.seq(properties);
if(and__5041__auto__){
var and__5041__auto____$1 = real_content;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(real_content,content);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var vec__51066 = ((((first_block_QMARK_) && (properties_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content__$5], null):((markdown_heading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content__$5], null):(function (){var content_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_block_pattern(format)),((block_with_title_QMARK_)?" ":"\n"),content__$5].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content_SINGLEQUOTE_], null);
})()
));
var content__$6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51066,(0),null);
var content_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51066,(1),null);
var block__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block__$2,new cljs.core.Keyword("block","content","block/content",-161885195),content_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","format","block/format",-1212045901),format], 0));
var block__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,block__$3,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),null], null), null),frontend.db_schema.retract_attributes));
var block__$5 = frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$1(block__$4);
var block__$6 = (cljs.core.truth_((function (){var and__5041__auto__ = first_block_QMARK_;
if(and__5041__auto__){
return new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block__$5);
} else {
return and__5041__auto__;
}
})())?block__$5:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block__$5,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521)));
var block__$7 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(block__$6,new cljs.core.Keyword("block","refs","block/refs",-1214495349),frontend.handler.editor.remove_non_existed_refs_BANG_);
var block__$8 = frontend.handler.editor.attach_page_properties_if_exists_BANG_(block__$7);
var new_properties = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(properties,frontend.util.property.built_in_properties()),new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block__$8)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$8,new cljs.core.Keyword("block","top?","block/top?",-1838733025),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","bottom?","block/bottom?",-1886197289)], 0)),new cljs.core.Keyword("block","content","block/content",-161885195),content__$6,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","properties","block/properties",708347145),new_properties], 0)),(cljs.core.truth_(level)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","level","block/level",1182509971),level], null):cljs.core.PersistentArrayMap.EMPTY)], 0));
});
frontend.handler.editor.save_block_inner_BANG_ = (function frontend$handler$editor$save_block_inner_BANG_(block,value,p__51078){
var map__51079 = p__51078;
var map__51079__$1 = cljs.core.__destructure_map(map__51079);
var block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","content","block/content",-161885195),value);
var block__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,block__$1,frontend.db_schema.retract_attributes);
if(cljs.core.truth_(goog.DEBUG)){
var k__30266__auto__ = "Save block: ";
console.time(k__30266__auto__);

var res__30267__auto__ = (function (){var block__$3 = frontend.handler.editor.wrap_parse_block(block__$2);
var transact_data__49907__auto___52736 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto___52737 = (cljs.core.truth_(transact_data__49907__auto___52736)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
if(cljs.core.truth_(transact_data__49907__auto___52736)){
frontend.modules.outliner.core.save_block_BANG_(block__$3);
} else {
var _STAR_transaction_data_STAR__orig_val__51080_52738 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__51081_52739 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__51081_52739);

try{frontend.modules.outliner.core.save_block_BANG_(block__$3);

var r__49909__auto___52740 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto___52741 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto___52740], 0));
var tx_meta__49911__auto___52742 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto___52740));
var all_tx__49912__auto___52743 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto___52741,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___52737));
var opts_SHARP___49913__auto___52744 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto___52737,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto___52742], 0));
if(cljs.core.seq(all_tx__49912__auto___52743)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___52737))){
} else {
var result__49914__auto___52745 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto___52743,opts_SHARP___49913__auto___52744);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto___52743,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto___52742,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto___52745], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__51080_52738);
}}

var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var title = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__51082 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block__$3));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51082) : frontend.db.entity.call(null,G__51082));
})());
if(cljs.core.truth_(temp__5720__auto____$1)){
var old_page_name = temp__5720__auto____$1;
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block__$3);
if(cljs.core.truth_(and__5041__auto__)){
return (((!(clojure.string.blank_QMARK_(title)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title)),old_page_name)));
} else {
return and__5041__auto__;
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
console.timeEnd(k__30266__auto__);

return res__30267__auto__;
} else {
var block__$3 = frontend.handler.editor.wrap_parse_block(block__$2);
var transact_data__49907__auto___52750 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto___52751 = (cljs.core.truth_(transact_data__49907__auto___52750)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
if(cljs.core.truth_(transact_data__49907__auto___52750)){
frontend.modules.outliner.core.save_block_BANG_(block__$3);
} else {
var _STAR_transaction_data_STAR__orig_val__51086_52753 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__51087_52754 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__51087_52754);

try{frontend.modules.outliner.core.save_block_BANG_(block__$3);

var r__49909__auto___52755 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto___52756 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto___52755], 0));
var tx_meta__49911__auto___52757 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto___52755));
var all_tx__49912__auto___52758 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto___52756,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___52751));
var opts_SHARP___49913__auto___52759 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto___52751,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto___52757], 0));
if(cljs.core.seq(all_tx__49912__auto___52758)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___52751))){
} else {
var result__49914__auto___52760 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto___52758,opts_SHARP___49913__auto___52759);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto___52758,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto___52757,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto___52760], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__51086_52753);
}}

var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var title = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__51091 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block__$3));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51091) : frontend.db.entity.call(null,G__51091));
})());
if(cljs.core.truth_(temp__5720__auto____$1)){
var old_page_name = temp__5720__auto____$1;
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block__$3);
if(cljs.core.truth_(and__5041__auto__)){
return (((!(clojure.string.blank_QMARK_(title)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title)),old_page_name)));
} else {
return and__5041__auto__;
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
var G__51093 = arguments.length;
switch (G__51093) {
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

(frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (block,value,p__51095){
var map__51096 = p__51095;
var map__51096__$1 = cljs.core.__destructure_map(map__51096);
var opts = map__51096__$1;
var force_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51096__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));
var map__51098 = block;
var map__51098__$1 = cljs.core.__destructure_map(map__51098);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("block","repo","block/repo",2119209932));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var repo__$1 = (function (){var or__5043__auto__ = repo;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var page__$1 = (function (){var G__51099 = repo__$1;
var G__51100 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__51099,G__51100) : frontend.db.entity.call(null,G__51099,G__51100));
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
if(cljs.core.truth_((function (){var and__5041__auto__ = content_changed_QMARK_;
if(and__5041__auto__){
return page__$1;
} else {
return and__5041__auto__;
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
frontend.handler.editor.outliner_insert_block_BANG_ = (function frontend$handler$editor$outliner_insert_block_BANG_(config,current_block,new_block,p__51101){
var map__51102 = p__51101;
var map__51102__$1 = cljs.core.__destructure_map(map__51102);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51102__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51102__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51102__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var ref_query_top_block_QMARK_ = (function (){var and__5041__auto__ = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5041__auto__;
}
})();
var has_children_QMARK_ = (function (){var G__51105 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__51105) : frontend.db.has_children_QMARK_.call(null,G__51105));
})();
var sibling_QMARK___$1 = (cljs.core.truth_(ref_query_top_block_QMARK_)?false:((cljs.core.boolean_QMARK_(sibling_QMARK_))?sibling_QMARK_:(cljs.core.truth_(frontend.util.collapsed_QMARK_(current_block))?true:cljs.core.not(has_children_QMARK_)
)));
var transact_data__49907__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto__ = (cljs.core.truth_(transact_data__49907__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
if(cljs.core.truth_(transact_data__49907__auto__)){
var G__51106_52791 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block], null);
(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(G__51106_52791) : frontend.handler.editor.save_current_block_BANG_.call(null,G__51106_52791));

return frontend.modules.outliner.core.insert_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),current_block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_], null));
} else {
var _STAR_transaction_data_STAR__orig_val__51108 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__51109 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__51109);

try{var G__51110_52793 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block], null);
(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(G__51110_52793) : frontend.handler.editor.save_current_block_BANG_.call(null,G__51110_52793));

frontend.modules.outliner.core.insert_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),current_block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_], null));

var r__49909__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto__], 0));
var tx_meta__49911__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto__));
var all_tx__49912__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__));
var opts_SHARP___49913__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto__], 0));
if(cljs.core.seq(all_tx__49912__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__))){
return null;
} else {
var result__49914__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto__,opts_SHARP___49913__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__51108);
}}
});
frontend.handler.editor.block_self_alone_when_insert_QMARK_ = (function frontend$handler$editor$block_self_alone_when_insert_QMARK_(config,uuid){
var current_page = frontend.state.get_current_page();
var block_id = (function (){var or__5043__auto__ = (function (){var G__51119 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
if((G__51119 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__51119);
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__51121 = current_page;
if((G__51121 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__51121);
}
}
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uuid,block_id);
});
frontend.handler.editor.insert_new_block_before_block_aux_BANG_ = (function frontend$handler$editor$insert_new_block_before_block_aux_BANG_(config,block,_value,p__51123){
var map__51124 = p__51123;
var map__51124__$1 = cljs.core.__destructure_map(map__51124);
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51124__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var new_m = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.db.new_block_id(),new cljs.core.Keyword("block","content","block/content",-161885195),""], null);
var prev_block = frontend.handler.editor.wrap_parse_block(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","journal?","block/journal?",-970683127)], null)),new_m], 0)));
var left_block = (function (){var G__51127 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51127) : frontend.db.pull.call(null,G__51127));
})();
if(cljs.core.truth_(goog.DEBUG)){
var k__30266__auto___52805 = "outliner insert block";
console.time(k__30266__auto___52805);

var res__30267__auto___52806 = (function (){var sibling_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)));
return frontend.handler.editor.outliner_insert_block_BANG_(config,left_block,prev_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
})();
console.timeEnd(k__30266__auto___52805);

} else {
var sibling_QMARK__52807 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)));
frontend.handler.editor.outliner_insert_block_BANG_(config,left_block,prev_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__52807,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
}

return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(prev_block) : ok_handler.call(null,prev_block));
});
frontend.handler.editor.insert_new_block_aux_BANG_ = (function frontend$handler$editor$insert_new_block_aux_BANG_(config,p__51148,value,p__51149){
var map__51150 = p__51148;
var map__51150__$1 = cljs.core.__destructure_map(map__51150);
var block = map__51150__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51150__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var map__51151 = p__51149;
var map__51151__$1 = cljs.core.__destructure_map(map__51151);
var _opts = map__51151__$1;
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51151__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var block_self_QMARK_ = frontend.handler.editor.block_self_alone_when_insert_QMARK_(config,uuid);
var input = goog.dom.getElement(frontend.state.get_edit_input_id());
var pos = frontend.util.cursor.pos(input);
var vec__51152 = frontend.handler.editor.compute_fst_snd_block_text(value,pos);
var fst_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51152,(0),null);
var snd_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51152,(1),null);
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
var vec__51159 = frontend.state.get_editor_args();
var map__51162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51159,(0),null);
var map__51162__$1 = cljs.core.__destructure_map(map__51162);
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"block","block",664686210));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var block_parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51159,(1),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51159,(2),null);
var node = goog.dom.getElement(id);
if(cljs.core.truth_(node)){
var value = frontend.handler.editor.goog$module$goog$object.get(node,"value");
var pos = frontend.util.get_selection_start(node);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550)],[format,(function (){var or__5043__auto__ = (function (){var G__51165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51165) : frontend.db.pull.call(null,G__51165));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var G__51170 = arguments.length;
switch (G__51170) {
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

var temp__5720__auto___52837 = frontend.handler.editor.get_state();
if(cljs.core.truth_(temp__5720__auto___52837)){
var state_52838 = temp__5720__auto___52837;
var map__51174_52839 = state_52838;
var map__51174_52840__$1 = cljs.core.__destructure_map(map__51174_52839);
var block_52841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51174_52840__$1,new cljs.core.Keyword(null,"block","block",664686210));
var value_52842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51174_52840__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id_52843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51174_52840__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var config_52844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51174_52840__$1,new cljs.core.Keyword(null,"config","config",994861415));
var value_52845__$1 = ((typeof block_value === 'string')?block_value:value_52842);
var block_id_52846 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_52841);
var block_52847__$1 = (function (){var or__5043__auto__ = (function (){var G__51181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_52846], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51181) : frontend.db.pull.call(null,G__51181));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return block_52841;
}
})();
var block_self_QMARK__52848 = frontend.handler.editor.block_self_alone_when_insert_QMARK_(config_52844,block_id_52846);
var input_52849 = goog.dom.getElement(frontend.state.get_edit_input_id());
var pos_52850 = frontend.util.cursor.pos(input_52849);
var vec__51175_52851 = frontend.handler.editor.compute_fst_snd_block_text(value_52845__$1,pos_52850);
var fst_block_text_52852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51175_52851,(0),null);
var snd_block_text_52853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51175_52851,(1),null);
var insert_fn_52854 = ((block_self_QMARK__52848)?frontend.handler.editor.insert_new_block_aux_BANG_:((((clojure.string.blank_QMARK_(fst_block_text_52852)) && ((!(clojure.string.blank_QMARK_(snd_block_text_52853))))))?frontend.handler.editor.insert_new_block_before_block_aux_BANG_:frontend.handler.editor.insert_new_block_aux_BANG_
));
var G__51184_52865 = config_52844;
var G__51185_52866 = block_52847__$1;
var G__51186_52867 = value_52845__$1;
var G__51187_52868 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089),(function (last_block){
frontend.handler.editor.clear_when_saved_BANG_();

return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(last_block,(0),id_52843);
})], null);
(insert_fn_52854.cljs$core$IFn$_invoke$arity$4 ? insert_fn_52854.cljs$core$IFn$_invoke$arity$4(G__51184_52865,G__51185_52866,G__51186_52867,G__51187_52868) : insert_fn_52854.call(null,G__51184_52865,G__51185_52866,G__51186_52867,G__51187_52868));
} else {
}
} else {
}

return frontend.state.set_editor_op_BANG_(null);
}));

(frontend.handler.editor.insert_new_block_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.api_insert_new_block_BANG_ = (function frontend$handler$editor$api_insert_new_block_BANG_(content,p__51197){
var map__51199 = p__51197;
var map__51199__$1 = cljs.core.__destructure_map(map__51199);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51199__$1,new cljs.core.Keyword(null,"page","page",849072397));
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51199__$1,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51199__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false);
var before_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51199__$1,new cljs.core.Keyword(null,"before?","before?",765621039),false);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51199__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var custom_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51199__$1,new cljs.core.Keyword(null,"custom-uuid","custom-uuid",-1095135430));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51199__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var edit_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51199__$1,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),true);
if(cljs.core.truth_((function (){var or__5043__auto__ = page;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return block_uuid;
}
})())){
var before_QMARK___$1 = (cljs.core.truth_(page)?false:before_QMARK_);
var sibling_QMARK___$1 = cljs.core.boolean$(sibling_QMARK_);
var sibling_QMARK___$2 = (cljs.core.truth_(before_QMARK___$1)?true:(cljs.core.truth_(page)?false:sibling_QMARK___$1));
var block = (cljs.core.truth_(page)?(function (){var G__51204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51204) : frontend.db.entity.call(null,G__51204));
})():(function (){var G__51205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51205) : frontend.db.entity.call(null,G__51205));
})());
if(cljs.core.truth_(block)){
var last_block = (((!(sibling_QMARK___$2)))?(function (){var children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
var blocks = (frontend.db.sort_by_left.cljs$core$IFn$_invoke$arity$2 ? frontend.db.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,block) : frontend.db.sort_by_left.call(null,children,block));
var last_block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(blocks));
if(cljs.core.truth_(last_block_id)){
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(last_block_id) : frontend.db.pull.call(null,last_block_id));
} else {
return null;
}
})():null);
var format = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var G__51217 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__51217) : frontend.db.get_page_format.call(null,G__51217));
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
}
})();
var content__$1 = ((cljs.core.seq(properties))?frontend.util.property.insert_properties(format,content,properties):content);
var new_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366)], null)),new cljs.core.Keyword("block","content","block/content",-161885195),content__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","format","block/format",-1212045901),format], 0));
var new_block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_block,new cljs.core.Keyword("block","page","block/page",822314108),(cljs.core.truth_(page)?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block):new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(new_block))));
var new_block__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.editor.wrap_parse_block(new_block__$1),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__5043__auto__ = custom_uuid;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.new_block_id();
}
})());
var vec__51208 = (cljs.core.truth_(before_QMARK___$1)?(function (){var first_child_QMARK_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51194_SHARP_){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,p1__51194_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566)], null)));
var block__$1 = (function (){var G__51221 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51221) : frontend.db.pull.call(null,G__51221));
})();
var sibling_QMARK___$3 = (cljs.core.truth_((function (){var or__5043__auto__ = first_child_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())?false:sibling_QMARK___$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1,sibling_QMARK___$3], null);
})():((sibling_QMARK___$2)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51222 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51222) : frontend.db.pull.call(null,G__51222));
})(),sibling_QMARK___$2], null):(cljs.core.truth_(last_block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_block,true], null):(cljs.core.truth_(block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51223 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51223) : frontend.db.pull.call(null,G__51223));
})(),sibling_QMARK___$2], null):null
))));
var block_m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51208,(0),null);
var sibling_QMARK___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51208,(1),null);
if(cljs.core.truth_(block_m)){
frontend.handler.editor.outliner_insert_block_BANG_(cljs.core.PersistentArrayMap.EMPTY,block_m,new_block__$2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$3,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_], null));

if(cljs.core.truth_(edit_block_QMARK_)){
if(cljs.core.truth_((function (){var and__5041__auto__ = replace_empty_target_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(last_block));
} else {
return and__5041__auto__;
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
var G__51228 = arguments.length;
switch (G__51228) {
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
var refs = logseq.graph_parser.block.get_page_refs_from_properties(properties,(function (){var G__51230 = frontend.state.get_current_repo();
return (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(G__51230) : frontend.db.get_db.call(null,G__51230));
})(),frontend.state.get_date_formatter());
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","page","block/page",822314108)],[true,frontend.db.new_block_id(),properties,page,refs,cljs.core.keys(properties),format,content,page,page]);
});
frontend.handler.editor.update_timestamps_content_BANG_ = (function frontend$handler$editor$update_timestamps_content_BANG_(p__51231,content){
var map__51232 = p__51231;
var map__51232__$1 = cljs.core.__destructure_map(map__51232);
var block = map__51232__$1;
var repeated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51232__$1,new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51232__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51232__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
if(cljs.core.truth_(repeated_QMARK_)){
var scheduled_ast = frontend.handler.block.get_scheduled_ast(block);
var deadline_ast = frontend.handler.block.get_deadline_ast(block);
var content__$1 = (function (){var G__51233 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.handler.repeated.repeated_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheduled_ast,deadline_ast], null));
var G__51233__$1 = (((G__51233 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$1(ts),frontend.handler.repeated.next_timestamp_text(ts)], null);
}),G__51233));
if((G__51233__$1 == null)){
return null;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,p__51234){
var vec__51235 = p__51234;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51235,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51235,(1),null);
return clojure.string.replace(content__$1,old,new$);
}),content,G__51233__$1);
}
})();
var content__$2 = clojure.string.replace_first(content__$1,marker,(function (){var G__51238 = marker;
switch (G__51238) {
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
frontend.handler.editor.check = (function frontend$handler$editor$check(p__51240){
var map__51241 = p__51240;
var map__51241__$1 = cljs.core.__destructure_map(map__51241);
var block = map__51241__$1;
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51241__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51241__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var repeated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51241__$1,new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51241__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var new_content = clojure.string.replace_first(content,marker,"DONE");
var new_content__$1 = (cljs.core.truth_(repeated_QMARK_)?frontend.handler.editor.update_timestamps_content_BANG_(block,content):new_content);
var input_id = frontend.state.get_edit_input_id();
if(cljs.core.truth_((function (){var and__5041__auto__ = input_id;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(input_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid));
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_content__$1);
} else {
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content__$1);
}
});
frontend.handler.editor.uncheck = (function frontend$handler$editor$uncheck(p__51242){
var map__51243 = p__51242;
var map__51243__$1 = cljs.core.__destructure_map(map__51243);
var block = map__51243__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51243__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51243__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var marker = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"now","now",-1650525531),frontend.state.get_preferred_workflow()))?"LATER":"TODO");
var new_content = clojure.string.replace_first(content,"DONE",marker);
var input_id = frontend.state.get_edit_input_id();
if(cljs.core.truth_((function (){var and__5041__auto__ = input_id;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(input_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid));
} else {
return and__5041__auto__;
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
var G__51247 = arguments.length;
switch (G__51247) {
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

(frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$2 = (function (p__51248,new_marker){
var map__51249 = p__51248;
var map__51249__$1 = cljs.core.__destructure_map(map__51249);
var block = map__51249__$1;
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51249__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51249__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51249__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var vec__51250 = frontend.util.marker.cycle_marker(content,marker,new_marker,format,frontend.state.get_preferred_workflow());
var new_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51250,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51250,(1),null);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
}));

(frontend.handler.editor.set_marker.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.cycle_todos_BANG_ = (function frontend$handler$editor$cycle_todos_BANG_(){
var temp__5720__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5720__auto__){
var blocks = temp__5720__auto__;
var ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51253_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__51253_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks)));
var seq__51254 = cljs.core.seq(ids);
var chunk__51255 = null;
var count__51256 = (0);
var i__51257 = (0);
while(true){
if((i__51257 < count__51256)){
var id = chunk__51255.cljs$core$IIndexed$_nth$arity$2(null,i__51257);
var block_52951 = (function (){var G__51260 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51260) : frontend.db.pull.call(null,G__51260));
})();
frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1(block_52951);


var G__52952 = seq__51254;
var G__52953 = chunk__51255;
var G__52954 = count__51256;
var G__52955 = (i__51257 + (1));
seq__51254 = G__52952;
chunk__51255 = G__52953;
count__51256 = G__52954;
i__51257 = G__52955;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__51254);
if(temp__5720__auto____$1){
var seq__51254__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51254__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__51254__$1);
var G__52965 = cljs.core.chunk_rest(seq__51254__$1);
var G__52966 = c__5565__auto__;
var G__52967 = cljs.core.count(c__5565__auto__);
var G__52968 = (0);
seq__51254 = G__52965;
chunk__51255 = G__52966;
count__51256 = G__52967;
i__51257 = G__52968;
continue;
} else {
var id = cljs.core.first(seq__51254__$1);
var block_52970 = (function (){var G__51262 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51262) : frontend.db.pull.call(null,G__51262));
})();
frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1(block_52970);


var G__52971 = cljs.core.next(seq__51254__$1);
var G__52972 = null;
var G__52973 = (0);
var G__52974 = (0);
seq__51254 = G__52971;
chunk__51255 = G__52972;
count__51256 = G__52973;
i__51257 = G__52974;
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
var format = (function (){var or__5043__auto__ = (function (){var G__51267 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__51267) : frontend.db.get_page_format.call(null,G__51267));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var vec__51264 = frontend.util.marker.cycle_marker(content,null,null,format,frontend.state.get_preferred_workflow());
var new_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51264,(0),null);
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51264,(1),null);
var new_pos = frontend.commands.compute_pos_delta_when_change_marker(content,marker,frontend.util.cursor.pos(current_input));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_input_id,new_content);

return frontend.util.cursor.move_cursor_to(current_input,new_pos);
} else {
return null;
}
}
});
frontend.handler.editor.set_priority = (function frontend$handler$editor$set_priority(p__51268,new_priority){
var map__51269 = p__51268;
var map__51269__$1 = cljs.core.__destructure_map(map__51269);
var block = map__51269__$1;
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51269__$1,new cljs.core.Keyword("block","priority","block/priority",1491369544));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51269__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var new_content = clojure.string.replace_first(content,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_priority], 0)));
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
});
frontend.handler.editor.cycle_priority_BANG_ = (function frontend$handler$editor$cycle_priority_BANG_(){
if(cljs.core.truth_(frontend.state.get_edit_block())){
var format = (function (){var or__5043__auto__ = (function (){var G__51270 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__51270) : frontend.db.get_page_format.call(null,G__51270));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
frontend.handler.editor.delete_block_aux_BANG_ = (function frontend$handler$editor$delete_block_aux_BANG_(p__51271,children_QMARK_){
var map__51272 = p__51271;
var map__51272__$1 = cljs.core.__destructure_map(map__51272);
var _block = map__51272__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51272__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51272__$1,new cljs.core.Keyword("block","repo","block/repo",2119209932));
var repo__$1 = (function (){var or__5043__auto__ = repo;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
var block = (function (){var G__51275 = repo__$1;
var G__51276 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__51277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__51275,G__51276,G__51277) : frontend.db.pull.call(null,G__51275,G__51276,G__51277));
})();
if(cljs.core.truth_(block)){
var transact_data__49907__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto__ = (cljs.core.truth_(transact_data__49907__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null));
if(cljs.core.truth_(transact_data__49907__auto__)){
return frontend.modules.outliner.core.delete_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),children_QMARK_], null));
} else {
var _STAR_transaction_data_STAR__orig_val__51278 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__51279 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__51279);

try{frontend.modules.outliner.core.delete_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),children_QMARK_], null));

var r__49909__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto__], 0));
var tx_meta__49911__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto__));
var all_tx__49912__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__));
var opts_SHARP___49913__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto__], 0));
if(cljs.core.seq(all_tx__49912__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__))){
return null;
} else {
var result__49914__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto__,opts_SHARP___49913__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__51278);
}}
} else {
return null;
}
});
frontend.handler.editor.move_to_prev_block = (function frontend$handler$editor$move_to_prev_block(repo,sibling_block,format,id,value){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return sibling_block;
} else {
return and__5041__auto__;
}
})())){
var temp__5720__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5720__auto__)){
var sibling_block_id = temp__5720__auto__;
var temp__5720__auto____$1 = (function (){var G__51282 = repo;
var G__51283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__51284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(sibling_block_id)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__51282,G__51283,G__51284) : frontend.db.pull.call(null,G__51282,G__51283,G__51284));
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var block = temp__5720__auto____$1;
var original_content = frontend.util.trim_safe(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block));
var value_SINGLEQUOTE_ = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(format,original_content));
var new_value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
var tail_len = cljs.core.count(value);
var pos = (function (){var x__5128__auto__ = (cljs.core.truth_(original_content)?logseq.graph_parser.utf8.length(logseq.graph_parser.utf8.encode(original_content)):(0));
var y__5129__auto__ = (0);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
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
var G__51286 = arguments.length;
switch (G__51286) {
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

var map__51287_53035 = frontend.handler.editor.get_state();
var map__51287_53036__$1 = cljs.core.__destructure_map(map__51287_53035);
var id_53037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51287_53036__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_id_53038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51287_53036__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var block_parent_id_53039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51287_53036__$1,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550));
var value_53040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51287_53036__$1,new cljs.core.Keyword(null,"value","value",305978217));
var format_53041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51287_53036__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
if(cljs.core.truth_(block_id_53038)){
var page_id_53043 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__51288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_53038], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51288) : frontend.db.entity.call(null,G__51288));
})()));
var page_blocks_count_53044 = (function (){var and__5041__auto__ = page_id_53043;
if(cljs.core.truth_(and__5041__auto__)){
return (frontend.db.get_page_blocks_count.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_blocks_count.cljs$core$IFn$_invoke$arity$2(repo,page_id_53043) : frontend.db.get_page_blocks_count.call(null,repo,page_id_53043));
} else {
return and__5041__auto__;
}
})();
if((page_blocks_count_53044 > (1))){
var block_53046 = (function (){var G__51290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_53038], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51290) : frontend.db.entity.call(null,G__51290));
})();
var has_children_QMARK__53047 = cljs.core.seq(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block_53046));
var block_53048__$1 = (function (){var G__51291 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_53046);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51291) : frontend.db.pull.call(null,G__51291));
})();
var left_53049 = frontend.modules.outliner.tree._get_left(frontend.modules.outliner.core.block(block_53048__$1));
var left_has_children_QMARK__53050 = (function (){var and__5041__auto__ = left_53049;
if(cljs.core.truth_(and__5041__auto__)){
var temp__5720__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(left_53049));
if(cljs.core.truth_(temp__5720__auto__)){
var block_id__$1 = temp__5720__auto__;
var block__$2 = (function (){var G__51292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51292) : frontend.db.entity.call(null,G__51292));
})();
return cljs.core.seq(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block__$2));
} else {
return null;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = has_children_QMARK__53047;
if(and__5041__auto__){
return left_has_children_QMARK__53050;
} else {
return and__5041__auto__;
}
})())){
} else {
if(cljs.core.truth_(block_parent_id_53039)){
var block_parent_53054 = goog.dom.getElement(block_parent_id_53039);
var sibling_block_53055 = frontend.util.get_prev_block_non_collapsed_non_embed(block_parent_53054);
frontend.handler.editor.delete_block_aux_BANG_(block_53048__$1,delete_children_QMARK_);

frontend.handler.editor.move_to_prev_block(repo,sibling_block_53055,format_53041,id_53037,value_53040);
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
var transact_data__49907__auto___53056 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto___53057 = (cljs.core.truth_(transact_data__49907__auto___53056)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null));
if(cljs.core.truth_(transact_data__49907__auto___53056)){
frontend.modules.outliner.core.delete_blocks_BANG_(blocks,cljs.core.PersistentArrayMap.EMPTY);
} else {
var _STAR_transaction_data_STAR__orig_val__51295_53058 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__51296_53059 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__51296_53059);

try{frontend.modules.outliner.core.delete_blocks_BANG_(blocks,cljs.core.PersistentArrayMap.EMPTY);

var r__49909__auto___53061 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto___53062 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto___53061], 0));
var tx_meta__49911__auto___53063 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto___53061));
var all_tx__49912__auto___53064 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto___53062,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___53057));
var opts_SHARP___49913__auto___53065 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto___53057,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto___53063], 0));
if(cljs.core.seq(all_tx__49912__auto___53064)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___53057))){
} else {
var result__49914__auto___53068 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto___53064,opts_SHARP___49913__auto___53065);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto___53064,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto___53063,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto___53068], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__51295_53058);
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
var transact_data__49907__auto___53071 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto___53072 = (cljs.core.truth_(transact_data__49907__auto___53071)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
if(cljs.core.truth_(transact_data__49907__auto___53071)){
var seq__51298_53073 = cljs.core.seq(col);
var chunk__51299_53074 = null;
var count__51300_53075 = (0);
var i__51301_53076 = (0);
while(true){
if((i__51301_53076 < count__51300_53075)){
var vec__51335_53077 = chunk__51299_53074.cljs$core$IIndexed$_nth$arity$2(null,i__51301_53076);
var block_id_53078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51335_53077,(0),null);
var key_53079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51335_53077,(1),null);
var value_53080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51335_53077,(2),null);
var block_id_53081__$1 = ((typeof block_id_53078 === 'string')?cljs.core.uuid(block_id_53078):block_id_53078);
var temp__5720__auto___53082__$1 = (function (){var G__51341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_53081__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51341) : frontend.db.entity.call(null,G__51341));
})();
if(cljs.core.truth_(temp__5720__auto___53082__$1)){
var block_53084 = temp__5720__auto___53082__$1;
var format_53085 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_53084);
var content_53086 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_53084);
var properties_53087 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_53084);
var properties_53088__$1 = (((value_53080 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_53087,key_53079):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_53087,key_53079,value_53080));
var content_53089__$1 = (((value_53080 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_53085,key_53079,content_53086):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_53085,content_53086,key_53079,value_53080));
var content_53090__$2 = frontend.util.property.remove_empty_properties(content_53089__$1);
var block_53091__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_53081__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_53088__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_53090__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_53091__$1);
} else {
}


var G__53097 = seq__51298_53073;
var G__53098 = chunk__51299_53074;
var G__53099 = count__51300_53075;
var G__53100 = (i__51301_53076 + (1));
seq__51298_53073 = G__53097;
chunk__51299_53074 = G__53098;
count__51300_53075 = G__53099;
i__51301_53076 = G__53100;
continue;
} else {
var temp__5720__auto___53101__$1 = cljs.core.seq(seq__51298_53073);
if(temp__5720__auto___53101__$1){
var seq__51298_53102__$1 = temp__5720__auto___53101__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51298_53102__$1)){
var c__5565__auto___53103 = cljs.core.chunk_first(seq__51298_53102__$1);
var G__53105 = cljs.core.chunk_rest(seq__51298_53102__$1);
var G__53106 = c__5565__auto___53103;
var G__53107 = cljs.core.count(c__5565__auto___53103);
var G__53108 = (0);
seq__51298_53073 = G__53105;
chunk__51299_53074 = G__53106;
count__51300_53075 = G__53107;
i__51301_53076 = G__53108;
continue;
} else {
var vec__51346_53109 = cljs.core.first(seq__51298_53102__$1);
var block_id_53110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51346_53109,(0),null);
var key_53111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51346_53109,(1),null);
var value_53112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51346_53109,(2),null);
var block_id_53113__$1 = ((typeof block_id_53110 === 'string')?cljs.core.uuid(block_id_53110):block_id_53110);
var temp__5720__auto___53114__$2 = (function (){var G__51350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_53113__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51350) : frontend.db.entity.call(null,G__51350));
})();
if(cljs.core.truth_(temp__5720__auto___53114__$2)){
var block_53116 = temp__5720__auto___53114__$2;
var format_53117 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_53116);
var content_53118 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_53116);
var properties_53119 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_53116);
var properties_53120__$1 = (((value_53112 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_53119,key_53111):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_53119,key_53111,value_53112));
var content_53121__$1 = (((value_53112 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_53117,key_53111,content_53118):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_53117,content_53118,key_53111,value_53112));
var content_53122__$2 = frontend.util.property.remove_empty_properties(content_53121__$1);
var block_53123__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_53113__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_53120__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_53122__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_53123__$1);
} else {
}


var G__53127 = cljs.core.next(seq__51298_53102__$1);
var G__53128 = null;
var G__53129 = (0);
var G__53130 = (0);
seq__51298_53073 = G__53127;
chunk__51299_53074 = G__53128;
count__51300_53075 = G__53129;
i__51301_53076 = G__53130;
continue;
}
} else {
}
}
break;
}
} else {
var _STAR_transaction_data_STAR__orig_val__51356_53132 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__51357_53133 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__51357_53133);

try{var seq__51358_53134 = cljs.core.seq(col);
var chunk__51359_53135 = null;
var count__51360_53136 = (0);
var i__51361_53137 = (0);
while(true){
if((i__51361_53137 < count__51360_53136)){
var vec__51378_53138 = chunk__51359_53135.cljs$core$IIndexed$_nth$arity$2(null,i__51361_53137);
var block_id_53139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51378_53138,(0),null);
var key_53140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51378_53138,(1),null);
var value_53141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51378_53138,(2),null);
var block_id_53142__$1 = ((typeof block_id_53139 === 'string')?cljs.core.uuid(block_id_53139):block_id_53139);
var temp__5720__auto___53143__$1 = (function (){var G__51381 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_53142__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51381) : frontend.db.entity.call(null,G__51381));
})();
if(cljs.core.truth_(temp__5720__auto___53143__$1)){
var block_53144 = temp__5720__auto___53143__$1;
var format_53145 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_53144);
var content_53146 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_53144);
var properties_53147 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_53144);
var properties_53148__$1 = (((value_53141 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_53147,key_53140):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_53147,key_53140,value_53141));
var content_53149__$1 = (((value_53141 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_53145,key_53140,content_53146):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_53145,content_53146,key_53140,value_53141));
var content_53150__$2 = frontend.util.property.remove_empty_properties(content_53149__$1);
var block_53151__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_53142__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_53148__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_53150__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_53151__$1);
} else {
}


var G__53171 = seq__51358_53134;
var G__53172 = chunk__51359_53135;
var G__53173 = count__51360_53136;
var G__53174 = (i__51361_53137 + (1));
seq__51358_53134 = G__53171;
chunk__51359_53135 = G__53172;
count__51360_53136 = G__53173;
i__51361_53137 = G__53174;
continue;
} else {
var temp__5720__auto___53175__$1 = cljs.core.seq(seq__51358_53134);
if(temp__5720__auto___53175__$1){
var seq__51358_53176__$1 = temp__5720__auto___53175__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51358_53176__$1)){
var c__5565__auto___53177 = cljs.core.chunk_first(seq__51358_53176__$1);
var G__53180 = cljs.core.chunk_rest(seq__51358_53176__$1);
var G__53181 = c__5565__auto___53177;
var G__53182 = cljs.core.count(c__5565__auto___53177);
var G__53183 = (0);
seq__51358_53134 = G__53180;
chunk__51359_53135 = G__53181;
count__51360_53136 = G__53182;
i__51361_53137 = G__53183;
continue;
} else {
var vec__51394_53185 = cljs.core.first(seq__51358_53176__$1);
var block_id_53186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51394_53185,(0),null);
var key_53187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51394_53185,(1),null);
var value_53188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51394_53185,(2),null);
var block_id_53189__$1 = ((typeof block_id_53186 === 'string')?cljs.core.uuid(block_id_53186):block_id_53186);
var temp__5720__auto___53190__$2 = (function (){var G__51400 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_53189__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51400) : frontend.db.entity.call(null,G__51400));
})();
if(cljs.core.truth_(temp__5720__auto___53190__$2)){
var block_53192 = temp__5720__auto___53190__$2;
var format_53193 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_53192);
var content_53194 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_53192);
var properties_53195 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_53192);
var properties_53196__$1 = (((value_53188 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_53195,key_53187):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_53195,key_53187,value_53188));
var content_53197__$1 = (((value_53188 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_53193,key_53187,content_53194):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_53193,content_53194,key_53187,value_53188));
var content_53198__$2 = frontend.util.property.remove_empty_properties(content_53197__$1);
var block_53199__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_53189__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_53196__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_53198__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_53199__$1);
} else {
}


var G__53204 = cljs.core.next(seq__51358_53176__$1);
var G__53205 = null;
var G__53206 = (0);
var G__53207 = (0);
seq__51358_53134 = G__53204;
chunk__51359_53135 = G__53205;
count__51360_53136 = G__53206;
i__51361_53137 = G__53207;
continue;
}
} else {
}
}
break;
}

var r__49909__auto___53208 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto___53209 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto___53208], 0));
var tx_meta__49911__auto___53210 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto___53208));
var all_tx__49912__auto___53211 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto___53209,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___53072));
var opts_SHARP___49913__auto___53212 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto___53072,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto___53210], 0));
if(cljs.core.seq(all_tx__49912__auto___53211)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___53072))){
} else {
var result__49914__auto___53215 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto___53211,opts_SHARP___49913__auto___53212);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto___53211,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto___53210,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto___53215], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__51356_53132);
}}

var block_id = cljs.core.ffirst(col);
var block_id__$1 = ((typeof block_id === 'string')?cljs.core.uuid(block_id):block_id);
var input_pos = (function (){var or__5043__auto__ = frontend.state.get_edit_pos();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var temp__5720__auto__ = (function (){var G__51408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51408) : frontend.db.entity.call(null,G__51408));
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
var temp__5720__auto__ = (function (){var G__51409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51409) : frontend.db.pull.call(null,G__51409));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var map__51410 = block;
var map__51410__$1 = cljs.core.__destructure_map(map__51410);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51410__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var content__$1 = (function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_edit_content();
}
})();
var new_content = logseq.graph_parser.text.add_timestamp(logseq.graph_parser.text.remove_timestamp(content__$1,key__$2),key__$2,value__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content__$1,new_content)){
var input_id = frontend.state.get_edit_input_id();
if(cljs.core.truth_((function (){var and__5041__auto__ = input_id;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(input_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id__$1));
} else {
return and__5041__auto__;
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
var block = (function (){var G__51415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51415) : frontend.db.entity.call(null,G__51415));
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
var G__51418 = arguments.length;
switch (G__51418) {
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
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__51416_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51416_SHARP_);
}));
}));

(frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,tap_clipboard){
frontend.handler.editor.set_blocks_id_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null));

return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1((tap_clipboard.cljs$core$IFn$_invoke$arity$1 ? tap_clipboard.cljs$core$IFn$_invoke$arity$1(block_id) : tap_clipboard.call(null,block_id)));
}));

(frontend.handler.editor.copy_block_ref_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.select_block_BANG_ = (function frontend$handler$editor$select_block_BANG_(block_uuid){
return frontend.handler.block.select_block_BANG_(block_uuid);
});
frontend.handler.editor.compose_copied_blocks_contents = (function frontend$handler$editor$compose_copied_blocks_contents(repo,block_ids){
var blocks = frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_ids));
var top_level_block_uuids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.modules.outliner.core.get_top_level_blocks(blocks));
return frontend.handler.export$.export_blocks_as_markdown(repo,top_level_block_uuids,frontend.state.get_export_block_text_indent_style(),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,frontend.state.get_export_block_text_remove_options()));
});
frontend.handler.editor.copy_selection_blocks = (function frontend$handler$editor$copy_selection_blocks(html_QMARK_){
var temp__5720__auto__ = cljs.core.seq(frontend.state.get_selection_blocks());
if(temp__5720__auto__){
var blocks = temp__5720__auto__;
var repo = frontend.state.get_current_repo();
var ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__51432_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__51432_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks));
var content = frontend.handler.editor.compose_copied_blocks_contents(repo,ids);
var block = (function (){var G__51443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ids)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51443) : frontend.db.entity.call(null,G__51443));
})();
if(cljs.core.truth_(block)){
var html_53258 = frontend.handler.export$.export_blocks_as_html(repo,ids);
frontend.handler.common.copy_to_clipboard_without_id_property_BANG_(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),content,(cljs.core.truth_(html_QMARK_)?html_53258:null));

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
var blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51446_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__51446_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
var level = dommy.core.attr(p1__51446_SHARP_,"level");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.uuid(id),new cljs.core.Keyword(null,"level","level",1290497552),(level | (0))], null);
} else {
return null;
}
}),selected_blocks)));
var first_block = cljs.core.first(blocks);
var first_root_level_index = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51454){
var vec__51456 = p__51454;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51456,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51456,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block),(1));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,blocks)));
var root_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(first_block));
var adjusted_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,p__51460){
var map__51461 = p__51460;
var map__51461__$1 = cljs.core.__destructure_map(map__51461);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"level","level",1290497552),(((index < first_root_level_index))?(((level < cljs.core.deref(root_level)))?(function (){
cljs.core.reset_BANG_(root_level,level);

return (1);
})()
:((level - cljs.core.deref(root_level)) + (1))):level)], null);
}),blocks);
var block = (function (){var G__51462 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(first_block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51462) : frontend.db.pull.call(null,G__51462));
})();
var copy_str = (function (){var G__51463 = adjusted_blocks;
var G__51463__$1 = (((G__51463 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51464){
var map__51466 = p__51464;
var map__51466__$1 = cljs.core.__destructure_map(map__51466);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51466__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51466__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var pred__51468 = cljs.core._EQ_;
var expr__51469 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_((pred__51468.cljs$core$IFn$_invoke$arity$2 ? pred__51468.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),expr__51469) : pred__51468.call(null,new cljs.core.Keyword(null,"org","org",1495985),expr__51469)))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic([clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"*"))," ((%s))"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
if(cljs.core.truth_((pred__51468.cljs$core$IFn$_invoke$arity$2 ? pred__51468.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),expr__51469) : pred__51468.call(null,new cljs.core.Keyword(null,"markdown","markdown",1227225089),expr__51469)))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic([clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((level - (1)),"\t")),"- ((%s))"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__51469)].join('')));
}
}
}),G__51463));
if((G__51463__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",G__51463__$1);
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
var ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51471_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__51471_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks)));
var ids_str = (function (){var G__51473 = ids;
var G__51473__$1 = (((G__51473 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed ((%s))}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}),G__51473));
if((G__51473__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",G__51473__$1);
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
var block_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51475_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__51475_SHARP_,"blockid");
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
var G__51477 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
if((G__51477 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__51477,page_id);
}
}),blocks__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.modules.outliner.core.get_top_level_blocks(blocks_STAR_));
} else {
return null;
}
});
frontend.handler.editor.cut_selection_blocks = (function frontend$handler$editor$cut_selection_blocks(copy_QMARK_){
if(cljs.core.truth_(copy_QMARK_)){
frontend.handler.editor.copy_selection_blocks(true);
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
var block_uuids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51478_SHARP_){
return cljs.core.uuid(dommy.core.attr(p1__51478_SHARP_,"blockid"));
}),dom_blocks));
var lookup_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_uuids);
var blocks__$1 = (function (){var G__51479 = repo;
var G__51480 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__51481 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__51479,G__51480,G__51481) : frontend.db.pull_many.call(null,G__51479,G__51480,G__51481));
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
var args__5772__auto__ = [];
var len__5766__auto___53289 = arguments.length;
var i__5767__auto___53290 = (0);
while(true){
if((i__5767__auto___53290 < len__5766__auto___53289)){
args__5772__auto__.push((arguments[i__5767__auto___53290]));

var G__53291 = (i__5767__auto___53290 + (1));
i__5767__auto___53290 = G__53291;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return frontend.handler.editor.extract_nearest_link_from_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(frontend.handler.editor.extract_nearest_link_from_text.cljs$core$IFn$_invoke$arity$variadic = (function (text,pos,additional_patterns){
var page_pattern = /\[\[([^\]]+)]]/;
var block_pattern = /\(\(([^\)]+)\)\)/;
var tag_pattern = /#\S+/;
var page_matches = frontend.util.re_pos(page_pattern,text);
var block_matches = frontend.util.re_pos(block_pattern,text);
var tag_matches = frontend.util.re_pos(tag_pattern,text);
var additional_matches = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__51482_SHARP_){
return frontend.util.re_pos(p1__51482_SHARP_,text);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([additional_patterns], 0));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(page_matches,block_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_matches,additional_matches], 0)));
var vec__51490 = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p__51493){
var vec__51494 = p__51493;
var start_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51494,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51494,(1),null);
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
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51490,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51490,(1),null);
if(cljs.core.truth_(match)){
if(cljs.core.truth_(cljs.core.some((function (p1__51486_SHARP_){
return cljs.core.re_find(p1__51486_SHARP_,match);
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
(frontend.handler.editor.extract_nearest_link_from_text.cljs$lang$applyTo = (function (seq51487){
var G__51488 = cljs.core.first(seq51487);
var seq51487__$1 = cljs.core.next(seq51487);
var G__51489 = cljs.core.first(seq51487__$1);
var seq51487__$2 = cljs.core.next(seq51487__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51488,G__51489,seq51487__$2);
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
var block_QMARK_ = frontend.util.uuid_string_QMARK_(page_name);
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
var temp__5720__auto__ = (function (){var G__51511 = frontend.state.get_edit_block();
var G__51511__$1 = (((G__51511 == null))?null:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__51511));
var G__51511__$2 = (((G__51511__$1 == null))?null:(function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
})(G__51511__$1));
var G__51511__$3 = (((G__51511__$2 == null))?null:(frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51511__$2) : frontend.db.entity.call(null,G__51511__$2)));
if((G__51511__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__51511__$3);
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
var block_id = (function (){var and__5041__auto__ = typeof page === 'string';
if(and__5041__auto__){
return cljs.core.parse_uuid(page);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(block_id)){
var block_parent = (frontend.db.get_block_parent.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_parent.cljs$core$IFn$_invoke$arity$1(block_id) : frontend.db.get_block_parent.call(null,block_id));
var temp__5718__auto__ = (function (){var and__5041__auto__ = (new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block_parent) == null);
if(and__5041__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_parent);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(id);

return setTimeout((function (){
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null),new cljs.core.Keyword(null,"max","max",61366548),block_id);
}),(0));
} else {
var page_id = (function (){var G__51537 = (function (){var G__51538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51538) : frontend.db.entity.call(null,G__51538));
})();
var G__51537__$1 = (((G__51537 == null))?null:new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(G__51537));
if((G__51537__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__51537__$1);
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
var temp__5720__auto__ = (function (){var G__51560 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51560) : frontend.db.pull.call(null,G__51560));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var repo = frontend.state.get_current_repo();
var md_content = frontend.handler.editor.compose_copied_blocks_contents(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null));
var html = frontend.handler.export$.export_blocks_as_html(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null));
frontend.state.set_copied_full_blocks(md_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null));

frontend.handler.common.copy_to_clipboard_without_id_property_BANG_(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),md_content,html);

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
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return ((1) === cljs.core.count(frontend.state.get_selection_blocks()));
} else {
return and__5041__auto__;
}
})())){
var f = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed_skip);
var element = (function (){var G__51605 = cljs.core.first(frontend.state.get_selection_blocks());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51605) : f.call(null,G__51605));
})();
if(cljs.core.truth_(element)){
return frontend.state.conj_selection_block_BANG_(element,direction);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,frontend.state.get_selection_direction());
} else {
return and__5041__auto__;
}
})())){
var f = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed_skip);
var first_last = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?cljs.core.first:cljs.core.last);
var element = (function (){var G__51609 = (function (){var G__51610 = frontend.state.get_selection_blocks();
return (first_last.cljs$core$IFn$_invoke$arity$1 ? first_last.cljs$core$IFn$_invoke$arity$1(G__51610) : first_last.call(null,G__51610));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51609) : f.call(null,G__51609));
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
var G__51628 = arguments.length;
switch (G__51628) {
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

(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__51664,value){
var map__51666 = p__51664;
var map__51666__$1 = cljs.core.__destructure_map(map__51666);
var _state = map__51666__$1;
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51666__$1,new cljs.core.Keyword(null,"block","block",664686210));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51666__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__51667 = repo;
var G__51668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__51667,G__51668) : frontend.db.entity.call(null,G__51667,G__51668));
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
var G__51678 = arguments.length;
switch (G__51678) {
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

(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__51681){
var map__51682 = p__51681;
var map__51682__$1 = cljs.core.__destructure_map(map__51682);
var opts = map__51682__$1;
var force_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51682__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));
var skip_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51682__$1,new cljs.core.Keyword(null,"skip-properties?","skip-properties?",329398686));
var current_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51682__$1,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
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
var G__51689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51689) : frontend.db.pull.call(null,G__51689));
} else {
return null;
}
})();
var elem = (function (){var and__5041__auto__ = input_id;
if(cljs.core.truth_(and__5041__auto__)){
return goog.dom.getElement(input_id);
} else {
return and__5041__auto__;
}
})();
var db_content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(db_block);
var db_content_without_heading = (function (){var and__5041__auto__ = db_content;
if(cljs.core.truth_(and__5041__auto__)){
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$2(db_content,new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(db_block));
} else {
return and__5041__auto__;
}
})();
var value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))?new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(current_block):(function (){var and__5041__auto__ = elem;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.editor.goog$module$goog$object.get(elem,"value");
} else {
return and__5041__auto__;
}
})());
if(cljs.core.truth_(value)){
if(cljs.core.truth_(force_QMARK_)){
return frontend.handler.editor.save_block_aux_BANG_(db_block,value,opts);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = skip_properties_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = frontend.db.model.top_block_QMARK_(block);
if(and__5041__auto____$1){
if(cljs.core.truth_(elem)){
return frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([elem], 0));
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = value;
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = db_content_without_heading;
if(cljs.core.truth_(and__5041__auto____$2)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(db_content_without_heading),clojure.string.trim(value));
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
return frontend.handler.editor.save_block_aux_BANG_(db_block,value,opts);
} else {
return null;
}
}
}
} else {
return null;
}
}catch (e51687){if((e51687 instanceof Error)){
var error = e51687;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.editor",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-block-failed","save-block-failed",610684026),error,new cljs.core.Keyword(null,"line","line",212345235),1313], null)),null);
} else {
throw e51687;

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
frontend.handler.editor.insert_command_BANG_ = (function frontend$handler$editor$insert_command_BANG_(id,command_output,format,p__51700){
var map__51701 = p__51700;
var map__51701__$1 = cljs.core.__destructure_map(map__51701);
var option = map__51701__$1;
var restore_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51701__$1,new cljs.core.Keyword(null,"restore?","restore?",1172240305),true);
if(typeof command_output === 'string'){
frontend.commands.insert_BANG_(id,command_output,option);
} else {
if(cljs.core.vector_QMARK_(command_output)){
frontend.commands.handle_steps(command_output,format);
} else {
if(cljs.core.fn_QMARK_(command_output)){
var s_53428 = (command_output.cljs$core$IFn$_invoke$arity$0 ? command_output.cljs$core$IFn$_invoke$arity$0() : command_output.call(null));
frontend.commands.insert_BANG_(id,s_53428,option);
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
var pdf_QMARK_ = (function (){var and__5041__auto__ = url;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(clojure.string.lower_case(url),".pdf");
} else {
return and__5041__auto__;
}
})();
var G__51706 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__51706__$1 = (((G__51706 instanceof cljs.core.Keyword))?G__51706.fqn:null);
switch (G__51706__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic([(cljs.core.truth_((function (){var or__5043__auto__ = image_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.ensure_assets_dir_BANG_(frontend.state.get_current_repo()),(function (p__51707){
var vec__51708 = p__51707;
var repo_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51708,(0),null);
var assets_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51708,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$path$path.join(repo_dir,assets_dir,filename),(function (path){
return promesa.protocols._promise((cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?path:encodeURI(decodeURI(path))));
}));
}));
}));
});
frontend.handler.editor.save_assets_BANG_ = (function frontend$handler$editor$save_assets_BANG_(var_args){
var G__51714 = arguments.length;
switch (G__51714) {
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.ensure_assets_dir_BANG_(repo),(function (p__51719){
var vec__51720 = p__51719;
var repo_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51720,(0),null);
var assets_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51720,(1),null);
return promesa.protocols._promise(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$5(repo,repo_dir,assets_dir,files,(function (index,file_base){
var file_base__$1 = clojure.string.replace(clojure.string.replace(clojure.string.replace(file_base," ","_"),"%","_"),"/","_");
var file_name = [file_base__$1,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now()),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('');
return clojure.string.replace(file_name,/_+/,"_");
})));
}));
}));
}));

(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (repo,dir,path,files,gen_filename){
return promesa.core.all((function (){var iter__5520__auto__ = (function frontend$handler$editor$iter__51727(s__51728){
return (new cljs.core.LazySeq(null,(function (){
var s__51728__$1 = s__51728;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51728__$1);
if(temp__5720__auto__){
var s__51728__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51728__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__51728__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__51730 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__51729 = (0);
while(true){
if((i__51729 < size__5519__auto__)){
var vec__51734 = cljs.core._nth(c__5518__auto__,i__51729);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51734,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51734,(1),null);
cljs.core.chunk_append(b__51730,(function (){var file_name = (function (){var G__51742 = file.name;
return (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(G__51742) : frontend.util.node_path.basename.call(null,G__51742));
})();
var vec__51739 = (cljs.core.truth_(file_name)?(function (){var last_dot_index = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(file_name,".");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file_name,(0),last_dot_index),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(file_name,last_dot_index)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null));
var file_base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51739,(0),null);
var ext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51739,(1),null);
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((gen_filename.cljs$core$IFn$_invoke$arity$2 ? gen_filename.cljs$core$IFn$_invoke$arity$2(index,file_base) : gen_filename.call(null,index,file_base))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
var filename__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",filename].join('');
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var from = file.path;
var from__$1 = ((clojure.string.blank_QMARK_(from))?null:from);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.apis.copyFileToAssets(dir,filename__$1,from__$1),((function (i__51729,from,from__$1,file_name,vec__51739,file_base,ext,filename,filename__$1,vec__51734,index,file,c__5518__auto__,size__5519__auto__,b__51730,s__51728__$2,temp__5720__auto__){
return (function (p1__51712_SHARP_){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,((typeof p1__51712_SHARP_ === 'string')?(new File([],p1__51712_SHARP_)):file),frontend.util.node_path.join(dir,filename__$1)], null));
});})(i__51729,from,from__$1,file_name,vec__51739,file_base,ext,filename,filename__$1,vec__51734,index,file,c__5518__auto__,size__5519__auto__,b__51730,s__51728__$2,temp__5720__auto__))
);
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,dir,filename__$1,file.stream(),null),((function (i__51729,file_name,vec__51739,file_base,ext,filename,filename__$1,vec__51734,index,file,c__5518__auto__,size__5519__auto__,b__51730,s__51728__$2,temp__5720__auto__){
return (function (){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,file], null));
});})(i__51729,file_name,vec__51739,file_base,ext,filename,filename__$1,vec__51734,index,file,c__5518__auto__,size__5519__auto__,b__51730,s__51728__$2,temp__5720__auto__))
);
}
})());

var G__53520 = (i__51729 + (1));
i__51729 = G__53520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51730),frontend$handler$editor$iter__51727(cljs.core.chunk_rest(s__51728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51730),null);
}
} else {
var vec__51746 = cljs.core.first(s__51728__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51746,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51746,(1),null);
return cljs.core.cons((function (){var file_name = (function (){var G__51753 = file.name;
return (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(G__51753) : frontend.util.node_path.basename.call(null,G__51753));
})();
var vec__51750 = (cljs.core.truth_(file_name)?(function (){var last_dot_index = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(file_name,".");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file_name,(0),last_dot_index),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(file_name,last_dot_index)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null));
var file_base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51750,(0),null);
var ext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51750,(1),null);
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((gen_filename.cljs$core$IFn$_invoke$arity$2 ? gen_filename.cljs$core$IFn$_invoke$arity$2(index,file_base) : gen_filename.call(null,index,file_base))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
var filename__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",filename].join('');
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var from = file.path;
var from__$1 = ((clojure.string.blank_QMARK_(from))?null:from);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.apis.copyFileToAssets(dir,filename__$1,from__$1),((function (from,from__$1,file_name,vec__51750,file_base,ext,filename,filename__$1,vec__51746,index,file,s__51728__$2,temp__5720__auto__){
return (function (p1__51712_SHARP_){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,((typeof p1__51712_SHARP_ === 'string')?(new File([],p1__51712_SHARP_)):file),frontend.util.node_path.join(dir,filename__$1)], null));
});})(from,from__$1,file_name,vec__51750,file_base,ext,filename,filename__$1,vec__51746,index,file,s__51728__$2,temp__5720__auto__))
);
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,dir,filename__$1,file.stream(),null),((function (file_name,vec__51750,file_base,ext,filename,filename__$1,vec__51746,index,file,s__51728__$2,temp__5720__auto__){
return (function (){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,file], null));
});})(file_name,vec__51750,file_base,ext,filename,filename__$1,vec__51746,index,file,s__51728__$2,temp__5720__auto__))
);
}
})(),frontend$handler$editor$iter__51727(cljs.core.rest(s__51728__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,files));
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
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.mobile.util.convert_file_src([repo_dir,path__$1].join(''));
} else {
var handle_path = ["handle",repo_dir,path__$1].join('');
var cached_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.handler.editor._STAR_assets_url_cache),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(handle_path));
if(cljs.core.truth_(cached_url)){
return promesa.core.resolved(cached_url);
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_item(handle_path),(function (handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = handle;
if(cljs.core.truth_(and__5041__auto__)){
return handle.getFile();
} else {
return and__5041__auto__;
}
})(),(function (file){
return promesa.protocols._promise((cljs.core.truth_(file)?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
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
frontend.handler.editor.delete_asset_of_block_BANG_ = (function frontend$handler$editor$delete_asset_of_block_BANG_(p__51770){
var map__51771 = p__51770;
var map__51771__$1 = cljs.core.__destructure_map(map__51771);
var _opts = map__51771__$1;
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"full-text","full-text",1432444182));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var delete_local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"delete-local?","delete-local?",1716577572));
var block = frontend.db.model.query_block_by_uuid(block_id);
var _ = (function (){var or__5043__auto__ = block;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)," not exists"].join('');
}
})();
var text = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var content = clojure.string.replace(text,full_text,"");
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,block,content);

if(cljs.core.truth_((function (){var and__5041__auto__ = local_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return delete_local_QMARK_;
} else {
return and__5041__auto__;
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
var temp__5718__auto__ = (function (){var or__5043__auto__ = frontend.db.model.get_block_file_path(frontend.state.get_edit_block());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
var G__51784 = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var G__51785 = frontend.config.get_pages_directory();
var G__51786 = "_.md";
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(G__51784,G__51785,G__51786) : frontend.util.node_path.join.call(null,G__51784,G__51785,G__51786));
} else {
return and__5041__auto__;
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
var temp__5720__auto__ = (function (){var and__5041__auto__ = cljs.core.seq(res);
if(and__5041__auto__){
return cljs.core.first(res);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var vec__51787 = temp__5720__auto__;
var asset_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51787,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51787,(1),null);
var full_file_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51787,(2),null);
var image_QMARK_ = frontend.util.ext_of_image_QMARK_(asset_file_name);
return frontend.handler.editor.insert_command_BANG_(id,frontend.handler.editor.get_asset_file_link(format,frontend.handler.editor.resolve_relative_path((function (){var or__5043__auto__ = full_file_path;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var process__$1 = ((frontend.handler.editor.goog$module$goog$object.get(e,"loaded") / frontend.handler.editor.goog$module$goog$object.get(e,"total")) * (100));
cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_QMARK_,false);

return cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_process,process__$1);
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

var vec__51790 = frontend.commands.simple_replace_BANG_(input_id,value__$1,selected,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),((postfix).length),new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),(function (new_value,prefix_pos){
if((prefix_pos >= (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new_value,prefix_pos,(prefix_pos + (2))),(prefix_pos + (2))], null);
} else {
return null;
}
})], null));
var prefix__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51790,(0),null);
var _pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51790,(1),null);
var G__51793 = prefix__$1;
switch (G__51793) {
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
var editing_page = (function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
var temp__5720__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5720__auto__)){
var page_id = temp__5720__auto__;
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(page_id) : frontend.db.entity.call(null,page_id)));
} else {
return null;
}
} else {
return and__5041__auto__;
}
})();
var pages = frontend.search.page_search.cljs$core$IFn$_invoke$arity$2(q,(20));
if(cljs.core.truth_(editing_page)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(p) : frontend.util.page_name_sanity_lc.call(null,p)),editing_page);
}),pages);
} else {
return pages;
}
});
frontend.handler.editor.get_matched_blocks = (function frontend$handler$editor$get_matched_blocks(q,block_id){
var current_block = frontend.state.get_edit_block();
var block_parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),(function (){var G__51794 = frontend.state.get_current_repo();
var G__51795 = block_id;
var G__51796 = (99);
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3(G__51794,G__51795,G__51796) : frontend.db.get_block_parents.call(null,G__51794,G__51795,G__51796));
})()));
var current_and_parents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block))]),block_parents);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
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
try{var edit_content = (function (){var or__5043__auto__ = frontend.handler.editor.goog$module$goog$object.get(input,"value");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var pos = frontend.util.cursor.pos(input);
var last_slash_caret_pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.commands._STAR_slash_caret_pos));
var last_command = (function (){var and__5041__auto__ = last_slash_caret_pos;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,last_slash_caret_pos,pos);
} else {
return and__5041__auto__;
}
})();
if((pos > (0))){
var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),frontend.util.nth_safe(edit_content,(pos - (1))));
if(and__5041__auto__){
return cljs.core.deref(frontend.commands._STAR_initial_commands);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = last_command;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$1(last_command);
} else {
return and__5041__auto__;
}
}
} else {
return null;
}
}catch (e51797){if((e51797 instanceof Error)){
var e = e51797;
console.error(e);

return null;
} else {
throw e51797;

}
}});
frontend.handler.editor.get_matched_block_commands = (function frontend$handler$editor$get_matched_block_commands(input){
try{var edit_content = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = frontend.util.cursor.pos(input);
var last_command = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.commands._STAR_angle_bracket_caret_pos)),pos);
if((pos > (0))){
var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<",frontend.util.nth_safe(edit_content,(pos - (1))));
if(and__5041__auto__){
return frontend.commands.block_commands_map();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = last_command;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$2(last_command,frontend.commands.block_commands_map());
} else {
return and__5041__auto__;
}
}
} else {
return null;
}
}catch (e51798){if((e51798 instanceof Error)){
var _error = e51798;
return null;
} else {
throw e51798;

}
}});
frontend.handler.editor.auto_complete_QMARK_ = (function frontend$handler$editor$auto_complete_QMARK_(){
var or__5043__auto__ = cljs.core.deref(frontend.commands._STAR_show_commands);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.deref(frontend.commands._STAR_show_block_commands);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = cljs.core.deref(frontend.handler.editor._STAR_asset_uploading_QMARK_);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = frontend.state.get_editor_show_input();
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = frontend.state.get_editor_show_page_search_QMARK_();
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = frontend.state.get_editor_show_block_search_QMARK_();
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = frontend.state.get_editor_show_template_search_QMARK_();
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
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
var transact_data__49907__auto___53577 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto___53578 = (cljs.core.truth_(transact_data__49907__auto___53577)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null));
if(cljs.core.truth_(transact_data__49907__auto___53577)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.move_blocks_up_down_BANG_(blocks,up_QMARK_);
} else {
var _STAR_transaction_data_STAR__orig_val__51799_53581 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__51800_53582 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__51800_53582);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.move_blocks_up_down_BANG_(blocks,up_QMARK_);

var r__49909__auto___53584 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto___53585 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto___53584], 0));
var tx_meta__49911__auto___53586 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto___53584));
var all_tx__49912__auto___53587 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto___53585,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___53578));
var opts_SHARP___49913__auto___53588 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto___53578,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto___53586], 0));
if(cljs.core.seq(all_tx__49912__auto___53587)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___53578))){
} else {
var result__49914__auto___53590 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto___53587,opts_SHARP___49913__auto___53588);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto___53587,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto___53586,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto___53590], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__51799_53581);
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
var temp__5720__auto__ = (function (){var G__51801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),edit_block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51801) : frontend.db.pull.call(null,G__51801));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var blocks_53593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null);
move_nodes(blocks_53593);

var temp__5720__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto____$1)){
var input_id = temp__5720__auto____$1;
var temp__5720__auto____$2 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$2)){
var input = temp__5720__auto____$2;
input.focus();

return setTimeout((function (){
return frontend.util.scroll_editor_cursor(input);
}),(100));
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
var blocks = (function (){var G__51802 = frontend.state.get_current_repo();
var G__51803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__51804 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__51802,G__51803,G__51804) : frontend.db.pull_many.call(null,G__51802,G__51803,G__51804));
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
var G__51805 = repo;
var G__51806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__51807 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__51805,G__51806,G__51807) : frontend.db.pull_many.call(null,G__51805,G__51806,G__51807));
});
/**
 * `direction` = :left | :right.
 */
frontend.handler.editor.on_tab = (function frontend$handler$editor$on_tab(direction){
var blocks = frontend.handler.editor.get_selected_ordered_blocks();
if(cljs.core.seq(blocks)){
var transact_data__49907__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto__ = (cljs.core.truth_(transact_data__49907__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null));
if(cljs.core.truth_(transact_data__49907__auto__)){
return frontend.modules.outliner.core.indent_outdent_blocks_BANG_(blocks,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
var _STAR_transaction_data_STAR__orig_val__51808 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__51809 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__51809);

try{frontend.modules.outliner.core.indent_outdent_blocks_BANG_(blocks,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));

var r__49909__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto__], 0));
var tx_meta__49911__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto__));
var all_tx__49912__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__));
var opts_SHARP___49913__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto__], 0));
if(cljs.core.seq(all_tx__49912__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__))){
return null;
} else {
var result__49914__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto__,opts_SHARP___49913__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__51808);
}}
} else {
return null;
}
});
frontend.handler.editor.get_link = (function frontend$handler$editor$get_link(format,link,label){
var link__$1 = (function (){var or__5043__auto__ = link;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var label__$1 = (function (){var or__5043__auto__ = label;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var G__51810 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__51810__$1 = (((G__51810 instanceof cljs.core.Keyword))?G__51810.fqn:null);
switch (G__51810__$1) {
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
var link__$1 = (function (){var or__5043__auto__ = link;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var label__$1 = (function (){var or__5043__auto__ = label;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var G__51814 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__51814__$1 = (((G__51814 instanceof cljs.core.Keyword))?G__51814.fqn:null);
switch (G__51814__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("![%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label__$1,link__$1], 0));

break;
case "org":
return frontend.util.format("[[%s]]");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51814__$1)].join('')));

}
});
frontend.handler.editor.handle_command_input = (function frontend$handler$editor$handle_command_input(command,id,format,m){
var G__51815_53613 = command;
var G__51815_53614__$1 = (((G__51815_53613 instanceof cljs.core.Keyword))?G__51815_53613.fqn:null);
switch (G__51815_53614__$1) {
case "link":
var map__51816_53617 = m;
var map__51816_53618__$1 = cljs.core.__destructure_map(map__51816_53617);
var link_53619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51816_53618__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var label_53620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51816_53618__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(((clojure.string.blank_QMARK_(link_53619)) || (clojure.string.blank_QMARK_(label_53620)))){
} else {
frontend.handler.editor.insert_command_BANG_(id,frontend.handler.editor.get_link(format,link_53619,label_53620),format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0()),"link"].join('')], null));
}

break;
case "image-link":
var map__51817_53622 = m;
var map__51817_53623__$1 = cljs.core.__destructure_map(map__51817_53622);
var link_53624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51817_53623__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var label_53625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51817_53623__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if((!(clojure.string.blank_QMARK_(link_53624)))){
frontend.handler.editor.insert_command_BANG_(id,frontend.handler.editor.get_image_link(format,link_53624,label_53625),format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0()),"link"].join('')], null));
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
var edit_content = (function (){var or__5043__auto__ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var or__5043__auto__ = cljs.core.deref(frontend.handler.editor._STAR_selected_text);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
if(cljs.core.truth_((function (){var and__5041__auto__ = input;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (function (){var or__5043__auto__ = frontend.state.get_editor_show_page_search_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.state.get_editor_show_page_search_hashtag_QMARK_();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return frontend.state.get_editor_show_block_search_QMARK_();
}
}
})();
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not(frontend.handler.editor.wrapped_by_QMARK_(input,"[[","]]"));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.truth_(frontend.handler.editor.get_search_q())){
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = frontend.state.get_editor_last_pos();
var current_pos = frontend.util.cursor.pos(input);
var between = logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(value,(function (){var x__5131__auto__ = pos;
var y__5132__auto__ = current_pos;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})(),(function (){var x__5128__auto__ = pos;
var y__5129__auto__ = current_pos;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})());
if(cljs.core.truth_((function (){var and__5041__auto__ = between;
if(cljs.core.truth_(and__5041__auto__)){
return ((clojure.string.includes_QMARK_(between,"[")) || (((clojure.string.includes_QMARK_(between,"]")) || (((clojure.string.includes_QMARK_(between,"(")) || (clojure.string.includes_QMARK_(between,")")))))));
} else {
return and__5041__auto__;
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
var block = (function (){var G__51820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51820) : frontend.db.pull.call(null,G__51820));
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
var new_content = (cljs.core.truth_(content_update_fn)?(function (){var G__51821 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
return (content_update_fn.cljs$core$IFn$_invoke$arity$1 ? content_update_fn.cljs$core$IFn$_invoke$arity$1(G__51821) : content_update_fn.call(null,G__51821));
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

var last_block_SINGLEQUOTE_ = (function (){var G__51822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51822) : frontend.db.pull.call(null,G__51822));
})();
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(last_block_SINGLEQUOTE_,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_block_SINGLEQUOTE_));
} else {
return null;
}
}),(0));
});
frontend.handler.editor.paste_blocks = (function frontend$handler$editor$paste_blocks(blocks,p__51823){
var map__51824 = p__51823;
var map__51824__$1 = cljs.core.__destructure_map(map__51824);
var content_update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"content-update-fn","content-update-fn",132456615));
var exclude_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51824__$1,new cljs.core.Keyword(null,"exclude-properties","exclude-properties",1449787201),cljs.core.PersistentVector.EMPTY);
var target_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"target-block","target-block",348392017));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var editing_block = (function (){var temp__5720__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto__)){
var editing_block = temp__5720__auto__;
var G__51825 = (function (){var G__51826 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(editing_block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__51826) : frontend.db.pull.call(null,G__51826));
})();
if((G__51825 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51825,new cljs.core.Keyword("block","content","block/content",-161885195),frontend.state.get_edit_content());
}
} else {
return null;
}
})();
var target_block__$1 = (function (){var or__5043__auto__ = target_block;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return editing_block;
}
})();
var block = (function (){var G__51827 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51827) : frontend.db.entity.call(null,G__51827));
})();
var page = (cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))?block:(cljs.core.truth_(target_block__$1)?new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__51828 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51828) : frontend.db.entity.call(null,G__51828));
})()):null));
var target_block__$2 = (function (){var or__5043__auto__ = target_block__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return editing_block;
}
})();
var sibling_QMARK___$1 = (((!((sibling_QMARK_ == null))))?sibling_QMARK_:(cljs.core.truth_((function (){var G__51830 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block__$2);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__51830) : frontend.db.has_children_QMARK_.call(null,G__51830));
})())?false:true
));
var transact_data__49907__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto__ = (cljs.core.truth_(transact_data__49907__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
if(cljs.core.truth_(transact_data__49907__auto__)){
if(cljs.core.truth_(editing_block)){
frontend.modules.outliner.core.save_block_BANG_(editing_block);
} else {
}

if(cljs.core.truth_(target_block__$2)){
var format = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(target_block__$2);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var _STAR_transaction_data_STAR__orig_val__51831 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__51832 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__51832);

try{if(cljs.core.truth_(editing_block)){
frontend.modules.outliner.core.save_block_BANG_(editing_block);
} else {
}

if(cljs.core.truth_(target_block__$2)){
var format_53724 = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(target_block__$2);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var blocks_SINGLEQUOTE__53725 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(block__$1,page,exclude_properties,format_53724,content_update_fn);
}),blocks);
var result_53726 = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE__53725,target_block__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1], null));
frontend.handler.editor.edit_last_block_after_inserted_BANG_(result_53726);
} else {
}

var r__49909__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto__], 0));
var tx_meta__49911__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto__));
var all_tx__49912__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__));
var opts_SHARP___49913__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto__], 0));
if(cljs.core.seq(all_tx__49912__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__))){
return null;
} else {
var result__49914__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto__,opts_SHARP___49913__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__51831);
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
var blocks__$1 = logseq.graph_parser.block.with_parent_and_left(page_id,blocks);
return frontend.handler.editor.paste_blocks(blocks__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target-block","target-block",348392017),target_block,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_], null));
});
frontend.handler.editor.insert_template_BANG_ = (function frontend$handler$editor$insert_template_BANG_(var_args){
var G__51847 = arguments.length;
switch (G__51847) {
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

(frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (element_id,db_id,p__51852){
var map__51853 = p__51852;
var map__51853__$1 = cljs.core.__destructure_map(map__51853);
var opts = map__51853__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51853__$1,new cljs.core.Keyword(null,"target","target",253001721));
var temp__5720__auto__ = ((cljs.core.integer_QMARK_(db_id))?db_id:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_template_by_name(cljs.core.name(db_id))));
if(cljs.core.truth_(temp__5720__auto__)){
var db_id__$1 = temp__5720__auto__;
var repo = frontend.state.get_current_repo();
var target__$1 = (function (){var or__5043__auto__ = target;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var page = (cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))?block:(cljs.core.truth_(target__$1)?new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__51858 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51858) : frontend.db.entity.call(null,G__51858));
})()):null));
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(block__$1,page,exclude_properties,format,content_update_fn);
}),blocks__$1);
var sibling_QMARK_ = new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060).cljs$core$IFn$_invoke$arity$1(opts);
var sibling_QMARK__SINGLEQUOTE_ = (((!((sibling_QMARK_ == null))))?sibling_QMARK_:(cljs.core.truth_((function (){var G__51859 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target__$1);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__51859) : frontend.db.has_children_QMARK_.call(null,G__51859));
})())?false:true
));
var transact_data__49907__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto__ = (cljs.core.truth_(transact_data__49907__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
if(cljs.core.truth_(transact_data__49907__auto__)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var result = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE_,target__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__SINGLEQUOTE_));
return frontend.handler.editor.edit_last_block_after_inserted_BANG_(result);
} else {
var _STAR_transaction_data_STAR__orig_val__51864 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__51865 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__51865);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var result_53752 = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE_,target__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__SINGLEQUOTE_));
frontend.handler.editor.edit_last_block_after_inserted_BANG_(result_53752);

var r__49909__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto__], 0));
var tx_meta__49911__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto__));
var all_tx__49912__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__));
var opts_SHARP___49913__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto__], 0));
if(cljs.core.seq(all_tx__49912__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__))){
return null;
} else {
var result__49914__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto__,opts_SHARP___49913__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__51864);
}}
} else {
return null;
}
}));

(frontend.handler.editor.insert_template_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.editor.template_on_chosen_handler = (function frontend$handler$editor$template_on_chosen_handler(element_id){
return (function (p__51866,_click_QMARK_){
var vec__51867 = p__51866;
var _template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51867,(0),null);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51867,(1),null);
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3(element_id,db_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null));
});
});
frontend.handler.editor.parent_is_page_QMARK_ = (function frontend$handler$editor$parent_is_page_QMARK_(p__51872){
var map__51873 = p__51872;
var map__51873__$1 = cljs.core.__destructure_map(map__51873);
var node = map__51873__$1;
var map__51874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51873__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51874__$1 = cljs.core.__destructure_map(map__51874);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51874__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51874__$1,new cljs.core.Keyword("block","page","block/page",822314108));
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
var transact_data__49907__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto__ = (cljs.core.truth_(transact_data__49907__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null));
if(cljs.core.truth_(transact_data__49907__auto__)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.modules.outliner.core.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(parent_node),true);
} else {
var _STAR_transaction_data_STAR__orig_val__51877 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__51878 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__51878);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(parent_node),true);

var r__49909__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto__], 0));
var tx_meta__49911__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto__));
var all_tx__49912__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__));
var opts_SHARP___49913__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto__], 0));
if(cljs.core.seq(all_tx__49912__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto__))){
return null;
} else {
var result__49914__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto__,opts_SHARP___49913__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__51877);
}}
}
});
frontend.handler.editor.last_top_level_child_QMARK_ = (function frontend$handler$editor$last_top_level_child_QMARK_(p__51882,current_node){
var map__51883 = p__51882;
var map__51883__$1 = cljs.core.__destructure_map(map__51883);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51883__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
var temp__5720__auto__ = (function (){var temp__5718__auto__ = cljs.core.parse_uuid(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
if(cljs.core.truth_(temp__5718__auto__)){
var id_SINGLEQUOTE_ = temp__5718__auto__;
var G__51885 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id_SINGLEQUOTE_], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51885) : frontend.db.entity.call(null,G__51885));
} else {
var G__51886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(id) : frontend.util.page_name_sanity_lc.call(null,id))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__51886) : frontend.db.entity.call(null,G__51886));
}
})();
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
frontend.handler.editor.insert = (function frontend$handler$editor$insert(var_args){
var G__51914 = arguments.length;
switch (G__51914) {
case 1:
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1 = (function (insertion){
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2(insertion,false);
}));

(frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2 = (function (insertion,auto_complete_enabled_QMARK_){
if(cljs.core.truth_((function (){var or__5043__auto__ = auto_complete_enabled_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(frontend.handler.editor.auto_complete_QMARK_());
}
})())){
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var value = input.value;
var s1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selected_start);
var s2 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selected_end);
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),[s1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(insertion),s2].join(''));

return frontend.util.cursor.move_cursor_to(input,(selected_start + cljs.core.count(insertion)));
} else {
return null;
}
}));

(frontend.handler.editor.insert.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.keydown_new_line = (function frontend$handler$editor$keydown_new_line(){
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1("\n");
});
frontend.handler.editor.dwim_in_properties = (function frontend$handler$editor$dwim_in_properties(state){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var map__51925 = frontend.handler.editor.get_state();
var map__51925__$1 = cljs.core.__destructure_map(map__51925);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51925__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var content = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(frontend.handler.editor.get_state()));
var property_key = new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(frontend.util.thingatpt.property_key_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)));
var org_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985));
var move_to_pos = ((org_QMARK_)?(2):(3));
if(org_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = property_key;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(property_key,"");
} else {
return and__5041__auto__;
}
})())){
var G__51929 = property_key;
switch (G__51929) {
case "PROPERTIES":
frontend.util.cursor.move_cursor_to_line_end(input);

frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1("\n:: ");

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
if(cljs.core.truth_((function (){var and__5041__auto__ = property_key;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_key,"");
} else {
return and__5041__auto__;
}
})())){
var G__51933_53788 = input;
var G__51934_53789 = frontend.util.cursor.line_beginning_pos(input);
var G__51935_53790 = (frontend.util.cursor.line_end_pos(input) + (1));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(G__51933_53788,G__51934_53789,G__51935_53790) : frontend.handler.editor.delete_and_update.call(null,G__51933_53788,G__51934_53789,G__51935_53790));

frontend.util.property.goto_properties_end(format,input);

return frontend.util.cursor.move_cursor_to_line_end(input);
} else {
frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1("\n:: ");

return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2(input,move_to_pos);

}
}
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1("\n");
}
} else {
return null;
}
}
});
frontend.handler.editor.toggle_list_checkbox = (function frontend$handler$editor$toggle_list_checkbox(p__51941,old_item_content,new_item_content){
var map__51942 = p__51941;
var map__51942__$1 = cljs.core.__destructure_map(map__51942);
var block = map__51942__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51942__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var new_content = clojure.string.replace_first(content,old_item_content,new_item_content);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
});
frontend.handler.editor.dwim_in_list = (function frontend$handler$editor$dwim_in_list(){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var map__51952 = frontend.handler.editor.get_state();
var map__51952__$1 = cljs.core.__destructure_map(map__51952);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51952__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var map__51957 = item;
var map__51957__$1 = cljs.core.__destructure_map(map__51957);
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51957__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51957__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var bullet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51957__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51957__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655));
var ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51957__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51957__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var next_bullet = (cljs.core.truth_(ordered)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((bullet + (1))),"."].join(''):bullet);
var checkbox__$1 = (cljs.core.truth_(checkbox)?"[ ] ":null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(full_content),((cljs.core.truth_(ordered)?(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(bullet)).length) + (2)):(2)) + (cljs.core.truth_(checkbox__$1)?((checkbox__$1).length):null)))) && (clojure.string.includes_QMARK_(input.value,"\n")))){
var G__51968 = input;
var G__51969 = frontend.util.cursor.line_beginning_pos(input);
var G__51970 = frontend.util.cursor.line_end_pos(input);
return (frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(G__51968,G__51969,G__51970) : frontend.handler.editor.delete_and_update.call(null,G__51968,G__51969,G__51970));
} else {
var start_pos = frontend.util.get_selection_start(input);
var value = input.value;
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start_pos);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,start_pos);
var cursor_in_item_content_QMARK_ = (function (){var and__5041__auto__ = cljs.core.re_find(/^(\d+){1}\./,cljs.core.last(clojure.string.split_lines(before)));
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(cljs.core.first(clojure.string.split_lines(after)))));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(cursor_in_item_content_QMARK_)){
} else {
frontend.util.cursor.move_cursor_to_line_end(input);

frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_bullet)," ",checkbox__$1].join(''));
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
var map__51998 = frontend.handler.editor.get_state();
var map__51998__$1 = cljs.core.__destructure_map(map__51998);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51998__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var format = (function (){var or__5043__auto__ = (function (){var G__51999 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__51999) : frontend.db.get_page_format.call(null,G__51999));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var new_unordered_bullet = (function (){var G__52001 = format;
var G__52001__$1 = (((G__52001 instanceof cljs.core.Keyword))?G__52001.fqn:null);
switch (G__52001__$1) {
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
var temp__5718__auto___53811 = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto___53811)){
var item_53812 = temp__5718__auto___53811;
var map__52003_53813 = item_53812;
var map__52003_53814__$1 = cljs.core.__destructure_map(map__52003_53813);
var ordered_53815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52003_53814__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var list_beginning_pos_53816 = frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
var list_end_pos_53817 = frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
var list_53818 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,list_beginning_pos_53816,list_end_pos_53817);
var items_53819 = clojure.string.split_lines(list_53818);
var splitter_reg_53820 = (cljs.core.truth_(ordered_53815)?/[\d]*\.\s*/:/[-\*]{1}\s*/);
var items_without_bullet_53821 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51985_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$3(p1__51985_SHARP_,splitter_reg_53820,(2)));
}),items_53819));
var new_list_53822 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(cljs.core.truth_(ordered_53815)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51987_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_unordered_bullet)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51987_SHARP_)].join('');
}),items_without_bullet_53821):cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__51990_SHARP_,p2__51993_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__51990_SHARP_ + (1))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51993_SHARP_)].join('');
}),items_without_bullet_53821)));
var index_of_current_item_53823 = (items_without_bullet_53821.indexOf(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(item_53812),splitter_reg_53820,(2)))) + (1));
var numbers_length_53824 = ((clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__51997_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__51997_SHARP_ + (1))),". "].join('');
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(items_without_bullet_53821,(0),index_of_current_item_53823)))).length);
var pos_diff_53825 = (numbers_length_53824 - ((2) * index_of_current_item_53823));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,list_beginning_pos_53816,list_end_pos_53817) : frontend.handler.editor.delete_and_update.call(null,input,list_beginning_pos_53816,list_end_pos_53817));

frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(new_list_53822);

cljs.core.reset_BANG_(pos,(cljs.core.truth_(ordered_53815)?(current_pos - pos_diff_53825):(current_pos + pos_diff_53825)));
} else {
var prev_item_53830 = frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
frontend.util.cursor.move_cursor_down(input);

frontend.util.cursor.move_cursor_to_line_beginning(input);

if(cljs.core.truth_(prev_item_53830)){
var map__52008_53831 = prev_item_53830;
var map__52008_53832__$1 = cljs.core.__destructure_map(map__52008_53831);
var bullet_53833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52008_53832__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var ordered_53834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52008_53832__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var current_bullet_53835 = (cljs.core.truth_(ordered_53834)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((bullet_53833 + (1))),"."].join(''):bullet_53833);
frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_bullet_53835)," "].join(''));

cljs.core.reset_BANG_(pos,((current_pos + cljs.core.count(current_bullet_53835)) + (1)));
} else {
frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_unordered_bullet)," "].join(''));

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
var map__52030 = frontend.handler.editor.get_state();
var map__52030__$1 = cljs.core.__destructure_map(map__52030);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52030__$1,new cljs.core.Keyword(null,"block","block",664686210));
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
var map__52054 = selection;
var map__52054__$1 = cljs.core.__destructure_map(map__52054);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52054__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52054__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var selection__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52054__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core.truth_(selection__$1)){
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,selection_start,selection_end) : frontend.handler.editor.delete_and_update.call(null,input,selection_start,selection_end));

return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selection__$1], 0)));
} else {
var temp__5718__auto__ = frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto__)){
var embed_ref = temp__5718__auto__;
var map__52057 = embed_ref;
var map__52057__$1 = cljs.core.__destructure_map(map__52057);
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52057__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52057__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52057__$1,new cljs.core.Keyword(null,"end","end",-268185958));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),cljs.core.count(raw_content))){
return page_ref_fn("[[]]",(2));
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(raw_content);
}
} else {
var temp__5718__auto____$1 = frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto____$1)){
var page_ref = temp__5718__auto____$1;
var map__52060 = page_ref;
var map__52060__$1 = cljs.core.__destructure_map(map__52060);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52060__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52060__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52060__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52060__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_content,"")){
return page_ref_fn("{{embed [[]]}}",(4));
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([full_content], 0)));
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
var map__52068 = frontend.handler.editor.get_state();
var map__52068__$1 = cljs.core.__destructure_map(map__52068);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword(null,"block","block",664686210));
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
var map__52071 = embed_ref;
var map__52071__$1 = cljs.core.__destructure_map(map__52071);
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52071__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52071__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52071__$1,new cljs.core.Keyword(null,"end","end",-268185958));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),cljs.core.count(raw_content))){
return block_ref_fn("(())",(2));
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(raw_content);
}
} else {
var temp__5718__auto____$1 = frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto____$1)){
var page_ref = temp__5718__auto____$1;
var map__52074 = page_ref;
var map__52074__$1 = cljs.core.__destructure_map(map__52074);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52074__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52074__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52074__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52074__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_content,"")){
return block_ref_fn("{{embed (())}}",(4));
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([full_content], 0)));
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
var map__52076 = frontend.handler.editor.get_state();
var map__52076__$1 = cljs.core.__destructure_map(map__52076);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52076__$1,new cljs.core.Keyword(null,"block","block",664686210));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52076__$1,new cljs.core.Keyword(null,"config","config",994861415));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var content = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = frontend.util.cursor.pos(input);
var current_node = frontend.modules.outliner.core.block(block);
var has_right_QMARK_ = frontend.modules.outliner.tree.satisfied_inode_QMARK_(frontend.modules.outliner.tree._get_right(current_node));
var thing_at_point = (function (){var or__5043__auto__ = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"admonition&src?","admonition&src?",1506556328)))?frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"markup?","markup?",-1222732996)))?frontend.util.thingatpt.markup_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853)))?frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"page-ref?","page-ref?",677685143)))?frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"properties?","properties?",3428414)))?frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
if(cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"list?","list?",-1642026156)))){
var and__5041__auto__ = cljs.core.not(frontend.util.cursor.beginning_of_line_QMARK_(input));
if(and__5041__auto__){
return frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
} else {
return and__5041__auto__;
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
var G__52077 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(thing_at_point);
switch (G__52077) {
case "markup":
var right_bound = new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(thing_at_point);
return frontend.util.cursor.move_cursor_to(input,(clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(content,right_bound,pos) + cljs.core.count(right_bound)));

break;
case "admonition-block":
return frontend.handler.editor.keydown_new_line();

break;
case "source-block":
frontend.handler.editor.keydown_new_line();

var G__52078 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(thing_at_point);
var G__52078__$1 = (((G__52078 instanceof cljs.core.Keyword))?G__52078.fqn:null);
switch (G__52078__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52077)].join('')));

}
} else {
if(((clojure.string.blank_QMARK_(content)) && ((((!(has_right_QMARK_))) && (cljs.core.not(frontend.handler.editor.last_top_level_child_QMARK_(config,current_node))))))){
return frontend.handler.editor.outdent_on_enter(current_node);
} else {
if(cljs.core.truth_(goog.DEBUG)){
var k__30266__auto__ = "Insert block";
console.time(k__30266__auto__);

var res__30267__auto__ = (function (){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(state);
})()
;
console.timeEnd(k__30266__auto__);

return res__30267__auto__;
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
var f = (function (){var G__52079 = direction;
var G__52079__$1 = (((G__52079 instanceof cljs.core.Keyword))?G__52079.fqn:null);
switch (G__52079__$1) {
case "up":
return cljs.core.last;

break;
case "down":
return cljs.core.first;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52079__$1)].join('')));

}
})();
var block = (function (){var G__52080 = frontend.util.get_blocks_noncollapse();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52080) : f.call(null,G__52080));
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
var f = (function (){var G__52081 = direction;
var G__52081__$1 = (((G__52081 instanceof cljs.core.Keyword))?G__52081.fqn:null);
switch (G__52081__$1) {
case "up":
return frontend.util.get_prev_block_non_collapsed;

break;
case "down":
return frontend.util.get_next_block_non_collapsed;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52081__$1)].join('')));

}
})();
var sibling_block = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(selected) : f.call(null,selected));
if(cljs.core.truth_((function (){var and__5041__auto__ = sibling_block;
if(cljs.core.truth_(and__5041__auto__)){
return dommy.core.attr(sibling_block,"blockid");
} else {
return and__5041__auto__;
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
var f = (function (){var G__52083 = direction;
var G__52083__$1 = (((G__52083 instanceof cljs.core.Keyword))?G__52083.fqn:null);
switch (G__52083__$1) {
case "up":
return frontend.util.get_prev_block_non_collapsed;

break;
case "down":
return frontend.util.get_next_block_non_collapsed;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52083__$1)].join('')));

}
})();
var sibling_block = (function (){var G__52084 = goog.dom.getElement(frontend.state.get_editing_block_dom_id());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52084) : f.call(null,G__52084));
})();
var map__52082 = frontend.state.get_edit_block();
var map__52082__$1 = cljs.core.__destructure_map(map__52082);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52082__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52082__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52082__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
if(cljs.core.truth_(sibling_block)){
var temp__5720__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5720__auto__)){
var sibling_block_id = temp__5720__auto__;
var value_53908 = frontend.state.get_edit_content();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.clean_content_BANG_(format,content),clojure.string.trim(value_53908))){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,uuid,value_53908);
} else {
}

var new_id = clojure.string.replace(frontend.handler.editor.goog$module$goog$object.get(sibling_block,"id"),"ls-block","edit-block");
var new_uuid = cljs.core.uuid(sibling_block_id);
var block = (function (){var G__52085 = repo;
var G__52086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__52087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_uuid], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__52085,G__52086,G__52087) : frontend.db.pull.call(null,G__52085,G__52086,G__52087));
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
var map__52088 = frontend.state.get_edit_block();
var map__52088__$1 = cljs.core.__destructure_map(map__52088);
var block = map__52088__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52088__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52088__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var id = frontend.state.get_edit_input_id();
var repo = frontend.state.get_current_repo();
var f = ((up_QMARK_)?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed);
var sibling_block = (function (){var G__52089 = goog.dom.getElement(frontend.state.get_editing_block_dom_id());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52089) : f.call(null,G__52089));
})();
if(cljs.core.truth_(sibling_block)){
var temp__5720__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5720__auto__)){
var sibling_block_id = temp__5720__auto__;
var content_53921 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var value_53922 = frontend.state.get_edit_content();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.clean_content_BANG_(format,content_53921),clojure.string.trim(value_53922))){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,uuid,value_53922);
} else {
}

var block__$1 = (function (){var G__52090 = repo;
var G__52091 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__52092 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(sibling_block_id)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__52090,G__52091,G__52092) : frontend.db.pull.call(null,G__52090,G__52091,G__52092));
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
if(cljs.core.truth_((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = left_QMARK_;
if(and__5041__auto__){
return frontend.util.cursor.start_QMARK_(input);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = right_QMARK_;
if(and__5041__auto__){
return frontend.util.cursor.end_QMARK_(input);
} else {
return and__5041__auto__;
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
var current_block_has_children_QMARK_ = (function (){var G__52097 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__52097) : frontend.db.has_children_QMARK_.call(null,G__52097));
})();
var collapsed_QMARK_ = frontend.util.collapsed_QMARK_(current_block);
var first_child = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.tree._get_down(frontend.modules.outliner.core.block(current_block)));
var next_block = (cljs.core.truth_((function (){var or__5043__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(current_block_has_children_QMARK_);
}
})())?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(right):first_child);
if(cljs.core.truth_((function (){var and__5041__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = right;
if(cljs.core.truth_(and__5041__auto____$1)){
var G__52098 = frontend.modules.outliner.tree._get_id(right);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__52098) : frontend.db.has_children_QMARK_.call(null,G__52098));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(collapsed_QMARK_);
if(and__5041__auto__){
var and__5041__auto____$1 = first_child;
if(cljs.core.truth_(and__5041__auto____$1)){
var G__52099 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_child);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__52099) : frontend.db.has_children_QMARK_.call(null,G__52099));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
if(cljs.core.truth_((function (){var and__5041__auto__ = end_QMARK_;
if(and__5041__auto__){
return current_block;
} else {
return and__5041__auto__;
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
var deleted = (function (){var and__5041__auto__ = (current_pos > (0));
if(and__5041__auto__){
return frontend.util.nth_safe(value,(current_pos - (1)));
} else {
return and__5041__auto__;
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

if((function (){var and__5041__auto__ = ((top_block_QMARK_)?clojure.string.blank_QMARK_(value):true);
if(and__5041__auto__){
return (!(root_block_QMARK_));
} else {
return and__5041__auto__;
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
if(cljs.core.truth_((function (){var and__5041__auto__ = deleted;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.contains_QMARK_(cljs.core.set(cljs.core.keys(frontend.handler.editor.delete_map)),deleted)) && ((((cljs.core.count(value) >= (current_pos + (1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,current_pos),cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.delete_map,deleted))))));
} else {
return and__5041__auto__;
}
})())){
frontend.util.stop(e);

frontend.commands.delete_pair_BANG_(id);

if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"[");
if(and__5041__auto__){
return frontend.state.get_editor_show_page_search_QMARK_();
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_editor_show_page_search_BANG_(false);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"(");
if(and__5041__auto__){
return frontend.state.get_editor_show_block_search_QMARK_();
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_editor_show_block_search_BANG_(false);
} else {
return null;

}
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"#");
if(and__5041__auto__){
return frontend.state.get_editor_show_page_search_hashtag_QMARK_();
} else {
return and__5041__auto__;
}
})())){
frontend.state.set_editor_show_page_search_hashtag_BANG_(false);

return frontend.handler.editor.delete_and_update(input,(current_pos - (1)),current_pos);
} else {
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return frontend.handler.editor.delete_and_update(input,frontend.util.safe_dec_current_pos_from_end(input.value,current_pos),current_pos);
}

}
}
}
}
}
}
});
frontend.handler.editor.indent_outdent = (function frontend$handler$editor$indent_outdent(indent_QMARK_){
frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747));

var pos = (function (){var G__52106 = frontend.state.get_input();
if((G__52106 == null)){
return null;
} else {
return frontend.util.cursor.pos(G__52106);
}
})();
var map__52105 = frontend.handler.editor.get_state();
var map__52105__$1 = cljs.core.__destructure_map(map__52105);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52105__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
frontend.state.set_editor_last_pos_BANG_(pos);

var transact_data__49907__auto___53968 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto___53969 = (cljs.core.truth_(transact_data__49907__auto___53968)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null));
if(cljs.core.truth_(transact_data__49907__auto___53968)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),indent_QMARK_);
} else {
var _STAR_transaction_data_STAR__orig_val__52107_53970 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__52108_53971 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__52108_53971);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),indent_QMARK_);

var r__49909__auto___53972 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto___53973 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto___53972], 0));
var tx_meta__49911__auto___53974 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto___53972));
var all_tx__49912__auto___53975 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto___53973,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___53969));
var opts_SHARP___49913__auto___53976 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto___53969,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto___53974], 0));
if(cljs.core.seq(all_tx__49912__auto___53975)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___53969))){
} else {
var result__49914__auto___53977 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto___53975,opts_SHARP___49913__auto___53976);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto___53975,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto___53974,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto___53977], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__52107_53970);
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
var hashtag_QMARK_ = (function (){var or__5043__auto__ = frontend.handler.editor.surround_by_QMARK_(input,"#"," ");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.handler.editor.surround_by_QMARK_(input,"#",new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"#");
}
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2(e,true);
if(cljs.core.truth_(and__5041__auto__)){
return (((!(hashtag_QMARK_))) && (cljs.core.not(frontend.state.get_editor_show_page_search_hashtag_QMARK_())));
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = ctrlKey;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return metaKey;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Backspace")) && ((pos === (0))));
} else {
return and__5041__auto__;
}
})())){
frontend.util.stop(e);

var block = frontend.state.get_edit_block();
var top_block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
var root_block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","container","block/container",510671002).cljs$core$IFn$_invoke$arity$1(block),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
var repo = frontend.state.get_current_repo();
if((function (){var and__5041__auto__ = ((top_block_QMARK_)?clojure.string.blank_QMARK_(value):true);
if(and__5041__auto__){
return (!(root_block_QMARK_));
} else {
return and__5041__auto__;
}
})()){
return frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$2(repo,false);
} else {
return null;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"#")) && ((((pos > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",frontend.util.nth_safe(value,(pos - (1))))))))){
return frontend.state.set_editor_show_page_search_hashtag_BANG_(false);
} else {
if(((cljs.core.contains_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(frontend.handler.editor.reversed_autopair_map)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["`",null], null), null)),key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_current_input_char(input),key)))){
frontend.util.stop(e);

return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1(input);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = (frontend.handler.editor.autopair_when_selected.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.autopair_when_selected.cljs$core$IFn$_invoke$arity$1(key) : frontend.handler.editor.autopair_when_selected.call(null,key));
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.blank_QMARK_(frontend.util.get_selected_text());
} else {
return and__5041__auto__;
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
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sym);
if(and__5041__auto__){
var and__5041__auto____$1 = (cljs.core.count(value) >= (1));
if(and__5041__auto____$1){
var and__5041__auto____$2 = (pos > (0));
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(pos - (1))),sym);
if(and__5041__auto____$3){
if((cljs.core.count(value) > pos)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,pos),sym);
} else {
return true;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})()){
return frontend.commands.simple_insert_BANG_(input_id,"$$",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null));
} else {
if((function (){var sym = "^";
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sym);
if(and__5041__auto__){
var and__5041__auto____$1 = (cljs.core.count(value) >= (1));
if(and__5041__auto____$1){
var and__5041__auto____$2 = (pos > (0));
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(pos - (1))),sym);
if(and__5041__auto____$3){
if((cljs.core.count(value) > pos)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,pos),sym);
} else {
return true;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var non_enter_processed_QMARK_ = (function (){var and__5041__auto__ = is_processed_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(code,frontend.util.keycode.enter_code);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.state.get_editor_show_input();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return non_enter_processed_QMARK_;
}
})())){
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null], null), null),k)));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core.not(new cljs.core.Keyword("editor","show-page-search?","editor/show-page-search?",653141106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core.not(new cljs.core.Keyword("editor","show-page-search-hashtag?","editor/show-page-search-hashtag?",1934478614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
if(and__5041__auto____$2){
return frontend.handler.editor.wrapped_by_QMARK_(input,"[[","]]");
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
var orig_pos_54021 = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var value_54022__$1 = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var square_pos_54023 = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value_54022__$1,(0),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(orig_pos_54021)),"[[");
var pos_54025 = (square_pos_54023 + (2));
var __54026 = frontend.state.set_editor_last_pos_BANG_(pos_54025);
var pos_54027__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(orig_pos_54021,new cljs.core.Keyword(null,"pos","pos",-864607220),pos_54025);
var command_step_54028 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",frontend.util.nth_safe(value_54022__$1,(square_pos_54023 - (1)))))?new cljs.core.Keyword("editor","search-page-hashtag","editor/search-page-hashtag",2082188401):new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812));
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_step_54028], null));

cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,pos_54027__$1);
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
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c," ");
if(and__5041__auto__){
var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,((current_pos - (1)) - (1))),"#");
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.not(frontend.state.get_editor_show_page_search_QMARK_());
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$1 = frontend.state.get_editor_show_page_search_QMARK_();
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,current_pos),"]");
} else {
return and__5041__auto____$1;
}
}
}
} else {
return and__5041__auto__;
}
})())){
frontend.state.set_editor_show_page_search_hashtag_BANG_(false);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.deref(frontend.commands._STAR_show_commands);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0());
} else {
return and__5041__auto__;
}
})())){
var matched_commands_54059 = frontend.handler.editor.get_matched_commands(input);
if(cljs.core.seq(matched_commands_54059)){
cljs.core.reset_BANG_(frontend.commands._STAR_show_commands,true);

cljs.core.reset_BANG_(frontend.commands._STAR_matched_commands,matched_commands_54059);
} else {
cljs.core.reset_BANG_(frontend.commands._STAR_show_commands,false);
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.deref(frontend.commands._STAR_show_block_commands);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(188));
} else {
return and__5041__auto__;
}
})())){
var matched_block_commands_54062 = frontend.handler.editor.get_matched_block_commands(input);
if(cljs.core.seq(matched_block_commands_54062)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(9))){
if(cljs.core.truth_(cljs.core.deref(frontend.commands._STAR_show_block_commands))){
frontend.util.stop(e);

frontend.handler.editor.insert_command_BANG_(input_id,cljs.core.last(cljs.core.first(matched_block_commands_54062)),format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.angle_bracket], null));
} else {
}
} else {
cljs.core.reset_BANG_(frontend.commands._STAR_matched_block_commands,matched_block_commands_54062);

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

if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"Shift");
if(or__5043__auto__){
return or__5043__auto__;
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
frontend.util.scroll_editor_cursor(input);

return frontend.handler.editor.close_autocomplete_if_outside(input);
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
var input = goog.dom.getElement(id);
frontend.handler.editor.edit_box_on_change_BANG_(e,block,id);

return frontend.util.scroll_editor_cursor(input);
}
});
});
frontend.handler.editor.paste_text_parseable = (function frontend$handler$editor$paste_text_parseable(format,text){
var temp__5720__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto__)){
var editing_block = temp__5720__auto__;
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(editing_block));
var blocks = frontend.format.block.extract_blocks(frontend.format.mldoc.__GT_edn(text,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)),text,true,format);
var blocks_SINGLEQUOTE_ = logseq.graph_parser.block.with_parent_and_left(page_id,blocks);
return frontend.handler.editor.paste_blocks(blocks_SINGLEQUOTE_,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
frontend.handler.editor.paste_segmented_text = (function frontend$handler$editor$paste_segmented_text(format,text){
var paragraphs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/(?:\r?\n){2,}/);
var updated_paragraphs = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return (function (p__$1){
if(cljs.core.truth_(frontend.util.safe_re_find(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985)))?/\s*\*+\s+/:/\s*-\s+/),p__$1))){
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
var blocks = (function (){var G__52114 = repo;
var G__52115 = cljs.core.first(ids__$1);
return (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(G__52114,G__52115) : frontend.db.get_block_and_children.call(null,G__52114,G__52115));
})();
var result__$1 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,blocks));
var G__54068 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),result__$1)),cljs.core.rest(ids__$1));
var G__54069 = result__$1;
ids__$1 = G__54068;
result = G__54069;
continue;
} else {
return result;
}
break;
}
});
frontend.handler.editor.wrap_macro_url = (function frontend$handler$editor$wrap_macro_url(url){
if(cljs.core.boolean$(logseq.graph_parser.text.get_matched_video(url))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{video %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0));
} else {
if(clojure.string.includes_QMARK_(url,"twitter.com")){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{twitter %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("No macro is available for %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));

}
}
});
frontend.handler.editor.paste_copied_blocks_or_text = (function frontend$handler$editor$paste_copied_blocks_or_text(text,e){
var copied_blocks = frontend.state.get_copied_blocks();
var copied_block_ids = new cljs.core.Keyword("copy","block-ids","copy/block-ids",560775165).cljs$core$IFn$_invoke$arity$1(copied_blocks);
var copied_graph = new cljs.core.Keyword("copy","graph","copy/graph",1554769580).cljs$core$IFn$_invoke$arity$1(copied_blocks);
var input = frontend.state.get_input();
frontend.util.stop(e);

if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(copied_graph,frontend.state.get_current_repo());
if(and__5041__auto__){
var and__5041__auto____$1 = ((cljs.core.seq(copied_block_ids)) || (cljs.core.seq(new cljs.core.Keyword("copy","full-blocks","copy/full-blocks",-1316121892).cljs$core$IFn$_invoke$arity$1(copied_blocks))));
if(and__5041__auto____$1){
var and__5041__auto____$2 = text;
if(cljs.core.truth_(and__5041__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(clojure.string.trim(text),"\r",""),clojure.string.replace(clojure.string.trim((function (){var or__5043__auto__ = new cljs.core.Keyword("copy","content","copy/content",12765453).cljs$core$IFn$_invoke$arity$1(copied_blocks);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})()),"\r",""));
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
var blocks = (function (){var or__5043__auto__ = new cljs.core.Keyword("copy","full-blocks","copy/full-blocks",-1316121892).cljs$core$IFn$_invoke$arity$1(copied_blocks);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.editor.get_all_blocks_by_ids(frontend.state.get_current_repo(),copied_block_ids);
}
})();
if(cljs.core.seq(blocks)){
frontend.state.set_copied_full_blocks_BANG_(blocks);

return frontend.handler.editor.paste_blocks(blocks,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = logseq.graph_parser.util.url_QMARK_(text);
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(frontend.util.get_selected_text())));
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1(text);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = logseq.graph_parser.text.block_ref_QMARK_(text);
if(and__5041__auto__){
return frontend.handler.editor.wrapped_by_QMARK_(input,"((","))");
} else {
return and__5041__auto__;
}
})())){
return frontend.commands.simple_insert_BANG_(frontend.state.get_edit_input_id(),logseq.graph_parser.text.get_block_ref(text),null);
} else {
var format = (function (){var or__5043__auto__ = (function (){var G__52118 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__52118) : frontend.db.get_page_format.call(null,G__52118));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})();
var text__$1 = clojure.string.trim(text);
var format__$1 = format;
var ocr_52119 = (frontend.util.safe_re_find(/^\s*(?:[-+*]|#+)\s+/m,text__$1) == null);
var ocr_52120 = (frontend.util.safe_re_find(/^\s*\*+\s+/m,text__$1) == null);
var ocr_52121 = (frontend.util.safe_re_find(/(?:\r?\n){2,}/,text__$1) == null);
try{if(cljs.core.keyword_identical_QMARK_(format__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089))){
try{if((ocr_52119 === false)){
return frontend.handler.editor.paste_text_parseable(format__$1,text__$1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52163){if((e52163 instanceof Error)){
var e__45401__auto__ = e52163;
if((e__45401__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45401__auto__;
}
} else {
throw e52163;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52136){if((e52136 instanceof Error)){
var e__45401__auto__ = e52136;
if((e__45401__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(format__$1,new cljs.core.Keyword(null,"org","org",1495985))){
try{if((ocr_52120 === false)){
return frontend.handler.editor.paste_text_parseable(format__$1,text__$1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52162){if((e52162 instanceof Error)){
var e__45401__auto____$1 = e52162;
if((e__45401__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45401__auto____$1;
}
} else {
throw e52162;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52137){if((e52137 instanceof Error)){
var e__45401__auto____$1 = e52137;
if((e__45401__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(format__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089))){
try{if((ocr_52119 === true)){
try{if((ocr_52121 === false)){
return frontend.handler.editor.paste_segmented_text(format__$1,text__$1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52144){if((e52144 instanceof Error)){
var e__45401__auto____$2 = e52144;
if((e__45401__auto____$2 === cljs.core.match.backtrack)){
try{if((ocr_52121 === true)){
return frontend.commands.simple_insert_BANG_(frontend.state.get_edit_input_id(),text__$1,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52145){if((e52145 instanceof Error)){
var e__45401__auto____$3 = e52145;
if((e__45401__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45401__auto____$3;
}
} else {
throw e52145;

}
}} else {
throw e__45401__auto____$2;
}
} else {
throw e52144;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52143){if((e52143 instanceof Error)){
var e__45401__auto____$2 = e52143;
if((e__45401__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45401__auto____$2;
}
} else {
throw e52143;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52138){if((e52138 instanceof Error)){
var e__45401__auto____$2 = e52138;
if((e__45401__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(format__$1,new cljs.core.Keyword(null,"org","org",1495985))){
try{if((ocr_52120 === true)){
try{if((ocr_52121 === false)){
return frontend.handler.editor.paste_segmented_text(format__$1,text__$1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52141){if((e52141 instanceof Error)){
var e__45401__auto____$3 = e52141;
if((e__45401__auto____$3 === cljs.core.match.backtrack)){
try{if((ocr_52121 === true)){
return frontend.commands.simple_insert_BANG_(frontend.state.get_edit_input_id(),text__$1,null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52142){if((e52142 instanceof Error)){
var e__45401__auto____$4 = e52142;
if((e__45401__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45401__auto____$4;
}
} else {
throw e52142;

}
}} else {
throw e__45401__auto____$3;
}
} else {
throw e52141;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52140){if((e52140 instanceof Error)){
var e__45401__auto____$3 = e52140;
if((e__45401__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45401__auto____$3;
}
} else {
throw e52140;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52139){if((e52139 instanceof Error)){
var e__45401__auto____$3 = e52139;
if((e__45401__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(format__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_52119)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_52120)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_52121)].join('')));
} else {
throw e__45401__auto____$3;
}
} else {
throw e52139;

}
}} else {
throw e__45401__auto____$2;
}
} else {
throw e52138;

}
}} else {
throw e__45401__auto____$1;
}
} else {
throw e52137;

}
}} else {
throw e__45401__auto__;
}
} else {
throw e52136;

}
}
}
}
}
});
frontend.handler.editor.paste_text_in_one_block_at_point = (function frontend$handler$editor$paste_text_in_one_block_at_point(){
return module$frontend$utils.getClipText((function (clipboard_data){
var temp__5720__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5720__auto__)){
var _ = temp__5720__auto__;
var data = (cljs.core.truth_(logseq.graph_parser.util.url_QMARK_(clipboard_data))?frontend.handler.editor.wrap_macro_url(clipboard_data):clipboard_data);
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2(data,true);
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

var clipboard_data = frontend.handler.editor.goog$module$goog$object.get(e,"clipboardData");
var html = clipboard_data.getData("text/html");
var edit_block = frontend.state.get_edit_block();
var format = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(edit_block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})();
var initial_text = clipboard_data.getData("text");
var text = (((!(clojure.string.blank_QMARK_(html))))?frontend.extensions.html_parser.convert(format,html):initial_text);
var input = frontend.state.get_input();
if((!(clojure.string.blank_QMARK_(text)))){
if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
})())){
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
var _handled = (function (){var clipboard_data__$1 = frontend.handler.editor.goog$module$goog$object.get(e,"clipboardData");
var files = clipboard_data__$1.files;
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
return frontend.handler.editor.copy_selection_blocks(true);
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
frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__52195_SHARP_){
return ["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52195_SHARP_),"))"].join('');
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
 * shortcut copy action:
 *   * when in selection mode, copy selected blocks
 *   * when in edit mode with text selected, copy selected text as normal
 */
frontend.handler.editor.shortcut_copy_text = (function frontend$handler$editor$shortcut_copy_text(_e){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
return frontend.handler.editor.copy_selection_blocks(false);
} else {
return document.execCommand("copy");

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
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return ((1) === cljs.core.count(frontend.state.get_selection_blocks()));
} else {
return and__5041__auto__;
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
var vec__52211 = (function (){var G__52215 = frontend.util.get_selection_direction(input);
switch (G__52215) {
case "backward":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_end,selected_start], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_start,selected_end], null);

}
})();
var anchor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52211,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52211,(1),null);
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
var temp__5720__auto__ = (function (){var G__52237 = frontend.state.get_selection_blocks();
var G__52237__$1 = (((G__52237 == null))?null:cljs.core.first(G__52237));
var G__52237__$2 = (((G__52237__$1 == null))?null:dommy.core.attr(G__52237__$1,"blockid"));
if((G__52237__$2 == null)){
return null;
} else {
return cljs.core.uuid(G__52237__$2);
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
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return ((1) === cljs.core.count(frontend.state.get_selection_blocks()));
} else {
return and__5041__auto__;
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
var and__5041__auto__ = clojure.string.includes_QMARK_(content,"\n");
if(and__5041__auto__){
if(cljs.core.truth_(semantic_QMARK_)){
var ast = frontend.format.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var first_elem_type = cljs.core.first(cljs.core.ffirst(ast));
return frontend.format.mldoc.block_with_title_QMARK_(first_elem_type);
} else {
return true;
}
} else {
return and__5041__auto__;
}
});
frontend.handler.editor.collapsable_QMARK_ = (function frontend$handler$editor$collapsable_QMARK_(var_args){
var G__52279 = arguments.length;
switch (G__52279) {
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

(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,p__52280){
var map__52281 = p__52280;
var map__52281__$1 = cljs.core.__destructure_map(map__52281);
var semantic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52281__$1,new cljs.core.Keyword(null,"semantic?","semantic?",-1258468577),false);
if(cljs.core.truth_(block_id)){
var temp__5718__auto__ = frontend.db.model.query_block_by_uuid(block_id);
if(cljs.core.truth_(temp__5718__auto__)){
var block = temp__5718__auto__;
var and__5041__auto__ = cljs.core.not(frontend.util.collapsed_QMARK_(block));
if(and__5041__auto__){
var or__5043__auto__ = frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(block_id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto____$1 = new cljs.core.Keyword("outliner","block-title-collapse-enabled?","outliner/block-title-collapse-enabled?",1547538161).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(and__5041__auto____$1)){
return frontend.handler.editor.block_with_title_QMARK_(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),semantic_QMARK_);
} else {
return and__5041__auto____$1;
}
}
} else {
return and__5041__auto__;
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
frontend.handler.editor.all_blocks_with_level = (function frontend$handler$editor$all_blocks_with_level(p__52300){
var map__52301 = p__52300;
var map__52301__$1 = cljs.core.__destructure_map(map__52301);
var collapse_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52301__$1,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),false);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52301__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),false);
var incremental_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52301__$1,new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),true);
var root_block = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52301__$1,new cljs.core.Keyword(null,"root-block","root-block",-645043721),null);
var temp__5720__auto__ = (function (){var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.date.today();
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
var block_id = (function (){var or__5043__auto__ = root_block;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.parse_uuid(page);
}
})();
var blocks = (cljs.core.truth_(block_id)?(function (){var G__52307 = frontend.state.get_current_repo();
var G__52308 = block_id;
return (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(G__52307,G__52308) : frontend.db.get_block_and_children.call(null,G__52307,G__52308));
})():(frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page) : frontend.db.get_page_blocks_no_cache.call(null,page)));
var root_block__$1 = (function (){var or__5043__auto__ = block_id;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return root_block;
}
})();
if(cljs.core.truth_(incremental_QMARK_)){
var blocks__$1 = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks,(function (){var or__5043__auto__ = block_id;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page;
}
})());
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var G__52317 = blocks__$1;
var G__52317__$1 = (cljs.core.truth_(root_block__$1)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function frontend$handler$editor$all_blocks_with_level_$_find(root){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root_block__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root))){
return root;
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend$handler$editor$all_blocks_with_level_$_find,new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$2(root,cljs.core.PersistentVector.EMPTY)));
}
}),G__52317):G__52317);
var G__52317__$2 = (cljs.core.truth_(collapse_QMARK_)?clojure.walk.postwalk((function (b){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(b);
if(and__5041__auto__){
var and__5041__auto____$1 = frontend.util.collapsed_QMARK_(b);
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(root_block__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.PersistentVector.EMPTY);
} else {
return b;
}
}),G__52317__$1):G__52317__$1);
var G__52317__$3 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
return cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword("block","children","block/children",-1040716209),x);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__52317__$2], 0))
;
var G__52317__$4 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
}),G__52317__$3):G__52317__$3);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("block","children","block/children",-1040716209));
}),G__52317__$4);

})());
} else {
var G__52334 = blocks;
var G__52334__$1 = (cljs.core.truth_(collapse_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.util.collapsed_QMARK_,G__52334):G__52334);
var G__52334__$2 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
}),G__52334__$1):G__52334__$1);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__52334__$2);

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
var transact_data__49907__auto___54201 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__49908__auto___54202 = (cljs.core.truth_(transact_data__49907__auto___54201)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367)], null));
if(cljs.core.truth_(transact_data__49907__auto___54201)){
var seq__52357_54206 = cljs.core.seq(block_ids__$1);
var chunk__52358_54207 = null;
var count__52359_54208 = (0);
var i__52360_54209 = (0);
while(true){
if((i__52360_54209 < count__52359_54208)){
var block_id_54211 = chunk__52358_54207.cljs$core$IIndexed$_nth$arity$2(null,i__52360_54209);
var temp__5720__auto___54212 = (function (){var G__52367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_54211], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52367) : frontend.db.entity.call(null,G__52367));
})();
if(cljs.core.truth_(temp__5720__auto___54212)){
var block_54214 = temp__5720__auto___54212;
var current_value_54215 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_54214);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_54215,value__$1)){
} else {
var block_54216__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_54211,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_54216__$1);
}
} else {
}


var G__54218 = seq__52357_54206;
var G__54219 = chunk__52358_54207;
var G__54220 = count__52359_54208;
var G__54221 = (i__52360_54209 + (1));
seq__52357_54206 = G__54218;
chunk__52358_54207 = G__54219;
count__52359_54208 = G__54220;
i__52360_54209 = G__54221;
continue;
} else {
var temp__5720__auto___54222 = cljs.core.seq(seq__52357_54206);
if(temp__5720__auto___54222){
var seq__52357_54223__$1 = temp__5720__auto___54222;
if(cljs.core.chunked_seq_QMARK_(seq__52357_54223__$1)){
var c__5565__auto___54224 = cljs.core.chunk_first(seq__52357_54223__$1);
var G__54225 = cljs.core.chunk_rest(seq__52357_54223__$1);
var G__54226 = c__5565__auto___54224;
var G__54227 = cljs.core.count(c__5565__auto___54224);
var G__54228 = (0);
seq__52357_54206 = G__54225;
chunk__52358_54207 = G__54226;
count__52359_54208 = G__54227;
i__52360_54209 = G__54228;
continue;
} else {
var block_id_54229 = cljs.core.first(seq__52357_54223__$1);
var temp__5720__auto___54231__$1 = (function (){var G__52372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_54229], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52372) : frontend.db.entity.call(null,G__52372));
})();
if(cljs.core.truth_(temp__5720__auto___54231__$1)){
var block_54232 = temp__5720__auto___54231__$1;
var current_value_54233 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_54232);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_54233,value__$1)){
} else {
var block_54235__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_54229,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_54235__$1);
}
} else {
}


var G__54237 = cljs.core.next(seq__52357_54223__$1);
var G__54238 = null;
var G__54239 = (0);
var G__54240 = (0);
seq__52357_54206 = G__54237;
chunk__52358_54207 = G__54238;
count__52359_54208 = G__54239;
i__52360_54209 = G__54240;
continue;
}
} else {
}
}
break;
}
} else {
var _STAR_transaction_data_STAR__orig_val__52373_54242 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__52374_54243 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__52374_54243);

try{var seq__52376_54245 = cljs.core.seq(block_ids__$1);
var chunk__52377_54246 = null;
var count__52378_54247 = (0);
var i__52379_54248 = (0);
while(true){
if((i__52379_54248 < count__52378_54247)){
var block_id_54250 = chunk__52377_54246.cljs$core$IIndexed$_nth$arity$2(null,i__52379_54248);
var temp__5720__auto___54251 = (function (){var G__52386 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_54250], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52386) : frontend.db.entity.call(null,G__52386));
})();
if(cljs.core.truth_(temp__5720__auto___54251)){
var block_54254 = temp__5720__auto___54251;
var current_value_54255 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_54254);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_54255,value__$1)){
} else {
var block_54256__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_54250,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_54256__$1);
}
} else {
}


var G__54258 = seq__52376_54245;
var G__54259 = chunk__52377_54246;
var G__54260 = count__52378_54247;
var G__54261 = (i__52379_54248 + (1));
seq__52376_54245 = G__54258;
chunk__52377_54246 = G__54259;
count__52378_54247 = G__54260;
i__52379_54248 = G__54261;
continue;
} else {
var temp__5720__auto___54262 = cljs.core.seq(seq__52376_54245);
if(temp__5720__auto___54262){
var seq__52376_54265__$1 = temp__5720__auto___54262;
if(cljs.core.chunked_seq_QMARK_(seq__52376_54265__$1)){
var c__5565__auto___54266 = cljs.core.chunk_first(seq__52376_54265__$1);
var G__54267 = cljs.core.chunk_rest(seq__52376_54265__$1);
var G__54268 = c__5565__auto___54266;
var G__54269 = cljs.core.count(c__5565__auto___54266);
var G__54270 = (0);
seq__52376_54245 = G__54267;
chunk__52377_54246 = G__54268;
count__52378_54247 = G__54269;
i__52379_54248 = G__54270;
continue;
} else {
var block_id_54272 = cljs.core.first(seq__52376_54265__$1);
var temp__5720__auto___54273__$1 = (function (){var G__52403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_54272], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52403) : frontend.db.entity.call(null,G__52403));
})();
if(cljs.core.truth_(temp__5720__auto___54273__$1)){
var block_54276 = temp__5720__auto___54273__$1;
var current_value_54277 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_54276);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_54277,value__$1)){
} else {
var block_54278__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_54272,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_54278__$1);
}
} else {
}


var G__54279 = cljs.core.next(seq__52376_54265__$1);
var G__54280 = null;
var G__54281 = (0);
var G__54282 = (0);
seq__52376_54245 = G__54279;
chunk__52377_54246 = G__54280;
count__52378_54247 = G__54281;
i__52379_54248 = G__54282;
continue;
}
} else {
}
}
break;
}

var r__49909__auto___54284 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__49910__auto___54285 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__49909__auto___54284], 0));
var tx_meta__49911__auto___54286 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__49909__auto___54284));
var all_tx__49912__auto___54287 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__49910__auto___54285,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___54202));
var opts_SHARP___49913__auto___54288 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__49908__auto___54202,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__49911__auto___54286], 0));
if(cljs.core.seq(all_tx__49912__auto___54287)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__49908__auto___54202))){
} else {
var result__49914__auto___54292 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__49912__auto___54287,opts_SHARP___49913__auto___54288);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__49912__auto___54287,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__49911__auto___54286,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__49914__auto___54292], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__52373_54242);
}}

var block_id = cljs.core.first(block_ids__$1);
var input_pos = (function (){var or__5043__auto__ = frontend.state.get_edit_pos();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var G__52421 = arguments.length;
switch (G__52421) {
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
return frontend.handler.editor.expand_block_BANG_(cljs.core.uuid(dommy.core.attr(dom,"blockid")));
}),frontend.handler.editor.get_selected_blocks()));

var and__5041__auto__ = clear_selection_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.editor.clear_selection_BANG_();
} else {
return and__5041__auto__;
}
} else {
var blocks_with_level = frontend.handler.editor.all_blocks_with_level(cljs.core.PersistentArrayMap.EMPTY);
var max_level = (function (){var or__5043__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971),blocks_with_level));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var G__54318 = (level + (1));
level = G__54318;
continue;
} else {
var seq__52433 = cljs.core.seq(blocks_to_expand);
var chunk__52434 = null;
var count__52435 = (0);
var i__52436 = (0);
while(true){
if((i__52436 < count__52435)){
var map__52439 = chunk__52434.cljs$core$IIndexed$_nth$arity$2(null,i__52436);
var map__52439__$1 = cljs.core.__destructure_map(map__52439);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52439__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.expand_block_BANG_(uuid);


var G__54320 = seq__52433;
var G__54321 = chunk__52434;
var G__54322 = count__52435;
var G__54323 = (i__52436 + (1));
seq__52433 = G__54320;
chunk__52434 = G__54321;
count__52435 = G__54322;
i__52436 = G__54323;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52433);
if(temp__5720__auto__){
var seq__52433__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52433__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__52433__$1);
var G__54324 = cljs.core.chunk_rest(seq__52433__$1);
var G__54325 = c__5565__auto__;
var G__54326 = cljs.core.count(c__5565__auto__);
var G__54327 = (0);
seq__52433 = G__54324;
chunk__52434 = G__54325;
count__52435 = G__54326;
i__52436 = G__54327;
continue;
} else {
var map__52441 = cljs.core.first(seq__52433__$1);
var map__52441__$1 = cljs.core.__destructure_map(map__52441);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52441__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.expand_block_BANG_(uuid);


var G__54329 = cljs.core.next(seq__52433__$1);
var G__54330 = null;
var G__54331 = (0);
var G__54332 = (0);
seq__52433 = G__54329;
chunk__52434 = G__54330;
count__52435 = G__54331;
i__52436 = G__54332;
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
var G__52446 = arguments.length;
switch (G__52446) {
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
return frontend.handler.editor.collapse_block_BANG_(cljs.core.uuid(dommy.core.attr(dom,"blockid")));
}),frontend.handler.editor.get_selected_blocks()));

var and__5041__auto__ = clear_selection_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.editor.clear_selection_BANG_();
} else {
return and__5041__auto__;
}
} else {
var blocks_with_level = frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null));
var max_level = (function (){var or__5043__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971),blocks_with_level));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var G__54338 = (level - (1));
level = G__54338;
continue;
} else {
var seq__52475 = cljs.core.seq(blocks_to_collapse);
var chunk__52476 = null;
var count__52477 = (0);
var i__52478 = (0);
while(true){
if((i__52478 < count__52477)){
var map__52485 = chunk__52476.cljs$core$IIndexed$_nth$arity$2(null,i__52478);
var map__52485__$1 = cljs.core.__destructure_map(map__52485);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52485__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.collapse_block_BANG_(uuid);


var G__54339 = seq__52475;
var G__54340 = chunk__52476;
var G__54341 = count__52477;
var G__54342 = (i__52478 + (1));
seq__52475 = G__54339;
chunk__52476 = G__54340;
count__52477 = G__54341;
i__52478 = G__54342;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52475);
if(temp__5720__auto__){
var seq__52475__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52475__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__52475__$1);
var G__54343 = cljs.core.chunk_rest(seq__52475__$1);
var G__54344 = c__5565__auto__;
var G__54345 = cljs.core.count(c__5565__auto__);
var G__54346 = (0);
seq__52475 = G__54343;
chunk__52476 = G__54344;
count__52477 = G__54345;
i__52478 = G__54346;
continue;
} else {
var map__52497 = cljs.core.first(seq__52475__$1);
var map__52497__$1 = cljs.core.__destructure_map(map__52497);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52497__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.collapse_block_BANG_(uuid);


var G__54347 = cljs.core.next(seq__52475__$1);
var G__54348 = null;
var G__54349 = (0);
var G__54350 = (0);
seq__52475 = G__54347;
chunk__52476 = G__54348;
count__52477 = G__54349;
i__52478 = G__54350;
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
var G__52502 = arguments.length;
switch (G__52502) {
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
var G__52509 = arguments.length;
switch (G__52509) {
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
var G__52523 = arguments.length;
switch (G__52523) {
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
var map__52528 = temp__5720__auto__;
var map__52528__$1 = cljs.core.__destructure_map(map__52528);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52528__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52528__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52528__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var temp__5720__auto____$1 = (function (){var G__52529 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),link], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__52529) : frontend.db.pull.call(null,G__52529));
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var block = temp__5720__auto____$1;
var block_content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var format = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
if(cljs.core.truth_((function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
return ref_id;
} else {
return and__5041__auto__;
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
if(cljs.core.truth_((function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
return ref_id;
} else {
return and__5041__auto__;
}
})())){
var match = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("((%s))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_id)], 0));
var ref_block = (function (){var G__52543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),ref_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52543) : frontend.db.entity.call(null,G__52543));
})();
var block_ref_content = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(ref_block),(function (){var or__5043__auto__ = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(ref_block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
if(cljs.core.truth_((function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
return ref_id;
} else {
return and__5041__auto__;
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
var or__5043__auto__ = (function (){var and__5041__auto__ = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = ((new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block) + (1)) >= frontend.state.get_ref_open_blocks_level());
if(and__5041__auto____$1){
return cljs.core.first(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1((function (){var G__52550 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52550) : frontend.db.entity.call(null,G__52550));
})()));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.collapsed_QMARK_(block);
}
});

//# sourceMappingURL=frontend.handler.editor.js.map
