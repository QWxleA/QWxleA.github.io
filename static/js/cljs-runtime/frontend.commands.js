goog.provide('frontend.commands');
goog.scope(function(){
  frontend.commands.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_show_commands !== 'undefined')){
} else {
frontend.commands._STAR_show_commands = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_slash_caret_pos !== 'undefined')){
} else {
frontend.commands._STAR_slash_caret_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_show_block_commands !== 'undefined')){
} else {
frontend.commands._STAR_show_block_commands = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands.angle_bracket !== 'undefined')){
} else {
frontend.commands.angle_bracket = "<";
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_angle_bracket_caret_pos !== 'undefined')){
} else {
frontend.commands._STAR_angle_bracket_caret_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_current_command !== 'undefined')){
} else {
frontend.commands._STAR_current_command = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.commands.query_doc = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return e.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.text-lg.mb-2","div.font-medium.text-lg.mb-2",-1087117546),"Query examples:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mb-1","ul.mb-1",682409297),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query #tag}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query [[page]]}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query \"full-text search\"}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query (and [[project]] (task NOW LATER))}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query (or [[page 1]] [[page 2]])}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query (and (between -7d +7d) (task DONE))}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query (property key value)}}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mb-1","li.mb-1",1003010017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{{query (page-tags #tag)}}"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Check more examples at ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://docs.logseq.com/#/page/queries",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Queries documentation"], null),"."], null)], null);
frontend.commands.link_steps = (function frontend$commands$link_steps(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0()),"link"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Link",new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Label"], null)], null)], null)], null);
});
frontend.commands.image_link_steps = (function frontend$commands$image_link_steps(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0()),"link"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"image-link","image-link",1877271958),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Link",new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"image-link","image-link",1877271958),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Label"], null)], null)], null)], null);
});
frontend.commands.zotero_steps = (function frontend$commands$zotero_steps(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0()),"zotero"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","show-zotero","editor/show-zotero",-1834250749)], null)], null);
});
frontend.commands._STAR_extend_slash_commands = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
frontend.commands.register_slash_command = (function frontend$commands$register_slash_command(cmd){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.commands._STAR_extend_slash_commands,cljs.core.conj,cmd);
});
frontend.commands.__GT_marker = (function frontend$commands$__GT_marker(marker){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-marker","editor/set-marker",1493445207),marker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","move-cursor-to-end","editor/move-cursor-to-end",-95512412)], null)], null);
});
frontend.commands.__GT_priority = (function frontend$commands$__GT_priority(priority){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-priority","editor/set-priority",1313333042),priority], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","move-cursor-to-end","editor/move-cursor-to-end",-95512412)], null)], null);
});
frontend.commands.__GT_inline = (function frontend$commands$__GT_inline(type){
var template = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("@@%s: @@",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),template,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null);
});
frontend.commands.embed_page = (function frontend$commands$embed_page(){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{embed [[]]}}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(4)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812),new cljs.core.Keyword(null,"embed","embed",-1354913349)], null));
});
frontend.commands.embed_block = (function frontend$commands$embed_block(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{embed (())}}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652),new cljs.core.Keyword(null,"embed","embed",-1354913349)], null)], null);
});
frontend.commands.get_preferred_workflow = (function frontend$commands$get_preferred_workflow(){
var workflow = frontend.state.get_preferred_workflow();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"now","now",-1650525531),workflow)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LATER",frontend.commands.__GT_marker("LATER")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOW",frontend.commands.__GT_marker("NOW")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TODO",frontend.commands.__GT_marker("TODO")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DOING",frontend.commands.__GT_marker("DOING")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TODO",frontend.commands.__GT_marker("TODO")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DOING",frontend.commands.__GT_marker("DOING")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LATER",frontend.commands.__GT_marker("LATER")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOW",frontend.commands.__GT_marker("NOW")], null)], null);
}
});
frontend.commands.__GT_heading = (function frontend$commands$__GT_heading(heading){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","set-heading","editor/set-heading",-2004750659),heading], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","move-cursor-to-end","editor/move-cursor-to-end",-95512412)], null)], null);
});
frontend.commands.markdown_headings = (function frontend$commands$markdown_headings(){
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(format),"markdown")){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (level){
var heading = ["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading,frontend.commands.__GT_heading(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"#")))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)));
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_matched_commands !== 'undefined')){
} else {
frontend.commands._STAR_matched_commands = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_initial_commands !== 'undefined')){
} else {
frontend.commands._STAR_initial_commands = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_first_command_group !== 'undefined')){
} else {
frontend.commands._STAR_first_command_group = new cljs.core.PersistentArrayMap(null, 6, ["Page reference","BASIC","Tomorrow","TIME & DATE","LATER","TASK","A","PRIORITY","Query","ADVANCED","Quote","ORG-MODE"], null);
}
frontend.commands.__GT_block = (function frontend$commands$__GT_block(var_args){
var G__94652 = arguments.length;
switch (G__94652) {
case 1:
return frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1 = (function (type){
return frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$2 = (function (type,optional){
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_block(),new cljs.core.Keyword("block","format","block/format",-1212045901));
var markdown_src_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"markdown","markdown",1227225089))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(type),"src")));
var vec__94659 = ((markdown_src_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["```","\n```"], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__94650_SHARP_){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(p1__94650_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.upper_case(type)], 0));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#+BEGIN_%s","\n#+END_%s"], null))
);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94659,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94659,(1),null);
var template = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),(cljs.core.truth_(optional)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(optional)].join(''):""),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(right)].join('');
var backward_pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"src"))?((1) + cljs.core.count(right)):cljs.core.count(right));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),template,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"block",new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.angle_bracket,new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),backward_pos], null)], null)], null);
}));

