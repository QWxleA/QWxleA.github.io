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
var selection_start__$1 = (selection_start + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__77502_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__77502_SHARP_);
}),selection)));
var selection_end__$1 = (selection_end - cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__77503_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__77503_SHARP_);
}),cljs.core.reverse(selection))));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"selection-start","selection-start",-888859581),selection_start__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835),selection_end__$1,new cljs.core.Keyword(null,"selection","selection",975998651),(function (){var G__77504 = selection;
if((G__77504 == null)){
return null;
} else {
return clojure.string.trim(G__77504);
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
var map__77506 = m;
var map__77506__$1 = cljs.core.__destructure_map(map__77506);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77506__$1,new cljs.core.Keyword(null,"input","input",556931961));
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
var inner_value = (function (){var G__77507 = selection;
if((!(already_wrapped_QMARK_))){
return (function (p1__77505_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77505_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)].join('');
})(G__77507);
} else {
return G__77507;
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
var G__77514 = arguments.length;
switch (G__77514) {
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
var map__77521 = m;
var map__77521__$1 = cljs.core.__destructure_map(map__77521);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77521__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77521__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77521__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77521__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77521__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77521__$1,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77521__$1,new cljs.core.Keyword(null,"input","input",556931961));
var cur_pos = frontend.util.cursor.pos(input);
var empty_selection_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end);
var selection_link_QMARK_ = (function (){var and__4251__auto__ = selection;
if(cljs.core.truth_(and__4251__auto__)){
return ((frontend.util.starts_with_QMARK_(selection,"http://")) || (frontend.util.starts_with_QMARK_(selection,"https://")));
} else {
return and__4251__auto__;
}
})();
var vec__77522 = ((empty_selection_QMARK_)?frontend.config.get_empty_link_and_forward_pos(format):(cljs.core.truth_(link)?frontend.config.with_label_link(format,selection,link):(cljs.core.truth_(selection_link_QMARK_)?frontend.config.with_default_link(format,selection):frontend.config.with_default_label(format,selection)
)));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77522,(0),null);
var forward_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77522,(1),null);
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
var temp__5720__auto__ = (function (){var G__77527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77527) : frontend.db.entity.call(null,G__77527));
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
var seq__77528 = cljs.core.seq(blocks);
var chunk__77529 = null;
var count__77530 = (0);
var i__77531 = (0);
while(true){
if((i__77531 < count__77530)){
var block = chunk__77529.cljs$core$IIndexed$_nth$arity$2(null,i__77531);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"block-highlight");


var G__78092 = seq__77528;
var G__78093 = chunk__77529;
var G__78094 = count__77530;
var G__78095 = (i__77531 + (1));
seq__77528 = G__78092;
chunk__77529 = G__78093;
count__77530 = G__78094;
i__77531 = G__78095;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__77528);
if(temp__5720__auto__){
var seq__77528__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77528__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77528__$1);
var G__78096 = cljs.core.chunk_rest(seq__77528__$1);
var G__78097 = c__4679__auto__;
var G__78098 = cljs.core.count(c__4679__auto__);
var G__78099 = (0);
seq__77528 = G__78096;
chunk__77529 = G__78097;
count__77530 = G__78098;
i__77531 = G__78099;
continue;
} else {
var block = cljs.core.first(seq__77528__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"block-highlight");


var G__78100 = cljs.core.next(seq__77528__$1);
var G__78101 = null;
var G__78102 = (0);
var G__78103 = (0);
seq__77528 = G__78100;
chunk__77529 = G__78101;
count__77530 = G__78102;
i__77531 = G__78103;
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
var blocks = (function (){var G__77532 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName("block-highlight"));
var G__77532__$1 = (((G__77532 == null))?null:cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),G__77532));
if((G__77532__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,G__77532__$1);
}
})();
var seq__77533 = cljs.core.seq(blocks);
var chunk__77534 = null;
var count__77535 = (0);
var i__77536 = (0);
while(true){
if((i__77536 < count__77535)){
var block = chunk__77534.cljs$core$IIndexed$_nth$arity$2(null,i__77536);
goog.dom.classes.remove(block,"block-highlight");


var G__78104 = seq__77533;
var G__78105 = chunk__77534;
var G__78106 = count__77535;
var G__78107 = (i__77536 + (1));
seq__77533 = G__78104;
chunk__77534 = G__78105;
count__77535 = G__78106;
i__77536 = G__78107;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__77533);
if(temp__5720__auto__){
var seq__77533__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77533__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77533__$1);
var G__78108 = cljs.core.chunk_rest(seq__77533__$1);
var G__78109 = c__4679__auto__;
var G__78110 = cljs.core.count(c__4679__auto__);
var G__78111 = (0);
seq__77533 = G__78108;
chunk__77534 = G__78109;
count__77535 = G__78110;
i__77536 = G__78111;
continue;
} else {
var block = cljs.core.first(seq__77533__$1);
goog.dom.classes.remove(block,"block-highlight");


var G__78112 = cljs.core.next(seq__77533__$1);
var G__78113 = null;
var G__78114 = (0);
var G__78115 = (0);
seq__77533 = G__78112;
chunk__77534 = G__78113;
count__77535 = G__78114;
i__77536 = G__78115;
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
frontend.handler.editor.text_range_by_lst_fst_line = (function frontend$handler$editor$text_range_by_lst_fst_line(content,p__77537){
var vec__77538 = p__77537;
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77538,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77538,(1),null);
var G__77541 = direction;
var G__77541__$1 = (((G__77541 instanceof cljs.core.Keyword))?G__77541.fqn:null);
switch (G__77541__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77541__$1)].join('')));

}
});
frontend.handler.editor.edit_block_BANG_ = (function frontend$handler$editor$edit_block_BANG_(var_args){
var G__77545 = arguments.length;
switch (G__77545) {
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

(frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (block,pos,id,p__77549){
var map__77551 = p__77549;
var map__77551__$1 = cljs.core.__destructure_map(map__77551);
var custom_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77551__$1,new cljs.core.Keyword(null,"custom-content","custom-content",-8240001));
var tail_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77551__$1,new cljs.core.Keyword(null,"tail-len","tail-len",699304522),(0));
var move_cursor_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77551__$1,new cljs.core.Keyword(null,"move-cursor?","move-cursor?",-229137728),true);
if(frontend.config.publishing_QMARK_){
return null;
} else {
var temp__5720__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
var block__$1 = (function (){var or__4253__auto__ = (function (){var G__77552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77552) : frontend.db.pull.call(null,G__77552));
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
var and__4251__auto____$1 = frontend.util.uuid_string_QMARK_(block_id);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_id,cljs.core.uuid(block_id));
if(and__4251__auto____$2){
var G__77578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(block_id)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77578) : frontend.db.entity.call(null,G__77578));
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
var refs = frontend.util.distinct_by(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block),cljs.core.map.cljs$core$IFn$_invoke$arity$2(str__GT_page,cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__77580){
var vec__77581 = p__77580;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77581,(1),null);
return cljs.core.coll_QMARK_(v);
}),page_properties)))))));
var map__77579 = page_properties;
var map__77579__$1 = cljs.core.__destructure_map(map__77579);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77579__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77579__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var page_tx = (function (){var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
var retract_attributes = (cljs.core.truth_(id)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (attribute){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,attribute], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("block","alias","block/alias",-2112644699)], null)):null);
var tags__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(str__GT_page,tags));
var alias__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(str__GT_page,alias));
var tx = (function (){var G__77584 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","properties","block/properties",708347145),page_properties], null);
var G__77584__$1 = ((cljs.core.seq(tags__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77584,new cljs.core.Keyword("block","tags","block/tags",1814948340),tags__$1):G__77584);
if(cljs.core.seq(alias__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77584__$1,new cljs.core.Keyword("block","alias","block/alias",-2112644699),alias__$1);
} else {
return G__77584__$1;
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
}catch (e77588){if((e77588 instanceof Error)){
var _e = e77588;
return content;
} else {
throw e77588;

}
}} else {
return content;
}
});
frontend.handler.editor.with_timetracking = (function frontend$handler$editor$with_timetracking(block,value){
if(((frontend.state.enable_timetracking_QMARK_()) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),value)))){
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
var new_marker = cljs.core.last(frontend.util.safe_re_find(frontend.util.marker.marker_pattern(format),(function (){var or__4253__auto__ = value;
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
frontend.handler.editor.wrap_parse_block = (function frontend$handler$editor$wrap_parse_block(p__77592){
var map__77593 = p__77592;
var map__77593__$1 = cljs.core.__destructure_map(map__77593);
var block = map__77593__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77593__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77593__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77593__$1,new cljs.core.Keyword("block","left","block/left",-443712566));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77593__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77593__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77593__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77593__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var block__$1 = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__4251__auto__)){
var G__77597 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77597) : frontend.db.pull.call(null,G__77597));
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
var vec__77594 = ((((first_block_QMARK_) && (properties_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content__$5], null):((markdown_heading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content__$5], null):(function (){var content_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_block_pattern(format)),((block_with_title_QMARK_)?" ":"\n"),content__$5].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content_SINGLEQUOTE_], null);
})()
));
var content__$6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77594,(0),null);
var content_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77594,(1),null);
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
frontend.handler.editor.save_block_inner_BANG_ = (function frontend$handler$editor$save_block_inner_BANG_(block,value,p__77598){
var map__77599 = p__77598;
var map__77599__$1 = cljs.core.__destructure_map(map__77599);
var block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","content","block/content",-161885195),value);
var block__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,block__$1,frontend.db_schema.retract_attributes);
if(cljs.core.truth_(goog.DEBUG)){
var k__45296__auto__ = "Save block: ";
console.time(k__45296__auto__);

var res__45297__auto__ = (function (){var block__$3 = frontend.handler.editor.wrap_parse_block(block__$2);
var transact_data__61861__auto___78133 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto___78134 = (cljs.core.truth_(transact_data__61861__auto___78133)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
if(cljs.core.truth_(transact_data__61861__auto___78133)){
frontend.modules.outliner.core.save_block_BANG_(block__$3);
} else {
var _STAR_transaction_data_STAR__orig_val__77600_78135 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77601_78136 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77601_78136);

try{frontend.modules.outliner.core.save_block_BANG_(block__$3);

var r__61863__auto___78137 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto___78138 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto___78137], 0));
var tx_meta__61865__auto___78139 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto___78137));
var all_tx__61866__auto___78140 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto___78138,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78134));
var opts_SHARP___61867__auto___78141 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto___78134,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto___78139], 0));
if(cljs.core.seq(all_tx__61866__auto___78140)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78134))){
} else {
var result__61868__auto___78142 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto___78140,opts_SHARP___61867__auto___78141);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto___78140,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto___78139,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto___78142], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77600_78135);
}}

var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var title = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__77602 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block__$3));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77602) : frontend.db.entity.call(null,G__77602));
})());
if(cljs.core.truth_(temp__5720__auto____$1)){
var old_page_name = temp__5720__auto____$1;
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block__$3);
if(cljs.core.truth_(and__4251__auto__)){
return (((!(clojure.string.blank_QMARK_(title)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title)),old_page_name)));
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
console.timeEnd(k__45296__auto__);

return res__45297__auto__;
} else {
var block__$3 = frontend.handler.editor.wrap_parse_block(block__$2);
var transact_data__61861__auto___78155 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto___78156 = (cljs.core.truth_(transact_data__61861__auto___78155)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
if(cljs.core.truth_(transact_data__61861__auto___78155)){
frontend.modules.outliner.core.save_block_BANG_(block__$3);
} else {
var _STAR_transaction_data_STAR__orig_val__77603_78157 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77604_78158 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77604_78158);

try{frontend.modules.outliner.core.save_block_BANG_(block__$3);

var r__61863__auto___78159 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto___78160 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto___78159], 0));
var tx_meta__61865__auto___78161 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto___78159));
var all_tx__61866__auto___78162 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto___78160,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78156));
var opts_SHARP___61867__auto___78163 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto___78156,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto___78161], 0));
if(cljs.core.seq(all_tx__61866__auto___78162)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78156))){
} else {
var result__61868__auto___78164 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto___78162,opts_SHARP___61867__auto___78163);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto___78162,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto___78161,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto___78164], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77603_78157);
}}

