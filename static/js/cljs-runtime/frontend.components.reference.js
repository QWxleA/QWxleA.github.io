goog.provide('frontend.components.reference');
frontend.components.reference.filter_dialog_inner = rum.core.lazy_build(rum.core.build_defc,(function (filters_atom,_close_fn,references,page_name){
return daiquiri.core.create_element("div",{'className':"filters"},[daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[(function (){var attrs71085 = frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("filter",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20)], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71085))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mx-auto","flex-shrink-0","flex","items-center","justify-center","h-12","w-12","rounded-full","bg-gray-200","text-gray-500","sm:mx-0","sm:h-10","sm:w-10"], null)], null),attrs71085], 0))):{'className':"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-gray-500 sm:mx-0 sm:h-10 sm:w-10"}),((cljs.core.map_QMARK_(attrs71085))?null:[daiquiri.interpreter.interpret(attrs71085)]));
})(),daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"text-lg leading-6 font-medium"},["Filter"]),daiquiri.core.create_element("span",{'className':"text-xs"},["Click to include and shift-click to exclude. Click again to remove."])])]),((cljs.core.seq(references))?(function (){var filters = rum.core.react(filters_atom);
return daiquiri.core.create_element("div",{'className':"mt-5 sm:mt-4 sm:flex sm gap-1 flex-wrap"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$reference$iter__71088(s__71089){
return (new cljs.core.LazySeq(null,(function (){
var s__71089__$1 = s__71089;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__71089__$1);
if(temp__5720__auto__){
var s__71089__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71089__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__71089__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__71091 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__71090 = (0);
while(true){
if((i__71090 < size__4651__auto__)){
var reference = cljs.core._nth(c__4650__auto__,i__71090);
cljs.core.chunk_append(b__71091,(function (){var lc_reference = clojure.string.lower_case(reference);
var filtered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,lc_reference);
var color = (function (){var pred__71092 = cljs.core._EQ_;
var expr__71093 = filtered;
if(cljs.core.truth_((pred__71092.cljs$core$IFn$_invoke$arity$2 ? pred__71092.cljs$core$IFn$_invoke$arity$2(true,expr__71093) : pred__71092.call(null,true,expr__71093)))){
return "text-green-400";
} else {
if(cljs.core.truth_((pred__71092.cljs$core$IFn$_invoke$arity$2 ? pred__71092.cljs$core$IFn$_invoke$arity$2(false,expr__71093) : pred__71092.call(null,false,expr__71093)))){
return "text-red-400";
} else {
return null;
}
}
})();
return daiquiri.core.create_element("button",{'key':reference,'style':{'borderColor':"currentColor"},'onClick':((function (i__71090,lc_reference,filtered,color,reference,c__4650__auto__,size__4651__auto__,b__71091,s__71089__$2,temp__5720__auto__,filters){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(filters_atom,((function (i__71090,lc_reference,filtered,color,reference,c__4650__auto__,size__4651__auto__,b__71091,s__71089__$2,temp__5720__auto__,filters){
return (function (p1__71084_SHARP_){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,lc_reference) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71084_SHARP_,lc_reference,cljs.core.not(e.shiftKey));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__71084_SHARP_,lc_reference);
}
});})(i__71090,lc_reference,filtered,color,reference,c__4650__auto__,size__4651__auto__,b__71091,s__71089__$2,temp__5720__auto__,filters))
);

return frontend.handler.page.save_filter_BANG_(page_name,cljs.core.deref(filters_atom));
});})(i__71090,lc_reference,filtered,color,reference,c__4650__auto__,size__4651__auto__,b__71091,s__71089__$2,temp__5720__auto__,filters))
,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","rounded","px-1","mb-1","mr-1",color], null))},[daiquiri.interpreter.interpret(reference)]);
})());

var G__71153 = (i__71090 + (1));
i__71090 = G__71153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71091),frontend$components$reference$iter__71088(cljs.core.chunk_rest(s__71089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71091),null);
}
} else {
var reference = cljs.core.first(s__71089__$2);
return cljs.core.cons((function (){var lc_reference = clojure.string.lower_case(reference);
var filtered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,lc_reference);
var color = (function (){var pred__71095 = cljs.core._EQ_;
var expr__71096 = filtered;
if(cljs.core.truth_((pred__71095.cljs$core$IFn$_invoke$arity$2 ? pred__71095.cljs$core$IFn$_invoke$arity$2(true,expr__71096) : pred__71095.call(null,true,expr__71096)))){
return "text-green-400";
} else {
if(cljs.core.truth_((pred__71095.cljs$core$IFn$_invoke$arity$2 ? pred__71095.cljs$core$IFn$_invoke$arity$2(false,expr__71096) : pred__71095.call(null,false,expr__71096)))){
return "text-red-400";
} else {
return null;
}
}
})();
return daiquiri.core.create_element("button",{'key':reference,'style':{'borderColor':"currentColor"},'onClick':((function (lc_reference,filtered,color,reference,s__71089__$2,temp__5720__auto__,filters){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(filters_atom,(function (p1__71084_SHARP_){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,lc_reference) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71084_SHARP_,lc_reference,cljs.core.not(e.shiftKey));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__71084_SHARP_,lc_reference);
}
}));

return frontend.handler.page.save_filter_BANG_(page_name,cljs.core.deref(filters_atom));
});})(lc_reference,filtered,color,reference,s__71089__$2,temp__5720__auto__,filters))
,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","rounded","px-1","mb-1","mr-1",color], null))},[daiquiri.interpreter.interpret(reference)]);
})(),frontend$components$reference$iter__71088(cljs.core.rest(s__71089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(references);
})())]);
})():null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.reference/filter-dialog-inner");
frontend.components.reference.filter_dialog = (function frontend$components$reference$filter_dialog(filters_atom,references,page_name){
return (function (close_fn){
return frontend.components.reference.filter_dialog_inner(filters_atom,close_fn,references,page_name);
});
});
frontend.components.reference.block_linked_references = rum.core.lazy_build(rum.core.build_defc,(function (block_id){
var refed_blocks_ids = frontend.db.model.get_referenced_blocks_ids(cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id));
if(cljs.core.seq(refed_blocks_ids)){
var ref_blocks = (frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1(block_id) : frontend.db.get_block_referenced_blocks.call(null,block_id));
var ref_hiccup = frontend.components.block.__GT_hiccup(ref_blocks,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id),new cljs.core.Keyword(null,"ref?","ref?",1932693720),true,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),true,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),true,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box], null),cljs.core.PersistentArrayMap.EMPTY);
return daiquiri.core.create_element("div",{'className':"references-blocks"},[frontend.components.content.content(block_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),ref_hiccup], null))]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.reference/block-linked-references");
frontend.components.reference.references_STAR_ = rum.core.lazy_build(rum.core.build_defcs,(function (state,page_name){
if(cljs.core.truth_(page_name)){
var page_name__$1 = clojure.string.lower_case(page_name);
var repo = frontend.state.get_current_repo();
var threshold = frontend.state.get_linked_references_collapsed_threshold();
var refed_blocks_ids = frontend.db.model.get_referenced_blocks_ids(page_name__$1);
var _STAR_n_ref = new cljs.core.Keyword("frontend.components.reference","n-ref","frontend.components.reference/n-ref",318098186).cljs$core$IFn$_invoke$arity$1(state);
var n_ref = (function (){var or__4253__auto__ = rum.core.react(_STAR_n_ref);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.count(refed_blocks_ids);
}
})();
var default_collapsed_QMARK_ = (cljs.core.count(refed_blocks_ids) >= threshold);
var filters_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.reference","filters","frontend.components.reference/filters",-526646216));
var filter_state = rum.core.react(filters_atom);
var block_QMARK_ = frontend.util.uuid_string_QMARK_(page_name__$1);
var block_id = (function (){var and__4251__auto__ = block_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.uuid(page_name__$1);
} else {
return and__4251__auto__;
}
})();
var page_name__$2 = clojure.string.lower_case(page_name__$1);
var journal_QMARK_ = frontend.date.valid_journal_title_QMARK_(clojure.string.capitalize(page_name__$2));
var scheduled_or_deadlines = (cljs.core.truth_((function (){var and__4251__auto__ = journal_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(frontend.state.scheduled_deadlines_disabled_QMARK_() === true))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name__$2,clojure.string.lower_case(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0()))));
} else {
return and__4251__auto__;
}
})())?(function (){var G__71099 = clojure.string.capitalize(page_name__$2);
return (frontend.db.get_date_scheduled_or_deadlines.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_date_scheduled_or_deadlines.cljs$core$IFn$_invoke$arity$1(G__71099) : frontend.db.get_date_scheduled_or_deadlines.call(null,G__71099));
})():null);
if(((cljs.core.seq(refed_blocks_ids)) || (((cljs.core.seq(scheduled_or_deadlines)) || (cljs.core.seq(filter_state)))))){
return daiquiri.core.create_element("div",{'className':"references flex-1 flex-row"},[(function (){var attrs71100 = ((cljs.core.seq(scheduled_or_deadlines))?frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-bold.opacity-50","h2.font-bold.opacity-50",1276193375),"SCHEDULED AND DEADLINE"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.references-blocks.mb-6","div.references-blocks.mb-6",-424909437),(function (){var ref_hiccup = frontend.components.block.__GT_hiccup(scheduled_or_deadlines,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),[page_name__$2,"-agenda"].join(''),new cljs.core.Keyword(null,"ref?","ref?",1932693720),true,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),true,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box], null),cljs.core.PersistentArrayMap.EMPTY);
return frontend.components.content.content(page_name__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),ref_hiccup], null));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71100))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["content","pt-6"], null)], null),attrs71100], 0))):{'className':"content pt-6"}),((cljs.core.map_QMARK_(attrs71100))?[((cljs.core.seq(refed_blocks_ids))?frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-1.justify-between.items-center","div.flex.flex-row.flex-1.justify-between.items-center",-2124603115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-bold.opacity-50","h2.font-bold.opacity-50",1276193375),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_ref)," Linked Reference",(((n_ref > (1)))?"s":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.filter.fade-link","a.filter.fade-link",2055145599),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Filter",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return frontend.util.stop_propagation(e);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var ref_blocks = (cljs.core.truth_(block_id)?(frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1(block_id) : frontend.db.get_block_referenced_blocks.call(null,block_id)):(frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1(page_name__$2) : frontend.db.get_page_referenced_blocks.call(null,page_name__$2)));
var ref_pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),cljs.core.first),ref_blocks);
var references = (frontend.db.get_page_linked_refs_refed_pages.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_linked_refs_refed_pages.cljs$core$IFn$_invoke$arity$2(repo,page_name__$2) : frontend.db.get_page_linked_refs_refed_pages.call(null,repo,page_name__$2));
var references__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ref_pages,references)));
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.reference.filter_dialog(filters_atom,references__$1,page_name__$2));
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("filter",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.empty_QMARK_(filter_state))?"":((cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.vals(filter_state)))?"text-green-400":((cljs.core.every_QMARK_(cljs.core.false_QMARK_,cljs.core.vals(filter_state)))?"text-red-400":"text-yellow-400"
))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(24)], null)], null))], null)], null),(function (){
var ref_blocks = (cljs.core.truth_(block_id)?(frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1(block_id) : frontend.db.get_block_referenced_blocks.call(null,block_id)):(frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1(page_name__$2) : frontend.db.get_page_referenced_blocks.call(null,page_name__$2)));
var filters = ((cljs.core.seq(filter_state))?medley.core.map_vals((function (p1__71098_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__71098_SHARP_);
}),cljs.core.group_by(cljs.core.second,filter_state)):null);
var filtered_ref_blocks = frontend.handler.block.filter_blocks(repo,ref_blocks,filters,true);
var n_ref__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4652__auto__ = (function frontend$components$reference$iter__71111(s__71112){
return (new cljs.core.LazySeq(null,(function (){
var s__71112__$1 = s__71112;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__71112__$1);
if(temp__5720__auto__){
var s__71112__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71112__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__71112__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__71114 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__71113 = (0);
while(true){
if((i__71113 < size__4651__auto__)){
var vec__71115 = cljs.core._nth(c__4650__auto__,i__71113);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71115,(0),null);
var rfs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71115,(1),null);
cljs.core.chunk_append(b__71114,cljs.core.count(rfs));

var G__71154 = (i__71113 + (1));
i__71113 = G__71154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71114),frontend$components$reference$iter__71111(cljs.core.chunk_rest(s__71112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71114),null);
}
} else {
var vec__71118 = cljs.core.first(s__71112__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71118,(0),null);
var rfs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71118,(1),null);
return cljs.core.cons(cljs.core.count(rfs),frontend$components$reference$iter__71111(cljs.core.rest(s__71112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(filtered_ref_blocks);
})());
cljs.core.reset_BANG_(_STAR_n_ref,n_ref__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.references-blocks","div.references-blocks",1765664017),(function (){var ref_hiccup = frontend.components.block.__GT_hiccup(filtered_ref_blocks,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),page_name__$2,new cljs.core.Keyword(null,"ref?","ref?",1932693720),true,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),true,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),true,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword(null,"filters","filters",974726919),filters], null),cljs.core.PersistentArrayMap.EMPTY);
return frontend.components.content.content(page_name__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),ref_hiccup], null));
})()], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),default_collapsed_QMARK_,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null)):null)]:[daiquiri.interpreter.interpret(attrs71100),((cljs.core.seq(refed_blocks_ids))?frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-1.justify-between.items-center","div.flex.flex-row.flex-1.justify-between.items-center",-2124603115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-bold.opacity-50","h2.font-bold.opacity-50",1276193375),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_ref)," Linked Reference",(((n_ref > (1)))?"s":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.filter.fade-link","a.filter.fade-link",2055145599),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Filter",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return frontend.util.stop_propagation(e);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var ref_blocks = (cljs.core.truth_(block_id)?(frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1(block_id) : frontend.db.get_block_referenced_blocks.call(null,block_id)):(frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1(page_name__$2) : frontend.db.get_page_referenced_blocks.call(null,page_name__$2)));
var ref_pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),cljs.core.first),ref_blocks);
var references = (frontend.db.get_page_linked_refs_refed_pages.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_linked_refs_refed_pages.cljs$core$IFn$_invoke$arity$2(repo,page_name__$2) : frontend.db.get_page_linked_refs_refed_pages.call(null,repo,page_name__$2));
var references__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ref_pages,references)));
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.reference.filter_dialog(filters_atom,references__$1,page_name__$2));
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("filter",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.empty_QMARK_(filter_state))?"":((cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.vals(filter_state)))?"text-green-400":((cljs.core.every_QMARK_(cljs.core.false_QMARK_,cljs.core.vals(filter_state)))?"text-red-400":"text-yellow-400"
))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(24)], null)], null))], null)], null),(function (){
var ref_blocks = (cljs.core.truth_(block_id)?(frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1(block_id) : frontend.db.get_block_referenced_blocks.call(null,block_id)):(frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1(page_name__$2) : frontend.db.get_page_referenced_blocks.call(null,page_name__$2)));
var filters = ((cljs.core.seq(filter_state))?medley.core.map_vals((function (p1__71098_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__71098_SHARP_);
}),cljs.core.group_by(cljs.core.second,filter_state)):null);
var filtered_ref_blocks = frontend.handler.block.filter_blocks(repo,ref_blocks,filters,true);
var n_ref__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4652__auto__ = (function frontend$components$reference$iter__71131(s__71132){
return (new cljs.core.LazySeq(null,(function (){
var s__71132__$1 = s__71132;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__71132__$1);
if(temp__5720__auto__){
var s__71132__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71132__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__71132__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__71134 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__71133 = (0);
while(true){
if((i__71133 < size__4651__auto__)){
var vec__71135 = cljs.core._nth(c__4650__auto__,i__71133);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71135,(0),null);
var rfs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71135,(1),null);
cljs.core.chunk_append(b__71134,cljs.core.count(rfs));

var G__71155 = (i__71133 + (1));
i__71133 = G__71155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71134),frontend$components$reference$iter__71131(cljs.core.chunk_rest(s__71132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71134),null);
}
} else {
var vec__71138 = cljs.core.first(s__71132__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71138,(0),null);
var rfs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71138,(1),null);
return cljs.core.cons(cljs.core.count(rfs),frontend$components$reference$iter__71131(cljs.core.rest(s__71132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(filtered_ref_blocks);
})());
cljs.core.reset_BANG_(_STAR_n_ref,n_ref__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.references-blocks","div.references-blocks",1765664017),(function (){var ref_hiccup = frontend.components.block.__GT_hiccup(filtered_ref_blocks,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),page_name__$2,new cljs.core.Keyword(null,"ref?","ref?",1932693720),true,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),true,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),true,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword(null,"filters","filters",974726919),filters], null),cljs.core.PersistentArrayMap.EMPTY);
return frontend.components.content.content(page_name__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),ref_hiccup], null));
})()], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),default_collapsed_QMARK_,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null)):null)]));
})()]);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.reference","n-ref","frontend.components.reference/n-ref",318098186)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var page_name = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var filters = (cljs.core.truth_(page_name)?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.handler.page.get_filters(clojure.string.lower_case(page_name))):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.reference","filters","frontend.components.reference/filters",-526646216),filters);
})], null)], null),"frontend.components.reference/references*");
frontend.components.reference.references = rum.core.lazy_build(rum.core.build_defc,(function (page_name){
return frontend.ui.catch_error(frontend.ui.component_error("Linked References: Unexpected error"),frontend.ui.lazy_visible((function (){
return frontend.components.reference.references_STAR_(page_name);
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-height?","reset-height?",1975120568),false], null)));
}),null,"frontend.components.reference/references");
frontend.components.reference.unlinked_references_aux = rum.core.lazy_build(rum.core.build_defcs,(function (state,page_name,_n_ref){
var ref_blocks = (frontend.db.get_page_unlinked_references.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_unlinked_references.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_unlinked_references.call(null,page_name));
var attrs71141 = (function (){var ref_hiccup = frontend.components.block.__GT_hiccup(ref_blocks,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name),"-unlinked-"].join(''),new cljs.core.Keyword(null,"ref?","ref?",1932693720),true,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),true,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box], null),cljs.core.PersistentArrayMap.EMPTY);
return frontend.components.content.content(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),ref_hiccup], null));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71141))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["references-blocks"], null)], null),attrs71141], 0))):{'className':"references-blocks"}),((cljs.core.map_QMARK_(attrs71141))?null:[daiquiri.interpreter.interpret(attrs71141)]));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
cljs.core.reset_BANG_(cljs.core.second(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4652__auto__ = (function frontend$components$reference$iter__71142(s__71143){
return (new cljs.core.LazySeq(null,(function (){
var s__71143__$1 = s__71143;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__71143__$1);
if(temp__5720__auto__){
var s__71143__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71143__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__71143__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__71145 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__71144 = (0);
while(true){
if((i__71144 < size__4651__auto__)){
var vec__71146 = cljs.core._nth(c__4650__auto__,i__71144);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71146,(0),null);
var rfs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71146,(1),null);
cljs.core.chunk_append(b__71145,cljs.core.count(rfs));

var G__71156 = (i__71144 + (1));
i__71144 = G__71156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71145),frontend$components$reference$iter__71142(cljs.core.chunk_rest(s__71143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71145),null);
}
} else {
var vec__71149 = cljs.core.first(s__71143__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71149,(0),null);
var rfs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71149,(1),null);
return cljs.core.cons(cljs.core.count(rfs),frontend$components$reference$iter__71142(cljs.core.rest(s__71143__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__((function (){var G__71152 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
return (frontend.db.get_page_unlinked_references.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_unlinked_references.cljs$core$IFn$_invoke$arity$1(G__71152) : frontend.db.get_page_unlinked_references.call(null,G__71152));
})());
})()));

return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
});
})], null)], null),"frontend.components.reference/unlinked-references-aux");
frontend.components.reference.unlinked_references = rum.core.lazy_build(rum.core.build_defcs,(function (state,page_name){
var n_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.reference","n-ref","frontend.components.reference/n-ref",318098186));
if(cljs.core.truth_(page_name)){
var page_name__$1 = clojure.string.lower_case(page_name);
return daiquiri.core.create_element("div",{'className':"references mt-6 flex-1 flex-row"},[daiquiri.core.create_element("div",{'className':"content flex-1"},[frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-bold","h2.font-bold",276534827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.3"], null)], null),(cljs.core.truth_(cljs.core.deref(n_ref))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(n_ref))," Unlinked Reference",(((cljs.core.deref(n_ref) > (1)))?"s":null)].join(''):"Unlinked References")], null),(function (){
return frontend.components.reference.unlinked_references_aux(page_name__$1,n_ref);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null))])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.reference","n-ref","frontend.components.reference/n-ref",318098186))], null),"frontend.components.reference/unlinked-references");

//# sourceMappingURL=frontend.components.reference.js.map