(frontend.commands.__GT_block.cljs$lang$maxFixedArity = 2);

frontend.commands.__GT_properties = (function frontend$commands$__GT_properties(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-bracket","editor/clear-current-bracket",-377547447)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","insert-properties","editor/insert-properties",1146378886)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","move-cursor-to-properties","editor/move-cursor-to-properties",440955147)], null)], null);
});
frontend.commands.block_commands_map = (function frontend$commands$block_commands_map(){
return frontend.util.distinct_by_last_wins(cljs.core.first,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quote",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("quote")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Src",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$2("src","")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("query")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Latex export",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$2("export","latex")], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Properties",frontend.commands.__GT_properties()], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Note",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("note")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tip",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("tip")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Important",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("important")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Caution",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("caution")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pinned",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("pinned")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Warning",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("warning")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Example",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("example")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Export",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("export")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Verse",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("verse")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ascii",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$2("export","ascii")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Center",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("center")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Comment",frontend.commands.__GT_block.cljs$core$IFn$_invoke$arity$1("comment")], null)], null),frontend.state.get_commands())));
});
frontend.commands.commands_map = (function frontend$commands$commands_map(get_page_ref_text){
return frontend.util.distinct_by_last_wins(cljs.core.first,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Page reference",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"[[]]",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812)], null)], null),"Create a backlink to a page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Page embed",frontend.commands.embed_page(),"Embed a page here"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Block reference",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"(())",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652),new cljs.core.Keyword(null,"reference","reference",-1711695023)], null)], null),"Create a backlink to a block"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Block embed",frontend.commands.embed_block(),"Embed a block here","Embed a block here"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Link",frontend.commands.link_steps(),"Create a HTTP link"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Image link",frontend.commands.image_link_steps(),"Create a HTTP link to a image"], null),((frontend.state.markdown_QMARK_())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Underline",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"<ins></ins>",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(6)], null)], null)], null),"Create a underline text decoration"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-template","editor/search-template",1915730318)], null)], null),"Insert a created template here"], null),(cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(frontend.state.get_current_repo());
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Upload an asset",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","click-hidden-file-input","editor/click-hidden-file-input",1637282337),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null),"Upload file types like image, pdf, docx, etc.)"], null):((frontend.state.deprecated_logged_QMARK_())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Upload an image",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","click-hidden-file-input","editor/click-hidden-file-input",1637282337),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)], null):null))], null),frontend.commands.markdown_headings(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tomorrow",(function (){
var G__94721 = frontend.date.tomorrow();
return (get_page_ref_text.cljs$core$IFn$_invoke$arity$1 ? get_page_ref_text.cljs$core$IFn$_invoke$arity$1(G__94721) : get_page_ref_text.call(null,G__94721));
}),"Insert the date of tomorrow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Yesterday",(function (){
var G__94726 = frontend.date.yesterday();
return (get_page_ref_text.cljs$core$IFn$_invoke$arity$1 ? get_page_ref_text.cljs$core$IFn$_invoke$arity$1(G__94726) : get_page_ref_text.call(null,G__94726));
}),"Insert the date of yesterday"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Today",(function (){
var G__94729 = frontend.date.today();
return (get_page_ref_text.cljs$core$IFn$_invoke$arity$1 ? get_page_ref_text.cljs$core$IFn$_invoke$arity$1(G__94729) : get_page_ref_text.call(null,G__94729));
}),"Insert the date of today"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Current time",(function (){
return frontend.date.get_current_time();
}),"Insert current time"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Date picker",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","show-date-picker","editor/show-date-picker",102681343)], null)], null),"Pick a date and insert here"], null)], null),frontend.commands.get_preferred_workflow(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DONE",frontend.commands.__GT_marker("DONE")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WAITING",frontend.commands.__GT_marker("WAITING")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CANCELED",frontend.commands.__GT_marker("CANCELED")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deadline",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","show-date-picker","editor/show-date-picker",102681343),new cljs.core.Keyword(null,"deadline","deadline",628964572)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scheduled",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","show-date-picker","editor/show-date-picker",102681343),new cljs.core.Keyword(null,"scheduled","scheduled",553898551)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",frontend.commands.__GT_priority("A")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B",frontend.commands.__GT_priority("B")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",frontend.commands.__GT_priority("C")], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{query }}",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null),frontend.commands.query_doc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Zotero",frontend.commands.zotero_steps(),"Import Zotero journal article"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query table function",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{function }}",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null),"Create a query table function"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calculator",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"```calc\n\n```",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(4)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("codemirror","focus","codemirror/focus",-19393885)], null)], null),"Insert a calculator"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Draw",(function (){
var file = frontend.handler.draw.file_name();
var path = [logseq.graph_parser.config.default_draw_directory,"/",file].join('');
var text = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.draw.create_draw_with_default_content(path),(function (_){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["draw file created, ",path], 0)));
}));
}));