var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var title = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__77605 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block__$3));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77605) : frontend.db.entity.call(null,G__77605));
})());
if(cljs.core.truth_(temp__5720__auto____$1)){
var old_page_name = temp__5720__auto____$1;
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block__$3);
if(cljs.core.truth_(and__4251__auto__)){
return (((!(clojure.string.blank_QMARK_(title)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title)),old_page_name)));
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
var G__77607 = arguments.length;
switch (G__77607) {
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

(frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (block,value,p__77608){
var map__77609 = p__77608;
var map__77609__$1 = cljs.core.__destructure_map(map__77609);
var opts = map__77609__$1;
var force_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77609__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));
var map__77610 = block;
var map__77610__$1 = cljs.core.__destructure_map(map__77610);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77610__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77610__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77610__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77610__$1,new cljs.core.Keyword("block","repo","block/repo",2119209932));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77610__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77610__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
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
var page__$1 = (function (){var G__77611 = repo__$1;
var G__77612 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__77611,G__77612) : frontend.db.entity.call(null,G__77611,G__77612));
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
frontend.handler.editor.outliner_insert_block_BANG_ = (function frontend$handler$editor$outliner_insert_block_BANG_(config,current_block,new_block,p__77613){
var map__77614 = p__77613;
var map__77614__$1 = cljs.core.__destructure_map(map__77614);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77614__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77614__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77614__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
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
var has_children_QMARK_ = (function (){var G__77615 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__77615) : frontend.db.has_children_QMARK_.call(null,G__77615));
})();
var sibling_QMARK___$1 = (cljs.core.truth_(ref_query_top_block_QMARK_)?false:((cljs.core.boolean_QMARK_(sibling_QMARK_))?sibling_QMARK_:(cljs.core.truth_(frontend.util.collapsed_QMARK_(current_block))?true:cljs.core.not(has_children_QMARK_)
)));
var transact_data__61861__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto__ = (cljs.core.truth_(transact_data__61861__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
if(cljs.core.truth_(transact_data__61861__auto__)){
var G__77616_78167 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block], null);
(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(G__77616_78167) : frontend.handler.editor.save_current_block_BANG_.call(null,G__77616_78167));

return frontend.modules.outliner.core.insert_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),current_block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_], null));
} else {
var _STAR_transaction_data_STAR__orig_val__77617 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77618 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77618);

try{var G__77619_78168 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block], null);
(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(G__77619_78168) : frontend.handler.editor.save_current_block_BANG_.call(null,G__77619_78168));

frontend.modules.outliner.core.insert_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),current_block,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_], null));

var r__61863__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto__], 0));
var tx_meta__61865__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto__));
var all_tx__61866__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__));
var opts_SHARP___61867__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto__], 0));
if(cljs.core.seq(all_tx__61866__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__))){
return null;
} else {
var result__61868__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto__,opts_SHARP___61867__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77617);
}}
});
frontend.handler.editor.block_self_alone_when_insert_QMARK_ = (function frontend$handler$editor$block_self_alone_when_insert_QMARK_(config,uuid){
var current_page = frontend.state.get_current_page();
var block_id = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = frontend.util.uuid_string_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config));
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
var and__4251__auto____$1 = frontend.util.uuid_string_QMARK_(current_page);
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
frontend.handler.editor.insert_new_block_before_block_aux_BANG_ = (function frontend$handler$editor$insert_new_block_before_block_aux_BANG_(config,block,_value,p__77620){
var map__77621 = p__77620;
var map__77621__$1 = cljs.core.__destructure_map(map__77621);
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77621__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var new_m = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.db.new_block_id(),new cljs.core.Keyword("block","content","block/content",-161885195),""], null);
var prev_block = frontend.handler.editor.wrap_parse_block(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","journal?","block/journal?",-970683127)], null)),new_m], 0)));
var left_block = (function (){var G__77622 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77622) : frontend.db.pull.call(null,G__77622));
})();
if(cljs.core.truth_(goog.DEBUG)){
var k__45296__auto___78172 = "outliner insert block";
console.time(k__45296__auto___78172);

var res__45297__auto___78173 = (function (){var sibling_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)));
return frontend.handler.editor.outliner_insert_block_BANG_(config,left_block,prev_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
})();
console.timeEnd(k__45296__auto___78172);

} else {
var sibling_QMARK__78175 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)));
frontend.handler.editor.outliner_insert_block_BANG_(config,left_block,prev_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__78175,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
}

return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(prev_block) : ok_handler.call(null,prev_block));
});
frontend.handler.editor.insert_new_block_aux_BANG_ = (function frontend$handler$editor$insert_new_block_aux_BANG_(config,p__77623,value,p__77624){
var map__77625 = p__77623;
var map__77625__$1 = cljs.core.__destructure_map(map__77625);
var block = map__77625__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77625__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var map__77626 = p__77624;
var map__77626__$1 = cljs.core.__destructure_map(map__77626);
var _opts = map__77626__$1;
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77626__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var block_self_QMARK_ = frontend.handler.editor.block_self_alone_when_insert_QMARK_(config,uuid);
var input = goog.dom.getElement(frontend.state.get_edit_input_id());
var pos = frontend.util.cursor.pos(input);
var vec__77627 = frontend.handler.editor.compute_fst_snd_block_text(value,pos);
var fst_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77627,(0),null);
var snd_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77627,(1),null);
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
var vec__77630 = frontend.state.get_editor_args();
var map__77633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77630,(0),null);
var map__77633__$1 = cljs.core.__destructure_map(map__77633);
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77633__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77633__$1,new cljs.core.Keyword(null,"block","block",664686210));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77633__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var block_parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77633__$1,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77633__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77633__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77630,(1),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77630,(2),null);
var node = goog.dom.getElement(id);
if(cljs.core.truth_(node)){
var value = frontend.handler.editor.goog$module$goog$object.get(node,"value");
var pos = frontend.util.get_selection_start(node);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550)],[format,(function (){var or__4253__auto__ = (function (){var G__77634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77634) : frontend.db.pull.call(null,G__77634));
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
var G__77636 = arguments.length;
switch (G__77636) {
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

var temp__5720__auto___78181 = frontend.handler.editor.get_state();
if(cljs.core.truth_(temp__5720__auto___78181)){
var state_78182 = temp__5720__auto___78181;
var map__77637_78183 = state_78182;
var map__77637_78184__$1 = cljs.core.__destructure_map(map__77637_78183);
var block_78185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77637_78184__$1,new cljs.core.Keyword(null,"block","block",664686210));
var value_78186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77637_78184__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id_78187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77637_78184__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var config_78188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77637_78184__$1,new cljs.core.Keyword(null,"config","config",994861415));
var value_78189__$1 = ((typeof block_value === 'string')?block_value:value_78186);
var block_id_78190 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_78185);
var block_78191__$1 = (function (){var or__4253__auto__ = (function (){var G__77641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78190], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77641) : frontend.db.pull.call(null,G__77641));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return block_78185;
}
})();
var block_self_QMARK__78192 = frontend.handler.editor.block_self_alone_when_insert_QMARK_(config_78188,block_id_78190);
var input_78193 = goog.dom.getElement(frontend.state.get_edit_input_id());
var pos_78194 = frontend.util.cursor.pos(input_78193);
var vec__77638_78195 = frontend.handler.editor.compute_fst_snd_block_text(value_78189__$1,pos_78194);
var fst_block_text_78196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77638_78195,(0),null);
var snd_block_text_78197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77638_78195,(1),null);
var insert_fn_78198 = ((block_self_QMARK__78192)?frontend.handler.editor.insert_new_block_aux_BANG_:((((clojure.string.blank_QMARK_(fst_block_text_78196)) && ((!(clojure.string.blank_QMARK_(snd_block_text_78197))))))?frontend.handler.editor.insert_new_block_before_block_aux_BANG_:frontend.handler.editor.insert_new_block_aux_BANG_
));
var G__77642_78199 = config_78188;
var G__77643_78200 = block_78191__$1;
var G__77644_78201 = value_78189__$1;
var G__77645_78202 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089),(function (last_block){
frontend.handler.editor.clear_when_saved_BANG_();

return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(last_block,(0),id_78187);
})], null);
(insert_fn_78198.cljs$core$IFn$_invoke$arity$4 ? insert_fn_78198.cljs$core$IFn$_invoke$arity$4(G__77642_78199,G__77643_78200,G__77644_78201,G__77645_78202) : insert_fn_78198.call(null,G__77642_78199,G__77643_78200,G__77644_78201,G__77645_78202));
} else {
}
} else {
}

return frontend.state.set_editor_op_BANG_(null);
}));

(frontend.handler.editor.insert_new_block_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.api_insert_new_block_BANG_ = (function frontend$handler$editor$api_insert_new_block_BANG_(content,p__77647){
var map__77648 = p__77647;
var map__77648__$1 = cljs.core.__destructure_map(map__77648);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77648__$1,new cljs.core.Keyword(null,"page","page",849072397));
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77648__$1,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77648__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false);
var before_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77648__$1,new cljs.core.Keyword(null,"before?","before?",765621039),false);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77648__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var custom_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77648__$1,new cljs.core.Keyword(null,"custom-uuid","custom-uuid",-1095135430));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77648__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var edit_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77648__$1,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),true);
if(cljs.core.truth_((function (){var or__4253__auto__ = page;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return block_uuid;
}
})())){
var before_QMARK___$1 = (cljs.core.truth_(page)?false:before_QMARK_);
var sibling_QMARK___$1 = (cljs.core.truth_(before_QMARK___$1)?true:(cljs.core.truth_(page)?false:sibling_QMARK_));
var block = (cljs.core.truth_(page)?(function (){var G__77649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77649) : frontend.db.entity.call(null,G__77649));
})():(function (){var G__77650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77650) : frontend.db.entity.call(null,G__77650));
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
var or__4253__auto____$1 = (function (){var G__77654 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__77654) : frontend.db.get_page_format.call(null,G__77654));
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
var vec__77651 = (cljs.core.truth_(before_QMARK___$1)?(function (){var first_child_QMARK_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77646_SHARP_){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,p1__77646_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566)], null)));
var block__$1 = (function (){var G__77655 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77655) : frontend.db.pull.call(null,G__77655));
})();
var sibling_QMARK___$2 = (cljs.core.truth_((function (){var or__4253__auto__ = first_child_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())?false:sibling_QMARK___$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1,sibling_QMARK___$2], null);
})():(cljs.core.truth_(sibling_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77656 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77656) : frontend.db.pull.call(null,G__77656));
})(),sibling_QMARK___$1], null):(cljs.core.truth_(last_block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_block,true], null):(cljs.core.truth_(block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77657 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77657) : frontend.db.pull.call(null,G__77657));
})(),sibling_QMARK___$1], null):null
))));
var block_m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77651,(0),null);
var sibling_QMARK___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77651,(1),null);
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
var G__77659 = arguments.length;
switch (G__77659) {
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
var refs = logseq.graph_parser.block.get_page_refs_from_properties(properties,(function (){var G__77660 = frontend.state.get_current_repo();
return (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(G__77660) : frontend.db.get_db.call(null,G__77660));
})(),frontend.state.get_date_formatter());
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","page","block/page",822314108)],[true,frontend.db.new_block_id(),properties,page,refs,cljs.core.keys(properties),format,content,page,page]);
});
frontend.handler.editor.update_timestamps_content_BANG_ = (function frontend$handler$editor$update_timestamps_content_BANG_(p__77661,content){
var map__77662 = p__77661;
var map__77662__$1 = cljs.core.__destructure_map(map__77662);
var block = map__77662__$1;
var repeated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77662__$1,new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77662__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77662__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
if(cljs.core.truth_(repeated_QMARK_)){
var scheduled_ast = frontend.handler.block.get_scheduled_ast(block);
var deadline_ast = frontend.handler.block.get_deadline_ast(block);
var content__$1 = (function (){var G__77663 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.handler.repeated.repeated_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheduled_ast,deadline_ast], null));
var G__77663__$1 = (((G__77663 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$1(ts),frontend.handler.repeated.next_timestamp_text(ts)], null);
}),G__77663));
if((G__77663__$1 == null)){
return null;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,p__77664){
var vec__77665 = p__77664;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77665,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77665,(1),null);
return clojure.string.replace(content__$1,old,new$);
}),content,G__77663__$1);
}
})();
var content__$2 = clojure.string.replace_first(content__$1,marker,(function (){var G__77668 = marker;
switch (G__77668) {
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
frontend.handler.editor.check = (function frontend$handler$editor$check(p__77669){
var map__77670 = p__77669;
var map__77670__$1 = cljs.core.__destructure_map(map__77670);
var block = map__77670__$1;
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77670__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77670__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var repeated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77670__$1,new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77670__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
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
frontend.handler.editor.uncheck = (function frontend$handler$editor$uncheck(p__77671){
var map__77672 = p__77671;
var map__77672__$1 = cljs.core.__destructure_map(map__77672);
var block = map__77672__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77672__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77672__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
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
var G__77674 = arguments.length;
switch (G__77674) {
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

(frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$2 = (function (p__77675,new_marker){
var map__77676 = p__77675;
var map__77676__$1 = cljs.core.__destructure_map(map__77676);
var block = map__77676__$1;
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77676__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77676__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77676__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var vec__77677 = frontend.util.marker.cycle_marker(content,marker,new_marker,format,frontend.state.get_preferred_workflow());
var new_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77677,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77677,(1),null);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
}));

(frontend.handler.editor.set_marker.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.cycle_todos_BANG_ = (function frontend$handler$editor$cycle_todos_BANG_(){
var temp__5720__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5720__auto__){
var blocks = temp__5720__auto__;
var ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77680_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__77680_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks)));
var seq__77681 = cljs.core.seq(ids);
var chunk__77682 = null;
var count__77683 = (0);
var i__77684 = (0);
while(true){
if((i__77684 < count__77683)){
var id = chunk__77682.cljs$core$IIndexed$_nth$arity$2(null,i__77684);
var block_78214 = (function (){var G__77687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77687) : frontend.db.pull.call(null,G__77687));
})();
frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1(block_78214);


var G__78215 = seq__77681;
var G__78216 = chunk__77682;
var G__78217 = count__77683;
var G__78218 = (i__77684 + (1));
seq__77681 = G__78215;
chunk__77682 = G__78216;
count__77683 = G__78217;
i__77684 = G__78218;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__77681);
if(temp__5720__auto____$1){
var seq__77681__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__77681__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77681__$1);
var G__78219 = cljs.core.chunk_rest(seq__77681__$1);
var G__78220 = c__4679__auto__;
var G__78221 = cljs.core.count(c__4679__auto__);
var G__78222 = (0);
seq__77681 = G__78219;
chunk__77682 = G__78220;
count__77683 = G__78221;
i__77684 = G__78222;
continue;
} else {
var id = cljs.core.first(seq__77681__$1);
var block_78224 = (function (){var G__77688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77688) : frontend.db.pull.call(null,G__77688));
})();
frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1(block_78224);


var G__78225 = cljs.core.next(seq__77681__$1);
var G__78226 = null;
var G__78227 = (0);
var G__78228 = (0);
seq__77681 = G__78225;
chunk__77682 = G__78226;
count__77683 = G__78227;
i__77684 = G__78228;
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
var format = (function (){var or__4253__auto__ = (function (){var G__77692 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__77692) : frontend.db.get_page_format.call(null,G__77692));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var vec__77689 = frontend.util.marker.cycle_marker(content,null,null,format,frontend.state.get_preferred_workflow());
var new_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77689,(0),null);
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77689,(1),null);
var new_pos = frontend.commands.compute_pos_delta_when_change_marker(content,marker,frontend.util.cursor.pos(current_input));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_input_id,new_content);

return frontend.util.cursor.move_cursor_to(current_input,new_pos);
} else {
return null;
}
}
});
frontend.handler.editor.set_priority = (function frontend$handler$editor$set_priority(p__77693,new_priority){
var map__77694 = p__77693;
var map__77694__$1 = cljs.core.__destructure_map(map__77694);
var block = map__77694__$1;
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77694__$1,new cljs.core.Keyword("block","priority","block/priority",1491369544));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77694__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var new_content = clojure.string.replace_first(content,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_priority], 0)));
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
});
frontend.handler.editor.cycle_priority_BANG_ = (function frontend$handler$editor$cycle_priority_BANG_(){
if(cljs.core.truth_(frontend.state.get_edit_block())){
var format = (function (){var or__4253__auto__ = (function (){var G__77695 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__77695) : frontend.db.get_page_format.call(null,G__77695));
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
frontend.handler.editor.delete_block_aux_BANG_ = (function frontend$handler$editor$delete_block_aux_BANG_(p__77696,children_QMARK_){
var map__77697 = p__77696;
var map__77697__$1 = cljs.core.__destructure_map(map__77697);
var _block = map__77697__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77697__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77697__$1,new cljs.core.Keyword("block","repo","block/repo",2119209932));
var repo__$1 = (function (){var or__4253__auto__ = repo;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
var block = (function (){var G__77698 = repo__$1;
var G__77699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__77700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__77698,G__77699,G__77700) : frontend.db.pull.call(null,G__77698,G__77699,G__77700));
})();
if(cljs.core.truth_(block)){
var transact_data__61861__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto__ = (cljs.core.truth_(transact_data__61861__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null));
if(cljs.core.truth_(transact_data__61861__auto__)){
return frontend.modules.outliner.core.delete_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),children_QMARK_], null));
} else {
var _STAR_transaction_data_STAR__orig_val__77701 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77702 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77702);

try{frontend.modules.outliner.core.delete_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),children_QMARK_], null));

