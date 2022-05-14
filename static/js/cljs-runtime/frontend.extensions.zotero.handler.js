goog.provide('frontend.extensions.zotero.handler');
frontend.extensions.zotero.handler.add = (function frontend$extensions$zotero$handler$add(page_name,type,item){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67789){
var state_val_67790 = (state_67789[(1)]);
if((state_val_67790 === (7))){
var inst_67704 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244));
var state_67789__$1 = state_67789;
var statearr_67791_68018 = state_67789__$1;
(statearr_67791_68018[(2)] = inst_67704);

(statearr_67791_68018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (20))){
var inst_67784 = (state_67789[(2)]);
var state_67789__$1 = state_67789;
var statearr_67792_68019 = state_67789__$1;
(statearr_67792_68019[(2)] = inst_67784);

(statearr_67792_68019[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (27))){
var inst_67754 = (state_67789[(7)]);
var inst_67738 = (state_67789[(8)]);
var inst_67754__$1 = cljs.core.seq(inst_67738);
var state_67789__$1 = (function (){var statearr_67793 = state_67789;
(statearr_67793[(7)] = inst_67754__$1);

return statearr_67793;
})();
if(inst_67754__$1){
var statearr_67794_68020 = state_67789__$1;
(statearr_67794_68020[(1)] = (29));

} else {
var statearr_67795_68021 = state_67789__$1;
(statearr_67795_68021[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (1))){
var inst_67695 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
var inst_67696 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(item);
var inst_67697 = new cljs.core.Keyword(null,"num-children","num-children",-1656107233).cljs$core$IFn$_invoke$arity$1(inst_67696);
var state_67789__$1 = (function (){var statearr_67796 = state_67789;
(statearr_67796[(9)] = inst_67697);

(statearr_67796[(10)] = inst_67695);

return statearr_67796;
})();
var G__67797_68022 = type;
var G__67797_68023__$1 = (((G__67797_68022 instanceof cljs.core.Keyword))?G__67797_68022.fqn:null);
switch (G__67797_68023__$1) {
case "notes":
var statearr_67798_68025 = state_67789__$1;
(statearr_67798_68025[(1)] = (3));


break;
case "attachments":
var statearr_67799_68026 = state_67789__$1;
(statearr_67799_68026[(1)] = (4));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67797_68023__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (24))){
var inst_67741 = (state_67789[(11)]);
var inst_67740 = (state_67789[(12)]);
var inst_67743 = (inst_67741 < inst_67740);
var inst_67744 = inst_67743;
var state_67789__$1 = state_67789;
if(cljs.core.truth_(inst_67744)){
var statearr_67800_68027 = state_67789__$1;
(statearr_67800_68027[(1)] = (26));

} else {
var statearr_67801_68028 = state_67789__$1;
(statearr_67801_68028[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (4))){
var state_67789__$1 = state_67789;
var statearr_67802_68029 = state_67789__$1;
(statearr_67802_68029[(2)] = frontend.extensions.zotero.api.attachments);

(statearr_67802_68029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (15))){
var state_67789__$1 = state_67789;
var statearr_67803_68030 = state_67789__$1;
(statearr_67803_68030[(2)] = null);

(statearr_67803_68030[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (21))){
var inst_67724 = (state_67789[(13)]);
var inst_67737 = cljs.core.seq(inst_67724);
var inst_67738 = inst_67737;
var inst_67739 = null;
var inst_67740 = (0);
var inst_67741 = (0);
var state_67789__$1 = (function (){var statearr_67804 = state_67789;
(statearr_67804[(14)] = inst_67739);

(statearr_67804[(11)] = inst_67741);

(statearr_67804[(12)] = inst_67740);

(statearr_67804[(8)] = inst_67738);

return statearr_67804;
})();
var statearr_67805_68031 = state_67789__$1;
(statearr_67805_68031[(2)] = null);

(statearr_67805_68031[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (31))){
var inst_67774 = (state_67789[(2)]);
var state_67789__$1 = state_67789;
var statearr_67806_68032 = state_67789__$1;
(statearr_67806_68032[(2)] = inst_67774);

(statearr_67806_68032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (32))){
var inst_67754 = (state_67789[(7)]);
var inst_67758 = cljs.core.chunk_first(inst_67754);
var inst_67759 = cljs.core.chunk_rest(inst_67754);
var inst_67760 = cljs.core.count(inst_67758);
var inst_67738 = inst_67759;
var inst_67739 = inst_67758;
var inst_67740 = inst_67760;
var inst_67741 = (0);
var state_67789__$1 = (function (){var statearr_67807 = state_67789;
(statearr_67807[(14)] = inst_67739);

(statearr_67807[(11)] = inst_67741);

(statearr_67807[(12)] = inst_67740);

(statearr_67807[(8)] = inst_67738);

return statearr_67807;
})();
var statearr_67808_68033 = state_67789__$1;
(statearr_67808_68033[(2)] = null);

(statearr_67808_68033[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (33))){
var inst_67731 = (state_67789[(15)]);
var inst_67754 = (state_67789[(7)]);
var inst_67763 = cljs.core.first(inst_67754);
var inst_67764 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_67765 = [inst_67731,false,false];
var inst_67766 = cljs.core.PersistentHashMap.fromArrays(inst_67764,inst_67765);
var inst_67767 = frontend.handler.editor.api_insert_new_block_BANG_(inst_67763,inst_67766);
var inst_67768 = cljs.core.next(inst_67754);
var inst_67738 = inst_67768;
var inst_67739 = null;
var inst_67740 = (0);
var inst_67741 = (0);
var state_67789__$1 = (function (){var statearr_67809 = state_67789;
(statearr_67809[(14)] = inst_67739);

(statearr_67809[(16)] = inst_67767);

(statearr_67809[(11)] = inst_67741);

(statearr_67809[(12)] = inst_67740);

(statearr_67809[(8)] = inst_67738);

return statearr_67809;
})();
var statearr_67810_68034 = state_67789__$1;
(statearr_67810_68034[(2)] = null);

(statearr_67810_68034[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (13))){
var inst_67718 = (state_67789[(2)]);
var state_67789__$1 = state_67789;
if(cljs.core.truth_(inst_67718)){
var statearr_67811_68035 = state_67789__$1;
(statearr_67811_68035[(1)] = (14));

} else {
var statearr_67812_68036 = state_67789__$1;
(statearr_67812_68036[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (22))){
var state_67789__$1 = state_67789;
var statearr_67813_68037 = state_67789__$1;
(statearr_67813_68037[(2)] = null);

(statearr_67813_68037[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (29))){
var inst_67754 = (state_67789[(7)]);
var inst_67756 = cljs.core.chunked_seq_QMARK_(inst_67754);
var state_67789__$1 = state_67789;
if(inst_67756){
var statearr_67814_68038 = state_67789__$1;
(statearr_67814_68038[(1)] = (32));

} else {
var statearr_67815_68039 = state_67789__$1;
(statearr_67815_68039[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (6))){
var inst_67702 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518));
var state_67789__$1 = state_67789;
var statearr_67816_68040 = state_67789__$1;
(statearr_67816_68040[(2)] = inst_67702);

(statearr_67816_68040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (28))){
var inst_67776 = (state_67789[(2)]);
var state_67789__$1 = state_67789;
var statearr_67817_68041 = state_67789__$1;
(statearr_67817_68041[(2)] = inst_67776);

(statearr_67817_68041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (25))){
var inst_67778 = (state_67789[(2)]);
var state_67789__$1 = state_67789;
var statearr_67818_68042 = state_67789__$1;
(statearr_67818_68042[(2)] = inst_67778);

(statearr_67818_68042[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (34))){
var inst_67771 = (state_67789[(2)]);
var state_67789__$1 = state_67789;
var statearr_67819_68043 = state_67789__$1;
(statearr_67819_68043[(2)] = inst_67771);

(statearr_67819_68043[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (17))){
var inst_67724 = (state_67789[(13)]);
var inst_67722 = (state_67789[(2)]);
var inst_67723 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.extractor.extract,inst_67722);
var inst_67724__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,inst_67723);
var inst_67725 = cljs.core.not_empty(inst_67724__$1);
var state_67789__$1 = (function (){var statearr_67820 = state_67789;
(statearr_67820[(13)] = inst_67724__$1);

return statearr_67820;
})();
if(cljs.core.truth_(inst_67725)){
var statearr_67821_68044 = state_67789__$1;
(statearr_67821_68044[(1)] = (18));

} else {
var statearr_67822_68045 = state_67789__$1;
(statearr_67822_68045[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (3))){
var state_67789__$1 = state_67789;
var statearr_67823_68046 = state_67789__$1;
(statearr_67823_68046[(2)] = frontend.extensions.zotero.api.notes);

(statearr_67823_68046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (12))){
var inst_67713 = (state_67789[(17)]);
var state_67789__$1 = state_67789;
var statearr_67824_68047 = state_67789__$1;
(statearr_67824_68047[(2)] = inst_67713);

(statearr_67824_68047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (2))){
var inst_67701 = (state_67789[(2)]);
var state_67789__$1 = (function (){var statearr_67825 = state_67789;
(statearr_67825[(18)] = inst_67701);

return statearr_67825;
})();
var G__67826_68048 = type;
var G__67826_68049__$1 = (((G__67826_68048 instanceof cljs.core.Keyword))?G__67826_68048.fqn:null);
switch (G__67826_68049__$1) {
case "notes":
var statearr_67827_68051 = state_67789__$1;
(statearr_67827_68051[(1)] = (6));


break;
case "attachments":
var statearr_67828_68052 = state_67789__$1;
(statearr_67828_68052[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67826_68049__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (23))){
var inst_67781 = (state_67789[(2)]);
var state_67789__$1 = state_67789;
var statearr_67829_68053 = state_67789__$1;
(statearr_67829_68053[(2)] = inst_67781);

(statearr_67829_68053[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (19))){
var state_67789__$1 = state_67789;
var statearr_67830_68054 = state_67789__$1;
(statearr_67830_68054[(2)] = null);

(statearr_67830_68054[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (11))){
var inst_67697 = (state_67789[(9)]);
var inst_67715 = (inst_67697 > (0));
var state_67789__$1 = state_67789;
var statearr_67831_68055 = state_67789__$1;
(statearr_67831_68055[(2)] = inst_67715);

(statearr_67831_68055[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (9))){
var inst_67708 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915));
var state_67789__$1 = state_67789;
var statearr_67832_68056 = state_67789__$1;
(statearr_67832_68056[(2)] = inst_67708);

(statearr_67832_68056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (5))){
var inst_67707 = (state_67789[(2)]);
var state_67789__$1 = (function (){var statearr_67836 = state_67789;
(statearr_67836[(19)] = inst_67707);

return statearr_67836;
})();
var G__67837_68057 = type;
var G__67837_68058__$1 = (((G__67837_68057 instanceof cljs.core.Keyword))?G__67837_68057.fqn:null);
switch (G__67837_68058__$1) {
case "notes":
var statearr_67838_68060 = state_67789__$1;
(statearr_67838_68060[(1)] = (9));


break;
case "attachments":
var statearr_67839_68061 = state_67789__$1;
(statearr_67839_68061[(1)] = (10));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67837_68058__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (14))){
var inst_67695 = (state_67789[(10)]);
var inst_67701 = (state_67789[(18)]);
var inst_67720 = (inst_67701.cljs$core$IFn$_invoke$arity$1 ? inst_67701.cljs$core$IFn$_invoke$arity$1(inst_67695) : inst_67701.call(null,inst_67695));
var state_67789__$1 = state_67789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67789__$1,(17),inst_67720);
} else {
if((state_val_67790 === (26))){
var inst_67731 = (state_67789[(15)]);
var inst_67739 = (state_67789[(14)]);
var inst_67741 = (state_67789[(11)]);
var inst_67740 = (state_67789[(12)]);
var inst_67738 = (state_67789[(8)]);
var inst_67746 = cljs.core._nth(inst_67739,inst_67741);
var inst_67747 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_67748 = [inst_67731,false,false];
var inst_67749 = cljs.core.PersistentHashMap.fromArrays(inst_67747,inst_67748);
var inst_67750 = frontend.handler.editor.api_insert_new_block_BANG_(inst_67746,inst_67749);
var inst_67751 = (inst_67741 + (1));
var tmp67833 = inst_67739;
var tmp67834 = inst_67740;
var tmp67835 = inst_67738;
var inst_67738__$1 = tmp67835;
var inst_67739__$1 = tmp67833;
var inst_67740__$1 = tmp67834;
var inst_67741__$1 = inst_67751;
var state_67789__$1 = (function (){var statearr_67840 = state_67789;
(statearr_67840[(14)] = inst_67739__$1);

(statearr_67840[(20)] = inst_67750);

(statearr_67840[(11)] = inst_67741__$1);

(statearr_67840[(12)] = inst_67740__$1);

(statearr_67840[(8)] = inst_67738__$1);

return statearr_67840;
})();
var statearr_67841_68062 = state_67789__$1;
(statearr_67841_68062[(2)] = null);

(statearr_67841_68062[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (16))){
var inst_67787 = (state_67789[(2)]);
var state_67789__$1 = state_67789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67789__$1,inst_67787);
} else {
if((state_val_67790 === (30))){
var state_67789__$1 = state_67789;
var statearr_67842_68063 = state_67789__$1;
(statearr_67842_68063[(2)] = null);

(statearr_67842_68063[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (10))){
var inst_67710 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115));
var state_67789__$1 = state_67789;
var statearr_67843_68064 = state_67789__$1;
(statearr_67843_68064[(2)] = inst_67710);

(statearr_67843_68064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (18))){
var inst_67731 = (state_67789[(15)]);
var inst_67707 = (state_67789[(19)]);
var inst_67727 = [new cljs.core.Keyword(null,"page","page",849072397)];
var inst_67728 = [page_name];
var inst_67729 = cljs.core.PersistentHashMap.fromArrays(inst_67727,inst_67728);
var inst_67730 = frontend.handler.editor.api_insert_new_block_BANG_(inst_67707,inst_67729);
var inst_67731__$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(inst_67730);
var state_67789__$1 = (function (){var statearr_67844 = state_67789;
(statearr_67844[(15)] = inst_67731__$1);

return statearr_67844;
})();
if(cljs.core.truth_(inst_67731__$1)){
var statearr_67845_68065 = state_67789__$1;
(statearr_67845_68065[(1)] = (21));

} else {
var statearr_67846_68066 = state_67789__$1;
(statearr_67846_68066[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67790 === (8))){
var inst_67713 = (state_67789[(17)]);
var inst_67713__$1 = (state_67789[(2)]);
var state_67789__$1 = (function (){var statearr_67847 = state_67789;
(statearr_67847[(17)] = inst_67713__$1);

return statearr_67847;
})();
if(cljs.core.truth_(inst_67713__$1)){
var statearr_67848_68067 = state_67789__$1;
(statearr_67848_68067[(1)] = (11));

} else {
var statearr_67849_68068 = state_67789__$1;
(statearr_67849_68068[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var frontend$extensions$zotero$handler$add_$_state_machine__41839__auto__ = null;
var frontend$extensions$zotero$handler$add_$_state_machine__41839__auto____0 = (function (){
var statearr_67850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67850[(0)] = frontend$extensions$zotero$handler$add_$_state_machine__41839__auto__);

(statearr_67850[(1)] = (1));

return statearr_67850;
});
var frontend$extensions$zotero$handler$add_$_state_machine__41839__auto____1 = (function (state_67789){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67789);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67851){var ex__41842__auto__ = e67851;
var statearr_67852_68069 = state_67789;
(statearr_67852_68069[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67789[(4)]))){
var statearr_67853_68070 = state_67789;
(statearr_67853_68070[(1)] = cljs.core.first((state_67789[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68071 = state_67789;
state_67789 = G__68071;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_$_state_machine__41839__auto__ = function(state_67789){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_$_state_machine__41839__auto____1.call(this,state_67789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_$_state_machine__41839__auto____0;
frontend$extensions$zotero$handler$add_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$handler$add_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67854 = f__41862__auto__();
(statearr_67854[(6)] = c__41861__auto__);

return statearr_67854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.extensions.zotero.handler.handle_command_zotero = (function frontend$extensions$zotero$handler$handle_command_zotero(id,page_name){
frontend.state.set_editor_show_zotero_BANG_(false);

return frontend.handler.editor.insert_command_BANG_(id,["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name),"]]"].join(''),null,cljs.core.PersistentArrayMap.EMPTY);
});
frontend.extensions.zotero.handler.create_abstract_note_BANG_ = (function frontend$extensions$zotero$handler$create_abstract_note_BANG_(page_name,abstract_note){
if(clojure.string.blank_QMARK_(abstract_note)){
return null;
} else {
var block = frontend.handler.editor.api_insert_new_block_BANG_("[[Abstract]]",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_name], null));
return frontend.handler.editor.api_insert_new_block_BANG_(abstract_note,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));
}
});
frontend.extensions.zotero.handler.create_page = (function frontend$extensions$zotero$handler$create_page(page_name,properties){
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),false,new cljs.core.Keyword(null,"properties","properties",685819552),properties], null));
});
frontend.extensions.zotero.handler.create_zotero_page = (function frontend$extensions$zotero$handler$create_zotero_page(var_args){
var G__67856 = arguments.length;
switch (G__67856) {
case 1:
return frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$1 = (function (item){
return frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(item,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2 = (function (item,p__67857){
var map__67858 = p__67857;
var map__67858__$1 = cljs.core.__destructure_map(map__67858);
var block_dom_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67858__$1,new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027));
var insert_command_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67858__$1,new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),true);
var notification_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67858__$1,new cljs.core.Keyword(null,"notification?","notification?",1061685314),true);
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67903){
var state_val_67904 = (state_67903[(1)]);
if((state_val_67904 === (7))){
var inst_67878 = (state_67903[(2)]);
var state_67903__$1 = state_67903;
var statearr_67905_68073 = state_67903__$1;
(statearr_67905_68073[(2)] = inst_67878);

(statearr_67905_68073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (1))){
var inst_67862 = (state_67903[(7)]);
var inst_67861 = (state_67903[(8)]);
var inst_67860 = frontend.extensions.zotero.extractor.extract.cljs$core$IFn$_invoke$arity$1(item);
var inst_67861__$1 = cljs.core.__destructure_map(inst_67860);
var inst_67862__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67861__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var inst_67863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67861__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var inst_67864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67861__$1,new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968));
var inst_67865 = clojure.string.lower_case(inst_67862__$1);
var inst_67866 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_67865) : frontend.db.page_exists_QMARK_.call(null,inst_67865));
var state_67903__$1 = (function (){var statearr_67906 = state_67903;
(statearr_67906[(7)] = inst_67862__$1);

(statearr_67906[(9)] = inst_67863);

(statearr_67906[(10)] = inst_67864);

(statearr_67906[(8)] = inst_67861__$1);

return statearr_67906;
})();
if(cljs.core.truth_(inst_67866)){
var statearr_67907_68074 = state_67903__$1;
(statearr_67907_68074[(1)] = (2));

} else {
var statearr_67908_68075 = state_67903__$1;
(statearr_67908_68075[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (4))){
var inst_67862 = (state_67903[(7)]);
var inst_67864 = (state_67903[(10)]);
var inst_67882 = (state_67903[(2)]);
var inst_67883 = frontend.extensions.zotero.handler.create_abstract_note_BANG_(inst_67862,inst_67864);
var inst_67884 = frontend.extensions.zotero.handler.add(inst_67862,new cljs.core.Keyword(null,"attachments","attachments",-1535547830),item);
var state_67903__$1 = (function (){var statearr_67909 = state_67903;
(statearr_67909[(11)] = inst_67882);

(statearr_67909[(12)] = inst_67883);

return statearr_67909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67903__$1,(8),inst_67884);
} else {
if((state_val_67904 === (15))){
var inst_67901 = (state_67903[(2)]);
var state_67903__$1 = state_67903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67903__$1,inst_67901);
} else {
if((state_val_67904 === (13))){
var inst_67862 = (state_67903[(7)]);
var inst_67897 = ["Successfully added zotero item to page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_67862)].join('');
var inst_67898 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_67897,new cljs.core.Keyword(null,"success","success",1890645906));
var state_67903__$1 = state_67903;
var statearr_67910_68076 = state_67903__$1;
(statearr_67910_68076[(2)] = inst_67898);

(statearr_67910_68076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (6))){
var inst_67862 = (state_67903[(7)]);
var inst_67863 = (state_67903[(9)]);
var inst_67873 = [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"properties","properties",685819552)];
var inst_67874 = [inst_67862,inst_67863];
var inst_67875 = cljs.core.PersistentHashMap.fromArrays(inst_67873,inst_67874);
var inst_67876 = frontend.handler.editor.api_insert_new_block_BANG_("",inst_67875);
var state_67903__$1 = state_67903;
var statearr_67911_68077 = state_67903__$1;
(statearr_67911_68077[(2)] = inst_67876);

(statearr_67911_68077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (3))){
var inst_67862 = (state_67903[(7)]);
var inst_67863 = (state_67903[(9)]);
var inst_67880 = frontend.extensions.zotero.handler.create_page(inst_67862,inst_67863);
var state_67903__$1 = state_67903;
var statearr_67912_68078 = state_67903__$1;
(statearr_67912_68078[(2)] = inst_67880);

(statearr_67912_68078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (12))){
var inst_67895 = (state_67903[(2)]);
var state_67903__$1 = (function (){var statearr_67913 = state_67903;
(statearr_67913[(13)] = inst_67895);

return statearr_67913;
})();
if(cljs.core.truth_(notification_QMARK_)){
var statearr_67914_68079 = state_67903__$1;
(statearr_67914_68079[(1)] = (13));

} else {
var statearr_67915_68080 = state_67903__$1;
(statearr_67915_68080[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (2))){
var inst_67868 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409));
var state_67903__$1 = state_67903;
if(cljs.core.truth_(inst_67868)){
var statearr_67916_68081 = state_67903__$1;
(statearr_67916_68081[(1)] = (5));

} else {
var statearr_67917_68082 = state_67903__$1;
(statearr_67917_68082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (11))){
var state_67903__$1 = state_67903;
var statearr_67918_68083 = state_67903__$1;
(statearr_67918_68083[(2)] = null);

(statearr_67918_68083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (9))){
var inst_67889 = (state_67903[(2)]);
var state_67903__$1 = (function (){var statearr_67919 = state_67903;
(statearr_67919[(14)] = inst_67889);

return statearr_67919;
})();
if(cljs.core.truth_(insert_command_QMARK_)){
var statearr_67920_68084 = state_67903__$1;
(statearr_67920_68084[(1)] = (10));

} else {
var statearr_67921_68085 = state_67903__$1;
(statearr_67921_68085[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (5))){
var inst_67862 = (state_67903[(7)]);
var inst_67863 = (state_67903[(9)]);
var inst_67864 = (state_67903[(10)]);
var inst_67861 = (state_67903[(8)]);
var inst_67870 = (function (){var map__67859 = inst_67861;
var page_name = inst_67862;
var properties = inst_67863;
var abstract_note = inst_67864;
return (function (){
return frontend.extensions.zotero.handler.create_page(page_name,properties);
});
})();
var inst_67871 = frontend.handler.page.delete_BANG_(inst_67862,inst_67870);
var state_67903__$1 = state_67903;
var statearr_67922_68086 = state_67903__$1;
(statearr_67922_68086[(2)] = inst_67871);

(statearr_67922_68086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (14))){
var state_67903__$1 = state_67903;
var statearr_67923_68087 = state_67903__$1;
(statearr_67923_68087[(2)] = null);

(statearr_67923_68087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (10))){
var inst_67862 = (state_67903[(7)]);
var inst_67891 = frontend.extensions.zotero.handler.handle_command_zotero(block_dom_id,inst_67862);
var inst_67892 = frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
var state_67903__$1 = (function (){var statearr_67924 = state_67903;
(statearr_67924[(15)] = inst_67891);

return statearr_67924;
})();
var statearr_67925_68088 = state_67903__$1;
(statearr_67925_68088[(2)] = inst_67892);

(statearr_67925_68088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67904 === (8))){
var inst_67862 = (state_67903[(7)]);
var inst_67886 = (state_67903[(2)]);
var inst_67887 = frontend.extensions.zotero.handler.add(inst_67862,new cljs.core.Keyword(null,"notes","notes",-1039600523),item);
var state_67903__$1 = (function (){var statearr_67926 = state_67903;
(statearr_67926[(16)] = inst_67886);

return statearr_67926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67903__$1,(9),inst_67887);
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
}
}
}
});
return (function() {
var frontend$extensions$zotero$handler$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$handler$state_machine__41839__auto____0 = (function (){
var statearr_67927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67927[(0)] = frontend$extensions$zotero$handler$state_machine__41839__auto__);

(statearr_67927[(1)] = (1));

return statearr_67927;
});
var frontend$extensions$zotero$handler$state_machine__41839__auto____1 = (function (state_67903){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67903);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67928){var ex__41842__auto__ = e67928;
var statearr_67929_68089 = state_67903;
(statearr_67929_68089[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67903[(4)]))){
var statearr_67930_68090 = state_67903;
(statearr_67930_68090[(1)] = cljs.core.first((state_67903[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68091 = state_67903;
state_67903 = G__68091;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$state_machine__41839__auto__ = function(state_67903){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$state_machine__41839__auto____1.call(this,state_67903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$state_machine__41839__auto____0;
frontend$extensions$zotero$handler$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$state_machine__41839__auto____1;
return frontend$extensions$zotero$handler$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67931 = f__41862__auto__();
(statearr_67931[(6)] = c__41861__auto__);

return statearr_67931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.extensions.zotero.handler.create_zotero_page.cljs$lang$maxFixedArity = 2);

frontend.extensions.zotero.handler.add_all = (function frontend$extensions$zotero$handler$add_all(progress){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67989){
var state_val_67990 = (state_67989[(1)]);
if((state_val_67990 === (7))){
var inst_67985 = (state_67989[(2)]);
var state_67989__$1 = state_67989;
var statearr_67991_68092 = state_67989__$1;
(statearr_67991_68092[(2)] = inst_67985);

(statearr_67991_68092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (1))){
var inst_67932 = frontend.extensions.zotero.api.all_top_items();
var state_67989__$1 = state_67989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67989__$1,(2),inst_67932);
} else {
if((state_val_67990 === (4))){
var inst_67987 = (state_67989[(2)]);
var state_67989__$1 = state_67989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67989__$1,inst_67987);
} else {
if((state_val_67990 === (15))){
var inst_67960 = (state_67989[(7)]);
var inst_67975 = (state_67989[(2)]);
var inst_67976 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_67977 = cljs.core.next(inst_67960);
var inst_67941 = inst_67977;
var inst_67942 = null;
var inst_67943 = (0);
var inst_67944 = (0);
var state_67989__$1 = (function (){var statearr_67992 = state_67989;
(statearr_67992[(8)] = inst_67941);

(statearr_67992[(9)] = inst_67943);

(statearr_67992[(10)] = inst_67942);

(statearr_67992[(11)] = inst_67976);

(statearr_67992[(12)] = inst_67975);

(statearr_67992[(13)] = inst_67944);

return statearr_67992;
})();
var statearr_67993_68093 = state_67989__$1;
(statearr_67993_68093[(2)] = null);

(statearr_67993_68093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (13))){
var inst_67960 = (state_67989[(7)]);
var inst_67969 = cljs.core.first(inst_67960);
var inst_67970 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_67971 = [false,false];
var inst_67972 = cljs.core.PersistentHashMap.fromArrays(inst_67970,inst_67971);
var inst_67973 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_67969,inst_67972);
var state_67989__$1 = state_67989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67989__$1,(15),inst_67973);
} else {
if((state_val_67990 === (6))){
var inst_67941 = (state_67989[(8)]);
var inst_67960 = (state_67989[(7)]);
var inst_67960__$1 = cljs.core.seq(inst_67941);
var state_67989__$1 = (function (){var statearr_67994 = state_67989;
(statearr_67994[(7)] = inst_67960__$1);

return statearr_67994;
})();
if(inst_67960__$1){
var statearr_67995_68094 = state_67989__$1;
(statearr_67995_68094[(1)] = (9));

} else {
var statearr_67996_68095 = state_67989__$1;
(statearr_67996_68095[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (3))){
var inst_67943 = (state_67989[(9)]);
var inst_67944 = (state_67989[(13)]);
var inst_67946 = (inst_67944 < inst_67943);
var inst_67947 = inst_67946;
var state_67989__$1 = state_67989;
if(cljs.core.truth_(inst_67947)){
var statearr_67997_68096 = state_67989__$1;
(statearr_67997_68096[(1)] = (5));

} else {
var statearr_67998_68097 = state_67989__$1;
(statearr_67998_68097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (12))){
var inst_67960 = (state_67989[(7)]);
var inst_67964 = cljs.core.chunk_first(inst_67960);
var inst_67965 = cljs.core.chunk_rest(inst_67960);
var inst_67966 = cljs.core.count(inst_67964);
var inst_67941 = inst_67965;
var inst_67942 = inst_67964;
var inst_67943 = inst_67966;
var inst_67944 = (0);
var state_67989__$1 = (function (){var statearr_67999 = state_67989;
(statearr_67999[(8)] = inst_67941);

(statearr_67999[(9)] = inst_67943);

(statearr_67999[(10)] = inst_67942);

(statearr_67999[(13)] = inst_67944);

return statearr_67999;
})();
var statearr_68000_68098 = state_67989__$1;
(statearr_68000_68098[(2)] = null);

(statearr_68000_68098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (2))){
var inst_67934 = (state_67989[(2)]);
var inst_67935 = cljs.core.reset_BANG_(progress,(30));
var inst_67940 = cljs.core.seq(inst_67934);
var inst_67941 = inst_67940;
var inst_67942 = null;
var inst_67943 = (0);
var inst_67944 = (0);
var state_67989__$1 = (function (){var statearr_68001 = state_67989;
(statearr_68001[(8)] = inst_67941);

(statearr_68001[(9)] = inst_67943);

(statearr_68001[(10)] = inst_67942);

(statearr_68001[(14)] = inst_67935);

(statearr_68001[(13)] = inst_67944);

return statearr_68001;
})();
var statearr_68002_68099 = state_67989__$1;
(statearr_68002_68099[(2)] = null);

(statearr_68002_68099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (11))){
var inst_67983 = (state_67989[(2)]);
var state_67989__$1 = state_67989;
var statearr_68003_68100 = state_67989__$1;
(statearr_68003_68100[(2)] = inst_67983);

(statearr_68003_68100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (9))){
var inst_67960 = (state_67989[(7)]);
var inst_67962 = cljs.core.chunked_seq_QMARK_(inst_67960);
var state_67989__$1 = state_67989;
if(inst_67962){
var statearr_68004_68101 = state_67989__$1;
(statearr_68004_68101[(1)] = (12));

} else {
var statearr_68005_68102 = state_67989__$1;
(statearr_68005_68102[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (5))){
var inst_67942 = (state_67989[(10)]);
var inst_67944 = (state_67989[(13)]);
var inst_67949 = cljs.core._nth(inst_67942,inst_67944);
var inst_67950 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_67951 = [false,false];
var inst_67952 = cljs.core.PersistentHashMap.fromArrays(inst_67950,inst_67951);
var inst_67953 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_67949,inst_67952);
var state_67989__$1 = state_67989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67989__$1,(8),inst_67953);
} else {
if((state_val_67990 === (14))){
var inst_67980 = (state_67989[(2)]);
var state_67989__$1 = state_67989;
var statearr_68009_68103 = state_67989__$1;
(statearr_68009_68103[(2)] = inst_67980);

(statearr_68009_68103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (10))){
var state_67989__$1 = state_67989;
var statearr_68010_68104 = state_67989__$1;
(statearr_68010_68104[(2)] = null);

(statearr_68010_68104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (8))){
var inst_67941 = (state_67989[(8)]);
var inst_67943 = (state_67989[(9)]);
var inst_67942 = (state_67989[(10)]);
var inst_67944 = (state_67989[(13)]);
var inst_67955 = (state_67989[(2)]);
var inst_67956 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_67957 = (inst_67944 + (1));
var tmp68006 = inst_67941;
var tmp68007 = inst_67943;
var tmp68008 = inst_67942;
var inst_67941__$1 = tmp68006;
var inst_67942__$1 = tmp68008;
var inst_67943__$1 = tmp68007;
var inst_67944__$1 = inst_67957;
var state_67989__$1 = (function (){var statearr_68011 = state_67989;
(statearr_68011[(8)] = inst_67941__$1);

(statearr_68011[(9)] = inst_67943__$1);

(statearr_68011[(10)] = inst_67942__$1);

(statearr_68011[(15)] = inst_67955);

(statearr_68011[(13)] = inst_67944__$1);

(statearr_68011[(16)] = inst_67956);

return statearr_68011;
})();
var statearr_68012_68106 = state_67989__$1;
(statearr_68012_68106[(2)] = null);

(statearr_68012_68106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto__ = null;
var frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto____0 = (function (){
var statearr_68013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68013[(0)] = frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto__);

(statearr_68013[(1)] = (1));

return statearr_68013;
});
var frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto____1 = (function (state_67989){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67989);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68014){var ex__41842__auto__ = e68014;
var statearr_68015_68108 = state_67989;
(statearr_68015_68108[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67989[(4)]))){
var statearr_68016_68109 = state_67989;
(statearr_68016_68109[(1)] = cljs.core.first((state_67989[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68110 = state_67989;
state_67989 = G__68110;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto__ = function(state_67989){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto____1.call(this,state_67989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto____0;
frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68017 = f__41862__auto__();
(statearr_68017[(6)] = c__41861__auto__);

return statearr_68017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});

//# sourceMappingURL=frontend.extensions.zotero.handler.js.map