return text;
}),"Draw a graph with Excalidraw"], null),((frontend.util.zh_CN_supported_QMARK_())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Embed Bilibili video",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{bilibili }}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Embed HTML ",frontend.commands.__GT_inline("html")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Embed Youtube video",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{youtube }}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Embed Youtube timestamp",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("youtube","insert-timestamp","youtube/insert-timestamp",-1631506319)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Embed Vimeo video",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{vimeo }}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Embed Twitter tweet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{tweet }}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null)], null)], null),cljs.core.deref(frontend.commands._STAR_extend_slash_commands),frontend.state.get_commands(),frontend.state.get_plugins_commands()], 0))));
});
frontend.commands.init_commands_BANG_ = (function frontend$commands$init_commands_BANG_(get_page_ref_text){
var commands = frontend.commands.commands_map(get_page_ref_text);
cljs.core.reset_BANG_(frontend.commands._STAR_initial_commands,commands);

return cljs.core.reset_BANG_(frontend.commands._STAR_matched_commands,commands);
});
if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands._STAR_matched_block_commands !== 'undefined')){
} else {
frontend.commands._STAR_matched_block_commands = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.commands.block_commands_map());
}
frontend.commands.restore_state = (function frontend$commands$restore_state(restore_slash_caret_pos_QMARK_){
if(cljs.core.truth_(restore_slash_caret_pos_QMARK_)){
cljs.core.reset_BANG_(frontend.commands._STAR_slash_caret_pos,null);
} else {
}

cljs.core.reset_BANG_(frontend.commands._STAR_show_commands,false);

cljs.core.reset_BANG_(frontend.commands._STAR_angle_bracket_caret_pos,null);

cljs.core.reset_BANG_(frontend.commands._STAR_show_block_commands,false);

cljs.core.reset_BANG_(frontend.commands._STAR_matched_commands,cljs.core.deref(frontend.commands._STAR_initial_commands));

return cljs.core.reset_BANG_(frontend.commands._STAR_matched_block_commands,frontend.commands.block_commands_map());
});
frontend.commands.insert_BANG_ = (function frontend$commands$insert_BANG_(id,value,p__94784){
var map__94785 = p__94784;
var map__94785__$1 = cljs.core.__destructure_map(map__94785);
var _option = map__94785__$1;
var last_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94785__$1,new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189));
var postfix_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94785__$1,new cljs.core.Keyword(null,"postfix-fn","postfix-fn",-1393704144));
var backward_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94785__$1,new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133));
var forward_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94785__$1,new cljs.core.Keyword(null,"forward-pos","forward-pos",-1445897715));
var end_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94785__$1,new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078));
var backward_truncate_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94785__$1,new cljs.core.Keyword(null,"backward-truncate-number","backward-truncate-number",-2044126744));
var temp__5720__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5720__auto__)){
var input = temp__5720__auto__;
var last_pattern__$1 = (cljs.core.truth_(backward_truncate_number)?null:(function (){var or__4253__auto__ = last_pattern;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0();
}
})());
var edit_content = frontend.commands.goog$module$goog$object.get(input,"value");
var current_pos = frontend.util.cursor.pos(input);
var current_pos__$1 = (function (){var or__4253__auto__ = (cljs.core.truth_((function (){var and__4251__auto__ = end_pattern;
if(cljs.core.truth_(and__4251__auto__)){
return typeof end_pattern === 'string';
} else {
return and__4251__auto__;
}
})())?(function (){var temp__5720__auto____$1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos),end_pattern);
if(cljs.core.truth_(temp__5720__auto____$1)){
var i = temp__5720__auto____$1;
return (current_pos + i);
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return current_pos;
}
})();
var orig_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),current_pos__$1);
var space_QMARK_ = (cljs.core.truth_((function (){var and__4251__auto__ = last_pattern__$1;
if(cljs.core.truth_(and__4251__auto__)){
return orig_prefix;
} else {
return and__4251__auto__;
}
})())?(function (){var s = (function (){var temp__5720__auto____$1 = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(orig_prefix,last_pattern__$1);
if(cljs.core.truth_(temp__5720__auto____$1)){
var last_index = temp__5720__auto____$1;
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(orig_prefix,(0),last_index);
} else {
return null;
}
})();
return cljs.core.not((function (){var or__4253__auto__ = (function (){var and__4251__auto__ = s;
if(cljs.core.truth_(and__4251__auto__)){
return ((clojure.string.ends_with_QMARK_(s,"(")) && (((clojure.string.starts_with_QMARK_(last_pattern__$1,"((")) || (clojure.string.starts_with_QMARK_(last_pattern__$1,"[[")))));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = s;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.starts_with_QMARK_(s,"{{embed");
} else {
return and__4251__auto__;
}
}
})());
})():null);
var space_QMARK___$1 = (cljs.core.truth_((function (){var and__4251__auto__ = space_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.starts_with_QMARK_(last_pattern__$1,"#[[");
} else {
return and__4251__auto__;
}
})())?false:space_QMARK_);
var prefix = (cljs.core.truth_((function (){var and__4251__auto__ = backward_truncate_number;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.integer_QMARK_(backward_truncate_number);
} else {
return and__4251__auto__;
}
})())?[logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(orig_prefix,(0),(((orig_prefix).length) - backward_truncate_number)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((backward_truncate_number === (0)))?null:value))].join(''):((clojure.string.blank_QMARK_(last_pattern__$1))?(cljs.core.truth_(space_QMARK___$1)?frontend.util.concat_without_spaces(orig_prefix,value):[orig_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')):frontend.util.replace_last.cljs$core$IFn$_invoke$arity$4(last_pattern__$1,orig_prefix,value,space_QMARK___$1)
));
var postfix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos__$1);
var postfix__$1 = (cljs.core.truth_(postfix_fn)?(postfix_fn.cljs$core$IFn$_invoke$arity$1 ? postfix_fn.cljs$core$IFn$_invoke$arity$1(postfix) : postfix_fn.call(null,postfix)):postfix);
var new_value = ((clojure.string.blank_QMARK_(postfix__$1))?prefix:(cljs.core.truth_(space_QMARK___$1)?frontend.util.concat_without_spaces(prefix,postfix__$1):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postfix__$1)].join('')
));
var new_pos = (cljs.core.count(prefix) - (function (){var or__4253__auto__ = backward_pos;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})());
frontend.state.set_block_content_and_last_pos_BANG_(id,new_value,new_pos);