var r__61863__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto__], 0));
var tx_meta__61865__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto__));
var all_tx__61866__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__));
var opts_SHARP___61867__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto__], 0));
if(cljs.core.seq(all_tx__61866__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__))){
return null;
} else {
var result__61868__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto__,opts_SHARP___61867__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77701);
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
var temp__5720__auto____$1 = (function (){var G__77703 = repo;
var G__77704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__77705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(sibling_block_id)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__77703,G__77704,G__77705) : frontend.db.pull.call(null,G__77703,G__77704,G__77705));
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
var G__77707 = arguments.length;
switch (G__77707) {
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

var map__77708_78231 = frontend.handler.editor.get_state();
var map__77708_78232__$1 = cljs.core.__destructure_map(map__77708_78231);
var id_78233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77708_78232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_id_78234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77708_78232__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var block_parent_id_78235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77708_78232__$1,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550));
var value_78236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77708_78232__$1,new cljs.core.Keyword(null,"value","value",305978217));
var format_78237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77708_78232__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
if(cljs.core.truth_(block_id_78234)){
var page_id_78238 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__77709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78234], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77709) : frontend.db.entity.call(null,G__77709));
})()));
var page_blocks_count_78239 = (function (){var and__4251__auto__ = page_id_78238;
if(cljs.core.truth_(and__4251__auto__)){
return (frontend.db.get_page_blocks_count.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_blocks_count.cljs$core$IFn$_invoke$arity$2(repo,page_id_78238) : frontend.db.get_page_blocks_count.call(null,repo,page_id_78238));
} else {
return and__4251__auto__;
}
})();
if((page_blocks_count_78239 > (1))){
var block_78240 = (function (){var G__77710 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78234], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77710) : frontend.db.entity.call(null,G__77710));
})();
var has_children_QMARK__78241 = cljs.core.seq(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block_78240));
var block_78242__$1 = (function (){var G__77711 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_78240);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77711) : frontend.db.pull.call(null,G__77711));
})();
var left_78243 = frontend.modules.outliner.tree._get_left(frontend.modules.outliner.core.block(block_78242__$1));
var left_has_children_QMARK__78244 = (function (){var and__4251__auto__ = left_78243;
if(cljs.core.truth_(and__4251__auto__)){
var temp__5720__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(left_78243));
if(cljs.core.truth_(temp__5720__auto__)){
var block_id__$1 = temp__5720__auto__;
var block__$2 = (function (){var G__77712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77712) : frontend.db.entity.call(null,G__77712));
})();
return cljs.core.seq(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block__$2));
} else {
return null;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = has_children_QMARK__78241;
if(and__4251__auto__){
return left_has_children_QMARK__78244;
} else {
return and__4251__auto__;
}
})())){
} else {
if(cljs.core.truth_(block_parent_id_78235)){
var block_parent_78245 = goog.dom.getElement(block_parent_id_78235);
var sibling_block_78246 = frontend.util.get_prev_block_non_collapsed_non_embed(block_parent_78245);
frontend.handler.editor.delete_block_aux_BANG_(block_78242__$1,delete_children_QMARK_);

frontend.handler.editor.move_to_prev_block(repo,sibling_block_78246,format_78237,id_78233,value_78236);
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
var transact_data__61861__auto___78251 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto___78252 = (cljs.core.truth_(transact_data__61861__auto___78251)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null));
if(cljs.core.truth_(transact_data__61861__auto___78251)){
frontend.modules.outliner.core.delete_blocks_BANG_(blocks,cljs.core.PersistentArrayMap.EMPTY);
} else {
var _STAR_transaction_data_STAR__orig_val__77713_78254 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77714_78255 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77714_78255);

try{frontend.modules.outliner.core.delete_blocks_BANG_(blocks,cljs.core.PersistentArrayMap.EMPTY);

var r__61863__auto___78256 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto___78257 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto___78256], 0));
var tx_meta__61865__auto___78258 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto___78256));
var all_tx__61866__auto___78259 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto___78257,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78252));
var opts_SHARP___61867__auto___78260 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto___78252,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto___78258], 0));
if(cljs.core.seq(all_tx__61866__auto___78259)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78252))){
} else {
var result__61868__auto___78261 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto___78259,opts_SHARP___61867__auto___78260);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto___78259,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto___78258,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto___78261], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77713_78254);
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
var transact_data__61861__auto___78263 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto___78264 = (cljs.core.truth_(transact_data__61861__auto___78263)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
if(cljs.core.truth_(transact_data__61861__auto___78263)){
var seq__77715_78265 = cljs.core.seq(col);
var chunk__77716_78266 = null;
var count__77717_78267 = (0);
var i__77718_78268 = (0);
while(true){
if((i__77718_78268 < count__77717_78267)){
var vec__77727_78269 = chunk__77716_78266.cljs$core$IIndexed$_nth$arity$2(null,i__77718_78268);
var block_id_78270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77727_78269,(0),null);
var key_78271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77727_78269,(1),null);
var value_78272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77727_78269,(2),null);
var block_id_78273__$1 = ((typeof block_id_78270 === 'string')?cljs.core.uuid(block_id_78270):block_id_78270);
var temp__5720__auto___78274__$1 = (function (){var G__77730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78273__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77730) : frontend.db.entity.call(null,G__77730));
})();
if(cljs.core.truth_(temp__5720__auto___78274__$1)){
var block_78275 = temp__5720__auto___78274__$1;
var format_78276 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_78275);
var content_78277 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_78275);
var properties_78278 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_78275);
var properties_78279__$1 = (((value_78272 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_78278,key_78271):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_78278,key_78271,value_78272));
var content_78280__$1 = (((value_78272 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_78276,key_78271,content_78277):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_78276,content_78277,key_78271,value_78272));
var content_78281__$2 = frontend.util.property.remove_empty_properties(content_78280__$1);
var block_78282__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78273__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_78279__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_78281__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_78282__$1);
} else {
}


var G__78284 = seq__77715_78265;
var G__78285 = chunk__77716_78266;
var G__78286 = count__77717_78267;
var G__78287 = (i__77718_78268 + (1));
seq__77715_78265 = G__78284;
chunk__77716_78266 = G__78285;
count__77717_78267 = G__78286;
i__77718_78268 = G__78287;
continue;
} else {
var temp__5720__auto___78288__$1 = cljs.core.seq(seq__77715_78265);
if(temp__5720__auto___78288__$1){
var seq__77715_78289__$1 = temp__5720__auto___78288__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77715_78289__$1)){
var c__4679__auto___78290 = cljs.core.chunk_first(seq__77715_78289__$1);
var G__78291 = cljs.core.chunk_rest(seq__77715_78289__$1);
var G__78292 = c__4679__auto___78290;
var G__78293 = cljs.core.count(c__4679__auto___78290);
var G__78294 = (0);
seq__77715_78265 = G__78291;
chunk__77716_78266 = G__78292;
count__77717_78267 = G__78293;
i__77718_78268 = G__78294;
continue;
} else {
var vec__77731_78295 = cljs.core.first(seq__77715_78289__$1);
var block_id_78296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77731_78295,(0),null);
var key_78297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77731_78295,(1),null);
var value_78298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77731_78295,(2),null);
var block_id_78299__$1 = ((typeof block_id_78296 === 'string')?cljs.core.uuid(block_id_78296):block_id_78296);
var temp__5720__auto___78301__$2 = (function (){var G__77734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78299__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77734) : frontend.db.entity.call(null,G__77734));
})();
if(cljs.core.truth_(temp__5720__auto___78301__$2)){
var block_78302 = temp__5720__auto___78301__$2;
var format_78303 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_78302);
var content_78304 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_78302);
var properties_78305 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_78302);
var properties_78306__$1 = (((value_78298 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_78305,key_78297):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_78305,key_78297,value_78298));
var content_78307__$1 = (((value_78298 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_78303,key_78297,content_78304):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_78303,content_78304,key_78297,value_78298));
var content_78308__$2 = frontend.util.property.remove_empty_properties(content_78307__$1);
var block_78309__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78299__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_78306__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_78308__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_78309__$1);
} else {
}


var G__78315 = cljs.core.next(seq__77715_78289__$1);
var G__78316 = null;
var G__78317 = (0);
var G__78318 = (0);
seq__77715_78265 = G__78315;
chunk__77716_78266 = G__78316;
count__77717_78267 = G__78317;
i__77718_78268 = G__78318;
continue;
}
} else {
}
}
break;
}
} else {
var _STAR_transaction_data_STAR__orig_val__77735_78319 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77736_78320 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77736_78320);

try{var seq__77737_78321 = cljs.core.seq(col);
var chunk__77738_78322 = null;
var count__77739_78323 = (0);
var i__77740_78324 = (0);
while(true){
if((i__77740_78324 < count__77739_78323)){
var vec__77749_78325 = chunk__77738_78322.cljs$core$IIndexed$_nth$arity$2(null,i__77740_78324);
var block_id_78326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77749_78325,(0),null);
var key_78327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77749_78325,(1),null);
var value_78328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77749_78325,(2),null);
var block_id_78329__$1 = ((typeof block_id_78326 === 'string')?cljs.core.uuid(block_id_78326):block_id_78326);
var temp__5720__auto___78330__$1 = (function (){var G__77752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78329__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77752) : frontend.db.entity.call(null,G__77752));
})();
if(cljs.core.truth_(temp__5720__auto___78330__$1)){
var block_78332 = temp__5720__auto___78330__$1;
var format_78333 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_78332);
var content_78334 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_78332);
var properties_78335 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_78332);
var properties_78336__$1 = (((value_78328 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_78335,key_78327):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_78335,key_78327,value_78328));
var content_78337__$1 = (((value_78328 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_78333,key_78327,content_78334):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_78333,content_78334,key_78327,value_78328));
var content_78338__$2 = frontend.util.property.remove_empty_properties(content_78337__$1);
var block_78339__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78329__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_78336__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_78338__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_78339__$1);
} else {
}


