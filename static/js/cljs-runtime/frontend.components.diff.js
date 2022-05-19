goog.provide('frontend.components.diff');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.diff !== 'undefined') && (typeof frontend.components.diff.disk_value !== 'undefined')){
} else {
frontend.components.diff.disk_value = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.diff !== 'undefined') && (typeof frontend.components.diff.db_value !== 'undefined')){
} else {
frontend.components.diff.db_value = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.diff.diff_cp = rum.core.lazy_build(rum.core.build_defc,(function (diff){
return daiquiri.core.create_element("div",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$diff$iter__70923(s__70924){
return (new cljs.core.LazySeq(null,(function (){
var s__70924__$1 = s__70924;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70924__$1);
if(temp__5720__auto__){
var s__70924__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70924__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70924__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70926 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70925 = (0);
while(true){
if((i__70925 < size__4651__auto__)){
var vec__70927 = cljs.core._nth(c__4650__auto__,i__70925);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70927,(0),null);
var map__70930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70927,(1),null);
var map__70930__$1 = cljs.core.__destructure_map(map__70930);
var added = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70930__$1,new cljs.core.Keyword(null,"added","added",2057651688));
var removed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70930__$1,new cljs.core.Keyword(null,"removed","removed",609626430));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70930__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.chunk_append(b__70926,(function (){var bg_color = (cljs.core.truth_(added)?"#057a55":(cljs.core.truth_(removed)?"#d61f69":"initial"
));
return daiquiri.core.create_element("span",{'key':idx,'style':{'backgroundColor':bg_color},'className':"diff"},[daiquiri.interpreter.interpret(value)]);
})());

var G__70973 = (i__70925 + (1));
i__70925 = G__70973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70926),frontend$components$diff$iter__70923(cljs.core.chunk_rest(s__70924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70926),null);
}
} else {
var vec__70934 = cljs.core.first(s__70924__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70934,(0),null);
var map__70937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70934,(1),null);
var map__70937__$1 = cljs.core.__destructure_map(map__70937);
var added = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70937__$1,new cljs.core.Keyword(null,"added","added",2057651688));
var removed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70937__$1,new cljs.core.Keyword(null,"removed","removed",609626430));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70937__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.cons((function (){var bg_color = (cljs.core.truth_(added)?"#057a55":(cljs.core.truth_(removed)?"#d61f69":"initial"
));
return daiquiri.core.create_element("span",{'key':idx,'style':{'backgroundColor':bg_color},'className':"diff"},[daiquiri.interpreter.interpret(value)]);
})(),frontend$components$diff$iter__70923(cljs.core.rest(s__70924__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(diff);
})())]);
}),null,"frontend.components.diff/diff-cp");
frontend.components.diff.local_file = rum.core.lazy_build(rum.core.build_defcs,(function (state,repo,path,disk_content,db_content){
if((cljs.core.deref(frontend.components.diff.disk_value) == null)){
cljs.core.reset_BANG_(frontend.components.diff.disk_value,disk_content);

cljs.core.reset_BANG_(frontend.components.diff.db_value,db_content);
} else {
}

return daiquiri.core.create_element("div",{'className':"cp__diff-file"},[daiquiri.core.create_element("div",{'className':"cp__diff-file-header"},[daiquiri.core.create_element("span",{'className':"cp__diff-file-header-content pl-1 font-medium"},[["File ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," has been modified on the disk."].join('')])]),(function (){var attrs70951 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(disk_content),clojure.string.trim(db_content)))?frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium.ml-1","span.text-sm.font-medium.ml-1",352275058),"Check diff"], null),(function (){
var local_content = (function (){var or__4253__auto__ = db_content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
var content = (function (){var or__4253__auto__ = disk_content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
var diff = medley.core.indexed.cljs$core$IFn$_invoke$arity$1(frontend.diff.diff(local_content,content));
var diff_QMARK_ = cljs.core.some((function (p__70957){
var vec__70958 = p__70957;
var _idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70958,(0),null);
var map__70961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70958,(1),null);
var map__70961__$1 = cljs.core.__destructure_map(map__70961);
var added = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70961__$1,new cljs.core.Keyword(null,"added","added",2057651688));
var removed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70961__$1,new cljs.core.Keyword(null,"removed","removed",609626430));
var or__4253__auto__ = added;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return removed;
}
}),diff);
if(cljs.core.truth_(diff_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-y-scroll.flex.flex-col","div.overflow-y-scroll.flex.flex-col",-1644783899),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"65vh"], null)], null),frontend.components.diff.diff_cp(diff)], null)], null);
} else {
return null;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs70951))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["p-4"], null)], null),attrs70951], 0))):{'className':"p-4"}),((cljs.core.map_QMARK_(attrs70951))?[daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("div",{'className':"flex flex-col mt-4 sm:flex-row"},[daiquiri.core.create_element("div",{'className':"flex-1"},[daiquiri.core.create_element("div",{'className':"mb-2"},["On disk:"]),daiquiri.core.create_element("textarea",{'value':rum.core.react(frontend.components.diff.disk_value),'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(frontend.components.diff.disk_value,frontend.util.evalue(e));
})),'className':"overflow-auto"},[daiquiri.interpreter.interpret(disk_content)]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Select this",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5720__auto___70974 = cljs.core.deref(frontend.components.diff.disk_value);
if(cljs.core.truth_(temp__5720__auto___70974)){
var value_70975 = temp__5720__auto___70974;
frontend.handler.file.alter_file(repo,path,value_70975,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),true,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
} else {
}

return frontend.state.close_modal_BANG_();
})], 0)))]),daiquiri.core.create_element("div",{'className':"flex-1 mt-8 sm:ml-4 sm:mt-0"},[daiquiri.core.create_element("div",{'className':"mb-2"},["In Logseq:"]),daiquiri.core.create_element("textarea",{'value':rum.core.react(frontend.components.diff.db_value),'onChange':rum.core.mark_sync_update((function (e){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new-value: ",frontend.util.evalue(e)], 0));

return cljs.core.reset_BANG_(frontend.components.diff.db_value,frontend.util.evalue(e));
})),'className':"overflow-auto"},[daiquiri.interpreter.interpret(db_content)]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Select this",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5720__auto___70976 = cljs.core.deref(frontend.components.diff.db_value);
if(cljs.core.truth_(temp__5720__auto___70976)){
var value_70977 = temp__5720__auto___70976;
frontend.handler.file.alter_file(repo,path,value_70977,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),true,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
} else {
}

return frontend.state.close_modal_BANG_();
})], 0)))])])]:[daiquiri.interpreter.interpret(attrs70951),daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("div",{'className':"flex flex-col mt-4 sm:flex-row"},[daiquiri.core.create_element("div",{'className':"flex-1"},[daiquiri.core.create_element("div",{'className':"mb-2"},["On disk:"]),daiquiri.core.create_element("textarea",{'value':rum.core.react(frontend.components.diff.disk_value),'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(frontend.components.diff.disk_value,frontend.util.evalue(e));
})),'className':"overflow-auto"},[daiquiri.interpreter.interpret(disk_content)]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Select this",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5720__auto___70978 = cljs.core.deref(frontend.components.diff.disk_value);
if(cljs.core.truth_(temp__5720__auto___70978)){
var value_70979 = temp__5720__auto___70978;
frontend.handler.file.alter_file(repo,path,value_70979,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),true,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
} else {
}

return frontend.state.close_modal_BANG_();
})], 0)))]),daiquiri.core.create_element("div",{'className':"flex-1 mt-8 sm:ml-4 sm:mt-0"},[daiquiri.core.create_element("div",{'className':"mb-2"},["In Logseq:"]),daiquiri.core.create_element("textarea",{'value':rum.core.react(frontend.components.diff.db_value),'onChange':rum.core.mark_sync_update((function (e){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new-value: ",frontend.util.evalue(e)], 0));

return cljs.core.reset_BANG_(frontend.components.diff.db_value,frontend.util.evalue(e));
})),'className':"overflow-auto"},[daiquiri.interpreter.interpret(db_content)]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Select this",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5720__auto___70980 = cljs.core.deref(frontend.components.diff.db_value);
if(cljs.core.truth_(temp__5720__auto___70980)){
var value_70981 = temp__5720__auto___70980;
frontend.handler.file.alter_file(repo,path,value_70981,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),true,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
} else {
}

return frontend.state.close_modal_BANG_();
})], 0)))])])]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.components.diff.disk_value,null);

cljs.core.reset_BANG_(frontend.components.diff.db_value,null);

return state;
})], null)], null),"frontend.components.diff/local-file");

//# sourceMappingURL=frontend.components.diff.js.map