return frontend.util.cursor.move_cursor_to(input,(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = backward_pos;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return forward_pos;
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(end_pattern,"]]");
} else {
return and__4251__auto__;
}
})())?new_pos:(new_pos + (1))));
} else {
return null;
}
});
frontend.commands.simple_insert_BANG_ = (function frontend$commands$simple_insert_BANG_(id,value,p__94798){
var map__94799 = p__94798;
var map__94799__$1 = cljs.core.__destructure_map(map__94799);
var _option = map__94799__$1;
var backward_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94799__$1,new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133));
var forward_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94799__$1,new cljs.core.Keyword(null,"forward-pos","forward-pos",-1445897715));
var check_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94799__$1,new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015));
var input = goog.dom.getElement(id);
var edit_content = frontend.commands.goog$module$goog$object.get(input,"value");
var current_pos = frontend.util.cursor.pos(input);
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),current_pos);
var new_value = [prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos)].join('');
var new_pos = (((((prefix).length) + cljs.core.count(value)) + (function (){var or__4253__auto__ = forward_pos;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})()) - (function (){var or__4253__auto__ = backward_pos;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})());
frontend.state.set_block_content_and_last_pos_BANG_(id,new_value,new_pos);

frontend.util.cursor.move_cursor_to(input,new_pos);