var G__78341 = seq__77737_78321;
var G__78342 = chunk__77738_78322;
var G__78343 = count__77739_78323;
var G__78344 = (i__77740_78324 + (1));
seq__77737_78321 = G__78341;
chunk__77738_78322 = G__78342;
count__77739_78323 = G__78343;
i__77740_78324 = G__78344;
continue;
} else {
var temp__5720__auto___78345__$1 = cljs.core.seq(seq__77737_78321);
if(temp__5720__auto___78345__$1){
var seq__77737_78346__$1 = temp__5720__auto___78345__$1;
if(cljs.core.chunked_seq_QMARK_(seq__77737_78346__$1)){
var c__4679__auto___78347 = cljs.core.chunk_first(seq__77737_78346__$1);
var G__78348 = cljs.core.chunk_rest(seq__77737_78346__$1);
var G__78349 = c__4679__auto___78347;
var G__78350 = cljs.core.count(c__4679__auto___78347);
var G__78351 = (0);
seq__77737_78321 = G__78348;
chunk__77738_78322 = G__78349;
count__77739_78323 = G__78350;
i__77740_78324 = G__78351;
continue;
} else {
var vec__77753_78352 = cljs.core.first(seq__77737_78346__$1);
var block_id_78353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77753_78352,(0),null);
var key_78354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77753_78352,(1),null);
var value_78355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77753_78352,(2),null);
var block_id_78357__$1 = ((typeof block_id_78353 === 'string')?cljs.core.uuid(block_id_78353):block_id_78353);
var temp__5720__auto___78358__$2 = (function (){var G__77756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78357__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77756) : frontend.db.entity.call(null,G__77756));
})();
if(cljs.core.truth_(temp__5720__auto___78358__$2)){
var block_78359 = temp__5720__auto___78358__$2;
var format_78360 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_78359);
var content_78361 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_78359);
var properties_78362 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_78359);
var properties_78363__$1 = (((value_78355 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties_78362,key_78354):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_78362,key_78354,value_78355));
var content_78364__$1 = (((value_78355 == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format_78360,key_78354,content_78361):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format_78360,content_78361,key_78354,value_78355));
var content_78365__$2 = frontend.util.property.remove_empty_properties(content_78364__$1);
var block_78366__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78357__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_78363__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_78365__$2], null);
frontend.modules.outliner.core.save_block_BANG_(block_78366__$1);
} else {
}


var G__78367 = cljs.core.next(seq__77737_78346__$1);
var G__78368 = null;
var G__78369 = (0);
var G__78370 = (0);
seq__77737_78321 = G__78367;
chunk__77738_78322 = G__78368;
count__77739_78323 = G__78369;
i__77740_78324 = G__78370;
continue;
}
} else {
}
}
break;
}

var r__61863__auto___78371 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto___78372 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto___78371], 0));
var tx_meta__61865__auto___78373 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto___78371));
var all_tx__61866__auto___78374 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto___78372,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78264));
var opts_SHARP___61867__auto___78375 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto___78264,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto___78373], 0));
if(cljs.core.seq(all_tx__61866__auto___78374)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78264))){
} else {
var result__61868__auto___78376 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto___78374,opts_SHARP___61867__auto___78375);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto___78374,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto___78373,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto___78376], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77735_78319);
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
var temp__5720__auto__ = (function (){var G__77757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77757) : frontend.db.entity.call(null,G__77757));
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
var temp__5720__auto__ = (function (){var G__77758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77758) : frontend.db.pull.call(null,G__77758));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var map__77759 = block;
var map__77759__$1 = cljs.core.__destructure_map(map__77759);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77759__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
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
var block = (function (){var G__77760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77760) : frontend.db.entity.call(null,G__77760));
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
var G__77763 = arguments.length;
switch (G__77763) {
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
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__77761_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77761_SHARP_);
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
var ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__77764_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__77764_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks));
var content = frontend.handler.editor.compose_copied_blocks_contents(repo,ids);
var block = (function (){var G__77765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ids)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77765) : frontend.db.entity.call(null,G__77765));
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
var blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77766_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__77766_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
var level = dommy.core.attr(p1__77766_SHARP_,"level");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.uuid(id),new cljs.core.Keyword(null,"level","level",1290497552),(level | (0))], null);
} else {
return null;
}
}),selected_blocks)));
var first_block = cljs.core.first(blocks);
var first_root_level_index = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__77767){
var vec__77768 = p__77767;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77768,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77768,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block),(1));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,blocks)));
var root_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(first_block));
var adjusted_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,p__77771){
var map__77772 = p__77771;
var map__77772__$1 = cljs.core.__destructure_map(map__77772);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"level","level",1290497552),(((index < first_root_level_index))?(((level < cljs.core.deref(root_level)))?(function (){
cljs.core.reset_BANG_(root_level,level);

return (1);
})()
:((level - cljs.core.deref(root_level)) + (1))):level)], null);
}),blocks);
var block = (function (){var G__77773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(first_block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77773) : frontend.db.pull.call(null,G__77773));
})();
var copy_str = (function (){var G__77774 = adjusted_blocks;
var G__77774__$1 = (((G__77774 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77775){
var map__77776 = p__77775;
var map__77776__$1 = cljs.core.__destructure_map(map__77776);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77776__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77776__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var pred__77777 = cljs.core._EQ_;
var expr__77778 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_((pred__77777.cljs$core$IFn$_invoke$arity$2 ? pred__77777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),expr__77778) : pred__77777.call(null,new cljs.core.Keyword(null,"org","org",1495985),expr__77778)))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic([clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"*"))," ((%s))"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
if(cljs.core.truth_((pred__77777.cljs$core$IFn$_invoke$arity$2 ? pred__77777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),expr__77778) : pred__77777.call(null,new cljs.core.Keyword(null,"markdown","markdown",1227225089),expr__77778)))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic([clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((level - (1)),"\t")),"- ((%s))"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__77778)].join('')));
}
}
}),G__77774));
if((G__77774__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",G__77774__$1);
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
var ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77780_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__77780_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks)));
var ids_str = (function (){var G__77781 = ids;
var G__77781__$1 = (((G__77781 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed ((%s))}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}),G__77781));
if((G__77781__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",G__77781__$1);
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
var block_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77782_SHARP_){
var temp__5720__auto____$1 = dommy.core.attr(p1__77782_SHARP_,"blockid");
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
var G__77783 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
if((G__77783 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__77783,page_id);
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
var block_uuids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77784_SHARP_){
return cljs.core.uuid(dommy.core.attr(p1__77784_SHARP_,"blockid"));
}),dom_blocks));
var lookup_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_uuids);
var blocks__$1 = (function (){var G__77785 = repo;
var G__77786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__77787 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__77785,G__77786,G__77787) : frontend.db.pull_many.call(null,G__77785,G__77786,G__77787));
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
var len__4864__auto___78391 = arguments.length;
var i__4865__auto___78392 = (0);
while(true){
if((i__4865__auto___78392 < len__4864__auto___78391)){
args__4870__auto__.push((arguments[i__4865__auto___78392]));

var G__78393 = (i__4865__auto___78392 + (1));
i__4865__auto___78392 = G__78393;
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
var additional_matches = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__77788_SHARP_){
return frontend.util.re_pos(p1__77788_SHARP_,text);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([additional_patterns], 0));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(page_matches,block_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_matches,additional_matches], 0)));
var vec__77793 = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p__77796){
var vec__77797 = p__77796;
var start_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77797,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77797,(1),null);
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
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77793,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77793,(1),null);
if(cljs.core.truth_(match)){
if(cljs.core.truth_(cljs.core.some((function (p1__77789_SHARP_){
return cljs.core.re_find(p1__77789_SHARP_,match);
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
(frontend.handler.editor.extract_nearest_link_from_text.cljs$lang$applyTo = (function (seq77790){
var G__77791 = cljs.core.first(seq77790);
var seq77790__$1 = cljs.core.next(seq77790);
var G__77792 = cljs.core.first(seq77790__$1);
var seq77790__$2 = cljs.core.next(seq77790__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77791,G__77792,seq77790__$2);
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
var temp__5720__auto__ = (function (){var G__77800 = frontend.state.get_edit_block();
var G__77800__$1 = (((G__77800 == null))?null:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__77800));
var G__77800__$2 = (((G__77800__$1 == null))?null:(function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
})(G__77800__$1));
var G__77800__$3 = (((G__77800__$2 == null))?null:(frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77800__$2) : frontend.db.entity.call(null,G__77800__$2)));
if((G__77800__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__77800__$3);
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
var and__4251__auto____$1 = frontend.util.uuid_string_QMARK_(page);
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
var page_id = (function (){var G__77801 = (function (){var G__77802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77802) : frontend.db.entity.call(null,G__77802));
})();
var G__77801__$1 = (((G__77801 == null))?null:new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(G__77801));
if((G__77801__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__77801__$1);
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
var temp__5720__auto__ = (function (){var G__77803 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77803) : frontend.db.pull.call(null,G__77803));
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
var element = (function (){var G__77804 = cljs.core.first(frontend.state.get_selection_blocks());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__77804) : f.call(null,G__77804));
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
var element = (function (){var G__77805 = (function (){var G__77806 = frontend.state.get_selection_blocks();
return (first_last.cljs$core$IFn$_invoke$arity$1 ? first_last.cljs$core$IFn$_invoke$arity$1(G__77806) : first_last.call(null,G__77806));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__77805) : f.call(null,G__77805));
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
var G__77808 = arguments.length;
switch (G__77808) {
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

(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__77809,value){
var map__77810 = p__77809;
var map__77810__$1 = cljs.core.__destructure_map(map__77810);
var _state = map__77810__$1;
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77810__$1,new cljs.core.Keyword(null,"block","block",664686210));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77810__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__77811 = repo;
var G__77812 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__77811,G__77812) : frontend.db.entity.call(null,G__77811,G__77812));
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
var G__77814 = arguments.length;
switch (G__77814) {
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

(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__77815){
var map__77816 = p__77815;
var map__77816__$1 = cljs.core.__destructure_map(map__77816);
var opts = map__77816__$1;
var force_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77816__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));
var skip_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77816__$1,new cljs.core.Keyword(null,"skip-properties?","skip-properties?",329398686));
var current_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77816__$1,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
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
var G__77818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77818) : frontend.db.pull.call(null,G__77818));
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
}catch (e77817){if((e77817 instanceof Error)){
var error = e77817;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.editor",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-block-failed","save-block-failed",610684026),error,new cljs.core.Keyword(null,"line","line",212345235),1318], null)),null);
} else {
throw e77817;

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
frontend.handler.editor.insert_command_BANG_ = (function frontend$handler$editor$insert_command_BANG_(id,command_output,format,p__77819){
var map__77820 = p__77819;
var map__77820__$1 = cljs.core.__destructure_map(map__77820);
var option = map__77820__$1;
var restore_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77820__$1,new cljs.core.Keyword(null,"restore?","restore?",1172240305),true);
if(typeof command_output === 'string'){
frontend.commands.insert_BANG_(id,command_output,option);
} else {
if(cljs.core.vector_QMARK_(command_output)){
frontend.commands.handle_steps(command_output,format);
} else {
if(cljs.core.fn_QMARK_(command_output)){
var s_78408 = (command_output.cljs$core$IFn$_invoke$arity$0 ? command_output.cljs$core$IFn$_invoke$arity$0() : command_output.call(null));
frontend.commands.insert_BANG_(id,s_78408,option);
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
var G__77821 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__77821__$1 = (((G__77821 instanceof cljs.core.Keyword))?G__77821.fqn:null);
switch (G__77821__$1) {
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.ensure_assets_dir_BANG_(frontend.state.get_current_repo()),(function (p__77822){
var vec__77823 = p__77822;
var repo_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77823,(0),null);
var assets_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77823,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$path$path.join(repo_dir,assets_dir,filename),(function (path){
return promesa.protocols._promise((cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?path:encodeURI(decodeURI(path))));
}));
}));
}));
});
frontend.handler.editor.save_assets_BANG_ = (function frontend$handler$editor$save_assets_BANG_(var_args){
var G__77828 = arguments.length;
switch (G__77828) {
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.ensure_assets_dir_BANG_(repo),(function (p__77829){
var vec__77830 = p__77829;
var repo_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77830,(0),null);
var assets_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77830,(1),null);
return promesa.protocols._promise(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$5(repo,repo_dir,assets_dir,files,(function (index,file_base){
var file_base__$1 = clojure.string.replace(clojure.string.replace(clojure.string.replace(file_base," ","_"),"%","_"),"/","_");
var file_name = [file_base__$1,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now()),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('');
return clojure.string.replace(file_name,/_+/,"_");
})));
}));
}));
}));

(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (repo,dir,path,files,gen_filename){
return promesa.core.all((function (){var iter__4652__auto__ = (function frontend$handler$editor$iter__77833(s__77834){
return (new cljs.core.LazySeq(null,(function (){
var s__77834__$1 = s__77834;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__77834__$1);
if(temp__5720__auto__){
var s__77834__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77834__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__77834__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__77836 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__77835 = (0);
while(true){
if((i__77835 < size__4651__auto__)){
var vec__77837 = cljs.core._nth(c__4650__auto__,i__77835);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77837,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77837,(1),null);
cljs.core.chunk_append(b__77836,(function (){var file_name = (function (){var G__77843 = file.name;
return (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(G__77843) : frontend.util.node_path.basename.call(null,G__77843));
})();
var vec__77840 = (cljs.core.truth_(file_name)?(function (){var last_dot_index = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(file_name,".");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file_name,(0),last_dot_index),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(file_name,last_dot_index)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null));
var file_base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77840,(0),null);
var ext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77840,(1),null);
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((gen_filename.cljs$core$IFn$_invoke$arity$2 ? gen_filename.cljs$core$IFn$_invoke$arity$2(index,file_base) : gen_filename.call(null,index,file_base))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
var filename__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",filename].join('');
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var from = file.path;
var from__$1 = ((clojure.string.blank_QMARK_(from))?null:from);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.apis.copyFileToAssets(dir,filename__$1,from__$1),((function (i__77835,from,from__$1,file_name,vec__77840,file_base,ext,filename,filename__$1,vec__77837,index,file,c__4650__auto__,size__4651__auto__,b__77836,s__77834__$2,temp__5720__auto__){
return (function (p1__77826_SHARP_){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,((typeof p1__77826_SHARP_ === 'string')?(new File([],p1__77826_SHARP_)):file),frontend.util.node_path.join(dir,filename__$1)], null));
});})(i__77835,from,from__$1,file_name,vec__77840,file_base,ext,filename,filename__$1,vec__77837,index,file,c__4650__auto__,size__4651__auto__,b__77836,s__77834__$2,temp__5720__auto__))
);
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,dir,filename__$1,file.stream(),null),((function (i__77835,file_name,vec__77840,file_base,ext,filename,filename__$1,vec__77837,index,file,c__4650__auto__,size__4651__auto__,b__77836,s__77834__$2,temp__5720__auto__){
return (function (){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,file], null));
});})(i__77835,file_name,vec__77840,file_base,ext,filename,filename__$1,vec__77837,index,file,c__4650__auto__,size__4651__auto__,b__77836,s__77834__$2,temp__5720__auto__))
);
}
})());

var G__78411 = (i__77835 + (1));
i__77835 = G__78411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77836),frontend$handler$editor$iter__77833(cljs.core.chunk_rest(s__77834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77836),null);
}
} else {
var vec__77844 = cljs.core.first(s__77834__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77844,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77844,(1),null);
return cljs.core.cons((function (){var file_name = (function (){var G__77850 = file.name;
return (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(G__77850) : frontend.util.node_path.basename.call(null,G__77850));
})();
var vec__77847 = (cljs.core.truth_(file_name)?(function (){var last_dot_index = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(file_name,".");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file_name,(0),last_dot_index),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(file_name,last_dot_index)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null));
var file_base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77847,(0),null);
var ext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77847,(1),null);
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((gen_filename.cljs$core$IFn$_invoke$arity$2 ? gen_filename.cljs$core$IFn$_invoke$arity$2(index,file_base) : gen_filename.call(null,index,file_base))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
var filename__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",filename].join('');
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var from = file.path;
var from__$1 = ((clojure.string.blank_QMARK_(from))?null:from);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.apis.copyFileToAssets(dir,filename__$1,from__$1),((function (from,from__$1,file_name,vec__77847,file_base,ext,filename,filename__$1,vec__77844,index,file,s__77834__$2,temp__5720__auto__){
return (function (p1__77826_SHARP_){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,((typeof p1__77826_SHARP_ === 'string')?(new File([],p1__77826_SHARP_)):file),frontend.util.node_path.join(dir,filename__$1)], null));
});})(from,from__$1,file_name,vec__77847,file_base,ext,filename,filename__$1,vec__77844,index,file,s__77834__$2,temp__5720__auto__))
);
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,dir,filename__$1,file.stream(),null),((function (file_name,vec__77847,file_base,ext,filename,filename__$1,vec__77844,index,file,s__77834__$2,temp__5720__auto__){
return (function (){
return promesa.core.resolved(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename__$1,file], null));
});})(file_name,vec__77847,file_base,ext,filename,filename__$1,vec__77844,index,file,s__77834__$2,temp__5720__auto__))
);
}
})(),frontend$handler$editor$iter__77833(cljs.core.rest(s__77834__$2)));
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
frontend.handler.editor.delete_asset_of_block_BANG_ = (function frontend$handler$editor$delete_asset_of_block_BANG_(p__77851){
var map__77852 = p__77851;
var map__77852__$1 = cljs.core.__destructure_map(map__77852);
var _opts = map__77852__$1;
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"full-text","full-text",1432444182));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var delete_local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"delete-local?","delete-local?",1716577572));
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
var G__77853 = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var G__77854 = frontend.config.get_pages_directory();
var G__77855 = "_.md";
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(G__77853,G__77854,G__77855) : frontend.util.node_path.join.call(null,G__77853,G__77854,G__77855));
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
var vec__77856 = temp__5720__auto__;
var asset_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77856,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77856,(1),null);
var full_file_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77856,(2),null);
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

var vec__77859 = frontend.commands.simple_replace_BANG_(input_id,value__$1,selected,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),((postfix).length),new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),(function (new_value,prefix_pos){
if((prefix_pos >= (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new_value,prefix_pos,(prefix_pos + (2))),(prefix_pos + (2))], null);
} else {
return null;
}
})], null));
var prefix__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77859,(0),null);
var _pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77859,(1),null);
var G__77862 = prefix__$1;
switch (G__77862) {
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(p) : frontend.util.page_name_sanity_lc.call(null,p)),editing_page);
}),pages);
} else {
return pages;
}
});
frontend.handler.editor.get_matched_blocks = (function frontend$handler$editor$get_matched_blocks(q,block_id){
var current_block = frontend.state.get_edit_block();
var block_parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),(function (){var G__77863 = frontend.state.get_current_repo();
var G__77864 = block_id;
var G__77865 = (99);
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3(G__77863,G__77864,G__77865) : frontend.db.get_block_parents.call(null,G__77863,G__77864,G__77865));
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
}catch (e77866){if((e77866 instanceof Error)){
var e = e77866;
console.error(e);

return null;
} else {
throw e77866;

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
}catch (e77867){if((e77867 instanceof Error)){
var _error = e77867;
return null;
} else {
throw e77867;

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
var transact_data__61861__auto___78418 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto___78419 = (cljs.core.truth_(transact_data__61861__auto___78418)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null));
if(cljs.core.truth_(transact_data__61861__auto___78418)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.move_blocks_up_down_BANG_(blocks,up_QMARK_);
} else {
var _STAR_transaction_data_STAR__orig_val__77868_78420 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77869_78421 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77869_78421);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.move_blocks_up_down_BANG_(blocks,up_QMARK_);

var r__61863__auto___78422 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto___78423 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto___78422], 0));
var tx_meta__61865__auto___78424 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto___78422));
var all_tx__61866__auto___78425 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto___78423,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78419));
var opts_SHARP___61867__auto___78426 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto___78419,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto___78424], 0));
if(cljs.core.seq(all_tx__61866__auto___78425)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78419))){
} else {
var result__61868__auto___78427 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto___78425,opts_SHARP___61867__auto___78426);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto___78425,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto___78424,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto___78427], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77868_78420);
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
var temp__5720__auto__ = (function (){var G__77870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),edit_block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77870) : frontend.db.pull.call(null,G__77870));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var blocks_78434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null);
move_nodes(blocks_78434);

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
var blocks = (function (){var G__77871 = frontend.state.get_current_repo();
var G__77872 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__77873 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__77871,G__77872,G__77873) : frontend.db.pull_many.call(null,G__77871,G__77872,G__77873));
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
var G__77874 = repo;
var G__77875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__77876 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__77874,G__77875,G__77876) : frontend.db.pull_many.call(null,G__77874,G__77875,G__77876));
});
/**
 * `direction` = :left | :right.
 */
frontend.handler.editor.on_tab = (function frontend$handler$editor$on_tab(direction){
var blocks = frontend.handler.editor.get_selected_ordered_blocks();
if(cljs.core.seq(blocks)){
var transact_data__61861__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto__ = (cljs.core.truth_(transact_data__61861__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null));
if(cljs.core.truth_(transact_data__61861__auto__)){
return frontend.modules.outliner.core.indent_outdent_blocks_BANG_(blocks,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
var _STAR_transaction_data_STAR__orig_val__77877 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77878 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77878);

try{frontend.modules.outliner.core.indent_outdent_blocks_BANG_(blocks,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));

var r__61863__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto__], 0));
var tx_meta__61865__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto__));
var all_tx__61866__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__));
var opts_SHARP___61867__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto__], 0));
if(cljs.core.seq(all_tx__61866__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__))){
return null;
} else {
var result__61868__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto__,opts_SHARP___61867__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77877);
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
var G__77879 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__77879__$1 = (((G__77879 instanceof cljs.core.Keyword))?G__77879.fqn:null);
switch (G__77879__$1) {
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
var G__77880 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__77880__$1 = (((G__77880 instanceof cljs.core.Keyword))?G__77880.fqn:null);
switch (G__77880__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("![%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label__$1,link__$1], 0));

break;
case "org":
return frontend.util.format("[[%s]]");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77880__$1)].join('')));

}
});
frontend.handler.editor.handle_command_input = (function frontend$handler$editor$handle_command_input(command,id,format,m){
var G__77881_78441 = command;
var G__77881_78442__$1 = (((G__77881_78441 instanceof cljs.core.Keyword))?G__77881_78441.fqn:null);
switch (G__77881_78442__$1) {
case "link":
var map__77882_78444 = m;
var map__77882_78445__$1 = cljs.core.__destructure_map(map__77882_78444);
var link_78446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77882_78445__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var label_78447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77882_78445__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(((clojure.string.blank_QMARK_(link_78446)) || (clojure.string.blank_QMARK_(label_78447)))){
} else {
frontend.handler.editor.insert_command_BANG_(id,frontend.handler.editor.get_link(format,link_78446,label_78447),format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0()),"link"].join('')], null));
}

break;
case "image-link":
var map__77883_78448 = m;
var map__77883_78449__$1 = cljs.core.__destructure_map(map__77883_78448);
var link_78450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77883_78449__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var label_78451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77883_78449__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if((!(clojure.string.blank_QMARK_(link_78450)))){
frontend.handler.editor.insert_command_BANG_(id,frontend.handler.editor.get_image_link(format,link_78450,label_78451),format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0()),"link"].join('')], null));
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
var block = (function (){var G__77884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77884) : frontend.db.pull.call(null,G__77884));
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
var new_content = (cljs.core.truth_(content_update_fn)?(function (){var G__77885 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
return (content_update_fn.cljs$core$IFn$_invoke$arity$1 ? content_update_fn.cljs$core$IFn$_invoke$arity$1(G__77885) : content_update_fn.call(null,G__77885));
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

var last_block_SINGLEQUOTE_ = (function (){var G__77886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77886) : frontend.db.pull.call(null,G__77886));
})();
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(last_block_SINGLEQUOTE_,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_block_SINGLEQUOTE_));
} else {
return null;
}
}),(0));
});
frontend.handler.editor.paste_blocks = (function frontend$handler$editor$paste_blocks(blocks,p__77887){
var map__77888 = p__77887;
var map__77888__$1 = cljs.core.__destructure_map(map__77888);
var content_update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77888__$1,new cljs.core.Keyword(null,"content-update-fn","content-update-fn",132456615));
var exclude_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77888__$1,new cljs.core.Keyword(null,"exclude-properties","exclude-properties",1449787201),cljs.core.PersistentVector.EMPTY);
var target_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77888__$1,new cljs.core.Keyword(null,"target-block","target-block",348392017));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77888__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var editing_block = (function (){var temp__5720__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5720__auto__)){
var editing_block = temp__5720__auto__;
var G__77889 = (function (){var G__77890 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(editing_block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__77890) : frontend.db.pull.call(null,G__77890));
})();
if((G__77889 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77889,new cljs.core.Keyword("block","content","block/content",-161885195),frontend.state.get_edit_content());
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
var block = (function (){var G__77891 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77891) : frontend.db.entity.call(null,G__77891));
})();
var page = (cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))?block:(cljs.core.truth_(target_block__$1)?new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__77892 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77892) : frontend.db.entity.call(null,G__77892));
})()):null));
var target_block__$2 = (function (){var or__4253__auto__ = target_block__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return editing_block;
}
})();
var sibling_QMARK___$1 = (((!((sibling_QMARK_ == null))))?sibling_QMARK_:(cljs.core.truth_((function (){var G__77893 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block__$2);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__77893) : frontend.db.has_children_QMARK_.call(null,G__77893));
})())?false:true
));
var transact_data__61861__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto__ = (cljs.core.truth_(transact_data__61861__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
if(cljs.core.truth_(transact_data__61861__auto__)){
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
var _STAR_transaction_data_STAR__orig_val__77894 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77895 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77895);

try{if(cljs.core.truth_(editing_block)){
frontend.modules.outliner.core.save_block_BANG_(editing_block);
} else {
}

if(cljs.core.truth_(target_block__$2)){
var format_78463 = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(target_block__$2);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var blocks_SINGLEQUOTE__78464 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(block__$1,page,exclude_properties,format_78463,content_update_fn);
}),blocks);
var result_78465 = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE__78464,target_block__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1], null));
frontend.handler.editor.edit_last_block_after_inserted_BANG_(result_78465);
} else {
}