if(cljs.core.truth_(check_fn)){
var G__94808 = new_value;
var G__94809 = (((prefix).length) - (1));
var G__94810 = new_pos;
return (check_fn.cljs$core$IFn$_invoke$arity$3 ? check_fn.cljs$core$IFn$_invoke$arity$3(G__94808,G__94809,G__94810) : check_fn.call(null,G__94808,G__94809,G__94810));
} else {
return null;
}
});
frontend.commands.simple_replace_BANG_ = (function frontend$commands$simple_replace_BANG_(id,value,selected,p__94813){
var map__94814 = p__94813;
var map__94814__$1 = cljs.core.__destructure_map(map__94814);
var _option = map__94814__$1;
var backward_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94814__$1,new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133));
var forward_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94814__$1,new cljs.core.Keyword(null,"forward-pos","forward-pos",-1445897715));
var check_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94814__$1,new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015));
var selected_QMARK_ = (!(clojure.string.blank_QMARK_(selected)));
var input = goog.dom.getElement(id);
var edit_content = frontend.commands.goog$module$goog$object.get(input,"value");
var current_pos = frontend.util.cursor.pos(input);
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),current_pos);
var postfix = ((selected_QMARK_)?clojure.string.replace_first(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos),selected,""):cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos));
var new_value = [prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),postfix].join('');
var new_pos = (((((prefix).length) + cljs.core.count(value)) + (function (){var or__4253__auto__ = forward_pos;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})()) - (function (){var or__4253__auto__ = backward_pos;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})());
frontend.state.set_block_content_and_last_pos_BANG_(id,new_value,new_pos);

frontend.util.cursor.move_cursor_to(input,new_pos);

if(selected_QMARK_){
input.setSelectionRange(new_pos,(new_pos + cljs.core.count(selected)));
} else {
}

if(cljs.core.truth_(check_fn)){
var G__94815 = new_value;
var G__94816 = (((prefix).length) - (1));
return (check_fn.cljs$core$IFn$_invoke$arity$2 ? check_fn.cljs$core$IFn$_invoke$arity$2(G__94815,G__94816) : check_fn.call(null,G__94815,G__94816));
} else {
return null;
}
});
frontend.commands.delete_pair_BANG_ = (function frontend$commands$delete_pair_BANG_(id){
var input = goog.dom.getElement(id);
var edit_content = frontend.commands.goog$module$goog$object.get(input,"value");
var current_pos = frontend.util.cursor.pos(input);
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),(current_pos - (1)));
var new_value = [prefix,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,(current_pos + (1)))].join('');
var new_pos = ((prefix).length);
frontend.state.set_block_content_and_last_pos_BANG_(id,new_value,new_pos);

return frontend.util.cursor.move_cursor_to(input,new_pos);
});
frontend.commands.get_matched_commands = (function frontend$commands$get_matched_commands(var_args){
var G__94818 = arguments.length;
switch (G__94818) {
case 1:
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$1 = (function (text){
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$2(text,cljs.core.deref(frontend.commands._STAR_initial_commands));
}));

(frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$2 = (function (text,commands){
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(commands,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),cljs.core.first,new cljs.core.Keyword(null,"limit","limit",-1355822363),(50)], 0));
}));

(frontend.commands.get_matched_commands.cljs$lang$maxFixedArity = 2);