var r__61863__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto__], 0));
var tx_meta__61865__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto__));
var all_tx__61866__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__));
var opts_SHARP___61867__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto__], 0));
if(cljs.core.seq(all_tx__61866__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__))){
return null;
} else {
var result__61868__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto__,opts_SHARP___61867__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77894);
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
var G__77897 = arguments.length;
switch (G__77897) {
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

(frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (element_id,db_id,p__77898){
var map__77899 = p__77898;
var map__77899__$1 = cljs.core.__destructure_map(map__77899);
var opts = map__77899__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77899__$1,new cljs.core.Keyword(null,"target","target",253001721));
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
var page = (cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))?block:(cljs.core.truth_(target__$1)?new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__77900 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77900) : frontend.db.entity.call(null,G__77900));
})()):null));
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(block__$1,page,exclude_properties,format,content_update_fn);
}),blocks__$1);
var sibling_QMARK_ = new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060).cljs$core$IFn$_invoke$arity$1(opts);
var sibling_QMARK__SINGLEQUOTE_ = (((!((sibling_QMARK_ == null))))?sibling_QMARK_:(cljs.core.truth_((function (){var G__77901 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target__$1);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__77901) : frontend.db.has_children_QMARK_.call(null,G__77901));
})())?false:true
));
var transact_data__61861__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto__ = (cljs.core.truth_(transact_data__61861__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
if(cljs.core.truth_(transact_data__61861__auto__)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var result = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE_,target__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__SINGLEQUOTE_));
return frontend.handler.editor.edit_last_block_after_inserted_BANG_(result);
} else {
var _STAR_transaction_data_STAR__orig_val__77902 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77903 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77903);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var result_78503 = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE_,target__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__SINGLEQUOTE_));
frontend.handler.editor.edit_last_block_after_inserted_BANG_(result_78503);

var r__61863__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto__], 0));
var tx_meta__61865__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto__));
var all_tx__61866__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__));
var opts_SHARP___61867__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto__], 0));
if(cljs.core.seq(all_tx__61866__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__))){
return null;
} else {
var result__61868__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto__,opts_SHARP___61867__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77902);
}}
} else {
return null;
}
}));

(frontend.handler.editor.insert_template_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.editor.template_on_chosen_handler = (function frontend$handler$editor$template_on_chosen_handler(element_id){
return (function (p__77904,_click_QMARK_){
var vec__77905 = p__77904;
var _template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77905,(0),null);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77905,(1),null);
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3(element_id,db_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null));
});
});
frontend.handler.editor.parent_is_page_QMARK_ = (function frontend$handler$editor$parent_is_page_QMARK_(p__77908){
var map__77909 = p__77908;
var map__77909__$1 = cljs.core.__destructure_map(map__77909);
var node = map__77909__$1;
var map__77910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77909__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__77910__$1 = cljs.core.__destructure_map(map__77910);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77910__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77910__$1,new cljs.core.Keyword("block","page","block/page",822314108));
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
var transact_data__61861__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto__ = (cljs.core.truth_(transact_data__61861__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null));
if(cljs.core.truth_(transact_data__61861__auto__)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.modules.outliner.core.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(parent_node),true);
} else {
var _STAR_transaction_data_STAR__orig_val__77911 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77912 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77912);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(parent_node),true);

var r__61863__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto__], 0));
var tx_meta__61865__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto__));
var all_tx__61866__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__));
var opts_SHARP___61867__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto__], 0));
if(cljs.core.seq(all_tx__61866__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto__))){
return null;
} else {
var result__61868__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto__,opts_SHARP___61867__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77911);
}}
}
});
frontend.handler.editor.last_top_level_child_QMARK_ = (function frontend$handler$editor$last_top_level_child_QMARK_(p__77913,current_node){
var map__77914 = p__77913;
var map__77914__$1 = cljs.core.__destructure_map(map__77914);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77914__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
var temp__5720__auto__ = (cljs.core.truth_(frontend.util.uuid_string_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)))?(function (){var G__77915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(id)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77915) : frontend.db.entity.call(null,G__77915));
})():(function (){var G__77916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(id) : frontend.util.page_name_sanity_lc.call(null,id))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__77916) : frontend.db.entity.call(null,G__77916));
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
var map__77917 = frontend.handler.editor.get_state();
var map__77917__$1 = cljs.core.__destructure_map(map__77917);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77917__$1,new cljs.core.Keyword(null,"block","block",664686210));
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
var G__77918 = property_key;
switch (G__77918) {
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
var G__77919_78581 = input;
var G__77920_78582 = frontend.util.cursor.line_beginning_pos(input);
var G__77921_78583 = (frontend.util.cursor.line_end_pos(input) + (1));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(G__77919_78581,G__77920_78582,G__77921_78583) : frontend.handler.editor.delete_and_update.call(null,G__77919_78581,G__77920_78582,G__77921_78583));

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
frontend.handler.editor.toggle_list_checkbox = (function frontend$handler$editor$toggle_list_checkbox(p__77922,old_item_content,new_item_content){
var map__77923 = p__77922;
var map__77923__$1 = cljs.core.__destructure_map(map__77923);
var block = map__77923__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77923__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var new_content = clojure.string.replace_first(content,old_item_content,new_item_content);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
});
frontend.handler.editor.dwim_in_list = (function frontend$handler$editor$dwim_in_list(){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var map__77924 = frontend.handler.editor.get_state();
var map__77924__$1 = cljs.core.__destructure_map(map__77924);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77924__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var map__77925 = item;
var map__77925__$1 = cljs.core.__destructure_map(map__77925);
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77925__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77925__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var bullet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77925__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77925__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655));
var ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77925__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77925__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var next_bullet = (cljs.core.truth_(ordered)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((bullet + (1))),"."].join(''):bullet);
var checkbox__$1 = (cljs.core.truth_(checkbox)?"[ ] ":null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(full_content),((cljs.core.truth_(ordered)?(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(bullet)).length) + (2)):(2)) + (cljs.core.truth_(checkbox__$1)?((checkbox__$1).length):null)))) && (clojure.string.includes_QMARK_(input.value,"\n")))){
var G__77926 = input;
var G__77927 = frontend.util.cursor.line_beginning_pos(input);
var G__77928 = frontend.util.cursor.line_end_pos(input);
return (frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(G__77926,G__77927,G__77928) : frontend.handler.editor.delete_and_update.call(null,G__77926,G__77927,G__77928));
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
var map__77934 = frontend.handler.editor.get_state();
var map__77934__$1 = cljs.core.__destructure_map(map__77934);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77934__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var format = (function (){var or__4253__auto__ = (function (){var G__77935 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__77935) : frontend.db.get_page_format.call(null,G__77935));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var new_unordered_bullet = (function (){var G__77936 = format;
var G__77936__$1 = (((G__77936 instanceof cljs.core.Keyword))?G__77936.fqn:null);
switch (G__77936__$1) {
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
var temp__5718__auto___78604 = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto___78604)){
var item_78605 = temp__5718__auto___78604;
var map__77937_78607 = item_78605;
var map__77937_78608__$1 = cljs.core.__destructure_map(map__77937_78607);
var ordered_78609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77937_78608__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var list_beginning_pos_78610 = frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
var list_end_pos_78611 = frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
var list_78612 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,list_beginning_pos_78610,list_end_pos_78611);
var items_78613 = clojure.string.split_lines(list_78612);
var splitter_reg_78614 = (cljs.core.truth_(ordered_78609)?/[\d]*\.\s*/:/[-\*]{1}\s*/);
var items_without_bullet_78615 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77929_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$3(p1__77929_SHARP_,splitter_reg_78614,(2)));
}),items_78613));
var new_list_78616 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(cljs.core.truth_(ordered_78609)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77930_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_unordered_bullet)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77930_SHARP_)].join('');
}),items_without_bullet_78615):cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__77931_SHARP_,p2__77932_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__77931_SHARP_ + (1))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__77932_SHARP_)].join('');
}),items_without_bullet_78615)));
var index_of_current_item_78617 = (items_without_bullet_78615.indexOf(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(item_78605),splitter_reg_78614,(2)))) + (1));
var numbers_length_78618 = ((clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__77933_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__77933_SHARP_ + (1))),". "].join('');
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(items_without_bullet_78615,(0),index_of_current_item_78617)))).length);
var pos_diff_78619 = (numbers_length_78618 - ((2) * index_of_current_item_78617));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,list_beginning_pos_78610,list_end_pos_78611) : frontend.handler.editor.delete_and_update.call(null,input,list_beginning_pos_78610,list_end_pos_78611));

frontend.handler.editor.insert(new_list_78616);

cljs.core.reset_BANG_(pos,(cljs.core.truth_(ordered_78609)?(current_pos - pos_diff_78619):(current_pos + pos_diff_78619)));
} else {
var prev_item_78620 = frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
frontend.util.cursor.move_cursor_down(input);

frontend.util.cursor.move_cursor_to_line_beginning(input);

if(cljs.core.truth_(prev_item_78620)){
var map__77938_78621 = prev_item_78620;
var map__77938_78622__$1 = cljs.core.__destructure_map(map__77938_78621);
var bullet_78623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77938_78622__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var ordered_78624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77938_78622__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var current_bullet_78625 = (cljs.core.truth_(ordered_78624)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((bullet_78623 + (1))),"."].join(''):bullet_78623);
frontend.handler.editor.insert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_bullet_78625)," "].join(''));

cljs.core.reset_BANG_(pos,((current_pos + cljs.core.count(current_bullet_78625)) + (1)));
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
var map__77939 = frontend.handler.editor.get_state();
var map__77939__$1 = cljs.core.__destructure_map(map__77939);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77939__$1,new cljs.core.Keyword(null,"block","block",664686210));
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
var map__77940 = selection;
var map__77940__$1 = cljs.core.__destructure_map(map__77940);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77940__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77940__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var selection__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77940__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core.truth_(selection__$1)){
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,selection_start,selection_end) : frontend.handler.editor.delete_and_update.call(null,input,selection_start,selection_end));

return frontend.handler.editor.insert(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selection__$1], 0)));
} else {
var temp__5718__auto__ = frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto__)){
var embed_ref = temp__5718__auto__;
var map__77941 = embed_ref;
var map__77941__$1 = cljs.core.__destructure_map(map__77941);
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77941__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77941__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77941__$1,new cljs.core.Keyword(null,"end","end",-268185958));
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
var map__77942 = page_ref;
var map__77942__$1 = cljs.core.__destructure_map(map__77942);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77942__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77942__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77942__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77942__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
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
var map__77943 = frontend.handler.editor.get_state();
var map__77943__$1 = cljs.core.__destructure_map(map__77943);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77943__$1,new cljs.core.Keyword(null,"block","block",664686210));
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
var map__77944 = embed_ref;
var map__77944__$1 = cljs.core.__destructure_map(map__77944);
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77944__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77944__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77944__$1,new cljs.core.Keyword(null,"end","end",-268185958));
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
var map__77945 = page_ref;
var map__77945__$1 = cljs.core.__destructure_map(map__77945);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77945__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77945__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77945__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77945__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
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
var map__77946 = frontend.handler.editor.get_state();
var map__77946__$1 = cljs.core.__destructure_map(map__77946);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77946__$1,new cljs.core.Keyword(null,"block","block",664686210));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77946__$1,new cljs.core.Keyword(null,"config","config",994861415));
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
var G__77947 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(thing_at_point);
switch (G__77947) {
case "markup":
var right_bound = new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(thing_at_point);
return frontend.util.cursor.move_cursor_to(input,(clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(content,right_bound,pos) + cljs.core.count(right_bound)));

break;
case "admonition-block":
return frontend.handler.editor.keydown_new_line();

break;
case "source-block":
frontend.handler.editor.keydown_new_line();

var G__77948 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(thing_at_point);
var G__77948__$1 = (((G__77948 instanceof cljs.core.Keyword))?G__77948.fqn:null);
switch (G__77948__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77947)].join('')));

}
} else {
if(((clojure.string.blank_QMARK_(content)) && ((((!(has_right_QMARK_))) && (cljs.core.not(frontend.handler.editor.last_top_level_child_QMARK_(config,current_node))))))){
return frontend.handler.editor.outdent_on_enter(current_node);
} else {
if(cljs.core.truth_(goog.DEBUG)){
var k__45296__auto__ = "Insert block";
console.time(k__45296__auto__);

var res__45297__auto__ = (function (){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(state);
})()
;
console.timeEnd(k__45296__auto__);

return res__45297__auto__;
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
var f = (function (){var G__77949 = direction;
var G__77949__$1 = (((G__77949 instanceof cljs.core.Keyword))?G__77949.fqn:null);
switch (G__77949__$1) {
case "up":
return cljs.core.last;

break;
case "down":
return cljs.core.first;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77949__$1)].join('')));

}
})();
var block = (function (){var G__77950 = frontend.util.get_blocks_noncollapse();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__77950) : f.call(null,G__77950));
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
var f = (function (){var G__77951 = direction;
var G__77951__$1 = (((G__77951 instanceof cljs.core.Keyword))?G__77951.fqn:null);
switch (G__77951__$1) {
case "up":
return frontend.util.get_prev_block_non_collapsed;

break;
case "down":
return frontend.util.get_next_block_non_collapsed;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77951__$1)].join('')));

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
var f = (function (){var G__77953 = direction;
var G__77953__$1 = (((G__77953 instanceof cljs.core.Keyword))?G__77953.fqn:null);
switch (G__77953__$1) {
case "up":
return frontend.util.get_prev_block_non_collapsed;

break;
case "down":
return frontend.util.get_next_block_non_collapsed;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77953__$1)].join('')));

}
})();
var sibling_block = (function (){var G__77954 = goog.dom.getElement(frontend.state.get_editing_block_dom_id());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__77954) : f.call(null,G__77954));
})();
var map__77952 = frontend.state.get_edit_block();
var map__77952__$1 = cljs.core.__destructure_map(map__77952);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77952__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77952__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77952__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
if(cljs.core.truth_(sibling_block)){
var temp__5720__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5720__auto__)){
var sibling_block_id = temp__5720__auto__;
var value_78644 = frontend.state.get_edit_content();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.clean_content_BANG_(format,content),clojure.string.trim(value_78644))){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,uuid,value_78644);
} else {
}

var new_id = clojure.string.replace(frontend.handler.editor.goog$module$goog$object.get(sibling_block,"id"),"ls-block","edit-block");
var new_uuid = cljs.core.uuid(sibling_block_id);
var block = (function (){var G__77955 = repo;
var G__77956 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__77957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_uuid], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__77955,G__77956,G__77957) : frontend.db.pull.call(null,G__77955,G__77956,G__77957));
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
var map__77958 = frontend.state.get_edit_block();
var map__77958__$1 = cljs.core.__destructure_map(map__77958);
var block = map__77958__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77958__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77958__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var id = frontend.state.get_edit_input_id();
var repo = frontend.state.get_current_repo();
var f = ((up_QMARK_)?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed);
var sibling_block = (function (){var G__77959 = goog.dom.getElement(frontend.state.get_editing_block_dom_id());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__77959) : f.call(null,G__77959));
})();
if(cljs.core.truth_(sibling_block)){
var temp__5720__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5720__auto__)){
var sibling_block_id = temp__5720__auto__;
var content_78645 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var value_78646 = frontend.state.get_edit_content();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.clean_content_BANG_(format,content_78645),clojure.string.trim(value_78646))){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,uuid,value_78646);
} else {
}

var block__$1 = (function (){var G__77960 = repo;
var G__77961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__77962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(sibling_block_id)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__77960,G__77961,G__77962) : frontend.db.pull.call(null,G__77960,G__77961,G__77962));
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
var current_block_has_children_QMARK_ = (function (){var G__77963 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__77963) : frontend.db.has_children_QMARK_.call(null,G__77963));
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
var G__77964 = frontend.modules.outliner.tree._get_id(right);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__77964) : frontend.db.has_children_QMARK_.call(null,G__77964));
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
var G__77965 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_child);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__77965) : frontend.db.has_children_QMARK_.call(null,G__77965));
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

var pos = (function (){var G__77967 = frontend.state.get_input();
if((G__77967 == null)){
return null;
} else {
return frontend.util.cursor.pos(G__77967);
}
})();
var map__77966 = frontend.handler.editor.get_state();
var map__77966__$1 = cljs.core.__destructure_map(map__77966);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77966__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
frontend.state.set_editor_last_pos_BANG_(pos);

var transact_data__61861__auto___78658 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto___78659 = (cljs.core.truth_(transact_data__61861__auto___78658)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null));
if(cljs.core.truth_(transact_data__61861__auto___78658)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),indent_QMARK_);
} else {
var _STAR_transaction_data_STAR__orig_val__77968_78662 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__77969_78663 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__77969_78663);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),indent_QMARK_);

var r__61863__auto___78664 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto___78665 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto___78664], 0));
var tx_meta__61865__auto___78666 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto___78664));
var all_tx__61866__auto___78667 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto___78665,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78659));
var opts_SHARP___61867__auto___78668 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto___78659,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto___78666], 0));
if(cljs.core.seq(all_tx__61866__auto___78667)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78659))){
} else {
var result__61868__auto___78673 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto___78667,opts_SHARP___61867__auto___78668);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto___78667,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto___78666,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto___78673], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__77968_78662);
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
var orig_pos_78676 = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var value_78677__$1 = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var square_pos_78678 = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value_78677__$1,(0),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(orig_pos_78676)),"[[");
var pos_78679 = (square_pos_78678 + (2));
var __78680 = frontend.state.set_editor_last_pos_BANG_(pos_78679);
var pos_78681__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(orig_pos_78676,new cljs.core.Keyword(null,"pos","pos",-864607220),pos_78679);
var command_step_78682 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",frontend.util.nth_safe(value_78677__$1,(square_pos_78678 - (1)))))?new cljs.core.Keyword("editor","search-page-hashtag","editor/search-page-hashtag",2082188401):new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812));
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_step_78682], null));

cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,pos_78681__$1);
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
var matched_commands_78685 = frontend.handler.editor.get_matched_commands(input);
if(cljs.core.seq(matched_commands_78685)){
cljs.core.reset_BANG_(frontend.commands._STAR_show_commands,true);

cljs.core.reset_BANG_(frontend.commands._STAR_matched_commands,matched_commands_78685);
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
var matched_block_commands_78686 = frontend.handler.editor.get_matched_block_commands(input);
if(cljs.core.seq(matched_block_commands_78686)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(9))){
if(cljs.core.truth_(cljs.core.deref(frontend.commands._STAR_show_block_commands))){
frontend.util.stop(e);

frontend.handler.editor.insert_command_BANG_(input_id,cljs.core.last(cljs.core.first(matched_block_commands_78686)),format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.angle_bracket], null));
} else {
}
} else {
cljs.core.reset_BANG_(frontend.commands._STAR_matched_block_commands,matched_block_commands_78686);

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
var blocks = (function (){var G__77972 = repo;
var G__77973 = cljs.core.first(ids__$1);
return (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(G__77972,G__77973) : frontend.db.get_block_and_children.call(null,G__77972,G__77973));
})();
var result__$1 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,blocks));
var G__78689 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),result__$1)),cljs.core.rest(ids__$1));
var G__78690 = result__$1;
ids__$1 = G__78689;
result = G__78690;
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
var blocks_78691 = (function (){var or__4253__auto__ = new cljs.core.Keyword("copy","full-blocks","copy/full-blocks",-1316121892).cljs$core$IFn$_invoke$arity$1(copied_blocks);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.handler.editor.get_all_blocks_by_ids(frontend.state.get_current_repo(),copied_block_ids);
}
})();
if(cljs.core.seq(blocks_78691)){
frontend.state.set_copied_full_blocks_BANG_(blocks_78691);

frontend.handler.editor.paste_blocks(blocks_78691,cljs.core.PersistentArrayMap.EMPTY);
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
var format_78692 = (function (){var or__4253__auto__ = (function (){var G__77974 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__77974) : frontend.db.get_page_format.call(null,G__77974));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})();
var format_78693__$1 = format_78692;
var ocr_77975_78694 = (frontend.util.safe_re_find(/^\s*(?:[-+*]|#+)\s+/m,text) == null);
var ocr_77976_78695 = (frontend.util.safe_re_find(/^\s*\*+\s+/m,text) == null);
var ocr_77977_78696 = (frontend.util.safe_re_find(/(?:\r?\n){2,}/,text) == null);
try{if(cljs.core.keyword_identical_QMARK_(format_78693__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089))){
try{if((ocr_77975_78694 === false)){
frontend.handler.editor.paste_text_parseable(format_78693__$1,text);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78001){if((e78001 instanceof Error)){
var e__57908__auto___78697 = e78001;
if((e__57908__auto___78697 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57908__auto___78697;
}
} else {
throw e78001;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77990){if((e77990 instanceof Error)){
var e__57908__auto___78698 = e77990;
if((e__57908__auto___78698 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(format_78693__$1,new cljs.core.Keyword(null,"org","org",1495985))){
try{if((ocr_77976_78695 === false)){
frontend.handler.editor.paste_text_parseable(format_78693__$1,text);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78000){if((e78000 instanceof Error)){
var e__57908__auto___78699__$1 = e78000;
if((e__57908__auto___78699__$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57908__auto___78699__$1;
}
} else {
throw e78000;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77991){if((e77991 instanceof Error)){
var e__57908__auto___78700__$1 = e77991;
if((e__57908__auto___78700__$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(format_78693__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089))){
try{if((ocr_77975_78694 === true)){
try{if((ocr_77977_78696 === false)){
frontend.handler.editor.paste_segmented_text(format_78693__$1,clojure.string.trim(text));
} else {
throw cljs.core.match.backtrack;

}
}catch (e77998){if((e77998 instanceof Error)){
var e__57908__auto___78701__$2 = e77998;
if((e__57908__auto___78701__$2 === cljs.core.match.backtrack)){
try{if((ocr_77977_78696 === true)){
cljs.core.reset_BANG_(_STAR_stop_event_QMARK_,false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77999){if((e77999 instanceof Error)){
var e__57908__auto___78702__$3 = e77999;
if((e__57908__auto___78702__$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57908__auto___78702__$3;
}
} else {
throw e77999;

}
}} else {
throw e__57908__auto___78701__$2;
}
} else {
throw e77998;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77997){if((e77997 instanceof Error)){
var e__57908__auto___78707__$2 = e77997;
if((e__57908__auto___78707__$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57908__auto___78707__$2;
}
} else {
throw e77997;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77992){if((e77992 instanceof Error)){
var e__57908__auto___78708__$2 = e77992;
if((e__57908__auto___78708__$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(format_78693__$1,new cljs.core.Keyword(null,"org","org",1495985))){
try{if((ocr_77976_78695 === true)){
try{if((ocr_77977_78696 === false)){
frontend.handler.editor.paste_segmented_text(format_78693__$1,clojure.string.trim(text));
} else {
throw cljs.core.match.backtrack;

}
}catch (e77995){if((e77995 instanceof Error)){
var e__57908__auto___78709__$3 = e77995;
if((e__57908__auto___78709__$3 === cljs.core.match.backtrack)){
try{if((ocr_77977_78696 === true)){
cljs.core.reset_BANG_(_STAR_stop_event_QMARK_,false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77996){if((e77996 instanceof Error)){
var e__57908__auto___78710__$4 = e77996;
if((e__57908__auto___78710__$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57908__auto___78710__$4;
}
} else {
throw e77996;

}
}} else {
throw e__57908__auto___78709__$3;
}
} else {
throw e77995;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77994){if((e77994 instanceof Error)){
var e__57908__auto___78711__$3 = e77994;
if((e__57908__auto___78711__$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__57908__auto___78711__$3;
}
} else {
throw e77994;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77993){if((e77993 instanceof Error)){
var e__57908__auto___78712__$3 = e77993;
if((e__57908__auto___78712__$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(format_78693__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_77975_78694)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_77976_78695)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_77977_78696)].join('')));
} else {
throw e__57908__auto___78712__$3;
}
} else {
throw e77993;

}
}} else {
throw e__57908__auto___78708__$2;
}
} else {
throw e77992;

}
}} else {
throw e__57908__auto___78700__$1;
}
} else {
throw e77991;

}
}} else {
throw e__57908__auto___78698;
}
} else {
throw e77990;

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
frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__78002_SHARP_){
return ["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__78002_SHARP_),"))"].join('');
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
var vec__78003 = (function (){var G__78006 = frontend.util.get_selection_direction(input);
switch (G__78006) {
case "backward":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_end,selected_start], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_start,selected_end], null);

}
})();
var anchor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78003,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78003,(1),null);
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
var temp__5720__auto__ = (function (){var G__78007 = frontend.state.get_selection_blocks();
var G__78007__$1 = (((G__78007 == null))?null:cljs.core.first(G__78007));
var G__78007__$2 = (((G__78007__$1 == null))?null:dommy.core.attr(G__78007__$1,"blockid"));
if((G__78007__$2 == null)){
return null;
} else {
return medley.core.uuid(G__78007__$2);
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
var G__78009 = arguments.length;
switch (G__78009) {
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

(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,p__78010){
var map__78011 = p__78010;
var map__78011__$1 = cljs.core.__destructure_map(map__78011);
var semantic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78011__$1,new cljs.core.Keyword(null,"semantic?","semantic?",-1258468577),false);
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
frontend.handler.editor.all_blocks_with_level = (function frontend$handler$editor$all_blocks_with_level(p__78012){
var map__78013 = p__78012;
var map__78013__$1 = cljs.core.__destructure_map(map__78013);
var collapse_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78013__$1,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),false);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78013__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),false);
var incremental_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78013__$1,new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),true);
var root_block = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78013__$1,new cljs.core.Keyword(null,"root-block","root-block",-645043721),null);
var temp__5720__auto__ = (function (){var or__4253__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.date.today();
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
var block_QMARK_ = frontend.util.uuid_string_QMARK_(page);
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
var blocks = (cljs.core.truth_(block_id)?(function (){var G__78014 = frontend.state.get_current_repo();
var G__78015 = block_id;
return (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(G__78014,G__78015) : frontend.db.get_block_and_children.call(null,G__78014,G__78015));
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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var G__78016 = blocks__$1;
var G__78016__$1 = (cljs.core.truth_(root_block__$1)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function frontend$handler$editor$all_blocks_with_level_$_find(root){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root_block__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root))){
return root;
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend$handler$editor$all_blocks_with_level_$_find,new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$2(root,cljs.core.PersistentVector.EMPTY)));
}
}),G__78016):G__78016);
var G__78016__$2 = (cljs.core.truth_(collapse_QMARK_)?clojure.walk.postwalk((function (b){
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
}),G__78016__$1):G__78016__$1);
var G__78016__$3 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
return cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword("block","children","block/children",-1040716209),x);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__78016__$2], 0))
;
var G__78016__$4 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
}),G__78016__$3):G__78016__$3);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("block","children","block/children",-1040716209));
}),G__78016__$4);

})());
} else {
var G__78017 = blocks;
var G__78017__$1 = (cljs.core.truth_(collapse_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.util.collapsed_QMARK_,G__78017):G__78017);
var G__78017__$2 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
}),G__78017__$1):G__78017__$1);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__78017__$2);

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
var transact_data__61861__auto___78719 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__61862__auto___78720 = (cljs.core.truth_(transact_data__61861__auto___78719)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367)], null));
if(cljs.core.truth_(transact_data__61861__auto___78719)){
var seq__78018_78721 = cljs.core.seq(block_ids__$1);
var chunk__78019_78722 = null;
var count__78020_78723 = (0);
var i__78021_78724 = (0);
while(true){
if((i__78021_78724 < count__78020_78723)){
var block_id_78725 = chunk__78019_78722.cljs$core$IIndexed$_nth$arity$2(null,i__78021_78724);
var temp__5720__auto___78726 = (function (){var G__78024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78725], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__78024) : frontend.db.entity.call(null,G__78024));
})();
if(cljs.core.truth_(temp__5720__auto___78726)){
var block_78727 = temp__5720__auto___78726;
var current_value_78728 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_78727);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_78728,value__$1)){
} else {
var block_78729__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78725,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_78729__$1);
}
} else {
}