if((typeof frontend !== 'undefined') && (typeof frontend.commands !== 'undefined') && (typeof frontend.commands.handle_step !== 'undefined')){
} else {
frontend.commands.handle_step = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__94819 = cljs.core.get_global_hierarchy;
return (fexpr__94819.cljs$core$IFn$_invoke$arity$0 ? fexpr__94819.cljs$core$IFn$_invoke$arity$0() : fexpr__94819.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.commands","handle-step"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","hook","editor/hook",-624147255),(function (p__94820,format){
var vec__94821 = p__94820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94821,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94821,(1),null);
var map__94824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94821,(2),null);
var map__94824__$1 = cljs.core.__destructure_map(map__94824);
var payload = map__94824__$1;
var pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94824__$1,new cljs.core.Keyword(null,"pid","pid",1018387698));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94824__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
return frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$3(event,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(function (){var or__4253__auto__ = uuid;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
}
})()], null)], 0)),pid);
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","input","editor/input",-288966104),(function (p__94825){
var vec__94826 = p__94825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94826,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94826,(1),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94826,(2),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(option);
var input = goog.dom.getElement(input_id);
var beginning_of_line_QMARK_ = (function (){var or__4253__auto__ = frontend.util.cursor.beginning_of_line_QMARK_(input);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.commands._STAR_angle_bracket_caret_pos)));
}
})();
var value__$1 = ((((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["properties",null,"block",null], null), null),type)) && ((!(beginning_of_line_QMARK_)))))?["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''):value);
frontend.commands.insert_BANG_(input_id,value__$1,option);

return cljs.core.reset_BANG_(frontend.commands._STAR_show_commands,false);
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","cursor-back","editor/cursor-back",1400854436),(function (p__94830){
var vec__94831 = p__94830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94831,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94831,(1),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var current_input = temp__5720__auto____$1;
return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2(current_input,n);
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","cursor-forward","editor/cursor-forward",1606531112),(function (p__94834){
var vec__94839 = p__94834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94839,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94839,(1),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var current_input = temp__5720__auto____$1;
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2(current_input,n);
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","move-cursor-to-end","editor/move-cursor-to-end",-95512412),(function (p__94843){
var vec__94844 = p__94843;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94844,(0),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var current_input = temp__5720__auto____$1;
return frontend.util.cursor.move_cursor_to_end(current_input);
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","restore-saved-cursor","editor/restore-saved-cursor",-296466323),(function (p__94859){
var vec__94860 = p__94859;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94860,(0),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var current_input = temp__5720__auto____$1;
return frontend.util.cursor.move_cursor_to(current_input,frontend.state.get_editor_last_pos());
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","clear-current-slash","editor/clear-current-slash",-1115390941),(function (p__94863){
var vec__94864 = p__94863;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94864,(0),null);
var space_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94864,(1),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var current_input = temp__5720__auto____$1;
var edit_content = frontend.commands.goog$module$goog$object.get(current_input,"value");
var current_pos = frontend.util.cursor.pos(current_input);
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),current_pos);
var prefix__$1 = frontend.util.replace_last.cljs$core$IFn$_invoke$arity$4(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0(),prefix,"",cljs.core.boolean$(space_QMARK_));
var new_value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix__$1),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos)].join('');
return frontend.state.set_block_content_and_last_pos_BANG_(input_id,new_value,cljs.core.count(prefix__$1));
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","clear-current-bracket","editor/clear-current-bracket",-377547447),(function (p__94876){
var vec__94877 = p__94876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94877,(0),null);
var space_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94877,(1),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var current_input = temp__5720__auto____$1;
var edit_content = frontend.commands.goog$module$goog$object.get(current_input,"value");
var current_pos = frontend.util.cursor.pos(current_input);
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),current_pos);
var prefix__$1 = frontend.util.replace_last.cljs$core$IFn$_invoke$arity$4(frontend.commands.angle_bracket,prefix,"",cljs.core.boolean$(space_QMARK_));
var new_value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix__$1),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,current_pos)].join('');
return frontend.state.set_block_content_and_last_pos_BANG_(input_id,new_value,cljs.core.count(prefix__$1));
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.compute_pos_delta_when_change_marker = (function frontend$commands$compute_pos_delta_when_change_marker(edit_content,marker,pos){
var old_marker = (function (){var G__94892 = cljs.core.first(logseq.graph_parser.util.safe_re_find(frontend.util.marker.bare_marker_pattern,edit_content));
if((G__94892 == null)){
return null;
} else {
return clojure.string.trim(G__94892);
}
})();
var pos_delta = (cljs.core.count(marker) - cljs.core.count(old_marker));
var pos_delta__$1 = ((clojure.string.blank_QMARK_(old_marker))?(pos_delta + (1)):((clojure.string.blank_QMARK_(marker))?(pos_delta - (1)):pos_delta
));
var x__4336__auto__ = (pos + pos_delta__$1);
var y__4337__auto__ = (0);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
});
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","set-marker","editor/set-marker",1493445207),(function (p__94918,format){
var vec__94919 = p__94918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94919,(0),null);
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94919,(1),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var current_input = temp__5720__auto____$1;
var edit_content = frontend.commands.goog$module$goog$object.get(current_input,"value");
var slash_pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.commands._STAR_slash_caret_pos));
var vec__94926 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),format))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/\*+\s/,/\n\*+\s/], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/#+\s/,/\n#+\s/], null));
var re_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94926,(0),null);
var new_line_re_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94926,(1),null);
var pos = (function (){var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),(slash_pos - (1)));
var temp__5718__auto__ = cljs.core.seq(frontend.util.re_pos(new_line_re_pattern,prefix));
if(temp__5718__auto__){
var matches = temp__5718__auto__;
var vec__94933 = cljs.core.last(matches);
var start_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94933,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94933,(1),null);
return (start_pos + cljs.core.count(content));
} else {
return cljs.core.count(logseq.graph_parser.util.safe_re_find(re_pattern,prefix));
}
})();
var new_value = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,(0),pos),clojure.string.replace_first(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(edit_content,pos),frontend.util.marker.marker_pattern(format),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker)," "].join(''))].join('');
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_value);