var G__78730 = seq__78018_78721;
var G__78731 = chunk__78019_78722;
var G__78732 = count__78020_78723;
var G__78733 = (i__78021_78724 + (1));
seq__78018_78721 = G__78730;
chunk__78019_78722 = G__78731;
count__78020_78723 = G__78732;
i__78021_78724 = G__78733;
continue;
} else {
var temp__5720__auto___78734 = cljs.core.seq(seq__78018_78721);
if(temp__5720__auto___78734){
var seq__78018_78735__$1 = temp__5720__auto___78734;
if(cljs.core.chunked_seq_QMARK_(seq__78018_78735__$1)){
var c__4679__auto___78736 = cljs.core.chunk_first(seq__78018_78735__$1);
var G__78737 = cljs.core.chunk_rest(seq__78018_78735__$1);
var G__78738 = c__4679__auto___78736;
var G__78739 = cljs.core.count(c__4679__auto___78736);
var G__78740 = (0);
seq__78018_78721 = G__78737;
chunk__78019_78722 = G__78738;
count__78020_78723 = G__78739;
i__78021_78724 = G__78740;
continue;
} else {
var block_id_78741 = cljs.core.first(seq__78018_78735__$1);
var temp__5720__auto___78742__$1 = (function (){var G__78025 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78741], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__78025) : frontend.db.entity.call(null,G__78025));
})();
if(cljs.core.truth_(temp__5720__auto___78742__$1)){
var block_78743 = temp__5720__auto___78742__$1;
var current_value_78744 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_78743);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_78744,value__$1)){
} else {
var block_78745__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78741,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_78745__$1);
}
} else {
}


var G__78746 = cljs.core.next(seq__78018_78735__$1);
var G__78747 = null;
var G__78748 = (0);
var G__78749 = (0);
seq__78018_78721 = G__78746;
chunk__78019_78722 = G__78747;
count__78020_78723 = G__78748;
i__78021_78724 = G__78749;
continue;
}
} else {
}
}
break;
}
} else {
var _STAR_transaction_data_STAR__orig_val__78026_78750 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__78027_78751 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__78027_78751);

try{var seq__78028_78752 = cljs.core.seq(block_ids__$1);
var chunk__78029_78753 = null;
var count__78030_78754 = (0);
var i__78031_78755 = (0);
while(true){
if((i__78031_78755 < count__78030_78754)){
var block_id_78756 = chunk__78029_78753.cljs$core$IIndexed$_nth$arity$2(null,i__78031_78755);
var temp__5720__auto___78757 = (function (){var G__78034 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78756], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__78034) : frontend.db.entity.call(null,G__78034));
})();
if(cljs.core.truth_(temp__5720__auto___78757)){
var block_78758 = temp__5720__auto___78757;
var current_value_78759 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_78758);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_78759,value__$1)){
} else {
var block_78760__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78756,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_78760__$1);
}
} else {
}


var G__78763 = seq__78028_78752;
var G__78764 = chunk__78029_78753;
var G__78765 = count__78030_78754;
var G__78766 = (i__78031_78755 + (1));
seq__78028_78752 = G__78763;
chunk__78029_78753 = G__78764;
count__78030_78754 = G__78765;
i__78031_78755 = G__78766;
continue;
} else {
var temp__5720__auto___78767 = cljs.core.seq(seq__78028_78752);
if(temp__5720__auto___78767){
var seq__78028_78768__$1 = temp__5720__auto___78767;
if(cljs.core.chunked_seq_QMARK_(seq__78028_78768__$1)){
var c__4679__auto___78769 = cljs.core.chunk_first(seq__78028_78768__$1);
var G__78770 = cljs.core.chunk_rest(seq__78028_78768__$1);
var G__78771 = c__4679__auto___78769;
var G__78772 = cljs.core.count(c__4679__auto___78769);
var G__78773 = (0);
seq__78028_78752 = G__78770;
chunk__78029_78753 = G__78771;
count__78030_78754 = G__78772;
i__78031_78755 = G__78773;
continue;
} else {
var block_id_78774 = cljs.core.first(seq__78028_78768__$1);
var temp__5720__auto___78777__$1 = (function (){var G__78035 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78774], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__78035) : frontend.db.entity.call(null,G__78035));
})();
if(cljs.core.truth_(temp__5720__auto___78777__$1)){
var block_78778 = temp__5720__auto___78777__$1;
var current_value_78779 = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_78778);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_78779,value__$1)){
} else {
var block_78782__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_78774,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_78782__$1);
}
} else {
}


var G__78783 = cljs.core.next(seq__78028_78768__$1);
var G__78784 = null;
var G__78785 = (0);
var G__78786 = (0);
seq__78028_78752 = G__78783;
chunk__78029_78753 = G__78784;
count__78030_78754 = G__78785;
i__78031_78755 = G__78786;
continue;
}
} else {
}
}
break;
}

var r__61863__auto___78787 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__61864__auto___78788 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__61863__auto___78787], 0));
var tx_meta__61865__auto___78789 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__61863__auto___78787));
var all_tx__61866__auto___78790 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__61864__auto___78788,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78720));
var opts_SHARP___61867__auto___78791 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__61862__auto___78720,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__61865__auto___78789], 0));
if(cljs.core.seq(all_tx__61866__auto___78790)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__61862__auto___78720))){
} else {
var result__61868__auto___78794 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__61866__auto___78790,opts_SHARP___61867__auto___78791);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__61866__auto___78790,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__61865__auto___78789,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__61868__auto___78794], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__78026_78750);
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
var G__78037 = arguments.length;
switch (G__78037) {
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
var G__78796 = (level + (1));
level = G__78796;
continue;
} else {
var seq__78038 = cljs.core.seq(blocks_to_expand);
var chunk__78039 = null;
var count__78040 = (0);
var i__78041 = (0);
while(true){
if((i__78041 < count__78040)){
var map__78044 = chunk__78039.cljs$core$IIndexed$_nth$arity$2(null,i__78041);
var map__78044__$1 = cljs.core.__destructure_map(map__78044);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78044__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.expand_block_BANG_(uuid);


var G__78797 = seq__78038;
var G__78798 = chunk__78039;
var G__78799 = count__78040;
var G__78800 = (i__78041 + (1));
seq__78038 = G__78797;
chunk__78039 = G__78798;
count__78040 = G__78799;
i__78041 = G__78800;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__78038);
if(temp__5720__auto__){
var seq__78038__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78038__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__78038__$1);
var G__78801 = cljs.core.chunk_rest(seq__78038__$1);
var G__78802 = c__4679__auto__;
var G__78803 = cljs.core.count(c__4679__auto__);
var G__78804 = (0);
seq__78038 = G__78801;
chunk__78039 = G__78802;
count__78040 = G__78803;
i__78041 = G__78804;
continue;
} else {
var map__78045 = cljs.core.first(seq__78038__$1);
var map__78045__$1 = cljs.core.__destructure_map(map__78045);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78045__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.expand_block_BANG_(uuid);


var G__78805 = cljs.core.next(seq__78038__$1);
var G__78806 = null;
var G__78807 = (0);
var G__78808 = (0);
seq__78038 = G__78805;
chunk__78039 = G__78806;
count__78040 = G__78807;
i__78041 = G__78808;
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
var G__78047 = arguments.length;
switch (G__78047) {
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
var G__78812 = (level - (1));
level = G__78812;
continue;
} else {
var seq__78056 = cljs.core.seq(blocks_to_collapse);
var chunk__78057 = null;
var count__78058 = (0);
var i__78059 = (0);
while(true){
if((i__78059 < count__78058)){
var map__78062 = chunk__78057.cljs$core$IIndexed$_nth$arity$2(null,i__78059);
var map__78062__$1 = cljs.core.__destructure_map(map__78062);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78062__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.collapse_block_BANG_(uuid);


var G__78813 = seq__78056;
var G__78814 = chunk__78057;
var G__78815 = count__78058;
var G__78816 = (i__78059 + (1));
seq__78056 = G__78813;
chunk__78057 = G__78814;
count__78058 = G__78815;
i__78059 = G__78816;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__78056);
if(temp__5720__auto__){
var seq__78056__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78056__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__78056__$1);
var G__78817 = cljs.core.chunk_rest(seq__78056__$1);
var G__78818 = c__4679__auto__;
var G__78819 = cljs.core.count(c__4679__auto__);
var G__78820 = (0);
seq__78056 = G__78817;
chunk__78057 = G__78818;
count__78058 = G__78819;
i__78059 = G__78820;
continue;
} else {
var map__78063 = cljs.core.first(seq__78056__$1);
var map__78063__$1 = cljs.core.__destructure_map(map__78063);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78063__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.collapse_block_BANG_(uuid);


var G__78822 = cljs.core.next(seq__78056__$1);
var G__78823 = null;
var G__78824 = (0);
var G__78825 = (0);
seq__78056 = G__78822;
chunk__78057 = G__78823;
count__78058 = G__78824;
i__78059 = G__78825;
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
var G__78065 = arguments.length;
switch (G__78065) {
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
var G__78067 = arguments.length;
switch (G__78067) {
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
var G__78069 = arguments.length;
switch (G__78069) {
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
var map__78070 = temp__5720__auto__;
var map__78070__$1 = cljs.core.__destructure_map(map__78070);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78070__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78070__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78070__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var temp__5720__auto____$1 = (function (){var G__78071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),link], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__78071) : frontend.db.pull.call(null,G__78071));
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
var ref_block = (function (){var G__78072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),ref_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__78072) : frontend.db.entity.call(null,G__78072));
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
return cljs.core.first(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1((function (){var G__78073 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__78073) : frontend.db.entity.call(null,G__78073));
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