var new_pos = frontend.commands.compute_pos_delta_when_change_marker(edit_content,marker,(slash_pos - (1)));
return setTimeout((function (){
return frontend.util.cursor.move_cursor_to(current_input,new_pos);
}),(10));
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","set-priority","editor/set-priority",1313333042),(function (p__94942,_format){
var vec__94943 = p__94942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94943,(0),null);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94943,(1),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var current_input = temp__5720__auto____$1;
var format = (function (){var or__4253__auto__ = (function (){var G__94946 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__94946) : frontend.db.get_page_format.call(null,G__94946));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var edit_content = frontend.commands.goog$module$goog$object.get(current_input,"value");
var new_priority = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority], 0));
var new_value = clojure.string.trim(frontend.util.priority.add_or_update_priority(edit_content,format,new_priority));
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_value);
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","insert-properties","editor/insert-properties",1146378886),(function (p__94948,_format){
var vec__94949 = p__94948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94949,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94949,(1),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var current_input = temp__5720__auto____$1;
var format = (function (){var or__4253__auto__ = (function (){var G__94956 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__94956) : frontend.db.get_page_format.call(null,G__94956));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var edit_content = frontend.commands.goog$module$goog$object.get(current_input,"value");
var new_value = frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format,edit_content,"","");
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_value);
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","move-cursor-to-properties","editor/move-cursor-to-properties",440955147),(function (p__94960){
var vec__94961 = p__94960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94961,(0),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var current_input = temp__5720__auto____$1;
var format = (function (){var or__4253__auto__ = (function (){var G__94968 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__94968) : frontend.db.get_page_format.call(null,G__94968));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
frontend.util.property.goto_properties_end(format,current_input);

return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2(current_input,(3));
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","set-heading","editor/set-heading",-2004750659),(function (p__94991){
var vec__94992 = p__94991;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94992,(0),null);
var heading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94992,(1),null);
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var current_input = temp__5720__auto____$1;
var edit_content = frontend.commands.goog$module$goog$object.get(current_input,"value");
var heading_pattern = /^#+\s+/;
var new_value = (cljs.core.truth_(logseq.graph_parser.util.safe_re_find(heading_pattern,edit_content))?clojure.string.replace_first(edit_content,heading_pattern,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)," "].join('')):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)," ",clojure.string.triml(edit_content)].join('')
);
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_value);
} else {
return null;
}
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812),(function (p__95003){
var vec__95004 = p__95003;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95004,(0),null);
return frontend.state.set_editor_show_page_search_BANG_(true);
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","search-page-hashtag","editor/search-page-hashtag",2082188401),(function (p__95007){
var vec__95008 = p__95007;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95008,(0),null);
return frontend.state.set_editor_show_page_search_hashtag_BANG_(true);
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652),(function (p__95011){
var vec__95012 = p__95011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95012,(0),null);
var _type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95012,(1),null);
return frontend.state.set_editor_show_block_search_BANG_(true);
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","search-template","editor/search-template",1915730318),(function (p__95015){
var vec__95016 = p__95015;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95016,(0),null);
return frontend.state.set_editor_show_template_search_BANG_(true);
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241),(function (p__95019){
var vec__95020 = p__95019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95020,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95020,(1),null);
return frontend.state.set_editor_show_input_BANG_(option);
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","show-zotero","editor/show-zotero",-1834250749),(function (p__95023){
var vec__95024 = p__95023;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95024,(0),null);
return frontend.state.set_editor_show_zotero_BANG_(true);
}));
frontend.commands.insert_youtube_timestamp = (function frontend$commands$insert_youtube_timestamp(){
var input_id = frontend.state.get_edit_input_id();
var macro = frontend.extensions.video.youtube.gen_youtube_ts_macro();
var temp__5720__auto__ = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto__)){
var input = temp__5720__auto__;
if(cljs.core.truth_(macro)){
return frontend.util.insert_at_current_position_BANG_(input,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro)," "].join(''));
} else {
return null;
}
} else {
return null;
}
});
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("youtube","insert-timestamp","youtube/insert-timestamp",-1631506319),(function (p__95027){
var vec__95028 = p__95027;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95028,(0),null);
var input_id = frontend.state.get_edit_input_id();
var macro = frontend.extensions.video.youtube.gen_youtube_ts_macro();
return frontend.commands.insert_BANG_(input_id,macro,cljs.core.PersistentArrayMap.EMPTY);
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","show-date-picker","editor/show-date-picker",102681343),(function (p__95031){
var vec__95032 = p__95031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95032,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95032,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),null,new cljs.core.Keyword(null,"deadline","deadline",628964572),null], null), null),type);
if(and__4251__auto__){
var temp__5720__auto__ = frontend.commands.goog$module$goog$object.get(frontend.state.get_input(),"value");
if(cljs.core.truth_(temp__5720__auto__)){
var value = temp__5720__auto__;
return clojure.string.blank_QMARK_(value);
} else {
return null;
}
} else {
return and__4251__auto__;
}
})())){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Please add some content first."], null),new cljs.core.Keyword(null,"warning","warning",-1685650671));

return frontend.commands.restore_state(false);
} else {
return frontend.state.set_editor_show_date_picker_BANG_(true);
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","click-hidden-file-input","editor/click-hidden-file-input",1637282337),(function (p__95036){
var vec__95037 = p__95036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95037,(0),null);
var _input_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95037,(1),null);
var temp__5720__auto__ = goog.dom.getElement("upload-file");
if(cljs.core.truth_(temp__5720__auto__)){
var input_file = temp__5720__auto__;
return input_file.click();
} else {
return null;
}
}));
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__95040){
var vec__95041 = p__95040;
var seq__95042 = cljs.core.seq(vec__95041);
var first__95043 = cljs.core.first(seq__95042);
var seq__95042__$1 = cljs.core.next(seq__95042);
var type = first__95043;
var _args = seq__95042__$1;
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No handler for step: ",type], 0));
}));
frontend.commands.handle_steps = (function frontend$commands$handle_steps(vector,format){
var seq__95045 = cljs.core.seq(vector);
var chunk__95046 = null;
var count__95047 = (0);
var i__95048 = (0);
while(true){
if((i__95048 < count__95047)){
var step = chunk__95046.cljs$core$IIndexed$_nth$arity$2(null,i__95048);
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$2(step,format);


var G__95156 = seq__95045;
var G__95157 = chunk__95046;
var G__95158 = count__95047;
var G__95159 = (i__95048 + (1));
seq__95045 = G__95156;
chunk__95046 = G__95157;
count__95047 = G__95158;
i__95048 = G__95159;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__95045);
if(temp__5720__auto__){
var seq__95045__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__95045__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__95045__$1);
var G__95161 = cljs.core.chunk_rest(seq__95045__$1);
var G__95162 = c__4679__auto__;
var G__95163 = cljs.core.count(c__4679__auto__);
var G__95164 = (0);
seq__95045 = G__95161;
chunk__95046 = G__95162;
count__95047 = G__95163;
i__95048 = G__95164;
continue;
} else {
var step = cljs.core.first(seq__95045__$1);
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$2(step,format);


var G__95165 = cljs.core.next(seq__95045__$1);
var G__95166 = null;
var G__95167 = (0);
var G__95168 = (0);
seq__95045 = G__95165;
chunk__95046 = G__95166;
count__95047 = G__95167;
i__95048 = G__95168;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.commands.exec_plugin_simple_command_BANG_ = (function frontend$commands$exec_plugin_simple_command_BANG_(pid,p__95052,action){
var map__95053 = p__95052;
var map__95053__$1 = cljs.core.__destructure_map(map__95053);
var cmd = map__95053__$1;
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95053__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var format = (function (){var and__4251__auto__ = block_id;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null)));
} else {
return and__4251__auto__;
}
})();
var inputs = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.conj.cljs$core$IFn$_invoke$arity$2(action,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"pid","pid",1018387698),pid))],null));
return frontend.commands.handle_steps(inputs,format);
});

//# sourceMappingURL=frontend.commands.js.map
